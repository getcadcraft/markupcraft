---
title: Seznam označb, filtri in izvozi
summary: Oglejte si vse označbe v nizu, filtrirajte po listu, avtorju, stanju in vrsti, skočite na eno in izvozite seznam kot CSV ali BCF.
keywords: seznam označb, seznam, povzetek, xlsx, preglednični delovni zvezek, poročilo PDF, uvoz BCF, filter, razvrsti, poročilo, izvoz, csv, preglednica, bcf, bcfzip, zadeve, seznam komentarjev, skok
from: 6c70261e
---

## Odprite seznam

Izberite zavihek {{ui:Označbe}} na desni. Navedene so vse označbe vsake odprte datoteke, po vrstnem redu listov in nato po vrstnem redu, v katerem so bile narejene. Vsaka vrstica prikazuje:

- ikono v barvi označbe, njeno številko pomanjkljivosti, če jo ima („#4“), in njen predmet,
- njeno besedilo, besedilo žiga ali izmerjeno vrednost ter njen komentar,
- list, avtorja in datum,
- njeno stanje (ali „Samo za branje“ pri komentarjih, ki so prišli z datoteko) ter število odgovorov, kadar jih ima.

Vrstica nad seznamom jih šteje: „38 označb“ ali „12 od 38 označb“, kadar je seznam filtriran.

## Skok na označbo

Kliknite vrstico. MarkupCraft pokaže ta list, izbere označbo in se približa, če je zunaj zaslona ali premajhna za ogled. {{ui:Lastnosti}} ima njene podrobnosti in nit, ko preklopite nazaj na ta zavihek.

## Filtriranje

Štirje meniji nad seznamom. Kombinirajo se.

| Meni | Izbire |
|---|---|
| {{ui:List}} | Vsi listi, Ta list (sledi vam, ko menjate liste), ali kateri koli list, ki ima označbe |
| {{ui:Avtor}} | Kdorkoli ali vsak avtor v nizu |
| {{ui:Stanje}} | Poljubno stanje, Odprto, Sprejeto, Zavrnjeno, Dokončano |
| {{ui:Vrsta}} | Poljubna vrsta ali vsaka vrsta označbe v nizu |

Primeri:

- Kaj je še odprto na tem listu: {{ui:List}} „Ta list“, {{ui:Stanje}} „Odprto“.
- Komentarji enega svetovalca: {{ui:Avtor}} njegovo ime.
- Vse meritve: {{ui:Vrsta}} „Dolžina“ ali „Površina“.

Seznam prikaže največ 2000 vrstic; v zelo velikih nizih ga zožite s filtrom.

## Izvoz v CSV

Izberite {{ui:CSV}} na vrhu zavihka. Dobite „<ime> označbe.csv“ z **označbami, kakor so trenutno filtrirane**, po eno v vrstici, s temi stolpci:

Št. pomanjkljivosti, List, Datoteka, Stran, Vrsta, Tema, Besedilo, Komentar, Meritev, Avtor, Ustvarjeno, Spremenjeno, Stanje, Odgovori, Zadnji odgovor, Barva, Samo za branje.

- „Besedilo“ vsebuje besedilo polj za besedilo in oblačkov, besedilo žiga ali ime skupine štetja.
- „Meritev“ vsebuje dolžine, „površina, obseg“ za površine in „skupina: n“ za štetja.
- Datumi so polni časovni žigi v UTC.

Če želite izvoziti vse, najprej nastavite vsak filter nazaj na prvo izbiro.

## Povzetek kot delovni zvezek ali PDF

- {{ui:XLSX}} prenese „<ime> povzetek označb.xlsx“ s tremi listi: **Označbe** (ena vrstica na označbo, enaki stolpci kot v CSV), **Po listih** (koliko označb ima vsak list, odprtih in zaprtih, ter koliko je vsake vrste, s seštevki) in **Pomanjkljivosti** (kadar so pomanjkljivosti).
- {{ui:PDF}} prenese „<ime> povzetek označb.pdf“: poročilo za tisk ali pošiljanje z imenom nabora, datumom in tabelo navedenih označb (številka, list, vrsta, tema, besedilo ali komentar, izmerjena vrednost, avtor, stanje in zadnji odgovor). Dolgo besedilo se prelomi; glava tabele se ponovi na vsaki strani.

Obe možnosti upoštevata seznam, kakršen je filtriran, zato najprej filtrirajte, da poročate za en list, enega avtorja ali samo odprte točke.

## Izvoz v BCF

Izberite {{ui:BCF}}. MarkupCraft naredi sliko vsake navedene označbe na njenem listu („Izdelujem posnetke za BCF (3 od 12) …“) in nato prenese „<ime> označbe.bcfzip“. Vsaka označba postane ena tema BCF s svojim stanjem, avtorjem, datumi, odgovori kot komentarji, zadolženo osebo in rokom iz njene pomanjkljivosti ter posnetkom.

Uporabite ga, kadar želite komentarje pregleda risb prenesti v orodja za usklajevanje BIM, ki berejo BCF. Kaj se prenese in kaj ne, je v [Osnove BCF](topic:bcf-basics).

## Uvoz BCF

{{ui:Uvozi BCF}} prebere datoteko .bcfzip (ali .bcf) iz orodja BIM:

- Zadeve, ki izvirajo iz izvoza BCF MarkupCrafta, najdejo svoje označbe: novi odgovori se dodajo niti, nastavi se novo stanje (Zaprto šteje kot Dokončano). Odgovori, ki so že tam, se ne dodajo dvakrat.
- Druge zadeve postanejo opombe z njihovim naslovom, opisom, avtorjem in komentarji. Opomba gre na list, katerega številko ali ime navajajo oznake zadeve, sicer na odprti list. Ker kamera BIM nima mesta na papirju, so take opombe zložene v zgornji levi kot lista, da jih premaknete.

Ves uvoz je en korak: {{key:Mod+Z}} ga razveljavi. Glejte [Osnove BCF](topic:bcf-basics).

## Kaj seznam še ne počne

- Združevanje seznama (najprej razvrstite, nato filtrirajte).
- Urejanje vrednosti v seznamu (uredite jih v {{ui:Lastnosti}}; polja pomanjkljivosti so urejljiva v zavihku {{ui:Pomanjkljivosti}}).

## Lastni stolpci in razvrščanje

{{ui:Stolpci}} v zavihku {{ui:Označbe}} doda lastne stolpce vsaki označbi: **besedilo**, **izbiro** (na primer Stroka: Strojna, Elektro, Vodovod), **število** (na primer Strošek) ali **datum**. Dajte vsakemu ime, izberite vrsto, za stolpec izbire navedite možnosti in izberite {{ui:Shrani stolpce}}.

- Izpolnite jih v {{ui:Lastnosti}}: vsak stolpec ima tam polje. Stolpec števila sprejme samo številke, stolpec datuma pa datum.
- Seznam prikaže vrednosti pod vsako označbo, filter {{ui:Stolpec}} izbere eno vrednost (ali označbe, kjer je prazen), {{ui:Razvrsti}} pa uredi seznam po stolpcu, avtorju, stanju, vrsti ali datumu namesto po listu.
- Izvoza CSV in XLSX nosita stolpce za običajnimi. Stolpci so shranjeni s PDF-jem in se vrnejo, ko ga znova odprete.

## Legenda na listu

{{ui:Legenda}} v zavihku {{ui:Označbe}} postavi legendo v zgornji desni kot tistega, kar vidite: okvir, ki našteje vsako vrsto označb na listu (po temi in barvi, na primer „Oblak“, „Vprašanje“ ali „Vtičnice“), s številom vsake. Skupina štetja šteje svoje oznake. Legenda med risanjem, premikanjem ali brisanjem označb sproti šteje in se natisne in shrani s števili tistega trenutka.

Premaknite in spremenite velikost kot katero koli označbo. V njenih {{ui:Lastnosti}} spremenite {{ui:Naslov}} ali nastavite {{ui:Štetja}} na {{ui:Cel komplet}}, da šteje vse liste. Presledki, druge legende in komentarji iz drugih programov se ne štejejo.
