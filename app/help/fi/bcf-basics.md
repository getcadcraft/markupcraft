---
title: BCF-perusteet
summary: Mitä MarkupCraftin BCF-vienti sisältää, miten sitä käytetään BIM-koordinointityökaluissa ja mitkä sen rajat ovat.
keywords: bcf, bcfzip, bim collaboration format, havainnot, koordinointi, törmäys, aiheet, näkymä, kuvankaappaus, openbim, buildingsmart, vie havainnot
from: 446f38c1
---

BCF (BIM Collaboration Format) on avoin tiedostomuoto, jolla havaintoja siirretään BIM-työkalujen välillä. Monet mallikoordinointi- ja suunnitteluohjelmat voivat tuoda `.bcfzip`-tiedoston havaintoluettelona. MarkupCraft kirjoittaa **BCF 2.1** -tiedostoja.

## Tee tiedosto

1. Avaa {{ui:Merkinnät}}-välilehti.
2. Rajaa luettelo siihen, mitä haluat lähettää, esimerkiksi {{ui:Tila}} ”Open”. Vain luetellut merkinnät viedään.
3. Valitse {{ui:BCF}}.
4. Odota, kun jokaisesta merkinnästä tehdään kuvankaappaus (”Tehdään BCF-kuvankaappauksia (5/20)…”).

Tulos: ”<name> markups.bcfzip” latautuu, ja tilarivillä kerrotaan aiheiden määrä ja tiedoston koko.

## Mitä tiedostoon tulee

Jokaisesta merkinnästä tulee yksi **aihe**.

| Aiheen kenttä | Täytetään |
|---|---|
| Otsikko | Pistenumero, aihe ja arkki, esimerkiksi ”#4 Pilvi kohteessa A-101 — Pohjakuva” |
| Tyyppi | Merkintälaji (Pilvi, Selite, Pituus…) |
| Tila | Open, Accepted, Rejected tai Completed |
| Tunnisteet | Merkintälaji ja arkki |
| Tekijä ja päivämäärät | Merkinnän tekijä sekä luonti- ja muokkauspäivä |
| Vastuuhenkilö, eräpäivä | Puutelistan kohteesta, jos sellainen on |
| Kuvaus | Merkinnän teksti tai leiman sanamuoto, mitattu arvo, kommentti sekä arkki ja tiedosto |
| Kommentit | Yksi jokaista vastausta kohden, tekijä ja päivämäärä mukana |
| Kuvankaappaus | Kuva merkinnästä sen kohdalla arkilla |
| Näkymä | Ylhäältä päin kuvattu näkymä merkinnän paikasta arkilla |

Kun sama merkintä viedään uudelleen, sen aihetunnus on sama, joten BCF-tuonnin lukeva työkalu tunnistaa sen samaksi havainnoksi.

## Rajoitukset

- **Arkki ei ole malli.** Näkymä osoittaa merkinnän paikan paperilla, mitattuna paperimetreinä. Se ei vie BIM-työkalua mallin kohtaan. Etsi paikka kuvankaappauksen ja arkin nimen avulla.
- **Tilat ja tyypit ovat MarkupCraftin omia** (Open, Accepted, Rejected, Completed; Pilvi, Selite…). Tiedosto ilmoittaa ne BCF:n sallimalla tavalla, mutta työkalu, jolla on omat kiinteät luettelot, voi yhdistää ne toisiin tai jättää ne huomiotta.
- **Tuonti tuo kommentit, ei mallinäkymiä.** {{ui:Tuo BCF}} lisää vastaukset ja tilat vietyihin merkintöihin ja tekee muistiinpanoja muista havainnoista. Se ei voi näyttää mallin kameraa. Katso [Merkintäluettelo ja vienti](topic:markups-list-and-export#import-bcf).
- Merkintöjen lähettäminen takaisin PDF-tiedostona on piirustuskatselmoinnissa usein yksinkertaisempaa. BCF sopii piirustuskommenttien viemiseen mallikoordinoinnin työnkulkuun.
