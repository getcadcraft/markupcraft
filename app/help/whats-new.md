---
title: What's new in 0.10
summary: Switching sheets in a 2,000-sheet set no longer causes long pauses, revision clouds and a drawing changelog for the tender and construction stage, and toolbar buttons that are real commands.
section: start
order: 5
keywords: whats new, what's new, 0.10, release notes, changelog, changes, version, new features, big sets, 2000 sheets, sheet list, switch sheets, pauses, revision cloud, drawing changelog, issues, revisions, tender, construction stage, pdf to model, toolbar buttons, commands, pro layouts, trackpad, swipe, tour
---

This is what changed in MarkupCraft 0.10, compared with 0.9. It is a small release for this app: big sets stay responsive, and the tender and construction stage gets revision clouds and a drawing changelog.

## New

- **Big sets stay responsive.** Switching sheets in a 2,000-sheet set no longer causes long pauses.
- **Revision clouds and a drawing changelog** for the tender and construction stage. See [Issues, revisions and the drawing changelog](topic:issues-and-revisions).
- **Plans from PDFs** become a starting model in BimCraft, marked unverified. See [Mark elements as checked or field-verified](app:bimcraft/verification) in BimCraft's help.

## Fixed

- Toolbar buttons that were not commands are commands now.
- Undo of an edit that made an id-keyed list left the key behind.

## In every app

- **Docking tool groups.** In a layout with a ribbon, tool rows or a toolbox, a group of tools can be docked as a palette beside the sheet. See [Dock a group of tools](common:dock-tool-groups).
- **Four Pro layouts** (Ribbon, Workbench, Review, Studio) in an optional Pro skin, in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}.
- **A two-finger trackpad swipe pans** the sheet.
- **Tour tips** have one {{ui:Next}} button; the X closes the tour.

## Said plainly

- A linked model or shop drawing in the changelog is a record, not loaded or overlaid.
- Docking tool groups has not been tried on two monitors.
- The new tools were checked by automated tests in a browser, not yet by a person on a real project.
- Languages beyond English are machine drafts, and some words new in 0.10 are still English only.

For the version before this one, see [What's new in 0.9](topic:whats-new-0-9).
