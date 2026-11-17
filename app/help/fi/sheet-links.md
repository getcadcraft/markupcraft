---
title: Arkkilinkit
summary: Tee merkinnästä hyppy toiselle arkille ja linkitä jokainen arkkiviite, kuten 3/A-501, sen arkkiin ja näkymään yhdellä kerralla Erälinkit-toiminnolla.
keywords: hyperlinkki, linkki, linkit, hyppy, arkkiviite, detaljiviite, leikkausviite, 3/A-501, siirry arkille, takaisin, automaattinen linkitys, erälinkki, erälinkit, piirustusotsikko, arkkinumero, arkin nimi, näkymä, detalji, nimeä uudelleen, numeroi uudelleen, lisäys, PDF-linkki
from: 86a17c37
---

Arkkilinkki vie merkinnästä sarjan toiselle arkille: detaljikuplasta detaljiin, huomautuksesta arkille, johon se viittaa.

## Linkitä merkintä arkille

1. Valitse merkintä.
2. Valitse kohdasta {{ui:Ominaisuudet}} arkki kohdan {{ui:Linkki arkille}} alta.

Merkinnän oikeaan yläkulmaan ilmestyy pieni nuoli. Seurataksesi linkkiä pidä {{key:Mod}} pohjassa ja napsauta merkintää, tai valitse merkintä ja valitse {{ui:Siirry …}} kohdasta {{ui:Ominaisuudet}}. {{key:Alt+Left}} palaa arkille, jolta tulit.

Linkki nimeää arkin sen numerolla, joten se toimii yhä sarjan uudelleen avaamisen tai väliarkitetun uuden julkaisun jälkeen: se avaa uusimman arkin, jolla on sama numero. Jos kyseinen arkki ei ole auki, tilarivi kertoo siitä.

## Linkitä kaikki arkkiviitteet kerralla

Valitse {{ui:Sivut}} › {{ui:Erälinkit…}} tai {{ui:Linkitä arkkiviitteet…}}, joka on kohdassa {{ui:Hae tekstiä}} {{ui:Arkit}}-paneelin yläosassa.

1. **Tarkista arkkinumerot.** MarkupCraft listaa jokaisen avoimen arkin numeron ja nimen, jotka se luki arkin piirustusotsikosta (tai sivunumerosta), sekä sen, mistä ne tulivat. Korjaa väärät ja kirjoita numero siihen, missä sellaista ei löytynyt (piirustusotsikko, jonka numero on piirretty viivoina, ei sisällä luettavaa tekstiä). Valitse sitten {{ui:Etsi viitteet}}. Korjauksesi ovat yksi kumoamisvaihe, ja niistä tulee tallennetun PDF-tiedoston sivunumerot.
2. **Tarkista luettelo.** MarkupCraft lukee jokaisen arkin tekstin etsien viitteitä, kuten ”3/A-501”, ”5 / A501”, ”DETAIL 2 ON A-501”, kupla, jossa on ”3” ja ”A-501” sen alla, tai pelkkä ”A-501” huomautuksessa. Se lukee myös jokaisen arkin näkymien otsikot (detaljinumero ja sen alla arkkinumero, tai iso numero ja sen vieressä otsikko). Luettelossa on kolme osaa:
   - {{ui:Linkitään}}: jokainen viite, arkki, jolle se menee, ja näkymä sillä arkilla. Poista rasti kohdasta, jota et halua. Jos näkymää ei löytynyt (viite näkymään 7 arkilla, jossa on näkymät 1–6), valitse näkymä sen vieressä olevasta luettelosta, tai jätä {{ui:Koko arkki}}.
   - {{ui:Ei linkitetty}}: arkkinumerot, joita yksikään avoin arkki ei ole, ja kuinka monta viitettä kukin nimeää. Valitse arkki, jota kukin tarkoittaa (esimerkiksi arkki, joka on numeroitu uudelleen), ja jokainen viite tuohon numeroon linkittyy siihen. Tai jätä linkittämättä.
   - Kuinka monta viitettä on jo linkitetty ja osoittaa oikeaan paikkaan. Ne jätetään ennalleen.
3. Valitse {{ui:Luo linkit}}.

Jokaiseen viitteeseen tulee ohut sininen laatikko, joka on arkkilinkki. {{key:Mod}}+napsautus siihen avaa arkin zoomattuna näkymään. Yksi {{key:Mod+Z}} poistaa ne kaikki.

Koodeja, jotka vain näyttävät arkkinumeroilta, kuten R-19 tai W12X26, ei oteta mukaan: viitteen on oltava muodoltaan sarjan omien arkkinumeroiden kaltainen. Arkin oma numero piirustusotsikossa ja näkymien otsikoissa ei ole koskaan viite. Skannatuissa arkeissa ei ole luettavaa tekstiä: käytä ensin {{ui:Lue teksti (OCR)…}}, tai linkitä niiden viitteet yksi kerrallaan.

## Aja uudelleen, kun sarja muuttuu

Erälinkit voi ajaa niin usein kuin haluat:

- **Arkki lisättiin**, kuten lisäys A-601:llä: avaa sen tiedosto ja aja Erälinkit uudelleen. A-601:een menevät viitteet, jotka eivät aiemmin linkittyneet, linkittyvät nyt.
- **Arkki numeroitiin uudelleen**: korjaa sen numero vaiheessa 1. Erälinkkien tekemät linkit, jotka eivät enää löydä arkkiaan, luetellaan kohdassa {{ui:Ei linkitetty}}. Valitse arkki kerran, niin ne kaikki seuraavat sitä. Linkit, jotka siirtyivät toiseen näkymään, päivittyvät.
- Käsin kohdassa {{ui:Ominaisuudet}} tehtyjä linkkejä ei koskaan muuteta.

## Tallennetussa PDF-tiedostossa

Linkki saman PDF-tiedoston arkkiin kirjoitetaan myös PDF-linkiksi, joten muutkin katselimet hyppäävät sinne napsautuksesta. Linkki näkymään avaa kyseisen näkymän toisessa katselimessa (PDF:n ”fit rectangle” -hyppy). Ilman näkymää linkki avaa koko arkin. Linkit toisen tiedoston arkkiin sarjassa toimivat vain MarkupCraftissa.
