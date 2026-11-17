---
title: Een planset openen en tussen bladen bewegen
summary: Open één PDF of meerdere, of begin met lege pagina's, zoek bladen op nummer of naam, zoom en verschuif, en hernoem een blad wanneer het bestand de naam verkeerd heeft.
keywords: openen, nieuw, lege pagina, leeg blad, schets, raster, naamloos, planset, bladen, pagina's, miniaturen, paginalabels, bladnummer, titelblok, hernoemen, navigeren, zoomen, verschuiven, passend, bladen zoeken
from: 1e7f4d50
---

## De set openen

1. Kies {{ui:Openen}} in de werkbalk, of druk op {{key:Mod+O}}.
2. Selecteer in de bestandskiezer elke PDF van de set ({{pick:mac=⌘ ingedrukt houden en elk bestand aanklikken|windows linux=Ctrl ingedrukt houden en elk bestand aanklikken}}, of selecteer een reeks met Shift), en bevestig.
   Of sleep de bestanden vanuit {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheer}} naar het bladgebied. "PDF's hiernaartoe slepen om ze te openen" verschijnt terwijl u sleept.
3. Wacht terwijl de statusbalk "Openen van <file>…" zegt. Bij grote bestanden telt hij mee: "(10 van 60 bladen)".

Resultaat: de lijst {{ui:Bladen}} toont elke pagina van elk bestand, in de volgorde waarin u ze opende, en de statusbalk zegt iets als "3 bestanden geopend (42 bladen in de set)." Als de bestanden al opmerkingen hadden, wordt ook het aantal gelezen opmerkingen vermeld.

Om later meer bestanden aan de set toe te voegen, opent u ze op dezelfde manier. Ze komen aan het eind van de lijst.

## Beginnen met lege pagina's

Om te schetsen of notities te maken zonder tekening, maakt u lege pagina's in plaats van een PDF te openen:

