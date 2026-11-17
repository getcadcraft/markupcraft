---
title: Markeringslistan, filter och export
summary: Se alla markeringar i uppsättningen, filtrera på blad, upphovsperson, status och typ, hoppa till en och exportera listan som CSV eller BCF.
keywords: markeringslista, lista, sammanfattning, xlsx, kalkylbok, pdf-rapport, importera bcf, filter, sortera, rapport, exportera, csv, kalkylblad, bcf, bcfzip, ärenden, kommentarlista, hoppa
from: 6c70261e
---

## Öppna listan

Välj fliken {{ui:Markups}} till höger. Varje markering i alla öppna filer listas, i bladordning och sedan i den ordning de gjordes. Varje rad visar:

- en ikon i markeringens färg, dess åtgärdsnummer om den har ett ("#4"), och dess ämne,
- dess text, stämpeltext eller uppmätta värde, och dess kommentar,
- bladet, upphovspersonen och datumet,
- dess status (eller "Skrivskyddad" för kommentarer som följde med filen), och ett antal svar när den har svar.

Raden ovanför listan räknar dem: "38 markeringar", eller "12 av 38 markeringar" när den är filtrerad.

## Hoppa till en markering

Klicka på en rad. MarkupCraft visar bladet, markerar markeringen och zoomar in på den när den är utanför skärmen eller för liten för att synas. {{ui:Properties}} har dess detaljer och tråd när du byter tillbaka till fliken.

## Filter

Fyra menyer ovanför listan. De kombineras.

| Meny | Val |
|---|---|
| {{ui:Sheet}} | Alla blad, Detta blad (följer dig när du byter blad), eller vilket blad som helst som har markeringar |
| {{ui:Author}} | Alla, eller varje upphovsperson i uppsättningen |
| {{ui:Status}} | Valfri status, Öppen, Godkänd, Avvisad, Slutförd |
| {{ui:Type}} | Valfri typ, eller varje slags markering i uppsättningen |

Exempel:

- Vad som fortfarande är öppet på det här bladet: {{ui:Sheet}} ”Detta blad”, {{ui:Status}} ”Öppen”.
- En konsults kommentarer: {{ui:Author}} deras namn.
- Alla mätningar: {{ui:Type}} ”Längd” eller ”Area”.

Listan visar upp till 2000 rader; begränsa den med ett filter i mycket stora uppsättningar.

## Exportera till CSV

Välj {{ui:CSV}} överst på fliken. Du får "<name> markups.csv" med **markeringarna så som de är filtrerade just nu**, en per rad, med dessa kolumner:

Åtgärdsnr, Blad, Fil, Sida, Typ, Ämne, Text, Kommentar, Mätvärde, Upphovsperson, Skapad, Ändrad, Status, Svar, Senaste svar, Färg, Skrivskyddad.

- ”Text” innehåller orden i textrutor och utropsrutor, en stämpels text, eller en räknegrupps namn.
- ”Mätvärde” innehåller längder, ”area, omkrets” för areor och ”grupp: n” för räkningar.
- Datum är fullständiga tidsstämplar i UTC.

För att exportera allt, återställ först varje filter till sitt första val.

## En teckenförklaring på bladet

{{ui:Legend}} i fliken {{ui:Markups}} lägger en teckenförklaring överst till höger i det du ser: en ruta som listar varje slags markering på bladet (efter ämne och färg, till exempel "Moln", "Fråga" eller "Uttag") med hur många det finns. En räknegrupp räknar sina märken. Teckenförklaringen fortsätter räkna när du ritar, flyttar eller tar bort markeringar, och den skrivs ut och sparas med antalen från just det ögonblicket.

Flytta och ändra storlek på den som vilken markering som helst. I dess {{ui:Properties}} ändrar du dess {{ui:Title}}, eller sätter {{ui:Counts}} till {{ui:The whole set}} för att räkna alla blad. Utrymmen, andra teckenförklaringar och kommentarer från andra program räknas inte.

## Egna kolumner och sortering

{{ui:Columns}} i fliken {{ui:Markups}} lägger till egna kolumner till varje markering: en **text**, ett **val** (till exempel Bransch: Maskin, El, VVS), ett **tal** (till exempel Kostnad) eller ett **datum**. Ge varje ett namn, välj dess typ, lista valen för en valkolumn, och välj {{ui:Save columns}}.

- Fyll i dem under {{ui:Properties}}: varje kolumn har ett fält där. En talkolumn tar bara emot tal, en datumkolumn ett datum.
- Listan visar värdena under varje markering, filtret {{ui:Column}} väljer ett värde (eller markeringarna där det är tomt), och {{ui:Sort}} sorterar listan efter en kolumn, efter upphovsperson, status, typ eller datum, i stället för efter blad.
- CSV- och XLSX-exporterna tar med kolumnerna efter de vanliga. Kolumnerna sparas med PDF-filen och kommer tillbaka när du öppnar den igen.

## Exportera en sammanfattning: kalkylbok eller PDF

- {{ui:XLSX}} laddar ner "<name> markup summary.xlsx" med tre blad: **Markeringar** (en rad per listad markering, samma kolumner som CSV), **Per blad** (hur många markeringar varje blad har, öppna och stängda, och hur många av varje typ, med summor) och **Åtgärdslista** (när det finns åtgärdsposter).
- {{ui:PDF}} laddar ner "<name> markup summary.pdf": en rapport att skriva ut eller skicka, med uppsättningens namn, datumet och en tabell över de listade markeringarna (nummer, blad, typ, ämne, text eller kommentar, mätvärde, upphovsperson, status och senaste svar). Lång text bryts; tabellhuvudet upprepas på varje sida.

Båda tar listan så som den är filtrerad, så filtrera först för att rapportera ett blad, en upphovsperson eller bara de öppna posterna.

## Exportera till BCF

Välj {{ui:BCF}}. MarkupCraft gör en bild av varje listad markering på dess blad ("Skapar ögonblicksbilder för BCF (3 av 12)…"), och laddar sedan ner "<name> markups.bcfzip". Varje markering blir ett BCF-ärende med sin status, upphovsperson och datum, svar som kommentarer, tilldelad och förfallodatum från sin åtgärdspost, samt ögonblicksbilden.

Använd det för att föra över granskningskommentarer till BIM-samordningsverktyg som läser BCF. Vad som följer med, och vad som inte gör det, finns i [BCF-grunder](topic:bcf-basics).

## Importera BCF

{{ui:Import BCF}} läser en .bcfzip- (eller .bcf-)fil från ett BIM-verktyg:

- Ärenden som kommer från MarkupCrafts egen BCF-export hittar sina markeringar igen: nya svar läggs till i tråden, och en ny status sätts (Stängd räknas som Slutförd). Svar som redan finns där läggs inte till två gånger.
- Andra ärenden blir anteckningar, med sin titel, beskrivning, upphovsperson och kommentarer. En anteckning hamnar på det blad vars nummer eller namn ärendets etiketter anger, annars på det öppna bladet. En BIM-kamera har ingen plats på papper, så sådana anteckningar staplas i övre vänstra hörnet av bladet för dig att flytta.

Hela importen är ett steg: {{key:Mod+Z}} tar tillbaka den. Se [BCF-grunder](topic:bcf-basics).

## Det listan ännu inte gör

- Gruppera listan (sortera, sedan filtrera i stället).
- Redigera värden i listan (redigera i {{ui:Properties}}; åtgärdsfält redigeras i fliken {{ui:Punch list}}).
