/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — kinds and keys are read by code and by assistants; the words the person sees go through t() in the page. */
/**
 * sketch.js — pen sketches become precise geometry (0.8 round 2, EG.55, CadCraft side). Rules and geometry only: no model, no
 * network, no worker (rule 35). A freehand stroke is a list of points; this file decides what it was meant to be.
 *
 *   cleanStroke(points, opts)  → { kind, entity, score } | null      kind: line | circle | arc | rect | poly
 *   cleanSketch(strokes, doc, opts) → { adds[], report[], tol }        strokes joined to each other and to the drawing's own ends
 *   applySketch(doc, adds, label) → ids                                one undo step
 *
 * What it does, in order: a stroke that is nearly straight becomes a line (and a level or plumb one is made exactly level or
 * plumb when it is within `orthoDeg`); a closed stroke that is round becomes a circle, one with four right-angled corners a
 * rectangle, any other closed stroke a polygon; an open stroke that is part of a circle becomes an arc; the rest are cut at their
 * corners (Douglas–Peucker) into a polyline whose sides are squared the same way. Then the ends of every stroke are pulled onto
 * the nearest end of another stroke or of an object already in the drawing when they are within `tol`.
 */
import { TAU, dist, normAngle } from './geom.js';

export const DEFAULTS = Object.freeze({ orthoDeg: 8, rightDeg: 12, tolFrac: 0.03, minLenFrac: 0.004, closeFrac: 0.18 });

const len = (pts) => { let s = 0; for (let i = 1; i < pts.length; i++) s += dist(pts[i - 1], pts[i]); return s; };
const boxOf = (pts) => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const p of pts) { if (p.x < x0) x0 = p.x; if (p.x > x1) x1 = p.x; if (p.y < y0) y0 = p.y; if (p.y > y1) y1 = p.y; } return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0, d: Math.hypot(x1 - x0, y1 - y0) }; };

/** Points closer than `eps` to the one before are dropped. */
function thin(pts, eps) {
  const out = [];
  for (const p of pts) if (!out.length || dist(out[out.length - 1], p) > eps) out.push({ x: p.x, y: p.y });
  return out;
}

function distToSeg(p, a, b) {
  const dx = b.x - a.x, dy = b.y - a.y, L2 = dx * dx + dy * dy;
  const t = L2 ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / L2)) : 0;
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}

/** Douglas–Peucker: indexes of the kept points of pts[i..j]. */
function simplify(pts, eps) {
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    let worst = -1, wd = eps;
    for (let k = i + 1; k < j; k++) { const d = distToSeg(pts[k], pts[i], pts[j]); if (d > wd) { wd = d; worst = k; } }
    if (worst >= 0) { keep[worst] = 1; stack.push([i, worst], [worst, j]); }
  }
  const out = []; for (let i = 0; i < pts.length; i++) if (keep[i]) out.push(i);
  return out;
}

/** Circle through the points by least squares (Kåsa): { cx, cy, r, rms }. */
export function fitCircle(pts) {
  let mx = 0, my = 0; for (const p of pts) { mx += p.x; my += p.y; } mx /= pts.length; my /= pts.length;
  let suu = 0, svv = 0, suv = 0, suuu = 0, svvv = 0, suvv = 0, svuu = 0;
  for (const p of pts) { const u = p.x - mx, v = p.y - my; suu += u * u; svv += v * v; suv += u * v; suuu += u * u * u; svvv += v * v * v; suvv += u * v * v; svuu += v * u * u; }
  const det = suu * svv - suv * suv;
  if (Math.abs(det) < 1e-12) return null;
  const a = (suuu + suvv) / 2, b = (svvv + svuu) / 2;
  const uc = (a * svv - b * suv) / det, vc = (b * suu - a * suv) / det;
  const cx = mx + uc, cy = my + vc, r = Math.sqrt(uc * uc + vc * vc + (suu + svv) / pts.length);
  let s = 0; for (const p of pts) { const e = Math.hypot(p.x - cx, p.y - cy) - r; s += e * e; }
  return { cx, cy, r, rms: Math.sqrt(s / pts.length) };
}

/** Total turning of the stroke around (cx, cy), radians (signed: + anticlockwise). */
function sweepAround(pts, c) {
  let s = 0, prev = Math.atan2(pts[0].y - c.cy, pts[0].x - c.cx);
  for (let i = 1; i < pts.length; i++) {
    const a = Math.atan2(pts[i].y - c.cy, pts[i].x - c.cx);
    let d = a - prev; while (d > Math.PI) d -= TAU; while (d < -Math.PI) d += TAU;
    s += d; prev = a;
  }
  return s;
}

/** A direction (radians) squared to level / plumb when it is within `deg` of one. */
function squareAngle(a, deg) {
  const q = Math.round(a / (Math.PI / 2)) * (Math.PI / 2);
  return Math.abs(a - q) <= deg * Math.PI / 180 ? q : a;
}

