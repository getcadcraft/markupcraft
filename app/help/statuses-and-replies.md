---
title: Statuses and replies
summary: Mark each comment Open, Accepted, Rejected or Completed, discuss it in a reply thread, and pass the thread on in the PDF.
section: tasks
order: 70
keywords: status, review status, accepted, rejected, completed, open, reply, replies, thread, comment, conversation, discussion, respond, back-check
---

Every markup has a **status** and a **reply thread**. Together they carry a review round: the reviewer marks up, the designer replies and sets statuses, the reviewer back-checks.

## Set a status

1. Select the markup (or several).
2. In {{ui:Properties}}, pick a {{ui:Status}}: Open, Accepted, Rejected or Completed.

Result: the status shows as a chip in the {{ui:Markups}} list, and a line is added to the thread: "Status set to Accepted by Ana Ruiz." With several markups selected, the status box says "Mixed" until you pick one, and then it changes all of them.

New markups start as Open. Pasted or duplicated markups also start as Open.

## Reply

1. Select the markup.
2. In {{ui:Properties}}, find "Replies" below the style settings.
3. Type in {{ui:Write a reply}}.
4. Choose {{ui:Reply}}, or press {{key:Mod+Enter}}.

Result: the reply is listed with your name and the date and time, and the heading counts it: "Replies (3)". The {{ui:Markups}} list shows a reply count on the row.

- Status changes are listed in the same thread and marked as status entries, so the history reads in order.
- If you start typing a reply and click something else, your draft is kept until you come back to that markup (until you close the set).
- If your name is not set, MarkupCraft asks for it before sending.
- You can reply to read-only comments that came with the file, too.

:::note
A reply cannot be edited or deleted once sent. Right after sending, {{key:Mod+Z}} takes it back; after that, add a new reply that corrects it.
:::

## Add a photo

Below the reply box, {{ui:Add photo}} adds a picture to the thread: a PNG or JPEG from this computer, or, on a tablet or phone, a photo you take there and then. Whatever you typed in the reply box becomes its caption. The thread shows a thumbnail; choose it to see the photo full size. Large photos are scaled down to 1600 pixels on their longer side.

In the saved PDF each photo also travels as an attached file beside the markup (a paperclip), so other PDF viewers can open it.

## Passing the review on

There is no shared online session yet: the review travels in the PDF.

1. Choose {{ui:Save}}. The copy holds every markup with its status and its replies.
2. Send that copy the way you send drawings today.
3. The next person opens it in MarkupCraft, replies, sets statuses and saves again.

Other PDF programs see the replies as replies to the comment, and the statuses as review states (Accepted, Rejected, Completed; Open shows as no state). Their own replies and review states come back into MarkupCraft when you open the file: the newest status wins.

If two people mark up separate copies at the same time, there is no merge. You can open both copies in one set and copy a few markups across with {{key:Mod+C}} and {{key:Mod+V}}, but a pasted copy is a new markup: it carries your name, a new date and the status Open, and lands slightly offset. Agree who marks up which sheets to avoid this.

## Find what is still open

In the {{ui:Markups}} tab, set {{ui:Status}} to "Open" to list only open items, and {{ui:Author}} to one reviewer. See [The markups list](topic:markups-list-and-export).

Status (Open, Accepted, Rejected, Completed) is about the comment. A punch item has its own separate status for the work in the field; see [Make a punch list](topic:punch-list).
