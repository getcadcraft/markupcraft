/* SPDX-License-Identifier: Apache-2.0 */
/**
 * link.js — sheet hyperlinks (0.4 K9) and sheet-callout references (K16). No DOM.
 *
 * A markup's `link` names the sheet it jumps to by its sheet number (or, for a sheet with no number, its title), so the
 * link survives reopening, slip-sheeting and other files: it is looked up among the open sheets when used.
 *
 *   cleanLink(v)                 → the stored link text ('' = none; plain text, ≤ 60 characters)
 *   linkTarget(link, sheets)     → the sheet it names, or null: sheets [{ key, sheetNo, title }], the newest one when
 *                                  several share a number (later in the list wins)
 *   calloutRefs(text, sheetNos)  → [{ start, end, ref, no }] — references like "3/A-501", "A-501", "5 / A501", "DETAIL 2
 *                                  ON A-501" in a sheet's text whose sheet number is one of `sheetNos`
 */

import { sheetNoKey } from './slip.js';

export function cleanLink(v) { return String(v ?? '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 60); }

export function linkTarget(link, sheets) {
  const want = sheetNoKey(link);
  if (!want) return null;
  let hit = null;
  for (const s of sheets) if (sheetNoKey(s.sheetNo) === want) hit = s;
  if (hit) return hit;
  for (const s of sheets) if (String(s.title || '').trim().toLowerCase() === String(link).trim().toLowerCase()) hit = s;
  return hit;
}

// a detail number (optional) and a sheet number shaped like the ones titleblock.js reads: A-501, A5.01, KA1-1, M-201A
const REF = /(?:\b(\d{1,3}|[A-Z]\d?)\s*\/\s*)?\b([A-Z]{1,3}[-.]?\d{1,3}(?:[.-]\d{1,3})?[A-Z]?)\b/gi;

export function calloutRefs(text, sheetNos) {
  const known = new Map(sheetNos.filter(Boolean).map((n) => [sheetNoKey(n), n]));
  const out = [];
  for (const m of String(text || '').matchAll(REF)) {
    const no = known.get(sheetNoKey(m[2]));
    if (!no) continue;
    out.push({ start: m.index, end: m.index + m[0].length, ref: m[0], no });
  }
  return out;
}
