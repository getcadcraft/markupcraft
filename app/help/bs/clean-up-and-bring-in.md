---
title: Očisti poteze olovke, te uvezi komentare pregleda i napredak gradilišta
summary: Pretvori slobodnoručne poteze olovke u linije, krugove, lukove i pravougaonike; uvezi komentare pregleda dozvole i napredak snimanja gradilišta kao bilješke.
keywords: olovka, slobodno, očisti, ispravi, krug, linija, pravougaonik, luk, dozvola, komentari pregleda, napredak, dron, skeniranje, snimanje, bilješke, csv
from: 547d8e42
---

## Očisti poteze olovke

Crtaj s {{ui:Olovka}}, zatim otvori meni {{ui:Više}} u grupi Uredi i izaberi {{ui:Očisti poteze olovke}}. Svaki odabrani potez olovke postaje ono što je trebalo biti: ravan potez postaje linija (tačno vodoravna ili vertikalna ako je bila gotovo takva), okrugao elipsa, dio kruga luk, zatvoren četvorougaoni pravougaonik, a sve ostalo polilinija ili poligon. Krajevi poteza nacrtanih zajedno povlače se jedan na drugi. Ako nijedan potez olovke nije odabran, očisti se svaki potez olovke na otvorenom listu. To je jedan korak poništavanja: Ctrl+Z vraća slobodnoručni potez. Oblik se računa na tvom računaru prema fiksnim pravilima; ništa se nigdje ne šalje.

## Uvezi komentare pregleda

BimCraft-ov paket dozvole sadrži `01-review-comments.csv`: komentare koje će vjerovatno dati revizor plana, svaki sa pravilom, članom, onim što treba, onim što je nađeno i šta uraditi. U kartici {{ui:Zadaci}} otvori {{ui:Komentari pregleda dozvole}} i izaberi {{ui:Uvezi komentare (CSV)}}. Svaki komentar postaje bilješka u statusu Otvoreno, u koloni uz lijevu ivicu otvorenog lista; prevuci svaki na mjesto na koje se odnosi. Oni se računaju iz postojećih provjera, a ne od službenika za planove.

## Uvezi HAZOP kutije čvorova

CadCraft-ov dodatak za P&ID crta čvorove HAZOP studije i može ih spasiti kao {{ui:HAZOP kutije čvorova}} (JSON datoteka). Otvori štampani P&ID list ovdje, idi na karticu {{ui:Zadaci}}, otvori {{ui:HAZOP kutije čvorova}} i izaberi {{ui:Uvezi kutije čvorova (JSON)}}. Svaki čvor postaje pravougaonik u statusu Otvoreno na listu, s brojem, nazivom, opremom i linijama u tekstu, a tim upisuje nalaze kao odgovore na njega. List se uzima kao štampan u punoj veličini od donjeg lijevog ugla crteža; ako je štampan u drugoj razmjeri, prvo upiši taj broj u {{ui:Štampano u}} (0.5 za 1:2). Čvor koji je van stranice se ne crta, a panel kaže koliko ih je. Oznake su pomoćno sredstvo za studiju: pokazuju gdje su čvorovi, ali ne ocjenjuju studiju.

## Uvezi napredak gradilišta

CivilCraft čuva red za svaki let drona ili snimanje gradilišta. U kartici {{ui:Zadaci}} otvori {{ui:Napredak gradilišta}} i izaberi {{ui:Uvezi napredak (JSON)}}. Svako snimanje postaje bilješka na otvorenom listu koja kaže koliko je urađeno, šta preostaje da se iskopa ili nasipa, šta je previše iskopano ili nasuto i šta strši iz plana. Snimanje sa nečim što strši iz plana ostaje u statusu Otvoreno; čisto snimanje dobija status Prihvaćeno.
