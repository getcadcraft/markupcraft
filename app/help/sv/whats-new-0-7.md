---
title: Nyheter i 0.7 (tidigare)
summary: RFI:er, inlämningar och dagböcker i en ny Fält-flik, med förfallodatum, försenade i rött, CSV och BCF, offlinearbete och Slå ihop; assistenter som sätter status, svarar och exporterar listan; enhetslistor som följer Inställningar; paneler som döljs undan och dialogrutor som flyttas.
keywords: nyheter 0.7, tidigare version, versionsinformation, ändringslogg, ändringar, 0.7, version, nya funktioner, fält, fältposter, rfi, begäran om information, inlämning, dagbok, byggdagbok, försenad, förfallodatum, tilldelade mig, nål, slå ihop, offline, surfplatta, bcf, csv, assistent, mcp, markeringsstatus, svar, export, enheter, enhetslistor, stjärna, kalibrera, kompakt, paneler, dialogrutor, portugisiska
from: f8578677
---

Det här är vad som ändrats i MarkupCraft 0.7, jämfört med 0.6. Det stora nya är fältposter: RFI:er, inlämningar och dagböcker som sparas i PDF-filen bredvid dina markeringar.

## Nytt

### RFI:er, inlämningar och dagböcker

- **Fliken Fält.** Öppna fliken {{ui:Fält}} och välj {{ui:RFI}}, {{ui:Inlämning}} eller {{ui:Dagbok}}. Tryck eller klicka på bladet där en RFI eller en inlämning hör hemma, så markerar en nål platsen; en dagbok läggs på det öppna bladet utan nål ({{ui:Placera nål}} lägger till en senare, {{ui:Flytta nålen}} flyttar vilken nål som helst). Varje post har sitt eget nummer (RFI-0001, SUB-0001, LOG-0001), en titel, text, en status, en ansvarig, ett förfallodatum, en tråd med svar och en lista över bilagenamn. Se [Följ RFI:er, inlämningar och dagböcker](topic:field-records).
- **Se vad som är försenat.** Filtrera listan efter typ, status, förfallodatum (försenad, förfaller om 7 dagar, har eller saknar förfallodatum), det här bladet eller alla blad, en textsökning, eller {{ui:Tilldelade mig}}. En post som passerat sitt förfallodatum och fortfarande väntar markeras **Försenad**, i rött, på listan och på sin nål. Se [Hitta det som är viktigt](topic:field-records#find-what-matters).
- **CSV och BCF.** {{ui:CSV}} skriver de listade posterna som ett kalkylblad; {{ui:BCF}} skriver dem som BCF-ärenden, var och en med en ögonblicksbild av sin plats på bladet. Båda följer filtren. Se [Exportera](topic:field-records#export).
- **Offline, och två kopior blir en.** Poster sparas i PDF-filen och kräver inget nätverk, så en surfplatta på plats kan lägga till, svara på och spara dem. Tillbaka på kontoret slår {{ui:Slå ihop}} ihop posterna från en annan kopia av samma PDF med deras id:n, som ett enda steg att ångra. Se [Spara, offline och sammanslagning av kopior](topic:field-records#save-offline-and-merging-copies).

### AI-assistenter

- **Mer en assistent kan göra.** Din egen assistent, ansluten via CadCraft Studio, kan nu sätta en markerings status (`markup_status`, loggad i dess tråd), svara i en tråd (`markup_reply`) och exportera listan {{ui:Markeringar}} som CSV eller BCF (`markups_export`, vad listan visar med sina filter). Varje ändring är ett steg att ångra, signerat med assistentens namn. Se [Vad en assistent kan begära](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekarna som enheternas definitioner ger (den amerikanska landmätarfoten är en egen enhet). Stäng av de enheter du aldrig använder så lämnar de enhetslistorna; markera en med stjärna så startar nytt arbete i den. En fil behåller alltid sin egen enhet. I MarkupCraft följer mät- och positionsenheterna i {{ui:Inställningar}} › {{ui:MarkupCraft}} och enheten i kalibreringsdialogen omkopplarna, stjärnan sätter mätenheten tills du sparar MarkupCraft:s egna inställningar, och det verkliga avståndet du skriver vid kalibrering kan ha vilken enhets beteckning som helst, till exempel `3 yd` eller `1.5 km`. Se [Enheter, skrivna värden och enhetslistor](common:unit-lists).
- **En tätare layout och paneler som döljs undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} får plats med mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels list för att dela en ram som flikar, fäst den så den glider undan mot kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta på dess namnlist ur vägen för ritningen; den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade begäranden till din egen assistent (städa en ritning, plotta en sats, kontrollera ritningar, ställa frågor om en modell, summera en mängdavtagning, prova en delvariant…), var och en med verktygen den anropar och de behörigheter den behöver, och var och en körs om av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en infödd talare. Hjälpämnena finns på engelska.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara "Klar", och slutar återkomma med ett kort om Nyheter som du stängt tills det finns en nyare version.

## Inte i den här versionen ännu

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen ännu inte kommit fram. Kontrollera SHA-256-värdet bredvid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac, högerklicka på CadCraft Studio första gången och välj {{ui:Öppna}}. CadCraft Studio finns inte i någon appbutik ännu, och det finns ingen iPad- eller iPhone-version ännu.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen del läser dem ännu.
- Fältposter delas inte i en live-session i CadCraft Studio (live-sessioner bär bara markeringar); för ihop kopior med {{ui:Slå ihop}}.
- Slå ihop tar en post som helhet från kopian som ändrats senast: om två personer ändrat olika fält i en post vinner den senare kopians fält. Trådar och bilagenamn slås ihop.
- Bilagor är bara namn; filerna ligger kvar där de är. Det finns inga team, aviseringar eller molnprojekt för poster, och assistenter har ännu inga verktyg för poster.
- Fältposter testades i en webbläsare i telefon- och surfplattestorlek med nätverket avstängt, men ännu inte för hand på en riktig surfplatta.
- Kvar från 0.6: att vrida sidobjekt i valfri vinkel, att rita nya former direkt på sidan, att ändra ett streck teckensnitt eller storlek, och text som flödar över flera rader. En sparad kopia med sidändringar har ännu inte öppnats i Acrobat.
- Kvar från 0.5: att ångra en sidändring (till exempel att lägga till en tom sida), att läsa text från skannade blad, och live-sessioner utanför ditt eget nätverk.

Allt annat finns i [Vad som inte är byggt ännu](topic:not-built-yet).
