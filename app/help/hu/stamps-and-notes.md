---
title: Bélyegzők és ragasztott jegyzetek
summary: Bélyegezze le a rajzlapot Jóváhagyva, Javítás és újra benyújtás vagy saját szöveggel, és hagyjon ragasztott jegyzeteket, amelyek felugró megjegyzésként nyílnak meg.
keywords: bélyegző, kép, képfájl, képbeillesztés, képernyőkép, vágólap, logó, fényképes bélyegző, aláírás, aláír, jóváhagyva, jóváhagyva megjegyzésekkel, javítás és újra benyújtás, elutasítva, felülvizsgálva, érvénytelen, egyéni bélyegző, ragasztott jegyzet, megjegyzés, hozzászólás, felugró
from: 76026792
---

## Rajzlap bélyegzése

1. Válassza a {{ui:Stamp}} eszközt ({{key:S}}).
2. A jobb oldalon lévő {{ui:Properties}} panelen válassza ki a bélyegzőt a {{ui:Stamp}} alatt:
   - Jóváhagyva
   - Jóváhagyva, megjegyzésekkel
   - Javítás és újra benyújtás
   - Elutasítva
   - Felülvizsgálva
   - Érvénytelen
   - Egyéni szöveg… (legfeljebb 60 karaktert írjon be a megjelenő mezőbe, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson máshova)
3. Kattintson a rajzlap arra a pontjára, ahová a bélyegző kerül. Vagy húzzon egy keretet a méret kiválasztásához.

Eredmény: nagybetűs, keretezett bélyegző, a második sorában a „Készítette: <név>, <dátum>” felirattal. A kattintással elhelyezett bélyegző képernyőmérete a nagyítástól függ; a nyomtatott rajzlapon 0,5 in és 1 1/4 in magasság között marad.

A kiválasztott bélyegző a következő bélyegzőnél is kiválasztva marad, a MarkupCraft újranyitása után is, ebben a böngészőben.

**A színek a jelentést követik:** a Jóváhagyva bélyegzők zöldek, a Javítás és újra benyújtás narancssárga, az Elutasítva és az Érvénytelen piros, a Felülvizsgálva kék, az egyéni bélyegzők lilák. Ha a {{ui:Properties}} panelen másik színt választ, az a szín megmarad.

### Bélyegző módosítása később

Jelölje ki, majd válasszon másik bélyegzőt a {{ui:Properties}} panelen. Ha még az automatikus színét viseli, a szín a jelentésnek megfelelően változik.

A bélyegzőn lévő név és dátum a bélyegző készítőjét és az elkészítés napját mutatja. Szerkesztéskor nem változnak, és a bélyegző szerzője nem módosítható. Ha valaki más nevében szeretne bélyegezni, neki kell beállítania a saját nevét, és ő maga bélyegezzen.

:::note
A bélyegzőn lévő dátum a koordinált világidő (UTC) szerinti dátum. Amerikában késő este, vagy Ázsiában és Ausztráliában kora reggel a dátum eggyel később vagy korábban lehet, mint az órája szerint. A {{ui:Properties}} panelen lévő létrehozási idő a saját időzónájában látszik.
:::

### Gyakran használt bélyegzők

Az eszköztár tartalmaz egy „Jóváhagyva, megjegyzésekkel” bélyegzőeszközt, és bármely bélyegzőt (szövegét és színét) külön eszközként is elmentheti. Lásd: [Az eszközláda](topic:tool-chest).

A kitöltendő mezőkkel (átvétel dátuma, projektszám) rendelkező bélyegzők még nincsenek elkészítve.

## Kép vagy aláírás bélyegzése

A {{ui:Properties}} panel bélyegzőlistája még két lehetőséggel végződik:

- A {{ui:Picture…}} PNG-, JPEG- vagy SVG-fájlt kér ezen a számítógépen, vagy egy PDF oldalát, például céges pecsétet vagy logót. A nagy képek a hosszabbik oldalukon 1600 pixelre kicsinyítődnek; az SVG-fájl vagy PDF-oldal ekkora képpé alakul.
- A {{ui:My signature…}} aláírómezőt nyit meg: aláírjon egérrel, tollal vagy ujjal, majd válassza a {{ui:Use this signature}} lehetőséget. A {{ui:Clear}} újrakezdi. A {{ui:Use a picture of a signature…}} lehetőséggel egy aláírásról készült szkennelt vagy fényképezett képet tölthet be: a MarkupCraft átlátszóvá teszi a fehér papírt, és a képet a tintához igazítja (PNG esetén előbb rákérdez).

