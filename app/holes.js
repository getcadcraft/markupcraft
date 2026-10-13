/* SPDX-License-Identifier: Apache-2.0 */
/**
 * holes.js — cut-outs in an area measurement (0.4 K8; the same rules as TakeoffCraft's areas). No DOM.
 * An area markup's `holes` are closed outlines inside it: its area is the outline's less the cut-outs', and its
 * perimeter runs round the cut-outs too.
 *
 *   ringArea(pts)                      absolute shoelace area (pt²)
 *   ringPerimeter(pts)                 closed length (pt)
 *   inRing(p, pts)                     ray-cast point-in-polygon
 *   crosses(a, b)                      do two closed outlines cross?
 *   selfCrosses(pts)                   does an outline cross itself?
 *   holeProblem(outer, holes, hole)    → null, or the language key of why the cut-out cannot go in:
 *                                      hole.err.points | hole.err.cross | hole.err.outside | hole.err.overlap
 *   cleanHoles(v)                      untrusted data → [[[x, y], …], …] (≤ 200 holes of 3–10 000 finite points)
 */

export function ringArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p[0] * q[1] - q[0] * p[1]; }
  return Math.abs(a) / 2;
}
export function ringPerimeter(pts) {
  let s = 0;
  for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; s += Math.hypot(q[0] - p[0], q[1] - p[1]); }
  return s;
}
export function inRing(p, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const a = pts[i], b = pts[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
const orient = (a, b, c) => Math.sign((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]));
/** Proper crossing of segments ab and cd (touching at an end does not count). */
function segsCross(a, b, c, d) {
  const o1 = orient(a, b, c), o2 = orient(a, b, d), o3 = orient(c, d, a), o4 = orient(c, d, b);
  return o1 * o2 < 0 && o3 * o4 < 0;
}
const edges = (pts) => pts.map((p, i) => [p, pts[(i + 1) % pts.length]]);
export function crosses(a, b) {
  for (const [p, q] of edges(a)) for (const [r, s] of edges(b)) if (segsCross(p, q, r, s)) return true;
  return false;
}
export function selfCrosses(pts) {
  const e = edges(pts);
  for (let i = 0; i < e.length; i++) for (let j = i + 2; j < e.length; j++) {
    if (i === 0 && j === e.length - 1) continue;   // neighbours through the closing edge
    if (segsCross(e[i][0], e[i][1], e[j][0], e[j][1])) return true;
  }
  return false;
}
export function holeProblem(outer, holes, hole) {
  if (!hole || hole.length < 3) return 'hole.err.points';
  if (selfCrosses(hole)) return 'hole.err.cross';   // before the area: a symmetric bow-tie's shoelace area is zero
  if (ringArea(hole) < 1e-6) return 'hole.err.points';
  if (crosses(outer, hole) || !hole.every((p) => inRing(p, outer))) return 'hole.err.outside';
  for (const h of holes) if (crosses(h, hole) || hole.some((p) => inRing(p, h)) || h.some((p) => inRing(p, hole))) return 'hole.err.overlap';
  return null;
}
export function cleanHoles(v) {
  if (!Array.isArray(v)) return [];
  const ok = (h) => Array.isArray(h) && h.length >= 3 && h.length <= 10000 && h.every((p) => Array.isArray(p) && p.length >= 2 && Number.isFinite(+p[0]) && Number.isFinite(+p[1]) && Math.abs(p[0]) < 1e7 && Math.abs(p[1]) < 1e7);
  return v.filter(ok).slice(0, 200).map((h) => h.map((p) => [+p[0], +p[1]]));
}
