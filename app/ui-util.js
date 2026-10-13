/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui-util.js — small DOM and formatting helpers for the MarkupCraft UI (its own copy).
 * el() is the only way file-derived text reaches the page: children are appended as text nodes
 * (textContent semantics), never parsed as HTML. A PDF is untrusted input.
 */

export function el(tag, props = {}, ...children) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'className') n.className = v;
    else if (k === 'value' && n.tagName === 'TEXTAREA') n.value = String(v);
    else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'dataset') Object.assign(n.dataset, v);
    else if (k in n && typeof v !== 'string') n[k] = v;
    else n.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of children.flat(Infinity)) if (c !== null && c !== undefined && c !== false) n.append(c);
  return n;
}

export function bytes(n) {
  if (n < 1024) return n + ' B';
  if (n < 1048576) return (n / 1024).toFixed(0) + ' KB';
  return (n / 1048576).toFixed(1) + ' MB';
}

export const num = (n) => Number(n).toLocaleString('en-US');

export const frame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

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
