---
title: Billentyűzet és egér
summary: Minden billentyű, egérművelet és érintéses kézmozdulat, amelyet a MarkupCraft ismer, csoportosítva, valamint a böngésző által megtartott billentyűparancsok.
keywords: billentyűzet, billentyűparancsok, gyorsbillentyűk, billentyűk, egér, görgő, jobb kattintás, középső gomb, érintőpad, érintés, kézmozdulatok, csippentés, szóköz eltolás
from: 7bf207ec
---

A {{key:Mod}} billentyűvel írt parancsikonok Macen ⌘ vagy Control, Windowson és Linuxon Ctrl billentyűvel is működnek. Az eszközbetűk csak akkor működnek, ha nem írásban van egy mezőben; gépelés közben a betűk csak betűk. Lásd még: [Billentyűk, egerek és érintőpadok](common:keys).

## Eszközök

| Billentyű | Eszköz |
|---|---|
| {{key:V}} | {{ui:Kijelölés}} |
| {{key:H}} | {{ui:Eltolás}} |
| {{key:B}} | {{ui:Tartalom}}: az oldal saját vonalai, képei és szövege (lásd [Az oldal saját tartalmának módosítása](topic:page-content)) |
| {{key:P}} | {{ui:Toll}} |
| {{key:I}} | {{ui:Kiemelő}} |
| {{key:L}} | {{ui:Vonal}} |
| {{key:A}} | {{ui:Nyíl}} |
| {{key:R}} | {{ui:Téglalap}} |
| {{key:E}} | {{ui:Ellipszis}} |
| {{key:Y}} | {{ui:Polivonal}} |
| {{key:G}} | {{ui:Sokszög}} |
| {{key:C}} | {{ui:Felhő}} (húzzon egy dobozt) |
| {{key:Shift+C}} | {{ui:Szabad felhő}} |
| {{key:K}} | {{ui:Kiemelés}} |
| {{key:T}} | {{ui:Szöveg}} |
| {{key:N}} | {{ui:Megjegyzés}} |
| {{key:S}} | {{ui:Bélyegző}} |
| {{key:M}} | {{ui:Hossz}} |
| {{key:Q}} | {{ui:Terület}} |
| {{key:U}} | {{ui:Darabszám}} |
| {{key:O}} | {{ui:Ív}} |
| {{key:X}} | {{ui:Szög}} |

A {{ui:Kalibrálás}} eszköznek nincs billentyűje: használja az eszköztár gombját vagy az állapotsor léptékgombját. Az eszközbetűk figyelmen kívül maradnak, ha az {{key:Alt}} billentyű le van nyomva.

## Rajzolás közben

| Billentyű vagy művelet | Mit tesz |
|---|---|
| {{key:Shift}} rajzolás közben | Vonalak, nyilak, hosszak és polivonal-szakaszok 45°-os lépésekben; téglalapok, ellipszisek és dobozfelhők négyzetesek; a toll és a kiemelő egyetlen egyenes vonás |
| Dupla kattintás, {{key:Enter}} vagy jobb kattintás | Polivonal, sokszög, szabad felhő vagy terület befejezése |
| {{key:Backspace}} | Polivonal, sokszög, szabad felhő vagy terület utolsó pontjának eltávolítása |
| {{key:Esc}} | A rajzolás megszakítása; ha nincs folyamatban rajzolás, a kijelölés törlése; ha nincs semmi kijelölve, visszatérés a {{ui:Kijelölés}} eszközre |
| {{key:Mod+Enter}} | Gépelés befejezése szövegdobozban, kiemelésben vagy megjegyzésben (vagy kattintás mellette) |
| {{key:Esc}} gépelés közben | A beírt szöveg elvetése |
| {{key:Shift}}-kattintás a {{ui:Darabszám}} eszközzel | A kijelölt darabszámcsoport legközelebbi pontjának eltávolítása |

## Kijelölés és szerkesztés

