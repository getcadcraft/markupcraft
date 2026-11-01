---
title: Tiedostot, jotka MarkupCraft avaa ja tallentaa
summary: PDF-tiedostot sisään, merkitty PDF-kopio ulos sekä CSV-, BCF- ja työkalupakkitiedostot; minne kukin menee, online ja offline.
keywords: pdf, avaa, tallenna, vie, lataa, csv, bcf, bcfzip, json, työkalupakki, tiedostotyypit, muodot, lähetä, salasana, salattu
from: b3045b4c
---

## Mitä MarkupCraft avaa

| Tiedosto | Miten | Mitä tapahtuu |
|---|---|---|
| PDF (`.pdf`) | {{ui:Avaa}}, {{key:Mod+O}} tai pudota arkkialueelle. Useita kerralla voi avata. | Jokaisesta sivusta tulee arkki. Tiedostossa jo olevat merkinnät luetaan takaisin (alla). |
| Työkalupakki (`.json`) | {{ui:Työkalut}}-välilehti, sitten {{ui:Tuo}} | Työkalut lisätään työkalupakkiisi. Katso [Työkalupakki](topic:tool-chest). |

Kaikki muu hylätään tilarivin viestillä ”MarkupCraft avaa PDF-tiedostoja.” Jos pudotat sekalaisen joukon, PDF-tiedostot avataan ja tilarivi kertoo, kuinka moni tiedosto ei ollut PDF.

### PDF-tiedostossa jo olevat merkinnät

- **MarkupCraftin tallentamat merkinnät** palaavat täsmälleen: tyyppi, tyyli, tekijä, päivämäärät, tila, vastaukset, puutenumero, arkin mittakaava ja kaikki kirjoittamasi arkkien nimet.
- **Muiden PDF-ohjelmien kommentit** luetaan myös. Suorakulmiot, ellipsit, viivat ja nuolet, murtoviivat, monikulmiot, vapaasti piirretyt (kynä) vedot, tekstilaatikot ja muistilaput muuttuvat tavallisiksi, muokattaviksi MarkupCraft-merkinnöiksi. Niiden vastaukset ja tarkastustilat tulevat mukana.
- **Kaikki muu** (tekstiä valitsemalla tehdyt korostukset, muiden ohjelmien leimat ja muut lajit) näytetään sellaisenaan, merkittyinä vain luettaviksi. Voit valita ne, nähdä ne merkintäluettelossa ja vastata niihin, mutta et siirtää, muuttaa tai poistaa niitä.
- Linkit ja lomakekentät jätetään rauhaan, eikä niitä luetella.
- Toisen ohjelman tallentamaa mittakaavaa (mittausnäkymäruutu) käytetään arkin mittakaavana, kun MarkupCraft ymmärtää sen yksikön.

### Tiedostot, jotka eivät aukea

- PDF, joka vaatii salasanan: Tiedoston ”name” avaaminen vaatii salasanan. Avaa suojaamaton kopio.
- Vahingoittunut tiedosto tai sellainen, joka ei oikeasti ole PDF: Tiedostoa ”name” ei voitu lukea PDF:nä (…).
- PDF, joka aukeaa mutta on suojattu muutoksilta, avataan normaalisti. Tallennus hylätään (katso alla).

Kun useita tiedostoja avataan kerralla, toimivat avataan, ja ”Joitakin tiedostoja ei avattu” -niminen ruutu luettelee loput.

## Mitä MarkupCraft tallentaa

Tallennus on aina uuden tiedoston **lataus**. Verkkosivu ei voi korvata tietokoneesi tiedostoa, eikä MarkupCraft koskaan muuta alkuperäistä.

| Valitset | Saat | Huomautukset |
|---|---|---|
| {{ui:Tallenna}} ({{key:Mod+S}}) | ”<name> (marked up).pdf” | Alkuperäisen PDF:n kopio, jossa jokainen merkintä on kirjoitettu sisään oikeana PDF-kommenttina. Jos tallennat ”(marked up)”-tiedoston uudelleen, nimi pysyy samana; siitä ei koskaan tule ”(marked up) (marked up)”. Katso [Merkityn PDF:n tallentaminen](topic:save-the-marked-up-pdf). |
| {{ui:Merkinnät}}-välilehti, sitten {{ui:CSV}} | ”<name> markups.csv” | Merkinnät luettelossa näkyvässä muodossa (suodattimet vaikuttavat). |
| {{ui:Merkinnät}}-välilehti, sitten {{ui:BCF}} | ”<name> markups.bcfzip” | BCF 2.1 BIM-koordinointityökaluille, yksi tilannekuva merkintää kohti. Katso [BCF:n perusteet](topic:bcf-basics). |
| {{ui:Puutelista}}-välilehti, sitten {{ui:Vie CSV}} | ”<name> punch list.csv” | Puutekohdat numerojärjestyksessä. |
| {{ui:Työkalut}}-välilehti, sitten {{ui:Vie}} | ”MarkupCraft tool chest.json” | Työkalupakkisi jaettavaksi tai säilytettäväksi. |

