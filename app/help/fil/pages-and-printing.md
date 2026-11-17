---
title: I-print, at baguhin ang mga pahina ng PDF
summary: I-print ang mga sheet kasama ang kanilang markup, at mag-rotate, ilipat, mag-insert, burahin o mag-extract ng mga pahina ng bukas na PDF.
keywords: i-print, printer, papel, pahina, page, rotate, ikot, ayusin muli, ilipat ang pahina, insert, magdagdag ng pahina, blangkong pahina, burahin ang pahina, tanggalin ang pahina, extract, hatiin, operasyon sa pahina
from: 81832d9b
---

Ang menu na {{ui:Pages}} sa grupong {{ui:File}} ay gumagana sa PDF na kinabibilangan ng bukas na sheet. Hindi kailanman nababago ang PDF mo sa computer na ito: ang mga pagbabago ay bahagi ng kopyang sine-save mo.

## I-print

1. Pindutin ang {{key:Mod+P}}, o piliin ang {{ui:Pages}}, saka {{ui:Print…}}.
2. Kapag may higit sa isang sheet na bukas, piliin kung ano ang ipi-print: {{ui:This sheet}}, bawat pahina ng file na ito, ang buong set, o ang mga pahinang tina-type mo (gaya ng `1-3, 5`).
3. Piliin ang {{ui:Print}}. Bubukas ang printer dialog ng browser mo: piliin doon ang printer, papel at scale.

Ipinapakita ang mga markup gaya ng hitsura nila sa sheet: iginuguhit ang mga ito sa mga pahina ng kopyang ipinapadala sa printer. Ang mga komentong ginawa ng ibang program ay nagpi-print ayon sa sinasabi ng PDF nila.

:::safari firefox
Kung hindi kayang mag-print ng browser mo mula sa loob ng pahina, magbubukas ang mga sheet bilang PDF sa bagong tab. Mag-print mula roon.
:::

## I-turn ang pahina

Piliin ang {{ui:Pages}}, saka {{ui:Rotate page clockwise}} o {{ui:Rotate page counterclockwise}}. Umiikot ng isang quarter turn ang bukas na sheet. Nananatili sa dating puwesto sa drawing ang mga markup nito, at umiikot kasama ng pahina ang tekstong tina-type mo para manatili itong tuwid na mabasa.

## Ilipat ang pahina

Piliin ang {{ui:Pages}}, saka {{ui:Move page earlier}} o {{ui:Move page later}}. Nagpapalitan ng puwesto ang bukas na sheet at ang katabi nito sa sarili nitong PDF. Kasama nitong gumagalaw ang mga markup, scale at sheet number nito.

## Mag-insert ng pahina

- {{ui:Insert pages from a PDF…}} ay naglalagay ng bawat pahina ng ibang PDF pagkatapos ng bukas na sheet.
- {{ui:Insert a blank page}} ay nagdadagdag ng walang laman na pahinang kapareho ng laki ng bukas na sheet, pagkatapos nito, para sa mga sketch at note. Sa set na ginawa gamit ang {{ui:New}}, kasama rin nito ang grid ng set.
- Sa set na ginawa gamit ang {{ui:New}}, ang {{ui:Add a blank page}} sa ilalim ng listahan ng {{ui:Sheets}} ay nagdadagdag ng isa pang pahinang tulad ng iba sa dulo. Tingnan ang [Start with blank pages](topic:open-a-plan-set#start-with-blank-pages).

Ang mga pahinang ininsert ay nakakakuha ng page number nila bilang label hanggang palitan mo ang pangalan nila. Tingnan ang [Rename a sheet](topic:open-a-plan-set#rename-a-sheet).

## Burahin ang mga pahina

1. Piliin ang {{ui:Pages}}, saka {{ui:Delete pages…}}.
2. I-type ang mga page number ng PDF na ito, gaya ng `3` o `2-4`. Nakalagay na ang pahina ng bukas na sheet.
3. Piliin ang {{ui:Delete pages}}. Kung may markup ang mga pahinang iyon, sasabihin ng MarkupCraft kung ilan at magtatanong muli.

Hindi bababa sa isang pahina ang natitira sa PDF. Para alisin ang buong file, isara ang set at buksan ang mga file na kailangan mo pa.

## I-extract ang mga pahina

Piliin ang {{ui:Pages}}, saka {{ui:Extract pages…}}, at i-type ang mga pahina. Dina-download ang mga ito bilang bagong PDF na pinangalanang "<file> (pages 1-3).pdf", kasama ang mga markup nila bilang komentong maaari mo pang i-edit. Nananatili sa dati ang bukas na file.

## Mabuting malaman

- **Humihinto ang undo sa pagbabago ng pahina.** Binabawi ng {{key:Mod+Z}} ang mga markup na iginuhit pagkatapos nito, pero hindi ang mismong pagbabago ng pahina o anumang nauna rito. Isara nang hindi nagse-save para magsimula muli sa orihinal mong PDF.
- Binibilang ang page number sa mga pahina ng isang PDF, hindi ng buong set. Ang paglilipat ng pahina ay nananatili sa sarili nitong file.
- Ang mga nabagong pahina ay hindi pa nase-save na gawa: dina-download ng {{ui:Save}} ang inayos na kopya, at magtatanong muna kapag aalis ka.
