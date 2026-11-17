---
title: Tervkészlet megnyitása és mozgás a rajzlapok között
summary: Egy vagy több PDF megnyitása, vagy indulás üres oldalakkal, rajzlapok keresése szám vagy név szerint, nagyítás és eltolás, valamint rajzlap átnevezése, ha a fájl rosszul nevezte el.
keywords: megnyitás, új, üres oldal, üres rajzlap, vázlat, rács, névtelen, tervkészlet, rajzlapok, oldalak, bélyegképek, oldalcímkék, rajzlapszám, rajzfej, átnevezés, navigálás, nagyítás, eltolás, illesztés, rajzlapok keresése
from: 1e7f4d50
---

## A készlet megnyitása

1. Válassza az eszköztáron a {{ui:Megnyitás}} lehetőséget, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt.
2. A fájlválasztóban jelölje ki a készlet összes PDF-jét ({{pick:mac=tartsa lenyomva a ⌘ billentyűt, és kattintson minden fájlra|windows linux=tartsa lenyomva a Ctrl billentyűt, és kattintson minden fájlra}}, vagy jelöljön ki tartományt a Shift billentyűvel), majd erősítse meg.
   Vagy húzza a fájlokat a rajzlap területére a fájlkezelőből ({{pick:mac=Finder|windows=File Explorer|linux=a saját fájlkezelője}}). Húzás közben megjelenik ez a felirat: „Húzza ide a PDF-eket a megnyitáshoz”.
3. Várjon, amíg az állapotsor kiírja: „Megnyitás: <file>…”. Nagy fájloknál számlál is: „(10 / 60 rajzlap)”.

Eredmény: a {{ui:Rajzlapok}} listában minden fájl minden oldala megjelenik a megnyitás sorrendjében, az állapotsor pedig valami ilyesmit ír ki: „3 fájl megnyitva (42 rajzlap a készletben).” Ha a fájlokban már voltak megjegyzések, azt is kiírja, hány került beolvasásra.

Ha később további fájlokat szeretne a készlethez adni, ugyanígy nyissa meg őket. A lista végére kerülnek.

## Indítás üres oldalakkal

Ha rajz nélkül szeretne vázlatot készíteni vagy jegyzetelni, PDF megnyitása helyett üres oldalakat hozzon létre:

1. Válassza az eszköztáron a {{ui:Új}} lehetőséget, vagy a kezdőképernyőn az {{ui:Indítás üres oldallal}} lehetőséget, vagy nyomja meg a {{key:Mod+N}} billentyűkombinációt ott, ahol a böngészője engedi (az asztali alkalmazás és a Studio mindig engedi).
2. Adja meg a {{ui:Papírméret}} értékét: Letter, Tabloid vagy ANSI B, ARCH D, ARCH E, A4, A3 vagy A1, és a tájolást: {{ui:Álló}} vagy {{ui:Fekvő}}.
3. Válassza ki a {{ui:Rács}} beállítását: {{ui:Nincs}}, {{ui:Pontok}} vagy {{ui:Négyzetek}}. A rács hüvelykes papíron 1/4 in-enként jelenik meg, minden hüvelyknél vastagabb vonallal; metrikus papíron 5 mm-enként, minden 10 mm-nél vastagabb vonallal. A rács a lapra nyomtatódik.
4. Írja be az {{ui:Oldalak}} számát (1 és 20 között), majd válassza a {{ui:Létrehozás}} gombot.

Eredmény: új PDF jön létre „Untitled-1.pdf” névvel („Untitled-2.pdf”, és így tovább), amely úgy nyílik meg, mint bármely más fájl, és ezen a számítógépen készül el. Minden eszköz működik rajta, a {{ui:Mentés}} pedig az „Untitled-1 (marked up).pdf” fájlt tölti le. A MarkupCraft a következő alkalomra megjegyzi a beállításait.

Az oldalaknak nincs méretarányuk: az állapotsor ezt írja ki: „Nincs kalibrálva”. A rács nem méretarány. Méréshez kalibrálja a rajzlapot, vagy előbb válasszon méretarányt; lásd [Kalibrálás és mérés](topic:calibrate-and-measure).

Üres készlethez oldal hozzáadásához nyisson meg egy rajzlapot, és a {{ui:Rajzlapok}} lista alatt válassza az {{ui:Üres oldal hozzáadása}} lehetőséget. Az új oldal ugyanolyan papírral és ráccsal készül, és a végére kerül. Mint minden oldalmódosítás, ez sem vonható vissza; lásd [Nyomtatás, és a PDF oldalainak módosítása](topic:pages-and-printing).

