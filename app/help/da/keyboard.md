---
title: Tastatur og mus
summary: Alle taster, musehandlinger og touch-bevægelser som MarkupCraft forstår, grupperet, samt de genveje browseren beholder.
keywords: tastatur, genveje, hurtigtaster, taster, mus, hjul, højreklik, midterknap, trackpad, touch, bevægelser, knib, mellemrum, panorér
from: 7bf207ec
---

Genveje skrevet med {{key:Mod}} virker med enten ⌘ eller Control på en Mac og med Ctrl på Windows og Linux. Værktøjsbogstaver virker kun, når du ikke skriver i et felt; mens du skriver, er bogstaver blot bogstaver. Se også [Taster, mus og trackpads](common:keys).

## Værktøjer

| Tast | Værktøj |
|---|---|
| {{key:V}} | {{ui:Vælg}} |
| {{key:H}} | {{ui:Panorér}} |
| {{key:B}} | {{ui:Indhold}}: sidens egne linjer, billeder og tekst (se [Ændr sidens eget indhold](topic:page-content)) |
| {{key:P}} | {{ui:Pen}} |
| {{key:I}} | {{ui:Fremhæv}} |
| {{key:L}} | {{ui:Linje}} |
| {{key:A}} | {{ui:Pil}} |
| {{key:R}} | {{ui:Rektangel}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polylinje}} |
| {{key:G}} | {{ui:Polygon}} |
| {{key:C}} | {{ui:Sky}} (træk en boks) |
| {{key:Shift+C}} | {{ui:Fri sky}} |
| {{key:K}} | {{ui:Henvisning}} |
| {{key:T}} | {{ui:Tekst}} |
| {{key:N}} | {{ui:Notat}} |
| {{key:S}} | {{ui:Stempel}} |
| {{key:M}} | {{ui:Længde}} |
| {{key:Q}} | {{ui:Areal}} |
| {{key:U}} | {{ui:Tæl}} |
| {{key:O}} | {{ui:Bue}} |
| {{key:X}} | {{ui:Vinkel}} |

{{ui:Kalibrér}} har ingen tast: brug værktøjslinjens knap eller skalaknappen i statuslinjen. Værktøjstaster ignoreres, når {{key:Alt}} holdes nede.

## Mens du tegner

| Tast eller handling | Hvad den gør |
|---|---|
| {{key:Shift}} mens du tegner | Linjer, pile, længder og polylinjesider i 45°-trin; rektangler, ellipser og boksskyer bliver kvadratiske; pen og fremhæver giver ét lige strøg |
| Dobbeltklik, {{key:Enter}} eller højreklik | Afslut en polylinje, et polygon, en fri sky eller et areal |
| {{key:Backspace}} | Fjern det sidste punkt i en polylinje, et polygon, en fri sky eller et areal |
| {{key:Esc}} | Annuller det du tegner; når intet er i gang, ryd valget; når intet er valgt, gå tilbage til {{ui:Vælg}} |
| {{key:Mod+Enter}} | Afslut indtastning i en tekstboks, henvisning eller et notat (eller klik udenfor den) |
| {{key:Esc}} mens du skriver | Annuller den tekst du skrev |
| {{key:Shift}}-klik med {{ui:Tæl}} | Fjern den nærmeste prik i den valgte tælgruppe |

## Valg og redigering

| Tast eller handling | Hvad den gør |
|---|---|
| Klik | Vælg en markering |
| {{key:Shift}}-klik | Tilføj eller fjern en markering fra valget |
| Træk fra venstre mod højre på et tomt ark | Vælg det, der ligger helt inden for vinduet |
| Træk fra højre mod venstre på et tomt ark | Vælg det, som vinduet rører |
| {{key:Mod+A}} | Vælg alle markeringer på dette ark |
| Træk en valgt markering | Flyt den ({{key:Shift}}: langs 45°-trin) |
| Træk et håndtag | Ændr størrelse eller form ({{key:Shift}}: bevar proportionerne, eller 45°) |
| Piletaster | Flyt valget én skærmpixel ({{key:Shift}}: ti) |
| Dobbeltklik, eller {{key:Enter}} | Rediger teksten i en tekstboks, henvisning eller et notat; for et stempel, åbn {{ui:Egenskaber}} |
| {{key:Delete}} eller {{key:Backspace}} | Slet valget |
| {{key:Esc}} | Vælg intet |
| {{key:Mod+Z}} | Fortryd |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gentag |

## Klip, kopiér og sæt ind

