---
title: Wat is er nieuw in 0.9
summary: Notities en een plakbord dat nooit wordt afgedrukt, versleutelde privénotities en een schone kopie voor de klant, batchkoppelingen voor een hele tekenset, een Boog-hulpmiddel met tien methoden, een andere beoordelaar volgen in Live, en een oplossing voor verwijderde markups die in het opgeslagen pdf-bestand blijven staan.
keywords: wat is er nieuw, 0.9, releasenotities, changelog, notities, plakbord, privénotities, wachtwoordzin, versleuteld, notities verbergen, notities tonen, schone kopie, momentopname, batchkoppelingen, bladaanwijzingen, bladen koppelen, titelblok, bladnummer, addendum, hernummeren, pdf-link, boog, boogmethoden, driepuntsboog, straal, volgen, volg mij, live, klassenweergave, mensenlijst, verwijderde markup, tooltips, tabbladtitels, releasenotities, changelog, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, taak, taken, toegewezene, vervaldag, te laat, nu controleren, wat is veranderd, revisies, vergelijken, spraaknotitie, besluit, redline, antwoordenbestand, tekenaar, assistent, mcp, problemen, talen, invoerapparaten, trackpad, werkbalkrijen, eigenschappengrid, update
from: dbdd7ed4
---

Dit is wat er is veranderd in MarkupCraft 0.9, vergeleken met 0.8.1. Het hoofdidee is dat uw werknotities van de pagina blijven die de klant krijgt, en dat een hele tekenset in één keer gekoppeld kan worden.

## Nieuw

### Notities, het plakbord en privénotities

- **Het plakbord.** Het gebied rond elk blad is een bureau: alles wat naast het blad wordt getekend, getypt of geplakt, is een notitie en wordt nooit afgedrukt. Kies {{ui:Het plakbord tonen}} om voor ruimte uit te zoomen, of {{ui:Momentopname op het plakbord}}, sleep een kader en kies daarna {{ui:Naar het plakbord}} om een afbeelding van een deel van de tekening naast het blad te zetten. Een momentopname is een afbeelding en verandert niet wanneer het blad dat wel doet. Zie [Notities, het plakbord en privénotities](topic:notes-and-pasteboard).
- **Notities tonen en verbergen.** Elke markup kan een notitie zijn: stel {{ui:Nieuwe markups zijn}} in op het tabblad {{ui:Notities}}, of {{ui:Deze markup is}} in {{ui:Eigenschappen}}. {{key:Shift+H}} of de schakelaar {{ui:Notities}} onder het blad verbergt en toont alle notities in één keer. Notities worden weggelaten bij afdrukken, platte kopieën, lijsten en exports, en andere pdf-lezers tonen ze niet. Uw opgeslagen pdf bewaart ze voor de volgende keer dat u hem in MarkupCraft opent.
- **Privénotities.** Kies {{ui:Een wachtwoordzin instellen}} en maak daarna een markup {{ui:Een privénotitie}}. Ze wordt in het bestand versleuteld met een wachtwoordzin van ten minste 10 tekens, en er is geen herstel: niemand, ook wij niet, kan ze openen zonder de wachtwoordzin. {{ui:Vergrendelen}} zet privénotities weg; {{ui:Ontgrendeld blijven op dit apparaat}} staat standaard uit.
- **Een schone kopie opslaan.** {{ui:Een schone kopie opslaan}} verwijdert elke notitie, privénotitie en alles op het plakbord. Gebruik het voor het bestand dat naar de klant gaat.

### Een hele set koppelen

