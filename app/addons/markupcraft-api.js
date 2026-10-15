/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — every word a person reads comes from the add-on (api.t) or the app's language file. */
/**
 * markupcraft-api.js — MarkupCraft's add-on API 1.0 and its own add-on loader (0.5 AO.6; docs/ADDONS-SPEC.md §5.5).
 * MarkupCraft's manifest says "addons": "own", so the shell's boot (app-addons.js) steps aside and markupcraft.js calls
 * startAddons() with the markup store and a few page helpers.
 *
 *   api = { ...sharedApi (ui.toolbarGroup, ui.panelSection, ui.settingsSection, files.importer / exporter),
 *           markups: { list, get, change, onChange, defineType, is, kindOf, dataOf, data: { get, set } },
 *           tools: { start }, columns: { add }, sheets: { current, list }, selection, select, refresh, status,
 *           ui.panelTab }
 *
 * Markup types of an add-on are a base type of MarkupCraft's (rect, cloud, polyline, stamp …) carrying the add-on's data in
 * the markup's `xd` under its id: { kind, v, data } (model.js cleanXd). MarkupCraft draws them as their base type, saves them
 * as that type's PDF annotation (every PDF viewer shows them) and keeps the data in the markup's private JSON — so a set
 * opened without the add-on shows plain markups and saves their data back untouched (the CadCraft custom-object rule).
 * Everything an add-on registers is taken away again when it is switched off.
 *
 * DOM-free except ui.panelTab: bin/test-markupcraft-addons.mjs runs it in Node.
 */

import { AddonLoader, sharedApi } from '../addons.js';
import { makeMarkup, geometryOk, TYPES, clone } from '../model.js';
import { installTrust, bundledOnly, NO_PACKAGES } from './trust.js';

export const MARKUPCRAFT_API_VERSION = '1.0';
const SAFE_ID = /^[a-z0-9][a-z0-9-]{0,40}$/;
const KIND_RE = /^[a-z][a-z0-9-]{0,40}$/;
const BASE_TYPES = Object.keys(TYPES).filter((k) => !['foreign', 'legend', 'space', 'image', 'count'].includes(k));

/** Add-on columns for the markups CSV and the summary (csv.js markupRows reads `value(m)`), in registration order. */
export const addonColumns = new Map();
export const columnsNow = () => [...addonColumns.values()];

/**
 * The API one add-on gets. ctx = { store, registry, types (Map "<addon>:<kind>" → spec), author(), currentSheet() →
 * {key, title} | null, sheets() → [{key, title}], selection() → [ids], select(ids), refresh(), status(text), setTool(type,
 * preset), find(selector) (the app's own lookup: it follows popped-out panels), tabTo(key) }.
 */
