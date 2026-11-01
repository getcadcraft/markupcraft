/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: file format words, read by another program */
/**
 * redline.js — redline to revision, MarkupCraft's side (0.8 EG.19). No DOM. Format spec: docs/REDLINE-FORMAT.md.
 *
 * The reviewer marks up a plot of the drawing; the drafter must apply it. MarkupCraft writes a *redline package*
 * (`*.redline.json`): one item per markup that asks for something, with the sheet, where it is, what it says and who said it.
 * CadCraft reads the package, lets the drafter accept or reject each item, clouds what was changed, logs the revision, and
 * writes back an *answers file* (`*.redline-answers.json`). MarkupCraft reads that and sets each markup Accepted or Rejected
 * with a reply, so the reviewer sees what became of every mark.
 *
 *   buildRedline(markups, sheets, opts)  → the package object (plain JSON)
 *   redlineFileName(pkg)                 → "<project>-<revision>.redline.json"
 *   applyAnswers(store, answers, who)    → { applied, unknown, skipped } — one undo step
 *   cleanAnswers(raw)                    → the answers file as stored, or null
 *
 * Geometry is given twice: `frac` (0–1 across the sheet's visible area from its lower-left corner, stable when a sheet is
 * re-plotted at another size) and `pt` (PDF points as drawn). CadCraft maps `frac` onto the plotted layout's viewport.
 */

import { cleanReply, statusReply, nowIso } from './model.js';

export const FORMAT = 'cc-redline', ANSWERS = 'cc-redline-answers', VERSION = 1;
/** What a markup asks the drafter to do, from its type. Not a guess about words: the text is carried as written. */
export const KIND_OF = {
  cloud: 'revise', cloudrect: 'revise', rect: 'area', ellipse: 'area', polygon: 'area', polyline: 'trace', pen: 'trace', highlight: 'look',
  text: 'note', note: 'note', callout: 'note', arrow: 'point', line: 'point', stamp: 'stamp', measure: 'dimension', angle: 'dimension', area: 'dimension', count: 'count',
};
const SKIP = new Set(['foreign', 'legend', 'image', 'space']);
const r3 = (v) => Math.round(v * 1000) / 1000;

function bounds(m) {
  if (m.rect) return m.rect.slice();
  if (m.pts && m.pts.length) { const xs = m.pts.map((p) => p[0]), ys = m.pts.map((p) => p[1]); return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)]; }
  return null;
}

/**
 * markups: the store's list. sheets: [{ key, sheetNo, title, view: [x0,y0,x1,y1], file, mmPerPt? }].
 * opts: { project, revision, by, only: 'open' | 'all' (default open: status Open), ids: [..] }.
 */
