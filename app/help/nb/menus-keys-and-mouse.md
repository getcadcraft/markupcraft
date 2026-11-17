---
title: Menyer, taster og mus
summary: Velg MarkupCraft sin egen verktøylinje, en PDF-gjennomgangsmenylinje eller et bånd, gi ethvert verktøy din egen tast, flytt verktøy mellom menyer, og still inn hva hjulet og musknappene gjør.
keywords: menystil, menyer, menylinje, verktøylinje, bånd, faner, pdf-gjennomgang, tastatursnarveier, hurtigtaster, taster, tilpass, endre tildeling, mus, hjul, inverter, zoomretning, midtknapp, høyreknapp, panorer, eksporter, importer, bytte, kjent
from: 081438a6
---

MarkupCraft sine verktøy er like uansett hvordan du når dem. En **menystil** bestemmer bare hvor de står på skjermen, hva de heter der, og hvilke taster som velger dem. Velg en i {{ui:Innstillinger}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menyer, taster og mus}}; endringen skjer med en gang, og denne nettleseren husker den.

## De tre stilene

| Stil | Hva du får |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraft sin egen verktøylinje (Fil, Velg, Tegn, Revider, Annoter, Mål, Rediger) og dens enbokstav-taster: {{key:V}} velg, {{key:H}} panorer, {{key:P}} penn, {{key:I}} utheving, {{key:L}} linje, {{key:A}} pil, {{key:R}} rektangel, {{key:E}} ellipse, {{key:C}} sky, {{key:K}} henvisning, {{key:T}} tekst, {{key:N}} notat, {{key:S}} stempel, {{key:M}} lengde, {{key:Q}} areal, {{key:U}} tell. Utgangspunktet. |
| {{ui:PDF-gjennomgang}} | En menylinje ({{ui:Fil}}, {{ui:Rediger}}, {{ui:Visning}}, {{ui:Dokument}}, {{ui:Markering}}, {{ui:Mål}}, {{ui:Gjennomgang}}, {{ui:Vindu}}) over en rad med gjennomgangsverktøy, med taster satt opp slik PDF-gjennomgangsprogrammer setter sine: {{key:V}} velg, {{key:Shift+V}} panorer, {{key:H}} utheving, {{key:Q}} henvisning, {{key:N}} mangekant, {{key:Shift+N}} polylinje, {{key:Shift+T}} notat, {{key:Shift+A}} bue, og målingene på {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibrer, {{key:Alt+Shift+L}} lengde, {{key:Alt+Shift+G}} vinkel, {{key:Alt+Shift+A}} areal, {{key:Alt+Shift+C}} tell. {{key:Alt+L}} åpner markeringslisten. Midtknappen panorerer; et høyreklikk gjør ikke det. |
| {{ui:Bånd}} | Faner oppkalt etter arbeidet: {{ui:Marker}} (velg, tegn, skyer, henvisninger, tekst, notater, stempler), {{ui:Mål}}, {{ui:Rediger}}, {{ui:Gjennomgang}} (markeringslisten og dens eksporter, BCF-saker, avvikslisten, feltregistreringer, verktøysamlingen, sammenlign), {{ui:Sider}} og {{ui:Visning}}, med {{ui:Fil}} og hurtigknapper for åpne, lagre, angre og gjør om. Verktøyene beholder MarkupCraft sine egne enbokstav-taster. En knapp for et panel som ikke er åpent, åpner det panelet først. |

Hver stil beholder {{key:Mod}}-tastene: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} tilpass side og {{key:Mod+9}} tilpass bredde; {{key:PageUp}} og {{key:PageDown}} bytter ark.

:::tip
En tast som hører til MarkupCraft sitt eget oppsett, men ikke til stilen du valgte, gjør ingenting, og statuslinjen sier hvor verktøyet sitt er blitt av («I PDF-gjennomgang er Henvisning Q»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltastene beholder alltid sin betydning. Mens du skriver i en tekstboks, henvisning eller notat, er hver tast en del av teksten, og tall du skriver mens du tegner, åpner fortsatt lengdeboksen.
:::

## Lag den til din egen

1. Velg stilen som er nærmest det du vil ha, og klikk {{ui:Tilpass…}}.
2. Under {{ui:Taster og menyer}} finner du et verktøy (søkeboksen hjelper). Velg {{ui:Legg til en tast}} og trykk tasten, eller to taster etter hverandre for en to-bokstavs tast. Klikk på en tast for å fjerne den.
3. Med menylinjen flytter {{ui:Hvor den står}} verktøyet til en annen meny, eller til {{ui:Bare taster}}.
4. Under {{ui:Mus}} setter du hjulet og knappene som panorerer arket.
5. Gi den et navn og klikk {{ui:Lagre}}.

Å lagre en innebygd stil lager din egen kopi («Min PDF-gjennomgang»); den innebygde endres aldri. En tast gitt til to verktøy vises i rødt og må rettes før du kan lagre.

## Mus

- **Musehjul**: {{ui:Rulling opp zoomer inn}} (utgangspunktet) eller {{ui:Rulling opp zoomer ut}}, og hvor raskt. En klyping på styreplaten zoomer alltid i den retningen fingrene beveger seg.
- **Panorer arket med**: midtknappen, høyreknappen, eller begge. {{key:Space}} og dra, og verktøyet {{ui:Panorer}}, panorerer alltid; venstreknappen tegner og velger ellers, så å krysse den av endrer ingenting her.
- MarkupCraft har ingen 3D-visning, så 3D-knappene gjør ingenting her.

## Ta det med deg

{{ui:Eksporter}} lagrer stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Importer…}} legger til en, fra en annen datamaskin eller en kollega. En importert fil kan bare peke på MarkupCraft sine egne verktøy: alt annet i den utelates og telles i statuslinjen. {{ui:Slett denne stilen}} fjerner en av dine egne.

:::note
Disse innstillingene blir i denne nettleseren. {{ui:Bruk denne stilen i alle apper}} under stilkortene gjør at hver app åpner i sin tilsvarende stil: {{ui:PDF-gjennomgang}} følger de andre appenes menylinjestiler, {{ui:Bånd}} følger deres bånd, og MarkupCraft sin egen verktøylinje følger deres. En app uten tilsvarende stil beholder sin egen.
:::

:::tip
Arbeidsoppsettene i {{ui:Innstillinger}} › {{ui:Globalt}} › {{ui:Layout}} ({{ui:Bånd og prosjektleser}}, {{ui:Verktøykasse og infoboks}}) bygger båndet sitt fra fanene i stilen {{ui:Bånd}}, og verktøykassen sin fra MarkupCraft sin verktøylinje, slik at hvert verktøy virker likt i dem.
:::

Relatert: [Tastatur og mus](topic:keyboard) · [MarkupCraft-innstillinger](topic:settings) · [Fra annen markeringsprogramvare](topic:coming-from)
