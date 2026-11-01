/* SPDX-License-Identifier: Apache-2.0 */
/**
 * forms.js — a PDF's fillable form (AcroForm) as MarkupCraft reads, shows and writes it (0.8, "fillable forms don't
 * appear / work"). No DOM: the Node test drives it; form-ui.js puts the fields on the sheet.
 *
 *   readForm(lib, ldoc) → { fields: [field], byWidget: Map(pdf.js annotation id → { field, widget }) } | null (no form)
 *     field  = { name, type: text|check|radio|dropdown|list|button|signature, value, readOnly, required, multiline, maxLen,
 *                comb, password, editable (a drop-down you may type in), multi, options: [string], widgets: [widget] }
 *     widget = { id ('12R', pdf.js's annotation id), page (0-based), rect [x0, y0, x1, y1] (PDF user space), hasAp, on (the
 *                option a radio button stands for; a check box's on-state name) }
 *     value  = text: string · check: boolean · radio: option string | null · dropdown, list: [string]
 *   storageValue(field, widget, value) → what pdf.js's annotationStorage wants for that widget ({ value })
 *   drawnByUs(field, widget) → true for a check box or radio button with no appearance of its own: pdf.js draws nothing for
 *     those (measured: blank in every annotation mode), so the page paints the tick or dot itself (form-ui.js paint)
 *   cleanValue(field, raw) → the value as the field takes it (max length, options that exist), or undefined when it can't
 *   fillForm(lib, bytes, edits Map(name → value), { flatten }) → { bytes, filled, failed: [name] } — the values written into
 *     the fields (what Acrobat and every other reader shows and keeps); `flatten` draws the form into the pages (print).
 *
 * Values are per field NAME, as pdf-lib reads them; a radio group's widgets match its options in order (pdf-lib's getOptions:
 * the /Opt list, else each widget's on-state name). PDF text is untrusted: it only ever reaches the page as input values.
 */

const MAX_FIELDS = 5000;
const MAX_TEXT = 100000;

/** pdf.js's id for an object reference: '12R', or '12R3' for a generation other than 0. */
export const refId = (ref) => (ref ? ref.objectNumber + 'R' + (ref.generationNumber ? ref.generationNumber : '') : '');

function typeOf(lib, f) {
  if (f instanceof lib.PDFTextField) return 'text';
  if (f instanceof lib.PDFCheckBox) return 'check';
  if (f instanceof lib.PDFRadioGroup) return 'radio';
  if (f instanceof lib.PDFDropdown) return 'dropdown';
  if (f instanceof lib.PDFOptionList) return 'list';
  if (f instanceof lib.PDFSignature) return 'signature';
  return 'button';
}
const safe = (fn, d) => { try { const v = fn(); return v === undefined ? d : v; } catch { return d; } };
/** A button field's /V as text ('' when it has none). */
const vName = (lib, f) => safe(() => { const v = f.acroField.dict.get(lib.PDFName.of('V')); return v instanceof lib.PDFName ? v.decodeText() : ''; }, '');

/**
 * Check boxes and radio buttons with no appearance get one (a box with a tick, a circle with a dot; no font needed), so
 * pdf-lib can set them and every reader draws them. A radio group with /Opt names its states by place ("0", "1", …).
 */
function giveButtonLooks(lib, doc, f) {
  const radio = f instanceof lib.PDFRadioGroup;
  const v = vName(lib, f);
  const ctx = doc.context;
  safe(() => f.acroField.getWidgets(), []).forEach((w, k) => {
    if (safe(() => w.getOnValue(), null)) return;
    const r = safe(() => w.getRectangle(), null);
    if (!r) return;
    const on = radio ? String(k) : v && v !== 'Off' ? v : 'Yes';
    const W = Math.max(1, r.width), H = Math.max(1, r.height), n = (x) => x.toFixed(2);
    const lw = Math.max(0.6, Math.min(W, H) / 14);
    let outline, mark;
    if (radio) {
      const cx = W / 2, cy = H / 2, c = 0.5523;
      const circle = (rad) => `${n(cx + rad)} ${n(cy)} m ${n(cx + rad)} ${n(cy + rad * c)} ${n(cx + rad * c)} ${n(cy + rad)} ${n(cx)} ${n(cy + rad)} c ${n(cx - rad * c)} ${n(cy + rad)} ${n(cx - rad)} ${n(cy + rad * c)} ${n(cx - rad)} ${n(cy)} c ${n(cx - rad)} ${n(cy - rad * c)} ${n(cx - rad * c)} ${n(cy - rad)} ${n(cx)} ${n(cy - rad)} c ${n(cx + rad * c)} ${n(cy - rad)} ${n(cx + rad)} ${n(cy - rad * c)} ${n(cx + rad)} ${n(cy)} c`;
      const rad = Math.min(W, H) / 2 - lw;
      outline = `0 G ${n(lw)} w ${circle(rad)} S`;
      mark = `0 g ${circle(rad * 0.5)} f`;
    } else {
      outline = `0 G ${n(lw)} w ${n(lw / 2)} ${n(lw / 2)} ${n(W - lw)} ${n(H - lw)} re S`;   // i18n-ignore (PDF operators)
      mark = `0 G ${n(lw * 1.6)} w 1 J 1 j ${n(W * 0.2)} ${n(H * 0.52)} m ${n(W * 0.42)} ${n(H * 0.26)} l ${n(W * 0.8)} ${n(H * 0.78)} l S`;
    }
    const look = (ops) => ctx.register(ctx.flateStream(ops, { Type: 'XObject', Subtype: 'Form', BBox: [0, 0, W, H] }));
    const N = ctx.obj({});
    N.set(lib.PDFName.of(on), look(outline + '\n' + mark));
    N.set(lib.PDFName.of('Off'), look(outline));
    const AP = ctx.obj({});
    AP.set(lib.PDFName.of('N'), N);
    w.dict.set(lib.PDFName.of('AP'), AP);
    const picked = radio ? v === on : !!v && v !== 'Off';
    w.setAppearanceState(lib.PDFName.of(picked ? on : 'Off'));
  });
}

