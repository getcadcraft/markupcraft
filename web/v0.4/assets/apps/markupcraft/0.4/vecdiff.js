/* SPDX-License-Identifier: Apache-2.0 */
/**
 * vecdiff.js — compare two sheets by their vector paths, not their pixels (0.4 K12). No DOM.
 *
 *   pageSegments(opList, OPS, { max })  pdf.js getOperatorList() → line segments [x1, y1, x2, y2] in PDF user space:
 *                                       every stroked or filled path (curves cut into short pieces), with the page's
 *                                       transforms (cm, q/Q, form XObjects) applied. Text drawn as glyphs is not a path
 *                                       and is left out; text drawn as strokes (plotter fonts) is in.
 *   diffSegments(oldSegs, newSegs, { tol, T, step }) → { removed, added, kept }: the parts of the old drawing that are not
 *                                       on the new one (within tol points) and the other way round. T maps old user space
 *                                       onto new (the compare alignment); segments are checked every `step` points, so a
 *                                       line that only changed in part shows only that part.
 *   clusters(segs, { gap, minLen })     → boxes [x0, y0, x1, y1] round groups of changed segments closer than `gap`
 *                                       (for clouding the changes); groups with less than `minLen` points of change are dropped
 */

const DRAW = { moveTo: 0, lineTo: 1, curveTo: 2, quadTo: 3, close: 4 };
const mul = (a, b) => [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]];
const ap = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];

export function pageSegments(opList, OPS, { max = 400000 } = {}) {
  const out = [];
  let ctm = [1, 0, 0, 1, 0, 0];
  const stack = [];
  const fn = opList.fnArray, args = opList.argsArray;
  for (let i = 0; i < fn.length && out.length < max; i++) {
    const op = fn[i], a = args[i];
    if (op === OPS.save) stack.push(ctm);
    else if (op === OPS.restore) ctm = stack.pop() || ctm;
    else if (op === OPS.transform) ctm = mul(ctm, a);
    else if (op === OPS.paintFormXObjectBegin) { stack.push(ctm); if (Array.isArray(a?.[0]) || a?.[0]?.length === 6) ctm = mul(ctm, Array.from(a[0])); }
    else if (op === OPS.paintFormXObjectEnd) ctm = stack.pop() || ctm;
    else if (op === OPS.constructPath) {
      const data = a?.[1]?.[0];
      if (!data) continue;
      let x = 0, y = 0, sx = 0, sy = 0;
      const seg = (x1, y1, x2, y2) => { const p = ap(ctm, x1, y1), q = ap(ctm, x2, y2); if (p[0] !== q[0] || p[1] !== q[1]) out.push([p[0], p[1], q[0], q[1]]); };
      for (let k = 0; k < data.length;) {
        const c = data[k];
        if (c === DRAW.moveTo) { x = sx = data[k + 1]; y = sy = data[k + 2]; k += 3; }
        else if (c === DRAW.lineTo) { seg(x, y, data[k + 1], data[k + 2]); x = data[k + 1]; y = data[k + 2]; k += 3; }
        else if (c === DRAW.curveTo || c === DRAW.quadTo) {
          const cubic = c === DRAW.curveTo;
          const pts = cubic ? [data[k + 1], data[k + 2], data[k + 3], data[k + 4], data[k + 5], data[k + 6]] : [data[k + 1], data[k + 2], data[k + 3], data[k + 4]];
          const ex = pts[pts.length - 2], ey = pts[pts.length - 1];
          let px = x, py = y;
          for (let j = 1; j <= 8; j++) {
            const t = j / 8, u = 1 - t;
            const nx = cubic ? u * u * u * x + 3 * u * u * t * pts[0] + 3 * u * t * t * pts[2] + t * t * t * ex : u * u * x + 2 * u * t * pts[0] + t * t * ex;
            const ny = cubic ? u * u * u * y + 3 * u * u * t * pts[1] + 3 * u * t * t * pts[3] + t * t * t * ey : u * u * y + 2 * u * t * pts[1] + t * t * ey;
            seg(px, py, nx, ny); px = nx; py = ny;
          }
          x = ex; y = ey; k += cubic ? 7 : 5;
        } else if (c === DRAW.close) { seg(x, y, sx, sy); x = sx; y = sy; k += 1; }
        else break;   // an unknown code: stop reading this path rather than misread it
      }
    }
  }
  return out;
}

