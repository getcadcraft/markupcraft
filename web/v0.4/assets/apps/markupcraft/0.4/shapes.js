/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shapes.js — what a markup looks like, once, for the screen and for the saved PDF. No DOM.
 *
 * `shapes(m, env)` turns a markup into a display list in PDF user space:
 *   { k: 'path', d: [['M',x,y] | ['L',x,y] | ['C',x1,y1,x2,y2,x,y] | ['Z']], stroke, fill, w, alpha, falpha,
 *     cap: 'round'|'butt', join: 'round'|'miter', blend: 'multiply'|null }
 *   { k: 'text', lines: [...], box: [x0,y0,x1,y1], size, bold, color, rot, align, valign, pad, lh }
 * Colors are '#rrggbb', or 'paper' (the sheet's own background: white in a PDF, the theme's sheet on
 * screen). view.js paints the list on a canvas; pdf-write.js writes the same list as an appearance
 * stream, so a saved markup looks the way it did on screen.
 * `placeText(item)` gives each line's baseline origin in user space (text always reads upright for
 * the page's rotation); `flatten`, `listBounds` and `hitList` serve selection and hit-testing.
 */

import { wrapText, textWidth } from './font.js';
import { measure, measureArea } from './units.js';
import { t, locale } from './i18n.js';
import { arcThrough, arcBeziers, angleAt, angleArc, formatAngle } from './arcs.js';

const K = 0.5522847498;   // circle → cubic Bézier
export const NOTE_SIZE = 18;
export const LINE_H = 1.2;

/** The reading frame for a page rotation: u = reading direction, v = "down" on screen (user space). */
export function frame(rot, box) {
  const [x0, y0, x1, y1] = box;
  switch (((rot % 360) + 360) % 360) {
    case 90: return { o: [x0, y0], u: [0, 1], v: [1, 0], W: y1 - y0, H: x1 - x0 };
    case 180: return { o: [x1, y0], u: [-1, 0], v: [0, 1], W: x1 - x0, H: y1 - y0 };
    case 270: return { o: [x1, y1], u: [0, -1], v: [-1, 0], W: y1 - y0, H: x1 - x0 };
    default: return { o: [x0, y1], u: [1, 0], v: [0, -1], W: x1 - x0, H: y1 - y0 };
  }
}

/** Baseline origins of a text item's lines: [{x, y, s}] plus the angle (degrees, CCW in user space). */
export function placeText(t) {
  const f = frame(t.rot || 0, t.box);
  const lh = t.size * (t.lh || LINE_H);
  const n = t.lines.length;
  const blockH = t.size + (n - 1) * lh;
  const top = t.valign === 'middle' ? (f.H - blockH) / 2 : t.pad;
  const out = [];
  t.lines.forEach((s, i) => {
    const w = textWidth(s, t.size, t.bold);
    const du = t.align === 'center' ? (f.W - w) / 2 : t.align === 'right' ? f.W - t.pad - w : t.pad;
    const dv = top + t.size * 0.8 + i * lh;
    out.push({ x: f.o[0] + f.u[0] * du + f.v[0] * dv, y: f.o[1] + f.u[1] * du + f.v[1] * dv, s });
  });
  return { lines: out, angle: ((t.rot || 0) % 360 + 360) % 360 };
}

