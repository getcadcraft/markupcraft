---
title: Ändra sidans egna linjer, bilder och text
summary: Flytta, ändra storlek, färgsätt om eller ta bort det som PDF:en själv ritar, flytta en linjes punkter, byt ut en bild och ändra orden i en textrad.
keywords: sidans innehåll, grundinnehåll, redigera pdf, redigera ritning, vektor, bana, figur, linje, bild, ersätt bild, text, ord, typsnitt, punkter, noder, flytta, ändra storlek, färg, ta bort, innehållsverktyg
from: 471d457e
---

Markeringar ligger ovanpå ett blad. Verktyget {{ui:Innehåll}} arbetar på själva bladet: linjerna, bilderna och textraderna som PDF:en ritar. Din PDF på den här datorn ändras aldrig: ändringarna är en del av kopian du sparar.

## Välj vad som ska ändras

1. Välj {{ui:Innehåll}} i gruppen {{ui:Markera}}, eller tryck på {{key:B}}.
2. Under {{ui:Välj}} i {{ui:Egenskaper}} slår du på eller av {{ui:Figurer}}, {{ui:Bilder}} och {{ui:Text}}. Bara de typer som är på kan väljas, så att du kan välja texten i en tät ritning utan att fånga dess linjer.
3. Klicka på något för att markera det. Shift+klicka lägger till eller tar bort. Dra en ruta över tomt papper för att markera flera: dra åt höger tar det som ligger helt inuti rutan, dra åt vänster tar det som rutan rör.

En figur inuti ett beskuret område väljs bara där den syns.

## Flytta, ändra storlek, färgsätt om, ta bort

- **Flytta:** dra ett markerat objekt, eller tryck på piltangenterna (håll ned Shift för större steg). Håll ned Shift medan du drar för att flytta rakt åt sidan eller rakt upp.
- **Ändra storlek:** dra i en av de åtta rutorna runt markeringen. Den växer eller krymper från motsatt sida. Håll ned Shift för att behålla proportionerna.
- **Färgsätt om:** för linjer och figurer, ställ in {{ui:Linjefärg}}, {{ui:Fyllningsfärg}} och {{ui:Linjetjocklek (pt)}} i {{ui:Egenskaper}}.
- **Ta bort:** tryck på {{key:Delete}}, eller välj {{ui:Ta bort från sidan}}.
- **Ångra:** varje ändring är ett steg: {{key:Mod+Z}} tar tillbaka den, {{key:Mod+Y}} lägger tillbaka den.

{{ui:Återställ som det var}} ångrar varje ändring på de markerade objekten på en gång; {{ui:Återställ den här sidan som den var}} gör det för hela sidan.

## Kopiera, klipp ut och klistra in sidinnehåll

Markera linjer, bilder eller text med verktyget {{ui:Innehåll}}, och sedan:

- {{key:Mod+C}} kopierar, {{key:Mod+X}} klipper ut (kopierar och tar bort dem från sidan), {{key:Mod+D}} lägger en kopia bredvid dem.
- {{key:Mod+V}} klistrar in som sidinnehåll, bredvid originalet eller där pekaren är (som [Inställningar](topic:settings) beskriver); {{key:Mod+Shift+V}} klistrar in på exakt samma plats. Klistra in på en annan sida, i en annan öppen PDF eller i en annan MarkupCraft-flik i den här webbläsaren.
- Menyn {{ui:Redigera}} och högerklicksmenyn har samma kommandon.

Ett inklistrat stycke behåller linjer som linjer, ord som ord i sitt eget typsnitt och bilder som bilder. Det är en enda bit: flytta den, ändra storlek på den med dess rutor, ta bort den, eller {{key:Mod+Z}} bort den. Den blir en del av sidan i kopian du sparar. Det du kopierade senast, markeringar eller sidinnehåll, är vad {{key:Mod+V}} klistrar in.

Det som kopian innehåller beskärs till rutan runt markeringen: något som MarkupCraft inte kan ta ur kopian (se nedan) och som ligger inuti den rutan följer med.

## Flytta en linjes punkter

Dubbelklicka på en linje eller kurva (eller markera den och välj {{ui:Redigera punkter}}). Dess punkter visas som rutor och dess kurvhandtag som cirklar. Dra en punkt eller ett handtag; en punkt tar med sig handtagen bredvid den, så kurvan behåller sin form runt den. Tryck på {{key:Esc}}, eller klicka bredvid linjen, när du är klar.

Rektanglar har inga punkter att dra i: ändra deras storlek med rutorna runt dem.

## Ersätt en bild

Markera en bild och välj {{ui:Ersätt bild…}}, och välj sedan en PNG-, JPEG- eller SVG-fil (eller en PDF: dess första sida). Den nya bilden fyller den gamlas plats och behåller sina egna proportioner.

## Ändra orden i en textrad

Dubbelklicka på en textrad, skriv de nya orden i {{ui:Ord}} och tryck på {{key:Enter}}. Orden skrivs i radens eget typsnitt och storlek, och raden behåller sin längd, så texten efter den flyttar sig inte.

:::note
De flesta PDF:er innehåller bara de bokstäver de använder ur varje typsnitt. När du skriver en bokstav som filens kopia av typsnittet saknar, skriver MarkupCraft ut den bokstaven i Helvetica och säger det. {{ui:Egenskaper}} visar vilka bokstäver typsnittet i filen har.
:::

Text ändras en rad i taget; den flödar inte in i nästa rad.

## Det MarkupCraft lämnar orört

- **Inskannade sidor** är en enda bild: du kan flytta, ändra storlek på, ersätta eller ta bort bilden, men det som finns i den kan inte redigeras.
- **Krypterade och signerade PDF:er:** att ändra sidan skulle bryta en signatur, så verktyget {{ui:Innehåll}} säger det och ändrar ingenting. Markeringar fungerar fortfarande.
- **Beskärningsområden, objekt som är delade mellan två delar av sidans innehåll, och färgövertoningar som fyller ett helt område** förblir som de är; MarkupCraft säger varför när du försöker.
- **Ord i ett standardtypsnitt som PDF:en inte beskriver** (till exempel ett Times-typsnitt utan teckenbredder i filen) kan inte ändras, eftersom MarkupCraft inte kan behålla radens avstånd. Raden kan ändå flyttas.

## Lägg markeringar i sidan

Linjer, rektanglar, ellipser, polylinjer, moln och penndrag som du ritat som markeringar kan bli en del av själva sidan: markera dem och välj {{ui:Lägg in i sidan}} i {{ui:Egenskaper}}. Text, stämplar, bilder och genomskinliga färger förblir markeringar.
