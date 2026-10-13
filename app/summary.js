/* SPDX-License-Identifier: Apache-2.0 */
/**
 * summary.js — the markup summary as a workbook and as a PDF report (0.4 K6). No DOM.
 *
 *   summarySheets(markups, { sheetOf, measureOf }) → sheets for xlsx.js writeXlsx():
 *       Markups    one row per markup (the CSV columns: csv.js markupRows), header frozen, numbers as numbers
 *       By sheet   per sheet: markups, open, closed (Accepted/Rejected/Completed), and a column per type
 *       Punch list the punch items (csv.js punchRows), when there are any
 *   summaryPdf(lib, markups, { sheetOf, measureOf, title, date }) → { bytes, missing }: a landscape Letter report,
 *       a title block (set, date, count), a table (No., Sheet, Type, Subject, Text or comment, Value, Author, Status,
 *       Replies) with wrapped cells, repeated headers and page numbers. Helvetica WinAnsi: characters outside it print
 *       "?" and are counted in `missing`, as in the marked-up PDF.
 * Words come from the language file (csv.*, sum.*); stored values (statuses) are shown with statusName.
 */

import { markupRows, punchRows } from './csv.js';
import { TYPES, STATUSES, statusName } from './model.js';
import { textWidth, wrapText } from './font.js';
import { STYLE } from './xlsx.js';
import { t } from './i18n.js';

const CLOSED = new Set(['Accepted', 'Rejected', 'Completed']);   // i18n-ignore (stored values)

export function summarySheets(markups, { sheetOf, measureOf = () => '', spaceOf = null, columns = [] } = {}) {
  const rows = markupRows(markups, sheetOf, measureOf, spaceOf, columns);
  const head = rows[0].map((h) => ({ v: h, s: 'head' }));
  const body = rows.slice(1).map((r) => r.map((v, i) => (typeof v === 'number' ? (i === 13 || i === 3 || i === 0 ? { v, s: 'int' } : v) : v === '' ? null : String(v))));
  const sheets = [{ name: t('sum.sheet.markups'), cols: [8, 22, 22, 6, 14, 18, 36, 36, 18, 18, 20, 20, 12, 8, 36, 9, 9, 18], rows: [head, ...body], freeze: 1 }];
  // per sheet
  const types = [...new Set(markups.map((m) => m.type))];
  const per = new Map();
  for (const m of markups) {
    const s = sheetOf(m) || {};
    const k = (s.title || '') + '\u0000' + (s.file || '') + '\u0000' + (s.page ?? '');
    if (!per.has(k)) per.set(k, { s, n: 0, open: 0, closed: 0, by: {} });
    const e = per.get(k);
    e.n++;
    if (CLOSED.has(m.status)) e.closed++; else e.open++;
    e.by[m.type] = (e.by[m.type] || 0) + 1;
  }
  const h2 = [t('csv.sheet'), t('csv.file'), t('csv.page'), t('sum.col.markups'), t('sum.col.open'), t('sum.col.closed'), ...types.map((ty) => TYPES[ty]?.name || ty)].map((v) => ({ v, s: 'head' }));
  const r2 = [...per.values()].map((e) => [e.s.title || '', e.s.file || '', e.s.page ?? null, { v: e.n, s: 'int' }, { v: e.open, s: 'int' }, { v: e.closed, s: 'int' }, ...types.map((ty) => (e.by[ty] ? { v: e.by[ty], s: 'int' } : null))]);
  const n = r2.length;
  const tot = n ? [{ v: t('sum.total'), s: 'bold' }, null, null, ...[3, 4, 5].map((c) => ({ v: r2.reduce((a, r) => a + (r[c]?.v || 0), 0), f: 'SUM(' + col(c) + '2:' + col(c) + (n + 1) + ')', s: 'int' })),
    ...types.map((_, i) => { const c = 6 + i; return { v: r2.reduce((a, r) => a + (r[c]?.v || 0), 0), f: 'SUM(' + col(c) + '2:' + col(c) + (n + 1) + ')', s: 'int' }; })] : null;
  sheets.push({ name: t('sum.sheet.by_sheet'), cols: [24, 24, 6, 9, 9, 9, ...types.map(() => 12)], rows: [h2, ...r2, ...(tot ? [tot] : [])], freeze: 1 });
  const pr = punchRows(markups, sheetOf);
  if (pr.length > 1) sheets.push({ name: t('sum.sheet.punch'), cols: [6, 22, 22, 6, 18, 40, 18, 12, 14, 14, 18, 12], rows: [pr[0].map((v) => ({ v, s: 'head' })), ...pr.slice(1).map((r) => r.map((v, i) => (i === 0 ? { v, s: 'int' } : v === '' ? null : v)))], freeze: 1 });
  return sheets;
}
const col = (i) => { let s = ''; i++; while (i) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; };
void STYLE;

