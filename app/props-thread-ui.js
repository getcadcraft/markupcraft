/* SPDX-License-Identifier: Apache-2.0 */
/**
 * props-thread-ui.js: markupcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountPropsThread(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, dateTime } from './ui-util.js';
import { t } from './i18n.js';
import { cleanReply } from './model.js';

export function mountPropsThread(ctx) {
  const { ST, ui, store, status, askAuthor, pictureFrom, showPhoto, fid, refreshAll } = ctx;

  const replyDrafts = new Map();
  /** The comment thread: replies with author and date, status changes logged; a box to reply. */
  function threadSection(m) {
    const sec = el('section', { className: 'mc-thread-sec', 'aria-label': t('thread.label') });
    const n = m.replies.length;
    sec.append(el('p', { className: 'mc-props-sub' }, n ? t('thread.h.count', { n }) : t('thread.label')));
    if (n) {
      const ol = el('ol', { className: 'mc-thread' });
      for (const r of m.replies) {
        ol.append(el('li', { className: r.kind === 'status' ? 'is-status' : '' },
          el('span', { className: 'mc-thread-meta' }, t('thread.meta', { author: r.author || t('thread.unknown'), date: dateTime(r.date) })),
          r.text ? el('span', { className: 'mc-thread-text' }, r.text) : null,
          r.photo ? el('button', { type: 'button', className: 'mc-thread-photo', title: t('photo.open'), onclick: () => showPhoto(r) }, el('img', { src: r.photo, alt: r.text || t('photo.alt', { author: r.author || t('thread.unknown') }) })) : null));
      }
      sec.append(ol);
    } else sec.append(el('p', { className: 'mc-muted' }, t('thread.none')));
    const id = fid();
    // a reply being typed survives the panel redrawing (any edit redraws it)
    const ta = el('textarea', { id, className: 'mc-input', rows: '2', maxlength: '4000', placeholder: t('thread.placeholder'), value: replyDrafts.get(m.id) || '' });
    ta.addEventListener('input', () => { if (ta.value) replyDrafts.set(m.id, ta.value); else replyDrafts.delete(m.id); });
    const send = async () => {
      const text = ta.value.trim();
      if (!text) { ta.focus(); return; }
      if (!ST.author) await askAuthor();
      const r = cleanReply({ author: ST.author, text, kind: 'comment' });
      const cur1 = store.get(m.id);
      if (!cur1) return;
      replyDrafts.delete(m.id);
      store.change(t('undo.reply'), (tx) => tx.update(m.id, { replies: [...cur1.replies, r] }, { touch: false }));
      status(ST.author ? t('thread.added.as', { author: ST.author }) : t('thread.added'));
      refreshAll();
    };
    ta.addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(); } });
    // a photo on the thread (0.4 K20): the reply's text, if any, is its caption
    const addPhoto = async () => {
      const f = await new Promise((done) => { ST.picPick = done; ui.photoFile.click(); });
      if (!f) return;
      status(t('image.loading'));
      const src = /^image\/(png|jpeg)$/.test(f.type) || /\.(png|jpe?g)$/i.test(f.name) ? await pictureFrom(f) : '';
      if (!src) { status(t('image.bad', { file: f.name })); return; }
      if (!ST.author) await askAuthor();
      const cur1 = store.get(m.id);
      if (!cur1) return;
      const r = cleanReply({ author: ST.author, text: ta.value.trim(), kind: 'comment', photo: src });
      replyDrafts.delete(m.id);
      store.change(t('undo.photo'), (tx) => tx.update(m.id, { replies: [...cur1.replies, r] }, { touch: false }));
      status(t('photo.added'));
      refreshAll();
    };
    sec.append(el('label', { for: id, className: 'visually-hidden' }, t('thread.reply')), ta,
      el('div', { className: 'mc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: send, dataset: { reply: '' } }, t('thread.reply')),
        el('button', { type: 'button', className: 'btn-line btn-sm-cc', onclick: addPhoto, dataset: { photo: '' }, title: t('photo.add.title') }, el('i', { className: 'bi bi-camera', 'aria-hidden': 'true' }), ' ', t('photo.add'))));
    return sec;
  }

  return { threadSection };
}
