/* SPDX-License-Identifier: Apache-2.0 */
/**
 * legend.js — a markup legend that counts as you go (0.4 K21). No DOM.
 * A legend is a markup of type 'legend' (a box; `label` = its title; `legend.scope` = 'sheet' | 'set'). Its rows are
 * worked out from the other markups whenever it is drawn or saved: one row per kind of markup — its subject (or type
 * name) and color — with how many there are (a count group counts its marks). Legends, spaces and comments from other
 * programs are left out.
 *
 *   legendRows(markups, { sheet, scope, name }) → [{ label, color, type, n }], most first (≤ 40)
 *   rowsKey(rows)                                → a short string that changes when the rows do (for the drawing cache)
 */

const SKIP = new Set(['legend', 'foreign', 'space']);

export function legendRows(markups, { sheet, scope = 'sheet', name = (m) => m.type } = {}) {
  const by = new Map();
  for (const m of markups) {
    if (SKIP.has(m.type) || m.locked) continue;
    if (scope !== 'set' && m.sheet !== sheet) continue;
    const label = (m.subject || name(m)).trim() || name(m);
    const color = m.style?.color || '#000000';
    const k = label + '\u0000' + color;
    const n = m.type === 'count' ? (m.pts?.length || 0) : 1;
    const r = by.get(k);
    if (r) r.n += n; else by.set(k, { label, color, type: m.type, n });
  }
  return [...by.values()].sort((a, b) => b.n - a.n || a.label.localeCompare(b.label)).slice(0, 40);
}

export const rowsKey = (rows) => rows.map((r) => r.label + ':' + r.color + ':' + r.n).join('|');
