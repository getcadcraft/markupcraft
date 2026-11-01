---
title: Kierros näytöllä
summary: Työkalurivi, arkkiluettelo, arkkialue, oikealla olevat viisi paneelia ja tilarivi niiden näytöllä näkyvillä nimillä.
keywords: näyttö, asettelu, työkalurivi, paneelit, sivupalkki, pikkukuvat, ominaisuudet, tilarivi, käyttöliittymä, koko näyttö, teema, tumma tila
from: 18d82de6
---

MarkupCraft täyttää selainikkunan. Ylhäältä alas ja vasemmalta oikealle:

## Aivan ylin palkki

Kaiken yläpuolella oleva kapea palkki kuuluu CadCraft-perheelle, ei itse MarkupCraftille. Siinä on:

- sovelluksen nimi ja käyttämäsi versio,
- {{ui:Tietoja: MarkupCraft}}, joka avaa sovelluksen sivun verkkosivustolla,
- {{ui:Ohje}}, joka avaa tämän ohjeen sivupaneeliin (tai paina {{key:F1}}),
- {{ui:Tallenna offline-käyttöön}}, joka säilyttää MarkupCraftin, sen PDF-lukijan ja PDF-kirjoittimen sekä tämän ohjeen tässä selaimessa, jotta se avautuu ilman yhteyttä; sen jälkeen se sanoo ”Offline valmis” (katso [Offline-työskentely](common:offline)),
- näyttötilapainike ({{ui:Koko näyttö}}), ja
- {{ui:Asetukset}} (tai {{key:Mod+,}}), jossa on {{ui:MarkupCraft}}-välilehti tämän sovelluksen omille asetuksille ja {{ui:Yleiset}} niille, jotka kaikki CadCraft-sovellukset jakavat (katso [MarkupCraftin asetukset](topic:settings)), sekä
- {{ui:Paperi}} ja {{ui:Malli}}, vaalea ja tumma teema. {{ui:Malli}}-teemassa arkit piirretään vaaleana tummalle; merkintäsi säilyttävät omat värinsä.

Näyttötilapainike tai {{key:Ctrl+Shift+F}} käy läpi kolme tilaa: normaali, koko näyttö ja koko näyttö palkit piilotettuina. Palkkien ollessa piilossa vie osoitin näytön yläreunaan (tai napauta siellä), niin ne liukuvat takaisin. Tämä pikanäppäin käyttää Control-näppäintä kaikilla tietokoneilla, myös Macilla.

:::note
Koko näytössä {{key:Esc}} saa myös selaimen poistumaan koko näytöstä. Jos halusit vain peruuttaa piirtämisen, paina {{key:Ctrl+Shift+F}} uudelleen palataksesi koko näyttöön.
:::

## Työkalurivi

Yläpalkin alla työkalut on ryhmitelty ja nimetty:

| Ryhmä | Painikkeet |
|---|---|
| Tiedosto | {{ui:Avaa}}, {{ui:Tallenna}}, {{ui:Sulje}} |
| Valitse | {{ui:Valitse}}, {{ui:Panoroi}} |
| Piirrä | {{ui:Kynä}}, {{ui:Korostus}}, {{ui:Viiva}}, {{ui:Nuoli}}, {{ui:Suorakulmio}}, {{ui:Ellipsi}}, {{ui:Murtoviiva}}, {{ui:Monikulmio}} |
| Revisio | {{ui:Pilvi}}, {{ui:Vapaa pilvi}} |
| Merkitse | {{ui:Selite}}, {{ui:Teksti}}, {{ui:Huomautus}}, {{ui:Leima}} |
| Mittaa | {{ui:Kalibroi}}, {{ui:Pituus}}, {{ui:Pinta-ala}}, {{ui:Lukumäärä}} |
| Muokkaus | {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}} sekä {{ui:Lisää}}: {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista}}, {{ui:Poista}}, {{ui:Valitse kaikki}}, {{ui:Poista valinta}} |

Käyttämäsi työkalu näyttää painetulta. Pidä osoitinta painikkeen päällä nähdäksesi sen näppäimen (esimerkiksi ”Suorakulmio (R)”); {{ui:Lisää}}-valikko luettelee jokaisen komennon näppäimen sen vieressä. Painikkeet, jotka eivät voi toimia juuri nyt, on himmennetty: {{ui:Kopioi}}, kunnes valitset merkinnän, {{ui:Liitä}}, kunnes jotain on kopioitu. Pieni piste {{ui:Tallenna}}-painikkeen jälkeen tarkoittaa, että joitakin merkintöjä ei ole vielä tallennettu. Koko näppäinluettelo on kohdassa [Näppäimistö ja hiiri](topic:keyboard).

