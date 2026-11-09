---
title: Wat is er nieuw in 0.8 en 0.8.1
summary: Markups die taken worden en zichzelf sluiten, een eenvoudige lijst van wat er tussen revisies veranderde, spraaknotities en besluiten op het plan, redlinebestanden voor de tekenaar, en de gedeelde wijzigingen van 0.8: invoerapparaten, werkbalkrijen, Problemen, meer talen.
keywords: wat is er nieuw, releasenotities, wijzigingslogboek, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, taak, taken, toegewezen aan, vervaldag, te laat, nu controleren, wat is veranderd, revisies, vergelijken, spraaknotitie, besluit, redline, antwoordbestand, tekenaar, assistent, mcp, problemen, talen, invoerapparaten, trackpad, werkbalkrijen, eigenschappenraster, update
from: 40368796
---

Dit is wat er veranderd is in MarkupCraft 0.8 en 0.8.1, vergeleken met 0.7. Het grote nieuwe is dat een markup een taak kan zijn die iemand, of uw eigen assistent, uitvoert, en die zichzelf sluit wanneer de tekening echt verandert.

## Nieuw

### Markups die handelen

- **Maak van een markup een taak.** Selecteer een of meer markups, open het tabblad {{ui:Taken}} en kies {{ui:Van selectie een taak maken}}. Een taak heeft een titel, een persoon of uw verbonden assistent die haar uitvoert, een optionele vervaldag en een status, en ze behoudt haar plaats op het blad en haar draad. Zie [Een markup een taak maken](topic:markups-that-act).
- **Taken die zichzelf sluiten.** Een taak kan de tekening binnen haar markup volgen. Open een nieuwere revisie van het blad en kies {{ui:Nu controleren}}: als de lijnen in dat gebied meer dan een haarlijn zijn veranderd, wordt de taak als Gereed gemarkeerd, wordt haar markup Voltooid en zegt een notitie in de draad wat er veranderd is. Een nieuwe datumstempel, of lijnen die minder dan 1.5 punt verschoven, tellen niet mee. Een taak kan in plaats daarvan een modelelement volgen: uw assistent meldt het element met `tasks_check`, en een latere melding die afwijkt, of een verwijderd element, sluit de taak. Eén stap ongedaan maken heropent de taak.
- **Het werk vinden.** Filter de lijst {{ui:Taken}} op status en op voor wie ze is, inclusief {{ui:Te laat}}; kies {{ui:Toegewezen aan}}, en dan {{ui:Assistent}} om te zien wat op uw assistent wacht. Een taak die over haar vervaldag heen is, verschijnt als waarschuwing in het paneel Problemen. {{ui:CSV}} exporteert de lijst. Taken worden in de PDF opgeslagen met de markup en reizen via Live mee zoals andere markupeigenschappen.

### Wat er veranderde, als gewone lijst

- **Lijst de wijzigingen.** Open het tabblad {{ui:Vergelijken}}, dan {{ui:Een hele set vergelijken}}, kies het eerdere en het latere bestand en kies {{ui:De wijzigingen weergeven}}. De lijst begint met een aantal, dan volgt elk gewijzigd blad, de grootste wijziging eerst: waar op het blad, hoe groot (in echte eenheden en ook in papieren inches op een gekalibreerd blad), of lijnen zijn toegevoegd of verwijderd, hoeveel markups er staan, en welke woorden zijn verschenen of verdwenen. {{ui:De lijst kopiëren}} zet hem op het klembord en {{ui:CSV}} schrijft één rij per wijziging. Zie [Lijst wat er tussen revisies veranderde](topic:what-changed-in-words).

### Spraaknotities en besluiten

- **Spraaknotities.** Kies in het tabblad {{ui:Notities}} {{ui:Een spraaknotitie opnemen}}, dan {{ui:Opname stoppen}}; opnames stoppen zelf na twee minuten. De notitie wordt vastgezet in het midden van het blad, u sleept hem waar hij hoort en typt een onderschrift in {{ui:Eigenschappen}}, en {{ui:Afspelen}} in de lijst speelt hem af. De opname wordt in de PDF opgeslagen.
- **Besluiten.** {{ui:Een besluit pinnen}} zet een of twee zinnen op het blad. Als het een eerder besluit vervangt, kies dat in {{ui:Het vervangt}}: het oude blijft staan, gemarkeerd als Vervangen, en verwijst naar het nieuwe. Eén stap ongedaan maken haalt het terug. Zie [Spraaknotities en besluiten op een blad vastzetten](topic:voice-notes-and-decisions).

### Redline naar revisie

