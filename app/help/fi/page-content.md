---
title: Muuta sivun omia viivoja, kuvia ja tekstiä
summary: Siirrä, muuta kokoa, väritä tai poista PDF:n itse piirtämiä asioita, siirrä viivan pisteitä, korvaa kuva ja muuta tekstiviivan sanoja.
keywords: sivun sisältö, perussisältö, muokkaa PDF:ää, muokkaa piirustusta, vektori, polku, muoto, viiva, kuva, korvaa kuva, teksti, sanat, fontti, pisteet, solmut, siirrä, muuta kokoa, väritä, poista, sisältötyökalu
from: 471d457e
---

Merkinnät ovat arkin päällä. {{ui:Sisältö}}-työkalu toimii itse arkilla: viivat, kuvat ja tekstiviivat, jotka PDF piirtää. PDF:ää tässä tietokoneessa ei koskaan muuteta: muokkaukset ovat osa tallentamaasi kopiota.

## Valitse muutettava kohde

1. Valitse {{ui:Sisältö}}-työkalu {{ui:Valitse}}-ryhmästä tai paina {{key:B}}.
2. {{ui:Ominaisuudet}}-paneelin {{ui:Valitse}}-kohdassa kytke {{ui:Muodot}}, {{ui:Kuvat}} ja {{ui:Teksti}} päälle tai pois. Vain päällä olevat tyypit voi valita, joten voit valita kiireisen piirroksen tekstin ilman, että tartut sen viivoihin.
3. Napsauta jotakin valitaksesi sen. Shift+napsautus lisää tai poistaa. Vedä laatikko tyhjän paperin yli valitaksesi useita: oikealle vetäminen ottaa kokonaan laatikon sisään jäävät, vasemmalle vetäminen ottaa kaiken, mitä laatikko koskettaa.

Leikatun alueen sisällä oleva muoto valitaan vain siitä kohdasta, jossa se näkyy.

## Siirrä, muuta kokoa, väritä, poista

- **Siirrä:** vedä valittua kohdetta tai paina nuolinäppäimiä (pidä Shift pohjassa isompia askelia varten). Pidä Shift pohjassa vetäessäsi, jos haluat siirtää suoraan sivusuunnassa tai suoraan ylös.
- **Muuta kokoa:** vedä yhtä valinnan ympärillä olevaa kahdeksasta neliöstä. Se kasvaa tai pienenee vastakkaisesta sivusta. Pidä Shift pohjassa säilyttääksesi mittasuhteet.
- **Väritä:** viivoille ja muodoille aseta {{ui:Viivan väri}}, {{ui:Täyttöväri}} ja {{ui:Viivanpaksuus (pt)}} {{ui:Ominaisuudet}}-paneelissa.
- **Poista:** paina {{key:Delete}} tai valitse {{ui:Poista sivulta}}.
- **Kumoa:** jokainen muutos on yksi askel: {{key:Mod+Z}} kumoaa sen, {{key:Mod+Y}} palauttaa sen.

{{ui:Palauta ennalleen}} kumoaa kaikki valittujen kohteiden muutokset kerralla; {{ui:Palauta tämä sivu ennalleen}} tekee sen koko sivulle.

## Kopioi, leikkaa ja liitä sivun sisältöä

Valitse viivoja, kuvia tai tekstiä {{ui:Sisältö}}-työkalulla ja sitten:

- {{key:Mod+C}} kopioi, {{key:Mod+X}} leikkaa (kopioi ja vie ne pois sivulta), {{key:Mod+D}} asettaa kopion niiden viereen.
- {{key:Mod+V}} liittää sivun sisältönä, alkuperäisen viereen tai osoittimen kohtaan (kuten [Asetukset](topic:settings) kertovat); {{key:Mod+Shift+V}} liittää täsmälleen samaan paikkaan. Liitä toiselle sivulle, toiseen avoimeen PDF:ään tai toiseen MarkupCraft-välilehteen tässä selaimessa.
- {{ui:Muokkaus}}-ryhmän valikossa ja hiiren kakkospainikkeen valikossa on samat komennot.

