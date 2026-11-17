---
title: Štampajte i mijenjajte stranice PDF-a
summary: Štampajte listove s njihovim označavanjima, a okrećite, pomjerajte, umećite, brišite ili izdvajajte stranice otvorenog PDF-a.
keywords: štampa, štampač, papir, stranice, stranica, okreni, rotiraj, preuredi, pomjeri stranicu, umetni, dodaj stranicu, prazna stranica, obriši stranicu, ukloni stranicu, izdvoji, podijeli, operacije sa stranicama
from: 81832d9b
---

Meni {{ui:Pages}} u grupi Datoteka radi na PDF-u kojem pripada otvoreni list. Vaš PDF na ovom računaru se nikad ne mijenja: promjene su dio kopije koju spasite.

## Štampanje

1. Pritisnite {{key:Mod+P}}, ili odaberite {{ui:Pages}}, pa {{ui:Print…}}.
2. Kad je otvoreno više listova, odaberite šta štampati: {{ui:This sheet}}, svaku stranicu ove datoteke, cijeli set, ili stranice koje upišete (na primjer `1-3, 5`).
3. Odaberite {{ui:Print}}. Otvara se dijalog štampača vašeg pregledača: tamo odaberite štampač, papir i razmjeru.

Označavanja se štampaju kako izgledaju na listu: crtaju se na stranice kopije koja ide u štampač. Komentari koje su napravili drugi programi štampaju se onako kako to kaže njihov PDF.

:::safari firefox
Ako vaš pregledač ne može štampati iz same stranice, listovi se otvaraju kao PDF u novoj kartici. Štampajte odatle.
:::

## Okrenite stranicu

Odaberite {{ui:Pages}}, pa {{ui:Rotate page clockwise}} ili {{ui:Rotate page counterclockwise}}. Otvoreni list se okrene za četvrt okreta. Njegova označavanja ostaju tamo gdje su bila na crtežu, a tekst koji ste upisali okreće se sa stranicom da i dalje čita uspravno.

## Pomjerite stranicu

Odaberite {{ui:Pages}}, pa {{ui:Move page earlier}} ili {{ui:Move page later}}. Otvoreni list mijenja mjesto sa susjedom u svom PDF-u. Njegova označavanja, razmjera i broj lista idu s njim.

## Umetanje stranica

- {{ui:Insert pages from a PDF…}} stavlja svaku stranicu drugog PDF-a iza otvorenog lista.
- {{ui:Insert a blank page}} dodaje praznu stranicu iste veličine iza otvorenog lista, za skice i bilješke. U setu napravljenom s {{ui:New}}, ona ima i mrežu tog seta.
- U setu napravljenom s {{ui:New}}, {{ui:Add a blank page}} ispod liste {{ui:Sheets}} dodaje još jednu stranicu kao ostale, na kraj. Pogledajte [Počnite s praznim stranicama](topic:open-a-plan-set#start-with-blank-pages).

Umetnute stranice dobijaju svoj broj stranice kao oznaku dok ih ne preimenujete. Pogledajte [Preimenujte list](topic:open-a-plan-set#rename-a-sheet).

## Brisanje stranica

1. Odaberite {{ui:Pages}}, pa {{ui:Delete pages…}}.
2. Upišite brojeve stranica ovog PDF-a, kao što su `3` ili `2-4`. Stranica otvorenog lista je popunjena.
3. Odaberite {{ui:Delete pages}}. Ako te stranice imaju označavanja, MarkupCraft kaže koliko ih ima i pita ponovo.

PDF zadržava najmanje jednu stranicu. Da uklonite cijelu datoteku, zatvorite set i otvorite datoteke koje su vam još potrebne.

## Izdvajanje stranica

Odaberite {{ui:Pages}}, pa {{ui:Extract pages…}}, i upišite stranice. Preuzimaju se kao novi PDF pod nazivom „<file> (pages 1-3).pdf”, s njihovim označavanjima kao komentarima koje možete dalje uređivati. Otvorena datoteka ostaje kakva jeste.

## Dobro je znati

- **Poništavanje staje na promjeni stranice.** {{key:Mod+Z}} poništava označavanja nacrtana nakon nje, ali ne i samu promjenu stranice ili bilo šta prije nje. Zatvorite bez spašavanja da počnete ispočetka iz originalnog PDF-a.
- Brojevi stranica broje stranice jednog PDF-a, a ne cijelog seta. Pomjeranje stranice je zadržava unutar njene datoteke.
- Promijenjene stranice su nesačuvani rad: {{ui:Save}} preuzima preuređenu kopiju, a odlazak pita prije.