/** WinAnsi-safe text for pdf-lib's standard Helvetica: characters it cannot encode become "?" (counted). */
function safe(font, text, count) {
  let out = '';
  for (const ch of String(text ?? '')) {
    try { font.encodeText(ch); out += ch; } catch { out += '?'; count.n++; }
  }
  return out;
}

export async function summaryPdf(lib, markups, { sheetOf, measureOf = () => '', title = '', date = new Date() } = {}) {
  const { PDFDocument, StandardFonts, rgb } = lib;
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const count = { n: 0 };
  const W = 792, H = 612, M = 36, size = 8, lh = size * 1.25;
  const cols = [
    [t('csv.no'), 28], [t('csv.sheet'), 90], [t('csv.type'), 62], [t('csv.subject'), 74], [t('sum.col.text'), 190],
    [t('sum.col.value'), 80], [t('csv.author'), 70], [t('csv.status'), 56], [t('csv.replies'), 70],
  ];
  const ink = rgb(0.09, 0.13, 0.17), soft = rgb(0.45, 0.48, 0.52), line = rgb(0.8, 0.82, 0.85);
  const rows = markups.map((m, i) => {
    const s = sheetOf(m) || {};
    const text = [m.type === 'stamp' || m.type === 'image' || m.type === 'count' ? m.label : m.text, m.comment].filter(Boolean).join(' — ');
    const last = (m.replies || []).at(-1);
    return [String(m.punch?.n ?? i + 1), s.title || '', m.type === 'foreign' ? m.src?.subtype || TYPES.foreign.name : TYPES[m.type]?.name || m.type,
      m.subject || '', text, measureOf(m) || '', m.author || '', STATUSES.includes(m.status) ? statusName(m.status) : m.status || '',
      (m.replies || []).length ? t('sum.replies', { n: m.replies.length, last: last ? (last.author ? last.author + ': ' : '') + last.text : '' }) : ''];
  });
  let page = null, y = 0, pageNo = 0;
  const pages = [];
  const header = () => {
    page = doc.addPage([W, H]);
    pages.push(page);
    pageNo++;
    y = H - M;
    if (pageNo === 1) {
      page.drawText(safe(bold, title || t('sum.title'), count), { x: M, y: y - 14, size: 16, font: bold, color: ink });
      y -= 22;
      const meta = t('sum.meta', { date: date.toISOString().slice(0, 10), n: markups.length });
      page.drawText(safe(font, meta, count), { x: M, y: y - 10, size: 9, font, color: soft });
      y -= 22;
    }
    let x = M;
    for (const [h, w] of cols) { page.drawText(safe(bold, h, count), { x: x + 2, y: y - size, size, font: bold, color: ink }); x += w; }
    y -= lh + 3;
    page.drawLine({ start: { x: M, y: y + 1.5 }, end: { x: W - M, y: y + 1.5 }, thickness: 1, color: ink });
    y -= 2;
  };
  header();
  for (const r of rows) {
    const cells = r.map((v, i) => {
      const lines = wrapText(safe(font, v, count), size, cols[i][1] - 4);
      return lines.length > 6 ? [...lines.slice(0, 5), lines[5] + ' …'] : lines;
    });
    const h = Math.max(1, ...cells.map((c) => c.length)) * lh + 3;
    if (y - h < M + 14) header();
    let x = M;
    cells.forEach((c, i) => { c.forEach((ln, k) => page.drawText(ln, { x: x + 2, y: y - size - k * lh, size, font: i === 0 ? bold : font, color: ink })); x += cols[i][1]; });
    y -= h;
    page.drawLine({ start: { x: M, y: y + 1 }, end: { x: W - M, y: y + 1 }, thickness: 0.4, color: line });
  }
  if (!rows.length) page.drawText(safe(font, t('sum.empty'), count), { x: M, y: y - size - 4, size: 10, font, color: soft });
  pages.forEach((p, i) => { const s = safe(font, t('sum.page', { n: i + 1, of: pages.length }), count); p.drawText(s, { x: W - M - textWidth(s, 8), y: M - 16, size: 8, font, color: soft }); });
  doc.setTitle(title || t('sum.title'));
  doc.setProducer('MarkupCraft');   // i18n-ignore (program name)
  return { bytes: await doc.save({ useObjectStreams: false }), missing: count.n, pages: pages.length };
}
