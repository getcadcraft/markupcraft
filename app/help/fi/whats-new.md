---
title: Mitä uutta versioissa 0.8 ja 0.8.1
summary: Merkinnät, jotka muuttuvat tehtäviksi ja sulkeutuvat itsestään, selkokielinen luettelo revisioiden välisistä muutoksista, äänimuistiinpanot ja päätökset piirustuksella, punakynätiedostot piirtäjälle sekä yhteiset 0.8-muutokset: syöttölaitteet, työkalurivit, Ongelmat ja lisää kieliä.
keywords: mitä uutta, uutta, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, tehtävä, tehtävät, vastuuhenkilö, eräpäivä, myöhässä, tarkista nyt, mitä muuttui, revisiot, vertaa, äänimuistiinpano, päätös, punakynä, vastaustiedosto, piirtäjä, avustaja, mcp, ongelmat, kielet, syöttölaitteet, kosketuslevy, työkalurivit, ominaisuusruudukko, päivitys
from: 40368796
---

Tämä kertoo, mitä muuttui versioissa 0.8 ja 0.8.1 verrattuna versioon 0.7. Suurin uutuus on, että merkintä voi olla tehtävä, jonka joku tai oma avustajasi tekee, ja se sulkeutuu itsestään, kun piirustus todella muuttuu.

## Uutta

### Merkinnät toimivat

- **Tee merkinnästä tehtävä.** Valitse yksi tai useampi merkintä, avaa {{ui:Tehtävät}}-välilehti ja valitse {{ui:Tee valitusta tehtävä}}. Tehtävällä on otsikko, henkilö tai yhdistetty avustaja, joka sen tekee, valinnainen eräpäivä ja tila. Se säilyttää paikkansa arkilla ja keskustelunsa. Katso [Tee merkinnästä tehtävä](topic:markups-that-act).
- **Tehtävät, jotka sulkeutuvat itsestään.** Tehtävä voi valvoa merkintänsä sisällä olevaa piirustusta. Avaa uudempi arkin revisio ja valitse {{ui:Tarkista nyt}}: jos viivat sillä alueella ovat muuttuneet enemmän kuin hitusen, tehtävä merkitään Valmis, sen merkintä muuttuu tilaan Suoritettu ja keskustelun huomautus kertoo, mitä muuttui. Uusi päivämerkintä tai viivat, jotka ovat siirtyneet alle 1.5 pistettä, eivät ole muutos. Tehtävä voi sen sijaan valvoa mallielementtiä: avustajasi raportoi elementin komennolla `tasks_check`, ja myöhempi, erilainen raportti tai poistettu elementti sulkee tehtävän. Yksi kumoamisvaihe avaa sen uudelleen.
- **Löydä työ.** Suodata {{ui:Tehtävät}}-luettelo tilan ja tekijän mukaan, myös {{ui:Myöhässä}}-tehtävät. Valitse {{ui:Osoitettu}} ja sitten {{ui:Avustaja}}, jolloin näkyy, mitä odottaa avustajaa. Eräpäivän ohittanut tehtävä näkyy varoituksena Ongelmat-paneelissa. {{ui:CSV}} vie luettelon. Tehtävät tallennetaan PDF-tiedostoon merkinnän mukana ja kulkevat Live-yhteydessä kuten muut merkinnän ominaisuudet.

### Mitä muuttui, selkokielisenä luettelona

- **Luettele muutokset.** Avaa {{ui:Vertaa}}-välilehti, sitten {{ui:Vertaa koko arkkisarjaa}}, valitse aiempi ja myöhempi tiedosto ja valitse {{ui:Luettele muutokset}}. Luettelo alkaa lukumäärällä ja käsittelee jokaisen muuttuneen arkin, suurimmasta muutoksesta alkaen: missä kohtaa arkkia, kuinka suuri muutos (todellisissa yksiköissä sekä paperin tuumina kalibroidulla arkilla), lisättiinkö vai poistettiinko viivoja, kuinka monta merkintää siellä on ja mitkä sanat ilmestyivät tai katosivat. {{ui:Kopioi luettelo}} vie sen leikepöydälle ja {{ui:CSV}} kirjoittaa yhden rivin jokaista muutosta kohden. Katso [Luettele revisioiden väliset muutokset](topic:what-changed-in-words).

### Äänimuistiinpanot ja päätökset

- **Äänimuistiinpanot.** Valitse {{ui:Muistiinpanot}}-välilehdessä {{ui:Tallenna äänimuistiinpano}}, sitten {{ui:Lopeta tallennus}}. Tallennus pysähtyy itsestään kahden minuutin kohdalla. Muistiinpano kiinnittyy arkin keskelle, vedä se oikeaan paikkaan ja kirjoita kuvateksti kohtaan {{ui:Ominaisuudet}}. Luettelossa {{ui:Toista}} toistaa sen. Tallenne tallennetaan PDF-tiedoston sisään.
- **Päätökset.** {{ui:Kiinnitä päätös}} kirjoittaa arkille lauseen tai kaksi. Jos se korvaa aiemman päätöksen, valitse se kohdasta {{ui:Se korvaa}}: vanha jää paikalleen, merkitään Korvattu ja osoittaa uuteen. Yksi kumoamisvaihe palauttaa sen. Katso [Kiinnitä äänimuistiinpanot ja päätökset arkille](topic:voice-notes-and-decisions).

### Punakynä revisioon

