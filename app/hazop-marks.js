/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the words come in through `words` (the page's t()); this file only arranges them. */
/**
 * hazop-marks.js — a P&ID's HAZOP nodes as markers on a printed sheet (0.8 CH.14, the MarkupCraft half; apps-mount_PART_5). DOM-free.
 * The file is what CadCraft's P&ID add-on writes with Export › HAZOP node boxes: `cadcraft-hazop-markers` version 1,
 *   { format, version, sheet, unit: 'mm', note, nodes: [{ id, name, box: [x0, y0, x1, y1] (mm of the P&ID sheet, y up), equipment: [tag], lines: [tag] }] }.
 * Each node becomes a rectangle markup on the open sheet with the node's number and name, its equipment and lines in the text, subject
 * "HAZOP", status Open; a person then writes the study's findings as replies on it. A printed sheet is the drawing's mm × (72 / 25.4) PDF points
 * (a sheet printed at full size), × `scale` when it was printed at another scale (0.5 for 1:2). The lower left of the sheet is the P&ID's origin.
 * A node whose box falls outside the page is not drawn, and is counted.
 *
 *   markersFromJson(text) → { nodes: [{ id, name, box, equipment, lines }], sheet, bad }   (cleaned field by field; a wrong file → nodes [])
 *   hazopMarkers(nodes, { sheet, view, scale, author, words }) → { fields: [markup fields], outside: n }
 */
const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const str = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
const MM = 72 / 25.4;

export function markersFromJson(text) {
  let j; try { j = JSON.parse(String(text ?? '')); } catch { return { nodes: [], sheet: '', bad: 1 }; }
  if (!j || j.format !== 'cadcraft-hazop-markers' || j.version !== 1 || !Array.isArray(j.nodes)) return { nodes: [], sheet: '', bad: 1 };
  const nodes = []; let bad = 0;
  for (const n of j.nodes.slice(0, 500)) {
    const b = n && n.box;
    if (!n || !Array.isArray(b) || b.length !== 4 || !b.every(fin) || !(b[2] > b[0]) || !(b[3] > b[1]) || !str(n.name, 80)) { bad++; continue; }
    const list = (v) => (Array.isArray(v) ? v.slice(0, 60).map((x) => str(x, 40)).filter(Boolean) : []);
    nodes.push({ id: str(n.id, 20), name: str(n.name, 80), box: b.map(Number), equipment: list(n.equipment), lines: list(n.lines) });
  }
  return { nodes, sheet: str(j.sheet, 120), bad };
}

/** words = { node, equipment, lines, subject } (English by default). */
export function hazopMarkers(nodes, { sheet, view, scale = 1, author = '', words = {} } = {}) {
  const W = { node: 'HAZOP node', equipment: 'equipment', lines: 'lines', subject: 'HAZOP', ...words };
  const [vx0, vy0, vx1, vy1] = view || [0, 0, 612, 792];
  const k = MM * (Number.isFinite(scale) && scale > 0 ? scale : 1);
  const fields = []; let outside = 0;
  for (const n of nodes) {
    const r = [vx0 + n.box[0] * k, vy0 + n.box[1] * k, vx0 + n.box[2] * k, vy0 + n.box[3] * k];
    if (r[2] < vx0 || r[0] > vx1 || r[3] < vy0 || r[1] > vy1) { outside++; continue; }
    const rect = [Math.max(vx0, r[0]), Math.max(vy0, r[1]), Math.min(vx1, r[2]), Math.min(vy1, r[3])];
    const text = [W.node + (n.id ? ' ' + n.id : '') + ': ' + n.name,
      n.equipment.length ? W.equipment + ' ' + n.equipment.join(', ') : '', n.lines.length ? W.lines + ' ' + n.lines.join(', ') : ''].filter(Boolean).join('. ');
    fields.push({ sheet, type: 'rect', rect, author, text, subject: W.subject, status: 'Open' });
  }
  return { fields, outside };
}
