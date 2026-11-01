---
title: Failid, mida MarkupCraft avab ja salvestab
summary: PDF-id sisse, märgistatud PDF-i koopia välja ning CSV-, BCF- ja tööriistakastifailid; kuhu need lähevad, võrgus ja võrguta.
keywords: pdf, ava, salvesta, ekspordi, laadi alla, csv, bcf, bcfzip, json, tööriistakast, failitüübid, vormingud, üleslaadimine, parool, krüpteeritud
from: b3045b4c
---

## Mida MarkupCraft avab

| Fail | Kuidas | Mis juhtub |
|---|---|---|
| PDF (`.pdf`) | {{ui:Ava}}, {{key:Mod+O}} või lohista lehe alale. Mitu korraga on lubatud. | Igast leheküljest saab leht. Faili sisse märgitud märgistused loetakse tagasi (vt allpool). |
| Tööriistakast (`.json`) | {{ui:Tööriistad}} vahekaart, seejärel {{ui:Impordi}} | Tööriistad lisatakse sinu tööriistakasti. Vt [Tööriistakast](topic:tool-chest). |

Kõik muu lükatakse tagasi teatega „MarkupCraft avab PDF-faile.“ olekuribal. Kui lohistad segu, avatakse PDF-id ja olekuribal öeldakse, mitu faili ei olnud PDF.

### Märgistused PDF-is

- **MarkupCraft'i salvestatud märgistused** tulevad tagasi täpselt: tüüp, stiil, autor, kuupäevad, staatus, vastused, punktinumber, lehe mõõtkava ja lehtede nimed, mille sisestasid.
- **Teiste PDF-programmide kommentaarid** loetakse samuti. Ristkülikud, ellipsid, jooned ja nooled, murdjooned, hulknurgad, pliiatsijoonistused, tekstikastid ja kleepuvad märkmed muutuvad tavalisteks, muudetavateks MarkupCraft'i märgistusteks. Nende vastused ja ülevaatuse staatused tulevad kaasa.
- **Kõik muu** (tekstivalikuga tehtud teksti esiletõstud, teiste programmide templid ja muud liigid) näidatakse nii, nagu see on, kirjutuskaitstuna. Saad seda valida, näha märgistuste loendis ja sellele vastata, aga mitte teisaldada, muuta ega kustutada.
- Lingid ja vormiväljad jäetakse puutumata ega ole loetelus.
- Teise programmi salvestatud mõõtkava (mõõtevaade) kasutatakse lehe mõõtkavana, kui MarkupCraft mõistab selle ühikut.

### Failid, mida ei saa avada

- PDF, mis nõuab parooli: ‚„nimi“ vajab avamiseks parooli. Ava kaitsmata koopia.‘
- Kahjustatud fail või fail, mis pole tegelikult PDF: ‚„nimi“ ei saanud PDF-ina lugeda (…)‘
- PDF, mis avaneb, kuid on muudatuste eest kaitstud, avaneb korralikult. Selle salvestamine on keelatud (vt allpool).

Kui avad mitu faili korraga, avatakse need, mis töötavad, ja kast nimega „Mõned failid ei avanenud“ loetleb ülejäänud.

## Mida MarkupCraft salvestab

Salvestamine on alati **allalaadimine** uue faili näol. Veebileht ei saa su arvutis faili üle kirjutada ning MarkupCraft ei muuda kunagi sinu algset faili.

| Sina valid | Saad | Märkused |
|---|---|---|
| {{ui:Salvesta}} ({{key:Mod+S}}) | „<name> (marked up).pdf“ | Algse PDF-i koopia, kus iga märgistus on kirjutatud sisse tavalise PDF-kommentaarina. Faili „(marked up)“ uuesti salvestamisel säilib sama nimi; see ei muutu kunagi nimeks „(marked up) (marked up)“. Vt [Märgistatud PDF-i salvestamine](topic:save-the-marked-up-pdf). |
| {{ui:Märgistused}} vahekaart, seejärel {{ui:CSV}} | „<name> markups.csv“ | Märgistused loendis nii, nagu need on (filtrid kehtivad). |
| {{ui:Märgistused}} vahekaart, seejärel {{ui:BCF}} | „<name> markups.bcfzip“ | BCF 2.1 BIM-koordineerimise tööriistadele, iga märgistuse kohta üks hetktõmmis. Vt [BCF-i põhitõed](topic:bcf-basics). |
| {{ui:Punktinimekiri}} vahekaart, seejärel {{ui:Ekspordi CSV}} | „<name> punch list.csv“ | Punktid numbrijärjekorras. |
| {{ui:Tööriistad}} vahekaart, seejärel {{ui:Ekspordi}} | „MarkupCraft tool chest.json“ | Sinu tööriistakast jagamiseks või alles hoidmiseks. |

