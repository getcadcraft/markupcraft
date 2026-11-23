---
title: Sivukoot ja paperinimet
summary: Katso kunkin PDF-sivun koko millimetreinä ja tuumina sekä sen paperinimi (A-, B- ja C-sarja, ANSI, ARCH) ja ryhmitä sekoitettu sarja koon mukaan, jotta löydät poikkeavat sivut.
keywords: sivukoko, paperikoko, paperin nimi, a0, a1, a2, a3, a4, b-sarja, c-sarja, ansi, arch, arkkitehtuuri, mm, tuumat, mukautettu koko, koon mukaan, poikkeava koko, sekalainen sarja, tarkista pdf, asiakas, julkaisu, mediabox, cropbox, kierto
from: 08e1354f
---

Ennen kuin sarja lähtee asiakkaalle, tarkista, että jokainen arkki on oikean kokoinen. {{ui:MarkupCraft}} lukee kunkin sivun koon itse PDF-tiedostosta ja nimeää paperin.

## Mitä teet

Tarkista yhden arkin koko ja ryhmitä koko sarja koon mukaan.

## Vaiheet

1. Avaa PDF-tiedostot ({{ui:Open}}) ja paina {{key:Esc}}, kunnes mitään ei ole valittuna ja {{ui:Select}} on päällä.
2. Katso {{ui:Properties}}. {{ui:Paper}} kertoo nimen ja suunnan, esimerkiksi "A4, portrait". {{ui:Size}} antaa millimetrit ja tuumat.
3. Jokaisella {{ui:Sheets}}-luettelon rivillä on koko-rivi arkin nimen alla.
4. Valitse {{ui:By size}} {{ui:Sheets}}-otsikosta. Luettelo kokoaa arkit yhden otsikon alle kokoa kohti, suurin ryhmä ensin. Koko, jossa on vain muutama arkki, merkitään poikkeavaksi.
5. Valitse {{ui:By size}} uudelleen palataksesi sarjan omaan järjestykseen.

Tulos: sivu, joka on eri kokoa kuin muut, erottuu helposti ennen sarjan lähettämistä.

## Miten nimi valitaan

- Koko tulee sivun laatikosta PDF-tiedostossa kiertoineen, joten vaakasuuntainen A3 on yhä A3.
- Nimet ovat A- ja B-sarja (ISO 216), C-sarja (ISO 269), ANSI A–E ja ARCH A–E.
- Sivu, joka on 2 mm:n sisällä nimetystä koosta, saa sen nimen. Muut sivut saavat nimen {{ui:custom}}, ja {{ui:Nearest named size}} kertoo, mikä koko on lähinnä ja kuinka kaukana se on.
- Tuumat tulevat todellisesta sivukoosta, joten A4-sivu on 8,26 × 11,69 in.

## Tallentamissasi tiedostoissa

Yhteenvetotyökirjassa ({{ui:Markups list}}, sitten taulukko) on {{ui:By sheet}}-taulukossa {{ui:Paper size}}-sarake ja {{ui:Page sizes}}-taulukko. PDF-raportissa on rivi "Page sizes" kunkin koon määrällä.

:::note
ANSI- ja ARCH-tuumaarvot kirjoitettiin julkaistuista taulukoista, eikä niitä ole verrattu painettuihin standardeihin. Pidä "custom"-sivua, joka on lähellä jotakin niistä, omana tarkistettavana kohtanaan.
:::
