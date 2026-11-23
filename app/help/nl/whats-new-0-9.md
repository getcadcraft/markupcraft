---
title: Wat is er nieuw in 0.9 (eerder)
summary: Notities en een plakbord die nooit worden afgedrukt, versleutelde privénotities en een schone kopie voor de opdrachtgever, batchkoppelingen voor een hele tekenset, een boogtool met tien methoden, het volgen van een andere reviewer in Live, en een oplossing voor verwijderde markups die in het opgeslagen PDF blijven staan.
keywords: wat is er nieuw 0.9, eerdere uitgave, wat is er nieuw, 0.9, uitgavenotities, wijzigingslog, notities, plakbord, privénotities, wachtwoordzin, versleuteld, notities verbergen, notities tonen, schone kopie, momentopname, batchkoppelingen, bladaanwijzingen, bladen koppelen, titelblok, bladnummer, addendum, hernummeren, pdf-koppeling, boog, boogmethoden, driepuntsboog, straal, volgen, volg mij, live, klassenweergave, deelnemerslijst, verwijderde markup, tooltips, tabbladtitels, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, taak, taken, toegewezen aan, vervaldag, te laat, nu controleren, wat er veranderd is, revisies, vergelijken, spraaknotitie, besluit, redline, antwoordbestand, tekenaar, assistent, mcp, problemen, talen, invoerapparaten, trackpad, werkbalkrijen, eigenschappenraster, update
from: aa3dfeb8
---

Dit is wat er is veranderd in MarkupCraft 0.9, vergeleken met 0.8.1. Het kernidee is dat uw werknotities van de pagina blijven die de opdrachtgever krijgt, en dat een hele tekenset in één keer gekoppeld kan worden.

## Nieuw

### Notities, het plakbord en privénotities

- **Het plakbord.** Het gebied rond elk blad is een bureau: alles wat naast het blad wordt getekend, getypt of geplakt, is een notitie en wordt nooit afgedrukt. Kies {{ui:Het plakbord tonen}} om uit te zoomen voor ruimte, of {{ui:Momentopname op het plakbord}}, sleep een kader, en kies dan {{ui:Naar het plakbord}} om een afbeelding van een deel van de tekening naast het blad te zetten. Een momentopname is een afbeelding en verandert niet wanneer het blad verandert. Zie [Notities, het plakbord en privénotities](topic:notes-and-pasteboard).
- **Notities tonen en verbergen.** Elke markup kan een notitie zijn: stel {{ui:Nieuwe markups zijn}} in op het tabblad {{ui:Notities}}, of {{ui:Deze markup is}} in {{ui:Eigenschappen}}. {{key:Shift+H}} of de schakelaar {{ui:Notities}} onder het blad verbergt of toont alle notities tegelijk. Notities worden weggelaten bij afdrukken, platte kopieën, lijsten en exports, en andere PDF-lezers tonen ze niet. Uw opgeslagen PDF bewaart ze voor de volgende keer dat u hem in MarkupCraft opent.
- **Privénotities.** Kies {{ui:Een wachtwoordzin instellen}}, en maak daarna een markup {{ui:Een privénotitie}}. Die wordt in het bestand versleuteld met een wachtwoordzin van ten minste 10 tekens, en er is geen herstel: niemand, ook wij niet, kan hem openen zonder de wachtwoordzin. {{ui:Vergrendelen}} zet privénotities weg; {{ui:Ontgrendeld blijven op dit apparaat}} staat standaard uit.
- **Een schone kopie opslaan.** {{ui:Een schone kopie opslaan}} verwijdert elke notitie, privénotitie en alles op het plakbord. Gebruik deze optie voor het bestand dat naar de opdrachtgever gaat.

### Een hele set koppelen

