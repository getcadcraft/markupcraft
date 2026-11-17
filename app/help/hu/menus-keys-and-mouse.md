---
title: Menük, billentyűk és egér
summary: Válassza a MarkupCraft saját eszköztárát, egy PDF-átnézési menüsort vagy szalagot, adjon bármely eszköznek saját billentyűt, mozgassa az eszközöket a menük között, és állítsa be, mit csinálnak a görgő és az egér gombjai.
keywords: menüstílus, menük, menüsor, eszköztár, szalag, lapok, pdf-átnézés, billentyűparancsok, gyorsbillentyűk, billentyűk, testreszabás, újrakötés, egér, görgő, megfordítás, nagyítás iránya, középső gomb, jobb gomb, eltolás, exportálás, importálás, váltás, ismerős
from: 081438a6
---

A MarkupCraft eszközei ugyanúgy érhetők el, bárhonnan is nyúl hozzájuk. A **menüstílus** csak azt dönti el, hol vannak a képernyőn, mi a nevük, és melyik billentyű választja ki őket. Válassza ki a {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menük, billentyűk és egér}} menüpontot; a változás azonnal érvényes, és ez a böngésző megjegyzi.

## A három stílus

| Stílus | Mit kap |
|---|---|
| {{ui:MarkupCraft}} | A MarkupCraft saját eszköztára (Fájl, Kijelölés, Rajzolás, Módosítás, Jegyzetelés, Mérés, Szerkesztés) és egybetűs billentyűi: {{key:V}} kijelölés, {{key:H}} eltolás, {{key:P}} toll, {{key:I}} kiemelő, {{key:L}} vonal, {{key:A}} nyíl, {{key:R}} téglalap, {{key:E}} ellipszis, {{key:C}} felhő, {{key:K}} kiemelés, {{key:T}} szöveg, {{key:N}} megjegyzés, {{key:S}} bélyegző, {{key:M}} hossz, {{key:Q}} terület, {{key:U}} darabszám. Az alapértelmezés. |
| {{ui:PDF-átnézés}} | Menüsor ({{ui:Fájl}}, {{ui:Szerkesztés}}, {{ui:Nézet}}, {{ui:Dokumentum}}, {{ui:Jelölés}}, {{ui:Mérés}}, {{ui:Átnézés}}, {{ui:Ablak}}) egy sor átnézési eszköz felett, a billentyűk pedig úgy vannak kiosztva, ahogy a PDF-átnéző programok osztják ki: {{key:V}} kijelölés, {{key:Shift+V}} eltolás, {{key:H}} kiemelő, {{key:Q}} kiemelés, {{key:N}} sokszög, {{key:Shift+N}} polivonal, {{key:Shift+T}} megjegyzés, {{key:Shift+A}} ív, a mérések pedig az {{key:Alt+Shift}} billentyűkön: {{key:Alt+Shift+K}} kalibrálás, {{key:Alt+Shift+L}} hossz, {{key:Alt+Shift+G}} szög, {{key:Alt+Shift+A}} terület, {{key:Alt+Shift+C}} darabszám. Az {{key:Alt+L}} megnyitja a jelölések listáját. A középső gomb eltol; a jobb kattintás nem. |
| {{ui:Szalag}} | A munkához igazított lapok: {{ui:Jelölés}} (kijelölés, rajzolás, felhők, kiemelések, szövegek, megjegyzések, bélyegzők), {{ui:Mérés}}, {{ui:Szerkesztés}}, {{ui:Átnézés}} (a jelölések listája és exportjai, a BCF-problémák, a hibalista, a terepi bejegyzések, az eszközláda, az összehasonlítás), {{ui:Oldalak}} és {{ui:Nézet}}, a {{ui:Fájl}} és gyorsgombok a megnyitáshoz, mentéshez, visszavonáshoz és ismétléshez. Az eszközök megtartják a MarkupCraft saját egybetűs billentyűit. A még nem nyitott panel gombja előbb megnyitja azt a panelt. |

Minden stílus megtartja a {{key:Mod}} billentyűket: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} oldalillesztés és {{key:Mod+9}} szélesség-illesztés; a {{key:PageUp}} és a {{key:PageDown}} rajzlapot vált.