- **Versturen en beantwoorden.** Open in het tabblad {{ui:Taken}} {{ui:Redline naar revisie}}, typ de revisie waar de markups tegen zijn en kies {{ui:Redlinebestand exporteren}}. U krijgt een `.redline.json`-bestand met per open markup één item: blad, positie (als breuken van het blad, zodat een nieuwe plot op een ander formaat nog steeds past), woorden, auteur, draad en de bijbehorende taak. Wie de wijzigingen tekent, antwoordt met Geaccepteerd, Afgewezen of Gereed in een `.redline-answers.json`-bestand; {{ui:Antwoordbestand laden…}} geeft elke markup die status en de notitie van de tekenaar, als één stap ongedaan maken. Zie [Markups als redline naar de tekenaar sturen](topic:redline-to-revision).

### AI-assistenten

- **Meer tools.** Een assistent die u via CadCraft Studio hebt verbonden, kan taken weergeven (`tasks_list`), er een maken of wijzigen (`task_set`), een taak weghalen (`task_clear`), een taak controleren tegen een nieuwere revisie of een element (`tasks_check`) en de eenvoudige lijst van wijzigingen tussen twee geopende plansets lezen (`revisions_changes`). Hij krijgt alleen de tools die u hebt aangevinkt onder de schakelaar Assistenten, en elke wijziging is één stap ongedaan maken. Zie [MarkupCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

## In alle apps

- **Talen.** CadCraft Studio heeft nu 54 talen. Tien zijn nieuw: Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks. Alle niet-Engelse talen zijn machinale concepten totdat een moedertaalspreker ze heeft gelezen.
- **Invoerapparaten.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Invoerapparaten}} bepaalt wat een trackpad, de zijknoppen van uw muis, een pen, vingertikken, een 3D-muis, een gamecontroller of een MIDI-controller doet, voor elke app of alleen voor deze ene. Zolang u niets verandert, werkt elk apparaat zoals voorheen. Zie [Een trackpad, 3D-muis of controller gebruiken](common:input-devices).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} heeft {{ui:Omslaan}} (de standaard), {{ui:2 rijen}} en {{ui:1 rij}}, zodat de tekening meer ruimte krijgt. Zie [De panelen indelen](common:arrange-panels).
- **Eigenschappenraster.** De stijlvelden van een markup gebruiken het gedeelde raster, met inklapbare categorieën en kolommen voor label en waarde.
- **Paneel Problemen.** Waarschuwingen uit de app, zoals een taak die te laat is, verzamelen zich in één paneel Problemen.
- **Live en add-ons.** Live-sessies worden beschreven in [Samen werken live](common:work-together-live); de add-on-lijst die uw account volgt staat in [Add-ons en uw accountlijst](common:addons-basics).
- **Verbind uw AI.** CadCraft Studio is de hub voor uw eigen assistent: verbind één keer voor alle acht de apps. De apps bevatten zelf geen AI.

## Opgelost in 0.8.1

- **Studio kan de taal wisselen terwijl het draait.** Voorheen bleven de desktopapp en de verpakte edities in het Engels. Dit is nog niet op elk platform getest: laat ons weten als de taal niet verandert.
- Studio 0.8-installaties krijgen via {{ui:Instellingen}} › {{ui:Updates}} het aanbod om naar 0.8.1 te gaan.

## Nog niet in deze versie

- **Niet code-ondertekend.** De Windows-installers en het macOS .dmg-bestand hebben nog geen handtekening. Als SmartScreen op Windows de installer tegenhoudt, kies {{ui:Meer informatie}} en dan {{ui:Toch uitvoeren}}. Op een Mac klikt u met de rechtermuisknop op CadCraft Studio en kiest u {{ui:Openen}}. Store-builds zijn tijdelijk uitgesteld.
- **Het verbinden van uw AI is op sommige punten nog niet af.** Eén-klik verbinden binnen Studio, de gehoste connector voor browser-assistenten en uw eigen API-sleutel binnen Studio worden voor deze uitgave niet beloofd. De taaklus is getest, maar nog niet met een echte assistent.
- **Taakcontroles vereisen hetzelfde paginaformaat.** Een blad dat op een ander formaat opnieuw geplot is, past niet, dus de taken ervan sluiten niet. Bladen worden gekoppeld op bladnummer, anders op paginapositie.
- **Spraaknotities zijn alleen opnames.** Er is geen transcript, en een assistent ziet de lengte, auteur en het onderschrift van een notitie, niet het geluid. Opnemen is getest met een nep-microfoon in een headless browser; een echte microfoon op een telefoon, tablet of laptop moet nog gecontroleerd worden.
- **Rekenbladen en redenen in een PDF** worden bewaard in een privé-item van het bestand. Een oudere MarkupCraft negeert dat item en verwijdert het de volgende keer dat hij het bestand opslaat, dus open en sla zo'n bestand op met 0.8 of later.
- **De kant van de tekenaar bij redlines.** CadCraft dat het redlinebestand leest en erop antwoordt, is nog niet gebouwd.
- **Andere talen.** De appbalk van Tamil loopt 528 px over.

Alles wat er verder is, staat in [Wat nog niet beschikbaar is](topic:not-built-yet). Voor de uitgave daarvoor, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
