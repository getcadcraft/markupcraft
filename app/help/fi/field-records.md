---
title: Seuraa RFI-tietopyyntöjä, toimitusasiakirjoja ja päiväkirjoja
summary: Merkitse RFI-tietopyynnöt, toimitusasiakirjat ja päiväkirjat arkeille numeroilla, vastuuhenkilöillä, määräpäivillä ja keskusteluilla; suodata myöhässä olevat; vie CSV- tai BCF-muodossa; työskentele offline-tilassa ja yhdistä kopiot.
keywords: rfi, tietopyyntö, toimitusasiakirja, päiväkirja, työmaaraportti, työmaapäiväkirja, rakentaminen, myöhässä, määräpäivä, minulle osoitetut, keskustelu, liite, yhdistä, offline, tabletti, bcf, csv, työmaa
from: 95039c5a
---

Välilehti {{ui:Työmaa}} säilyttää kolme tietuetyyppiä merkintöjesi vieressä. Jokainen liittyy arkkiin; RFI-tietopyynnöllä tai toimitusasiakirjalla on lisäksi nasta sen arkin kohdassa, jota se koskee.

- **RFI**: kysymys suunnittelijaryhmälle. Tilat: Avoin, Vastattu, Suljettu.
- **Toimitusasiakirja**: jotain, mikä on tarkastettava ennen kuin työ etenee. Tilat: Avoin, Tarkastettavana, Hyväksytty, Hyväksytty huomautuksin, Korjattava ja lähetettävä uudelleen, Suljettu.
- **Päiväkirja**: päivän sää, työmaalla olevien henkilöiden määrä ja tehty työ. Tilat: Luonnos, Lopullinen.

Jokaisella tietueella on oman tyyppinsä numero (RFI-0001, SUB-0001, LOG-0001), otsikko, teksti, vastuuhenkilö, määräpäivä, vastausketju ja luettelo liitteiden nimistä.

## Lisää tietue

1. Avaa {{ui:Työmaa}}-välilehti ja valitse {{ui:RFI}} tai {{ui:Toimitusasiakirja}}.
2. Napauta tai napsauta arkkia, jolle tietue kuuluu. Nasta ilmestyy ja tietue avautuu välilehdessä.
3. Täytä otsikko, kysymys tai kuvaus, vastuuhenkilö ja määräpäivä.

Päiväkirja lisätään avoimelle arkille ilman nastaa. {{ui:Aseta nasta}} asettaa sellaisen myöhemmin; {{ui:Siirrä nastaa}} siirtää mitä tahansa nastaa. Napauttamalla arkilla olevaa nastaa avautuu sen tietue.

## Vastaa ja seuraa

Muuta {{ui:Tila}}, ja muutos kirjautuu ketjuun. Kirjoita vastaus ja valitse {{ui:Lähetä vastaus}} (Ctrl+Enter lähettää myös). Liitteet ovat pelkkiä nimiä: kirjoita nimi tai valitse tiedostoja, ja luettelo kertoo tiimille, mitä tietueeseen kuuluu. Tiedostot itse pysyvät missä ovat.

Tietue, jonka määräpäivä on mennyt ja joka odottaa yhä (RFI, jota ei ole vastattu tai suljettu, tai toimitusasiakirja, josta ei ole päätetty), merkitään **Myöhässä**-tilaan punaisena luettelossa ja sen nastassa.

## Etsi olennainen

Suodattimet ovat luettelon yläpuolella: tyyppi, tila, määräpäivä (myöhässä, määräpäivä 7 päivän kuluessa, on määräpäivä tai ei ole määräpäivää), tämä arkki tai kaikki arkit, tekstihaku sekä {{ui:Minulle osoitetut}}, joka vertaa vastuuhenkilöä nimeen, jolla MarkupCraft tuntee sinut (ks. [Aseta nimesi](topic:set-your-name)). Suodattimien alla oleva rivi laskee näkyvät tietueet ja myöhässä olevat.

## Vienti

{{ui:CSV}} kirjoittaa listatut tietueet laskentataulukkona. {{ui:BCF}} kirjoittaa ne BCF-aiheina, joista kukin sisältää kuvan paikastaan arkilla, jotta muut BCF-työkalut voivat listata ne. Molemmat noudattavat suodattimia.

## Tallennus, offline-tila ja kopioiden yhdistäminen

Tietueet tallennetaan PDF-tiedoston sisään, kun tallennat sen, ja ne palautuvat, kun avaat sen. Mitään verkkoyhteyttä ei tarvita: lisää, muokkaa, vastaa ja tallenna tabletilla kellarissa ja tuo PDF takaisin. Vanhat PDF-tiedostot ja muista ohjelmista tulevat PDF-tiedostot aukeavat kuten ennenkin.

Kahden kopion yhdistämiseksi avaa toinen ja valitse {{ui:Yhdistä}}, ja valitse sitten toinen kopio samasta PDF:stä. Tietueet yhdistetään tunnisteidensa perusteella:

- tietue, joka on vain toisessa kopiossa, lisätään;
- tietue, joka on molemmissa, saa kenttänsä (otsikko, teksti, tila, vastuuhenkilö, määräpäivä) viimeksi muutetusta kopiosta kokonaisena, joten jos kaksi ihmistä muutti eri kenttiä samasta tietueesta, myöhemmän kopion versio voittaa; ketjut ja liitteiden nimet molemmista kopioista yhdistetään;
- jos molemmat kopiot numeroivat uuden tietueen samalla numerolla, se, joka saapuu, saa seuraavan vapaan numeron;
- tietue, joka on poistettu toisesta kopiosta, pysyy poistettuna, ellei sitä ole muokattu poistamisen jälkeen.

Yhdistäminen on yksi kumoamisaskel.

## Rajoitukset

- Live TeamWork ei vielä jaa tietueita; käytä {{ui:Yhdistä}}-toimintoa.
- Tässä versiossa tietueille ei ole tiimejä, ilmoituksia eikä pilviprojekteja.
- PDF-tiedostosta poistetut sivut vievät tietueensa mukanaan (sivun vahvistus laskee ne).
