---
title: A jelölések listája, szűrők és exportálás
summary: Lássa a készlet minden jelölését, szűrjön rajzlap, szerző, állapot és típus szerint, ugorjon egyre, és exportálja a listát CSV vagy BCF formátumban.
keywords: jelölések listája, lista, összefoglaló, xlsx, táblázatkezelő munkafüzet, munkafüzet, pdf-jelentés, bcf importálása, szűrő, rendezés, jelentés, exportálás, csv, táblázat, bcf, bcfzip, problémák, megjegyzések listája, ugrás
from: 6c70261e
---

## A lista megnyitása

Válassza a jobb oldali {{ui:Jelölések}} lapot. Minden nyitott fájl minden jelölése listázva van, rajzlap-sorrendben, majd a készítésük sorrendjében. Minden sor mutatja:

- a jelölés színében lévő ikont, a hibaszámát, ha van neki („#4”), és a tárgyát,
- a szövegét, a bélyegző szövegét vagy mért értékét, és a megjegyzését,
- a rajzlapot, a szerzőt és a dátumot,
- az állapotát (vagy „Csak olvasható” a fájllal érkezett megjegyzéseknél), és a válaszszámot, ha vannak válaszai.

A lista feletti sor megszámolja őket: „38 jelölés”, vagy „12 a 38 jelölésből”, ha szűrve van.

## Ugrás egy jelölésre

Kattintson egy sorra. A MarkupCraft megmutatja azt a rajzlapot, kijelöli a jelölést, és ráközelít, ha az képernyőn kívül van vagy túl kicsi a láthatósághoz. A {{ui:Tulajdonságok}} panel mutatja a részleteit és a szálát, amikor visszavált erre a lapra.

## Szűrés

Négy menü van a lista felett. Kombinálhatók.

| Menü | Választható |
|---|---|
| {{ui:Rajzlap}} | Összes rajzlap, Ez a rajzlap (követi, ahogy rajzlapot vált), vagy bármely jelöléseket tartalmazó rajzlap |
| {{ui:Szerző}} | Bárki, vagy a készlet minden szerzője |
| {{ui:Állapot}} | Bármely állapot, Nyitott, Elfogadva, Elutasítva, Befejezve |
| {{ui:Típus}} | Bármely típus, vagy a készlet minden jelöléstípusa |

Példák:

- Mi van még nyitva ezen a rajzlapon: {{ui:Rajzlap}} „Ez a rajzlap”, {{ui:Állapot}} „Nyitott”.
- Egy tanácsadó megjegyzései: {{ui:Szerző}} az ő nevük.
- Minden mérés: {{ui:Típus}} „{{ui:Hossz}}” vagy „{{ui:Terület}}”.

A lista legfeljebb 2000 sort mutat; nagyon nagy készleteknél szűkítse szűrővel.

## Exportálás CSV-be

Válassza a {{ui:CSV}} gombot a lap tetején. A „<name> markups.csv” fájlt kapja, **a jelenlegi szűrés szerinti jelölésekkel**, soronként egyel, ezekkel az oszlopokkal:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- A Text oszlop tartalmazza a szövegdobozok és kiemelések szövegét, a bélyegző szövegét, vagy a darabszámcsoport nevét.
- A Measurement oszlop tartalmazza a hosszúságokat, a területeknél az „area, perimeter” értéket, a darabszámnál pedig a „group: n” értéket.
- A dátumok UTC-ben, teljes időbélyegként szerepelnek.

Az összes exportálásához állítsa vissza minden szűrőt az első választásra.

## Jelmagyarázat a rajzlapon

A {{ui:Jelmagyarázat}} a {{ui:Jelölések}} lapon jelmagyarázatot tesz a látott kép jobb felső sarkába: egy dobozt, amely felsorolja a rajzlapon lévő jelölésfajtákat (tárgy és szín szerint, például „Felhő”, „Kérdés” vagy „Konnektorok”), darabszámmal együtt. A darabszámcsoport a jelöléseit számolja. A jelmagyarázat a rajzolás, mozgatás vagy törlés közben is számol, és nyomtatáskor és mentéskor az adott pillanat számaival együtt kerül ki.

Mozgassa és méretezze át, mint bármely jelölést. A {{ui:Tulajdonságok}} panelben módosíthatja a {{ui:Cím}}-et, vagy a {{ui:Darabszámok}} értékét {{ui:A teljes készlet}}-re állíthatja, hogy minden rajzlapot számoljon. A terek, más jelmagyarázatok és más programok megjegyzései nem számítanak bele.

## Saját oszlopok és rendezés

{{ui:Oszlopok}} a {{ui:Jelölések}} lapon saját oszlopokat ad minden jelöléshez: **szöveget**, **választást** (például Szakág: Gépészet, Villamos, Vízvezeték), **számot** (például Költség) vagy **dátumot**. Adjon nevet mindegyiknek, válassza ki a fajtáját, a választás oszlopnál sorolja fel a lehetőségeket, majd válassza az {{ui:Oszlopok mentése}} gombot.

- Töltse ki őket a {{ui:Tulajdonságok}} panelben: minden oszlopnak van ott mezője. A szám oszlop csak számot fogad el, a dátum oszlop pedig dátumot.
- A lista minden jelölés alatt mutatja az értékeket. Az {{ui:Oszlop}} szűrő egy értéket választ ki (vagy azokat a jelöléseket, ahol üres), a {{ui:Rendezés}} pedig a listát egy oszlop, szerző, állapot, fajta vagy dátum szerint rendezi a rajzlap-sorrend helyett.
- A CSV és XLSX exportok a szokásos oszlopok után tartalmazzák a saját oszlopokat. Az oszlopok a PDF-fel együtt mentődnek, és újranyitáskor visszatérnek.

## Összefoglaló exportálása: munkafüzet vagy PDF

- A {{ui:XLSX}} letölti a „<name> markup summary.xlsx” fájlt három lappal: **Markups** (listázott jelölésenként egy sor, ugyanazokkal az oszlopokkal, mint a CSV), **By sheet** (rajzlaponként hány jelölés van, nyitott és lezárt, és típusonként hány, összesítéssel) és **Punch list** (ha vannak hibatételek).
- A {{ui:PDF}} letölti a „<name> markup summary.pdf” fájlt: nyomtatásra vagy küldésre szánt jelentés a készlet nevével, a dátummal és a listázott jelölések táblázatával (sorszám, rajzlap, típus, tárgy, szöveg vagy megjegyzés, mért érték, szerző, állapot és a legutóbbi válasz). A hosszú szöveg törik, a táblázat fejléce pedig minden oldalon megismétlődik.

Mindkettő a szűrt listát veszi alapul, ezért egy rajzlap, egy szerző vagy csak a nyitott tételek jelentéséhez előbb szűrjön.

## Exportálás BCF-be

Válassza a {{ui:BCF}} gombot. A MarkupCraft minden listázott jelölésről képet készít a rajzlapján („BCF-hez pillanatképek készítése (3 / 12)…”), majd letölti a „<name> markups.bcfzip” fájlt. Minden jelölés egy BCF-témakör lesz: az állapotával, szerzőjével, dátumaival, a válaszai megjegyzésként, a felelőse és a határideje a hibatételéből, valamint a pillanatképével.

Használja arra, hogy a rajzellenőrzési megjegyzéseket átvigye a BCF-et olvasó BIM-koordinációs eszközökbe. Hogy mi kerül át, és mi nem, az a [BCF alapok](topic:bcf-basics) oldalon található.

## BCF importálása

A {{ui:BCF importálása}} egy BIM-eszköztől származó .bcfzip (vagy .bcf) fájlt olvas be:

- A MarkupCraft saját BCF-exportjából származó problémák megtalálják a jelöléseiket: az új válaszok bekerülnek a szálba, és új állapot áll be (a Closed a Befejezve állapotnak felel meg). A már meglévő válaszok nem kerülnek be duplán.
- Más problémák megjegyzésekké válnak, a címükkel, leírásukkal, szerzőjükkel és megjegyzéseikkel. A megjegyzés arra a rajzlapra kerül, amelynek számát vagy nevét a probléma címkéi megadják, különben a nyitott rajzlapra. Mivel a BIM-kamerának nincs helye a papíron, az ilyen megjegyzések a rajzlap bal felső sarkában halmozódnak, hogy Ön áthelyezhesse őket.

Az egész importálás egy lépés: a {{key:Mod+Z}} visszavonja. Lásd: [BCF alapok](topic:bcf-basics).

## Amit a lista még nem tud

- A lista csoportosítása (ehelyett rendezés, majd szűrés).
- Értékek szerkesztése a listában (szerkesztés a {{ui:Tulajdonságok}} panelen; a hibamezők a {{ui:Hibalista}} lapon szerkeszthetők).
