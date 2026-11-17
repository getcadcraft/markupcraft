---
title: Két revízió összehasonlítása
summary: Egy lap régi és új kiadását két színben fedje egymásra, igazítsa két ponttal, és felhőzze be, ami változott.
keywords: összehasonlítás, fedvény, lapfedvények, revízió, különbség, különbségek, változások, régi új, igazítás, visszaellenőrzés, kiadás, közlemény
from: 62f5d1c5
---

Az összehasonlítás két lapot fed egymásra. A csak a régi lapon lévő vonalak pirosan, a csak az új lapon lévők kékben, a mindkettőn lévők halvány szürkén jelennek meg. A színeket a lap alatti jelmagyarázat nevezi meg: „Csak a régi lapon”, „Csak az új lapon”, „Mindkettőn”.

## Két lap összehasonlítása

1. Nyissa meg mindkét kiadást. Lehetnek ugyanazon PDF oldalai vagy különböző PDF-ek; nyissa meg őket együtt, egy készletként (lásd: [Több fájl egyidejű kezelése](topic:several-files)).
2. Válassza a jobb oldali {{ui:Összehasonlítás}} lapot.
3. Válassza ki a {{ui:Régi rajzlap}} és az {{ui:Új rajzlap}} lapot. Az új lap az lesz, amelyiken éppen áll. Ha több fájl van megnyitva, minden lap fájlneve a neve után látszik.
4. Válassza az {{ui:Összehasonlítás}} lehetőséget.

Eredmény: a MarkupCraft az új lapot mutatja, bele keverve a régit; megjelenik a jelmagyarázat, a lap pedig ezt írja: „Összehasonlítás: <old> (régi) és <new> (új). Az új lapon lévő jelölések szerkeszthetők maradnak.”

## Áttűnés régi és új között

Húzza a {{ui:Régi és új}} csúszkát. Teljesen balra csak a régi lap látszik, teljesen jobbra csak az új, középen mindkettő. A gyors oda-vissza csúsztatás gyakran a legkönnyebb módja egy kis változás megtalálásának.

## A lapok igazítása

Ha a két kiadást más margóval, mérettel vagy elforgatással nyomtatták, minden változottnak látszik. Javítsa így:

**Két ponttal (a legjobb):**

1. Válassza az {{ui:Igazítás két ponttal}} lehetőséget. A nézet csak a régi lapot mutatja.
2. Kattintson egy éles jellemzőre, amely mindkét lapon megtalálható, például egy oszlopháló metszéspontjára. A lap számolja a lépéseket („1 / 4”).
3. Kattintson egy második jellemzőre, az elsőtől távol, például a szemközti hálósarokra.
4. A nézet átvált az új lapra. Kattintson újra az első jellemzőre.
5. Kattintson újra a második jellemzőre.

Eredmény: „Igazítva: a régi lap 100.00%-ra méretezve, 0.00°-kal elforgatva. Finomhangoláshoz mozgassa.” A régi lap az új lapra illeszkedéséhez mozgatva, méretezve és elforgatva lesz. A {{key:Esc}} kiválasztás közben megszakít. Nagyítson rá minden jellemzőre a kattintás előtt a pontos illesztésért.

**Mozgatással:** a nyíl-gombokkal, amelyek az igazító gombok alatt vannak, mozgassa a régi lapot. Válassza ki a lépésközt (0.25, 1, 5 vagy 20 pt; a papíron 72 pt egy hüvelyk). A lap megmondja, mennyit mozdult el.

A {{ui:Visszaállítás}} eltávolítja az igazítást és a mozgatásokat.

## Csak a változott vonalak

Az igazító gombok alatt a {{ui:Képi átfedés}} helyett válassza a {{ui:Megváltozott vonalak}} lehetőséget. A MarkupCraft ekkor a két lap saját vonalait hasonlítja össze, nem a képüket: az új lap úgy látszik, ahogy van, a csak a régi lapon lévő vonalak pirosan, a csak az újon lévők kékben. Az csak rövidebbé vált vonal csak a hiányzó részt mutatja. Igazítsa előbb a lapokat (lásd fent): az összehasonlítás az igazítást használja, így a csupán eltolt lap nem mutat változást. Az állapotsor megmondja, mennyi változott.

Ez a CAD-ből nyomtatott PDF-ekre működik, ahol a rajz vonalakból áll. A beszkennelt lapokon nincsenek összehasonlítható vonalak: ilyenkor használja a képi átfedést. A betűtípussal írt szöveg (nem vonalként rajzolt) nem hasonlítódik össze.

## A változások megjelölése

Az összehasonlítás közben az új lapon áll, és minden eszköz működik. Felhőkkel jelölje be a változásokat, ahogy megtalálja; az új lapon maradnak, és az összehasonlítás leállítása után is megmaradnak.

A {{ui:A változások felhőbe foglalása}} ezt elvégzi: csoportosítja az egymáshoz közeli változott vonalakat, és minden csoport köré revíziófelhőt rajzol az új lapon, megjegyzésként ezzel: „Változott: <old sheet> óta”. Egy {{key:Mod+Z}} mindet eltávolítja; törölje a nem kellőket.

## Egész készlet összehasonlítása

Ha az új kiadás külön PDF-ként érkezik, nyissa meg mindkét PDF-et, és az {{ui:Összehasonlítás}} lapon nyissa meg a {{ui:Két készlet összehasonlítása}} lehetőséget. Válassza ki a régi és az új fájlt, majd válassza a {{ui:A készletek összehasonlítása}} lehetőséget. A lapokat a számuk alapján párosítjuk (lásd: [lapbetétezés](topic:slip-sheet-a-revised-set)), a vonalaik alapján hasonlítjuk össze, és a legtöbbet változottal kezdve listázzuk. Válasszon egy lapot a listában, hogy a párt a {{ui:Megváltozott vonalak}} szerint hasonlítsa össze.

A {{ui:Minden változás felhőbe foglalása}} minden változott lap minden változott vonalcsoportját felhőbe foglalja, egyetlen, visszavonható lépésben. A készlet-összehasonlítás nem igazítja előbb a lapokat, így az oldalon eltolt lap változottnak látszik: hasonlítsa össze ezt a párt külön, és használja az {{ui:Igazítás két ponttal}} lehetőséget.

## Az összehasonlítás leállítása

Válassza az {{ui:Összehasonlítás leállítása}} lehetőséget, vagy lépjen egy másik lapra. Az igazítás ugyanarra a lappárra megmarad, amíg be nem zárja a készletet.

## Jó tudni

- Az összehasonlítás azon dolgozik, ami rajzolva van, pixelről pixelre. Nem tudja, hogy egy vonal elmozdult; az egyik színben a régi, a másikban az új helyzetet mutatja.
- Az átrendeződött szöveg, a módosított címfej-dátum vagy egy másik nyomtatási stílus szintén változásként jelenik meg.
- A beszkennelt lap összehasonlítva egy nyomtatottal zajos: a szkennelés elmossa és eltolja a vonalakat.
- A betűtípussal írt szöveg összehasonlítása és a változások listája még nincs elkészítve.
