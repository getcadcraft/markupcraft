---
title: Kijelölés, mozgatás és jelölések módosítása
summary: Jelöléseket kijelölhet kattintással vagy ablakkal, mozgathat, átméretezhet, finoman eltolhat, kivághat, másolhat, beilleszthet, helyben beilleszthet, kettőzhet, törölhet és visszavonhat.
keywords: kijelölés, kijelölt, összes kijelölése, ablak, keresztező, mozgatás, átméretezés, fogópontok, finom eltolás, kivágás, másolás, beillesztés, beillesztés helyben, kettőzés, vágólap, másik lap, törlés, visszavonás, ismétlés, szerkesztés
from: 62c7def3
---

Először válassza a {{ui:Kijelölés}} ({{key:V}}) parancsot. A {{key:Esc}} billentyű is ide visz: az első lenyomás törli a kijelölést, a következő visszavált a {{ui:Kijelölés}} eszközre.

## Jelölések kijelölése

:::mouse
- **Egy jelölés:** kattintson rá. Szaggatott keret és fogópontok jelennek meg, a {{ui:Tulajdonságok}} pedig megmutatja.
- **Egy hozzáadása vagy eltávolítása:** tartsa lenyomva a {{key:Shift}} billentyűt, és kattintson.
- **Teljesen egy ablakon belül:** húzzon balról jobbra a rajzlap egy üres részén. Csak a dobozon teljesen belül lévő jelölések kerülnek kijelölésre (folytonos körvonal).
- **Az ablakot érintők:** húzzon jobbról balra. Minden kijelölődik, amit a doboz érint (zöld, szaggatott körvonal).
- **Minden ezen a rajzlapon:** {{key:Mod+A}}, vagy a {{ui:Továbbiak}}, majd az eszköztár {{ui:Szerkesztés}} csoportjában az {{ui:Összes kijelölése}}.
- **Semmi:** kattintson egy üres helyre, nyomja meg az {{key:Esc}} billentyűt, vagy válassza a {{ui:Továbbiak}}, majd a {{ui:Kijelölés megszüntetése}} lehetőséget.
:::

:::touch
- **Egy jelölés:** koppintson rá.
- **Több:** húzzon egy ujjal a rajzlap egy üres részén, így ablakot rajzol. Balról jobbra a teljesen bentlévőket jelöli ki, jobbról balra az érintetteket.
- A {{key:Shift}} tartásával történő koppintás csak billentyűzet csatlakoztatása esetén működik. Billentyűzet nélkül használjon ablakot.
- A {{ui:Kijelölés}} módban egy ujjal nem lehet eltolni a lapot; használjon két ujjat, vagy a {{ui:Eltolás}} eszközt.
:::

A fájllal együtt érkezett, csak olvasható megjegyzések szürke szaggatott dobozt kapnak, fogópontok nélkül. Ki lehet őket jelölni és lehet rájuk válaszolni, de nem módosíthatók.

## Mozgatás és átméretezés

- **Mozgatás:** húzza a kijelölt jelölést. A {{key:Shift}} tartásával csak 45°-os többszörösei mentén mozgatja. Több kijelölt jelölés együtt mozog.
- **Átméretezés:** egyetlen kijelölt jelölésnél húzzon egy fogópontot. A négyzet alakú fogópontok a dobozt méretezik (a {{key:Shift}} tartásával megőrzi az arányokat); a kerek fogópontok egy vonal, sokszög, felhő vagy mérés egyik sarokpontját mozgatják (a {{key:Shift}} tartásával 45°-ra); a rombusz alakú fogópontok a kiemelés (callout) csúcsát és törését mozgatják. A tollvonások a dobozukkal együtt méreteződnek.
- **Finom eltolás:** a nyílbillentyűkkel a kijelölést egy képernyőpixellel mozgathatja; a {{key:Shift}} tartásával tízszer ekkora lépésben. Minden lenyomás egy visszavonási lépés.

## Szöveg vagy megjelenés módosítása

- **Szöveg, kiemelések és megjegyzések:** kattintson duplán a jelölésre, vagy nyomja meg az {{key:Enter}} billentyűt, vagy válassza a {{ui:Szerkesztés a rajzlapon}} lehetőséget a {{ui:Tulajdonságok}} panelben. Írjon, majd kattintson kívülre, vagy nyomja meg a {{key:Mod+Enter}} billentyűkombinációt. Az {{key:Esc}} megszakítja a szerkesztést.
- **Bélyegzők:** a {{ui:Tulajdonságok}} panelben válasszon másik bélyegzőt (a duplakattintás megnyitja a {{ui:Tulajdonságok}} panelt).
- **Stílus:** a {{ui:Szín}}, a {{ui:Vonalvastagság}}, a {{ui:Kitöltés}}, az {{ui:Átlátszatlanság}} és a {{ui:Szövegméret}} a {{ui:Tulajdonságok}} panel „Stílus” részében találhatók. Több kijelölés esetén a {{ui:Tulajdonságok}} a kiválasztott fajtákat mutatja, és egyszerre mindet módosítja.

## Másolás, beillesztés és kettőzés

Az eszköztár {{ui:Szerkesztés}} csoportjában található a {{ui:Másolás}} és a {{ui:Beillesztés}}; a {{ui:Továbbiak}} menüben mind megtalálható, a gyorsbillentyűjükkel együtt.

