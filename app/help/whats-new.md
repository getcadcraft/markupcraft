---
title: What's new in 0.4
summary: Print, page changes, slip-sheeting, find text, layers, sheet links, compare by lines, recovery after a crash and much more.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.4, version, new features, print, pages, slip sheet, find text, layers, links, bookmarks, recover, autosave, language, spanish
---

This is what changed in MarkupCraft 0.4, compared with 0.3, the version Try ran before. It is a big release: most of the items on the old "not built yet" list are built now. Your markups, measuring, compare and the lists work as they did, with more on top.

## New

### Pages, printing and files

- **Print with markups.** Press {{key:Mod+P}}, or choose {{ui:Pages}}, then {{ui:Print…}} in the {{ui:File}} group. Print this sheet, this file, the whole set or the pages you type. See [Print, and change the pages of a PDF](topic:pages-and-printing).
- **Change the pages.** The {{ui:Pages}} menu turns, moves, inserts (from a PDF, or blank), deletes and extracts pages. Markups, scales and sheet numbers move with their pages.
- **Slip-sheet a revised set.** {{ui:Slip-sheet a revised set…}} opens the new issue and moves every open markup to the new sheet with the same number. Old sheets can be stamped "Superseded". See [Slip-sheet a revised set](topic:slip-sheet-a-revised-set).
- **Save a flattened copy.** The markups are drawn into the pages, for a final issue nobody can change. See [Save a flattened copy](topic:flatten).
- **Recover your work.** If the tab closes or the browser crashes before you save, MarkupCraft asks {{ui:Recover your work?}} the next time it opens, and puts the PDF and your markups back. See [Recover unsaved work](common:recover).
- **Open in TakeoffCraft.** The bar under the sheet can hand the open PDF to TakeoffCraft in a new tab, and TakeoffCraft's PDFs open here the same way. The button shows when TakeoffCraft is open in the same place. See [Take the PDF to TakeoffCraft](topic:open-a-plan-set#take-the-pdf-to-takeoffcraft-or-bring-it-here).
- **Recent files.** The start screen lists the PDFs you opened lately, in Chrome and Edge. Click one to open it again.

### Finding and moving around

- **Find text.** Press {{key:Mod+F}} to search the words on every sheet, jump to each hit, and cloud them all in one step. See [Find text in the drawings](topic:find-text).
- **Sheet links.** Any markup can link to another sheet: hold {{key:Mod}} and click it to go there, and {{key:Alt+Left}} comes back. {{ui:Link sheet callouts…}} links every callout like `3/A-501` in one pass. See [Sheet links](topic:sheet-links).
- **Bookmarks.** Follow, rename and remove a PDF's bookmarks, or build them from the sheet names. They are saved in the PDF. See [Bookmarks](topic:open-a-plan-set#bookmarks).
- **Turn the view.** Two buttons under the sheet turn it a quarter turn, for a sheet drawn sideways. The PDF does not change. See [Turn the view](topic:open-a-plan-set#turn-the-view).

### Drawing and measuring

- **Layers.** Put markups on named layers, then show, hide or lock each layer. Other PDF viewers can switch the layers too. See [Markup layers](topic:layers).
- **Arcs and angles.** {{ui:Arc}} ({{key:O}}) draws an arc through three points. {{ui:Angle}} ({{key:X}}) measures an angle in degrees, with no scale needed. See [Measure an angle](topic:calibrate-and-measure#measure-an-angle).
- **Area cut-outs.** Leave columns, shafts and courtyards out of an area. The perimeter goes round them too. See [Cut-outs](topic:calibrate-and-measure#cut-outs).
- **Sketch to scale.** On a calibrated sheet, type a length, and an angle if you want one, while you draw. See [Sketch to scale](topic:calibrate-and-measure#sketch-to-scale).
- **Pictures and signatures.** Stamp a logo or a seal with {{ui:Picture…}}, or sign once with {{ui:My signature…}} and place it like any stamp. See [Stamp a picture or your signature](topic:stamps-and-notes#stamp-a-picture-or-your-signature).
- **Spaces.** Name the rooms and zones of a sheet, then filter and export markups by the space they are in. See [Spaces](topic:spaces).
- **Photos on markups.** Add a photo to a markup's thread, or take one on a tablet. It travels in the PDF. See [Add a photo](topic:statuses-and-replies#add-a-photo).
- **Copy to other sheets.** {{ui:Copy to other sheets…}} in {{ui:Properties}} copies a stamp, or any markups, to the same place on the sheets you tick. See [Copy markups to other sheets](topic:select-and-edit#copy-markups-to-other-sheets).

### Lists, reports and compare

- **A legend** that counts each kind of markup on the sheet as you work. See [A legend on the sheet](topic:markups-list-and-export#a-legend-on-the-sheet).
- **Your own columns.** Add text, choice, number and date columns to markups, and sort the list by any column. See [Your own columns, and sorting](topic:markups-list-and-export#your-own-columns-and-sorting).
- **Markup summary** as a spreadsheet workbook ({{ui:XLSX}}) or a PDF report ({{ui:PDF}}). See [Export a summary](topic:markups-list-and-export#export-a-summary-workbook-or-pdf).
- **Import BCF.** Replies and statuses from BIM tools come back onto your markups, and their other issues arrive as notes. See [Import BCF](topic:markups-list-and-export#import-bcf).
- **Compare by changed lines.** {{ui:Changed lines}} compares the sheets' own lines, not just their pictures, and {{ui:Cloud the changes}} clouds every change in one step. See [Changed lines only](topic:compare-revisions#changed-lines-only).
- **Compare a whole set.** {{ui:Compare two sets}} pairs the sheets of two PDFs by number and lists the most changed first. See [Compare a whole set](topic:compare-revisions#compare-a-whole-set).

## Improved

- **Touch.** Touch and hold finishes a polyline or opens a markup's text. Buttons, menus and grips are bigger for fingers. See [Review on an iPad or touch screen](topic:review-on-a-tablet).
- **More panels windows.** Each panel can have a window of its own, up to four. Drag a panel from one window to another, and resize a floating panel with a finger or a pen. See [More than one panels window](common:arrange-panels#more-than-one-panels-window).
- **Find a tool or setting.** Press {{key:Mod+K}}, or {{ui:Find}} in the bar at the top, to run a tool, jump to a setting or open a help topic. See [Find a tool or setting](common:find-tools).
- **Language.** Every word in MarkupCraft now comes from a language file. {{ui:Settings}} › {{ui:General}} › {{ui:Language}} offers English and "Español (México)". The Spanish is a machine-made draft that has not been reviewed yet, and help topics are still in English.
- **Save for offline** says how much it keeps before you click.

## Files and compatibility

- MarkupCraft still saves a copy, "<name> (marked up).pdf". Your original PDF is never changed.
- The new things are saved as standard PDF parts, so other PDF viewers show them: layers, sheet links, bookmarks, pictures and photo attachments. See [What is saved in the PDF](topic:what-the-pdf-keeps).
- The PDF engine is the same version as in 0.3.

## Not in this version yet

- Undoing a page change. Close without saving and open the original PDF again.
- Reading text from scanned sheets. A test misread sheet numbers, so it is not built.
- {{ui:Settings}} has an {{ui:Assistants}} section, but an assistant can only connect through CadCraft Studio, which is not available yet.
- {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} is there, but no add-ons come with MarkupCraft yet.
- Everything else is in [What is not built yet](topic:not-built-yet).
