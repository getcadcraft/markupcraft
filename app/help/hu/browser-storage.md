---
title: Mi marad ebben a böngészőben
summary: A neve, a beállításai, az eszközláda és az utoljára másolt jelölések ebben a böngészőben, ezen a számítógépen maradnak meg; a jelölései csak a mentett PDF-ekben maradnak meg.
keywords: helyi tárhely, böngészőtárhely, beállítások, preferenciák, profil, adatok törlése, privát ablak, inkognitó, biztonsági mentés, másik számítógép, szinkronizálás, visszaállítás
from: ab6e3c81
---

A MarkupCraft-nak nincs fiókja és szerveres tárhelye. Néhány kis adatot ennek a webhelynek a böngésző tárhelyén tárolunk, minden más a fájljaiban van.

## Mi van a böngészőben tárolva

| Mi | Hol állítható be | Tárolva mint |
|---|---|---|
| A szerzőneve | Az állapotsor névgombja vagy a {{ui:Beállítások}} | Egy név |
| A MarkupCraft beállításai | {{ui:Beállítások}}, {{ui:MarkupCraft}} lap: az új jelölések színe és vonalvastagsága, hová kerül a beillesztett másolat, mértékegységek (lásd: [A MarkupCraft beállításai](topic:settings)) | Egy beállításkészlet |
| Eszközbeállítások | {{ui:Tulajdonságok}}, amíg rajzoló eszköz be van kapcsolva: eszközönkénti szín, vonal, kitöltés, átlátszatlanság és szövegméret, a kiválasztott bélyegző, a darabszám-csoport neve | Egy beállításkészlet |
| Eszközláda | Az {{ui:Eszközök}} lap | Legfeljebb 500 eszköz |
| Az utoljára másolt elemek | {{ui:Másolás}} vagy {{ui:Kivágás}} | A másolt jelölések, hogy egy másik lap is beilleszthesse őket; a következő másolás felülírja |
| Bélyegzőkép és aláírás | A bélyegzők listájában: {{ui:Kép…}} és {{ui:Az aláírásom…}} | Az utolsó kép és az aláírása |
| Helyreállítási másolatok | Akkor tároljuk, amíg a PDF-ben nem mentett jelölések vannak | A PDF és a jelölései; mentéskor, bezáráskor vagy elvetéskor törlődnek; legfeljebb 30 napig maradnak meg |

## Ez mit jelent

- **Böngészőnként, számítógépenként.** A Chrome és a Firefox ugyanazon a számítógépen külön-külön tárol. A laptopon és az irodai asztali gépen is külön van. Semmi nem szinkronizálódik közöttük, még akkor sem, ha bejelentkezik a böngészőbe.
- **A privát és inkognitó ablakok** üresen indulnak, és bezáráskor mindent elfelejtenek.
- **A webhelyadatok törlése mindent eltávolít.** A sütik és a webhely adatainak törlése a böngésző beállításaiban, egy webhelyre vagy az összes webhelyre vonatkozóan, eltávolítja a nevet, a beállításokat és az eszközládát. Egyes takarítóeszközök és egyes vállalati szabályzatok ezt automatikusan elvégzik.
- **Semmi nem töltődik fel.** Ezek az értékek soha nem hagyják el a számítógépet, kivéve a nevet, amely a mentett PDF-ekben szerepel. A helyreállítási másolatok is ebben a böngészőben maradnak.

:::safari
A Safari néhány hét látogatás nélkül törölheti egy webhely tárolt adatait. Időnként nyissa meg a MarkupCraft-ot, és tartsa meg az exportált eszközládát.
:::

## Mi nincs a böngészőben tárolva

- **A jelölései véglegesen.** Ezek a mentett „(marked up)” PDF-be tartoznak. A helyreállítási másolat biztonsági háló összeomlás vagy bezárt lap esetére, nem munkatároló: mentéskor törlődik, az adatok törlése pedig eltávolítja. Lásd: [A munka helyreállítása](common:recover).
- **A megnyitott fájljai.** A MarkupCraft minden megnyitásakor nyissa meg újra a PDF-eket.
- **Az a lap, amelyen járt, a nagyítás, a szűrők és a visszavonási előzmény.** Ezek a készlet vagy a lap bezárásáig maradnak meg.

## Biztonsági mentés és a beállítások áthelyezése

- **Eszközláda:** {{ui:Eszközök}}, majd {{ui:Exportálás}}. A másik böngészőn vagy számítógépen: {{ui:Eszközök}}, majd {{ui:Importálás}}.
- **Név:** írja be újra a másik böngészőben (az állapotsorban lévő névgombra kattintva).
- **Eszközbeállítások:** állítsa be őket újra, vagy mentse minden stílusos jelölést eszközként, hogy az eszközládával együtt vigye át.

## Újrakezdés

Ha mindent vissza szeretne állítani, törölje ennek a webhelynek az adatait a böngésző beállításaiban. A neve, a beállításai és az eszközláda eltűnnek; a hat alapértelmezett eszköz visszatér.

## Az offline másolat

A felső sávban lévő {{ui:Mentés offline használatra}} az alkalmazás saját fájljait (a PDF-olvasóval és -íróval együtt, körülbelül 6 MB) szintén a böngészőben tárolja, külön ezektől a beállításoktól. Az adatok törlése ezt a másolatot is eltávolítja. Csak az offline másolatot távolíthatja el úgy, hogy az „Offline kész” gombra kattint, és az „Az offline másolat eltávolítása” lehetőséget választja. Lásd: [Munka offline állapotban](common:offline).

A felhőalapú mentés és a gépek közötti szinkronizálás még nem érhető el.
