---
title: Uutta versiossa 0.7 (aiemmin)
summary: RFI:t, toimitusasiakirjat ja päiväkirjat uudessa Työmaa-välilehdessä, eräpäivät, myöhässä oleva punaisella, CSV ja BCF, offline-työ ja Yhdistä; avustajat, jotka asettavat tiloja, vastaavat ja vievät luettelon; yksikköluettelot, jotka seuraavat Asetuksia; paneelit, jotka siistiytyvät, ja valintaikkunat, jotka siirtyvät.
keywords: uutta 0.7, aiempi julkaisu, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, työmaa, työmaatietueet, rfi, tietopyyntö, toimitusasiakirja, päiväkirja, työmaapäiväkirja, myöhässä, eräpäivä, minulle osoitetut, nasta, yhdistä, offline, tabletti, bcf, csv, avustaja, mcp, merkinnän tila, vastaus, vienti, yksiköt, yksikköluettelot, tähti, kalibroi, tiivis, paneelit, valintaikkunat, portugali
from: f8578677
---

Tämä on, mitä muuttui versiossa MarkupCraft 0.7 verrattuna versioon 0.6. Suurin uusi asia on työmaatietueet: RFI:t, toimitusasiakirjat ja päiväkirjat, jotka säilytetään PDF:n sisällä merkintöjesi vieressä.

## Uutta

### RFI:t, toimitusasiakirjat ja päiväkirjat

