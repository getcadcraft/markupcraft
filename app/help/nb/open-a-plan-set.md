---
title: Åpne et plansett og gå mellom ark
summary: Åpne én PDF eller flere, eller start med blanke sider, finn ark etter nummer eller navn, zoom og panorer, og gi nytt navn til et ark når filen har feil navn.
keywords: åpne, ny, blank side, blankt ark, skisse, rutenett, uten navn, plansett, ark, sider, miniatyrbilder, sidemerkinger, arknummer, tegningshode, gi nytt navn, navigere, zoom, panorer, tilpass, søk i ark
from: 1e7f4d50
---

## Åpne settet

1. Velg {{ui:Åpne}} i verktøylinjen, eller trykk {{key:Mod+O}}.
2. I filvelgeren velger du alle PDF-ene i settet ({{pick:mac=hold ⌘ og klikk på hver fil|windows linux=hold Ctrl og klikk på hver fil}}, eller velg et utvalg med Shift), og bekreft.
   Eller dra filene fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren din}} og slipp dem på arkområdet. «Slipp PDF-filer for å åpne dem» vises mens du drar.
3. Vent mens statuslinjen sier «Åpner <file>…». For store filer telles det: «(10 av 60 ark)».

Resultat: Listen {{ui:Ark}} viser hver side i hver fil, i den rekkefølgen du åpnet dem, og statuslinjen sier noe slikt som «Åpnet 3 filer (42 ark i settet).» Hvis filene allerede hadde kommentarer, legges det til hvor mange som ble lest.

For å legge til flere filer i settet senere, åpner du dem på samme måte. De legges til på slutten av listen.

## Start med blanke sider

For å skisse eller ta notater uten en tegning, lag blanke sider i stedet for å åpne en PDF:

1. Velg {{ui:Ny}} i verktøylinjen, eller {{ui:Start med en blank side}} på startskjermen, eller trykk {{key:Mod+N}} der nettleseren din tillater det (skrivebordsappen og Studio gjør det alltid).
2. Velg {{ui:Papirstørrelse}}: Letter, Tabloid eller ANSI B, ARCH D, ARCH E, A4, A3 eller A1, og {{ui:Stående}} eller {{ui:Liggende}}.
3. Velg et {{ui:Rutenett}}: {{ui:Ingen}}, {{ui:Prikker}} eller {{ui:Ruter}}. Rutenettet har linjer hver 1/4 in, med en tykkere linje for hver tomme på papir i tommer, og hver 5 mm, med en tykkere linje for hver 10 mm på metrisk papir. Det skrives ut på siden.
4. Skriv hvor mange {{ui:Sider}} du vil ha, fra 1 til 20, og velg {{ui:Opprett}}.

Resultat: En ny PDF med navnet «Untitled-1.pdf» (deretter «Untitled-2.pdf» og så videre) åpnes som hvilken som helst annen fil, laget her på denne datamaskinen. Alle verktøy fungerer på den, og {{ui:Lagre}} laster ned «Untitled-1 (marked up).pdf». MarkupCraft husker valgene dine til neste gang.

Sidene har ingen målestokk: statuslinjen sier «Ikke kalibrert». Rutenettet er ikke en målestokk. For å måle, kalibrer arket eller velg en målestokk først; se [Kalibrer og mål](topic:calibrate-and-measure).

For å legge til en side i et blankt sett, åpne en av arkene og velg {{ui:Legg til en blank side}} under listen {{ui:Ark}}. Den nye siden har samme papir og rutenett og legges til på slutten. Som alle sideendringer kan den ikke angres; se [Skriv ut, og endre sidene](topic:pages-and-printing).

## Hvordan ark får navnene sine

MarkupCraft gir hvert ark navnet «<arknummer> — <tittel>», for eksempel «A-101 — Etasjeplan», fra det første av disse det finner:

1. Et navn du skrev inn med {{ui:Gi arket nytt navn}} (nedenfor).
2. PDF-ens egne sidemerkinger, når personen som laget PDF-en satte dem (for eksempel «A-101»).
3. Tegningshodet: MarkupCraft leser sidens tekst og ser etter noe som ligner et arknummer (A-101, A1.01, M-201A, KA1-1), med fortrinn for nedre høyre hjørne, høyre stripe og bunnbåndet, og tar den største teksten i nærheten som tittel.
4. Ellers filnavnet og siden: «Plans — side 3».

For å se hvilken som ble brukt, trykk {{key:Esc}} til ingenting er valgt og {{ui:Velg}} er på, og se i {{ui:Egenskaper}}: «Lest fra» sier «Sidens etikett», «Tegningshodet», «Filnavnet» eller «Skrevet inn manuelt».

:::note
Skannede ark, og PDF-er der teksten er eksportert som linjer, har ingen tekst å lese. De får navn etter fil og side til du gir dem nytt navn. MarkupCraft kan ikke lese tekst fra bilder ennå.
:::

## Gå mellom ark