// ---- path builders ----
const P = {
  poly(pts, closed) {
    const d = pts.map((p, i) => [i ? 'L' : 'M', p[0], p[1]]);
    if (closed && pts.length > 2) d.push(['Z']);
    return d;
  },
  rect([x0, y0, x1, y1]) { return [['M', x0, y0], ['L', x1, y0], ['L', x1, y1], ['L', x0, y1], ['Z']]; },
  roundRect([x0, y0, x1, y1], r) {
    r = Math.max(0, Math.min(r, (x1 - x0) / 2, (y1 - y0) / 2));
    if (!r) return P.rect([x0, y0, x1, y1]);
    const k = r * (1 - K);
    return [['M', x0 + r, y0], ['L', x1 - r, y0], ['C', x1 - k, y0, x1, y0 + k, x1, y0 + r], ['L', x1, y1 - r],
      ['C', x1, y1 - k, x1 - k, y1, x1 - r, y1], ['L', x0 + r, y1], ['C', x0 + k, y1, x0, y1 - k, x0, y1 - r],
      ['L', x0, y0 + r], ['C', x0, y0 + k, x0 + k, y0, x0 + r, y0], ['Z']];
  },
  ellipse([x0, y0, x1, y1]) {
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, rx = (x1 - x0) / 2, ry = (y1 - y0) / 2;
    const kx = rx * K, ky = ry * K;
    return [['M', cx + rx, cy], ['C', cx + rx, cy + ky, cx + kx, cy + ry, cx, cy + ry], ['C', cx - kx, cy + ry, cx - rx, cy + ky, cx - rx, cy],
      ['C', cx - rx, cy - ky, cx - kx, cy - ry, cx, cy - ry], ['C', cx + kx, cy - ry, cx + rx, cy - ky, cx + rx, cy], ['Z']];
  },
  circle(cx, cy, r) { return P.ellipse([cx - r, cy - r, cx + r, cy + r]); },
};
export const paths = P;

/** Signed area (y up: > 0 = counter-clockwise). */
export function area(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p[0] * q[1] - q[0] * p[1]; }
  return a / 2;
}

/**
 * A revision cloud round a closed outline: each edge split into scallops of about `arc` points,
 * each a bump bulging outward (one cubic Bézier, close to a half circle).
 */
export function cloudPath(pts, arc) {
  const ring = pts.filter((p, i) => i === 0 || Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) > 1e-6);
  if (ring.length > 2 && Math.hypot(ring[0][0] - ring.at(-1)[0], ring[0][1] - ring.at(-1)[1]) < 1e-6) ring.pop();
  if (ring.length < 2) return [];
  const ccw = area(ring) >= 0;
  const d = [['M', ring[0][0], ring[0][1]]];
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len < 1e-6) continue;
    const n = Math.max(1, Math.round(len / arc));
    const ux = (b[0] - a[0]) / len, uy = (b[1] - a[1]) / len;
    // outward normal: right of the edge for a CCW ring, left for CW
    const nx = ccw ? uy : -uy, ny = ccw ? -ux : ux;
    const step = len / n, h = step * 0.6667;
    for (let j = 0; j < n; j++) {
      const sx = a[0] + ux * step * j, sy = a[1] + uy * step * j;
      const ex = sx + ux * step, ey = sy + uy * step;
      d.push(['C', sx + nx * h - ux * step * 0.1, sy + ny * h - uy * step * 0.1, ex + nx * h + ux * step * 0.1, ey + ny * h + uy * step * 0.1, ex, ey]);
    }
  }
  d.push(['Z']);
  return d;
}

/** A filled arrowhead with its tip at `tip`, pointing away from `from`. Returns {head, base}. */
export function arrowHead(from, tip, w) {
  const len = Math.hypot(tip[0] - from[0], tip[1] - from[1]) || 1;
  const ux = (tip[0] - from[0]) / len, uy = (tip[1] - from[1]) / len;
  const hl = Math.min(len * 0.6, Math.max(7, w * 4 + 4)), hw = hl * 0.38;
  const bx = tip[0] - ux * hl, by = tip[1] - uy * hl;
  return {
    head: [['M', tip[0], tip[1]], ['L', bx - uy * hw, by + ux * hw], ['L', bx + uy * hw, by - ux * hw], ['Z']],
    base: [bx + ux * hl * 0.15, by + uy * hl * 0.15],
  };
}

/** Where a callout's leader meets its box: the middle of the box side nearest the knee. */
export function calloutAttach(rect, knee) {
  const [x0, y0, x1, y1] = rect;
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const cands = [[x0, cy], [x1, cy], [cx, y0], [cx, y1]];
  let best = cands[0], bd = Infinity;
  for (const c of cands) { const dd = Math.hypot(c[0] - knee[0], c[1] - knee[1]); if (dd < bd) { bd = dd; best = c; } }
  return best;
}

