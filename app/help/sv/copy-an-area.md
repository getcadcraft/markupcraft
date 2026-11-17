---
title: Kopiera ett område på sidan, eller ett överlägg
summary: Kopiera en del av ett blad med en rektangel, en ellips eller en frihandsform och klistra in den i ett annat blad, CadCraft, BimCraft, DetailCraft eller valfritt program, i sin storlek; kopiera den som ett genomskinligt överlägg och rikta in en bild med två punkter.
keywords: kopiera område, område, beskär, klipp, ögonblicksbild, urklipp, region, rektangel, ellips, cirkel, frihand, lasso, bild, png, överlägg, transparent, genomskinlig, tona, opacitet, klistra in, verklig storlek, skala, rikta in, passa in, två punkter, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Välj {{ui:Mer}} › {{ui:Kopiera ett område på sidan…}}. En rad öppnas över bladet.

## Välj området

Välj {{ui:Rektangel}}, {{ui:Ellips}} eller {{ui:Frihand}} i raden och dra sedan på bladet:

- **Rektangel:** dra en ruta runt den del som ska kopieras.
- **Ellips:** dra en ruta; ellipsen inuti den kopieras och hörnen utanför den är genomskinliga.
- **Frihand:** rita runt den del som ska kopieras; formen sluter sig själv. Utanför den är allt genomskinligt.

Dra igen för att börja om, eller tryck på {{key:Esc}}.

## Kopiera

- {{ui:Inkludera markeringar}} kopierar dina markeringar med sidan; avmarkera den för den rena ritningen.
- {{ui:Upplösning}}: {{ui:Som på skärmen}}, 72, 150 eller 300 dpi. Bilden hålls under 3 MB; när ett stort område i hög upplösning skulle överskrida det sänks upplösningen, och statusraden säger till vilken.
- {{ui:Kopiera}} (eller {{key:Mod+C}} eller {{key:Enter}}) lägger området på urklipp som en PNG-bild, som klistras in i Word, e-post, andra PDF-program och ritningsprogram.
- {{ui:Spara som PNG}} laddar ner bilden i stället, för ett program som tappar de genomskinliga delarna vid inklistring.

## Kopiera som överlägg

{{ui:Kopiera som överlägg}} gör dessutom det vita papperet genomskinligt, så att bara linjerna finns kvar. {{ui:Färg}} ger varje linje en färg (röd, blå, grön, orange eller lila) så att överlägget syns mot ritningen under; {{ui:Egna färger}} behåller dem. {{ui:Styrka}} är hur starkt det börjar när det klistras in i våra appar (50 % om du inte ändrar det).

## Klistra in den

**I MarkupCraft** klistrar {{key:Mod+V}} in området på valfritt blad som en bildmarkering vid pekaren. Den kommer in i sin storlek:

- på papper, samma storlek som den hade på bladet den kom från;
- när båda bladen har en skala, samma storlek i ritningen: ett område från ett 1:50-blad kommer in i halv pappersstorlek på ett 1:100-blad.

Ett överlägg startar med sin styrka; ändra den med {{ui:Opacitet}} i {{ui:Egenskaper}}. Flytta, ändra storlek, lås och ta bort det som vilken bild som helst, och markera {{ui:Platta till i sidan vid sparande}} för att rita in det i sidan.

**I CadCraft, BimCraft och DetailCraft** vet kopian också sin storlek, så en inklistring kommer in i ritningens verkliga storlek när bladet hade en skala, eller frågar efter en när det inte hade det. Se varje apps hjälp om bilder.

## Rikta in en bild med två punkter

Markera en bild eller ett överlägg och välj sedan {{ui:Mer}} › {{ui:Rikta in en bild med två punkter}}:

1. Klicka på en punkt på bilden.
2. Klicka där den punkten ska hamna.
3. Klicka på en andra punkt på bilden, långt från den första.
4. Klicka där den punkten ska hamna.

Bilden skalas, flyttas och vrids så att båda punkterna hamnar där du klickade. {{key:Esc}} stoppar; {{key:Mod+Z}} ångrar det i ett steg.

## Bra att veta

- Storleken följer med kopian bara mellan våra appar på samma webbplats, och bara för en kopia gjord under de senaste timmarna; ett annat program får en vanlig bild.
- Om webbläsaren inte låter MarkupCraft använda systemets urklipp säger statusraden det: inklistring i våra appar fungerar fortfarande, och {{ui:Spara som PNG}} fungerar för andra program.
- Rikta in vrider bilden genom att rita om dess pixlar, så en vriden bild blir något mjukare än originalet.