Ezután kattintson a rajzlapra a kép elhelyezéséhez (a kép 3 in széles, az aláírás 2 in széles), vagy húzzon egy keretet, hogy beleférjen; az arányok megmaradnak. Átméretezéséhez használja a fogópontjait, ahogy bármely más jelölésnél; a {{key:Shift}} billentyű megtartja az arányokat.

Az utolsó képet a rendszer ebben a böngészőben tárolja, így legközelebb készen áll; a {{ui:Choose another picture…}} lehetőség cseréli. Minden rajzolt vagy betöltött aláírás a következő helyen marad meg: {{ui:Your signatures}} (legfeljebb nyolc, a legújabb elöl). Kattintson egyre a használatához, vagy a × jelre az eltávolításhoz. Lásd: [Mi marad meg ebben a böngészőben](topic:browser-storage).

A mentett PDF-ben a kép bélyegző-megjegyzés, amely megjeleníti a képet, így bármely PDF-megjelenítő mutatja és nyomtatja. Az itt rajzolt aláírás az aláírás képe, nem tanúsított digitális aláírás.

## Kép beillesztése a vágólapról

Másoljon képet egy másik programból, vagy készítsen képernyőképet a vágólapra, majd nyomja meg a {{key:Mod+V}} billentyűt a rajzlap fölött. A kép a mutató helyére kerül, legfeljebb 3 in széles vagy magas méretben, arányai megtartásával, jelölésként, amelyet mozgathat és átméretezhet. A mentett PDF-ben a fenti képekhez hasonlóan bélyegző-megjegyzés lesz.

A {{ui:More}} › {{ui:Paste a picture}} parancs az {{ui:Edit}} csoportban ugyanezt teszi a menüből; a böngésző előbb rákérdezhet. Ha a vágólap nem tartalmaz képet, a {{key:Mod+V}} a korábbi módon a másolt jelöléseket illeszti be.

## Kép beszúrása fájlból

Válassza a {{ui:More}} › {{ui:Insert a picture from a file…}} lehetőséget az {{ui:Edit}} csoportban (vagy a {{ui:Insert a picture here…}} lehetőséget a jobb egérgombos menüben), majd válasszon PNG-, JPEG- vagy SVG-fájlt, vagy PDF-et (a több oldalas PDF-nél megkérdezi, melyik oldalt). A PNG-, JPEG- vagy SVG-fájlt a rajzlapra is húzhatja: oda kerül, ahová elengedi. A kép jelölés, legfeljebb 3 in széles vagy magas: mozgassa és méretezze, mint bármely más jelölést.

Ahhoz, hogy a kép az oldal része legyen, jelölje be a {{ui:Flatten into the page when saved}} jelölőnégyzetet a {{ui:Properties}} panelen. Lásd: [Lapított másolat mentése](topic:flatten).

## Bélyegző készítése kijelölésből

Jelöljön ki jelöléseket (vagy oldaltartalmat a {{ui:Content}} eszközzel), és válassza a {{ui:More}} menü {{ui:Save selection as a stamp…}} lehetőségét, a jobb egérgombos menüben, vagy a {{ui:Properties}} panel {{ui:Save as a stamp…}} lehetőségét. Adjon neki nevet. A bélyegző az eszközládába kerül: kattintson rá ott, majd bármely rajzlapra kattintva helyezze el az összes kijelölt elemet együtt, a kattintás helyére központosítva. Lásd: [Az eszközláda](topic:tool-chest).

## Ragasztott jegyzetek

1. Válassza a {{ui:Note}} eszközt ({{key:N}}).
2. Kattintson arra a helyre, ahová a jegyzet kerül. Megjelenik egy kis jegyzetikon, mellette egy doboz.
3. Írja be a jegyzetet. Kattintson kívülre, vagy nyomja meg a {{key:Mod+Enter}} billentyűt a megtartáshoz; az {{key:Esc}} billentyű eldobja.

A szövegdobozokkal és kiemelésekkel ellentétben a jegyzet akkor is megmarad, ha nem írt be semmit, így az ikont most elhelyezheti, és később írhat.

- A jegyzet szövege a {{ui:Properties}} panel {{ui:Note}} mezőjében van. Kattintson duplán az ikonra (vagy jelölje ki, majd nyomja meg az {{key:Enter}} billentyűt), hogy a rajzlapon szerkeszthesse.
- A rajzlapon csak az ikon látszik. Más PDF-megjelenítők egy szabványos ragasztott jegyzetet mutatnak, amely kattintásra megnyílik a szöveggel.
- Az ikon színét a {{ui:Properties}} panel {{ui:Color}} beállításával módosíthatja.

Beszélgetéshez inkább bármely jelölés válaszláncát használja: lásd [Állapotok és válaszok](topic:statuses-and-replies).
