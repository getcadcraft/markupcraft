---
title: Avaa piirustussarja ja siirry arkkien välillä
summary: Avaa yksi PDF tai useita tai aloita tyhjillä sivuilla, etsi arkkeja numeron tai nimen perusteella, zoomaa ja panoroi, ja nimeä arkki uudelleen, kun tiedosto antaa väärän nimen.
keywords: avaa, uusi, tyhjä sivu, tyhjä arkki, luonnos, ruudukko, nimetön, piirustussarja, arkit, sivut, pikkukuvat, sivunumerot, arkin numero, otsikkolohko, nimeä uudelleen, siirry, zoomaa, panoroi, sovita, hae arkkeja
from: 1e7f4d50
---

## Avaa sarja

1. Valitse {{ui:Avaa}} työkalurivistä tai paina {{key:Mod+O}}.
2. Valitse tiedostoselaimessa kaikki sarjan PDF-tiedostot ({{pick:mac=pidä ⌘ pohjassa ja napsauta kutakin tiedostoa|windows linux=pidä Ctrl pohjassa ja napsauta kutakin tiedostoa}} tai valitse alue Shift-näppäimellä) ja vahvista.
   Tai vedä tiedostot arkkialueelle ({{pick:mac=Finder|windows=Resurssienhallinta|linux=oma tiedostonhallinta}}). Pudota PDF-tiedostot avataksesi ne -teksti ilmestyy, kun vedät.
3. Odota, kunnes tilarivi sanoo ”Avataan <file>…”. Suurissa tiedostoissa se laskee: ”(10/60 arkkia)”.

Tulos: {{ui:Arkit}}-luettelossa näkyy jokainen tiedoston jokainen sivu avaamisjärjestyksessä, ja tilarivi kertoo jotain sellaista kuin ”Avattiin 3 tiedostoa (42 arkkia sarjassa).” Jos tiedostoissa oli jo kommentteja, siihen lisätään, kuinka monta luettiin.

Voit lisätä tiedostoja sarjaan myöhemmin avaamalla ne samalla tavalla. Ne liittyvät luettelon loppuun.

## Aloita tyhjillä sivuilla

Jos haluat luonnostella tai tehdä muistiinpanoja ilman piirrosta, luo tyhjiä sivuja PDF:n avaamisen sijaan:

1. Valitse {{ui:Uusi}} työkalurivistä tai {{ui:Aloita tyhjällä sivulla}} aloitusnäytöltä, tai paina {{key:Mod+N}}, jos selain sallii sen (työpöytäsovellus ja Studio sallivat sen aina).
2. Valitse {{ui:Paperikoko}}: Letter, Tabloid tai ANSI B, ARCH D, ARCH E, A4, A3 tai A1, sekä {{ui:Pysty}} tai {{ui:Vaaka}}.
3. Valitse {{ui:Ruudukko}}: {{ui:Ei mitään}}, {{ui:Pisteet}} tai {{ui:Ruudut}}. Tuumapaperilla ruudukko on 1/4 tuuman välein, ja joka tuuma on korostettu paksummalla viivalla. Metrisellä paperilla ruudukko on 5 mm välein, ja joka 10 mm kohdalla on paksumpi viiva. Ruudukko tulostuu sivulle.
4. Kirjoita {{ui:Sivut}}-kenttään, kuinka monta sivua haluat, 1:stä 20:een, ja valitse {{ui:Luo}}.

Tulos: uusi PDF nimeltä ”Untitled-1.pdf” (sitten ”Untitled-2.pdf” ja niin edelleen) avautuu kuten mikä tahansa tiedosto, ja se on luotu tässä tietokoneessa. Kaikki työkalut toimivat siinä, ja {{ui:Tallenna}} lataa tiedoston ”Untitled-1 (marked up).pdf”. MarkupCraft muistaa valintasi seuraavaa kertaa varten.

Sivuilla ei ole mittakaavaa: tilarivi sanoo ”Ei kalibroitu”. Ruudukko ei ole mittakaava. Mittaamista varten kalibroi arkki tai valitse ensin mittakaava; katso [Kalibroi ja mittaa](topic:calibrate-and-measure).

Lisätäksesi sivun tyhjään sarjaan avaa jokin sen arkeista ja valitse {{ui:Lisää tyhjä sivu}} {{ui:Arkit}}-luettelon alta. Uudella sivulla on sama paperi ja ruudukko, ja se tulee loppuun. Kuten kaikki sivumuutokset, sitä ei voi kumota; katso [Tulosta ja muokkaa PDF-tiedoston sivuja](topic:pages-and-printing).

