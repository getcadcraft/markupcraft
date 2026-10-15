---
title: Open a plan set and move between sheets
summary: Open one PDF or many, or start with blank pages, find sheets by number or name, zoom and pan, and rename a sheet when the file gets it wrong.
section: tasks
order: 10
keywords: open, new, blank page, blank sheet, sketch, grid, untitled, plan set, sheets, pages, thumbnails, page labels, sheet number, title block, rename, navigate, zoom, pan, fit, search sheets
---

## Open the set

1. Choose {{ui:Open}} in the toolbar, or press {{key:Mod+O}}.
2. In the file picker, select every PDF of the set ({{pick:mac=hold ⌘ and click each file|windows linux=hold Ctrl and click each file}}, or select a range with Shift), then confirm.
   Or drag the files from {{pick:mac=Finder|windows=File Explorer|linux=your file manager}} onto the sheet area. "Drop PDFs to open them" appears while you drag.
3. Wait while the status bar says "Opening <file>…". For big files it counts: "(10 of 60 sheets)".

Result: the {{ui:Sheets}} list shows every page of every file, in the order you opened them, and the status bar says something like "Opened 3 files (42 sheets in the set)." If the files already had comments, it adds how many were read.

To add more files to the set later, open them the same way. They join the end of the list.

## Start with blank pages

To sketch or take notes without a drawing, make blank pages instead of opening a PDF:

1. Choose {{ui:New}} in the toolbar, or {{ui:Start with a blank page}} on the start screen, or press {{key:Mod+N}} where your browser lets the page have it (the desktop app and Studio always do).
2. Pick the {{ui:Paper size}}: Letter, Tabloid or ANSI B, ARCH D, ARCH E, A4, A3 or A1, and {{ui:Portrait}} or {{ui:Landscape}}.
3. Pick a {{ui:Grid}}: {{ui:None}}, {{ui:Dots}} or {{ui:Squares}}. The grid is every 1/4 in with a heavier line each inch on inch paper, and every 5 mm with a heavier line each 10 mm on metric paper. It is printed on the page.
4. Type how many {{ui:Pages}} you want, from 1 to 20, then choose {{ui:Create}}.

Result: a new PDF named "Untitled-1.pdf" (then "Untitled-2.pdf", and so on) opens like any other file, made here on this computer. Every tool works on it, and {{ui:Save}} downloads "Untitled-1 (marked up).pdf". MarkupCraft remembers your choices for next time.

The pages have no scale: the status bar says "Not calibrated". The grid is not a scale. To measure, calibrate the sheet or pick a scale first; see [Calibrate and measure](topic:calibrate-and-measure).

To add a page to a blank set, open one of its sheets and choose {{ui:Add a blank page}} under the {{ui:Sheets}} list. The new page has the same paper and grid and goes at the end. Like every page change, it cannot be undone; see [Print, and change the pages](topic:pages-and-printing).

## How sheets get their names

MarkupCraft names each sheet "<sheet number> — <title>", for example "A-101 — Floor plan", from the first of these it finds:

1. A name you typed with {{ui:Rename sheet}} (below).
2. The PDF's own page labels, when the person who made the PDF set them (for example "A-101").
3. The title block: MarkupCraft reads the page's text and looks for something shaped like a sheet number (A-101, A1.01, M-201A, KA1-1), favoring the lower-right corner, the right-hand strip and the bottom band, and takes the largest wording near it as the title.
4. Otherwise, the file name and page: "Plans — page 3".

To see which one was used, press {{key:Esc}} until nothing is selected and {{ui:Select}} is on, then look at {{ui:Properties}}: "Read from" says "The page label", "The title block", "The file name" or "Typed by hand".

:::note
Scanned sheets, and PDFs whose lettering was exported as lines, have no text to read. They are named by file and page until you rename them. MarkupCraft cannot read text from images yet.
:::

## Move between sheets

- Click a sheet in {{ui:Sheets}}.
- Press {{key:PageDown}} for the next sheet and {{key:PageUp}} for the previous one, or use the arrows in the bar under the sheet.
- Type in {{ui:Search sheets}}: part of a number ("A-2"), a word of the title ("roof"), or a file name. The list narrows as you type ("4 of 42"). Press {{key:Enter}} to open the first match. Clear the box to see every sheet again.

