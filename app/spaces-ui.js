/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spaces-ui.js: markupcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountSpaces(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { spaceOf } from './spaces.js';
import { boundsOf } from './geom.js';
import { t } from './i18n.js';
import { el } from './ui-util.js';

export function mountSpaces(ctx) {
  const { ST, find, store, view, curSheet, sheetByKey, envOf, status, dialog, goTo, setTool, newMarkup, refreshAll } = ctx;

  // ---- Spaces (0.4 K17): named zones; a markup is in the space holding the middle of its bounds ----
  ST.spaceDraw = false;
  const spacesOn = (key) => store.onSheet(key).filter((m) => m.type === 'space');
  const hasSpaces = () => store.all().some((m) => m.type === 'space');
  const markupSpace = (m) => spaceOf(m, spacesOn(m.sheet), (x) => boundsOf(x, envOf(x)));
  async function startSpace() {
    if (!curSheet()) { status(t('need.pdf')); return; }
    await setTool('polygon');
    ST.spaceDraw = true;
    status(t('space.hint'));
  }
  async function finishSpace(pts) {
    ST.spaceDraw = false;
    if (pts.length < 3) { status(t('poly.need', { type: ctx.tlow('space'), n: 3 })); view.invalidate(); return; }
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-space', maxlength: '60', autocomplete: 'off' });
    const r = await dialog({ title: t('space.name.title'), body: [el('label', { className: 'mc-k', for: 'mc-dlg-space' }, t('space.name')), input],
      buttons: [['cancel', t('dlg.cancel')], ['ok', t('space.add'), 'btn-plot']], submit: 'ok', check: () => (input.value.trim() ? '' : t('space.name.need')) });
    if (r.key !== 'ok') { view.invalidate(); return; }
    const m = store.change(t('undo.space'), (tx) => tx.add(newMarkup('space', { pts, label: input.value.trim().slice(0, 60) })));
    ST.sel = new Set([m.id]);
    const n = store.onSheet(m.sheet).filter((x) => x.type !== 'space' && markupSpace(x) === m.label).length;
    status(t('space.added', { name: m.label, n }));
    setTool('select');
    refreshAll();
  }
  function renderSpaces() {
    const list = find('[data-space-list]');
    if (!list) return;
    const spaces = store.all().filter((m) => m.type === 'space').sort((a, b) => ctx.sheetOrder(a) - ctx.sheetOrder(b) || a.label.localeCompare(b.label));
    list.replaceChildren(...spaces.map((sp) => {
      const n = store.onSheet(sp.sheet).filter((x) => x.type !== 'space' && markupSpace(x) === sp.label).length;
      const sh = sheetByKey(sp.sheet);
      return el('li', { className: 'mc-layer' }, el('span', { className: 'mc-layer-pad' }),
        el('button', { type: 'button', className: 'mc-layer-name', title: t('space.go.title', { name: sp.label }), onclick: async () => { const i = ST.sheets.findIndex((s) => s.page.key === sp.sheet); if (i !== ST.cur) await goTo(i); ST.sel = new Set([sp.id]); view.zoomTo(boundsOf(sp, envOf(sp)), 0.7); refreshAll(); } },
          sp.label, el('span', { className: 'mc-muted' }, ' ', sh ? sh.page.sheetNo || '' : '')),
        el('span', { className: 'mc-muted mc-layer-n' }, String(n)));
    }));
  }
  store.on(() => renderSpaces());
  find('[data-act="space-new"]')?.addEventListener('click', () => startSpace());

  return { hasSpaces, markupSpace, finishSpace };
}
