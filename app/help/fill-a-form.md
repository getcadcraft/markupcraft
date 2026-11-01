---
title: Fill in a PDF form
summary: Type in a PDF's form fields, tick its boxes and pick from its lists; the values are saved into the form itself.
section: tasks
order: 33
keywords: form, forms, fillable, fill in, fill out, acroform, field, fields, text field, check box, checkbox, tick, radio button, drop-down, dropdown, list, permit, application, inspection form, submittal form, sign off
---

Many PDFs come with a form: permit applications, inspection checklists, submittal cover sheets. MarkupCraft shows the form's fields and their values, and lets you fill them in. The values go into the PDF's own fields, so Acrobat and every other PDF reader show and keep them.

## Fill in the form

1. Open the PDF. When it has a form, the status bar says how many fields it has.
2. Choose {{ui:Fill form}} in the toolbar (or press {{key:F}}). Every field on the page gets a box you can type in.
3. Click a field and type. Tick boxes, pick radio buttons, choose from drop-downs and lists. {{key:Tab}} goes to the next field.
4. To move the sheet while you fill, drag anywhere outside the fields.
5. Press {{key:Esc}} or pick another tool when you are done. What you typed stays on the sheet.

With {{ui:Select}}, a double click on a field turns {{ui:Fill form}} on and puts you in that field.

## Save the filled-in form

Choose {{ui:Save}}. The copy you download has your values in its fields, with your markups beside them. The status bar says how many fields were filled.

To hand in a form nobody can change, choose {{ui:Pages}}, then {{ui:Save a flattened copy…}}: the values become part of the page. Printing does the same.

## Good to know

- A field the PDF locks (read-only) can't be changed. Its box is grey.
- Text up to the field's own length limit is kept; extra characters are not typed.
- Some forms come without a drawn picture of their boxes and buttons, and other programs show them blank. MarkupCraft draws them, and when you save it adds the picture, so they show everywhere.
- Undo in a field is the field's own: press {{key:Ctrl+Z}} while you are typing in it. The markup undo doesn't undo form values.
- If your browser closes, the values you typed come back with the rest of your unsaved work.
- Values typed in letters the standard PDF font can't write (for example Chinese) are saved, and the PDF asks each reader to draw them itself.
- Signature fields and push buttons are not filled in here. To sign, use {{ui:Stamp}} and your signature.
- Values typed into a form are not shared in a live session yet.
