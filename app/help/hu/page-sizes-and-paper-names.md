---
title: Oldalméretek és papírnevek
summary: Minden PDF-oldal mérete milliméterben és hüvelykben, valamint papírneve (A-, B- és C-sorozat, ANSI, ARCH), és a vegyes készlet méret szerinti csoportosítása a szokatlan oldalak megtalálásához.
keywords: oldalméret, papírméret, papírnév, a0, a1, a2, a3, a4, b-sorozat, c-sorozat, ansi, arch, építészeti, mm, hüvelyk, egyedi méret, méret szerint, furcsa méret, vegyes készlet, pdf ellenőrzése, ügyfél, probléma, mediabox, cropbox, forgatás
from: 08e1354f
---

Mielőtt a készletet az ügyfélnek küldi, ellenőrizze, hogy minden lap a megfelelő méretű. A {{ui:MarkupCraft}} minden oldal méretét magából a PDF-ből olvassa ki, és megnevezi a papírt.

## Mit fog tenni

Nézzen meg egy lap méretet, majd csoportosítsa a teljes készletet méret szerint.

## Lépések

1. Nyissa meg a PDF-eket ({{ui:Megnyitás}}), majd nyomja meg az {{key:Esc}} billentyűt, amíg semmi nincs kijelölve, és a {{ui:Kijelölés}} be van kapcsolva.
2. Nézze meg a {{ui:Tulajdonságok}} részt. A {{ui:Papír}} megadja a nevet és a tájolást, például „A4, álló”. A {{ui:Méret}} milliméterben és hüvelykben adja meg az értéket.
3. A {{ui:Rajzlapok}} lista minden sorában a lap neve alatt van egy méretsor.
4. Válassza a {{ui:Méret szerint}} lehetőséget a {{ui:Rajzlapok}} fejlécében. A lista a lapokat méretenként egy-egy címsor alá gyűjti, a legnagyobb csoport van elöl. A csak néhány lapot tartalmazó méret szokatlanként van megjelölve.
5. A készlet saját sorrendjére való visszatéréshez válassza ismét a {{ui:Méret szerint}} lehetőséget.

Eredmény: az a lap, amelynek mérete eltér a többitől, a készlet elküldése előtt könnyen észrevehető.

## A név kiválasztása

- A méret a PDF-ben lévő oldalhatárból származik, a forgatást is figyelembe véve, így a fekvő A3 is A3 marad.
- A nevek az A- és B-sorozat (ISO 216), a C-sorozat (ISO 269), az ANSI A–E és az ARCH A–E.
- A 2 mm-en belül lévő oldal felveszi az elnevezett méret nevét. Minden más oldalon a {{ui:egyéni}} szó áll, a {{ui:Legközelebbi elnevezett méret}} pedig megmondja, melyik méret a legközelebbi, és mennyire tér el tőle.
- A hüvelykértékek a valódi oldalméretből származnak, így egy A4-es oldal 8,26 × 11,69 in.

## A mentett fájlokban

A {{ui:Jelölések listája}} összefoglaló munkafüzetében (majd a táblázatkezelőben) a {{ui:Rajzlaponként}} munkalapon van egy {{ui:Papírméret}} oszlop, és van egy {{ui:Oldalméretek}} munkalap. A PDF-jelentésben van egy „Oldalméretek” sor, amely minden méretből megadja a darabszámot.

:::note
Az ANSI és ARCH hüvelykértékeket a közzétett táblázatokból írtuk be, és nem hasonlítottuk össze a nyomtatott szabványokkal. Egy olyan „egyéni” oldalt, amely közel van ezek valamelyikéhez, saját maga ellenőrizze.
:::
