/* SPDX-License-Identifier: Apache-2.0 */
/**
 * compare-ui.js: markupcraft.js's 16 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountCompare(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { pageSegments, diffSegments, clusters } from './vecdiff.js';
import { t } from './i18n.js';
import { frame, el } from './ui-util.js';
import { alignment } from './compare.js';
import { matchSheets } from './slip.js';
import { makeMarkup } from './model.js';
import { hexRgb, mix } from './view.js';
import { inv, apply as applyT, similarity } from './geom.js';
import { describeChanges, changesText } from './changes.js';

export function mountCompare(ctx) {
  const { $, findAll, find, ui, store, view, files, cmp, sheetByKey, styleFor, status, askAuthor, sheetFacts, applyStrip, updateCursor, newMarkup, cancelOps, startCompare, refreshAll } = ctx;

  // ---- compare by vector paths (0.4 K12): the lines that differ, drawn over the new sheet; cloud them in one step ----
  const segCache = new Map();   // sheet key → segments (dropped with the file)
  async function segsOf(key) {
    if (segCache.has(key)) return segCache.get(key);
    const s = sheetByKey(key);
    const segs = pageSegments(await (await s.file.doc.getPage(s.page.index + 1)).getOperatorList(), ctx.libs.pdfjs.OPS);
    segCache.set(key, segs);
    return segs;
  }
  let vecToken = 0;
  async function vectorCompare() {
    const token = ++vecToken;
    ui.cmpStatus.textContent = t('compare.lines.busy');
    await frame();
    const [a, b] = await Promise.all([segsOf(cmp.oldKey), segsOf(cmp.newKey)]);
    if (token !== vecToken || !cmp.on) return;
    if (!a.length && !b.length) { cmp.vec = null; ui.cmpStatus.textContent = t('compare.lines.none'); view.invalidate(); return; }
    cmp.vec = diffSegments(a, b, { tol: 1.5, T: alignment(cmp), step: 2 });
    const len = (l) => Math.round(l.reduce((s, q) => s + Math.hypot(q[2] - q[0], q[3] - q[1]), 0));
    ui.cmpStatus.textContent = t('compare.lines.done', { removed: len(cmp.vec.removed), added: len(cmp.vec.added) });
    view.invalidate();
  }
  // ---- compare a whole set (0.4 K23): pair sheets by number, rank them by how much changed, cloud them all ----
  const setUi = { old: $('[data-set-old]'), neu: $('[data-set-new]'), status: $('[data-set-status]'), list: $('[data-set-results]'), cloud: $('[data-act="set-cloud"]') };
  let setResult = [];
  function renderSetSelects() {
    for (const [sel0, pick] of [[setUi.old, 0], [setUi.neu, files.length - 1]]) {
      if (!sel0) continue;
      const v = sel0.value;
      sel0.replaceChildren(...files.map((f, i) => el('option', { value: f.id, selected: v ? f.id === v : i === pick }, f.name)));
    }
  }
  async function compareSets() {
    const fo = files.find((f) => f.id === setUi.old.value), fn = files.find((f) => f.id === setUi.neu.value);
    if (!fo || !fn || fo === fn) { setUi.status.textContent = t('setcmp.need'); return; }
    const facts = (f) => ctx.sheets.filter((s) => s.file === f).map(sheetFacts);
    const pairs = matchSheets(facts(fo), facts(fn)).filter((p) => p.oldKey);
    if (!pairs.length) { setUi.status.textContent = t('setcmp.none'); return; }
    setResult = [];
    for (let i = 0; i < pairs.length; i++) {
      const p = pairs[i];
      setUi.status.textContent = t('setcmp.busy', { i: i + 1, n: pairs.length });
      await frame();
      const d = diffSegments(await segsOf(p.oldKey), await segsOf(p.newKey), { tol: 1.5, step: 2 });
      const len = [...d.removed, ...d.added].reduce((a, q) => a + Math.hypot(q[2] - q[0], q[3] - q[1]), 0);
      setResult.push({ ...p, d, len: Math.round(len) });
    }
    setResult.sort((a, b) => b.len - a.len);
    const changed = setResult.filter((r) => r.len >= 6);
    setUi.status.textContent = t('setcmp.done', { n: pairs.length, changed: changed.length });
    setUi.list.replaceChildren(...setResult.map((r) => el('li', {}, el('button', { type: 'button', onclick: () => openPair(r) },
      el('strong', {}, sheetByKey(r.newKey)?.page.title || ''), ' ', r.len >= 6 ? t('setcmp.row', { n: r.len }) : t('setcmp.same')))));
    setUi.cloud.hidden = !changed.length;
  }
  async function openPair(r) {
    ui.cmpOld.value = r.oldKey; ui.cmpNew.value = r.newKey;
    cmp.mode = 'lines';
    for (const x of findAll('[data-cmp-mode]')) x.checked = x.value === 'lines';
    await startCompare();
  }
  async function cloudSet() {
    const changed = setResult.filter((r) => r.len >= 6);
    if (!changed.length) return;
    const who = await askAuthor();
    let n = 0;
    store.change(t('undo.setcmp.cloud'), (tx) => { for (const r of changed) {
      const sh = sheetByKey(r.newKey);
      for (const b of clusters([...r.d.removed, ...r.d.added], { gap: 18, minLen: 6 })) {
        tx.add(makeMarkup({ sheet: r.newKey, type: 'cloudrect', rot: sh?.page.rotate || 0, rect: [b[0] - 8, b[1] - 8, b[2] + 8, b[3] + 8], author: who, style: styleFor('cloudrect'), comment: t('compare.cloud.comment', { old: sheetByKey(r.oldKey)?.page.title || '' }) }));
        n++;
      }
    } });
    setUi.status.textContent = t('setcmp.clouded', { n, sheets: t('find.sheets', { n: changed.length }) });
    status(setUi.status.textContent);
    refreshAll();
  }

  async function cloudChanges() {
    if (!cmp.on) return;
    if (!cmp.vec) await vectorCompare();
    if (!cmp.vec) return;
    const boxes = clusters([...cmp.vec.removed, ...cmp.vec.added], { gap: 18, minLen: 6 });
    if (!boxes.length) { status(t('compare.cloud.none')); return; }
    const who = await askAuthor();
    const made = store.change(t('undo.compare.cloud', { n: boxes.length }), (tx) => boxes.map((b) => tx.add(newMarkup('cloudrect', { rect: [b[0] - 8, b[1] - 8, b[2] + 8, b[3] + 8], author: who, comment: t('compare.cloud.comment', { old: sheetByKey(cmp.oldKey)?.page.title || '' }) }))));
    ctx.sel = new Set(made.map((m) => m.id));
    status(t('compare.cloud.done', { n: boxes.length }));
    refreshAll();
  }

  function applyCompare() {
    if (!cmp.on || !cmp.oldProxy) return;
    if (cmp.mode === 'lines') { view.setCompare(null); ui.legend.hidden = false; vectorCompare(); return; }
    cmp.vec = null;
    const colors = (v) => ({ bg: hexRgb(v.colors.sheet), same: hexRgb(mix(v.colors.ink, v.colors.sheet, 0.55)), old: hexRgb(v.colors.red), new: hexRgb(v.colors.blue) });
    view.setCompare({ oldProxy: cmp.oldProxy, T: alignment(cmp), balance: cmp.balance, colors });
  }
  function stopCompare() {
    if (!cmp.on) return;
    cmp.on = false; cmp.aligning = null;
    view.setCompare(null);
    applyStrip();
    ui.cmpTools.hidden = true;
    ui.legend.hidden = true;
    find('[data-act="compare"]').setAttribute('aria-pressed', 'false');
    find('[data-act="compare-stop"]').hidden = true;
    ui.cmpStatus.textContent = '';
    updateCursor();
  }

  function startAlign() {
    if (!cmp.on) { ui.cmpStatus.textContent = t('compare.align.need'); return; }
    cancelOps();
    cmp.aligning = { pts: [] };
    cmp.balance = 0;
    applyCompare();
    updateCursor();
    ui.cmpStatus.textContent = t('compare.align.1');
    status(t('compare.align.status'));
  }
  function alignClick(p) {
    const a = cmp.aligning;
    a.pts.push({ screenUser: p });
    const n = a.pts.length;
    if (n === 1) ui.cmpStatus.textContent = t('compare.align.2');
    if (n === 2) { cmp.balance = 1; applyCompare(); ui.cmpStatus.textContent = t('compare.align.3'); }
    if (n === 3) ui.cmpStatus.textContent = t('compare.align.4');
    if (n === 4) {
      // the old sheet was shown moved by T: undo that to get points in the old sheet's own space
      const T = alignment(cmp), Ti = inv(T);
      const o1 = applyT(Ti, a.pts[0].screenUser), o2 = applyT(Ti, a.pts[1].screenUser);
      const fit = similarity(o1, o2, a.pts[2].screenUser, a.pts[3].screenUser);
      cmp.aligning = null;
      cmp.balance = +ui.cmpBalance.value / 100;
      if (!fit) { ui.cmpStatus.textContent = t('compare.align.same'); applyCompare(); return; }
      cmp.fit = fit; cmp.dx = 0; cmp.dy = 0;
      const sc = Math.hypot(fit[0], fit[1]), ang = Math.atan2(fit[1], fit[0]) * 180 / Math.PI;
      ui.cmpStatus.textContent = t('compare.align.done', { scale: (sc * 100).toFixed(2), angle: ang.toFixed(2) });
      status(t('compare.aligned'));
      applyCompare();
      updateCursor();
    }
    view.invalidate();
  }

  async function changesBetween({ old: oldName = '', new: newName = '', sheet = '' } = {}) {
    if (files.length < 2) throw new Error('Open two plan sets (two PDF files) to compare them.');   // i18n-ignore (read by the assistant)
    const pick = (q, dflt) => (q ? files.find((f) => f.name.toLowerCase().includes(String(q).toLowerCase())) : dflt);
    const fo = pick(oldName, files[0]), fn = pick(newName, files[files.length - 1]);
    if (!fo || !fn || fo === fn) throw new Error('Name two different open files (the earlier and the later revision).');   // i18n-ignore (read by the assistant)
    const facts = (f) => ctx.sheets.filter((x) => x.file === f).map(sheetFacts);
    const paired = matchSheets(facts(fo), facts(fn));
    const words = async (key) => { const x = sheetByKey(key); if (!x) return []; const c = await (await x.file.doc.getPage(x.page.index + 1)).getTextContent(); return c.items.filter((i) => i.str && i.str.trim()).map((i) => ({ str: i.str, x: i.transform[4], y: i.transform[5] })); };
    const pairs = [];
    for (const p of paired) {
      const nw = sheetByKey(p.newKey), od = sheetByKey(p.oldKey);
      const ref = nw || od;
      if (sheet && !String(ctx.sheetLabel(ref) + ' ' + ref.page.title).toLowerCase().includes(String(sheet).toLowerCase())) continue;
      const cal = store.calibrations.get(p.newKey);
      const base = { sheetNo: ctx.sheetLabel(ref), title: ref.page.title, oldKey: p.oldKey, newKey: p.newKey, view: ref.page.view, mmPerPt: cal?.mmPerPt || 0 };
      if (!od) { pairs.push({ ...base, state: 'added' }); continue; }
      if (!nw) { pairs.push({ ...base, state: 'removed' }); continue; }
      pairs.push({ ...base, d: diffSegments(await segsOf(p.oldKey), await segsOf(p.newKey), { tol: 1.5, step: 2 }), oldText: await words(p.oldKey), newText: await words(p.newKey) });
    }
    const res = describeChanges(pairs, { markups: store.all() });
    return { old: fo.name, new: fn.name, ...res, text: changesText(res) };
  }

  return { segCache, segsOf, renderSetSelects, compareSets, cloudSet, cloudChanges, applyCompare, stopCompare, startAlign, alignClick, changesBetween };
}