- **Batchkoppelingen.** Kies {{ui:Pagina's}} › {{ui:Batchkoppelingen…}}, of {{ui:Bladaanwijzingen koppelen…}} onder {{ui:Tekst zoeken}} in het paneel {{ui:Bladen}}. Stap 1 toont het nummer en de naam van elk blad, zoals gelezen uit het titelblok; corrigeer alles wat fout is. Stap 2 toont de gevonden aanwijzingen, zoals `3/A-501` of `DETAIL 2 ON A-501`. {{ui:Wordt gekoppeld}} toont het blad en de weergave voor elk, {{ui:Niet gekoppeld}} toont nummers waarvoor geen open blad bestaat, en {{ui:De koppelingen maken}} maakt ze allemaal in één stap die u ongedaan kunt maken. Voer het opnieuw uit na een addendum of een hernummering; koppelingen die u met de hand heeft gemaakt, worden nooit gewijzigd. Een koppeling met een weergave wordt opgeslagen als PDF-koppeling, zodat andere lezers het detail ook openen. Zie [Bladkoppelingen](topic:sheet-links).

### Tekening

- **Boog, tien methoden.** De tool {{ui:Boog}} ({{key:O}}) heeft nu een vak {{ui:Boogmethode}} over de pagina met tien manieren om een boog te tekenen. Hoek, lengte, straal en richting kunnen worden aangeklikt of getypt. Zie [Een boog op tien manieren tekenen](topic:draw-an-arc).

### Samen werken

- **Een reviewer volgen.** Kies in een Live-sessie {{ui:Volgen}} naast de naam van een persoon, en uw weergave beweegt mee met die van hem; zelf verschuiven of zoomen stopt het volgen. De host kan {{ui:Iedereen vragen mij te volgen}} kiezen. De deelnemerslijst toont de kleur en naam van elke persoon, het blad waarop die staat en het tijdstip van de laatste bewerking. Zie [Een andere reviewer volgen in een Live-sessie](topic:follow-in-live).

## In elke app

- Infoballonnetjes zijn Bootstrap-tooltips, de starttip kan worden gesloten, tabbalken scrollen wanneer ze overlopen, en browsertabbladtitels tonen `<document> — MarkupCraft | CadCraft`.
- Een paneel met meerdere secties opent er één en sluit de andere (een slot naast het pijltje houdt er één open); een schakelaar in {{ui:Instellingen}} zet dit uit.
- Elke app start met een standaardverzameling Bibliotheekobjecten.
- Gewichts- en temperatuureenheden zijn beschikbaar in de instellingen voor Eenheden.

## Opgelost

- **Verwijderde markups blijven niet langer leesbaar in het opgeslagen PDF.** Opslaan verwijderde vroeger een verwijderde of herschreven annotatie van zijn pagina, maar liet het object, met zijn tekst, in het bestand staan. Opslaan verwijdert die objecten nu. Bestanden die door eerdere builds zijn opgeslagen, bevatten ze nog tot u ze opnieuw opslaat.

## Eerlijke beperkingen

- Batchkoppelingen zijn getest op onze eigen testsets. Echte sets tekenen bolletjes op veel manieren, dus op een set van een opdrachtgever kunnen sommige weergaven gemist worden. Gescande bladen hebben eerst {{ui:Tekst lezen (OCR)…}} nodig.
- Notities, privénotities en het plakbord zijn getest in een headless browser en in onze eigen bestanden, niet met een grote echte vectorset en niet in een echte Live-sessie met twee personen. Een wachtwoordzin wijzigen is nog niet gebouwd. Builds ouder dan 0.9 tonen geen notities.
- De klassenweergave is de deelnemerslijst; ze is niet getest met een echte docent en echte studenten.
- Talen anders dan Engels zijn machinaal opgestelde concepten totdat een moedertaalspreker ze heeft gelezen.
- Windows-installers zijn niet code-ondertekend (Meer informatie, dan Toch uitvoeren); het macOS-schijfbeeld is niet genotariseerd (klik met de rechtermuisknop, dan Openen).

## Eerder: 0.8 en 0.8.1

Dit is wat er is veranderd in MarkupCraft 0.8 en 0.8.1, vergeleken met 0.7. Het grote nieuwe is dat een markup een taak kan zijn die iemand uitvoert, of uw eigen assistent, en die zichzelf sluit wanneer de tekening echt verandert.

### Nieuw

**Markups die iets doen**

- **Een markup tot taak maken.** Selecteer een of meer markups, open het tabblad {{ui:Taken}} en kies {{ui:Van selectie een taak maken}}. Een taak heeft een titel, een persoon of uw verbonden assistent die hem uitvoert, een optionele vervaldag en een status, en behoudt zijn plek op het blad en zijn draad. Zie [Een markup tot taak maken](topic:markups-that-act).
- **Taken die zichzelf sluiten.** Een taak kan de tekening binnen zijn markup bewaken. Open een nieuwere revisie van het blad en kies {{ui:Nu controleren}}: als de lijnen in dat gebied meer dan een haarlijntje zijn veranderd, wordt de taak als Gereed gemarkeerd, wordt de markup Voltooid, en zegt een notitie in de draad wat er veranderd is. Een nieuwe datumstempel, of lijnen die minder dan 1.5 punt zijn verschoven, tellen niet mee. Een taak kan in plaats daarvan een modelelement bewaken: uw assistent meldt het element met `tasks_check`, en een latere melding die afwijkt, of een verwijderd element, sluit de taak. Eén stap ongedaan maken heropent hem.
- **Taken vinden.** Filter de lijst {{ui:Taken}} op status en op voor wie ze zijn, inclusief {{ui:Te laat}}; kies {{ui:Toegewezen aan}}, en daarna {{ui:Assistent}} om te zien wat op uw assistent wacht. Een taak die na zijn vervaldag is, verschijnt als waarschuwing in het paneel Problemen. {{ui:CSV}} exporteert de lijst. Taken worden in de PDF bewaard met de markup en reizen via Live mee, zoals andere markup-eigenschappen.

**Wat er veranderde, als gewone lijst**

- **De wijzigingen weergeven.** Open het tabblad {{ui:Vergelijken}}, kies dan {{ui:Een hele set vergelijken}}, kies het eerdere en het latere bestand en kies {{ui:De wijzigingen weergeven}}. De lijst begint met een aantal en behandelt daarna elk gewijzigd blad, de grootste wijziging eerst: waar op het blad, hoe groot (in echte eenheden en ook in papierinch op een gekalibreerd blad), of lijnen zijn toegevoegd of verwijderd, hoeveel markups er staan, en welke woorden zijn verschenen of verdwenen. {{ui:De lijst kopiëren}} zet hem op het klembord, en {{ui:CSV}} schrijft één rij per wijziging. Zie [Wat er veranderd is tussen revisies weergeven](topic:what-changed-in-words).

**Spraaknotities en besluiten**

- **Spraaknotities.** Kies in het tabblad {{ui:Notities}} {{ui:Een spraaknotitie opnemen}}, en daarna {{ui:Opname stoppen}}; opnames stoppen vanzelf na twee minuten. De notitie wordt in het midden van het blad vastgezet, u sleept hem naar de juiste plek en typt een onderschrift in {{ui:Eigenschappen}}, en {{ui:Afspelen}} in de lijst speelt hem af. De opname wordt in de PDF opgeslagen.
- **Besluiten.** {{ui:Een besluit pinnen}} zet een of twee zinnen op het blad. Als het een eerder besluit vervangt, kies dat in {{ui:Het vervangt}}: het oude blijft staan, gemarkeerd als Vervangen, en verwijst naar het nieuwe. Eén stap ongedaan maken haalt het terug. Zie [Spraaknotities en besluiten op een blad vastzetten](topic:voice-notes-and-decisions).

**Redline naar revisie**

- **Versturen en beantwoorden.** Open in het tabblad {{ui:Taken}} {{ui:Redline naar revisie}}, typ de revisie waartegen de markups zijn, en kies {{ui:Redlinebestand exporteren}}. U krijgt een `.redline.json`-bestand met per open markup één item: blad, positie (als breuken van het blad, zodat een nieuwe plot op een ander formaat nog steeds past), woorden, auteur, draad en de bijbehorende taak. Wie de wijzigingen tekent, antwoordt met Geaccepteerd, Afgewezen of Gereed in een `.redline-answers.json`-bestand; {{ui:Antwoordbestand laden…}} geeft elke markup die status en de notitie van de tekenaar, als één stap ongedaan te maken. Zie [Markups als redline naar de tekenaar sturen](topic:redline-to-revision).

**AI-assistenten**

- **Meer tools.** Een assistent die u via CadCraft Studio hebt verbonden, kan taken weergeven (`tasks_list`), er een maken of wijzigen (`task_set`), er een verwijderen (`task_clear`), er een controleren tegen een nieuwere revisie of een element (`tasks_check`), en de platte lijst met wijzigingen tussen twee open plansets lezen (`revisions_changes`). Hij krijgt alleen de tools die u aanvinkt onder de schakelaar Assistenten, en elke wijziging is één stap die u ongedaan kunt maken. Zie [MarkupCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

### In elke app

- **Talen.** CadCraft Studio heeft nu 54 talen. Tien zijn nieuw: Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks. Alle niet-Engelse talen zijn machinale concepten totdat een moedertaalspreker ze heeft gelezen.
- **Invoerapparaten.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Invoerapparaten}} bepaalt wat een trackpad, de zijknoppen van uw muis, een pen, vingertikken, een 3D-muis, een gamecontroller of een MIDI-controller doet, voor elke app of alleen voor deze ene. Totdat u iets wijzigt, werkt elk apparaat zoals voorheen. Zie [Een trackpad, 3D-muis of controller gebruiken](common:input-devices).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} heeft {{ui:Omslaan}} (de standaard), {{ui:2 rijen}} en {{ui:1 rij}}, zodat de tekening meer ruimte krijgt. Zie [De panelen indelen](common:arrange-panels).
- **Eigenschappenraster.** De stijlvelden van een markup gebruiken het gedeelde raster, met inklapbare categorieën en kolommen voor label en waarde.
- **Paneel Problemen.** Waarschuwingen van de app, zoals een verlopen taak, verzamelen zich in één paneel Problemen.
- **Live en add-ons.** Live-sessies worden beschreven in [Samen live werken](common:work-together-live); de lijst met add-ons die bij uw account hoort, staat in [Add-ons en uw accountlijst](common:addons-basics).
- **Verbind uw AI.** CadCraft Studio is de hub voor uw eigen assistent: verbind eenmaal voor alle acht apps. De apps bevatten zelf geen AI.

