---
title: Kopyahin ang bahagi ng pahina, o overlay
summary: Kopyahin ang bahagi ng sheet gamit ang rectangle, ellipse o freeform na hugis at i-paste sa ibang sheet, CadCraft, BimCraft, DetailCraft o anumang program, sa tamang laki nito; kopyahin bilang see-through na overlay, at i-line up ang larawan sa dalawang punto.
keywords: copy area, area, crop, snip, snapshot, clip, region, rectangle, ellipse, circle, freeform, lasso, picture, image, png, overlay, transparent, see-through, tint, opacity, paste, true size, scale, line up, align, two points, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Piliin ang {{ui:Iba pa}} › {{ui:Kopyahin ang bahagi ng pahina…}}. Bubukas ang bar sa ibabaw ng sheet.

## Piliin ang area

Piliin ang {{ui:Rectangle}}, {{ui:Ellipse}} o {{ui:Freeform}} sa bar, saka i-drag sa sheet:

- **Rectangle:** i-drag ang kahon sa paligid ng bahaging kokopyahin.
- **Ellipse:** i-drag ang kahon; ang ellipse sa loob nito ang kokopyahin, at see-through ang mga sulok sa labas nito.
- **Freeform:** guhitan ang paligid ng bahaging kokopyahin; kusang nagsasara ang hugis. See-through ang nasa labas nito.

I-drag muli para magsimula ulit, o pindutin ang {{key:Esc}}.

## Kopyahin

- {{ui:Isama ang markup}} ay kinokopya ang mga markup mo kasama ng pahina; alisin ang check para sa malinis na drawing.
- {{ui:Resolution}}: {{ui:Gaya sa screen}}, 72, 150 o 300 dpi. Pinananatiling mas mababa sa 3 MB ang larawan; kapag lalampas doon ang malaking area sa mataas na resolution, binababa ang resolution at sinasabi ng status line kung hanggang saan.
- Ang {{ui:Kopyahin}} (o {{key:Mod+C}} o {{key:Enter}}) ay naglalagay ng area sa clipboard bilang PNG na larawan, na nagpe-paste sa Word, email, ibang PDF program at drawing program.
- Ang {{ui:I-save bilang PNG}} ay nagda-download ng larawan sa halip, para sa program na nawawala ang see-through na bahagi kapag nag-paste.

## Kopyahin bilang overlay

Ginagawa ring see-through ng {{ui:Kopyahin bilang overlay}} ang puting papel, kaya mga linya na lang ang natitira. Binibigyan ng {{ui:Kulay}} ng isang kulay ang bawat linya (pula, asul, berde, orange o lila) para tumingkad ang overlay sa drawing sa ilalim nito; pinapanatili ng {{ui:Sariling kulay}} ang orihinal nilang kulay. Ang {{ui:Lakas}} ay kung gaano kalakas ang simula nito kapag na-paste sa aming mga app (50% maliban kung palitan mo).

## I-paste ito

**Sa MarkupCraft**, ang {{key:Mod+V}} sa anumang sheet ay nagpe-paste ng area bilang picture markup sa pointer. Pumapasok ito sa tamang laki nito:

- sa papel, gaya ng laki nito sa sheet na pinanggalingan;
- kapag may scale ang parehong sheet, parehong laki sa drawing: ang area mula sa 1:50 na sheet ay papasok sa kalahati ng laki nito sa papel sa 1:100 na sheet.

Nagsisimula ang overlay sa lakas nito; baguhin ito gamit ang {{ui:Opacity}} sa {{ui:Properties}}. Ilipat, i-resize, i-lock at burahin ito gaya ng ibang larawan, at lagyan ng check ang {{ui:I-flatten sa pahina kapag na-save}} para iguhit ito sa pahina.

**Sa CadCraft, BimCraft at DetailCraft**, alam din ng kopya ang laki nito, kaya ang paste ay pumapasok sa tunay na laki ng drawing kapag may scale ang sheet, o humihingi ng scale kapag wala. Tingnan ang help ng bawat app tungkol sa mga larawan.

## I-line up ang larawan sa dalawang punto

Piliin ang isang larawan o overlay, saka piliin ang {{ui:Iba pa}} › {{ui:I-line up ang picture gamit ang dalawang punto}}:

1. I-click ang isang punto sa larawan.
2. I-click kung saan dapat pumunta ang puntong iyon.
3. I-click ang pangalawang punto sa larawan, malayo sa una.
4. I-click kung saan dapat pumunta ang puntong iyon.

Ang larawan ay sinusukat, ginagalaw at iniikot para mapunta sa tinukoy mong lugar ang dalawang punto. Hihinto ang {{key:Esc}}; ina-undo ito ng {{key:Mod+Z}} sa isang hakbang.

## Mabuting malaman

- Dinadala ng kopya ang laki nito lamang sa pagitan ng aming mga app sa parehong site, at para lamang sa kopyang ginawa sa huling ilang oras; ang ibang program ay nakakakuha ng simpleng larawan.
- Kapag hindi pinapayagan ng browser ang MarkupCraft na gamitin ang system clipboard, sinasabi ito ng status line: gumagana pa rin ang paste sa aming mga app, at gumagana ang {{ui:I-save bilang PNG}} para sa ibang program.
- Ang line up ay umiikot ng larawan sa pamamagitan ng muling pagguhit ng pixel nito, kaya bahagyang mas malabo ang naikot na larawan kaysa sa orihinal.
