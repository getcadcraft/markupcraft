---
title: Uutta versiossa 0.9
summary: Muistiinpanot ja työalusta, jotka eivät koskaan tulostu, salatut yksityiset muistiinpanot ja puhdas kopio asiakkaalle, erälinkit koko piirustussarjalle, Kaari-työkalu kymmenellä menetelmällä, toisen tarkastajan seuraaminen Live-istunnossa sekä korjaus poistettujen merkintöjen jäämiseen tallennettuun PDF:ään.
keywords: uutta, mitä uutta, 0.9, julkaisutiedot, muutosloki, muistiinpanot, työalusta, yksityiset muistiinpanot, salalause, salattu, piilota muistiinpanot, näytä muistiinpanot, puhdas kopio, kuvakaappaus, erälinkit, arkkiviitteet, linkitä arkit, piirustusotsikko, arkkinumero, lisäys, uudelleennumerointi, pdf-linkki, kaari, kaarimenetelmät, kolmen pisteen kaari, säde, seuraa, seuraa minua, live, luokkanäkymä, henkilöluettelo, poistettu merkintä, työkaluvihjeet, välilehtien nimet, tehtävät, tehtävä, vastuuhenkilö, eräpäivä, myöhässä, tarkista nyt, mitä muuttui, revisiot, vertaa, äänimuistiinpano, päätös, punakynä, vastaustiedosto, piirtäjä, avustaja, mcp, ongelmat, kielet, syöttölaitteet, kosketuslevy, työkalurivin rivit, ominaisuusruudukko, päivitys
from: dbdd7ed4
---

Tämä on, mitä muuttui versiossa MarkupCraft 0.9 verrattuna versioon 0.8.1. Pääajatus on, että työmuistiinpanosi pysyvät sivulta, jonka asiakas saa, ja koko piirustussarjan voi linkittää yhdellä kertaa.

## Uutta

### Muistiinpanot, työalusta ja yksityiset muistiinpanot

- **Työalusta.** Jokaisen arkin ympärillä oleva alue on pöytä: mikä tahansa arkin viereen piirretty, kirjoitettu tai liitetty asia on muistiinpano, eikä se koskaan tulostu. Valitse {{ui:Näytä työalusta}} loitontaaksesi tilaa varten, tai {{ui:Kuvakaappaus työalustalle}}, vedä laatikko ja valitse sitten {{ui:Työalustalle}}, jolloin osasta piirustusta tehdään kuva arkin viereen. Kuvakaappaus on kuva, eikä se muutu, kun arkki muuttuu. Katso [Muistiinpanot, työalusta ja yksityiset muistiinpanot](topic:notes-and-pasteboard).
- **Näytä ja piilota muistiinpanot.** Mikä tahansa merkintä voi olla muistiinpano: aseta {{ui:Uudet merkinnät ovat}} {{ui:Muistiinpanot}}-välilehdellä tai {{ui:Tämä merkintä on}} kohdassa {{ui:Ominaisuudet}}. {{key:Shift+H}} tai arkin alla oleva {{ui:Muistiinpanot}}-kytkin piilottaa ja näyttää kaikki muistiinpanot kerralla. Muistiinpanot jätetään pois tulostuksesta, litistetyistä kopioista, luetteloista ja vienneistä, eivätkä muut PDF-lukijat näytä niitä. Tallennettu PDF säilyttää ne, kun avaat sen seuraavan kerran MarkupCraft-sovelluksessa.
- **Yksityiset muistiinpanot.** Valitse {{ui:Aseta salalause}} ja tee sitten merkinnästä {{ui:Yksityinen huomautus}}. Se salataan tiedostoon salalauseella, joka on vähintään 10 merkkiä pitkä, eikä sitä voi palauttaa: kukaan, ei edes me, ei voi avata sitä ilman salalausetta. {{ui:Lukitse}} piilottaa yksityiset muistiinpanot; {{ui:Pysy avattuna tällä laitteella}} on oletuksena pois päältä.
- **Tallenna puhdas kopio.** {{ui:Tallenna puhdas kopio}} poistaa jokaisen muistiinpanon, yksityisen muistiinpanon ja kaiken työalustalla olevan. Käytä sitä tiedostoon, joka menee asiakkaalle.

