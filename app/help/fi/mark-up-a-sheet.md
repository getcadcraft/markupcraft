---
title: Merkitse arkki
summary: Piirrä revisiopilvia, selitteitä, tekstiruutuja, nuolia, muotoja, kynävetoja ja korostuksia sekä aseta niiden väri ja viiva ennen piirtämistä tai sen jälkeen.
keywords: merkintä, punakynä, pilvi, revisiopilvi, selite, viitenuoli, tekstiruutu, nuoli, viiva, suorakulmio, ellipsi, ympyrä, murtoviiva, monikulmio, kynä, vapaa piirto, muste, korostuskynä, väri, viivan paksuus
from: 9d6de0ac
---

Jokainen työkalu toimii samalla tavalla: valitse se, piirrä arkille, ja uusi merkintä valitaan, jotta näet sen kohdassa {{ui:Properties}}. Työkalu pysyy päällä seuraavaa merkintää varten. Tilarivi kertoo aina, mitä työkalu odottaa seuraavaksi.

:::touch
Kosketusnäytöllä piirrä yhdellä sormella. Toinen sormi peruuttaa ensimmäisen sormen aloittaman vedon ja nipistää tai panoroi sen sijaan, joten et jätä merkkiä vahingossa zoomatessasi. Lisää kohdassa [Tarkastus iPadilla tai kosketusnäytöllä](topic:review-on-a-tablet).
:::

## Revisiopilvet

**Laatikkopilvi:** valitse {{ui:Cloud}} ({{key:C}}) ja vedä laatikko. Pidä {{key:Shift}} painettuna, jotta siitä tulee neliö.

**Vapaa pilvi** epäsäännöllisen muodon ympärille:

1. Valitse {{ui:Free cloud}} ({{key:Shift+C}}).
2. Napsauta alueen jokaista kulmaa.
3. Lopeta kaksoisnapsautuksella, {{key:Enter}}-näppäimellä tai oikealla napsautuksella. Kosketuksella kaksoisnapautus.

Pisteitä napsauttaessasi {{key:Backspace}} poistaa viimeisen pisteen ja {{key:Esc}} peruuttaa koko muodon. Pidä {{key:Shift}} painettuna, jotta seuraava sivu pysyy 45 asteen kerrannaisena. Vapaa pilvi tarvitsee vähintään kolme pistettä.

Kaaret pullistuvat aina ulospäin, ja niiden koko seuraa viivan paksuutta: paksumpi viiva antaa isommat kaaret.

## Selitteet

Selite on tekstiruutu, jonka viitenuoli osoittaa johonkin kohtaan.

1. Valitse {{ui:Callout}} ({{key:K}}).
2. Paina kohdassa, jonka haluat selittää, ja vedä kohtaan, johon teksti menee. Päästä irti.
   Jos vain napsautat vetämättä, laatikko sijoittuu kohdan ylä- ja oikealle puolelle.
3. Kirjoita teksti. Laatikko kasvaa alaspäin rivien rivittyessä.
4. Napsauta laatikon ulkopuolelle tai paina {{key:Mod+Enter}}, kun olet valmis. {{key:Esc}} hylkää selitteen.

Jos lopetat kirjoittamatta mitään, selitettä ei lisätä (”Mitään ei kirjoitettu, joten selitettä ei lisätty.”).

Piirtämisen jälkeen valitse selite, jolloin voit siirtää laatikkoa, vetää viitenuolen kärkeä tai sen taitekohtaa (kaksi timanttikahvaa) tai muuttaa laatikon kokoa.

## Tekstiruudut

1. Valitse {{ui:Text}} ({{key:T}}).
2. Napsauta kohtaa, josta teksti alkaa (saat sopivan levyisen laatikon), tai vedä laatikko haluamaasi kokoon.
3. Kirjoita, ja napsauta sitten ulkopuolelle tai paina {{key:Mod+Enter}}.

Tekstillä ei ole oletuksena reunaa. Saadaksesi reunan, nosta arvoa kohdassa {{ui:Line width}} paneelissa {{ui:Properties}}. Taustaa varten rastita {{ui:Fill}}.

