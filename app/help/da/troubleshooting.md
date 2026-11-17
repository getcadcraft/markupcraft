---
title: Fejlfinding
summary: Meddelelser, MarkupCraft viser, og hvad du gør ved dem, samt løsninger på ting, der ser ud til ikke at virke.
keywords: problem, fejl, virker ikke, hjælp, meddelelse, åbner ikke, kan ikke gemme, adgangskode, beskyttet, måling afvist, kalibrér, offline, tom, langsom, tabte markeringer, spørgsmålstegn
from: bb650b39
---

De fleste problemer forklares i statuslinjen nederst på skærmen. Læs den først.

## Åbning af filer

**»MarkupCraft åbner PDF-filer. "x" er ikke en PDF.«**
Du valgte eller slap noget andet. Kun PDF-filer åbnes. Eksportér tegninger fra dit CAD-program som PDF først.

**'"navn" kræver en adgangskode for at åbne. Åbn en kopi uden beskyttelse.'**
PDF-filen er adgangskodebeskyttet. Bed afsenderen om en kopi uden beskyttelse, eller åbn den i et PDF-program, hvor du kender adgangskoden, og gem en kopi uden adgangskode.

**'"navn" kunne ikke læses som en PDF (…)'**
Filen er beskadiget eller er ikke rigtig en PDF (en ufuldstændig download, en e-mailbilag, der er klippet af). Download den igen. Kan andre PDF-programmer åbne den, så brug deres »gem som« til at lave en ren kopi, og åbn den.

**»Nogle filer blev ikke åbnet«**
Når du åbner flere på én gang, lister denne boks de filer, der fejlede, og hvorfor. De andre er åbne.

**»PDF-læseren kunne ikke indlæses: …«**
PDF-motoren kunne ikke hentes. Online: genindlæs siden og prøv igen; kontrollér, at en firewall eller en indholdsblokering ikke blokerer webstedet. Offline: MarkupCraft er ikke gemt til offlinebrug i denne browser (linjen øverst siger ikke »Klar til offline brug«). Gå online, vælg {{ui:Gem til offline brug}}, og vent på »Klar til offline brug«. Se [Arbejde offline](common:offline).

**»Nogle annoteringer kan vises to gange på skærmen« eller »Yderligere annoteringsdetaljer kunne ikke læses«**
Filens eksisterende kommentarer er usædvanlige. De åbnes stadig, så godt MarkupCraft kan; kontrollér dem, før du stoler på dem. Gemning virker stadig.

