---
title: Find text in the drawings
summary: Search the words on every sheet, jump to each hit, and cloud them all in one step.
section: tasks
order: 115
keywords: find, search, text, word, words, ctrl f, look for, note, keynote, callout, cloud all, highlight hits, ocr, scan, scanned, read text, select text, copy text, tesseract
---

{{ui:Find text}}, at the top of the {{ui:Sheets}} panel, searches the words drawn on the sheets themselves. {{ui:Search sheets}} below it only searches sheet names.

## Find

1. Press {{key:Mod+F}}, or open {{ui:Find text}}.
2. Type the words, such as `hood` or `verify in field`.
3. Pick {{ui:All sheets}} or {{ui:This sheet}}, and tick {{ui:Match case}} or {{ui:Whole words}} if you need them.
4. Press {{key:Enter}} or choose {{ui:Find}}.

Result: every hit is listed with its sheet number and the words around it, and is marked in yellow on its sheet. Choose a hit to open its sheet and zoom to it.

A phrase is found even when the drawing splits it over two pieces of text or two lines.

## Cloud every hit

Choose {{ui:Cloud all}}. A revision cloud goes round each hit in the list, on every sheet, with "Found: <your words>" as its comment. One {{key:Mod+Z}} removes them all.

## Read the text on a scan (OCR)

A scanned sheet is only a picture: until its words are read, there is nothing to find. When the count says sheets have no text, choose {{ui:Read text (OCR)…}} under it, or {{ui:Pages}} › {{ui:Read text (OCR)…}}.

1. Pick the pages: this sheet, every page of the file, or every page of every open file.
2. Pick the language of the text. {{ui:Also English}} reads English words too.
3. Choose {{ui:Read text}}. A bar shows the page being read; {{ui:Stop}} ends the run and keeps the pages already read.

Result: the words can be found, selected and copied like any other text. It all runs on your computer: nothing is sent anywhere. It works without a connection in Studio, and in the browser once the app is saved for offline (English and your interface language) or a language has been used once. Pages that already have text are left as they are.

When you save, the words go into the PDF as invisible text behind the picture, apart from your markups, so other PDF programs can search and copy them too. Until you save, the file shows as unsaved.

## Select and copy text

Choose {{ui:More}} › {{ui:Select text to copy}}. Drag from one word to another to select the words between them, drag from empty paper to select the words in a box, or double-click one word. {{key:Mod+A}} selects every word on the sheet. {{key:Mod+C}} copies them, keeping the lines. Any other tool ends it.

## Good to know

- Drawings whose letters are drawn as lines have no text either; reading them as a picture works best on printed text such as a scanned book or specification.
- The reader is Tesseract, built into the app with its language data for English and the app's languages. The first run loads it (about 6 MB, more for a second language).
- How well it reads depends on the scan: clean pages at 300 dpi read almost word for word; old, faint or low-resolution scans miss more words.
- The list shows the first 500 hits; Cloud all clouds up to 2,000.
- The hits are cleared when you close the set, and for one file when you change its pages.