const stroke = (d, s, extra = {}) => ({ k: 'path', d, stroke: s.color, fill: null, w: Math.max(0.1, s.width), alpha: s.opacity ?? 1, falpha: 1, cap: 'round', join: 'round', blend: null, ...extra });

function fmtDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(+d)) return '';
  return d.toLocaleDateString(locale(), { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

/** The second line of a stamp: who stamped it and when. */
export function stampSub(m) {
  const date = fmtDate(m.created);
  return m.author ? (date ? t('stamp.by_date', { author: m.author, date }) : t('stamp.by', { author: m.author })) : date;
}

/**
 * Display list of one markup. env: { cal (sheet calibration or null), badge (punch badge radius, pt) }.
 */
export function shapes(m, env = {}) {
  const s = m.style;
  const out = [];
  const pts = m.pts || [];
  const fillItem = (d) => (s.fill ? { k: 'path', d, stroke: null, fill: s.fill, w: 0, alpha: 1, falpha: (s.fillOpacity ?? 1) * (s.opacity ?? 1), cap: 'butt', join: 'miter', blend: null } : null);
  const textItem = (box, lines, size, extra = {}) => ({ k: 'text', lines, box, size, bold: false, color: s.color, rot: m.rot || 0, align: 'left', valign: 'top', pad: 4, lh: LINE_H, alpha: s.opacity ?? 1, ...extra });
  const wrapIn = (box, text, size, pad) => {
    const f = frame(m.rot || 0, box);
    return wrapText(text, size, f.W - 2 * pad);
  };

  switch (m.type) {
    case 'pen':
      if (pts.length) out.push(stroke(P.poly(pts.length === 1 ? [pts[0], pts[0]] : pts, false), s));
      break;
    case 'highlight':
      if (pts.length) out.push(stroke(P.poly(pts.length === 1 ? [pts[0], pts[0]] : pts, false), s, { blend: 'multiply', cap: 'butt' }));
      break;
    case 'line': case 'polyline':
      out.push(stroke(P.poly(pts, false), s));
      break;
    case 'legend': {
      // a legend (0.4 K21): a box, its title, then a swatch, a name and a count per kind of markup
      if (!m.rect) break;
      const rows = env.legend || [];
      const d = P.rect(m.rect);
      out.push({ k: 'path', d, stroke: s.width > 0 ? s.color : null, fill: s.fill || '#ffffff', w: Math.max(0.1, s.width), alpha: s.opacity ?? 1, falpha: s.fillOpacity ?? 0.9, cap: 'butt', join: 'miter', blend: null });
      const f = frame(m.rot || 0, m.rect);
      const size = s.fontSize, lh = size * 1.55, pad = size * 0.8;
      const at = (x, y) => [f.o[0] + f.u[0] * x + f.v[0] * y, f.o[1] + f.u[1] * x + f.v[1] * y];   // reading frame: x right, y down
      const box = (x0, y0, x1, y1) => { const a = at(x0, y0), b = at(x1, y1); return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])]; };
      out.push(textItem(box(pad, pad * 0.6, f.W - pad, pad * 0.6 + size * 1.4), [m.label || t('legend.title')], size * 1.15, { bold: true, align: 'left', valign: 'top', pad: 0 }));
      const fit = Math.max(0, Math.floor((f.H - pad * 1.6 - size * 1.6) / lh));
      const shown = rows.length > fit ? rows.slice(0, Math.max(0, fit - 1)) : rows;
      shown.forEach((r, i) => {
        const y = pad * 0.6 + size * 1.8 + i * lh;
        const sw = box(pad, y + lh * 0.2, pad + size * 1.6, y + lh * 0.75);
        out.push({ k: 'path', d: P.rect(sw), stroke: r.color, fill: r.color, w: 0.6, alpha: 1, falpha: 0.35, cap: 'butt', join: 'miter', blend: null });
        out.push({ ...textItem(box(pad + size * 2.2, y, f.W - pad - size * 3, y + lh), [r.label], size, { align: 'left', valign: 'middle', pad: 0 }), color: s.color });
        out.push({ ...textItem(box(f.W - pad - size * 3, y, f.W - pad, y + lh), [String(r.n)], size, { bold: true, align: 'right', valign: 'middle', pad: 0 }), color: s.color });
      });
      if (shown.length < rows.length) out.push(textItem(box(pad, pad * 0.6 + size * 1.8 + shown.length * lh, f.W - pad, pad * 0.6 + size * 1.8 + (shown.length + 1) * lh), [t('legend.more', { n: rows.length - shown.length })], size, { align: 'left', valign: 'middle', pad: 0 }));
      if (!rows.length) out.push(textItem(box(pad, pad * 0.6 + size * 1.8, f.W - pad, pad * 0.6 + size * 1.8 + lh), [t('legend.empty')], size, { align: 'left', valign: 'middle', pad: 0 }));
      break;
    }
    case 'space': {
      // a named zone (0.4 K17): a light fill, a dashed outline and its name in the middle
      if (pts.length < 2) break;
      const d = P.poly(pts, true);
      const f = fillItem(d); if (f) out.push({ ...f, nopick: true });   // picked by its outline: clicks inside reach the markups in it
      out.push(stroke(d, s, { join: 'miter', dash: [6, 4] }));
      if (pts.length >= 3 && m.label) out.push(...labelItems(centroid(pts), [m.label], s.fontSize, m.rot || 0, s.color, s.opacity ?? 1));
      break;
    }
    case 'image': {
      // a picture or a signature (0.4 K5): drawn upright in the page's reading frame; an optional frame round it
      if (!m.rect) break;
      out.push({ k: 'image', box: m.rect, src: m.img, rot: m.rot || 0, alpha: s.opacity ?? 1 });
      if (s.width > 0) out.push(stroke(P.rect(m.rect), s, { join: 'miter', cap: 'butt' }));
      break;
    }
    case 'arc': {
      // start, a point on the arc, end (three points in a line draw straight)
      const arc = pts.length === 3 ? arcThrough(pts[0], pts[1], pts[2]) : null;
      if (!arc) { out.push(stroke(P.poly(pts.length === 3 ? [pts[0], pts[2]] : pts, false), s)); break; }
      const bz = arcBeziers(arc);
      const d = [['M', bz[0][0][0], bz[0][0][1]], ...bz.map(([, c1, c2, p3]) => ['C', c1[0], c1[1], c2[0], c2[1], p3[0], p3[1]])];
      out.push(stroke(d, s));
      break;
    }
    case 'angle': {
      if (pts.length < 3) { out.push(stroke(P.poly(pts, false), s)); break; }
      const [a, v, b] = pts;
      out.push(stroke(P.poly([a, v, b], false), s, { join: 'miter' }));
      const r = Math.max(6, Math.min(36, Math.hypot(a[0] - v[0], a[1] - v[1]) * 0.3, Math.hypot(b[0] - v[0], b[1] - v[1]) * 0.3));
      const ind = angleArc(a, v, b, r);
      if (Math.abs(ind.sweep) > 1e-6) {
        const bz = arcBeziers(ind);
        out.push(stroke([['M', bz[0][0][0], bz[0][0][1]], ...bz.map(([, c1, c2, p3]) => ['C', c1[0], c1[1], c2[0], c2[1], p3[0], p3[1]])], { ...s, width: Math.max(0.5, s.width * 0.75) }));
      }
      const label = formatAngle(angleAt(a, v, b));
      const mid = ind.a0 + ind.sweep / 2, rr = r + s.fontSize * 1.2;
      const cx = v[0] + Math.cos(mid) * rr, cy = v[1] + Math.sin(mid) * rr;
      const size = s.fontSize;
      const w = textWidth(label, size) + 6, h = size * 1.3;
      const rot = ((m.rot || 0) % 180 + 180) % 180;
      const box = rot === 90 ? [cx - h / 2, cy - w / 2, cx + h / 2, cy + w / 2] : [cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2];
      out.push({ k: 'path', d: P.rect(box), stroke: null, fill: 'paper', w: 0, alpha: 1, falpha: 1, cap: 'butt', join: 'miter', blend: null });
      out.push(textItem(box, [label], size, { align: 'center', valign: 'middle', pad: 0 }));
      break;
    }
    case 'arrow': {
      if (pts.length < 2) break;
      const { head, base } = arrowHead(pts[0], pts[1], s.width);
      out.push(stroke(P.poly([pts[0], base], false), s, { cap: 'butt' }));
      out.push({ k: 'path', d: head, stroke: s.color, fill: s.color, w: Math.max(0.1, s.width * 0.5), alpha: s.opacity ?? 1, falpha: s.opacity ?? 1, cap: 'butt', join: 'miter', blend: null });
      break;
    }
    case 'rect': case 'ellipse': {
      const d = m.type === 'rect' ? P.rect(m.rect) : P.ellipse(m.rect);
      const f = fillItem(d); if (f) out.push(f);
      if (s.width > 0) out.push(stroke(d, s, { join: 'miter', cap: 'butt' }));
      break;
    }
    case 'polygon': {
      const d = P.poly(pts, true);
      const f = fillItem(d); if (f) out.push(f);
      out.push(stroke(d, s));
      break;
    }
    case 'cloud': case 'cloudrect': {
      const ring = m.type === 'cloudrect' ? [[m.rect[0], m.rect[1]], [m.rect[2], m.rect[1]], [m.rect[2], m.rect[3]], [m.rect[0], m.rect[3]]] : pts;
      const arcLen = Math.max(4, s.arc || s.width * 6 + 8);
      const d = cloudPath(ring, arcLen);
      if (!d.length) break;
      const f = fillItem(d); if (f) out.push(f);
      out.push(stroke(d, s));
      break;
    }
    case 'callout': {
      if (!m.rect) break;
      const tip = pts[0], knee = pts[1] || pts[0];
      if (tip) {
        const at = calloutAttach(m.rect, knee);
        const { head, base } = arrowHead(knee, tip, s.width);
        const lead = Math.hypot(knee[0] - tip[0], knee[1] - tip[1]) > 1e-6 ? [base, knee, at] : [base, at];
        out.push(stroke(P.poly(lead, false), s, { join: 'miter' }));
        out.push({ k: 'path', d: head, stroke: s.color, fill: s.color, w: Math.max(0.1, s.width * 0.5), alpha: s.opacity ?? 1, falpha: s.opacity ?? 1, cap: 'butt', join: 'miter', blend: null });
      }
      const box = P.rect(m.rect);
      out.push({ k: 'path', d: box, stroke: null, fill: s.fill || 'paper', w: 0, alpha: 1, falpha: s.fill ? (s.fillOpacity ?? 1) * (s.opacity ?? 1) : 0.9, cap: 'butt', join: 'miter', blend: null });
      if (s.width > 0) out.push(stroke(box, s, { join: 'miter' }));
      out.push(textItem(m.rect, wrapIn(m.rect, m.text, s.fontSize, 4), s.fontSize));
      break;
    }
    case 'text': {
      if (!m.rect) break;
      const d = P.rect(m.rect);
      const f = fillItem(d); if (f) out.push(f);
      if (s.width > 0) out.push(stroke(d, s, { join: 'miter' }));
      out.push(textItem(m.rect, wrapIn(m.rect, m.text, s.fontSize, 3), s.fontSize, { pad: 3 }));
      break;
    }
    case 'note': {
      const [x, y] = pts[0] || [0, 0];
      const r = [x, y - NOTE_SIZE, x + NOTE_SIZE, y];
      const fold = NOTE_SIZE * 0.3;
      out.push({ k: 'path', d: [['M', r[0], r[1]], ['L', r[2] - fold, r[1]], ['L', r[2], r[1] + fold], ['L', r[2], r[3]], ['L', r[0], r[3]], ['Z']], stroke: '#5c4a00', fill: s.color, w: 0.75, alpha: 1, falpha: 1, cap: 'butt', join: 'miter', blend: null });
      const lines = [];
      for (let i = 0; i < 3; i++) { const yy = r[3] - NOTE_SIZE * (0.3 + i * 0.2); lines.push(['M', r[0] + NOTE_SIZE * 0.2, yy], ['L', r[2] - NOTE_SIZE * (i === 2 ? 0.45 : 0.2), yy]); }
      out.push({ k: 'path', d: lines, stroke: '#5c4a00', fill: null, w: 0.9, alpha: 1, falpha: 1, cap: 'butt', join: 'miter', blend: null });
      break;
    }
    case 'stamp': {
      if (!m.rect) break;
      const [x0, y0, x1, y1] = m.rect;
      const f = frame(m.rot || 0, m.rect);
      const r = Math.min(f.W, f.H) * 0.12;
      out.push({ k: 'path', d: P.roundRect(m.rect, r), stroke: null, fill: 'paper', w: 0, alpha: 1, falpha: 0.85 * (s.opacity ?? 1), cap: 'butt', join: 'miter', blend: null });
      out.push(stroke(P.roundRect(m.rect, r), s, { join: 'miter' }));
      const ins = Math.min(f.W, f.H) * 0.07 + s.width;
      if (x1 - x0 > ins * 4 && y1 - y0 > ins * 4) out.push(stroke(P.roundRect([x0 + ins, y0 + ins, x1 - ins, y1 - ins], Math.max(0, r - ins)), { ...s, width: Math.max(0.5, s.width * 0.4) }, { join: 'miter' }));
      const label = (m.label || 'Stamp').toUpperCase();
      const sub = stampSub(m);
      const pad = ins + f.H * 0.06;
      const avail = f.W - 2 * pad;
      const big = Math.max(2, Math.min(f.H * (sub ? 0.38 : 0.55), avail / Math.max(1e-6, textWidth(label, 1, true))));
      const small = sub ? Math.max(2, Math.min(f.H * 0.17, avail / Math.max(1e-6, textWidth(sub, 1, false)))) : 0;
      if (sub) {
        // two lines laid out by hand inside the frame: label on top, author/date under it
        const gap = f.H * 0.06;
        const total = big + gap + small;
        const topPad = (f.H - total) / 2 - big * 0.1;
        out.push(textItem(m.rect, [label], big, { bold: true, align: 'center', valign: 'top', pad: topPad }));
        out.push(textItem(m.rect, [sub], small, { align: 'center', valign: 'top', pad: topPad + big + gap - small * 0.05 }));
      } else {
        out.push(textItem(m.rect, [label], big, { bold: true, align: 'center', valign: 'middle', pad }));
      }
      break;
    }
    case 'area': {
      if (pts.length < 2) break;
      // the outline and its cut-outs (0.4 K8) in one path, filled even-odd so the cut-outs stay open
      const d = [...P.poly(pts, true), ...(m.holes || []).flatMap((h) => P.poly(h, true))];
      const f = fillItem(d); if (f) out.push({ ...f, rule: 'evenodd' });
      out.push(stroke(d, s, { join: 'miter' }));
      if (pts.length < 3) break;
      const v = measureArea(pts, env.cal, m.holes);
      const lines = env.cal ? [v.area, t('area.perimeter', { v: v.perimeter })] : [m.text || t('status.scale.none')];
      const c = centroid(pts);
      out.push(...labelItems(c, lines, s.fontSize, m.rot || 0, s.color, s.opacity ?? 1));
      break;
    }
    case 'count': {
      const r = Math.max(3, s.fontSize * 0.8);
      pts.forEach((p, i) => {
        out.push({ k: 'path', d: P.circle(p[0], p[1], r), stroke: '#ffffff', fill: s.color, w: Math.max(0.5, r * 0.14), alpha: s.opacity ?? 1, falpha: s.opacity ?? 1, cap: 'butt', join: 'miter', blend: null });
        const label = String(i + 1);
        const size = Math.min(r * 1.15, (r * 1.55) / Math.max(1e-6, textWidth(label, 1, true)));
        out.push({ k: 'text', lines: [label], box: [p[0] - r, p[1] - r, p[0] + r, p[1] + r], size, bold: true, color: '#ffffff', rot: m.rot || 0, align: 'center', valign: 'middle', pad: 0, lh: LINE_H, alpha: s.opacity ?? 1 });
      });
      if (pts.length) {
        // the group's running total, tagged beside its first mark
        const f = frame(m.rot || 0, [0, 0, 1, 1]);
        const tag = t('count.tag', { group: m.label || t('count.default'), n: pts.length });
        const off = r * 1.4 + (textWidth(tag, s.fontSize) + 6) / 2;
        const c = [pts[0][0] + f.u[0] * off - f.v[0] * r * 1.4, pts[0][1] + f.u[1] * off - f.v[1] * r * 1.4];
        out.push(...labelItems(c, [tag], s.fontSize, m.rot || 0, s.color, s.opacity ?? 1));
      }
      break;
    }
    case 'measure': {
      if (pts.length < 2) break;
      const [a, b] = pts;
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const ux = len ? (b[0] - a[0]) / len : 1, uy = len ? (b[1] - a[1]) / len : 0;
      const tk = Math.max(4, s.width * 3 + 3);
      const d = [['M', a[0], a[1]], ['L', b[0], b[1]]];
      for (const p of [a, b]) d.push(['M', p[0] - uy * tk, p[1] + ux * tk], ['L', p[0] + uy * tk, p[1] - ux * tk]);
      for (const p of [a, b]) { const dx = (ux - uy) * tk * 0.7, dy = (uy + ux) * tk * 0.7; d.push(['M', p[0] - dx, p[1] - dy], ['L', p[0] + dx, p[1] + dy]); }
      out.push(stroke(d, s, { cap: 'butt' }));
      const label = env.cal ? measure(len, env.cal) : (m.text || t('status.scale.none'));
      const size = s.fontSize;
      const w = textWidth(label, size) + 6, h = size * 1.3;
      const cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
      const rot = ((m.rot || 0) % 180 + 180) % 180;
      const box = rot === 90 ? [cx - h / 2, cy - w / 2, cx + h / 2, cy + w / 2] : [cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2];
      out.push({ k: 'path', d: P.rect(box), stroke: null, fill: 'paper', w: 0, alpha: 1, falpha: 1, cap: 'butt', join: 'miter', blend: null });
      out.push(textItem(box, [label], size, { align: 'center', valign: 'middle', pad: 0 }));
      break;
    }
    default:
      break;
  }
  if (m.punch && env.badge) {
    const b = listBounds(out);
    if (b) {
      const r = env.badge;
      const f = frame(m.rot || 0, [b[0], b[1], b[2], b[3]]);
      const cx = f.o[0] - (f.u[0] + f.v[0]) * r * 0.2, cy = f.o[1] - (f.u[1] + f.v[1]) * r * 0.2;
      out.push({ k: 'path', d: P.circle(cx, cy, r), stroke: '#ffffff', fill: '#17202b', w: r * 0.12, alpha: 1, falpha: 1, cap: 'butt', join: 'miter', blend: null, badge: true });
      const label = String(m.punch.n);
      const size = Math.min(r * 1.1, (r * 1.6) / Math.max(1e-6, textWidth(label, 1, true)));
      out.push({ k: 'text', lines: [label], box: [cx - r, cy - r, cx + r, cy + r], size, bold: true, color: '#ffffff', rot: m.rot || 0, align: 'center', valign: 'middle', pad: 0, lh: LINE_H, alpha: 1, badge: true });
    }
  }
  return out;
}