:::tip
Az a billentyű, amely a MarkupCraft saját elrendezéséhez tartozik, de nem a kiválasztott stílushoz, nem tesz semmit, és az állapotsor megmondja, hová került az eszköze („PDF-átnézésben a Kiemelés a Q”). A {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} és a nyilak mindig megtartják a jelentésüket. Miközben szövegdobozba, kiemelésbe vagy megjegyzésbe ír, minden billentyű a szövegé; a rajzolás közben beírt számok továbbra is megnyitják a hossz-mezőt.
:::

## Saját stílus készítése

1. Válassza a legközelebbi stílust, majd kattintson a {{ui:Testreszabás…}} gombra.
2. A {{ui:Billentyűk és menük}} lapon keressen egy eszközt (a keresőmező segít). Válassza a {{ui:Billentyű hozzáadása}} lehetőséget, és nyomja le a billentyűt, vagy két billentyűt egymás után a kétbetűs billentyűhöz. Egy billentyűre kattintva eltávolíthatja.
3. A menüsornál a {{ui:Hol van}} lehetőség az eszközt egy másik menübe mozgatja, vagy a {{ui:Csak billentyűk}} lehetőségbe.
4. Az {{ui:Egér}} lapon állítsa be a görgőt és azokat a gombokat, amelyek eltolják a rajzlapot.
5. Adjon nevet, és kattintson a {{ui:Mentés}} gombra.

A beépített stílus mentése saját másolatot készít („Saját PDF-átnézés”); a beépített stílus sosem változik. Ha egy billentyűt két eszköz kap, az pirossal jelenik meg, és mentés előtt javítani kell.

## Egér

- **Egérgörgő**: {{ui:A felfelé görgetés nagyít}} (az alapértelmezés) vagy {{ui:A felfelé görgetés kicsinyít}}, és hogy milyen gyorsan. Az érintőpad csippentése mindig az ujjai mozgásának irányában nagyít.
- **A rajzlap eltolása**: a középső gombbal, a jobb gombbal, vagy mindkettővel. A {{key:Space}} lenyomva tartásával és húzással, valamint a {{ui:Eltolás}} eszközzel mindig eltol; a bal gomb egyébként rajzol és kijelöl, így ennek bejelölése itt nem változtat semmin.
- A MarkupCraftnak nincs 3D-nézete, így a 3D gombok itt nem tesznek semmit.

## Vigye magával

{{ui:Exportálás}} a használt stílust egy kis `.ccinput.json` fájlként menti; {{ui:Importálás…}} hozzáad egyet egy másik számítógépről vagy egy kollégától. Az importált fájl csak a MarkupCraft saját eszközeire mutathat: minden más benne lévő elem kimarad, és az állapotsorban megszámolódik. A {{ui:Ennek a stílusnak a törlése}} eltávolít egy saját stílust.

:::note
Ezek a beállítások ebben a böngészőben maradnak. A stíluskártyák alatti {{ui:Ennek a stílusnak a használata minden alkalmazásban}} lehetőség minden alkalmazást az ahhoz illő stílussal nyit meg: a {{ui:PDF-átnézés}} a többi alkalmazás menüsoros stílusához, a {{ui:Szalag}} a szalagjaikhoz, a MarkupCraft saját eszköztára pedig a sajátjaikhoz tartozik. Az az alkalmazás, amelyhez nincs megfelelő stílus, megtartja a sajátját.
:::

:::tip
A {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Elrendezés}} alatti munkaterület-elrendezések ({{ui:Szalag és projektböngésző}}, {{ui:Eszközkészlet és infódoboz}}) a szalagot a {{ui:Szalag}} stílus lapjaiból, az eszközkészletet pedig a MarkupCraft eszköztárából építik, így minden eszköz ugyanúgy működik bennük.
:::

Kapcsolódó: [Billentyűzet és egér](topic:keyboard) · [A MarkupCraft beállításai](topic:settings) · [Érkezés más jelölőszoftverekből](topic:coming-from)
