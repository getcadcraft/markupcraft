---
title: Käytä MarkupCraft-sovellusta tekoälyavustajan kanssa
summary: Anna oman tekoälyavustajasi tai skriptisi luetella arkkisarjan merkinnät, lisätä yksinkertaisia, asettaa niiden tilat, vastata ja viedä luettelo: oikeudet, yhdistäminen CadCraft Studio -sovelluksen kautta ja toimintaloki.
keywords: tekoäly, avustaja, agentti, mcp, Model Context Protocol, skripti, automaatio, merkinnät, tarkastus, oikeudet, yhteyden katkaisu, toiminta
from: 095f2977
---

## Mitä opit

Miten annat tekoälyavustajan (tai itse kirjoittamasi skriptin) työskennellä MarkupCraft-sovelluksen kanssa ja miten päätät, mihin se saa koskea.

MarkupCraft-sovelluksessa ei ole **omaa tekoälyä**, eikä se lähetä mitään minnekään. Tuot avustajan itse: mikä tahansa ohjelma, joka puhuu Model Context Protocol -protokollaa (MCP). MarkupCraft antaa sille vain työkaluja, ja valitset, mitkä.

## Ota käyttöön

1. Avaa {{ui:Asetukset}} (sovelluspalkin hammasratas tai {{key:Mod+,}}) ja siirry {{ui:MarkupCraft}}-välilehdelle.
2. Kohdassa {{ui:Avustajat}} ruksaa **Anna tekoälyavustajien ja skriptien käyttää MarkupCraft-sovellusta**. Se on pois päältä, kunnes teet niin.
3. Valitse, mitä se saa tehdä: **Lue** on ruksattu alussa; ruksaa **Muokkaus**, **Tallenna** tai **Vie** vain silloin, kun tarvitset niitä.

Oikeuksien ulkopuoliset työkalut eivät ole avustajan käytettävissä, ja jos se pyytää sellaista silti, MarkupCraft kieltäytyy ja kirjaa sen toimintalokiin. Kytkimen kääntäminen pois päältä katkaisee kaikki yhteydet kerralla; {{ui:Palauta MarkupCraft-asetukset}} kytkee sen myös pois.

## Yhdistä avustaja

Avustajat yhdistyvät tietokoneellasi olevan CadCraft Studio -sovelluksen kautta: Studio käynnistää pienen palvelimen, johon vain tämä tietokone pääsee käsiksi, ja sitä suojaa tunnus, jonka Studio luo joka käynnistyksellä. Valitse {{ui:Yhdistä avustaja}} CadCraft Studio -sovelluksessa ja kopioi osoite ja tunnus avustajaasi (Studio näyttää tarkat asetukset liitettäväksi). Älä koskaan jaa tunnusta.

:::note
Selainvälilehti ei voi avata yhteyttä avustajalle: selainsovelluksissa kytkimellä ei ole vaikutusta, ennen kuin käytät CadCraft Studio -sovellusta tietokoneellasi.
:::

## Hallinta säilyy sinulla

- **Jokainen muutos on yksi kumoamisvaihe**, ja se on nimetty avustajan nimellä (esimerkiksi ”Avustaja: lisää cloudrect”). {{key:Mod+Z}} kumoaa avustajan viimeisimmän muutoksen kokonaisuudessaan.
- **Yhteyden muodostuminen näkyy.** Sovelluspalkin painike nimeää avustajan, kun se on yhdistetty; napsauta sitä nähdäksesi, mitä se saa tehdä, tai **katkaistaksesi yhteyden**.
- **Toiminta.** {{ui:Asetukset}} › {{ui:MarkupCraft}} › {{ui:Avustajat}} › {{ui:Toiminta}} luettelee jokaisen kutsun: milloin, mikä työkalu, tehty vai hylätty. {{ui:Tallenna loki}} tallentaa kopion.

## Mitä avustaja voi pyytää