| Billentyű vagy művelet | Mit tesz |
|---|---|
| Kattintás | Jelölés kijelölése |
| {{key:Shift}}-kattintás | Jelölés hozzáadása a kijelöléshez vagy eltávolítása belőle |
| Húzás balról jobbra üres rajzlapon | Csak a teljes egészében az ablakon belül lévők kijelölése |
| Húzás jobbról balra üres rajzlapon | Az ablakot érintő elemek kijelölése |
| {{key:Mod+A}} | Ezen a rajzlapon minden jelölés kijelölése |
| Kijelölt jelölés húzása | Áthelyezés ({{key:Shift}}: 45°-os lépésekben) |
| Fogantyú húzása | Átméretezés vagy alakváltoztatás ({{key:Shift}}: az arányok megtartása vagy 45°) |
| Nyílbillentyűk | A kijelölés egy képernyőpixellel történő eltolása ({{key:Shift}}: tízzel) |
| Dupla kattintás vagy {{key:Enter}} | Szövegdoboz, kiemelés vagy megjegyzés szövegének szerkesztése; bélyegzőnél a {{ui:Tulajdonságok}} megnyitása |
| {{key:Delete}} vagy {{key:Backspace}} | A kijelölés törlése |
| {{key:Esc}} | Semmi nincs kijelölve |
| {{key:Mod+Z}} | Visszavonás |
| {{key:Mod+Y}} vagy {{key:Mod+Shift+Z}} | Ismétlés |

## Kivágás, másolás és beillesztés

