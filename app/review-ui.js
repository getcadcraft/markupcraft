/* SPDX-License-Identifier: Apache-2.0 */
/**
 * review-ui.js: Pages › Client review link… (0.10 BK.177). One dialog: the links this account has made (publish the set again to the same link, bring the
 * client's comments in as notes, turn a link off) and a new link (label, stage, how long, which sheets, a note). Makes nothing until a button is pressed;
 * nothing is mailed: the person copies the address and hands it over. Words: review.* in the language file.
 *
 * Where it works: Studio and the desktop apps (cadcraftDesktop.cloud.request carries the sign-in). A browser tab connects through /account/review-connect
 * (site-inbox-11, .env REVIEW_CONNECT, off = that page is a 404): it opens in a new tab and posts {type: 'cadcraft-review-token', token, expires_at} back to this one
 * (same origin only), kept in sessionStorage `cc-review-token`. Without a token it says so and sends nothing. The site side is .env REVIEW_LINKS (staff and lab testers can make links while it is off).
 */
import { ReviewClient, ReviewError, buildPack, planSheets, commentNotes, sha256Hex, desktopTransport, browserTransport, STAGES, CONNECT_AGAIN } from './review-link.js';
import { makeMarkup } from './model.js';

export function mountClientReview({ el, t, dialog, status, busy, files, curSheet, bake, pdfLib, extractPages, setName, store, getAuthor, win = globalThis.window, transport = null }) {
  const desktop = () => (win?.cadcraftDesktop?.cloud && typeof win.cadcraftDesktop.cloud.request === 'function' ? win.cadcraftDesktop.cloud : null);
  const readToken = () => { try { const j = JSON.parse(win?.sessionStorage?.getItem(KEY) || 'null'); return j && /^ccu_[A-Za-z0-9]{40}$/.test(j.token || '') && Date.parse(j.exp) > Date.now() ? j.token : null; } catch { return null; } };
  const KEY = 'cc-review-token', CONNECT_PATH = '/account/review-connect';
  // the connect tab posts {type, token, expires_at} to this one (same origin only)
  if (win?.addEventListener) {
    win.addEventListener('message', (ev) => {
      const d = ev.data;
      if (!win.location || ev.origin !== win.location.origin || !d || d.type !== 'cadcraft-review-token') return;
      if (typeof d.token !== 'string' || !/^ccu_[A-Za-z0-9]{40}$/.test(d.token) || !(Date.parse(d.expires_at) > Date.now())) return;
      try { win.sessionStorage.setItem(KEY, JSON.stringify({ token: d.token, exp: d.expires_at })); } catch { /* the tab keeps nothing */ }
      status(t('review.connected'));
    });
  }
  const client = () => {
    const tr = transport || (desktop() ? desktopTransport(desktop()) : readToken() ? browserTransport({ token: readToken() }) : null);
    return tr ? new ReviewClient(tr) : null;
  };
  const sayWhy = (e) => (e instanceof ReviewError
    ? (e.code === 'review_closed' ? t('review.err.closed') : CONNECT_AGAIN.has(e.code) ? t('review.err.connect') : t('review.err.other', { why: e.message || e.code }))
    : t('review.err.offline'));
  const when = (ms) => new Date(ms).toISOString().slice(0, 10);

  /** The sheets a new issue would show, as separate PDFs (marked up as they are now): 'sheet' = the open one, 'file' = every page of its file (the first 20). */
  async function sheetFiles(which) {
    const s = curSheet(); if (!s) return [];
    const lib = await pdfLib();
    const { bytes } = await bake(s.file, lib, {});
    const idx = which === 'sheet' ? [s.page.index] : s.file.pages.map((p) => p.index);
    const out = [];
    for (const i of idx) {
      const pg = s.file.pages[i];
      out.push({ name: (pg.sheetNo || pg.title || (s.file.name.replace(/\.pdf$/i, '') + ' ' + (i + 1))).replace(/[\\/:*?"<>|]+/g, '-') + '.pdf', rev: '', page: pg, bytes: await extractPages(lib, bytes, [i]) });
      if (out.length >= 60) break;   // planSheets keeps 20; this stops a 2,000-page set being cut up for nothing
    }
    return out;
  }
  async function pack(list, { note = '', stage = '' } = {}) {
    const plan = planSheets(list);
    const sh = [];
    for (const f of plan.keep) sh.push({ name: f.name, rev: f.rev, size: f.bytes.length, sha256: await sha256Hex(f.bytes), f });
    const date = new Date().toISOString().slice(0, 10);
    return { plan, sh, pack: buildPack({ code: '', date, name: setName(), purpose: stage ? t('review.stage.' + stage) : '', signedBy: getAuthor() || '', note, sheets: sh }) };
  }
  async function attach(c, linkId, sh) {
    let n = 0;
    for (const s of sh) { await c.putFile(linkId, s.sha256, s.f.bytes); n++; }
    return n;
  }
  /** Bring the client's comments in as notes on the sheets (one note per comment, never twice). */
  async function pull(c, link) {
    const { comments = [] } = await c.comments(link.id);
    const all = files().flatMap((f) => f.pages.map((pg) => ({ key: pg.key, name: (pg.sheetNo || pg.title).replace(/[\\/:*?"<>|]+/g, '-'), width: pg.width, height: pg.height })));
    const have = new Set(store.all().map((m) => m.id));
    const stacked = new Map();
    for (const m of store.all()) if (m.type === 'note') stacked.set(m.sheet, (stacked.get(m.sheet) || 0) + 1);
    const notes = commentNotes(comments, { sheets: all, have, subject: t('review.subject'), stacked });
    if (notes.length) store.change(t('review.undo'), (tx) => { for (const n of notes) tx.add(makeMarkup(n)); });
    status(notes.length ? t('review.pulled', { n: notes.length, total: comments.length }) : t('review.pulled.none', { total: comments.length }));
    return { added: notes.length, total: comments.length };
  }

  async function open() {
    const s = curSheet();
    if (!s) { status(t('need.pdf')); return; }
    const c = client();
    if (!c) {
      const r = await dialog({ title: t('review.title'), text: t('review.nologin'), buttons: [['connect', t('review.connect'), 'btn-plot'], ['cancel', t('dlg.ok')]] });
      if (r.key === 'connect' && win?.open) { win.open(CONNECT_PATH, '_blank'); status(t('review.connect.opened')); }
      return;
    }
    let links = [];
    try { links = (await c.links()).filter((l) => !l.revoked_at && l.expires_at > Date.now()); } catch (e) { await dialog({ title: t('review.title'), text: sayWhy(e), buttons: [['cancel', t('dlg.ok'), 'btn-plot']] }); return; }
    const label = el('input', { type: 'text', className: 'mc-input', id: 'mc-rv-label', maxlength: '120', value: setName() });
    const stage = el('select', { className: 'mc-select', id: 'mc-rv-stage' }, el('option', { value: '' }, t('review.stage.none')), ...STAGES.map((k) => el('option', { value: k }, t('review.stage.' + k))));
    const days = el('select', { className: 'mc-select', id: 'mc-rv-days' }, ...[7, 30, 90].map((d) => el('option', { value: String(d), selected: d === 30 }, t('review.days', { n: d }))));
    const which = el('select', { className: 'mc-select', id: 'mc-rv-which' }, el('option', { value: 'sheet' }, t('review.which.sheet')), el('option', { value: 'file', selected: true }, t('review.which.file', { name: s.file.name })));
    const note = el('textarea', { className: 'mc-input', id: 'mc-rv-note', rows: '3', maxlength: '2000' });
    const result = el('div', { className: 'mc-rv-result', role: 'status' });
    const rows = links.map((l) => el('li', { className: 'mc-rv-link', dataset: { link: l.id } },
      el('span', { className: 'mc-rv-name' }, (l.label || l.project) + (l.stage ? ' · ' + t('review.stage.' + l.stage) : '')),
      el('span', { className: 'mc-muted' }, t('review.link.meta', { date: when(l.expires_at), n: l.comments, sheets: l.sheets })),
      el('span', { className: 'mc-rv-btns' },
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { rvAct: 'publish' } }, t('review.publish')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { rvAct: 'pull' } }, t('review.pull')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { rvAct: 'revoke' } }, t('review.revoke')))));
    const run = async (fn) => { try { busy(t('review.working')); await fn(); } catch (e) { result.textContent = sayWhy(e); } finally { busy(''); } };
    const form = [
      el('p', { className: 'mc-note' }, t('review.text')),
      links.length ? el('div', {}, el('h3', { className: 'mc-h' }, t('review.links')), el('ul', { className: 'mc-rv-links' }, ...rows)) : null,
      el('h3', { className: 'mc-h' }, t('review.new')),
      el('div', { className: 'mc-props' },
        el('label', { className: 'mc-k', for: 'mc-rv-label' }, t('review.label')), label,
        el('label', { className: 'mc-k', for: 'mc-rv-stage' }, t('review.stage')), stage,
        el('label', { className: 'mc-k', for: 'mc-rv-days' }, t('review.days.label')), days,
        el('label', { className: 'mc-k', for: 'mc-rv-which' }, t('review.which')), which,
        el('label', { className: 'mc-k', for: 'mc-rv-note' }, t('review.note')), note),
      el('div', { className: 'mc-actions' }, el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { rvAct: 'create' } }, t('review.create'))),
      result,
    ];
    const dlgP = dialog({ title: t('review.title'), body: form, buttons: [['cancel', t('dlg.ok')]], wide: true });
    const dlgEl = () => document.querySelector('dialog.mc-dialog[open]');
    queueMicrotask(() => dlgEl()?.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-rv-act]'); if (!b) return;
      const act = b.dataset.rvAct, linkId = b.closest('[data-link]')?.dataset.link;
      if (act === 'create') run(async () => {
        const list = await sheetFiles(which.value);
        const { plan, sh, pack: p } = await pack(list, { note: note.value, stage: stage.value });
        if (!sh.length) { result.textContent = t('review.none', { n: plan.skipped.length }); return; }
        const r = await c.create({ project: setName(), label: label.value, stage: stage.value, days: +days.value, pack: p });
        const n = await attach(c, r.link.id, sh);
        result.replaceChildren(el('p', {}, t('review.made', { n, skipped: plan.skipped.length })), el('input', { type: 'text', className: 'mc-input', readonly: true, value: r.url, 'aria-label': t('review.url'), onfocus: (e) => e.target.select() }),
          el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: () => navigator.clipboard?.writeText(r.url).then(() => status(t('review.copied'))) }, t('review.copy')), el('p', { className: 'mc-note' }, t('review.once')));
        status(t('review.made', { n, skipped: plan.skipped.length }));
      });
      if (act === 'publish') run(async () => {
        const l = links.find((x) => x.id === linkId);
        const list = await sheetFiles(which.value);
        const { sh, pack: p, plan } = await pack(list, { note: note.value, stage: stage.value || l?.stage || '' });
        if (!sh.length) { result.textContent = t('review.none', { n: plan.skipped.length }); return; }
        await c.publish(linkId, { pack: p, ...(stage.value ? { stage: stage.value } : {}) });
        const n = await attach(c, linkId, sh);
        result.textContent = t('review.published', { n, skipped: plan.skipped.length });
      });
      if (act === 'pull') run(async () => { const r = await pull(c, { id: linkId }); result.textContent = t(r.added ? 'review.pulled' : 'review.pulled.none', { n: r.added, total: r.total }); });
      if (act === 'revoke') run(async () => { await c.revoke(linkId); b.closest('li')?.remove(); result.textContent = t('review.revoked'); });
    }));
    await dlgP;
  }
  return { open, pull, pack, sheetFiles };
}
