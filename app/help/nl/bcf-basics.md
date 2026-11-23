---
title: BCF-basis
summary: Wat een BCF-export uit MarkupCraft bevat, hoe u die gebruikt met BIM-coördinatietools en de beperkingen ervan.
keywords: bcf, bcfzip, bim collaboration format, issues, coördinatie, clash, topics, viewpoint, momentopname, openbim, buildingsmart, issues exporteren
from: 0de26175
---

BCF (BIM Collaboration Format) is een open bestandsformaat voor het uitwisselen van issues tussen BIM-tools. Veel programma's voor modelcoördinatie en modelauteursschap kunnen een `.bcfzip`-bestand importeren als lijst met issues. MarkupCraft schrijft **BCF 2.1**.

## Een maken

1. Open het tabblad {{ui:Markups}}.
2. Filter de lijst op wat u wilt versturen, bijvoorbeeld {{ui:Status}} "Open". Alleen de getoonde markups worden geëxporteerd.
3. Kies {{ui:BCF}}.
4. Wacht terwijl er van elke markup een momentopname wordt gemaakt ("Momentopnamen maken voor BCF (5 van 20)…").

Resultaat: "<name> markups.bcfzip" wordt gedownload, en de statusbalk meldt hoeveel topics het bevat en de bestandsgrootte.

## Wat erin zit

Elke markup wordt één **topic**:

| Topicveld | Gevuld met |
|---|---|
| Titel | Opleverpuntnummer, onderwerp en blad, bijvoorbeeld "#4 Wolk op A-101 — Plattegrond" |
| Type | Het soort markup (Wolk, Callout, Lengte…) |
| Status | Open, Geaccepteerd, Afgewezen of Voltooid |
| Labels | Het soort markup en het blad |
| Auteur en datums | De auteur van de markup, en de datums van aanmaken en wijzigen |
| Toegewezen aan, vervaldatum | Uit het opleverpunt, als er een is |
| Beschrijving | De tekst of stempeltekst, gemeten waarde, opmerking, en het blad en het bestand |
| Reacties | Eén per reactie, met auteur en datum |
| Momentopname | Een afbeelding van de markup op zijn deel van het blad |
| Viewpoint | Een bovenaanzicht van de plaats van de markup op het blad |

Dezelfde markup opnieuw exporteren geeft hetzelfde topic-ID, zodat een tool die BCF importeert hem herkent als hetzelfde issue.

## Wat terugkomt bij het importeren

{{ui:Import BCF}} leest BCF 2.0-, 2.1- en 3.0-bestanden (gecontroleerd op de 19 officiële buildingSMART 3.0-testbestanden: elk topic gelezen, en de reacties van de drie die tekst hebben). Voor een topic dat van u is (zelfde topic-ID) voegt het de nieuwe reacties toe als antwoorden en neemt het de nieuwe status over. Elk ander topic wordt een notitie op het blad dat de label of bestandsnaam aangeeft, anders op het open blad, met titel, beschrijving, toegewezen persoon en vervaldatum als tekst van de notitie en de reacties als antwoorden.

| In het BCF-topic | In MarkupCraft |
|---|---|
| Titel, beschrijving, toegewezen persoon, vervaldatum | De tekst van de notitie |
| Reacties met tekst | Antwoorden |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done tellen als Completed) | De status van de markup |
| Auteur en aanmaakdatum | De auteur en datum van de notitie |
| Camerapositie | Een plaats op het blad, alleen voor een topic dat via label of bestandsnaam aan een blad is gekoppeld |
| Modelselectie, verborgen onderdelen, afknipvlakken, momentopnamen | Niet bewaard: een blad heeft geen model om ze in te tonen |

## Beperkingen om te kennen

- **Een blad is geen model.** Het viewpoint wijst naar de positie van de markup op het papier, gemeten in meters papier. Het brengt een BIM-tool niet naar een plek in het model. Gebruik de momentopname en de bladnaam om de plek te vinden.
- **Statussen en typen zijn van MarkupCraft zelf** (Open, Geaccepteerd, Afgewezen, Voltooid; Wolk, Callout…). Het bestand declareert ze, zoals BCF toestaat, maar een tool met eigen vaste lijsten kan ze koppelen of negeren.
- **Importeren brengt reacties, geen modelweergaven.** {{ui:Import BCF}} voegt reacties en statussen toe aan de markups die u heeft geëxporteerd, en maakt notities van andere issues; het kan geen modelcamera tonen. Zie [Lijst met markups en export](topic:markups-list-and-export#import-bcf).
- Markups terugsturen als PDF is bij tekeningreviews vaak eenvoudiger. BCF is bedoeld om opmerkingen bij tekeningen in een modelcoördinatieworkflow te krijgen.
