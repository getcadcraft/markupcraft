---
title: Svaka vrsta oznake
summary: Sedamnaest vrsta oznaka, njihove tipke, način crtanja, zadani izgled i ono što postaju u spremljenom PDF-u.
keywords: vrste oznaka, popis alata, vrste anotacija, oblak, oblačić, tekst, bilješka, pečat, olovka, isticanje, linija, strelica, pravokutnik, elipsa, polilinija, poligon, duljina, površina, brojanje
from: 29bf32e7
---

## Alati

| Alatna traka | Tipka | Kako se crta | Zadani izgled | U spremljenom PDF-u |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Povucite | Crveno, 1.5 pt | Tinta |
| {{ui:Highlight}} | {{key:I}} | Povucite | Žuto, široko 14 pt, prozirno, boji ono što je ispod | Tinta (označeno kao potez isticanja) |
| {{ui:Line}} | {{key:L}} | Povucite ili kliknite početak i kraj | Crveno, 2 pt | Linija |
| {{ui:Arrow}} | {{key:A}} | Povucite ili kliknite početak i kraj | Crveno, 2 pt, zatvoreni vrh strelice na kraju | Linija s vrhom strelice |
| {{ui:Arc}} | {{key:O}} | Kliknite početak, točku na luku, zatim kraj | Crveno, 2 pt | Polilinija duž luka |
| {{ui:Rectangle}} | {{key:R}} | Povucite okvir | Crveno, 2 pt, bez ispune | Kvadrat |
| {{ui:Ellipse}} | {{key:E}} | Povucite okvir | Crveno, 2 pt, bez ispune | Kružnica |
| {{ui:Polyline}} | {{key:Y}} | Kliknite točke, dvostrukim klikom završite | Crveno, 2 pt | Polilinija |
| {{ui:Polygon}} | {{key:G}} | Kliknite točke, dvostrukim klikom završite | Crveno, 2 pt, bez ispune | Poligon |
| {{ui:Cloud}} | {{key:C}} | Povucite okvir | Crveno, lukovi 1.5 pt | Kvadrat s oblačastim rubom |
| {{ui:Free cloud}} | {{key:Shift+C}} | Kliknite točke, dvostrukim klikom završite | Crveno, lukovi 1.5 pt | Poligon s oblačastim rubom |
| {{ui:Callout}} | {{key:K}} | Pritisnite na točku, povucite do teksta, upišite | Crveni tekst i vodilica, 1 pt, tekst 12 pt | Tekstni okvir s vodilicom oblačića |
| {{ui:Text}} | {{key:T}} | Kliknite ili povucite okvir, upišite | Crveni tekst 12 pt, bez okvira | Tekstni okvir |
| {{ui:Note}} | {{key:N}} | Kliknite, upišite | Žuta ikona bilješke | Ljepljiva bilješka |
| {{ui:Stamp}} | {{key:S}} | Odaberite pečat, kliknite ili povucite | Velika slova u okviru plus „Po <name>, <date>“; obojano prema značenju | Pečat |
| {{ui:Length}} | {{key:M}} | Kliknite početak i kraj (treba mjerilo) | Plava kota s oznakama i duljinom | Linija označena kao kota, s mjerenjem |
| {{ui:Angle}} | {{key:X}} | Kliknite kraj jednog kraka, kut, zatim kraj drugog kraka | Plavi kraci, mali luk u kutu i kut u stupnjevima | Polilinija s kutom kao tekstom |
| {{ui:Area}} | {{key:Q}} | Kliknite kutove, dvostrukim klikom završite (treba mjerilo) | Plavi obris, svijetloplava ispuna, površina i opseg | Poligon označen kao površina, s mjerenjem |
| {{ui:Count}} | {{key:U}} | Kliknite svaku stavku | Narančaste numerirane točke i oznaka „grupa: n“ | Jedan komentar tintom po grupi, prsten po stavci |

Na dodiru je „dvostruki klik za završetak“ dvostruki dodir, a „klik“ je dodir koji djeluje kad podignete prst (za točke, bilješke i brojanja).

## Što nosi svaka oznaka

| Polje | Gdje je vidite |
|---|---|
| Autor | {{ui:Properties}}, popis, drugi red pečata, drugi PDF preglednici |
| Stvoreno i izmijenjeno | {{ui:Properties}} (vaša vremenska zona), popis, CSV |
| Status | Otvoreno, Prihvaćeno, Odbijeno ili Dovršeno |
| Predmet | Kratka oznaka; zadano je vrsta („Oblak“, „Tekstni okvir“, „Mjerenje duljine“) |
| Komentar | Duže bilješke. Za bilješku je njen tekst ujedno i komentar. |
| Tekst | Samo tekstni okviri i oblačići |
| Odgovori | Nit, sa promjenama statusa |
| Stavka popisa nedostataka | Broj, dodijeljeno, rok, status stavke, kad je dodana na popis nedostataka |
| Stil | Boja, debljina linije, ispuna i neprozirnost ispune (zatvoreni oblici, tekst i oblačići), neprozirnost, veličina teksta (tekst, oblačići i mjerenja) |

## Oznake samo za čitanje

Komentari koji su došli s datotekom, a MarkupCraft ih ne može uređivati (isticanja teksta, pečati drugih programa i druge posebne vrste), navedeni su s vrstom „Ostalo“ i oznakom statusa „Samo za čitanje“. Zadržavaju točno onakav izgled kakav im datoteka daje. Možete ih odabrati, vidjeti autora, predmet i komentar te im odgovoriti.

## Još nije izrađeno

Privitci datoteka još nisu izrađeni. Svaka oznaka može se povezati s listom; vidi [Poveznice na listove](topic:sheet-links). Slike i potpisi postavljaju se alatom {{ui:Stamp}}; vidi [Pečati i bilješke](topic:stamps-and-notes). Vidi [Što još nije izrađeno](topic:not-built-yet).
