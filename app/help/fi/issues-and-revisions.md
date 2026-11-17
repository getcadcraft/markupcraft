---
title: Julkaisut, revisiot ja piirustusten muutosloki
summary: Pidä yksi julkaisuhistoria arkkitehdin mallin kanssa: lue julkaisut sisään, kirjaa työmaaohjeet, valmistuspiirustukset ja linkitetyt mallit julkaisua vasten ja lue piirustusten muutosloki.
keywords: julkaisu, revisio, revisiot, muutosloki, piirustusten muutosloki, piirustusrekisteri, työmaaohje, valmistuspiirustus, linkitetty malli, tarjouskilpailu, rakentaminen, julkaisuhistoria, revisiopilvi, pilvi, merkintäsarja
from: e4688f64
---

## Mitä teet

Työskentele samasta julkaisuhistoriasta kuin muu tiimi. Näe, mitkä arkit lähtivät millä revisiolla, ja pidä työmaalla tapahtuva kirjattuna sen julkaisun alle, johon se kuuluu.

## Vaiheet

1. Avaa **Julkaisut ja revisiot**.
2. Valitse **Lue julkaisuhistoria** ja valitse tiedosto `.issues.json`, joka on tallennettu BimCraftista tai muusta sovelluksesta. Sen julkaisut ja tietueet lisätään omiisi. Mitään ei korvata.
3. Valitse **Lisää tietue** työmaaohjetta, valmistuspiirustusta, merkintäsarjaa, linkitettyä mallia tai huomautusta varten. Valitse julkaisu, johon se kohdistuu, ja sen tila. Valitsemasi tiedosto kirjataan nimensä, kokonsa ja SHA-256:n perusteella; tiedosto pysyy missä on.
4. **Piirustusten muutosloki** näyttää yhden rivin jokaiselle arkille ja yhden sarakkeen jokaiselle julkaisulle. Hakasulkeissa oleva revisio on julkaistu uudelleen muuttumattomana.
5. **Lataa muutosloki (CSV)** tallentaa julkaisut, arkkitaulukon ja tietueet. **Tallenna julkaisuhistoria** kirjoittaa tiedoston, jonka muut sovellukset osaavat lukea.

## Hyvä tietää

- **Tallenna valitut merkinnät tietueeksi** kirjaa valitsemasi merkinnät viimeisimpään julkaisuun. Pilvi kirjataan revisiopilvenä kyseisen julkaisun revisiolla. Valitse tietueen vieressä **Näytä**, niin siirryt siihen.
- **Tallenna julkaisu** julkaisee merkityt arkkisi. **Muutokset sen jälkeen** kertoo, mitkä arkit on merkitty julkaisun jälkeen.
- Historia tallennetaan merkityn PDF:n sisään. Se ei kuulu **Kumoa**-toimintoon.
- Saman tiedoston lukeminen kahdesti ei lisää mitään kahdesti. Kun kahdessa kopiossa on sama tietue, uudempi säilytetään.
