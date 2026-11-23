---
title: Formati strana i nazivi papira
summary: Pogledaj veličinu svake strane PDF-a u milimetrima i inčima i njen naziv papira (serije A, B i C, ANSI, ARCH), a mešani skup grupiši po veličini da nađeš neobične strane.
keywords: veličina strane, veličina papira, naziv papira, a0, a1, a2, a3, a4, serija b, serija c, ansi, arch, arhitektonski, mm, inči, prilagođena veličina, po veličini, neobična veličina, mešani skup, proveri pdf, klijent, problem, mediabox, cropbox, rotacija
from: 08e1354f
---

Pre nego što skup ode klijentu, proveri da je svaki list one veličine koju treba da ima. {{ui:MarkupCraft}} čita veličinu svake strane iz samog PDF-a i imenuje papir.

## Šta ćeš uraditi

Pogledaj veličinu jednog lista, zatim grupiši ceo skup po veličini.

## Koraci

1. Otvori PDF-ove ({{ui:Otvori}}), zatim pritisni {{key:Esc}} dok ništa nije izabrano i dok je {{ui:Izbor}} uključen.
2. Pogledaj {{ui:Svojstva}}. {{ui:Papir}} kaže naziv i smer, na primer „A4, uspravno”. {{ui:Veličina}} daje milimetre i inče.
3. Svaki red spiska {{ui:Listovi}} ima red sa veličinom ispod naziva lista.
4. Izaberi {{ui:Po veličini}} u zaglavlju {{ui:Listovi}}. Spisak grupiše listove pod jednim naslovom za svaku veličinu, najveća grupa prva. Veličina sa samo nekoliko listova označava se kao neobična.
5. Izaberi {{ui:Po veličini}} ponovo da se vratiš na redosled samog skupa.

Rezultat: strana koja je druge veličine od ostalih lako se vidi pre slanja skupa.

## Kako se bira naziv

- Veličina dolazi iz okvira strane u PDF-u sa primenjenom rotacijom, pa je vodoravni A3 i dalje A3.
- Nazivi su serije A i B (ISO 216), serija C (ISO 269), ANSI od A do E i ARCH od A do E.
- Strana u rasponu od 2 mm od imenovane veličine dobija taj naziv. Svaka druga strana ima oznaku {{ui:prilagođeno}}, a {{ui:Najbliži imenovani format}} kaže koja je veličina najbliža i koliko je daleko.
- Inči se računaju iz stvarne veličine strane, pa je A4 strana 8.26 × 11.69 in.

## U datotekama koje čuvaš

Sažetak radne sveske ({{ui:Spisak označavanja}}, zatim tabela) ima kolonu {{ui:Format papira}} na listu {{ui:Po listu}} i radni list {{ui:Formati strana}}. PDF izveštaj ima red „Formati strana” sa brojem svake veličine.

:::note
Vrednosti ANSI i ARCH u inčima unete su iz objavljenih tabela i nisu upoređene sa štampanim standardima. Stranu označenu kao „prilagođeno” koja je blizu jedne od njih prepusti sopstvenoj proveri.
:::
