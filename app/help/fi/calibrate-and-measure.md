---
title: Kalibroi arkki ja mittaa
summary: Aseta kunkin arkin mittakaava esiasetuksesta tai tunnetusta mitasta. Mittaa sitten pituuksia, pinta-aloja ja kehiä sekä lukumääriä.
keywords: kalibrointi, mittakaava, aseta mittakaava, mittaus, pituus, etäisyys, mitoitus, pinta-ala, neliöjalat, kehä, lukumäärä, määrälaskenta, määrä, viivoitin, laskenta, lasku, plus, murtoluku
from: 49a25c6d
---

Pituudet ja pinta-alat vaativat tiedon arkin mittakaavasta. MarkupCraft pitää mittakaavan **arkkikohtaisesti**, joten kalibroi jokainen arkki, jota mittaat. Lukumäärät eivät tarvitse mittakaavaa.

Tilarivillä näkyy nykyisen arkin mittakaava tai ”Ei kalibroitu”.

## Valitse mittakaava luettelosta

Käytä tätä, kun PDF on täysikokoinen (24 × 36 arkki, joka tulostuu kokoon 24 × 36) ja piirustus ilmoittaa mittakaavansa.

1. Napsauta tilarivin mittakaavapainiketta (”Ei kalibroitu”). Ruutu ”Arkin mittakaava” aukeaa.
2. Valitse kohdasta {{ui:Mittakaava}} mittakaava: arkkitehtuurinen (1/32" = 1'-0" – 3" = 1'-0"), tekninen (1" = 10' – 1" = 100') tai metrinen (1:1 – 1:1000).
3. Valitse {{ui:Aseta mittakaava}}.

Tulos: tilarivillä näkyy mittakaava, esimerkiksi `1/4" = 1'-0"`. Arkkitehtuurimittakaavoissa pituudet näytetään jalkoina ja tuumina, teknisissä mittakaavoissa desimaalijalkoina ja metrisissä mittakaavoissa enintään 1:50 millimetreinä ja alkaen 1:100 metreinä.

:::warning
Esiasetus on oikea vain, jos PDF-tiedostoa ei ole pienennetty. Puolikokoinen aineisto tai arkki, joka oli sovitettu sivulle tehdessä, mitataan esiasetuksella väärin. Kalibroi silloin tunnetusta mitasta ja tarkista joka tapauksessa yksi mitta.
:::

## Kalibroi tunnetusta mitasta

Käytä tätä puolikokoisille aineistoille, skannatuille arkeille, poikkeuksellisille mittakaaville tai esiasetuksen tarkistamiseen.

1. Etsi luotettava pitkä mitta tai mittakaavapalkki.
2. Valitse {{ui:Kalibroi}} ryhmästä {{ui:Mittaa}} (tai valitse {{ui:Valitse kaksi pistettä}} ”Arkin mittakaava” -ruudusta).
3. Napsauta mitan toista päätä ja sitten toista. Voit myös vetää päästä päähän. Zoomaa ensin lähemmäs tarkkuuden vuoksi. {{key:Shift}} pitää viivan 45 asteen askelin.
4. Ruutu kertoo, kuinka kaukana pisteet ovat toisistaan paperilla, ja kysyy ”Kuinka kaukana ne todellisuudessa ovat?”. Kirjoita {{ui:Todellinen etäisyys}}, esimerkiksi `24'-0"`, `12' 6 1/2"`, `7.2 m` tai `900 mm`.
5. Valitse kohdasta {{ui:Näytä pituudet yksikössä}}, miten pituudet näytetään: {{ui:Jalat ja tuumat}}, {{ui:Desimaalijalat}}, {{ui:Tuumat}}, {{ui:Metrit}} tai {{ui:Millimetrit}}.
6. Valitse {{ui:Aseta mittakaava}}.

Tulos: tilarivillä lukee ”Kalibroitu: 24'-0" / 1.00 in” (todellinen pituus ja paperin pituus), ja työkalu, jolla aioit mitata, palaa käyttöön. Kaikki tavat kirjoittaa pituus ovat kohdassa [Yksiköt ja pituudet](topic:units-and-scales).

Todellinen etäisyys voi olla myös pieni laskutoimitus, kuten `12'6"+3/4"`, `(24'-0")/3` tai `2*450mm`. Käytä merkkejä `+ - * /` ja sulkuja. Luku ilman yksikköä lasketaan yksikössä, joka on valittu kohdasta {{ui:Näytä pituudet yksikössä}} (jalat, jos valinta on {{ui:Jalat ja tuumat}}). {{ui:Aseta mittakaava}} käyttää laskun tulosta.

Jos MarkupCraft ei osaa lukea kirjoittamaasi, ruutu kertoo sen: ”Tämä ei ole pituus, jonka MarkupCraft ymmärtää. Kokeile 24'-0", 12' 6 1/2", 7.2 m tai 900 mm.” Laskelma, jota se ei pysty ratkaisemaan, kertoo syyn ja paikan, esimerkiksi ”Sulku ei ole suljettu (merkki 5).”

## Mittaa pituus

1. Valitse {{ui:Pituus}} ({{key:M}}).
2. Napsauta alkua ja sitten loppua. Voit myös vetää alusta loppuun. {{key:Shift}} pitää viivan 45 asteen askelin.

Tulos: mittaviiva päistään ja pituus kirjoitettuna siihen. Tilarivi toistaa pituuden (”Pituus: 12'-6 1/2" (1/4" = 1'-0")”), ja {{ui:Ominaisuudet}} näyttää sen kohdassa {{ui:Pituus}}. Jalat ja tuumat pyöristetään lähimpään 1/16 tuumaan.

Jos arkilla ei vielä ole mittakaavaa, {{ui:Pituus}}-valinta vaihtaa {{ui:Kalibroi}}-työkaluun, ja tilarivi selittää: ”Kalibroi tämä arkki ensin: valitse kaksi pistettä, joiden etäisyys tunnetaan, tai valitse sen mittakaava. Mittaa sitten.” Kun asetat mittakaavan, {{ui:Pituus}} palaa.

## Piirrä mittakaavassa

Kalibroidulla arkilla voit kirjoittaa todellisia pituuksia piirtäessäsi {{ui:Viiva}}-, {{ui:Nuoli}}-, {{ui:Pituus}}-, {{ui:Murtoviiva}}-, {{ui:Monikulmio}}-, {{ui:Vapaa pilvi}}-, {{ui:Pinta-ala}}- tai tilamerkinnän:

1. Napsauta ensimmäistä pistettä.
2. Osoita, mihin suuntaan seuraava jana menee, ja kirjoita sen pituus, esimerkiksi `16` (arkin yksikössä), `12'6"` tai `3.5 m`. Osoittimen viereen aukeaa ruutu, kun kirjoitat.
3. Paina {{key:Enter}}. Piste asettuu niin kauas osoittimen suuntaan.

Voit asettaa suunnan tarkasti lisäämällä `<` ja kulman asteina: `8 < 90` menee 8 jalkaa suoraan ylös, `4<0` oikealle ja `10 < 225` alas ja vasemmalle sivun katselusuunnassa (myös käännetyt sivut mukaan lukien). Kirjoita pituudet seuraaville kulmille ja viimeistele muoto tavalliseen tapaan. {{key:Esc}} sulkee ruudun asettamatta pistettä.

## Mittaa kulma

1. Valitse {{ui:Kulma}} ({{key:X}}).
2. Napsauta yhden varren päätä, sitten kulmapistettä ja sitten toisen varren päätä.

Tulos: kaksi vartta, pieni kaari kulmassa ja kulma asteina kymmenesosan tarkkuudella (0° – 180°). Kulma ei tarvitse mittakaavaa. {{ui:Ominaisuudet}} näyttää sen kohdassa {{ui:Kulma}}, ja luettelo, CSV ja BCF sisältävät sen.

{{ui:Kaari}} ({{key:O}}) näyttää kalibroidulla arkilla myös pituutensa kaarta pitkin kohdassa {{ui:Ominaisuudet}}.

## Mittaa pinta-ala ja kehä

1. Valitse {{ui:Pinta-ala}} ({{key:Q}}).
2. Napsauta huoneen tai alueen jokaista kulmaa.
3. Lopeta kaksoisnapsautuksella, {{key:Enter}}-näppäimellä tai oikealla napsautuksella (kosketusnäytöllä kaksoisnapautuksella). {{key:Backspace}} poistaa viimeisimmän kulman.

Tulos: varjostettu ääriviiva, jonka keskellä on pinta-ala ja ”P” kehän kanssa, esimerkiksi ”128.00 sq ft” ja ”P 48'-0"”. Jalkamittakaavoilla tulos on neliöjalkoina, tuumilla neliötuumina, metreillä neliömetreinä ja millimetreillä neliömillimetreinä. Pinta-alaan tarvitaan vähintään kolme kulmaa.

### Aukot

Jos jätät pois pilarin, kuilun tai sisäpihan, valitse pinta-ala ja valitse kohdasta {{ui:Ominaisuudet}} {{ui:Lisää aukko}}. Napsauta aukon kulmia pinta-alan sisällä ja viimeistele kuten pinta-alassa. Aukko jää avoimeksi (varjostamattomaksi), sen pinta-ala vähennetään ja sen reunat lisätään kehään. Esimerkiksi 16' × 8' huone, jossa on 4' × 4' aukko, näyttää ”112.00 sq ft” ja ”P 64'-0"”. Lisää niin monta aukkoa kuin tarvitset. Ne eivät saa mennä päällekkäin tai ylittää pinta-alan ääriviivaa. {{ui:Poista aukot}} poistaa ne kaikki, ja {{key:Mod+Z}} kumoaa yhden.

## Laske kohteita

1. Valitse {{ui:Lukumäärä}} ({{key:U}}).
2. Kirjoita kohdassa {{ui:Ominaisuudet}} {{ui:Ryhmän nimi}}, esimerkiksi ”Lattiakaivot”. Nimi säilyy seuraavaa kertaa varten.
3. Napsauta jokaista kohdetta arkilla.

Tulos: jokainen napsautus lisää numeroidun pisteen. Ensimmäinen piste saa tunnisteen, kuten ”Lattiakaivot: 7”, ja tilarivi pitää juoksevaa yhteissummaa.

- **Aloita toinen ryhmä:** paina {{key:Esc}} kerran (se tyhjentää valinnan), vaihda {{ui:Ryhmän nimi}} ja napsauta uudelleen.
- **Lisää olemassa olevaan ryhmään:** valitse ryhmä ensin, valitse sitten {{ui:Lukumäärä}} ja napsauta.
- **Poista merkki:** valitse ryhmä, pidä {{key:Shift}} pohjassa ja napsauta pistettä. Viimeisen pisteen poistaminen poistaa ryhmän. Kosketusnäytöllä ilman näppäimistöä käytä {{key:Mod+Z}}-toimintoa tai {{ui:Kumoa}}-painiketta.
- **Nimeä ryhmä uudelleen:** valitse se ja muokkaa {{ui:Ryhmän nimi}}-kenttää kohdassa {{ui:Ominaisuudet}}.

Lukumääräryhmä kuuluu yhdelle arkille. Useilla arkeilla olevat lukumäärät näkyvät merkintäluettelossa erillisinä ryhminä.

## Vaihda tai poista mittakaava

Napsauta tilarivin mittakaavapainiketta. Ruutu näyttää nykyisen mittakaavan. Valitse toinen mittakaava, valitse {{ui:Valitse kaksi pistettä}} tai valitse {{ui:Poista mittakaava}}.

Jo piirretyt pituudet ja pinta-alat **mitataan uudelleen** uudella mittakaavalla heti. Kumoa palauttaa vanhan mittakaavan.

## Mihin luvut menevät

- {{ui:Ominaisuudet}} näyttää valitun mittauksen arvot.
- {{ui:Merkinnät}}-välilehti listaa jokaisen arvon, ja sen CSV-tiedostossa on sarake ”Mittaus”. Katso [Merkintäluettelo](topic:markups-list-and-export).
- Tallennettu PDF säilyttää mittakaavan sivulla ja kirjoittaa pituudet ja pinta-alat mittauskommentteina. Näin muut PDF-ohjelmat, jotka ymmärtävät mittauksia, voivat näyttää ne. Katso [Mitä PDF-tiedostoon tallentuu](topic:what-the-pdf-keeps).

Täyteen määrälaskentaan nimikkeillä, yhdistelmillä ja hinnoilla käytä TakeoffCraftia. MarkupCraft mittaa katselmointia varten, ei kustannusarvioita varten.
