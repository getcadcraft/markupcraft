---
title: Tilat ja vastaukset
summary: Merkitse jokainen kommentti tilaan Avoin, Hyväksytty, Hylätty tai Valmis, keskustele siitä vastausketjussa ja välitä ketju PDF-tiedostossa eteenpäin.
keywords: tila, tarkistuksen tila, hyväksytty, hylätty, valmis, avoin, vastaus, vastaukset, ketju, kommentti, keskustelu, vastata, takaisintarkistus
from: 0f3e8b91
---

Jokaisella merkinnällä on **tila** ja **vastausketju**. Yhdessä ne kantavat tarkastuskierroksen: tarkastaja merkitsee, suunnittelija vastaa ja asettaa tilat, tarkastaja tarkistaa takaisin.

## Aseta tila

1. Valitse merkintä (tai useita).
2. Valitse {{ui:Ominaisuudet}}-paneelissa {{ui:Tila}}: Avoin, Hyväksytty, Hylätty tai Valmis.

Tulos: tila näkyy merkintäluettelon {{ui:Merkinnät}} tunnisteena, ja ketjuun lisätään rivi: ”Tilaksi asetettu Hyväksytty (Ana Ruiz).” Kun useita merkintöjä on valittuna, tilakenttä näyttää ”Sekaisin”, kunnes valitset yhden, ja sen jälkeen se muuttaa kaikki.

Uudet merkinnät alkavat tilasta Avoin. Liitetyt ja monistetut merkinnät alkavat myös tilasta Avoin.

## Vastaa

1. Valitse merkintä.
2. Etsi {{ui:Ominaisuudet}}-paneelista ”Vastaukset” tyyliasetusten alapuolelta.
3. Kirjoita kenttään {{ui:Kirjoita vastaus}}.
4. Valitse {{ui:Vastaa}} tai paina {{key:Mod+Enter}}.

Tulos: vastaus näkyy nimesi sekä päivämäärän ja kellonajan kanssa, ja otsikko laskee sen: ”Vastaukset (3)”. {{ui:Merkinnät}}-luettelon rivillä näkyy vastausten määrä.

- Tilamuutokset näkyvät samassa ketjussa ja on merkitty tilamerkinnöiksi, joten historia on järjestyksessä.
- Jos aloitat vastauksen kirjoittamisen ja napsautat muuta, luonnos säilyy, kunnes palaat siihen merkintään (kunnes suljet arkkisarjan).
- Jos nimeä ei ole asetettu, MarkupCraft kysyy sitä ennen lähettämistä.
- Voit vastata myös tiedoston mukana tuleviin vain luku -kommentteihin.

:::note
Vastausta ei voi muokata tai poistaa lähettämisen jälkeen. Heti lähettämisen jälkeen {{key:Mod+Z}} kumoaa sen; sen jälkeen lisää uusi vastaus, joka korjaa sen.
:::

## Lisää valokuva

Vastauskentän alapuolella {{ui:Lisää valokuva}} lisää ketjuun kuvan: PNG- tai JPEG-tiedoston tältä tietokoneelta tai tabletilla tai puhelimella juuri silloin otetun valokuvan. Vastauskenttään kirjoittamasi teksti tulee kuvatekstiksi. Ketju näyttää pikkukuvan; napsauta sitä nähdäksesi valokuvan täyskokoisena. Suuret valokuvat pienennetään 1600 pikseliin pidemmältä sivultaan.

Tallennetussa PDF-tiedostossa jokainen valokuva kulkee myös liitetiedostona merkinnän vierellä (paperiliitin), joten muut PDF-katselimet voivat avata sen.

## Tarkastuksen välittäminen eteenpäin

Yhteistä verkkoistuntoa ei ole vielä: tarkastus kulkee PDF-tiedostossa.

1. Valitse {{ui:Tallenna}}. Kopio sisältää jokaisen merkinnän tilansa ja vastauksineen.
2. Lähetä kopio samalla tavalla kuin lähetät piirustukset nyt.
3. Seuraava henkilö avaa sen MarkupCraft-sovelluksessa, vastaa, asettaa tilat ja tallentaa uudelleen.

Muut PDF-ohjelmat näkevät vastaukset kommentin vastauksina ja tilat tarkastustiloina (Hyväksytty, Hylätty, Valmis; Avoin näkyy ilman tilaa). Niiden omat vastaukset ja tarkastustilat palautuvat MarkupCraft-sovellukseen, kun avaat tiedoston: uusin tila voittaa.

Jos kaksi henkilöä merkitsee erillisiä kopioita samaan aikaan, niitä ei voi yhdistää. Voit avata molemmat kopiot yhteen arkkisarjaan ja kopioida muutaman merkinnän {{key:Mod+C}}- ja {{key:Mod+V}}-näppäimillä, mutta liitetty kopio on uusi merkintä: se kantaa nimeäsi, uutta päivää ja tilaa Avoin, ja se osuu hieman siirtyneenä. Sopikaa, kuka merkitsee mitkä arkit, jotta tämä vältetään.

## Etsi, mikä on yhä auki

{{ui:Merkinnät}}-välilehdellä aseta {{ui:Tila}} arvoon ”Avoin” listataksesi vain avoimet kohteet, ja {{ui:Tekijä}} yhteen tarkastajaan. Katso [Merkintäluettelo](topic:markups-list-and-export).

Tila (Avoin, Hyväksytty, Hylätty, Valmis) koskee kommenttia. Puutekohteella on oma erillinen tilansa kenttätyölle; katso [Tee puutelista](topic:punch-list).