Sanojen muuttaminen myöhemmin: kun {{ui:Select}} on päällä, kaksoisnapsauta tekstiä tai valitse se ja paina {{key:Enter}}, tai valitse {{ui:Edit on the sheet}} paneelista {{ui:Properties}}. Voit muokata tekstiä myös paneelin {{ui:Properties}} {{ui:Text}}-kentässä.

## Nuolet ja viivat

1. Valitse {{ui:Arrow}} ({{key:A}}) tai {{ui:Line}} ({{key:L}}).
2. Vedä alusta loppuun. Tai napsauta alkua, päästä irti ja napsauta loppua.
3. Pidä {{key:Shift}} painettuna, jotta viiva pysyy 45 asteen kerrannaisena.

Nuolenkärki on siinä päässä, jossa lopetit piirtämisen.

## Suorakulmiot, ellipsit, murtoviivat ja monikulmiot

- {{ui:Rectangle}} ({{key:R}}) ja {{ui:Ellipse}} ({{key:E}}): vedä laatikko. {{key:Shift}} tekee neliön tai ympyrän. Pelkkä napsautus ilman vetämistä ei piirrä mitään, ja tilarivi kehottaa vetämään.
- {{ui:Polyline}} ({{key:Y}}) ja {{ui:Polygon}} ({{key:G}}): napsauta pisteitä ja lopeta kaksoisnapsautuksella, {{key:Enter}}-näppäimellä tai oikealla napsautuksella (kosketuksella kaksoisnapautus). {{key:Backspace}} poistaa viimeisen pisteen. Monikulmio sulkeutuu itsestään ja tarvitsee kolme pistettä; murtoviiva tarvitsee kaksi.

## Kynä ja korostuskynä

- {{ui:Pen}} ({{key:P}}): vedä vapaasti piirtääksesi. Veto tasoittuu hieman, kun päästät irti.
- {{ui:Highlight}} ({{key:I}}): sama, mutta leveä, läpinäkyvä keltainen veto, joka värjää piirustuksen alla olevaa eikä peitä sitä.
- Pidä {{key:Shift}} painettuna piirtäessäsi, jolloin saat yhden suoran vedon aloituskohdasta.

Korostuskynä on vapaa veto. Se ei kiinnity PDF-tiedoston tekstiin.

## Väri, viiva ja täyttö

Kahdella tavalla:

- **Ennen piirtämistä:** valitse työkalu. Kun mitään ei ole valittuna, {{ui:Properties}} näyttää ”<työkalu>-työkalun” asetukset: {{ui:Color}}, {{ui:Line width}} (pisteinä), {{ui:Fill}} ja {{ui:Fill opacity}} suljetuille muodoille, {{ui:Opacity}} sekä {{ui:Text size}} tekstille. Jokainen uusi merkintä tätä tyyppiä käyttää niitä, ja MarkupCraft muistaa ne tässä selaimessa.
- **Piirtämisen jälkeen:** valitse yksi tai useampi merkintä ja muuta samoja asetuksia kohdassa ”Tyyli”. Kun useita on valittuna, muutos koskee kaikkia yhdellä kertaa.

Oletukset: punaiset merkinnät, keltainen korostuskynä, siniset mittaukset, oranssit lukumäärät ja leimat väritettynä merkityksen mukaan.

Tallennetut ulkoasut, joita käytät joka päivä, kuuluvat työkalulaatikkoon: katso [Työkalulaatikko](topic:tool-chest).

## Aihe ja kommentti

Jokaisella merkinnällä on myös {{ui:Subject}} (lyhyt nimi, kuten ”Pilvi” tai ”RFI”, joka näkyy merkintäluettelossa ja muissa PDF-katseluohjelmissa) sekä {{ui:Comment}} (pidempiä muistiinpanoja). Täytä ne paneelissa {{ui:Properties}}. Merkintää koskevaa keskustelua varten käytä vastauksia: katso [Tilat ja vastaukset](topic:statuses-and-replies).

## Seuraavaksi

- [Valitse, siirrä ja muuta merkintöjä](topic:select-and-edit)
- [Leimat ja muistiinpanot](topic:stamps-and-notes)
- [Kaikki merkintätyypit](topic:markup-types)