function lineThrough(p, a) { return { x: p.x, y: p.y, dx: Math.cos(a), dy: Math.sin(a) }; }
function meet(l, m) {
  const det = l.dx * m.dy - l.dy * m.dx;
  if (Math.abs(det) < 1e-9) return null;
  const t = ((m.x - l.x) * m.dy - (m.y - l.y) * m.dx) / det;
  return { x: l.x + l.dx * t, y: l.y + l.dy * t };
}
const project = (p, l) => { const t = (p.x - l.x) * l.dx + (p.y - l.y) * l.dy; return { x: l.x + l.dx * t, y: l.y + l.dy * t }; };

/**
 * Cut a stroke into straight sides and square them. `closed` joins the last side to the first.
 * Returns the vertices (closed: without repeating the first).
 */
function sides(pts, eps, o, closed) {
  const idx = simplify(pts, eps);
  let v = idx.map((i) => pts[i]);
  if (closed && v.length > 2) v = v.slice(0, -1);   // the last point is the first again
  const n = closed ? v.length : v.length - 1;
  if (n < 1) return null;
  const lines = [];
  for (let i = 0; i < n; i++) {
    const a = v[i], b = v[(i + 1) % v.length];
    const ang = squareAngle(Math.atan2(b.y - a.y, b.x - a.x), o.orthoDeg);
    lines.push(lineThrough({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, ang));
  }
  // a rectangle drawn crooked keeps its tilt: right angles within rightDeg are made exact against the first side
  if (closed && n === 4) {
    const a0 = Math.atan2(lines[0].dy, lines[0].dx);
    const right = [1, 2, 3].every((k) => { const d = Math.atan2(lines[k].dy, lines[k].dx) - a0; const m = Math.abs(((d % (Math.PI / 2)) + Math.PI / 2) % (Math.PI / 2)); return Math.min(m, Math.PI / 2 - m) <= o.rightDeg * Math.PI / 180; });
    if (right) {
      for (let k = 1; k < 4; k++) { const q = a0 + Math.round((Math.atan2(lines[k].dy, lines[k].dx) - a0) / (Math.PI / 2)) * (Math.PI / 2); lines[k] = lineThrough(lines[k], q); }
      // opposite sides are one distance apart: the middle of each pair
      return { rect: true, pts: [0, 1, 2, 3].map((k) => meet(lines[(k + 3) % 4], lines[k]) || v[k]) };
    }
  }
  const out = [];
  if (closed) for (let i = 0; i < n; i++) out.push(meet(lines[(i + n - 1) % n], lines[i]) || { ...v[i] });
  else {
    out.push(project(v[0], lines[0]));
    for (let i = 1; i < n; i++) out.push(meet(lines[i - 1], lines[i]) || { ...v[i] });
    out.push(project(v[n], lines[n - 1]));
  }
  return { rect: false, pts: out };
}

/** What one stroke was meant to be. `pts` in drawing units. */
export function cleanStroke(points, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const box = boxOf(points);
  if (!points || points.length < 2 || !(box.d > 0)) return null;
  const eps = Math.max(o.eps ?? 0, box.d * o.tolFrac * 0.5);
  let pts = thin(points, box.d * 0.002);
  if (pts.length < 2) return null;
  const L = len(pts), first = pts[0], last = pts[pts.length - 1], gap = dist(first, last);
  if (L < box.d * 0.5 || L < (o.minLen ?? 0)) return null;
  const closed = pts.length > 3 && gap < L * o.closeFrac;

  if (!closed) {   // a straight line?
    let worst = 0; for (const p of pts) worst = Math.max(worst, distToSeg(p, first, last));
    if (worst <= Math.max(eps, gap * 0.035) && gap > L * 0.9) {
      const ang = squareAngle(Math.atan2(last.y - first.y, last.x - first.x), o.orthoDeg);
      const sq = ang !== Math.atan2(last.y - first.y, last.x - first.x);
      const mid = { x: (first.x + last.x) / 2, y: (first.y + last.y) / 2 }, h = gap / 2;
      const e = sq ? { type: 'line', x1: mid.x - Math.cos(ang) * h, y1: mid.y - Math.sin(ang) * h, x2: mid.x + Math.cos(ang) * h, y2: mid.y + Math.sin(ang) * h } : { type: 'line', x1: first.x, y1: first.y, x2: last.x, y2: last.y };
      if (sq && (Math.abs(Math.cos(ang)) < 1e-9)) { e.x1 = e.x2 = (first.x + last.x) / 2; e.y1 = first.y; e.y2 = last.y; }
      else if (sq && (Math.abs(Math.sin(ang)) < 1e-9)) { e.y1 = e.y2 = (first.y + last.y) / 2; e.x1 = first.x; e.x2 = last.x; }
      return { kind: 'line', entity: e, score: 1 - worst / Math.max(gap, 1e-9) };
    }
  }
  // a circle or part of one?
  const circ = pts.length >= 6 ? fitCircle(pts) : null;
  if (circ && circ.r > 0 && circ.rms / circ.r < 0.07 && circ.r < box.d * 3) {
    const sweep = sweepAround(pts, circ);
    if (closed && Math.abs(sweep) > TAU * 0.85) return { kind: 'circle', entity: { type: 'circle', cx: circ.cx, cy: circ.cy, r: circ.r }, score: 1 - circ.rms / circ.r };
    if (!closed && Math.abs(sweep) >= 0.45 && Math.abs(sweep) < TAU * 0.85) {
      const a0 = Math.atan2(first.y - circ.cy, first.x - circ.cx), a1 = Math.atan2(last.y - circ.cy, last.x - circ.cx);
      const ccw = sweep > 0;
      return { kind: 'arc', entity: { type: 'arc', cx: circ.cx, cy: circ.cy, r: circ.r, a0: normAngle(ccw ? a0 : a1), a1: normAngle(ccw ? a1 : a0) }, score: 1 - circ.rms / circ.r };
    }
  }
  // straight sides
  const s = sides(closed ? pts.concat([pts[0]]) : pts, eps, o, closed);
  if (!s || s.pts.length < 2) return null;
  if (s.rect) return { kind: 'rect', entity: { type: 'poly', closed: true, pts: s.pts.map((p) => ({ x: p.x, y: p.y, b: 0 })) }, score: 0.9 };
  if (!closed && s.pts.length === 2) return { kind: 'line', entity: { type: 'line', x1: s.pts[0].x, y1: s.pts[0].y, x2: s.pts[1].x, y2: s.pts[1].y }, score: 0.8 };
  return { kind: 'poly', entity: { type: 'poly', closed, pts: s.pts.map((p) => ({ x: p.x, y: p.y, b: 0 })) }, score: 0.7 };
}

// ---- joining -----------------------------------------------------------------------------------------------

/** The free ends of an entity as [{ p, set(x, y) }] — what a loose stroke end may be pulled onto or may be pulled. */
function endsOf(e) {
  if (e.type === 'line') return [{ p: { x: e.x1, y: e.y1 }, set: (x, y) => { e.x1 = x; e.y1 = y; } }, { p: { x: e.x2, y: e.y2 }, set: (x, y) => { e.x2 = x; e.y2 = y; } }];
  if (e.type === 'poly' && !e.closed) { const a = e.pts[0], b = e.pts[e.pts.length - 1]; return [{ p: a, set: (x, y) => { a.x = x; a.y = y; } }, { p: b, set: (x, y) => { b.x = x; b.y = y; } }]; }
  return [];
}
/** Every corner of the entity (targets only). */
function cornersOf(e) {
  if (e.type === 'line') return [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }];
  if (e.type === 'poly') return e.pts.map((p) => ({ x: p.x, y: p.y }));
  if (e.type === 'arc') return [{ x: e.cx + e.r * Math.cos(e.a0), y: e.cy + e.r * Math.sin(e.a0) }, { x: e.cx + e.r * Math.cos(e.a1), y: e.cy + e.r * Math.sin(e.a1) }];
  return [];
}

