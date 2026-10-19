---
title: Change the page's own lines, pictures and text
summary: Move, resize, recolor or delete what the PDF itself draws, move a line's points, replace a picture, and change the words of a line of text.
section: tasks
order: 128
keywords: page content, base content, edit pdf, edit drawing, vector, path, shape, line, picture, image, replace image, text, words, font, points, nodes, move, resize, recolor, delete, content tool
---

Markups sit on top of a sheet. The {{ui:Content}} tool works on the sheet itself: the lines, pictures and lines of text the PDF draws. Your PDF on this computer is never changed: the edits are part of the copy you save.

## Pick what to change

1. Choose {{ui:Content}} in the {{ui:Select}} group, or press {{key:B}}.
2. Under {{ui:Pick}} in {{ui:Properties}}, turn {{ui:Shapes}}, {{ui:Pictures}} and {{ui:Text}} on or off. Only the kinds that are on can be picked, so you can pick the text of a busy drawing without catching its lines.
3. Click something to select it. Shift+click adds or removes. Drag a box over empty paper to select several: dragging to the right takes what is fully inside the box, dragging to the left takes what it touches.

A shape inside a clipped area is picked only where it shows.

## Move, resize, recolor, delete

- **Move:** drag a selected object, or press the arrow keys (hold Shift for bigger steps). Hold Shift while dragging to move straight across or straight up.
- **Resize:** drag one of the eight squares around the selection. It grows or shrinks from the opposite side. Hold Shift to keep the proportions.
- **Recolor:** for lines and shapes, set {{ui:Line color}}, {{ui:Fill color}} and {{ui:Line width (pt)}} in {{ui:Properties}}.
- **Delete:** press {{key:Delete}}, or choose {{ui:Delete from the page}}.
- **Undo:** each change is one step: {{key:Mod+Z}} takes it back, {{key:Mod+Y}} puts it back.

{{ui:Put back as it was}} undoes every change to the selected objects at once; {{ui:Put this page back as it was}} does it for the whole page.

## Move a line's points

Double-click a line or curve (or select it and choose {{ui:Edit points}}). Its points show as squares and its curve handles as circles. Drag a point or a handle; a point brings the handles next to it along, so the curve keeps its shape around it. Press {{key:Esc}}, or click away from the line, when you are done.

Rectangles have no points to drag: resize them with the squares around them.

## Replace a picture

Select a picture and choose {{ui:Replace picture…}}, then pick a PNG or JPEG file. The new picture fills the old one's place, keeping its own proportions.

## Change the words of a line of text

Double-click a line of text, type the new words in {{ui:Words}} and press {{key:Enter}}. The words are written in the line's own font and size, and the line keeps its length, so the text after it does not move.

:::note
Most PDFs carry only the letters they use from each font. When you type a letter the file's copy of the font does not have, MarkupCraft prints that letter in Helvetica and says so. {{ui:Properties}} shows which letters the font in the file has.
:::

Text is changed one line at a time; it does not flow into the next line.

## What MarkupCraft leaves as it is

- **Scanned pages** are one picture: you can move, resize, replace or delete the picture, but what is in it can't be edited.
- **Encrypted and signed PDFs:** changing the page would break a signature, so the {{ui:Content}} tool says so and changes nothing. Markups still work.
- **Clipping areas**, objects split between two parts of the page's content, and color blends that fill a whole area stay as they are; MarkupCraft says why when you try.
- **Words in a standard font the PDF does not describe** (such as a Times font with no letter widths in the file) can't be changed, because MarkupCraft could not keep the line's spacing. The line can still be moved.

## Put markups into the page

Lines, rectangles, ellipses, polylines, clouds and pen strokes you drew as markups can become part of the page itself: select them and choose {{ui:Put into the page}} in {{ui:Properties}}. Text, stamps, pictures and see-through colors stay markups.
