---
title: Etsi tekstiä piirustuksista
summary: Hae sanoja jokaiselta arkilta, siirry jokaiseen osumaan ja pilvitä ne kaikki yhdellä askeleella.
keywords: hae, haku, teksti, sana, sanat, ctrl f, huomautus, avainhuomautus, selite, pilvitä kaikki, korosta osumat, ocr, skannaus, skannattu, lue teksti, valitse teksti, kopioi teksti, tesseract
from: 3435c9eb
---

{{ui:Hae tekstiä}}, {{ui:Arkit}}-paneelin yläosassa, hakee arkeille piirretyistä sanoista. {{ui:Hae arkkeja}} sen alla hakee vain arkkien nimistä.

## Hae

1. Paina {{key:Mod+F}} tai avaa {{ui:Hae tekstiä}}.
2. Kirjoita sanat, esimerkiksi `hood` tai `verify in field`.
3. Valitse {{ui:Kaikki arkit}} tai {{ui:Tämä arkki}}, ja rastita {{ui:Erota isot ja pienet kirjaimet}} tai {{ui:Kokonaiset sanat}}, jos tarvitset niitä.
4. Paina {{key:Enter}} tai valitse {{ui:Hae}}.

Tulos: jokainen osuma luetellaan arkkinumeronsa ja ympäröivien sanojen kanssa, ja se merkitään keltaisella omalla arkillaan. Valitse osuma, niin arkki avautuu ja zoomautuu siihen.

Lause löytyy silloinkin, kun piirustus jakaa sen kahdelle tekstipalalle tai kahdelle riville.

## Pilvitä jokainen osuma

Valitse {{ui:Pilvitä kaikki}}. Revisiopilvi kiertää jokaisen luettelon osuman kaikilla arkeilla, ja kommenttina on "Löytyi: <sanasi>". Yksi {{key:Mod+Z}} poistaa ne kaikki.

## Lue skannatun arkin teksti (OCR)

Skannattu arkki on vain kuva: ennen kuin sen sanat on luettu, siinä ei ole mitään löydettävää. Kun laskuri kertoo, että arkeilla ei ole tekstiä, valitse sen alla {{ui:Lue teksti (OCR)…}} tai {{ui:Sivut}} › {{ui:Lue teksti (OCR)…}}.

1. Valitse sivut: tämä arkki, tiedoston jokainen sivu tai kaikkien avoinna olevien tiedostojen jokainen sivu.
2. Valitse tekstin kieli. {{ui:Myös englanti}} lukee myös englanninkielisiä sanoja.
3. Valitse {{ui:Lue teksti}}. Palkki näyttää luettavana olevan sivun; {{ui:Lopeta}} päättää ajon ja säilyttää jo luetut sivut.

Tulos: sanat voidaan löytää, valita ja kopioida kuten mikä tahansa muu teksti. Kaikki tapahtuu omalla tietokoneellasi: mitään ei lähetetä minnekään. Se toimii ilman yhteyttä Studiossa, ja selaimessa silloin, kun sovellus on tallennettu offline-käyttöön (englanti ja käyttöliittymäsi kieli) tai kieltä on käytetty kerran. Sivut, joissa on jo teksti, jätetään ennalleen.

Tallentaessa sanat menevät PDF:ään näkymättömänä tekstinä kuvan taakse, erillään merkinnöistäsi, jotta muutkin PDF-ohjelmat voivat etsiä ja kopioida niitä. Ennen tallennusta tiedosto näkyy tallentamattomana.

## Valitse ja kopioi teksti

Valitse {{ui:Lisää}} › {{ui:Valitse kopioitava teksti}}. Vedä yhdestä sanasta toiseen valitaksesi sanat niiden väliltä, vedä tyhjältä paperilta valitaksesi laatikon sisällä olevat sanat tai kaksoisnapsauta yhtä sanaa. {{key:Mod+A}} valitsee jokaisen arkin sanan. {{key:Mod+C}} kopioi ne säilyttäen rivit. Mikä tahansa muu työkalu lopettaa tilan.

## Hyvä tietää

- Piirustuksissa, joiden kirjaimet on piirretty viivoina, ei myöskään ole tekstiä; lukeminen kuvana toimii parhaiten painetulla tekstillä, kuten skannatulla kirjalla tai erittelyllä.
- Lukija on Tesseract, joka on rakennettu sovellukseen sen kielitiedoilla englannille ja sovelluksen kielille. Ensimmäinen ajo lataa sen (noin 6 MB, enemmän toisesta kielestä).
- Lukutarkkuus riippuu skannauksesta: puhtaat 300 dpi:n sivut luetaan lähes sana sanalta; vanhat, vaaleat tai matalaresoluutioiset skannaukset jättävät enemmän sanoja väliin.
- Luettelo näyttää ensimmäiset 500 osumaa; {{ui:Pilvitä kaikki}} pilvittää enintään 2,000.
- Osumat tyhjennetään, kun suljet joukon, ja yhden tiedoston osumat, kun vaihdat sen sivuja.
