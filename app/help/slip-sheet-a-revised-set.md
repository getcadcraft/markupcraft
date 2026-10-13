---
title: Slip-sheet a revised set
summary: Open the new issue of a plan set beside the old one and carry every open markup onto the sheet with the same number.
section: tasks
order: 112
keywords: slip sheet, slip-sheet, revised set, new issue, revision, supersede, superseded, carry forward, replace sheets, reissue, addendum, bulletin
---

When a new issue of the drawings arrives, slip-sheeting moves your review onto it: each new sheet takes the markups of the old sheet with the same number, and the old sheet is stamped "Superseded".

## Slip-sheet

1. Open the current set, with your markups.
2. Choose {{ui:Pages}}, then {{ui:Slip-sheet a revised set…}}, and pick the new PDFs. They open beside the old set.
3. The dialog lists each new sheet and the old sheet it replaces. Untick a row to leave that sheet's markups where they are. Sheets with a new number have nothing to carry.
4. Choose whether to leave closed markups (Accepted, Rejected, Completed) on the old sheets, and whether to stamp the old sheets.
5. Choose {{ui:Carry markups forward}}.

Result: the markups appear on the new sheets in the same place, with their replies, statuses and authors. A punch item moves to the new sheet and keeps its number. The old sheets keep their markups as a record, under a red "Superseded" stamp. The status bar sums up what moved.

{{ui:Just open the files}} opens the new set without carrying anything, for example to compare first. See [Compare two revisions](topic:compare-revisions).

## How sheets are matched

- **By sheet number**, read as the sheets list shows it: a number you typed with {{ui:Rename sheet}}, the PDF's page label, or the title block. Case, spaces, dots and dashes do not matter: "A-101" matches "a101".
- If two open files have a sheet with that number, the newest one is replaced, so you can slip-sheet issue after issue.
- **Scanned sets** have no numbers to read. When a new file has none, its pages are matched in page order to an open file with the same number of pages. Check those rows before you carry.

## Good to know

- One {{key:Mod+Z}} takes the whole slip-sheet back: the copies, the stamps and the moved punch items. The new files stay open.
- If a new sheet is a different size, the markups are scaled with the page, and the status bar says how many to check.
- The scale of an old sheet comes along when the new sheet is the same size and has none.
- Comments other programs made stay on the old sheets: they are read-only here.
- Save the new files to keep the carried markups. See [Save the marked-up PDF](topic:save-the-marked-up-pdf).
