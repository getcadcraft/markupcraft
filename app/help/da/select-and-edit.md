---
title: Vælg, flyt og ændr markeringer
summary: Vælg markeringer ved at klikke eller med et vindue, flyt, ændr størrelse, skub, klip, kopiér, sæt ind, sæt ind på samme sted, duplikér, slet og fortryd.
keywords: vælg, valg, vælg alle, fravælg alle, vindue, kryds, flyt, ændr størrelse, greb, håndtag, skub, klip, kopiér, sæt ind, sæt ind på samme sted, duplikér, udklipsholder, anden fane, slet, fortryd, gentag, rediger
from: 62c7def3
---

Vælg først {{ui:Vælg}} ({{key:V}}). Tryk også {{key:Esc}} for at komme dertil: første tryk fjerner valget, næste tryk skifter tilbage til {{ui:Vælg}}.

## Vælg markeringer

:::mouse
- **Én markering:** klik på den. En stiplet boks og håndtag vises, og {{ui:Egenskaber}} viser den.
- **Tilføj eller fjern én:** hold {{key:Shift}} nede og klik.
- **Helt inde i et vindue:** træk fra venstre mod højre på en tom del af arket. Kun markeringer helt inde i boksen vælges (fuld kontur).
- **Berører et vindue:** træk fra højre mod venstre. Alt, boksen berører, vælges (grøn, stiplet kontur).
- **Alt på dette ark:** {{key:Mod+A}}, eller {{ui:Mere}} og derefter {{ui:Vælg alle}} i værktøjslinjens gruppe {{ui:Rediger}}.
- **Intet:** klik på et tomt sted, tryk {{key:Esc}}, eller {{ui:Mere}} og derefter {{ui:Fravælg alle}}.
:::

:::touch
- **Én markering:** tryk på den.
- **Flere:** træk én finger hen over en tom del af arket for at tegne et vindue. Fra venstre mod højre vælges det, der er helt indeni; fra højre mod venstre vælges det, det berører.
- Tryk med {{key:Shift}} nede virker kun med et tastatur tilsluttet. Uden tastatur bruger du et vindue.
- Én finger panorerer aldrig i {{ui:Vælg}}; brug to fingre eller værktøjet {{ui:Panorér}}.
:::

Kommentarer med skrivebeskyttelse, der fulgte med filen, vises med en grå stiplet boks og ingen håndtag. De kan vælges og besvares, men ikke ændres.

## Flyt og ændr størrelse

- **Flyt:** træk en valgt markering. Hold {{key:Shift}} nede for kun at flytte i multipla af 45°. Flere valgte markeringer flyttes sammen.
- **Ændr størrelse:** med én markering valgt, træk i et håndtag. Firkantede håndtag ændrer boksens størrelse (hold {{key:Shift}} nede for at bevare proportionerne); runde håndtag flytter ét hjørnepunkt på en linje, polylinje, polygon, sky eller måling (hold {{key:Shift}} nede for 45°); diamantformede håndtag flytter en henvisnings spids og knæk. Penstreger skaleres fra deres boks.
- **Skub:** tryk på piletasterne for at flytte valget én skærmpixel; hold {{key:Shift}} nede for ti. Hvert tryk er ét fortrydelsestrin.

## Ændr hvad den siger eller hvordan den ser ud

- **Tekst, henvisninger og noter:** dobbeltklik på markeringen, eller tryk {{key:Enter}}, eller vælg {{ui:Rediger på arket}} i {{ui:Egenskaber}}. Skriv, og klik derefter udenfor eller tryk {{key:Mod+Enter}}. {{key:Esc}} annullerer redigeringen.
- **Stempler:** vælg et andet stempel i {{ui:Egenskaber}} (dobbeltklik åbner {{ui:Egenskaber}} for dig).
- **Stil:** {{ui:Farve}}, {{ui:Linjetykkelse}}, {{ui:Udfyldning}}, {{ui:Dækning}} og {{ui:Tekststørrelse}} under »Stil« i {{ui:Egenskaber}}. Når flere er valgt, viser {{ui:Egenskaber}} de typer, du valgte, og ændrer dem alle på én gang.

## Kopiér, sæt ind og duplikér

Værktøjslinjens gruppe {{ui:Rediger}} har {{ui:Kopiér}} og {{ui:Sæt ind}}; dens {{ui:Mere}}-menu har alle disse, hver med sin tast.

