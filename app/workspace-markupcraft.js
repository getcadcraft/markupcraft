/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspace-markupcraft.js — MarkupCraft's adapter for the shell's workspace layout engine (assets/js/app-workspace.js; 0.7 WS.10;
 * map docs/apps/app-workspace.md, log docs/0.7-sessions/ws-markupcraft.md). The engine builds the blocks a layout names; this file
 * fills them with MarkupCraft's own things, starting from the shell's fromInput() (the Ribbon style in input-markupcraft.js, the
 * toolbar's groups, every tool run through the registry = the app's own button):
 *
 *   views       the sheets of the open set (a tab per opened sheet, or a tab for every sheet); going to one = the app's goTo
 *   palettes    properties (the right panel's Properties pane), browser (the sheets list + the markups list), panel (the left
 *               panel's own content: find, bookmarks, spaces, layers); while they show, the right panel's Properties and Markups
 *               tabs step aside and come back after
 *   slots       scale (the sheet's scale / calibrate button), fit + layout (the sheet and zoom bar), level (the scale in the info box),
 *               document (your name on new markups)
 *   status      the status bar (position, messages, scale, author) moves into the layout's status bar
 *
 *   createMarkupcraftWorkspace({ root, app }) → { adapter, attach(engine), refresh() } | null (no input registry)
 *   app = { sheets(), cur(), goTo(i), files(), dirty(), busy(), sel(), tool(), status(text) } — read live from markupcraft.js
 */
import { fromInput } from '/assets/js/app-workspace-input.js';   // the shell's (import map), loaded with the engine
import { t } from './i18n.js';
import { el } from './ui-util.js';

const MAP = { open: 'file.open', save: 'file.save', undo: 'edit.undo', redo: 'edit.redo', select: 'tool.select', clear: 'edit.select-none', fit: 'view.fit-page' };

export async function createMarkupcraftWorkspace({ root, app }) {
  const stage = root.querySelector('[data-stage]');
  const left = root.querySelector('.mc-left'), right = root.querySelector('.mc-right');
  const footer = root.querySelector('.mc-status');
  const base = await fromInput({ app: 'markupcraft', root, stage, panels: { left, right }, status: footer, map: MAP, say: (text) => app.status(text) });
  if (!base) return null;
  const I = window.ccInput;
  const byId = new Map(I.commands.map((c) => [c.id, c]));
  const target = (id) => { const c = byId.get(MAP[id] || id); return c?.sel ? root.querySelector(c.sel) || document.querySelector(c.sel) : null; };
  let engine = null, ctx = null, frame = 0, seenKey = null;
  const soon = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; engine?.refresh(); }); };

  // ---- the views: the sheets ----
  const sheetView = (s) => ({ id: s.page.key, kind: 'sheet', name: s.page.title || s.page.key, icon: 'bi-file-earmark' });
  const curKey = () => app.sheets()[app.cur()]?.page.key || null;
  const mode = () => ctx?.block('viewtabs')?.mode || null;

  // ---- the palettes: Properties, the browser (sheets + markups), the left panel's own content ----
  const propsPane = root.querySelector('[data-pane="props"]'), listPane = root.querySelector('[data-pane="list"]');
  const propsBox = el('div', { className: 'mc-ws-props' });
  const browserBox = el('div', { className: 'mc-ws-browser' });
  const listBox = el('div', { className: 'mc-ws-list' });
  const sheetsSec = root.querySelector('.mc-sheets-sec');
  const moved = [];   // [pane, home comment]: the right panel's panes this file moved (the engine moves the left panel's own)
  function take(pane, into) {
    if (!pane) return;
    const h = document.createComment('workspace: markupcraft home');   // i18n-ignore: a comment node
    pane.before(h); moved.push([pane, h]); into.append(pane); pane.hidden = false;
  }
  function giveBack() { while (moved.length) { const [n, h] = moved.pop(); if (h.parentNode) { h.after(n); h.remove(); } } }
  // a pane in a palette always shows: the app's tab switching (tabTo) hides the panes of the tabs not picked, this undoes it there
  const keepShown = new MutationObserver(() => { for (const [n] of moved) if (n.hidden) n.hidden = false; });
  function syncTabs() {   // back in the right panel: the picked tab's pane shows, the others hide (the app's own tab switching)
    const on = right?.querySelector('[data-tab][aria-selected="true"]:not([hidden])') || asideTab('props');
    on?.click();
  }
  const asideTab = (k) => right?.querySelector('[data-tab="' + k + '"]') || document.querySelector('[data-tab="' + k + '"]');
  let tabsAside = false;
  function stepAside(on) {
    if (on === tabsAside) return;
    tabsAside = on;
    for (const k of ['props', 'list']) { const b = asideTab(k); if (b) b.hidden = on; }
    if (on && ['props', 'list'].includes(right?.querySelector('[data-tab][aria-selected="true"]')?.dataset.tab)) asideTab('punch')?.click();
  }

  // ---- the slots: controls the app already has, moved in and back by the engine ----
  const scaleBtn = root.querySelector('.mc-status [data-act="calibrate"]');
  const authorBtn = root.querySelector('.mc-status [data-act="author"]');
  const nav = root.querySelector('.mc-nav');
  const one = (n) => () => [n].filter(Boolean);

  const toolbarOnly = (id) => { const b = target(id); return !!b && !b.closest('details'); };   // the toolbox: the toolbar's own buttons, not its menus' rows
  const adapter = {
    ...base,
    app: 'markupcraft', root, stage, panels: { left, right }, status: footer, t: (k, v) => t(k, v),
    fill: '.mc-canvases', flow: ':is(.mc-hint, .mc-legend)',   // i18n-ignore: selectors
    state() {
      const files = app.files(), sel = app.sel(), tool = app.tool() || 'select';
      return { document: files.length ? files : null, name: files.map((f) => f.name).join(', '), dirty: app.dirty(), busy: app.busy(), selection: [...sel],
        tool, toolLabel: tool !== 'select' ? t('tool.' + tool) : '', other: false };
    },
    endTool() { if (app.tool() !== 'select') app.setTool('select'); },
    toolbox: () => base.toolbox().map((g) => ({ ...g, tools: g.tools.filter(toolbarOnly) })).filter((g) => g.tools.length),
    can(id, block, s) {
      // with the palettes on, the right panel's Properties and Markups tabs are the palettes: their commands show those
      if (tabsAside && (id === 'panel.props' || id === 'panel.list')) return { enabled: true, reason: '' };
      return base.can(id, block, s);   // a closed tab's command is not greyed: the registry's why() (input-markupcraft.js hooks) says so
    },
    run(id, block, button) {
      if (tabsAside && id === 'panel.list') { ctx?.palette('browser'); listBox.scrollIntoView?.({ block: 'start' }); return; }
      if (tabsAside && id === 'panel.props') return;
      return base.run(id, block, button);   // the registry's run opens a closed tab first (its hooks' prepare)
    },
    pressed: (id, block) => base.pressed(id, block),
    options(s) {
      return { title: s.toolLabel || t('tool.select'), text: !s.document ? t('ws.opt.open') : s.tool !== 'select' ? t('ws.opt.tool') : t('ws.opt.pick') };
    },
    showProperties: () => asideTab('props')?.click(),
    slots: {
      scale: { label: t('ws.scale'), nodes: one(scaleBtn) },
      fit: { label: '', nodes: one(nav) },
      level: { label: t('ws.scale'), nodes: one(scaleBtn) },
      document: { label: t('ws.reviewer'), nodes: one(authorBtn) },
      layout: { label: '', nodes: one(nav) },
    },
    palettes: {
      properties: { label: t('tab.props'), body: () => propsBox },
      browser: { label: t('ws.browser'), hint: t('ws.browser.hint'), body: () => browserBox },
      panel: { label: t('ws.panel') },
    },
    views: {
      list: () => (app.files().length ? app.sheets().map(sheetView) : []),
      current: curKey,
      token: () => app.files().map((f) => f.id).join('|') || null,
      initial: curKey,
      go: (id) => { const i = app.sheets().findIndex((s) => s.page.key === id); if (i >= 0 && i !== app.cur()) app.goTo(i); },
    },
    hide: [],
    entered(c) {
      ctx = c;
      if (c.has('palettes')) {
        take(propsPane, propsBox);
        browserBox.append(listBox);
        if (sheetsSec) browserBox.prepend(sheetsSec);   // the engine moved it into the panel palette first; its home is the engine's
        take(listPane, listBox);
        keepShown.observe(propsPane, { attributes: true, attributeFilter: ['hidden'] });
        keepShown.observe(listPane, { attributes: true, attributeFilter: ['hidden'] });
        stepAside(true);
      }
      seenKey = null;
    },
    leaving(c) {
      if (c.has('palettes')) { keepShown.disconnect(); giveBack(); stepAside(false); syncTabs(); }
    },
    left() { ctx = null; },
    refresh(c) {
      // 'open' tabs: going to a sheet any other way (the sheets list, Page Down, a link) opens or picks its tab
      const k = curKey();
      if (mode() === 'open' && k !== seenKey) { seenKey = k; if (k && c.view()?.id !== k) c.open(k); }
    },
  };
  return { adapter, attach(e) { engine = e; }, refresh: soon };
}