Each sheet keeps its own zoom and position until you close the set.

## Zoom and pan

:::mouse
- **Zoom:** turn the wheel over the sheet. It zooms around the pointer. Or press {{key:Plus}} and {{key:Minus}} (also with {{key:Mod}}), or use the zoom buttons. Type an exact percentage in the zoom box.
- **Fit:** {{ui:Fit page}} ({{key:Mod+0}}) shows the whole sheet; {{ui:Fit width}} ({{key:Mod+9}}) fills the width.
- **Pan:** drag with the middle button (the wheel), or drag with the right button, or hold {{key:Space}} and drag, or choose {{ui:Pan}} ({{key:H}}) and drag. With nothing selected, the arrow keys move the sheet too.
:::

:::mac mouse
On a Mac trackpad, two-finger scrolling zooms (it does not scroll the sheet). To pan, hold {{key:Space}} and drag with one finger, or switch to {{ui:Pan}} with {{key:H}}. A pinch zooms in Chrome, Edge and Firefox.
:::

:::touch
- **Zoom and pan:** put two fingers on the sheet. Spread or pinch them to zoom around the point between them, and move them together to pan. Both happen at once.
- **Pan with one finger:** choose {{ui:Pan}} first. With any other tool, one finger draws or selects.
- {{ui:Fit page}} and {{ui:Fit width}} are in the bar under the sheet.
:::

You can zoom out well past the whole sheet and in up to 6400%. The sheet is redrawn sharp a moment after you stop moving.

## Bookmarks

{{ui:Bookmarks}}, at the top of the {{ui:Sheets}} panel, shows the bookmarks (outline) of the PDF the open sheet belongs to. Choose one to go to its page. The pencil renames a bookmark and the cross removes it. {{ui:Build from sheets}} makes one bookmark per sheet, named as the sheets list shows them (sheet number and title), and {{ui:Add for this sheet}} adds one for the sheet you are on. Changes are part of the file's unsaved work: {{ui:Save}} writes them into the copy, where every PDF viewer shows them.

## Turn the view

The two turn buttons at the right of the bar under the sheet turn the view a quarter turn either way, for a sheet drawn sideways. Only the view turns: the PDF and its markups stay as they are, and the next sheet opens the way its PDF is (each sheet remembers its own turn while the set is open). Text you add on a turned view reads upright as you see it. To turn the page itself in the saved PDF, use {{ui:Pages}}, then {{ui:Rotate page clockwise}}; see [Print, and change the pages](topic:pages-and-printing).

## Rename a sheet

When a sheet's name is wrong or missing:

1. Show the sheet.
2. Press {{key:Esc}} until nothing is selected and the {{ui:Select}} tool is on. {{ui:Properties}} now shows the sheet.
3. Choose {{ui:Rename sheet}}.
4. Type the {{ui:Sheet number}} and the {{ui:Title}}, then choose {{ui:Save}}.

Result: the sheets list, the bar under the sheet and the markups list all use the new name, and "Read from" says "Typed by hand". Renaming can be undone with {{key:Mod+Z}}.

To go back to what the file says, open {{ui:Rename sheet}} again, clear both boxes, and choose {{ui:Save}}.

When you save, a typed sheet number becomes the page's label in the PDF, so other PDF viewers show "A-101" in their page box too. If you give any page of a file a number, every page of that file gets a label in the copy (its typed number, else its old label, else its page number). A typed title is kept for MarkupCraft but other viewers do not show it.

## Take the PDF to TakeoffCraft, or bring it here

When TakeoffCraft is open in the same place (the lab, Try or the online apps), the bar under the sheet has {{ui:Open in TakeoffCraft}}. It opens the sheet's PDF in TakeoffCraft in a new tab, as it was opened here, so you can measure quantities on it. Your markups stay here; save them as usual.

TakeoffCraft's {{ui:MarkupCraft}} button does the same the other way: the PDF opens here as if you had chosen {{ui:Open}}. If the browser blocks the new tab, allow pop-ups for this site and choose the button again.
