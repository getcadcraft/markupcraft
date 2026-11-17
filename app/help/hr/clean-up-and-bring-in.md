---
title: Očistite poteze olovke i uvezite komentare pregleda i napredak gradilišta
summary: Pretvorite slobodnoručne poteze olovke u linije, kružnice, lukove i pravokutnike; uvezite komentare pregleda iz paketa dozvole i napredak snimanja gradilišta kao bilješke.
keywords: olovka, slobodnoručno, očisti, poravnaj, kružnica, linija, pravokutnik, luk, dozvola, komentari pregleda, napredak, dron, skeniranje, snimanje, bilješke, csv
from: 547d8e42
---

## Očistite poteze olovke

Crtajte s {{ui:Olovka}}, zatim otvorite izbornik {{ui:Više}} u grupi Uređivanje i odaberite {{ui:Očisti poteze olovke}}. Svaki odabrani potez olovke postaje ono što je trebao biti: ravan potez postaje linija (točno vodoravna ili okomita kad je bila gotovo takva), zaobljen potez postaje elipsa, dio kružnice postaje luk, zatvoren četverokutni potez postaje pravokutnik, a sve ostalo polilinija ili poligon. Krajevi poteza nacrtanih zajedno povlače se jedan na drugi. Ako nijedan potez olovke nije odabran, čisti se svaki potez olovke na otvorenom listu. To je jedan korak poništavanja: {{key:Ctrl+Z}} vraća slobodnoručni crtež. Oblik se računa na vašem računalu prema fiksnim pravilima; ništa se nigdje ne šalje.

## Uvezite komentare pregleda

Paket dozvole programa BimCraft sadrži `01-review-comments.csv`: komentare koje će vjerojatno napisati pregledavatelj plana, svaki s pravilom, točkom, onim što je potrebno, onim što je pronađeno i što učiniti. Na kartici {{ui:Zadaci}} otvorite {{ui:Komentari pregleda dozvole}} i odaberite {{ui:Uvezi komentare (CSV)}}. Svaki komentar postaje bilješka sa statusom Otvoreno u stupcu niz lijevu stranu otvorenog lista; povucite svaki na mjesto na koje se odnosi. Komentari su izračunati iz postojećih provjera, a ne od strane službenika za dozvole.

## Uvezite HAZOP čvorove

Dodatak P&ID programa CadCraft crta čvorove HAZOP studije i može ih spremiti kao {{ui:HAZOP čvorovi}} (JSON datoteka). Ovdje otvorite ispisani P&ID list, idite na karticu {{ui:Zadaci}}, otvorite {{ui:HAZOP čvorovi}} i odaberite {{ui:Uvezi okvire čvorova (JSON)}}. Svaki čvor postaje pravokutnik sa statusom Otvoreno na listu, s brojem, nazivom, opremom i linijama u tekstu, a tim svoje nalaze piše kao odgovore na njemu. List se uzima kao ispisan u punoj veličini od donjeg lijevog kuta crteža; ako je ispisan u drugom mjerilu, prvo upišite taj broj u {{ui:Ispisano u}} (0.5 za 1:2). Čvor koji je izvan stranice se ne crta, a okvir kaže koliko ih je. Oznake su pomoćno sredstvo za studiju: pokazuju gdje su čvorovi, ali ne ocjenjuju studiju.

## Uvezite napredak gradilišta

CivilCraft vodi redak za svaki let dronom ili skeniranje gradilišta. Na kartici {{ui:Zadaci}} otvorite {{ui:Napredak na gradilištu}} i odaberite {{ui:Uvezi napredak (JSON)}}. Svako snimanje postaje bilješka na otvorenom listu koja kaže koliko je gotovo, što preostaje za iskop ili nasip, što je previše iskopano ili nasuto i što stoji izvan plana. Snimanje s nečim izvan plana ostaje Otvoreno; čisto snimanje je Prihvaćeno.
