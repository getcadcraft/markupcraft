---
title: Tee merkinnästä tehtävä
summary: Anna merkinnälle vastuuhenkilö (henkilö tai avustajasi), eräpäivä ja linkki piirustukseen tai mallielementtiin, jota se koskee, ja näe sen sulkeutuvan, kun kohde todella muuttuu.
keywords: tehtävä, tehtävät, vastuuhenkilö, avustaja, eräpäivä, myöhässä, linkki, sulkeutuu, muuttuu, elementti, piirustusalue, merkinnät, toimivat merkinnät, MCP
from: 9e970202
---

Tehtävä on merkintä, jonka jonkun pitää hoitaa. Se säilyttää paikkansa arkilla ja ketjunsa, ja siihen lisätään otsikko, vastuuhenkilö, eräpäivä, tila sekä halutessasi linkki kohteeseen, jota se koskee.

## Tee tehtävä

1. Valitse yksi tai useampi merkintä.
2. Avaa {{ui:Tasks}}-välilehti ja valitse {{ui:Make selected a task}}.
3. Täytä otsikko (se alkaa merkinnän tekstistä), kenelle tehtävä on ({{ui:Person}} tai {{ui:Assistant}} sekä nimi), valinnainen eräpäivä ja se, mitä seurata.

Avustajan tehtävä on työtä MarkupCraftiin yhdistetylle avustajalle (katso [Käytä MarkupCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants)). MarkupCraftissa ei ole omaa avustajaa: se vain listaa työn ja ottaa vastaan avustajan vastaukset. Kun valitset {{ui:Assigned to}}-kentän ja sitten listasta {{ui:Assistant}}, näet, mikä odottaa avustajaa.

## Seuraa muutosta

- **Merkinnän sisällä oleva piirustus.** MarkupCraft säilyttää merkinnän laatikon sisäiset viivat sellaisina kuin ne nyt ovat. Kun avaat uudemman version kyseisestä arkista (toinen tiedosto samalla arkkinumerolla tai samassa sivupaikassa), valitse {{ui:Check now}}: jos viivat kyseisellä alueella eroavat enemmän kuin hiuksen verran, tehtävä suljetaan.
- **Mallielementti.** Anna sovellus ja elementin tunnus. Avustajasi lukee elementin toisen sovelluksen omilla työkaluilla ja raportoi sen `tasks_check`-komennolla. Ensimmäinen raportti säilytetään lähtötilana; myöhempi, eroava raportti sulkee tehtävän. Myös poistettu elementti sulkee sen.
- **Ei mitään.** Tavallinen tehtävä, jonka lopetat käsin.

Suljettu tehtävä merkitään Valmis-tilaan, sen merkintä muuttuu Valmiiksi, ja ketjuun tulee huomautus siitä, mikä muuttui. Yksi kumoamisvaihe avaa tehtävän uudelleen.

**Rajoitus:** tarkistus olettaa, että uudempi versio käyttää samaa sivun alkupistettä ja sivukokoa. Arkki, joka on tulostettu uudelleen toisessa koossa, ei täsmää, joten sen tehtävät eivät sulkeudu. Arkit yhdistetään arkkinumeron mukaan, muuten sivupaikan mukaan; MarkupCraft ei skaalaa toista versiota sopimaan toiseen.

Piirustuksen uudelleen tulostus uudella päiväysleimalla tai viivat, jotka ovat siirtyneet alle 1.5 pisteen, eivät ole muutos. Jos uudempaa versiota ei ole auki, tehtävä pysyy avoinna ja tilarivi kertoo sen.

## Luettelo

Tehtäväluettelon voi suodattaa tilan ja sen mukaan, kenelle tehtävä on, myös {{ui:Overdue}}-valinnalla. Eräpäivän ohittanut tehtävä näkyy varoituksena Ongelmat-paneelissa. {{ui:CSV}} vie luettelon.

Tehtävät tallentuvat PDF-tiedostoon merkinnän mukana ja kulkevat Live-yhteyden kautta kuten muut merkinnän ominaisuudet.
