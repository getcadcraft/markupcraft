---
title: Pošaljite označavanja projektantu kao redline
summary: Zapišite otvorena označavanja kao redline datoteku za onoga ko crta izmjene, pa učitajte njihove odgovore da svako označavanje pokaže Prihvaćeno ili Odbijeno.
keywords: redline, revizija, projektant, prihvati, odbij, odgovori, cc-redline, revizioni oblak, primijeni označavanja
from: cb099d04
---

Pregled je pola posla; crtež se i dalje mora promijeniti. Redline datoteka nosi svako otvoreno označavanje projektantu, a projektantovi odgovori vraćaju rezultat.

## Slanje

1. Otvorite karticu {{ui:Tasks}} i otvorite {{ui:Redline to revision}}.
2. Upišite reviziju na koju se označavanja odnose (na primjer B).
3. Odaberite {{ui:Export redline file}}.

Dobijate datoteku `.redline.json` s po jednom stavkom za svako otvoreno označavanje: njen list, gdje se nalazi (kao razlomci lista, pa se ponovni ispis u drugoj veličini i dalje poklapa, te u tačkama), njene riječi, autor i nit, i njen zadatak ako ga ima. Komentari samo za čitanje iz drugih programa, slike i legende se izostavljaju.

## Odgovori

Projektantska strana odgovara na svaku stavku sa Prihvaćeno, Odbijeno ili Urađeno, s napomenom, u datoteci `.redline-answers.json`. Odaberite {{ui:Load answers file…}} i izaberite je: svako označavanje dobija taj status i napomenu projektanta u svojoj niti, a zadatak čije je označavanje prihvaćeno ili urađeno je završen. Jedan korak poništavanja vraća sve odgovore.

Format datoteke je u `docs/REDLINE-FORMAT.md`. CadCraft strana (čitanje paketa, prihvatanje ili odbijanje svake stavke, revizioni oblaci i dnevnik) se pravi odvojeno.