| Parancs | Billentyű | Mit tesz |
|---|---|---|
| {{ui:Kivágás}} | {{key:Mod+X}} | Másolja a kijelölt jelöléseket, majd törli őket |
| {{ui:Másolás}} | {{key:Mod+C}} | Másolja a kijelölt jelöléseket |
| {{ui:Beillesztés}} | {{key:Mod+V}} | A látott rajzlapra helyez egy másolatot (hogy hová, lent) |
| {{ui:Beillesztés helyben}} | {{key:Mod+Shift+V}} | Pontosan oda helyezi a másolatot, ahonnan másolták: ugyanazon a rajzlapon az eredeti fölé; másik rajzlapon ugyanarra a helyre a papíron |
| {{ui:Kettőzés}} | {{key:Mod+D}} | Készít egy másolatot a kijelölésből kicsit lejjebb és jobbra, anélkül hogy a korábban másolt elemeket érintené |

**Hová kerül a beillesztett másolat:**

- A {{key:Mod+V}}, ha a mutató a rajzlapon van, a másolatot a mutató helyére középre illeszti. Mozgassa a mutatót, nyomja meg újra a {{key:Mod+V}} billentyűt, és máshova helyez egy újabbat.
- A {{ui:Beillesztés}} gomb (ilyenkor a mutató az eszköztáron van), vagy a {{key:Mod+V}} a rajzlapon kívül, az eredetitől kicsit lejjebb és jobbra helyezi el. Ugyanazon másolat minden újabb beillesztése egy kicsit tovább lép, így a másolatok nem takarják egymást. Másik rajzlapon az első beillesztés arra a helyre kerül, ahol az eredeti volt a saját rajzlapján. Ha az a hely nincs a látómezőben, a másolat a nézet közepére kerül.
- Hogy a {{key:Mod+V}} mindig az eredeti mellé illesszen be, válassza a [MarkupCraft beállításai](topic:settings) között a {{ui:Beillesztés}} alatt az {{ui:A másolat mellé}} lehetőséget.

A beillesztett jelölések ki vannak jelölve, így azonnal húzhatók. Minden kivágás, beillesztés vagy kettőzés egy visszavonási lépés: a {{key:Mod+Z}} az egész beillesztést visszavonja.

A beillesztett másolatok új jelölések: megkapják a névbeállításban megadott nevet, a mai dátumot, a Nyitott állapotot, hibalistaszám nélkül és üres válaszlánccal. Fajtájuk, alakjuk, stílusuk, szövegük és megjegyzésük átkerül. A fájllal érkezett, csak olvasható megjegyzések nem másolhatók és nem vághatók ki.

**Fülek között:** amit másol, az a böngészőben is megmarad, így ugyanezen böngésző másik MarkupCraft-lapja is be tudja illeszteni. A jelölések másolása nem használja a számítógép vágólapját: más programba nem illeszthetők be, és egy máshol másolt szöveg nem illeszthető be jelölésként.

**Jobb gombos menü:** jobb gombbal kattintson egy jelölésre (vagy üres papírra), hogy megkapja a {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés ide}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:A kijelölés mentése bélyegzőként…}}, {{ui:Laposítás az oldalba mentéskor}}, {{ui:Kép beszúrása ide…}} és {{ui:Összes kijelölése}} parancsokat. Ha a jelölés nincs kijelölve, a jobb gombos kattintás előbb kijelöli. A jobb gombbal húzás továbbra is eltol. Érintőképernyőn a jelölésen tartott hosszú érintés ugyanezt a menüt nyitja meg (szövegen pedig a szövegszerkesztés indul). A menü billentyűje vagy a {{key:Shift+F10}} a kijelölésnél nyitja meg a menüt.

Az oldal tartalma, amelyet a {{ui:Tartalom}} eszközzel jelöl ki, szintén másolható és beilleszthető: lásd [Az oldal saját vonalainak, képeinek és szövegének módosítása](topic:page-content).

Az oldal egy részének képként (téglalap, ellipszis vagy szabad alakzat), vagy egy másik rajzlaphoz vagy alkalmazáshoz átlátszó rávetítésként való másolásához lásd: [Az oldal egy területének vagy rávetítésének másolása](topic:copy-an-area).

## Törlés

Nyomja meg a {{key:Delete}} vagy a {{key:Backspace}} billentyűt, válassza az eszköztárban a {{ui:Továbbiak}}, majd a {{ui:Törlés}} lehetőséget, vagy a {{ui:Tulajdonságok}} panelben a {{ui:Törlés}} gombot. Az állapotsor megmondja, hány jelölés lett törölve. A fájlból származó, csak olvasható megjegyzések soha nem törlődnek („a fájlban megtartva”).

## Visszavonás és ismétlés

- A {{key:Mod+Z}} visszavon, a {{key:Mod+Y}} vagy a {{key:Mod+Shift+Z}} ismétel. Az eszköztáron a {{ui:Visszavonás}} és az {{ui:Ismétlés}} gomb található.
- Az állapotsor megmondja, mi lett visszavonva („Visszavonva: jelölés mozgatása.”).
- A visszavonás minden változásra vonatkozik: jelölésekre, állapotokra, válaszokra, hibalista-tételekre, rajzlapok méretarányára és rajzlapnevekre, legfeljebb 500 lépésig.
- Bezáráskor a visszavonási előzmények törlődnek.

## Jelölések másolása más rajzlapokra

Ha ugyanazt a bélyegzőt, megjegyzést vagy revíziófelhőt több rajzlapra szeretné tenni, jelölje ki (vagy több jelölést), és a {{ui:Tulajdonságok}} panelben válassza a {{ui:Másolás más rajzlapokra…}} lehetőséget. Jelölje be a rajzlapokat, vagy az {{ui:Összes rajzlap}} lehetőséget, majd válassza a {{ui:Másolás}} gombot. Minden rajzlap ugyanazon a helyen kap egy másolatot, a névbeállításban megadott nevével. Egy {{key:Mod+Z}} mindet eltávolítja.
