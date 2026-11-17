---
title: Svaka vrsta označavanja
summary: Sedamnaest vrsta označavanja, njihovi tasteri, kako se crtaju, podrazumevani izgled i šta postaju u sačuvanom PDF-u.
keywords: vrste označavanja, spisak alata, vrste anotacija, oblak, pokazna oznaka, tekst, beleška, pečat, olovka, isticač, linija, strelica, pravougaonik, elipsa, polilinija, poligon, dužina, površina, brojanje
from: 29bf32e7
---

## Alati

| Traka sa alatima | Taster | Kako se crta | Podrazumevani izgled | U sačuvanom PDF-u |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Prevucite | Crveno, 1.5 pt | Mastilo |
| {{ui:Highlight}} | {{key:I}} | Prevucite | Žuto, 14 pt široko, providno, boji ono što je ispod | Mastilo (označeno kao potez isticača) |
| {{ui:Line}} | {{key:L}} | Prevucite, ili kliknite početak i kraj | Crveno, 2 pt | Linija |
| {{ui:Arrow}} | {{key:A}} | Prevucite, ili kliknite početak i kraj | Crveno, 2 pt, zatvoren vrh strelice na kraju | Linija sa vrhom strelice |
| {{ui:Arc}} | {{key:O}} | Kliknite početak, tačku na luku, pa kraj | Crveno, 2 pt | Polilinija duž luka |
| {{ui:Rectangle}} | {{key:R}} | Prevucite okvir | Crveno, 2 pt, bez ispune | Kvadrat |
| {{ui:Ellipse}} | {{key:E}} | Prevucite okvir | Crveno, 2 pt, bez ispune | Krug |
| {{ui:Polyline}} | {{key:Y}} | Kliknite tačke, dvostruki klik za kraj | Crveno, 2 pt | Polilinija |
| {{ui:Polygon}} | {{key:G}} | Kliknite tačke, dvostruki klik za kraj | Crveno, 2 pt, bez ispune | Poligon |
| {{ui:Cloud}} | {{key:C}} | Prevucite okvir | Crveno, talasi od 1.5 pt | Kvadrat sa oblačastom ivicom |
| {{ui:Free cloud}} | {{key:Shift+C}} | Kliknite tačke, dvostruki klik za kraj | Crveno, talasi od 1.5 pt | Poligon sa oblačastom ivicom |
| {{ui:Callout}} | {{key:K}} | Pritisnite na tačku, prevucite do teksta, ukucajte | Crveni tekst i vodilica, 1 pt, tekst 12 pt | Polje za tekst sa vodilicom pokazne oznake |
| {{ui:Text}} | {{key:T}} | Kliknite ili prevucite okvir, ukucajte | Crveni tekst 12 pt, bez ivice | Polje za tekst |
| {{ui:Note}} | {{key:N}} | Kliknite, ukucajte | Žuta ikona beleške | Lepljiva beleška |
| {{ui:Stamp}} | {{key:S}} | Izaberite pečat, kliknite ili prevucite | Uokvirena velika slova plus „Od <ime>, <datum>“; boja prema značenju | Pečat |
| {{ui:Length}} | {{key:M}} | Kliknite početak i kraj (potrebna je razmera) | Plava kota sa crticama i dužinom | Linija označena kao kota, sa merenjem |
| {{ui:Angle}} | {{key:X}} | Kliknite kraj jednog kraka, teme, pa kraj drugog kraka | Plavi kraci, mali luk na temenu i ugao u stepenima | Polilinija sa uglom kao tekstom |
| {{ui:Area}} | {{key:Q}} | Kliknite uglove, dvostruki klik za kraj (potrebna je razmera) | Plava kontura, svetloplava ispuna, površina i obim | Poligon označen kao površina, sa merenjem |
| {{ui:Count}} | {{key:U}} | Kliknite svaku stavku | Narandžaste numerisane tačke i oznaka „grupa: n“ | Jedan komentar mastilom po grupi, prsten za svaku stavku |

Na dodirnom ekranu, „dvostruki klik za kraj“ je dvostruki dodir, a „klik“ je dodir koji deluje kada podignete prst (za tačke, beleške i brojanje).

## Šta svako označavanje nosi

| Polje | Gde ga vidite |
|---|---|
| Autor | {{ui:Properties}}, lista, drugi red pečata, drugi PDF pregledači |
| Kreirano i izmenjeno | {{ui:Properties}} (vaša vremenska zona), lista, CSV |
| Status | Otvoreno, Prihvaćeno, Odbijeno ili Završeno |
| Tema | Kratka oznaka; podrazumeva vrstu („Oblak“, „Polje za tekst“, „Merenje dužine“) |
| Komentar | Duže beleške. Za belešku, njen tekst je njen komentar. |
| Tekst | Samo polja za tekst i pokazne oznake |
| Odgovori | Nit, sa promenama statusa |
| Stavka liste nedostataka | Broj, dodeljeni, rok, status stavke, kada je dodata na listu nedostataka |
| Stil | Boja, debljina linije, ispuna i neprovidnost ispune (zatvoreni oblici, tekst i pokazne oznake), neprovidnost, veličina teksta (tekst, pokazne oznake i merenja) |

## Komentari samo za čitanje

Komentari koji su došli uz datoteku, a koje MarkupCraft ne može da menja (istaknuti tekst, pečati drugih programa i druge posebne vrste), navedeni su sa vrstom „Ostalo“ i oznakom statusa „Samo za čitanje“. Zadržavaju tačno onakav izgled kakav im datoteka daje. Možete ih izabrati, videti autora, temu i komentar, i odgovoriti na njih.

## Još nije napravljeno

Prilozi datoteka još nisu napravljeni. Svako označavanje može da se poveže sa listom; pogledajte [Veze listova](topic:sheet-links). Slike i potpisi postavljaju se alatom {{ui:Stamp}}; pogledajte [Pečati i beleške](topic:stamps-and-notes). Pogledajte [Šta još nije napravljeno](topic:not-built-yet).
