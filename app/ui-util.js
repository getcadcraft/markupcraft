/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui-util.js — small DOM and formatting helpers for the MarkupCraft UI (its own copy).
 * el() is the only way file-derived text reaches the page: children are appended as text nodes
 * (textContent semantics), never parsed as HTML. A PDF is untrusted input.
 */
import { makeEl, bytes, num, frame } from './ui-util-core.js';
export { bytes, num, frame };

export const el = makeEl({ textareaValue: true });   // PERF.74: the shared builder with this app's own rules (ui-util-core.js)

/** Hand the browser a file to save (a download; nothing is uploaded). */
export function download(data, name, type) {
  const blob = data instanceof Blob ? data : new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = el('a', { href: url, download: name.replace(/[\\/:*?"<>|]+/g, '_') });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

/** A date for lists: "Oct 10, 2026". */
export function shortDate(iso) {
  const d = new Date(iso);
  return Number.isNaN(+d) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
export function dateTime(iso) {
  const d = new Date(iso);
  return Number.isNaN(+d) ? '' : d.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}
