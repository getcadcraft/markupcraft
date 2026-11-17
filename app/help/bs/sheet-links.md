---
title: Veze listova
summary: Napravi da označavanje skoči na drugi list, i poveži svaku oznaku lista poput 3/A-501 s njenim listom i pogledom jednim prolazom uz Grupne veze.
keywords: hiperveza, veza, veze, skok, oznaka lista, oznaka detalja, oznaka presjeka, 3/A-501, idi na list, nazad, automatska veza, grupne veze, blok naslova, broj lista, naziv lista, pogled, detalj, preimenuj, promijeni broj, dodatak, pdf veza
from: 86a17c37
---

Veza lista te vodi od označavanja do drugog lista seta: od balončića detalja do detalja, od bilješke do lista na koji se odnosi.

## Poveži označavanje s listom

1. Odaberi označavanje.
2. U {{ui:Svojstva}} izaberi list pod {{ui:Veza na list}}.

Mala strelica se pojavi u gornjem desnom uglu označavanja. Da je slijediš, drži {{key:Mod}} i klikni označavanje, ili ga odaberi i izaberi {{ui:Idi na …}} u {{ui:Svojstva}}. {{key:Alt+Left}} vraća te na list s kojeg si došao.

Veza navodi list po njegovom broju, pa radi i nakon ponovnog otvaranja seta ili zamjene novim izdanjem: otvara najnoviji list s tim brojem. Ako taj list nije otvoren, statusna traka to kaže.

## Poveži svaku oznaku lista odjednom

Izaberi {{ui:Stranice}} › {{ui:Grupne veze…}}, ili {{ui:Poveži oznake lista…}} pod {{ui:Traži tekst}} na vrhu panela {{ui:Listovi}}.

1. **Provjeri brojeve listova.** MarkupCraft navodi svaki otvoreni list s brojem i nazivom koji je pročitao iz bloka naslova lista (ili oznake stranice), i navodi odakle je svaki došao. Ispravi pogrešne i upiši broj tamo gdje nije našao nijedan (blok naslova čiji je broj iscrtan linijama nema tekst za čitanje). Zatim izaberi {{ui:Pronađi oznake}}. Tvoje ispravke su jedan korak poništavanja i postaju oznake stranica u spašenom PDF-u.
2. **Pregledaj spisak.** MarkupCraft čita tekst svakog lista za oznake poput "3/A-501", "5 / A501", "DETALJ 2 NA A-501", balončić s "3" iznad "A-501", ili običan "A-501" u bilješci, te čita naslove pogleda svakog lista (broj detalja s brojem lista ispod, ili veliki broj s naslovom pored). Spisak ima tri dijela:
   - {{ui:Povezaće se}}: svaka oznaka, list na koji vodi i pogled na tom listu. Odznači one koje ne želiš. Ako pogled nije pronađen (oznaka za pogled 7 na listu s pogledima 1 do 6), izaberi pogled s liste pored, ili ostavi {{ui:Cijeli list}}.
   - {{ui:Nije povezano}}: brojevi listova koje nijedan otvoreni list nema, s brojem oznaka koje ih navode. Izaberi list na koji se svaki od njih odnosi (npr. list kojem je promijenjen broj), i svaka oznaka na taj broj se povezuje s njim. Ili ostavi nepovezano.
   - Koliko je oznaka već povezano i još vodi na pravo mjesto. One ostaju kakve jesu.
3. Izaberi {{ui:Napravi veze}}.

Svaka oznaka dobija tanak plavi okvir koji je veza lista. {{key:Mod}}+klik na njega otvara list uvećan na pogled. Jedno {{key:Mod+Z}} uklanja sve.

Oznake koje samo liče na brojeve listova, poput R-19 ili W12X26, se izostavljaju: oznaka mora imati oblik brojeva listova tog seta. Broj samog lista, u bloku naslova i u naslovima pogleda, nikad nije oznaka. Skenirani listovi nemaju tekst za čitanje: prvo koristi {{ui:Pročitaj tekst (OCR)…}}, ili poveži njihove oznake jednu po jednu.

## Pokreni ponovo kad se set promijeni

Grupne veze se mogu pokretati koliko god želiš:

- **Dodat je list**, npr. dodatak s A-601: otvori njegovu datoteku i pokreni Grupne veze ponovo. Oznake za A-601 koje ranije nisu bile povezane sada se povezuju.
- **Listu je promijenjen broj**: ispravi njegov broj u koraku 1. Veze koje su napravile Grupne veze, a koje više ne nalaze svoj list, navedene su pod {{ui:Nije povezano}}; izaberi list jednom i sve slijede. Veze koje su prešle na drugi pogled se ažuriraju.
- Veze koje si ručno napravio u {{ui:Svojstva}} nikad se ne mijenjaju.

## U spašenom PDF-u

Veza na list u istom PDF-u se također upisuje kao PDF veza, pa i drugi preglednici skaču tamo na klik. Veza s pogledom otvara taj pogled u drugom pregledniku (PDF skok "fit rectangle"); veza bez pogleda otvara cijeli list. Veze na list u drugoj datoteci seta rade samo u MarkupCraft.
