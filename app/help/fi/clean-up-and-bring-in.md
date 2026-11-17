---
title: Siisti kynäviivat sekä tuo katselmointikommentit ja työmaan eteneminen
summary: Muuta vapaamuotoiset kynäviivat viivoiksi, ympyröiksi, kaariksi ja suorakulmioiksi. Tuo lupapaketin katselmointikommentit ja työmaan mittausten eteneminen muistiinpanoina.
keywords: kynä, vapaamuotoinen, siisti, suorista, ympyrä, viiva, suorakulmio, kaari, lupa, katselmointikommentit, eteneminen, drooni, skannaus, mittaus, muistiinpanot, csv
from: 547d8e42
---

## Siisti kynäviivat

Piirrä {{ui:Kynä}}-työkalulla, avaa Muokkaus-ryhmän {{ui:Lisää}}-valikko ja valitse {{ui:Siisti kynäviivat}}. Jokainen valittu kynäviiva muuttuu siksi, mitä sen oli tarkoitus olla. Suora viiva muuttuu viivaksi, ja jos se oli lähes vaaka- tai pystysuora, siitä tulee täsmälleen sellainen. Pyöreä kynäviiva muuttuu ellipsiksi, ympyrän osa kaareksi ja suljettu nelikulmainen suorakulmioksi. Muu muuttuu murtoviivaksi tai monikulmioksi. Yhdessä piirrettyjen viivojen löysät päät vedetään toisiinsa kiinni. Jos yhtään kynäviivaa ei ole valittu, siistitään kaikki avoimen arkin kynäviivat. Se on yksi kumoamisaskel: Ctrl+Z palauttaa vapaamuotoisen viivan. Muoto lasketaan tietokoneellasi kiinteiden sääntöjen mukaan, eikä mitään lähetetä minnekään.

## Tuo katselmointikommentit

BimCraftin lupapaketti sisältää tiedoston `01-review-comments.csv`. Siinä ovat kommentit, joita lupatarkastaja todennäköisesti tekee. Jokaisessa on sääntö, kohta, vaadittu, havaittu asia ja toimenpide. Avaa {{ui:Tehtävät}}-välilehdessä {{ui:Rakennuslupatarkastuksen kommentit}} ja valitse {{ui:Tuo kommentit (CSV)}}. Jokainen kommentti tulee Open-muistiinpanona avoimen arkin vasemmassa reunassa olevaan sarakkeeseen. Vedä kukin kohtaan, jota se koskee. Kommentit lasketaan olemassa olevista tarkistuksista, eivät lupatarkastajan arvioista.

## Tuo HAZOP-solmulaatikot

CadCraftin P&ID-lisäosa piirtää HAZOP-tutkimuksen solmut ja voi tallentaa ne {{ui:HAZOP-solmulaatikoina}} (JSON-tiedosto). Avaa tulostettu P&ID-arkki tässä, siirry {{ui:Tehtävät}}-välilehdelle, avaa {{ui:HAZOP-solmulaatikot}} ja valitse {{ui:Tuo solmulaatikot (JSON)}}. Jokaisesta solmusta tulee Open-suorakulmio arkille. Sen tekstissä ovat solmun numero, nimi, laitteet ja linjat, ja tiimi kirjoittaa löydöksensä siihen vastauksina. Arkki otetaan täysikokoisena tulosteena piirustuksen vasemmasta alakulmasta. Jos se tulostettiin muussa mittakaavassa, kirjoita luku ensin kohtaan {{ui:Tulostussuhde}} (esimerkiksi 0.5 mittakaavalle 1:2). Sivun ulkopuolelle jäävää solmua ei piirretä, ja paneeli kertoo niiden määrän. Merkit ovat tutkimuksen apuväline. Ne näyttävät, missä solmut ovat, mutta eivät arvioi tutkimusta.

## Tuo työmaan eteneminen

CivilCraft pitää kirjaa jokaisesta työmaan drone-lennosta tai skannauksesta omalla rivillään. Avaa {{ui:Tehtävät}}-välilehdessä {{ui:Työmaan eteneminen}} ja valitse {{ui:Tuo eteneminen (JSON)}}. Jokaisesta mittauksesta tulee muistiinpano avoimelle arkille. Se kertoo, kuinka paljon on valmista, mitä leikattavaa tai täytettävää on jäljellä, mitä on kaivettu liikaa tai täytetty liikaa ja mikä on suunnitelman ulkopuolella. Mittaus, jossa on jotain suunnitelman ulkopuolella, pysyy Openina. Puhdas mittaus on Accepted.
