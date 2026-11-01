---
title: Clean up pen strokes, and bring in review comments and site progress
summary: Turn freehand pen strokes into lines, circles, arcs and rectangles; bring a permit package's review comments and a site's survey progress in as notes.
section: tasks
order: 32
keywords: pen, freehand, clean up, straighten, circle, line, rectangle, arc, permit, review comments, progress, drone, scan, survey, notes, csv
---

## Clean up pen strokes

Draw with {{ui:Pen}}, then open the {{ui:More}} menu in the Edit group and choose {{ui:Clean up pen strokes}}. Each selected pen stroke becomes what it was meant to be: a straight stroke becomes a line (made exactly level or plumb when it was nearly so), a round one an ellipse, part of a circle an arc, a closed four-cornered one a rectangle, anything else a polyline or polygon. Loose ends of strokes drawn together are pulled onto each other. With no pen stroke selected, every pen stroke on the open sheet is cleaned. It is one undo step: Ctrl+Z puts the freehand back. The shape is worked out on your computer by fixed rules; nothing is sent anywhere.

## Bring in review comments

BimCraft's permit package holds `01-review-comments.csv`: the comments a plan reviewer is likely to make, each with the rule, the clause, what is needed, what was found and what to do. In the {{ui:Tasks}} tab, open {{ui:Permit review comments}} and choose {{ui:Bring in comments (CSV)}}. Each comment becomes an Open note in a column down the left of the open sheet; drag each to the place it is about. They are computed from the checks that exist, not from a plan examiner.

## Bring in HAZOP node boxes

CadCraft's P&ID add-on draws the nodes of a HAZOP study and can save them as {{ui:HAZOP node boxes}} (a JSON file). Open the printed P&ID sheet here, go to the {{ui:Tasks}} tab, open {{ui:HAZOP node boxes}} and choose {{ui:Bring in node boxes (JSON)}}. Each node becomes an Open rectangle on the sheet with its number, name, equipment and lines in the text, and the team writes its findings as replies on it. The sheet is taken as printed at full size from the drawing's lower left corner; if it was printed at another scale, type that number in {{ui:Printed at}} first (0.5 for 1:2). A node that falls outside the page is not drawn, and the panel says how many. The markers are a study aid: they show where the nodes are, they do not judge the study.

## Bring in site progress

CivilCraft keeps a row for each drone flight or scan of the site. In the {{ui:Tasks}} tab, open {{ui:Site progress}} and choose {{ui:Bring in progress (JSON)}}. Each survey becomes a note on the open sheet saying how much is done, what is left to cut or fill, what was over-dug or over-filled and what stands off the plan. A survey with something off the plan stays Open; a clean one is Accepted.
