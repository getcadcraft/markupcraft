---
title: Troubleshooting
summary: Messages MarkupCraft shows and what to do about them, plus fixes for things that seem not to work.
section: trouble
order: 10
keywords: problem, error, not working, help, message, wont open, cannot save, password, protected, measure refused, calibrate, offline, blank, slow, lost markups, question marks
---

Most problems are explained in the status bar at the bottom of the screen. Read it first.

## Opening files

**"MarkupCraft opens PDF files. "x" is not a PDF."**
You picked or dropped something else. Only PDFs open. Export drawings from your CAD program as PDF first.

**'"name" needs a password to open. Open an unprotected copy.'**
The PDF is password-protected. Ask the sender for an unprotected copy, or open it in a PDF program where you know the password and save a copy without the password.

**'"name" could not be read as a PDF (…)'**
The file is damaged or is not really a PDF (an incomplete download, an email attachment cut off). Download it again. If other PDF programs can open it, use their "save as" to make a clean copy and open that.

**"Some files did not open"**
When you open several at once, this box lists the files that failed and why. The others are open.

**"The PDF reader could not load: …"**
The PDF engine could not be fetched. Online: reload the page and try again; check that a firewall or content blocker is not blocking the site. Offline: MarkupCraft was not saved for offline use in this browser (the bar at the top does not say "Offline ready"). Get online, choose {{ui:Save for offline}}, and wait for "Offline ready". See [Working offline](common:offline).

**"Some annotations may show twice on screen" or "Extra annotation details could not be read"**
The file's existing comments are unusual. They are still opened as well as MarkupCraft can; check them before relying on them. Saving still works.

