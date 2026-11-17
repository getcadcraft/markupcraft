---
title: Twee revisies vergelijken
summary: Leg een oude en een nieuwe uitgave van een blad in twee kleuren over elkaar, lijn ze uit op twee punten, en omcirkel wat er is veranderd.
keywords: vergelijken, overlay, pagina's overlay, revisie, verschil, verschillen, wijzigingen, oud nieuw, uitlijnen, terugcontrole, uitgave, bulletin
from: 62f5d1c5
---

Vergelijken legt twee bladen over elkaar. Lijnen die alleen op het oude blad staan, tonen in rood, lijnen die alleen op het nieuwe blad staan in blauw, en lijnen op beide in een gedempt grijs. De kleuren staan in de legenda onder het blad: "Alleen op het oude blad", "Alleen op het nieuwe blad", "Op beide".

## Twee bladen vergelijken

1. Open beide uitgaven. Het kunnen pagina's van dezelfde PDF of van verschillende PDF's zijn; open ze samen als één set (zie [Met meerdere bestanden tegelijk werken](topic:several-files)).
2. Kies het tabblad {{ui:Compare}} rechts.
3. Kies het {{ui:Old sheet}} en het {{ui:New sheet}}. Het nieuwe blad begint als het blad waarop u bent. Wanneer meerdere bestanden open zijn, wordt de bestandsnaam van elk blad achter de naam getoond.
4. Kies {{ui:Compare}}.

Resultaat: MarkupCraft toont het nieuwe blad met het oude erdoor gemengd, de legenda verschijnt, en het tabblad zegt "Vergelijken <old> (oud) met <new> (nieuw). Markups op het nieuwe blad blijven bewerkbaar."

## Overgang tussen oud en nieuw

Sleep de schuif {{ui:Old and new}}. Helemaal links toont alleen het oude blad, helemaal rechts alleen het nieuwe, en het midden toont beide. Heen en weer schuiven is vaak de snelste manier om een kleine wijziging te zien.

## De bladen uitlijnen

Als de twee uitgaven met een andere marge, formaat of rotatie zijn afgedrukt, lijkt alles veranderd. Corrigeer dat:

**Op twee punten (het beste):**

1. Kies {{ui:Align by two points}}. De weergave toont alleen het oude blad.
2. Klik op een scherp kenmerk dat u op beide bladen kunt vinden, zoals een snijpunt van een kolomraster. Het tabblad telt de stappen ("1 van 4").
3. Klik op een tweede kenmerk, ver van het eerste, zoals de tegenoverliggende rasterhoek.
4. De weergave schakelt naar het nieuwe blad. Klik weer op het eerste kenmerk.
5. Klik weer op het tweede kenmerk.

Resultaat: "Uitgelijnd: oud blad geschaald op 100.00%, gedraaid 0.00°. Verschuif voor fijnafstelling." Het oude blad wordt verplaatst, geschaald en gedraaid om te passen. {{key:Esc}} annuleert terwijl u kiest. Zoom in op elk kenmerk voordat u klikt, voor een precieze pasvorm.

**Met verschuiven:** gebruik de vier pijlknoppen onder "Uitlijnen" om het oude blad te verplaatsen. Kies de stap (0.25, 1, 5 of 20 pt; 72 pt is één inch op het papier). Het tabblad zegt hoe ver het is verplaatst.

{{ui:Reset}} verwijdert de uitlijning en de verschuivingen.

## Alleen gewijzigde lijnen

Kies onder de uitlijningsknoppen {{ui:Changed lines}} in plaats van {{ui:Picture overlay}}. MarkupCraft vergelijkt dan de eigen lijnen van de twee bladen, niet hun afbeeldingen: het nieuwe blad toont zoals het is, met de lijnen die alleen op het oude blad staan in rood en de lijnen alleen op het nieuwe in blauw. Een lijn die alleen korter is geworden, toont alleen het ontbrekende deel. Lijn de bladen eerst uit (zie hierboven): de vergelijking gebruikt de uitlijning, dus een blad dat alleen is verschoven, toont geen wijzigingen. De statusregel zegt hoeveel er is veranderd.

Dit werkt voor PDF's die uit CAD zijn afgedrukt, waar de tekening uit lijnen bestaat. Gescande bladen hebben geen lijnen om te vergelijken: gebruik daarvoor de afbeeldingsoverlay. Tekst in een lettertype (niet als streken getekend) wordt niet vergeleken.

## De wijzigingen markeren

Tijdens het vergelijken staat u op het nieuwe blad en werkt elk gereedschap. Teken wolken rond de wijzigingen terwijl u ze vindt; ze horen bij het nieuwe blad en blijven staan wanneer u stopt met vergelijken.

{{ui:Cloud the changes}} doet dat voor u: het groepeert de gewijzigde lijnen die dicht bij elkaar liggen en tekent een revisiewolk rond elke groep op het nieuwe blad, met "Gewijzigd sinds <oud blad>" als opmerking. Eén {{key:Mod+Z}} verwijdert ze allemaal; verwijder de wolken die u niet nodig heeft.

## Een hele set vergelijken

Wanneer de nieuwe uitgave als eigen PDF binnenkomt, opent u beide PDF's en opent u {{ui:Compare two sets}} in het tabblad {{ui:Compare}}. Kies het oude bestand en het nieuwe bestand, en kies daarna {{ui:Compare the sets}}. Bladen worden gekoppeld op hun nummer (zoals bij [slip-sheeting](topic:slip-sheet-a-revised-set)), op hun lijnen vergeleken, en in de lijst gesorteerd met de meeste wijzigingen eerst. Kies een blad in de lijst om dat paar met {{ui:Changed lines}} te vergelijken.

{{ui:Cloud all changes}} omcirkelt elke groep gewijzigde lijnen op elk gewijzigd blad, in één stap die u ongedaan kunt maken. De setvergelijking lijnt bladen niet eerst uit, dus een blad dat op de pagina is verschoven, telt als gewijzigd: vergelijk dat paar apart en gebruik {{ui:Align by two points}}.

## Stoppen met vergelijken

Kies {{ui:Stop comparing}}, of ga naar een ander blad. De uitlijning wordt onthouden voor hetzelfde paar bladen tot u de set sluit.

## Goed om te weten

- Vergelijken werkt op wat getekend is, pixel voor pixel. Het weet niet dat een lijn is verplaatst; het toont de oude positie in de ene kleur en de nieuwe positie in de andere.
- Tekst die is herschikt, een gewijzigde datum in het titelblok of een andere plotstijl verschijnt ook als wijziging.
- Een gescand blad vergeleken met een geplot blad is onrustig: scannen vervaagt en verschuift lijnen.
- Vergelijken van tekst in een lettertype, en een lijst van wat er is veranderd, zijn nog niet beschikbaar.