## Hogyan kapják a rajzlapok a nevüket

A MarkupCraft minden rajzlapot „<sheet number> — <title>” alakban nevez el, például „A-101 — Floor plan”, az alábbiak közül az első megtalált alapján:

1. Az {{ui:Rajzlap átnevezése}} gombbal megadott név (lejjebb).
2. A PDF saját oldalcímkéi, ha a PDF készítője beállította őket (például „A-101”).
3. A rajzfej: a MarkupCraft beolvassa az oldal szövegét, és rajzlapszámra emlékeztető alakot keres (A-101, A1.01, M-201A, KA1-1), előnyben részesíti a jobb alsó sarkot, a jobb oldali sávot és az alsó sávot, és a közelében lévő legnagyobb szöveget veszi címnek.
4. Egyébként a fájlnév és az oldal: „Plans — page 3”.

Annak megtekintéséhez, melyik lett használva, nyomja meg addig az {{key:Esc}} billentyűt, amíg nincs semmi kijelölve, és a {{ui:Kijelölés}} eszköz be van kapcsolva, majd nézze meg a {{ui:Tulajdonságok}} részt: a „Forrás” mezőben ez áll: „Az oldalcímke”, „A rajzfej”, „A fájlnév” vagy „Kézzel megadva”.

:::note
A szkennelt rajzlapoknak, és azoknak a PDF-eknek, amelyek betűit vonalakként exportálták, nincs olvasható szövegük. Addig fájl és oldal szerint kapnak nevet, amíg át nem nevezi őket. A MarkupCraft egyelőre nem tud szöveget olvasni képekből.
:::

## Mozgás a rajzlapok között

- Kattintson egy rajzlapra a {{ui:Rajzlapok}} listában.
- A következő rajzlaphoz nyomja meg a {{key:PageDown}} billentyűt, az előzőhöz a {{key:PageUp}} billentyűt, vagy használja a rajzlap alatti sávban lévő nyilakat.
- Írjon a {{ui:Rajzlapok keresése}} mezőbe: a szám egy részét („A-2”), a cím egy szavát („tető”) vagy egy fájlnevet. A lista szűkül, ahogy ír („4 / 42”). Az első találat megnyitásához nyomja meg az {{key:Enter}} billentyűt. A mező kiürítésével újra minden rajzlap látható.

Minden rajzlap megtartja a saját nagyítását és helyzetét, amíg be nem zárja a készletet.

## Nagyítás és eltolás

:::mouse
- **Nagyítás:** görgesse a kereket a rajzlap fölött. A nagyítás a mutató körül történik. Vagy nyomja meg a {{key:Plus}} és a {{key:Minus}} billentyűt (a {{key:Mod}} billentyűvel is), vagy használja a nagyítógombokat. A nagyítási mezőbe pontos százalékot is beírhat.
- **Illesztés:** az {{ui:Oldal illesztése}} ({{key:Mod+0}}) a teljes rajzlapot mutatja; a {{ui:Szélesség illesztése}} ({{key:Mod+9}}) a szélességet tölti ki.
- **Eltolás:** húzzon a középső egérgombbal (a görgővel), vagy a jobb egérgombbal, vagy tartsa lenyomva a {{key:Space}} billentyűt, és húzzon, vagy válassza az {{ui:Eltolás}} ({{key:H}}) lehetőséget, és húzzon. Ha nincs semmi kijelölve, a nyílbillentyűk is mozgatják a rajzlapot.
:::

:::mac mouse
Mac trackpaden a kétujjas görgetés nagyít (nem görgeti a rajzlapot). Az eltoláshoz tartsa lenyomva a {{key:Space}} billentyűt, és húzzon egy ujjal, vagy váltson az {{ui:Eltolás}} eszközre a {{key:H}} billentyűvel. A csippentés a Chrome, az Edge és a Firefox böngészőben nagyít.
:::

:::touch
- **Nagyítás és eltolás:** tegyen két ujját a rajzlapra. Széthúzással vagy összecsippentéssel a két ujj közötti pont körül nagyít, együttes mozgatással eltol. Mindkettő egyszerre történik.
- **Eltolás egy ujjal:** először válassza az {{ui:Eltolás}} eszközt. Bármely más eszköznél egy ujjal rajzol vagy jelöl ki.
- Az {{ui:Oldal illesztése}} és a {{ui:Szélesség illesztése}} a rajzlap alatti sávban vannak.
:::

