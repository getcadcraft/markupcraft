---
title: Kopier et område av siden, eller et overlegg
summary: Kopier en del av et ark med et rektangel, en ellipse eller en frihåndsform og lim det inn i et annet ark, i CadCraft, BimCraft, DetailCraft eller et hvilket som helst program, i riktig størrelse. Kopier det som et gjennomsiktig overlegg, og rett inn et bilde med to punkter.
keywords: kopier område, område, beskjær, klipp, øyeblikksbilde, utklipp, region, rektangel, ellipse, sirkel, frihånd, lasso, bilde, bilde, png, overlegg, gjennomsiktig, gjennomsyn, toning, opasitet, lim inn, virkelig størrelse, målestokk, rett inn, justere, to punkter, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Velg {{ui:Mer}} › {{ui:Kopier et område av siden…}}. En linje åpnes over arket.

## Velg området

Velg {{ui:Rektangel}}, {{ui:Ellipse}} eller {{ui:Frihånd}} i linjen, og dra på arket:

- **Rektangel:** dra en boks rundt delen du vil kopiere.
- **Ellipse:** dra en boks. Ellipsen inni den kopieres, og hjørnene utenfor den er gjennomsiktige.
- **Frihånd:** tegn rundt delen du vil kopiere. Formen lukker seg selv. Utenfor den er det gjennomsiktig.

Dra igjen for å begynne på nytt, eller trykk {{key:Esc}}.

## Kopier

- {{ui:Ta med markeringer}} kopierer markeringene dine sammen med siden. Fjern haken for den rene tegningen.
- {{ui:Oppløsning}}: {{ui:Som på skjermen}}, 72, 150 eller 300 dpi. Bildet holdes under 3 MB. Når et stort område i høy oppløsning ville gått over det, senkes oppløsningen, og statuslinjen sier til hva.
- {{ui:Kopier}} (eller {{key:Mod+C}} eller {{key:Enter}}) legger området på utklippstavlen som et PNG-bilde. Det kan limes inn i Word, e-post, andre PDF-programmer og tegneprogrammer.
- {{ui:Lagre som PNG}} laster ned bildet i stedet, for et program som fjerner de gjennomsiktige delene ved liming.

## Kopier som overlegg

{{ui:Kopier som overlegg}} gjør også det hvite papiret gjennomsiktig, slik at bare linjene er igjen. {{ui:Farge}} gir hver linje én farge (rød, blå, grønn, oransje eller lilla), slik at overlegget skiller seg ut fra tegningen under. {{ui:Egne farger}} beholder dem. {{ui:Styrke}} er hvor sterkt det starter når det limes inn i appene våre (50% med mindre du endrer det).

## Lim det inn

**I MarkupCraft** limer {{key:Mod+V}} på et hvilket som helst ark inn området som et bildemarkering ved pekeren. Det kommer inn i sin størrelse:

- på papir, samme størrelse som det hadde på arket det kom fra;
- når begge ark har en målestokk, samme størrelse i tegningen: et område fra et ark i 1:50 kommer inn i halv papirstørrelse på et ark i 1:100.

Et overlegg starter med sin styrke. Endre den med {{ui:Opasitet}} i {{ui:Egenskaper}}. Flytt, endre størrelse på, lås og slett det som et hvilket som helst bilde, og merk av {{ui:Flat ut i siden ved lagring}} for å tegne det inn i siden.

**I CadCraft, BimCraft og DetailCraft** har kopien også størrelsen sin. En liming kommer da inn i tegningens virkelige størrelse når arket hadde en målestokk, eller ber om en når det ikke hadde det. Se hver apps hjelp om bilder.

## Rett inn et bilde med to punkter

Velg ett bilde eller overlegg, og velg {{ui:Mer}} › {{ui:Rett inn et bilde med to punkter}}:

1. Klikk et punkt på bildet.
2. Klikk der det punktet skal.
3. Klikk et andre punkt på bildet, langt fra det første.
4. Klikk der det punktet skal.

Bildet skaleres, flyttes og roteres slik at begge punktene havner der du klikket. {{key:Esc}} stopper, og {{key:Mod+Z}} angrer det i ett trinn.

## Greit å vite

- Størrelsen følger kopien bare mellom appene våre på samme nettsted, og bare for en kopi laget de siste timene. Et annet program får et vanlig bilde.
- Hvis nettleseren ikke lar MarkupCraft bruke systemets utklippstavle, sier statuslinjen det. Liming i appene våre virker fortsatt, og {{ui:Lagre som PNG}} virker for andre programmer.
- Å rette inn snur bildet ved å tegne pikslene på nytt, så et snudd bilde er litt mykere enn originalen.