| Työkalu | Oikeus | Mitä se tekee |
|---|---|---|
| `app_info`, `sheets_list` | Lue | Avoinna olevat arkkisarjat, niiden arkit ja merkintöjen määrä kussakin |
| `markups_list` | Lue | Merkinnät tyyppinsä, arkkinsa, tekstinsä, kommenttinsa, mittansa, tilansa, tekijänsä ja vastauksineen, suodatettuna arkin, tilan, tyypin tai tekijän mukaan |
| `markup_add` | Muokkaus | Lisää arkille suorakulmion, pilven, ellipsin, tekstikentän, muistilapun, viivan tai nuolen |
| `markup_status`, `markup_reply` | Muokkaus | Asettaa merkinnän tilan (kirjataan sen ketjuun, avustajan allekirjoittamana); lisää kommentin ketjuun |
| `markups_export` | Vie | {{ui:Merkinnät}}-luettelon oma CSV tai BCF siitä, mitä luettelo näyttää (suodattimet asetettuina); CadCraft Studio -sovelluksessa se voi kirjoittaa tiedoston sallimaasi kansioon |
| `tasks_list` | Lue | Merkinnät, jotka ovat tehtäviä: vastuuhenkilö (henkilö tai avustaja), eräpäivä, tila, linkki ja miten se suljettiin. `assignee: "assistant"` luettelee avustajan odottavat työt |
| `task_set`, `task_clear` | Muokkaus | Tekee merkinnästä tehtävän tai muuttaa sitä (otsikko, vastuuhenkilö, eräpäivä, tila, linkki); poistaa tehtävän merkinnästä |
| `tasks_check` | Muokkaus | Sulkee tehtävät, joiden linkitetty piirustusalue tai mallielementti todella muuttui; välittää elementtien tilat, jotka luit toisesta sovelluksesta |
| `revisions_changes` | Lue | Selkeä luettelo siitä, mikä muuttui kahden avoinna olevan arkkisarjan välillä, jotta sen voi muotoilla omin sanoin |
| `pins_list`, `decision_add` | Lue, Muokkaus | Äänimuistiinpanot (kesto, kuka, milloin, kuvateksti; ei koskaan ääntä, ei litteraattia) ja päätökset; kiinnitä päätös ja korvaa aiempi |
| `redline_export`, `redline_answer` | Vie, Muokkaus | Kirjoittaa redline-tiedoston piirtäjälle; soveltaa piirtäjän vastaukset |

Avustajan lisäämä merkintä nimeää tekijäkseen avustajaohjelman itselleen antaman nimen, jota seuraa ”(avustaja)”, tai ”(avustaja: <tarkastajan nimi>)”, kun olet asettanut tarkastajan nimen. Sen tilamuutokset ja vastaukset allekirjoitetaan samalla tavalla. Jokainen on yksi kumoamisvaihe. Merkityn PDF-tiedoston tallennus tehdään edelleen käsin: käytä {{ui:Tallenna}} kuten tavallisesti.

Avaamatta MarkupCraft-sovellusta CadCraft MCP -palvelin luettelee PDF-tiedoston merkinnät kansiosta, jonka nimeät (`markups_list`), ja `cadcraft info Set.pdf` tulostaa ne komentoriviltä.

## Jos jokin ei toimi

- **Avustaja ei näe MarkupCraft-työkaluja:** tarkista, että kytkin on päällä tässä ikkunassa ja että ikkuna on auki CadCraft Studio -sovelluksessa.
- **”vaatii muokkausoikeuden”:** ruksaa **Muokkaus** kohdasta {{ui:Avustajat}} ja pyydä uudelleen.
- **”401”- tai ”tunnus”-virheet:** tunnus vaihtui (Studio käynnistettiin uudelleen tai {{ui:Uusi tunnus}}). Kopioi uusi tunnus avustajan asetuksiin.

## Katso myös

- [Reseptejä tekoälyavustajille](common:assistants-recipes): työesimerkkejä, joista kukin käyttää omia työkalujaan.
