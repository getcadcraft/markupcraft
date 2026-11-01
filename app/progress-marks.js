/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the words come in through `words` (the page's t()); this file only arranges them. */
/**
 * progress-marks.js — site progress from drone flights and scans as notes on a sheet (0.8 EG.39, the MarkupCraft half; the engine is CivilCraft's
 * progress.js and the file is the survey rows CivilCraft keeps in its project, `state.progress`: { date, label, pct, remainingCut, remainingFill,
 * overCut, overFill, stockpile, dig, within, covered } per survey, volumes in cubic metres). DOM-free.
 *
 *   progressFromJson(text) → { rows, bad }          accepts the array itself, { progress: [...] } or CivilCraft's project json; cleaned field by field
 *   progressNotes(rows, { sheet, view, author, words, step }) → [fields]   one note per survey, newest at the top of a column down the left margin
 *   progressLine(row, words) → text                 "2026-10-20, drone flight: 42 % done; left to cut 1,200 m³ …"
 */
const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const str = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);

export function progressFromJson(text) {
  let j; try { j = JSON.parse(String(text ?? '')); } catch { return { rows: [], bad: 1 }; }
  const list = Array.isArray(j) ? j : Array.isArray(j?.progress) ? j.progress : Array.isArray(j?.state?.progress) ? j.state.progress : [];
  const rows = []; let bad = 0;
  for (const r of list.slice(0, 400)) {
    if (!r || typeof r !== 'object' || !/^\d{4}-\d{2}-\d{2}$/.test(String(r.date)) || !fin(r.pct)) { bad++; continue; }
    const n = (k, hi = 1e15) => (fin(r[k]) && r[k] >= 0 && r[k] < hi ? r[k] : 0);
    rows.push({ date: String(r.date), label: str(r.label, 80), pct: Math.min(n('pct', 1000), 100), remainingCut: n('remainingCut'), remainingFill: n('remainingFill'), overCut: n('overCut'), overFill: n('overFill'), stockpile: n('stockpile'), dig: n('dig'), within: n('within', 2) });
  }
  rows.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));   // newest first
  return { rows, bad };
}

const vol = (v) => Math.round(v).toLocaleString('en-US') + ' m³';

/** words = { done, cut, fill, overCut, overFill, stockpile, dig, within } — the page's translated labels (English by default). */
export function progressLine(r, words = {}) {
  const W = { done: 'done', cut: 'left to cut', fill: 'left to fill', overCut: 'over-dug', overFill: 'over-filled', stockpile: 'stockpile off the plan', dig: 'dug off the plan', within: 'of ground within tolerance', ...words };
  const parts = [`${r.pct.toFixed(r.pct < 10 ? 1 : 0)} % ${W.done}`];
  if (r.remainingCut > 0.5) parts.push(`${W.cut} ${vol(r.remainingCut)}`);
  if (r.remainingFill > 0.5) parts.push(`${W.fill} ${vol(r.remainingFill)}`);
  if (r.overCut > 0.5) parts.push(`${vol(r.overCut)} ${W.overCut}`);
  if (r.overFill > 0.5) parts.push(`${vol(r.overFill)} ${W.overFill}`);
  if (r.stockpile > 0.5) parts.push(`${vol(r.stockpile)} ${W.stockpile}`);
  if (r.dig > 0.5) parts.push(`${vol(r.dig)} ${W.dig}`);
  if (r.within > 0) parts.push(`${Math.round(r.within * 100)} % ${W.within}`);
  return [r.date + (r.label ? ', ' + r.label : ''), parts.join('; ')].join(': ');
}

export function progressNotes(rows, { sheet, view, author = '', words = {}, step = 26 } = {}) {
  const [x0, , , y1] = view || [0, 0, 612, 792];
  return rows.map((r, i) => ({
    sheet, type: 'note', pts: [[x0 + 24, y1 - 24 - i * step]], author, text: progressLine(r, words),
    subject: words.subject || 'Site progress', status: (r.overCut > 0.5 || r.overFill > 0.5 || r.stockpile > 0.5) ? 'Open' : 'Accepted',
  }));
}
