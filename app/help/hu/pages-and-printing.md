---
title: Nyomtatás, és a PDF oldalainak módosítása
summary: Rajzlapok nyomtatása a jelöléseikkel, valamint egy megnyitott PDF oldalainak forgatása, mozgatása, beszúrása, törlése vagy kinyerése.
keywords: nyomtatás, nyomtató, papír, oldalak, oldal, forgatás, fordítás, sorrend, oldal mozgatása, beszúrás, oldal hozzáadása, üres oldal, oldal törlése, oldal eltávolítása, kinyerés, szétválasztás, oldalműveletek
from: 81832d9b
---

Az {{ui:Oldalak}} menü a {{ui:Fájl}} csoportban a megnyitott rajzlap PDF-jén dolgozik. A PDF-je ezen a számítógépen soha nem változik: a módosítások a mentett másolat részei.

## Nyomtatás

1. Nyomja meg a {{key:Mod+P}} billentyűkombinációt, vagy válassza az {{ui:Oldalak}} menüt, majd a {{ui:Nyomtatás…}} lehetőséget.
2. Ha több rajzlap is meg van nyitva, válassza ki, mit nyomtasson: {{ui:Ez a rajzlap}}, a fájl minden oldala, az egész készlet, vagy az Ön által beírt oldalak (például `1-3, 5`).
3. Válassza a {{ui:Nyomtatás}} gombot. Megnyílik a böngészője nyomtatási párbeszédpanelje: ott válassza ki a nyomtatót, a papírt és a méretarányt.

A jelölések a rajzlapon látottak szerint nyomtatódnak: a nyomtatóba küldött másolat oldalaiba rajzolódnak. Más programok által készített megjegyzések úgy nyomtatódnak, ahogy a PDF-jük előírja.

:::safari firefox
Ha a böngészője nem tud nyomtatni az oldalon belülről, a rajzlapok új lapon PDF-ként nyílnak meg. Onnan nyomtasson.
:::

## Oldal forgatása

Válassza az {{ui:Oldalak}} menüt, majd a {{ui:Oldal forgatása az óramutató járásával egyezően}} vagy a {{ui:Oldal forgatása az óramutató járásával ellentétesen}} parancsot. A megnyitott rajzlap negyed fordulatot forog. A jelölései ott maradnak, ahol a rajzon voltak, a beírt szöveg pedig az oldallal együtt fordul, így egyenesen olvasható marad.

## Oldal mozgatása

Válassza az {{ui:Oldalak}} menüt, majd a {{ui:Oldal mozgatása előrébb}} vagy a {{ui:Oldal mozgatása hátrébb}} parancsot. A megnyitott rajzlap helyet cserél a szomszédjával a saját PDF-jében. A jelölései, a méretarányai és a rajzlapszáma vele együtt mozog.

## Oldalak beszúrása

- Az {{ui:Oldalak beszúrása PDF-ből…}} parancs egy másik PDF minden oldalát a megnyitott rajzlap mögé illeszti.
- Az {{ui:Üres oldal beszúrása}} a megnyitott rajzlap mögé ugyanekkora üres oldalt szúr be, vázlatokhoz és jegyzetekhez. Az {{ui:Új}} paranccsal létrehozott készletben a készlet rácsát is megkapja.
- Az {{ui:Új}} paranccsal létrehozott készletben a {{ui:Rajzlapok}} lista alatti {{ui:Üres oldal hozzáadása}} egy újabb, a többihez hasonló oldalt tesz a végére. Lásd [Indítás üres oldalakkal](topic:open-a-plan-set#start-with-blank-pages).

A beszúrt oldalak mindaddig az oldalszámukat kapják címkeként, amíg át nem nevezi őket. Lásd [Rajzlap átnevezése](topic:open-a-plan-set#rename-a-sheet).

## Oldalak törlése

1. Válassza az {{ui:Oldalak}} menüt, majd az {{ui:Oldalak törlése…}} parancsot.
2. Írja be ennek a PDF-nek az oldalszámait, például `3` vagy `2-4`. A megnyitott rajzlap oldala már ki van töltve.
3. Válassza az {{ui:Oldalak törlése}} gombot. Ha ezeken az oldalakon jelölések vannak, a MarkupCraft megmondja, hány van, és újra megkérdezi.

Egy PDF-nek legalább egy oldala marad. Egy teljes fájl eldobásához zárja be a készletet, és nyissa meg a még szükséges fájlokat.

## Oldalak kinyerése

Válassza az {{ui:Oldalak}} menüt, majd az {{ui:Oldalak kinyerése…}} parancsot, és írja be az oldalakat. Új PDF-ként töltődnek le „<file> (pages 1-3).pdf” névvel; a jelöléseik olyan megjegyzésként jelennek meg, amelyeket tovább szerkeszthet. A megnyitott fájl változatlan marad.

## Jó tudni

- **A visszavonás az oldalmódosításnál megáll.** A {{key:Mod+Z}} az utána rajzolt jelöléseket vonja vissza, de magát az oldalmódosítást vagy az előtte lévőket nem. Ha újra szeretné kezdeni az eredeti PDF-ből, zárja be mentés nélkül.
- Az oldalszámok egy PDF oldalait számozzák, nem az egész készletét. Oldal mozgatásakor az oldal a saját fájljában marad.
- A módosított oldalak nem mentett munkának számítanak: a {{ui:Mentés}} letölti az átrendezett másolatot, kilépéskor pedig előbb rákérdez.
