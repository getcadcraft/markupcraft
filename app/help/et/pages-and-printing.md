---
title: Prindi ja muuda PDF-i lehti
summary: Prindi lehed koos märgistustega ning pööra, teisalda, lisa, kustuta või eralda avatud PDF-i lehti.
keywords: prindi, printer, paber, lehed, leht, leheküljed, pööra, keera, järjesta, teisalda leht, lisa, lisa leht, tühi leht, kustuta leht, eemalda leht, eralda, jaga, leheküljetoimingud
from: 81832d9b
---

Menüü {{ui:Leheküljed}} rühmas {{ui:Fail}} töötab selle PDF-iga, kuhu avatud leht kuulub. Sinu PDF-i ei muudeta sellel arvutil kunagi: muudatused on salvestatava koopia osa.

## Prindi

1. Vajuta {{key:Mod+P}} või vali {{ui:Leheküljed}}, seejärel {{ui:Prindi…}}.
2. Kui on avatud rohkem kui üks leht, vali, mida printida: {{ui:See leht}}, selle faili kõik leheküljed, kogu komplekt või sisestatud leheküljed (näiteks `1-3, 5`).
3. Vali {{ui:Prindi}}. Avaneb brauseri printimisdialoog: vali seal printer, paber ja mõõtkava.

Märgistused prinditakse nii, nagu need lehel paistavad: need joonistatakse printerisse saadetava koopia lehekülgedele. Teiste programmide tehtud kommentaarid prinditakse nii, nagu nende PDF ütleb.

:::safari firefox
Kui su brauser ei saa lehe seest printida, avatakse lehed PDF-ina uuel vahelehel. Prindi sealt.
:::

## Pööra lehte

Vali {{ui:Leheküljed}}, seejärel {{ui:Pööra lehekülge päripäeva}} või {{ui:Pööra lehekülge vastupäeva}}. Avatud leht pöördub veerandpöörde. Selle märgistused jäävad joonisel oma kohale ja sinu sisestatud tekst pöördub koos leheküljega, nii et see loeb endiselt sirgelt.

## Teisalda lehte

Vali {{ui:Leheküljed}}, seejärel {{ui:Teisalda lehekülg varasemaks}} või {{ui:Teisalda lehekülg hilisemaks}}. Avatud leht vahetab koha oma naabriga oma PDF-is. Selle märgistused, mõõtkava ja lehe number liiguvad koos sellega.

## Lisa lehti

- {{ui:Lisa leheküljed PDF-ist…}} lisab kõik teise PDF-i leheküljed avatud lehe järele.
- {{ui:Lisa tühi lehekülg}} lisab avatud lehe järele tühja lehe sama suurusega, visanditele ja märkmetele. Komplektis, mis on tehtud {{ui:Uus}}-ga, on sellel ka komplekti ruudustik.
- Komplektis, mis on tehtud {{ui:Uus}}-ga, lisab {{ui:Lisa tühi leht}} {{ui:Lehed}} loendi all veel ühe lehe nagu teised, lõppu. Vt [Alusta tühjade lehtedega](topic:open-a-plan-set#start-with-blank-pages).

Lisatud lehed saavad oma lehekülje numbri sildiks, kuni nad ümber nimetad. Vt [Nimeta leht ümber](topic:open-a-plan-set#rename-a-sheet).

## Kustuta leheküljed

1. Vali {{ui:Leheküljed}}, seejärel {{ui:Kustuta leheküljed…}}.
2. Sisesta selle PDF-i leheküljenumbrid, näiteks `3` või `2-4`. Avatud lehe number on juba täidetud.
3. Vali {{ui:Kustuta leheküljed}}. Kui need lehed sisaldavad märgistusi, ütleb MarkupCraft, mitu, ja küsib uuesti.

PDF jääb alles vähemalt ühe leheküljega. Terve faili eemaldamiseks sulge komplekt ja ava failid, mida veel vajad.

## Eralda leheküljed

Vali {{ui:Leheküljed}}, seejärel {{ui:Eralda leheküljed…}} ja sisesta lehed. Need laaditakse alla uue PDF-ina nimega „<file> (pages 1-3).pdf“, märgistused on kaasas kommentaaridena, mida saad edasi muuta. Avatud fail jääb samaks.

## Hea teada

- **Tagasivõtmine peatub lehemuudatuse juures.** {{key:Mod+Z}} võtab tagasi märgistused, mis joonistati pärast seda, kuid mitte lehemuudatust ennast ega midagi enne seda. Alusta uuesti algsest PDF-ist, sulgedes ilma salvestamata.
- Leheküljenumbrid loevad ühe PDF-i lehti, mitte kogu komplekti. Lehe teisaldamine hoiab selle oma failis.
- Muudetud leheküljed on salvestamata töö: {{ui:Salvesta}} laadib alla ümberkorraldatud koopia ja lahkumisel küsitakse esmalt.
