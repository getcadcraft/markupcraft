---
title: Tulossa muusta merkintäohjelmasta
summary: Miten pöytäkoneen PDF-merkintäohjelman tavat vastaavat MarkupCraftia ja mitkä erot yllättävät ihmiset.
keywords: vaihto, siirtyminen, siirto, tutut, pöytä-PDF-merkintä, työkalupakki, merkintäluettelo, peite, istunnot, profiili, pikanäppäimet, erot
from: c8f323e1
---

Jos katselmoit piirustuksia Bluebeam Revulla (tai kommentoit PDF-tiedostoja muussa pöytä-PDF-ohjelmassa), suurin osa MarkupCraftista tuntuu tutulta: pilvet, selitteet, työkalupakki, merkintäluettelo, tilat vastauksineen, kalibroidut mittaukset ja arkkipeitteet. Tiedostojen käsittely on suurin ero, joten lue seuraava osio, vaikka ohittaisit muun.

## Viisi olennaista eroa

1. **Tallennus luo uuden tiedoston.** MarkupCraft toimii selaimessa eikä voi kirjoittaa PDF-tiedoston päälle levyllä. {{ui:Tallenna}} lataa tiedoston ”<name> (marked up).pdf”, ja alkuperäinen pysyy ennallaan. Seuraavalla kerralla avaa ”(marked up)” -kopio ja siivoa vanhat kopiot itse.
2. **PDF tallennetaan, kun tallennat sen.** Siihen asti tämän selaimen palautuskopio säilyttää merkintäsi kaatumisen tai suljetun välilehden varalta, ja MarkupCraft tarjoaa sen takaisin seuraavalla kerralla. Se on varmistus: tallenna PDF säilyttääksesi katselmoinnin.
3. **Profiilisi elää selaimessa.** Tekijänimesi, työkaluasetuksesi ja työkalupakkisi säilytetään tässä selaimessa tällä tietokoneella. Eri selain tai tietokone aloittaa tyhjästä, ja sivuston tietojen tyhjennys poistaa ne. Vie työkalupakkisi varmuuskopioksi. Katso [Mitä jää tähän selaimeen](topic:browser-storage).
4. **Ei vielä jaettuja istuntoja.** Reaaliaikaista yhteistä katselmointisessiota tai pilviprojektia ei ole. Katselmointi kulkee PDF-tiedostossa: tallenna, lähetä kopio, ja seuraava henkilö vastaa ja tallentaa.
5. **Mittakaava on arkkikohtainen, eikä sitä voi jakaa muille.** Arkin sisällä ei ole näkymäruutuja, eikä ole ”käytä tätä mittakaavaa kaikille sivuille” -toimintoa. Kalibroi jokainen arkki, jota mittaat.

## Tapa tavalta

| Totut tähän | MarkupCraftissa |
|---|---|
| Pikkukuvapaneeli, sivunumerot | {{ui:Arkit}} vasemmalla. Nimet tulevat sivunumeroista tai luetaan piirustusotsikosta. Korjaa ne kohdasta {{ui:Nimeä arkki uudelleen}}. |
| Useiden PDF-tiedostojen avaaminen sarjana | Avaa ne kaikki kerralla, ja ne muodostavat yhden luettelon. Sarjatiedostoa ei tallenneta. Avaa samat PDF-tiedostot seuraavalla kerralla. |
| Työkalupakki työkalusarjoineen | {{ui:Työkalut}}-välilehti: yksi pakki selainta kohden, tallennetut työkalut tyylillä ja aiheella. Jaa {{ui:Vie}}- ja {{ui:Tuo}}-toiminnoilla JSON-tiedostona. Muiden ohjelmien työkalusarjatiedostoja ei voi tuoda. |
| Ominaisuuspaneeli | {{ui:Ominaisuudet}}-välilehti: tila, aihe, kommentti, tyyli, vastaukset ja puutelistan kohta yhdessä paikassa. |
| Merkintäluettelo sarakkeineen | {{ui:Merkinnät}}-välilehti suodattimineen arkin, tekijän, tilan ja tyypin mukaan. Vie CSV tai BCF. Omia sarakkeita ja PDF- tai taulukkoyhteenvetoa ei ole vielä. |
| Tila ja katselmointitila | {{ui:Tila}}: Open, Accepted, Rejected, Completed. Omia tilasarjoja ei ole. Tila tallennetaan tavallisina katselmointitiloina. |
| Vastaukset merkinnässä | Vastausketju kohdassa {{ui:Ominaisuudet}}, ja tilamuutokset kirjautuvat siihen. Lähetettyä vastausta ei voi muokata. |
| Kalibroi, sitten pituus, pinta-ala, lukumäärä | {{ui:Kalibroi}}, {{ui:Pituus}} ({{key:M}}), {{ui:Pinta-ala}} ({{key:Q}}, antaa pinta-alan ja kehän), {{ui:Lukumäärä}} ({{key:U}}). Kulmaa, sädettä, tilavuutta, murtoviivan pituutta ja aukkoja ei ole vielä. |
| Peittosivut | {{ui:Vertaa}}-välilehti: punainen vanhalle, sininen uudelle, kohdistus kahdella pisteellä. Automaattista ”vertaa asiakirjoja” -pilvitystä ei ole. |
| Leimat | {{ui:Leima}} kuudella sisäänrakennetulla leimalla ja omalla sanamuodolla, allekirjoitettuna nimelläsi ja päivämäärällä. Kuva- tai allekirjoitusleimoja ei ole vielä. |
| Puutteiden tai havaintojen seuranta | {{ui:Puutelista}}-välilehti: numeroituja kohteita vastuuhenkilön, eräpäivän ja tilan kanssa. CSV-vienti. |
| Reaaliaikainen yhteistyöistunto | Ei ole vielä käytettävissä. Lähetä tallennettu PDF eteenpäin. |
| Litistys | Ei ole vielä toteutettu. Merkinnät pysyvät kommentteina, jotka muut katselijat voivat näyttää ja tulostaa. |
| Merkintöjen tasot | Ei ole vielä toteutettu. Lajittele kommentit aiheiden, tekijöiden ja luettelon suodattimien avulla. |
| Linkit arkkien välillä | Ei ole vielä toteutettu. |
| Välilyönti siirtää, rulla zoomaa | Sama: pidä {{key:Space}} pohjassa ja vedä. Rulla zoomaa osoittimen kohdalla. Rulla ei koskaan vieritä sivua. |

