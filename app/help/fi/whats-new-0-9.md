---
title: Mitä uutta versiossa 0.9 (aiempi)
summary: Huomautukset ja työalusta, jotka eivät koskaan tulostu, yksityiset salatut huomautukset ja puhdas kopio asiakkaalle, erälinkit koko piirustussarjalle, kaarityökalu kymmenellä menetelmällä, toisen katselijan seuraaminen Live-istunnossa sekä korjaus poistettujen merkintöjen jäämiseen tallennettuun PDF-tiedostoon.
keywords: mitä uutta 0.9, aiempi julkaisu, mitä uutta, what's new, 0.9, julkaisutiedot, muutosloki, huomautukset, työalusta, yksityiset huomautukset, salalause, salattu, piilota huomautukset, näytä huomautukset, puhdas kopio, kuvakaappaus, erälinkit, arkkiviitteet, linkitä arkit, piirustusotsikko, arkin numero, lisäys, uudelleennumerointi, pdf-linkki, kaari, kaarimenetelmät, kolmen pisteen kaari, säde, seuraa, seuraa minua, live, luokkanäkymä, henkilöluettelo, poistettu merkintä, työkaluvihjeet, välilehtien otsikot, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, tehtävä, tehtävät, vastuuhenkilö, eräpäivä, myöhässä, tarkista nyt, mikä muuttui, revisiot, vertaa, äänimuistiinpano, päätös, punakynä, vastaustiedosto, piirtäjä, avustaja, mcp, ongelmat, kielet, syöttölaitteet, kosketuslevy, työkalurivin rivit, ominaisuusruudukko, päivitys
from: aa3dfeb8
---

Tämä kuvaa, mitä muuttui versiossa MarkupCraft 0.9 verrattuna versioon 0.8.1. Pääajatus on, että työmuistiinpanot pysyvät poissa asiakkaalle menevältä sivulta, ja koko piirustussarja voidaan linkittää yhdellä kerralla.

## Uutta

### Huomautukset, työalusta ja yksityiset huomautukset

- **Työalusta.** Jokaisen arkin ympärillä oleva alue on pöytä: arkin viereen piirretty, kirjoitettu tai liitetty asia on huomautus eikä koskaan tulostu. Valitse {{ui:Show the pasteboard}} loitontaaksesi tilaa varten tai {{ui:Snapshot to the pasteboard}}, vedä laatikko ja valitse sitten {{ui:To the pasteboard}}, jolloin piirustuksen osasta tulee kuva arkin viereen. Kuvakaappaus on kuva eikä muutu, kun arkki muuttuu. Katso [Huomautukset, työalusta ja yksityiset huomautukset](topic:notes-and-pasteboard).
- **Huomautusten näyttäminen ja piilottaminen.** Mikä tahansa merkintä voi olla huomautus: aseta {{ui:New markups are}} {{ui:Notes}}-välilehdellä tai {{ui:This markup is}} kohdassa {{ui:Properties}}. {{key:Shift+H}} tai arkin alla oleva {{ui:Notes}}-kytkin piilottaa ja näyttää kaikki huomautukset kerralla. Huomautukset jätetään pois tulostuksesta, litistetyistä kopioista, luetteloista ja vienneistä, eivätkä muut PDF-lukijat näytä niitä. Tallennettu PDF säilyttää ne, kun avaat sen seuraavan kerran MarkupCraftilla.
- **Yksityiset huomautukset.** Valitse {{ui:Set a passphrase}} ja tee sitten merkinnästä {{ui:A private note}}. Se salataan tiedostoon vähintään 10 merkin salalauseella, eikä sitä voi palauttaa: kukaan, ei edes me, ei voi avata sitä ilman salalausetta. {{ui:Lock}} piilottaa yksityiset huomautukset; {{ui:Stay unlocked on this device}} on oletuksena pois päältä.
- **Tallenna puhdas kopio.** {{ui:Save a clean copy}} poistaa kaikki huomautukset, yksityiset huomautukset ja kaiken työalustalta. Käytä sitä asiakkaalle menevälle tiedostolle.

### Linkitä koko sarja

- **Erälinkit.** Valitse {{ui:Pages}} › {{ui:Batch links…}} tai {{ui:Link sheet callouts…}} kohdassa {{ui:Find text}} {{ui:Sheets}}-paneelissa. Vaihe 1 luettelee jokaisen arkin numeron ja nimen piirustusotsikosta; korjaa väärät. Vaihe 2 luettelee löydetyt viitteet, kuten `3/A-501` tai `DETAIL 2 ON A-501`. {{ui:Will link}} näyttää arkin ja näkymän jokaiselle, {{ui:Not linked}} näyttää numerot, joita mikään avoin arkki ei vastaa, ja {{ui:Create the links}} tekee ne kaikki yhdellä kumoamisvaiheella. Aja se uudelleen lisäyksen tai uudelleennumeroinnin jälkeen; käsin tekemiäsi linkkejä ei koskaan muuteta. Linkki, jossa on näkymä, tallennetaan PDF-linkkinä, joten muut lukijat avaavat yksityiskohdan myös. Katso [Arkkilinkit](topic:sheet-links).

