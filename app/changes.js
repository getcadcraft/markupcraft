/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: the plain list is built in English for the assistant and the export; the panel words its own headings from the language file */
/**
 * changes.js — what changed between two revisions, as a plain list (0.8 EG.65). No DOM.
 *
 * Input is what the compare already makes: for each pair of sheets the lines taken out and put in (vecdiff.js), and, when
 * the page has them, the words on each revision. Output is a list a person can read and an assistant can narrate, in order
 * of how much changed: where on the sheet (upper left, centre …), how big, whether lines were added, removed or both, which
 * markups sit there, and which words changed. Nothing is guessed about meaning: "a wall moved" is for the assistant to say
 * from this list and the picture; the list says what is on the page.
 *
 *   describeChanges(pairs, opts) → { sheets: [...], totals, lines: [string] }
 *   pair = { sheetNo, title, oldKey, newKey, d: { removed, added } | null, view: [x0,y0,x1,y1], mmPerPt?, oldText?, newText?, state? }
 *          state 'added' (only in the new set) | 'removed' (only in the old) | undefined (in both)
 *   text items = [{ str, x, y }] in PDF points
 */

import { clusters } from './vecdiff.js';

export const LIMITS = { areas: 40, text: 30 };
const SIZE_WORDS = ['upper left', 'top', 'upper right', 'left', 'centre', 'right', 'lower left', 'bottom', 'lower right'];
const r1 = (v) => Math.round(v * 10) / 10;
const len = (l) => l.reduce((s, q) => s + Math.hypot(q[2] - q[0], q[3] - q[1]), 0);

/** Where a point is on a sheet, in words (a 3 × 3 grid; y is up in PDF space). */
export function whereOn(view, x, y) {
  const w = view[2] - view[0], h = view[3] - view[1];
  if (!(w > 0 && h > 0)) return 'centre';
  const col = Math.min(2, Math.max(0, Math.floor(((x - view[0]) / w) * 3)));
  const row = Math.min(2, Math.max(0, Math.floor(((view[3] - y) / h) * 3)));   // 0 = top
  return SIZE_WORDS[row * 3 + col];
}

/** A size in the sheet's own units: inches on paper, and the real length when the sheet is calibrated (mm per point). */
export function sizeWords(wPt, hPt, mmPerPt = 0) {
  const paper = r1(wPt / 72) + ' × ' + r1(hPt / 72) + ' in on the sheet';
  if (!(mmPerPt > 0)) return paper;
  const m = (v) => (v * mmPerPt >= 1000 ? r1(v * mmPerPt / 1000) + ' m' : Math.round(v * mmPerPt) + ' mm');
  return 'about ' + m(wPt) + ' × ' + m(hPt) + ' (' + paper + ')';
}

const norm = (s) => String(s || '').replace(/\s+/g, ' ').trim();
/** Words that appear on one revision and not the other (multiset by text, so a repeated label counts once per copy). */
export function diffText(oldItems = [], newItems = []) {
  const bag = (items) => { const m = new Map(); for (const it of items) { const k = norm(it.str); if (!k) continue; (m.get(k) || m.set(k, []).get(k)).push(it); } return m; };
  const a = bag(oldItems), b = bag(newItems);
  const removed = [], added = [];
  for (const [k, list] of a) { const n = (b.get(k) || []).length; for (const it of list.slice(n)) removed.push({ str: k, x: it.x, y: it.y }); }
  for (const [k, list] of b) { const n = (a.get(k) || []).length; for (const it of list.slice(n)) added.push({ str: k, x: it.x, y: it.y }); }
  return { removed, added };
}

function inBox(b, x, y, pad = 0) { return x >= b[0] - pad && x <= b[2] + pad && y >= b[1] - pad && y <= b[3] + pad; }