## Miten arkit saavat nimensä

MarkupCraft nimeää jokaisen arkin muotoon ”<sheet number> — <title>”, esimerkiksi ”A-101 — Pohjapiirros”, käyttäen ensimmäistä seuraavista, jonka se löytää:

1. Nimi, jonka kirjoitit {{ui:Nimeä arkki uudelleen}}-toiminnolla (alla).
2. PDF:n omat sivunumerot, kun PDF:n tekijä on ne asettanut (esimerkiksi ”A-101”).
3. Otsikkolohko: MarkupCraft lukee sivun tekstin ja etsii jotain, mikä näyttää arkin numerolta (A-101, A1.01, M-201A, KA1-1), suosien oikeaa alakulmaa, oikeaa reunaa ja alakaistaa, ja ottaa lähimmän suurimman tekstin otsikoksi.
4. Muuten tiedoston nimi ja sivu: ”Plans — sivu 3”.

Nähdäksesi, mitä käytettiin, paina {{key:Esc}}, kunnes mitään ei ole valittu ja {{ui:Valitse}}-työkalu on päällä, ja katso {{ui:Ominaisuudet}}-paneelia: ”Luettu lähteestä” kertoo ”Sivun tunniste”, ”Otsikkolohko”, ”Tiedoston nimi” tai ”Kirjoitettu käsin”.

:::note
Skannatuissa arkeissa ja PDF-tiedostoissa, joiden kirjaimet on vietty viivoina, ei ole luettavaa tekstiä. Ne nimetään tiedoston ja sivun mukaan, kunnes nimeät ne uudelleen. MarkupCraft ei vielä voi lukea tekstiä kuvista.
:::

## Siirry arkkien välillä

- Napsauta arkkia {{ui:Arkit}}-luettelossa.
- Paina {{key:PageDown}} seuraavaan arkkiin ja {{key:PageUp}} edelliseen, tai käytä nuolia arkin alla olevassa palkissa.
- Kirjoita {{ui:Hae arkkeja}}-kenttään: osa numerosta (”A-2”), otsikon sana (”katto”) tai tiedoston nimi. Luettelo kapenee kirjoittaessasi (”4/42”). Paina {{key:Enter}} avataksesi ensimmäisen osuman. Tyhjennä kenttä nähdäksesi kaikki arkit uudelleen.

Jokainen arkki säilyttää oman zoomauksensa ja sijaintinsa, kunnes suljet sarjan.

## Zoomaus ja panorointi

:::mouse
- **Zoomaus:** pyöritä hiiren rullaa arkin päällä. Se zoomaa osoittimen kohdalle. Tai paina {{key:Plus}} ja {{key:Minus}} (myös {{key:Mod}}-näppäimen kanssa) tai käytä zoomauspainikkeita. Kirjoita tarkka prosenttiluku zoomauskenttään.
- **Sovita:** {{ui:Sovita sivu}} ({{key:Mod+0}}) näyttää koko arkin; {{ui:Sovita leveys}} ({{key:Mod+9}}) täyttää leveyden.
- **Panorointi:** vedä rullapainikkeella, tai vedä oikealla painikkeella, tai pidä {{key:Space}} pohjassa ja vedä, tai valitse {{ui:Panoroi}} ({{key:H}}) ja vedä. Kun mitään ei ole valittuna, myös nuolinäppäimet siirtävät arkkia.
:::

:::mac mouse
Macin kosketuslevyllä kahden sormen vieritys zoomaa (se ei vieritä arkkia). Panoroidaksesi pidä {{key:Space}} pohjassa ja vedä yhdellä sormella, tai vaihda {{ui:Panoroi}}-tilaan näppäimellä {{key:H}}. Nipistys zoomaa Chromessa, Edgessä ja Firefoxissa.
:::

:::touch
- **Zoomaus ja panorointi:** aseta kaksi sormea arkille. Levitä tai nipistä ne zoomataksesi niiden välisen pisteen ympärillä, ja siirrä niitä yhdessä panoroidaksesi. Molemmat tapahtuvat samanaikaisesti.
- **Panorointi yhdellä sormella:** valitse ensin {{ui:Panoroi}}. Millä tahansa muulla työkalulla yksi sormi piirtää tai valitsee.
- {{ui:Sovita sivu}} ja {{ui:Sovita leveys}} ovat arkin alla olevassa palkissa.
:::