**Arket har det forkerte navn, eller »side 3«**
Se [Sådan får ark deres navne](topic:open-a-plan-set#how-sheets-get-their-names). Scannede ark har ingen tekst at læse; brug {{ui:Omdøb ark}}.

**De samme ark vises to gange**
Den samme fil blev åbnet to gange. Vælg {{ui:Luk}} (gem først, hvis det er nødvendigt), og åbn sættet igen.

## Tegning og valg

**Intet sker, når jeg klikker på arket**
Kontrollér, hvilket værktøj der er trykket i værktøjslinjen, og læs statuslinjen. Med {{ui:Rektangel}}, {{ui:Ellipse}} og {{ui:Sky}} tegner et klik uden træk intet: træk. Med {{ui:Polylinje}}, {{ui:Polygon}}, {{ui:Fri sky}} og {{ui:Areal}} tilføjes punkter: afslut med et dobbeltklik eller {{key:Enter}}.

**»Et polygon kræver mindst 3 punkter.« (eller 2 for en polylinje)**
Klik på flere punkter, før du afslutter.

**»Intet skrevet, så der blev ikke tilføjet tekst.«**
Tekstfelter og henvisninger bevares kun, når de har tekst. Tegn det igen, og skriv, før du klikker et andet sted.

**»De to punkter er ens. Klik på to forskellige punkter.«**
For linjer, pile, længder og kalibrering skal de to ender ligge fra hinanden. Træk, eller klik to gange på forskellige steder.

**Jeg kan ikke flytte eller slette en markering; den har en grå stiplet boks**
Det er en skrivebeskyttet kommentar, der fulgte med filen (fx en tekstfremhævning). MarkupCraft beholder den, som den er: du kan kun svare på den. Statuslinjen siger »skrivebeskyttede markeringer bevares som i filen«.

**Mine taster skriver bogstaver i en boks i stedet for at vælge værktøjer**
Markøren står i et tekstfelt (et svar, et felt i {{ui:Egenskaber}}, arkets søgning). Klik først på et tomt område af arkområdet, eller tryk {{key:Esc}}, hvis du redigerer markeringstekst.

**Space panorerer ikke, eller piletasterne gør intet**
Du har lige klikket på en værktøjslinjeknap, så den har stadig tastaturet. Træk i stedet med midterknappen, eller klik én gang på arket med {{ui:Vælg}} slået til, og prøv igen. Se også [Tastatur og mus](topic:keyboard#when-a-key-does-nothing).

**Et knib på touchskærmen efterlod et mærke**
Et træk-værktøj (pen, sky, rektangel) startede, før den anden finger kom, og sluttede, før den blev annulleret. Tryk {{ui:Fortryd}}. Sæt begge fingre ned samtidig, når du mener at zoome.

## Måling

**»Kalibrér dette ark først: vælg to punkter med en kendt afstand fra hinanden, eller vælg dets målestok. Mål derefter.«**
Hvert ark har brug for sin egen målestok, før {{ui:Længde}} eller {{ui:Areal}} kan bruges. MarkupCraft er skiftet til {{ui:Kalibrér}}: klik på de to ender af et kendt mål, og skriv dets længde, eller klik på målestoksknappen i statuslinjen og vælg en målestok. Se [Kalibrér et ark og mål](topic:calibrate-and-measure).

**»Det er ikke en længde, MarkupCraft forstår.«**
Skriv den som `24'-0"`, `12' 6 1/2"`, `7.2 m` eller `900 mm`. Se [Enheder, længder og målestok](topic:units-and-scales).

**Målingerne er lidt forkerte, eller helt forkerte**
- En forudindstillet målestok på en PDF, der ikke er i fuld størrelse, måler forkert. Kalibrér i stedet ud fra et langt, kendt mål.
- Et tusindtalsseparator blev læst som et decimaltegn: `1,200 mm` betyder 1.2 mm. Skriv `1200 mm`.
- Zoom ind, når du klikker på enderne.
- Tegningen er måske ikke i målestok (»NTS«).

**»Vælg en tællegruppe først, og Shift+klik derefter på en markering for at fjerne den.«**
Vælg {{ui:Vælg}}, klik på tællegruppen, vælg {{ui:Tæl}} igen, og {{key:Shift}}-klik på prikken.

## Gemning

**»Denne PDF er beskyttet (krypteret), så en markeret kopi kan ikke skrives.«**
Filen forbyder ændringer. Bed om en kopi uden beskyttelse. I mellemtiden kan du stadig eksportere markeringslisten som CSV eller BCF.

**»PDF-skriveren kunne ikke indlæses: …«**
Normalt er du offline, og appen blev ikke gemt til offlinebrug (ingen »Klar til offline brug« i linjen øverst). Dine markeringer er stadig i fanen: hold den åben, gå online, og vælg {{ui:Gem}} igen. Vælg derefter {{ui:Gem til offline brug}}, så den virker offline næste gang; den gemte kopi indeholder PDF-skriveren.

**»Kunne ikke gemme <fil>«**
Boksen viser hvorfor. Dine markeringer er stadig i fanen. Prøv igen; gentager det sig, så eksportér CSV-filen, så kommentarerne ikke går tabt, og rapportér meddelelsen.

**Jeg valgte Gem, men kun én fil kom med**
Din browser blokerede de ekstra downloads. Se efter en meddelelse i adresselinjen, tillad dette websted at downloade flere filer, og gem igen.

**Jeg kan ikke finde den gemte fil**
Den blev gemt i din browsers downloadmappe. Åbn browserens downloadliste (i Chrome og Edge: {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; i Firefox og Safari: downloadknappen i værktøjslinjen) for at se, hvor. Se [Browsere og computere](common:browsers).

**Noget tekst viser »?« i andre PDF-fremvisere**
Tegn uden for det vesteuropæiske tegnsæt udskrives som »?« i kopien. Gemmemeddelelsen tæller dem. Se [Gem den markerede PDF](topic:save-the-marked-up-pdf).

**Stemplet viser i morgen (eller i går) dato**
Stempeldatoer er i UTC. Se [Stempler og klæbenotater](topic:stamps-and-notes).

## Arbejde offline

**Knappen offline siger »Kunne ikke gemme«**
Nogle af appens filer blev ikke downloadet. Kontrollér forbindelsen, og klik på knappen igen; den tæller »Gemmer N af M«, indtil »Klar til offline brug«.

**Knappen offline siger »Offline ikke tilgængelig«**
Dette browservindue kan ikke gemme en offlinekopi: et privat vindue, eller en computer, hvis politik blokerer det. Åbn MarkupCraft i et normalt vindue, og prøv igen.

**Offline er appen en ældre version**
Offlinekopien er den version, du gemte. Når du er online, klik på »Klar til offline brug« og vælg »Gem igen (hent den nyeste version)«. For at frigøre pladsen vælger du »Fjern offlinekopien«. Se [Arbejde offline](common:offline).

**Hjælpen åbner ikke**
Tryk {{key:F1}} (på en Mac, med **fn**), eller vælg {{ui:Hjælp}} i linjen øverst. Den virker også offline.

## Tabte ting

**Mine markeringer er væk efter at have lukket eller genindlæst fanen**
Åbn MarkupCraft igen i samme browser: den tilbyder det ikke-gemte arbejde tilbage med »Gendan dit arbejde?«. Vælg {{ui:Gendan}}, og gem PDF'en. Kopier gemmes i op til 30 dage; et privat vindue eller rydning af webstedets data efterlader ingen. Se [Gendan dit arbejde](common:recover).

**Mit navn, værktøjsindstillinger eller værktøjskasse er væk**
De gemmes kun i denne browser, og de blev ryddet (webstedets data ryddet, et privat vindue, en anden browser eller computer, eller Safaris oprydning af websteder, der ikke har været besøgt i et stykke tid). Angiv navnet igen, og importér din eksporterede kasse. Se [Hvad der gemmes i denne browser](topic:browser-storage).

**»Værktøjskassen kunne ikke gemmes i denne browser (lagring er slået fra eller fuld). Eksportér den for at gemme den.«**
Browseren nægter at gemme data for dette websted (privat tilstand, lagring blokeret af en indstilling eller politik, eller fuld). Eksportér kassen, efter du har ændret den, og importér den næste gang.

## Visning og hastighed

**Arket er uskarpt et øjeblik**
MarkupCraft viser en hurtig, grov gengivelse, mens du zoomer eller panorerer, og tegner den skarpt igen et øjeblik efter, du stopper.

**Alt er langsomt med et stort sæt**
Luk andre tunge faner, åbn færre filer ad gangen, og undgå at zoome til det maksimale på enorme ark. Se [Arbejd med flere filer samtidig](topic:several-files#big-sets).

**Arket er mørkt med lyse linjer**
Du er i temaet {{ui:Model}}. Vælg {{ui:Papir}} i linjen øverst for mørke linjer på hvid. Dine markeringer og den gemte PDF påvirkes ikke.
