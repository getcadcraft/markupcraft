---
title: Sheet links
summary: Make a markup jump to another sheet, and turn every sheet callout like 3/A-501 into a link in one pass.
section: tasks
order: 117
keywords: hyperlink, link, links, jump, sheet callout, detail callout, section callout, 3/A-501, go to sheet, back, auto link, batch link
---

A sheet link takes you from a markup to another sheet of the set: from a detail bubble to the detail, from a note to the sheet it refers to.

## Link a markup to a sheet

1. Select the markup.
2. In {{ui:Properties}}, pick the sheet under {{ui:Link to sheet}}.

A small arrow appears at the markup's top right. To follow it, hold {{key:Mod}} and click the markup, or select it and choose {{ui:Go to …}} in {{ui:Properties}}. {{key:Alt+Left}} goes back to the sheet you came from.

A link names the sheet by its number, so it still works after you reopen the set or slip-sheet a new issue: it opens the newest sheet with that number. If that sheet is not open, the status bar says so.

## Link every sheet callout at once

1. Open {{ui:Find text}} at the top of the {{ui:Sheets}} panel and choose {{ui:Link sheet callouts…}}.
2. MarkupCraft reads the text of every sheet and lists each callout that names another open sheet, such as "3/A-501", "A-501" or "2 / A501". Callouts already linked, and a sheet's own number in its title block, are left out.
3. Untick any you do not want, then choose {{ui:Create the links}}.

Each callout gets a thin blue box that is a sheet link. One {{key:Mod+Z}} removes them all.

Sheets need numbers for this: from their title block, their page label, or {{ui:Rename sheet}}. Scanned sheets have no text to read; link their callouts one by one.

## In the saved PDF

A link to a sheet in the same PDF is also written as a PDF link, so other viewers jump there on a click too. Links to a sheet in another file of the set work in MarkupCraft only.
