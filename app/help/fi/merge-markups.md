---
title: Yhdistä kahden ihmisen muokkaukset yhdestä PDF-tiedostosta
summary: Anna git, Fossil tai Mercurial yhdistää kaksi merkittyä kopiota samasta PDF-tiedostosta merkintä kerrallaan, huomautukset mukaan lukien.
keywords: yhdistäminen, git, fossil, mercurial, versionhallinta, ristiriita, kolmisuuntainen, cadcraft merge, gitattributes, merkinnät, muistiinpanot, tiimi, kaksi kopiota
from: a450a9ef
---

Kaksi ihmistä merkitsee saman PDF-tiedoston kahdessa kopiossa. Jos he koskivat eri merkintöihin, kopiot voi yhdistää ohjelmalla sen sijaan, että yhdistäisi ne käsin.

## Mikä tekee sen toimivaksi

Jokaisella MarkupCraftin tallentamalla merkinnällä on oma nimensä (sen tunnus) PDF-tiedoston sisällä, eikä nimi muutu koskaan. Yhdistäminen etsii merkintöjä nimen perusteella, ei niiden paikan perusteella tiedostossa, koska jokainen ohjelma numeroi paikat uudelleen tallentaessaan. Huomautukset ja sinetöidyt yksityiset muistiinpanot yhdistetään samalla tavalla.

Arkkeihin ei koskaan kosketa: molemmissa kopioissa on oltava sama määrä sivuja. Jos ne eroavat, yhdistäminen säilyttää oman kopiosi sellaisena kuin se on ja kertoo sen, koska sivujen lisääminen tai poistaminen on ihmisen työtä.

## Asetukset

Git tarvitsee kaksi riviä kerran arkistoa kohden:

```
# .gitattributes
*.pdf merge=cadcraft

# kerran, jokaisella tietokoneella
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ilman git-ohjelmaa aja `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil ja Mercurial käyttävät samoja kolmea tiedostoa omassa yhdistystyökalun asetuksessaan. Tehtävätiedosto, joka kulkee piirustuksen mukana (`<name>.markups.json`, katso [Merkinnät, jotka toimivat](topic:markups-that-act)), yhdistyy samalla tavalla tekstitiedostona.

## Säännöt

- Merkintä, joka on muuttunut vain toisella puolella, otetaan. Sama muutos molemmilla puolilla otetaan kerran.
- Sama merkintä, joka on muuttunut kahdella tavalla, on **ristiriita**: oma puolesi säilyy ja raportti luettelee molemmat. Avaa tulos ja korjaa kyseinen merkintä käsin.
- Merkintä, joka on lisätty kummalla tahansa puolella, säilyy. Merkintä, joka on poistettu toisella puolella ja jäänyt koskematta toisella, poistetaan. Merkintä, joka on poistettu toisella puolella ja muutettu toisella, poistetaan ja raportoidaan.
- Tasot, sarakkeet, tietueet ja muistiinpanot noudattavat samoja sääntöjä.
- Sinetöityjä yksityisiä muistiinpanoja ei avata koskaan: molempien puolten lohkot säilyvät sellaisina kuin ne ovat.

Yhdistetty tiedosto on täysi uudelleenkirjoitus kopiostasi, kuten MarkupCraftin oma Tallenna. Mitään ei lähetetä ylös; kaikki toimii omalla tietokoneellasi.
