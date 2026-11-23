---
title: Sidestørrelser og papirnavne
summary: Se hver PDF-sides størrelse i millimeter og tommer og dens papirnavn (A-, B- og C-serien, ANSI, ARCH), og gruppér et blandet sæt efter størrelse for at finde de afvigende sider.
keywords: sidestørrelse, papirstørrelse, papirnavn, a0, a1, a2, a3, a4, b-serien, c-serien, ansi, arch, arkitektonisk, mm, tommer, brugerdefineret størrelse, efter størrelse, afvigende størrelse, blandet sæt, tjek pdf, kunde, udgave, mediabox, cropbox, rotation
from: 08e1354f
---

Før et sæt sendes til en kunde, kontrollér at hvert ark har den rigtige størrelse. {{ui:MarkupCraft}} læser hver sides størrelse fra selve PDF-filen og navngiver papiret.

## Hvad du vil gøre

Se på ét arks størrelse, og gruppér derefter hele sættet efter størrelse.

## Trin

1. Åbn PDF-filerne ({{ui:Åbn}}), tryk derefter {{key:Esc}}, indtil intet er valgt, og {{ui:Vælg}} er tændt.
2. Kig i {{ui:Egenskaber}}. {{ui:Papir}} viser navnet og retningen, for eksempel "A4, stående". {{ui:Størrelse}} viser millimeter og tommer.
3. Hver række på listen {{ui:Ark}} har en størrelseslinje under arknavnet.
4. Vælg {{ui:Efter størrelse}} i overskriften {{ui:Ark}}. Listen samler arkene under én overskrift pr. størrelse, den største gruppe først. En størrelse med kun få ark markeres som afvigende.
5. Vælg {{ui:Efter størrelse}} igen for at gå tilbage til sættets egen rækkefølge.

Resultat: En side, der har en anden størrelse end resten, er let at se, før du sender sættet.

## Sådan vælges navnet

- Størrelsen kommer fra sidens boks i PDF-filen med rotationen taget i betragtning, så en liggende A3 stadig er A3.
- Navnene er A- og B-serien (ISO 216), C-serien (ISO 269), ANSI A til E og ARCH A til E.
- En side inden for 2 mm af en navngiven størrelse får det navn. Andre sider siger {{ui:brugerdefineret}}, og {{ui:Nærmeste navngivne størrelse}} angiver, hvilken størrelse der er tættest, og hvor langt den er fra.
- Tommer kommer fra den faktiske sidestørrelse, så en A4-side er 8.26 x 11.69 in.

## I de filer, du gemmer

Oversigtsarbejdsbogen ({{ui:Markeringslisten}}, derefter regnearket) har en kolonne {{ui:Papirstørrelse}} på arket {{ui:Pr. ark}} og et regneark {{ui:Sidestørrelser}}. PDF-rapporten har en linje "Sidestørrelser" med antallet af hver størrelse.

:::note
ANSI- og ARCH-værdierne i tommer er indtastet fra de offentliggjorte tabeller og er ikke sammenlignet med de trykte standarder. Behandl en side med »brugerdefineret«, der ligger tæt på en af dem, som noget, du selv skal kontrollere.
:::