Ugyanezek a parancsok megtalálhatók az eszköztár {{ui:Szerkesztés}} csoportjában ({{ui:Másolás}}, {{ui:Beillesztés}}) és a {{ui:Továbbiak}} menüjében, mindegyik a billentyűjével együtt. Mindegyik egyetlen visszavonási lépés. Lásd: [Másolás, beillesztés és kettőzés](topic:select-and-edit#copy-paste-and-duplicate).

| Billentyű | Mit tesz |
|---|---|
| {{key:Mod+X}} | Kivágás: a kijelölés másolása, majd törlése |
| {{key:Mod+C}} | A kijelölés másolása |
| {{key:Mod+V}} | Beillesztés. Ha az egérmutató a rajzlapon van, a másolat ott jelenik meg, ahová a mutató mutat; egyébként az eredeti mellé kerül. A beállításokban megadható, hogy mindig az eredeti mellé illeszkedjen. |
| {{key:Mod+Shift+V}} | Beillesztés helyben: ugyanazon a helyen a rajzlapon, ezen vagy egy másik rajzlapon |
| {{key:Mod+D}} | A kijelölés kettőzése mellé (a vágólap érintetlen marad) |

## Súgó

| Billentyű | Mit tesz |
|---|---|
| {{key:F1}} | Ez a súgó megnyitása vagy bezárása (oldalsó panelként; a rajzlap használható marad). A felső sávban lévő {{ui:Súgó}} gombbal is. |
| {{key:Esc}} a súgóban | A súgó bezárása |

:::mac
A legtöbb Mac billentyűzeten nyomja meg az {{key:F1}} billentyűt az **fn** (vagy a földgömb) billentyűvel együtt, vagy használja a {{ui:Súgó}} gombot. Lásd: [Billentyűk, egerek és érintőpadok](common:keys#function-keys-on-a-mac).
:::

## Fájlok és rajzlapok

| Billentyű | Mit tesz |
|---|---|
| {{key:Mod+N}} | Új üres oldalak (ha a böngésző engedi az oldalnak a billentyűt; lásd [Indítás üres oldalakkal](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | PDF-ek megnyitása |
| {{key:Mod+P}} | Nyomtatás (lásd [Nyomtatás és oldalak módosítása](topic:pages-and-printing)) |
| {{key:Mod+F}} | Szöveg keresése a rajzokban (lásd [Szöveg keresése](topic:find-text)) |
| {{key:Mod}}+kattintás összekapcsolt jelölésen | A jelölés rajzlap-hivatkozásának követése; a {{key:Alt+Left}} visszalép (lásd [Rajzlap-hivatkozások](topic:sheet-links)) |
| {{key:Mod+S}} | Jelölt másolat mentése |
| {{key:PageDown}} / {{key:PageUp}} | Következő / előző rajzlap |
| {{key:Enter}} a {{ui:Rajzlapok keresése}} mezőben | Az első találatnak megfelelő rajzlap megnyitása |
| {{key:Mod+Enter}} a {{ui:Írjon választ}} mezőben | A válasz elküldése |

## Nagyítás és eltolás

| Billentyű vagy művelet | Mit tesz |
|---|---|
| Egérgörgő | Nagyítás vagy kicsinyítés a mutató körül (a görgő soha nem görget) |
| {{key:Ctrl}} + görgő | Gyorsabb nagyítás |
| {{key:Plus}} vagy {{key:Minus}} (a {{key:Mod}} billentyűvel is) | Nagyítás vagy kicsinyítés a közepe körül; a {{key:=}} is pluszként működik |
| {{key:Mod+0}} | {{ui:Oldal illesztése}} |
| {{key:Mod+9}} | {{ui:Szélesség illesztése}} |
| Húzás a középső gombbal | Eltolás |
| Húzás a jobb gombbal | Eltolás (ha nem egy polivonal közepén van) |
| {{key:Space}} lenyomva tartása és húzás | Eltolás |
| Nyílbillentyűk, ha nincs kijelölés | Eltolás |
| {{key:Ctrl+Shift+F}} | Képernyőmód: normál, teljes képernyő, teljes képernyő a sávok elrejtésével (minden számítógépen a Control billentyű) |

:::mac
**Érintőpadon:** a kétujjas görgetés nagyít. A csippentés a Chrome-ban, az Edge-ben és a Firefoxban is nagyít. Eltolás a {{key:Space}} lenyomva tartásával és húzással, vagy a {{ui:Eltolás}} eszközzel. A kétujjas kattintás jobb kattintás, és befejezi a polivonalat. A Control-kattintás itt egyszerű kattintásként is működhet jobb kattintás helyett, ezért használjon kétujjas kattintást.
:::

:::touch
## Érintés

| Kézmozdulat | Mit tesz |
|---|---|
| Egy ujj | Rajzolás az aktuális eszközzel, vagy kijelölés |
| Két ujj | Csippentéssel nagyítás a középpontjuk körül, mozgatással eltolás |
| Második ujj vonás közben | Megszakítja a vonást, és helyette nagyít |
| Dupla koppintás | Polivonal, sokszög, szabad felhő vagy terület befejezése |

A darabszámok, a megjegyzések, a polivonal-pontok és a kétpontos eszköz második pontja akkor kerül a helyére, amikor az ujj felemelkedik. Lásd: [Átnézés iPaden vagy érintőképernyőn](topic:review-on-a-tablet).
:::

## Billentyűparancsok, amelyeket a böngésző megtart

- A {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} és {{key:Mod+Q}} a böngészőhöz tartozik. Ha egy nem mentett jelöléseket tartalmazó lapot vagy ablakot zár be, azok elvesznek, számítógépen a böngésző „Elhagyja az oldalt?” kérdése után.
- A legtöbb böngésző a {{key:Mod+N}} billentyűt új ablakhoz használja, ezért böngészőlapon használja az eszköztár {{ui:Új}} gombját; az asztali alkalmazás és a Studio továbbadja a billentyűt a MarkupCraftnak.
- A MarkupCraft a {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} és {{key:Mod+Minus}} billentyűket a böngészőtől elveszi, amíg az alkalmazásnak van billentyűzete, a {{key:Mod+C}} és {{key:Mod+X}} billentyűket pedig akkor, ha jelölések vannak kijelölve. A {{key:Mod+,}} megnyitja a {{ui:Beállítások}} panelt. A teljes böngészőoldal nagyításához használja a böngésző menüjét.
- A {{key:Mod+9}} egyes böngészőkben az utolsó böngészőlapra ugrik, mielőtt a MarkupCraft látná. Ha ez történik, használja a rajzlap alatti {{ui:Szélesség illesztése}} gombot.
- A teljes képernyőn lévő {{key:Esc}} is kilép a teljes képernyőből.

## Ha egy billentyű nem tesz semmit

- **Egy mezőben gépel.** Előbb kattintson a rajzlapra. (Rajzoló eszköz melletti kattintás rajzol; utána nyomja meg az {{key:Esc}} billentyűt, vagy használja a {{key:Mod+Z}} billentyűt.)
- **Párbeszédpanel van nyitva.** A billentyűk a párbeszédpanelhez tartoznak, amíg az be nem záródik.
- **Az imént az eszköztár egyik gombjára kattintott**, ezért a nyílbillentyűk vagy a {{key:Space}} azon a gombon hatnak. Vigye az egérmutatót a rajzlapra, és használja a görgőt vagy a középső gombot, vagy a gombok helyett nyomjon eszközbetűt.

## Hol található a Mozgatás

Nincs Mozgatás parancs: jelöljön ki egy jelölést, és húzza el ({{key:Shift}} megtartja a 45°-os lépéseket). A kitűzőt a {{ui:Kitűző mozgatása}} gombbal mozgathatja, az oldalt pedig a {{ui:Oldal mozgatása előrébb}} vagy a {{ui:Oldal mozgatása hátrébb}} gombbal.
