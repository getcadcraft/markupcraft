/* SPDX-License-Identifier: Apache-2.0 */
/**
 * form-ui.js — filling in a PDF's form on the sheet (0.8, "fillable forms don't appear / work in MarkupCraft"). The file
 * model is forms.js; this puts real inputs over the fields of the open page while the Fill form tool is on, and keeps
 * every value where pdf.js draws it from (the document's annotationStorage), so the sheet, the other pages in Scroll mode,
 * the thumbnails and BCF snapshots show what was typed. Saving writes the values into the fields (markupcraft.js bake).
 *
 *   installForms(api) → { prepare(rec), render(), paint(ctx, page, S), countFor(rec), fieldAt(p), focusAt(p), restore(rec, list), stateFor(rec) }
 *   api = { layer (the element over the canvases), view, sheet() (the open sheet { file, page }), pdfLib(), on() (the Fill
 *           form tool is on), changed(rec, pageIndexes) (a value changed: dirty + redraw) }
 *
 * Values typed here are per field name in `rec.formEdits` (Map name → value, only the ones changed); the file's own values
 * are `rec.form.fields[].value`. Undo is the input's own (Ctrl+Z in a field), not the markup undo.
 */

import { el } from './ui-util.js';
import { t } from './i18n.js';
import { apply } from './geom.js';
import { readForm, storageValue, drawnByUs, cleanValue } from './forms.js';

