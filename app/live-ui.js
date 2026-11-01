/* SPDX-License-Identifier: Apache-2.0 */
/**
 * live-ui.js — what a reviewer sees of the others in a MarkupCraft Live session (0.8 SU.910, session live-08).
 * Spec docs/STUDIO-LIVE-SPEC.md § 5 (presence) and § 4 (the adapter). The adapter (live.js) stays DOM-free; this file
 * holds the screen side:
 *
 *   attachUi(app, adapter, client) → detach()   cursors with names on the sheet you are looking at, the markups others have
 *                                               selected, a strip of the reviewers (click one to go to their sheet), and the
 *                                               reviewer colour beside each author in the markup list
 *   personColour(c), reviewerRows(...), authorColour(...)   pure helpers, tested in Node (tools/live-apps-test/test-markup-review.mjs)
 *
 * Presence is `{ sh: sheet key, cur: [x, y] in page units | null, sel: [markup ids] }`, sent while something changes (the
 * client throttles it). Nothing here is saved: not in the PDF, not in the markup list's data, not in storage.
 * Names come from other people: they reach the page as text only and are cut to NAME_MAX.
 */

import { t } from './i18n.js';
import { el } from './ui-util.js';

export const PEOPLE = ['#c8102e', '#1f6fd1', '#d9640a', '#b5179e', '#9a7b00', '#1d8a4b', '#6a3fd6', '#008c9e'];
export const personColour = (c) => PEOPLE[((((c || 1) - 1) % PEOPLE.length) + PEOPLE.length) % PEOPLE.length];
const NAME_MAX = 24, SEL_MAX = 200;
const short = (s) => { s = String(s ?? '').replace(/[\u0000-\u001f\u007f\u2028\u2029\u202a-\u202e\u2066-\u2069]/g, ' ').trim(); return s.length > NAME_MAX ? s.slice(0, NAME_MAX - 1) + '\u2026' : s; };
const num = (v) => typeof v === 'number' && Number.isFinite(v);

/** The reviewers other than you: [{ c, name, colour, sheet, here, role }], in the order they joined. */
export function reviewerRows(client, presence, mySheet) {
  const rows = [];
  for (const p of client.peers.values()) {
    if (p.c === client.c || p.state === 'gone' || p.state === 'removed') continue;
    const sheet = (presence.get(p.c) && typeof presence.get(p.c).sh === 'string') ? presence.get(p.c).sh : '';
    rows.push({ c: p.c, name: short(p.name) || t('live.someone'), colour: personColour(p.c), sheet, here: !!sheet && sheet === mySheet, role: p.role || '' });
  }
  return rows.sort((a, b) => a.c - b.c);
}

/** The colour of the reviewer who goes by this author name (yours included), or null when nobody in the session does. */
export function authorColour(client, name) {
  const n = short(name);
  if (!n) return null;
  if (client.c && short(client.o && client.o.name) === n) return personColour(client.c);
  for (const p of client.peers.values()) if (p.state !== 'gone' && p.state !== 'removed' && short(p.name) === n) return personColour(p.c);
  return null;
}

