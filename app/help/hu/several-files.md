---
title: Több fájl kezelése egyszerre
summary: Sok PDF-et nyisson meg egy készletként, keressen rajzlapokat a fájlok között, másoljon jelöléseket közöttük, és mentse az egyes fájlok példányát.
keywords: több fájl, több pdf, tervkészlet, készlet, köteg, sok fájl, összevonás, szakágak, építészeti, szerkezeti, gépészeti, összes mentése, bezárás
from: f59354ae
---

Egy tervkészlet gyakran szakáganként egy PDF-ben vagy rajzlaponként egy PDF-ben érkezik. A MarkupCraft mindent, amit megnyit, **egy készletként** kezel.

## Együtt megnyitás

Válassza ki az összes PDF-et egyszerre a fájlválasztóban, vagy dobja mindet a rajzlapterületre. Ha később többet szeretne, ugyanígy nyissa meg őket; a megnyitás sorrendjében a {{ui:Rajzlapok}} lista végére kerülnek.

Eredmény: „6 fájl megnyitva (84 rajzlap a készletben).” Minden oldal rajzlap. A rajzlapszámmal rendelkezők a nevük alatt „Rajzlap A-101” feliratot mutatnak; a többiek a fájlt és az oldalt.

Nincs mentett „készlet” fájl: legközelebb nyissa meg ugyanazokat a PDF-eket újra (a „(marked up)” példányokat, ha mentette).

## Az egész készleten

- **Rajzlap keresése:** a {{ui:Rajzlapok keresése}} az összes fájl rajzlapszámában, rajzlapnevében és fájlnevében keres. A {{key:PageUp}} és a {{key:PageDown}} sorrendben végigjárja az összes fájl összes rajzlapját.
- **Jelölések listája:** a {{ui:Jelölések}} lap minden fájl jelöléseit mutatja. Szűkítéshez szűrjön {{ui:Rajzlap}} szerint. A CSV-ben van egy Fájl oszlop.
- **Hibalista:** egy számozás az egész készleten.
- **Összehasonlítás:** a régi és az új rajzlap különböző fájlokból is származhat.
- **Másolás és beillesztés:** a {{key:Mod+C}} az egyik rajzlapon, a {{key:Mod+V}} egy másikon, bármelyik fájlban. A másolat a lapon ugyanarra a helyre kerül, kissé eltolva.

## Mentés

Válassza a {{ui:Mentés}} gombot. Ha több fájl van megnyitva, a MarkupCraft megkérdezi:

- {{ui:Ez a fájl}}: annak a fájlnak a jelölt másolata, amelyhez a jelenlegi rajzlap tartozik.
- {{ui:Minden módosított fájl}}: minden nem mentett módosítással rendelkező fájl másolata. Mindegyik külön töltődik le, „<fájlnév> (marked up).pdf” néven.
- {{ui:Mégse}}

:::chromium
Ha először ment több fájlt egyszerre, a Chrome és az Edge rákérdezhet, hogy a webhely letölthet-e több fájlt. Válassza az „Engedélyezés” lehetőséget; különben csak az első példány érkezik meg.
:::

:::safari
A Safari minden fájlnál egyszer rákérdezhet. iPaden minden példány a Fájlok alkalmazásba kerül.
:::

Az a fájl, amelynek a jelöléseit elmentette, már nem számít módosítottnak; a többi továbbra is.

A CSV-, BCF- és hibalista-exportok az **először** megnyitott fájl nevét kapják.

## Bezárás

A {{ui:Bezárás}} az egész készletet bezárja; egyetlen fájlt még nem lehet külön bezárni. Ha van mentetlen tartalom, megkérdezi:

- {{ui:Mégse}}: nem történik semmi.
- {{ui:Bezárás mentés nélkül}}: a mentetlen jelölések elvesznek.
- {{ui:Másolatok mentése előbb}}: minden módosított fájlt elment, majd bezár.

A bezárás a visszavonási előzményeket is törli.

## Nagy készletek

- Az összes oldal szövegét megnyitáskor beolvassa a rajzlapszámok megkeresése, így egy 100 rajzlapos készlet eltart egy ideig. Az állapotsor a haladás közben számolja a rajzlapokat.
- A lista rajzlapképei akkor rajzolódnak ki, amikor görgetve odaér.
- Minden megnyitott PDF a böngészőlap memóriájában van. Ha a lap lassul, zárjon be más nehéz lapokat, vagy egyszerre csak egy szakágat nézzen át.
- Ha ugyanazt a fájlt kétszer nyitja meg, a rajzlapjai két példányban lesznek meg. Ilyenkor válassza a {{ui:Bezárás}} gombot, és nyissa meg újra a készletet.
