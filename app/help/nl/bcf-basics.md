---
title: BCF-basis
summary: Wat een BCF-export uit MarkupCraft bevat, hoe u die gebruikt met BIM-coördinatietools, en de grenzen ervan.
keywords: bcf, bcfzip, bim-samenwerkingsformaat, issues, coördinatie, clash, topics, viewpoint, snapshot, openbim, buildingsmart, issues exporteren
from: 446f38c1
---

BCF (BIM Collaboration Format) is een open bestandsformaat voor het doorgeven van issues tussen BIM-programma's. Veel programma's voor modelcoördinatie en modelleren kunnen een `.bcfzip`-bestand importeren als lijst met issues. MarkupCraft schrijft **BCF 2.1**.

## Een bestand maken

1. Open het tabblad {{ui:Markups}}.
2. Filter de lijst op wat u wilt versturen, bijvoorbeeld {{ui:Status}} "Open". Alleen de getoonde markups worden geëxporteerd.
3. Kies {{ui:BCF}}.
4. Wacht terwijl er van elke markup een snapshot wordt gemaakt ("Snapshots maken voor BCF (5 van 20)…").

Resultaat: "<name> markups.bcfzip" wordt gedownload, en de statusbalk zegt hoeveel topics het bevat en hoe groot het bestand is.

## Wat erin zit

Elke markup wordt één **topic**:

| Topicveld | Ingevuld met |
|---|---|
| Titel | Puntnummer, onderwerp en blad, bijvoorbeeld "#4 Wolk op A-101 — Plattegrond" |
| Type | Het soort markup (Wolk, Aanwijzing, Lengte…) |
| Status | Open, Geaccepteerd, Afgewezen of Voltooid |
| Labels | Het soort markup en het blad |
| Auteur en datums | De auteur van de markup, en de datums van aanmaken en wijzigen |
| Toegewezen aan, vervaldatum | Uit het opleverpunt, als er een is |
| Beschrijving | De tekst of de stempeltekst, de gemeten waarde, de opmerking, en het blad en het bestand |
| Opmerkingen | Eén per reactie, met auteur en datum |
| Snapshot | Een afbeelding van de markup op zijn deel van het blad |
| Viewpoint | Een bovenaanzicht van de plaats van de markup op het blad |

Opnieuw exporteren van dezelfde markup geeft dezelfde topic-ID, zodat een tool die BCF importeert hem kan herkennen als hetzelfde issue.

## Beperkingen om te kennen

- **Een blad is geen model.** Het viewpoint wijst naar de positie van de markup op het papier, gemeten in meters papier. Het brengt een BIM-tool niet naar een plek in het model. Gebruik de snapshot en de bladnaam om de plek te vinden.
- **Statussen en soorten zijn van MarkupCraft zelf** (Open, Geaccepteerd, Afgewezen, Voltooid; Wolk, Aanwijzing…). Het bestand declareert ze, zoals BCF toelaat, maar een tool met eigen vaste lijsten kan ze koppelen of negeren.
- **Importeren brengt opmerkingen, geen modelweergaven.** {{ui:Import BCF}} voegt reacties en statussen toe aan de markups die u heeft geëxporteerd, en maakt notities van andere issues; het kan geen modelcamera tonen. Zie [Markuslijst en export](topic:markups-list-and-export#import-bcf).
- Markups terugsturen als PDF is voor tekenbeoordelingen vaak eenvoudiger. BCF is bedoeld om tekenopmerkingen in een modelcoördinatieproces te krijgen.