1. Kies {{ui:Nieuw}} in de werkbalk, of {{ui:Beginnen met een lege pagina}} op het startscherm, of druk op {{key:Mod+N}} waar uw browser dat toestaat (de desktopapp en Studio altijd).
2. Kies het {{ui:Papierformaat}}: Letter, Tabloid of ANSI B, ARCH D, ARCH E, A4, A3 of A1, en {{ui:Staand}} of {{ui:Liggend}}.
3. Kies een {{ui:Raster}}: {{ui:Geen}}, {{ui:Stippen}} of {{ui:Vierkanten}}. Het raster staat elke 1/4 in, met een dikkere lijn per inch op inchpapier, en elke 5 mm, met een dikkere lijn per 10 mm op metrisch papier. Het wordt op de pagina afgedrukt.
4. Typ hoeveel {{ui:Pagina's}} u wilt, van 1 tot 20, en kies {{ui:Maken}}.

Resultaat: er opent een nieuwe PDF met de naam "Untitled-1.pdf" (daarna "Untitled-2.pdf", enzovoort), die net als elk ander bestand opent, hier op deze computer gemaakt. Elk gereedschap werkt erop, en {{ui:Opslaan}} downloadt "Untitled-1 (marked up).pdf". MarkupCraft onthoudt uw keuzes voor de volgende keer.

De pagina's hebben geen schaal: de statusbalk zegt "Niet gekalibreerd". Het raster is geen schaal. Om te meten, ijkt u het blad of kiest u eerst een schaal; zie [IJken en meten](topic:calibrate-and-measure).

Om een pagina aan een lege set toe te voegen, opent u een van de bladen en kiest u {{ui:Een lege pagina toevoegen}} onder de lijst {{ui:Bladen}}. De nieuwe pagina heeft hetzelfde papier en raster en komt aan het eind. Net als elke paginawijziging kan die niet ongedaan worden gemaakt; zie [Afdrukken en pagina's wijzigen](topic:pages-and-printing).

## Hoe bladen hun namen krijgen

MarkupCraft noemt elk blad "<bladnummer> — <titel>", bijvoorbeeld "A-101 — Plattegrond", uit het eerste van deze dat het vindt:

1. Een naam die u typte met {{ui:Blad hernoemen}} (hieronder).
2. De eigen paginalabels van de PDF, wanneer de maker van de PDF die heeft ingesteld (bijvoorbeeld "A-101").
3. Het titelblok: MarkupCraft leest de tekst van de pagina en zoekt naar iets dat op een bladnummer lijkt (A-101, A1.01, M-201A, KA1-1), met voorkeur voor de rechterbenedenhoek, de rechterstrook en de onderste band, en neemt de grootste tekst daarbij als titel.
4. Anders de bestandsnaam en pagina: "Plannen — pagina 3".

Om te zien welke is gebruikt, drukt u op {{key:Esc}} tot niets is geselecteerd en {{ui:Selecteren}} aan staat, en kijkt u in {{ui:Eigenschappen}}: "Gelezen uit" zegt "Het paginalabel", "Het titelblok", "De bestandsnaam" of "Met de hand getypt".

:::note
Gescande bladen, en PDF's waarvan de letters als lijnen zijn geëxporteerd, hebben geen tekst om te lezen. Ze worden op bestand en pagina benoemd totdat u ze hernoemt. MarkupCraft kan nog geen tekst uit afbeeldingen lezen.
:::

## Tussen bladen bewegen

- Klik op een blad in {{ui:Bladen}}.
- Druk op {{key:PageDown}} voor het volgende blad en {{key:PageUp}} voor het vorige, of gebruik de pijlen in de balk onder het blad.
- Typ in {{ui:Bladen zoeken}}: een deel van een nummer ("A-2"), een woord uit de titel ("dak"), of een bestandsnaam. De lijst wordt smaller terwijl u typt ("4 van 42"). Druk op {{key:Enter}} om de eerste treffer te openen. Wis het vak om weer alle bladen te zien.

Elk blad houdt zijn eigen zoom en positie totdat u de set sluit.

## Zoomen en verschuiven

:::mouse
- **Zoomen:** draai het wiel boven het blad. Het zoomt rond de aanwijzer. Of druk op {{key:Plus}} en {{key:Minus}} (ook met {{key:Mod}}), of gebruik de zoomknoppen. Typ een exact percentage in het zoomvak.
- **Passend maken:** {{ui:Pagina passend}} ({{key:Mod+0}}) toont het hele blad; {{ui:Breedte passend}} ({{key:Mod+9}}) vult de breedte.
- **Verschuiven:** sleep met de middelste knop (het wiel), of sleep met de rechterknop, of houd {{key:Space}} ingedrukt en sleep, of kies {{ui:Verschuiven}} ({{key:H}}) en sleep. Als niets is geselecteerd, verplaatsen de pijltjestoetsen het blad ook.
:::

:::mac mouse
Op een Mac-trackpad zoomt tweevingerscrollen (het scrolt het blad niet). Om te verschuiven, houdt u {{key:Space}} ingedrukt en sleept u met één vinger, of schakelt u met {{key:H}} naar {{ui:Verschuiven}}. Knijpen zoomt in Chrome, Edge en Firefox.
:::

:::touch
- **Zoomen en verschuiven:** zet twee vingers op het blad. Spreid of knijp ze om rond het punt tussen hen te zoomen, en beweeg ze samen om te verschuiven. Beide gebeuren tegelijk.
- **Met één vinger verschuiven:** kies eerst {{ui:Verschuiven}}. Met elk ander gereedschap tekent of selecteert één vinger.
- {{ui:Pagina passend}} en {{ui:Breedte passend}} staan in de balk onder het blad.
:::

U kunt ver buiten het hele blad uitzoomen en tot 6400% inzoomen. Het blad wordt even nadat u stopt met bewegen scherp opnieuw getekend.

## Bladwijzers

{{ui:Bladwijzers}}, bovenaan het paneel {{ui:Bladen}}, toont de bladwijzers (het overzicht) van de PDF waartoe het open blad behoort. Kies er een om naar de pagina te gaan. Het potlood hernoemt een bladwijzer en het kruisje verwijdert hem. {{ui:Maken uit bladen}} maakt één bladwijzer per blad, benoemd zoals de lijst met bladen ze toont (bladnummer en titel), en {{ui:Voor dit blad toevoegen}} voegt er één toe voor het blad waarop u staat. Wijzigingen maken deel uit van het niet-opgeslagen werk van het bestand: {{ui:Opslaan}} schrijft ze in de kopie, waar elke PDF-viewer ze toont.

## De weergave draaien

De twee draaiknoppen rechts van de balk onder het blad draaien de weergave een kwartslag in één van beide richtingen, voor een blad dat zijwaarts is getekend. Alleen de weergave draait: de PDF en de markups blijven zoals ze zijn, en het volgende blad opent zoals zijn PDF is (elk blad onthoudt zijn eigen draaiing zolang de set open is). Tekst die u op een gedraaide weergave toevoegt, staat rechtop zoals u die ziet. Om de pagina zelf in de opgeslagen PDF te draaien, gebruikt u {{ui:Pagina's}}, dan {{ui:Pagina rechtsom draaien}}; zie [Afdrukken en pagina's wijzigen](topic:pages-and-printing).

## Een blad hernoemen

Wanneer de naam van een blad fout is of ontbreekt:

1. Toon het blad.
2. Druk op {{key:Esc}} tot niets is geselecteerd en het gereedschap {{ui:Selecteren}} aan staat. {{ui:Eigenschappen}} toont nu het blad.
3. Kies {{ui:Blad hernoemen}}.
4. Typ het {{ui:Bladnummer}} en de {{ui:Titel}}, en kies {{ui:Opslaan}}.

Resultaat: de lijst met bladen, de balk onder het blad en de lijst met markups gebruiken de nieuwe naam, en "Gelezen uit" zegt "Met de hand getypt". Hernoemen kan ongedaan worden gemaakt met {{key:Mod+Z}}.

Om terug te gaan naar wat het bestand zegt, opent u {{ui:Blad hernoemen}} opnieuw, wist u beide vakken en kiest u {{ui:Opslaan}}.

Bij opslaan wordt een getypt bladnummer het paginalabel in de PDF, zodat andere PDF-viewers "A-101" in hun paginavak tonen. Als u een pagina van een bestand een nummer geeft, krijgt elke pagina van dat bestand een label in de kopie (het getypte nummer, anders het oude label, anders het paginanummer). Een getypte titel blijft bewaard voor MarkupCraft, maar andere viewers tonen die niet.

## De PDF naar TakeoffCraft brengen, of hier binnenhalen

Wanneer TakeoffCraft open is op dezelfde plek (het lab, Try of de online apps), heeft de balk onder het blad {{ui:Openen in TakeoffCraft}}. Die opent de PDF van het blad in TakeoffCraft, in een nieuw tabblad, zoals hij hier is geopend, zodat u hoeveelheden erop kunt meten. Uw markups blijven hier; sla ze op zoals gebruikelijk.

De knop {{ui:MarkupCraft}} van TakeoffCraft doet hetzelfde andersom: de PDF opent hier alsof u {{ui:Openen}} had gekozen. Als de browser het nieuwe tabblad blokkeert, sta dan pop-ups voor deze site toe en kies de knop opnieuw.
