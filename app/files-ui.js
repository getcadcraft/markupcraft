/* SPDX-License-Identifier: Apache-2.0 */
/**
 * files-ui.js: markupcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountFiles(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { frame, download, bytes as fmtBytes } from './ui-util.js';
import { openPdf, closePdf } from './pdf-read.js';
import { linkTarget } from './link.js';
import { writeMarkedUp } from './pdf-write.js';
import { fillForm } from './forms.js';

export function mountFiles(ctx) {
  const { ST, ui, store, view, files, viewStates, curSheet, badgeFor, legendOf, fileDirty, anyDirty, status, busy, loadLibs, pdfLib, ask, host, PDF_TYPES, sheetList, refreshAll, refreshToolbar, checkAllTasks, syncAutosave } = ctx;

  // ---- files ----
  ui.file.addEventListener('change', () => { const list = [...ui.file.files]; ui.file.value = ''; if (list.length) openFiles(list); });

  /** A project bundle in the list becomes the PDF sheets it holds (the shared reader, ./bundle/plan.js); the history line says how many. */
  async function unbundle(list) {
    if (!list.some((f) => /\.ccbundle$|ccbundle\.zip$/i.test(f.name || ''))) return list;
    const { expandBundles } = await import('./bundle/plan.js');
    const r = await expandBundles(list, 'markupcraft', { prefer: ['pdf'] });
    for (const n of r.notes) status(n.code === 'bundle' ? t('bundle.sheets', { file: n.file, n: n.n }) : n.code === 'empty' ? t('bundle.nosheets', { file: n.file }) : t('bundle.failed', { file: n.file, why: n.why }));
    return r.files;
  }

  /** opts (Studio Live, live.js): ids = the host's file ids, in order; keepMarkups = the markups came with the session. */
  async function openFiles(list, opts = {}) {
    list = await unbundle(list);   // 0.8 BIM-BUNDLE-OPEN: a project bundle opens as its layout sheets
    const pdfs = list.filter((f) => /\.pdf$/i.test(f.name) || f.type === 'application/pdf');
    const skipped = list.length - pdfs.length;
    if (!pdfs.length) { status(list[0]?.name ? t('open.not_pdf.named', { file: list[0].name }) : t('open.not_pdf')); return; }
    busy(t('open.loading'));
    await frame();
    try { await loadLibs(); } catch (e) { busy(''); status(t('open.load_failed', { error: e.message })); return; }
    const errors = [];
    let opened = 0, read = 0, fields = 0, firstNew = ST.sheets.length;
    for (const f of pdfs) {
      busy(t('open.opening', { file: f.name }));
      await frame();
      try {
        const data = new Uint8Array(await f.arrayBuffer());
        const want = opts.ids && opts.ids[pdfs.indexOf(f)];
        const id = typeof want === 'string' && /^f\d+$/.test(want) ? want : 'f' + (++ST.fileSeq);
        ST.fileSeq = Math.max(ST.fileSeq, +id.slice(1));
        const rec = await openPdf({ pdfjs: ST.libs.pdfjs, pdfLib, docOptions: ST.libs.docOptions }, data, {
          fileId: id, name: f.name,
          onProgress: (i, nPages) => { if (nPages > 4 && i % 5 === 0) ui.busyText.textContent = t('open.opening.progress', { file: f.name, i, n: nPages }); },
        });
        files.push(rec);
        if (opts.keepMarkups) store.load([], {}, {}, rec.layers, rec.columns);
        else store.load(rec.markups, rec.calibrations, rec.sheetNames, rec.layers, rec.columns);
        ST.notesUi?.adopt(rec);   // 0.9 NOTES.1: this person's sealed notes, when unlocked
        ST.fieldUi?.loadFrom(rec);
        if (rec.shell && !ctx.shellData.calcs && !ctx.shellData.reasons && !ctx.shellData.docinfo) { ctx.shellData.calcs = rec.shell.calcs || null; ctx.shellData.reasons = rec.shell.reasons || null; ctx.shellData.docinfo = rec.shell.docinfo || null; ctx.shellData.issues = rec.shell.issues || null; ST.shellOpened = true; }
        fields += (await ST.formUi?.prepare(rec)) || 0;
        read += rec.markups.length;
        opened++;
        for (const n of rec.notes) errors.push(t('open.note', { file: f.name, note: n }));
      } catch (e) {
        errors.push(e.message || String(e));
      }
    }
    ctx.rebuildSheets();
    busy('');
    if (ST.shellOpened) { ST.shellOpened = false; ctx.shellMount?.filesOpened(); }
    if (opened && ST.cur < 0) await ctx.goTo(firstNew);
    else if (opened) await ctx.goTo(firstNew);
    const parts = [];
    if (opened) parts.push(t('open.done', { n: opened, sheets: t('open.done.sheets', { n: ST.sheets.length }) }));
    if (read) parts.push(t(opened === 1 ? 'open.read.one_file' : 'open.read', { n: read }));
    if (fields) parts.push(t('form.found', { n: fields }));
    if (skipped) parts.push(t('open.skipped', { n: skipped }));
    status(parts.join(' '));
    if (errors.length) await ask(t('open.failed.title'), errors.join('\n'), [['cancel', t('dlg.ok'), 'btn-plot']]);
    refreshAll();
    if (opened && files.length > 1 && ctx.autoCloseOn()) { try { const r = await checkAllTasks(); if (r.closed.length) status(t('tasks.auto.closed', { n: r.closed.length })); } catch { /* the Check now button says why */ } }   // EG.64: a newer revision closes the tasks it answers
    return opened;
  }

  async function closeSet() {
    if (!files.length) return;
    if (anyDirty()) {
      const k = await ask(t('unsaved.title'), t('unsaved.close.text'), [['cancel', t('dlg.cancel')], ['discard', t('unsaved.close.discard')], ['save', t('unsaved.save_first'), 'btn-plot']]);
      if (k === 'cancel') return;
      if (k === 'save') { await saveFiles('dirty'); if (anyDirty()) return; }
    }
    ctx.stopCompare();
    ctx.cancelOps();
    ST.formUi?.forget();
    for (const f of files) { f.auto?.close(); ctx.baseUi.forget(f); await closePdf(f.doc); }
    files.length = 0;
    store.dropSheets('');
    store.dirtySheets.clear();
    ctx.forgetText('');
    ctx.segCache.clear();
    ST.sheets = []; ST.cur = -1; ST.sel = new Set(); viewStates.clear();
    view.clear();
    ctx.rebuildSheets();
    refreshAll();
    status(t('close.done'));
  }

  async function saveFiles(which = 'ask') {
    if (!files.length) { status(t('need.pdf')); return; }
    ctx.commitEdit();
    let targets;
    if (which === 'ask') {
      if (files.length === 1) targets = files.slice();
      else {
        const dirty = files.filter(fileDirty);
        const curFile = curSheet()?.file;
        const k = await ask(t('save.ask.title'), t('save.ask.text', { files: files.length, dirty: dirty.length }),
          [['cancel', t('dlg.cancel')], ['one', t('save.ask.one')], ['dirty', t('save.ask.dirty'), 'btn-plot']]);
        if (k === 'cancel') return;
        targets = k === 'one' ? [curFile] : dirty.length ? dirty : [curFile];
      }
    } else if (which === 'dirty') targets = files.filter(fileDirty);
    else targets = files.slice();
    let lib;
    busy(t('save.loading'));
    await frame();
    try { lib = await pdfLib(); } catch (e) { busy(''); status(t('save.load_failed', { error: e.message })); return; }
    const done = [];
    for (const f of targets) {
      busy(t('save.saving', { file: f.name }));
      await frame();
      try {
        const { bytes, report } = await bake(f, lib, { burn: true, keepNotes: true });
        const name = f.name.replace(/\.pdf$/i, '').replace(/ \(marked up\)$/i, '') + ' (marked up).pdf';   // i18n-ignore: the copy's file name suffix, matched when reopened
        let shown = name;
        if (host.kind === 'desktop') {
          // the desktop app: the first save asks where the marked-up copy goes; later saves write that copy in place
          const r = f.saveTarget ? await host.save({ target: f.saveTarget, data: bytes, name, types: PDF_TYPES }) : await host.saveAs({ data: bytes, name, types: PDF_TYPES });
          if (!r.ok) { if (!r.cancelled) await ask(t('save.failed', { file: f.name }), String(r.error?.message || r.error || ''), [['cancel', t('dlg.ok'), 'btn-plot']]); continue; }
          f.saveTarget = r.target; shown = r.name || name;
        } else download(bytes, name, 'application/pdf');
        for (const k of [...store.dirtySheets]) if (k.startsWith(f.id + ':')) store.dirtySheets.delete(k);
        done.push(t('save.file', { file: shown, markups: t('save.markups', { n: report.written }), size: fmtBytes(bytes.length) }) + (report.missing ? t('save.missing', { n: report.missing }) : '') + (report.flattened ? t('save.flattened', { n: report.flattened }) : '') + (report.ocr ? t('save.ocr', { n: report.ocr }) : '') + (report.formFilled ? t('save.form', { n: report.formFilled }) : '') + (report.formFailed?.length ? t('save.form_failed', { list: report.formFailed.slice(0, 5).join(', ') }) : ''));
      } catch (e) {
        busy('');
        await ask(t('save.failed', { file: f.name }), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
      }
    }
    busy('');
    if (done.length) status(t('save.done', { list: done.join('; ') }) + (ST.notesUi?.takeFiled() ? ' ' + t('pnotes.filed') : ''));
    syncAutosave();
    refreshToolbar();
  }

  /**
   * A file's markups written into its bytes — the marked-up copy Save downloads. `flatten` ('all' | Set of ids) draws those
   * markups into the pages instead; `rot` (page index → degrees) turns the text of that page's markups to read upright.
   * `burn` (Save, extract): markups marked "Flatten into the page when saved" (0.7.1 71.7) are drawn in too; page
   * operations leave it off, so they stay markups while the file is open. `keepNotes`: only this person's own working copy (Save, page
   * operations) keeps notes and sealed private notes (0.9 NOTES.1); print, flattened copies, extracts and clean copies have none.
   */
  async function bake(f, lib, { flatten = null, rot = null, remap = null, burn = false, keepNotes = false } = {}) {
    if (burn && flatten !== 'all') {
      const marked = f.pages.flatMap((pg) => store.onSheet(pg.key)).filter((m) => m.flat && !m.locked && m.type !== 'foreign').map((m) => m.id);
      if (marked.length) flatten = new Set([...(flatten || []), ...marked]);
    }
    const src = await ctx.baseUi.bytesFor(f);   // the working copy when the page's own content was edited (0.6 DF.14)
    const pages = f.pages.map((pg) => ({ index: pg.index,
      markups: store.onSheet(pg.key).map((m) => (rot?.has(pg.index) && !m.locked ? { ...m, rot: rot.get(pg.index) } : m)),
      cal: store.calibrations.get(pg.key) || null, calCleared: !store.calibrations.get(pg.key), badge: badgeFor(pg.key), sheetName: store.sheetNames.get(pg.key) || null, legendOf }));
    // sheet numbers typed by hand become the file's page labels (other pages keep theirs)
    const renamed = f.pages.some((pg) => store.sheetNames.get(pg.key)?.number);
    const labels = renamed ? f.pages.map((pg) => store.sheetNames.get(pg.key)?.number || pg.label || String(pg.index + 1)) : null;
    const linkPage = (link, m) => { const s = linkTarget(link, sheetList()); if (!s || s.file !== f) return null; return m?.linkView?.box ? { index: s.page.index, box: m.linkView.box } : s.page.index; };
    const out = await writeMarkedUp(lib, src, { pages, removeRefs: f.removeRefs, labels, flatten, layers: ctx.layerList(), linkPage, columns: store.columns, bookmarks: f.bookmarksEdited ? f.bookmarks : null, records: ST.fieldUi?.packFor(f, remap) ?? null, shell: ctx.shellPack(),
      ocr: [...(f.ocr || [])].filter(([, o]) => o.pdf).map(([index, o]) => ({ index, pdf: o.pdf, matrix: o.matrix })),
      notes: keepNotes && ST.notesUi ? await ST.notesUi.packFor(f, remap) : null });
    return fillFormInto(lib, f, out, flatten === 'all');
  }
  /** The values typed into the file's form (form-ui.js) written into its fields; `flat` (print, the flattened copy) draws the form into the pages. */
  async function fillFormInto(lib, f, out, flat) {
    const edits = f.formEdits || new Map();
    if (!f.form || (!edits.size && !flat)) return out;
    const r = await fillForm(lib, out.bytes, edits, { flatten: flat });
    out.report.formFilled = r.filled; out.report.formFailed = r.failed;
    return { ...out, bytes: r.bytes };
  }

  return { openFiles, closeSet, saveFiles, bake };
}
