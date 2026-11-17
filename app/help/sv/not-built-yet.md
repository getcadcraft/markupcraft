---
title: Vad som inte finns ännu
summary: Vad den här versionen av MarkupCraft inte gör ännu, och vad du kan göra i stället idag.
keywords: saknas, färdplan, planerad, begränsning, stöds inte, kommer, funktionsönskemål, sessioner, moln, digital signatur, webblänkar
from: 0872fede
---

MarkupCraft är under utveckling. Det här är vad den aktuella versionen **inte** gör, så att du kan planera runt det. Det beskriver dagens version, inte löften.

## Arbete med andra personer

| Finns inte ännu | Gör så här idag |
|---|---|
| Molnsparning och synkronisering mellan datorer | Behåll PDF-filerna tillsammans med dina projektfiler. Molnsparning finns inte ännu. |
| Sammanslagning av två personers kopior av markeringarna | Dela upp bladen mellan granskarna, eller kopiera några markeringar med {{key:Mod+C}} och {{key:Mod+V}}. RFI:er, inlämningar och dagloggar slås ihop: se [Följ upp RFI:er, inlämningar och dagloggar](topic:field-records). |
| Lag, aviseringar och molnprojekt för RFI:er och inlämningar | Skicka vidare PDF-filen och använd {{ui:Slå ihop}} för att föra samman kopiorna. |
| RFI:er, inlämningar och dagloggar i en live-session | Varje person arbetar i sin egen kopia; för samman kopiorna med {{ui:Slå ihop}}. |
| Sammanslagning av två personers ändringar i olika fält i samma post | Kopian som ändrades sist vinner hela posten (dess tråd och bilagenamn slås ihop). Kom överens om vem som redigerar vilken post. |
| Assistentverktyg för RFI:er, inlämningar och dagloggar | Arbeta med dem i fliken {{ui:Fält}}. Assistenter kan arbeta med markeringar: se [Använd MarkupCraft med en AI-assistent](topic:use-with-ai-assistants). |
| Redigera eller ta bort ett svar när det har skickats | Ångra direkt, eller lägg till ett rättande svar. |
| Ändra vem en markering är gjord av | Ange ditt namn innan du börjar. |

## Markeringar

| Finns inte ännu | Gör så här idag |
|---|---|
| Stämplar med ifyllnadsfält, certifierade digitala signaturer | Använd en egen textstämpel, som innehåller ditt namn och datum, eller en bild av din signatur. |
| Bifoga andra filer än foton (dokument, videor) | Behåll dem bredvid PDF-filen och hänvisa till dem i kommentaren. |
| Länkar till webbplatser eller till filer som inte är öppna | Skriv adressen eller filnamnet i kommentaren. |
| Egna statusuppsättningar | Använd de fyra statusarna, och ämnet för allt annat. |
| Redigera kommentarer som följde med filen som skrivskyddade (textmarkeringar, andra programs stämplar) | Svara på dem, eller rita en MarkupCraft-markering bredvid dem. |
| Penndrag som styrs av tryck | Ställ in linjetjockleken. |

## Sidans eget innehåll

| Finns inte ännu | Gör så här idag |
|---|---|
| Rita nya figurer direkt i sidan | Rita dem som markeringar och använd sedan {{ui:Lägg in i sidan}}. Se [Ändra sidans eget innehåll](topic:page-content). |
| Vrida sidobjekt i valfri vinkel | Flytta och ändra storlek på dem; vrid hela sidan med {{ui:Sidor}}. |
| Ändra en textrads typsnitt eller storlek, eller text som flödar över flera rader | Ändra orden en rad i taget; för ny text i ett annat typsnitt, lägg till en textmarkering. |
| Redigera det som finns i en inskannad bild | Ersätt bilden, eller markera den. |
| Redigera krypterade eller signerade PDF:er | Be om en osignerad kopia; markeringar fungerar på alla PDF:er. |

## Mätning

| Finns inte ännu | Gör så här idag |
|---|---|
| Radiemätningar | Rita en {{ui:Båge}} längs den, eller mät {{ui:Längd}} över den och halvera värdet. |
| Redigera hörnen på en urtagning | Ta bort urtagningarna och rita dem igen. |
| Använda en skala på många blad samtidigt | Kalibrera varje blad; att välja en förinställning tar några sekunder per blad. |
| Flera skalor på ett blad (vyportar) | Kalibrera mot den ritning du mäter mest. Om du ändrar ett bladets skala mäts allt på det om, så skriv ned detaljvärden innan du kalibrerar om för dem. |
| Fånga linjer i ritningen | Zooma in innan du klickar, eller skriv in längder och vinklar (se [Skissa i skala](topic:calibrate-and-measure#sketch-to-scale)). |
| En fullständig mängdavtagning med poster, kalkylsammansättningar och priser | Använd TakeoffCraft, CadCraft-familjens mängdavtagningsapp. |

## Blad och filer

| Finns inte ännu | Gör så här idag |
|---|---|
| Ångra en sidändring (vrida, flytta, infoga, ta bort) | Stäng utan att spara och öppna den ursprungliga PDF-filen igen. Se [Skriv ut och ändra sidorna](topic:pages-and-printing). |
| Stänga en fil i en sats | {{ui:Stäng}} stänger hela satsen; öppna de filer du behöver igen. |
| Spara en sats som ett projekt som öppnas igen i ett steg | Öppna samma PDF-filer igen. |
| Skriva ut i vald skala, eller flera blad per papper | Använd webbläsarens utskriftsdialog, eller skriv ut den sparade kopian från en annan PDF-läsare. |

## Listor och exporter

| Finns inte ännu | Gör så här idag |
|---|---|
| Placera importerade BCF-ärenden på deras modellposition | Importerade ärenden som inte är kopplade till något blad staplas uppe till vänster: flytta dem. |
| Importera verktygsuppsättningar från andra markeringsprogram | Bygg upp de verktyg du behöver på nytt och spara dem i verktygslådan; exportera den till kontoret. |

## Jämför

| Finns inte ännu | Gör så här idag |
|---|---|
| Jämföra text satt i ett typsnitt, eller en lista över vad som ändrats | Använd överlagringen och reglaget, eller {{ui:Ändrade linjer}} för ritade linjer. |
| Jämföra inskannade blad efter deras linjer | Använd bildöverlagringen. |
| Automatiskt passa in alla par när en hel sats jämförs | Jämför ett förskjutet par för sig och använd {{ui:Passa in med två punkter}}. |

## Paneler

| Finns inte ännu | Gör så här idag |
|---|---|
| Flytta verktygsfältet eller statusfältet | Bara de två sidopanelerna flyttas. |

## Plattformar

- **Dator:** MarkupCraft körs i webbläsaren på Mac, Windows, Linux och iPad, och i CadCraft Studio, skrivbordsappen med alla åtta apparna i en installation.
- MarkupCraft är under utveckling. Etiketter och beteende kan ännu ändras, och den här hjälpen ändras med dem.