„<name>“ on esimese avatud PDF-i failinimi ilma „.pdf“-ta.

CSV-failid avanevad igas tabelarvutusprogrammis. Need on UTF-8 kodeeringus koos märgiga, mille järgi tabelarvutused need ära tunnevad, nii et täpitähtedega nimed tulevad õigesti välja. Lahter, mis algab tähega =, +, - või @, saab ette ülakoma, et tabelarvutus seda valemina ei käivitaks.

## Kuhu allalaadimised lähevad

Sinu brauser otsustab: tavaliselt su kaust Allalaadimised, või ta küsib iga kord, kui nii on seadistatud. Vt [Brauserid ja arvutid](common:browsers#what-differs-between-browsers).

:::chromium
Kui salvestad korraga kõik muudetud failid komplektist, võivad Chrome ja Edge küsida, kas see sait tohib alla laadida mitut faili. Vali {{ui:Luba}}, muidu saad ainult esimese koopia.
:::

:::safari
iPadil küsib Safari enne iga allalaadimist ja paneb faili rakenduses Failid kausta Allalaadimised. Macis läheb see kausta, mis on Safari seadetes määratud.
:::

## Võrgus ja võrguta

- **Sinu PDF-id ei lahku kunagi sellest arvutist**, võrgus ega võrguta. Kusagil ei toimu üleslaadimist.
- PDF-lugeja laaditakse esimesel korral, kui avad PDF-i („Laen PDF-lugejat…“), ja PDF-kirjutaja esimesel korral, kui salvestad („Laen PDF-kirjutajat…“) või avad faili, millel on juba kommentaarid.
- Ühenduse olemasolul laaditakse mõlemad veebilehelt.
- **Töötamiseks ilma ühenduseta** vali ülal ribal, kui oled võrgus, {{ui:Salvesta võrguks}}. Nupp loeb „Salvestan N / M“ ja ütleb seejärel „Valmis võrguta kasutamiseks“. See koopia sisaldab PDF-lugejat ja PDF-kirjutajat (kokku umbes 6 MB) ning seda abi, nii et edaspidi töötavad PDF-ide avamine, märgistamine ja salvestamine võrguta selles brauseris.
- Kui nupp ütleb „Salvestamine ebaõnnestus“, siis mõned failid ei laadinud alla: kontrolli ühendust ja klõpsa uuesti. Kui nupp ütleb „Võrguta pole saadaval“, ei saa see brauseriaken võrguta koopiat hoida (privaatsed aknad ja mõned hallatud arvutid); kasuta tavalist akent.
- Koopia uuendamiseks või eemaldamiseks klõpsa nupul „Valmis võrguta kasutamiseks“ ja vali „Salvesta uuesti (lae uusim versioon)“ või „Eemalda võrguta koopia“. Lisa leiad: [Töötamine võrguta](common:offline).

:::offline
Oled võrguta. Kui ülal ribal on „Valmis võrguta kasutamiseks“, töötab kõik, sealhulgas salvestamine. Kui ei ole ja sa pole selles kaardis veel salvestanud, võib {{ui:Salvesta}} ebaõnnestuda teatega „PDF-kirjutajat ei saanud laadida“. Su märgistused on endiselt kaardil: jäta kaart avatuks, tule tagasi võrku ja vali uuesti {{ui:Salvesta}}.
:::

## Asju, mida teada

- Suured plaanikomplektid avanevad aeglaselt: MarkupCraft loeb iga lehekülje teksti, et leida lehenumbreid. Olekuriba loendab lehti töö käigus.
- Sama PDF-i kaks korda avamine lisab selle lehed kaks korda. Kui nii juhtub, sulge komplekt ja ava uuesti.
- {{ui:Sulge}} sulgeb korraga kõik avatud failid. Kui mõnel on salvestamata märgistusi, küsitakse: {{ui:Loobu}}, {{ui:Sulge ilma salvestamata}} või {{ui:Salvesta kõigepealt koopiad}}.
- Pilvsalvestus pole veel saadaval ja töölauaversioone pole veel. Hoia oma PDF-e teiste projektifailidega ja varunda need nagu tavaliselt. Vt [Kuhu su failid lähevad](common:your-files).
