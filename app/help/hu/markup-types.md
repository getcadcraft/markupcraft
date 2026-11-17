---
title: Minden jelöléstípus
summary: A tizenhét jelöléstípus, billentyűik, rajzolásuk módja, alapértelmezett megjelenésük és az, ami belőlük a mentett PDF-ben lesz.
keywords: jelöléstípusok, eszközlista, megjegyzéstípusok, felhő, kiemelés, szöveg, megjegyzés, bélyegző, toll, kiemelő, vonal, nyíl, téglalap, ellipszis, polivonal, sokszög, hossz, terület, darabszám
from: 29bf32e7
---

## Az eszközök

| Eszköztár | Billentyű | Rajzolás módja | Alapértelmezett megjelenés | A mentett PDF-ben |
|---|---|---|---|---|
| {{ui:Toll}} | {{key:P}} | Húzás | Piros, 1,5 pt | Tinta |
| {{ui:Kiemelő}} | {{key:I}} | Húzás | Sárga, 14 pt széles, áttetsző, színezi az alatta lévőt | Tinta (kiemelő vonalként jelölve) |
| {{ui:Vonal}} | {{key:L}} | Húzás, vagy kezdő- és végpont kattintása | Piros, 2 pt | Vonal |
| {{ui:Nyíl}} | {{key:A}} | Húzás, vagy kezdő- és végpont kattintása | Piros, 2 pt, zárt nyílhegy a végén | Vonal nyílhegygyel |
| {{ui:Ív}} | {{key:O}} | Kattintson a kezdőpontra, egy pontra az íven, majd a végpontra | Piros, 2 pt | Polivonal az ív mentén |
| {{ui:Téglalap}} | {{key:R}} | Húzzon egy dobozt | Piros, 2 pt, kitöltés nélkül | Négyzet |
| {{ui:Ellipszis}} | {{key:E}} | Húzzon egy dobozt | Piros, 2 pt, kitöltés nélkül | Kör |
| {{ui:Polivonal}} | {{key:Y}} | Kattintson pontokra, a befejezéshez dupla kattintás | Piros, 2 pt | Polivonal |
| {{ui:Sokszög}} | {{key:G}} | Kattintson pontokra, a befejezéshez dupla kattintás | Piros, 2 pt, kitöltés nélkül | Sokszög |
| {{ui:Felhő}} | {{key:C}} | Húzzon egy dobozt | Piros, 1,5 pt hullámok | Négyzet felhős szegéllyel |
| {{ui:Szabad felhő}} | {{key:Shift+C}} | Kattintson pontokra, a befejezéshez dupla kattintás | Piros, 1,5 pt hullámok | Sokszög felhős szegéllyel |
| {{ui:Kiemelés}} | {{key:K}} | Nyomja meg a pontot, húzza a szöveghez, írjon | Piros szöveg és vezető, 1 pt, 12 pt szöveg | Szövegdoboz kiemelési vezetővonallal |
| {{ui:Szöveg}} | {{key:T}} | Kattintson, vagy húzzon egy dobozt, írjon | Piros, 12 pt szöveg, keret nélkül | Szövegdoboz |
| {{ui:Megjegyzés}} | {{key:N}} | Kattintson, írjon | Sárga megjegyzésikon | Ragasztott cetli |
| {{ui:Bélyegző}} | {{key:S}} | Válasszon bélyegzőt, kattintson vagy húzzon | Keretezett nagybetűk, plusz „Készítette: <név>, <dátum>”; a jelentésük szerint színezve | Bélyegző |
| {{ui:Hossz}} | {{key:M}} | Kezdő- és végpont kattintása (léptékre van szükség) | Kék méretvonal ütemekkel és a hosszúsággal | Vonal méretként jelölve, mérési értékkel |
| {{ui:Szög}} | {{key:X}} | Kattintson az egyik szár végére, a sarokra, majd a másik szár végére | Kék szárak, kis ív a sarkon, és a szög fokban | Polivonal, a szöveg a szög |
| {{ui:Terület}} | {{key:Q}} | Kattintson a sarkokra, a befejezéshez dupla kattintás (léptékre van szükség) | Kék körvonal, világoskék kitöltés, terület és kerület | Sokszög területként jelölve, mérési értékkel |
| {{ui:Darabszám}} | {{key:U}} | Kattintson minden tételre | Narancssárga számozott pontok és „csoport: n” címke | Csoportonként egy tinta-megjegyzés, tételenként egy gyűrű |

Érintéskor a „dupla kattintás a befejezéshez” dupla koppintás, a „kattintás” pedig az a koppintás, amely a felemeléskor lép érvénybe (pontoknál, megjegyzéseknél és darabszámoknál).

## Minden jelölés ezt hordozza

| Mező | Hol látja |
|---|---|
| Szerző | {{ui:Tulajdonságok}}, a lista, a bélyegző második sora, más PDF-megtekintők |
| Létrehozva és módosítva | {{ui:Tulajdonságok}} (az Ön időzónájában), a lista, a CSV |
| Állapot | Nyitott, Elfogadva, Elutasítva vagy Befejezve |
| Tárgy | Rövid címke; alapértelmezés a fajta („Felhő”, „Szövegdoboz”, „Hosszmérés”) |
| Megjegyzés | Hosszabb jegyzet. Megjegyzésnél a szövege a megjegyzés. |
| Szöveg | Csak szövegdobozok és kiemelések |
| Válaszok | A szál, az állapotváltozásokkal együtt |
| Hibatétel | Szám, felelős, határidő, tételállapot, ha a hibalistához került |
| Stílus | Szín, vonalvastagság, kitöltés és kitöltés átlátszatlansága (zárt alakzatok, szöveg és kiemelések), átlátszatlanság, szövegméret (szöveg, kiemelések és mérések) |

## Csak olvasható megjegyzések

A fájllal érkezett megjegyzések, amelyeket a MarkupCraft nem tud szerkeszteni (szövegkiemelések, más programok bélyegzői és más speciális fajták), „Egyéb” típussal és „Csak olvasható” állapotjelzővel szerepelnek a listában. Megtartják a fájl által adott megjelenésüket. Kijelölhetők, láthatók a szerzőjük, a tárgyuk és a megjegyzésük, és válaszolhat rájuk.

## Még nincs elkészítve

A fájlmellékletek még nincsenek elkészítve. Bármely jelölés hivatkozhat rajzlapra; lásd [Rajzlap-hivatkozások](topic:sheet-links). Képeket és aláírásokat a {{ui:Bélyegző}} eszközzel helyezhet el; lásd [Bélyegzők és megjegyzések](topic:stamps-and-notes). Lásd: [Mi még nincs elkészítve](topic:not-built-yet).
