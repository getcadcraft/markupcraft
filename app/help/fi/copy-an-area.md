---
title: Kopioi sivun alue tai peite
summary: Kopioi osa arkista suorakulmiolla, ellipsillä tai vapaamuotoisella muodolla ja liitä se toiseen arkkiin, CadCraftiin, BimCraftiin, DetailCraftiin tai mihin tahansa ohjelmaan oikeassa koossa. Kopioi se läpinäkyvänä peitteenä ja kohdista kuva kahdella pisteellä.
keywords: kopioi alue, alue, rajaa, leikkaa kuva, kuvakaappaus, leikepöytä, alue, suorakulmio, ellipsi, ympyrä, vapaamuotoinen, lasso, kuva, png, peite, läpinäkyvä, sävy, peittävyys, liitä, todellinen koko, mittakaava, kohdista, kaksi pistettä, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Valitse {{ui:Lisää}} › {{ui:Kopioi sivun alue…}}. Arkin päälle aukeaa palkki.

## Valitse alue

Valitse palkista {{ui:Suorakulmio}}, {{ui:Ellipsi}} tai {{ui:Vapaamuotoinen}} ja vedä arkilla:

- **Suorakulmio:** vedä laatikko kopioitavan osan ympärille.
- **Ellipsi:** vedä laatikko. Sen sisällä oleva ellipsi kopioidaan, ja sen ulkopuoliset kulmat ovat läpinäkyviä.
- **Vapaamuotoinen:** piirrä kopioitavan osan ympärille. Muoto sulkeutuu itsestään. Sen ulkopuoli on läpinäkyvä.

Vedä uudelleen aloittaaksesi alusta, tai paina {{key:Esc}}.

## Kopioi

- {{ui:Sisällytä merkinnät}} kopioi merkintäsi sivun mukana. Poista rasti, jos haluat puhtaan piirustuksen.
- {{ui:Tarkkuus}}: {{ui:Kuten näytöllä}}, 72, 150 tai 300 dpi. Kuva pidetään alle 3 MB:ssa. Jos suuri alue suurella tarkkuudella ylittäisi tämän, tarkkuus alennetaan, ja tilarivi kertoo mihin.
- {{ui:Kopioi}} (tai {{key:Mod+C}} tai {{key:Enter}}) laittaa alueen leikepöydälle PNG-kuvana. Se liitetään Wordiin, sähköpostiin, muihin PDF-ohjelmiin ja piirustusohjelmiin.
- {{ui:Tallenna PNG-tiedostona}} lataa kuvan tiedostona sen sijaan. Käytä tätä, jos ohjelma pudottaa läpinäkyvät osat liitettäessä.

## Kopioi peitteenä

{{ui:Kopioi peitteenä}} tekee myös valkoisen paperin läpinäkyväksi, jolloin jäljelle jää vain viivat. {{ui:Väri}} antaa jokaiselle viivalle yhden värin (punainen, sininen, vihreä, oranssi tai violetti), jotta peite erottuu sen alla olevasta piirustuksesta. {{ui:Omat värit}} säilyttää alkuperäiset värit. {{ui:Voimakkuus}} on se, kuinka vahvana peite alkaa, kun se liitetään omissa sovelluksissa. Oletus on 50 %, ellei muuta.

## Liitä se

**MarkupCraftissa** {{key:Mod+V}} liittää alueen millä tahansa arkilla kuvamerkintänä osoittimen kohtaan. Se tulee sisään omassa koossaan:

- paperilla samankokoisena kuin alkuperäisellä arkilla;
- kun molemmilla arkeilla on mittakaava, samankokoisena piirustuksessa. Esimerkiksi 1:50-arkin alue tulee 1:100-arkille puolet paperikoostaan.

Peite alkaa voimakkuudellaan. Muuta sitä kohdasta {{ui:Peittävyys}} kohdassa {{ui:Ominaisuudet}}. Siirrä, muuta kokoa, lukitse ja poista sitä kuten mitä tahansa kuvaa. Rastita {{ui:Litistä sivuun tallennettaessa}}, jos haluat piirtää sen sivuun.

**CadCraftissa, BimCraftissa ja DetailCraftissa** kopiolla on myös tieto koosta. Liittäminen tulee siksi piirustuksen todellisessa koossa, kun arkilla oli mittakaava, ja pyytää mittakaavaa, kun sitä ei ollut. Katso kunkin sovelluksen ohje kuvista.

## Kohdista kuva kahdella pisteellä

Valitse yksi kuva tai peite ja valitse {{ui:Lisää}} › {{ui:Kohdista kuva kahdella pisteellä}}:

1. Napsauta pistettä kuvassa.
2. Napsauta kohtaa, johon se menee.
3. Napsauta toista pistettä kuvassa, kaukana ensimmäisestä.
4. Napsauta kohtaa, johon se menee.

Kuva skaalataan, siirretään ja käännetään niin, että molemmat pisteet osuvat napsautettuihin kohtiin. {{key:Esc}} pysäyttää toiminnon, ja {{key:Mod+Z}} kumoaa sen yhdellä askeleella.

## Hyvä tietää

- Koko kulkee kopion mukana vain meidän sovellustemme välillä samalla sivustolla, ja vain kopiolle, joka on tehty viimeisten tuntien aikana. Muu ohjelma saa tavallisen kuvan.
- Jos selain ei anna MarkupCraftin käyttää järjestelmän leikepöytää, tilarivi kertoo siitä. Liittäminen omissa sovelluksissa toimii silti, ja {{ui:Tallenna PNG-tiedostona}} toimii muille ohjelmille.
- Kohdistus kääntää kuvan piirtämällä sen pikselit uudelleen, joten käännetty kuva on hieman pehmeämpi kuin alkuperäinen.