### Koko sarjan linkittäminen

- **Erälinkit.** Valitse {{ui:Sivut}} › {{ui:Erälinkit…}} tai {{ui:Linkitä arkkiviitteet…}} kohdasta {{ui:Hae tekstiä}} {{ui:Arkit}}-paneelissa. Vaihe 1 listaa kunkin arkin numeron ja nimen sellaisena kuin ne luettiin sen piirustusotsikosta; korjaa väärät. Vaihe 2 listaa löydetyt viitteet, kuten `3/A-501` tai `DETAIL 2 ON A-501`. {{ui:Linkitetään}} näyttää arkin ja näkymän kullekin, {{ui:Ei linkitetty}} näyttää numerot, joita mikään avoin arkki ei ole, ja {{ui:Luo linkit}} tekee ne kaikki yhdellä kumoamisvaiheella. Aja se uudelleen lisäyksen tai uudelleennumeroinnin jälkeen; käsin tekemiäsi linkkejä ei koskaan muuteta. Linkki, jossa on näkymä, tallennetaan PDF-linkkinä, joten muutkin lukijat avaavat myös yksityiskohdan. Katso [Arkkilinkit](topic:sheet-links).

### Piirtäminen

- **Kaari, kymmenen menetelmää.** {{ui:Kaari}}-työkalulla ({{key:O}}) on nyt sivun päällä {{ui:Kaaren menetelmä}}-ruutu, jossa on kymmenen tapaa piirtää kaari, ja kulman, pituuden, säteen ja suunnan voi napsauttaa tai kirjoittaa. Katso [Piirrä kaari kymmenellä tavalla](topic:draw-an-arc).

### Yhdessä työskentely

- **Toisen tarkastajan seuraaminen.** Live-istunnossa valitse {{ui:Seuraa}} henkilön nimen vierestä, jolloin näkymäsi siirtyy hänen mukanaan; oma panorointi tai zoomaus lopettaa seuraamisen. Isäntä voi valita {{ui:Pyydä kaikkia seuraamaan minua}}. Henkilöluettelo näyttää kunkin henkilön värin, nimen, arkin, jolla hän on, ja milloin hänen viimeisin muokkauksensa tehtiin. Katso [Seuraa toista tarkastajaa Live-istunnossa](topic:follow-in-live).

## Jokaisessa sovelluksessa

- Työkaluvihjeet ovat Bootstrap-vihjeitä, aloitusvihjeen voi sulkea, välilehtirivit vierittyvät, kun ne ylittävät tilansa, ja selaimen välilehtien otsikot ovat muodossa `<document> — MarkupCraft | CadCraft`.
- Paneeli, jossa on useita osioita, avaa yhden ja sulkee muut (lukko osoittimen vieressä pitää yhden auki); Asetusten kytkin kytkee tämän pois.
- Jokainen sovellus aloittaa oletuskokoelmalla kirjaston kohteita.
- Paino- ja lämpötilayksiköt ovat käytettävissä Yksiköt-asetuksissa.

## Korjattu

- **Poistetut merkinnät eivät enää jää luettaviksi tallennettuun PDF:ään.** Tallennus poisti aiemmin merkinnän sivultaan, mutta jätti kohteen tekstineen tiedostoon. Nyt tallennus poistaa nämä kohteet. Aiemmilla versioilla tallennetut tiedostot säilyttävät ne, kunnes tallennat ne uudelleen.

## Rajoitukset

