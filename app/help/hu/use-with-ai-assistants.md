---
title: A MarkupCraft használata asszisztenssel
summary: Engedje, hogy a saját asszisztense vagy szkriptje listázza egy készlet jelöléseit, adjon hozzá egyszerű jelöléseket, állítsa be az állapotukat, válaszoljon és exportálja a listát: jogosultságok, csatlakozás a CadCraft Studio-n keresztül, és a tevékenységnapló.
keywords: MI, asszisztens, ügynök, mcp, modellkontextus-protokoll, szkript, automatizálás, jelölések, felülvizsgálat, jogosultságok, leválasztás, tevékenység
from: 095f2977
---

## Mit fog megtanulni

Hogyan engedheti, hogy egy asszisztens (vagy egy saját írású szkript) dolgozzon a MarkupCraft-tal, és hogyan döntheti el, mihez nyúlhat.

A MarkupCraft-nak **nincs saját MI-je**, és semmit sem küld sehova. Az asszisztenst Ön hozza: bármely programot, amely beszéli a Modellkontextus-protokollt (MCP). A MarkupCraft csak eszközöket ad neki, és Ön választja ki, melyeket.

## Bekapcsolás

1. Nyissa meg a {{ui:Settings}} menüt (a fogaskerék a felső sávban, vagy {{key:Mod+,}}), és lépjen a {{ui:MarkupCraft}} fülre.
2. Az {{ui:Assistants}} alatt jelölje be az **Asszisztensek és szkriptek használhatják a MarkupCraft-ot** lehetőséget. Eddig ki van kapcsolva.
3. Döntse el, mit tehet: az **Olvasás** alapból be van jelölve; a **Szerkesztés**, a **Mentés** vagy az **Exportálás** csak akkor legyen bejelölve, ha szükség van rá.

A bejelölt jogosultságokon kívüli eszközök nem kerülnek fel az asszisztensnek, és ha mégis kér egyet, a MarkupCraft elutasítja, és a tevékenységnaplóba írja. A kapcsoló kikapcsolása azonnal megszakít minden kapcsolatot; a {{ui:Reset MarkupCraft settings}} lehetőség, vagyis a MarkupCraft beállításainak visszaállítása, szintén kikapcsolja.

## Asszisztens csatlakoztatása

Az asszisztensek a számítógépen futó **CadCraft Studio**-n keresztül csatlakoznak: a Studio egy kis szervert futtat, amelyet csak ez a számítógép érhet el, és amelyet egy tokennel véd, amelyet indításkor generál. A Studio-ban válassza a {{ui:Connect an assistant}} lehetőséget, és másolja be a címet és a tokent az asszisztensbe (a Studio megmutatja a pontos beállításokat, amelyeket be kell illeszteni). Soha ne ossza meg a tokent.

:::note
Egy böngészőlap nem nyithat kapcsolatot egy asszisztensnek: a böngészős alkalmazásokban a kapcsoló nincs hatással, amíg nem a számítógépén futó CadCraft Studio-t használja.
:::

## Az irányítás megmarad

- **Minden változtatás egy visszavonási lépés**, az asszisztens nevével a leírásában (például „Asszisztens: cloudrect hozzáadása”). A {{key:Mod+Z}} billentyű egészében visszavonja az asszisztens utolsó változtatását.
- **Látja, ha egy asszisztens csatlakozik.** Egy gomb a felső sávban megnevezi az asszisztenst, amíg csatlakozik; kattintson rá, hogy lássa, mihez férhet, vagy hogy **Leválassza**.
- **Tevékenység.** A {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} listázza az összes hívást: mikor, melyik eszköz, és kész-e vagy elutasítva. A {{ui:Save the log}} lehetőség egy másolatot ment.

## Mit kérhet egy asszisztens

| Eszköz | Jogosultság | Mit csinál |
|---|---|---|
| `app_info`, `sheets_list` | Olvasás | A megnyitott készletek, a rajzlapjaik, és hogy hány jelölés van mindegyiken |
| `markups_list` | Olvasás | A jelölések típussal, rajzlappal, szöveggel, megjegyzéssel, méréssel, állapottal, szerzővel és válaszokkal, szűrve rajzlap, állapot, típus vagy szerző szerint |
| `markup_add` | Szerkesztés | Téglalapot, felhőt, ellipszist, szövegdobozt, jegyzetet, vonalat vagy nyilat ad egy rajzlaphoz |
| `markup_status`, `markup_reply` | Szerkesztés | Beállítja egy jelölés állapotát (a szálban naplózva, az asszisztens aláírásával); megjegyzést ad egy szálhoz |
| `markups_export` | Exportálás | A {{ui:Markups}} lista saját CSV- vagy BCF-exportja arról, amit a lista mutat (a szűrők úgy, ahogy beállította); a Studio-ban egy engedélyezett mappába írhatja a fájlt |
| `tasks_list` | Olvasás | A feladatként működő jelölések: felelős (személy vagy asszisztens), határnap, állapot, hivatkozás, hogyan zárult le. Az `assignee: "assistant"` az asszisztensre váró munkát listázza |
| `task_set`, `task_clear` | Szerkesztés | Jelölést feladattá tesz vagy módosít (cím, felelős, határidő, állapot, hivatkozás); leveszi a feladatot |
| `tasks_check` | Szerkesztés | Lezárja azokat a feladatokat, amelyek hivatkozott rajzterülete vagy modellelemei valóban változtak; átadja a másik alkalmazásból olvasott elemállapotokat |
| `revisions_changes` | Olvasás | Két megnyitott tervkészlet közötti változások egyszerű listája, saját szavaival való összefoglaláshoz |
| `pins_list`, `decision_add` | Olvasás, Szerkesztés | Hangjegyzetek (hossz, ki, mikor, felirat; sosem a hang, és nincs átirat) és döntések; döntést rögzít, és egy korábbit lecserél |
| `redline_export`, `redline_answer` | Exportálás, Szerkesztés | A rajzolónak szánt redline-fájl megírása; a rajzoló válaszainak alkalmazása |

Az asszisztens által hozzáadott jelölés szerzőként az asszisztensprogram által adott nevet nevezi meg, amelyet követ a „(asszisztens)” felirat, vagy – miután beállította a felülvizsgálói nevét – a „(asszisztens: <név>)” felirat. Állapotváltozásai és válaszai ugyanígy jelölve vannak. Mindegyik egy visszavonási lépés. A jelölt PDF mentése továbbra is kézzel történik: használja szokás szerint a {{ui:Save}} lehetőséget.

A MarkupCraft megnyitása nélkül a CadCraft MCP-kiszolgáló megmutatja egy megadott mappában lévő PDF jelöléseit (`markups_list`), a `cadcraft info Set.pdf` pedig kiírja őket a parancssorba.

## Ha valami nem működik

- **Az asszisztens nem lát MarkupCraft-eszközöket:** ellenőrizze, hogy a kapcsoló be van-e kapcsolva ebben az ablakban, és hogy az ablak nyitva van-e a Studio-ban.
- **„a szerkesztési jogosultság szükséges”:** jelölje be a **Szerkesztés** lehetőséget az {{ui:Assistants}} alatt, majd kérje újra.
- **„401” vagy „token” hibák:** a token megváltozott (a Studio újraindult, vagy az {{ui:New token}} lehetőséget használták). Másolja az új tokent az asszisztens beállításaiba.

## Lásd még

- [Receptek asszisztenseknek](common:assistants-recipes): kidolgozott példák, mindegyik a hozzájuk tartozó eszközökkel.