| Kommando | Tast | Hvad den gør |
|---|---|---|
| {{ui:Klip}} | {{key:Mod+X}} | Kopierer de valgte markeringer og sletter dem |
| {{ui:Kopiér}} | {{key:Mod+C}} | Kopierer de valgte markeringer |
| {{ui:Sæt ind}} | {{key:Mod+V}} | Lægger en kopi på det ark, du er på (hvor, nedenfor) |
| {{ui:Sæt ind på samme sted}} | {{key:Mod+Shift+V}} | Lægger kopien præcis det sted, den blev kopieret fra: på samme ark, oven på originalen; på et andet ark, samme sted på papiret |
| {{ui:Duplikér}} | {{key:Mod+D}} | Laver en kopi af valget lidt nedad og til højre, uden at røre det, du kopierede før |

**Hvor Sæt ind lægger kopien:**

- {{key:Mod+V}} med markøren på arket lægger kopien centreret, hvor markøren er. Flyt markøren, tryk {{key:Mod+V}} igen, og du placerer en til.
- Knappen {{ui:Sæt ind}} (når markøren så er på værktøjslinjen), eller {{key:Mod+V}} med markøren uden for arket, lægger den lidt nedad og til højre for originalen. Hver indsættelse af den samme kopi går et lille skridt længere, så kopier aldrig skjuler hinanden. På et andet ark havner den første indsættelse, hvor originalen var på sit ark. Hvis det sted er uden for synsfeltet, havner kopien midt i visningen.
- For at få {{key:Mod+V}} til altid at sætte ind ved siden af originalen, vælg {{ui:Ved siden af kopien}} under {{ui:Sæt ind}} i [MarkupCraft-indstillinger](topic:settings).

De indsatte markeringer er valgt, så du kan trække dem med det samme. Hvert klip, hver indsættelse eller duplikering er ét fortrydelsestrin: {{key:Mod+Z}} fjerner hele indsættelsen.

Indsatte kopier er nye markeringer: de får dit navn, dagens dato, status Åben, intet mangelnummer og en tom tråd. Deres type, form, stil, tekst og kommentar følger med. Kommentarer med skrivebeskyttelse, der fulgte med filen, kan ikke kopieres eller klippes.

**Mellem faner:** det, du kopierer, gemmes også i denne browser, så en anden MarkupCraft-fane i samme browser kan sætte det ind. Kopiering af markeringer bruger ikke computerens udklipsholder: du kan ikke sætte dem ind i et andet program, og tekst, du har kopieret et andet sted, indsættes ikke som markering.

**Højreklik-menu:** højreklik på en markering (eller tomt papir) for {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind her}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Gem valget som stempel…}}, {{ui:Fladgør ind i siden ved gemning}}, {{ui:Indsæt et billede her…}} og {{ui:Vælg alle}}. Højreklik på en markering, der ikke er valgt, vælger den først. Træk med højre museknap panorerer stadig. På en touchskærm åbner et langt tryk på en markering den samme menu (på tekst starter det redigering af teksten). Menutasten eller {{key:Shift+F10}} åbner den ved valget.

Sideindhold valgt med værktøjet {{ui:Indhold}} kan også kopieres og indsættes: se [Ændr sidens egne linjer, billeder og tekst](topic:page-content).

Hvis du vil kopiere en del af selve siden som et billede (et rektangel, en ellipse eller en fri form), eller som et gennemsigtigt overlay til et andet ark eller program, se [Kopiér et område af siden eller et overlay](topic:copy-an-area).

## Slet

Tryk {{key:Delete}} eller {{key:Backspace}}, vælg {{ui:Mere}} og derefter {{ui:Slet}} i værktøjslinjen, eller vælg {{ui:Slet}} i {{ui:Egenskaber}}. Statuslinjen siger, hvor mange der blev slettet. Skrivebeskyttede kommentarer fra filen slettes aldrig (»beholdt som i filen«).

## Fortryd og gentag

- {{key:Mod+Z}} fortryder, {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} gentager. Værktøjslinjen har {{ui:Fortryd}} og {{ui:Gentag}}.
- Statuslinjen siger, hvad der blev fortrudt (»Fortrød flyt markering.«).
- Fortryd dækker alle ændringer af markeringer, statusser, svar, mangelposter, arkenes målestoksforhold og arknavne, op til 500 trin.
- Historikken ryddes, når du lukker sættet.

## Kopiér markeringer til andre ark

For at lægge det samme stempel, den samme notering eller sky på flere ark, vælg den (eller flere markeringer) og vælg {{ui:Kopiér til andre ark…}} i {{ui:Egenskaber}}. Sæt flueben ved arkene, eller vælg {{ui:Alle ark}}, og vælg {{ui:Kopiér}}. Hvert ark får en kopi på samme sted på siden, signeret med dit navn. Ét {{key:Mod+Z}} fjerner dem alle.
