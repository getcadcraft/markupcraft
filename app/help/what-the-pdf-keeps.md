---
title: What is saved in the PDF
summary: Exactly what the marked-up copy contains, what other PDF programs see, and what is read back when you open a file.
section: reference
order: 40
keywords: pdf annotations, comments, saved data, round trip, page labels, measurement, review state, replies, interoperability, compatibility, reopen, private data
---

The marked-up copy is the original PDF with comments (PDF annotations) added. The pages themselves, their drawings, text, bookmarks and links are copied as they were.

## Each markup

| MarkupCraft | Saved as | Other PDF viewers show |
|---|---|---|
| Rectangle, box cloud | Square annotation (cloud: cloudy border) | A rectangle or cloud comment |
| Ellipse | Circle annotation | An ellipse comment |
| Polygon, free cloud | Polygon annotation (cloud: cloudy border) | A polygon or cloud comment |
| Polyline | PolyLine annotation | A polyline comment |
| Line, arrow | Line annotation (arrow: closed arrowhead) | A line or arrow comment |
| Length | Line annotation marked as a dimension, with a measurement | A length measurement, where the viewer supports them |
| Area | Polygon annotation marked as an area, with a measurement | An area measurement, where supported; otherwise a polygon |
| Count group | One ink annotation, a ring per item; its text is "group: n" | An ink comment |
| Pen, highlighter | Ink annotation (highlighter marked as such) | An ink comment |
| Text | FreeText annotation | A text box comment |
| Callout | FreeText annotation with a callout leader | A callout comment |
| Note | Text annotation | A sticky note that opens to its text |
| Stamp | Stamp annotation | A stamp comment |

Every one is saved with:

- **its own appearance**, drawn exactly as MarkupCraft draws it on screen, so it looks the same in any viewer and prints the same, punch number badge included;
- **the author**, **the created and modified dates**, **the subject**, **the comment text** (for text boxes and callouts, the text and the comment), **the color** and **the opacity**;
- **its MarkupCraft details** in a private entry that other programs ignore: status, punch item, style and type, so it reopens exactly.

## Threads and statuses

- Each reply is saved as a reply comment linked to its markup, with its author, date and text. Replies have no icon of their own on the sheet.
- Each status change is saved as a reply carrying a review state. Other review tools show it as Accepted, Rejected or Completed; Open is saved as no state.
- A markup with a status other than Open but no logged status change gets one review-state reply, so other programs see the status too.
- Replies on read-only comments from the original file are saved the same way, linked to that comment.

## Each sheet

- **Scale:** a calibrated sheet gets a measurement viewport covering the page (the standard way to store a page scale) and MarkupCraft's own copy of the calibration.
- **Sheet number:** a number typed with {{ui:Rename sheet}} becomes the page label. When any page of a file has one, every page of that file gets a label: its typed number, else its old label, else its page number.
- **Sheet title:** a typed title is saved for MarkupCraft only; other viewers do not show it.

## Text and characters

Text is written in Helvetica, which every PDF viewer has. Letters outside the Western European set (Windows-1252) print as "?" in the copy; the save message counts them.

## What happens to comments that were already there

When you open a PDF that already has comments:

- MarkupCraft's own comments are read back exactly. If another program moved or resized one, its new position wins.
- Rectangles, ellipses, lines, polylines, polygons, ink, text boxes and sticky notes from other programs become editable markups. **When you save, MarkupCraft removes the originals and writes them again its own way**, with their pop-ups and replies. Their look can change slightly.
- Review states from other programs set the status; the newest wins.
- Everything else (text highlights, other programs' stamps and special kinds) is **kept untouched** in the copy, read-only.
- Links and form fields are kept untouched and are not listed.

Saving the same file again never doubles anything: the markups MarkupCraft read are replaced, not added again.

## What is not changed

Your original file on disk is never changed. The copy is not optimized for size, so it can be somewhat larger than the original. Protected (encrypted) PDFs cannot be saved.
