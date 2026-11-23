---
title: Lehe suurused ja paberinimed
summary: Vaata iga PDF-lehe suurust millimeetrites ja tollides ning selle paberinime (A-, B- ja C-seeria, ANSI, ARCH) ning rühmita segakomplekt suuruse järgi, et leida kõrvalekaldelised lehed.
keywords: lehe suurus, paberisuurus, paberinimi, a0, a1, a2, a3, a4, b-seeria, c-seeria, ansi, arch, arhitektuuriline, mm, tollid, kohandatud suurus, suuruse järgi, kummaline suurus, segakomplekt, pdf-i kontroll, klient, probleem, mediabox, cropbox, pööre
from: 08e1354f
---

Enne komplekti saatmist kliendile kontrolli, et iga leht oleks õiges suuruses. {{ui:MarkupCraft}} loeb iga lehe suuruse PDF-ist endast ja nimetab paberi.

## Mida sa teed

Vaata ühe lehe suurust ja seejärel rühmita kogu komplekt suuruse järgi.

## Sammud

1. Ava PDF-id ({{ui:Ava}}), seejärel vajuta {{key:Esc}}, kuni midagi pole valitud ja {{ui:Vali}} on sees.
2. Vaata {{ui:Omadused}}. {{ui:Paber}} ütleb nime ja asendi, näiteks „A4, portree“. {{ui:Suurus}} annab millimeetrid ja tollid.
3. Iga rea {{ui:Lehed}} loendis on lehe nime all suuruse rida.
4. Vali {{ui:Suuruse järgi}} {{ui:Lehed}} päises. Loend koondab lehed suuruse kaupa, iga suuruse all oma pealkiri ja suurim rühm esimesena. Suurus, kus on vaid mõned lehed, on märgitud kui erandlik.
5. Vali {{ui:Suuruse järgi}} uuesti, et naasta komplekti enda järjekorra juurde.

Tulemus: lehte, mis on teistest erineva suurusega, on enne komplekti saatmist kerge märgata.

## Kuidas nimi valitakse

- Suurus tuleb lehe kastist PDF-is koos rakendatud pöördega, nii et albumi A3 on ikka A3.
- Nimed on A- ja B-seeria (ISO 216), C-seeria (ISO 269), ANSI A kuni E ning ARCH A kuni E.
- Leht, mis on nimetatud suurusest 2 mm piires, saab selle nime. Iga muu leht ütleb {{ui:kohandatud}} ja {{ui:Lähim nimetatud suurus}} ütleb, milline suurus on kõige lähedasem ja kui kaugel see on.
- Tollid tulevad lehe tegelikust suurusest, nii et A4 leht on 8.26 × 11.69 in.

## Salvestatud failides

Kokkuvõtlik töövihik ({{ui:Märgistuste loend}}, seejärel tabel) sisaldab veergu {{ui:Paberisuurus}} lehel {{ui:Lehtede kaupa}} ning töölehte {{ui:Lehe suurused}}. PDF-aruandes on rida „Lehe suurused“ koos iga suuruse arvuga.

:::note
ANSI- ja ARCH-tollide väärtused on sisestatud avaldatud tabelitest ega ole võrreldud trükitud standarditega. Käsitle lehte, mis on „kohandatud“ ja mõnele neist lähedal, oma kontrolli küsimusena.
:::
