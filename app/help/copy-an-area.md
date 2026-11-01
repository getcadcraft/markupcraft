---
title: Copy an area of the page, or an overlay
summary: Copy part of a sheet with a rectangle, an ellipse or a freeform shape and paste it into another sheet, CadCraft, BimCraft, DetailCraft or any program, at its size; copy it as a see-through overlay, and line a picture up with two points.
section: tasks
order: 129
keywords: copy area, area, crop, snip, snapshot, clip, region, rectangle, ellipse, circle, freeform, lasso, picture, image, png, overlay, transparent, see-through, tint, opacity, paste, true size, scale, line up, align, two points, cadcraft, bimcraft, detailcraft
---

Choose {{ui:More}} › {{ui:Copy an area of the page…}}. A bar opens over the sheet.

## Pick the area

Pick {{ui:Rectangle}}, {{ui:Ellipse}} or {{ui:Freeform}} in the bar, then drag on the sheet:

- **Rectangle:** drag a box round the part to copy.
- **Ellipse:** drag a box; the ellipse inside it is copied and the corners outside it are see-through.
- **Freeform:** draw round the part to copy; the shape closes itself. Outside it is see-through.

Drag again to start over, or press {{key:Esc}}.

## Copy

- {{ui:Include markups}} copies your markups with the page; untick it for the clean drawing.
- {{ui:Resolution}}: {{ui:As on screen}}, 72, 150 or 300 dpi. The picture is kept under 3 MB; when a big area at a high resolution would pass that, the resolution is lowered and the status line says to what.
- {{ui:Copy}} (or {{key:Mod+C}} or {{key:Enter}}) puts the area on the clipboard as a PNG picture, which pastes into Word, email, other PDF programs and drawing programs.
- {{ui:Save as PNG}} downloads the picture instead, for a program that drops the see-through parts on paste.

## Copy as overlay

{{ui:Copy as overlay}} also makes the white paper see-through, so only the lines are left. {{ui:Colour}} gives every line one colour (red, blue, green, orange or purple) so the overlay stands out from the drawing under it; {{ui:Own colours}} keeps them. {{ui:Strength}} is how strong it starts when pasted in our apps (50% unless you change it).

## Paste it

**In MarkupCraft**, {{key:Mod+V}} on any sheet pastes the area as a picture markup at the pointer. It comes in at its size:

- on paper, the same size it had on the sheet it came from;
- when both sheets have a scale, the same size in the drawing: an area from a 1:50 sheet comes in at half its paper size on a 1:100 sheet.

An overlay starts at its strength; change it with {{ui:Opacity}} in {{ui:Properties}}. Move, resize, lock and delete it like any picture, and tick {{ui:Flatten into the page when saved}} to draw it into the page.

**In CadCraft, BimCraft and DetailCraft** the copy also knows its size, so a paste comes in at the drawing's real size when the sheet had a scale, or asks for one when it did not. See each app's help on pictures.

## Line up a picture with two points

Select one picture or overlay, then choose {{ui:More}} › {{ui:Line up a picture with two points}}:

1. Click a point on the picture.
2. Click where that point goes.
3. Click a second point on the picture, away from the first.
4. Click where that point goes.

The picture is scaled, moved and turned so both points land where you clicked. {{key:Esc}} stops; {{key:Mod+Z}} undoes it in one step.

## Good to know

- The size travels with the copy only between our apps on the same site, and only for a copy made in the last few hours; another program gets a plain picture.
- If the browser does not let MarkupCraft use the system clipboard, the status line says so: paste in our apps still works, and {{ui:Save as PNG}} works for other programs.
- Line up turns the picture by redrawing its pixels, so a turned picture is slightly softer than the original.
