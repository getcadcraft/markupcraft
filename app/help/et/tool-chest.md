---
title: Tööriistakast
summary: Salvesta vormindatud märgistus korduvkasutatava tööriistana, joonista sellega ja jaga oma kasti kontoriga failina.
keywords: tööriistakast, tööriistad, tööriistakomplekt, kohandatud tööriistad, salvestatud märgistused, lemmikud, kontori standard, import, eksport, jagamine, json
from: 7dfa36e0
---

Vahelehel {{ui:Tööriistad}} on sinu **tööriistakast**: märgistused koos oma välimusega, valmis uuesti joonistamiseks. Tööriist säilitab märgistuse liigi, värvi, joone laiuse, täite, läbipaistvuse, teksti suuruse ja teema, samuti templi sõnastuse, loenduse rühma nime või tekstikasti ja selgituse alguse teksti.

## Tööriistad, millega alustad

Uues kastis on kuus: „Redaktsioonipilv“ (punane), „Küsimuse pilv“ (sinine), „Kollane marker“, „RFI-selgitus“ (sinine, algab tekstiga „RFI: “), „Kontrolli kohapeal“ (oranž selgitus, kus on tekst „Kontrolli kohapeal.“) ja „Kinnitatud märkusega“ (tempel).

## Tööriistaga joonistamine

1. Ava vaheleht {{ui:Tööriistad}}.
2. Klõpsa tööriistal. See näib vajutatuna ja vastav tööriist tööriistaribal lülitub sisse.
3. Joonista tavapäraselt. {{ui:Omadused}} ütleb „Joonistan tööriistaga „<tööriist>“ tööriistakastist.“

Kui kasti tööriist on sisse lülitatud, kehtivad jaotises {{ui:Omadused}} enne joonistamist tehtud muudatused selle tööriista kohta ainult praegu, salvestatud tööriista ega sinu tavaliste tööriistaseadete muutmata. Tööriistariba nupu või tööriista klahvi valimine viib tagasi tavalise tööriista juurde.

## Oma tööriista salvestamine

1. Joonista märgistus ja vormindage see nii, nagu soovid: värv, joon, täide, teema, templi sõnastus.
2. Vali see.
3. Vali vahelehel {{ui:Tööriistad}} {{ui:Salvesta valitud tööriistana}} või jaotises {{ui:Omadused}} {{ui:Salvesta tööriistana}}.
4. Sisesta {{ui:Tööriista nimi}} ja vali {{ui:Salvesta tööriist}}.

Tulemus: tööriist lisatakse kasti lõppu ja vaheleht {{ui:Tööriistad}} avaneb nii, et see näha on.

## Valikust tehtud templid

Vali mitu märgistust (või lehesisu tööriistaga {{ui:Sisu}}) ja vali {{ui:Salvesta valik templina…}} jaotises {{ui:Veel}} või parema hiireklõpsu menüüs. Kasti tuleb üks tempel, mis hoiab neid kõiki („Tempel: 3 märgistust koos“). Klõpsa sellel ja seejärel mis tahes lehel: märgistused tulevad koos, keskele kohta, kuhu klõpsasid, uute märgistustena sinu nimel; lehesisu joonistatakse sinna lehele. Need templid salvestatakse ja jagatakse kasti kaasa nagu iga teine tööriist.

## Tööriista eemaldamine

Vali tööriista rea lõpus × ja seejärel {{ui:Eemalda}}. Selle tööriistaga juba joonistatud märgistused jäävad samaks.

## Kus kast hoitakse

Kast salvestatakse **sellesse brauserisse, sellesse arvutisse**. Teisel brauseril või arvutil on oma kast (algab kuue vaikimisi tööriistaga), privaatne aken unustab selle sulgemisel ja selle saidi andmete kustutamine brauseri seadetes kustutab selle.

Kui brauser ei salvesta seda (salvestus on välja lülitatud või täis), ütleb olekuriba: „Tööriistakasti ei saanud sellesse brauserisse salvestada (salvestus on välja lülitatud või täis). Ekspordi see, et seda alles hoida.“

:::safari
Safari võib kustutada veebisaidi salvestatud andmed, kui sa pole saiti mõnda aega kasutanud. Ekspordi oma kast aeg-ajalt, et saaksid selle hiljem uuesti importida.
:::

**Ekspordi oma kast varukoopiana**, eriti pärast tööriistade loomist, millele sa toetud.

## Kasti jagamine kontoriga

1. Seadista tööriistad ükskord.
2. Vali {{ui:Ekspordi}}. Saad faili „MarkupCraft tool chest.json“.
3. Pane see fail sinna, kus kontor hoiab oma standardeid, või saada see ringi.
4. Kõik teised valivad oma vahelehel {{ui:Tööriistad}} {{ui:Impordi}} ja valivad faili.

Tulemus: „Imporditi 12 tööriista failist „MarkupCraft tool chest.json“.“ Sama kastist pärinevad tööriistad asendavad oma vanemad koopiad, nii et kontori uuendatud kasti importimine värskendab neid tööriistu ega dubleeri neid; uued tööriistad lisatakse. Kastis võib olla kuni 500 tööriista.

MarkupCraft kontrollib imporditava faili iga väärtust ja jätab vahele need, mida ta kasutada ei saa („2 jäeti vahele (ei sobi kasutamiseks)“). Failid, mis ei ole tööriistakast, lükatakse tagasi: „See fail ei ole MarkupCraft’i tööriistakast.“ või „See fail ei ole tööriistakast (see ei ole JSON).“

Teiste märgistusprogrammide tööriistakasti faile ei saa importida.
