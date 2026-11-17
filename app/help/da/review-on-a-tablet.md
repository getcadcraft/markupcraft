---
title: Gennemgang på en iPad eller touchskærm
summary: Knib, panorér og tegn med fingre eller en stylus, hvad der virker ved løft, hvad der kræver et tastatur, og hvordan du holder dit arbejde sikkert på en tablet.
keywords: ipad, tablet, touch, touchskærm, knib, zoom, to fingre, apple pencil, stylus, finger, felt, byggeplads, overflade, bevægelser, mobil
from: 91eb6438
---

MarkupCraft virker med touch: på en iPad (Safari eller Chrome), på en bærbar med touchskærm, eller på en Windows- eller Android-tablet med en nyere browser. I liggende format viser en tablet hele layoutet.

## Bevægelser

| Bevægelse | Hvad den gør |
|---|---|
| Én finger | Tegner med det aktuelle værktøj, eller vælger med {{ui:Vælg}} |
| To fingre, spredt eller knibet | Zoomer omkring punktet mellem dine fingre |
| To fingre, flyttet sammen | Panorerer; du kan zoome og panorere i én bevægelse |
| En anden finger under tegning | Annullerer det, den første finger startede, og starter i stedet zoom |
| Dobbelttryk, eller tryk og hold | Afslutter en polylinje, polygon, fri sky eller et areal |
| Tryk og hold på en tekst, henvisning eller et notat, med {{ui:Vælg}} | Åbner dens tekst til redigering |
| Én finger med {{ui:Panorér}} slået til | Panorerer |

På en touchskærm er knapperne i værktøjslinjen, menuerne, fanerne og dialogknapperne større, så de er lette at ramme med en finger.

## Hvad der sker ved løft

For at den første finger i et knib aldrig efterlader et mærke, virker nogle værktøjer, når du **løfter** fingeren, ikke når du rører:

- {{ui:Tæl}}: prikken tilføjes ved løft.
- {{ui:Notat}}: noten placeres ved løft.
- {{ui:Polylinje}}, {{ui:Polygon}}, {{ui:Fri sky}} og {{ui:Areal}}: hvert punkt tilføjes ved løft.
- {{ui:Linje}}, {{ui:Pil}}, {{ui:Længde}} og {{ui:Kalibrér}}: når du trykker på start og derefter trykker på slutningen, placeres slutpunktet ved løft.

Hvis din finger glider mere end lidt, før du løfter, tæller det ikke som et tryk, og intet tilføjes. Tryk rent; for at rette, brug {{ui:Fortryd}}.

Værktøjer, du trækker med ({{ui:Pen}}, {{ui:Fremhæv}}, {{ui:Sky}}, {{ui:Rektangel}}, {{ui:Ellipse}}, {{ui:Henvisning}}, {{ui:Tekst}}, {{ui:Stempel}}), starter, så snart du rører; en ekstra finger annullerer dem.

## Valg med en finger

- Tryk på en markering for at vælge den; træk den for at flytte den; træk et håndtag for at ændre størrelse. Når en finger har rørt arket, får markeringer og håndtag et større mål, og håndtagene tegnes større.
- Træk over tomt ark for at tegne et valgvindue (fra venstre mod højre: helt inde i; fra højre mod venstre: rører).
- I {{ui:Vælg}} panorerer én finger **ikke**. Brug to fingre, eller vælg {{ui:Panorér}}.

## Ting, der kræver et tastatur

Uden et tastatur findes der ikke {{key:Shift}}, {{key:Esc}} eller {{key:Enter}}. Her er, hvad du gør i stedet:

| Tastaturhandling | Uden tastatur |
|---|---|
| {{key:Esc}} for at annullere eller gå tilbage til Vælg | Tryk på {{ui:Vælg}} i værktøjslinjen |
| {{key:Shift}} for 45°-linjer, kvadrater og cirkler | Tegn omhyggeligt; ret med håndtagene |
| {{key:Shift}}-klik for at tilføje til et valg | Brug et valgvindue |
| {{key:Shift}}-klik for at fjerne en tælleprik | {{ui:Fortryd}} lige efter et forkert tryk |
| {{key:Mod+Enter}} for at afslutte skrivning | Tryk uden for tekstfeltet |
| {{key:Enter}} for at afslutte en polylinje, eller for at redigere en markerings tekst | Tryk og hold, eller {{ui:Rediger på arket}} i {{ui:Egenskaber}} |
| {{key:Delete}} | {{ui:Slet}} i værktøjslinjen eller i {{ui:Egenskaber}} |
| Start en ny tællegruppe med {{key:Esc}} | Tryk på tomt ark med {{ui:Vælg}}, og tryk derefter på {{ui:Tæl}} igen |

Et tastaturcover eller et Bluetooth-tastatur giver alle genveje tilbage; på en iPad virker ⌘-tasten til {{key:Mod+Z}} og resten.

Knapper viser ikke deres værktøjstips ved touch. Tasten for hvert værktøj står i [Tastatur og mus](topic:keyboard).

## Stylus og Apple Pencil

En stylus (Apple Pencil, Surface Pen og lignende) virker som en mus: den tegner og vælger, og handler straks ved tryk. Brug dine fingre til knib og panorering. Tryk ændrer ikke linjetykkelsen.

## Åbn og gem på en iPad

- {{ui:Åbn}} viser Files-vælgeren: iCloud Drive, På min iPad og enhver lagerapp, du har forbundet.
- {{ui:Gem}} spørger om download; kopien havner i Files under Downloads (eller den mappe, der er angivet i Safaris indstillinger).

## Hold dit arbejde sikkert på en tablet

:::warning
iPad Safari advarer dig ikke, før du forlader en side med ikke-gemt arbejde, og iPadOS kan genindlæse en fane i baggrunden for at frigøre hukommelse. MarkupCraft gemmer en gendannelseskopi i browseren og tilbyder den, når du åbner den igen (se [Gendan dit arbejde](common:recover)), men **gem efter hvert ark eller hver rundgang**: en privat fane gemmer ingen kopi.
:::

- Dit navn, værktøjsindstillinger og værktøjskassen gemmes i den browser på den iPad, ligesom på en computer. Se [Hvad der bliver i denne browser](topic:browser-storage).
- **Før et besøg på byggepladsen uden signal:** mens du stadig er online, åbn MarkupCraft i Safari (eller Chrome) på iPad'en og vælg {{ui:Gem til offline brug}} i linjen øverst. Vent, til den siger "Klar til offline" (den tæller "Gemmer N af M"; PDF-læseren og -skriveren fylder ca. 6 MB). På byggepladsen åbner du samme adresse eller et bogmærke til den: åbning, markering og gemning af PDF'er virker uden forbindelse. Hvis der står "Offline er ikke tilgængelig", er du i en privat fane; brug en normal. Se [Arbejde offline](common:offline).
- Safari fjerner en offlinekopi, du ikke har brugt i nogle uger. Før en tur klikker du på "Klar til offline" og vælger "Gem igen (hent nyeste version)".
- Meget store arksæt bruger meget hukommelse. På en tablet åbner du kun de ark, du har brug for til besøget.

## På en telefon

Den virker, men skærmen er lille: delene stables (værktøjslinje, ark, statuslinje, paneler, derefter arklisten), og værktøjslinjen scroller sideværts. Brug en telefon til at kigge og til at tilføje et hurtigt notat, og en tablet eller computer til egentlig gennemgang.
