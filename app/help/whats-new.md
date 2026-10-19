---
title: What's new in 0.6
summary: Change the PDF's own lines, pictures and text with the Content tool, put markups into the page, replace pictures, change the words of a line, paste pictures from the clipboard, and calibrate with a calculation.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.6, version, new features, content tool, edit pdf, page content, base content, move, resize, recolor, delete, points, put into the page, replace picture, change text, words, font, paste picture, screenshot, clipboard, calibrate, calculation, arithmetic, pen, touch, indonesian
---

This is what changed in MarkupCraft 0.6, compared with 0.5. Until now MarkupCraft could only mark up a PDF; now it can also change what the PDF itself draws. This was asked for on Discord.

## New

### Change the page itself

- **The Content tool.** Choose {{ui:Content}} in the {{ui:Select}} group, or press {{key:B}}, to select the page's own lines, pictures and text (not markups). Pick by kind ({{ui:Shapes}}, {{ui:Pictures}}, {{ui:Text}}) with a click or a box, then move, resize, recolor, change the line width or delete. Each change is one undo step, and it is saved into the copy you download; your original PDF is never changed. See [Change the page's own lines, pictures and text](topic:page-content).
- **Move a line's points.** Double-click a line or curve to drag its points and curve handles. See [Move a line's points](topic:page-content#move-a-lines-points).
- **Put markups into the page.** Select line-work markups (lines, rectangles, ellipses, polylines, clouds, pen strokes) and choose {{ui:Put into the page}} to make them part of the page itself. See [Put markups into the page](topic:page-content#put-markups-into-the-page).
- **Replace a picture.** Select a picture on the page and choose {{ui:Replace picture…}} to put a PNG or JPEG in its place, keeping its proportions. See [Replace a picture](topic:page-content#replace-a-picture).
- **Change the words of a line of text.** Double-click a line of text and type the new words. They are written in the line's own font and size, and the line keeps its length. A letter the file's copy of the font lacks is printed in Helvetica, and MarkupCraft says which. See [Change the words of a line of text](topic:page-content#change-the-words-of-a-line-of-text).
- **Encrypted and signed PDFs** are left alone: the Content tool says why it changes nothing (editing would break a signature), and markups still work. See [What MarkupCraft leaves as it is](topic:page-content#what-markupcraft-leaves-as-it-is).
- **Checked on real files.** Saving after page edits was checked on 12 PDFs made by different programs: on the 10 that can be edited, every part you didn't touch stayed exactly the same, byte for byte. Three other PDF renderers showed no change outside the edited objects, and other PDF readers found the moved lines and the changed words in their new places.

### Pictures and measuring

- **Paste a picture.** Copy a picture or take a screenshot, then press {{key:Mod+V}} over the sheet: it lands at the pointer as a picture markup. {{ui:Edit}} › {{ui:More}} › {{ui:Paste a picture}} does the same. See [Paste a picture from the clipboard](topic:stamps-and-notes#paste-a-picture-from-the-clipboard).
- **Calibrate with a calculation.** The real length in the calibrate dialog can be a small calculation, such as `4+7/16`, `12'6" + 3/4"`, `(24'-0")/3` or `2*450mm`, and the dialog says where it can't read one. See [Calibrate from a known dimension](topic:calibrate-and-measure#calibrate-from-a-known-dimension).

## Changed

- **The toolbar** keeps one row at 1280 px wide with the new {{ui:Content}} button.
- **Languages.** Spanish (Mexico) has drafts for every new string.
- The replies summary reads the same in both of its forms ("Last: …").

## In every app

- **The toolbar can't get lost.** While full screen hides the bars, a small {{ui:Show bars}} tab stays at the top of the window. {{ui:Settings}} › {{ui:General}} › {{ui:Reset the layout}} puts the toolbar, panels, screen mode and menu style back to how the app starts (your interface size and panel text size stay). In CadCraft Studio, its own {{ui:Settings}} has {{ui:Reset the layout in every app}}. See [Where did my toolbar go?](common:lost-toolbar).
- **A menu on the toolbar.** Right-click the toolbar, or press and hold it, to arrange it, lock it so nothing moves by accident, or reset it. Ribbon menu styles collapse to their tab names: a tab opens its tools for one command; double-click a tab or use the pin to keep the ribbon open. See [The toolbar's own menu](common:lost-toolbar#the-toolbars-own-menu).
- **Interface size.** {{ui:Settings}} › {{ui:General}} › {{ui:Interface size}} makes the bars, toolbars, panels and dialogs 80 % to 140 % of normal, for this app only, so two apps side by side on one monitor both fit. The drawing keeps its own zoom. See [Everything is too big or too small](common:lost-toolbar#everything-is-too-big-or-too-small).
- **Pen and touch.** On a tablet or a touch-screen laptop with a pen, your palm is ignored while you draw, fingers can be left to moving the view, a two-finger tap undoes and a three-finger tap redoes, and the pen's side button and eraser end can undo or redo. {{ui:Settings}} › {{ui:General}} › {{ui:Pen and touch}}. See [Draw with a pen on a tablet](common:pen-and-touch).
- **Live sessions can grow past 20 people.** In CadCraft Studio, when more people knock than the usual 20, Studio tells you what to expect and you choose {{ui:Allow anyway}} for this session or {{ui:Keep it at 20}}. {{ui:Recent edits}} in the Live panel shows who changed what. See [Work together live](common:work-together-live#when-many-people-join).
- **Bahasa Indonesia** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}: a machine-made draft of every word, not yet reviewed by a native speaker. **Spanish (Mexico)** is still a draft too. Help topics are in English.
- **Installers are still not signed** (signing comes next, in 0.7), and CadCraft Studio is not in an app store yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. There is no iPad or iPhone build yet.
- **Fixed:** with the bars hidden, {{ui:Arrange the toolbar…}} in Settings was grayed out, and from the keyboard it lost its place after the first move.

## Not in this version yet

- Turning page objects to any angle.
- Drawing new shapes straight into the page: draw a markup, then choose {{ui:Put into the page}}.
- Changing text in a standard font the file gives no letter widths for (such as Times, Symbol or ZapfDingbats), changing a line's font or size, and text that flows over several lines.
- {{ui:Delete}} and {{ui:Select all}} in the {{ui:Edit}} group act on markups only; inside the Content tool the keys act on page objects.
- A saved copy with page edits has not been opened in Acrobat yet.
- Still from 0.5: undoing a page change (such as adding a blank page), reading text from scanned sheets, and live sessions beyond your own network.

Everything else is in [What is not built yet](topic:not-built-yet).