export function attachUi(app, adapter, client) {
  const { view, store } = app;
  const offs = [];
  let others = new Map(), sent = '', strip = null;

  // ---- what you send --------------------------------------------------------------------------------------------------
  function mine() {
    const sheet = app.sheets[app.cur];
    const pt = app.pointer && view.page ? view.toUser(app.pointer[0], app.pointer[1]) : null;
    return {
      sh: sheet ? sheet.page.key : '',
      cur: pt && num(pt[0]) && num(pt[1]) ? [Math.round(pt[0] * 10) / 10, Math.round(pt[1] * 10) / 10] : null,
      sel: [...app.sel].slice(0, SEL_MAX),
    };
  }
  function push() {
    const p = mine(), k = JSON.stringify(p);
    if (k === sent) return;
    sent = k;
    client.setPresence(p);
  }
  let seenSheet = '';
  const timer = setInterval(() => { push(); const k = app.sheets[app.cur] ? app.sheets[app.cur].page.key : ''; if (k !== seenSheet) { seenSheet = k; renderStrip(); } }, 33);
  offs.push(() => clearInterval(timer));

  // ---- what you see ----------------------------------------------------------------------------------------------------
  adapter.drawPresence = (peers) => { others = new Map(peers); view.invalidate(); renderStrip(); };
  offs.push(() => { adapter.drawPresence = null; });

  const prevOver = view.onOver;
  view.onOver = (ctx, ...rest) => {
    if (prevOver) prevOver(ctx, ...rest);
    try { drawOthers(ctx); } catch (e) { console.error(e); }   // i18n-ignore
  };
  offs.push(() => { view.onOver = prevOver; view.invalidate(); });

  function drawOthers(ctx) {
    const key = app.sheets[app.cur] ? app.sheets[app.cur].page.key : '';
    if (!key) return;
    ctx.save();
    for (const [c, p] of others) {
      if (c === client.c || !p || p.sh !== key) continue;
      const peer = client.peers.get(c);
      if (peer && (peer.state === 'gone' || peer.state === 'removed')) continue;
      const colour = personColour(c), name = short(peer && peer.name) || t('live.someone');
      // the markups they have picked: a dashed box in their colour
      if (Array.isArray(p.sel)) {
        ctx.strokeStyle = colour; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
        for (const id of p.sel.slice(0, SEL_MAX)) {
          const m = store.get(id);
          if (!m || m.sheet !== key) continue;
          const b = app.boundsOfId(id);
          if (!b) continue;
          const a = view.toScreen([b[0], b[1]]), d = view.toScreen([b[2], b[3]]);
          ctx.strokeRect(Math.min(a[0], d[0]) - 4, Math.min(a[1], d[1]) - 4, Math.abs(d[0] - a[0]) + 8, Math.abs(d[1] - a[1]) + 8);
        }
        ctx.setLineDash([]);
      }
      // their pointer: an arrow with the name beside it
      if (Array.isArray(p.cur) && num(p.cur[0]) && num(p.cur[1])) {
        const [x, y] = view.toScreen(p.cur);
        ctx.fillStyle = colour;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 11, y + 4); ctx.lineTo(x + 4, y + 11); ctx.closePath(); ctx.fill();
        ctx.font = '600 11px system-ui, sans-serif';
        const w = ctx.measureText(name).width + 10;
        ctx.fillRect(x + 10, y + 10, w, 16);
        ctx.fillStyle = '#fff'; ctx.fillText(name, x + 15, y + 22);
      }
    }
    ctx.restore();
  }

  // ---- the strip of reviewers -------------------------------------------------------------------------------------------
  function renderStrip() {
    if (!strip) return;
    const here = app.sheets[app.cur] ? app.sheets[app.cur].page.key : '';
    const rows = reviewerRows(client, others, here);
    const sig = JSON.stringify(rows.map((r) => [r.c, r.name, r.sheet, r.role]));
    if (strip.dataset.sig === sig) return;
    strip.dataset.sig = sig;
    strip.hidden = !rows.length;
    strip.replaceChildren(...rows.map((r) => {
      const idx = app.sheets.findIndex((s) => s.page.key === r.sheet);
      const where = r.here ? t('live.people.here') : idx >= 0 ? t('live.people.on', { sheet: short(app.sheets[idx].page.title) }) : '';
      return el('button', {
        type: 'button', className: 'mc-live-person', title: where ? r.name + ', ' + where : r.name, disabled: idx < 0 || r.here,
        onclick: () => { if (idx >= 0) app.goTo(idx); },
      }, el('i', { className: 'mc-live-dot', style: 'background:' + r.colour, 'aria-hidden': 'true' }), el('span', { className: 'mc-live-name' }, r.name),
      where ? el('span', { className: 'mc-live-where' }, where) : null);
    }));
  }
  if (app.stage) {
    strip = el('div', { className: 'mc-live-people', role: 'group', 'aria-label': t('live.people.label'), hidden: true });
    app.stage.append(strip);
    offs.push(() => strip.remove());
  }
  // someone joins or leaves, or you change sheets: the strip and the list's colours follow
  const offPeer = client.on('peer', () => { renderStrip(); app.refreshList?.(); });
  if (typeof offPeer === 'function') offs.push(offPeer);

  app.authorColour = (name) => authorColour(client, name);
  offs.push(() => { app.authorColour = null; app.refreshList?.(); });
  renderStrip();
  app.refreshList?.();

  return () => { for (const f of offs.reverse()) { try { f(); } catch { /* already gone */ } } };
}