/**
 * Clean every stroke, then pull the loose ends together. `doc` (optional) supplies the drawing's own ends as targets: only the
 * newest `look` visible objects are read, so the cost does not grow with the drawing.
 * → { adds: entities, report: [{ kind, score, joined }], tol }
 */
export function cleanSketch(strokes, doc = null, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const all = strokes.flat();
  if (!all.length) return { adds: [], report: [], tol: 0 };
  const box = boxOf(all);
  const tol = o.tol ?? box.d * 0.06;
  const made = [];
  for (const s of strokes) { const r = cleanStroke(s, { ...o, eps: o.eps }); if (r) made.push(r); }
  const targets = [];
  if (doc) {
    const look = o.look ?? 400;
    for (let id = doc.nextId - 1, n = 0; id > 0 && n < look; id--, n++) { const e = doc.entities.get(id); if (e && doc.visible(e) && doc.editable(e)) targets.push(...cornersOf(e)); }
  }
  const report = made.map((m) => ({ kind: m.kind, score: Math.round(m.score * 1000) / 1000, joined: 0 }));
  // each loose end goes to the nearest other corner within tol: another stroke's, or the drawing's
  made.forEach((m, i) => {
    for (const end of endsOf(m.entity)) {
      let best = null, bd = tol;
      for (let j = 0; j < made.length; j++) {
        if (j === i) continue;
        for (const c of cornersOf(made[j].entity)) { const d = dist(end.p, c); if (d <= bd) { bd = d; best = c; } }
      }
      for (const c of targets) { const d = dist(end.p, c); if (d < bd) { bd = d; best = c; } }
      if (best) { end.set(best.x, best.y); report[i].joined++; }
    }
  });
  return { adds: made.map((m) => m.entity), report, tol };
}

/** One undo step. Returns the ids added. */
export function applySketch(doc, adds, label = 'SKETCHFIX', base = {}) {
  const ids = [];
  doc.change(label, () => { for (const e of adds) ids.push(doc.add({ ...base, ...e }).id); });
  return ids;
}