export function buildRedline(markups, sheets, { project = '', revision = '', by = '', only = 'open', ids = null, exported = nowIso() } = {}) {
  const byKey = new Map(sheets.map((s) => [s.key, s]));
  const items = [];
  const used = new Set();
  for (const m of markups) {
    if (SKIP.has(m.type) || m.locked || m.flat) continue;
    if (ids && !ids.includes(m.id)) continue;
    if (!ids && only === 'open' && m.status !== 'Open') continue;
    const s = byKey.get(m.sheet), b = bounds(m);
    if (!s || !b) continue;
    used.add(s.key);
    const w = s.view[2] - s.view[0], h = s.view[3] - s.view[1];
    const f = (x, y) => [r3((x - s.view[0]) / w), r3((y - s.view[1]) / h)];
    const lo = f(b[0], b[1]), hi = f(b[2], b[3]);
    items.push({
      id: m.id, sheet: s.sheetNo || s.title, kind: KIND_OF[m.type] || 'note', type: m.type,
      frac: { box: [lo[0], lo[1], hi[0], hi[1]], ...(m.pts && m.pts.length && !m.rect ? { pts: m.pts.map((p) => f(p[0], p[1])) } : {}) },
      pt: { box: b.map(r3), ...(m.pts && m.pts.length ? { pts: m.pts.map((p) => [r3(p[0]), r3(p[1])]) } : {}) },
      text: m.text || '', comment: m.comment || '', label: m.label || '', author: m.author || '', date: m.modified || m.created || '', status: m.status,
      replies: (m.replies || []).filter((r) => r.kind !== 'status').map((r) => ({ author: r.author || '', date: r.date || '', text: r.text || '' })),
      ...(m.task ? { task: { title: m.task.title, assignee: m.task.assignee, due: m.task.due || null, state: m.task.state, link: m.task.link ? { kind: m.task.link.kind, app: m.task.link.app || null, element: m.task.link.element || null } : null } } : {}),
    });
  }
  return {
    format: FORMAT, v: VERSION, project: String(project).slice(0, 200), revision: String(revision).slice(0, 60), by: String(by).slice(0, 120), exported,
    sheets: sheets.filter((s) => used.has(s.key)).map((s) => ({ number: s.sheetNo || '', title: s.title || '', file: s.file || '', size: [r3(s.view[2] - s.view[0]), r3(s.view[3] - s.view[1])], ...(s.mmPerPt ? { mmPerPt: s.mmPerPt } : {}) })),
    items,
  };
}

export function redlineFileName(pkg) {
  const part = (v) => String(v || '').replace(/[^\w.-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
  return (part(pkg.project) || 'markup') + (pkg.revision ? '-' + part(pkg.revision) : '') + '.redline.json';
}

/** The answers file, from anything: `items` of { id, decision: 'accepted' | 'rejected' | 'done', note, by, date }. */
export function cleanAnswers(raw) {
  if (!raw || typeof raw !== 'object' || raw.format !== ANSWERS || !Array.isArray(raw.items)) return null;
  const items = [];
  for (const it of raw.items.slice(0, 20000)) {
    if (!it || typeof it.id !== 'string' || !/^[A-Za-z0-9._-]{1,80}$/.test(it.id)) continue;
    if (!['accepted', 'rejected', 'done'].includes(it.decision)) continue;
    items.push({ id: it.id, decision: it.decision, note: String(it.note || '').slice(0, 2000), by: String(it.by || '').slice(0, 120), date: String(it.date || '').slice(0, 40) });
  }
  return { format: ANSWERS, v: VERSION, project: String(raw.project || '').slice(0, 200), revision: String(raw.revision || '').slice(0, 60), by: String(raw.by || '').slice(0, 120), items };
}

const STATUS_OF = { accepted: 'Accepted', rejected: 'Rejected', done: 'Completed' };
/** Set each answered markup's status and add the drafter's note to its thread: one undo step. */
export function applyAnswers(store, answers, fallbackWho = 'CadCraft') {
  const a = cleanAnswers(answers);
  if (!a) throw new Error('That is not a redline answers file (format ' + ANSWERS + ').');
  const res = { applied: [], unknown: [], skipped: [] };
  store.change('Redline answers', (tx) => {
    for (const it of a.items) {
      const m = store.get(it.id);
      if (!m) { res.unknown.push(it.id); continue; }
      const status = STATUS_OF[it.decision], who = it.by || a.by || fallbackWho;
      if (m.status === status && !it.note) { res.skipped.push(it.id); continue; }
      const entries = [];
      if (m.status !== status) entries.push(statusReply(status, who));
      if (it.note) entries.push(cleanReply({ author: who, text: it.note, kind: 'comment' }));
      const patch = { status, replies: [...m.replies, ...entries.filter(Boolean)] };
      if (m.task && it.decision !== 'rejected' && m.task.state !== 'Done') patch.task = { ...m.task, state: 'Done', closed: { at: nowIso(), how: 'person', who, summary: it.note || 'Applied in the drawing.' } };
      tx.update(it.id, patch);
      res.applied.push(it.id);
    }
  });
  return res;
}
