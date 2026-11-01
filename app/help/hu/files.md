---
title: A MarkupCraft által megnyitott és mentett fájlok
summary: PDF be, jelölt PDF-másolat ki, plusz CSV-, BCF- és eszköztárfájlok; mi hová kerül, online és offline.
keywords: pdf, megnyitás, mentés, exportálás, letöltés, csv, bcf, bcfzip, json, eszköztár, fájltípusok, formátumok, feltöltés, jelszó, titkosított
from: b3045b4c
---

## Amit a MarkupCraft megnyit

| Fájl | Hogyan | Mi történik |
|---|---|---|
| PDF (`.pdf`) | {{ui:Megnyitás}}, {{key:Mod+O}}, vagy húzza a rajzlapterületre. Egyszerre több is lehet. | Minden oldal egy rajzlap lesz. A fájlban már meglévő jelölések visszaolvasódnak (lásd alább). |
| Eszköztár (`.json`) | {{ui:Eszközök}} lap, majd {{ui:Importálás}} | Az eszközök bekerülnek az eszköztárába. Lásd [Az eszköztár](topic:tool-chest). |

Minden mást elutasít a program a következő üzenettel az állapotsoron: „A MarkupCraft PDF-fájlokat nyit meg.” Ha vegyesen húz be fájlokat, a PDF-ek megnyílnak, az állapotsor pedig megadja, hány fájl nem volt PDF.

### A PDF-ben már meglévő jelölések

- **A MarkupCraft által mentett jelölések** pontosan visszatérnek: típus, stílus, szerző, dátumok, állapot, válaszok, hibalistaszám, a rajzlap méretaránya és az Ön által begépelt rajzlapnevek.
- **Más PDF-programok megjegyzéseit** is beolvassa. A téglalapok, ellipszisek, vonalak és nyilak, polivonalak, sokszögek, tollvonások, szövegdobozok és ragasztós jegyzetek közönséges, szerkeszthető MarkupCraft-jelölések lesznek. A válaszaik és az átnézési állapotuk is átjön.
- **Minden más** (a szöveg kijelölésével készített szövegkiemelések, más programok bélyegzői és egyéb fajták) úgy jelenik meg, ahogy van, csak olvashatóként megjelölve. Kijelölheti, láthatja a jelölések listájában és válaszolhat rá, de nem mozgathatja, nem módosíthatja és nem törölheti.
- A hivatkozásokat és az űrlapmezőket érintetlenül hagyja, és nem listázza.
- A más program által mentett méretarányt (mérési nézetablak) a program a rajzlap méretarányaként használja, ha érti a mértékegységét.

### Fájlok, amelyek nem nyílnak meg

- A jelszóval védett PDF: „A(z) »név« megnyitásához jelszó szükséges. Nyisson meg egy védelem nélküli másolatot.”
- A sérült vagy valójában nem PDF-fájl: „A(z) »név« nem olvasható PDF-ként (…)”.
- Az a PDF, amely megnyílik, de módosítás ellen védett, rendben megnyílik. A mentését a program megtagadja (lásd alább).

Ha egyszerre több fájlt nyit meg, a működők megnyílnak, a többit pedig az „Egyes fájlok nem nyíltak meg” című doboz sorolja fel.

## Amit a MarkupCraft ment

A mentés mindig egy új fájl **letöltése**. Egy weboldal nem írhat felül fájlt a számítógépén, és a MarkupCraft sosem módosítja az eredetit.

| Amit választ | Amit kap | Megjegyzések |
|---|---|---|
| {{ui:Mentés}} ({{key:Mod+S}}) | „<name> (marked up).pdf” | Az eredeti PDF másolata, minden jelöléssel valódi PDF-megjegyzésként beleírva. Egy „(marked up)” fájl újramentése ugyanazt a nevet tartja meg; sosem lesz belőle „(marked up) (marked up)”. Lásd [A jelölt PDF mentése](topic:save-the-marked-up-pdf). |
| {{ui:Jelölések}} lap, majd {{ui:CSV}} | „<name> markups.csv” | A jelölések a listában látható módon (a szűrők érvényesek). |
| {{ui:Jelölések}} lap, majd {{ui:BCF}} | „<name> markups.bcfzip” | BCF 2.1 BIM-koordinációs eszközökhöz, jelölésenként egy pillanatképpel. Lásd [BCF alapok](topic:bcf-basics). |
| {{ui:Hibalista}} lap, majd {{ui:CSV exportálása}} | „<name> punch list.csv” | A hibalista tételei sorszám szerint. |
| {{ui:Eszközök}} lap, majd {{ui:Exportálás}} | „MarkupCraft tool chest.json” | Az Ön eszköztára megosztáshoz vagy megőrzéshez. |

