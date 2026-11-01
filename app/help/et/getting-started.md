---
title: MarkupCraftiga alustamine
summary: Ava plaanikomplekt, pane esimene pilv ja selgitussilt lehele ning salvesta märgistatud koopia.
keywords: alustamine, esimesed sammud, ava pdf, ülevaatus, märgistus, redline, punane pliiats, plaanikomplekt, õpetus, kiirstart
from: 0b1aae4e
---

MarkupCraft on mõeldud jooniste ülevaatamiseks: avad PDF-plaanikomplekte, märgistad neid pilvede, selgitussiltide, tekstide, templite ja mõõtmistega, jälgid iga kommentaari staatust ning salvestad PDF-i koopia, mida saab näidata iga PDF-vaataja.

See töötab veebibrauseris. Sinu PDF-id avatakse sinu enda arvutis ja neid **ei laadita kunagi üles**. Salvestamine laeb alla uue koopia; sinu algne fail ei muutu.

:::note
MarkupCraft on arendusjärgus. Abi kirjeldab versiooni, mida käitad. Asju, mida see veel ei tee, loetletakse: [Mida pole veel ehitatud](topic:not-built-yet).
:::

## Mida vajad

- Värske Chrome, Edge, Firefox või Safari Macis, Windowsi või Linuxi arvutis, või Safari või Chrome iPadis. Vt [Brauserid ja arvutid](common:browsers).
- Üks või mitu PDF-faili. Terve plaanikomplekt võib olla üks PDF või mitu.
- Kõige mugavam on hiir ratta-ga. Puuteplaat töötab ja samuti puuteekraan (vt [Ülevaatus iPadil või puuteekraanil](topic:review-on-a-tablet)).

## Esimene ülevaatus kümne sammuga

1. Ava MarkupCraft oma brauseris. Ekraani keskel on tekst „Ava plaanikomplekt“.
2. Vali {{ui:Ava PDF-id}} (või {{ui:Ava}} tööriistariba vasakus servas, või vajuta {{key:Mod+O}}), vali üks või mitu PDF-i ja kinnita.
   Võid lohistada PDF-e ka {{pick:mac=Finderis|windows=Failihalduris|linux=sinu failihalduris}} ja lasta need lehe alale.
   Esimesel korral ütleb olekuriba all „Laen PDF-lugejat…“. Seejärel muutub iga lehekülg lehe kirjeks loendis {{ui:Lehed}} vasakul ja esimene leht täidab keskosa.
3. Klõpsa lehte loendis, et see kuvada. Keri hiireratast lehe kohal, et suumida sinna, kuhu osuti on.
4. Vali {{ui:Pilv}} tööriistariba rühmas {{ui:Muuda}} (või vajuta {{key:C}}).
   Esimesel korral, kui valid joonistamistööriista, küsib MarkupCraft sinu nime. Sisesta see ja vali {{ui:Salvesta}}. Iga märgistus salvestab selle. (Lisa: [Autori nime seadmine](topic:set-your-name).)
5. Lohista kast ümber ala, mida soovid märkida. Ilmub punane revisjonipilv ja see on valitud.
6. Vali {{ui:Selgitussilt}} rühmas {{ui:Märgista}} (või vajuta {{key:K}}). Vajuta sellele, millele osutad, lohista sinna, kuhu tekst peaks minema, ja lase lahti.
7. Kirjuta kommentaar kastis, mis ilmub. Lõpetamiseks klõpsa kasti kõrvale (või vajuta {{key:Mod+Enter}}).
8. Vajuta {{key:Esc}} kaks korda: üks kord valiku tühistamiseks, teine kord tagasi tööriistale {{ui:Vali}}. Klõpsa pilvel. Paremal olev vahekaart {{ui:Omadused}} näitab, kes selle tegi, millal ja mis on selle {{ui:Staatus}}.
9. Vali tööriistaribal {{ui:Salvesta}} (või vajuta {{key:Mod+S}}).
   Brauser laeb alla koopia nimega nagu „A-Plans (marked up).pdf“. Olekuriba ütleb, mitu märgistust kirjutati.
10. Ava see koopia kontrollimiseks mis tahes PDF-vaatajas: pilv ja selgitussilt on seal tavaliste PDF-kommentaaridena, millel on sinu nimi.

Et hiljem töötada, ava märgistatud koopia („(marked up)“) MarkupCraftis. Su märgistused tulevad tagasi muudetavana, koos staatuste, vastuste ja punktinumbritega.

## Võrgus ja võrguta

:::online
Oled võrgus. MarkupCraft laadib PDF-lugeja esimesel PDF-i avamisel ja PDF-kirjutaja esimesel salvestamisel. Et hiljem töötada ilma ühenduseta (objektil, lennukis), vali nüüd ülal ribal {{ui:Salvesta võrguks}} ja oota „Valmis võrguta kasutamiseks“. Koopia sisaldab PDF-lugejat ja -kirjutajat, nii et PDF-ide avamine ja salvestamine töötavad siis võrguta. Vt [Töötamine võrguta](common:offline).
:::

:::offline
Oled võrguta. Kui ülal ribal on „Valmis võrguta kasutamiseks“, on MarkupCraft selles brauseris võrguta kasutamiseks salvestatud ja kõik töötab: avamine, märgistamine, mõõtmine, salvestamine. Kui ei ole, kasuta seda, mis selles kaardis juba laaditi, ja ära lae lehte uuesti enne, kui oled jälle võrgus. Vt [Töötamine võrguta](common:offline).
:::

## Mida rakendus mäletab ja mida mitte

- **Su märgistused elavad PDF-is, mille salvestad.** Midagi ei hoita serveris. Rakendus ei salvesta PDF-i ise, aga hoiab taastekoopiat selles brauseris, kuni salvestad. Salvesta enne kaardi sulgemist; brauser küsib enne, kui proovid lahkuda salvestamata märgistustega (välja arvatud iPadil, vt [Ülevaatus iPadil või puuteekraanil](topic:review-on-a-tablet)).
- **Su nimi, tööriistade stiilid ja tööriistakast** jäävad sellesse brauserisse sellele arvutile. Teine brauser või arvuti alustab tühjalt ning brauseri saidiandmete kustutamine eemaldab need. Vt [Mis jääb sellesse brauserisse](topic:browser-storage).
- Pilvsalvestus ja inimeste vahel jagatud ülevaatuse seansid pole veel saadaval.

## Kuhu edasi

- [Ekraani tutvustus](topic:workspace)
- [Lehe märgistamine](topic:mark-up-a-sheet)
- [Lehe kalibreerimine ja mõõtmine](topic:calibrate-and-measure)
- [Tulek teistest märgistusprogrammidest](topic:coming-from), kui vaatad jooniseid juba mõnes teises programmis üle.
