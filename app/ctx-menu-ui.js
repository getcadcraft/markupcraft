/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ctx-menu-ui.js: markupcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountCtxMenu(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { panButton } from './input-mouse.js';
import { clipBounds } from './clip.js';
import { pick } from './geom.js';
import { el } from './ui-util.js';
import { t } from './i18n.js';

export function mountCtxMenu(mnt) {
  const { ST, store, view, curSheet, envOf, pickable, tolerance, host, commitEdit, insertPicture, setTool, closeMenus, act, editable, hasClip, paste, over, localXY, refreshSelection, root } = mnt;

  // a finger held down makes the browser fire contextmenu (and then cancel the pointer): that is our long press too.
  // A mouse's right click opens the context menu (0.7.1 71.6) on release when the right button did not pan; the menu key
  // and Shift+F10 open it at the selection (or the middle of the view).
  // Without the right-button pan the menu still waits for the release, and a right drag opens nothing (the browser sends
  // contextmenu on the press on Linux and macOS, on the release on Windows).
  ST.rightDown = null;   // { t, x, y, up, moved, want }
  over.addEventListener('pointermove', (e) => { if (ST.rightDown && !ST.rightDown.up && Math.hypot(e.clientX - ST.rightDown.x, e.clientY - ST.rightDown.y) > 4) ST.rightDown.moved = true; });
  over.addEventListener('pointerup', (e) => {
    if (e.button !== 2 || !ST.rightDown || ST.rightDown.up) return;
    ST.rightDown.up = performance.now();
    if (ST.rightDown.want) { const r = ST.rightDown; ST.rightDown = null; if (!r.moved && view.page) { const [x, y] = localXY(e); openCtxMenu(x, y); } }
  });
  over.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (ST.press) { const p0 = ST.press; clearTimeout(p0.timer); mnt.longPress(p0.x, p0.y, true); return; }
    if (ST.rightDown && (ST.rightDown.up ? performance.now() - ST.rightDown.up < 600 : true)) {   // from the mouse, not the menu key
      if (panButton(2) || !view.page) { if (ST.rightDown.up) ST.rightDown = null; return; }   // the pan's release opens it (a right click that did not pan)
      if (!ST.rightDown.up) { ST.rightDown.want = true; return; }
      const r = ST.rightDown; ST.rightDown = null;
      if (!r.moved) { const [x, y] = localXY(e); openCtxMenu(x, y); }
      return;
    }
    if (!view.page) return;
    const b = ST.tool === 'select' && ST.sel.size ? clipBounds([...ST.sel].map((id) => store.get(id)).filter(Boolean)) : null;
    const [x, y] = b ? view.toScreen([(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]) : [view.w / 2, view.h / 2];
    openCtxMenu(x, y);
  });

  // ---- the context menu (0.7.1 71.6, MrBorking): the Edit menu's commands where the pointer is ----
  ST.ctxMenu = null;
  function closeCtxMenu() { if (!ST.ctxMenu) return; ST.ctxMenu.remove(); ST.ctxMenu = null; }
  function openCtxMenu(sx, sy) {
    closeCtxMenu(); closeMenus();
    commitEdit();
    const p = view.toUser(sx, sy);
    // right-clicking something not selected selects it first (as other programs do)
    if (ST.tool === 'content') mnt.baseUi.pickAt(p);
    else if (ST.tool === 'select' || mnt.DRAW_TOOLS.has(ST.tool)) {
      const m = pick(pickable(), p, tolerance(), envOf);
      if (m && !ST.sel.has(m.id)) { if (ST.tool !== 'select') setTool('select'); ST.sel = new Set([m.id]); refreshSelection(); }
    }
    const content = ST.tool === 'content';
    const has = content ? mnt.baseUi.selection.length > 0 : editable().length > 0;
    const marks = content ? [] : editable();
    const items = [
      ['cut', 'menu.cut', has, 'Ctrl+X'], ['copy', 'menu.copy', has, 'Ctrl+C'],
      ['paste-here', 'ctx.paste_here', hasClip(), 'Ctrl+V'], ['paste-in-place', 'menu.paste_in_place', hasClip(), 'Ctrl+Shift+V'],
      ['duplicate', 'menu.duplicate', has, 'Ctrl+D'], ['delete', 'menu.delete', has, 'Delete'], null,
      ['save-stamp', 'menu.save_stamp', has, ''],
      ...(marks.length ? [['flat', marks.every((m) => m.flat) ? 'ctx.flat.off' : 'ctx.flat.on', true, '']] : []),
      ['insert-picture-here', 'ctx.insert_picture', !!curSheet(), ''], null,
      ['select-all', 'menu.select_all', !!curSheet(), 'Ctrl+A'],
    ];   // i18n-ignore (key names)
    const list = el('div', { className: 'mc-menu-list mc-ctx', role: 'menu', 'aria-label': t('ctx.label'), dataset: { ctxMenu: '' } });
    for (const it of items) {
      if (!it) { list.append(el('hr', {})); continue; }
      const [a, key, on, kbd] = it;
      list.append(el('button', { type: 'button', role: 'menuitem', disabled: !on, dataset: { ctx: a }, onclick: () => {
        closeCtxMenu();
        if (a === 'paste-here') paste('pointer', [sx, sy]);
        else if (a === 'insert-picture-here') insertPicture(null, [sx, sy]);
        else if (a === 'flat') mnt.setFlat(marks, !marks.every((m) => m.flat));
        else act(a);
        over.focus({ preventScroll: true });
      } }, t(key), kbd ? el('kbd', {}, kbd) : null));
    }
    root.append(list);
    ST.ctxMenu = list;
    const r = over.getBoundingClientRect(), w = list.offsetWidth, h = list.offsetHeight;
    list.style.left = Math.max(4, Math.min(innerWidth - w - 4, r.left + sx)) + 'px';
    list.style.top = Math.max(4, Math.min(innerHeight - h - 4, r.top + sy)) + 'px';
    list.querySelector('button:not(:disabled)')?.focus();
    list.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeCtxMenu(); over.focus({ preventScroll: true }); return; }
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault(); e.stopPropagation();
      const bs = [...list.querySelectorAll('button:not(:disabled)')];
      const i = bs.indexOf(document.activeElement);
      bs[(i < 0 ? 0 : i + (e.key === 'ArrowDown' ? 1 : -1) + bs.length) % bs.length]?.focus();
    });
  }
  document.addEventListener('pointerdown', (e) => { if (ST.ctxMenu && !ST.ctxMenu.contains(e.target)) closeCtxMenu(); }, true);
  window.addEventListener('blur', closeCtxMenu);
  window.markupcraft.contextMenu = (x, y) => openCtxMenu(x, y);   // tests
  window.markupcraft.select = (ids) => { ST.sel = new Set(ids); refreshSelection(); };   // tests
  window.markupcraft.host = host;   // tests (the recent list)

  return { openCtxMenu };
}
