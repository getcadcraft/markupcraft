/* SPDX-License-Identifier: Apache-2.0 */
/**
 * chest-ui.js: markupcraft.js's 5 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountChest(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { TYPES, clone } from './model.js';
import { toolFromMarkup, stampTool, parseChest, mergeChest } from './chest.js';
import { makeClip, placeClip } from './clip.js';

export function mountChest(ctx) {
  const { ST, ui, store, view, curSheet, curKey, status, dialog, ask, setTool, editable, tabTo, activeTab, baseUi, refreshAll } = ctx;

  // ---- tool chest ----
  function persistChest() { if (!ctx.lsSet(ctx.LS.chest, ST.chest)) status(t('chest.persist_failed')); }

  async function saveToChest(m = null) {
    m = m || editable()[0];
    if (!m) { status(t('chest.save.need')); return; }
    const input = el('input', { type: 'text', id: 'mc-dlg-tool', className: 'mc-input', maxlength: '80', value: m.subject && m.subject !== TYPES[m.type].subject ? m.subject : ctx.tname(m.type) });
    const r = await dialog({
      title: t('chest.save.one'), text: t(m.type === 'stamp' ? 'chest.dlg.text.stamp' : 'chest.dlg.text'),
      body: [el('label', { className: 'mc-k', for: 'mc-dlg-tool' }, t('chest.dlg.name')), input],
      buttons: [['cancel', t('dlg.cancel')], ['save', t('chest.dlg.save'), 'btn-plot']], submit: 'save',
      check: () => (input.value.trim() ? '' : t('chest.dlg.need')),
    });
    if (r.key !== 'save') return;
    const made = toolFromMarkup(m, input.value.trim());
    ST.chest.push(made);
    persistChest();
    renderChest();
    tabTo('chest');
    status(t('chest.saved', { tool: made.name }));
  }

  /**
   * Save a selection as a stamp in the tool chest (0.7.1 71.9): the selected markups, or `content` (a content clip of page
   * content selected with the Content tool). Using the tool places the whole selection with a click, on any sheet.
   */
  async function saveStamp({ content = null } = {}) {
    const list = content ? [] : editable();
    if (!content && !list.length) { status(ST.sel.size ? t('stamp.save.locked') : t('stamp.save.need')); return false; }
    const input = el('input', { type: 'text', id: 'mc-dlg-tool', className: 'mc-input', maxlength: '80', value: content ? t('stamp.save.name.content') : list.length === 1 ? ctx.tname(list[0].type) : t('stamp.save.name') });
    const r = await dialog({
      title: t('stamp.save.h'), text: t(content ? 'stamp.save.text.content' : 'stamp.save.text', { n: content ? content.n : list.length }),
      body: [el('label', { className: 'mc-k', for: 'mc-dlg-tool' }, t('chest.dlg.name')), input],
      buttons: [['cancel', t('dlg.cancel')], ['save', t('chest.dlg.save'), 'btn-plot']], submit: 'save',
      check: () => (input.value.trim() ? '' : t('chest.dlg.need')),
    });
    if (r.key !== 'save') return false;
    const made = stampTool(input.value.trim(), content ? { content } : { items: makeClip(list, { source: ctx.TAB, sheet: curKey() }).items });
    if (!made) { status(t('stamp.save.bad')); return false; }
    ST.chest.push(made);
    persistChest();
    renderChest();
    tabTo('chest');
    status(t('stamp.saved', { tool: made.name }));
    return true;
  }
  window.markupcraft.saveStamp = saveStamp;   // tests
  /** A click with a stamp made from a selection: the markups centred there (one undo step), or the page content. */
  function placeStampTool(preset, center) {
    const s = curSheet();
    if (!s) return;
    if (preset.content) {
      if (baseUi.paste(preset.content, 'pointer', { at: center })) status(t('stamp.placed', { tool: preset.name }));
      return;
    }
    const made = placeClip({ items: preset.items }, { sheet: s.page.key, author: ST.author, rot: view.seenRotate, center });
    const ids = [];
    store.change(t('undo.stamp.place', { tool: preset.name }), (tx) => { for (const m of made) ids.push(tx.add(m).id); });
    ST.sel = new Set(ids);
    refreshAll();
    status(t('stamp.placed', { tool: preset.name }));
  }

  function renderChest() {
    if (activeTab() !== 'chest') return;
    ui.chest.replaceChildren();
    if (!ST.chest.length) { ui.chest.append(el('li', { className: 'mc-note' }, t('chest.empty'))); return; }
    for (const tk of ST.chest) {
      const use = el('button', { type: 'button', className: 'mc-item mc-tool-item', 'aria-pressed': String(ST.toolPreset?.id === tk.id) },
        el('span', { className: 'mc-item-icon', style: 'color:' + tk.style.color }, el('i', { className: 'bi bi-' + (tk.items ? 'collection' : tk.content ? 'vector-pen' : ctx.TYPE_ICON[tk.type] || 'circle'), 'aria-hidden': 'true' })),   // i18n-ignore (icon class)
        el('span', { className: 'mc-item-main' }, el('span', { className: 'mc-item-title' }, tk.name), el('span', { className: 'mc-item-meta' },
          tk.items ? t('chest.meta.group', { n: tk.items.length }) : tk.content ? t('chest.meta.content', { n: tk.content.n }) : tk.label ? t('chest.meta.label', { type: ctx.tname(tk.type), label: tk.label }) : ctx.tname(tk.type))));
      use.addEventListener('click', () => { setTool(tk.type, clone(tk)); renderChest(); status(t('chest.drawing', { tool: tk.name })); });
      const rm = el('button', { type: 'button', className: 'mc-x', title: t('chest.remove.title'), 'aria-label': t('chest.remove.label', { tool: tk.name }) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
      rm.addEventListener('click', async () => {
        const k = await ask(t('chest.remove.h'), t('chest.remove.text', { tool: tk.name }), [['cancel', t('dlg.cancel')], ['remove', t('chest.remove.ok'), 'btn-plot']]);
        if (k !== 'remove') return;
        ST.chest = ST.chest.filter((x) => x !== tk);
        if (ST.toolPreset?.id === tk.id) ST.toolPreset = null;
        persistChest(); renderChest();
      });
      ui.chest.append(el('li', { className: 'mc-chest-row' }, use, rm));
    }
  }

  ui.chestFile.addEventListener('change', async () => {
    const f = ui.chestFile.files[0];
    ui.chestFile.value = '';
    if (!f) return;
    if (f.size > 16 * 1048576) { status(t('chest.import.big')); return; }   // stamps of page content carry a small PDF each (71.9)
    try {
      const { tools, skipped } = parseChest(await f.text());
      if (!tools.length) { status(t('chest.import.none', { file: f.name })); return; }
      ST.chest = mergeChest(ST.chest, tools);
      persistChest(); renderChest();
      status(t('chest.imported', { n: tools.length, file: f.name }) + (skipped ? ' ' + t('chest.import.skipped', { n: skipped }) : ''));
    } catch (e) { status(e.message); }
  });

  return { saveToChest, saveStamp, placeStampTool, renderChest };
}
