---
title: Getting started with MarkupCraft
summary: Open a plan set, put your first cloud and callout on a sheet, and save a marked-up copy.
section: start
order: 10
keywords: start, first steps, open pdf, review, markup, redline, red pen, plan set, tutorial, quick start
---

MarkupCraft is for reviewing drawings: you open PDF plan sets, mark them up with clouds, callouts, text, stamps and measurements, track each comment's status, and save a copy of the PDF that any PDF viewer can show.

It runs in your web browser. Your PDFs are opened on your own computer and are **never uploaded**. Saving downloads a new copy; your original file is not changed.

:::note
MarkupCraft is in development. The help describes the build you are running. Things it does not do yet are listed in [What is not built yet](topic:not-built-yet).
:::

## What you need

- A recent Chrome, Edge, Firefox or Safari on a Mac, Windows or Linux computer, or Safari or Chrome on an iPad. See [Browsers and computers](common:browsers).
- One or more PDF files. A whole plan set can be one PDF or many.
- A mouse with a wheel is the most comfortable. A trackpad works, and so does a touch screen (see [Review on an iPad or touch screen](topic:review-on-a-tablet)).

## Your first review in ten steps

1. Open MarkupCraft in your browser. The middle of the screen says "Open a plan set".
2. Choose {{ui:Open PDFs}} (or {{ui:Open}} at the left end of the toolbar, or press {{key:Mod+O}}), pick one or more PDFs, and confirm.
   You can also drag PDFs from {{pick:mac=Finder|windows=File Explorer|linux=your file manager}} and drop them on the sheet area.
   The first time, the status bar at the bottom says "Loading the PDF reader…". Then every page becomes a sheet in the {{ui:Sheets}} list on the left, and the first sheet fills the middle.
3. Click a sheet in the list to show it. Turn the mouse wheel over the sheet to zoom in where the pointer is.
4. Choose {{ui:Cloud}} in the {{ui:Revise}} group of the toolbar (or press {{key:C}}).
   The first time you pick a drawing tool, MarkupCraft asks for your name. Type it and choose {{ui:Save}}. Every markup records it. (More in [Set your author name](topic:set-your-name).)
5. Drag a box around the area you want to flag. A red revision cloud appears and is selected.
6. Choose {{ui:Callout}} in the {{ui:Annotate}} group (or press {{key:K}}). Press on the thing you are pointing at, drag to where the text should go, and let go.
7. Type your comment in the box that appears. Click anywhere outside the box (or press {{key:Mod+Enter}}) to finish.
8. Press {{key:Esc}} twice: once to clear the selection, once to go back to the {{ui:Select}} tool. Click the cloud. The {{ui:Properties}} tab on the right shows who made it, when, and its {{ui:Status}}.
9. Choose {{ui:Save}} in the toolbar (or press {{key:Mod+S}}).
   Your browser downloads a copy named like "A-Plans (marked up).pdf". The status bar lists how many markups were written.
10. Open that copy in any PDF viewer to check: the cloud and the callout are there, as normal PDF comments with your name on them.

To keep working later, open the "(marked up)" copy in MarkupCraft. Your markups come back editable, with their statuses, replies and punch numbers.

## Online and offline

:::online
You are online. MarkupCraft loads its PDF reader the first time you open a PDF, and its PDF writer the first time you save. To work with no connection later (on a site visit, on a plane), choose {{ui:Save for offline}} in the bar at the top now and wait for "Offline ready". The copy includes the PDF reader and writer, so opening and saving PDFs then work offline. See [Working offline](common:offline).
:::

:::offline
You are offline. If the bar at the top says "Offline ready", MarkupCraft was saved for offline use in this browser and everything works: opening, marking up, measuring, saving. If it was not, use what has already loaded in this tab and don't reload the page until you are back online. See [Working offline](common:offline).
:::

## What the app remembers, and what it does not

- **Your markups live in the PDF you save.** Nothing is kept on a server. The app does not save the PDF on its own, but keeps a recovery copy in this browser until you do. Save before you close the tab; the browser asks first if you try to leave with unsaved markups (except on an iPad, see [Review on an iPad or touch screen](topic:review-on-a-tablet)).
- **Your name, your tool styles and your tool chest** stay in this browser on this computer. Another browser or computer starts fresh, and clearing the browser's site data removes them. See [What stays in this browser](topic:browser-storage).
- Cloud saving and review sessions shared between people are not available yet.

## Where to go next

- [A tour of the screen](topic:workspace)
- [Mark up a sheet](topic:mark-up-a-sheet)
- [Calibrate a sheet and measure](topic:calibrate-and-measure)
- [Coming from other markup software](topic:coming-from) if you already review drawings in another program.
