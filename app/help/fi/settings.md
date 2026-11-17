---
title: MarkupCraft-asetukset
summary: Vaihda nimesi, uusien merkintöjen väri ja viivanpaksuus, mihin liitos asettaa kopiot sekä pituuksien yksiköt ja arkin sijainnin.
keywords: asetukset, ominaisuudet, valinnat, nimi, tekijä, väri, oletusväri, viivanpaksuus, paksu, ohut, liitä, liitä osoittimeen, siirto, yksiköt, metrinen, millimetrit, tuumat, jalat, palauta
from: 63ad97fd
---

Avaa {{ui:Asetukset}} yläpalkin hammaspyörästä tai paina {{key:Mod+,}}. Ensimmäinen välilehti, {{ui:MarkupCraft}}, sisältää tähän sovellukseen kuuluvat asetukset. {{ui:Yleiset}} sisältää asetukset, jotka kaikki CadCraft-sovellukset jakavat (teema, työkalurivi, paneelit). MarkupCraftin asetukset koskevat vain tätä sovellusta: muutat ne täällä, ja tämä selain muistaa ne (katso [Mitä jää tähän selaimeen](topic:browser-storage)). Muutos on heti voimassa, eikä mitään tarvitse tallentaa.

## Nimesi

{{ui:Merkintöjen nimi}} on nimi, jonka jokainen uusi merkintä ja vastaus kantaa ja jonka tallennetut PDF-tiedostot näyttävät kommentin tekijänä. Se on sama nimi kuin tilarivin oikeassa päässä oleva painike, ja sen voi muuttaa kummasta paikasta tahansa. Jo piirretyt merkinnät säilyttävät nimen, jolla ne tehtiin. Katso [Aseta tekijänimesi](topic:set-your-name).

## Uudet merkinnät

- **{{ui:Merkinnän väri}}** on väri, jolla uudet kynät, viivat, nuolet, suorakulmiot, soikeat, monitaitoviivat, monikulmiot, pilvet, selitteet ja teksti alkavat (aluksi punainen). Korostuskynät, huomautukset, leimat, pituudet, pinta-alat ja laskennat säilyttävät omat värinsä, koska värit kertovat, mitä ne ovat.
- **{{ui:Ohuet viivat}}, {{ui:Normaali}}, {{ui:Paksut viivat}}** tekevät näiden samojen merkintöjen viivoista puolet niin leveitä kuin ne ovat, tai puolitoista kertaa niin leveitä.

Väri tai viivanleveys, jonka valitset yhdelle työkalulle kohdassa {{ui:Ominaisuudet}} (kun työkalu on päällä eikä mitään ole valittuna), voittaa nämä. Työkalut, jotka tulevat [työkalulaatikosta](topic:tool-chest), säilyttävät oman tyylinsä. Jo piirretyt merkinnät eivät muutu: valitse ne ja muuta kohdassa {{ui:Ominaisuudet}}.

## Liitä

Mihin {{key:Mod+V}} asettaa kopioidun:

- **{{ui:Osoittimen kohtaan}}** (aloitusasetus): kun osoitin on arkilla, kopio tulee keskelle osoitinta. Kun osoitin on muualla, kopio tulee alkuperäisen viereen.
- **{{ui:Kopion viereen}}**: aina hieman alkuperäisen alapuolelle ja oikealle, ja jokainen liitos vähän pidemmälle.

{{ui:Liitä}}-painike ja {{key:Mod+Shift+V}} ({{ui:Liitä samaan paikkaan}}) toimivat samoin kummallakin valinnalla. Katso [Kopioi, liitä ja monista](topic:select-and-edit#copy-paste-and-duplicate).

## Mittaukset

- **{{ui:Näytä pituudet yksikössä}}** on yksikkö, jonka arkin mittakaavaikkuna tarjoaa ensimmäisenä, kun kalibroidaan kahdesta pisteestä: jalat ja tuumat, desimaalijalat, tuumat, metrit tai millimetrit. Jo kalibroidut arkit säilyttävät yksikkönsä. Katso [Kalibroi arkki ja mittaa](topic:calibrate-and-measure).
- **{{ui:Sijainti arkilla}}** valitsee tuumat tai millimetrit osoittimen sijainnille näytön vasemmassa alareunassa. Se on sijainti paperilla, ei todellinen etäisyys.

## Palauta

{{ui:Palauta MarkupCraft-asetukset}} dialogin alareunassa palauttaa nämä asetukset sekä {{ui:Yleiset}}-välilehden paneeli- ja työkalurivin asetukset alkutilaansa. Se säilyttää nimesi, koska nimi kertoo kuka olet eikä sitä, miten työskentelet. Se säilyttää myös kunkin työkalun omassa paneelissa valitsemasi värit.