”<name>” on ensimmäisen avatun PDF:n tiedostonimi ilman ”.pdf”-päätettä.

CSV-tiedostot aukeavat kaikissa taulukkolaskentaohjelmissa. Ne ovat UTF-8-muodossa sillä merkillä, jota taulukkolaskentaohjelmat etsivät, joten ääkköset tulevat oikein. Soluun, joka alkaa merkillä =, +, - tai @, lisätään alkuun heittomerkki, jotta taulukkolaskentaohjelma ei koskaan suorita sitä kaavana.

## Minne lataukset menevät

Selaimesi päättää: yleensä Lataukset-kansioon, tai se kysyy joka kerta, jos olet asettanut sen niin. Katso [Selaimet ja tietokoneet](common:browsers#what-differs-between-browsers).

:::chromium
Kun tallennat kaikki joukon muuttuneet tiedostot kerralla, Chrome ja Edge saattavat kysyä, saako tämä sivusto ladata useita tiedostoja. Valitse {{ui:Salli}}, muuten saat vain ensimmäisen kopion.
:::

:::safari
iPadilla Safari kysyy ennen jokaista latausta ja sijoittaa tiedoston Tiedostot-sovellukseen, Lataukset-kansioon. Macilla se menee Safarin asetuksissa määritettyyn kansioon.
:::

## Online ja offline

- **PDF-tiedostosi eivät koskaan poistu tältä tietokoneelta**, online tai offline. Mitään ei lähetetä minnekään.
- PDF-lukija ladataan, kun avaat PDF:n ensimmäisen kerran (”Ladataan PDF-lukijaa…”), ja PDF-kirjoitin, kun tallennat ensimmäisen kerran (”Ladataan PDF-kirjoitinta…”) tai avaat tiedoston, jossa on jo kommentteja.
- Yhteyden ollessa käytössä molemmat ladataan sivustolta.
- **Jos haluat työskennellä ilman yhteyttä,** valitse ylälaidan palkista {{ui:Tallenna offline-käyttöön}}, kun olet online. Painike laskee ”Tallennetaan N / M” ja kertoo sitten ”Offline valmis”. Kopio sisältää PDF-lukijan ja PDF-kirjoittimen (yhteensä noin 6 MB) sekä tämän ohjeen, joten sen jälkeen PDF-tiedostojen avaaminen, merkitseminen ja tallentaminen toimivat offline tässä selaimessa.
- Jos painike sanoo ”Tallennus ei onnistunut”, kaikkia tiedostoja ei ladattu: tarkista yhteys ja napsauta sitä uudelleen. Jos se sanoo ”Offline ei käytettävissä”, tämä selainikkuna ei voi säilyttää offline-kopiota (yksityiset ikkunat ja jotkin hallitut tietokoneet); käytä tavallista ikkunaa.
- Päivitä tai poista kopio napsauttamalla ”Offline valmis” ja valitsemalla ”Tallenna uudelleen (hae uusin versio)” tai ”Poista offline-kopio”. Lisää kohdassa [Offline-työskentely](common:offline).

:::offline
Olet offline. Jos ylälaidan palkki sanoo ”Offline valmis”, kaikki toimii, tallennus mukaan lukien. Jos ei sano, etkä ole vielä tallentanut tässä välilehdessä, {{ui:Tallenna}} voi epäonnistua viestillä ”PDF-kirjoitinta ei voitu ladata”. Merkintäsi ovat yhä välilehdessä: pidä se auki, mene takaisin online-tilaan ja valitse {{ui:Tallenna}} uudelleen.
:::

## Hyvä tietää

- Suurten piirustussarjojen avaaminen kestää hetken: MarkupCraft lukee jokaisen sivun tekstin löytääkseen arkkinumerot. Tilarivi laskee arkkeja sitä mukaa.
- Jos avaat saman PDF:n kahdesti, sen arkit lisätään kahdesti. Sulje sarja ja avaa se uudelleen, jos niin käy.
- {{ui:Sulje}} sulkee kaikki avoimet tiedostot kerralla. Jos joissakin on tallentamattomia merkintöjä, se kysyy: {{ui:Peruuta}}, {{ui:Sulje tallentamatta}} tai {{ui:Tallenna kopiot ensin}}.
- Pilvitallennus ei ole vielä käytettävissä, eikä työpöytäversioita ole vielä. Säilytä PDF-tiedostosi muiden projektitiedostojesi kanssa ja tee varmuuskopiot kuten tavallisesti. Katso [Minne tiedostosi päätyvät](common:your-files).
