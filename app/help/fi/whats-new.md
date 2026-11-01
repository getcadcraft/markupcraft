---
title: Uutta versiossa 0.7
summary: RFI-kyselyt, toimitusasiakirjat ja päiväkirjat uudessa Työmaa-välilehdessä, eräpäivineen, myöhässä olevat punaisella, CSV ja BCF, offline-työ ja Yhdistä; avustajat, jotka asettavat tiloja, vastaavat ja vievät luettelon; Asetuksia seuraavat yksikköluettelot; paneelit, jotka väistyvät, ja valintaikkunat, joita voi siirtää.
keywords: uutta, mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, työmaa, työmaamerkinnät, rfi, tietopyyntö, toimitusasiakirja, päiväkirja, työmaapäiväkirja, myöhässä, eräpäivä, minulle osoitetut, nasta, yhdistä, offline, tabletti, bcf, csv, avustaja, mcp, merkinnän tila, vastaus, vienti, yksiköt, yksikköluettelot, tähti, kalibroi, tiivis, paneelit, valintaikkunat, portugali
from: 142e1a1e
---

Tässä on se, mikä muuttui MarkupCraftin versiossa 0.7 verrattuna versioon 0.6. Suuri uutuus ovat työmaamerkinnät: RFI-kyselyt, toimitusasiakirjat ja päiväkirjat, jotka säilytetään PDF:n sisällä merkintöjesi vieressä.

## Uutta

### RFI-kyselyt, toimitusasiakirjat ja päiväkirjat