### Piirtäminen

- **Kaari, kymmenen menetelmää.** {{ui:Arc}}-työkalulla ({{key:O}}) on nyt sivun päällä {{ui:Arc method}} -ruutu, jossa on kymmenen tapaa piirtää kaari. Kulma, pituus, säde ja suunta voidaan napsauttaa tai kirjoittaa. Katso [Piirrä kaari kymmenellä tavalla](topic:draw-an-arc).

### Yhdessä työskentely

- **Seuraa katselijaa.** Valitse Live-istunnossa {{ui:Follow}} henkilön nimen vierestä, jolloin näkymäsi liikkuu hänen mukanaan. Oman panoroinnin tai zoomauksen aloittaminen lopettaa seuraamisen. Isäntä voi valita {{ui:Ask everyone to follow me}}. Henkilöluettelo näyttää jokaisen henkilön värin, nimen, arkin, jolla hän on, ja milloin hänen viimeisin muokkauksensa tehtiin. Katso [Seuraa toista katselijaa Live-istunnossa](topic:follow-in-live).

## Kaikissa sovelluksissa

- Työkaluvihjeet ovat Bootstrap-vihjeitä, aloitusvihjeen voi sulkea, välilehtirivi vierii, kun se ylittyy, ja selaimen välilehtien otsikot ovat muotoa `<document> — MarkupCraft | CadCraft`.
- Paneeli, jossa on useita osioita, avaa yhden ja sulkee muut (nuolen vieressä oleva lukko pitää yhden auki). {{ui:Settings}}-kytkin kytkee tämän pois.
- Jokainen sovellus alkaa kirjaston kohteiden oletuskokoelmasta.
- Paino- ja lämpötilayksiköt ovat käytettävissä yksikköasetuksissa.

## Korjattu

- **Poistetut merkinnät eivät enää jää luettaviksi tallennettuun PDF-tiedostoon.** Tallennus poisti aiemmin poistetun tai uudelleen kirjoitetun merkinnän sivulta, mutta jätti kohteen tekstineen tiedostoon. Nyt tallennus poistaa nämä kohteet. Aiemmilla versioilla tallennetut tiedostot sisältävät ne vielä, kunnes ne tallennetaan uudelleen.

## Rehelliset rajat

- Erälinkkejä kokeiltiin omilla testisarjoillamme. Todelliset sarjat piirtävät kuplia monin tavoin, joten asiakkaan sarjassa jotkin näkymät voivat jäädä löytymättä. Skannatut arkit tarvitsevat ensin {{ui:Read text (OCR)…}}.
- Huomautuksia, yksityisiä huomautuksia ja työalustaa testattiin ilman näyttöä toimivassa selaimessa ja omissa tiedostoissamme, ei suuressa todellisessa vektorisarjassa eikä todellisessa kahden hengen Live-istunnossa. Salalauseen vaihtoa ei ole toteutettu. Versiota 0.9 vanhemmat versiot eivät näytä huomautuksia.
- Luokkanäkymä on henkilöluettelo; sitä ei ole kokeiltu todellisilla opettajalla ja opiskelijoilla.
- Muut kielet kuin englanti ovat konekäännösluonnoksia, kunnes äidinkielinen puhuja lukee ne.
- Windowsin asennusohjelmat eivät ole koodiallekirjoitettuja (Lisätietoja, sitten Suorita silti); macOS-levykuvaa ei ole notarisoitu (napsauta hiiren kakkospainikkeella, sitten Avaa).

## Aiemmin: 0.8 ja 0.8.1

Tämä kuvaa, mitä muuttui versioissa MarkupCraft 0.8 ja 0.8.1 verrattuna versioon 0.7. Suurin uusi asia on, että merkintä voi olla tehtävä, jonka tekee joku tai oma yhdistetty avustajasi, ja tehtävä sulkeutuu itsestään, kun piirustus todella muuttuu.

### Uutta

**Merkinnät, jotka toimivat**

