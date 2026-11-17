---
title: Stämplar och klisterlappar
summary: Stämpla ett blad Godkänd, Revidera och skicka in igen eller egen text, och lämna klisterlappar som öppnas som popup-kommentarer.
keywords: stämpel, bild, klistra in bild, skärmbild, urklipp, logotyp, fotostämpel, signatur, signera, godkänd, godkänd med anmärkning, revidera och skicka in igen, avvisad, granskad, ogiltig, egen stämpel, klisterlapp, anteckning, kommentar, popup
from: 76026792
---

## Stämpla ett blad

1. Välj {{ui:Stamp}} ({{key:S}}).
2. I {{ui:Properties}} till höger väljer du stämpeln under {{ui:Stamp}}:
   - Godkänd
   - Godkänd med anmärkning
   - Revidera och skicka in igen
   - Avvisad
   - Granskad
   - Ogiltig
   - Egen text… (skriv upp till 60 tecken i rutan som visas, och tryck sedan på {{key:Enter}} eller klicka någon annanstans)
3. Klicka på bladet där stämpeln ska stå. Eller dra en ruta för att välja dess storlek.

Resultat: en inramad stämpel med versaler och en andra rad ”Av <ditt namn>, <datum>”. En stämpel som du klickar fram storleks efter skärmen vid din zoomnivå och hålls mellan 1/2 in och 1 1/4 in hög på det utskrivna bladet.

Stämpeln du valde ligger kvar för nästa, även efter att du öppnat MarkupCraft igen i den här webbläsaren.

**Färgerna följer betydelsen:** de godkända stämplarna är gröna, Revidera och skicka in igen orange, Avvisad och Ogiltig röda, Granskad blå och egna stämplar lila. Om du väljer en annan färg i {{ui:Properties}} behålls den färgen.

### Ändra en stämpel senare

Markera den och välj en annan stämpel i {{ui:Properties}}. Om den fortfarande hade sin automatiska färg ändras färgen efter betydelsen.

Namnet och datumet på stämpeln är stämpelns upphovsperson och dagen den skapades. De ändras inte när du redigerar den, och en stämpels upphovsperson kan inte ändras. Om du vill stämpla i någon annans namn får hen ange sitt namn och stämpla själv.

:::note
Datumet på en stämpel är datumet i Samordnad världstid (UTC). Sent på kvällen i Amerika, eller tidigt på morgonen i Asien och Australien, kan det visa nästa eller föregående dag jämfört med din klocka. Skapad-tiden i {{ui:Properties}} är i din egen tidszon.
:::

### Stämplar du använder ofta

Verktygslådan kommer med en stämpel som heter ”Godkänd med anmärkning”, och du kan spara vilken stämpel som helst (dess text och färg) som ett eget verktyg. Se [Verktygslådan](topic:tool-chest).

Stämplar med ifyllda fält (datum mottaget, projektnummer) finns inte ännu.

## Stämpla en bild eller din signatur

Stämplelistan i {{ui:Properties}} slutar med två val till:

- {{ui:Picture…}} frågar efter en PNG-, JPEG- eller SVG-fil på den här datorn, eller en sida i en PDF, till exempel ett företagsstämpel eller en logotyp. Stora bilder skalas ner till 1600 bildpunkter på sin längre sida; en SVG- eller PDF-sida blir en bild i den storleken.
- {{ui:My signature…}} öppnar en signaturruta: signera med mus, penna eller finger och välj {{ui:Use this signature}}. {{ui:Clear}} börjar om. {{ui:Use a picture of a signature…}} tar i stället en skanning eller ett foto av din signatur: MarkupCraft gör det vita papperet genomskinligt och beskär bilden till bläcket (för en PNG frågar den först).

Klicka sedan på bladet för att placera den (en bild 3 in bred, en signatur 2 in bred), eller dra en ruta för att passa in den; proportionerna behålls. Ändra storlek med dess handtag som vilken markering som helst ({{key:Shift}} behåller proportionerna).

Den senaste bilden sparas i den här webbläsaren, så den finns redo nästa gång; {{ui:Choose another picture…}} ersätter den. Varje signatur du ritar eller läser in sparas i {{ui:Your signatures}} (upp till åtta, nyast först): klicka på en för att använda den, eller på × för att ta bort den. Se [Vad som finns kvar i den här webbläsaren](topic:browser-storage).

I den sparade PDF:en är en bild en stämpelkommentar som visar bilden, så vilken PDF-visare som helst visar och skriver ut den. En signatur som ritas här är en bild av din signatur, inte en certifierad digital signatur.

## Klistra in en bild från urklippet

Kopiera en bild i ett annat program, eller ta en skärmbild till urklippet, och tryck sedan på {{key:Mod+V}} över bladet. Bilden hamnar där pekaren är, högst 3 in bred eller hög med proportionerna kvar, som en bildmarkering du kan flytta och ändra storlek på. I den sparade PDF:en är den en stämpelkommentar som visar bilden, precis som bilderna ovan.

{{ui:More}} › {{ui:Paste a picture}} i gruppen {{ui:Edit}} gör samma sak från menyn; webbläsaren kan fråga först. När urklippet inte innehåller någon bild klistrar {{key:Mod+V}} in kopierade markeringar som tidigare.

## Infoga en bild från en fil

Välj {{ui:More}} › {{ui:Insert a picture from a file…}} i gruppen {{ui:Edit}} (eller {{ui:Insert a picture here…}} i högerklicksmenyn) och välj en PNG-, JPEG- eller SVG-fil, eller en PDF (en PDF med flera sidor frågar vilken). Du kan också dra en PNG-, JPEG- eller SVG-fil till bladet: den hamnar där du släpper den. Bilden är en markering, högst 3 in bred eller hög: flytta och ändra storlek på den som vilken annan markering som helst.

För att göra en bild till en del av sidan, bocka i {{ui:Flatten into the page when saved}} i {{ui:Properties}}. Se [Spara en platt kopia](topic:flatten).

## Skapa en stämpel av en markering

Markera markeringar (eller sidinnehåll med verktyget {{ui:Content}}) och välj {{ui:Save selection as a stamp…}} i {{ui:More}}, i högerklicksmenyn eller {{ui:Save as a stamp…}} i {{ui:Properties}}. Ge den ett namn. Den hamnar i verktygslådan: klicka på den där och klicka sedan på valfritt blad för att placera allt du markerat, tillsammans, centrerat där du klickar. Se [Verktygslådan](topic:tool-chest).

## Klisterlappar

1. Välj {{ui:Note}} ({{key:N}}).
2. Klicka där lappen ska stå. En liten lappikon visas med en ruta bredvid.
3. Skriv anteckningen. Klicka utanför eller tryck på {{key:Mod+Enter}} för att behålla den; {{key:Esc}} kastar bort den.

Till skillnad från text och utropsrutor behålls en anteckning även om du inte skriver något, så att du kan placera ikonen nu och skriva senare.

- Anteckningens ord är dess fält {{ui:Note}} i {{ui:Properties}}. Dubbelklicka på ikonen (eller markera den och tryck på {{key:Enter}}) för att redigera dem på bladet.
- På bladet ser du bara ikonen. Andra PDF-visare visar en vanlig klisterlapp som öppnar texten när man klickar på den.
- Ändra ikonens färg med {{ui:Color}} i {{ui:Properties}}.

För fram-och-tillbaka-diskussion, använd i stället svarstråden på valfri markering: se [Status och svar](topic:statuses-and-replies).