- **Työmaa-välilehti.** Avaa {{ui:Työmaa}}-välilehti ja valitse {{ui:RFI}}, {{ui:Toimitusasiakirja}} tai {{ui:Päiväkirja}}. Napauta tai napsauta arkkia kohdassa, johon RFI tai toimitusasiakirja kuuluu, niin nasta merkitsee paikan; päiväkirja lisätään avoimelle arkille ilman nastaa ({{ui:Aseta nasta}} lisää sellaisen myöhemmin, {{ui:Siirrä nastaa}} siirtää minkä tahansa nastan). Jokaisella merkinnällä on oma numeronsa (RFI-0001, SUB-0001, LOG-0001), otsikko, teksti, tila, vastuuhenkilö, eräpäivä, vastausketju ja luettelo liitteiden nimistä. Katso [RFI-kyselyjen, toimitusasiakirjojen ja päiväkirjojen seuranta](topic:field-records).
- **Näe, mikä on myöhässä.** Suodata luetteloa tyypin, tilan, eräpäivän (myöhässä, erääntyy 7 päivän sisällä, eräpäivä on tai ei ole), tämän arkin tai kaikkien arkkien, tekstihaun tai kohdan {{ui:Minulle osoitetut}} mukaan. Merkintä, joka on ohittanut eräpäivänsä ja odottaa yhä, merkitään **Myöhässä**-tilaan, punaisella, luettelossa ja nastassaan. Katso [Tärkeän löytäminen](topic:field-records#find-what-matters).
- **CSV ja BCF.** {{ui:CSV}} kirjoittaa luetellut merkinnät taulukkona; {{ui:BCF}} kirjoittaa ne BCF-aiheina, joihin kuhunkin kuuluu tilannekuva sen paikasta arkilla. Molemmat noudattavat suodattimia. Katso [Vienti](topic:field-records#export).
- **Offline, ja kaksi kopiota yhdeksi.** Merkinnät tallennetaan PDF:n sisään eivätkä tarvitse verkkoa, joten työmaalla oleva tabletti voi lisätä, vastata ja tallentaa niitä. Takaisin toimistossa {{ui:Yhdistä}} liittää saman PDF:n toisen kopion merkinnät tunnisteiden perusteella yhtenä kumoamisvaiheena. Katso [Tallennus, offline ja kopioiden yhdistäminen](topic:field-records#save-offline-and-merging-copies).

### Tekoälyavustajat

- **Enemmän, mitä avustaja voi tehdä.** Oma avustajasi, joka on yhdistetty CadCraft Studion kautta, voi nyt asettaa merkinnän tilan (`markup_status`, kirjataan sen ketjuun), vastata ketjussa (`markup_reply`) ja viedä {{ui:Merkinnät}}-luettelon CSV- tai BCF-muodossa (`markups_export`, se mitä luettelo näyttää suodattimineen). Jokainen muutos on yksi kumoamisvaihe, allekirjoitettu avustajan nimellä. Katso [Mitä avustaja voi pyytää](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Jokaisessa sovelluksessa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää kullekin oman luettelonsa pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle, täsmälleen yksiköiden määritelmien mukaisine kokoineen (Yhdysvaltain maanmittausjalka on oma yksikkönsä). Kytke pois yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse yksi tähdellä, niin uusi työ alkaa siinä. Tiedosto säilyttää aina oman yksikkönsä. MarkupCraftissa mittaus- ja sijaintiyksiköt kohdassa {{ui:Asetukset}} › {{ui:MarkupCraft}} sekä kalibrointi-ikkunan yksikkö seuraavat kytkimiä, tähti asettaa mittausyksikön, kunnes tallennat MarkupCraftin omat asetukset, ja kalibroidessasi kirjoittamasi todellinen etäisyys voi sisältää minkä tahansa yksikön tunnuksen, kuten `3 yd` tai `1.5 km`. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka väistyvät.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahduttaa enemmän näytölle (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisella sivupaneelilla on kapea otsikkopalkki: vedä sitä kiinnittääksesi tai irrottaaksesi paneelin, pudota se toisen paneelin palkin päälle jakaaksesi yhden kehyksen välilehtinä, kiinnitä se liukumaan reunaan tai piilota se ja tuo se takaisin reunasta. Katso [Paneelien järjestäminen](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunoita voi siirtää.** Vedä valintaikkunaa otsikkopalkista pois piirustuksen tieltä; se palaa sinne, mihin sen jätit. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Valintaikkunan siirtäminen](common:arrange-panels#move-a-dialog).
- **Reseptejä tekoälyavustajille.** Kymmenen läpikäytyä pyyntöä omalle avustajallesi (piirustuksen siivous, sarjan plottaus, piirustusten tarkastus, mallia koskevat kysymykset, määrälaskennan summaus, osavaihtoehdon kokeilu …), kukin kutsumine työkaluineen ja tarvitsemineen oikeuksineen, ja kukin testeissämme toistettu. Sovellukset eivät sisällä tekoälyä. Katso [Reseptejä tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt sovellusten jokaisen sanan luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkastanut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (järjestelmällesi ei ole vielä tiedostoa, ei verkkoa, virheellinen allekirjoitus) pelkän ”Valmis” sijaan, eikä enää tuo takaisin sulkemaasi Uutta-korttia ennen kuin uudempi julkaisu on olemassa.

## Ei vielä tässä versiossa

- **Versiota 0.7 ei ole koodiallekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirrettiin versioon 0.8, koska varmenteen vahvistus ei ole vielä mennyt läpi. Tarkista SHA-256 jokaisen tiedoston vieressä osoitteessa getcadcraft.com/download. Jos Windowsissa SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita kuitenkin}}. Macilla napsauta ensimmäisellä kerralla CadCraft Studiota hiiren oikealla painikkeella ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä missään sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Yksiköt}} tallennetaan, mutta mikään ruutu ei lue niitä vielä.
- Työmaamerkintöjä ei jaeta CadCraft Studion live-istunnossa (live-istunnot kuljettavat vain merkintöjä); tuo kopiot yhteen toiminnolla {{ui:Yhdistä}}.
- Yhdistäminen ottaa merkinnän kokonaisena siitä kopiosta, jota muutettiin viimeksi: jos kaksi henkilöä muutti saman merkinnän eri kenttiä, myöhemmän kopion kentät voittavat. Ketjut ja liitteiden nimet yhdistetään.
- Liitteet ovat vain nimiä; tiedostot pysyvät siellä, missä ne ovat. Merkinnöille ei ole tiimejä, ilmoituksia eikä pilviprojekteja, eikä avustajilla ole vielä työkaluja merkintöihin.
- Työmaamerkinnät testattiin selaimessa puhelimen ja tabletin kokoisina verkon ollessa katkaistu, mutta ei vielä käsin oikealla tabletilla.
- Yhä versiosta 0.6: sivun kohteiden kääntäminen mihin tahansa kulmaan, uusien muotojen piirtäminen suoraan sivulle, rivin fontin tai koon muuttaminen ja useille riveille virtaava teksti. Tallennettua kopiota, jossa on sivumuutoksia, ei ole vielä avattu Acrobatissa.
- Yhä versiosta 0.5: sivumuutoksen kumoaminen (esimerkiksi tyhjän sivun lisääminen), tekstin lukeminen skannatuilta arkeilta ja live-istunnot oman verkkosi ulkopuolella.

Kaikki muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).
