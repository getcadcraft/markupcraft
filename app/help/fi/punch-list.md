---
title: Tee puutelista
summary: Muuta merkinnät numeroiduiksi puutekohdiksi, joilla on vastuuhenkilö, määräaika ja tila, ja vie lista.
keywords: puutelista, puute, vikaluettelo, puutekohta, havainto, osoita, vastuuhenkilö, määräaika, luovutus, katselmus, numero
from: b98b38e6
---

Puutekohta on merkintä, jolla on numero, vastuuhenkilö, määräaika ja kohteen tila. Numero piirretään arkille merkinnän viereen, joten tulostettu arkki ja luettelo vastaavat toisiaan.

## Lisää kohteita

1. Merkitse jokainen havainto arkeille: pilvi, selite, huomautus, mikä tahansa.
2. Valitse yksi tai useampi niistä (katso [Valitse, siirrä ja muokkaa merkintöjä](topic:select-and-edit)).
3. Joko avaa {{ui:Puutelista}}-välilehti ja valitse {{ui:Lisää valitut puutelistaan}}, tai valitse {{ui:Lisää puutelistaan}} {{ui:Ominaisuudet}}-paneelissa.

Tulos: jokainen merkintä saa seuraavan numeron (1, 2, 3…) arkkijärjestyksessä ja sitten piirtämisjärjestyksessä. Arkille ilmestyy numeroitu merkki, ja tilarivi sanoo ”Lisättiin 3 kohdetta puutelistaan.” Merkinnät, joilla on jo numero, ja vain luettavat kommentit ohitetaan.

## Täytä tiedot

{{ui:Puutelista}}-välilehdellä jokainen kohta näyttää numeronsa, aiheensa, tekstinsä, arkkinsa ja tilansa, ja sen alla on kolme kenttää. Samat kentät ovat ”{{ui:Puutelista}}”-kohdassa {{ui:Ominaisuudet}}-paneelissa, kun merkintä on valittuna:

- {{ui:Vastuuhenkilö}}: nimi tai ammattiala vapaana tekstinä.
- {{ui:Määräaika}}: päivämäärä päivämäärävalitsimesta.
- {{ui:Nimikkeen tila}}: Avoin, Työn alla, Valmis tarkistettavaksi tai Suljettu.

Napsauta kohteen otsikkoa siirtyäksesi sen kohdalle arkilla.

Nimikkeen tila on erillinen merkinnän tarkastustilasta (Avoin, Hyväksytty, Hylätty, Valmis). Käytä nimikkeen tilaa työlle ja tarkastuksen tilaa kommentille.

## Poista kohde

Valitse merkintä ja valitse {{ui:Poista puutelistalta}} {{ui:Ominaisuudet}}-paneelissa. Merkintä jää paikalleen; vain numero poistuu. Sarjan ollessa auki numeroita ei käytetä uudelleen: seuraava kohde saa seuraavan uuden numeron, joten aukko tarkoittaa, että kohde on poistettu. Kun tiedosto avataan uudelleen, numerointi jatkuu sen suurimmasta numerosta.

## Vie luettelo

Valitse {{ui:Vie CSV}} {{ui:Puutelista}}-välilehdeltä. Saat tiedoston ”<name> punch list.csv”, jossa ovat sarakkeet No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author ja Created, numerojärjestyksessä. Avaa se millä tahansa taulukkolaskentaohjelmalla.

Puutelistan numerot, vastuuhenkilöt, määräajat ja kohteiden tilat tallennetaan myös merkittyyn PDF:ään, joten ne palautuvat, kun avaat sen uudelleen. Muut PDF-katselimet näyttävät numeromerkin osana merkintää. Merkintäluettelon BCF-vienti kantaa myös vastuuhenkilön ja määräajan (katso [BCF-perusteet](topic:bcf-basics)).

## Työmaalla tabletilla

Avaa sarja iPadilla, kulje työmaa läpi ja lisää {{ui:Muistiinpano}} tai piirrä {{ui:Pilvi}} jokaiseen havaintoon. Lisää ne puutelistaan kulkiessasi ja tallenna ennen lähtöä. Katso [Tarkista iPadilla tai kosketusnäytöllä](topic:review-on-a-tablet).

Puutelistaa muotoiltuna PDF- tai taulukkoraporttina sekä kohteisiin liitettyjä kuvia ei ole vielä toteutettu.
