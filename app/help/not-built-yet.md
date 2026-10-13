---
title: What is not built yet
summary: What this build of MarkupCraft does not do yet, and what to do instead today.
section: trouble
order: 20
keywords: missing, roadmap, planned, limitation, not supported, coming, feature request, sessions, cloud, digital signature, ocr, web links
---

MarkupCraft is in development. This is what the current build does **not** do, so you can plan around it. It describes today's build, not promises.

## Working with other people

| Not built yet | Do this today |
|---|---|
| Shared review sessions (several people marking up the same set live) | Save the marked-up PDF and pass it on; each person replies and saves. See [Statuses and replies](topic:statuses-and-replies). |
| Cloud saving and sync between computers | Keep the PDFs with your project files. Cloud saving is not available yet. |
| Merging two people's copies | Divide the sheets between reviewers, or copy a few markups across with {{key:Mod+C}} and {{key:Mod+V}}. |
| Editing or deleting a reply once sent | Undo right away, or add a correcting reply. |
| Changing who a markup is by | Set your name before you start. |

## Markups

| Not built yet | Do this today |
|---|---|
| Stamps with fill-in fields, certified digital signatures | Use a custom text stamp, which carries your name and the date, or a picture of your signature. |
| Attaching files other than photos (documents, videos) | Keep them alongside the PDF and refer to them in the comment. |
| Links to websites or to files that are not open | Write the address or file name in the comment. |
| Custom status sets | Use the four statuses, and the subject for anything more. |
| Editing comments that came with the file as read-only (text highlights, other programs' stamps) | Reply to them, or draw a MarkupCraft markup next to them. |
| Pressure-sensitive pen strokes | Set the line width. |
| Changing keyboard shortcuts | See [Keyboard and mouse](topic:keyboard) for the fixed keys. |

## Measuring

| Not built yet | Do this today |
|---|---|
| Radius measurements | Draw an {{ui:Arc}} along it, or measure the {{ui:Length}} across and halve it. |
| Editing a cut-out's corners | Remove the cut-outs and draw them again. |
| Applying one scale to many sheets at once | Calibrate each sheet; picking a preset takes a few seconds per sheet. |
| Several scales on one sheet (viewports) | Calibrate to the drawing you measure most. Changing a sheet's scale re-measures everything on it, so write down detail values before you recalibrate for them. |
| Snapping to lines in the drawing | Zoom in before clicking, or type lengths and angles (see [Sketch to scale](topic:calibrate-and-measure#sketch-to-scale)). |
| A full takeoff with items, assemblies and prices | Use TakeoffCraft, the CadCraft family's takeoff app. |

## Sheets and files

| Not built yet | Do this today |
|---|---|
| Reading text from scanned sheets (OCR) | Scans are named by file and page; use {{ui:Rename sheet}}. A test found sheet numbers in plotter fonts misread, so it is not built. |
| Undoing a page change (rotate, move, insert, delete) | Close without saving and open the original PDF again. See [Print, and change the pages](topic:pages-and-printing). |
| Closing one file of a set | {{ui:Close}} closes the whole set; reopen the files you need. |
| Saving a set as a project to reopen in one step | Open the same PDFs again. |
| Searching scanned sheets (no text in the PDF) | Name the sheets with {{ui:Rename sheet}}; {{ui:Find text}} searches only sheets with text. |
| Printing to a chosen scale, or several sheets per paper | Use your browser's printer dialog, or print the saved copy from another PDF viewer. |

## Lists and exports

| Not built yet | Do this today |
|---|---|
| Placing imported BCF issues at their model position | Imported issues tied to no sheet are stacked at the top left: move them. |
| Importing tool sets from other markup programs | Rebuild the tools you need and save them to the chest; export it for the office. |

## Compare

| Not built yet | Do this today |
|---|---|
| Comparing text set in a font, or a list of what changed | Use the overlay and the slider, or {{ui:Changed lines}} for drawn lines. |
| Comparing scanned sheets by their lines | Use the picture overlay. |
| Lining up every pair automatically when comparing a whole set | Compare a shifted pair on its own and use {{ui:Align by two points}}. |

## Panels

| Not built yet | Do this today |
|---|---|
| Moving the toolbar or the status bar | Only the two side panels move. |

## Platforms

- **Desktop builds** are not available yet. MarkupCraft runs in the browser on Mac, Windows, Linux and iPad.
- MarkupCraft is in development. Labels and behavior may still change, and this help changes with them.
