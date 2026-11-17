---
title: Yksiköt, pituudet ja mittakaavat
summary: Kaikki tavat kirjoittaa pituus, yksiköt, joissa pituudet ja pinta-alat näytetään, pyöristys ja valmiit mittakaavat.
keywords: yksiköt, jalat, tuumat, jalat ja tuumat, metrinen, metrit, millimetrit, senttimetrit, mittakaava, valmis mittakaava, arkkitehtuurimittakaava, insinöörimittakaava, suhde, neliöjalat, pyöristys, murtoluvut
from: 574b0291
---

## Pituuden kirjoittaminen

Kun kalibroit kahdesta pisteestä, kirjoitat todellisen etäisyyden. MarkupCraft lukee kaikki nämä:

| Kirjoitat | Tarkoittaa |
|---|---|
| `24'-0"` | 24 jalkaa |
| `12' 6 1/2"` tai `12'-6 1/2"` | 12 jalkaa 6½ tuumaa |
| `12' 6` | 12 jalkaa 6 tuumaa (tuumamerkki jätetty pois) |
| `6"` tai `1/2"` | tuumat |
| `12.5'` tai `12.5 ft` | 12½ jalkaa |
| `3 ft 6 in` | 3 jalkaa 6 tuumaa (myös feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrinen (myös meter, metre, millimeter, centimetre…) |
| `24` | pelkkä luku, yksikössä, joka on valittu kohdassa {{ui:Näytä pituudet yksikössä}} |

Kaarevat lainausmerkit (’ ”) ja kaksi heittomerkkiä ('') tuumille toimivat myös. Nolla- ja negatiiviset pituudet hylätään.

:::warning
Pilkku luetaan desimaalierottimena: `1,5 m` on 1.5 metriä. Älä kirjoita tuhaterottimia: `1,200 mm` luetaan 1.2 millimetriksi. Kirjoita `1200 mm`.
:::

## Miten pituudet ja pinta-alat näytetään

| {{ui:Näytä pituudet yksikössä}} | Pituus näkyy muodossa | Pinta-ala näkyy muodossa |
|---|---|---|
| {{ui:Jalat ja tuumat}} | `12'-6 1/2"`, pyöristettynä 1/16 tuumaan | neliöjalkoina, kaksi desimaalia |
| {{ui:Desimaalijalat}} | `12.54'`, kaksi desimaalia | neliöjalkoina, kaksi desimaalia |
| {{ui:Tuumat}} | `150.5"`, enintään kaksi desimaalia | neliötuumina, yksi desimaali |
| {{ui:Metrit}} | `3.820 m`, kolme desimaalia | neliömetreinä, kolme desimaalia |
| {{ui:Millimetrit}} | `3820 mm`, kokonaiset millimetrit | neliömillimetreinä, kokonaisina |

Pinta-alan ympärysmitta käyttää pituuden muotoa.

## Valmiit mittakaavat

Valmiit mittakaavat olettavat, että PDF on täydessä tulostuskoossaan: 72 PDF-pistettä tuumalle, kuten CAD-ohjelma sen piirtää.

| Ryhmä | Mittakaavat | Pituudet näytetään yksikössä |
|---|---|---|
| Arkkitehtuuri | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Jalat ja tuumat |
| Insinööri | 1" = 10', 20', 30', 40', 50', 60', 100' | Desimaalijalat |
| Metrinen | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimetrit |
| Metrinen | 1:100, 1:200, 1:250, 1:500, 1:1000 | Metrit |

Jos haluat käyttää valmista mittakaavaa mutta nähdä pituudet toisessa yksikössä, kalibroi kahdesta pisteestä ja valitse yksikkö siellä.

## Muiden ohjelmien tallentamat mittakaavat

Kun PDF-tiedostossa on jo sivulle toisesta ohjelmasta tallennettu mittakaava (sivulle tallennettu mittausmittakaava), MarkupCraft käyttää sitä, jos se on jaloissa, tuumissa, metreissä, senttimetreissä tai millimetreissä. Sen nimi näytetään niin kuin tiedosto sen ilmaisee.

## Paperin sijainnit

Tilarivi näyttää, missä osoitin on paperilla, tuumina arkin vasemmasta yläkulmasta, arkin mittakaavasta riippumatta. Compare-toiminnon siirtoaskeleet ovat pisteissä (72 pistettä tuumalle).

## Tarkkuus

Mittaus on yhtä hyvä kuin kalibrointi ja napsautuksesi. Kalibroi käyttäen pisintä tunnettua mittaa, jonka löydät, zoomaa lähemmäs napsauttaaksesi sen päitä ja tarkista sitten yksi muu mitta. PDF, joka on skaalattu tehdessä (”sovita sivulle” -tulostus tai puolikokoinen sarja), on yhä tarkka, kun kalibroit mitasta, mutta ei valmiilla mittakaavalla.