- **Batchkoppelingen.** Kies {{ui:Pagina's}} › {{ui:Batchkoppelingen…}}, of {{ui:Bladaanwijzingen koppelen…}} onder {{ui:Tekst zoeken}} in het paneel {{ui:Bladen}}. Stap 1 toont het nummer en de naam van elk blad, zoals gelezen uit het titelblok; corrigeer de verkeerde. Stap 2 toont de gevonden aanwijzingen, zoals `3/A-501` of `DETAIL 2 ON A-501`. {{ui:Wordt gekoppeld}} toont het blad en de weergave voor elk, {{ui:Niet gekoppeld}} toont nummers die geen open blad heeft, en {{ui:De koppelingen maken}} maakt ze allemaal in één ongedaan-maken-stap. Voer het opnieuw uit na een addendum of een hernummering; koppelingen die u met de hand hebt gemaakt, worden nooit gewijzigd. Een koppeling met een weergave wordt opgeslagen als pdf-link, zodat andere lezers de detailweergave ook openen. Zie [Bladkoppelingen](topic:sheet-links).

### Tekenen

- **Boog, tien methoden.** Het hulpmiddel {{ui:Boog}} ({{key:O}}) heeft nu een vak {{ui:Boogmethode}} over de pagina, met tien manieren om een boog te tekenen. Hoek, lengte, straal en richting kunnen worden aangeklikt of getypt. Zie [Een boog op tien manieren tekenen](topic:draw-an-arc).

### Samen werken

- **Een beoordelaar volgen.** Kies in een Live-sessie {{ui:Volgen}} naast de naam van een persoon, en uw weergave beweegt mee met die van hem; zelf pannen of zoomen stopt het. De host kan {{ui:Iedereen vragen mij te volgen}} kiezen. De mensenlijst toont de kleur en naam van elke persoon, het blad waarop hij staat en wanneer zijn laatste bewerking was. Zie [Een andere beoordelaar volgen in een Live-sessie](topic:follow-in-live).

## In elke app

- Tooltips zijn Bootstrap-tooltips, de starttip kan worden gesloten, tabbalken scrollen als ze overlopen, en browsertabtitels tonen `<document> — MarkupCraft | CadCraft`.
- Een paneel met meerdere secties opent er één en sluit de andere (een slotje naast het pijltje houdt er één open); een schakelaar in Instellingen zet dit uit.
- Elke app start met een standaardverzameling Bibliotheekobjecten.
- Gewicht- en temperatuureenheden zijn beschikbaar in de eenheidsinstellingen.

## Opgelost

- **Verwijderde markups blijven niet meer leesbaar in het opgeslagen pdf-bestand.** Vroeger haalde opslaan een verwijderde of herschreven annotatie van zijn pagina, maar liet het object met zijn tekst in het bestand staan. Opslaan verwijdert nu die objecten. Bestanden die door eerdere versies zijn opgeslagen, bevatten ze nog tot u ze opnieuw opslaat.

## Eerlijke beperkingen

- Batchkoppelingen zijn getest op onze eigen testsets. Echte sets tekenen bolletjes op veel manieren, dus op een klantenset kunnen sommige weergaven worden gemist. Gescande bladen hebben eerst {{ui:Tekst lezen (OCR)…}} nodig.
- Notities, privénotities en het plakbord zijn getest in een headless browser en in onze eigen bestanden, niet met een grote echte vectorset en niet in een echte Live-sessie met twee personen. Een wachtwoordzin wijzigen is nog niet beschikbaar. Versies ouder dan 0.9 tonen geen notities.
- De klassenweergave is de mensenlijst; ze is nog niet getest met een echte docent en echte leerlingen.
- Talen anders dan Engels zijn machineconcepten totdat een native speaker ze leest.
- Windows-installatieprogramma's zijn niet codeondertekend (Meer informatie, dan Toch uitvoeren); de macOS-schijfkopie is niet genotariseerd (rechtermuisknop, dan Openen).

## Eerder: 0.8 en 0.8.1

Dit is wat er is veranderd in MarkupCraft 0.8 en 0.8.1, vergeleken met 0.7. Het grote nieuwe is dat een markup een taak kan zijn die iemand, of uw eigen assistent, uitvoert, en die zichzelf afsluit wanneer de tekening echt verandert.

### Nieuw

**Markups die iets doen**

- **Maak een markup tot taak.** Selecteer een of meer markups, open het tabblad {{ui:Taken}} en kies {{ui:Van selectie een taak maken}}. Een taak heeft een titel, een persoon of uw verbonden assistent om hem uit te voeren, een optionele vervaldag en een status, en hij behoudt zijn plek op het blad en zijn draad. Zie [Een markup tot taak maken](topic:markups-that-act).
- **Taken die zichzelf afsluiten.** Een taak kan de tekening binnen zijn markup in de gaten houden. Open een nieuwere revisie van het blad en kies {{ui:Nu controleren}}: als de lijnen in dat gebied meer dan een haartje zijn veranderd, wordt de taak als Gereed gemarkeerd, wordt zijn markup Voltooid en zegt een notitie in de draad wat er veranderde. Een nieuwe datumstempel, of lijnen die minder dan 1.5 punt zijn verschoven, tellen niet mee. Een taak kan in plaats daarvan een modelelement in de gaten houden: uw assistent meldt het element met `tasks_check`, en een latere melding die afwijkt, of een verwijderd element, sluit de taak af. Eén ongedaan-maken-stap heropent hem.
- **Taken vinden.** Filter de lijst {{ui:Taken}} op status en op voor wie hij is, inclusief {{ui:Te laat}}; kies {{ui:Toegewezen aan}} en dan {{ui:Assistent}} om te zien wat op uw assistent wacht. Een taak die na zijn vervaldag is, verschijnt als waarschuwing in het paneel Problemen. {{ui:CSV}} exporteert de lijst. Taken worden in de pdf opgeslagen met de markup en reizen via Live mee, zoals andere markupeigenschappen.

**Wat er veranderde, als gewone lijst**

- **De wijzigingen weergeven.** Open het tabblad {{ui:Vergelijken}}, kies daarna {{ui:Een hele set vergelijken}}, kies het eerdere en het latere bestand en kies {{ui:De wijzigingen weergeven}}. De lijst begint met een telling en behandelt daarna elk gewijzigd blad, de grootste wijziging eerst: waar op het blad, hoe groot (bij een gekalibreerd blad ook in echte eenheden, naast de inch op papier), of er lijnen zijn toegevoegd of verwijderd, hoeveel markups er staan en welke woorden zijn verschenen of verdwenen. {{ui:De lijst kopiëren}} zet hem op het klembord en {{ui:CSV}} schrijft één rij per wijziging. Zie [Lijst van wijzigingen tussen revisies](topic:what-changed-in-words).

**Spraaknotities en besluiten**

- **Spraaknotities.** Kies op het tabblad {{ui:Notities}} {{ui:Een spraaknotitie opnemen}} en daarna {{ui:Opname stoppen}}; opnames stoppen na twee minuten vanzelf. De notitie wordt in het midden van het blad vastgezet, u sleept hem naar de juiste plek en typt een bijschrift in {{ui:Eigenschappen}}, en {{ui:Afspelen}} in de lijst speelt hem af. De opname wordt in de pdf opgeslagen.
- **Besluiten.** {{ui:Een besluit pinnen}} schrijft een of twee zinnen op het blad. Vervangt het een eerder besluit, kies dat dan bij {{ui:Het vervangt}}: het oude blijft staan, gemarkeerd als Vervangen, en verwijst naar het nieuwe. Eén ongedaan-maken-stap haalt het terug. Zie [Spraaknotities en besluiten op een blad vastzetten](topic:voice-notes-and-decisions).

**Redline naar revisie**

- **Versturen en beantwoorden.** Open in het tabblad {{ui:Taken}} {{ui:Redline naar revisie}}, typ de revisie waartegen de markups zijn, en kies {{ui:Redlinebestand exporteren}}. U krijgt een `.redline.json`-bestand met één item per open markup: blad, positie (als breuken van het blad, zodat een nieuwe plot op een ander formaat nog steeds klopt), woorden, auteur, draad en de taak. Wie de wijzigingen tekent, antwoordt met Geaccepteerd, Afgewezen of Gereed in een `.redline-answers.json`-bestand. {{ui:Antwoordbestand laden…}} geeft elke markup die status en de notitie van de tekenaar, als één ongedaan-maken-stap. Zie [Markups als redline naar de tekenaar sturen](topic:redline-to-revision).

**AI-assistenten**

- **Meer hulpmiddelen.** Een assistent die u via CadCraft Studio hebt verbonden, kan taken opvragen (`tasks_list`), er een maken of wijzigen (`task_set`), er een verwijderen (`task_clear`), een taak controleren tegen een nieuwere revisie of een element (`tasks_check`) en de gewone lijst met wijzigingen tussen twee open tekensets lezen (`revisions_changes`). Hij krijgt alleen de hulpmiddelen die u onder de schakelaar Assistenten hebt aangevinkt, en elke wijziging is één ongedaan-maken-stap. Zie [MarkupCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

### In elke app

- **Talen.** CadCraft Studio heeft nu 54 talen. Tien zijn nieuw: Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks. Alle niet-Engelse zijn machineconcepten totdat een native speaker ze leest.
- **Invoerapparaten.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Invoerapparaten}} bepaalt wat een trackpad, de zijknoppen van uw muis, een pen, vingertikken, een 3D-muis, een game-controller of een MIDI-controller doet, voor elke app of alleen voor deze ene. Totdat u iets wijzigt, werkt elk apparaat als voorheen. Zie [Een trackpad, 3D-muis of controller gebruiken](common:input-devices).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} heeft {{ui:Omslaan}} (de standaard), {{ui:2 rijen}} en {{ui:1 rij}}, zodat de tekening meer ruimte krijgt. Zie [Panelen inrichten](common:arrange-panels).
- **Eigenschappengrid.** De stijlvelden van een markup gebruiken het gedeelde grid, met inklapbare categorieën en kolommen voor label en waarde.
- **Paneel Problemen.** Waarschuwingen van de app, zoals een verlopen taak, verzamelen zich in één paneel Problemen.
- **Live en add-ons.** Livesessies worden beschreven in [Samen live werken](common:work-together-live); de add-onlijst die uw account volgt, staat in [Add-ons en uw accountlijst](common:addons-basics).
- **Verbind uw AI.** CadCraft Studio is de hub voor uw eigen assistent: verbind eenmaal voor alle acht apps. De apps bevatten geen eigen AI.