Liitos säilyttää viivat viivoina, sanat omina sanoinaan omalla fontillaan ja kuvat kuvina. Se on yksi kokonaisuus: siirrä sitä, muuta sen kokoa neliöillään, poista se tai kumoa se {{key:Mod+Z}}-näppäimellä. Se tulee osaksi sivua tallentamassasi kopiossa. Viimeksi kopioitu, merkinnät tai sivun sisältö, on sitä, minkä {{key:Mod+V}} liittää.

Kopion sisältö rajautuu valinnan ympärillä olevaan laatikkoon: mitä MarkupCraft ei voi kopioida (katso alla) ja mikä on tuon laatikon sisällä, tulee mukaan.

## Siirrä viivan pisteitä

Kaksoisnapsauta viivaa tai käyrää (tai valitse se ja valitse {{ui:Muokkaa pisteitä}}). Sen pisteet näkyvät neliöinä ja käyrän kahvat ympyröinä. Vedä piste tai kahva; piste tuo viereiset kahvat mukanaan, jolloin käyrä säilyttää muotonsa sen ympärillä. Kun olet valmis, paina {{key:Esc}} tai napsauta viivan ulkopuolelle.

Suorakulmioilla ei ole pisteitä vedettäväksi: muuta niiden kokoa niiden ympärillä olevilla neliöillä.

## Korvaa kuva

Valitse kuva ja valitse {{ui:Korvaa kuva…}}, valitse sitten PNG-, JPEG- tai SVG-tiedosto (tai PDF: sen ensimmäinen sivu). Uusi kuva täyttää vanhan paikan säilyttäen omat mittasuhteensa.

## Muuta tekstiviivan sanoja

Kaksoisnapsauta tekstiviivaa, kirjoita uudet sanat {{ui:Sanat}}-kenttään ja paina {{key:Enter}}. Sanat kirjoitetaan viivan omalla fontilla ja koolla, ja viiva säilyttää pituutensa, joten sen jälkeinen teksti ei siirry.

:::note
Useimmat PDF-tiedostot sisältävät vain ne kirjaimet, joita kustakin fontista käytetään. Kun kirjoitat kirjaimen, jota tiedoston kopiossa ei ole, MarkupCraft tulostaa kyseisen kirjaimen Helvetica-fontilla ja kertoo siitä. {{ui:Ominaisuudet}}-paneeli näyttää, mitkä kirjaimet tiedoston fontissa ovat.
:::

Teksti muutetaan yksi rivi kerrallaan; se ei virtaa seuraavalle riville.

## Mitä MarkupCraft jättää ennalleen

- **Skannatut sivut** ovat yksi kuva: voit siirtää, muuttaa kokoa, korvata tai poistaa kuvan, mutta sen sisältöä ei voi muokata.
- **Salatut ja allekirjoitetut PDF:t:** sivun muuttaminen rikkoisi allekirjoituksen, joten {{ui:Sisältö}}-työkalu kertoo siitä eikä muuta mitään. Merkinnät toimivat yhä.
- **Leikkausalueet, osat, jotka on jaettu sivun sisällön kahden osan välillä, ja koko alueen täyttävät väriliitokset** pysyvät ennallaan; MarkupCraft kertoo syyn, kun yrität.
- **Vakiofontin sanat, joita PDF ei kuvaa** (kuten Times-fontti ilman kirjainleveyksiä tiedostossa) eivät ole muokattavissa, koska MarkupCraft ei voisi säilyttää rivin välistystä. Rivin voi silti siirtää.

## Aseta merkinnät sivulle

Viivat, suorakulmiot, ellipsit, murtoviivat, pilvet ja kynävedot, jotka piirsit merkintöinä, voivat tulla osaksi sivua itseään: valitse ne ja valitse {{ui:Aseta sivuun}} {{ui:Ominaisuudet}}-paneelissa. Teksti, leimat, kuvat ja läpinäkyvät värit pysyvät merkintöinä.
