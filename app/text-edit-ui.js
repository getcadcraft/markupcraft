/* SPDX-License-Identifier: Apache-2.0 */
/**
 * text-edit-ui.js: markupcraft.js's 5 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountTextEdit(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { clone } from './model.js';
import { t } from './i18n.js';
import { SCREEN_FONT, wrapText } from './font.js';
import { frame as textFrame } from './shapes.js';

export function mountTextEdit(ctx) {
  const { ST, ui, store, view, status, commitNew, tabTo, refreshAll } = ctx;

  // ---- text editing (a textarea over the markup) ----
  function startEdit(m, isNew = false) {
    commitEdit();
    const field = m.type === 'note' ? 'comment' : m.type === 'stamp' ? null : 'text';
    if (!field) { tabTo('props'); return; }
    ST.editing = { m: clone(m), isNew, field };
    if (!isNew) { view.hidden = new Set([m.id]); }
    const ta = ui.edit;
    ta.value = m[field] || '';
    ta.hidden = false;
    ta.dataset.type = m.type;
    positionEditor();
    view.invalidate(true);
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
    status(m.type === 'note' ? t('edit.note') : t('edit.text'));
  }
  function positionEditor() {
    if (!ST.editing) return;
    const m = ST.editing.m, ta = ui.edit;
    let r;
    if (m.type === 'note') {
      const [x, y] = view.toScreen(m.pts[0]);
      r = [x + 26, y, 260, 110];
      ta.style.fontSize = '';
      ta.style.color = '';
      ta.classList.add('is-note');
    } else {
      const a = view.toScreen([m.rect[0], m.rect[1]]), b = view.toScreen([m.rect[2], m.rect[3]]);
      const x = Math.min(a[0], b[0]), y = Math.min(a[1], b[1]);
      r = [x, y, Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])];
      const px = m.style.fontSize * view.z;
      ta.style.fontSize = Math.max(9, px) + 'px';
      ta.style.lineHeight = '1.2';
      ta.style.color = view.color(m.style.textColor || m.style.color, {});
      ta.style.fontFamily = SCREEN_FONT;
      ta.classList.remove('is-note');
      ta.style.padding = Math.max(1, (m.type === 'text' ? 3 : 4) * view.z) + 'px';
    }
    ta.style.left = r[0] + 'px'; ta.style.top = r[1] + 'px';
    ta.style.width = Math.max(120, r[2]) + 'px'; ta.style.height = Math.max(m.type === 'note' ? 80 : 24, r[3]) + 'px';
  }
  ui.edit.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); cancelEdit(); }
    else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); commitEdit(); }
    e.stopPropagation();
  });
  ui.edit.addEventListener('input', () => {
    if (!ST.editing || ST.editing.m.type === 'note') return;
    // grow the box downward as the text wraps
    const m = ST.editing.m;
    const f = textFrame(m.rot || 0, m.rect);
    const pad = m.type === 'text' ? 3 : 4;
    const lines = wrapText(ui.edit.value, m.style.fontSize, f.W - 2 * pad);
    const need = m.style.fontSize + (lines.length - 1) * m.style.fontSize * 1.2 + 2 * pad + m.style.fontSize * 0.3;
    if (need > f.H) { m.rect = growDown(m, need); positionEditor(); }
  });
  ui.edit.addEventListener('blur', () => setTimeout(() => { if (ST.editing && document.activeElement !== ui.edit) commitEdit(); }, 0));

  function growDown(m, H) {
    const f = textFrame(m.rot || 0, m.rect);
    const [x0, y0, x1, y1] = m.rect;
    const dv = H - f.H;
    // extend along v (down on screen)
    if (f.v[1] === -1) return [x0, y0 - dv, x1, y1];
    if (f.v[1] === 1) return [x0, y0, x1, y1 + dv];
    if (f.v[0] === 1) return [x0, y0, x1 + dv, y1];
    return [x0 - dv, y0, x1, y1];
  }

  function commitEdit() {
    if (!ST.editing) return;
    const ed = ST.editing;
    ST.editing = null;
    ui.edit.hidden = true;
    view.hidden = null;
    const value = ui.edit.value.replace(/\s+$/, '');
    if (ed.isNew) {
      if (!value && ed.m.type !== 'note') { status(t('edit.empty', { type: ctx.tlow(ed.m.type) })); view.invalidate(true); return; }
      commitNew({ ...ed.m, [ed.field]: value });
    } else if (value !== (store.get(ed.m.id)?.[ed.field] || '') || JSON.stringify(ed.m.rect) !== JSON.stringify(store.get(ed.m.id)?.rect)) {
      store.change(t('undo.edit_text'), (tx) => tx.update(ed.m.id, { [ed.field]: value, ...(ed.m.rect ? { rect: ed.m.rect } : {}) }));
      refreshAll();
    }
    status('');
    view.invalidate(true);
    ui.over.focus({ preventScroll: true });
  }
  function cancelEdit() {
    if (!ST.editing) return;
    ST.editing = null;
    ui.edit.hidden = true;
    view.hidden = null;
    view.invalidate(true);
    status('');
    ui.over.focus({ preventScroll: true });
  }

  return { startEdit, positionEditor, commitEdit };
}
