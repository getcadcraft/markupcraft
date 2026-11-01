---
title: Nytt i 0.7
summary: RFI-frågor, inlämningar och dagböcker i en ny flik Fält, med förfallodatum, försenade i rött, CSV och BCF, offlinearbete och Slå ihop; assistenter som anger status, svarar och exporterar listan; enhetslistor som följer Inställningar; paneler som fälls undan och dialogrutor som flyttas.
keywords: nytt, vad är nytt, versionsanteckningar, ändringslogg, ändringar, 0.7, version, nya funktioner, fält, fältposter, rfi, begäran om information, inlämning, dagbok, byggdagbok, försenad, förfallodatum, tilldelade mig, nål, slå ihop, offline, surfplatta, bcf, csv, assistent, mcp, markeringsstatus, svar, export, enheter, enhetslistor, stjärna, kalibrera, kompakt, paneler, dialogrutor, portugisiska
from: 142e1a1e
---

Det här är vad som ändrats i MarkupCraft 0.7 jämfört med 0.6. Den stora nyheten är fältposter: RFI-frågor, inlämningar och dagböcker som lagras i PDF-filen bredvid dina markeringar.

## Nytt

### RFI-frågor, inlämningar och dagböcker

- **Fliken Fält.** Öppna fliken {{ui:Fält}} och välj {{ui:RFI}}, {{ui:Inlämning}} eller {{ui:Dagbok}}. Tryck eller klicka på bladet där en RFI eller en inlämning hör hemma så markerar en nål platsen; en dagbok läggs på det öppna bladet utan nål ({{ui:Placera nål}} lägger till en senare, {{ui:Flytta nålen}} flyttar vilken nål som helst). Varje post har ett eget nummer (RFI-0001, SUB-0001, LOG-0001), en titel, text, en status, en ansvarig, ett förfallodatum, en tråd med svar och en lista med bilagornas namn. Se [Följ RFI-frågor, inlämningar och dagböcker](topic:field-records).
- **Se vad som är sent.** Filtrera listan efter typ, status, förfallodatum (försenad, förfaller inom 7 dagar, har eller saknar förfallodatum), det här bladet eller alla blad, en textsökning eller {{ui:Tilldelade mig}}. En post som passerat sitt förfallodatum och fortfarande väntar markeras **Försenad**, i rött, i listan och på sin nål. Se [Hitta det som är viktigt](topic:field-records#find-what-matters).
- **CSV och BCF.** {{ui:CSV}} skriver de listade posterna som ett kalkylblad; {{ui:BCF}} skriver dem som BCF-ärenden, vart och ett med en ögonblicksbild av sin plats på bladet. Båda följer filtren. Se [Exportera](topic:field-records#export).
- **Offline, och två kopior blir en.** Posterna sparas i PDF-filen och behöver inget nätverk, så en surfplatta på plats kan lägga till, besvara och spara dem. Tillbaka på kontoret slår {{ui:Slå ihop}} samman posterna från en annan kopia av samma PDF via deras id:n, som ett ångrasteg. Se [Spara, offline och sammanslagning av kopior](topic:field-records#save-offline-and-merging-copies).

### AI-assistenter

- **Mer en assistent kan göra.** Din egen assistent, ansluten via CadCraft Studio, kan nu ange en markerings status (`markup_status`, loggas i dess tråd), svara i en tråd (`markup_reply`) och exportera listan {{ui:Markeringar}} som CSV eller BCF (`markups_export`, det listan visar med sina filter). Varje ändring är ett ångrasteg, signerat med assistentens namn. Se [Vad en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## I varje app

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (den amerikanska lantmäterifoten är en egen enhet). Stäng av de enheter du aldrig använder så försvinner de från enhetslistorna; sätt en stjärna på en så börjar nytt arbete i den. En fil behåller alltid sin egen enhet. I MarkupCraft följer mät- och positionsenheterna i {{ui:Inställningar}} › {{ui:MarkupCraft}} och enheten i kalibreringsdialogen reglagen, stjärnan anger måttenheten tills du sparar MarkupCrafts egna inställningar, och det verkliga avstånd du skriver när du kalibrerar kan ha vilken enhets beteckning som helst, till exempel `3 yd` eller `1.5 km`. Se [Enheter, inskrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som fälls undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} ryms mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har ett smalt titelfält: dra det för att docka eller frigöra panelen, släpp det på en annan panels fält för att dela ram som flikar, fäst det så att det glider undan till kanten, eller dölj det och hämta tillbaka det från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i dess titelfält undan från ritningen; den kommer tillbaka där du lämnade den. Dubbelklicka på titelfältet för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade förfrågningar till din egen assistent (städa en ritning, plotta en uppsättning, kontrollera ritningar, ställa frågor till en modell, summera en mängdavtagning, prova en delvariant …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en omspelad av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena är på engelska.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en ogiltig signatur) i stället för bara ”Klar”, och slutar ta tillbaka ett Nytt-kort du stängt tills det finns en nyare version.

## Inte i den här versionen ännu

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen inte har gått igenom ännu. Kontrollera SHA-256 bredvid varje fil på getcadcraft.com/download. Om SmartScreen på Windows stoppar installationsprogrammet väljer du {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac högerklickar du första gången på CadCraft Studio och väljer {{ui:Öppna}}. CadCraft Studio finns inte i någon appbutik ännu, och det finns ingen version för iPad eller iPhone ännu.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- Fältposter delas inte i en live-session i CadCraft Studio (live-sessioner bär bara markeringar); för ihop kopior med {{ui:Slå ihop}}.
- Sammanslagningen tar en post som helhet från den kopia som ändrades senast: om två personer ändrade olika fält i en post vinner den senare kopians fält. Trådar och bilagenamn förenas.
- Bilagor är bara namn; filerna stannar där de är. Det finns inga team, aviseringar eller molnprojekt för poster, och assistenter har inga verktyg för poster ännu.
- Fältposter testades i en webbläsare i telefon- och surfplattestorlek med nätverket avstängt, men ännu inte för hand på en riktig surfplatta.
- Fortfarande från 0.6: att vända sidobjekt till valfri vinkel, att rita nya former direkt in i sidan, att ändra en rads teckensnitt eller storlek och text som flödar över flera rader. En sparad kopia med sidändringar har ännu inte öppnats i Acrobat.
- Fortfarande från 0.5: att ångra en sidändring (till exempel att lägga till en tom sida), att läsa text från inskannade blad och live-sessioner utanför ditt eget nätverk.

Allt annat finns i [Vad som inte är byggt ännu](topic:not-built-yet).