/** Area centroid of a closed outline (falls back to the vertex average for degenerate ones). */
export function centroid(pts) {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length];
    const k = p[0] * q[1] - q[0] * p[1];
    a += k; cx += (p[0] + q[0]) * k; cy += (p[1] + q[1]) * k;
  }
  if (Math.abs(a) < 1e-9) return [pts.reduce((t, p) => t + p[0], 0) / pts.length, pts.reduce((t, p) => t + p[1], 0) / pts.length];
  return [cx / (3 * a), cy / (3 * a)];
}

/** A small label centered on c: a paper patch and the lines on it, upright for the page rotation. */
export function labelItems(c, lines, size, rot, color, alpha = 1) {
  const w = Math.max(...lines.map((l) => textWidth(l, size))) + 6, h = size * (1 + (lines.length - 1) * LINE_H) + size * 0.4;
  const side = ((rot % 180) + 180) % 180 === 90;
  const box = side ? [c[0] - h / 2, c[1] - w / 2, c[0] + h / 2, c[1] + w / 2] : [c[0] - w / 2, c[1] - h / 2, c[0] + w / 2, c[1] + h / 2];
  return [
    { k: 'path', d: P.rect(box), stroke: null, fill: 'paper', w: 0, alpha: 1, falpha: 0.92, cap: 'butt', join: 'miter', blend: null },
    { k: 'text', lines, box, size, bold: false, color, rot, align: 'center', valign: 'middle', pad: 0, lh: LINE_H, alpha },
  ];
}

