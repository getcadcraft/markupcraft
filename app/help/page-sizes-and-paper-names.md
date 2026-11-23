---
title: Page sizes and paper names
summary: See each PDF page's size in millimetres and inches and its paper name (A, B and C series, ANSI, ARCH), and group a mixed set by size to find the odd pages.
section: tasks
order: 141
keywords: page size, paper size, paper name, a0, a1, a2, a3, a4, b series, c series, ansi, arch, architectural, mm, inches, custom size, by size, odd size, mixed set, check pdf, client, issue, mediabox, cropbox, rotation
---

Before a set goes to a client, check that every sheet is the size it should be. {{ui:MarkupCraft}} reads each page's size from the PDF itself and names the paper.

## What you'll do

Look at one sheet's size, then group the whole set by size.

## Steps

1. Open the PDFs ({{ui:Open}}), then press {{key:Esc}} until nothing is selected and {{ui:Select}} is on.
2. Look at {{ui:Properties}}. {{ui:Paper}} says the name and the way up, for example "A4, portrait". {{ui:Size}} gives millimetres and inches.
3. Every row of the {{ui:Sheets}} list has a size line under the sheet name.
4. Choose {{ui:By size}} in the {{ui:Sheets}} header. The list gathers the sheets under one heading per size, the biggest group first. A size with only a few sheets is marked as an odd one out.
5. Choose {{ui:By size}} again to go back to the set's own order.

Result: a page that is a different size from the rest is easy to see before you send the set.

## How the name is chosen

- The size comes from the page's box in the PDF with its rotation applied, so a landscape A3 is still A3.
- The names are the A and B series (ISO 216), the C series (ISO 269), ANSI A to E and ARCH A to E.
- A page within 2 mm of a named size takes that name. Any other page says {{ui:custom}} and {{ui:Nearest named size}} says which size is closest and how far off it is.
- Inches come from the real page size, so an A4 page is 8.26 by 11.69 in.

## In the files you save

The summary workbook ({{ui:Markups list}}, then the spreadsheet) has a {{ui:Paper size}} column on the {{ui:By sheet}} sheet and a {{ui:Page sizes}} worksheet. The PDF report has a "Page sizes" line with the count of each size.

:::note
The ANSI and ARCH inch values were typed from the published tables and have not been compared with the printed standards. Treat a "custom" page that is close to one of them as a matter for your own check.
:::
