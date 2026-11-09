---
title: Sheet links
summary: Make a markup jump to another sheet, and link every sheet callout like 3/A-501 to its sheet and view in one pass with Batch links.
section: tasks
order: 117
keywords: hyperlink, link, links, jump, sheet callout, detail callout, section callout, 3/A-501, go to sheet, back, auto link, batch link, batch links, title block, sheet number, sheet name, view, detail, rename, renumber, addendum, pdf link
---

A sheet link takes you from a markup to another sheet of the set: from a detail bubble to the detail, from a note to the sheet it refers to.

## Link a markup to a sheet

1. Select the markup.
2. In {{ui:Properties}}, pick the sheet under {{ui:Link to sheet}}.

A small arrow appears at the markup's top right. To follow it, hold {{key:Mod}} and click the markup, or select it and choose {{ui:Go to …}} in {{ui:Properties}}. {{key:Alt+Left}} goes back to the sheet you came from.

A link names the sheet by its number, so it still works after you reopen the set or slip-sheet a new issue: it opens the newest sheet with that number. If that sheet is not open, the status bar says so.

## Link every sheet callout at once

Choose {{ui:Pages}} › {{ui:Batch links…}}, or {{ui:Link sheet callouts…}} under {{ui:Find text}} at the top of the {{ui:Sheets}} panel.

1. **Check the sheet numbers.** MarkupCraft lists every open sheet with the number and name it read from the sheet's title block (or its page label), and where each came from. Fix any that are wrong, and type a number where it found none (a title block whose number was plotted as lines has no text to read). Then choose {{ui:Find callouts}}. Your fixes are one undo step, and they become the page labels in the saved PDF.
2. **Review the list.** MarkupCraft reads the text of every sheet for callouts such as "3/A-501", "5 / A501", "DETAIL 2 ON A-501", a bubble with "3" over "A-501", or a plain "A-501" in a note, and reads each sheet's view titles (a detail number with the sheet number under it, or a large number with a title beside it). The list has three parts:
   - {{ui:Will link}}: each callout, the sheet it goes to and the view on that sheet. Untick any you do not want. If the view was not found (a callout to view 7 on a sheet with views 1 to 6), pick the view from the list beside it, or leave {{ui:Whole sheet}}.
   - {{ui:Not linked}}: sheet numbers that no open sheet has, with how many callouts name each. Pick the sheet each one means (for example a sheet that was renumbered), and every callout to that number links to it. Or leave it unlinked.
   - How many callouts are already linked and still go to the right place. They are left as they are.
3. Choose {{ui:Create the links}}.

Each callout gets a thin blue box that is a sheet link. {{key:Mod}}+click on it opens the sheet zoomed to the view. One {{key:Mod+Z}} removes them all.

Codes that only look like sheet numbers, such as R-19 or W12X26, are left out: a callout must be shaped like the set's own sheet numbers. A sheet's own number, in its title block and its view titles, is never a callout. Scanned sheets have no text to read: use {{ui:Read text (OCR)…}} first, or link their callouts one by one.

## Run it again when the set changes

Batch links can be run as often as you like:

- **A sheet was added**, such as an addendum with A-601: open its file and run Batch links again. Callouts to A-601 that did not link before now link.
- **A sheet was renumbered**: fix its number in step 1. Links made by Batch links that no longer find their sheet are listed under {{ui:Not linked}}; pick the sheet once and they all follow it. Links that moved to another view are updated.
- Links you made by hand in {{ui:Properties}} are never changed.

## In the saved PDF

A link to a sheet in the same PDF is also written as a PDF link, so other viewers jump there on a click too. A link with a view opens that view in the other viewer (the PDF "fit rectangle" jump); one without a view opens the whole sheet. Links to a sheet in another file of the set work in MarkupCraft only.
