/* SPDX-License-Identifier: Apache-2.0 */
/**
 * arc-tool.js — the Arc tool's ten ways to draw an arc (0.9 FX.137). No DOM. The geometry is the shared ./arcs/arcs.js
 * (byte-identical copy of lib/arcs, node tools/arcs/sync.mjs markupcraft); this is only the step machine around it.
 *
 *   ARC_METHODS                       the ten method ids, in menu order
 *   arcSession(method)                one arc being drawn: .role (what the next input is), .numeric, .point(p), .value(x), .back(),
 *                                     .preview(cursor) → { pts?, guide? }, .finish() → { pts } | { error }
 *   typedValue(role, text, cal, rot)  a typed angle (degrees, negative = clockwise), direction (degrees as seen), length or radius
 *                                     (in the sheet's calibrated units; negative length = clockwise, negative radius = the long way)
 *
 * The markup stays what it always was: pts = [start, a point on the arc, end] in PDF user space, so files are unchanged. Every
 * method's result goes through threePoints(), which is start, middle and end of the counter-clockwise arc; the stored points
 * therefore always describe the arc the person meant, even for a negative angle (the clockwise arc between the same two ends).
 */
import { METHODS, ROLES, solve, drag, threePoints, sweep } from './arcs/arcs.js';
import { parseLength } from './units.js';

export const ARC_METHODS = ['3P', 'SCE', 'SCA', 'SCL', 'SEA', 'SED', 'SER', 'CSE', 'CSA', 'CSL'];
export { METHODS, ROLES };
const NUMERIC = new Set(['angle', 'length', 'radius', 'direction']);
const xy = (p) => ({ x: p[0], y: p[1] });
const arr = (p) => [p.x, p.y];

export function arcSession(method) {
  if (!ARC_METHODS.includes(method)) method = '3P';
  const roles = ROLES[method], v = [];
  const three = (arc) => (arc && sweep(arc) < Math.PI * 2 - 1e-6 ? threePoints(arc).map(arr) : null);
  return {
    method, roles, v,
    get role() { return roles[v.length]; },
    get numeric() { return NUMERIC.has(roles[v.length]); },
    get started() { return v.length > 0; },
    /** A point for the next (point) input. */
    point(p) { if (this.numeric || v.length >= roles.length) return false; v.push(xy(p)); return true; },
    /** A number for the next (numeric) input: radians for angle and direction, user units for length and radius. */
    value(x) { if (!this.numeric || !Number.isFinite(x)) return false; v.push(x); return true; },
    /** The pointer's meaning for the numeric input (what a click would give). */
    pointer(cur) { return this.numeric ? drag(method, v, xy(cur)) : null; },
    back() { return v.pop() !== undefined; },
    preview(cur) {
      if (!v.length) return {};
      const out = {};
      if (v.length === roles.length - 1) {
        const r = drag(method, v, xy(cur));
        if (r) { const pts = three(r.arc); if (pts) out.pts = pts; }
      }
      if (!out.pts) {
        const a = v[0], c = v.length === 1 ? cur : arr(v[v.length - 1]);
        out.guide = [arr(a), v.length === 1 ? c : cur];
      }
      return out;
    },
    finish() {
      if (v.length !== roles.length) return { error: 'incomplete' };
      if (method === '3P') {   // the clicked points are stored as they are, as they always were
        const r = solve('3P', v);
        return r.arc ? { pts: v.map(arr) } : { error: r.error };
      }
      const r = solve(method, v);
      if (!r.arc) return { error: r.error };
      const pts = three(r.arc);
      return pts ? { pts } : { error: 'full' };
    },
  };
}

/** → { value } (radians for angle and direction, user units for length and radius) or { error: <lang key> }. */
export function typedValue(role, text, cal, rot = 0) {
  let s = String(text ?? '').trim().replace(/[−–—]/g, '-').replace(/°$/, '').trim();
  const neg = s.startsWith('-');
  if (neg) s = s.slice(1).trim();
  if (role === 'angle' || role === 'direction') {
    if (!/^\d+(\.\d+)?$|^\.\d+$/.test(s)) return { error: 'arc.err.degrees' };
    let deg = Number(s) * (neg ? -1 : 1);
    if (role === 'direction') deg += rot || 0;   // as seen: right = 0, up = 90; turned back by the page's rotation (as sketch.js does)
    return { value: (deg * Math.PI) / 180 };
  }
  if (!cal || !(cal.mmPerPt > 0)) return { error: 'sketch.err.scale' };
  const mm = parseLength(s, cal.unit);
  if (!(mm > 0)) return { error: 'sketch.err.length' };
  return { value: (neg ? -mm : mm) / cal.mmPerPt };
}
