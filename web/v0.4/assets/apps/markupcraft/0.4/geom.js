/* SPDX-License-Identifier: Apache-2.0 */
/**
 * geom.js — editing geometry for markups: grips (resize handles), moving, constraining, simplifying
 * freehand strokes, hit-testing through the display list, and the similarity transform used to align
 * two sheets. All in PDF user space. No DOM.
 */

import { shapes, listBounds, listDistance, NOTE_SIZE } from './shapes.js';
import { normRect } from './model.js';

/** Types whose geometry is a box (rect) that resizes from 8 grips. */
export const BOX_TYPES = new Set(['rect', 'ellipse', 'text', 'stamp', 'image', 'legend', 'cloudrect', 'callout']);
/** Types whose vertices are grips. */
export const VERTEX_TYPES = new Set(['space', 'line', 'arrow', 'arc', 'angle', 'measure', 'polyline', 'polygon', 'cloud', 'area', 'count']);
/** Freehand types: resize by scaling every point from 8 box grips. */
export const FREE_TYPES = new Set(['pen', 'highlight']);

const BOX_GRIPS = [['nw', 0, 1], ['n', 0.5, 1], ['ne', 1, 1], ['e', 1, 0.5], ['se', 1, 0], ['s', 0.5, 0], ['sw', 0, 0], ['w', 0, 0.5]];

export function pointsBounds(pts) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of pts) { if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y; }
  return [x0, y0, x1, y1];
}

/** The grips a selected markup offers: [{key, x, y, kind: 'box'|'vertex'|'tip'|'knee'}]. */
export function grips(m) {
  if (m.locked) return [];
  const out = [];
  const box = BOX_TYPES.has(m.type) ? m.rect : FREE_TYPES.has(m.type) && m.pts?.length > 1 ? pointsBounds(m.pts) : null;
  if (box) {
    const [x0, y0, x1, y1] = box;
    for (const [key, fx, fy] of BOX_GRIPS) out.push({ key, kind: 'box', x: x0 + (x1 - x0) * fx, y: y0 + (y1 - y0) * fy });
  }
  if (VERTEX_TYPES.has(m.type)) m.pts.forEach((p, i) => out.push({ key: 'v' + i, kind: 'vertex', i, x: p[0], y: p[1] }));
  if (m.type === 'callout' && m.pts?.length) {
    out.push({ key: 'tip', kind: 'tip', i: 0, x: m.pts[0][0], y: m.pts[0][1] });
    if (m.pts[1]) out.push({ key: 'knee', kind: 'knee', i: 1, x: m.pts[1][0], y: m.pts[1][1] });
  }
  return out;
}

/** Snap p to the nearest 45° direction from `from`. */
export function snap45(from, p) {
  const dx = p[0] - from[0], dy = p[1] - from[1];
  const len = Math.hypot(dx, dy);
  if (!len) return [p[0], p[1]];
  const a = Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) * (Math.PI / 4);
  return [from[0] + Math.cos(a) * len, from[1] + Math.sin(a) * len];
}

/** Make the box from a fixed corner to p square (Shift while drawing boxes). */
export function squareFrom(a, p) {
  const dx = p[0] - a[0], dy = p[1] - a[1];
  const s = Math.max(Math.abs(dx), Math.abs(dy));
  return [a[0] + Math.sign(dx || 1) * s, a[1] + Math.sign(dy || 1) * s];
}

/**
 * Dragging a grip of the markup as it was when the drag began (`m0`) to point p → a patch
 * ({rect} / {pts}). opts.shift keeps proportions (box) or snaps to 45° (vertex).
 */
export function applyGrip(m0, grip, p, opts = {}) {
  if (grip.kind === 'vertex' || grip.kind === 'tip' || grip.kind === 'knee') {
    const pts = m0.pts.map((q) => [q[0], q[1]]);
    let q = p;
    if (opts.shift && pts.length > 1) {
      const nb = grip.i > 0 ? pts[grip.i - 1] : pts[1];
      q = snap45(nb, p);
    }
    pts[grip.i] = [q[0], q[1]];
    return { pts };
  }
  // box grips
  const box = BOX_TYPES.has(m0.type) ? m0.rect : pointsBounds(m0.pts);
  let [x0, y0, x1, y1] = box;
  const k = grip.key;
  if (k.includes('w')) x0 = p[0];
  if (k.includes('e')) x1 = p[0];
  if (k.includes('s')) y0 = p[1];
  if (k.includes('n')) y1 = p[1];
  if (opts.shift && k.length === 2) {
    // keep the aspect ratio from the opposite corner
    const w0 = box[2] - box[0], h0 = box[3] - box[1];
    if (w0 > 0 && h0 > 0) {
      const sx = Math.abs(x1 - x0) / w0, sy = Math.abs(y1 - y0) / h0, sc = Math.max(sx, sy);
      if (k.includes('w')) x0 = x1 - w0 * sc * Math.sign(x1 - x0 || 1); else x1 = x0 + w0 * sc * Math.sign(x1 - x0 || 1);
      if (k.includes('s')) y0 = y1 - h0 * sc * Math.sign(y1 - y0 || 1); else y1 = y0 + h0 * sc * Math.sign(y1 - y0 || 1);
    }
  }
  const nb = normRect([x0, y0, x1, y1]);
  const min = 2;
  if (nb[2] - nb[0] < min) nb[2] = nb[0] + min;
  if (nb[3] - nb[1] < min) nb[3] = nb[1] + min;
  if (BOX_TYPES.has(m0.type)) return { rect: nb };
  // freehand: scale every point from the old box to the new one
  const bw = box[2] - box[0] || 1, bh = box[3] - box[1] || 1;
  // a flipped drag mirrors the stroke
  const fx = (x) => (k.includes('w') || k.includes('e') ? x0 + ((x - box[0]) / bw) * (x1 - x0) : x);
  const fy = (y) => (k.includes('n') || k.includes('s') ? y0 + ((y - box[1]) / bh) * (y1 - y0) : y);
  return { pts: m0.pts.map(([x, y]) => [fx(x), fy(y)]) };
}

