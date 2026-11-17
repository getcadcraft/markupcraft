---
title: Traži tekst u crtežima
summary: Pretraži riječi na svakom listu, skoči na svaki pogodak i obilježi ih sve oblakom u jednom koraku.
keywords: traži, pretraga, tekst, riječ, riječi, ctrl f, potraži, napomena, ključna napomena, obilježi sve, istakni pogotke, ocr, skeniranje, skenirano, pročitaj tekst, odaberi tekst, kopiraj tekst, tesseract
from: 3435c9eb
---

{{ui:Traži tekst}}, na vrhu panela {{ui:Listovi}}, pretražuje riječi nacrtane na samim listovima. {{ui:Pretraži listove}} ispod nje pretražuje samo nazive listova.

## Pronađi

1. Pritisni {{key:Mod+F}} ili otvori {{ui:Traži tekst}}.
2. Upiši riječi, npr. `hood` ili `verify in field`.
3. Odaberi {{ui:Svi listovi}} ili {{ui:Ovaj list}}, i označi {{ui:Razlikuj velika i mala slova}} ili {{ui:Cijele riječi}} ako ti trebaju.
4. Pritisni {{key:Enter}} ili odaberi {{ui:Pronađi}}.

Rezultat: svaki pogodak je naveden sa brojem svog lista i riječima oko njega, i obilježen žutom bojom na svom listu. Odaberi pogodak da otvoriš njegov list i zumiraš na njega.

Fraza se nađe i kad crtež razdvaja je na dva dijela teksta ili dvije linije.

## Obilježi svaki pogodak oblakom

Odaberi {{ui:Obilježi sve oblakom}}. Oblak revizije ide oko svakog pogotka sa spiska, na svakom listu, sa "Pronađeno: <tvoje riječi>" kao komentarom. Jedan {{key:Mod+Z}} uklanja sve.

## Pročitaj tekst na skeniranju (OCR)

Skenirani list je samo slika: dok se njegove riječi ne pročitaju, nema šta da se nađe. Kad brojač kaže da listovi nemaju tekst, odaberi {{ui:Pročitaj tekst (OCR)…}} ispod njega, ili {{ui:Stranice}} › {{ui:Pročitaj tekst (OCR)…}}.

1. Odaberi stranice: ovaj list, svaku stranicu datoteke ili svaku stranicu svih otvorenih datoteka.
2. Odaberi jezik teksta. {{ui:Također engleski}} čita i engleske riječi.
3. Odaberi {{ui:Pročitaj tekst}}. Traka pokazuje stranicu koja se čita; {{ui:Zaustavi}} prekida rad i zadržava stranice koje su već pročitane.

Rezultat: riječi se mogu pronaći, odabrati i kopirati kao bilo koji drugi tekst. Sve se izvodi na tvom računaru: ništa se nigdje ne šalje. Radi bez veze u verziji Studio, a u pregledaču kad je aplikacija spašena za rad van mreže (engleski i tvoj jezik interfejsa) ili kad je jezik bio jednom korišten. Stranice koje već imaju tekst ostaju kakve jesu.

Kad spasiš, riječi se upisuju u PDF kao nevidljiv tekst iza slike, osim tvojih oznaka, pa ih i drugi PDF programi mogu pretraživati i kopirati. Dok ne spasiš, datoteka se prikazuje kao nespašena.

## Odaberi i kopiraj tekst

Odaberi {{ui:Više}} › {{ui:Odaberi tekst za kopiranje}}. Prevuci od jedne riječi do druge da odabereš riječi između njih, prevuci s praznog papira da odabereš riječi u okviru, ili dvaput klikni jednu riječ. {{key:Mod+A}} odabere svaku riječ na listu. {{key:Mod+C}} kopira ih, zadržavajući redove. Svaki drugi alat to prekida.

## Dobro je znati

- Crteži čija su slova nacrtana linijama također nemaju tekst; čitanje kao slike najbolje radi na štampanom tekstu, kao što su skenirana knjiga ili specifikacija.
- Čitač je Tesseract, ugrađen u aplikaciju sa svojim jezičkim podacima za engleski i jezike aplikacije. Prvo pokretanje ga učitava (oko 6 MB, više za drugi jezik).
- Koliko dobro čita zavisi od skena: čisti listovi na 300 dpi čitaju se gotovo riječ po riječ; stari, blijedi ili skenovi niske rezolucije propuštaju više riječi.
- Spisak prikazuje prvih 500 pogodaka; {{ui:Obilježi sve oblakom}} obilježava do 2,000.
- Pogoci se brišu kad zatvoriš skup, a za jednu datoteku kad promijeniš njene stranice.
