/* SPDX-License-Identifier: Apache-2.0 */
/**
 * columns.js — custom columns on markups (0.4 K19). No DOM.
 * The set has a list of columns { key, name, type: text | choice | number | date, choices: [] }; each markup keeps its
 * values in `fields` { key: text }. Columns travel in the saved PDF's Info (/MarkupCraftColumns), values in each
 * markup's private data. Both are checked like any file data.
 *
 *   TYPES_OF_COLUMN                 the four kinds
 *   cleanColumns(v)                 → columns (≤ 30; names ≤ 60; ≤ 50 choices of ≤ 60 characters; keys c1, c2 … kept)
 *   cleanFields(v)                  → { key: value } (≤ 50 keys, values ≤ 500 characters, plain text)
 *   fieldOk(column, value)          → '' or the language key of why the value does not fit (number / date / choice)
 *   newColumnKey(columns)           → an unused key
 *   compareBy(column)               → a sort compare for markups on that column (empty values last)
 */

export const TYPES_OF_COLUMN = ['text', 'choice', 'number', 'date'];   // i18n-ignore (ids)
const plain = (v, n) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim().slice(0, n);

export function cleanColumns(v) {
  if (!Array.isArray(v)) return [];
  const seen = new Set();
  const out = [];
  for (const c of v.slice(0, 30)) {
    if (!c || typeof c !== 'object') continue;
    const key = /^c\d{1,4}$/.test(c.key) ? c.key : null;
    const name = plain(c.name, 60);
    if (!key || !name || seen.has(key)) continue;
    seen.add(key);
    const type = TYPES_OF_COLUMN.includes(c.type) ? c.type : 'text';
    const choices = type === 'choice' && Array.isArray(c.choices) ? [...new Set(c.choices.map((x) => plain(x, 60)).filter(Boolean))].slice(0, 50) : [];
    out.push({ key, name, type, choices });
  }
  return out;
}

export function cleanFields(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return {};
  const out = {};
  for (const [k, val] of Object.entries(v).slice(0, 50)) if (/^c\d{1,4}$/.test(k)) { const s = plain(val, 500); if (s) out[k] = s; }
  return out;
}

export function fieldOk(col, value) {
  const v = String(value ?? '').trim();
  if (!v) return '';
  if (col.type === 'number' && !Number.isFinite(Number(v.replace(/,/g, '')))) return 'col.err.number';
  if (col.type === 'date' && !/^\d{4}-\d{2}-\d{2}$/.test(v)) return 'col.err.date';
  if (col.type === 'choice' && !col.choices.includes(v)) return 'col.err.choice';
  return '';
}

export function newColumnKey(columns) {
  let n = 1;
  const used = new Set(columns.map((c) => c.key));
  while (used.has('c' + n)) n++;
  return 'c' + n;
}

export function compareBy(col) {
  const get = (m) => String(m.fields?.[col.key] ?? '').trim();
  return (a, b) => {
    const x = get(a), y = get(b);
    if (!x || !y) return (!x) - (!y);
    if (col.type === 'number') return Number(x.replace(/,/g, '')) - Number(y.replace(/,/g, ''));
    if (col.type === 'choice') return col.choices.indexOf(x) - col.choices.indexOf(y);
    return x.localeCompare(y, undefined, { numeric: true });
  };
}