/** Patch that moves a markup by (dx, dy). */
export function moveBy(m, dx, dy) {
  const patch = {};
  if (m.pts) patch.pts = m.pts.map(([x, y]) => [x + dx, y + dy]);
  if (m.rect) patch.rect = [m.rect[0] + dx, m.rect[1] + dy, m.rect[2] + dx, m.rect[3] + dy];
  if (m.holes?.length) patch.holes = m.holes.map((h) => h.map(([x, y]) => [x + dx, y + dy]));
  return patch;
}

/** Douglas–Peucker: drop points closer than tol to the line through their neighbours. */
export function simplify(pts, tol) {
  if (pts.length < 3) return pts.slice();
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let best = -1, bd = tol;
    const [ax, ay] = pts[a], [bx, by] = pts[b];
    const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy);
    for (let i = a + 1; i < b; i++) {
      const [px, py] = pts[i];
      const d = L ? Math.abs(dy * px - dx * py + bx * ay - by * ax) / L : Math.hypot(px - ax, py - ay);
      if (d > bd) { bd = d; best = i; }
    }
    if (best > 0) { keep[best] = 1; stack.push([a, best], [best, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

/** Cached display list + bounds per markup object (keyed by the object; markups are replaced on edit). */
const cache = new WeakMap();
export function displayOf(m, env) {
  const key = env ? (env.cal ? env.cal.mmPerPt + env.cal.unit : '') + '|' + (env.badge || 0) + '|' + (env.legendKey || '') : '';
  let c = cache.get(m);
  if (!c || c.key !== key) {
    const list = m.type === 'foreign' ? [] : shapes(m, env);
    c = { key, list, bounds: m.type === 'foreign' ? m.rect : listBounds(list) || (m.rect ? m.rect : null) };
    cache.set(m, c);
  }
  return c;
}

/** Bounds of a markup [x0,y0,x1,y1]. */
export function boundsOf(m, env) {
  if (m.type === 'note' && m.pts?.[0]) { const [x, y] = m.pts[0]; return [x, y - NOTE_SIZE, x + NOTE_SIZE, y]; }
  return displayOf(m, env).bounds;
}

/** Distance (user space) from p to a markup's drawing; boxes of foreign annotations count as filled. */
export function distanceTo(m, p, env) {
  if (m.type === 'foreign') {
    const [x0, y0, x1, y1] = m.rect;
    return p[0] >= x0 && p[0] <= x1 && p[1] >= y0 && p[1] <= y1 ? 0 : Infinity;
  }
  const b = boundsOf(m, env);
  if (!b) return Infinity;
  return listDistance(displayOf(m, env).list, p);
}

/** Topmost markup within tol of p (list in drawing order). */
export function pick(list, p, tol, envOf) {
  for (let i = list.length - 1; i >= 0; i--) {
    const m = list[i];
    const b = boundsOf(m, envOf(m));
    if (!b || p[0] < b[0] - tol || p[0] > b[2] + tol || p[1] < b[1] - tol || p[1] > b[3] + tol) continue;
    if (distanceTo(m, p, envOf(m)) <= tol) return m;
  }
  return null;
}

/** Markups inside a window (fully inside) or touching it (crossing). */
export function pickWindow(list, r, crossing, envOf) {
  const [x0, y0, x1, y1] = r;
  return list.filter((m) => {
    const b = boundsOf(m, envOf(m));
    if (!b) return false;
    if (crossing) return b[0] <= x1 && b[2] >= x0 && b[1] <= y1 && b[3] >= y0;
    return b[0] >= x0 && b[2] <= x1 && b[1] >= y0 && b[3] <= y1;
  });
}

// ---- 2-D affine transforms [a, b, c, d, e, f]: x' = a x + c y + e, y' = b x + d y + f ----
export const I = [1, 0, 0, 1, 0, 0];
export function mul(m, n) {   // m ∘ n (apply n first)
  return [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3], m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
}
export function inv(m) {
  const det = m[0] * m[3] - m[1] * m[2];
  if (!det) return I.slice();
  return [m[3] / det, -m[1] / det, -m[2] / det, m[0] / det, (m[2] * m[5] - m[3] * m[4]) / det, (m[1] * m[4] - m[0] * m[5]) / det];
}
export const apply = (m, p) => [m[0] * p[0] + m[2] * p[1] + m[4], m[1] * p[0] + m[3] * p[1] + m[5]];

/**
 * The similarity (move + turn + uniform scale) that takes old points a1, a2 onto new points b1, b2.
 * Used to line up two sheets by picking the same two features on each.
 */
export function similarity(a1, a2, b1, b2) {
  const ax = a2[0] - a1[0], ay = a2[1] - a1[1], bx = b2[0] - b1[0], by = b2[1] - b1[1];
  const la = Math.hypot(ax, ay), lb = Math.hypot(bx, by);
  if (la < 1e-9 || lb < 1e-9) return null;
  const s = lb / la;
  const ang = Math.atan2(by, bx) - Math.atan2(ay, ax);
  const c = Math.cos(ang) * s, sn = Math.sin(ang) * s;
  const e = b1[0] - (c * a1[0] - sn * a1[1]), f = b1[1] - (sn * a1[0] + c * a1[1]);
  return [c, sn, -sn, c, e, f];
}