A „<name>” az első megnyitott PDF fájlneve a „.pdf” nélkül.

A CSV-fájlok bármelyik táblázatkezelőben megnyílnak. UTF-8 kódolásúak, azzal a jelzéssel, amelyet a táblázatkezelők keresnek, így az ékezetes nevek helyesen jelennek meg. Az =, +, - vagy @ jellel kezdődő cella elé a program aposztrófot tesz, hogy a táblázatkezelő soha ne futtassa képletként.

## Hová kerülnek a letöltések

A böngésző dönti el: általában a Letöltések mappába, vagy minden alkalommal rákérdez, ha így állította be. Lásd [Böngészők és számítógépek](common:browsers#what-differs-between-browsers).

:::chromium
Ha egy készlet minden módosított fájlját egyszerre menti, a Chrome és az Edge megkérdezheti, hogy ez az oldal letölthet-e több fájlt. Válassza az {{ui:Engedélyezés}} lehetőséget, különben csak az első másolatot kapja meg.
:::

:::safari
iPaden a Safari minden letöltés előtt rákérdez, és a fájlt a Fájlok alkalmazásba, a Letöltések mappába teszi. Macen a Safari beállításaiban megadott mappába kerül.
:::

## Online és offline

- **A PDF-jei sosem hagyják el ezt a számítógépet**, sem online, sem offline. Sehová nem töltődik fel semmi.
- A PDF-olvasó az első PDF megnyitásakor töltődik be („A PDF-olvasó betöltése…”), a PDF-író pedig az első mentéskor („A PDF-író betöltése…”), vagy amikor megnyit egy olyan fájlt, amelyben már vannak megjegyzések.
- Kapcsolat esetén mindkettő a weboldalról töltődik be.
- **Kapcsolat nélküli munkához** válassza a felső sávban a {{ui:Mentés offline használatra}} gombot, amíg online van. A gomb ezt számolja: „Mentés: N / M”, majd ezt írja: „Offline használatra kész”. Ez a másolat tartalmazza a PDF-olvasót és a PDF-írót (összesen kb. 6 MB) és ezt a súgót, így utána a PDF-ek megnyitása, jelölése és mentése ebben a böngészőben offline is működik.
- Ha a gomb azt írja: „Nem sikerült menteni”, egyes fájlok nem töltődtek le: ellenőrizze a kapcsolatot, és kattintson rá újra. Ha azt írja: „Az offline mód nem érhető el”, ez a böngészőablak nem tud offline másolatot tartani (privát ablakok és egyes felügyelt számítógépek); használjon normál ablakot.
- A másolat frissítéséhez vagy elvetéséhez kattintson az „Offline használatra kész” gombra, és válassza a „Mentés újra (a legújabb verzió beszerzése)” vagy az „Az offline másolat eltávolítása” lehetőséget. További információ: [Offline munka](common:offline).

:::offline
Offline van. Ha a felső sáv azt írja: „Offline használatra kész”, minden működik, a mentést is beleértve. Ha nem, és ebben a lapban még nem mentett, a {{ui:Mentés}} a következő hibával járhat: „A PDF-írót nem sikerült betölteni”. A jelölései még megvannak a lapon: tartsa nyitva, kapcsolódjon újra, és válassza ismét a {{ui:Mentés}} lehetőséget.
:::

## Tudnivalók

- A nagy tervkészletek megnyitása időbe telik: a MarkupCraft minden oldal szövegét beolvassa a rajzlapszámok megtalálásához. Az állapotsor menet közben számolja a rajzlapokat.
- Ugyanannak a PDF-nek a kétszeri megnyitása kétszer adja hozzá a rajzlapjait. Ha ez megtörténik, zárja be a készletet, és nyissa meg újra.
- A {{ui:Bezárás}} egyszerre minden megnyitott fájlt bezár. Ha van nem mentett jelölés, rákérdez: {{ui:Mégse}}, {{ui:Bezárás mentés nélkül}} vagy {{ui:Másolatok mentése előbb}}.
- A felhőbe mentés még nem érhető el, és asztali kiadások sincsenek még. Tartsa a PDF-eit a többi projektfájlja mellett, és szokás szerint készítsen róluk biztonsági másolatot. Lásd [Hová kerülnek a fájljai](common:your-files).
