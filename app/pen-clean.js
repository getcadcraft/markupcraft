/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — markup type names are data; the words the person sees go through t() in the page. */
/**
 * pen-clean.js — pen markups become precise ones (0.8 EG.55, MarkupCraft half). DOM-free; the geometry is stroke-clean.js, CadCraft's
 * stroke cleaner copied byte for byte (tools/strokeclean/sync.mjs). A freehand pen markup is a list of points; the cleaner says what it was meant
 * to be, and this file turns that into the markup type that says it: line, ellipse, rectangle, arc, polyline or polygon. The strokes of one
 * go are also pulled onto each other's loose ends.
 *
 *   cleanPens(markups, opts) → { changes: [{ id, add: fields, kind, joined }], skipped: n }
 *     markups  the pen markups to clean (others, locked ones and one-point scribbles are skipped)
 * The caller removes each pen markup and adds `add` (same sheet, layer, style, author, status) in one undo step.
 */
import { cleanSketch } from './stroke-clean.js';

const pt = (p) => ({ x: p[0], y: p[1] });

/** The fields of the markup that says what this cleaned entity is, or null (keep the pen). */
export function fieldsFor(e) {
  if (e.type === 'line') return { type: 'line', pts: [[e.x1, e.y1], [e.x2, e.y2]] };
  if (e.type === 'circle') return { type: 'ellipse', rect: [e.cx - e.r, e.cy - e.r, e.cx + e.r, e.cy + e.r] };
  if (e.type === 'arc') {
    let sweep = e.a1 - e.a0; if (sweep <= 0) sweep += Math.PI * 2;
    const at = (a) => [e.cx + e.r * Math.cos(a), e.cy + e.r * Math.sin(a)];
    return { type: 'arc', pts: [at(e.a0), at(e.a0 + sweep / 2), at(e.a1)] };
  }
  if (e.type === 'poly') {
    const P = e.pts.map((p) => [p.x, p.y]);
    if (e.closed && P.length === 4) {   // a right-angled four-sided closed stroke that is level: a rectangle
      const xs = P.map((p) => p[0]), ys = P.map((p) => p[1]);
      const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
      const level = P.every((p) => (Math.abs(p[0] - x0) < 1e-6 || Math.abs(p[0] - x1) < 1e-6) && (Math.abs(p[1] - y0) < 1e-6 || Math.abs(p[1] - y1) < 1e-6));
      if (level) return { type: 'rect', rect: [x0, y0, x1, y1] };
    }
    if (P.length >= (e.closed ? 3 : 2)) return { type: e.closed ? 'polygon' : 'polyline', pts: P };
  }
  return null;
}

export function cleanPens(markups, opts = {}) {
  const pens = (markups || []).filter((m) => m && m.type === 'pen' && !m.locked && Array.isArray(m.pts) && m.pts.length >= 2);
  const out = { changes: [], skipped: (markups || []).length - pens.length };
  const bySheet = new Map();
  for (const m of pens) (bySheet.get(m.sheet) || bySheet.set(m.sheet, []).get(m.sheet)).push(m);
  for (const list of bySheet.values()) {
    const res = cleanSketch(list.map((m) => m.pts.map(pt)), null, opts);
    // cleanSketch drops a stroke it cannot read: match by order of the strokes it kept (it keeps every stroke it could clean)
    let k = 0;
    for (const m of list) {
      const e = res.adds[k], r = res.report[k];
      if (!e || !r) { out.skipped++; continue; }
      k++;
      const add = fieldsFor(e);
      if (!add) { out.skipped++; continue; }
      out.changes.push({ id: m.id, add, kind: r.kind, joined: r.joined });
    }
  }
  return out;
}
