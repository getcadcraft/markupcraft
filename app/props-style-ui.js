/* SPDX-License-Identifier: Apache-2.0 */
/**
 * props-style-ui.js: markupcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPropsStyle(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el } from './ui-util.js';
import { mix } from './view.js';
import { stamps, STAMPS, stampLabel } from './model.js';

export function mountPropsStyle(ctx) {
  const { store, PIC, SIG, isPic, editable, field, fid, refreshAll } = ctx;

  /** Apply a patch to the selected markups (one undo step). */
  function patchSel(label, fn) {
    const list = editable();
    if (!list.length) return;
    store.change(label, (tx) => { for (const m of list) { const p = fn(m); if (p) tx.update(m.id, p); } });
    refreshAll();
  }

  function styleControls(st, apply, types) {
    const out = [];
    const hasText = types.some((t) => ctx.TEXT_TYPES.has(t));
    const fillable = types.some((t) => ['rect', 'ellipse', 'polygon', 'cloud', 'cloudrect', 'text', 'callout', 'area'].includes(t));
    const lineless = types.every((t) => t === 'note');
    if (window.ccPropGrid) {   // 0.8 PANEL-COMPACT: the style fields in the shared property grid (the form below stays where the shell has no grid)
      const S = t('props.style'), num = (v) => Math.round(v * 1000) / 1000;
      const rows = [{ id: 'color', category: S, label: t('props.color'), type: 'color', value: st.color }];
      if (!lineless) rows.push({ id: 'width', category: S, label: types.includes('highlight') && types.length === 1 ? t('props.width') : t('props.line_width'), type: 'number', value: num(st.width), min: 0, max: 72, step: 0.25 });
      if (fillable) {
        rows.push({ id: 'fill', category: S, label: t('props.fill'), type: 'checkbox', value: !!st.fill });
        if (st.fill) rows.push({ id: 'fillColor', category: S, label: t('props.fill_color'), type: 'color', value: st.fill },
          { id: 'fillOpacity', category: S, label: t('props.fill_opacity'), type: 'slider', value: Math.round((st.fillOpacity ?? 1) * 100), min: 0, max: 100, step: 5, unit: '%' });
      }
      rows.push({ id: 'opacity', category: S, label: t('props.opacity'), type: 'slider', value: Math.round((st.opacity ?? 1) * 100), min: 5, max: 100, step: 5, unit: '%' });
      if (hasText || types.some((t) => t === 'measure' || t === 'area' || t === 'count')) rows.push({ id: 'fontSize', category: S, label: t('props.text_size'), type: 'number', value: num(st.fontSize), min: 4, max: 144, step: 1 });
      const host = el('div', { className: 'mc-grid span' });
      ccPropGrid.create(host, { label: S, key: 'style', rows, onChange: (id, v, info) => {
        if (info && info.live) return;   // a slider applies where it settles, like the range box it replaces
        if (id === 'color') apply({ color: v, textColor: undefined });
        else if (id === 'width') apply({ width: Math.min(72, Math.max(0, Number(v))) });
        else if (id === 'fill') apply({ fill: v ? (st.fill || mix(st.color, '#ffffff', 0.6)) : null });
        else if (id === 'fillColor') apply({ fill: v });
        else if (id === 'fillOpacity') apply({ fillOpacity: Number(v) / 100 });
        else if (id === 'opacity') apply({ opacity: Number(v) / 100 });
        else if (id === 'fontSize' && Number(v) >= 4 && Number(v) <= 144) apply({ fontSize: Number(v) });
      } });
      return [host];
    }
    let id = fid();
    out.push(...field(t('props.color'), el('input', { type: 'color', id, className: 'mc-color', value: st.color, onchange: (e) => apply({ color: e.target.value, textColor: undefined }) }), id));
    if (!lineless) {
      id = fid();
      out.push(...field(types.includes('highlight') && types.length === 1 ? t('props.width') : t('props.line_width'), el('input', { type: 'number', id, className: 'mc-input mc-num', min: '0', max: '72', step: '0.25', value: String(st.width), onchange: (e) => { const v = parseFloat(e.target.value); if (Number.isFinite(v) && v >= 0) apply({ width: Math.min(72, v) }); } }), id));
    }
    if (fillable) {
      id = fid();
      const on = el('input', { type: 'checkbox', id, checked: !!st.fill, onchange: (e) => apply({ fill: e.target.checked ? (st.fill || mix(st.color, '#ffffff', 0.6)) : null }) });
      const col = el('input', { type: 'color', className: 'mc-color', value: st.fill || mix(st.color, '#ffffff', 0.6), 'aria-label': t('props.fill_color'), disabled: !st.fill, onchange: (e) => apply({ fill: e.target.value }) });
      out.push(el('label', { for: id, className: 'mc-k' }, t('props.fill')), el('span', { className: 'mc-row' }, on, col));
      if (st.fill) {
        id = fid();
        out.push(...field(t('props.fill_opacity'), el('input', { type: 'range', id, min: '0', max: '100', step: '5', value: String(Math.round((st.fillOpacity ?? 1) * 100)), onchange: (e) => apply({ fillOpacity: +e.target.value / 100 }) }), id));
      }
    }
    id = fid();
    out.push(...field(t('props.opacity'), el('input', { type: 'range', id, min: '5', max: '100', step: '5', value: String(Math.round((st.opacity ?? 1) * 100)), onchange: (e) => apply({ opacity: +e.target.value / 100 }) }), id));
    if (hasText || types.some((t) => t === 'measure' || t === 'area' || t === 'count')) {
      id = fid();
      out.push(...field(t('props.text_size'), el('input', { type: 'number', id, className: 'mc-input mc-num', min: '4', max: '144', step: '1', value: String(st.fontSize), onchange: (e) => { const v = parseFloat(e.target.value); if (v >= 4 && v <= 144) apply({ fontSize: v }); } }), id));
    }
    return out;
  }

  function stampChooser(current, onPick, pictures = false) {
    const id = fid();
    // the built-in stamps read in the page's language: a stamp's label is what prints on the sheet
    const builtIn = stamps();
    const isCustom = current && !isPic(current) && !builtIn.includes(current) && !STAMPS.includes(current);
    const select = el('select', { id, className: 'mc-select' }, ...builtIn.map((s) => el('option', { value: s, selected: s === current || s === stampLabel(current) }, s)), el('option', { value: '__custom', selected: isCustom }, t('stamp.custom')),
      ...(pictures ? [el('option', { value: PIC, selected: current === PIC }, t('stamp.picture')), el('option', { value: SIG, selected: current === SIG }, t('stamp.signature'))] : []));
    const cid = fid();
    const custom = el('input', { type: 'text', id: cid, className: 'mc-input', maxlength: '60', placeholder: t('stamp.text'), value: isCustom ? current : '', hidden: !isCustom });
    select.addEventListener('change', () => { if (select.value === '__custom') { custom.hidden = false; custom.focus(); } else { custom.hidden = true; onPick(select.value); } });
    custom.addEventListener('change', () => { const v = custom.value.trim(); if (v) onPick(v.slice(0, 60)); });
    return [el('label', { for: id, className: 'mc-k' }, t('stamp.label')), el('span', { className: 'mc-stack' }, select, el('label', { for: cid, className: 'visually-hidden' }, t('stamp.custom.label')), custom)];
  }

  return { patchSel, styleControls, stampChooser };
}