/** A grid of segments for "is there a segment within tol of this point?" */
function index(segs, cell) {
  const g = new Map();
  segs.forEach((s, i) => {
    const x0 = Math.floor(Math.min(s[0], s[2]) / cell), x1 = Math.floor(Math.max(s[0], s[2]) / cell);
    const y0 = Math.floor(Math.min(s[1], s[3]) / cell), y1 = Math.floor(Math.max(s[1], s[3]) / cell);
    if ((x1 - x0 + 1) * (y1 - y0 + 1) > 4000) return;   // a huge segment (a sheet border): checked by brute force below
    for (let gx = x0; gx <= x1; gx++) for (let gy = y0; gy <= y1; gy++) { const k = gx + ',' + gy; (g.get(k) || g.set(k, []).get(k)).push(i); }
  });
  return g;
}
function distSeg(px, py, s) {
  const dx = s[2] - s[0], dy = s[3] - s[1];
  const L = dx * dx + dy * dy;
  let t = L ? ((px - s[0]) * dx + (py - s[1]) * dy) / L : 0;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (s[0] + t * dx), py - (s[1] + t * dy));
}
function near(px, py, segs, grid, cell, tol, big) {
  const gx = Math.floor(px / cell), gy = Math.floor(py / cell);
  for (let ix = gx - 1; ix <= gx + 1; ix++) for (let iy = gy - 1; iy <= gy + 1; iy++) {
    for (const i of grid.get(ix + ',' + iy) || []) if (distSeg(px, py, segs[i]) <= tol) return true;
  }
  for (const i of big) if (distSeg(px, py, segs[i]) <= tol) return true;
  return false;
}
/** The pieces of `segs` (sampled every `step`) with no segment of `other` within tol. */
function unmatched(segs, other, tol, step) {
  const cell = Math.max(tol * 4, 8);
  const grid = index(other, cell);
  const big = other.map((s, i) => [s, i]).filter(([s]) => (Math.abs(s[2] - s[0]) / cell + 1) * (Math.abs(s[3] - s[1]) / cell + 1) > 4000).map(([, i]) => i);
  const out = [];
  let kept = 0;
  for (const s of segs) {
    const len = Math.hypot(s[2] - s[0], s[3] - s[1]);
    const n = Math.max(1, Math.ceil(len / step));
    let runFrom = -1;
    for (let j = 0; j <= n; j++) {
      const t = j / n, x = s[0] + (s[2] - s[0]) * t, y = s[1] + (s[3] - s[1]) * t;
      const miss = !near(x, y, other, grid, cell, tol, big);
      if (miss && runFrom < 0) runFrom = j;
      if ((!miss || j === n) && runFrom >= 0) {
        const end = miss ? j : j - 1;
        if (end > runFrom || n === 1) {
          const t0 = runFrom / n, t1 = Math.max(end, runFrom) / n;
          out.push([s[0] + (s[2] - s[0]) * t0, s[1] + (s[3] - s[1]) * t0, s[0] + (s[2] - s[0]) * (t1 === t0 ? Math.min(1, t0 + 1 / n) : t1), s[1] + (s[3] - s[1]) * (t1 === t0 ? Math.min(1, t0 + 1 / n) : t1)]);
        }
        runFrom = -1;
      }
      if (!miss) kept++;
    }
  }
  return { out, kept };
}

export function diffSegments(oldSegs, newSegs, { tol = 1.5, T = null, step = 2 } = {}) {
  const olds = T ? oldSegs.map((s) => [...ap(T, s[0], s[1]), ...ap(T, s[2], s[3])]) : oldSegs;
  const r = unmatched(olds, newSegs, tol, step);
  const a = unmatched(newSegs, olds, tol, step);
  return { removed: r.out, added: a.out, kept: r.kept + a.kept };
}

export function clusters(segs, { gap = 18, minLen = 6 } = {}) {
  const boxes = segs.map((s) => ({ b: [Math.min(s[0], s[2]), Math.min(s[1], s[3]), Math.max(s[0], s[2]), Math.max(s[1], s[3])], n: Math.hypot(s[2] - s[0], s[3] - s[1]) }));
  // merge boxes closer than `gap` until nothing changes (grid-accelerated)
  let changed = true;
  let list = boxes;
  while (changed) {
    changed = false;
    const cell = gap * 4;
    const grid = new Map();
    const out = [];
    for (const bx of list) {
      let host = null;
      const cx0 = Math.floor((bx.b[0] - gap) / cell), cx1 = Math.floor((bx.b[2] + gap) / cell), cy0 = Math.floor((bx.b[1] - gap) / cell), cy1 = Math.floor((bx.b[3] + gap) / cell);
      search: for (let gx = cx0; gx <= cx1; gx++) for (let gy = cy0; gy <= cy1; gy++) {
        for (const o of grid.get(gx + ',' + gy) || []) {
          if (o.dead) continue;
          if (bx.b[0] - gap <= o.b[2] && o.b[0] - gap <= bx.b[2] && bx.b[1] - gap <= o.b[3] && o.b[1] - gap <= bx.b[3]) { host = o; break search; }
        }
      }
      if (host) {
        host.b = [Math.min(host.b[0], bx.b[0]), Math.min(host.b[1], bx.b[1]), Math.max(host.b[2], bx.b[2]), Math.max(host.b[3], bx.b[3])];
        host.n += bx.n;
        changed = true;
      } else {
        out.push(bx);
        for (let gx = Math.floor(bx.b[0] / cell); gx <= Math.floor(bx.b[2] / cell); gx++) for (let gy = Math.floor(bx.b[1] / cell); gy <= Math.floor(bx.b[3] / cell); gy++) { const k = gx + ',' + gy; (grid.get(k) || grid.set(k, []).get(k)).push(bx); }
      }
    }
    list = out;
  }
  return list.filter((x) => x.n >= minLen).map((x) => x.b);
}