**The sheet has the wrong name, or "page 3"**
See [How sheets get their names](topic:open-a-plan-set#how-sheets-get-their-names). Scanned sheets have no text to read; use {{ui:Rename sheet}}.

**The same sheets appear twice**
The same file was opened twice. Choose {{ui:Close}} (save first if needed) and open the set again.

## Drawing and selecting

**Nothing happens when I click on the sheet**
Check which tool is pressed in the toolbar, and read the status bar. With {{ui:Rectangle}}, {{ui:Ellipse}} and {{ui:Cloud}}, a click without dragging draws nothing: drag. With {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} and {{ui:Area}}, points are being added: finish with a double-click or {{key:Enter}}.

**"A polygon needs at least 3 points." (or 2 for a polyline)**
Click more points before finishing.

**"Nothing typed, so no text was added."**
Text boxes and callouts are kept only when they have text. Draw it again and type before clicking away.

**"The two points are the same. Click two different points."**
For lines, arrows, lengths and calibration, the two ends must be apart. Drag, or click twice in different places.

**I cannot move or delete a markup; it has a gray dashed box**
It is a read-only comment that came with the file (for example a text highlight). MarkupCraft keeps it as it is: you can only reply to it. The status bar says "read-only markup(s) are kept as in the file".

**My keys type letters into a box instead of choosing tools**
The cursor is in a text box (a reply, a field in {{ui:Properties}}, the sheet search). Click on an empty part of the sheet area first, or press {{key:Esc}} if you are editing markup text.

**Space does not pan, or arrow keys do nothing**
You just clicked a toolbar button, so it still has the keyboard. Drag with the middle mouse button instead, or click the sheet once with {{ui:Select}} on, then try again. See also [Keyboard and mouse](topic:keyboard#when-a-key-does-nothing).

**A pinch on the touch screen left a mark**
A drag tool (pen, cloud, rectangle) started before the second finger arrived and finished before it was canceled. Press {{ui:Undo}}. Put both fingers down together when you mean to zoom.

## Measuring

**"Calibrate this sheet first: pick two points a known distance apart, or choose its scale. Then measure."**
Each sheet needs its own scale before {{ui:Length}} or {{ui:Area}}. MarkupCraft has switched to {{ui:Calibrate}}: click the two ends of a known dimension and type its length, or click the scale button in the status bar and pick a scale. See [Calibrate a sheet and measure](topic:calibrate-and-measure).

**'That is not a length MarkupCraft understands.'**
Type it like `24'-0"`, `12' 6 1/2"`, `7.2 m` or `900 mm`. See [Units, lengths and scales](topic:units-and-scales).

**Measurements are a bit off, or wildly off**
- A preset scale on a PDF that is not full size measures wrong. Calibrate from a long known dimension instead.
- A thousands separator was read as a decimal point: `1,200 mm` means 1.2 mm. Type `1200 mm`.
- Zoom in when you click the ends.
- The drawing may not be to scale ("NTS").

**"Select a count group first, then Shift+click a mark to remove it."**
Choose {{ui:Select}}, click the count group, then choose {{ui:Count}} again and {{key:Shift}}-click the dot.

## Saving

**"This PDF is protected (encrypted), so a marked-up copy cannot be written."**
The file forbids changes. Ask for an unprotected copy. Meanwhile you can still export the markups list as CSV or BCF.

**"The PDF writer could not load: …"**
Usually you are offline and the app was not saved for offline use (no "Offline ready" in the bar at the top). Your markups are still in the tab: keep it open, get online, and choose {{ui:Save}} again. Then choose {{ui:Save for offline}} so it works offline next time; the saved copy includes the PDF writer.

**"Could not save <file>"**
The box shows why. Your markups are still in the tab. Try again; if it repeats, export the CSV so the comments are not lost, and report the message.

**I chose Save but only one file arrived**
Your browser blocked the extra downloads. Look for a notice in the address bar and allow this site to download multiple files, then save again.

**I cannot find the saved file**
It went to your browser's downloads folder. Open the browser's downloads list (in Chrome and Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; in Firefox and Safari, the downloads button in the toolbar) to see where. See [Browsers and computers](common:browsers).

**Some text shows "?" in other PDF viewers**
Characters outside the Western European set print as "?" in the copy. The save message counts them. See [Save the marked-up PDF](topic:save-the-marked-up-pdf).

**The stamp shows tomorrow's (or yesterday's) date**
Stamp dates are in UTC. See [Stamps and sticky notes](topic:stamps-and-notes).

## Working offline

**The offline button says "Could not save"**
Some of the app's files did not download. Check the connection and click the button again; it counts "Saving N of M" until "Offline ready".

**The offline button says "Offline not available"**
This browser window cannot keep an offline copy: a private window, or a computer whose policy blocks it. Open MarkupCraft in a normal window and try again.

**Offline, the app is an older version**
The offline copy is the version you saved. When you are online, click "Offline ready" and choose "Save again (get the newest version)". To free the space, choose "Remove the offline copy". See [Working offline](common:offline).

**The help will not open**
Press {{key:F1}} (on a Mac, with **fn**), or choose {{ui:Help}} in the bar at the top. It works offline too.

## Lost things

**My markups are gone after closing or reloading the tab**
Open MarkupCraft again in the same browser: it offers the unsaved work back with "Recover your work?". Choose {{ui:Recover}} and save the PDF. Copies are kept up to 30 days; a private window, or clearing site data, leaves none. See [Recover your work](common:recover).

**My name, tool settings or tool chest are gone**
They are kept in this browser only and were cleared (site data cleared, a private window, another browser or computer, or Safari's cleanup of sites not visited for a while). Set the name again and import your exported chest. See [What stays in this browser](topic:browser-storage).

**"The tool chest could not be kept in this browser (storage is off or full). Export it to keep it."**
The browser refuses to store data for this site (private mode, storage blocked by a setting or policy, or full). Export the chest after changing it, and import it next time.

## Display and speed

**The sheet looks blurry for a moment**
MarkupCraft shows a quick, rough rendering while you zoom or pan, and redraws it sharp a moment after you stop.

**Everything is slow with a big set**
Close other heavy tabs, open fewer files at once, and avoid zooming to the maximum on huge sheets. See [Work with several files at once](topic:several-files#big-sets).

**The sheet is dark with light lines**
You are in the {{ui:Model}} theme. Choose {{ui:Paper}} in the bar at the top for dark lines on white. Your markups and the saved PDF are not affected.
