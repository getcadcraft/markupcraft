---
title: Lap kalibrálása és mérése
summary: Állítsa be minden lap méretarányát előbeállításból vagy ismert méretből, majd mérjen hosszúságot, területet kerülettel és darabszámot.
keywords: kalibrálás, méretarány, méretarány beállítása, mérés, hossz, távolság, méret, terület, square feet, kerület, darabszám, mennyiségkimutatás, mennyiség, vonalzó, számtan, számítás, plusz, tört
from: 49a25c6d
---

A hosszúságokhoz és területekhez ismerni kell a lap méretarányát. A MarkupCraft a méretarányt **laponként** tárolja: minden mérendő lapot külön kalibráljon. A darabszámhoz nincs szükség méretarányra.

Az állapotsor az aktuális lap méretarányát mutatja, vagy a „Nincs kalibrálva” szöveget.

## Méretarány választása a listából

Használja ezt, ha a PDF teljes méretű (a 24 × 36-os lap 24 × 36-osként nyomtatódik), és a rajz feltünteti a méretarányát.

1. Kattintson az állapotsor méretarány-gombjára („Nincs kalibrálva”). Megnyílik a „Lap méretaránya” doboz.
2. A {{ui:Méretarány}} alatt válassza ki a méretarányt: építészeti (1/32" = 1'-0" – 3" = 1'-0"), mérnöki (1" = 10' – 1" = 100') vagy metrikus (1:1 – 1:1000).
3. Válassza a {{ui:Méretarány beállítása}} lehetőséget.

Eredmény: az állapotsor megmutatja a méretarányt, például `1/4" = 1'-0"`. Az építészeti méretarányok láb és hüvelyk, a mérnöki méretarányok tizedes láb, a legfeljebb 1:50-es metrikus méretarányok milliméter, az 1:100-tól kezdve pedig méter mértékegységben mutatják a hosszúságokat.

:::warning
Az előbeállítás csak akkor helyes, ha a PDF nem lett kicsinyítve. A félméretű sorozat, vagy az a lap, amely készítésekor „oldalra igazítva” lett, előbeállítással hibásan mér. Ilyenkor ismert méretből kalibráljon, és mindkét esetben ellenőrizzen egy méretet.
:::

## Kalibrálás ismert méretből

Használja ezt félméretű sorozatoknál, beszkennelt lapoknál, nem szokványos méretarányú részleteknél, vagy az előbeállítás ellenőrzésére.

1. Keressen egy hosszú, megbízható méretet, vagy egy grafikus méretarány-sávot.
2. Válassza a {{ui:Kalibrálás}} lehetőséget a {{ui:Mérés}} csoportban (vagy a „Lap méretaránya” dobozban a {{ui:Két pont kijelölése}} lehetőséget).
3. Kattintson a méret egyik végére, majd a másikra. (Vagy húzzon az egyik végétől a másikig.) A pontosság érdekében előbb nagyítson; a {{key:Shift}} 45°-os lépésekben tartja a vonalat.
4. A doboz megmutatja, milyen messze vannak egymástól a pontok a papíron, és megkérdezi: „Valójában milyen messze vannak egymástól?”. Írja be a {{ui:Valódi távolság}} értékét, például `24'-0"`, `12' 6 1/2"`, `7.2 m` vagy `900 mm`.
5. Válassza ki, hogyan jelenjenek meg a hosszúságok a {{ui:Hosszak megjelenítése ebben}} alatt: {{ui:Láb és hüvelyk}}, {{ui:Tizedes láb}}, {{ui:Hüvelyk}}, {{ui:Méter}} vagy {{ui:Milliméter}}.
6. Válassza a {{ui:Méretarány beállítása}} lehetőséget.

Eredmény: az állapotsor ezt mutatja: „Kalibrálva: 24'-0" / 1.00 in” (a valódi hossz és a papíron mért hossz), és a mérés előtt használt eszköz visszakapcsolódik. A hosszúságok beírásának minden módja a [Mértékegységek és hosszúságok](topic:units-and-scales) témakörben található.

A valódi távolság lehet egy kisebb számítás is: `12'6"+3/4"`, `(24'-0")/3` vagy `2*450mm`. Használja a `+ - * /` jeleket és a zárójeleket; a mértékegység nélküli szám a {{ui:Hosszak megjelenítése ebben}} alatt beállított egységben számít (a {{ui:Láb és hüvelyk}} esetén lábban). A {{ui:Méretarány beállítása}} az eredményt használja.

Ha a MarkupCraft nem tudja értelmezni a beírtakat, a doboz ezt jelzi: „Ez nem olyan hosszúság, amelyet a MarkupCraft ért. Próbálja ezeket: 24'-0", 12' 6 1/2", 7.2 m vagy 900 mm.” Ha a számítást nem lehet kiszámolni, a doboz megmondja, miért és hol, például: „Egy zárójel nincs lezárva (5. karakter).”

## Hossz mérése

1. Válassza a {{ui:Hossz}} lehetőséget ({{key:M}}).
2. Kattintson a kezdőpontra, majd a végpontra. Vagy húzzon a kezdőponttól a végpontig. A {{key:Shift}} 45°-os lépésekben tartja a vonalat.

Eredmény: méretvonal osztásjelekkel, rajta a hosszúsággal. Az állapotsor megismétli („Hossz: 12'-6 1/2" (1/4" = 1'-0")."), a {{ui:Tulajdonságok}} pedig a {{ui:Hossz}} alatt mutatja. A láb és hüvelyk értékek a legközelebbi 1/16"-ra kerekítődnek.

Ha a lapnak még nincs méretaránya, a {{ui:Hossz}} kiválasztása átvált a {{ui:Kalibrálás}} lehetőségre, és az állapotsor elmagyarázza: „Először kalibrálja ezt a lapot: jelöljön ki két, ismert távolságra lévő pontot, vagy válassza ki a méretarányát. Utána mérhet.” A méretarány beállítása után a {{ui:Hossz}} visszatér.

## Vázlatrajzolás méretarányosan

Kalibrált lapon a {{ui:Vonal}}, {{ui:Nyíl}}, {{ui:Hossz}}, {{ui:Polivonal}}, {{ui:Sokszög}}, {{ui:Szabad felhő}}, {{ui:Terület}} vagy egy helyiség rajzolása közben beírhatja a valódi hosszakat:

1. Kattintson az első pontra.
2. Mutasson a következő szakasz irányába, és írja be a hosszát, például `16` (a lap mértékegységében), `12'6"` vagy `3.5 m`. Egy doboz nyílik a mutató mellett, miközben ír.
3. Nyomja meg az {{key:Enter}} billentyűt. A pont ennyire távol kerül el, a mutató irányában.

Az irány pontos megadásához írjon `<` jelet és egy szöget fokban: a `8 < 90` 8 lábnyit egyenesen felfelé, a `4<0` jobbra, a `10 < 225` lefelé és balra visz, a lap nézete szerint (az elforgatott lapokat is beleértve). Írja be a következő sarkok hosszát, majd a szokásos módon zárja le az alakzatot. Az {{key:Esc}} bezárja a dobozt, és nem helyez el pontot.

## Szög mérése

1. Válassza a {{ui:Szög}} lehetőséget ({{key:X}}).
2. Kattintson az egyik szár végére, majd a sarokra, végül a másik szár végére.

Eredmény: a két szár, egy kis ív a sarokban, és a szög fokban, tizedre kerekítve (0° és 180° között). Szög méretarány nélkül is mérhető. A {{ui:Tulajdonságok}} a {{ui:Szög}} alatt mutatja, a lista, a CSV és a BCF pedig tartalmazza.

A kalibrált lapon lévő {{ui:Ív}} ({{key:O}}) a {{ui:Tulajdonságok}} alatt az ív mentén mért hosszát is mutatja.

## Terület és kerület mérése

1. Válassza a {{ui:Terület}} lehetőséget ({{key:Q}}).
2. Kattintson a helyiség vagy terület minden sarkára.
3. Fejezze be dupla kattintással, az {{key:Enter}} billentyűvel vagy jobb kattintással (érintőképernyőn dupla koppintással). A {{key:Backspace}} eltávolítja az utolsó sarkot.

Eredmény: árnyékolt körvonal, a közepén a terület és a kerület „K” jellel, például „128.00 sq ft” és „K 48'-0"”. Láb méretarány esetén négyzetláb, hüvelyk esetén négyzethüvelyk, méter esetén négyzetméter, milliméter esetén négyzetmilliméter lesz az eredmény. Területhez legalább három sarok kell.

### Kivágások

Egy oszlop, akna vagy udvar kihagyásához jelölje ki a területet, és a {{ui:Tulajdonságok}} alatt válassza a {{ui:Kivágás hozzáadása}} lehetőséget. Kattintson a kivágás sarkaira a területen belül, és a területhez hasonlóan fejezze be. A kivágás nyitva marad (nincs árnyékolás), a területe levonódik, az élei pedig hozzáadódnak a kerülethez: egy 16' × 8'-as helyiség 4' × 4'-es kivágással „112.00 sq ft” és „K 64'-0"” értéket mutat. Annyit adhat hozzá, amennyit szükséges; nem fedhetik egymást, és nem metszhetik a terület körvonalát. A {{ui:Kivágások eltávolítása}} mindet eltávolítja, a {{key:Mod+Z}} pedig egyet visszavon.

## Darabok számolása

1. Válassza a {{ui:Darabszám}} lehetőséget ({{key:U}}).
2. A {{ui:Tulajdonságok}} alatt írja be a {{ui:Csoport neve}} mezőt, például „Padlóösszefolyók”. (A következő alkalomra megmarad.)
3. Kattintson minden tételre a lapon.

Eredmény: minden kattintás egy számozott pontot ad hozzá; az első ponthoz „Padlóösszefolyók: 7” típusú címke tartozik, az állapotsor pedig folyamatosan mutatja az összeget.

- **Új csoport indítása:** nyomja meg az {{key:Esc}} billentyűt egyszer (ez törli a kijelölést), módosítsa a {{ui:Csoport neve}} mezőt, és kattintson újra.
- **Hozzáadás meglévő csoporthoz:** előbb jelölje ki a csoportot, majd válassza a {{ui:Darabszám}} lehetőséget, és kattintson.
- **Jelölés eltávolítása:** a csoport kijelölése mellett tartsa lenyomva a {{key:Shift}} billentyűt, és kattintson a pontra. Az utolsó pont eltávolítása az egész csoportot törli. Billentyűzet nélküli érintőképernyőn helyette használja a {{key:Mod+Z}} billentyűt vagy a {{ui:Visszavonás}} lehetőséget.
- **Csoport átnevezése:** jelölje ki, és a {{ui:Tulajdonságok}} alatt szerkessze a {{ui:Csoport neve}} mezőt.

A darabszám-csoport egy laphoz tartozik. Több lapon lévő darabszámok külön csoportként jelennek meg a jelöléslistában.

## Méretarány módosítása vagy eltávolítása

Kattintson az állapotsor méretarány-gombjára. A doboz az aktuális méretarányt mutatja; válasszon másikat, válassza a {{ui:Két pont kijelölése}} lehetőséget, vagy a {{ui:Méretarány eltávolítása}} lehetőséget.

A már megrajzolt hosszúságok és területek azonnal **újra lesznek mérve** az új méretaránnyal. A visszavonás visszaállítja a régi méretarányt.

## Hová kerülnek az adatok

- A {{ui:Tulajdonságok}} mutatja a kijelölt mérés értékeit.
- A {{ui:Jelölések}} lap minden értéket listáz, a CSV-jében „Mérés” oszlop található. Lásd: [A jelölések listája](topic:markups-list-and-export).
- A mentett PDF megőrzi a méretarányt az oldalon, és a hosszúságokat és területeket mérési megjegyzésként írja ki, így a mérési adatokat értő más PDF-programok is megjeleníthetik. Lásd: [Mi kerül a PDF-be](topic:what-the-pdf-keeps).

A teljes mennyiségkimutatáshoz tételekkel, összetett tételekkel és árakkal használja a TakeoffCraft-ot: a MarkupCraft átnézéshez mér, nem költségvetéshez.
