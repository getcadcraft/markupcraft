---
title: Mag-slip-sheet ng binagong set
summary: Buksan ang bagong issue ng plan set sa tabi ng luma at ilipat ang bawat bukas na markup sa sheet na may parehong numero.
keywords: slip sheet, slip-sheet, binagong set, bagong issue, revision, supersede, superseded, carry forward, replace sheets, reissue, addendum, bulletin
from: e15163a0
---

Kapag may dumating na bagong issue ng mga drawing, ililipat ng slip-sheeting ang review mo rito: bawat bagong sheet ay kukuha ng markups ng lumang sheet na may parehong numero, at ang lumang sheet ay lalagyan ng stamp na "Superseded".

## Mag-slip-sheet

1. Buksan ang kasalukuyang set, kasama ang markups mo.
2. Piliin ang {{ui:Pages}}, saka {{ui:Slip-sheet a revised set…}}, at piliin ang mga bagong PDF. Magbubukas ang mga ito sa tabi ng lumang set.
3. Inililista ng dialog ang bawat bagong sheet at ang lumang sheet na pinapalitan nito. Alisin ang tsek sa isang row para manatili sa dating lugar ang markups ng sheet na iyon. Ang mga sheet na may bagong numero ay walang dadalhing markup.
4. Piliin kung iiwan ang mga sarado nang markups (Tinanggap, Tinanggihan, Tapos) sa mga lumang sheet, at kung lalagyan ng stamp ang mga lumang sheet.
5. Piliin ang {{ui:Carry markups forward}}.

Resulta: lalabas ang markups sa mga bagong sheet sa parehong lugar, kasama ang kanilang replies, statuses at authors. Lilipat ang punch item sa bagong sheet at mananatili ang numero nito. Itinatago ng mga lumang sheet ang markups nila bilang talaan, sa ilalim ng pulang "Superseded" stamp. Ibinubuod ng status bar kung ano ang nailipat.

Ang {{ui:Just open the files}} ay nagbubukas ng bagong set nang hindi nagdadala ng kahit ano, halimbawa para mag-compare muna. Tingnan ang [Ihambing ang dalawang revision](topic:compare-revisions).

## Paano itinutugma ang mga sheet

- **Ayon sa sheet number**, gaya ng ipinapakita ng listahan ng sheets: numerong tinype mo gamit ang {{ui:Rename sheet}}, ang page label ng PDF, o ang title block. Hindi mahalaga ang letter case, espasyo, tuldok at gitling: ang "A-101" ay tumutugma sa "a101".
- Kung may sheet na may ganoong numero ang dalawang bukas na file, ang pinakabago ang mapapalitan, para maka-slip-sheet ka ng issue pagkatapos ng issue.
- **Ang mga na-scan na set** ay walang numerong mababasa. Kapag walang numero ang bagong file, ang mga pahina nito ay itutugma ayon sa pagkakasunod ng pahina sa isang bukas na file na may parehong bilang ng pahina. Suriin ang mga row na iyon bago magdala.

## Dapat malaman

- Maaaring bawiin ng isang {{key:Mod+Z}} ang buong slip-sheet: ang mga kopya, ang stamps at ang mga inilipat na punch item. Mananatiling bukas ang mga bagong file.
- Kapag iba ang laki ng bagong sheet, ina-adjust ang markups kasabay ng pahina, at sinasabi ng status bar kung ilan ang dapat suriin.
- Kasama ang scale ng lumang sheet kapag pareho ang laki ng bagong sheet at wala itong scale.
- Ang comments na ginawa ng ibang programa ay nananatili sa mga lumang sheet: read-only ang mga ito dito.
- I-save ang mga bagong file para mapanatili ang dinalang markups. Tingnan ang [I-save ang naka-markup na PDF](topic:save-the-marked-up-pdf).
