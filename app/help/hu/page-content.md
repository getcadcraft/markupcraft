---
title: Az oldal saját vonalainak, képeinek és szövegének módosítása
summary: Mozgassa, méretezze, átszínezze vagy törölje azt, amit a PDF maga rajzol, mozgassa egy vonal pontjait, cserélje ki a képet, és módosítsa egy szövegsor szavait.
keywords: oldaltartalom, alaptartalom, PDF szerkesztése, rajz szerkesztése, vektor, útvonal, alakzat, vonal, kép, képcsere, szöveg, szavak, betűtípus, pontok, fogantyúk, mozgatás, méretezés, átszínezés, törlés, tartalomeszköz
from: 471d457e
---

A jelölések a rajzlapon helyezkednek el. A {{ui:Tartalom}} eszköz magán a rajzlapon dolgozik: a PDF által rajzolt vonalakon, képeken és szövegsorokon. A PDF-je ezen a számítógépen soha nem változik: a szerkesztések a mentett másolat részei.

## A módosítandó elem kiválasztása

1. Válassza a {{ui:Kijelölés}} csoportban a {{ui:Tartalom}} eszközt, vagy nyomja meg a {{key:B}} billentyűt.
2. A {{ui:Tulajdonságok}} részben a {{ui:Kijelölhető}} alatt kapcsolja be vagy ki az {{ui:Alakzatok}}, a {{ui:Képek}} és a {{ui:Szöveg}} elemeket. Csak a bekapcsolt típusok jelölhetők ki, így egy zsúfolt rajz szövegét is kijelölheti anélkül, hogy a vonalait is megfogná.
3. Kattintson valamire a kijelöléséhez. A Shift+kattintás hozzáad vagy eltávolít. Üres lapon húzzon dobozt, ha többet jelöl ki: jobbra húzva azok az elemek lesznek kijelölve, amelyek teljesen a dobozban vannak, balra húzva azok, amelyeket érint.

A levágott területen belüli alakzat csak ott jelölhető ki, ahol látszik.

## Mozgatás, méretezés, átszínezés, törlés

- **Mozgatás:** húzza a kijelölt objektumot, vagy nyomja meg a nyílbillentyűket (nagyobb lépésekhez tartsa lenyomva a Shift billentyűt). Húzás közben tartsa lenyomva a Shift billentyűt, hogy egyenesen vízszintesen vagy függőlegesen mozgassa.
- **Méretezés:** húzza a kijelölés körüli nyolc négyzet egyikét. Az objektum az átellenes oldaláról nő vagy zsugorodik. Az arányok megtartásához tartsa lenyomva a Shift billentyűt.
- **Átszínezés:** vonalak és alakzatok esetén állítsa be a {{ui:Vonal színe}}, a {{ui:Kitöltés színe}} és a {{ui:Vonalvastagság (pt)}} értékét a {{ui:Tulajdonságok}} részben.
- **Törlés:** nyomja meg a {{key:Delete}} billentyűt, vagy válassza a {{ui:Törlés az oldalról}} lehetőséget.
- **Visszavonás:** minden módosítás egy lépés: a {{key:Mod+Z}} visszavonja, a {{key:Mod+Y}} visszaállítja.

A {{ui:Visszaállítás az eredetire}} egyszerre visszavonja a kijelölt objektumok minden módosítását; az {{ui:Ez az oldal visszaállítása az eredetire}} ugyanezt teszi az egész oldalon.

## Oldaltartalom másolása, kivágása és beillesztése

Jelöljön ki vonalakat, képeket vagy szöveget a {{ui:Tartalom}} eszközzel, majd:

- A {{key:Mod+C}} másol, a {{key:Mod+X}} kivág (átmásolja, és kiveszi az oldalból), a {{key:Mod+D}} másolatot helyez mellé.
- A {{key:Mod+V}} oldaltartalomként illeszt be, az eredeti mellé vagy ahol a mutató van (ahogy a [Beállítások](topic:settings) leírja); a {{key:Mod+Shift+V}} pontosan ugyanarra a helyre illeszt be. Beilleszthet másik oldalra, egy másik megnyitott PDF-be vagy a böngésző másik MarkupCraft-lapjára.
- A {{ui:Szerkesztés}} csoport menüje és a jobb egérgombbal megnyíló menü ugyanezeket a parancsokat tartalmazza.

