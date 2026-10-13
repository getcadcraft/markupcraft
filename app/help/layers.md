---
title: Markup layers
summary: Put markups on named layers, then show, hide or lock each layer; other PDF viewers can switch them too.
section: tasks
order: 95
keywords: layers, layer, hide, show, lock, group markups, discipline, mechanical, electrical, optional content, ocg, visibility
---

Layers group markups, for example by discipline or by reviewer. Hide a layer to see the drawing under it, or lock it so its markups cannot be moved by accident.

## Make a layer and draw on it

1. Open {{ui:Layers}}, at the top of the {{ui:Sheets}} panel.
2. Choose {{ui:New layer}}, type a name such as `Mechanical`, and choose {{ui:Add layer}}.
3. The new layer becomes the current layer: every markup you draw from now on goes on it. Choose another layer's name, or {{ui:No layer}}, to change where new markups go.

To move a markup to another layer, select it and pick the layer under {{ui:Layer}} in {{ui:Properties}}. {{ui:New layer…}} at the end of that list makes one on the spot. Moving can be undone with {{key:Mod+Z}}.

## Show, hide and lock

Each layer's row has two buttons:

- The **eye** shows or hides the layer. Hidden markups are not drawn and cannot be picked; they still count in the {{ui:Markups}} list.
- The **lock** keeps the layer's markups on the sheet but stops them from being picked, moved or deleted.

The pencil button renames a layer and moves its markups along. Filter the {{ui:Markups}} list by {{ui:Layer}} to see one layer's markups.

## In the saved PDF

Each layer becomes a PDF layer (optional content). Other PDF viewers list the layers in their layers panel and can switch them; a layer you hid starts hidden there too. Layers the drawing already had, such as CAD layers, stay as they were. When you reopen the copy in MarkupCraft, the markups come back on their layers, hidden and locked as you left them.

## Good to know

- Hiding and locking are not edits: they are not undone with {{key:Mod+Z}}, but they are saved with the PDF.
- Copy and paste keep a markup's layer.
- A flattened copy draws every markup into the page, whatever its layer. See [Save a flattened copy](topic:flatten).
