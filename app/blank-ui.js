/* SPDX-License-Identifier: Apache-2.0 */
/**
 * blank-ui.js: markupcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountBlank(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { cleanBlank, PAPERS, ORIENTS, GRIDS, MAX_PAGES, untitledName, blankPdf } from './blank.js';
import { el, frame } from './ui-util.js';
import { t } from './i18n.js';

export function mountBlank(ctx) {
  const { ST, files, status, busy, pdfLib, dialog, ask, openFiles } = ctx;

  // ---- File › New (owner, 2026-10-15): blank pages made here as a real PDF with pdf-lib, then opened like any file ----
  // Untitled-1.pdf, Untitled-2.pdf … so every tool, calibration (none until the person sets one), save, autosave and the
  // desktop host treat it exactly as an opened PDF. The last choices are kept in localStorage "markupcraft.blank".
  ST.untitledSeq = 0;
  const LS_BLANK = 'markupcraft.blank';
  async function askBlank() {
    const last = cleanBlank(ctx.lsGet(LS_BLANK, {}));
    const opt = (v, label, on) => el('option', { value: v, selected: v === on }, label);
    const paper = el('select', { id: 'mc-dlg-paper', className: 'mc-select' },
      el('optgroup', { label: t('new.paper.inch') }, ...Object.keys(PAPERS).filter((k) => !PAPERS[k].metric).map((k) => opt(k, t('new.paper.' + k), last.paper))),
      el('optgroup', { label: t('new.paper.metric') }, ...Object.keys(PAPERS).filter((k) => PAPERS[k].metric).map((k) => opt(k, t('new.paper.' + k), last.paper))));
    const radios = (name, list, on, label) => el('div', { className: 'mc-radios', role: 'radiogroup', 'aria-label': label }, ...list.map((v) =>
      el('label', { className: 'mc-radio' }, el('input', { type: 'radio', name, value: v, checked: v === on }), ' ', t(name.replace('mc-new-', 'new.') + '.' + v))));
    const orient = radios('mc-new-orient', ORIENTS, last.orient, t('new.orient'));
    const grid = radios('mc-new-grid', GRIDS, last.grid, t('new.grid'));
    const pages = el('input', { type: 'text', id: 'mc-dlg-blank-pages', className: 'mc-input', inputmode: 'numeric', autocomplete: 'off', value: String(last.pages) });
    let spec = null;
    const r = await dialog({
      title: t('new.title'), text: t('new.text'),
      body: [el('div', { className: 'mc-props mc-new-blank' },
        el('label', { className: 'mc-k', for: 'mc-dlg-paper' }, t('new.paper')), paper,
        el('span', { className: 'mc-k' }, t('new.orient')), orient,
        el('span', { className: 'mc-k' }, t('new.grid')), grid,
        el('label', { className: 'mc-k', for: 'mc-dlg-blank-pages' }, t('new.pages', { max: MAX_PAGES })), pages),
      el('p', { className: 'mc-muted' }, t('new.grid.hint'))],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('new.ok'), 'btn-plot']], submit: 'ok',
      check: () => {
        const n = Number(pages.value);
        if (!Number.isInteger(n) || n < 1 || n > MAX_PAGES) return t('new.err.pages', { max: MAX_PAGES });
        spec = cleanBlank({ paper: paper.value, orient: orient.querySelector('input:checked')?.value, grid: grid.querySelector('input:checked')?.value, pages: n });
        return '';
      },
    });
    return r.key === 'ok' ? spec : null;
  }
  /** File › New: ask (or take `given`, for tests and scripts), make the PDF, open it. → the new file record, or null. */
  async function newBlank(given = null) {
    ctx.commitEdit(); ctx.cancelOps();
    const spec = given ? cleanBlank(given) : await askBlank();
    if (!spec) return null;
    ctx.lsSet(LS_BLANK, spec);
    busy(t('new.making'));
    await frame();
    try {
      const lib = await pdfLib();
      const { name, seq } = untitledName(files.map((f) => f.name), ST.untitledSeq);
      ST.untitledSeq = seq;
      const bytes = await blankPdf(lib, spec, { title: name.replace(/\.pdf$/i, '') });
      const n0 = files.length;
      busy('');
      if (!await openFiles([new File([bytes], name, { type: 'application/pdf' })])) return null;
      const f = files[n0];
      status(t('new.done', { name, n: spec.pages, paper: t('new.paper.' + spec.paper), orient: t('new.orient.' + spec.orient).toLocaleLowerCase(document.documentElement.lang || undefined) }));
      return f;
    } catch (e) {
      busy('');
      await ask(t('new.failed'), e.message || String(e), [['cancel', t('dlg.ok'), 'btn-plot']]);
      return null;
    }
  }
  window.markupcraft.newBlank = newBlank;

  return { newBlank };
}
