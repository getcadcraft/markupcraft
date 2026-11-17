---
title: Vianmääritys
summary: MarkupCraft-sovelluksen näyttämät viestit ja niihin liittyvät toimet sekä korjaukset asioihin, jotka eivät toimi.
keywords: ongelma, virhe, ei toimi, ohje, viesti, ei avaudu, ei voi tallentaa, salasana, suojattu, mittaus hylätty, kalibrointi, offline, tyhjä, hidas, kadonneet merkinnät, kysymysmerkit
from: bb650b39
---

Useimmat ongelmat selitetään näytön alareunan tilarivillä. Lue se ensin.

## Tiedostojen avaaminen

**”MarkupCraft avaa PDF-tiedostoja. ”x” ei ole PDF-tiedosto.”**
Valitsit tai pudotit jotain muuta. Vain PDF-tiedostot avautuvat. Vie piirustukset ensin CAD-ohjelmastasi PDF-muodossa.

**'”nimi” vaatii salasanan avautuakseen. Avaa suojaamaton kopio.'**
PDF-tiedosto on salasanasuojattu. Pyydä lähettäjältä suojaamatonta kopiota tai avaa se PDF-ohjelmassa, jossa tiedät salasanan, ja tallenna kopio ilman salasanaa.

**'”nimi” ei voitu lukea PDF-tiedostona (…)'**
Tiedosto on vioittunut tai ei ole todellisuudessa PDF-tiedosto (keskeneräinen lataus, sähköpostin liite katkennut). Lataa se uudelleen. Jos muut PDF-ohjelmat voivat avata sen, käytä niiden ”Tallenna nimellä” -toimintoa puhtaan kopion tekemiseen ja avaa se.

**”Osa tiedostoista ei avautunut”**
Kun avaat useita kerralla, tämä ruutu luettelee epäonnistuneet tiedostot ja syyn. Muut ovat auki.

**”PDF-lukijaa ei voitu ladata: …”**
PDF-moottoria ei voitu hakea. Verkossa: lataa sivu uudelleen ja yritä uudelleen; tarkista, ettei palomuuri tai sisällön esto estä sivustoa. Offline-tilassa: MarkupCraft ei ole tallennettu offline-käyttöön tässä selaimessa (yläreunan palkki ei sano ”Offline valmis”). Mene verkkoon, valitse {{ui:Tallenna offline-käyttöön}} ja odota ”Offline valmis”. Katso [Työskentely offline-tilassa](common:offline).

**”Joitakin merkintöjä voi näkyä näytöllä kahdesti” tai ”Merkintöjen lisätietoja ei voitu lukea”**
Tiedoston olemassa olevat kommentit ovat epätavallisia. Ne avataan silti niin hyvin kuin MarkupCraft pystyy; tarkista ne ennen kuin luotat niihin. Tallentaminen toimii silti.