De samme kommandoer findes i værktøjslinjens gruppe {{ui:Rediger}} ({{ui:Kopiér}}, {{ui:Sæt ind}}) og i menuen {{ui:Mere}}, hver med sin tast. Hver enkelt er ét fortrydelsestrin. Se [Kopiér, sæt ind og duplikér](topic:select-and-edit#copy-paste-and-duplicate).

| Tast | Hvad den gør |
|---|---|
| {{key:Mod+X}} | Klip: kopiér valget og slet det |
| {{key:Mod+C}} | Kopiér valget |
| {{key:Mod+V}} | Sæt ind. Med markøren på arket lander kopien centreret, hvor den peger; ellers ved siden af originalen. Indstillinger kan få den altid til at blive sat ind ved siden af originalen. |
| {{key:Mod+Shift+V}} | Sæt ind på samme sted: samme sted på arket, på dette ark eller et andet |
| {{key:Mod+D}} | Duplikér valget ved siden af det (udklipsholderen røres ikke) |

## Hjælp

| Tast | Hvad den gør |
|---|---|
| {{key:F1}} | Åbn eller luk denne hjælp (et panel i siden; arket kan stadig bruges). Også {{ui:Hjælp}} i linjen øverst. |
| {{key:Esc}} i hjælpen | Luk hjælpen |

:::mac
På de fleste Mac-tastaturer trykker du på {{key:F1}} med **fn** (eller globustasten), eller bruger {{ui:Hjælp}}. Se [Taster, mus og trackpads](common:keys#function-keys-on-a-mac).
:::

## Filer og ark

| Tast | Hvad den gør |
|---|---|
| {{key:Mod+N}} | Nye tomme sider (når browseren lader siden få tasten; se [Start med tomme sider](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Åbn PDF'er |
| {{key:Mod+P}} | Udskriv (se [Udskriv, og skift siderne](topic:pages-and-printing)) |
| {{key:Mod+F}} | Find tekst i tegningerne (se [Find tekst](topic:find-text)) |
| {{key:Mod}}+klik på en linket markering | Følg dens arklink; {{key:Alt+Left}} går tilbage (se [Arklinks](topic:sheet-links)) |
| {{key:Mod+S}} | Gem en markeret kopi |
| {{key:PageDown}} / {{key:PageUp}} | Næste / forrige ark |
| {{key:Enter}} i {{ui:Søg i ark}} | Åbn det første matchende ark |
| {{key:Mod+Enter}} i {{ui:Skriv et svar}} | Send svaret |

## Zoom og panorering

| Tast eller handling | Hvad den gør |
|---|---|
| Musehjul | Zoom ind eller ud omkring markøren (hjulet ruller aldrig) |
| {{key:Ctrl}} + hjul | Zoom hurtigere |
| {{key:Plus}} eller {{key:Minus}} (også med {{key:Mod}}) | Zoom ind eller ud omkring midten; {{key:=}} virker som plus |
| {{key:Mod+0}} | {{ui:Tilpas side}} |
| {{key:Mod+9}} | {{ui:Tilpas bredde}} |
| Træk med midterknappen | Panorér |
| Træk med højreknappen | Panorér (når du ikke er midt i en polylinje) |
| Hold {{key:Space}} nede og træk | Panorér |
| Piletaster uden valg | Panorér |
| {{key:Ctrl+Shift+F}} | Skærmtilstand: normal, fuld skærm, fuld skærm med skjulte bjælker (Control-tasten på alle computere) |

:::mac
**På en trackpad:** rulning med to fingre zoomer. Knib zoomer også i Chrome, Edge og Firefox. Panorér med {{key:Space}} holdt nede mens du trækker, eller med værktøjet {{ui:Panorér}}. Et klik med to fingre er et højreklik og afslutter en polylinje. Control-klik kan her virke som et almindeligt klik i stedet for et højreklik, så brug et klik med to fingre.
:::

:::touch
## Touch

| Bevægelse | Hvad den gør |
|---|---|
| Én finger | Tegn med det aktuelle værktøj, eller vælg |
| To fingre | Knib for at zoome omkring deres midte, flyt for at panorere |
| Anden finger under et strøg | Annullerer strøget og zoomer i stedet |
| Dobbelttryk | Afslut en polylinje, et polygon, en fri sky eller et areal |

Tæl-prikker, notater, polylinjepunkter og det andet punkt i et værktøj med to punkter placeres, når fingeren løftes. Se [Gennemgang på en iPad eller touchskærm](topic:review-on-a-tablet).
:::

## Genveje som browseren beholder

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} og {{key:Mod+Q}} hører til browseren. Lukker du fanen eller vinduet med ikke-gemte markeringer, går de tabt, efter browserens spørgsmål »Forlad siden?« på en computer.
- De fleste browsere bruger {{key:Mod+N}} til et nyt vindue, så i en browserfane skal du bruge {{ui:Ny}} i værktøjslinjen; desktop-appen og Studio sender tasten videre til MarkupCraft.
- MarkupCraft overtager {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} og {{key:Mod+Minus}} fra browseren, mens appen har tastaturet, og {{key:Mod+C}} og {{key:Mod+X}}, mens markeringer er valgt. {{key:Mod+,}} åbner {{ui:Indstillinger}}. Vil du i stedet zoome hele browsersiden, brug browserens menu.
- {{key:Mod+9}} hopper til den sidste browserfane i nogle browsere, før MarkupCraft ser den. Sker det, brug {{ui:Tilpas bredde}} under arket.
- {{key:Esc}} i fuld skærm forlader også fuld skærm.

## Når en tast ikke gør noget

- **Du skriver i et felt.** Klik først på arket. (Et klik med et tegneværktøj tegner; tryk {{key:Esc}} bagefter eller brug {{key:Mod+Z}}.)
- **En dialogboks er åben.** Tasterne går til dialogboksen, indtil den lukkes.
- **Du har lige klikket på en værktøjslinjeknap**, og piletasterne eller {{key:Space}} virker på knappen i stedet. Flyt markøren hen over arket og brug hjulet eller midterknappen, eller tryk på et værktøjsbogstav i stedet for at klikke på knapper.

## Hvor Flyt findes

Der findes ingen Flyt-kommando: vælg en markering og træk den ({{key:Shift}} holder 45°-trin). En nål flyttes med {{ui:Flyt nål}}, og en side med {{ui:Flyt siden tidligere}} eller {{ui:Flyt siden senere}}.
