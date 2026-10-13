---
title: Every markup type
summary: The seventeen kinds of markup, their keys, how each is drawn, its default look, and what it becomes in the saved PDF.
section: reference
order: 20
keywords: markup types, tools list, annotation types, cloud, callout, text, note, stamp, pen, highlighter, line, arrow, rectangle, ellipse, polyline, polygon, length, area, count
---

## The tools

| Toolbar | Key | How to draw | Default look | In the saved PDF |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Drag | Red, 1.5 pt | Ink |
| {{ui:Highlight}} | {{key:I}} | Drag | Yellow, 14 pt wide, see-through, tints what is under it | Ink (marked as a highlighter stroke) |
| {{ui:Line}} | {{key:L}} | Drag, or click start and end | Red, 2 pt | Line |
| {{ui:Arrow}} | {{key:A}} | Drag, or click start and end | Red, 2 pt, closed arrowhead at the end | Line with an arrowhead |
| {{ui:Arc}} | {{key:O}} | Click the start, a point on the arc, then the end | Red, 2 pt | Polyline along the arc |
| {{ui:Rectangle}} | {{key:R}} | Drag a box | Red, 2 pt, no fill | Square |
| {{ui:Ellipse}} | {{key:E}} | Drag a box | Red, 2 pt, no fill | Circle |
| {{ui:Polyline}} | {{key:Y}} | Click points, double-click to finish | Red, 2 pt | Polyline |
| {{ui:Polygon}} | {{key:G}} | Click points, double-click to finish | Red, 2 pt, no fill | Polygon |
| {{ui:Cloud}} | {{key:C}} | Drag a box | Red, 1.5 pt scallops | Square with a cloudy border |
| {{ui:Free cloud}} | {{key:Shift+C}} | Click points, double-click to finish | Red, 1.5 pt scallops | Polygon with a cloudy border |
| {{ui:Callout}} | {{key:K}} | Press on the point, drag to the text, type | Red text and leader, 1 pt, 12 pt text | Text box with a callout leader |
| {{ui:Text}} | {{key:T}} | Click or drag a box, type | Red 12 pt text, no border | Text box |
| {{ui:Note}} | {{key:N}} | Click, type | Yellow note icon | Sticky note |
| {{ui:Stamp}} | {{key:S}} | Pick a stamp, click or drag | Framed capitals plus "By <name>, <date>"; colored by meaning | Stamp |
| {{ui:Length}} | {{key:M}} | Click start and end (needs a scale) | Blue dimension line with ticks and the length | Line marked as a dimension, with a measurement |
| {{ui:Angle}} | {{key:X}} | Click one arm's end, the corner, then the other arm's end | Blue arms, a small arc at the corner and the angle in degrees | Polyline with the angle as its text |
| {{ui:Area}} | {{key:Q}} | Click corners, double-click to finish (needs a scale) | Blue outline, light blue fill, area and perimeter | Polygon marked as an area, with a measurement |
| {{ui:Count}} | {{key:U}} | Click each item | Orange numbered dots and a "group: n" tag | One ink comment per group, a ring per item |

On touch, "double-click to finish" is a double-tap, and "click" is a tap that acts when you lift (for points, notes and counts).

## What every markup carries

| Field | Where you see it |
|---|---|
| Author | {{ui:Properties}}, the list, the stamp's second line, other PDF viewers |
| Created and modified | {{ui:Properties}} (your time zone), the list, the CSV |
| Status | Open, Accepted, Rejected or Completed |
| Subject | A short label; defaults to the kind ("Cloud", "Text box", "Length measurement") |
| Comment | Longer notes. For a note, its text is its comment. |
| Text | Text boxes and callouts only |
| Replies | The thread, with status changes |
| Punch item | Number, assignee, due date, item status, when added to the punch list |
| Style | Color, line width, fill and fill opacity (closed shapes, text and callouts), opacity, text size (text, callouts and measurements) |

## Read-only comments

Comments that came with the file and that MarkupCraft cannot edit (text highlights, other programs' stamps and other special kinds) are listed with the type "Other" and the status chip "Read-only". They keep exactly the look the file gives them. You can select them, see their author, subject and comment, and reply to them.

## Not built yet

File attachments are not built yet. Any markup can link to a sheet; see [Sheet links](topic:sheet-links). Pictures and signatures are placed with the {{ui:Stamp}} tool; see [Stamps and notes](topic:stamps-and-notes). See [What is not built yet](topic:not-built-yet).