**Arkilla on väärä nimi tai ”sivu 3”**
Katso [Miten arkit saavat nimensä](topic:open-a-plan-set#how-sheets-get-their-names). Skannatuilla arkeilla ei ole luettavaa tekstiä; käytä {{ui:Nimeä arkki uudelleen}}.

**Samat arkit näkyvät kahdesti**
Sama tiedosto avattiin kahdesti. Valitse {{ui:Sulje}} (tallenna ensin tarvittaessa) ja avaa arkkisarja uudelleen.

## Piirtäminen ja valinta

**Arkkia napsauttaessa ei tapahdu mitään**
Tarkista, mikä työkalu on painettuna työkalurivillä, ja lue tilarivi. Kohteilla {{ui:Suorakulmio}}, {{ui:Ellipsi}} ja {{ui:Pilvi}} napsautus ilman vetämistä ei piirrä mitään: vedä. Kohteilla {{ui:Murtoviiva}}, {{ui:Monikulmio}}, {{ui:Vapaa pilvi}} ja {{ui:Pinta-ala}} pisteitä lisätään: lopeta kaksoisnapsautuksella tai {{key:Enter}}-näppäimellä.

**”Monikulmiossa on oltava vähintään 3 pistettä.” (tai 2 murtoviivalle)**
Napsauta lisää pisteitä ennen lopettamista.

**”Mitään ei kirjoitettu, joten tekstiä ei lisätty.”**
Tekstikentät ja selitteet säilyvät vain, kun niissä on tekstiä. Piirrä se uudelleen ja kirjoita ennen kuin napsautat muualle.

**”Kaksi pistettä ovat samat. Napsauta kahta eri pistettä.”**
Viivoilla, nuolilla, pituuksilla ja kalibroinnissa kahden pään on oltava erillään. Vedä tai napsauta kahdesti eri kohtiin.

**En voi siirtää tai poistaa merkintää; siinä on harmaa katkoviivalaatikko**
Se on tiedoston mukana tullut vain luku -kommentti (esimerkiksi tekstikorostus). MarkupCraft säilyttää sen sellaisena kuin se on: voit vain vastata siihen. Tilarivi kertoo: ”vain luku -merkinnät säilytetään tiedoston mukaisesti”.

**Näppäimet kirjoittavat kirjaimia kenttään työkalujen valitsemisen sijaan**
Kohdistin on tekstikentässä (vastaus, kenttä kohdassa {{ui:Ominaisuudet}}, arkkihaku). Napsauta ensin arkkialueen tyhjää kohtaa tai paina {{key:Esc}}, jos muokkaat merkinnän tekstiä.

**Space ei siirrä näkymää, eivätkä nuolinäppäimet tee mitään**
Napsautit juuri työkalurivin painiketta, joten se hallitsee yhä näppäimistöä. Vedä sen sijaan keskihiiren painikkeella tai napsauta arkkia kerran, kun {{ui:Valitse}} on päällä, ja yritä sitten uudelleen. Katso myös [Näppäimistö ja hiiri](topic:keyboard#when-a-key-does-nothing).

**Kosketusnäytön nipistys jätti jäljen**
Vetotyökalu (kynä, pilvi, suorakulmio) käynnistyi ennen toisen sormen saapumista ja päättyi ennen kuin se peruttiin. Paina {{ui:Kumoa}}. Aseta molemmat sormet alas yhtä aikaa, kun aiot zoomata.

## Mittaus

**”Kalibroi tämä arkki ensin: valitse kaksi pistettä, joiden etäisyys tunnetaan, tai valitse sen mittakaava. Mittaa sen jälkeen.”**
Jokaisella arkilla on oltava oma mittakaava ennen kuin {{ui:Pituus}} tai {{ui:Pinta-ala}} toimii. MarkupCraft on siirtynyt {{ui:Kalibroi}}-työkaluun: napsauta tunnetun mitan kahta päätä ja kirjoita sen pituus, tai napsauta tilarivin mittakaavapainiketta ja valitse mittakaava. Katso [Kalibroi arkki ja mittaa](topic:calibrate-and-measure).

**”MarkupCraft ei ymmärrä tätä pituutta.”**
Kirjoita se muodossa `24'-0"`, `12' 6 1/2"`, `7.2 m` tai `900 mm`. Katso [Yksiköt, pituudet ja mittakaavat](topic:units-and-scales).

**Mitat ovat hieman pielessä tai aivan väärin**
- Valmis mittakaava PDF-tiedostossa, joka ei ole täysikokoinen, mittaa väärin. Kalibroi sen sijaan pitkästä tunnetusta mitasta.
- Tuhaterotin luettiin desimaalipisteeksi: `1,200 mm` tarkoittaa 1.2 mm. Kirjoita `1200 mm`.
- Zoomaa lähemmäs, kun napsautat päitä.
- Piirustus ei ehkä ole mittakaavassa (”NTS”).

**”Valitse ensin lukumäärän ryhmä, sitten poista merkki Shift+napsautuksella.”**
Valitse {{ui:Valitse}}, napsauta lukumäärän ryhmää, valitse sitten {{ui:Lukumäärä}} uudelleen ja napsauta pistettä {{key:Shift}}-näppäin painettuna.

## Tallentaminen

**”Tämä PDF on suojattu (salattu), joten merkitystä kopiota ei voi kirjoittaa.”**
Tiedosto kieltää muutokset. Pyydä suojaamatonta kopiota. Sillä välin voit silti viedä merkintäluettelon CSV- tai BCF-muodossa.

**”PDF-kirjoitinta ei voitu ladata: …”**
Yleensä olet offline-tilassa, eikä sovellusta ole tallennettu offline-käyttöön (yläpalkissa ei ole ”Offline valmis”). Merkintäsi ovat yhä välilehdellä: pidä se auki, siirry verkkoon ja valitse {{ui:Tallenna}} uudelleen. Valitse sen jälkeen {{ui:Tallenna offline-käyttöön}}, jotta se toimii offline-tilassa seuraavalla kerralla; tallennettu kopio sisältää PDF-kirjoittimen.

**”<file> ei voitu tallentaa”**
Ruutu kertoo syyn. Merkintäsi ovat yhä välilehdellä. Yritä uudelleen; jos virhe toistuu, vie CSV-tiedosto, jotta kommentit eivät katoa, ja ilmoita viesti.

**Valitsin Tallenna, mutta vain yksi tiedosto saapui**
Selaimesi esti lisälataukset. Etsi ilmoitus osoitepalkista ja salli tämän sivuston ladata useita tiedostoja, ja tallenna sitten uudelleen.

**En löydä tallennettua tiedostoa**
Se meni selaimesi latauskansioon. Avaa selaimen latausluettelo (Chrome ja Edge: {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; Firefox ja Safari: työkalurivin latauspainike), niin näet sijainnin. Katso [Selaimet ja tietokoneet](common:browsers).

**Osa tekstistä näkyy ”?” muissa PDF-katselimissa**
Länsieurooppalaisen merkistön ulkopuoliset merkit näkyvät kopiossa ”?”-merkkeinä. Tallennusviesti laskee ne. Katso [Tallenna merkitty PDF](topic:save-the-marked-up-pdf).

**Leimassa näkyy huomisen (tai eilisen) päivämäärä**
Leimojen päivämäärät ovat UTC-ajassa. Katso [Leimat ja muistilaput](topic:stamps-and-notes).

## Työskentely offline-tilassa

**Offline-painike sanoo ”Ei voitu tallentaa”**
Osa sovelluksen tiedostoista ei latautunut. Tarkista yhteys ja napsauta painiketta uudelleen; se laskee ”Tallennetaan N / M” kunnes ”Offline valmis”.

**Offline-painike sanoo ”Offline ei käytettävissä”**
Tämä selainikkuna ei voi säilyttää offline-kopiota: yksityinen ikkuna tai tietokone, jonka käytäntö estää sen. Avaa MarkupCraft tavallisessa ikkunassa ja yritä uudelleen.

**Offline-tilassa sovellus on vanhempi versio**
Offline-kopio on versio, jonka tallensit. Kun olet verkossa, napsauta ”Offline valmis” ja valitse ”Tallenna uudelleen (hae uusin versio)”. Tilan vapauttamiseksi valitse ”Poista offline-kopio”. Katso [Työskentely offline-tilassa](common:offline).

**Ohje ei avaudu**
Paina {{key:F1}} (Mac-tietokoneessa **fn**-näppäimen kanssa) tai valitse {{ui:Ohje}} yläpalkista. Se toimii myös offline-tilassa.

## Kadonneet asiat

**Merkintäni ovat poissa välilehden sulkemisen tai uudelleenlataamisen jälkeen**
Avaa MarkupCraft uudelleen samassa selaimessa: se tarjoaa tallentamattoman työn takaisin kysymyksellä ”Palautetaanko työsi?”. Valitse {{ui:Palauta}} ja tallenna PDF-tiedosto. Kopiot säilytetään 30 päivää; yksityinen ikkuna tai sivuston tietojen tyhjentäminen ei jätä yhtään. Katso [Palauta työsi](common:recover).

**Nimeni, työkaluasetukseni tai työkalulaatikkoni ovat poissa**
Ne säilytetään vain tässä selaimessa, ja ne tyhjennettiin (sivuston tiedot tyhjennettiin, yksityinen ikkuna, toinen selain tai tietokone tai Safarin siivous sivustoista, joilla ei ole käyty hetkeen). Aseta nimi uudelleen ja tuo viemäsi laatikko. Katso [Mitä selain säilyttää](topic:browser-storage).

**”Työkalulaatikkoa ei voitu säilyttää tässä selaimessa (tallennus on pois päältä tai täynnä). Vie se säilyttääksesi sen.”**
Selain ei tallenna tämän sivuston tietoja (yksityistila, tallennus estetty asetuksella tai käytännöllä, tai täynnä). Vie laatikko muutosten jälkeen ja tuo se seuraavalla kerralla.

## Näyttö ja nopeus

**Arkki näyttää hetken sumealta**
MarkupCraft näyttää nopean, karkean kuvan zoomatessa tai siirrettäessä näkymää, ja piirtää sen terävänä hetken kuluttua, kun lopetat.

**Kaikki on hidasta suurella arkkisarjalla**
Sulje muut raskaat välilehdet, avaa kerralla vähemmän tiedostoja ja vältä zoomaamista maksimiin erittäin suurilla arkeilla. Katso [Työskentely useiden tiedostojen kanssa samanaikaisesti](topic:several-files#big-sets).

**Arkki on tumma ja viivat vaaleita**
Olet {{ui:Malli}}-teemassa. Valitse yläpalkista {{ui:Paperi}} saadaksesi tummat viivat valkoisella. Merkintäsi ja tallennettu PDF eivät muutu.
