---
title: Valikot, näppäimet ja hiiri
summary: Valitse MarkupCraftin oma työkalupalkki, PDF-tarkastuksen valikkopalkki tai valintanauha, anna mille tahansa työkalulle oma näppäin, siirrä työkaluja valikosta toiseen ja määritä, mitä rulla ja hiiren painikkeet tekevät.
keywords: valikkotyyli, valikot, valikkopalkki, työkalupalkki, valintanauha, välilehdet, pdf-tarkastus, pikanäppäimet, näppäimet, mukauta, uudelleenmääritys, hiiri, rulla, käännä, zoomauksen suunta, keskipainike, oikea painike, panorointi, vienti, tuonti, vaihto, tuttu
from: 081438a6
---

MarkupCraftin työkalut ovat samat, miten niihin pääsetkin. **Valikkotyyli** ratkaisee vain sen, missä työkalut näkyvät näytöllä, miten ne nimetään siellä ja mitkä näppäimet valitsevat ne. Valitse tyyli kohdasta {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}; muutos on heti voimassa, ja tämä selain muistaa sen.

## Kolme tyyliä

| Tyyli | Mitä saat |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraftin oma työkalupalkki (Tiedosto, Valitse, Piirrä, Revisio, Selitä, Mittaa, Muokkaus) ja sen yhden kirjaimen näppäimet: {{key:V}} valitse, {{key:H}} panoroi, {{key:P}} kynä, {{key:I}} korostuskynä, {{key:L}} viiva, {{key:A}} nuoli, {{key:R}} suorakulmio, {{key:E}} ellipsi, {{key:C}} pilvi, {{key:K}} selite, {{key:T}} teksti, {{key:N}} muistiinpano, {{key:S}} leima, {{key:M}} pituus, {{key:Q}} pinta-ala, {{key:U}} lukumäärä. Lähtökohta. |
| {{ui:PDF review}} | Valikkopalkki ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) ja rivi tarkastustyökaluja, joiden näppäimet on asetettu niin kuin PDF-tarkastusohjelmat ne asettavat: {{key:V}} valitse, {{key:Shift+V}} panoroi, {{key:H}} korostuskynä, {{key:Q}} selite, {{key:N}} monikulmio, {{key:Shift+N}} murtoviiva, {{key:Shift+T}} muistiinpano, {{key:Shift+A}} kaari, ja mittaukset {{key:Alt+Shift}}-näppäimillä: {{key:Alt+Shift+K}} kalibroi, {{key:Alt+Shift+L}} pituus, {{key:Alt+Shift+G}} kulma, {{key:Alt+Shift+A}} pinta-ala, {{key:Alt+Shift+C}} lukumäärä. {{key:Alt+L}} avaa merkintäluettelon. Keskipainike panoroi; oikea napsautus ei. |
| {{ui:Ribbon}} | Välilehdet, jotka on nimetty työn mukaan: {{ui:Mark up}} (valitse, piirrä, pilvet, selitteet, teksti, muistiinpanot, leimat), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}} (merkintäluettelo ja sen viennit, BCF-aiheet, puutelista, kenttätietueet, työkalulaatikko, vertailu), {{ui:Pages}} ja {{ui:View}} sekä {{ui:File}} ja pikapainikkeet avaamiseen, tallentamiseen, kumoamiseen ja uudelleentekoon. Työkaluilla on MarkupCraftin omat yhden kirjaimen näppäimet. Painike paneelille, joka ei ole auki, avaa ensin paneelin. |

Jokainen tyyli säilyttää {{key:Mod}}-näppäimet: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} ({{ui:Fit page}}) ja {{key:Mod+9}} ({{ui:Fit width}}); {{key:PageUp}} ja {{key:PageDown}} vaihtavat arkkia.

:::tip
Näppäin, joka kuuluu MarkupCraftin omaan asetteluun mutta ei valitsemaasi tyyliin, ei tee mitään, ja tilarivi kertoo, minne sen työkalu siirtyi (”PDF-tarkastuksessa Selite on Q”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nuolet säilyttävät aina merkityksensä. Kun kirjoitat tekstiruutuun, selitteeseen tai muistiinpanoon, jokainen näppäin kuuluu tekstille, ja piirtäessä kirjoitetut numerot avaavat edelleen pituuskentän.
:::

## Tee siitä omasi

1. Valitse lähimpänä haluamaasi tyyliä ja napsauta {{ui:Customize…}}.
2. Kohdassa {{ui:Keys and menus}} etsi työkalu (hakukenttä auttaa). Napsauta {{ui:Add a key}} ja paina näppäintä, tai kahta näppäintä peräkkäin kaksikirjaimista näppäintä varten. Napsauta näppäintä poistaaksesi sen.
3. Valikkopalkilla {{ui:Where it sits}} siirtää työkalun toiseen valikkoon tai kohtaan {{ui:Keys only}}.
4. Kohdassa {{ui:Mouse}} aseta rulla ja painikkeet, jotka panoroivat arkkia.
5. Anna tyylille nimi ja napsauta {{ui:Save}}.

Sisäänrakennetun tyylin tallentaminen tekee oman kopion nimellä ”Oma PDF-tarkastus”; sisäänrakennettu tyyli ei muutu koskaan. Näppäin, joka on annettu kahdelle työkalulle, näkyy punaisena, ja se on korjattava ennen tallennusta.

## Hiiri

- **Hiiren rulla**: {{ui:Scroll up zooms in}} (lähtökohta) tai {{ui:Scroll up zooms out}}, ja kuinka nopeasti. Kosketuslevyn nipistys zoomaa aina sormiesi liikkeen suuntaan.
- **Panorointi arkilla**: keskipainikkeella, oikealla painikkeella tai molemmilla. {{key:Space}} ja vetäminen sekä {{ui:Pan}}-työkalu panoroivat aina; vasen painike piirtää ja valitsee muutoin, joten sen rastittaminen ei muuta tässä mitään.
- MarkupCraftissa ei ole 3D-näkymää, joten 3D-painikkeet eivät tee mitään.

## Vie mukanasi

{{ui:Export}} tallentaa käytössä olevan tyylin pieneen `.ccinput.json`-tiedostoon; {{ui:Import…}} lisää sellaisen toisesta tietokoneesta tai kollegalta. Tuotu tiedosto voi viitata vain MarkupCraftin omiin työkaluihin: muu sisältö jätetään pois, ja se lasketaan tilarivillä. {{ui:Delete this style}} poistaa oman tyylisi.

:::note
Nämä asetukset pysyvät tässä selaimessa. {{ui:Use this style in every app}} tyylikorttien alla saa jokaisen sovelluksen avautumaan vastaavassa tyylissä: {{ui:PDF review}} toimii muiden sovellusten valikkopalkkityylien kanssa, {{ui:Ribbon}} niiden valintanauhojen kanssa ja MarkupCraftin oma työkalupalkki niiden omien kanssa. Sovellus, jolla ei ole vastaavaa tyyliä, säilyttää oman.
:::

:::tip
Työtilan asettelut kohdassa {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}}) rakentavat valintanauhansa {{ui:Ribbon}}-tyylin välilehdistä ja työkalupakkinsa MarkupCraftin työkalupalkista, joten jokainen työkalu toimii niissä samalla tavalla.
:::

Aiheeseen liittyvää: [Näppäimistö ja hiiri](topic:keyboard) · [MarkupCraftin asetukset](topic:settings) · [Siirtyminen toisesta merkintäohjelmistosta](topic:coming-from)
