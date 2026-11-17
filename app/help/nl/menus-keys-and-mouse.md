---
title: Menu's, toetsen en muis
summary: Kies de eigen werkbalk van MarkupCraft, een menubalk voor PDF-controle of een lint, geef elk gereedschap een eigen toets, verplaats gereedschappen tussen menu's, en stel in wat het wiel en de muisknoppen doen.
keywords: menustijl, menu's, menubalk, werkbalk, lint, tabbladen, pdf-controle, sneltoetsen, toetsen, aanpassen, opnieuw toewijzen, muis, wiel, omkeren, zoomrichting, middelste knop, rechterknop, verschuiven, exporteren, importeren, wisselen, vertrouwd
from: 081438a6
---

MarkupCraft-gereedschappen zijn hetzelfde, hoe u er ook bij komt. Een **menustijl** bepaalt alleen waar ze op het scherm staan, hoe ze heten en met welke toetsen ze worden gekozen. Kies er een in {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}; de wijziging is meteen actief, en deze browser onthoudt haar.

## De drie stijlen

| Stijl | Wat u krijgt |
|---|---|
| {{ui:MarkupCraft}} | De eigen werkbalk van MarkupCraft (Bestand, Selecteren, Tekenen, Herzien, Annoteren, Meten, Bewerken) en de eenletterige toetsen: {{key:V}} selecteren, {{key:H}} verschuiven, {{key:P}} pen, {{key:I}} markeerstift, {{key:L}} lijn, {{key:A}} pijl, {{key:R}} rechthoek, {{key:E}} ellips, {{key:C}} wolk, {{key:K}} aanwijzing, {{key:T}} tekst, {{key:N}} notitie, {{key:S}} stempel, {{key:M}} lengte, {{key:Q}} oppervlakte, {{key:U}} tellen. Het startpunt. |
| {{ui:PDF review}} | Een menubalk ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) boven een rij controletools, met toetsen ingedeeld zoals bij PDF-controleprogramma's: {{key:V}} selecteren, {{key:Shift+V}} verschuiven, {{key:H}} markeerstift, {{key:Q}} aanwijzing, {{key:N}} veelhoek, {{key:Shift+N}} polylijn, {{key:Shift+T}} notitie, {{key:Shift+A}} boog, en de metingen op {{key:Alt+Shift}}: {{key:Alt+Shift+K}} ijken, {{key:Alt+Shift+L}} lengte, {{key:Alt+Shift+G}} hoek, {{key:Alt+Shift+A}} oppervlakte, {{key:Alt+Shift+C}} tellen. {{key:Alt+L}} opent de markuplijst. De middelste knop verschuift; een rechtsklik niet. |
| {{ui:Ribbon}} | Tabbladen die naar het werk zijn genoemd: {{ui:Mark up}} (selecteren, tekenen, wolken, aanwijzingen, tekst, notities, stempels), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}} (de markuplijst en de exports, BCF-issues, de opleverlijst, veldrecords, de gereedschapskist, vergelijken), {{ui:Pages}} en {{ui:View}}, met {{ui:File}} en snelknoppen voor openen, opslaan, ongedaan maken en opnieuw. De gereedschappen houden de eigen eenletterige toetsen van MarkupCraft. Een knop voor een paneel dat niet open is, opent eerst dat paneel. |

Elke stijl houdt de {{key:Mod}}-toetsen: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} voor {{ui:Fit page}} en {{key:Mod+9}} voor {{ui:Fit width}}; {{key:PageUp}} en {{key:PageDown}} wisselen van blad.

:::tip
Een toets die bij de eigen indeling van MarkupCraft hoort maar niet bij de gekozen stijl, doet niets, en de statusbalk zegt waar zijn gereedschap naartoe is verplaatst ("In PDF-controle is Aanwijzing Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} en de pijltjes behouden altijd hun betekenis. Terwijl u typt in een tekstvak, aanwijzing of notitie, hoort elke toets bij de tekst; cijfers die u tijdens het tekenen typt, openen nog steeds het lengtevak.
:::

## Het op uw manier maken

1. Kies de stijl die het dichtst bij uw wens ligt, en klik daarna op {{ui:Customize…}}.
2. Zoek op {{ui:Keys and menus}} een gereedschap (het zoekvak helpt). Kies {{ui:Add a key}} en druk op de toets, of op twee toetsen na elkaar voor een tweeletterige toets. Klik op een toets om hem weg te halen.
3. Met de menubalk verplaatst {{ui:Where it sits}} het gereedschap naar een ander menu, of naar {{ui:Keys only}}.
4. Stel op {{ui:Mouse}} het wiel en de knoppen in die het blad verschuiven.
5. Geef het een naam en klik op {{ui:Save}}.

Een ingebouwde stijl opslaan maakt uw eigen kopie ("Mijn PDF-controle"); de ingebouwde verandert nooit. Een toets die aan twee gereedschappen is gegeven, wordt rood getoond en moet worden opgelost voordat u kunt opslaan.

## Muis

- **Muiswiel**: {{ui:Scroll up zooms in}} (het startpunt) of {{ui:Scroll up zooms out}}, en hoe snel. Een knijpgebaar op het trackpad zoomt altijd in de richting waarin uw vingers bewegen.
- **Het blad verschuiven met**: de middelste knop, de rechterknop, of beide. {{key:Space}} en slepen, en het gereedschap {{ui:Pan}}, verschuiven altijd; de linkerknop tekent en selecteert anders, dus het aanvinken ervan verandert hier niets.
- MarkupCraft heeft geen 3D-weergave, dus de 3D-knoppen doen hier niets.

## Neem het mee

{{ui:Export}} slaat de gebruikte stijl op als een klein `.ccinput.json`-bestand; {{ui:Import…}} voegt er een toe, van een andere computer of een collega. Een geïmporteerd bestand kan alleen naar de eigen gereedschappen van MarkupCraft verwijzen: al het andere erin wordt weggelaten en in de statusbalk geteld. {{ui:Delete this style}} verwijdert er een van uzelf.

:::note
Deze instellingen blijven in deze browser. {{ui:Use this style in every app}} onder de stijlkaarten zorgt dat elke app opent in de bijbehorende stijl: {{ui:PDF review}} hoort bij de menubalkstijlen van de andere apps, {{ui:Ribbon}} bij hun linten, de eigen werkbalk van MarkupCraft bij die van hen. Een app zonder bijbehorende stijl houdt zijn eigen stijl.
:::

:::tip
De werkomgevingen in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}}) bouwen hun lint op uit de tabbladen van de stijl {{ui:Ribbon}} en hun gereedschapskist uit de werkbalk van MarkupCraft, zodat elk gereedschap er op dezelfde manier werkt.
:::

Gerelateerd: [Toetsenbord en muis](topic:keyboard) · [Instellingen van MarkupCraft](topic:settings) · [Overstappen van andere markupsoftware](topic:coming-from)