### Opgelost in 0.8.1

- **Studio kan de taal wisselen terwijl het draait.** Vroeger bleven de desktop-app en de verpakte edities in het Engels. Dit is nog niet op elk platform getest: laat ons weten als de taal niet verandert.
- Studio 0.8-installaties krijgen 0.8.1 aangeboden via {{ui:Instellingen}} › {{ui:Updates}}.

### Nog niet in deze versie

- **Niet codeondertekend.** De Windows-installatieprogramma's en het macOS-.dmg hebben nog geen handtekening. Op Windows: als SmartScreen het installatieprogramma stopt, kies {{ui:Meer informatie}} en dan {{ui:Toch uitvoeren}}. Op een Mac: klik met de rechtermuisknop op CadCraft Studio en kies {{ui:Openen}}. Winkelversies zijn uitgesteld.
- **Verbind uw AI is op sommige punten nog niet af.** Verbinden met één klik binnen Studio, de gehoste connector voor browserassistenten en uw eigen API-sleutel binnen Studio worden voor deze uitgave niet beloofd. De taaklus is getest, maar nog niet met een echte assistent.
- **Taakcontroles vereisen hetzelfde paginaformaat.** Een blad dat op een ander formaat opnieuw is geplot, past niet, dus de taken ervan sluiten niet. Bladen worden gekoppeld op bladnummer, anders op paginapositie.
- **Spraaknotities zijn alleen opnamen.** Er is geen transcriptie, en een assistent ziet de lengte, auteur en het bijschrift van een notitie, niet het geluid. Opname is getest met een nep-microfoon in een headless browser; een echte microfoon op een telefoon, tablet of laptop moet nog worden gecontroleerd.
- **Rekenbladen en redenen in een pdf** worden bewaard in een privé-item van het bestand. Een oudere MarkupCraft negeert dat item en verwijdert het de volgende keer dat hij het bestand opslaat, dus open en sla zo'n bestand op met 0.8 of later.
- **De kant van de tekenaar bij redlines.** Dat CadCraft het redlinebestand leest en beantwoordt, is nog niet beschikbaar.
- **Andere talen.** De app-balk van Tamil loopt 528 px over.

Al het overige staat in [Wat nog niet beschikbaar is](topic:not-built-yet). Voor de release daarvoor, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