export function makeMarkupcraftApi(base, addon, ctx) {
  const shared = sharedApi(base, addon, ctx.registry);
  const id = addon.id;
  const track = (fn) => base.onDeactivate(fn);
  const xdOf = (m) => (m && m.xd && m.xd[id]) || null;
  const typeKey = (kind) => id + ':' + kind;

  /** Markup fields from an add-on: `kind` (one of its types) → the base type + its data; otherwise as makeMarkup takes them. */
  const fieldsFrom = (f) => {
    const out = { ...clone(f) };
    delete out.kind; delete out.data;
    if (f.kind !== undefined) {
      const spec = ctx.types.get(typeKey(f.kind));
      if (!spec) throw new Error('markups: type "' + f.kind + '" is not defined');
      out.type = spec.base;
      out.style = { ...(spec.style || {}), ...(f.style || {}) };
      if (out.subject === undefined && spec.subject) out.subject = spec.subject;
      out.xd = { ...(f.xd || {}), [id]: { kind: f.kind, v: spec.version, data: f.data ?? {} } };
    } else if (f.data !== undefined) out.xd = { ...(f.xd || {}), [id]: { kind: '', v: 1, data: f.data } };
    if (!out.sheet) out.sheet = ctx.currentSheet()?.key;
    if (!out.author) out.author = ctx.author() || '';
    if (!out.type || !TYPES[out.type] || out.type === 'foreign') throw new Error('markups: unknown type "' + out.type + '"');
    if (!out.sheet) throw new Error('markups: no sheet is open');
    return out;
  };

  const markups = {
    list: ({ sheet = null } = {}) => ctx.store.all().filter((m) => !sheet || m.sheet === sheet).map(clone),
    get: (mid) => clone(ctx.store.get(mid)),
    /** One undo step: tx.add(fields) → the markup, tx.update(id, patch) → the markup, tx.remove(id). Geometry is checked. */
    change(label, fn) {
      return ctx.store.change(String(label || addon.name), (tx) => fn({
        add: (f) => {
          const m = makeMarkup(fieldsFrom(f));
          if (!geometryOk(m)) throw new Error('markups.add: the ' + m.type + ' has no usable geometry');
          return clone(tx.add(m));
        },
        update: (mid, patch) => {
          const p = { ...clone(patch) };
          delete p.id; delete p.sheet; delete p.type; delete p.locked; delete p.src;
          const old = tx.get(mid);
          if (!old || old.locked) return null;
          return clone(tx.update(mid, p));
        },
        remove: (mid) => { const old = tx.get(mid); if (old && !old.locked) tx.remove(mid); },
        get: (mid) => clone(tx.get(mid)),
      }));
    },
    onChange(fn) {
      const off = ctx.store.on((kind, info) => { if (kind === 'change' || kind === 'undo' || kind === 'redo' || kind === 'load') { try { fn(kind, info); } catch (e) { base.log('onChange threw', e); } } });
      track(off);
      return off;
    },
    /** A markup type of this add-on: a base type of MarkupCraft's carrying the add-on's data. */
    defineType(kind, spec = {}) {
      if (!KIND_RE.test(kind)) throw new Error('markups.defineType: kind "' + kind + '"');
      if (!BASE_TYPES.includes(spec.base)) throw new Error('markups.defineType: base must be one of ' + BASE_TYPES.join(', '));
      if (ctx.types.has(typeKey(kind))) throw new Error('markups.defineType: "' + kind + '" is already defined');
      const s = { kind, addon: id, base: spec.base, name: String(spec.name || kind), version: Number.isInteger(spec.version) && spec.version > 0 ? spec.version : 1,
        style: spec.style && typeof spec.style === 'object' ? { ...spec.style } : {}, subject: spec.subject ? String(spec.subject) : '', text: spec.text ? String(spec.text) : '', label: spec.label ? String(spec.label) : '' };
      ctx.types.set(typeKey(kind), s);
      track(() => ctx.types.delete(typeKey(kind)));
      return () => ctx.types.delete(typeKey(kind));
    },
    is: (m, kind = null) => { const x = xdOf(m); return !!x && x.kind !== '' && ctx.types.has(typeKey(x.kind)) && (!kind || x.kind === kind); },
    kindOf: (m) => { const x = xdOf(m); return x && x.kind ? x.kind : null; },
    dataOf: (m) => { const x = xdOf(m); return x ? clone(x.data) : null; },
    data: {
      get: (m) => { const x = xdOf(m); return x ? clone(x.data) : null; },
      /** → the patch to pass to tx.update(m.id, patch) (keeps the kind and other add-ons' data). */
      set: (m, value) => { const x = xdOf(m); return { xd: { ...(m.xd || {}), [id]: { kind: x ? x.kind : '', v: x ? x.v : 1, data: clone(value) } } }; },
    },
  };

  const tools = {
    /** Draw one of this add-on's types with MarkupCraft's own tool for its base type (click a toolbar button → this). */
    start(kind, data = {}) {
      const s = ctx.types.get(typeKey(kind));
      if (!s) throw new Error('tools.start: type "' + kind + '" is not defined');
      return ctx.setTool(s.base, { type: s.base, style: s.style, subject: s.subject || undefined, text: s.text || undefined, label: s.label || undefined,
        xd: { [id]: { kind, v: s.version, data: clone(data) } } });
    },
  };

  const columns = {
    /** A column in the markups CSV and the summary workbook: value(m) → text or number. */
    add({ id: cid, label, value } = {}) {
      if (!SAFE_ID.test(String(cid))) throw new Error('columns.add: id');
      if (typeof value !== 'function') throw new Error('columns.add: value(m)');
      const key = id + ':' + cid;
      addonColumns.set(key, { key, name: String(label || cid), value: (m) => value(clone(m)) });
      track(() => addonColumns.delete(key));
      return () => addonColumns.delete(key);
    },
  };

  const ui = {
    ...shared.ui,
    /** A tab of its own in the right panel. render(el) runs each time the tab is shown. */
    panelTab({ id: tid, title, render } = {}) {
      if (!SAFE_ID.test(String(tid))) throw new Error('ui.panelTab: id');
      if (!ctx.find || typeof document === 'undefined') return null;
      const list = ctx.find('.mc-right [role="tablist"]');
      if (!list) return null;
      const key = 'addon-' + (id + '-' + tid).replace(/[^a-z0-9-]/g, '-');
      const btn = document.createElement('button');
      Object.assign(btn, { type: 'button', className: 'mc-tab', id: 'mc-tab-' + key, textContent: String(title || tid), tabIndex: -1 });
      btn.setAttribute('role', 'tab'); btn.setAttribute('aria-controls', 'mc-pane-' + key); btn.setAttribute('aria-selected', 'false');
      btn.dataset.tab = key; btn.dataset.addon = id;
      const pane = document.createElement('section');
      Object.assign(pane, { className: 'mc-pane', id: 'mc-pane-' + key, hidden: true });
      pane.setAttribute('role', 'tabpanel'); pane.setAttribute('aria-labelledby', btn.id);
      pane.dataset.pane = key; pane.dataset.addon = id;
      pane.addEventListener('cc-tab-shown', () => { try { pane.replaceChildren(); render?.(pane); } catch (e) { base.log('panelTab render threw', e); } });
      list.append(btn);
      list.parentElement.append(pane);
      track(() => { if (btn.getAttribute('aria-selected') === 'true') ctx.tabTo?.('props'); btn.remove(); pane.remove(); });
      return pane;
    },
  };

  return {
    ...shared, ui, markups, tools, columns,
    sheets: { current: () => clone(ctx.currentSheet()), list: () => clone(ctx.sheets()) },
    selection: () => [...ctx.selection()],
    select: (ids) => ctx.select([...ids]),
    refresh: () => ctx.refresh(),
    status: (text) => ctx.status(String(text)),
  };
}

