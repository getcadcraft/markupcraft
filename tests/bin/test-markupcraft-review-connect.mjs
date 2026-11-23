#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * MarkupCraft's half of BK.177 (inbox-11b): review-ui.js listens for the review token the site's /account/review-connect page posts, keeps it in
 * sessionStorage `cc-review-token`, and offers a Connect button when the tab has no sign-in. DOM-free: a fake window and a fake dialog.
 *   node bin/test-markupcraft-review-connect.mjs
 */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { mountClientReview } = await import(pathToFileURL(path.join(ROOT, 'public_html/assets/apps/markupcraft/dev/review-ui.js')).href);
let pass = 0, fail = 0;
const ok = (c, m, d = '') => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (d !== '' ? ' (' + JSON.stringify(d) + ')' : '')); } };
const store = new Map(), handlers = [], opened = [], said = [];
const win = { location: { origin: 'https://getcadcraft.com' }, sessionStorage: { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) }, addEventListener: (t, f) => { if (t === 'message') handlers.push(f); }, open: (u, n) => opened.push([u, n]) };
const shown = [];
const dialog = async (o) => { shown.push(o); return { key: dialog.next || 'cancel', form: null }; };
const api = mountClientReview({ el: () => ({}), t: (k) => k, dialog, status: (m) => said.push(m), busy: () => {}, files: () => [], curSheet: () => ({ file: { name: 'a.pdf', pages: [] }, page: { index: 0 } }), bake: null, pdfLib: null, extractPages: null, setName: () => 'Set', store: { all: () => [] }, getAuthor: () => '', win });
const tok = 'ccu_' + 'a'.repeat(40), future = new Date(Date.now() + 864e5).toISOString();
const post = (data, origin = 'https://getcadcraft.com') => handlers.forEach((h) => h({ data, origin }));
ok(handlers.length === 1, 'one message listener');
post({ type: 'cadcraft-review-token', token: tok, expires_at: future }, 'https://evil.example');
ok(!store.has('cc-review-token'), 'another origin is ignored');
post({ type: 'cadcraft-review-token', token: 'nope', expires_at: future });
post({ type: 'cadcraft-review-token', token: tok, expires_at: new Date(Date.now() - 1000).toISOString() });
post({ type: 'something-else', token: tok, expires_at: future });
ok(!store.has('cc-review-token'), 'a bad token, an expired one and another message type are ignored');
dialog.next = 'connect';
await api.open();
ok(shown.length === 1 && shown[0].buttons.some((b) => b[0] === 'connect') && opened.length === 1 && opened[0][0] === '/account/review-connect', 'without a token: the dialog offers Connect and opens the connect page', opened);
dialog.next = 'cancel'; opened.length = 0;
await api.open();
ok(opened.length === 0, 'OK opens nothing');
post({ type: 'cadcraft-review-token', token: tok, expires_at: future });
const kept = JSON.parse(store.get('cc-review-token') || 'null');
ok(kept && kept.token === tok && kept.exp === future && said.includes('review.connected'), 'a good token from the same origin is kept as { token, exp } and said', kept);
console.log(`markupcraft review connect: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
