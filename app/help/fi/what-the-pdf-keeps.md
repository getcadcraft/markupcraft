---
title: Mitä PDF-tiedostoon tallennetaan
summary: Tarkalleen mitä merkitty kopio sisältää, mitä muut PDF-ohjelmat näkevät ja mitä luetaan takaisin, kun avaat tiedoston.
keywords: pdf-kommentit, kommentit, tallennettu data, kierto, sivunimikkeet, mittaus, tarkistustila, vastaukset, yhteentoimivuus, yhteensopivuus, uudelleen avaaminen, yksityinen data
from: 6439ad28
---

Merkitty kopio on alkuperäinen PDF, johon on lisätty kommentit (PDF-annotaatiot). Sivut itse, niiden piirustukset, teksti, kirjanmerkit ja linkit kopioidaan sellaisinaan.

## Jokainen merkintä

| MarkupCraft | Tallennetaan | Muut PDF-katseluohjelmat näyttävät |
|---|---|---|
| Suorakulmio, laatikkopilvi | Neliöannotaatio (pilvi: pilvimäinen reunus) | Suorakulmio- tai pilvikommentin |
| Ellipsi | Ympyräannotaatio | Ellipsikommentin |
| Monikulmio, vapaa pilvi | Monikulmioannotaatio (pilvi: pilvimäinen reunus) | Monikulmio- tai pilvikommentin |
| Murtoviiva | PolyLine-annotaatio | Murtoviivakommentin |
| Viiva, nuoli | Viiva-annotaatio (nuoli: suljettu nuolenpää) | Viiva- tai nuolikommentin |
| Pituus | Viiva-annotaatio merkittynä mittana, mittaus mukana | Pituusmittauksen, jos katselija tukee niitä |
| Pinta-ala | Monikulmioannotaatio merkittynä alana, mittaus mukana | Pinta-alamittauksen, jos tuettu; muuten monikulmion |
| Lukumääräryhmä | Yksi mustesannotaatio, rengas per kohde; teksti on "ryhmä: n" | Mustekommentin |
| Kynä, korostin | Mustesannotaatio (korostin merkittynä sellaiseksi) | Mustekommentin |
| Teksti | FreeText-annotaatio | Tekstiruutukommentin |
| Selite | FreeText-annotaatio selitejohdolla | Selitekommentin |
| Huomautus | Teksti-annotaatio | Tarralapun, joka avautuu näyttämään tekstinsä |
| Leima | Leima-annotaatio | Leimakommentin |

Jokainen tallennetaan seuraavilla tiedoilla:

- **oma ulkoasu**, piirretty täsmälleen samalla tavalla kuin MarkupCraft piirtää sen ruudulle, joten se näyttää samalta missä tahansa katselijassa ja tulostuu samoin, puutekohdan numeromerkki mukaan lukien;
- **tekijä**, **luontipäivä ja muokkauspäivä**, **aihe**, **kommentin teksti** (tekstiruuduille ja selitteille teksti ja kommentti), **väri** ja **peittävyys**;
- **MarkupCraft-tiedot** yksityisessä merkinnässä, jonka muut ohjelmat ohittavat: tila, puutekohta, tyyli ja tyyppi, jotta se avautuu täsmälleen samana.

## Ketjut ja tilat

- Jokainen vastaus tallennetaan vastauskommenttina, joka on liitetty merkintään, tekijän, päivämäärän ja tekstin kanssa. Vastauksilla ei ole omaa kuvaketta arkilla.
- Jokainen tilan muutos tallennetaan vastauksena, jossa on tarkistustila. Muut tarkastustyökalut näyttävät sen tilana Hyväksytty, Hylätty tai Valmis; Avoin tallennetaan ilman tilaa.
- Merkintä, jonka tila on muu kuin Avoin mutta jolle ei ole kirjattu tilanmuutosta, saa yhden tarkistustilan vastauksen, jotta muutkin ohjelmat näkevät tilan.
- Vastaukset alkuperäisen tiedoston vain luettaviin kommentteihin tallennetaan samalla tavalla ja liitetään siihen kommenttiin.

## Jokainen arkki

- **Mittakaava:** kalibroidulle arkille tulee mittanäkymä, joka kattaa sivun (tavallinen tapa tallentaa sivun mittakaava), ja MarkupCraft-sovelluksen oma kopio kalibroinnista.
- **Arkkinumero:** numero, joka kirjoitetaan {{ui:Nimeä arkki uudelleen}}-toiminnolla, muuttuu sivun nimikkeeksi. Kun jollakin tiedoston sivulla on nimike, jokaisella sen tiedoston sivulla on nimike: kirjoitettu numero, muuten vanha nimike, muuten sivunumero.
- **Arkin otsikko:** kirjoitettu otsikko tallennetaan vain MarkupCraft-sovellukselle; muut katselijat eivät näytä sitä.

## Teksti ja merkit

Teksti kirjoitetaan Helvetica-fontilla, jonka jokaisessa PDF-katselijassa on. Kirjaimet, jotka eivät kuulu länsieurooppalaiseen merkistöön (Windows-1252), tulostuvat kopiossa merkkinä "?"; tallennusviesti laskee ne.

## Laskentalehdet ja perustelut

Laskentalehdet ja perustelut säilytetään PDF:n yksityisessä merkinnässä nimeltä `/MarkupCraftShell`. Muut PDF-ohjelmat ohittavat sen. Vanhempi MarkupCraft ohittaa sen myös ja pudottaa sen, kun se seuraavan kerran tallentaa tiedoston.

## Jo olemassa olevat kommentit

Kun avaat PDF-tiedoston, jossa on jo kommentteja:

- MarkupCraftin omat kommentit luetaan takaisin täsmälleen. Jos toinen ohjelma siirsi tai muutti kokoa, sen uusi sijainti voittaa.
- Muiden ohjelmien suorakulmiot, ellipsit, viivat, murtoviivat, monikulmiot, mustekommentit, tekstiruudut ja tarrat tulevat muokattaviksi merkinnöiksi. **Tallentaessa MarkupCraft poistaa alkuperäiset ja kirjoittaa ne uudelleen omalla tavallaan**, ponnahdusikkunat ja vastaukset mukaan lukien. Niiden ulkoasu voi muuttua hieman.
- Muiden ohjelmien tarkistustilat asettavat tilan; uusin voittaa.
- Kaikki muu (tekstikorostukset, muiden ohjelmien leimat ja erikoistyypit) **jätetään koskematta** kopioon, vain luettavana.
- Linkit ja lomakekentät jätetään koskematta, eikä niitä luetella.

Saman tiedoston tallentaminen uudelleen ei koskaan kaksinkertaista mitään: MarkupCraftin lukemat merkinnät korvataan, eikä niitä lisätä uudelleen.

## Mitä ei muuteta

Alkuperäistä tiedostoa levyllä ei muuteta koskaan. Kopiota ei optimoida koon mukaan, joten se voi olla hieman alkuperäistä suurempi. Suojattuja (salattuja) PDF-tiedostoja ei voi tallentaa.
