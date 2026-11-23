/* SPDX-License-Identifier: Apache-2.0 */
/**
 * layers-ui.js: markupcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountLayers(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { cleanLayerName } from './model.js';

export function mountLayers(ctx) {
  const { ST, $, find, store, status, dialog, refreshAll } = ctx;

  // ---- layers (0.4 K3): show, hide, lock; new markups go on the current layer ----
  const layerUi = { box: $('[data-layers]'), list: $('[data-layer-list]'), cur: $('[data-layer-current]') };
  function layerSelect(id, value, onPick) {
    return el('select', { id, className: 'mc-select', onchange: (e) => onPick(e.target.value) },
      el('option', { value: '', selected: !value }, t('layer.none')),
      ...store.layerNames().map((n) => el('option', { value: n, selected: n === value }, n)),
      el('option', { value: '\u0001new' }, t('layer.new_option')));
  }
  async function askLayerName(name = '') {
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-layer', maxlength: '60', value: name, autocomplete: 'off' });
    const r = await dialog({ title: name ? t('layer.rename.title') : t('layer.new.title'), body: [el('label', { className: 'mc-k', for: 'mc-dlg-layer' }, t('layer.name')), input],
      buttons: [['cancel', t('dlg.cancel')], ['ok', name ? t('layer.rename.ok') : t('layer.new.ok'), 'btn-plot']], submit: 'ok',
      check: () => (cleanLayerName(input.value) ? '' : t('layer.name.need')) });
    return r.key === 'ok' ? cleanLayerName(input.value) : null;
  }
  function renderLayers() {
    if (!layerUi.list) return;
    const names = store.layerNames();
    const count = new Map();
    for (const m of store.all()) count.set(m.layer || '', (count.get(m.layer || '') || 0) + 1);
    const row = (n) => {
      const st = store.layerState(n);
      return el('li', { className: 'mc-layer' + (n === ST.curLayer ? ' is-current' : ''), dataset: { layer: n } },
        el('button', { type: 'button', className: 'mc-layer-btn', 'aria-pressed': st.hidden ? 'false' : 'true', title: t(st.hidden ? 'layer.show' : 'layer.hide', { name: n }), dataset: { layerAct: 'eye' } },
          el('i', { className: 'bi bi-' + (st.hidden ? 'eye-slash' : 'eye'), 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t(st.hidden ? 'layer.show' : 'layer.hide', { name: n }))),
        el('button', { type: 'button', className: 'mc-layer-btn', 'aria-pressed': st.locked ? 'true' : 'false', title: t(st.locked ? 'layer.unlock' : 'layer.lock', { name: n }), dataset: { layerAct: 'lock' } },
          el('i', { className: 'bi bi-' + (st.locked ? 'lock' : 'unlock'), 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t(st.locked ? 'layer.unlock' : 'layer.lock', { name: n }))),
        el('button', { type: 'button', className: 'mc-layer-name', title: t('layer.current.title', { name: n }), 'aria-current': n === ST.curLayer ? 'true' : 'false', dataset: { layerAct: 'current' } }, n),
        el('span', { className: 'mc-muted mc-layer-n' }, String(count.get(n) || 0)),
        el('button', { type: 'button', className: 'mc-layer-btn', title: t('layer.more', { name: n }), dataset: { layerAct: 'rename' } }, el('i', { className: 'bi bi-pencil', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('layer.more', { name: n }))));
    };
    layerUi.list.replaceChildren(
      el('li', { className: 'mc-layer' + (!ST.curLayer ? ' is-current' : ''), dataset: { layer: '' } }, el('span', { className: 'mc-layer-pad' }),
        el('button', { type: 'button', className: 'mc-layer-name', 'aria-current': !ST.curLayer ? 'true' : 'false', dataset: { layerAct: 'current' }, title: t('layer.current.none') }, t('layer.none')),
        el('span', { className: 'mc-muted mc-layer-n' }, String(count.get('') || 0))),
      ...names.map(row));
    if (layerUi.cur) layerUi.cur.textContent = ST.curLayer ? t('layer.current', { name: ST.curLayer }) : '';
  }
  layerUi.list?.addEventListener('click', async (e) => {
    const b = e.target.closest('[data-layer-act]');
    if (!b) return;
    const n = b.closest('[data-layer]').dataset.layer;
    const st = store.layerState(n);
    switch (b.dataset.layerAct) {
      case 'eye': store.setLayer(n, { hidden: !st.hidden }); if (!st.hidden) { ST.sel = new Set([...ST.sel].filter((id) => store.open(store.get(id) || {}))); } break;
      case 'lock': store.setLayer(n, { locked: !st.locked }); if (!st.locked) ST.sel = new Set([...ST.sel].filter((id) => store.open(store.get(id) || {}))); break;
      case 'current': ST.curLayer = n; if (n && st.hidden) store.setLayer(n, { hidden: false }); renderLayers(); status(n ? t('layer.current', { name: n }) : t('layer.current.none')); break;
      case 'rename': {
        const nn = await askLayerName(n);
        if (nn === null || nn === n) return;
        if (!nn) return;
        const ids = store.all().filter((m) => m.layer === n).map((m) => m.id);
        store.setLayer(nn, st); store.dropLayer(n);
        if (ids.length) store.change(t('undo.layer.rename'), (tx) => { for (const id of ids) tx.update(id, { layer: nn }, { touch: false }); });
        if (ST.curLayer === n) ST.curLayer = nn;
        status(t('layer.renamed', { from: n, to: nn, n: ids.length }));
        break;
      }
      default: break;
    }
    refreshAll();
  });
  find('[data-act="layer-new"]')?.addEventListener('click', async () => {
    const n = await askLayerName();
    if (!n) return;
    store.setLayer(n);
    ST.curLayer = n;
    renderLayers();
    status(t('layer.current', { name: n }));
  });
  store.on((kind) => { if (kind === 'layers' || kind === 'load' || kind === 'change' || kind === 'undo' || kind === 'redo') renderLayers(); });

  return { layerSelect, askLayerName, renderLayers };
}
