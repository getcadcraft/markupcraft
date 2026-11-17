---
title: Očistite poteze pisala ter uvozite komentarje pregleda in napredek gradbišča
summary: Proste poteze pisala spremenite v črte, kroge, loke in pravokotnike; komentarje pregleda iz paketa za gradbeno dovoljenje in napredek gradbišča uvozite kot opombe.
keywords: pisalo, prosta roka, očisti, izravnaj, krog, črta, pravokotnik, lok, dovoljenje, komentarji pregleda, napredek, dron, skener, geodetski posnetek, opombe, csv
from: 547d8e42
---

## Očistite poteze pisala

Risajte z {{ui:Pisalo}}, nato v skupini Uredi odprite meni {{ui:Več}} in izberite {{ui:Očisti poteze pisala}}. Vsaka izbrana poteza pisala postane to, kar naj bi bila: ravna črta postane črta (natančno vodoravna ali navpična, če je bila skoraj taka), okrogla elipsa, del kroga lok, zaprta štirivogelna pravokotnik, vse drugo polilinija ali mnogokotnik. Prosti konci potez, narisanih skupaj, se povlečejo drug k drugemu. Če nobena poteza pisala ni izbrana, se očisti vsaka poteza pisala na odprtem listu. To je en korak razveljavitve: Ctrl+Z vrne prosto roko. Oblika se izračuna na vašem računalniku po fiksnih pravilih; nikamor se ne pošlje.

## Uvoz komentarjev pregleda

Paket za dovoljenje BimCraft vsebuje `01-review-comments.csv`: komentarje, ki jih bo verjetno podal pregledovalec načrtov, vsakega s pravilom, členom, tem, kar je potrebno, tem, kar je bilo ugotovljeno, in tem, kaj storiti. Na zavihku {{ui:Naloge}} odprite {{ui:Komentarji pregleda dovoljenja}} in izberite {{ui:Uvozi komentarje (CSV)}}. Vsak komentar postane opomba v stanju Odprto v stolpcu ob levem robu odprtega lista; povlecite jo na mesto, na katero se nanaša. Komentarji so izračunani iz obstoječih preverjanj, ne iz presoje pregledovalca načrtov.

## Uvoz vozlišč HAZOP

Dodatek P&ID za CadCraft nariše vozlišča študije HAZOP in jih lahko shrani kot {{ui:Vozlišča HAZOP}} (datoteka JSON). Tu odprite natisnjen list P&ID, pojdite na zavihek {{ui:Naloge}}, odprite {{ui:Vozlišča HAZOP}} in izberite {{ui:Uvozi vozlišča (JSON)}}. Vsako vozlišče postane odprt pravokotnik na listu s številko, imenom, opremo in vodi v besedilu, ekipa pa svoje ugotovitve zapiše kot odgovore nanj. List se vzame kot natisnjen v polni velikosti od spodnjega levega vogala risbe; če je bil natisnjen v drugem merilu, najprej v {{ui:Natisnjeno pri}} vnesite to število (0.5 za 1:2). Vozlišče, ki pade izven strani, ni narisano, podokno pa pove, koliko jih je. Oznake so pripomoček za študijo: kažejo, kje so vozlišča, ne presojajo študije.

## Uvoz napredka gradbišča

CivilCraft hrani vrstico za vsak let drona ali skeniranje gradbišča. Na zavihku {{ui:Naloge}} odprite {{ui:Napredek na gradbišču}} in izberite {{ui:Uvozi napredek (JSON)}}. Vsak posnetek postane opomba na odprtem listu, ki pove, koliko je narejenega, kaj je še za izkop ali nasip, kaj je bilo preveč izkopano ali zasuto in kaj štrli iz načrta. Posnetek s čim, kar štrli iz načrta, ostane v stanju Odprto; čistega sprejmete kot Sprejeto.
