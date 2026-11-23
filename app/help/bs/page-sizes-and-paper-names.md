---
title: Veličine stranica i nazivi papira
summary: Pogledaj veličinu svake PDF stranice u milimetrima i inčima i njen naziv papira (serije A, B i C, ANSI, ARCH), te grupiši mješoviti set po veličini da nađeš neobične stranice.
keywords: veličina stranice, format papira, naziv papira, a0, a1, a2, a3, a4, serija b, serija c, ansi, arch, arhitektonski, mm, inči, prilagođena veličina, po veličini, neobična veličina, mješoviti set, provjeri pdf, klijent, problem, mediabox, cropbox, rotacija
from: 08e1354f
---

Prije nego što set ode klijentu, provjeri da je svaki list one veličine kakva treba biti. {{ui:MarkupCraft}} čita veličinu svake stranice iz samog PDF-a i imenuje papir.

## Šta ćeš raditi

Pogledaj veličinu jednog lista, zatim grupiši cijeli set po veličini.

## Koraci

1. Otvori PDF-ove ({{ui:Otvori}}), zatim pritisni {{key:Esc}} dok ništa nije odabrano i {{ui:Odaberi}} nije uključeno.
2. Pogledaj {{ui:Svojstva}}. {{ui:Papir}} kaže naziv i smjer, na primjer „A4, uspravno“. {{ui:Veličina}} daje milimetre i inče.
3. Svaki red liste {{ui:Listovi}} ima red s veličinom ispod naziva lista.
4. Odaberi {{ui:Po veličini}} u zaglavlju {{ui:Listovi}}. Lista grupiše listove pod jednim naslovom po veličini, najveća grupa prva. Veličina sa samo nekoliko listova označena je kao izuzetak.
5. Odaberi {{ui:Po veličini}} ponovo da se vratiš na redoslijed seta.

Rezultat: stranica koja je druge veličine od ostalih lako se vidi prije nego što pošalješ set.

## Kako se bira naziv

- Veličina dolazi iz okvira stranice u PDF-u uz primijenjenu rotaciju, pa je ležeći A3 i dalje A3.
- Nazivi su serije A i B (ISO 216), serija C (ISO 269), ANSI od A do E i ARCH od A do E.
- Stranica unutar 2 mm od imenovane veličine dobija taj naziv. Svaka druga stranica kaže {{ui:prilagođeno}}, a {{ui:Najbliža imenovana veličina}} kaže koja je veličina najbliža i koliko je udaljena.
- Inči dolaze iz stvarne veličine stranice, pa je A4 stranica 8.26 × 11.69 in.

## U datotekama koje spasiš

Sažetak radne knjige ({{ui:Lista označavanja}}, zatim tabelarna datoteka) ima kolonu {{ui:Format papira}} na listu {{ui:Po listu}} i radni list {{ui:Veličine stranica}}. PDF izvještaj ima liniju „Veličine stranica“ s brojem svake veličine.

:::note
Vrijednosti u inčima za ANSI i ARCH unesene su ručno iz objavljenih tabela i nisu upoređene s štampanim standardima. Stranicu „prilagođeno“ koja je blizu jedne od njih provjeri sam.
:::
