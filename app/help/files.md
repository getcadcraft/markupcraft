---
title: Files MarkupCraft opens and saves
summary: PDFs in, a marked-up PDF copy out, plus CSV, BCF and tool chest files; where each goes, online and offline.
section: start
order: 30
keywords: pdf, open, save, export, download, csv, bcf, bcfzip, json, tool chest, file types, formats, upload, password, encrypted
---

## What MarkupCraft opens

| File | How | What happens |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open}}, {{key:Mod+O}}, or drop on the sheet area. Several at once is fine. | Every page becomes a sheet. Markups already in the file are read back (below). |
| Tool chest (`.json`) | {{ui:Tools}} tab, then {{ui:Import}} | Tools are added to your chest. See [The tool chest](topic:tool-chest). |

Anything else is refused with "MarkupCraft opens PDF files." in the status bar. If you drop a mix, the PDFs open and the status bar says how many files were not PDF.

### Markups already in a PDF

- **Markups MarkupCraft saved** come back exactly: type, style, author, dates, status, replies, punch number, the sheet's scale and any sheet names you typed.
- **Comments from other PDF programs** are read too. Rectangles, ellipses, lines and arrows, polylines, polygons, ink (pen) strokes, text boxes and sticky notes become normal, editable MarkupCraft markups. Their replies and review statuses come along.
- **Everything else** (text highlights made by selecting text, other programs' stamps, and other kinds) is shown as it is, marked read-only. You can select it, see it in the markups list and reply to it, but not move, change or delete it.
- Links and form fields are left alone and are not listed.
- A scale saved by another program (a measurement viewport) is used as the sheet's scale when MarkupCraft understands its unit.

### Files that do not open

- A PDF that needs a password: '"name" needs a password to open. Open an unprotected copy.'
- A damaged file or one that is not really a PDF: '"name" could not be read as a PDF (…)'.
- A PDF that opens but is protected against changes opens fine. Saving it is refused (see below).

When several files are opened at once, the ones that work open and a box called "Some files did not open" lists the others.

## What MarkupCraft saves

Saving is always a **download** of a new file. A web page cannot overwrite a file on your computer, and MarkupCraft never changes your original.

| You choose | You get | Notes |
|---|---|---|
| {{ui:Save}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | A copy of the original PDF with every markup written in as a real PDF comment. Saving a "(marked up)" file again keeps the same name; it never becomes "(marked up) (marked up)". See [Save the marked-up PDF](topic:save-the-marked-up-pdf). |
| {{ui:Markups}} tab, then {{ui:CSV}} | "<name> markups.csv" | The markups as listed (filters apply). |
| {{ui:Markups}} tab, then {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 for BIM coordination tools, a snapshot per markup. See [BCF basics](topic:bcf-basics). |
| {{ui:Punch list}} tab, then {{ui:Export CSV}} | "<name> punch list.csv" | The punch items in number order. |
| {{ui:Tools}} tab, then {{ui:Export}} | "MarkupCraft tool chest.json" | Your tool chest, to share or keep. |

"<name>" is the first open PDF's file name without ".pdf".

The CSV files open in any spreadsheet. They are UTF-8 with the marker spreadsheets look for, so accented names come out right. A cell that starts with =, +, - or @ gets a leading apostrophe so a spreadsheet never runs it as a formula.

## Where downloads go

Your browser decides: usually your Downloads folder, or it asks each time if you set it to. See [Browsers and computers](common:browsers#what-differs-between-browsers).

:::chromium
When you save every changed file of a set at once, Chrome and Edge may ask whether this site may download multiple files. Choose {{ui:Allow}}, or you get only the first copy.
:::

:::safari
On an iPad, Safari asks before each download and puts the file in the Files app, under Downloads. On a Mac it goes to the folder set in Safari's settings.
:::

## Online and offline

- **Your PDFs never leave this computer**, online or offline. There is no upload anywhere.
- The PDF reader is loaded the first time you open a PDF ("Loading the PDF reader…"), and the PDF writer the first time you save ("Loading the PDF writer…") or open a file that already has comments in it.
- With a connection, both load from the website.
- **To work with no connection,** choose {{ui:Save for offline}} in the bar at the top while you are online. The button counts "Saving N of M" and then says "Offline ready". That copy includes the PDF reader and the PDF writer (about 6 MB in all) and this help, so afterwards opening, marking up and saving PDFs all work offline in this browser.
- If the button says "Could not save", some files did not download: check the connection and click it again. If it says "Offline not available", this browser window cannot keep an offline copy (private windows and some managed computers); use a normal window.
- To update or drop the copy, click "Offline ready" and choose "Save again (get the newest version)" or "Remove the offline copy". More in [Working offline](common:offline).

:::offline
You are offline. If the bar at the top says "Offline ready", everything works, saving included. If it does not and you have not saved yet in this tab, {{ui:Save}} can fail with "The PDF writer could not load". Your markups are still in the tab: keep it open, get back online, and choose {{ui:Save}} again.
:::

## Things to know

- Large plan sets take a while to open: MarkupCraft reads every page's text to find sheet numbers. The status bar counts the sheets as it goes.
- Opening the same PDF twice adds its sheets twice. Close the set and open it again if that happens.
- {{ui:Close}} closes every open file at once. If any have unsaved markups it asks: {{ui:Cancel}}, {{ui:Close without saving}} or {{ui:Save copies first}}.
- Cloud saving is not available yet, and there are no desktop builds yet. Keep your PDFs with your other project files and back them up as usual. See [Where your files go](common:your-files).
