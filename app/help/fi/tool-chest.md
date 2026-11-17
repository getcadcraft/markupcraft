---
title: Työkalulaatikko
summary: Tallenna tyyliteltu merkintä uudelleen käytettäväksi työkaluksi, piirrä sillä ja jaa laatikkosi toimiston kanssa tiedostona.
keywords: työkalulaatikko, työkalut, työkalusarja, omat työkalut, tallennetut merkinnät, suosikit, toimiston standardi, tuonti, vienti, jakaminen, json
from: 7dfa36e0
---

{{ui:Työkalut}}-välilehti sisältää **työkalulaatikkosi**: ulkoasultaan tallennetut merkinnät, jotka ovat valmiina piirrettäviksi uudelleen. Työkalu säilyttää merkinnän tyypin, värin, viivan paksuuden, täytön, peittävyyden, tekstin koon ja aiheen sekä leiman sanamuodon, lukumäärän ryhmän nimen tai tekstikentän tai selitteen aloitustekstin.

## Aloitustyökalut

Uudessa laatikossa on kuusi: ”Revisiopilvi” (punainen), ”Kysymyspilvi” (sininen), ”Keltainen korostus”, ”RFI-selite” (sininen, alkaa tekstillä ”RFI: ”), ”Tarkista kentällä” (oranssi selite, jossa lukee ”Tarkista kentällä.”) ja ”Hyväksytty huomautuksin” (leima).

## Piirrä työkalulla

1. Avaa {{ui:Työkalut}}-välilehti.
2. Napsauta työkalua. Se näyttää painetulta, ja vastaava työkalurivin työkalu kytkeytyy päälle.
3. Piirrä tavalliseen tapaan. {{ui:Ominaisuudet}} kertoo: ”Piirretään työkalulla ”<tool>” työkalulaatikosta.”

Kun laatikon työkalu on päällä, {{ui:Ominaisuudet}}-paneelin muutokset, jotka teet ennen piirtämistä, koskevat sitä työkalua toistaiseksi, muuttamatta tallennettua työkalua tai tavallisia työkaluasetuksiasi. Työkalurivin painikkeen valitseminen tai työkalun näppäimen painaminen palaa tavalliseen työkaluun.

## Tallenna oma työkalu

1. Piirrä merkintä ja muotoile se haluamallasi tavalla: väri, viiva, täyttö, aihe, leiman sanamuoto.
2. Valitse se.
3. Valitse {{ui:Työkalut}}-välilehdeltä {{ui:Tallenna valittu työkaluksi}} tai {{ui:Ominaisuudet}}-paneelista {{ui:Tallenna työkaluksi}}.
4. Kirjoita {{ui:Työkalun nimi}} ja valitse {{ui:Tallenna työkalu}}.

Tulos: työkalu lisätään laatikon loppuun, ja {{ui:Työkalut}}-välilehti avautuu näyttämään sen.

## Valinnasta tehdyt leimat

Valitse useita merkintöjä (tai sivun sisältöä {{ui:Sisältö}}-työkalulla) ja valitse {{ui:Tallenna valinta leimaksi…}} kohdasta {{ui:Lisää}} tai pikavalikosta. Laatikkoon tulee yksi leima, joka sisältää ne kaikki (”Leima: 3 merkintää yhdessä”). Napsauta sitä ja napsauta sitten mitä tahansa arkkia: merkinnät asettuvat yhdessä napsautuskohtaan keskitettyinä uusina merkintöinä, joissa on nimesi; sivun sisältö piirretään sivulle siihen kohtaan. Nämä leimat tallennetaan ja jaetaan laatikon kanssa kuten mikä tahansa työkalu.

## Poista työkalu

Valitse työkalun rivin lopussa oleva ×, ja valitse sitten {{ui:Poista}}. Jo sillä piirretyt merkinnät säilyvät ennallaan.

## Missä laatikko säilytetään

Laatikko tallennetaan **tähän selaimeen, tälle tietokoneelle**. Toisella selaimella tai tietokoneella on oma laatikko (alkaen kuudesta oletustyökalusta), yksityinen ikkuna unohtaa sen sulkeutuessaan, ja tämän sivuston tietojen tyhjentäminen selaimen asetuksista poistaa sen.

Jos selain ei tallenna sitä (tallennus on pois päältä tai täynnä), tilarivi kertoo: ”Työkalulaatikkoa ei voitu säilyttää tässä selaimessa (tallennus on pois päältä tai täynnä). Vie se säilyttääksesi sen.”

:::safari
Safari voi tyhjentää verkkosivuston tallennetut tiedot, kun et ole käyttänyt sivustoa hetkeen. Vie laatikkosi silloin tällöin, jotta voit tuoda sen myöhemmin uudelleen.
:::

**Vie laatikkosi varmuuskopiona**, erityisesti kun olet rakentanut työkaluja, joihin luotat.

## Jaa laatikko toimistosi kanssa

1. Aseta työkalut kerran.
2. Valitse {{ui:Vie}}. Saat tiedoston ”MarkupCraft tool chest.json”.
3. Laita tiedosto paikkaan, jossa toimisto säilyttää standardinsa, tai lähetä se eteenpäin.
4. Muut valitsevat {{ui:Tuo}} omassa {{ui:Työkalut}}-välilehdessään ja valitsevat tiedoston.

Tulos: ”Tuotu 12 työkalua tiedostosta ”MarkupCraft tool chest.json”.” Saman laatikon työkalut korvaavat vanhemmat kopionsa, joten päivitetyn toimistolaatikon tuominen päivittää nämä työkalut eikä kaksinkertaista niitä; uudet työkalut lisätään. Laatikkoon mahtuu enintään 500 työkalua.

MarkupCraft tarkistaa jokaisen arvon tuodussa tiedostossa ja ohittaa ne, joita se ei voi käyttää (”2 ohitettu (ei käytettävissä)”). Tiedostot, jotka eivät ole laatikko, hylätään: ”Tämä tiedosto ei ole MarkupCraft-työkalulaatikko.” tai ”Tämä tiedosto ei ole työkalulaatikko (se ei ole JSON).”

Muiden merkintäohjelmien työkalulaatikkotiedostoja ei voi tuoda.
