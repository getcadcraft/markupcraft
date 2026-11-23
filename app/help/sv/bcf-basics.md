---
title: BCF-grunder
summary: Vad en BCF-export från MarkupCraft innehåller, hur den används med verktyg för BIM-samordning och dess begränsningar.
keywords: bcf, bcfzip, bim collaboration format, ärenden, samordning, kollision, ämnen, vy, ögonblicksbild, openbim, buildingsmart, exportera ärenden
from: 0de26175
---

BCF (BIM Collaboration Format) är ett öppet filformat för att skicka ärenden mellan BIM-verktyg. Många program för modellsamordning och modellering kan importera en `.bcfzip`-fil som en lista med ärenden. MarkupCraft skriver **BCF 2.1**.

## Skapa en

1. Öppna fliken {{ui:Markeringar}}.
2. Filtrera listan till det du vill skicka, till exempel {{ui:Status}} ”Öppen”. Endast de listade markeringarna exporteras.
3. Välj {{ui:BCF}}.
4. Vänta medan en ögonblicksbild görs av varje markering (”Gör ögonblicksbilder för BCF (5 av 20)…”).

Resultat: ”<name> markups.bcfzip” laddas ner, och statusfältet visar hur många ämnen den innehåller och filstorleken.

## Vad som ingår

Varje markering blir ett **ämne**:

| Ämnesfält | Fylls med |
|---|---|
| Titel | Stämplingsnummer, ämne och blad, till exempel ”#4 Moln på A-101 — Planritning” |
| Typ | Markeringstypen (Moln, Utropsruta, Längd …) |
| Status | Öppen, Godkänd, Avvisad eller Slutförd |
| Etiketter | Markeringstypen och bladet |
| Författare och datum | Markeringens författare samt skapad- och ändringsdatum |
| Tilldelad, förfallodatum | Från dess åtgärdspost, när den har en |
| Beskrivning | Dess text eller stämpelns ordalydelse, uppmätt värde, kommentar samt bladet och filen |
| Kommentarer | En per svar, med författare och datum |
| Ögonblicksbild | En bild av markeringen på dess del av bladet |
| Vy | En uppifrånvy av markeringens plats på bladet |

Om samma markering exporteras igen får den samma ämnes-ID, så ett verktyg som importerar BCF kan känna igen den som samma ärende.

## Vad som kommer tillbaka vid import

{{ui:Importera BCF}} läser BCF 2.0-, 2.1- och 3.0-filer (kontrollerat mot de 19 officiella buildingSMART 3.0-testfilerna: varje ämne lästes, och kommentarerna för de tre som har text). För ett ämne som är ett av dina (samma ämnes-ID) läggs de nya kommentarerna till som svar, och den nya statusen övertas. Alla andra ämnen blir en anteckning på det blad som deras etikett eller filnamn anger, annars på det öppna bladet, med titel, beskrivning, tilldelad person och förfallodatum som anteckningens text och deras kommentarer som svar.

| I BCF-ämnet | I MarkupCraft |
|---|---|
| Titel, beskrivning, tilldelad, förfallodatum | Anteckningens text |
| Kommentarer med text | Svar |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done räknas som Completed) | Markeringens status |
| Författare och skapad-datum | Anteckningens författare och datum |
| Kameraposition | En plats på bladet, endast för ett ämne som kopplats till ett blad via etikett eller filnamn |
| Modellval, dolda delar, klippplan, ögonblicksbilder | Sparas inte: ett blad har ingen modell att visa dem i |

## Begränsningar att känna till

- **Ett blad är inte en modell.** Vyn pekar på markeringens läge på papperet, mätt i meter papper. Den tar inte ett BIM-verktyg till en plats i modellen. Använd ögonblicksbilden och bladets namn för att hitta platsen.
- **Statusar och typer är MarkupCraft:s egna** (Öppen, Godkänd, Avvisad, Slutförd; Moln, Utropsruta …). Filen anger dem, vilket BCF tillåter, men ett verktyg med egna fasta listor kan mappa eller ignorera dem.
- **Import ger kommentarer, inte modellvyer.** {{ui:Importera BCF}} lägger till svar och statusar till de markeringar du exporterade, och gör anteckningar av andra ärenden; den kan inte visa en modellkamera. Se [Markeringslistan och export](topic:markups-list-and-export#import-bcf).
- Att skicka tillbaka markeringar som PDF är ofta enklare för ritningsgranskningar. BCF är till för att få ritningskommentarer in i ett arbetsflöde för modellsamordning.
