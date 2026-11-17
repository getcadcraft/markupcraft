---
title: Traženje teksta na crtežima
summary: Pretražite riječi na svakom listu, skočite na svaki pogodak i sve ih označite oblakom u jednom koraku.
keywords: traži, pretraži, tekst, riječ, riječi, ctrl f, potraži, bilješka, ključna bilješka, oblačić, oblakuj sve, istakni pogotke, ocr, skeniranje, skenirano, pročitaj tekst, odaberi tekst, kopiraj tekst, tesseract
from: 3435c9eb
---

{{ui:Traži tekst}}, na vrhu ploče {{ui:Listovi}}, pretražuje riječi nacrtane na samim listovima. {{ui:Traži listove}} ispod nje pretražuje samo nazive listova.

## Traženje

1. Pritisnite {{key:Mod+F}} ili otvorite {{ui:Traži tekst}}.
2. Upišite riječi, kao što su `hood` ili `verify in field`.
3. Odaberite {{ui:Svi listovi}} ili {{ui:Ovaj list}} i označite {{ui:Razlikuj velika i mala slova}} ili {{ui:Cijele riječi}} ako ih trebate.
4. Pritisnite {{key:Enter}} ili odaberite {{ui:Traži}}.

Rezultat: svaki pogodak je popisan s brojem lista i riječima oko njega i označen žutom bojom na svom listu. Odaberite pogodak kako biste otvorili njegov list i zumirali na njega.

Izraz se pronalazi i kada ga crtež dijeli na dva dijela teksta ili dva retka.

## Oblakuj sve pogotke

Odaberite {{ui:Oblakuj sve}}. Revizijski oblak obilazi svaki pogodak na popisu, na svakom listu, s „Pronađeno: <vaše riječi>“ kao komentarom. Jedan {{key:Mod+Z}} uklanja ih sve.

## Čitanje teksta sa skena (OCR)

Skenirani list je samo slika: dok se njegove riječi ne pročitaju, nema se što pronaći. Kada brojač pokaže da listovi nemaju tekst, odaberite {{ui:Pročitaj tekst (OCR)…}} ispod njega ili {{ui:Stranice}} › {{ui:Pročitaj tekst (OCR)…}}.

1. Odaberite stranice: ovaj list, svaka stranica datoteke ili svaka stranica svih otvorenih datoteka.
2. Odaberite jezik teksta. {{ui:Također engleski}} čita i engleske riječi.
3. Odaberite {{ui:Pročitaj tekst}}. Traka prikazuje stranicu koja se čita; {{ui:Zaustavi}} završava postupak i zadržava stranice koje su već pročitane.

Rezultat: riječi se mogu pronaći, odabrati i kopirati kao i svaki drugi tekst. Sve se izvodi na vašem računalu: ništa se nikamo ne šalje. U Studio verziji radi bez veze, a u pregledniku nakon što je aplikacija spremljena za offline rad (engleski i jezik vašeg sučelja) ili nakon što je jezik jednom korišten. Stranice koje već imaju tekst ostaju kakve jesu.

Kada spremite, riječi idu u PDF kao nevidljiv tekst iza slike, odvojeno od vaših oznaka, pa ih i drugi PDF programi mogu pretraživati i kopirati. Dok ne spremite, datoteka se prikazuje kao nespremljena.

## Odabir i kopiranje teksta

Odaberite {{ui:Više}} › {{ui:Odaberi tekst za kopiranje}}. Povucite od jedne riječi do druge da odaberete riječi između njih, povucite po praznom papiru da odaberete riječi unutar okvira ili dvaput kliknite jednu riječ. {{key:Mod+A}} odabire svaku riječ na listu. {{key:Mod+C}} ih kopira, zadržavajući retke. Svaki drugi alat to prekida.

## Dobro je znati

- Ni crteži čija su slova nacrtana kao linije nemaju tekst; čitanje kao slike najbolje radi na tiskanom tekstu, kao što su skenirana knjiga ili specifikacija.
- Čitač je Tesseract, ugrađen u aplikaciju s jezičnim podacima za engleski i jezike aplikacije. Pri prvom pokretanju učitava se (oko 6 MB, više za drugi jezik).
- Koliko dobro čita ovisi o skeniranju: čiste stranice pri 300 dpi čitaju se gotovo riječ po riječ; stari, blijedi ili skeni niske razlučivosti propuštaju više riječi.
- Popis prikazuje prvih 500 pogodaka; Oblakuj sve oblakuje do 2,000.
- Pogodci se brišu kada zatvorite skup, a za jednu datoteku kada promijenite njezine stranice.