// ---- flattening, bounds, hit-testing ----

/** A path's sub-paths as polylines (Béziers split into 12). [{pts, closed}] */
export function flatten(d) {
  const subs = [];
  let cur = null, x = 0, y = 0;
  for (const c of d) {
    if (c[0] === 'M') { cur = { pts: [[c[1], c[2]]], closed: false }; subs.push(cur); x = c[1]; y = c[2]; }
    else if (c[0] === 'L') { if (!cur) { cur = { pts: [[x, y]], closed: false }; subs.push(cur); } cur.pts.push([c[1], c[2]]); x = c[1]; y = c[2]; }
    else if (c[0] === 'C') {
      if (!cur) { cur = { pts: [[x, y]], closed: false }; subs.push(cur); }
      const [, x1, y1, x2, y2, x3, y3] = c;
      for (let i = 1; i <= 12; i++) {
        const t = i / 12, mt = 1 - t;
        cur.pts.push([mt * mt * mt * x + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3, mt * mt * mt * y + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3]);
      }
      x = x3; y = y3;
    } else if (c[0] === 'Z') { if (cur) { cur.closed = true; x = cur.pts[0][0]; y = cur.pts[0][1]; } }
  }
  return subs;
}

/** Bounds of a display list [x0,y0,x1,y1] including half the stroke width (null when empty). */
export function listBounds(list) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const it of list) {
    if (it.k === 'path') {
      const h = it.stroke ? it.w / 2 : 0;
      for (const sp of flatten(it.d)) for (const [x, y] of sp.pts) {
        if (x - h < x0) x0 = x - h; if (y - h < y0) y0 = y - h; if (x + h > x1) x1 = x + h; if (y + h > y1) y1 = y + h;
      }
    } else if (it.k === 'text' || it.k === 'image') {
      x0 = Math.min(x0, it.box[0]); y0 = Math.min(y0, it.box[1]); x1 = Math.max(x1, it.box[2]); y1 = Math.max(y1, it.box[3]);
    }
  }
  return Number.isFinite(x0) ? [x0, y0, x1, y1] : null;
}

export function distToSeg(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = dx * dx + dy * dy;
  let t = L ? ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

export function insidePoly(p, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if ((yi > p[1]) !== (yj > p[1]) && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Distance from p to what a display list draws (0 inside fills and text boxes). */
export function listDistance(list, p) {
  let best = Infinity;
  for (const it of list) {
    if (it.k === 'text' || it.k === 'image') {
      const [x0, y0, x1, y1] = it.box;
      if (p[0] >= x0 && p[0] <= x1 && p[1] >= y0 && p[1] <= y1) return 0;
      continue;
    }
    for (const sp of flatten(it.d)) {
      const ring = sp.closed ? [...sp.pts, sp.pts[0]] : sp.pts;
      if (it.fill && it.falpha > 0.02 && !it.nopick && sp.closed && insidePoly(p, sp.pts)) return 0;
      for (let i = 1; i < ring.length; i++) {
        const dd = distToSeg(p, ring[i - 1], ring[i]) - (it.stroke ? it.w / 2 : 0);
        if (dd < best) best = dd;
      }
      if (ring.length === 1) best = Math.min(best, Math.hypot(p[0] - ring[0][0], p[1] - ring[0][1]) - it.w / 2);
    }
  }
  return Math.max(0, best);
}
