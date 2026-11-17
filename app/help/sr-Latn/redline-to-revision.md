---
title: Pošaljite označavanja crtaču kao crvenu liniju
summary: Zapišite otvorena označavanja kao datoteku crvene linije za onoga ko crta izmene, pa učitajte njegove odgovore kako bi svako označavanje pokazalo Prihvaćeno ili Odbijeno.
keywords: crvena linija, revizija, crtač, prihvati, odbij, odgovori, cc-redline, oblak revizije, primeni označavanja
from: cb099d04
---

Pregled je pola posla; crtež još mora da se menja. Datoteka crvene linije nosi svako otvoreno označavanje crtaču, a crtačevi odgovori vraćaju rezultat.

## Pošaljite

1. Otvorite karticu {{ui:Zadaci}} i otvorite {{ui:Crvena linija do revizije}}.
2. Upišite reviziju na koju se označavanja odnose (na primer B).
3. Izaberite {{ui:Izvezi datoteku crvene linije}}.

Dobijate datoteku `.redline.json` sa jednom stavkom po otvorenom označavanju: njen list, gde se nalazi (kao razlomci lista, pa se ponovno štampanje u drugoj veličini i dalje poklapa, i u tačkama), njene reči, autor i nit, i njen zadatak ako ga ima. Komentari samo za čitanje iz drugih programa, slike i legende su izostavljeni.

## Odgovori

Strana koja crta odgovara na svaku stavku sa Prihvaćeno, Odbijeno ili Urađeno, uz belešku, u datoteci `.redline-answers.json`. Izaberite {{ui:Učitaj datoteku odgovora…}} i izaberite je: svako označavanje dobija taj status i belešku crtača u svojoj niti, a zadatak čije je označavanje prihvaćeno ili urađeno se završava. Jedan korak opozivanja vraća sve odgovore.

Format datoteke je u `docs/REDLINE-FORMAT.md`. CadCraft deo (čitanje paketa, prihvatanje ili odbijanje svake stavke, oblaci revizije i dnevnik) pravi se posebno.