- **Lähetä ja vastaa.** Avaa {{ui:Tehtävät}}-välilehdessä {{ui:Punakynä revisioon}}, kirjoita revisio, johon merkinnät kohdistuvat, ja valitse {{ui:Vie punakynätiedosto}}. Saat tiedoston `.redline.json`, jossa on yksi kohta jokaista avointa merkintää kohden: arkki, sijainti (arkin murtolukuina, joten uudelleentulostus toisessa koossa asettuu yhteen), sanat, tekijä, keskustelu ja sen tehtävä. Piirtäjä vastaa muutoksiin tiedostolla `.redline-answers.json`, jossa merkinnät ovat Hyväksytty, Hylätty tai Valmis. {{ui:Lataa vastaustiedosto…}} antaa jokaiselle merkinnälle tilan ja piirtäjän huomautuksen yhtenä kumoamisvaiheena. Katso [Lähetä merkinnät piirtäjälle punakynänä](topic:redline-to-revision).

### Tekoälyavustajat

- **Lisää työkaluja.** Avustaja, jonka yhdistit CadCraft Studiosta, voi listata tehtävät (`tasks_list`), luoda tai muuttaa tehtävän (`task_set`), poistaa tehtävän tehtävästä (`task_clear`), tarkistaa tehtävän uutta revisiota tai elementtiä vastaan (`tasks_check`) ja lukea kahden avoimen piirustussarjan väliset muutokset selkokielisenä luettelona (`revisions_changes`). Se saa vain ne työkalut, jotka on valittu kohdasta Avustajat, ja jokainen muutos on yksi kumoamisvaihe. Katso [Käytä MarkupCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants).

## Kaikissa sovelluksissa

- **Kielet.** CadCraft Studiossa on nyt 54 kieltä. Kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili ja uzbekki. Kaikki englannista poikkeavat kielet ovat konekäännöksiä, kunnes äidinkielinen puhuja on lukenut ne.
- **Syöttölaitteet.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Syöttölaitteet}} määrittää, mitä kosketuslevy, hiiren sivupainikkeet, kynä, sormen napautukset, 3D-hiiri, peliohjain tai MIDI-ohjain tekee, kaikille sovelluksille tai vain tälle. Ennen kuin muutat mitään, jokainen laite toimii kuten ennenkin. Katso [Käytä kosketuslevyä, 3D-hiirtä tai ohjainta](common:input-devices).
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} sisältää vaihtoehdot {{ui:Rivitä}} (oletus), {{ui:2 riviä}} ja {{ui:1 rivi}}, jotta piirustukselle jää enemmän tilaa. Katso [Järjestä paneelit](common:arrange-panels).
- **Ominaisuusruudukko.** Merkinnän tyylikentät käyttävät yhteistä ruudukkoa, jossa on taitettavat ryhmät sekä nimi- ja arvosarakkeet.
- **Ongelmat-paneeli.** Sovelluksen varoitukset, kuten myöhässä oleva tehtävä, kerääntyvät yhteen Ongelmat-paneeliin.
- **Live ja lisäosat.** Live-istunnot on kuvattu kohdassa [Työskentely yhdessä Livessä](common:work-together-live). Tilin mukainen lisäosaluettelo on kohdassa [Lisäosat ja tilin luettelo](common:addons-basics).
- **Yhdistä oma tekoäly.** CadCraft Studio on keskus omalle avustajalle: yhdistä kerran kaikille kahdeksalle sovellukselle. Sovelluksissa ei ole omaa tekoälyä.

## Korjattu versiossa 0.8.1

- **Studio voi vaihtaa kieltä käynnistettynä.** Aiemmin työpöytäsovellus ja pakatut versiot pysyivät englanniksi. Tätä ei ole vielä testattu jokaisella alustalla: kerro, jos kieli ei vaihdu.
- Studio 0.8 -asennuksille tarjotaan versiota 0.8.1 kohdassa {{ui:Asetukset}} › {{ui:Päivitykset}}.

## Ei vielä tässä versiossa

- **Ei koodiallekirjoitettu.** Windows-asennusohjelmissa ja macOS-levykuvassa (.dmg) ei ole vielä allekirjoitusta. Jos Windowsin SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}}, sitten {{ui:Suorita silti}}. macOS-koneessa napsauta CadCraft Studiota hiiren oikealla painikkeella ja valitse {{ui:Avaa}}. Kauppaversiot ovat tauolla.
- **Tekoälyn yhdistäminen on osittain kesken.** Yhden napsautuksen yhdistäminen Studiossa, isännöity liitin selainavustajille ja oma API-avain Studiossa eivät ole lupaus tälle julkaisulle. Tehtäväsilmukka on testattu, mutta ei vielä oikealla avustajalla.
- **Tehtävätarkistukset vaativat saman sivukoon.** Arkki, joka on tulostettu uudelleen toisessa koossa, ei täsmää, joten sen tehtävät eivät sulkeudu. Arkit paritetaan arkkinumeron mukaan, muuten sivun sijainnin mukaan.
- **Äänimuistiinpanot ovat vain tallenteita.** Niistä ei ole kirjoitettua tekstiä, ja avustaja näkee muistiinpanon pituuden, tekijän ja kuvatekstin, ei ääntä. Tallennusta on kokeiltu valekuvalaitteella ilman näyttöä toimivassa selaimessa. Oikeaa mikrofonia puhelimella, tabletilla tai kannettavalla ei ole vielä tarkistettu.
- **Laskentalomakkeet ja perustelut PDF-tiedostossa** säilyvät tiedoston yksityisessä merkinnässä. Vanhempi MarkupCraft ei tunnista sitä ja poistaa sen seuraavassa tallennuksessa, joten avaa ja tallenna tällainen tiedosto versiolla 0.8 tai uudemmalla.
- **Punakynäpiirtäjän puoli.** CadCraftin lukeminen punakynätiedostosta ja siihen vastaaminen ei ole vielä valmis.
- **Muut kielet.** Tamilin kielen sovelluspalkki ylittää 528 px:llä.

Kaikki muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet). Edellisen version tiedot ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