export function installForms(api) {
  const { layer, view } = api;
  let built = null;   // { key, rec, items: [{ field, widget, node }] } — the inputs of the page they were made for
  let redrawTimer = 0;
  const pendingPages = new Map();   // rec → Set of page indexes waiting for a redraw

  const valueOf = (rec, field) => (rec.formEdits?.has(field.name) ? rec.formEdits.get(field.name) : field.value);

  /** Read a just-opened file's form (only files pdf.js saw fields in). → the number of fields. */
  async function prepare(rec) {
    rec.form = null; rec.formEdits = new Map();
    if (!rec.hasForm) return 0;
    let lib, ldoc;
    try { lib = await api.pdfLib(); ldoc = await lib.PDFDocument.load(rec.bytes, { ignoreEncryption: true, updateMetadata: false }); } catch { return 0; }
    rec.form = readForm(lib, ldoc);
    if (!rec.form) return 0;
    // text and choice fields with no appearance of their own: pdf.js draws them from a value in its storage
    for (const f of rec.form.fields) if (f.type === 'text' || f.type === 'dropdown' || f.type === 'list') for (const w of f.widgets) if (!w.hasAp) setStorage(rec, f, w, f.value);
    return rec.form.fields.length;
  }
  function setStorage(rec, field, widget, value) {
    const v = storageValue(field, widget, value);
    if (v) try { rec.doc.annotationStorage.setValue(widget.id, v); } catch { /* the document closed meanwhile */ }
  }

  /** Set a field's value (from an input, or a restored copy): the storage, the inputs of the same field, the redraw. */
  function setValue(rec, field, raw, from = null) {
    const v = cleanValue(field, raw);
    if (v === undefined || field.readOnly) return false;
    rec.formEdits.set(field.name, v);
    for (const w of field.widgets) setStorage(rec, field, w, v);
    if (built?.rec === rec) for (const it of built.items) if (it.field === field && it.node !== from) show(it, v);
    const pages = pendingPages.get(rec) || new Set();
    for (const w of field.widgets) pages.add(w.page);
    pendingPages.set(rec, pages);
    view.invalidate(true);
    clearTimeout(redrawTimer);
    redrawTimer = setTimeout(flush, 350);
    return true;
  }
  function flush() {
    for (const [rec, pages] of pendingPages) api.changed(rec, [...pages]);
    pendingPages.clear();
  }

  // ---- the inputs ----
  function show(it, v) {
    const n = it.node;
    switch (it.field.type) {
      case 'text': if (n.value !== v) n.value = v; break;
      case 'check': n.checked = !!v; break;
      case 'radio': n.checked = v != null && v === it.widget.on; break;
      case 'dropdown': if (n.tagName === 'INPUT') n.value = v[0] || ''; else n.value = v[0] ?? ''; break;
      case 'list': for (const o of n.options) o.selected = v.includes(o.value); break;
      default: break;
    }
  }
  function make(rec, field, widget, k) {
    const label = field.name + (field.required ? ' ' + t('form.required') : '');
    const common = { className: 'mc-ff mc-ff-' + field.type, 'aria-label': label, title: label, dataset: { field: field.name, widget: widget.id } };
    let node;
    switch (field.type) {
      case 'text':
        node = field.multiline ? el('textarea', { ...common, spellcheck: 'true' }) : el('input', { ...common, type: field.password ? 'password' : 'text', autocomplete: 'off' });
        if (field.maxLen > 0) node.maxLength = field.maxLen;
        node.addEventListener('input', () => setValue(rec, field, node.value, node));
        break;
      case 'check':
        node = el('input', { ...common, type: 'checkbox' });
        node.addEventListener('change', () => setValue(rec, field, node.checked, node));
        break;
      case 'radio':
        node = el('input', { ...common, type: 'radio', name: 'mcf-' + rec.id + '-' + field.name, value: widget.on, title: field.name + ': ' + widget.on, 'aria-label': field.name + ': ' + widget.on });
        node.addEventListener('change', () => { if (node.checked) setValue(rec, field, widget.on, node); });
        break;
      case 'dropdown':
        if (field.editable) {
          const id = 'mcf-dl-' + rec.id + '-' + k;
          node = el('input', { ...common, type: 'text', autocomplete: 'off', list: id });
          node.mcList = el('datalist', { id }, ...field.options.map((o) => el('option', { value: o })));   // beside the input (render)
          node.addEventListener('input', () => setValue(rec, field, [node.value], node));
        } else {
          node = el('select', { ...common }, el('option', { value: '' }, ''), ...field.options.map((o) => el('option', { value: o }, o)));
          node.addEventListener('change', () => setValue(rec, field, node.value ? [node.value] : [], node));
        }
        break;
      case 'list':
        node = el('select', { ...common, multiple: field.multi, size: String(Math.max(2, Math.min(field.options.length, 8))) }, ...field.options.map((o) => el('option', { value: o }, o)));
        node.addEventListener('change', () => setValue(rec, field, [...node.selectedOptions].map((o) => o.value), node));
        break;
      default: return null;   // push buttons and signatures: nothing to type
    }
    if (field.readOnly) { node.disabled = true; node.title = t('form.read_only', { name: field.name }); }
    return node;
  }

  /** The inputs for the open page while the Fill form tool is on; nothing otherwise. Cheap when nothing changed. */
  function render() {
    const s = api.sheet();
    const rec = s?.file, on = api.on() && !!rec?.form;
    const key = on ? s.page.key : '';
    if (!on) { if (built) { layer.replaceChildren(); built = null; } layer.hidden = true; return; }
    if (built?.key !== key || built.rec !== rec) {
      const items = [];
      rec.form.fields.forEach((field) => field.widgets.forEach((widget, k) => {
        if (widget.page !== s.page.index) return;
        const node = make(rec, field, widget, k);
        if (node) items.push({ field, widget, node });
      }));
      // reading order: top to bottom, then left to right (Tab goes through the form as it reads)
      items.sort((a, b) => (b.widget.rect[3] - a.widget.rect[3]) || (a.widget.rect[0] - b.widget.rect[0]));
      layer.replaceChildren(...items.flatMap((it) => (it.node.mcList ? [it.node, it.node.mcList] : [it.node])));
      for (const it of items) show(it, valueOf(rec, it.field));
      built = { key, rec, items };
    }
    layer.hidden = !built.items.length;
    position();
  }
  function position() {
    if (!built) return;
    const z = view.z;
    for (const it of built.items) {
      const [x0, y0, x1, y1] = it.widget.rect;
      const pts = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]].map((p) => view.toScreen(p));
      const l = Math.min(...pts.map((p) => p[0])), r = Math.max(...pts.map((p) => p[0]));
      const tp = Math.min(...pts.map((p) => p[1])), b = Math.max(...pts.map((p) => p[1]));
      const st = it.node.style;
      st.left = l + 'px'; st.top = tp + 'px'; st.width = Math.max(4, r - l) + 'px'; st.height = Math.max(4, b - tp) + 'px';
      if (it.field.type === 'text' || it.field.type === 'dropdown' || it.field.type === 'list') {
        const h = it.field.type === 'list' || it.field.multiline ? Math.min(b - tp, 16 * z) : b - tp;
        st.fontSize = Math.max(6, Math.min(h * 0.62, 14 * z)) + 'px';
      }
    }
  }

  /** Check boxes and radio buttons with no appearance of their own: pdf.js leaves them blank, so the tick or dot is drawn here. */
  function paint(ctx, page, S) {
    const s = api.sheet();
    const rec = page && s?.file.pages.includes(page) ? s.file : null;   // Scroll mode shows one file: the open sheet's
    if (!rec?.form) return;
    const dpr = view.dpr;
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (const field of rec.form.fields) for (const w of field.widgets) {
      if (w.page !== page.index || !drawnByUs(field, w)) continue;
      const v = valueOf(rec, field);
      const [x0, y0, x1, y1] = w.rect;
      const a = apply(S, [x0, y0]), c = apply(S, [x1, y1]);
      const l = Math.min(a[0], c[0]), tp = Math.min(a[1], c[1]), W = Math.abs(c[0] - a[0]), H = Math.abs(c[1] - a[1]);
      const lw = Math.max(1, Math.min(W, H) / 12);
      ctx.strokeStyle = view.colors.paperInk; ctx.fillStyle = view.colors.paperInk; ctx.lineWidth = lw;
      if (field.type === 'radio') {
        const rad = Math.min(W, H) / 2 - lw;
        ctx.globalAlpha = 0.5; ctx.beginPath(); ctx.arc(l + W / 2, tp + H / 2, Math.max(1, rad), 0, Math.PI * 2); ctx.stroke(); ctx.globalAlpha = 1;
        if (v != null && v === w.on) { ctx.beginPath(); ctx.arc(l + W / 2, tp + H / 2, Math.max(1, rad / 2), 0, Math.PI * 2); ctx.fill(); }
      } else {
        ctx.globalAlpha = 0.5; ctx.strokeRect(l + lw / 2, tp + lw / 2, W - lw, H - lw); ctx.globalAlpha = 1;
        if (v) {
          ctx.lineWidth = lw * 1.6; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
          ctx.beginPath(); ctx.moveTo(l + W * 0.2, tp + H * 0.48); ctx.lineTo(l + W * 0.42, tp + H * 0.74); ctx.lineTo(l + W * 0.8, tp + H * 0.22); ctx.stroke();
        }
      }
    }
    ctx.restore();
  }

  /** The field under a point of the open page (user space), or null. */
  function fieldAt(p) {
    const s = api.sheet();
    if (!s?.file.form) return null;
    for (const field of s.file.form.fields) for (const w of field.widgets) {
      const [x0, y0, x1, y1] = w.rect;
      if (w.page === s.page.index && p[0] >= x0 && p[0] <= x1 && p[1] >= y0 && p[1] <= y1) return { field, widget: w };
    }
    return null;
  }
  /** Fill form tool just turned on by a click on a field: that field's input gets the focus. */
  function focusAt(p) {
    const hit = fieldAt(p);
    if (!hit || !built) return false;
    const it = built.items.find((x) => x.widget === hit.widget);
    if (!it) return false;
    it.node.focus({ preventScroll: true });
    if (it.field.type === 'check' || it.field.type === 'radio') it.node.click();
    return true;
  }

  const countFor = (rec) => rec?.form?.fields.filter((f) => f.type !== 'button' && f.type !== 'signature').length || 0;
  /** Autosave: the values typed, as [[name, value]]; a recovered copy puts them back. */
  const stateFor = (rec) => [...(rec?.formEdits || [])];
  function restore(rec, list) {
    if (!rec?.form || !Array.isArray(list)) return;
    for (const pair of list.slice(0, 5000)) {
      if (!Array.isArray(pair)) continue;
      const field = rec.form.fields.find((f) => f.name === String(pair[0]));
      if (field) setValue(rec, field, pair[1]);
    }
    flush();
  }
  function forget() { layer.replaceChildren(); built = null; layer.hidden = true; }

  return { prepare, render, position, paint, countFor, fieldAt, focusAt, stateFor, restore, forget, flush };
}
