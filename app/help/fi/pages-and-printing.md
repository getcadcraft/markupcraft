---
title: Tulosta ja muokkaa PDF-tiedoston sivuja
summary: Tulosta arkit merkintöineen ja kierrä, siirrä, lisää, poista tai pura avoimen PDF:n sivuja.
keywords: tulosta, tulostin, paperi, sivut, sivu, kierrä, käännä, järjestä uudelleen, siirrä sivu, lisää, lisää sivu, tyhjä sivu, poista sivu, poista, pura, jaa, sivutoiminnot
from: 81832d9b
---

{{ui:Tiedosto}}-ryhmän {{ui:Sivut}}-valikko toimii sen PDF:n kanssa, jolle avoin arkki kuuluu. PDF:ää tässä tietokoneessa ei koskaan muuteta: muutokset ovat osa tallentamaasi kopiota.

## Tulosta

1. Paina {{key:Mod+P}} tai valitse {{ui:Sivut}}, sitten {{ui:Tulosta…}}.
2. Kun useampi arkki on auki, valitse, mitä tulostetaan: {{ui:Tämä arkki}}, jokainen tämän tiedoston sivu, koko sarja tai kirjoittamasi sivut (esimerkiksi `1-3, 5`).
3. Valitse {{ui:Tulosta}}. Selaimesi tulostusikkuna aukeaa: valitse siellä tulostin, paperi ja mittakaava.

Merkinnät tulostuvat niin kuin ne näkyvät arkilla: ne piirretään sivuille kopioon, joka menee tulostimelle. Muiden ohjelmien tekemät kommentit tulostuvat niin kuin niiden PDF sanoo.

:::safari firefox
Jos selaimesi ei voi tulostaa sivun sisältä, arkit avautuvat PDF:nä uudessa välilehdessä. Tulosta siitä.
:::

## Käännä sivu

Valitse {{ui:Sivut}}, sitten {{ui:Kierrä sivua myötäpäivään}} tai {{ui:Kierrä sivua vastapäivään}}. Avoin arkki kääntyy neljänneskierroksen. Sen merkinnät pysyvät piirroksella siellä, missä ne olivat, ja kirjoittamasi teksti kääntyy sivun mukana, joten se pysyy pystyssä.

## Siirrä sivu

Valitse {{ui:Sivut}}, sitten {{ui:Siirrä sivua aikaisemmaksi}} tai {{ui:Siirrä sivua myöhemmäksi}}. Avoin arkki vaihtaa paikkaa naapurinsa kanssa omassa PDF:ssään. Sen merkinnät, mittakaava ja arkin numero siirtyvät mukana.

## Lisää sivuja

- {{ui:Lisää sivuja PDF:stä…}} lisää jokaisen toisen PDF:n sivun avoimen arkin jälkeen.
- {{ui:Lisää tyhjä sivu}} lisää tyhjän sivun samaa kokoa avoimen arkin jälkeen, luonnoksia ja muistiinpanoja varten. {{ui:Uusi}}-toiminnolla luodussa sarjassa sillä on myös sarjan ruudukko.
- {{ui:Uusi}}-toiminnolla luodussa sarjassa {{ui:Lisää tyhjä sivu}} {{ui:Arkit}}-luettelon alla lisää yhden sivun muiden tavoin loppuun. Katso [Aloita tyhjillä sivuilla](topic:open-a-plan-set#start-with-blank-pages).

Lisätyt sivut saavat sivunumeronsa tunnisteeksi, kunnes nimeät ne uudelleen. Katso [Nimeä arkki uudelleen](topic:open-a-plan-set#rename-a-sheet).

## Poista sivuja

1. Valitse {{ui:Sivut}}, sitten {{ui:Poista sivuja…}}.
2. Kirjoita tämän PDF:n sivunumerot, esimerkiksi `3` tai `2-4`. Avoimen arkin sivu täytetään valmiiksi.
3. Valitse {{ui:Poista sivuja}}. Jos näillä sivuilla on merkintöjä, MarkupCraft kertoo, kuinka monta, ja kysyy uudelleen.

PDF säilyttää vähintään yhden sivun. Jos haluat pudottaa koko tiedoston, sulje sarja ja avaa tarvitsemasi tiedostot.

## Pura sivuja

Valitse {{ui:Sivut}}, sitten {{ui:Pura sivuja…}}, ja kirjoita sivut. Ne ladataan uutena PDF:nä nimeltä ”<file> (pages 1-3).pdf”, ja niiden merkinnät ovat kommentteina, joita voi edelleen muokata. Avoin tiedosto pysyy ennallaan.

## Hyvä tietää

- **Kumoaminen pysähtyy sivumuutokseen.** {{key:Mod+Z}} kumoaa sen jälkeen piirretyt merkinnät, mutta ei itse sivumuutosta tai sitä ennen tehtyjä asioita. Sulje tallentamatta aloittaaksesi alkuperäisestä PDF:stä alusta.
- Sivunumerot lasketaan yhden PDF:n sivuista, eivät koko sarjasta. Sivun siirto pitää sen omassa tiedostossaan.
- Muutetut sivut ovat tallentamatonta työtä: {{ui:Tallenna}} lataa uudelleen järjestetyn kopion, ja poistuminen kysyy ensin.
