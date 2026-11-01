---
title: Filer som MarkupCraft öppnar och sparar
summary: PDF-filer in, en markerad PDF-kopia ut, plus CSV-, BCF- och verktygslådefiler; vart var och en tar vägen, online och offline.
keywords: pdf, öppna, spara, exportera, ladda ner, csv, bcf, bcfzip, json, verktygslåda, filtyper, format, ladda upp, lösenord, krypterad
from: b3045b4c
---

## Vad MarkupCraft öppnar

| Fil | Hur | Vad som händer |
|---|---|---|
| PDF (`.pdf`) | {{ui:Öppna}}, {{key:Mod+O}} eller släpp på bladytan. Flera samtidigt går bra. | Varje sida blir ett blad. Markeringar som redan finns i filen läses in igen (nedan). |
| Verktygslåda (`.json`) | fliken {{ui:Verktyg}}, sedan {{ui:Importera}} | Verktygen läggs till i din verktygslåda. Se [Verktygslådan](topic:tool-chest). |

Allt annat avvisas med ”MarkupCraft öppnar PDF-filer.” i statusfältet. Om du släpper en blandning öppnas PDF-filerna, och statusfältet anger hur många filer som inte var PDF.

### Markeringar som redan finns i en PDF

- **Markeringar som MarkupCraft sparat** kommer tillbaka exakt: typ, stil, författare, datum, status, svar, åtgärdsnummer, bladets skala och alla bladnamn du skrivit.
- **Kommentarer från andra PDF-program** läses också. Rektanglar, ellipser, linjer och pilar, polylinjer, polygoner, frihandsstreck (penna), textrutor och klisterlappar blir vanliga, redigerbara MarkupCraft-markeringar. Deras svar och granskningsstatus följer med.
- **Allt annat** (textöverstrykningar gjorda genom att markera text, andra programs stämplar och andra typer) visas som det är, märkt som skrivskyddat. Du kan markera det, se det i markeringslistan och svara på det, men inte flytta, ändra eller ta bort det.
- Länkar och formulärfält lämnas orörda och listas inte.
- En skala som sparats av ett annat program (en måttvyport) används som bladets skala när MarkupCraft förstår dess enhet.

### Filer som inte öppnas

- En PDF som kräver lösenord: ”name” kräver ett lösenord för att öppnas. Öppna en oskyddad kopia.
- En skadad fil eller en som egentligen inte är en PDF: ”name” kunde inte läsas som en PDF (…).
- En PDF som öppnas men är skyddad mot ändringar öppnas som vanligt. Sparandet avvisas (se nedan).

När flera filer öppnas samtidigt öppnas de som fungerar, och en ruta med namnet ”Vissa filer öppnades inte” listar de övriga.

## Vad MarkupCraft sparar

Att spara är alltid en **nedladdning** av en ny fil. En webbsida kan inte skriva över en fil på din dator, och MarkupCraft ändrar aldrig din original.

| Du väljer | Du får | Anmärkningar |
|---|---|---|
| {{ui:Spara}} ({{key:Mod+S}}) | ”<name> (marked up).pdf” | En kopia av den ursprungliga PDF-filen med varje markering inskriven som en riktig PDF-kommentar. Om du sparar en ”(marked up)”-fil igen behålls samma namn; den blir aldrig ”(marked up) (marked up)”. Se [Spara den markerade PDF-filen](topic:save-the-marked-up-pdf). |
| fliken {{ui:Markeringar}}, sedan {{ui:CSV}} | ”<name> markups.csv” | Markeringarna som de är listade (filter gäller). |
| fliken {{ui:Markeringar}}, sedan {{ui:BCF}} | ”<name> markups.bcfzip” | BCF 2.1 för BIM-samordningsverktyg, en ögonblicksbild per markering. Se [Grunderna i BCF](topic:bcf-basics). |
| fliken {{ui:Åtgärdslista}}, sedan {{ui:Exportera CSV}} | ”<name> punch list.csv” | Åtgärdsposterna i nummerordning. |
| fliken {{ui:Verktyg}}, sedan {{ui:Exportera}} | ”MarkupCraft tool chest.json” | Din verktygslåda, att dela eller spara. |

