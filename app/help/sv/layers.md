---
title: Markeringslager
summary: Lägg markeringar på namngivna lager och visa, dölj eller lås sedan varje lager; andra PDF-läsare kan också växla dem.
keywords: lager, lager, dölj, visa, lås, gruppera markeringar, disciplin, maskin, el, valfritt innehåll, ocg, synlighet
from: 0fbb4c26
---

Lager grupperar markeringar, till exempel efter disciplin eller granskare. Dölj ett lager för att se ritningen under det, eller lås det så att dess markeringar inte flyttas av misstag.

## Skapa ett lager och rita på det

1. Öppna {{ui:Layers}}, överst i panelen {{ui:Sheets}}.
2. Välj {{ui:New layer}}, skriv ett namn som `Mechanical`, och välj {{ui:Add layer}}.
3. Det nya lagret blir aktuellt lager: varje markering du ritar från och med nu hamnar på det. Välj ett annat lagers namn, eller {{ui:No layer}}, för att ändra var nya markeringar hamnar.

För att flytta en markering till ett annat lager, markera den och välj lagret under {{ui:Layer}} i {{ui:Properties}}. {{ui:New layer…}} i slutet av listan skapar ett lager på stället. Flytten kan ångras med {{key:Mod+Z}}.

## Visa, dölj och lås

Varje lagers rad har två knappar:

- **Ögat** visar eller döljer lagret. Dolda markeringar ritas inte och kan inte väljas; de räknas fortfarande i listan {{ui:Markups}}.
- **Låset** behåller lagrets markeringar på bladet men hindrar att de väljs, flyttas eller tas bort.

Pennknappen byter namn på ett lager och tar med sig dess markeringar. Filtrera listan {{ui:Markups}} på {{ui:Layer}} för att se ett lagers markeringar.

## I den sparade PDF-filen

Varje lager blir ett PDF-lager (valfritt innehåll). Andra PDF-läsare visar lagren i sin lagerpanel och kan växla dem; ett lager du dolde startar dolt även där. Lager som ritningen redan hade, till exempel CAD-lager, förblir som de var. När du öppnar kopian igen i MarkupCraft kommer markeringarna tillbaka på sina lager, dolda och låsta som du lämnade dem.

## Bra att veta

- Att dölja och låsa är inga redigeringar: de ångras inte med {{key:Mod+Z}}, men de sparas med PDF-filen.
- Kopiera och klistra in behåller en markerings lager.
- En tillplattad kopia ritar varje markering i sidan, oavsett lager. Se [Spara en tillplattad kopia](topic:flatten).
