---
title: Állapotok és válaszok
summary: Jelölje meg minden megjegyzést: Nyitott, Elfogadva, Elutasítva vagy Befejezve, beszélje meg válaszláncban, és adja tovább a láncot a PDF-ben.
keywords: állapot, felülvizsgálati állapot, elfogadva, elutasítva, befejezve, nyitott, válasz, válaszok, lánc, megjegyzés, beszélgetés, megbeszélés, válaszadás, visszaellenőrzés
from: 0f3e8b91
---

Minden jelölésnek van **állapota** és **válaszlánca**. Együtt viszik a felülvizsgálati kört: a felülvizsgáló jelöl, a tervező válaszol és állapotot állít be, a felülvizsgáló pedig visszaellenőriz.

## Állapot beállítása

1. Jelöljön ki egy jelölést (vagy többet).
2. A {{ui:Properties}} panelen válasszon egy {{ui:Status}} értéket: Nyitott, Elfogadva, Elutasítva vagy Befejezve.

Eredmény: az állapot egy címkeként jelenik meg a {{ui:Markups}} listában, a láncba pedig egy sor kerül: „Állapot beállítva: Elfogadva (Ana Ruiz).” Több kijelölt jelölés esetén az állapotmező „Vegyes” értéket mutat, amíg nem választ egyet; utána mindegyiket megváltoztatja.

Az új jelölések Nyitott állapottal indulnak. A beillesztett vagy kettőzött jelölések szintén Nyitott állapottal indulnak.

## Válasz

1. Jelöljön ki egy jelölést.
2. A {{ui:Properties}} panelen keresse meg a „Válaszok” részt a stílusbeállítások alatt.
3. Írjon a {{ui:Write a reply}} mezőbe.
4. Válassza a {{ui:Reply}} lehetőséget, vagy nyomja meg a {{key:Mod+Enter}} billentyűt.

Eredmény: a válasz a neve, a dátum és az idő mellett jelenik meg, a címsor pedig megszámolja: „Válaszok (3)”. A {{ui:Markups}} lista a sorban válaszszámot mutat.

- Az állapotváltozások ugyanabban a láncban jelennek meg, állapotbejegyzésként megjelölve, így az előzmények sorrendben olvashatók.
- Ha elkezd írni egy választ, és máshová kattint, a vázlat megmarad, amíg vissza nem tér arra a jelölésre (amíg be nem zárja a készletet).
- Ha nincs beállítva a neve, a MarkupCraft küldés előtt kéri azt.
- A fájllal érkező, csak olvasható megjegyzésekre is lehet válaszolni.

:::note
Az elküldött választ nem lehet szerkeszteni vagy törölni. Közvetlenül küldés után a {{key:Mod+Z}} billentyű visszavonja; utána írjon új választ, amely javítja.
:::

## Fotó hozzáadása

A válaszmező alatt a {{ui:Add photo}} lehetőség képet ad a lánchoz: PNG vagy JPEG fájlt ezen a számítógépen, vagy táblagépen és telefonon egy ott készített fényképet. A válaszmezőbe írt szöveg lesz a képaláírás. A lánc bélyegképet mutat; kattintson rá a teljes méretű megtekintéshez. A nagy fényképek a hosszabbik oldalukon 1600 pixelre kicsinyítődnek.

A mentett PDF-ben minden fénykép csatolt fájlként is ott van a jelölés mellett (gemkapocs), így más PDF-megjelenítők is megnyithatják.

## A felülvizsgálat átadása

Nincs még közös online munkamenet: a felülvizsgálat a PDF-ben utazik.

1. Válassza a {{ui:Save}} lehetőséget. A másolat minden jelölést tartalmaz az állapotával és a válaszaival.
2. Küldje el a másolatot úgy, ahogy most a rajzokat küldi.
3. A következő személy megnyitja a MarkupCraft-ban, válaszol, állapotot állít be, és újra ment.

Más PDF-programok a válaszokat a megjegyzés válaszaiként, az állapotokat pedig felülvizsgálati állapotként látják (Elfogadva, Elutasítva, Befejezve; a Nyitott nem jelenik meg állapotként). A saját válaszaik és felülvizsgálati állapotaik a fájl megnyitásakor visszakerülnek a MarkupCraft-ba: a legújabb állapot érvényesül.

Ha két személy ugyanabban az időben, külön másolatokon jelöl, nincs összefésülés. Megnyithatják mindkét másolatot egy készletben, és néhány jelölést átmásolhatnak a {{key:Mod+C}} és {{key:Mod+V}} billentyűkkel, de a beillesztett másolat új jelölés: a nevét viseli, új dátumot kap, Nyitott állapotot, és kissé eltolva kerül a helyére. Egyeztessék előre, hogy ki mely rajzlapokat jelöli, így ez elkerülhető.

## Nyitott tételek megkeresése

A {{ui:Markups}} lapon állítsa a {{ui:Status}} értékét „Nyitott” értékre, hogy csak a nyitott tételek jelenjenek meg, az {{ui:Author}} mezőt pedig állítsa egy felülvizsgálóra. Lásd: [A jelölések listája](topic:markups-list-and-export).

Az állapot (Nyitott, Elfogadva, Elutasítva, Befejezve) a megjegyzésre vonatkozik. A hibalista tételének saját, külön állapota van a helyszíni munkára; lásd: [Hibalista készítése](topic:punch-list).
