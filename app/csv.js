/* SPDX-License-Identifier: Apache-2.0 */
/**
 * csv.js — CSV exports of the markups list and the punch list. No DOM.
 * Cells that start with = + - @ (or a tab/CR) are prefixed with ' so a spreadsheet never runs them as
 * formulas: markup text can come from any PDF.
 */

import { TYPES, statusName, punchStatusName } from './model.js';
import { t } from './i18n.js';

const head = (keys) => keys.map((k) => t('csv.' + k));

export function cell(v) {
  let s = v === null || v === undefined ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

export function toCsv(rows) {
  return '﻿' + rows.map((r) => r.map(cell).join(',')).join('\r\n') + '\r\n';
}

const lastReply = (m) => { const r = (m.replies || []).at(-1); return r ? (r.author ? r.author + ': ' : '') + r.text : ''; };
const day = (iso) => (iso ? String(iso).slice(0, 10) : '');

/** sheetOf(m) → { title, file, page }; measureOf(m) → the measured value (length, area + perimeter, count) */
/** A column's cell: a custom column's value (0.4 K19), or an add-on column's value(m) (0.5 AO.6; a throw = empty). */
function colValue(c, m) {
  if (typeof c.value !== 'function') return m.fields?.[c.key] ?? '';
  try { const v = c.value(m); return v === null || v === undefined ? '' : typeof v === 'number' ? v : String(v); } catch { return ''; }
}

export function markupRows(markups, sheetOf, measureOf = () => '', spaceOf = null, columns = []) {
  const rows = [head(['punch_no', 'sheet', 'file', 'page', 'type', 'subject', 'text', 'comment', 'measurement', 'author', 'created', 'modified', 'status', 'replies', 'last_reply', 'color', 'read_only', ...(spaceOf ? ['space'] : [])]).concat(columns.map((c) => c.name))];
  for (const m of markups) {
    const s = sheetOf(m) || {};
    rows.push([m.punch?.n ?? '', s.title || '', s.file || '', s.page ?? '', m.type === 'foreign' ? m.src?.subtype || TYPES.foreign.name : TYPES[m.type]?.name || m.type, m.subject,
      m.type === 'stamp' || m.type === 'image' || m.type === 'count' ? m.label : m.text, m.comment, measureOf(m), m.author, m.created, m.modified, statusName(m.status),
      (m.replies || []).length, lastReply(m), m.style?.color || '', m.locked ? t('csv.yes') : '', ...(spaceOf ? [spaceOf(m)] : []), ...columns.map((c) => colValue(c, m))]);
  }
  return rows;
}

export function punchRows(markups, sheetOf) {
  const rows = [head(['no', 'sheet', 'file', 'page', 'item', 'comment', 'assignee', 'due', 'status', 'markup_status', 'author', 'created'])];
  for (const m of markups.filter((x) => x.punch).sort((a, b) => a.punch.n - b.punch.n)) {
    const s = sheetOf(m) || {};
    rows.push([m.punch.n, s.title || '', s.file || '', s.page ?? '', m.subject || TYPES[m.type]?.name || '', m.type === 'text' || m.type === 'callout' ? [m.text, m.comment].filter(Boolean).join(' — ') : m.comment,
      m.punch.assignee, m.punch.due, punchStatusName(m.punch.status), statusName(m.status), m.author, day(m.created)]);
  }
  return rows;
}
