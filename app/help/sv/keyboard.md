---
title: Tangentbord och mus
summary: Varje tangent, musåtgärd och pekgest som MarkupCraft förstår, grupperade, samt de genvägar som webbläsaren behåller.
keywords: tangentbord, genvägar, snabbtangenter, tangenter, mus, hjul, högerklick, mittknapp, styrplatta, touch, gester, nypa, mellanslag panorera
from: 7bf207ec
---

Genvägar som skrivs med {{key:Mod}} fungerar med antingen ⌘ eller Control på en Mac, och med Ctrl på Windows och Linux. Verktygsbokstäver fungerar bara när du inte skriver i en ruta; när du skriver är bokstäver bara bokstäver. Se även [Tangenter, möss och styrplattor](common:keys).

## Verktyg

| Tangent | Verktyg |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Content}}: sidans egna linjer, bilder och text (se [Ändra sidans eget innehåll](topic:page-content)) |
| {{key:P}} | {{ui:Pen}} |
| {{key:I}} | {{ui:Highlight}} |
| {{key:L}} | {{ui:Line}} |
| {{key:A}} | {{ui:Arrow}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polyline}} |
| {{key:G}} | {{ui:Polygon}} |
| {{key:C}} | {{ui:Cloud}} (dra en ruta) |
| {{key:Shift+C}} | {{ui:Free cloud}} |
| {{key:K}} | {{ui:Callout}} |
| {{key:T}} | {{ui:Text}} |
| {{key:N}} | {{ui:Note}} |
| {{key:S}} | {{ui:Stamp}} |
| {{key:M}} | {{ui:Length}} |
| {{key:Q}} | {{ui:Area}} |
| {{key:U}} | {{ui:Count}} |
| {{key:O}} | {{ui:Arc}} |
| {{key:X}} | {{ui:Angle}} |

{{ui:Calibrate}} har ingen tangent: använd knappen i verktygsfältet eller skalknappen i statusfältet. Verktygsbokstäver ignoreras när {{key:Alt}} hålls nedtryckt.

## Medan du ritar

| Tangent eller åtgärd | Vad den gör |
|---|---|
| {{key:Shift}} medan du ritar | Linjer, pilar, längder och polylinjesidor i steg om 45°; rektanglar, ellipser och rutmoln blir kvadratiska; penna och överstrykning blir ett rakt streck |
| Dubbelklicka, {{key:Enter}} eller högerklicka | Avslutar en polylinje, polygon, ett fritt moln eller en area |
| {{key:Backspace}} | Tar bort den sista punkten i en polylinje, polygon, ett fritt moln eller en area |
| {{key:Esc}} | Avbryter det du ritar; när inget pågår rensas markeringen; när inget är markerat går du tillbaka till {{ui:Select}} |
| {{key:Mod+Enter}} | Avslutar skrivandet i en textruta, utropsruta eller anteckning (eller klicka utanför den) |
| {{key:Esc}} medan du skriver | Avbryter texten du skrev |
| {{key:Shift}}-klick med {{ui:Count}} | Tar bort närmaste prick i den markerade räknegruppen |

## Markera och redigera

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Klicka | Markerar en markering |
| {{key:Shift}}-klick | Lägger till eller tar bort en markering från markeringen |
| Dra från vänster till höger på tomt blad | Markerar det som ligger helt inuti fönstret |
| Dra från höger till vänster på tomt blad | Markerar det som fönstret nuddar |
| {{key:Mod+A}} | Markerar alla markeringar på det här bladet |
| Dra en markerad markering | Flyttar den ({{key:Shift}}: i steg om 45°) |
| Dra ett handtag | Ändrar storlek eller form ({{key:Shift}}: behåll proportionerna, eller 45°) |
| Piltangenterna | Flyttar markeringen en skärmpixel ({{key:Shift}}: tio) |
| Dubbelklicka, eller {{key:Enter}} | Redigerar texten i en textruta, utropsruta eller anteckning; för en stämpel öppnas {{ui:Properties}} |
| {{key:Delete}} eller {{key:Backspace}} | Tar bort markeringen |
| {{key:Esc}} | Avmarkerar allt |
| {{key:Mod+Z}} | Ångra |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gör om |

## Klipp ut, kopiera och klistra in

