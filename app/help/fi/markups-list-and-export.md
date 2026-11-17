---
title: Merkintäluettelo, suodattimet ja viennit
summary: Katso sarjan kaikki merkinnät, suodata ne arkin, tekijän, tilan ja tyypin mukaan, siirry yhteen niistä ja vie luettelo CSV- tai BCF-muodossa.
keywords: merkintäluettelo, luettelo, yhteenveto, xlsx, taulukkotyökirja, pdf-raportti, tuo bcf, suodatin, lajittele, raportti, vienti, csv, bcf, bcfzip, ongelmat, kommenttiluettelo, siirry
from: 6c70261e
---

## Avaa luettelo

Valitse oikealla oleva {{ui:Markups}}-välilehti. Kaikki avoinna olevien tiedostojen merkinnät luetellaan arkkijärjestyksessä ja sen jälkeen tekemisjärjestyksessä. Jokaisella rivillä näkyy:

- merkinnän värinen kuvake, sen puutenumero, jos sellainen on (”#4”), ja sen aihe,
- sen teksti, leiman sanamuoto tai mitattu arvo sekä kommentti,
- arkki, tekijä ja päivämäärä,
- sen tila (tai ”Vain luku” tiedoston mukana tulleille kommenteille) sekä vastausten määrä, jos niitä on.

Luettelon yläpuolella oleva rivi laskee merkinnät: ”38 merkintää” tai ”12 / 38 merkintää”, kun suodatus on päällä.

## Siirry merkintään

Napsauta riviä. MarkupCraft näyttää kyseisen arkin, valitsee merkinnän ja zoomaa siihen, jos se on näkyvän alueen ulkopuolella tai liian pieni nähtäväksi. {{ui:Properties}} näyttää sen tiedot ja ketjun, kun palaat siihen välilehteen.

## Suodata

Neljä valikkoa luettelon yläpuolella. Ne yhdistyvät.

| Valikko | Valinnat |
|---|---|
| {{ui:Sheet}} | Kaikki arkit, Tämä arkki (seuraa sinua, kun vaihdat arkkia) tai mikä tahansa arkki, jolla on merkintöjä |
| {{ui:Author}} | Kuka tahansa tai kukin sarjan tekijä |
| {{ui:Status}} | Mikä tahansa tila, Avoin, Hyväksytty, Hylätty tai Valmis |
| {{ui:Type}} | Mikä tahansa tyyppi tai kukin merkintätyyppi sarjassa |

Esimerkkejä:

- Mikä tällä arkilla on vielä avoinna: {{ui:Sheet}} ”Tämä arkki”, {{ui:Status}} ”Avoin”.
- Yhden konsultin kommentit: {{ui:Author}} heidän nimensä.
- Kaikki mittaukset: {{ui:Type}} ”Pituus” tai ”Pinta-ala”.

Luettelossa näkyy enintään 2000 riviä; kapenna sitä suodattimella hyvin suurissa sarjoissa.

## Vie CSV-muodossa

Valitse {{ui:CSV}} välilehden yläosasta. Saat tiedoston ”<name> markups.csv”, jossa on **merkinnät sellaisina kuin ne ovat suodatettuina**, yksi per rivi, näillä sarakkeilla:

Puutenro, Arkki, Tiedosto, Sivu, Tyyppi, Aihe, Teksti, Kommentti, Mitta, Tekijä, Luotu, Muokattu, Tila, Vastaukset, Viimeisin vastaus, Väri, Vain luku.

- ”Teksti” sisältää tekstiruutujen ja selitteiden sanat, leiman sanamuodon tai lukumääräryhmän nimen.
- ”Mitta” sisältää pituudet, ”pinta-ala, piiri” alueille ja ”ryhmä: n” lukumäärille.
- Päivämäärät ovat täydellisiä aikaleimoja UTC-ajassa.

Viedäksesi kaiken, aseta jokainen suodatin takaisin ensimmäiseen valintaansa.

## Selite arkilla

{{ui:Legend}} välilehdessä {{ui:Markups}} asettaa selitteen näkymäsi oikeaan yläkulmaan: laatikko, johon on listattu jokainen arkin merkintätyyppi (aiheen ja värin mukaan, kuten ”Pilvi”, ”Kysymys” tai ”Pistorasiat”) ja niiden määrä. Lukumääräryhmä laskee omat merkkinsä. Selite laskee koko ajan, kun piirrät, siirrät tai poistat merkintöjä, ja se tulostuu ja tallentuu sen hetken lukemilla.

Siirrä ja muuta sen kokoa kuten mitä tahansa merkintää. Muuta {{ui:Title}} paneelissa {{ui:Properties}} tai aseta {{ui:Counts}} arvoon {{ui:The whole set}}, jolloin lasketaan jokainen arkki. Tilat, muut selitteet ja muiden ohjelmien kommentit eivät ole laskennassa mukana.

## Omat sarakkeet ja lajittelu

{{ui:Columns}} välilehdessä {{ui:Markups}} lisää jokaiseen merkintään omia sarakkeita: **teksti**, **valinta** (kuten Ala: Mekaniikka, Sähkö, Putkistot), **luku** (kuten Hinta) tai **päivämäärä**. Anna jokaiselle nimi, valitse sen tyyppi, luettele valinnat valintasarakkeelle ja valitse {{ui:Save columns}}.

- Täytä ne paneelissa {{ui:Properties}}: jokaisella sarakkeella on siinä kenttä. Lukusarake hyväksyy vain lukuja, päivämääräsarake vain päivämäärän.
- Luettelo näyttää arvot kunkin merkinnän alla. {{ui:Column}}-suodatin valitsee yhden arvon (tai merkinnät, joissa se on tyhjä), ja {{ui:Sort}} järjestää luettelon sarakkeen, tekijän, tilan, tyypin tai päivämäärän mukaan arkkijärjestyksen sijaan.
- CSV- ja XLSX-viennit sisältävät omat sarakkeet tavallisten jälkeen. Sarakkeet tallentuvat PDF-tiedostoon ja palaavat, kun avaat sen uudelleen.

## Vie yhteenveto: työkirja tai PDF

- {{ui:XLSX}} lataa tiedoston ”<name> markup summary.xlsx”, jossa on kolme arkkia: **Merkinnät** (yksi rivi per listattu merkintä, samat sarakkeet kuin CSV:ssä), **Arkeittain** (kuinka monta merkintää kullakin arkilla on, avoimet ja suljetut, sekä kuinka monta kutakin tyyppiä, yhteissummineen) ja **Puutelista** (kun puutekohtia on).
- {{ui:PDF}} lataa tiedoston ”<name> markup summary.pdf”: raportin tulostettavaksi tai lähetettäväksi, jossa on sarjan nimi, päivämäärä ja taulukko listatuista merkinnöistä (numero, arkki, tyyppi, aihe, teksti tai kommentti, mitattu arvo, tekijä, tila ja viimeisin vastaus). Pitkä teksti rivittyy, ja taulukon otsikko toistuu jokaisella sivulla.

Molemmat ottavat luettelon sellaisena kuin se on suodatettuna, joten suodata ensin, jos haluat raportoida yhden arkin, yhden tekijän tai vain avoimet kohteet.

## Vie BCF-muodossa

Valitse {{ui:BCF}}. MarkupCraft ottaa kuvan jokaisesta listatusta merkinnästä sen arkilta (”Tehdään BCF-kuvia (3 / 12)…”) ja lataa tiedoston ”<name> markups.bcfzip”. Jokainen merkintä muuttuu yhdeksi BCF-aiheeksi, jossa ovat sen tila, tekijä, päivämäärät, vastaukset kommentteina, vastuuhenkilö ja eräpäivä puutekohdasta sekä kuva.

Käytä tätä, kun haluat tuoda piirustustarkastuksen kommentit BIM-koordinointityökaluihin, jotka lukevat BCF-muotoa. Mitä siirtyy ja mitä ei, on kohdassa [BCF-perusteet](topic:bcf-basics).

## Tuo BCF

{{ui:Import BCF}} lukee .bcfzip- (tai .bcf-) tiedoston BIM-työkalusta:

- MarkupCraftin omasta BCF-viennistä tulleet aiheet löytävät merkintänsä: uudet vastaukset lisätään ketjuun ja uusi tila asetetaan (Suljettu tarkoittaa Valmis-tilaa). Jo olemassa olevia vastauksia ei lisätä kahdesti.
- Muut aiheet muuttuvat muistiinpanoiksi, joissa on niiden otsikko, kuvaus, tekijä ja kommentit. Muistiinpano sijoittuu arkille, jonka numero tai nimi aiheen tunnisteissa on, muuten avoimelle arkille. BIM-kameralla ei ole paikkaa paperilla, joten tällaiset muistiinpanot kasataan arkin vasempaan yläkulmaan, jotta voit siirtää ne.

Koko tuonti on yksi vaihe: {{key:Mod+Z}} kumoaa sen. Katso [BCF-perusteet](topic:bcf-basics).

## Mitä luettelo ei vielä tee

- Luettelon ryhmittely (lajittele ensin ja suodata sitten).
- Arvojen muokkaaminen luettelossa (muokkaa paneelissa {{ui:Properties}}; puutekentät ovat muokattavissa {{ui:Punch list}}-välilehdessä).
