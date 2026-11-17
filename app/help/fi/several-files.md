---
title: Työskentele useiden tiedostojen kanssa kerralla
summary: Avaa monta PDF-tiedostoa yhtenä sarjana, etsi arkkeja tiedostojen väliltä, kopioi merkintöjä niiden välillä ja tallenna jokaisesta tiedostosta oma kopio.
keywords: useat tiedostot, useat pdf-tiedostot, piirrossarja, sarja, erä, monta tiedostoa, yhdistä, lajit, arkkitehtuuri, rakenne, talotekniikka, tallenna kaikki, sulje
from: f59354ae
---

Piirrossarja tulee usein yhtenä PDF-tiedostona lajia kohden tai yhtenä PDF-tiedostona arkkia kohden. MarkupCraft käsittelee kaikkea avaamaasi yhtenä **sarjana**.

## Avaa ne yhdessä

Valitse kaikki PDF-tiedostot tiedostonvalitsimessa kerralla tai pudota ne kaikki arkkialueelle. Lisätäksesi myöhemmin avaa ne samalla tavalla. Ne liittyvät {{ui:Arkit}}-luettelon loppuun avaamisjärjestyksessä.

Tulos: ”Avattu 6 tiedostoa (sarjassa 84 arkkia).” Jokainen sivu on arkki. Arkit, joilla on arkkinumero, näyttävät ”Arkki A-101” nimensä alla, muut näyttävät tiedoston ja sivun.

Tallennettua ”sarja”-tiedostoa ei ole. Seuraavalla kerralla avaa samat PDF-tiedostot uudelleen (tai ”(marked up)”-kopiot, jos tallensit).

## Koko sarjassa

- **Etsi arkki:** {{ui:Hae arkkeja}} etsii arkkinumeroista, arkkien nimistä ja jokaisen tiedoston nimistä. {{key:PageUp}} ja {{key:PageDown}} käyvät läpi kaikkien tiedostojen kaikki arkit järjestyksessä.
- **Merkintäluettelo:** {{ui:Merkinnät}}-välilehti listaa merkinnät kaikista tiedostoista. Suodata {{ui:Arkki}}-kohdalla kaventaaksesi. CSV-tiedostossa on Tiedosto-sarake.
- **Puutelista:** yksi numerointi koko sarjalle.
- **Vertailu:** vanha ja uusi arkki voivat tulla eri tiedostoista.
- **Kopiointi ja liittäminen:** {{key:Mod+C}} yhdellä arkilla ja {{key:Mod+V}} toisella, missä tahansa tiedostossa. Kopio tulee samaan kohtaan sivulla, hieman siirrettynä.

## Tallennus

Valitse {{ui:Tallenna}}. Kun useampi kuin yksi tiedosto on auki, MarkupCraft kysyy:

- {{ui:Tämä tiedosto}}: sen tiedoston merkitty kopio, jonka arkilla olet.
- {{ui:Jokainen muuttunut tiedosto}}: kopio jokaisesta tiedostosta, jossa on tallentamattomia muutoksia. Jokainen ladataan erikseen nimellä ”<file name> (marked up).pdf”.
- {{ui:Peruuta}}

:::chromium
Kun tallennat useita tiedostoja ensimmäistä kertaa, Chrome ja Edge saattavat kysyä, saako tämä sivusto ladata useita tiedostoja. Valitse {{ui:Salli}}, muuten vain ensimmäinen kopio saapuu.
:::

:::safari
Safari saattaa kysyä kerran jokaisesta tiedostosta. iPadilla jokainen kopio menee Tiedostot-sovellukseen.
:::

Tiedosto, jonka merkinnät on tallennettu, lakkaa olemasta muuttunut. Muut ovat yhä muuttuneita.

CSV-, BCF- ja puutelistavienti nimetään **ensimmäisen** avaamasi tiedoston mukaan.

## Sulkeminen

{{ui:Sulje}} sulkee koko sarjan. Yksittäisen tiedoston sulkemista ei ole vielä. Jos jotain on tallentamatta, MarkupCraft kysyy:

- {{ui:Peruuta}}: ei tapahdu mitään.
- {{ui:Sulje tallentamatta}}: tallentamattomat merkinnät menetetään.
- {{ui:Tallenna kopiot ensin}}: tallentaa jokaisen muuttuneen tiedoston ja sulkee sen jälkeen.

Sulkeminen tyhjentää myös kumoushistorian.

## Suuret sarjat

- Jokaisen sivun teksti luetaan avattaessa arkkinumeroiden löytämiseksi, joten 100 arkin sarja vie hetken. Tilarivi laskee arkkeja niiden käsittelyn edetessä.
- Arkkien kuvat luettelossa piirretään, kun vierität niiden kohdalle.
- Jokainen avoin PDF-tiedosto pidetään selaimen välilehden muistissa. Jos välilehti hidastuu, sulje muut raskaat välilehdet tai tarkista yksi lajikohtaisesti kerrallaan.
- Saman tiedoston avaaminen kahdesti antaa kaksi kopiota sen arkeista. Jos niin käy, valitse {{ui:Sulje}} ja avaa sarja uudelleen.
