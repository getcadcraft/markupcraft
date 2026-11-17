---
title: Svaka vrsta oznake
summary: Sedamnaest vrsta oznaka, njihove tipke, kako se crtaju, podrazumijevani izgled i šta postaju u sačuvanom PDF-u.
keywords: vrste oznaka, lista alata, vrste anotacija, oblak, izvučena oznaka, tekst, bilješka, pečat, olovka, isticač, linija, strelica, pravougaonik, elipsa, polilinija, poligon, dužina, površina, brojanje
from: 29bf32e7
---

## Alati

| Traka s alatima | Tipka | Kako se crta | Podrazumijevani izgled | U sačuvanom PDF-u |
|---|---|---|---|---|
| {{ui:Olovka}} | {{key:P}} | Prevuci | Crveno, 1.5 pt | Tinta |
| {{ui:Isticanje}} | {{key:I}} | Prevuci | Žuto, 14 pt široko, prozirno, boji ono što je ispod | Tinta (označena kao potez isticača) |
| {{ui:Linija}} | {{key:L}} | Prevuci, ili klikni početak i kraj | Crveno, 2 pt | Linija |
| {{ui:Strelica}} | {{key:A}} | Prevuci, ili klikni početak i kraj | Crveno, 2 pt, zatvoren vrh strelice na kraju | Linija s vrhom strelice |
| {{ui:Luk}} | {{key:O}} | Klikni početak, tačku na luku, zatim kraj | Crveno, 2 pt | Polilinija duž luka |
| {{ui:Pravougaonik}} | {{key:R}} | Prevuci okvir | Crveno, 2 pt, bez ispune | Kvadrat |
| {{ui:Elipsa}} | {{key:E}} | Prevuci okvir | Crveno, 2 pt, bez ispune | Krug |
| {{ui:Polilinija}} | {{key:Y}} | Klikni tačke, dvostruki klik za završetak | Crveno, 2 pt | Polilinija |
| {{ui:Poligon}} | {{key:G}} | Klikni tačke, dvostruki klik za završetak | Crveno, 2 pt, bez ispune | Poligon |
| {{ui:Oblak}} | {{key:C}} | Prevuci okvir | Crveno, 1.5 pt ispupčenja | Kvadrat s oblačnom ivicom |
| {{ui:Slobodni oblak}} | {{key:Shift+C}} | Klikni tačke, dvostruki klik za završetak | Crveno, 1.5 pt ispupčenja | Poligon s oblačnom ivicom |
| {{ui:Izvučena oznaka}} | {{key:K}} | Pritisni na tačku, prevuci do teksta, upiši | Crveni tekst i vodilica, 1 pt, tekst 12 pt | Tekstualno polje s vodilicom izvučene oznake |
| {{ui:Tekst}} | {{key:T}} | Klikni ili prevuci okvir, upiši | Crveni tekst 12 pt, bez ivice | Tekstualno polje |
| {{ui:Bilješka}} | {{key:N}} | Klikni, upiši | Žuta ikona bilješke | Lijepljiva bilješka |
| {{ui:Pečat}} | {{key:S}} | Odaberi pečat, klikni ili prevuci | Uokvirena VELIKA SLOVA plus „Od <ime>, <datum>”; obojeno prema značenju | Pečat |
| {{ui:Dužina}} | {{key:M}} | Klikni početak i kraj (potrebna razmjera) | Plava linija kote sa crticama i dužinom | Linija označena kao kota, s mjerenjem |
| {{ui:Ugao}} | {{key:X}} | Klikni kraj jednog kraka, zatim ugao, pa kraj drugog kraka | Plavi kraci, mali luk u uglu i ugao u stepenima | Polilinija s uglom kao tekstom |
| {{ui:Površina}} | {{key:Q}} | Klikni uglove, dvostruki klik za završetak (potrebna razmjera) | Plava kontura, svijetloplava ispuna, površina i obim | Poligon označen kao površina, s mjerenjem |
| {{ui:Brojanje}} | {{key:U}} | Klikni svaku stavku | Narandžaste numerisane tačke i oznaka „grupa: n” | Jedan komentar tintom po grupi, prsten po stavci |

Na ekranu osjetljivom na dodir, „dvostruki klik za završetak” je dvostruki dodir, a „klik” je dodir koji djeluje kada podigneš prst (za tačke, bilješke i brojanja).

## Šta nosi svaka oznaka

| Polje | Gdje se vidi |
|---|---|
| Autor | {{ui:Svojstva}}, lista, drugi red pečata, drugi PDF pregledači |
| Kreirano i izmijenjeno | {{ui:Svojstva}} (tvoja vremenska zona), lista, CSV |
| Status | Otvoren, Prihvaćen, Odbijen ili Završen |
| Tema | Kratka oznaka; podrazumijevano je vrsta („Oblak”, „Tekstualno polje”, „Mjerenje dužine”) |
| Komentar | Duže bilješke. Za bilješku, njen tekst je njen komentar. |
| Tekst | Samo tekstualna polja i izvučene oznake |
| Odgovori | Nit, sa promjenama statusa |
| Stavka ispravke | Broj, izvršilac, rok, status stavke, kada se doda na {{ui:Lista ispravki}} |
| Stil | Boja, debljina linije, ispuna i neprozirnost ispune (zatvoreni oblici, tekst i izvučene oznake), neprozirnost, veličina teksta (tekst, izvučene oznake i mjerenja) |

## Komentari samo za čitanje

Komentari koji su došli uz datoteku, a koje MarkupCraft ne može uređivati (isticanja teksta, pečati drugih programa i druge posebne vrste), navedeni su s vrstom „Ostalo” i statusnom oznakom „Samo za čitanje”. Zadržavaju tačno onaj izgled koji im datoteka daje. Možeš ih odabrati, vidjeti autora, temu i komentar, i odgovoriti na njih.

## Još nije napravljeno

Prilozi datoteka još nisu napravljeni. Bilo koja oznaka može se povezati s listom; vidi [Linkovi na listove](topic:sheet-links). Slike i potpisi postavljaju se alatom {{ui:Pečat}}; vidi [Pečati i bilješke](topic:stamps-and-notes). Vidi [Šta još nije napravljeno](topic:not-built-yet).
