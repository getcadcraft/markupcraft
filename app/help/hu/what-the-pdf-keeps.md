---
title: Mi mentődik a PDF-be
summary: Pontosan mi került a jelölt másolatba, mit látnak más PDF-programok, és mi töltődik vissza egy fájl megnyitásakor.
keywords: PDF-annotációk, megjegyzések, mentett adatok, oda-vissza mentés, oldalcímkék, mérés, áttekintési állapot, válaszok, újranyitás, együttműködés, kompatibilitás, privát adatok
from: 6439ad28
---

A jelölt másolat az eredeti PDF, amelyhez megjegyzések (PDF-annotációk) lettek hozzáadva. Maguk az oldalak, rajzaik, szövegük, könyvjelzőik és hivatkozásaik változatlanul kerülnek átmásolásra.

## Minden jelölés

| MarkupCraft | Így mentve | Más PDF-megjelenítők ezt mutatják |
|---|---|---|
| Téglalap, dobozos felhő | Square annotation (felhő: felhős szegély) | Téglalap vagy felhő megjegyzés |
| Ellipszis | Circle annotation | Ellipszis megjegyzés |
| Sokszög, szabad felhő | Polygon annotation (felhő: felhős szegély) | Sokszög vagy felhő megjegyzés |
| Polivonal | PolyLine annotation | Polivonal megjegyzés |
| Vonal, nyíl | Line annotation (nyíl: zárt nyílhegy) | Vonal vagy nyíl megjegyzés |
| Hossz | Line annotation méretként jelölve, méréssel | Hosszmérés, ahol a megjelenítő támogatja |
| Terület | Polygon annotation területként jelölve, méréssel | Területmérés, ha támogatott; egyébként sokszög |
| Darabszámcsoport | Egy ink annotation, elemenként egy gyűrű; szövege: "group: n" | Tinta megjegyzés |
| Toll, kiemelő | Ink annotation (a kiemelő így jelölve) | Tinta megjegyzés |
| Szöveg | FreeText annotation | Szövegdoboz megjegyzés |
| Kiemelés (callout) | FreeText annotation kiemelés-vezetővonallal | Kiemelés megjegyzés |
| Jegyzet | Text annotation | Ragasztott jegyzet, amely megnyitva megmutatja a szövegét |
| Bélyegző | Stamp annotation | Bélyegző megjegyzés |

Minden jelölés az alábbiakkal mentődik:

- **saját megjelenése**, pontosan úgy rajzolva, ahogy a MarkupCraft a képernyőn rajzolja, így minden megjelenítőben ugyanúgy néz ki és ugyanúgy nyomtatódik, a hibaszám-jelvénnyel együtt;
- **a szerző**, **a létrehozás és a módosítás dátuma**, **a tárgy**, **a megjegyzés szövege** (szövegdobozok és kiemelések esetén a szöveg és a megjegyzés), **a szín** és **az átlátszatlanság**;
- **a MarkupCraft-adatai** egy privát bejegyzésben, amelyet más programok figyelmen kívül hagynak: állapot, hibatétel, stílus és típus, így pontosan újranyitható.

## Szálak és állapotok

- Minden válasz válaszmegjegyzésként mentődik, a hozzá tartozó jelöléshez kapcsolva, a szerzőjével, dátumával és szövegével. A válaszoknak nincs saját ikonjuk a rajzlapon.
- Minden állapotváltozás áttekintési állapotot hordozó válaszként mentődik. Más áttekintő eszközök ezt Elfogadva, Elutasítva vagy Befejezett néven mutatják; a Nyitott állapot állapot nélkül mentődik.
- Az a jelölés, amelynek a Nyitottól eltérő állapota van, de nincs naplózott állapotváltozása, kap egy áttekintési állapotú választ, így más programok is látják az állapotot.
- Az eredeti fájl csak olvasható megjegyzéseire adott válaszok ugyanígy mentődnek, az adott megjegyzéshez kapcsolva.

## Minden rajzlap

- **Méretarány:** a kalibrált rajzlap kap egy oldalt lefedő mérési nézetablakot (az oldalléptékek tárolásának szokásos módja), valamint a MarkupCraft saját másolatát a kalibrálásról.
- **Rajzlapszám:** a {{ui:Rajzlap átnevezése}} segítségével beírt szám lesz az oldalcímke. Ha a fájl bármely oldalának van ilyen, a fájl minden oldala kap címkét: a beírt szám, különben a régi címke, különben az oldalszám.
- **Rajzlap címe:** a beírt cím csak a MarkupCraft számára mentődik; más megjelenítők nem mutatják.

## Szöveg és karakterek

A szöveg Helvetica betűkészlettel íródik, amelyet minden PDF-megjelenítő tartalmaz. A nyugat-európai készleten (Windows-1252) kívüli betűk a másolatban „?” jelként nyomtatódnak; a mentési üzenet megszámolja őket.

## Számítási lapok és indoklások

A számítási lapok és indoklások a PDF `/MarkupCraftShell` nevű privát bejegyzésében maradnak meg. Más PDF-programok figyelmen kívül hagyják. A régebbi MarkupCraft szintén figyelmen kívül hagyja, és a fájl következő mentésekor eltávolítja.

## Mi történik a már meglévő megjegyzésekkel

Ha olyan PDF-et nyit meg, amelyben már vannak megjegyzések:

- A MarkupCraft saját megjegyzései pontosan visszaolvasódnak. Ha egy másik program áthelyezett vagy átméretezett egyet, annak az új helyzete érvényesül.
- Más programokból származó téglalapok, ellipszisek, vonalak, polivonalak, sokszögek, tinta, szövegdobozok és ragasztott jegyzetek szerkeszthető jelölésekké válnak. **Mentéskor a MarkupCraft eltávolítja az eredetieket, és saját módján újra megírja őket**, a felugró ablakaikkal és válaszaikkal együtt. Megjelenésük kissé változhat.
- Más programok áttekintési állapotai határozzák meg az állapotot; a legújabb érvényesül.
- Minden más (szövegkiemelések, más programok bélyegzői és speciális típusai) **változatlanul marad** a másolatban, csak olvasható módon.

Ugyanazon fájl újbóli mentése soha nem duplázza meg a dolgokat: a MarkupCraft által beolvasott jelöléseket lecseréli, nem adja hozzá újra.

## Ami nem változik

Az eredeti fájl a lemezen soha nem változik. A másolat méretre nincs optimalizálva, ezért valamivel nagyobb lehet az eredetinél. Védett (titkosított) PDF-ek nem menthetők.
