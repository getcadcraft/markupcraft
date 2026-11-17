---
title: Velg, flytt og endre markeringer
summary: Velg markeringer ved å klikke eller med en ramme, flytt, endre størrelse, skyv, klipp ut, kopier, lim inn, lim inn på samme sted, dupliser, slett og angre.
keywords: velg, utvalg, velg alle, fjern utvalg, vindu, kryssing, flytt, endre størrelse, håndtak, håndtak, skyv, klipp ut, kopier, lim inn, lim inn på samme sted, dupliser, utklippstavle, annen fane, slett, angre, gjør om, rediger
from: 62c7def3
---

Velg {{ui:Select}} ({{key:V}}) først. Trykk {{key:Esc}} tar deg også dit: første trykk fjerner utvalget, og neste trykk bytter tilbake til {{ui:Select}}.

## Velg markeringer

:::mouse
- **En markering:** klikk på den. En stiplet boks og håndtak vises, og {{ui:Properties}} viser den.
- **Legg til eller fjern én:** hold {{key:Shift}} og klikk.
- **Helt inne i et vindu:** dra fra venstre til høyre på en tom del av arket. Bare markeringer som er helt inne i boksen, velges (heltrukken kontur).
- **Berører et vindu:** dra fra høyre til venstre. Alt boksen berører, velges (grønn, stiplet kontur).
- **Alt på dette arket:** {{key:Mod+A}}, eller {{ui:More}} og deretter {{ui:Select all}} i verktøylinjens gruppe {{ui:Edit}}.
- **Ingenting:** klikk på et tomt sted, trykk {{key:Esc}}, eller {{ui:More}} og deretter {{ui:Select none}}.
:::

:::touch
- **En markering:** trykk på den.
- **Flere:** dra ett finger over en tom del av arket for å tegne et vindu. Fra venstre til høyre velger det som er helt inne; fra høyre til venstre velger det som berøres.
- Trykk med {{key:Shift}} holdt inne fungerer bare med et tastatur tilkoblet. Uten tastatur, bruk et vindu.
- Ett finger flytter aldri arket i {{ui:Select}}; bruk to fingre, eller verktøyet {{ui:Pan}}.
:::

Skrivebeskyttede kommentarer som fulgte med filen, vises med en grå stiplet boks og uten håndtak. De kan velges og det kan svares på dem, men ikke endres.

## Flytt og endre størrelse

- **Flytt:** dra en valgt markering. Hold {{key:Shift}} for å flytte bare langs multipler av 45°. Flere valgte markeringer flyttes sammen.
- **Endre størrelse:** med én markering valgt, dra et håndtak. Firkantede håndtak endrer størrelsen på boksen (hold {{key:Shift}} for å beholde proporsjonene). Runde håndtak flytter ett hjørnepunkt på en linje, polylinje, polygon, sky eller måling (hold {{key:Shift}} for 45°). Rombeformede håndtak flytter spissen og knekken på en henvisning. Penn-streker skaleres fra boksen sin.
- **Skyv:** trykk piltastene for å flytte utvalget ett skjermpiksel; hold {{key:Shift}} for ti. Hvert trykk er ett angrertrinn.

## Endre tekst eller utseende

- **Tekst, henvisninger og notater:** dobbeltklikk på markeringen, eller trykk {{key:Enter}}, eller velg {{ui:Edit on the sheet}} i {{ui:Properties}}. Skriv, og klikk deretter utenfor eller trykk {{key:Mod+Enter}}. {{key:Esc}} avbryter redigeringen.
- **Stempler:** velg et annet stempel i {{ui:Properties}} (dobbeltklikk åpner {{ui:Properties}} for deg).
- **Stil:** {{ui:Color}}, {{ui:Line width}}, {{ui:Fill}}, {{ui:Opacity}} og {{ui:Text size}} under "Stil" i {{ui:Properties}}. Med flere valgt viser {{ui:Properties}} typene du valgte, og endrer dem alle samtidig.

## Kopier, lim inn og dupliser

Gruppen {{ui:Edit}} på verktøylinjen har {{ui:Copy}} og {{ui:Paste}}. Menyen {{ui:More}} har alle disse, hver med sin tast.