Samma kommandon finns i verktygsfältets grupp {{ui:Edit}} ({{ui:Copy}}, {{ui:Paste}}) och i menyn {{ui:More}}, var och en med sin tangent. Varje kommando är ett enda ångra-steg. Se [Kopiera, klistra in och duplicera](topic:select-and-edit#copy-paste-and-duplicate).

| Tangent | Vad den gör |
|---|---|
| {{key:Mod+X}} | Klipp ut: kopiera markeringen och ta bort den |
| {{key:Mod+C}} | Kopiera markeringen |
| {{key:Mod+V}} | Klistra in. Med pekaren på bladet hamnar kopian centrerad dit pekaren pekar; annars bredvid originalet. Inställningarna kan göra så att den alltid klistras in bredvid originalet. |
| {{key:Mod+Shift+V}} | Klistra in på plats: samma plats på bladet, på det här bladet eller ett annat |
| {{key:Mod+D}} | Duplicerar markeringen bredvid den (urklippet lämnas orört) |

## Hjälp

| Tangent | Vad den gör |
|---|---|
| {{key:F1}} | Öppnar eller stänger den här hjälpen (en panel på sidan; bladet går fortfarande att använda). Även {{ui:Help}} i menyraden överst. |
| {{key:Esc}} i hjälpen | Stänger hjälpen |

:::mac
På de flesta Mac-tangentbord trycker du på {{key:F1}} med **fn** (eller globtangenten), eller använder {{ui:Help}}. Se [Tangenter, möss och styrplattor](common:keys#function-keys-on-a-mac).
:::

## Filer och blad

| Tangent | Vad den gör |
|---|---|
| {{key:Mod+N}} | Nya tomma sidor (när webbläsaren låter sidan använda tangenten; se [Börja med tomma sidor](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Öppnar PDF-filer |
| {{key:Mod+P}} | Skriv ut (se [Skriv ut och ändra sidorna](topic:pages-and-printing)) |
| {{key:Mod+F}} | Söker text i ritningarna (se [Sök text](topic:find-text)) |
| {{key:Mod}}+klicka på en länkad markering | Följer dess bladlänk; {{key:Alt+Left}} går tillbaka (se [Bladlänkar](topic:sheet-links)) |
| {{key:Mod+S}} | Sparar en markerad kopia |
| {{key:PageDown}} / {{key:PageUp}} | Nästa / föregående blad |
| {{key:Enter}} i {{ui:Search sheets}} | Öppnar det första matchande bladet |
| {{key:Mod+Enter}} i {{ui:Write a reply}} | Skickar svaret |

## Zooma och panorera

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Mushjul | Zoomar in eller ut runt pekaren (hjulet rullar aldrig) |
| {{key:Ctrl}} + hjul | Zoomar snabbare |
| {{key:Plus}} eller {{key:Minus}} (även med {{key:Mod}}) | Zoomar in eller ut runt mitten; {{key:=}} fungerar som plus |
| {{key:Mod+0}} | {{ui:Fit page}} |
| {{key:Mod+9}} | {{ui:Fit width}} |
| Dra med mittknappen | Panorerar |
| Dra med högerknappen | Panorerar (när du inte är mitt i en polylinje) |
| Håll {{key:Space}} nedtryckt och dra | Panorerar |
| Piltangenterna när inget är markerat | Panorerar |
| {{key:Ctrl+Shift+F}} | Skärmläge: normal, helskärm, helskärm med fälten dolda (Control-tangenten på alla datorer) |

:::mac
**På en styrplatta:** tvåfingersrullning zoomar. Nypning zoomar också i Chrome, Edge och Firefox. Panorera med {{key:Space}} nedtryckt medan du drar, eller med verktyget {{ui:Pan}}. Ett tvåfingerklick är ett högerklick och avslutar en polylinje. Control-klick kan här fungera som ett vanligt klick i stället för ett högerklick, så använd ett tvåfingerklick.
:::

:::touch
## Touch

| Gest | Vad den gör |
|---|---|
| Ett finger | Ritar med aktuellt verktyg, eller markerar |
| Två fingrar | Nyp för att zooma runt mitten, flytta för att panorera |
| Andra fingret under ett streck | Avbryter strecket och zoomar i stället |
| Dubbeltryck | Avslutar en polylinje, polygon, ett fritt moln eller en area |

Antal prickar, anteckningar, polylinjepunkter och den andra punkten för ett verktyg med två punkter placeras när fingret lyfts. Se [Granska på en iPad eller pekskärm](topic:review-on-a-tablet).
:::

## Genvägar som webbläsaren behåller

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} och {{key:Mod+Q}} tillhör webbläsaren. Om du stänger fliken eller fönstret med osparade markeringar förloras de, efter webbläsarens fråga "Lämna webbplatsen?" på en dator.
- De flesta webbläsare använder {{key:Mod+N}} för ett nytt fönster, så i en webbläsarflik använd {{ui:New}} i verktygsfältet; skrivbordsappen och Studio skickar tangenten vidare till MarkupCraft.
- MarkupCraft tar över {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} och {{key:Mod+Minus}} från webbläsaren medan appen har tangentbordet, samt {{key:Mod+C}} och {{key:Mod+X}} när markeringar är valda. {{key:Mod+,}} öppnar {{ui:Settings}}. För att i stället zooma hela webbläsarsidan, använd webbläsarens meny.
- {{key:Mod+9}} hoppar till den sista webbläsarfliken i vissa webbläsare innan MarkupCraft ser den. Om det händer, använd {{ui:Fit width}} under bladet.
- {{key:Esc}} i helskärm lämnar också helskärmen.

## När en tangent inte gör något

- **Du skriver i en ruta.** Klicka på bladet först. (Ett klick med ett ritverktyg ritar; tryck {{key:Esc}} efteråt eller använd {{key:Mod+Z}}.)
- **En dialogruta är öppen.** Tangenterna går till dialogrutan tills den stängs.
- **Du klickade just på en verktygsknapp** och piltangenterna eller {{key:Space}} agerar i stället på den knappen. För pekaren över bladet och använd hjulet eller mittknappen, eller tryck en verktygsbokstav i stället för att klicka på knappar.

## Var Move finns

Det finns inget Move-kommando: markera en markering och dra den ({{key:Shift}} håller stegen om 45°). En nål flyttas med {{ui:Move pin}}, och en sida med {{ui:Move page earlier}} eller {{ui:Move page later}}.
