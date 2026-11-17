---
title: Ispis i promjena stranica PDF-a
summary: Ispisujte listove s njihovim oznakama te zakrećite, premještajte, umećite, brišite ili izdvajate stranice otvorenog PDF-a.
keywords: ispis, pisač, papir, stranice, stranica, zakreni, okreni, promijeni redoslijed, premjesti stranicu, umetni, dodaj stranicu, prazna stranica, izbriši stranicu, ukloni stranicu, izdvoji, podijeli, operacije sa stranicama
from: 81832d9b
---

Izbornik {{ui:Stranice}} u grupi {{ui:Datoteka}} radi na PDF-u kojem pripada otvoreni list. Vaš PDF na ovom računalu nikad se ne mijenja: promjene su dio kopije koju spremate.

## Ispis

1. Pritisnite {{key:Mod+P}} ili odaberite {{ui:Stranice}}, zatim {{ui:Ispis…}}.
2. Kad je otvoreno više listova, odaberite što ćete ispisati: {{ui:Ovaj list}}, svaku stranicu ove datoteke, cijeli skup ili stranice koje upišete (npr. `1-3, 5`).
3. Odaberite {{ui:Ispis}}. Otvara se dijaloški okvir pisača vašeg preglednika: tamo odaberite pisač, papir i mjerilo.

Oznake se ispisuju onako kako izgledaju na listu: iscrtane su u stranicama kopije koja ide na pisač. Komentari koje su izradili drugi programi ispisuju se onako kako to njihov PDF navodi.

:::safari firefox
Ako vaš preglednik ne može ispisivati iz same stranice, listovi se otvaraju kao PDF u novoj kartici. Ispišite ih odatle.
:::

## Okretanje stranice

Odaberite {{ui:Stranice}}, zatim {{ui:Zakreni stranicu udesno}} ili {{ui:Zakreni stranicu ulijevo}}. Otvoreni list se okrene za četvrtinu okreta. Njegove oznake ostaju tamo gdje su bile na crtežu, a tekst koji ste upisali okreće se sa stranicom pa i dalje čita uspravno.

## Premještanje stranice

Odaberite {{ui:Stranice}}, zatim {{ui:Pomakni stranicu ranije}} ili {{ui:Pomakni stranicu kasnije}}. Otvoreni list zamijeni mjesto sa susjedom u vlastitom PDF-u. Njegove oznake, mjerilo i broj lista idu s njim.

## Umetanje stranica

- {{ui:Umetni stranice iz PDF-a…}} stavlja svaku stranicu drugog PDF-a iza otvorenog lista.
- {{ui:Umetni praznu stranicu}} dodaje praznu stranicu iste veličine iza otvorenog lista, za skice i bilješke. U skupu napravljenom pomoću {{ui:Novo}} ima i mrežu skupa.
- U skupu napravljenom pomoću {{ui:Novo}}, {{ui:Dodaj praznu stranicu}} ispod popisa {{ui:Listovi}} dodaje još jednu stranicu kao ostale, na kraj. Pogledajte [Počnite s praznim stranicama](topic:open-a-plan-set#start-with-blank-pages).

Umetnute stranice dobivaju broj stranice kao oznaku dok ih ne preimenujete. Pogledajte [Preimenujte list](topic:open-a-plan-set#rename-a-sheet).

## Brisanje stranica

1. Odaberite {{ui:Stranice}}, zatim {{ui:Izbriši stranice…}}.
2. Upišite brojeve stranica ovog PDF-a, kao što su `3` ili `2-4`. Ispunjena je stranica otvorenog lista.
3. Odaberite {{ui:Izbriši stranice}}. Ako te stranice sadrže oznake, MarkupCraft kaže koliko ih je i pita ponovno.

PDF zadržava najmanje jednu stranicu. Da uklonite cijelu datoteku, zatvorite skup i otvorite datoteke koje su vam još potrebne.

## Izdvajanje stranica

Odaberite {{ui:Stranice}}, zatim {{ui:Izdvoji stranice…}} i upišite stranice. Preuzimaju se kao nova PDF datoteka pod nazivom „<file> (pages 1-3).pdf“, s njihovim oznakama kao komentarima koje možete nastaviti uređivati. Otvorena datoteka ostaje kakva je.

## Dobro je znati

- **Poništavanje staje na promjeni stranice.** {{key:Mod+Z}} poništava oznake nacrtane nakon nje, ali ne i samu promjenu stranice ni bilo što prije nje. Zatvorite bez spremanja da biste krenuli ispočetka iz izvornog PDF-a.
- Brojevi stranica broje stranice jednog PDF-a, a ne cijelog skupa. Premještanje stranice je zadržava unutar njezine datoteke.
- Promijenjene stranice su nespremljeni rad: {{ui:Spremi}} preuzima preuređenu kopiju, a napuštanje stranice pita prije toga.
