---
title: Slanje oznaka crtaču kao redline
summary: Zapišite otvorene oznake kao redline datoteku za onoga tko crta promjene, zatim učitajte njegove odgovore kako bi svaka oznaka prikazala Prihvaćeno ili Odbijeno.
keywords: redline, revizija, crtač, prihvati, odbij, odgovori, cc-redline, revizijski oblak, primijeni oznake
from: cb099d04
---

Pregled je pola posla; crtež se još mora promijeniti. Redline datoteka prenosi svaku otvorenu oznaku crtaču, a crtačevi odgovori vraćaju rezultat.

## Slanje

1. Otvorite karticu {{ui:Zadaci}} i otvorite {{ui:Redline prema reviziji}}.
2. Upišite reviziju na koju se oznake odnose (na primjer B).
3. Odaberite {{ui:Izvezi redline datoteku}}.

Dobit ćete datoteku `.redline.json` s jednom stavkom po otvorenoj oznaci: njezin list, mjesto (kao udjeli lista, pa ponovni ispis u drugoj veličini i dalje odgovara, te u točkama), njezine riječi, autor i rasprava te njezin zadatak ako ga ima. Komentari samo za čitanje iz drugih programa, slike i legende su izostavljeni.

## Odgovori

Strana za crtanje odgovara na svaku stavku s Prihvaćeno, Odbijeno ili Gotovo, uz napomenu, u datoteci `.redline-answers.json`. Odaberite {{ui:Učitaj datoteku s odgovorima…}} i odaberite je: svaka oznaka dobiva taj status i crtačevu napomenu u svojoj raspravi, a zadatak čija je oznaka prihvaćena ili gotova se završava. Jedan korak poništavanja vraća sve odgovore.

Format datoteke opisan je u `docs/REDLINE-FORMAT.md`. Dio za CadCraft (čitanje paketa, prihvaćanje ili odbijanje svake stavke, revizijski oblaci i zapisnik) izrađuje se odvojeno.
