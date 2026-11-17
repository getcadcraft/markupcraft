/* SPDX-License-Identifier: Apache-2.0 */
/**
 * find-ui.js: markupcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFind(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { textIndex, findHits } from './textsearch.js';
import { t } from './i18n.js';
import { el } from './ui-util.js';

export function mountFind(ctx) {
  const { $, find, view, curSheet, sheetByKey, goTo } = ctx;

  // ---- find text in the drawings (0.4 K14): every sheet's own text, hits listed, then clouded in one undo step ----
  const findUi = { box: $('[data-find]'), form: $('[data-find-form]'), q: $('[data-find-q]'), scope: $('[data-find-scope]'), mcase: $('[data-find-case]'), word: $('[data-find-word]'), count: $('[data-find-count]'), list: $('[data-find-list]') };
  const textCache = new Map();   // sheet key → textIndex (dropped with the file)
  const found = { query: '', hits: [], at: -1 };   // hits: [{ key, rect, snippet, start, end }]
  async function sheetText(s) {
    if (textCache.has(s.page.key)) return textCache.get(s.page.key);
    let idx = { text: '', spans: [] };
    // a scan read by OCR (0.7.1 71.10): its words until the file is saved (then they are the PDF's own text)
    const ocr = s.file.ocr?.get(s.page.index);
    if (ocr) idx = textIndex(ocr.items);
    else try { idx = textIndex((await (await s.file.doc.getPage(s.page.index + 1)).getTextContent()).items); } catch { /* closed meanwhile */ }
    textCache.set(s.page.key, idx);
    return idx;
  }
  /** A file's text and hits go when it closes or its pages change. */
  function forgetText(prefix) {
    for (const k of [...textCache.keys()]) if (k.startsWith(prefix)) textCache.delete(k);
    const n = found.hits.length;
    if (!prefix) found.query = '';
    found.hits = found.hits.filter((h) => !h.key.startsWith(prefix));
    if (found.hits.length !== n) { found.at = -1; renderFind(); }
  }

  async function runFind() {
    const q = findUi.q.value.trim();
    if (!q) { findUi.count.textContent = t('find.need'); return; }
    if (!ctx.sheets.length) { findUi.count.textContent = t('need.pdf'); return; }
    const list = findUi.scope.value === 'sheet' ? [curSheet()].filter(Boolean) : ctx.sheets.slice();
    const hits = [];
    let blank = 0;
    for (let i = 0; i < list.length; i++) {
      const s = list[i];
      if (list.length > 3) findUi.count.textContent = t('find.searching', { sheet: s.page.title, i: i + 1, n: list.length });
      const idx = await sheetText(s);
      if (!idx.text.trim()) { blank++; continue; }
      for (const h of findHits(idx, q, { matchCase: findUi.mcase.checked, wholeWord: findUi.word.checked, max: 2000 - hits.length })) hits.push({ key: s.page.key, ...h });
      if (hits.length >= 2000) break;
    }
    Object.assign(found, { query: q, hits, at: -1 });
    renderFind(blank);
    view.invalidate();
  }
  function renderFind(blank = 0) {
    if (!found.query) { findUi.count.textContent = ''; findUi.list.replaceChildren(); find('[data-act="find-cloud"]').disabled = true; return; }
    const nSheets = new Set(found.hits.map((h) => h.key)).size;
    const parts = [t('find.count', { n: found.hits.length, sheets: t('find.sheets', { n: nSheets }) })];
    if (blank) parts.push(t('find.no_text', { n: blank }));
    if (found.hits.length >= 2000) parts.push(t('find.capped', { n: found.hits.length }));
    findUi.count.textContent = parts.join(' ');
    // scans have no text: offer to read it (0.7.1 71.10)
    if (blank) findUi.count.append(' ', el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { act: 'ocr' } }, t('find.ocr')));
    findUi.list.replaceChildren(...found.hits.slice(0, 500).map((h, i) => {
      const sh = sheetByKey(h.key);
      return el('li', {}, el('button', { type: 'button', dataset: { hit: String(i) }, 'aria-current': i === found.at ? 'true' : 'false' },
        el('strong', {}, sh ? sh.page.sheetNo || sh.page.title : ''), ' ', h.snippet));
    }));
    find('[data-act="find-cloud"]').disabled = !found.hits.length;
  }

  async function showHit(i) {
    const h = found.hits[i];
    if (!h) return;
    found.at = i;
    const si = ctx.sheets.findIndex((s) => s.page.key === h.key);
    if (si !== ctx.cur) await goTo(si);
    view.zoomTo(h.rect, 0.25);
    for (const b of findUi.list.querySelectorAll('button[data-hit]')) b.setAttribute('aria-current', b.dataset.hit === String(i) ? 'true' : 'false');
    view.invalidate();
  }

  return { findUi, textCache, found, sheetText, forgetText, runFind, showHit };
}