export function describeChanges(pairs, { markups = [], minChange = 6, gap = 18, tasks = true } = {}) {
  const sheets = [];
  const totals = { sheets: 0, changed: 0, added: 0, removedSheets: 0, areas: 0, textAdded: 0, textRemoved: 0 };
  for (const p of pairs) {
    totals.sheets++;
    const name = p.sheetNo || p.title || '';
    if (p.state === 'added') { totals.added++; sheets.push({ sheet: name, title: p.title || '', status: 'added', areas: [], text: { added: [], removed: [] }, summary: 'New sheet in this revision.' }); continue; }
    if (p.state === 'removed') { totals.removedSheets++; sheets.push({ sheet: name, title: p.title || '', status: 'removed', areas: [], text: { added: [], removed: [] }, summary: 'This sheet is not in the new revision.' }); continue; }
    const d = p.d || { removed: [], added: [] };
    const boxes = clusters([...d.removed, ...d.added], { gap, minLen: minChange });
    const areas = boxes.map((b) => {
      const rem = d.removed.filter((s) => inBox(b, (s[0] + s[2]) / 2, (s[1] + s[3]) / 2, 1)), add = d.added.filter((s) => inBox(b, (s[0] + s[2]) / 2, (s[1] + s[3]) / 2, 1));
      const lr = len(rem), la = len(add);
      const kind = lr >= minChange && la >= minChange ? 'modified' : la >= lr ? 'added' : 'removed';
      const near = markups.filter((m) => m.sheet === p.newKey || m.sheet === p.oldKey).filter((m) => { const r = m.rect || (m.pts && m.pts.length ? [Math.min(...m.pts.map((q) => q[0])), Math.min(...m.pts.map((q) => q[1])), Math.max(...m.pts.map((q) => q[0])), Math.max(...m.pts.map((q) => q[1]))] : null); return r && !(r[2] < b[0] - 12 || r[0] > b[2] + 12 || r[3] < b[1] - 12 || r[1] > b[3] + 12); });
      const cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;
      const where = whereOn(p.view, cx, cy), size = sizeWords(b[2] - b[0], b[3] - b[1], p.mmPerPt);
      const area = { n: 0, kind, where, box: b.map(r1), size, removed: Math.round(lr), added: Math.round(la), markups: near.map((m) => m.id), tasks: tasks ? near.filter((m) => m.task).map((m) => m.id) : [] };
      area.text = (kind === 'modified' ? 'Lines changed' : kind === 'added' ? 'Lines added' : 'Lines removed') + ' in the ' + where + ', ' + size + (near.length ? '; ' + near.length + ' markup' + (near.length === 1 ? '' : 's') + ' here' : '') + '.';
      return area;
    }).sort((x, y) => (y.removed + y.added) - (x.removed + x.added));
    areas.forEach((a, i) => { a.n = i + 1; });
    const more = Math.max(0, areas.length - LIMITS.areas);
    const t = diffText(p.oldText, p.newText);
    const text = { removed: t.removed.slice(0, LIMITS.text).map((w) => ({ str: w.str, where: whereOn(p.view, w.x, w.y) })), added: t.added.slice(0, LIMITS.text).map((w) => ({ str: w.str, where: whereOn(p.view, w.x, w.y) })), more: Math.max(0, t.removed.length - LIMITS.text) + Math.max(0, t.added.length - LIMITS.text) };
    const changed = areas.length > 0 || t.removed.length > 0 || t.added.length > 0;
    if (changed) totals.changed++;
    totals.areas += areas.length; totals.textAdded += t.added.length; totals.textRemoved += t.removed.length;
    sheets.push({
      sheet: name, title: p.title || '', status: changed ? 'changed' : 'unchanged', areas: areas.slice(0, LIMITS.areas), moreAreas: more, text,
      summary: changed ? areas.length + ' area' + (areas.length === 1 ? '' : 's') + ' of drawing changed' + (t.added.length + t.removed.length ? ', ' + (t.added.length + t.removed.length) + ' word' + (t.added.length + t.removed.length === 1 ? '' : 's') + ' changed' : '') + '.' : 'No change found.',
    });
  }
  sheets.sort((a, b) => ({ added: 0, removed: 1, changed: 2, unchanged: 3 }[a.status] - { added: 0, removed: 1, changed: 2, unchanged: 3 }[b.status]) || (b.areas.length - a.areas.length));
  return { sheets, totals, lines: changesLines({ sheets, totals }) };
}

/** The plain list, one line per fact, in the order a reader wants it. */
export function changesLines(res) {
  const out = [];
  const T = res.totals;
  out.push(T.changed + ' of ' + (T.sheets - T.added - T.removedSheets) + ' matched sheets changed' + (T.added ? '; ' + T.added + ' new' : '') + (T.removedSheets ? '; ' + T.removedSheets + ' dropped' : '') + '.');
  for (const s of res.sheets) {
    if (s.status === 'unchanged') continue;
    out.push(s.sheet + (s.title && s.title !== s.sheet ? ' ' + s.title : '') + ': ' + s.summary);
    for (const a of s.areas) out.push('  ' + a.n + '. ' + a.text);
    if (s.moreAreas) out.push('  and ' + s.moreAreas + ' smaller area' + (s.moreAreas === 1 ? '' : 's') + '.');
    for (const w of s.text?.removed || []) out.push('  Words removed (' + w.where + '): ' + w.str);
    for (const w of s.text?.added || []) out.push('  Words added (' + w.where + '): ' + w.str);
    if (s.text?.more) out.push('  and ' + s.text.more + ' more word changes.');
  }
  return out;
}

export const changesText = (res) => changesLines(res).join('\n');

export const changesCsvRows = (res) => res.sheets.flatMap((s) => s.status === 'changed'
  ? [...s.areas.map((a) => ({ sheet: s.sheet, what: 'drawing ' + a.kind, where: a.where, size: a.size, detail: a.markups.length ? a.markups.length + ' markups here' : '' })),
    ...(s.text?.removed || []).map((w) => ({ sheet: s.sheet, what: 'words removed', where: w.where, size: '', detail: w.str })),
    ...(s.text?.added || []).map((w) => ({ sheet: s.sheet, what: 'words added', where: w.where, size: '', detail: w.str }))]
  : [{ sheet: s.sheet, what: 'sheet ' + s.status, where: '', size: '', detail: s.summary }]).filter((r) => r.what !== 'sheet unchanged');
