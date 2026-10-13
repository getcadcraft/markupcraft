/* SPDX-License-Identifier: Apache-2.0 */
/**
 * arcs.js — geometry for the arc markup and the angle measurement (0.4 K4). No DOM.
 *
 *   arcThrough(a, m, b)        the circle arc from a through m to b → { c, r, a0, sweep } (radians, sweep signed:
 *                              positive = counterclockwise in PDF user space, y up) or null when the points are in a line
 *   arcBeziers(arc)            the arc as cubic Bézier segments (≤ 90° each): [[p0, c1, c2, p3], …]
 *   arcLength(arc)             r × |sweep|
 *   angleAt(a, v, b)           the angle between v→a and v→b in degrees, 0–180
 *   angleArc(a, v, b, r)       the small arc that marks that angle, radius r round v → { c, r, a0, sweep }
 *   formatAngle(deg, places)   "37.5°"
 */

export function arcThrough(a, m, b) {
  const d = 2 * (a[0] * (m[1] - b[1]) + m[0] * (b[1] - a[1]) + b[0] * (a[1] - m[1]));
  const span = Math.max(Math.hypot(b[0] - a[0], b[1] - a[1]), Math.hypot(m[0] - a[0], m[1] - a[1]), 1e-9);
  if (Math.abs(d) < 1e-9 * span * span) return null;
  const s = (p) => p[0] * p[0] + p[1] * p[1];
  const cx = (s(a) * (m[1] - b[1]) + s(m) * (b[1] - a[1]) + s(b) * (a[1] - m[1])) / d;
  const cy = (s(a) * (b[0] - m[0]) + s(m) * (a[0] - b[0]) + s(b) * (m[0] - a[0])) / d;
  const r = Math.hypot(a[0] - cx, a[1] - cy);
  if (!(r < 1e7)) return null;
  const ang = (p) => Math.atan2(p[1] - cy, p[0] - cx);
  const a0 = ang(a), am = ang(m), a1 = ang(b);
  const ccw = (x) => ((x % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  // counterclockwise from a: does m come before b? then the arc runs counterclockwise
  const toM = ccw(am - a0), toB = ccw(a1 - a0);
  const sweep = toM <= toB ? toB : -(2 * Math.PI - toB);
  return { c: [cx, cy], r, a0, sweep };
}

export function arcBeziers({ c, r, a0, sweep }) {
  const n = Math.max(1, Math.ceil(Math.abs(sweep) / (Math.PI / 2) - 1e-9));
  const step = sweep / n;
  const k = (4 / 3) * Math.tan(step / 4);
  const out = [];
  for (let i = 0; i < n; i++) {
    const t0 = a0 + i * step, t1 = t0 + step;
    const p0 = [c[0] + r * Math.cos(t0), c[1] + r * Math.sin(t0)];
    const p3 = [c[0] + r * Math.cos(t1), c[1] + r * Math.sin(t1)];
    out.push([p0, [p0[0] - k * r * Math.sin(t0), p0[1] + k * r * Math.cos(t0)], [p3[0] + k * r * Math.sin(t1), p3[1] - k * r * Math.cos(t1)], p3]);
  }
  return out;
}

export const arcLength = (arc) => (arc ? arc.r * Math.abs(arc.sweep) : 0);

export function angleAt(a, v, b) {
  const u = [a[0] - v[0], a[1] - v[1]], w = [b[0] - v[0], b[1] - v[1]];
  const lu = Math.hypot(...u), lw = Math.hypot(...w);
  if (!lu || !lw) return 0;
  const cos = Math.max(-1, Math.min(1, (u[0] * w[0] + u[1] * w[1]) / (lu * lw)));
  return (Math.acos(cos) * 180) / Math.PI;
}

export function angleArc(a, v, b, r) {
  const t0 = Math.atan2(a[1] - v[1], a[0] - v[0]), t1 = Math.atan2(b[1] - v[1], b[0] - v[0]);
  let sweep = t1 - t0;
  while (sweep > Math.PI) sweep -= 2 * Math.PI;
  while (sweep < -Math.PI) sweep += 2 * Math.PI;
  return { c: v.slice(), r, a0: t0, sweep };
}

export function formatAngle(deg, places = 1) {
  return (Math.round(deg * 10 ** places) / 10 ** places).toFixed(places) + '°';
}
