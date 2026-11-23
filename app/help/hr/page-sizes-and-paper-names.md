---
title: Veličine stranica i nazivi papira
summary: Pogledajte veličinu svake stranice PDF-a u milimetrima i palcima te naziv papira (serije A, B i C, ANSI, ARCH), i grupirajte mješoviti set po veličini kako biste pronašli neobične stranice.
keywords: veličina stranice, veličina papira, naziv papira, a0, a1, a2, a3, a4, serija b, serija c, ansi, arch, arhitektonski, mm, palci, prilagođena veličina, po veličini, neobična veličina, mješoviti set, provjera pdf, klijent, izdanje, mediabox, cropbox, rotacija
from: 08e1354f
---

Prije nego set ode klijentu, provjerite je li svaki list one veličine kakva treba biti. {{ui:MarkupCraft}} čita veličinu svake stranice iz samog PDF-a i imenuje papir.

## Što ćete raditi

Pogledajte veličinu jednog lista, zatim grupirajte cijeli set po veličini.

## Koraci

1. Otvorite PDF-ove ({{ui:Otvori}}), zatim pritisnite {{key:Esc}} dok ništa nije odabrano i {{ui:Odabir}} je uključen.
2. Pogledajte {{ui:Svojstva}}. {{ui:Papir}} kaže naziv i smjer, na primjer „A4, uspravno“. {{ui:Veličina}} daje milimetre i palce.
3. Svaki redak popisa {{ui:Listovi}} ima redak s veličinom ispod naziva lista.
4. Odaberite {{ui:Po veličini}} u zaglavlju {{ui:Listovi}}. Popis grupira listove pod jednim naslovom po veličini, najveća grupa prva. Veličina sa samo nekoliko listova označava se kao neobična.
5. Ponovno odaberite {{ui:Po veličini}} da biste se vratili na redoslijed samog seta.

Rezultat: stranica koja je druge veličine od ostalih lako se vidi prije slanja seta.

## Kako se bira naziv

- Veličina dolazi iz okvira stranice u PDF-u s primijenjenom rotacijom, pa je ležeći A3 i dalje A3.
- Nazivi su serije A i B (ISO 216), serija C (ISO 269), ANSI A do E i ARCH A do E.
- Stranica unutar 2 mm od imenovane veličine dobiva taj naziv. Svaka druga stranica kaže {{ui:prilagođeno}}, a {{ui:Najbliža imenovana veličina}} pokazuje koja je veličina najbliža i koliko je udaljena.
- Palci dolaze iz stvarne veličine stranice, pa je A4 stranica 8.26 sa 11.69 in.

## U datotekama koje spremate

Sažetak u radnoj knjizi ({{ui:Popis oznaka}}, zatim proračunska tablica) ima stupac {{ui:Veličina papira}} na listu {{ui:Po listovima}} i radni list {{ui:Veličine stranica}}. PDF izvješće ima redak „Veličine stranica“ s brojem svake veličine.

:::note
Vrijednosti u palcima za ANSI i ARCH upisane su iz objavljenih tablica i nisu uspoređene s tiskanim standardima. Stranicu „prilagođeno“ koja je blizu jedne od njih provjerite sami.
:::