| Kommando | Tast | Hva den gjør |
|---|---|---|
| {{ui:Cut}} | {{key:Mod+X}} | Kopierer de valgte markeringene og sletter dem |
| {{ui:Copy}} | {{key:Mod+C}} | Kopierer de valgte markeringene |
| {{ui:Paste}} | {{key:Mod+V}} | Legger en kopi på arket du er på (hvor, se under) |
| {{ui:Paste in place}} | {{key:Mod+Shift+V}} | Legger kopien på nøyaktig samme sted den ble kopiert fra: på samme ark, oppå originalen; på et annet ark, på samme sted på papiret |
| {{ui:Duplicate}} | {{key:Mod+D}} | Lager en kopi av utvalget litt ned og til høyre, uten å røre det du kopierte tidligere |

**Hvor Lim inn legger kopien:**

- {{key:Mod+V}} med pekeren på arket legger kopien sentrert der pekeren er. Flytt pekeren, trykk {{key:Mod+V}} igjen, og du plasserer en til.
- Knappen {{ui:Paste}} (når pekeren er på verktøylinjen), eller {{key:Mod+V}} med pekeren utenfor arket, legger den litt ned og til høyre for originalen. Hver innliming av samme kopi går et lite steg videre, slik at kopiene aldri skjuler hverandre. På et annet ark havner den første innlimingen der originalen var på arket sitt. Hvis det stedet er utenfor synsfeltet, havner kopien midt i visningen.
- For at {{key:Mod+V}} alltid skal lime inn ved siden av originalen, velg {{ui:Beside the copy}} under {{ui:Paste}} i [innstillingene for MarkupCraft](topic:settings).

De innlimte markeringene er valgt, så du kan dra dem med en gang. Hvert klipp ut, lim inn eller dupliser er ett angrertrinn: {{key:Mod+Z}} fjerner hele innlimingen.

Innlimte kopier er nye markeringer: de får navnet ditt, dagens dato, status Åpen, ingen avviksnummer og en tom tråd. Type, form, stil, tekst og kommentar følger med. Skrivebeskyttede kommentarer som fulgte med filen, kan ikke kopieres eller klippes ut.

**Mellom faner:** det du kopierer, lagres også i denne nettleseren, slik at en annen fane med MarkupCraft i samme nettleser kan lime det inn. Kopiering av markeringer bruker ikke datamaskinens utklippstavle: du kan ikke lime dem inn i et annet program, og tekst du kopierte andre steder, limes ikke inn som en markering.

**Høyreklikkmeny:** høyreklikk på en markering (eller et tomt papir) for {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste here}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Save selection as a stamp…}}, {{ui:Flatten into the page when saved}}, {{ui:Insert a picture here…}} og {{ui:Select all}}. Høyreklikk på en markering som ikke er valgt, velger den først. Å dra med høyre knapp flytter fortsatt arket. På en berøringsskjerm åpner et langt trykk på en markering samme meny (på tekst starter det redigering av teksten). Menytasten eller {{key:Shift+F10}} åpner den ved utvalget.

Sideinnhold valgt med verktøyet {{ui:Content}} kopieres og limes inn også: se [Endre sidens egne linjer, bilder og tekst](topic:page-content).

For å kopiere en del av selve siden som et bilde (et rektangel, en ellipse eller en fri form), eller som et gjennomsiktig overlegg til et annet ark eller program, se [Kopier et område av siden, eller et overlegg](topic:copy-an-area).

## Slett

Trykk {{key:Delete}} eller {{key:Backspace}}, velg {{ui:More}} og deretter {{ui:Delete}} i verktøylinjen, eller {{ui:Delete}} i {{ui:Properties}}. Statuslinjen sier hvor mange som ble slettet. Skrivebeskyttede kommentarer fra filen slettes aldri ("beholdt som i filen").

## Angre og gjør om

- {{key:Mod+Z}} angrer, {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} gjør om. Verktøylinjen har {{ui:Undo}} og {{ui:Redo}}.
- Statuslinjen sier hva som ble angret ("Angret flytting av markering.").
- Angre dekker alle endringer i markeringer, statuser, svar, avviksposter, skalaer på ark og arknavn, opptil 500 trinn.
- Historikken tømmes når du lukker settet.

## Kopier markeringer til andre ark

For å legge den samme stempelen, notatet eller skyen på flere ark, velg den (eller flere markeringer) og velg {{ui:Copy to other sheets…}} i {{ui:Properties}}. Kryss av arkene, eller {{ui:All sheets}}, og velg {{ui:Copy}}. Hvert ark får en kopi på samme sted på siden, signert med navnet ditt. Ett {{key:Mod+Z}} fjerner dem alle.