- **Tee merkinnästä tehtävä.** Valitse yksi tai useampi merkintä, avaa {{ui:Tasks}}-välilehti ja valitse {{ui:Make selected a task}}. Tehtävällä on otsikko, henkilö tai yhdistetty avustajasi, joka sen tekee, valinnainen eräpäivä ja tila. Se säilyttää paikkansa arkilla ja ketjunsa. Katso [Tee merkinnästä tehtävä](topic:markups-that-act).
- **Tehtävät, jotka sulkeutuvat itse.** Tehtävä voi seurata merkintänsä sisällä olevaa piirustusta. Avaa uudempi arkin revisio ja valitse {{ui:Check now}}: jos viivat kyseisellä alueella muuttuivat enemmän kuin hiusrajan verran, tehtävä merkitään valmiiksi, sen merkintä muuttuu Completed-tilaan ja ketjuun tulee huomautus, joka kertoo muutoksen. Uusi päivämääräleima tai viivat, jotka siirtyivät vähemmän kuin 1,5 pistettä, eivät laske. Tehtävä voi sen sijaan seurata mallielementtiä: avustajasi ilmoittaa elementin työkalulla `tasks_check`, ja myöhempi ilmoitus, joka poikkeaa, tai poistettu elementti sulkee tehtävän. Yksi kumoamisvaihe avaa sen uudelleen.
- **Tehtävien etsiminen.** Suodata {{ui:Tasks}}-luettelo tilan ja vastuuhenkilön mukaan, mukaan lukien {{ui:Overdue}}. Valitse {{ui:Assigned to}} ja sitten {{ui:Assistant}} nähdäksesi, mikä odottaa avustajaasi. Tehtävä, jonka eräpäivä on mennyt, näkyy varoituksena Ongelmat-paneelissa. {{ui:CSV}} vie luettelon. Tehtävät tallennetaan PDF-tiedostoon merkinnän mukana, ja ne kulkevat Live-istunnossa kuten muutkin merkintäominaisuudet.

**Mikä muuttui, selkokielisenä luettelona**

- **Luettele muutokset.** Avaa {{ui:Compare}}-välilehti, valitse {{ui:Vertaa koko sarja}}, valitse aiempi ja myöhempi tiedosto ja valitse {{ui:List the changes}}. Luettelo alkaa määrällä ja kattaa sitten jokaisen muuttuneen arkin, suurimmasta muutoksesta alkaen: missä arkin kohdassa muutos on, kuinka suuri se on (todellisissa yksiköissä sekä paperitollina kalibroidulla arkilla), lisättiinkö vai poistettiinko viivoja, kuinka monta merkintää kohdassa on ja mitkä sanat ilmestyivät tai katosivat. {{ui:Copy the list}} vie luettelon leikepöydälle, ja {{ui:CSV}} kirjoittaa yhden rivin kutakin muutosta kohden. Katso [Luettele revisioiden väliset muutokset](topic:what-changed-in-words).

**Äänimuistiinpanot ja päätökset**

- **Äänimuistiinpanot.** Valitse {{ui:Notes}}-välilehdeltä {{ui:Record a voice note}} ja sitten {{ui:Stop recording}}. Tallennus pysähtyy itsestään kahden minuutin kohdalla. Muistiinpano kiinnittyy arkin keskelle; vedä se paikalleen ja kirjoita kuvateksti kohdassa {{ui:Properties}}. Luettelon {{ui:Play}} toistaa sen. Tallenne tallennetaan PDF-tiedoston sisään.
- **Päätökset.** {{ui:Pin a decision}} kirjoittaa arkille lauseen tai kaksi. Jos se korvaa aiemman päätöksen, valitse se kohdasta {{ui:It replaces}}: vanha jää paikalleen, merkitään Replaced-tilaan ja osoittaa uuteen. Yksi kumoamisvaihe palauttaa sen. Katso [Kiinnitä äänimuistiinpanot ja päätökset arkille](topic:voice-notes-and-decisions).

**Punakynä revisioon**

- **Lähetä ja vastaa.** Avaa {{ui:Tasks}}-välilehdellä {{ui:Redline to revision}}, kirjoita revisio, johon merkinnät kohdistuvat, ja valitse {{ui:Export redline file}}. Saat `.redline.json`-tiedoston, jossa on yksi kohta jokaista avointa merkintää kohden: arkki, paikka (arkin osuuksina, joten uusi tulostus toisessa koossa on yhä linjassa), sanat, tekijä, ketju ja sen tehtävä. Se, joka piirtää muutokset, vastaa Accepted-, Rejected- tai Done-tilalla `.redline-answers.json`-tiedostossa. {{ui:Load answers file…}} antaa jokaiselle merkinnälle tämän tilan ja piirtäjän huomautuksen yhdellä kumoamisvaiheella. Katso [Lähetä merkinnät piirtäjälle punakynänä](topic:redline-to-revision).

**Tekoälyavustajat**

- **Lisää työkaluja.** Avustaja, jonka yhdistit CadCraft Studion kautta, voi listata tehtäviä (`tasks_list`), luoda tai muuttaa tehtävää (`task_set`), poistaa tehtävän (`task_clear`), tarkistaa tehtävän uudempaa revisiota tai elementtiä vastaan (`tasks_check`) ja lukea kahden avoimen piirustussarjan muutosten selkokielisen luettelon (`revisions_changes`). Se saa vain ne työkalut, jotka valitsit Avustajat-kytkimen alla, ja jokainen muutos on yksi kumoamisvaihe. Katso [MarkupCraftin käyttö tekoälyavustajan kanssa](topic:use-with-ai-assistants).

