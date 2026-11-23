/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-ui.js: markupcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPrint(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el, frame } from './ui-util.js';
import { parsePageList } from './pages.js';

export function mountPrint(ctx) {
  const { ST, files, curSheet, status, busy, pdfLib, dialog, ask, bake, commitEdit, cancelOps } = ctx;

  // ---- print (0.4 K2): the chosen sheets with their markups drawn into the pages, printed by the browser ----
  async function printSheets(choose = false) {
    if (!files.length) { status(t('need.pdf')); return; }
    commitEdit(); cancelOps();
    const s = curSheet();
    let which = 'sheet', idx = null;
    if (choose || ST.sheets.length > 1) {
      const radios = [['sheet', t('print.this', { sheet: s.page.title })], ['file', t('print.file', { name: s.file.name, n: s.file.pages.length })],
        ...(files.length > 1 ? [['set', t('print.set', { n: ST.sheets.length })]] : []), ['pages', t('print.pages')]];
      const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-print-pages', autocomplete: 'off', value: String(s.page.index + 1), 'aria-label': t('pages.ask.label', { n: s.file.pages.length }) });
      const box = el('div', { className: 'mc-radios', role: 'radiogroup', 'aria-label': t('print.which') }, ...radios.map(([v, l]) =>
        el('label', { className: 'mc-radio' }, el('input', { type: 'radio', name: 'mc-print', value: v, checked: v === 'sheet' }), ' ', l)));
      const r = await dialog({
        title: t('print.title'), text: t('print.text'), body: [box, input],
        buttons: [['cancel', t('dlg.cancel')], ['print', t('print.ok'), 'btn-plot']], submit: 'print',
        check: () => {
          which = box.querySelector('input:checked')?.value || 'sheet';
          if (which !== 'pages') return '';
          const p = parsePageList(input.value, s.file.pages.length); idx = p.indices || null; return p.error || '';
        },
      });
      if (r.key !== 'print') return;
    }
    busy(t('print.making'));
    await frame();
    try {
      const lib = await pdfLib();
      const out = await lib.PDFDocument.create();
      const parts = which === 'set' ? files.map((f) => [f, f.pages.map((pg) => pg.index)])
        : which === 'file' ? [[s.file, s.file.pages.map((pg) => pg.index)]]
        : which === 'pages' ? [[s.file, idx]] : [[s.file, [s.page.index]]];
      let n = 0;
      for (const [f, list] of parts) {
        const { bytes } = await bake(f, lib, { flatten: 'all' });
        const src = await lib.PDFDocument.load(bytes, { updateMetadata: false });
        for (const p of await out.copyPages(src, list)) { out.addPage(p); n++; }
      }
      out.setTitle(ctx.setName());
      const pdf = await out.save({ useObjectStreams: false });
      window.markupcraft.lastPrint = pdf;
      busy('');
      printPdf(pdf);
      status(t('print.sent', { n }));
    } catch (e) {
      busy('');
      await ask(t('print.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
    }
  }
  /** The browser prints a PDF through its own viewer in a hidden frame; where it cannot (no viewer), the PDF opens in a tab. */
  function printPdf(bytes) {
    const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    document.querySelector('iframe[data-mc-print]')?.remove();
    const frameEl = el('iframe', { className: 'mc-print-frame', title: t('print.title'), dataset: { mcPrint: '1' }, 'aria-hidden': 'true', tabindex: '-1' });
    frameEl.addEventListener('load', () => {
      setTimeout(() => {
        try { frameEl.contentWindow.focus(); frameEl.contentWindow.print(); }
        catch { window.open(url, '_blank', 'noopener'); status(t('print.tab')); }
      }, 300);
    }, { once: true });
    frameEl.src = url;
    document.body.append(frameEl);
    setTimeout(() => URL.revokeObjectURL(url), 10 * 60 * 1000);
  }

  return { printSheets };
}