A rajzlapnál jóval messzebb is kicsinyíthet, és 6400%-ig nagyíthat. A rajzlap a mozgás befejezése után pillanatokkal élesen újrarajzolódik.

## Könyvjelzők

A {{ui:Könyvjelzők}} a {{ui:Rajzlapok}} panel tetején látható, és a megnyitott rajzlap PDF-jének könyvjelzőit (tartalomjegyzékét) mutatja. Válasszon egyet, hogy odaugorjon az oldalra. A ceruza átnevezi a könyvjelzőt, a kereszt pedig törli. A {{ui:Létrehozás a rajzlapokból}} minden rajzlaphoz egy könyvjelzőt készít, a rajzlapok listájában látott nevekkel (rajzlapszám és cím), a {{ui:Hozzáadás ehhez a rajzlaphoz}} pedig a jelenlegi rajzlaphoz ad egyet. A változások a fájl nem mentett munkájának részei: a {{ui:Mentés}} beírja őket a másolatba, ahol minden PDF-megjelenítő megmutatja őket.

## A nézet forgatása

A rajzlap alatti sáv jobb oldalán lévő két forgatógomb negyed fordulattal forgatja a nézetet bármelyik irányba, oldalra fektetett rajzlapok esetén. Csak a nézet fordul el: a PDF és a jelölései változatlanok maradnak, a következő rajzlap pedig úgy nyílik meg, ahogy a PDF-je van (a készlet nyitva tartása alatt minden rajzlap megjegyzi a saját fordítását). A forgatott nézetben hozzáadott szöveg úgy olvasható egyenesen, ahogy látja. Az elmentett PDF oldalának forgatásához használja az {{ui:Oldalak}} menüt, majd a {{ui:Oldal forgatása az óramutató járásával egyezően}} parancsot; lásd [Nyomtatás, és a PDF oldalainak módosítása](topic:pages-and-printing).

## Rajzlap átnevezése

Ha a rajzlap neve hibás vagy hiányzik:

1. Jelenítse meg a rajzlapot.
2. Nyomja meg az {{key:Esc}} billentyűt, amíg nincs semmi kijelölve, és a {{ui:Kijelölés}} eszköz be van kapcsolva. A {{ui:Tulajdonságok}} most már a rajzlapot mutatja.
3. Válassza a {{ui:Rajzlap átnevezése}} lehetőséget.
4. Írja be a {{ui:Rajzlap száma}} és a {{ui:Cím}} mezőt, majd válassza a {{ui:Mentés}} lehetőséget.

Eredmény: a rajzlapok listája, a rajzlap alatti sáv és a jelölések listája mind az új nevet használják, a „Forrás” mezőben pedig „Kézzel megadva” áll. Az átnevezés a {{key:Mod+Z}} billentyűvel visszavonható.

Ha vissza szeretné állítani a fájl szerinti nevet, nyissa meg újra a {{ui:Rajzlap átnevezése}} parancsot, ürítse ki mindkét mezőt, és válassza a {{ui:Mentés}} lehetőséget.

Mentéskor a kézzel megadott rajzlapszám a PDF oldalcímkéje lesz, így más PDF-megjelenítők is megmutatják az „A-101” feliratot az oldaldobozukban. Ha egy fájl bármely oldalának számot ad, a fájl minden oldala címkét kap a másolatban (a kézzel megadott száma, különben a régi címkéje, különben az oldalszáma). A kézzel megadott cím a MarkupCraftnak megmarad, de más megjelenítők nem mutatják.

## A PDF átvitele a TakeoffCraftba, vagy behozatala ide

Ha a TakeoffCraft ugyanazon a helyen van megnyitva (a labor, a Try vagy az online alkalmazások), a rajzlap alatti sávban megjelenik a {{ui:Megnyitás a TakeoffCraftban}} gomb. Az a rajzlap PDF-jét új lapon nyitja meg a TakeoffCraftban úgy, ahogy itt megnyitották, hogy mennyiségeket mérhessen rajta. A jelölései itt maradnak; mentse őket szokásos módon.

A TakeoffCraft {{ui:MarkupCraft}} gombja fordítva ugyanezt teszi: a PDF itt nyílik meg, mintha a {{ui:Megnyitás}} lehetőséget választotta volna. Ha a böngésző letiltja az új lapot, engedélyezze a felugró ablakokat ehhez a webhelyhez, és válassza újra a gombot.
