/* SPDX-License-Identifier: Apache-2.0 */
/**
 * arc-draw-ui.js: markupcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountArcDraw(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { arcSession, ARC_METHODS, typedValue } from './arc-tool.js';
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { pointerValue } from './arcs/arcs.js';

export function mountArcDraw(ctx) {
  const { ST, ui, store, view, settings, saveSettings, curKey, status, newMarkup, commitNew } = ctx;

  /** Arc and angle (0.4 K4): three clicks, then one undo step. */
  // ---- the Arc tool's ten methods (arc-tool.js) ----
  const arcHint = () => {
    const a = ST.pending?.kind === 'arcm' ? ST.pending.arc : null;
    const role = a ? a.role : arcSession(settings.arcMethod).role;
    return t('arc.method.' + settings.arcMethod.toLowerCase()) + ': ' + t('arc.role.' + role) + ' ' + t('arc.esc');
  };
  function setArcMethod(id) {
    if (!ARC_METHODS.includes(id)) return;
    if (ST.pending?.kind === 'arcm') { ST.pending = null; view.invalidate(); }
    settings.arcMethod = id; saveSettings();
    status(arcHint());
    showArcBar(); if (ST.tool === 'arc') ctx.renderProps();
  }
  /** The small options row over the page while the Arc tool is active: the method chooser. */
  function showArcBar() {
    ui.canvases.querySelector('.mc-arcbar')?.remove();
    if (ST.tool !== 'arc') return;
    const id = ctx.fid();
    const sel = el('select', { id, className: 'mc-select', 'aria-label': t('arc.method'), title: t('arc.method.title'), dataset: { arcMethod: '' },
      onchange: (e) => { setArcMethod(e.target.value); ui.over.focus({ preventScroll: true }); } },
    ...ARC_METHODS.map((m) => el('option', { value: m, selected: m === settings.arcMethod }, t('arc.method.' + m.toLowerCase()))));
    ui.canvases.append(el('div', { className: 'mc-arcbar' }, sel));
  }
  function arcPress(p) {
    if (ST.pending?.kind !== 'arcm') ST.pending = { kind: 'arcm', arc: arcSession(settings.arcMethod), at: p };
    const a = ST.pending.arc;
    ST.pending.at = p;
    if (a.numeric) {
      a.value(pointerValue(a.method, a.v, { x: p[0], y: p[1] }));
    } else a.point(p);
    arcAdvance();
  }
  function arcAdvance() {
    const a = ST.pending.arc;
    if (a.v.length < a.roles.length) { status(arcHint()); view.invalidate(); return; }
    const r = a.finish();
    if (r.error) {
      a.back(); status(t('arc.err.' + r.error)); view.invalidate(); return;   // the last input is taken back; the person tries again
    }
    const span = Math.hypot(r.pts[2][0] - r.pts[0][0], r.pts[2][1] - r.pts[0][1]);
    if (span < 2 / view.z && a.method === '3P') { a.back(); status(t('poly.need', { type: ctx.tlow('arc'), n: 3 })); view.invalidate(); return; }
    ST.pending = null;
    commitNew(newMarkup('arc', { pts: r.pts }));
    status(arcHint());
  }
  /** Typing a number (or "-" first) for an angle, length, radius or direction: a small box at the pointer, Enter places it. */
  function openArcValue(first) {
    ui.canvases.querySelector('.mc-sketch')?.remove();
    const a = ST.pending.arc, role = a.role;
    const box = el('input', { type: 'text', className: 'mc-input mc-sketch', value: first, autocomplete: 'off', spellcheck: false, 'aria-label': t('arc.type.' + role), title: t('arc.type.' + role) });
    const at = ST.pointer || [view.w / 2, view.h / 2];
    box.style.left = Math.min(view.w - 160, at[0] + 14) + 'px';
    box.style.top = Math.min(view.h - 40, at[1] + 14) + 'px';
    const close = () => { box.remove(); ui.over.focus({ preventScroll: true }); };
    box.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (ST.pending?.kind !== 'arcm') { close(); return; }
      const r = typedValue(role, box.value, store.calibrations.get(curKey()), view.seenRotate);
      if (r.error) { status(t(r.error)); box.select(); return; }
      close();
      ST.pending.arc.value(r.value);
      arcAdvance();
    });
    box.addEventListener('blur', () => setTimeout(() => box.isConnected && box.remove(), 0));
    ui.canvases.append(box);
    box.focus();
    box.setSelectionRange(box.value.length, box.value.length);
  }

  function finishThree(pts) {
    const span = Math.max(Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]), Math.hypot(pts[2][0] - pts[1][0], pts[2][1] - pts[1][1]));
    if (span < 2 / view.z) { status(t('poly.need', { type: ctx.tlow(ST.tool), n: 3 })); view.invalidate(); return; }
    commitNew(newMarkup(ST.tool, { pts }));
  }

  return { arcHint, setArcMethod, showArcBar, arcPress, openArcValue, finishThree };
}
