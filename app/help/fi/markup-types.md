---
title: Kaikki merkintätyypit
summary: Seitsemäntoista merkintätyyppiä, niiden näppäimet, piirtotapa, oletusulkoasu ja se, mitä ne ovat tallennetussa PDF-tiedostossa.
keywords: merkintätyypit, työkalulista, huomautustyypit, pilvi, selite, teksti, muistiinpano, leima, kynä, korostuskynä, viiva, nuoli, suorakulmio, ellipsi, murtoviiva, monikulmio, pituus, pinta-ala, lukumäärä
from: 29bf32e7
---

## Työkalut

| Työkalupalkki | Näppäin | Piirtotapa | Oletusulkoasu | Tallennetussa PDF-tiedostossa |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Vedä | Punainen, 1.5 pt | Muste |
| {{ui:Highlight}} | {{key:I}} | Vedä | Keltainen, 14 pt leveä, läpinäkyvä, värjää alla olevan | Muste (merkitty korostuskynän vedoksi) |
| {{ui:Line}} | {{key:L}} | Vedä tai napsauta alku ja loppu | Punainen, 2 pt | Viiva |
| {{ui:Arrow}} | {{key:A}} | Vedä tai napsauta alku ja loppu | Punainen, 2 pt, suljettu nuolenkärki lopussa | Viiva, jossa on nuolenkärki |
| {{ui:Arc}} | {{key:O}} | Napsauta alku, kaaren piste ja sitten loppu | Punainen, 2 pt | Murtoviiva kaaren mukaan |
| {{ui:Rectangle}} | {{key:R}} | Vedä laatikko | Punainen, 2 pt, ei täyttöä | Neliö |
| {{ui:Ellipse}} | {{key:E}} | Vedä laatikko | Punainen, 2 pt, ei täyttöä | Ympyrä |
| {{ui:Polyline}} | {{key:Y}} | Napsauta pisteitä, lopeta kaksoisnapsautuksella | Punainen, 2 pt | Murtoviiva |
| {{ui:Polygon}} | {{key:G}} | Napsauta pisteitä, lopeta kaksoisnapsautuksella | Punainen, 2 pt, ei täyttöä | Monikulmio |
| {{ui:Cloud}} | {{key:C}} | Vedä laatikko | Punainen, 1.5 pt kaaret | Neliö pilvimäisellä reunalla |
| {{ui:Free cloud}} | {{key:Shift+C}} | Napsauta pisteitä, lopeta kaksoisnapsautuksella | Punainen, 1.5 pt kaaret | Monikulmio pilvimäisellä reunalla |
| {{ui:Callout}} | {{key:K}} | Paina kohdassa, vedä tekstiin, kirjoita | Punainen teksti ja viitenuoli, 1 pt, 12 pt teksti | Tekstiruutu ja selitteen viitenuoli |
| {{ui:Text}} | {{key:T}} | Napsauta tai vedä laatikko, kirjoita | Punainen 12 pt teksti, ei reunaa | Tekstiruutu |
| {{ui:Note}} | {{key:N}} | Napsauta, kirjoita | Keltainen muistiinpanokuvake | Tarralappu |
| {{ui:Stamp}} | {{key:S}} | Valitse leima, napsauta tai vedä | Kehystetyt isot kirjaimet ja ”Tekijä <nimi>, <päivämäärä>”; väritetty merkityksen mukaan | Leima |
| {{ui:Length}} | {{key:M}} | Napsauta alku ja loppu (tarvitsee mittakaavan) | Sininen mittaviiva päätemerkinnöin ja pituus | Viiva merkittynä mittana, ja mittaus |
| {{ui:Angle}} | {{key:X}} | Napsauta yhden varren päätä, kulman kärkeä ja toisen varren päätä | Siniset varret, pieni kaari kulmassa ja kulma asteina | Murtoviiva, jonka tekstinä on kulma |
| {{ui:Area}} | {{key:Q}} | Napsauta kulmia, lopeta kaksoisnapsautuksella (tarvitsee mittakaavan) | Sininen ääriviiva, vaaleansininen täyttö, pinta-ala ja piiri | Monikulmio merkittynä pinta-alaksi, ja mittaus |
| {{ui:Count}} | {{key:U}} | Napsauta jokaista kohdetta | Oranssit numeroidut pisteet ja ”ryhmä: n” -tunniste | Yksi muste-kommentti ryhmää kohti, rengas jokaiselle kohteelle |

Kosketuksella ”kaksoisnapsautus lopettaa” on kaksoisnapautus, ja ”napsautus” on napautus, joka toimii nostettaessa (pisteille, muistiinpanoille ja lukumäärille).

## Jokainen merkintä sisältää

| Kenttä | Missä näet sen |
|---|---|
| Tekijä | {{ui:Properties}}, luettelo, leiman toinen rivi, muut PDF-katseluohjelmat |
| Luotu ja muokattu | {{ui:Properties}} (aikavyöhykkeesi), luettelo, CSV |
| Tila | Avoin, Hyväksytty, Hylätty tai Valmis |
| Aihe | Lyhyt nimi; oletuksena tyyppi (”Pilvi”, ”Tekstiruutu”, ”Pituusmittaus”) |
| Kommentti | Pidempiä muistiinpanoja. Muistiinpanolle sen teksti on kommentti. |
| Teksti | Vain tekstiruudut ja selitteet |
| Vastaukset | Ketju tilamuutoksineen |
| Puutekohta | Numero, vastuuhenkilö, eräpäivä, puutekohdan tila, kun lisätty puutelistaan |
| Tyyli | Väri, viivan paksuus, täyttö ja täytön peittävyys (suljetut muodot, teksti ja selitteet), peittävyys, tekstin koko (teksti, selitteet ja mittaukset) |

## Vain luettavat kommentit

Tiedoston mukana tulleet kommentit, joita MarkupCraft ei voi muokata (tekstikorostukset, muiden ohjelmien leimat ja muut erikoistyypit), luetellaan tyypillä ”Muu” ja tilamerkillä ”Vain luku”. Ne säilyttävät tiedoston antaman ulkoasun. Voit valita ne, nähdä tekijän, aiheen ja kommentin sekä vastata niihin.

## Ei vielä toteutettu

Tiedostoliitteet eivät ole vielä toteutettuja. Mikä tahansa merkintä voi linkittyä arkkiin; katso [Arkkilinkit](topic:sheet-links). Kuvat ja allekirjoitukset sijoitetaan {{ui:Stamp}}-työkalulla; katso [Leimat ja muistiinpanot](topic:stamps-and-notes). Katso [Mitä ei ole vielä toteutettu](topic:not-built-yet).
