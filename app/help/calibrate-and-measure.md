---
title: Calibrate a sheet and measure
summary: Set each sheet's scale from a preset or a known dimension, then measure lengths, areas with perimeters, and counts.
section: tasks
order: 60
keywords: calibrate, scale, set scale, measure, length, distance, dimension, area, square feet, perimeter, count, takeoff, quantity, ruler
---

Lengths and areas need to know the sheet's scale. MarkupCraft keeps a scale **per sheet**: calibrate each sheet you measure on. Counts need no scale.

The status bar shows the current sheet's scale, or "Not calibrated".

## Choose a scale from the list

Use this when the PDF is at full size (a 24 × 36 sheet that prints at 24 × 36) and the drawing states its scale.

1. Click the scale button in the status bar ("Not calibrated"). The "Sheet scale" box opens.
2. Under {{ui:Scale}}, pick the scale: architectural (1/32" = 1'-0" to 3" = 1'-0"), engineering (1" = 10' to 1" = 100') or metric (1:1 to 1:1000).
3. Choose {{ui:Set scale}}.

Result: the status bar shows the scale, for example `1/4" = 1'-0"`. Architectural scales show lengths in feet and inches, engineering scales in decimal feet, metric scales up to 1:50 in millimeters and from 1:100 in meters.

:::warning
A preset is only right if the PDF has not been shrunk. A half-size set, or a sheet that was "fit to page" when it was made, measures wrong with a preset. Calibrate from a known dimension instead, and check one dimension either way.
:::

## Calibrate from a known dimension

Use this for half-size sets, scanned sheets, details at odd scales, or to check a preset.

1. Find a long dimension you trust, or a graphic scale bar.
2. Choose {{ui:Calibrate}} in the {{ui:Measure}} group (or choose {{ui:Pick two points}} in the "Sheet scale" box).
3. Click one end of the dimension, then the other. (Or drag from one end to the other.) Zoom in first for accuracy; {{key:Shift}} keeps the line at 45° steps.
4. The box says how far apart the points are on the paper and asks "How far apart are they really?". Type the {{ui:Real distance}}, for example `24'-0"`, `12' 6 1/2"`, `7.2 m` or `900 mm`.
5. Pick how lengths are shown under {{ui:Show lengths in}}: {{ui:Feet and inches}}, {{ui:Decimal feet}}, {{ui:Inches}}, {{ui:Meters}} or {{ui:Millimeters}}.
6. Choose {{ui:Set scale}}.

Result: the status bar shows "Calibrated: 24'-0" over 1.00 in" (the real length and the paper length), and the tool you were going to measure with comes back on. Every way of typing a length is in [Units and lengths](topic:units-and-scales).

If MarkupCraft cannot read what you typed, the box says so: 'That is not a length MarkupCraft understands. Try 24'-0", 12' 6 1/2", 7.2 m or 900 mm.'

## Measure a length

1. Choose {{ui:Length}} ({{key:M}}).
2. Click the start, then the end. Or drag from start to end. {{key:Shift}} keeps it at 45° steps.

Result: a dimension line with ticks and the length written on it. The status bar repeats it ("Length: 12'-6 1/2" (1/4" = 1'-0")."), and {{ui:Properties}} shows it under {{ui:Length}}. Feet and inches are rounded to the nearest 1/16".

If the sheet has no scale yet, choosing {{ui:Length}} switches to {{ui:Calibrate}} and the status bar explains: "Calibrate this sheet first: pick two points a known distance apart, or choose its scale. Then measure." After you set the scale, {{ui:Length}} comes back.

## Sketch to scale

On a calibrated sheet you can type real lengths while you draw a {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}}, {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}}, {{ui:Area}} or a space:

1. Click the first point.
2. Point the way the next segment goes and type its length, such as `16` (in the sheet's unit), `12'6"` or `3.5 m`. A box opens by the pointer as you type.
3. Press {{key:Enter}}. The point lands that far away, in the pointer's direction.

To set the direction exactly, add `<` and an angle in degrees: `8 < 90` goes 8 feet straight up, `4<0` to the right, `10 < 225` down and to the left, as the sheet is seen (turned pages included). Keep typing lengths for the next corners, and finish the shape as usual. {{key:Esc}} closes the box without placing a point.

## Measure an angle

1. Choose {{ui:Angle}} ({{key:X}}).
2. Click the end of one arm, then the corner, then the end of the other arm.

Result: the two arms, a small arc at the corner and the angle in degrees, to a tenth (0° to 180°). An angle needs no scale. {{ui:Properties}} shows it under {{ui:Angle}}, and the list, CSV and BCF carry it.

An {{ui:Arc}} ({{key:O}}) on a calibrated sheet also shows its length along the curve in {{ui:Properties}}.

## Measure an area and its perimeter

1. Choose {{ui:Area}} ({{key:Q}}).
2. Click each corner of the room or region.
3. Finish with a double-click, {{key:Enter}} or a right-click (double-tap on touch). {{key:Backspace}} removes the last corner.

Result: a shaded outline with the area and "P" with the perimeter in the middle, for example "128.00 sq ft" and "P 48'-0"". Feet scales give square feet, inches square inches, meters square meters, millimeters square millimeters. An area needs at least three corners.

### Cut-outs

To leave out a column, a shaft or a courtyard, select the area and choose {{ui:Add a cut-out}} in {{ui:Properties}}. Click the cut-out's corners inside the area and finish as for an area. The cut-out stays open (unshaded), its area comes off, and its edges are added to the perimeter: a 16' × 8' room with a 4' × 4' cut-out reads "112.00 sq ft" and "P 64'-0"". Add as many as you need; they cannot overlap each other or cross the area's outline. {{ui:Remove cut-outs}} takes them all out, and {{key:Mod+Z}} undoes one.

## Count things

1. Choose {{ui:Count}} ({{key:U}}).
2. In {{ui:Properties}}, type a {{ui:Group name}}, for example "Floor drains". (It stays for next time.)
3. Click each item on the sheet.

Result: each click adds a numbered dot, the first dot carries a tag like "Floor drains: 7", and the status bar keeps the running total.

- **Start another group:** press {{key:Esc}} once (it clears the selection), change the {{ui:Group name}}, and click again.
- **Add to an existing group:** select the group first, then choose {{ui:Count}} and click.
- **Remove a mark:** with the group selected, hold {{key:Shift}} and click the dot. Removing the last dot removes the group. On a touch screen without a keyboard, use {{key:Mod+Z}} or {{ui:Undo}} instead.
- **Rename a group:** select it and edit {{ui:Group name}} in {{ui:Properties}}.

A count group belongs to one sheet. Counts on several sheets show as separate groups in the markups list.

## Change or remove a scale

Click the scale button in the status bar. The box shows the current scale; pick another, choose {{ui:Pick two points}}, or choose {{ui:Remove scale}}.

Lengths and areas already drawn are **re-measured** with the new scale at once. Undo brings the old scale back.

## Where the numbers go

- {{ui:Properties}} shows the selected measurement's values.
- The {{ui:Markups}} tab lists each value, and its CSV has a "Measurement" column. See [The markups list](topic:markups-list-and-export).
- The saved PDF keeps the scale on the page and writes lengths and areas as measurement comments, so other PDF programs that understand measurements can show them. See [What is saved in the PDF](topic:what-the-pdf-keeps).

For a full quantity takeoff with items, assemblies and prices, use TakeoffCraft: MarkupCraft measures for review, not for estimating.