- Erälinkit kokeiltiin omilla testisarjoillamme. Oikeat sarjat piirtävät kuplia monella tavalla, joten joitain näkymiä voi jäädä huomaamatta asiakkaan sarjassa. Skannatut arkit tarvitsevat ensin {{ui:Lue teksti (OCR)…}}.
- Muistiinpanot, yksityiset muistiinpanot ja työalusta testattiin headless-selaimessa ja omilla tiedostoillamme, ei suurella oikealla vektorisarjalla eikä oikeassa kahden hengen Live-istunnossa. Salalauseen vaihtaminen ei ole toteutettu. Versiot ennen 0.9:ää eivät näytä muistiinpanoja.
- Luokkanäkymä on henkilöluettelo; sitä ei ole kokeiltu oikealla opettajan ja oppilaiden kanssa.
- Muut kielet kuin englanti ovat konekäännösluonnoksia, kunnes äidinkielinen puhuja lukee ne.
- Windows-asennusohjelmia ei ole allekirjoitettu koodilla (Lisätietoja, sitten Suorita silti); macOS-levykuvaa ei ole notarisoitu (napsauta oikealla, sitten Avaa).

## Aiemmin: 0.8 ja 0.8.1

Tämä on, mitä muuttui versioissa 0.8 ja 0.8.1 verrattuna versioon 0.7. Suurin uusi asia on, että merkintä voi olla tehtävä, jonka joku tai oma avustajasi tekee ja joka sulkeutuu itsestään, kun piirustus oikeasti muuttuu.

### Uutta

**Merkinnät, jotka toimivat**

- **Tee merkinnästä tehtävä.** Valitse yksi tai useampi merkintä, avaa {{ui:Tehtävät}}-välilehti ja valitse {{ui:Tee valitusta tehtävä}}. Tehtävällä on otsikko, henkilö tai yhdistetty avustajasi, joka sen tekee, valinnainen eräpäivä ja tila, ja se säilyttää paikkansa arkilla ja ketjunsa. Katso [Tee merkinnästä tehtävä](topic:markups-that-act).
- **Tehtävät, jotka sulkeutuvat itsestään.** Tehtävä voi seurata merkintänsä sisällä olevaa piirustusta. Avaa uudempi arkin revisio ja valitse {{ui:Tarkista nyt}}: jos alueen viivat muuttuivat yli hiuksen verran, tehtävä merkitään Valmis, merkinnän tila muuttuu Valmis-tilaan ja ketjussa oleva huomautus kertoo, mitä muuttui. Uusi päivämääräleima tai viivat, jotka siirtyivät alle 1.5 pistettä, eivät laske. Tehtävä voi sen sijaan seurata mallielementtiä: avustajasi ilmoittaa elementin työkalulla `tasks_check`, ja myöhempi, erilainen ilmoitus tai poistettu elementti sulkee tehtävän. Yksi kumoamisvaihe avaa sen uudelleen.
- **Etsi työ.** Suodata {{ui:Tehtävät}}-luetteloa tilan ja sen mukaan, kenelle tehtävä on, myös {{ui:Myöhässä}}-suodattimella; valitse {{ui:Osoitettu}} ja sitten {{ui:Avustaja}} nähdäksesi, mikä odottaa avustajaasi. Tehtävä, jonka eräpäivä on mennyt, näkyy varoituksena Ongelmat-paneelissa. {{ui:CSV}} vie luettelon. Tehtävät tallennetaan PDF:ään merkinnän mukana, ja ne kulkevat Live-istunnossa kuten muut merkinnän ominaisuudet.

**Mitä muuttui, selkeänä luettelona**