Työkalu pysyy päällä, kun olet piirtänyt sillä, joten voit piirtää useita pilviä peräkkäin. Paina {{key:Esc}} (kahdesti, jos uusi merkintä on vielä valittuna) tai {{key:V}} palataksesi {{ui:Valitse}}-työkaluun.

## Arkkiluettelo (vasemmalla)

{{ui:Arkit}} luettelee jokaisen avoimen PDF:n jokaisen sivun. Jokaisella rivillä näkyy arkin pieni kuva, sen nimi, sen arkkinumero tai tiedosto ja sivu sekä se, kuinka monta merkintää sillä on. Otsikon jälkeinen luku on arkkien määrä.

- Napsauta riviä näyttääksesi kyseisen arkin.
- Kirjoita kenttään {{ui:Hae arkkeja}} suodattaaksesi arkin nimen, arkkinumeron tai tiedostonimen mukaan. Paina {{key:Enter}} avataksesi ensimmäisen osuman.

Arkkien nimet tulevat PDF:stä, kun siinä on niitä. Katso [Piirustussarjan avaaminen ja arkkien välillä siirtyminen](topic:open-a-plan-set).

## Arkkialue (keskellä)

Arkki, jonka parissa työskentelet. Ennen kuin mitään on avattu, se näyttää ”Avaa piirustussarja” ja {{ui:Avaa PDF-tiedostoja}} -painikkeen. Pudota PDF-tiedostoja mihin tahansa tänne avataksesi ne.

Arkin alla olevassa kapeassa palkissa on:

- edellisen ja seuraavan arkin nuolet sekä ”3 / 12: A-101 — Pohjakuva” (pidä osoitinta sen päällä nähdäksesi tiedoston ja sivun),
- loitonna, zoomausruutu (kirjoita prosenttiluku ja paina {{key:Enter}}; 100 % on todellinen koko tyypillisellä näytöllä), lähennä,
- {{ui:Sovita sivu}} ja {{ui:Sovita leveys}}.

Jokainen arkki muistaa oman zoomauksensa, kun sarja on auki.

Kun vertaat kahta arkkia, tähän ilmestyy selite: ”Vain vanhalla arkilla”, ”Vain uudella arkilla” ja ”Molemmilla”. Katso [Kahden revision vertailu](topic:compare-revisions).

## Paneelit (oikealla)

Viisi välilehteä:

| Välilehti | Mitä se näyttää |
|---|---|
| {{ui:Ominaisuudet}} | Valittu merkintä: tekijä, päivämäärät, mitatut arvot, tila, aihe, teksti, kommentti, tyyli, sen vastaukset ja sen puutekohta. Kun piirtotyökalu on päällä eikä mitään ole valittuna: asetukset, joita uudet merkinnät käyttävät. Kun mitään ei ole valittuna ja {{ui:Valitse}} on päällä: arkki, jonka numero, otsikko, mistä nimi luettiin, paperikoko, mittakaava ja {{ui:Nimeä arkki uudelleen}}. |
| {{ui:Merkinnät}} | Jokainen avoimen sarjan merkintä suodattimineen sekä {{ui:CSV}}- ja {{ui:BCF}}-viennit. Katso [Merkintäluettelo](topic:markups-list-and-export). |
| {{ui:Puutelista}} | Numeroidut puutekohdat vastuuhenkilöineen, eräpäivineen ja tiloineen. Katso [Puutelistan tekeminen](topic:punch-list). |
| {{ui:Työkalut}} | Työkalupakki: tallennetut, tyyliltään määritellyt työkalut. Katso [Työkalupakki](topic:tool-chest). |
| {{ui:Vertaa}} | Aseta kaksi arkkia päällekkäin. Katso [Kahden revision vertailu](topic:compare-revisions). |

## Tilarivi (alhaalla)

- Vasemmalla osoittimen sijainti arkilla, tuumina (tai millimetreinä, [Asetuksissa](topic:settings)) paperilla.
- Keskellä viestit: mitä työkalu odottaa seuraavaksi, mitä juuri tallennettiin, miksi jokin hylättiin. **Lue se, kun jokin ei tapahdu.**
- Arkin mittakaavapainike (”Ei kalibroitu” tai mittakaava). Napsauta sitä asettaaksesi mittakaavan. Katso [Arkin kalibrointi ja mittaaminen](topic:calibrate-and-measure).
- Nimesi (”Aseta nimesi”, kunnes annat sellaisen). Napsauta sitä muuttaaksesi sitä.

## Pienellä näytöllä

Alle noin 1180 pikselin leveydellä paneelit kapenevat ja arkkien kuvat pienenevät. Puhelimen kokoisella näytöllä osat pinoutuvat: työkalurivi (vieritä sitä sivusuunnassa), arkki, tilarivi, paneelit ja lopuksi arkkiluettelo alimpana. Vaakasuunnassa oleva tabletti säilyttää koko asettelun.