### Opgelost in 0.8.1

- **Studio kan de taal wisselen terwijl het draait.** Voorheen bleven de desktopapp en de verpakte edities in het Engels. Dit is nog niet op elk platform getest: laat het ons weten als de taal niet verandert.
- Studio 0.8-installaties krijgen 0.8.1 aangeboden via {{ui:Instellingen}} › {{ui:Updates}}.

### Nog niet in deze versie

- **Niet code-ondertekend.** De Windows-installers en het macOS-.dmg hebben nog geen handtekening. Als SmartScreen de installer tegenhoudt, kies op Windows {{ui:Meer informatie}}, en dan {{ui:Toch uitvoeren}}. Op een Mac klikt u met de rechtermuisknop op CadCraft Studio en kiest u {{ui:Openen}}. Winkelversies zijn uitgesteld.
- **Verbinden met uw AI is op onderdelen nog niet af.** Eenklik-verbinden in Studio, de gehoste connector voor browserassistenten en uw eigen API-sleutel in Studio zijn voor deze uitgave niet beloofd. De taakloop is getest, maar nog niet met een echte assistent.
- **Taakcontroles vereisen hetzelfde paginaformaat.** Een blad dat op een ander formaat opnieuw is geplot, past niet, dus de taken ervan sluiten niet. Bladen worden gekoppeld op bladnummer, anders op paginapositie.
- **Spraaknotities zijn alleen opnames.** Er is geen transcript, en een assistent ziet de lengte, auteur en het onderschrift van een notitie, niet het geluid. Opname is getest met een nep-microfoon in een headless browser; een echte microfoon op een telefoon, tablet of laptop moet nog worden gecontroleerd.
- **Rekenbladen en redenen in een PDF** worden bewaard in een privé-item van het bestand. Een oudere MarkupCraft negeert dat item en verwijdert het de volgende keer dat hij het bestand opslaat, dus open en sla zo'n bestand op met 0.8 of later.
- **De kant van de tekenaar bij redlines.** Dat CadCraft het redline-bestand leest en erop antwoordt, is nog niet gebouwd.
- **Andere talen.** De appbalk voor Tamil loopt 528 px over.

Al het overige staat in [Wat nog niet gebouwd is](topic:not-built-yet). Voor de uitgave ervoor, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
