---
title: Tallenna merkitty PDF
summary: Lataa kopio, jossa jokainen merkintä on kirjoitettu tavallisina PDF-kommentteina, tarkista miltä merkinnät näyttävät muissa PDF-lukijoissa ja jatka työtä myöhemmin.
keywords: tallenna, lataa, vie pdf, merkitty, merkinnät, huomautukset, kommentit, jaa, lähetä, ongelma, jatka työtä, avaa uudelleen, kierto, tulosta
from: 4c198ebe
---

## Tallennus

1. Valitse {{ui:Tallenna}} työkalurivillä tai paina {{key:Mod+S}}.
2. Jos useita tiedostoja on auki, valitse {{ui:Tämä tiedosto}} (sen tiedoston, jonka arkilla olet) tai {{ui:Jokainen muuttunut tiedosto}}. Jokainen kopio ladataan erikseen.
3. Odota, että ”Tallennetaan <file>…” on valmis. Ensimmäinen tallennus istunnossa lataa myös PDF-kirjoittimen.

Tulos: selaimesi lataa tiedoston ”<name> (marked up).pdf”, ja tilarivi ilmoittaa siitä: ”Tallennettu A-Plans (marked up).pdf (24 merkintää, 18.2 MB). Alkuperäinen tiedosto on ennallaan.” Muutospiste {{ui:Tallenna}}-painikkeen vieressä katoaa.

**Alkuperäistä PDF-tiedostoa ei koskaan muuteta.** MarkupCraft kirjoittaa uuden tiedoston. Sen sijainti riippuu selaimesi latausasetuksista (katso [Tiedostot, joita MarkupCraft avaa ja tallentaa](topic:files#where-downloads-go)).

## Jatka työtä myöhemmin

Avaa seuraavalla kerralla ”(marked up)”-kopio, älä alkuperäistä. Kaikki palautuu muokattavaksi: merkinnät, tilat, vastaukset, puutekohdat, jokaisen arkin mittakaava ja arkkien nimet, jotka kirjoitit. Kun tallennat uudelleen, ladataan tiedosto samalla ”(marked up)”-nimellä. Selain saattaa lisätä numeron, kuten ”(1)”, jos vanha lataus on yhä kansiossa. Korvaa tai siivoa vanhat kopiot itse.

MarkupCraft ei tallenna PDF-tiedostoa itsestään. Työskennellessä se pitää palautuskopiota tässä selaimessa, joten kaatuminen tai suljettu välilehti ei hukkaa merkintöjä: seuraavan avauksen yhteydessä MarkupCraft kysyy ”Palauta työsi?”. Katso [Palauta työsi](common:recover). Tallenna silti ennen sulkemista. Jos yrität poistua tallentamattomilla merkinnöillä, selain kysyy ensin ”Poistutaanko sivustolta?” (iPad Safari ei kysy).

## Muut PDF-lukijat

Jokainen merkintä kirjoitetaan vakiomuotoisena PDF-kommenttina (merkintänä) omalla piirrollaan, joten mikä tahansa PDF-katselin näyttää sen, tulostaa sen ja listaa sen kommenttipaneelissaan:

- **Ulkoasu on sama** kuin MarkupCraftissa: pilvet kaarine reunoineen, nuolenpäät, leimat, lukumääräpisteet, puutenumerotunnukset ja mittaustarrat.
- **Tiedot ovat vakiomuotoisia:** tekijä, päivämäärä, aihe, kommentin teksti ja värit.
- **Pilvet** ovat suorakulmio- tai monikulmiokommentteja pilvimäisellä reunalla. **Tekstilaatikot** ja **selitteet** ovat tekstilaatikkokommentteja, **huomautukset** tarrahuomautuksia, **kynä**- ja **korostuskynä**-vedot mustekommentteja ja **leimat** leimakommentteja.
- **Pituudet ja pinta-alat** ovat mittauskommentteja. Jokainen kalibroitu arkki sisältää mittakaavansa, joten mittauksia ymmärtävät katselimet voivat näyttää arvot.
- **Vastaukset** ovat kommentin vastauksia ja **tilat** tarkastustiloja (Avoin näkyy ilman tilaa).
- **Arkkinumerot**, jotka kirjoitit, tulevat sivunimiksi, joita muut katselimet näyttävät.

Muutamaa asiaa lukee takaisin vain MarkupCraft: puutekohdan vastuuhenkilö ja eräpäivä, kohteen tila sekä joitakin tyylitietoja. Muut ohjelmat säilyttävät ne, ellei kommenttia kirjoiteta uudelleen.

Toisessa ohjelmassa kommentteja voi siirtää ja muokata kuten mitä tahansa. Jos joku tekee niin ja lähettää tiedoston takaisin, MarkupCraft käyttää kommentin uutta sijaintia avatessaan tiedoston.

Lisätietoja: [Mitä PDF-tiedostoon tallentuu](topic:what-the-pdf-keeps).

## Merkit, jotka tulostuvat ”?”-merkkeinä

Merkintöjen teksti kirjoitetaan vakiofontilla Helvetica, joka on jokaisessa PDF-katselimessa. Se kattaa englannin ja Länsi-Euroopan kirjaimet (é, ñ, ü, ø ja vastaavat), mutta ei muita kirjoitusjärjestelmiä, tämän joukon ulkopuolisia symboleja tai emojeita. Nämä merkit näkyvät MarkupCraftissa oikein, mutta tallennetussa kopiossa ne tulostuvat ”?”-merkkeinä, ja tallennusilmoitus laskee ne: ”3 merkkiä Länsi-Euroopan merkistön ulkopuolella tulostuu kopiossa muodossa ”?”.” Kirjoita tällaiset sanat auki tai käytä yksinkertaista korviketta, esimerkiksi ”halk.” halkaisijamerkin sijaan.

## Tiedostot, joita ei voi tallentaa

- **Suojatut PDF-tiedostot:** ”Tämä PDF on suojattu (salattu), joten merkitystä kopiosta ei voi kirjoittaa. Pyydä suojaamaton kopio.” Tiedostoa voi silti tarkastella ruudulla sekä viedä CSV- ja BCF-tiedostot.
- Jos tallennus epäonnistuu muusta syystä, ruutu nimeltä ”Tiedostoa <file> ei voitu tallentaa” kertoo syyn. Merkinnät ovat yhä välilehdellä, eikä mitään menetetä ennen kuin suljet sen.

## Litistys ja tulostus

Litistystä (merkintöjen polttamista sivuun) ja tulostuskomentoa ei ole vielä. Tulostaaksesi avaa tallennettu kopio millä tahansa PDF-katselimella ja tulosta kommentit näkyvinä.
