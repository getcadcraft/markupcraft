---
title: Tastatur og mus
summary: Alle taster, musehandlinger og berøringsbevegelser MarkupCraft forstår, gruppert, pluss snarveiene nettleseren beholder.
keywords: tastatur, snarveier, hurtigtaster, taster, mus, hjul, høyreklikk, midtknapp, styreplate, berøring, bevegelser, klype, space, panorer
from: 7bf207ec
---

Snarveier skrevet med {{key:Mod}} virker med enten ⌘ eller Control på en Mac, og med Ctrl på Windows og Linux. Verktøybokstaver virker bare når du ikke skriver i en boks; mens du skriver, er bokstaver bare bokstaver. Se også [Taster, mus og styreplater](common:keys).

## Verktøy

| Tast | Verktøy |
|---|---|
| {{key:V}} | {{ui:Velg}} |
| {{key:H}} | {{ui:Panorer}} |
| {{key:B}} | {{ui:Innhold}}: sidens egne linjer, bilder og tekst (se [Endre sidens eget innhold](topic:page-content)) |
| {{key:P}} | {{ui:Penn}} |
| {{key:I}} | {{ui:Utheving}} |
| {{key:L}} | {{ui:Linje}} |
| {{key:A}} | {{ui:Pil}} |
| {{key:R}} | {{ui:Rektangel}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polylinje}} |
| {{key:G}} | {{ui:Mangekant}} |
| {{key:C}} | {{ui:Sky}} (dra en boks) |
| {{key:Shift+C}} | {{ui:Fri sky}} |
| {{key:K}} | {{ui:Henvisning}} |
| {{key:T}} | {{ui:Tekst}} |
| {{key:N}} | {{ui:Notat}} |
| {{key:S}} | {{ui:Stempel}} |
| {{key:M}} | {{ui:Lengde}} |
| {{key:Q}} | {{ui:Areal}} |
| {{key:U}} | {{ui:Tell}} |
| {{key:O}} | {{ui:Bue}} |
| {{key:X}} | {{ui:Vinkel}} |

{{ui:Kalibrer}} har ingen tast: bruk verktøylinjeknappen eller målestokkknappen i statuslinjen. Verktøybokstaver ignoreres når {{key:Alt}} holdes nede.

## Mens du tegner

| Tast eller handling | Hva den gjør |
|---|---|
| {{key:Shift}} mens du tegner | Linjer, piler, lengder og sider av polylinjer i 45°-trinn; rektangler, ellipser og boksskyer blir kvadratiske; penn og utheving blir én rett strek |
| Dobbeltklikk, {{key:Enter}} eller høyreklikk | Fullfør en polylinje, mangekant, fri sky eller areal |
| {{key:Backspace}} | Fjern det siste punktet i en polylinje, mangekant, fri sky eller et areal |
| {{key:Esc}} | Avbryt det du tegner; når ingenting pågår, fjern utvalget; når ingenting er valgt, gå tilbake til {{ui:Velg}} |
| {{key:Mod+Enter}} | Fullfør skriving i en tekstboks, henvisning eller notat (eller klikk utenfor den) |
| {{key:Esc}} mens du skriver | Avbryt teksten du skrev |
| {{key:Shift}}-klikk med {{ui:Tell}} | Fjern nærmeste prikk i den valgte tellegruppen |

## Velge og redigere

| Tast eller handling | Hva den gjør |
|---|---|
| Klikk | Velg en markering |
| {{key:Shift}}-klikk | Legg til eller fjern en markering fra utvalget |
| Dra fra venstre mot høyre på tomt ark | Velg det som er helt inne i vinduet |
| Dra fra høyre mot venstre på tomt ark | Velg det vinduet berører |
| {{key:Mod+A}} | Velg alle markeringer på dette arket |
| Dra en valgt markering | Flytt den ({{key:Shift}}: langs 45°-trinn) |
| Dra et håndtak | Endre størrelse eller form ({{key:Shift}}: behold proporsjonene, eller 45°) |
| Piltastene | Flytt utvalget ett skjermpiksel ({{key:Shift}}: ti) |
| Dobbeltklikk, eller {{key:Enter}} | Rediger teksten i en tekstboks, henvisning eller notat; for et stempel, åpne {{ui:Egenskaper}} |
| {{key:Delete}} eller {{key:Backspace}} | Slett utvalget |
| {{key:Esc}} | Velg ingenting |
| {{key:Mod+Z}} | Angre |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gjør om |

## Klipp ut, kopier og lim inn