A beillesztés a vonalakat vonalként, a szavakat a saját betűtípusukkal szavakként, a képeket képként tartja meg. Egy darabként kezelhető: mozgassa, méretezze a négyzetei segítségével, törölje, vagy vonja vissza a {{key:Mod+Z}} billentyűvel. A mentett másolatban az oldal részévé válik. Az utoljára másolt elem, akár jelölés, akár oldaltartalom, az, amit a {{key:Mod+V}} beilleszt.

A másolat tartalma a kijelölés körüli dobozra szűkül: ami a MarkupCraft nem tud kivenni a másolatból (lásd lent), és ebbe a dobozba esik, az is átkerül.

## Egy vonal pontjainak mozgatása

Kattintson duplán egy vonalra vagy görbére (vagy jelölje ki, és válassza a {{ui:Pontok szerkesztése}} lehetőséget). A pontjai négyzetként, a görbe fogantyúi körként jelennek meg. Húzzon egy pontot vagy fogantyút; a pont a mellette lévő fogantyúkat is magával viszi, így a görbe megtartja az alakját körülötte. Ha készen van, nyomja meg az {{key:Esc}} billentyűt, vagy kattintson a vonalon kívülre.

A téglalapoknak nincsenek húzható pontjaik: méretezze őket a körülöttük lévő négyzetekkel.

## Kép cseréje

Jelöljön ki egy képet, és válassza a {{ui:Kép cseréje…}} lehetőséget, majd válasszon egy PNG, JPEG vagy SVG fájlt (vagy egy PDF-et: annak első oldalát). Az új kép a régi helyére kerül, és megtartja a saját arányait.

## Egy szövegsor szavainak módosítása

Kattintson duplán egy szövegsorra, írja be az új szavakat a {{ui:Szavak}} mezőbe, és nyomja meg az {{key:Enter}} billentyűt. A szavak a sor saját betűtípusával és méretével íródnak, a sor pedig megtartja a hosszát, így az utána lévő szöveg nem mozdul el.

:::note
A legtöbb PDF betűtípusonként csak azokat a betűket tartalmazza, amelyeket használ. Ha olyan betűt ír, amelyet a fájl betűtípusának másolata nem tartalmaz, a MarkupCraft azt Helvetica betűtípussal írja ki, és ezt jelzi. A {{ui:Tulajdonságok}} részben látható, mely betűk vannak a fájlban lévő betűtípusban.
:::

A szöveget soronként módosítja; nem folyik át a következő sorba.

## Amit a MarkupCraft érintetlenül hagy

- **A szkennelt oldalak** egyetlen képek: a képet mozgathatja, méretezheti, cserélheti vagy törölheti, de a tartalmát nem lehet szerkeszteni.
- **Titkosított és aláírt PDF-ek:** az oldal módosítása megtörné az aláírást, ezért a {{ui:Tartalom}} eszköz ezt jelzi, és semmit sem változtat. A jelölések továbbra is működnek.
- **Levágási területek**, az oldaltartalom két része között megosztott objektumok, valamint a teljes területet kitöltő színátmenetek változatlanul maradnak; a MarkupCraft megmondja az okot, amikor megpróbálja.
- **Szavak olyan szabványos betűtípusban, amelyet a PDF nem ír le** (például Times betűtípus, amelyhez a fájl nem tartalmaz betűszélességeket), nem módosíthatók, mert a MarkupCraft nem tudná megtartani a sor távolságát. A sor továbbra is mozgatható.

## Jelölések beépítése az oldalba

A jelölésként rajzolt vonalak, téglalapok, ellipszisek, polivonalak, felhők és tollvonások az oldal részévé válhatnak: jelölje ki őket, és a {{ui:Tulajdonságok}} részben válassza a {{ui:Beépítés az oldalba}} lehetőséget. A szöveg, a bélyegzők, a képek és az áttetsző színek jelölések maradnak.