- **Luettele muutokset.** Avaa {{ui:Vertaa}}-välilehti ja valitse {{ui:Vertaa koko arkkisarjaa}}, valitse aiempi ja myöhempi tiedosto ja valitse {{ui:Luettele muutokset}}. Luettelo alkaa laskurilla ja käy sitten läpi jokaisen muuttuneen arkin, suurin muutos ensin: missä arkilla, kuinka suuri (todellisina yksikköinä sekä paperin tuumina kalibroidulla arkilla), lisättiinkö vai poistettiinko viivoja, kuinka monta merkintää kohdalla on ja mitkä sanat ilmestyivät tai katosivat. {{ui:Kopioi luettelo}} vie sen leikepöydälle, ja {{ui:CSV}} kirjoittaa yhden rivin jokaisesta muutoksesta. Katso [Luettele muutokset revisioiden välillä](topic:what-changed-in-words).

**Äänimuistiinpanot ja päätökset**

- **Äänimuistiinpanot.** Valitse {{ui:Muistiinpanot}}-välilehdeltä {{ui:Tallenna äänimuistiinpano}} ja sitten {{ui:Lopeta tallennus}}; tallennukset pysähtyvät itsestään kahden minuutin jälkeen. Muistiinpano kiinnittyy arkin keskelle, vedät sen paikalleen ja kirjoitat otsikon kohtaan {{ui:Ominaisuudet}}, ja {{ui:Toista}} luettelossa toistaa sen. Tallenne tallennetaan PDF:n sisään.
- **Päätökset.** {{ui:Kiinnitä päätös}} kirjoittaa arkille lauseen tai kaksi. Jos se korvaa aiemman päätöksen, valitse se kohdasta {{ui:Se korvaa}}: vanha päätös jää paikalleen, merkitään Korvattu ja osoittaa uuteen. Yksi kumoamisvaihe perii sen takaisin. Katso [Kiinnitä äänimuistiinpanot ja päätökset arkille](topic:voice-notes-and-decisions).

**Punakynä revisioon**

- **Lähetä ja vastaa.** Avaa {{ui:Tehtävät}}-välilehdeltä {{ui:Punakynä revisioon}}, kirjoita revisio, johon merkinnät viittaavat, ja valitse {{ui:Vie punakynätiedosto}}. Saat `.redline.json`-tiedoston, jossa on yksi kohta jokaista avointa merkintää kohden: arkki, paikka (arkin osuuksina, joten uudelleen eri kokoon piirretty arkki asettuu oikein), sanat, tekijä, ketju ja sen tehtävä. Piirtäjä, joka tekee muutokset, vastaa tiedostossa `.redline-answers.json` tilalla Hyväksytty, Hylätty tai Valmis; {{ui:Lataa vastaustiedosto…}} antaa kullekin merkinnälle tuon tilan ja piirtäjän huomautuksen yhtenä kumoamisvaiheena. Katso [Lähetä merkinnät piirtäjälle punakynänä](topic:redline-to-revision).

**Tekoälyavustajat**

- **Lisää työkaluja.** CadCraft Studion kautta yhdistetty avustajasi voi listata tehtäviä (`tasks_list`), luoda tai muuttaa yhden (`task_set`), poistaa tehtävän (`task_clear`), tarkistaa yhden uudempaa revisiota tai elementtiä vastaan (`tasks_check`) ja lukea kahden avoimen arkkisarjan muutosten selkeän luettelon (`revisions_changes`). Se saa vain ne työkalut, jotka rastitit Avustajat-kytkimen alla, ja jokainen muutos on yksi kumoamisvaihe. Katso [Käytä MarkupCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants).

### Jokaisessa sovelluksessa

