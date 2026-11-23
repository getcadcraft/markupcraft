---
title: BCF-perusteet
summary: Mitä MarkupCraftin BCF-vienti sisältää, miten sitä käytetään BIM-koordinointityökaluissa ja mitkä sen rajat ovat.
keywords: bcf, bcfzip, BIM-yhteistyöformaatti, havainnot, koordinointi, törmäys, aiheet, kuvakulma, kuvakaappaus, openbim, buildingsmart, vie havainnot
from: 0de26175
---

BCF (BIM Collaboration Format) on avoin tiedostomuoto, jolla havainnot siirretään BIM-työkalujen välillä. Monet mallikoordinointi- ja mallinnusohjelmat voivat tuoda `.bcfzip`-tiedoston havaintoluettelona. MarkupCraft kirjoittaa **BCF 2.1** -muotoa.

## Luo tiedosto

1. Avaa {{ui:Markups}}-välilehti.
2. Suodata luettelo siihen, mitä haluat lähettää, esimerkiksi {{ui:Status}} "Avoin". Vain luetellut merkinnät viedään.
3. Valitse {{ui:BCF}}.
4. Odota, kun jokaisesta merkinnästä tehdään kuvakaappaus ("Tehdään kuvakaappauksia BCF-tiedostoon (5/20)…").

Tulos: "<name> markups.bcfzip" latautuu, ja tilarivillä kerrotaan, montako aihetta tiedosto sisältää ja kuinka suuri tiedosto on.

## Mitä tiedostossa on

Jokainen merkintä muuttuu yhdeksi **aiheeksi**.

| Aiheen kenttä | Täytetään |
|---|---|
| Otsikko | Puutelistan numero, aihe ja arkki, esimerkiksi "#4 Pilvi kohteessa A-101 — Pohjakuva" |
| Tyyppi | Merkinnän laji (Pilvi, Selite, Pituus…) |
| Tila | Avoin, Hyväksytty, Hylätty tai Valmis |
| Tunnisteet | Merkinnän laji ja arkki |
| Tekijä ja päivämäärät | Merkinnän tekijä sekä luonti- ja muokkauspäivämäärät |
| Osoitettu, eräpäivä | Puutelistanimikkeestä, kun merkinnällä sellainen on |
| Kuvaus | Merkinnän teksti tai leiman sanamuoto, mitattu arvo, kommentti sekä arkki ja tiedosto |
| Kommentit | Yksi kutakin vastausta kohden, mukana tekijä ja päivämäärä |
| Kuvakaappaus | Kuva merkinnästä sen kohdalla arkilla |
| Kuvakulma | Ylhäältä katsottu kuvakulma merkinnän paikasta arkilla |

Saman merkinnän vieminen uudelleen antaa saman aiheen tunnuksen, joten BCF:tä tuova työkalu tunnistaa sen samaksi havainnoksi.

## Mitä tulee takaisin tuonnissa

{{ui:Import BCF}} lukee BCF 2.0, 2.1 ja 3.0 -tiedostoja (tarkistettu buildingSMARTin 19 virallisella 3.0-testitiedostolla: jokainen aihe luettiin, ja niistä kolmen kommentit, joissa on tekstiä). Aihe, joka on omasi (sama aiheen tunnus), saa uudet kommentit vastauksiksi ja uuden tilan. Muu aihe muuttuu huomautukseksi arkille, jonka tunniste tai tiedostonimi nimeää, muuten avoimelle arkille. Sen otsikko, kuvaus, vastuuhenkilö ja eräpäivä ovat huomautuksen teksti, ja sen kommentit ovat vastauksia.

| BCF-aiheessa | MarkupCraftissa |
|---|---|
| Otsikko, kuvaus, vastuuhenkilö, eräpäivä | Huomautuksen teksti |
| Kommentit, joissa on tekstiä | Vastaukset |
| Tila Open, Accepted, Rejected, Completed (Closed, Resolved ja Done lasketaan kohtaan Completed) | Merkinnän tila |
| Tekijä ja luontipäivä | Huomautuksen tekijä ja päivämäärä |
| Kameran sijainti | Paikka arkilla, vain aiheelle, joka on sidottu arkkiin tunnisteen tai tiedostonimen perusteella |
| Mallin valinta, piilotetut osat, leikkaustasot, kuvakaappaukset | Ei säilytetä: arkilla ei ole mallia, jossa niitä voitaisiin näyttää |

## Rajoitukset

- **Arkki ei ole malli.** Kuvakulma osoittaa merkinnän paikkaan paperilla, mitattuna paperin metreinä. Se ei vie BIM-työkalua mallin kohtaan. Etsi kohta kuvakaappauksen ja arkin nimen avulla.
- **Tilat ja lajit ovat MarkupCraftin omia** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Tiedosto ilmoittaa ne, kuten BCF sallii, mutta työkalu, jolla on omat kiinteät luettelot, voi yhdistää ne toisiin tai jättää ne huomiotta.
- **Tuonti tuo kommentit, ei mallinäkymiä.** {{ui:Import BCF}} lisää vastauksia ja tiloja vietyihin merkintöihin ja tekee huomautuksia muista havainnoista. Se ei voi näyttää mallin kameraa. Katso [Merkintäluettelo ja vienti](topic:markups-list-and-export#import-bcf).
- Merkintöjen palauttaminen PDF-tiedostona on usein yksinkertaisempaa piirustusten katselmoinnissa. BCF on tarkoitettu piirustuskommenttien viemiseen mallikoordinoinnin työnkulkuun.