- **Työmaa-välilehti.** Avaa {{ui:Työmaa}}-välilehti ja valitse {{ui:RFI}}, {{ui:Toimitusasiakirja}} tai {{ui:Päiväkirja}}. Napauta tai napsauta arkkia kohdasta, johon RFI tai toimitusasiakirja kuuluu, niin nasta merkitsee paikan; päiväkirja menee avoimelle arkille ilman nastaa ({{ui:Aseta nasta}} lisää sellaisen myöhemmin, {{ui:Siirrä nastaa}} siirtää mitä tahansa nastaa). Jokaisella tietueella on oma numero (RFI-0001, SUB-0001, LOG-0001), otsikko, teksti, tila, vastuuhenkilö, eräpäivä, vastausketju ja luettelo liitteiden nimistä. Katso [Seuraa RFI:itä, toimitusasiakirjoja ja päiväkirjoja](topic:field-records).
- **Näe, mikä on myöhässä.** Suodata luettelo tyypin, tilan, eräpäivän (myöhässä, eräpäivä 7 päivän sisällä, eräpäivä on tai sitä ei ole), tämän arkin tai kaikkien arkkien, tekstihaun tai {{ui:Minulle osoitetut}} mukaan. Tietue, jonka eräpäivä on mennyt ja joka odottaa yhä, merkitään **Myöhässä**-tilaan punaisena luettelossa ja nastassaan. Katso [Etsi tärkeä](topic:field-records#find-what-matters).
- **CSV ja BCF.** {{ui:CSV}} kirjoittaa listatut tietueet taulukkona; {{ui:BCF}} kirjoittaa ne BCF-aiheina, joista kukin sisältää kuvan paikastaan arkilla. Molemmat noudattavat suodattimia. Katso [Vienti](topic:field-records#export).
- **Offline, ja kaksi kopiota yhdeksi.** Tietueet tallennetaan PDF:n sisään, eikä ne tarvitse verkkoa, joten työmaalla oleva tabletti voi lisätä, vastata ja tallentaa niitä. Toimistolla {{ui:Yhdistä}} liittää saman PDF:n toisen kopion tietueet niiden tunnisteiden perusteella yhdeksi kumoamisvaiheeksi. Katso [Tallennus, offline ja kopioiden yhdistäminen](topic:field-records#save-offline-and-merging-copies).

### Tekoälyavustajat

- **Avustaja voi enemmän.** Oma avustajasi, yhdistettynä CadCraft Studion kautta, voi nyt asettaa merkinnän tilan (`markup_status`, kirjattuna sen ketjuun), vastata ketjussa (`markup_reply`) ja viedä {{ui:Merkinnät}}-luettelon CSV- tai BCF-muodossa (`markups_export`, eli mitä luettelo näyttää suodattimineen). Jokainen muutos on yksi kumoamisvaihe, ja se on allekirjoitettu avustajan nimellä. Katso [Mitä avustaja voi pyytää](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Jokaisessa sovelluksessa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää kullekin pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle oman luettelonsa tarkoilla kokoilla yksiköiden määritysten mukaan (USA:n survey-jalka on oma yksikkönsä). Poista käytöstä yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse yksikkö tähdellä, niin uusi työ alkaa siitä. Tiedosto säilyttää aina oman yksikkönsä. MarkupCraft-sovelluksessa mittaus- ja sijaintiyksiköt kohdassa {{ui:Asetukset}} › {{ui:MarkupCraft}} sekä kalibrointi-ikkunan yksikkö seuraavat kytkimiä; tähti asettaa mittausyksikön, kunnes tallennat MarkupCraftin omat asetukset; ja kalibroidessa kirjoittamasi todellinen etäisyys voi sisältää minkä tahansa yksikön merkin, kuten `3 yd` tai `1.5 km`. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka siistiytyvät.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahtuu ruudulle enemmän (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisessa sivupaneelissa on ohut otsikkopalkki: vedä sitä kiinnittääksesi tai irrottaaksesi paneelin, pudota se toisen paneelin palkille jakaaksesi yhden kehyksen välilehtinä, kiinnitä se, jolloin se liukuu reunaan, tai piilota se ja tuo takaisin reunasta. Katso [Järjestä paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat siirtyvät.** Vedä valintaikkunaa sen otsikkopalkista pois piirustuksen tieltä; se palaa siihen, mistä jätit sen. Kaksoisnapauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Ohjeet tekoälyavustajille.** Kymmenen valmista pyyntöä omalle avustajallesi (siivoa piirustus, tulosta sarja, tarkista piirustuksia, kysy mallilta, laske määräluettelo, kokeile osan varianttia…), kukin käyttämiensä työkalujen ja tarvitsemiensa oikeuksien kanssa ja kukin testien toistama. Sovellukset eivät sisällä tekoälyä. Katso [Ohjeet tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt kaikki sovellusten sanat, luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkistanut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (tiedostoa järjestelmällesi ei ole vielä, ei verkkoa, virheellinen allekirjoitus), sen sijaan että näyttäisi vain "Valmis". Se myös lakkaa tuomasta takaisin Mitä uutta -korttia, jonka suljit, ennen kuin on uudempi julkaisu.

## Ei vielä tässä versiossa

- **0.7 ei ole koodilla allekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska sertifikaatin vahvistus ei ole vielä valmis. Tarkista jokaisen tiedoston vierestä SHA-256-tarkiste osoitteesta getcadcraft.com/download. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Mac-tietokoneessa ensimmäisellä kerralla napsauta CadCraft Studiota oikealla painikkeella ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Yksiköt}} tallennetaan, mutta mikään ei vielä lue niitä.
- Tietueita ei jaeta CadCraft Studio -ohjelman Live-istunnoissa (Live-istunnoissa kulkevat vain merkinnät); vie kopiot yhteen {{ui:Yhdistä}}-toiminnolla.
- Yhdistä ottaa tietueen kokonaisena viimeksi muutetusta kopiosta: jos kaksi ihmistä muutti eri kenttiä samasta tietueesta, myöhemmän kopion kentät voittavat. Ketjut ja liitteiden nimet yhdistetään.
- Liitteet ovat vain nimiä; tiedostot pysyvät missä ovat. Tietueille ei ole tiimejä, ilmoituksia eikä pilviprojekteja, eikä avustajilla ole vielä työkaluja tietueille.
- Tietueet testattiin selaimessa puhelin- ja tablet-kokoisilla näytöillä verkon ollessa poissa, mutta ei vielä käsin oikealla tabletilla.
- Vielä versiosta 0.6: sivun kohteiden kääntäminen mihin kulmaan tahansa, uusien muotojen piirtäminen suoraan sivulle, viivan fontin tai koon muuttaminen ja teksti, joka jatkuu useammalle riville. Sivumuutoksia sisältävää tallennettua kopiota ei ole vielä avattu Acrobat-ohjelmassa.
- Vielä versiosta 0.5: sivumuutoksen kumoaminen (kuten tyhjän sivun lisääminen), tekstin lukeminen skannatuista arkeista ja Live-istunnot oman verkkosi ulkopuolella.

Kaikki muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).
