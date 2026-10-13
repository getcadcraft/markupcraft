---
title: Spaces
summary: Name the rooms or zones of a sheet, then filter, count and export markups by the space they are in.
section: tasks
order: 96
keywords: spaces, space, room, zone, wing, area of work, location, filter by room, group by room, export by space
---

A space is a named zone on a sheet: a room, a wing, a phase of work. Every markup inside it belongs to it, so you can list, filter and export the markups of one room.

## Make a space

1. Open {{ui:Spaces}}, at the top of the {{ui:Sheets}} panel, and choose {{ui:New space}}.
2. Click the corners of the zone, then double-click or press {{key:Enter}}.
3. Type its name, such as `Kitchen` or `Level 2 east`, and choose {{ui:Add space}}.

The space shows as a light green zone with a dashed outline and its name. The status bar says how many markups are in it.

## What is in a space

A markup is in the space that holds the middle of the markup. When spaces sit inside each other (a room in a wing), the smaller one wins. Move a markup and it moves between spaces. Select a space to change its outline with its handles, or its name under {{ui:Name}} in {{ui:Properties}}.

- {{ui:Properties}} shows a markup's space.
- The {{ui:Markups}} list filters by {{ui:Space}}, including {{ui:No space}}.
- CSV and XLSX exports get a {{ui:Space}} column once the set has spaces.
- The {{ui:Spaces}} panel lists every space with how many markups are in it; choose one to go to it.

## In the saved PDF

A space is a polygon comment with its name as its text, drawn with a dashed border, so other viewers show it too. It reopens in MarkupCraft as a space.