### Kaikissa sovelluksissa

- **Kielet.** CadCraft Studiossa on nyt 54 kieltä. Kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili ja uzbek. Kaikki muut kuin englanninkieliset ovat konekäännösluonnoksia, kunnes äidinkielinen puhuja lukee ne.
- **Syöttölaitteet.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} määrittää, mitä kosketuslevy, hiiren sivupainikkeet, kynä, sormen napautukset, 3D-hiiri, peliohjain tai MIDI-ohjain tekee, kaikille sovelluksille tai vain tälle yhdelle. Ennen kuin muutat mitään, kaikki laitteet toimivat kuten ennen. Katso [Kosketuslevyn, 3D-hiiren tai ohjaimen käyttö](common:input-devices).
- **Työkalurivin rivit.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} tarjoaa vaihtoehdot {{ui:Wrap}} (oletus), {{ui:2 rows}} ja {{ui:1 row}}, jotta piirustukselle jää enemmän tilaa. Katso [Paneelien järjestäminen](common:arrange-panels).
- **Ominaisuusruudukko.** Merkinnän tyylikentät käyttävät yhteistä ruudukkoa, jossa on taitettavat ryhmät sekä otsikko- ja arvosarakkeet.
- **Ongelmat-paneeli.** Sovelluksen varoitukset, kuten myöhässä oleva tehtävä, kerääntyvät yhteen Ongelmat-paneeliin.
- **Live ja lisäosat.** Live-istunnot on kuvattu kohdassa [Työskentely yhdessä Live-tilassa](common:work-together-live). Tilisi lisäosaluettelo on kohdassa [Lisäosat ja tilisi luettelo](common:addons-basics).
- **Yhdistä oma tekoälysi.** CadCraft Studio on keskus omalle avustajallesi: yhdistä kerran kaikille kahdeksalle sovellukselle. Sovellukset eivät sisällä omaa tekoälyä.

### Korjattu versiossa 0.8.1

- **Studio voi vaihtaa kieltä käynnin aikana.** Aiemmin työpöytäsovellus ja pakatut versiot pysyivät englanniksi. Tätä ei ole vielä testattu jokaisella alustalla: kerro meille, jos kieli ei vaihdu.
- Studio 0.8 -asennuksille tarjotaan versiota 0.8.1 kohdassa {{ui:Asetukset}} › {{ui:Päivitykset}}.

### Ei vielä tässä versiossa

- **Ei koodiallekirjoitusta.** Windowsin asennusohjelmissa ja macOS:n .dmg-tiedostossa ei ole vielä allekirjoitusta. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa napsauta CadCraft Studiota hiiren kakkospainikkeella ja valitse {{ui:Avaa}}. Kauppaversioiden julkaisu on keskeytetty.
- **Oman tekoälyn yhdistäminen on osin kesken.** Yhden napsautuksen yhdistämistä Studiossa, selainavustajien isännöityä liitintä ja oman API-avaimen käyttöä Studiossa ei luvata tähän julkaisuun. Tehtäväsilmukka on testattu, mutta ei vielä todellisella avustajalla.
- **Tehtävien tarkistus vaatii saman sivukoon.** Arkki, joka on piirretty uudelleen toiseen kokoon, ei vastaa, joten sen tehtävät eivät sulkeudu. Arkit yhdistetään arkin numeron perusteella, muuten sivun sijainnin perusteella.
- **Äänimuistiinpanot ovat pelkkiä tallenteita.** Niistä ei ole litteraatiota, ja avustaja näkee huomautuksen pituuden, tekijän ja kuvatekstin, ei ääntä. Tallennusta kokeiltiin valemikrofonilla ilman näyttöä toimivassa selaimessa. Todellista mikrofonia puhelimessa, tabletissa tai kannettavassa ei ole vielä tarkistettu.
- **Laskelmat ja syyt PDF-tiedostossa** säilytetään tiedoston yksityisessä merkinnässä. Vanhempi MarkupCraft jättää sen huomiotta ja poistaa sen seuraavalla tallennuskerralla, joten avaa ja tallenna tällainen tiedosto versiolla 0.8 tai uudemmalla.
- **Piirtäjän puoli punakynistä.** CadCraftin toteutus punakynätiedoston lukemiselle ja siihen vastaamiselle ei ole vielä toteutettu.
- **Muut kielet.** Tamilin sovelluspalkki ylittyy 528 px:llä.

Kaikki muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet). Edellistä julkaisua koskevat tiedot ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