De samme kommandoene finnes i verktøylinjens gruppe {{ui:Rediger}} ({{ui:Kopier}}, {{ui:Lim inn}}) og menyen {{ui:Mer}}, hver med sin tast. Hver av dem er ett enkelt steg å angre. Se [Kopier, lim inn og dupliser](topic:select-and-edit#copy-paste-and-duplicate).

| Tast | Hva den gjør |
|---|---|
| {{key:Mod+X}} | Klipp ut: kopier utvalget og slett det |
| {{key:Mod+C}} | Kopier utvalget |
| {{key:Mod+V}} | Lim inn. Med pekeren på arket havner kopien sentrert der pekeren peker; ellers ved siden av originalen. Innstillinger kan gjøre at den alltid limes inn ved siden av originalen. |
| {{key:Mod+Shift+V}} | Lim inn på samme sted: samme sted på arket, på dette arket eller et annet |
| {{key:Mod+D}} | Dupliser utvalget ved siden av det (utklippstavlen røres ikke) |

## Hjelp

| Tast | Hva den gjør |
|---|---|
| {{key:F1}} | Åpne eller lukk denne hjelpen (et panel på siden; arket kan fortsatt brukes). Også {{ui:Hjelp}} i linjen øverst. |
| {{key:Esc}} i hjelpen | Lukk hjelpen |

:::mac
På de fleste Mac-tastaturer trykker du {{key:F1}} sammen med **fn** (eller globetasten), eller bruker {{ui:Hjelp}}. Se [Taster, mus og styreplater](common:keys#function-keys-on-a-mac).
:::

## Filer og ark

| Tast | Hva den gjør |
|---|---|
| {{key:Mod+N}} | Nye tomme sider (når nettleseren lar siden få tasten; se [Start med tomme sider](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Åpne PDF-filer |
| {{key:Mod+P}} | Skriv ut (se [Skriv ut, og endre sidene](topic:pages-and-printing)) |
| {{key:Mod+F}} | Finn tekst i tegningene (se [Finn tekst](topic:find-text)) |
| {{key:Mod}}+klikk på en lenket markering | Følg arklenken; {{key:Alt+Left}} går tilbake (se [Arklenker](topic:sheet-links)) |
| {{key:Mod+S}} | Lagre en markert kopi |
| {{key:PageDown}} / {{key:PageUp}} | Neste / forrige ark |
| {{key:Enter}} i {{ui:Søk i ark}} | Åpne det første treffende arket |
| {{key:Mod+Enter}} i {{ui:Skriv et svar}} | Send svaret |

## Zoom og panorering

| Tast eller handling | Hva den gjør |
|---|---|
| Musehjul | Zoom inn eller ut rundt pekeren (hjulet ruller aldri) |
| {{key:Ctrl}} + hjul | Zoom raskere |
| {{key:Plus}} eller {{key:Minus}} (også med {{key:Mod}}) | Zoom inn eller ut rundt midten; {{key:=}} virker som pluss |
| {{key:Mod+0}} | {{ui:Tilpass side}} |
| {{key:Mod+9}} | {{ui:Tilpass bredde}} |
| Dra med midtknappen | Panorer |
| Dra med høyreknappen | Panorer (når du ikke er midt i en polylinje) |
| Hold {{key:Space}} og dra | Panorer |
| Piltastene uten valgt markering | Panorer |
| {{key:Ctrl+Shift+F}} | Skjermmodus: normal, fullskjerm, fullskjerm med linjer skjult (Control-tasten på alle datamaskiner) |

:::mac
**På styreplaten:** to fingre som ruller, zoomer. Klyping zoomer også i Chrome, Edge og Firefox. Panorer med {{key:Space}} holdt nede mens du drar, eller med verktøyet {{ui:Panorer}}. Et klikk med to fingre er et høyreklikk og fullfører en polylinje. Control-klikk kan her virke som et vanlig klikk i stedet for et høyreklikk, så bruk et klikk med to fingre.
:::

:::touch
## Berøring

| Bevegelse | Hva den gjør |
|---|---|
| Ett finger | Tegn med gjeldende verktøy, eller velg |
| To fingre | Klyp for å zoome rundt midten, flytt for å panorere |
| Andre finger under en strek | Avbryter streken og zoomer i stedet |
| Dobbelttrykk | Fullfør en polylinje, mangekant, fri sky eller areal |

Tellepunkter, notater, polylinjepunkter og det andre punktet i et verktøy med to punkter plasseres når fingeren løftes. Se [Gjennomgang på en iPad eller berøringsskjerm](topic:review-on-a-tablet).
:::

## Snarveier nettleseren beholder

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} og {{key:Mod+Q}} tilhører nettleseren. Lukker du fanen eller vinduet med ulagrede markeringer, går de tapt etter nettleserens spørsmål «Forlate siden?» på en datamaskin.
- De fleste nettlesere bruker {{key:Mod+N}} til et nytt vindu, så i en nettleserfane bruker du {{ui:Ny}} i verktøylinjen; skrivebordsappen og Studio sender tasten videre til MarkupCraft.
- MarkupCraft tar {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} og {{key:Mod+Minus}} bort fra nettleseren mens appen har tastaturet, og {{key:Mod+C}} og {{key:Mod+X}} mens markeringer er valgt. {{key:Mod+,}} åpner {{ui:Innstillinger}}. For å zoome hele nettlesersiden i stedet, bruk nettleserens meny.
- {{key:Mod+9}} hopper til den siste nettleserfanen i noen nettlesere før MarkupCraft ser den. Skjer det, bruk {{ui:Tilpass bredde}} under arket.
- {{key:Esc}} i fullskjerm avslutter også fullskjerm.

## Når en tast ikke gjør noe

- **Du skriver i en boks.** Klikk på arket først. (Et klikk med et tegneverktøy tegner; trykk {{key:Esc}} etterpå, eller bruk {{key:Mod+Z}}.)
- **En dialogboks er åpen.** Tastene går til dialogboksen til den lukkes.
- **Du har nettopp klikket en verktøylinjeknapp**, og piltastene eller {{key:Space}} virker på den knappen i stedet. Flytt pekeren over arket og bruk hjulet eller midtknappen, eller trykk en verktøybokstav i stedet for å klikke knapper.

## Hvor Flytt finnes

Det finnes ingen flytt-kommando: velg en markering og dra den ({{key:Shift}} holder 45°-trinn). En nål flyttes med {{ui:Flytt nål}}, og en side med {{ui:Flytt siden tidligere}} eller {{ui:Flytt siden senere}}.
