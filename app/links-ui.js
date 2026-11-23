/* SPDX-License-Identifier: Apache-2.0 */
/**
 * links-ui.js: markupcraft.js's 3 bindings for this topic, moved out of init() unchanged (0.11 PERF.71 round two, perf-finish-11 r2; no behaviour change). ST is init()'s state object (tools/perf/main-state.mjs).
 * mountLinks(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { linkTarget } from './link.js';
import { t } from './i18n.js';

export function mountLinks(ctx) {
  const { ST, view, curKey, status, sheetList } = ctx;

  const backStack = [];   // sheets left by following a link (Alt+← goes back)
  async function followLink(m) {
    const target = linkTarget(m.link, sheetList());
    if (!target) { status(t('link.missing', { sheet: m.link })); return; }
    const from = curKey();
    const i = ST.sheets.findIndex((s) => s.page.key === target.key);
    if (i === ST.cur) { if (m.linkView?.box) { view.zoomTo(m.linkView.box, 0.9); status(t('link.went.view', { sheet: target.title, id: m.linkView.id || '' })); } else status(t('link.here', { sheet: target.title })); return; }
    backStack.push(from); if (backStack.length > 50) backStack.shift();
    await ctx.goTo(i);
    // a batch link knows the view on that sheet (0.9 SU.1085): zoom to it
    const vb = m.linkView?.box;
    if (vb) { view.zoomTo(vb, 0.9); status(t('link.went.view', { sheet: target.title, id: m.linkView.id || '' })); return; }
    status(t('link.went', { sheet: target.title }));
  }
  async function goBack() {
    const k = backStack.pop();
    const i = ST.sheets.findIndex((s) => s.page.key === k);
    if (i >= 0) { await ctx.goTo(i); status(t('link.back', { sheet: ST.sheets[i].page.title })); } else status(t('link.back.none'));
  }

  return { backStack, followLink, goBack };
}