- **Kielet.** CadCraft Studio -ohjelmassa on nyt 54 kieltä. Kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili ja uzbek. Kaikki englannin ulkopuoliset ovat konekäännösluonnoksia, kunnes äidinkielinen puhuja lukee ne.
- **Syöttölaitteet.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Syöttölaitteet}} määrittää, mitä kosketuslevy, hiiren sivupainikkeet, kynä, sormennapautukset, 3D-hiiri, pelien ohjain tai MIDI-ohjain tekee, kaikille sovelluksille tai vain tälle. Ennen kuin muutat mitään, jokainen laite toimii kuten ennenkin. Katso [Käytä kosketuslevyä, 3D-hiirtä tai ohjainta](common:input-devices).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} sisältää vaihtoehdot {{ui:Rivitä}} (oletus), {{ui:2 riviä}} ja {{ui:1 rivi}}, jolloin piirustukselle jää enemmän tilaa. Katso [Järjestä paneelit](common:arrange-panels).
- **Ominaisuusruudukko.** Merkinnän tyylikentät käyttävät yhteistä ruudukkoa, jossa on kokoontaitettavia ryhmiä sekä nimi- ja arvosarakkeet.
- **Ongelmat-paneeli.** Ohjelman varoitukset, kuten myöhässä oleva tehtävä, kerätään yhteen Ongelmat-paneeliin.
- **Live ja lisäosat.** Live-istunnot kuvataan kohdassa [Työskentele yhdessä live-tilassa](common:work-together-live), ja tiliisi kuuluva lisäosaluettelo on kohdassa [Lisäosat ja tilin luettelo](common:addons-basics).
- **Yhdistä tekoälysi.** CadCraft Studio on keskus omalle avustajallesi: yhdistä kerran kaikille kahdeksalle sovellukselle. Sovelluksissa ei ole omaa tekoälyä.

### Korjattu versiossa 0.8.1

- **Studio voi vaihtaa kieltä käynnissä ollessaan.** Aiemmin työpöytäsovellus ja paketoidut versiot pysyivät englanniksi. Tätä ei ole vielä testattu jokaisella alustalla: kerro, jos kieli ei vaihdu.
- Studio 0.8 -asennuksille tarjotaan 0.8.1 kohdassa {{ui:Asetukset}} › {{ui:Päivitykset}}.

### Ei vielä tässä versiossa

- **Ei koodilla allekirjoitettu.** Windows-asennusohjelmia ja macOS:n .dmg-levykuvaa ei ole vielä allekirjoitettu. Windowsissa, jos SmartScreen pysäyttää asennuksen, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Mac-tietokoneessa napsauta CadCraft Studiota oikealla painikkeella ja valitse {{ui:Avaa}}. Kauppaversiot ovat tauolla.
- **Tekoälyn yhdistäminen on osin kesken.** Yhden napsautuksen yhdistäminen Studiossa, selainavustajien isännöity liitäntä ja oma API-avaimesi Studiossa eivät ole lupauksia tälle julkaisulle. Tehtäväsilmukka on testattu, mutta ei vielä oikealla avustajalla.
- **Tehtävätarkistukset vaativat saman sivukoon.** Arkki, joka piirretään uudelleen eri kokoon, ei täsmää, joten sen tehtävät eivät sulkeudu. Arkit paritetaan arkkinumeron mukaan, muuten sivun sijainnin mukaan.
- **Äänimuistiinpanot ovat vain tallenteita.** Niissä ei ole litteraattia, ja avustaja näkee muistiinpanon pituuden, tekijän ja otsikon, ei ääntä. Tallennus kokeiltiin väärennetyllä mikrofonilla headless-selaimessa; oikea mikrofoni puhelimessa, tabletissa tai kannettavassa tietokoneessa on vielä tarkistamatta.
- **Laskentalehdet ja perustelut PDF:ssä** säilytetään tiedoston yksityisessä merkinnässä. Vanhempi MarkupCraft ohittaa sen ja pudottaa sen, kun se seuraavan kerran tallentaa tiedoston, joten avaa ja tallenna tällainen tiedosto versiolla 0.8 tai uudemmalla.
- **Punakynätiedoston lukeminen ja siihen vastaaminen piirtäjän puolella** CadCraft-ohjelmassa ei ole vielä toteutettu.
- **Muut kielet.** Tamil-kielen sovelluspalkki ylittää rajansa 528 px verran.

Kaikki muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet). Edellistä julkaisua koskevat tiedot ovat kohdassa [Uutta versiossa 0.7](topic:whats-new-0-7).