- Klikk et ark i {{ui:Ark}}.
- Trykk {{key:PageDown}} for neste ark og {{key:PageUp}} for forrige, eller bruk pilene i linjen under arket.
- Skriv i {{ui:Søk i ark}}: en del av et nummer («A-2»), et ord i tittelen («tak»), eller et filnavn. Listen innsnevres mens du skriver («4 av 42»). Trykk {{key:Enter}} for å åpne første treff. Tøm feltet for å se alle ark igjen.

Hvert ark beholder sin egen zoom og posisjon til du lukker settet.

## Zoom og panorering

:::mouse
- **Zoom:** snurr hjulet over arket. Det zoomer rundt pekeren. Eller trykk {{key:Plus}} og {{key:Minus}} (også med {{key:Mod}}), eller bruk zoomknappene. Skriv en eksakt prosent i zoomfeltet.
- **Tilpass:** {{ui:Tilpass side}} ({{key:Mod+0}}) viser hele arket; {{ui:Tilpass bredde}} ({{key:Mod+9}}) fyller bredden.
- **Panorer:** dra med midtknappen (hjulet), eller dra med høyreknappen, eller hold {{key:Space}} og dra, eller velg {{ui:Panorer}} ({{key:H}}) og dra. Når ingenting er valgt, flytter også piltastene arket.
:::

:::mac mouse
På en Mac-styreflate zoomer to-fingerrulling (den ruller ikke arket). For å panorere, hold {{key:Space}} og dra med én finger, eller bytt til {{ui:Panorer}} med {{key:H}}. Å klype zoomer i Chrome, Edge og Firefox.
:::

:::touch
- **Zoom og panorering:** legg to fingre på arket. Spre eller klyp dem for å zoome rundt punktet mellom dem, og flytt dem sammen for å panorere. Begge skjer samtidig.
- **Panorer med én finger:** velg {{ui:Panorer}} først. Med et annet verktøy tegner eller velger én finger.
- {{ui:Tilpass side}} og {{ui:Tilpass bredde}} finnes i linjen under arket.
:::

Du kan zoome langt ut forbi hele arket og inn til 6400 %. Arket tegnes skarpt igjen et øyeblikk etter at du slutter å flytte.

## Bokmerker

{{ui:Bokmerker}}, øverst i {{ui:Ark}}-panelet, viser bokmerkene i PDF-en som det åpne arket tilhører. Velg ett for å gå til siden. Blyanten gir et bokmerke nytt navn, og krysset fjerner det. {{ui:Bygg fra ark}} lager ett bokmerke per ark, navngitt slik arklisten viser dem (arknummer og tittel), og {{ui:Legg til for dette arket}} legger til ett for arket du er på. Endringer er en del av filens ulagrede arbeid: {{ui:Lagre}} skriver dem inn i kopien, der alle PDF-visere viser dem.

## Snu visningen

De to snuknappene til høyre i linjen under arket snur visningen en kvart omdreining i begge retninger, for et ark som er tegnet på tvers. Bare visningen snur: PDF-en og markeringene forblir som de er, og neste ark åpnes slik PDF-en er (hvert ark husker sin egen snuing mens settet er åpent). Tekst du legger til i en snudd visning, leses rett opp slik du ser den. For å snu selve siden i den lagrede PDF-en, bruk {{ui:Sider}}, deretter {{ui:Roter siden med klokken}}; se [Skriv ut, og endre sidene](topic:pages-and-printing).

## Gi et ark nytt navn

Når et arks navn er feil eller mangler:

1. Vis arket.
2. Trykk {{key:Esc}} til ingenting er valgt og verktøyet {{ui:Velg}} er på. {{ui:Egenskaper}} viser nå arket.
3. Velg {{ui:Gi arket nytt navn}}.
4. Skriv inn {{ui:Arknummer}} og {{ui:Tittel}}, og velg {{ui:Lagre}}.

Resultat: arklisten, linjen under arket og markeringslisten bruker alle det nye navnet, og «Lest fra» sier «Skrevet inn manuelt». Omdøpingen kan angres med {{key:Mod+Z}}.

For å gå tilbake til det filen sier, åpne {{ui:Gi arket nytt navn}} igjen, tøm begge feltene og velg {{ui:Lagre}}.

Når du lagrer, blir et skrevet arknummer til sidemerkingen i PDF-en, slik at andre PDF-visere viser «A-101» i sidefeltet sitt. Hvis du gir et nummer til en side i en fil, får hver side i filen en merking i kopien (det skrevne nummeret, ellers den gamle merkingen, ellers sidenummeret). En skrevet tittel beholdes i MarkupCraft, men andre visere viser den ikke.

## Ta PDF-en til TakeoffCraft, eller hent den hit

Når TakeoffCraft er åpen på samme sted (labben, Try eller de online-appene), har linjen under arket {{ui:Åpne i TakeoffCraft}}. Det åpner arkets PDF i TakeoffCraft i en ny fane, slik den ble åpnet her, slik at du kan måle mengder på den. Markeringene dine blir her; lagre dem som vanlig.

TakeoffCrafts knapp {{ui:MarkupCraft}} gjør det samme den andre veien: PDF-en åpnes her, som om du hadde valgt {{ui:Åpne}}. Hvis nettleseren blokkerer den nye fanen, tillat popup-vinduer for denne siden og velg knappen igjen.
