/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bookmarks-ui.js: markupcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountBookmarks(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { count, fromSheets } from './bookmarks.js';
import { el } from './ui-util.js';

export function mountBookmarks(ctx) {
  const { ST, $, find, store, curSheet, status, dialog, ask, goTo, refreshToolbar, syncAutosave } = ctx;

  // ---- bookmarks (0.4 K24): the open file's outline; edits are part of the file's unsaved work ----
  const bmUi = { list: $('[data-bm-list]'), note: $('[data-bm-note]') };
  function bmFile() { return curSheet()?.file || null; }
  function bmChanged(f) { f.bookmarksEdited = true; for (const pg of f.pages) store.dirtySheets.add(pg.key); renderBookmarks(); refreshToolbar(); syncAutosave(); }
  function renderBookmarks() {
    if (!bmUi.list) return;
    const f = bmFile();
    bmUi.note.textContent = f ? (f.bookmarks?.length ? t('bm.of', { file: f.name, n: count(f.bookmarks) }) : t('bm.none', { file: f.name })) : '';
    const rows = [];
    const walk = (items, depth, parent) => items.forEach((b, i) => {
      rows.push(el('li', { className: 'mc-layer mc-bm', style: '--depth:' + depth },
        el('button', { type: 'button', className: 'mc-layer-name', title: b.page >= 0 ? t('bm.go', { page: b.page + 1 }) : t('bm.nowhere'), onclick: () => { const i2 = ST.sheets.findIndex((s) => s.file === f && s.page.index === b.page); if (i2 >= 0) goTo(i2); else status(t('bm.nowhere')); } }, b.title),
        el('button', { type: 'button', className: 'mc-layer-btn', title: t('bm.rename', { title: b.title }), onclick: async () => { const v = await askText(t('bm.rename.title'), t('bm.title.label'), b.title); if (v) { b.title = v; bmChanged(f); } } }, el('i', { className: 'bi bi-pencil', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('bm.rename', { title: b.title }))),
        el('button', { type: 'button', className: 'mc-layer-btn', title: t('bm.remove', { title: b.title }), onclick: () => { parent.splice(i, 1); bmChanged(f); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }), el('span', { className: 'visually-hidden' }, t('bm.remove', { title: b.title })))));
      walk(b.children || [], depth + 1, b.children);
    });
    if (f?.bookmarks) walk(f.bookmarks, 0, f.bookmarks);
    bmUi.list.replaceChildren(...rows);
  }
  async function askText(title, label, value = '') {
    const input = el('input', { type: 'text', className: 'mc-input', id: 'mc-dlg-text', maxlength: '200', value, autocomplete: 'off' });
    const r = await dialog({ title, body: [el('label', { className: 'mc-k', for: 'mc-dlg-text' }, label), input], buttons: [['cancel', t('dlg.cancel')], ['ok', t('dlg.ok'), 'btn-plot']], submit: 'ok', check: () => (input.value.trim() ? '' : t('bm.title.need')) });
    return r.key === 'ok' ? input.value.trim().slice(0, 200) : null;
  }
  async function bookmarkAct(kind) {
    const f = bmFile();
    if (!f) { status(t('need.pdf')); return; }
    if (kind === 'build') {
      if (f.bookmarks?.length && await ask(t('bm.build.title'), t('bm.build.replace', { n: count(f.bookmarks) }), [['cancel', t('dlg.cancel')], ['ok', t('bm.build.ok'), 'btn-plot']]) !== 'ok') return;
      f.bookmarks = fromSheets(f.pages.map((pg) => ({ index: pg.index, title: pg.title })));
      bmChanged(f);
      status(t('bm.built', { n: f.bookmarks.length }));
    } else if (kind === 'add') {
      const s = curSheet();
      const v = await askText(t('bm.add.title'), t('bm.title.label'), s.page.title);
      if (!v) return;
      f.bookmarks = [...(f.bookmarks || []), { title: v, page: s.page.index, children: [] }];
      bmChanged(f);
    }
  }
  find('[data-act="bm-build"]')?.addEventListener('click', () => bookmarkAct('build'));
  find('[data-act="bm-add"]')?.addEventListener('click', () => bookmarkAct('add'));

  return { renderBookmarks };
}
