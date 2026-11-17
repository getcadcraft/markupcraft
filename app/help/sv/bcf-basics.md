---
title: BCF-grunder
summary: Vad en BCF-export från MarkupCraft innehåller, hur du använder den med verktyg för BIM-samordning och dess begränsningar.
keywords: bcf, bcfzip, bim collaboration format, ärenden, samordning, kollision, ärendeämnen, vypunkt, ögonblicksbild, openbim, buildingsmart, exportera ärenden
from: 446f38c1
---

BCF (BIM Collaboration Format) är ett öppet filformat för att överföra ärenden mellan BIM-verktyg. Många program för modellsamordning och modellering kan importera en `.bcfzip`-fil som en lista med ärenden. MarkupCraft skriver **BCF 2.1**.

## Skapa en fil

1. Öppna fliken {{ui:Markeringar}}.
2. Filtrera listan på det du vill skicka, till exempel {{ui:Status}} "Öppen". Endast de listade markeringarna exporteras.
3. Välj {{ui:BCF}}.
4. Vänta medan en ögonblicksbild görs av varje markering ("Gör ögonblicksbilder för BCF (5 av 20)…").

Resultat: filen "<name> markups.bcfzip" laddas ner, och statusfältet visar hur många ärenden den innehåller och filstorleken.

## Vad som finns i den

Varje markering blir ett **ärende**:

| Ärendefält | Fylls med |
|---|---|
| Titel | Åtgärdsnummer, ämne och blad, till exempel "#4 Moln på A-101 — Planritning" |
| Typ | Markeringstypen (Moln, Utropsruta, Längd …) |
| Status | Öppen, Godkänd, Avvisad eller Slutförd |
| Etiketter | Markeringstypen och bladet |
| Författare och datum | Markeringens författare, skapad- och ändringsdatum |
| Tilldelad till, förfallodatum | Från dess åtgärdspost, när den har en |
| Beskrivning | Dess text eller stämpeltext, uppmätt värde, kommentar samt blad och fil |
| Kommentarer | En per svar, med författare och datum |
| Ögonblicksbild | En bild av markeringen på dess del av bladet |
| Vypunkt | En vy uppifrån av markeringens plats på bladet |

Om du exporterar samma markering igen får den samma ärende-ID, så att ett verktyg som importerar BCF kan känna igen den som samma ärende.

## Begränsningar att känna till

- **Ett blad är inte en modell.** Vypunkten pekar på markeringens position på papperet, uppmätt i meter papper. Den tar inte ett BIM-verktyg till en plats i modellen. Använd ögonblicksbilden och bladnamnet för att hitta platsen.
- **Status och typer är MarkupCraft:s egna** (Öppen, Godkänd, Avvisad, Slutförd; Moln, Utropsruta …). Filen deklarerar dem, som BCF tillåter, men ett verktyg med egna fasta listor kan mappa om eller ignorera dem.
- **Import ger kommentarer, inte modellvyer.** {{ui:Importera BCF}} lägger till svar och statusar på markeringarna du exporterade och skapar anteckningar för andra ärenden; den kan inte visa en modellkamera. Se [Markeringslista och export](topic:markups-list-and-export#import-bcf).
- Att skicka tillbaka markeringarna som PDF är ofta enklare vid ritningsgranskningar. BCF är till för att få ritningskommentarer in i ett arbetsflöde för modellsamordning.
