---
title: MarkupCraftin aloitusopas
summary: Avaa piirustussarja, aseta ensimmäinen pilvesi ja selite arkille ja tallenna merkitty kopio.
keywords: aloitus, ensimmäiset askeleet, avaa pdf, tarkastus, merkintä, redline, punakynä, piirustussarja, opas, pikaopas
from: 0b1aae4e
---

MarkupCraft on piirustusten tarkastukseen: avaat PDF-piirustussarjoja, merkitset niihin pilviä, selitteitä, tekstiä, leimoja ja mittoja, seuraat jokaisen kommentin tilaa ja tallennat PDF:stä kopion, jonka mikä tahansa PDF-katselin voi näyttää.

Se toimii verkkoselaimessasi. PDF-tiedostosi avataan omalla tietokoneellasi eikä niitä **koskaan lähetetä minnekään**. Tallennus lataa uuden kopion; alkuperäistä tiedostoa ei muuteta.

:::note
MarkupCraft on kehityksessä. Ohje kuvaa käyttämääsi versiota. Se, mitä ohjelma ei vielä osaa, on lueteltu kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).
:::

## Mitä tarvitset

- Uusi Chrome, Edge, Firefox tai Safari Mac-, Windows- tai Linux-tietokoneella, tai Safari tai Chrome iPadilla. Katso [Selaimet ja tietokoneet](common:browsers).
- Yksi tai useampi PDF-tiedosto. Kokonainen piirustussarja voi olla yksi PDF tai monta.
- Hiiri rullalla on mukavin. Ohjauslevy toimii, samoin kosketusnäyttö (katso [Tarkastus iPadilla tai kosketusnäytöllä](topic:review-on-a-tablet)).

## Ensimmäinen tarkastuksesi kymmenessä vaiheessa

1. Avaa MarkupCraft selaimessasi. Näytön keskellä lukee ”Avaa piirustussarja”.
2. Valitse {{ui:Avaa PDF-tiedostoja}} (tai {{ui:Avaa}} työkalurivin vasemmassa reunassa, tai paina {{key:Mod+O}}), valitse yksi tai useampi PDF ja vahvista.
   Voit myös vetää PDF-tiedostoja kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} ja pudottaa ne arkkialueelle.
   Ensimmäisellä kerralla alareunan tilarivillä lukee ”Ladataan PDF-lukijaa…”. Sitten jokaisesta sivusta tulee arkki vasemmalla olevaan {{ui:Arkit}}-luetteloon, ja ensimmäinen arkki täyttää keskialueen.
3. Napsauta arkkia luettelossa näyttääksesi sen. Pyöritä hiiren rullaa arkin päällä zoomataksesi sisään osoittimen kohdalle.
4. Valitse {{ui:Pilvi}} työkalurivin {{ui:Revisio}}-ryhmästä (tai paina {{key:C}}).
   Ensimmäisellä kerralla, kun valitset piirtotyökalun, MarkupCraft kysyy nimeäsi. Kirjoita se ja valitse {{ui:Tallenna}}. Jokainen merkintä tallentaa sen. (Lisää kohdassa [Tekijännimen asettaminen](topic:set-your-name).)
5. Vedä laatikko sen alueen ympärille, jonka haluat nostaa esiin. Punainen revisiopilvi tulee näkyviin ja on valittuna.
6. Valitse {{ui:Selite}} {{ui:Merkitse}}-ryhmästä (tai paina {{key:K}}). Paina sitä kohtaa, johon osoitat, vedä paikkaan, johon teksti tulee, ja päästä irti.
7. Kirjoita kommenttisi näkyviin tulevaan ruutuun. Napsauta mihin tahansa ruudun ulkopuolelle (tai paina {{key:Mod+Enter}}) viimeistelläksesi.
8. Paina {{key:Esc}} kahdesti: kerran poistaaksesi valinnan, kerran palataksesi {{ui:Valitse}}-työkaluun. Napsauta pilveä. Oikealla oleva {{ui:Ominaisuudet}}-välilehti näyttää, kuka sen teki, milloin ja sen {{ui:Tila}}n.
9. Valitse {{ui:Tallenna}} työkaluriviltä (tai paina {{key:Mod+S}}).
   Selaimesi lataa kopion, jonka nimi on esimerkiksi ”A-Plans (marked up).pdf”. Tilarivi kertoo, kuinka monta merkintää kirjoitettiin.
10. Avaa kopio missä tahansa PDF-katselimessa tarkistaaksesi: pilvi ja selite ovat siellä tavallisina PDF-kommentteina, joissa on nimesi.

Jatkaaksesi työtä myöhemmin avaa ”(marked up)”-kopio MarkupCraftissa. Merkintäsi palaavat muokattavina, tiloineen, vastauksineen ja puutenumeroineen.

## Online ja offline

:::online
Olet online. MarkupCraft lataa PDF-lukijansa, kun avaat PDF:n ensimmäisen kerran, ja PDF-kirjoittimensa, kun tallennat ensimmäisen kerran. Jos haluat työskennellä myöhemmin ilman yhteyttä (työmaakäynnillä, lentokoneessa), valitse nyt ylälaidan palkista {{ui:Tallenna offline-käyttöön}} ja odota, että lukee ”Offline valmis”. Kopio sisältää PDF-lukijan ja PDF-kirjoittimen, joten PDF-tiedostojen avaaminen ja tallentaminen toimivat sen jälkeen offline. Katso [Offline-työskentely](common:offline).
:::

:::offline
Olet offline. Jos ylälaidan palkki sanoo ”Offline valmis”, MarkupCraft tallennettiin offline-käyttöön tähän selaimeen ja kaikki toimii: avaaminen, merkitseminen, mittaaminen, tallennus. Jos ei tallennettu, käytä sitä, mikä on jo ladattu tähän välilehteen, äläkä lataa sivua uudelleen ennen kuin olet taas online-tilassa. Katso [Offline-työskentely](common:offline).
:::

## Mitä ohjelma muistaa ja mitä ei

- **Merkintäsi ovat tallentamassasi PDF:ssä.** Mitään ei säilytetä palvelimella. Ohjelma ei tallenna PDF:ää itse, mutta pitää palautuskopiota tässä selaimessa, kunnes teet sen. Tallenna ennen kuin suljet välilehden; selain kysyy ensin, jos yrität poistua sivulta tallentamattomien merkintöjen kanssa (paitsi iPadilla, katso [Tarkastus iPadilla tai kosketusnäytöllä](topic:review-on-a-tablet)).
- **Nimesi, työkalutyylisi ja työkalupakkisi** pysyvät tässä selaimessa tällä tietokoneella. Toinen selain tai tietokone aloittaa alusta, ja jos tyhjennät selaimen sivustotiedot, ne poistuvat. Katso [Mitä pysyy tässä selaimessa](topic:browser-storage).
- Pilvitallennus ja usean henkilön jaetut tarkastusistunnot eivät ole vielä käytettävissä.

## Mihin seuraavaksi

- [Kierros näytöllä](topic:workspace)
- [Arkin merkitseminen](topic:mark-up-a-sheet)
- [Arkin kalibrointi ja mittaaminen](topic:calibrate-and-measure)
- [Jos tulet muista merkintäohjelmista](topic:coming-from), jos tarkastat piirustuksia jo toisella ohjelmalla.