Voit zoomata ulos paljon kokonaisen arkin ohi ja sisään jopa 6400 %:iin. Arkki piirretään terävänä hetken kuluttua siitä, kun lopetat liikuttamisen.

## Kirjanmerkit

{{ui:Kirjanmerkit}} on {{ui:Arkit}}-paneelin yläosassa ja näyttää avoimen arkin kuuluvan PDF:n kirjanmerkit (jäsennyksen). Valitse yksi siirtyäksesi sen sivulle. Kynä-kuvake nimeää kirjanmerkin uudelleen ja rasti poistaa sen. {{ui:Rakenna arkeista}} tekee yhden kirjanmerkin arkkia kohti, nimettynä kuten arkkiluettelo ne näyttää (arkin numero ja otsikko), ja {{ui:Lisää tälle arkille}} lisää yhden arkille, jolla olet. Muutokset ovat osa tiedoston tallentamatonta työtä: {{ui:Tallenna}} kirjoittaa ne kopioon, jossa jokainen PDF-katselin ne näyttää.

## Käännä näkymä

Arkin alla olevan palkin oikealla puolella olevat kaksi kiertopainiketta kääntävät näkymää neljänneskierroksen kumpaankin suuntaan, sivuttain piirretylle arkille. Vain näkymä kääntyy: PDF ja sen merkinnät pysyvät ennallaan, ja seuraava arkki avautuu niin kuin sen PDF on (jokainen arkki muistaa oman kääntönsä, kun sarja on auki). Kääntyneelle näkymälle lisäämäsi teksti on pystyssä niin kuin näet sen. Kääntääksesi itse sivun tallennettuun PDF:ään käytä {{ui:Sivut}}-valikkoa ja sitten {{ui:Kierrä sivua myötäpäivään}}; katso [Tulosta ja muokkaa PDF-tiedoston sivuja](topic:pages-and-printing).

## Nimeä arkki uudelleen

Kun arkin nimi on väärin tai puuttuu:

1. Näytä arkki.
2. Paina {{key:Esc}}, kunnes mitään ei ole valittu ja {{ui:Valitse}}-työkalu on päällä. {{ui:Ominaisuudet}}-paneeli näyttää nyt arkin.
3. Valitse {{ui:Nimeä arkki uudelleen}}.
4. Kirjoita {{ui:Arkin numero}} ja {{ui:Otsikko}}, ja valitse {{ui:Tallenna}}.

Tulos: arkkiluettelo, arkin alla oleva palkki ja merkintäluettelo käyttävät kaikki uutta nimeä, ja ”Luettu lähteestä” sanoo ”Kirjoitettu käsin”. Uudelleennimeämisen voi kumota {{key:Mod+Z}}-näppäimellä.

Palataksesi tiedoston nimeen avaa {{ui:Nimeä arkki uudelleen}} uudelleen, tyhjennä molemmat kentät ja valitse {{ui:Tallenna}}.

Tallentaessasi kirjoitettu arkin numero tulee PDF:n sivun tunnisteeksi, joten muutkin PDF-katselimet näyttävät ”A-101” myös sivulaatikossaan. Jos annat tiedoston jollekin sivulle numeron, jokaiselle sivulle sen tiedoston kopiossa tulee tunniste (kirjoitettu numero, muuten vanha tunniste, muuten sivunumero). Kirjoitettu otsikko säilyy MarkupCraft-sovellukselle, mutta muut katselimet eivät sitä näytä.

## Vie PDF TakeoffCraft-sovellukseen tai tuo se tänne

Kun TakeoffCraft on auki samassa paikassa (lab, Try tai verkkosovellukset), arkin alla olevassa palkissa on {{ui:Avaa TakeoffCraftissa}}-painike. Se avaa arkin PDF:n TakeoffCraft-sovelluksessa uudessa välilehdessä siinä muodossa kuin se avattiin täällä, jotta voit mitata siitä määriä. Merkintäsi pysyvät täällä; tallenna ne tavalliseen tapaan.

TakeoffCraft-sovelluksen {{ui:MarkupCraft}}-painike tekee saman toiseen suuntaan: PDF avautuu täällä niin kuin olisit valinnut {{ui:Avaa}}. Jos selain estää uuden välilehden, salli ponnahdusikkunat tältä sivustolta ja valitse painike uudelleen.
