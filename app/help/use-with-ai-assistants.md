---
title: Use MarkupCraft with an AI assistant
summary: Let your own AI assistant or script list the markups of a set, add simple ones, set their status, reply and export the list: permissions, connecting through CadCraft Studio, and the activity log.
section: tasks
order: 135
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, markups, review, permissions, disconnect, activity
---

## What you will learn

How to let an AI assistant (or a script you wrote) work with MarkupCraft, and how to decide what it is allowed to touch.

MarkupCraft has **no AI of its own** and sends nothing anywhere. You bring the assistant: any program that speaks the Model Context Protocol (MCP). MarkupCraft only gives it tools, and you choose which.

## Turn it on

1. Open {{ui:Settings}} (the gear in the app bar, or {{key:Mod+,}}) and go to the {{ui:MarkupCraft}} tab.
2. Under {{ui:Assistants}}, tick **Let AI assistants and scripts use MarkupCraft**. It is off until you do.
3. Choose what it may do: **Read** is ticked to start with; tick **Edit**, **Save** or **Export** only when you need them.

Tools outside the permissions you ticked are not offered to the assistant, and if it asks for one anyway, MarkupCraft refuses and writes it in the activity log. Turning the switch off ends every connection at once; {{ui:Reset MarkupCraft settings}} turns it off too.

## Connect your assistant

Assistants connect through **CadCraft Studio** on your computer: Studio runs a small server only this computer can reach, protected by a token it makes each time it starts. In Studio, choose {{ui:Connect an assistant}} and copy the address and the token into your assistant (Studio shows the exact settings to paste). Never share the token.

:::note
A browser tab can't open a connection for an assistant: in the browser apps the switch has no effect until you use CadCraft Studio on your computer.
:::

## You stay in charge

- **Every change is one undo step**, labelled with the assistant's name for it (for example "Assistant: add cloudrect"). {{key:Mod+Z}} takes back the assistant's last change as a whole.
- **You know when one is connected.** A button in the app bar names the assistant while it is connected; click it to see what it may do, or to **Disconnect** it.
- **Activity.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} lists every call: when, which tool, done or refused. {{ui:Save the log}} keeps a copy.

## What an assistant can ask for

| Tool | Permission | What it does |
|---|---|---|
| `app_info`, `sheets_list` | Read | The sets open, their sheets and how many markups each has |
| `markups_list` | Read | The markups with type, sheet, text, comment, measurement, status, author and replies, filtered by sheet, status, type or author |
| `markup_add` | Edit | Adds a rectangle, cloud, ellipse, text box, note, line or arrow to a sheet |
| `markup_status`, `markup_reply` | Edit | Sets a markup's status (logged in its thread, signed by the assistant); adds a comment to a thread |
| `markups_export` | Export | The {{ui:Markups}} list's own CSV or BCF of what the list shows (its filters as you set them); in Studio it can write the file to a folder you allowed |

A markup an assistant adds names it as the author: the name the assistant program gives itself, followed by "(assistant)", or by "(assistant for <your name>)" once you have set your reviewer name. Its status changes and replies are signed the same way. Each is one undo step. Saving the marked-up PDF stays with you: use {{ui:Save}} as usual.

Without opening MarkupCraft, the CadCraft MCP server lists the markups of a PDF in a folder you name (`markups_list`), and `cadcraft info Set.pdf` prints them on the command line.

## If something doesn't work

- **The assistant sees no MarkupCraft tools:** check that the switch is on in this window, and that the window is open in Studio.
- **"needs the edit permission":** tick **Edit** under {{ui:Assistants}}, then ask again.
- **"401" or "token" errors:** the token changed (Studio restarted, or {{ui:New token}}). Copy the new one into the assistant's settings.

## See also

- [Recipes for AI assistants](common:assistants-recipes): worked examples, each with the tools it calls.