/**
 * Start MarkupCraft's add-ons. ctx: see makeMarkupcraftApi, plus loader options for tests (packages, storage, importer,
 * fetchJson, base, verify, bundledOnly). → { loader, list, installPackage, uninstall, importers, exporters, importerFor,
 * onChange, types, columns } (also window.ccAddons in the page, the shape the shell gives the other apps).
 */
export async function startAddons(ctx) {
  const registry = {
    importers: new Map(), exporters: new Map(), listeners: new Set(),
    changed() { for (const fn of this.listeners) { try { fn(); } catch { /* app */ } } },
  };
  const types = new Map();
  const full = { ...ctx, registry, types };
  const opts = { app: 'markupcraft', appName: ctx.appName || 'MarkupCraft', apiVersion: MARKUPCRAFT_API_VERSION, makeApi: (b, a) => makeMarkupcraftApi(b, a, full) };
  for (const k of ['packages', 'storage', 'importer', 'fetchJson', 'base', 'locale', 'timeout']) if (ctx[k] !== undefined) opts[k] = ctx[k];
  if (ctx.bundledOnly ?? bundledOnly()) opts.packages = NO_PACKAGES;   // a store build: only the add-ons it ships with (A.11)
  if (!ctx.verify) installTrust(AddonLoader); else AddonLoader.verify = ctx.verify;
  const loader = new AddonLoader(opts);
  const api = {
    loader, types,
    list: () => loader.list(),
    installPackage: (p) => loader.installPackage(p),
    uninstall: (id) => loader.uninstall(id),
    importers: () => [...registry.importers.values()],
    exporters: () => [...registry.exporters.values()],
    importerFor: (name) => { const n = String(name || '').toLowerCase(); return [...registry.importers.values()].find((e) => e.extensions.some((x) => n.endsWith(x))) || null; },
    onChange: (fn) => { registry.listeners.add(fn); const off = loader.on(fn); return () => { registry.listeners.delete(fn); off(); }; },
    columns: columnsNow,
    typeOf: (m) => { for (const [aid, x] of Object.entries(m?.xd || {})) { const s = x.kind && types.get(aid + ':' + x.kind); if (s) return s; } return null; },
  };
  if (typeof window !== 'undefined' && !ctx.noGlobal) window.ccAddons = api;
  await loader.start();
  return api;
}
