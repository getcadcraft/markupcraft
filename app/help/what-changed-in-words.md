---
title: List what changed between revisions
summary: Compare two plan sets and get a plain list, sheet by sheet, of where drawing and words changed, ready to read, copy or hand to your assistant.
section: tasks
order: 55
keywords: what changed, changes, revision list, compare list, plain list, narrate, assistant, delta, revision summary
---

The compare tools show the changes on the sheet. This one writes them down.

1. Open both revisions (see [Open a plan set](topic:open-a-plan-set)).
2. Open the {{ui:Compare}} tab, then {{ui:Compare a whole set}}.
3. Choose the earlier and the later file and choose {{ui:List the changes}}.

The list starts with a count ("2 of 14 matched sheets changed; 1 new; 1 dropped") and then covers each changed sheet, biggest change first: where on the sheet (upper left, centre…), how big, whether lines were added, removed or both, how many markups sit there, and which words appeared or disappeared. On a calibrated sheet the size is in real units as well as inches on the paper.

The list says what is on the page; it does not say what it means. A drawn line moving could be a wall or a leader. Your connected assistant can read the list with the `revisions_changes` tool and put it in words, and you can look at the sheet for the rest. {{ui:Copy the list}} puts it on the clipboard and {{ui:CSV}} writes one row per change.

Sheets are paired by sheet number, as in [Slip-sheet a revised set](topic:slip-sheet-a-revised-set). Changes smaller than a few points are ignored, and text that is part of a picture (a scan) has no words to compare.
