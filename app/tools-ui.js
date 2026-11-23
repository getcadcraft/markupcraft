/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tools-ui.js: markupcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountTools(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { stampLabel } from './model.js';

export function mountTools(ctx) {
  const { ST, findAll, ui, store, view, settings, cmp, curSheet, curKey, status, askAuthor, commitEdit, currentPicture, root } = ctx;

  // ---- tools ----
  for (const b of root.querySelectorAll('[data-tool]')) b.addEventListener('click', () => { ST.toolPreset = null; setTool(b.dataset.tool); });

  async function setTool(name, preset = null) {
    commitEdit();
    ctx.cancelOps();
    if (ctx.NEEDS_SCALE.has(name) && curSheet() && !store.calibrations.get(curKey())) {
      status(t('hint.calibrate_first'));
      ST.afterCalibrate = name;
      name = 'calibrate';
    }
    if (ST.tool === 'content' && name !== 'content') ctx.baseUi.leave();
    if (ST.tool === 'seltext' && name !== 'seltext') ST.textSel?.leave();
    if (ST.tool === 'areacopy' && name !== 'areacopy') ST.areaUi?.leave();
    if (ST.lineUp && name !== 'select') { ST.lineUp = null; view.invalidate(); }
    if (name !== 'record') ST.fieldUi?.cancelPlace();
    ST.tool = name;
    ST.toolPreset = preset;
    ST.formUi?.render();   // the form's inputs show while Fill form is on
    for (const b of findAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === name));
    updateCursor();
    ST.wsSoon();
    // the count tool keeps adding to a selected count group; every other drawing tool starts fresh
    const keepGroup = name === 'count' && ST.sel.size === 1 && store.get([...ST.sel][0])?.type === 'count';
    if (ctx.DRAW_TOOLS.has(name) && !keepGroup) { ST.sel = new Set(); view.invalidate(true); }
    ctx.renderProps();
    if (ctx.DRAW_TOOLS.has(name) && !ST.author && !ST.askedAuthor) await askAuthor();
    if (name === 'calibrate') status(t('hint.calibrate'));
    else if (name === 'stamp') status(!preset && currentPicture() ? (settings.stamp === ctx.SIG ? t('image.signature.ready') : t('image.ready', { name: currentPicture().label })) : t('hint.stamp', { stamp: preset?.label || stampLabel(settings.stamp) }));
    else if (ctx.KIND[name] === 'poly') status(t('hint.poly'));
    else if (name === 'arc') status(ctx.arcHint());
    else if (ctx.KIND[name] === 'three') status(t('hint.' + name));
    else if (name === 'callout') status(t('hint.callout'));
    else if (name === 'count') status(t('hint.count'));
    if (name === 'area') status(t('hint.area'));
    ctx.showArcBar();   // the Arc tool's method chooser (gone for every other tool)
    if (name === 'content') { ST.sel = new Set(); ctx.baseUi.enter(); ctx.renderProps(); view.invalidate(true); }
    if (name === 'seltext') { ST.sel = new Set(); ctx.renderProps(); ST.textSel?.enter(); }
    if (name === 'areacopy') { ST.sel = new Set(); ctx.renderProps(); ST.areaUi?.enter(); }
    if (name === 'fill') { ST.sel = new Set(); ctx.renderProps(); view.invalidate(true); const f = curSheet()?.file; status(f?.form ? t('hint.fill', { n: ST.formUi.countFor(f) }) : t('hint.fill.none')); }
  }

  function updateCursor() {
    const c = ui.over;
    if (ST.tool !== 'select' && ST.tool !== 'content') c.style.cursor = '';
    c.classList.toggle('is-pan', ST.tool === 'pan' || ST.tool === 'fill' || ST.spaceDown);
    c.classList.toggle('is-text', ST.tool === 'seltext' && !ST.spaceDown);
    c.classList.toggle('is-draw', ctx.DRAW_TOOLS.has(ST.tool) || ST.tool === 'record' || ST.tool === 'calibrate' || ST.tool === 'areacopy' || !!ST.lineUp || !!cmp.aligning);
    c.classList.toggle('is-panning', ST.drag?.kind === 'pan');
  }

  return { setTool, updateCursor };
}