## Näppäimet, jotka eroavat

Monet yhden kirjaimen näppäimet ovat sitä, mitä odotat. Tarkista kuitenkin nämä, ennen kuin sormesi tekevät niin puolestasi:

- {{key:K}} on {{ui:Selite}}, ja {{key:Q}} on {{ui:Pinta-ala}}. Jos olet tottunut Q:hun selitteille, se aloittaa täällä pinta-alan.
- {{key:C}} on laatikkomainen {{ui:Pilvi}}, ja {{key:Shift+C}} on {{ui:Vapaa pilvi}}.
- {{key:M}} on {{ui:Pituus}}, {{key:U}} on {{ui:Lukumäärä}}, {{key:Y}} on {{ui:Murtoviiva}}, {{key:G}} on {{ui:Monikulmio}} ja {{key:I}} on {{ui:Korostus}}.
- {{key:Mod+D}} monistaa valinnan (selaimen kirjanmerkin sijaan).
- {{key:Mod+Plus}} ja {{key:Mod+Minus}} zoomaavat arkkia, eivät selaimen sivua.
- Minkä tahansa näppäimen voi vaihtaa. Katso alla.

:::tip
Jos sormesi tuntevat Bluebeam Revun, valitse {{ui:Asetukset}} › {{ui:MarkupCraft}} › {{ui:Valikot, näppäimet ja hiiri}} -kohdasta {{ui:PDF-tarkastus}}-valikkotyyli. Silloin näkyy valikkopalkki (Tiedosto, Muokkaa, Näytä, Asiakirja, Merkintä, Mittaa, Ikkuna) katselmointityökalujen rivin yläpuolella. {{key:Q}} on selitteelle, {{key:H}} korostuskynälle ja {{key:N}} monikulmiolle, ja mittaukset ovat {{key:Alt+Shift}}-yhdistelmällä ja kirjaimella. Minkä tahansa näppäimen voi vaihtaa myös siellä. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).
:::

Koko luettelo on kohdassa [Näppäimistö ja hiiri](topic:keyboard).

## Asiat, jotka toimivat eri tavalla kuin odotat

- **Työkalut pysyvät päällä.** Pilven jälkeen piirrät yhä pilviä. {{key:Esc}} kerran tyhjentää valinnan, ja kahdesti palaat {{ui:Valitse}}-työkaluun.
- **Teksti ja selitteet tarvitsevat tekstiä.** Jos lopetat tyhjänä, merkintää ei lisätä. Muistiinpanot jäävät tyhjiksi.
- **Mittaukset tarvitsevat ensin mittakaavan.** {{ui:Pituus}} ja {{ui:Pinta-ala}} vaihtavat {{ui:Kalibroi}}-työkaluun kalibroimattomalla arkilla ja palaavat sen jälkeen.
- **Kommentit muista ohjelmista.** Suorakulmiot, ellipsit, viivat, murtoviivat, monikulmiot, kynäpiirrokset, tekstilaatikot ja liimalaput, jotka on tehty muualla, tulevat muokattaviksi MarkupCraft-merkinnöiksi. Ne kirjoitetaan uudelleen MarkupCraftin tavalla, kun tallennat, joten ulkoasu voi muuttua hieman. Tekstikorostukset, muiden ohjelmien leimat ja muut erikoistyypit pysyvät vain luettavina. Voit vastata niihin, mutta et muuttaa niitä.
- **Länsieurooppalaisten kirjainten ulkopuoliset merkit** tulostuvat tallennetussa PDF-tiedostossa kysymysmerkkeinä ”?”. Katso [Tallenna merkitty PDF](topic:save-the-marked-up-pdf).
- **Leimojen päivämäärät** käyttävät UTC-aikaa. Amerikassa myöhään illalla tehty leima voi siksi näyttää huomisen päivämäärän.
- **Mittaukset siirtyvät** tavallisina PDF-mittauskommentteina, ja jokainen kalibroitu arkki säilyttää mittakaavansa. Ohjelma, joka lukee PDF-mittauksia, voi yleensä näyttää ne. Tarkka toiminta riippuu kyseisestä ohjelmasta.

## Molempien käyttö

Voit liikkua edestakaisin. Muualla tehdyt kommentit avautuvat MarkupCraftissa, ja ”(marked up)” -PDF avautuu muissa PDF-ohjelmissa kaikkine merkintöineen, vastauksineen ja tiloineen. MarkupCraftin lukema tieto, eli puutelistan kohteen vastuuhenkilö, eräpäivä ja kohteen tila, säilytetään tiedostossa MarkupCraftia varten.
