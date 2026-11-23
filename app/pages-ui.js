/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pages-ui.js: markupcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPages(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, frame } from './ui-util.js';
import { t } from './i18n.js';
import { parsePageList, rotatePages, movePages, insertPages, insertBlank, deletePages, orderDelete, extractPages } from './pages.js';
import { openPdf, closePdf } from './pdf-read.js';

export function mountPages(ctx) {
  const { ST, $, ui, store, files, viewStates, curSheet, status, busy, pdfLib, dialog, ask, dl, bake, labelsOf, refreshAll } = ctx;

  // ---- pages (0.4 K1): rotate, move, insert, delete, extract — on the PDF the open sheet belongs to ----
  // The markups are written into the file first, the pages changed, and the file read back, so every markup, thread,
  // scale and sheet name moves with its page. Undo history is cleared (said); the PDF on this computer is untouched.
  const pageEnv = () => ({ pdfjs: ST.libs.pdfjs, pdfLib, docOptions: ST.libs.docOptions });
  ui.insertFile = $('[data-insert-file]');
  ST.insertPick = null;
  ui.insertFile?.addEventListener('change', () => { const f = ui.insertFile.files[0]; ui.insertFile.value = ''; const r = ST.insertPick; ST.insertPick = null; r?.(f || null); });
  ui.insertFile?.addEventListener('cancel', () => { const r = ST.insertPick; ST.insertPick = null; r?.(null); });
  const pickPdf = () => new Promise((done) => { ST.insertPick = done; ui.insertFile.click(); });

  /** Ask for pages of `f` ("1-3, 5"); default the open sheet's page. → 0-based indices or null. */
  async function askPages(f, title, text, okLabel, danger = false) {
    const n = f.pages.length;
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-pages', autocomplete: 'off', value: String((curSheet()?.page.index ?? 0) + 1) });
    let picked = null;
    const r = await dialog({
      title, text,
      body: [el('label', { className: 'mc-k', for: 'mc-dlg-pages' }, t('pages.ask.label', { n })), input, el('p', { className: 'mc-muted' }, t('pages.ask.hint', { name: f.name, n }))],
      buttons: [['cancel', t('dlg.cancel')], ['ok', okLabel, danger ? 'btn-danger' : 'btn-plot']], submit: 'ok',
      check: () => { const p = parsePageList(input.value, n); picked = p.indices || null; return p.error || ''; },
    });
    return r.key === 'ok' ? picked : null;
  }

  async function pagesOp(kind) {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    ctx.commitEdit(); ctx.cancelOps();
    const f = s.file, n = f.pages.length, i = s.page.index;
    let run, show = i, rot = null, done, remap = null;   // remap: old page index → new (-1 = gone), so the records' pages follow
    const labels = labelsOf(f);
    switch (kind) {
      case 'page-rotate-cw': case 'page-rotate-ccw': {
        const d = kind === 'page-rotate-cw' ? 90 : -90;
        rot = new Map([[i, ((s.page.rotate + d) % 360 + 360) % 360]]);
        run = (lib, b) => rotatePages(lib, b, [i], d);
        done = t(d > 0 ? 'pages.done.rotate_cw' : 'pages.done.rotate_ccw', { sheet: s.page.title });
        break;
      }
      case 'page-move-up': case 'page-move-down': {
        const to = kind === 'page-move-up' ? i - 1 : i + 1;
        if (to < 0 || to >= n) { status(t(to < 0 ? 'pages.first' : 'pages.last', { name: f.name })); return; }
        run = (lib, b) => movePages(lib, b, [i], to, { labels });
        remap = (k) => (k === i ? to : i < to && k > i && k <= to ? k - 1 : i > to && k >= to && k < i ? k + 1 : k);
        show = to;
        done = t('pages.done.move', { sheet: s.page.title, page: to + 1, n });
        break;
      }
      case 'page-insert-pdf': {
        const pick = await pickPdf();
        if (!pick) return;
        if (!/\.pdf$/i.test(pick.name) && pick.type !== 'application/pdf') { status(t('pages.insert.not_pdf', { file: pick.name })); return; }
        const src = new Uint8Array(await pick.arrayBuffer());
        let count = 0;
        run = async (lib, b) => { const r = await insertPages(lib, b, src, i + 1, { labels }); count = r.count; return r.bytes; };
        const added = (await (await pdfLib()).PDFDocument.load(src, { ignoreEncryption: true, updateMetadata: false })).getPageCount();
        remap = (k) => (k > i ? k + added : k);
        show = i + 1;
        done = () => t('pages.done.insert', { n: count, file: pick.name, after: s.page.title });
        break;
      }
      case 'page-insert-blank':
        run = (lib, b) => insertBlank(lib, b, i + 1, { labels, grid: f.blank });
        remap = (k) => (k > i ? k + 1 : k);
        show = i + 1;
        done = t('pages.done.blank', { after: s.page.title });
        break;
      case 'page-add-blank':   // a blank set (File › New): one more page like the others, at its end
        run = (lib, b) => insertBlank(lib, b, n, { labels, grid: f.blank });
        show = n;
        done = t('pages.done.add_blank', { name: f.name, n: n + 1 });
        break;
      case 'page-delete': {
        const idx = await askPages(f, t('pages.delete.title'), t('pages.delete.text'), t('pages.delete.ok'), true);
        if (!idx) return;
        if (idx.length >= n) { await ask(t('pages.delete.title'), t('pages.err.all'), [['cancel', t('dlg.ok'), 'btn-plot']]); return; }
        const lost = idx.reduce((a, k) => a + store.onSheet(f.pages[k].key).length + store.onSheetRecords(f.pages[k].key).length, 0);
        if (lost && await ask(t('pages.delete.title'), t('pages.delete.markups', { n: lost, pages: idx.length }), [['cancel', t('dlg.cancel')], ['ok', t('pages.delete.ok'), 'btn-danger']]) !== 'ok') return;
        run = (lib, b) => deletePages(lib, b, idx, { labels });
        remap = (k) => (idx.includes(k) ? -1 : k - idx.filter((d) => d < k).length);
        const left = orderDelete(n, idx);
        show = Math.max(0, left.findIndex((k) => k >= i)); if (left[show] === undefined) show = left.length - 1;
        done = t('pages.done.delete', { n: idx.length, name: f.name });
        break;
      }
      case 'page-extract': return extractPages_(f);
      default: return;
    }
    busy(t('pages.working'));
    await frame();
    try {
      const lib = await pdfLib();
      const { bytes: baked } = await bake(f, lib, { rot, remap, keepNotes: true });
      const out = await run(lib, baked);
      await replaceFile(f, out, show);
      status((typeof done === 'function' ? done() : done) + ' ' + t('pages.no_undo'));
    } catch (e) {
      busy('');
      await ask(t('pages.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
    busy('');
  }

  /** Put a changed copy of a file in place of the file: read it back, its sheets marked unsaved, and show page `show`. */
  async function replaceFile(f, bytes, show = 0) {
    ctx.stopCompare();
    const rec = await openPdf(pageEnv(), bytes, { fileId: f.id, name: f.name });
    const at = files.indexOf(f);
    for (const k of [...store.dirtySheets]) if (k.startsWith(f.id + ':')) store.dirtySheets.delete(k);
    for (const k of [...viewStates.keys()]) if (k.startsWith(f.id + ':')) viewStates.delete(k);
    store.dropSheets(f.id + ':');   // also clears undo: the history named pages that moved
    ctx.forgetText(f.id + ':');
    for (const k of [...ctx.segCache.keys()]) if (k.startsWith(f.id + ':')) ctx.segCache.delete(k);
    f.auto?.close();
    files[at] = rec;
    store.load(rec.markups, rec.calibrations, rec.sheetNames, rec.layers, rec.columns);
    ST.notesUi?.adopt(rec);   // 0.9 NOTES.1
    ST.fieldUi?.loadFrom(rec);
    await ST.formUi?.prepare(rec);   // the values typed so far were written into the copy (bake)
    for (const pg of rec.pages) store.dirtySheets.add(pg.key);
    ctx.baseUi.forget(f);
    await closePdf(f.doc);
    ST.sel = new Set();
    ST.cur = -1;
    ctx.rebuildSheets();
    const key = rec.pages[Math.max(0, Math.min(rec.pages.length - 1, show))].key;
    await ctx.goTo(ST.sheets.findIndex((x) => x.page.key === key));
    refreshAll();
  }

  async function extractPages_(f) {
    const idx = await askPages(f, t('pages.extract.title'), t('pages.extract.text'), t('pages.extract.ok'));
    if (!idx) return;
    busy(t('pages.working'));
    await frame();
    try {
      const lib = await pdfLib();
      const { bytes: baked } = await bake(f, lib, { burn: true });
      const out = await extractPages(lib, baked, idx);
      const name = t('pages.extract.file', { name: f.name.replace(/\.pdf$/i, ''), pages: rangeText(idx) }) + '.pdf';
      dl(out, name, 'application/pdf');
      status(t('pages.done.extract', { n: idx.length, file: name }));
    } catch (e) {
      busy('');
      await ask(t('pages.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
    busy('');
  }

  /** [0,1,2,4] → "1-3, 5" */
  function rangeText(idx) {
    const v = [...idx].sort((a, b) => a - b).map((k) => k + 1), out = [];
    for (let k = 0; k < v.length; k++) { let j = k; while (j + 1 < v.length && v[j + 1] === v[j] + 1) j++; out.push(j > k ? v[k] + '-' + v[j] : String(v[k])); k = j; }
    return out.join(', ');
  }

  return { pagesOp };
}
