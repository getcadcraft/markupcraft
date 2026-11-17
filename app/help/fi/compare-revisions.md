---
title: Vertaa kahta revisiota
summary: Peitä vanha ja uusi versio arkista kahdella värillä, kohdista ne kahdella pisteellä ja pilvitä muuttuneet kohdat.
keywords: vertaa, peite, peitä sivut, revisio, ero, erot, muutokset, vanha uusi, kohdistus, tarkistus, havainto, tiedote
from: 62f5d1c5
---

Vertaa asettaa kaksi arkkia päällekkäin. Vain vanhalla arkilla olevat viivat näkyvät punaisina, vain uudella arkilla olevat viivat sinisinä ja molemmilla olevat viivat vaimeana harmaana. Värit on nimetty arkin alla olevassa selitteessä: ”Vain vanhalla arkilla”, ”Vain uudella arkilla” ja ”Molemmilla”.

## Vertaa kahta arkkia

1. Avaa molemmat versiot. Ne voivat olla saman PDF-tiedoston sivuja tai eri PDF-tiedostojen sivuja. Avaa ne yhdessä sarjana (katso [Työskentely useiden tiedostojen kanssa](topic:several-files)).
2. Valitse oikealla oleva {{ui:Vertaa}}-välilehti.
3. Valitse {{ui:Vanha arkki}} ja {{ui:Uusi arkki}}. Uusi arkki on aluksi se, jolla olet. Kun useita tiedostoja on auki, kunkin arkin tiedoston nimi näkyy arkin nimen perässä.
4. Valitse {{ui:Vertaa}}.

Tulos: MarkupCraft näyttää uuden arkin, johon vanha on sekoitettu. Selite ilmestyy, ja välilehdessä lukee: ”Verrataan <old> (vanha) ja <new> (uusi). Uuden arkin merkinnät pysyvät muokattavina.”

## Häivytä vanhan ja uuden välillä

Vedä {{ui:Vanha ja uusi}}-liukusäädintä. Täysin vasemmalla näkyy vain vanha arkki, täysin oikealla vain uusi ja keskellä molemmat. Liu'uttaminen edestakaisin on usein nopein tapa nähdä pieni muutos.

## Kohdista arkit

Jos kaksi versiota on tulostettu eri marginaalilla, koolla tai kierrolla, kaikki näyttää muuttuneelta. Korjaa tämä näin:

**Kahdella pisteellä (paras tapa):**

1. Valitse {{ui:Kohdista kahdella pisteellä}}. Näkymä näyttää vain vanhan arkin.
2. Napsauta terävää piirrettä, jonka löydät molemmilta arkeilta, kuten pilarin ruudukon leikkauspistettä. Välilehti laskee vaiheet (”1 / 4”).
3. Napsauta toista piirrettä kaukana ensimmäisestä, esimerkiksi vastakkaista ruudukkokulmaa.
4. Näkymä vaihtuu uuteen arkkiin. Napsauta ensimmäistä piirrettä uudelleen.
5. Napsauta toista piirrettä uudelleen.

Tulos: ”Kohdistettu: vanha arkki skaalattu 100.00 %, käännetty 0.00°. Hienosäädä siirtämällä.” Vanha arkki siirretään, skaalataan ja käännetään sopimaan. {{key:Esc}} peruuttaa valinnan kesken. Zoomaa lähemmäs jokaiseen piirteeseen ennen napsauttamista, niin sovitus on tarkka.

**Siirtämällä:** siirrä vanhaa arkkia kohdan ”Kohdista” alla olevilla neljällä nuolipainikkeella. Valitse askel (0.25, 1, 5 tai 20 pt; 72 pt on yksi tuuma paperilla). Välilehti kertoo, kuinka paljon arkki on siirtynyt.

{{ui:Palauta}} poistaa kohdistuksen ja siirrot.

## Vain muuttuneet viivat

Valitse kohdistuspainikkeiden alta {{ui:Muuttuneet viivat}}, älä {{ui:Kuvapäällys}}. MarkupCraft vertaa silloin kahden arkin omia viivoja, ei niiden kuvia. Uusi arkki näkyy sellaisenaan, vain vanhalla arkilla olevat viivat ovat punaisina ja vain uudella arkilla olevat sinisinä. Viiva, joka vain lyheni, näyttää vain puuttuvan osan. Kohdista arkit ensin (katso yllä), sillä vertailu käyttää kohdistusta. Arkki, joka vain siirtyi, ei näytä muutoksia. Tilarivi kertoo, kuinka paljon muuttui.

Tämä toimii PDF-tiedostoille, jotka on tulostettu CAD-ohjelmasta ja joiden piirustus koostuu viivoista. Skannatuissa arkeissa ei ole viivoja vertailtavaksi, joten niille käytä kuvapäällystä. Fontilla kirjoitettua tekstiä (ei piirrettynä viivoina) ei vertailla.

## Merkitse muutokset

Vertailun aikana olet uudella arkilla, ja jokainen työkalu toimii. Piirrä pilviä muutosten ympärille niitä löytäessäsi. Ne kuuluvat uudelle arkille ja jäävät paikoilleen, kun lopetat vertailun.

{{ui:Pilvitä muutokset}} tekee tämän puolestasi. Se ryhmittelee lähekkäin olevat muuttuneet viivat ja piirtää revisiopilven kunkin ryhmän ympärille uudelle arkille. Kommenttina on ”Muutettu verrattuna arkkiin <old sheet>”. Yksi {{key:Mod+Z}} poistaa ne kaikki. Poista ne, joita et tarvitse.

## Vertaa koko sarjaa

Kun uusi versio tulee omana PDF-tiedostonaan, avaa molemmat PDF-tiedostot ja valitse {{ui:Vertaa kahta sarjaa}} {{ui:Vertaa}}-välilehdeltä. Valitse vanha tiedosto ja uusi tiedosto ja valitse sitten {{ui:Vertaa sarjoja}}. Arkit parista numeron mukaan (kuten [slip-sheeting](topic:slip-sheet-a-revised-set)-osiossa). Ne verrataan viivojen perusteella, ja luettelossa on eniten muuttunut ensin. Valitse luettelosta arkki, jos haluat verrata sen paria kohdalla {{ui:Muuttuneet viivat}}.

{{ui:Pilvitä kaikki muutokset}} pilvittää jokaisen muuttuneiden viivojen ryhmän jokaisella muuttuneella arkilla yhdellä askeleella, jonka voi kumota. Sarjavertailu ei kohdista arkkeja ensin. Arkki, joka siirtyi sivulla, näkyy siksi muuttuneena. Vertaa sitä paria erikseen ja käytä {{ui:Kohdista kahdella pisteellä}}-toimintoa.

## Lopeta vertailu

Valitse {{ui:Lopeta vertailu}} tai siirry toiselle arkille. Kohdistus muistetaan samalle arkkiparille, kunnes suljet sarjan.

## Hyvä tietää

- Vertailu toimii piirretyn pohjalta pikseli kerrallaan. Se ei tiedä, että viiva siirtyi. Se näyttää vanhan sijainnin yhdellä värillä ja uuden toisella.
- Uudelleen rivittynyt teksti, muuttunut päivämäärä piirustusotsikossa tai eri tulostustyyli näkyvät myös muutoksina.
- Skannattu arkki verrattuna tulostettuun on kohinainen, koska skannaus sumentaa ja siirtää viivoja.
- Fontilla kirjoitetun tekstin vertailu ja muutosluettelo eivät ole vielä käytettävissä.
