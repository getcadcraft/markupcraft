---
title: Markups als redline naar de tekenaar sturen
summary: Schrijf de openstaande markups als redlinebestand voor wie de wijzigingen tekent, en laad dan hun antwoorden zodat elke markup Geaccepteerd of Afgewezen toont.
keywords: redline, revisie, tekenaar, accepteren, afwijzen, antwoorden, cc-redline, revisiewolk, markups toepassen
from: cb099d04
---

Beoordelen is het halve werk; de tekening moet nog steeds veranderen. Het redlinebestand brengt elke openstaande markup naar de tekenaar, en de antwoorden van de tekenaar brengen het resultaat terug.

## Versturen

1. Open het tabblad {{ui:Taken}} en open {{ui:Redline naar revisie}}.
2. Typ de revisie waarop de markups betrekking hebben (bijvoorbeeld B).
3. Kies {{ui:Redlinebestand exporteren}}.

U krijgt een `.redline.json`-bestand met één item per markup met de status Open: het blad, waar die staat (als breuken van het blad, zodat een nieuwe plot op een ander formaat nog steeds past, en in punten), de woorden, de auteur en de draad, en de taak als die er een heeft. Alleen-lezen opmerkingen van andere programma's, afbeeldingen en legenda's worden weggelaten.

## Antwoorden

De tekenaar beantwoordt elk item met Geaccepteerd, Afgewezen of Gereed, met een notitie, in een `.redline-answers.json`-bestand. Kies {{ui:Antwoordbestand laden…}} en selecteer het: elke markup krijgt die status en de notitie van de tekenaar in zijn draad, en een taak waarvan de markup is geaccepteerd of gereed is, wordt afgerond. Eén stap ongedaan maken neemt alle antwoorden terug.

Het bestandsformaat staat in `docs/REDLINE-FORMAT.md`. De CadCraft-kant (het pakket lezen, elk item accepteren of afwijzen, revisiewolken en het logboek) wordt los gebouwd.
