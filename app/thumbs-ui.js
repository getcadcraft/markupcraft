/* SPDX-License-Identifier: Apache-2.0 */
/**
 * thumbs-ui.js: markupcraft.js's 4 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountThumbs(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { View } from './view.js';

export function mountThumbs(ctx) {
  const { ST, ui, view, curSheet, sheetByKey } = ctx;

  // thumbnails: rendered when they scroll into view, one at a time
  const thumbQueue = [];
  ST.thumbBusy = false;
  const thumbObserver = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { thumbObserver.unobserve(en.target); thumbQueue.push(en.target); }
    pumpThumbs();
  }, { root: ui.sheets.closest('.mc-panel'), rootMargin: '200px' });
  async function pumpThumbs() {
    if (ST.thumbBusy) return;
    ST.thumbBusy = true;
    while (thumbQueue.length) {
      const c = thumbQueue.shift();
      const s = sheetByKey(c.dataset.key);
      if (!s || !c.isConnected) continue;
      try {
        const pg = await s.file.doc.getPage(s.page.index + 1);
        await View.thumb(pg, c, 112, 80, Math.min(2, window.devicePixelRatio || 1));
        view.themeize(c);
        c.classList.add('is-ready');
        if (s !== curSheet()) pg.cleanup();   // 0.10 PERF.35: the page's operator list and glyphs are let go; the open sheet keeps its own
      } catch { /* closed meanwhile */ }
    }
    ST.thumbBusy = false;
  }

  /** A sheet's thumbnail drawn again (a form value on it changed). */
  function redrawThumb(key) {
    const c = [...ui.sheets.querySelectorAll('canvas.mc-thumb')].find((x) => x.dataset.key === key);
    if (c) { thumbQueue.push(c); pumpThumbs(); }
  }

  return { thumbQueue, thumbObserver, pumpThumbs, redrawThumb };
}