”<name>” är den första öppna PDF-filens namn utan ”.pdf”.

CSV-filerna öppnas i alla kalkylprogram. De är UTF-8 med den markör som kalkylprogram letar efter, så att tecken med accenter blir rätt. En cell som börjar med =, +, - eller @ får ett inledande apostrof så att ett kalkylprogram aldrig kör den som en formel.

## Vart nedladdningarna tar vägen

Din webbläsare avgör: oftast mappen Hämtade filer, eller så frågar den varje gång om du ställt in det. Se [Webbläsare och datorer](common:browsers#what-differs-between-browsers).

:::chromium
När du sparar alla ändrade filer i en uppsättning på en gång kan Chrome och Edge fråga om den här webbplatsen får ladda ner flera filer. Välj {{ui:Tillåt}}, annars får du bara den första kopian.
:::

:::safari
På en iPad frågar Safari före varje nedladdning och lägger filen i appen Filer, under Hämtade filer. På en Mac hamnar den i den mapp som anges i Safaris inställningar.
:::

## Online och offline

- **Dina PDF-filer lämnar aldrig den här datorn**, varken online eller offline. Ingenting laddas upp någonstans.
- PDF-läsaren läses in första gången du öppnar en PDF (”Läser in PDF-läsaren…”), och PDF-skrivaren första gången du sparar (”Läser in PDF-skrivaren…”) eller öppnar en fil som redan har kommentarer.
- Med anslutning läses båda in från webbplatsen.
- **För att arbeta utan anslutning** väljer du {{ui:Spara för offline}} i fältet överst medan du är online. Knappen räknar ”Sparar N av M” och säger sedan ”Redo för offline”. Den kopian innehåller PDF-läsaren och PDF-skrivaren (cirka 6 MB tillsammans) och den här hjälpen, så efteråt fungerar det att öppna, markera och spara PDF-filer offline i den här webbläsaren.
- Om knappen säger ”Kunde inte spara” laddades inte alla filer ner: kontrollera anslutningen och klicka på den igen. Om den säger ”Offline är inte tillgängligt” kan det här webbläsarfönstret inte behålla en offlinekopia (privata fönster och vissa hanterade datorer); använd ett vanligt fönster.
- För att uppdatera eller släppa kopian klickar du på ”Redo för offline” och väljer ”Spara igen (hämta den senaste versionen)” eller ”Ta bort offlinekopian”. Mer i [Arbeta offline](common:offline).

:::offline
Du är offline. Om fältet överst säger ”Redo för offline” fungerar allt, även sparande. Om det inte gör det och du inte har sparat ännu i den här fliken kan {{ui:Spara}} misslyckas med ”PDF-skrivaren kunde inte läsas in”. Dina markeringar finns kvar i fliken: håll den öppen, gå online igen och välj {{ui:Spara}} på nytt.
:::

## Bra att veta

- Stora ritningsuppsättningar tar en stund att öppna: MarkupCraft läser texten på varje sida för att hitta bladnummer. Statusfältet räknar bladen allt eftersom.
- Om du öppnar samma PDF två gånger läggs dess blad till två gånger. Stäng uppsättningen och öppna den igen om det händer.
- {{ui:Stäng}} stänger alla öppna filer på en gång. Om någon har osparade markeringar frågar den: {{ui:Avbryt}}, {{ui:Stäng utan att spara}} eller {{ui:Spara kopior först}}.
- Molnsparande finns inte ännu, och det finns inga skrivbordsversioner ännu. Förvara dina PDF-filer tillsammans med övriga projektfiler och ta säkerhetskopior som vanligt. Se [Vart dina filer tar vägen](common:your-files).