export function readForm(lib, ldoc) {
  let form;
  try { form = ldoc.getForm(); } catch { return null; }
  const all = safe(() => form.getFields(), []);
  if (!all.length) return null;
  // widget reference → page index (a widget's /P is optional and sometimes wrong: the pages' /Annots decide)
  const pageOf = new Map();
  ldoc.getPages().forEach((p, i) => {
    const annots = safe(() => p.node.Annots(), null);
    if (annots) for (let k = 0; k < annots.size(); k++) { const r = annots.get(k); if (r instanceof lib.PDFRef) pageOf.set(refId(r), i); }
  });
  const fields = [], byWidget = new Map();
  for (const f of all.slice(0, MAX_FIELDS)) {
    const type = typeOf(lib, f);
    const field = {
      name: safe(() => f.getName(), ''), type, value: null,
      readOnly: safe(() => f.isReadOnly(), false), required: safe(() => f.isRequired(), false),
      multiline: false, maxLen: 0, comb: false, password: false, editable: false, multi: false, options: [], widgets: [],
    };
    if (!field.name) continue;
    if (type === 'text') {
      field.value = String(safe(() => f.getText(), '') ?? '').slice(0, MAX_TEXT);
      field.multiline = safe(() => f.isMultiline(), false);
      field.maxLen = safe(() => f.getMaxLength(), 0) || 0;
      field.comb = safe(() => f.isCombed(), false);
      field.password = safe(() => f.isPassword(), false);
    } else if (type === 'check') {
      // a box with no appearance has no on-state for pdf-lib to compare /V with: any /V but Off is ticked
      field.value = safe(() => f.isChecked(), false) || !['', 'Off'].includes(vName(lib, f));
    } else if (type === 'radio') {
      field.options = safe(() => f.getOptions(), []).map(String);
      field.value = safe(() => f.getSelected(), null) ?? null;
      // buttons with no appearance: /V names the option itself, or (with /Opt) its place in the list
      if (field.value != null && !field.options.includes(field.value)) field.value = /^\d+$/.test(field.value) ? field.options[+field.value] ?? null : null;
    }
    else if (type === 'dropdown' || type === 'list') {
      field.options = safe(() => f.getOptions(), []).map(String);
      field.value = safe(() => f.getSelected(), []).map(String);
      field.multi = safe(() => f.isMultiselect(), false);
      if (type === 'dropdown') field.editable = safe(() => f.isEditable(), false);
    }
    const widgets = safe(() => f.acroField.getWidgets(), []);
    widgets.forEach((w, k) => {
      const ref = safe(() => ldoc.context.getObjectRef(w.dict), null);
      const id = refId(ref);
      if (!id || !pageOf.has(id)) return;   // not on any page: nothing to show
      const r = safe(() => w.getRectangle(), null);
      if (!r) return;
      const ap = safe(() => w.getAppearances(), null);
      const onName = safe(() => w.getOnValue()?.decodeText?.() ?? w.getOnValue()?.asString?.()?.replace(/^\//, ''), null);
      const widget = {
        id, page: pageOf.get(id), rect: [r.x, r.y, r.x + r.width, r.y + r.height],
        hasAp: type === 'check' || type === 'radio' ? !!(ap?.normal && onName) : !!ap?.normal,
        on: type === 'radio' ? (field.options[k] ?? onName ?? String(k)) : onName,
      };
      field.widgets.push(widget);
      byWidget.set(id, { field, widget });
    });
    if (field.widgets.length) fields.push(field);
  }
  return fields.length ? { fields, byWidget } : null;
}

export function storageValue(field, widget, value) {
  switch (field.type) {
    case 'text': return { value: String(value ?? '') };
    case 'check': return { value: !!value };
    case 'radio': return { value: value != null && value === widget.on };
    case 'dropdown': case 'list': return { value: (value || []).slice() };
    default: return null;
  }
}

export const drawnByUs = (field, widget) => (field.type === 'check' || field.type === 'radio') && !widget.hasAp;

export function cleanValue(field, raw) {
  switch (field.type) {
    case 'text': {
      let s = String(raw ?? '').slice(0, MAX_TEXT);
      if (!field.multiline) s = s.replace(/[\r\n]+/g, ' ');
      if (field.maxLen > 0) s = [...s].slice(0, field.maxLen).join('');
      return s;
    }
    case 'check': return !!raw;
    case 'radio': return raw == null || raw === '' ? null : field.options.includes(String(raw)) ? String(raw) : undefined;
    case 'dropdown': case 'list': {
      const list = (Array.isArray(raw) ? raw : raw == null ? [] : [raw]).map(String);
      const ok = field.type === 'dropdown' && field.editable ? list : list.filter((v) => field.options.includes(v));
      return field.multi ? ok : ok.slice(0, 1);
    }
    default: return undefined;
  }
}

function setField(lib, f, value) {
  if (f instanceof lib.PDFTextField) {
    const max = f.getMaxLength?.();
    f.setText(max ? [...String(value ?? '')].slice(0, max).join('') : String(value ?? ''));
  } else if (f instanceof lib.PDFCheckBox) { if (value) f.check(); else f.uncheck(); }
  else if (f instanceof lib.PDFRadioGroup) { if (value == null) f.clear(); else f.select(String(value)); }
  else if (f instanceof lib.PDFDropdown) { const v = (value || []).map(String); if (!v.length) f.clear(); else f.select(f.isMultiselect() ? v : v[0], false); }
  else if (f instanceof lib.PDFOptionList) { const v = (value || []).map(String); if (!v.length) f.clear(); else f.select(f.isMultiselect() ? v : v[0], false); }
  else throw new Error('not a field that takes a value');   // i18n-ignore (caught: the field is listed as not filled)
}

const isButton = (lib, f) => f instanceof lib.PDFCheckBox || f instanceof lib.PDFRadioGroup;
/**
 * Give a text or choice field fresh appearances (pdf-lib, Helvetica). When it can't (a character Helvetica cannot write),
 * the old appearance goes, so no reader shows the old value: they draw the new one themselves (NeedAppearances).
 */
function freshLook(lib, f, font) {
  if (isButton(lib, f)) return true;   // pdf-lib switched their state; their looks are the file's (or giveButtonLooks')
  try { f.defaultUpdateAppearances(font); return true; } catch {
    for (const w of safe(() => f.acroField.getWidgets(), [])) w.dict.delete(lib.PDFName.of('AP'));
    return false;
  }
}

export async function fillForm(lib, bytes, edits, { flatten = false } = {}) {
  const doc = await lib.PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false });
  let form;
  try { form = doc.getForm(); } catch { return { bytes, filled: 0, failed: [] }; }
  const failed = [];
  let filled = 0, lookFailed = false, font = null;
  const getFont = async () => (font ||= await doc.embedFont(lib.StandardFonts.Helvetica));
  for (const [name, value] of edits || []) {
    const f = safe(() => form.getFieldMaybe(name), null);
    if (!f) { failed.push(name); continue; }
    try {
      if (isButton(lib, f)) giveButtonLooks(lib, doc, f);
      setField(lib, f, value);
      if (!freshLook(lib, f, await getFont())) lookFailed = true;
      filled++;
    } catch { failed.push(name); }
  }
  let flattened = false;
  if (flatten) {
    // every field needs an appearance to be drawn into the page: the ones that have none get one first
    for (const f of safe(() => form.getFields(), [])) {
      if (f instanceof lib.PDFSignature || f instanceof lib.PDFButton) continue;
      if (isButton(lib, f)) giveButtonLooks(lib, doc, f);
      else if (safe(() => f.acroField.getWidgets().some((w) => !w.getAppearances()?.normal), false)) freshLook(lib, f, await getFont());
    }
    try { form.flatten({ updateFieldAppearances: false }); flattened = true; } catch { flattened = false; }
  }
  // a value Helvetica could not draw: other readers draw it themselves
  if (lookFailed && !flattened) safe(() => form.acroForm.dict.set(lib.PDFName.of('NeedAppearances'), lib.PDFBool.True));
  if (!filled && !flattened) return { bytes, filled: 0, failed };
  return { bytes: await doc.save({ useObjectStreams: false, updateFieldAppearances: false }), filled, failed, flattened };
}
