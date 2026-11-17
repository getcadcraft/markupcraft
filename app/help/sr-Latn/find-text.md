---
title: Pronađite tekst na crtežima
summary: Pretražite reči na svakom listu, skočite na svaki pogodak i obeležite ih sve oblakom u jednom koraku.
keywords: traži, pretraga, tekst, reč, reči, ctrl f, potraži, napomena, ključna napomena, izvučena napomena, obeleži sve oblakom, istakni pogotke, ocr, skeniranje, skenirano, pročitaj tekst, izaberi tekst, kopiraj tekst, tesseract
from: 3435c9eb
---

{{ui:Traži tekst}}, na vrhu panela {{ui:Listovi}}, pretražuje reči nacrtane na samim listovima. {{ui:Pretraži listove}} ispod njega pretražuje samo nazive listova.

## Pronađite

1. Pritisnite {{key:Mod+F}} ili otvorite {{ui:Traži tekst}}.
2. Upišite reči, na primer `napa` ili `proveri na terenu`.
3. Izaberite {{ui:Svi listovi}} ili {{ui:Ovaj list}}, i štiklirajte {{ui:Razlikuj velika i mala slova}} ili {{ui:Cele reči}} ako vam trebaju.
4. Pritisnite {{key:Enter}} ili izaberite {{ui:Traži}}.

Rezultat: svaki pogodak je naveden sa brojem svog lista i rečima oko njega i obeležen žutom bojom na svom listu. Izaberite pogodak da otvorite njegov list i zumirate do njega.

Izraz se pronalazi i kada ga je crtež razdvojio na dva dela teksta ili dve linije.

## Obeležite svaki pogodak oblakom

Izaberite {{ui:Obeleži sve oblakom}}. Revizioni oblak ide oko svakog pogotka sa spiska, na svakom listu, sa komentarom „Pronađeno: <vaše reči>“. Jedan {{key:Mod+Z}} uklanja sve njih.

## Pročitajte tekst na skenu (OCR)

Skenirani list je samo slika: dok se njegove reči ne pročitaju, nema šta da se nađe. Kad brojač kaže da listovi nemaju tekst, izaberite {{ui:Pročitaj tekst (OCR)…}} ispod njega, ili {{ui:Stranice}} › {{ui:Pročitaj tekst (OCR)…}}.

1. Izaberite stranice: ovaj list, svaku stranicu datoteke ili svaku stranicu svih otvorenih datoteka.
2. Izaberite jezik teksta. {{ui:Takođe engleski}} čita i engleske reči.
3. Izaberite {{ui:Pročitaj tekst}}. Traka prikazuje stranicu koja se čita; {{ui:Zaustavi}} završava obradu i zadržava stranice koje su već pročitane.

Rezultat: reči se mogu pronaći, izabrati i kopirati kao bilo koji drugi tekst. Sve se izvršava na vašem računaru: ništa se ne šalje nigde. Radi bez veze u programu Studio, a u pregledaču kad je aplikacija sačuvana za rad van mreže (engleski i jezik vašeg interfejsa) ili kad je jezik već jednom korišćen. Stranice koje već imaju tekst ostaju kakve jesu.

Pri čuvanju, reči se upisuju u PDF kao nevidljiv tekst iza slike, odvojeno od vaših označavanja, pa ih i drugi PDF programi mogu pretraživati i kopirati. Dok ne sačuvate, datoteka se prikazuje kao nesačuvana.

## Izaberite i kopirajte tekst

Izaberite {{ui:Više}} › {{ui:Izaberi tekst za kopiranje}}. Prevucite od jedne reči do druge da izaberete reči između njih, prevucite s prazne površine da izaberete reči u okviru ili dvaput kliknite jednu reč. {{key:Mod+A}} bira svaku reč na listu. {{key:Mod+C}} ih kopira, zadržavajući redove. Svaki drugi alat to prekida.

## Dobro je znati

- Crteži čija su slova nacrtana kao linije takođe nemaju tekst; čitanje kao slike najbolje radi na štampanom tekstu, kao što su skenirana knjiga ili specifikacija.
- Čitač je Tesseract, ugrađen u aplikaciju sa jezičkim podacima za engleski i jezike aplikacije. Prvo pokretanje ga učitava (oko 6 MB, više za drugi jezik).
- Koliko dobro čita zavisi od skena: čisti listovi na 300 dpi čitaju se gotovo reč po reč; stari, bledi ili skeni male rezolucije propuštaju više reči.
- Spisak prikazuje prvih 500 pogodaka; {{ui:Obeleži sve oblakom}} obeležava do 2.000.
- Pogoci se brišu kad zatvorite skup, a za jednu datoteku kad promenite njene stranice.
