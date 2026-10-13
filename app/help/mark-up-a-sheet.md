---
title: Mark up a sheet
summary: Draw revision clouds, callouts, text boxes, arrows, shapes, pen strokes and highlights, and set their color and line before or after.
section: tasks
order: 30
keywords: markup, redline, cloud, revision cloud, callout, leader, text box, arrow, line, rectangle, ellipse, circle, polyline, polygon, pen, freehand, ink, highlighter, color, line width
---

Every tool works the same way: pick it, draw on the sheet, and the new markup is selected so you can see it in {{ui:Properties}}. The tool stays on for the next one. The status bar always says what the tool expects next.

:::touch
On a touch screen, use one finger to draw. A second finger cancels what the first one started and pinches or pans instead, so you never leave a mark by accident while zooming. More in [Review on an iPad or touch screen](topic:review-on-a-tablet).
:::

## Revision clouds

**Box cloud:** choose {{ui:Cloud}} ({{key:C}}) and drag a box. Hold {{key:Shift}} to make it square.

**Free cloud** around an odd shape:

1. Choose {{ui:Free cloud}} ({{key:Shift+C}}).
2. Click each corner of the area.
3. Finish with a double-click, {{key:Enter}} or a right-click. On touch, double-tap.

While you click points, {{key:Backspace}} removes the last point and {{key:Esc}} cancels the whole shape. Hold {{key:Shift}} to keep the next side at a multiple of 45°. A free cloud needs at least three points.

The scallops always bulge outward and their size follows the line width: a thicker line gives bigger arcs.

## Callouts

A callout is a text box with a leader pointing at something.

1. Choose {{ui:Callout}} ({{key:K}}).
2. Press on the point you want to call out and drag to where the text should go. Let go.
   If you just click without dragging, the box is placed up and to the right of the point.
3. Type the text. The box grows downward as the lines wrap.
4. Click anywhere outside the box, or press {{key:Mod+Enter}}, to finish. {{key:Esc}} throws the callout away.

If you finish without typing anything, no callout is added ("Nothing typed, so no callout was added.").

After it is drawn, select it to move the box, drag the leader's tip or its bend (the two diamond handles), or resize the box.

## Text boxes

1. Choose {{ui:Text}} ({{key:T}}).
2. Click where the text starts (you get a box of a sensible width), or drag a box of the size you want.
3. Type, then click outside or press {{key:Mod+Enter}}.

Text has no border by default. To give it one, raise {{ui:Line width}} in {{ui:Properties}}. To give it a background, tick {{ui:Fill}}.

To change the words later: with {{ui:Select}} on, double-click the text, or select it and press {{key:Enter}}, or choose {{ui:Edit on the sheet}} in {{ui:Properties}}. You can also edit it in the {{ui:Text}} box in {{ui:Properties}}.

## Arrows and lines

1. Choose {{ui:Arrow}} ({{key:A}}) or {{ui:Line}} ({{key:L}}).
2. Drag from the start to the end. Or click the start, let go, and click the end.
3. Hold {{key:Shift}} to keep it at a multiple of 45°.

The arrowhead is at the end where you finished.

## Rectangles, ellipses, polylines and polygons

- {{ui:Rectangle}} ({{key:R}}) and {{ui:Ellipse}} ({{key:E}}): drag a box. {{key:Shift}} makes a square or a circle. A click without dragging draws nothing and the status bar says to drag.
- {{ui:Polyline}} ({{key:Y}}) and {{ui:Polygon}} ({{key:G}}): click points; finish with a double-click, {{key:Enter}} or a right-click (double-tap on touch). {{key:Backspace}} removes the last point. A polygon closes itself and needs three points; a polyline needs two.

## Pen and highlighter

- {{ui:Pen}} ({{key:P}}): drag to draw freehand. The stroke is smoothed a little when you let go.
- {{ui:Highlight}} ({{key:I}}): the same, with a wide, see-through yellow stroke that tints the drawing under it instead of covering it.
- Hold {{key:Shift}} while you draw to get one straight stroke from where you started.

The highlighter is a freehand stroke. It does not snap to text in the PDF.

## Color, line and fill

Two ways:

- **Before drawing:** pick the tool. With nothing selected, {{ui:Properties}} shows "<tool> tool" settings: {{ui:Color}}, {{ui:Line width}} (in points), {{ui:Fill}} and {{ui:Fill opacity}} for closed shapes, {{ui:Opacity}}, and {{ui:Text size}} for text. Every new markup of that kind uses them, and MarkupCraft remembers them in this browser.
- **After drawing:** select one or more markups and change the same controls under "Style". With several selected, the change applies to all of them in one step.

The defaults: red markups, a yellow highlighter, blue measurements, orange counts, and stamps colored by meaning.

Saved looks you reuse every day belong in the tool chest: see [The tool chest](topic:tool-chest).

## Subject and comment

Every markup also has a {{ui:Subject}} (a short label such as "Cloud" or "RFI", shown in the markups list and in other PDF viewers) and a {{ui:Comment}} (longer notes). Fill them in {{ui:Properties}}. For a conversation about a markup, use replies: see [Statuses and replies](topic:statuses-and-replies).

## Next

- [Select, move and change markups](topic:select-and-edit)
- [Stamps and notes](topic:stamps-and-notes)
- [Every markup type](topic:markup-types)
