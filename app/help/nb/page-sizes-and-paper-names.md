---
title: Sidestørrelser og papirnavn
summary: Se størrelsen på hver PDF-side i millimeter og tommer, og papirnavnet (A-, B- og C-serien, ANSI, ARCH), og grupper et blandet sett etter størrelse for å finne de avvikende sidene.
keywords: sidestørrelse, papirstørrelse, papirnavn, a0, a1, a2, a3, a4, b-serien, c-serien, ansi, arch, arkitektur, mm, tommer, egendefinert størrelse, etter størrelse, avvikende størrelse, blandet sett, sjekk pdf, kunde, problem, mediabox, cropbox, rotasjon
from: 08e1354f
---

Før et sett sendes til en kunde, kontroller at hvert ark har den størrelsen det skal ha. {{ui:MarkupCraft}} leser størrelsen på hver side fra selve PDF-en og gir papiret et navn.

## Det du gjør

Se størrelsen på ett ark, og grupper deretter hele settet etter størrelse.

## Trinn

1. Åpne PDF-ene ({{ui:Åpne}}), trykk deretter {{key:Esc}} til ingenting er valgt, og {{ui:Velg}} er på.
2. Se i {{ui:Egenskaper}}. {{ui:Papir}} sier navnet og retningen, for eksempel «A4, stående». {{ui:Størrelse}} gir millimeter og tommer.
3. Hver rad i listen {{ui:Ark}} har en størrelseslinje under arknavnet.
4. Velg {{ui:Etter størrelse}} i overskriften til {{ui:Ark}}. Listen samler arkene under én overskrift per størrelse, med den største gruppen først. En størrelse med bare noen få ark merkes som et avvik.
5. Velg {{ui:Etter størrelse}} igjen for å gå tilbake til settets egen rekkefølge.

Resultat: en side som har en annen størrelse enn resten, er lett å se før du sender settet.

## Slik velges navnet

- Størrelsen kommer fra sideboksen i PDF-en med rotasjonen brukt, så en liggende A3 er fortsatt A3.
- Navnene er A- og B-serien (ISO 216), C-serien (ISO 269), ANSI A til E og ARCH A til E.
- En side innenfor 2 mm av en navngitt størrelse får det navnet. Alle andre sider sier {{ui:egendefinert}}, og {{ui:Nærmeste navngitte størrelse}} sier hvilken størrelse som er nærmest, og hvor langt unna den er.
- Tommer kommer fra den faktiske sidestørrelsen, så en A4-side er 8.26 x 11.69 in.

## I filene du lagrer

Sammendragsarbeidsboken ({{ui:Markeringsliste}}, deretter regnearket) har en kolonne {{ui:Papirstørrelse}} på arket {{ui:Etter ark}} og et regneark {{ui:Sidestørrelser}}. PDF-rapporten har en linje «Page sizes» med antall av hver størrelse.

:::note
Tomme verdier for ANSI og ARCH er skrevet inn fra de publiserte tabellene og er ikke sammenlignet med de trykte standardene. Behandle en «egendefinert» side som er nær en av dem, som noe du må kontrollere selv.
:::
