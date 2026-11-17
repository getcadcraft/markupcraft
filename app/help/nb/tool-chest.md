---
title: Verktøykisten
summary: Lagre en markering med stil som et gjenbrukbart verktøy, tegn med det, og del verktøykisten med kontoret som en fil.
keywords: verktøykiste, verktøy, verktøysett, egne verktøy, lagrede markeringer, favoritter, kontorstandard, importer, eksporter, del, json
from: 7dfa36e0
---

Fanen {{ui:Verktøy}} inneholder **verktøykisten** din: markeringer lagret med utseendet sitt, klare til å tegnes igjen. Et verktøy beholder markeringens type, farge, linjebredde, fyll, gjennomsiktighet, tekststørrelse og emne, i tillegg til et stempels tekst, navnet på en tellegruppe, eller starteksten i en tekstboks eller henvisning.

## Verktøyene du starter med

En ny kiste har seks: «Revisjonssky» (rød), «Spørsmålssky» (blå), «Gul utheving», «RFI-henvisning» (blå, starter med «RFI: »), «Kontroller i felt» (en oransje henvisning som sier «Kontroller i felt.») og «Godkjent med merknad» (et stempel).

## Tegn med et verktøy

1. Åpne fanen {{ui:Verktøy}}.
2. Klikk på et verktøy. Det ser trykt inn ut, og det tilsvarende verktøyet i verktøylinjen slås på.
3. Tegn som vanlig. {{ui:Egenskaper}} sier 'Tegner med "<verktøy>" fra verktøykisten.'

Mens et verktøy fra kisten er på, gjelder endringer du gjør i {{ui:Egenskaper}} før du tegner, for det verktøyet foreløpig, uten å endre det lagrede verktøyet eller dine vanlige verktøyinnstillinger. Når du velger en verktøylinjeknapp, eller trykker tastene for et verktøy, går du tilbake til det vanlige verktøyet.

## Lagre egne verktøy

1. Tegn en markering og stil den slik du vil: farge, linje, fyll, emne, stempeltekst.
2. Velg den.
3. Velg {{ui:Lagre valgte som verktøy}} på fanen {{ui:Verktøy}}, eller {{ui:Lagre som verktøy}} i {{ui:Egenskaper}}.
4. Skriv et {{ui:Verktøynavn}} og velg {{ui:Lagre verktøy}}.

Resultat: verktøyet legges til nederst i kisten, og fanen {{ui:Verktøy}} åpnes og viser det.

## Stempler laget av et utvalg

Velg flere markeringer (eller sideinnhold med verktøyet {{ui:Innhold}}) og velg {{ui:Lagre utvalget som stempel…}} i {{ui:Mer}} eller i hurtigmenyen. Kisten får ett stempel som holder dem alle («Stempel: 3 markeringer samlet»). Klikk på det, og klikk deretter på et ark: markeringene havner samlet, sentrert der du klikker, som nye markeringer med navnet ditt; sideinnhold tegnes inn på siden der. Disse stemplene lagres og deles med kisten som alle andre verktøy.

## Fjern et verktøy

Velg × til slutt på verktøyets rad, og deretter {{ui:Fjern}}. Markeringer som allerede er tegnet med det, forblir som de er.

## Hvor kisten lagres

Kisten lagres **i denne nettleseren, på denne datamaskinen**. En annen nettleser eller datamaskin har sin egen kiste (som starter med de seks standardverktøyene), et privat vindu glemmer den når det lukkes, og å tømme dette nettstedets data i nettleserens innstillinger sletter den.

Hvis nettleseren ikke vil lagre den (lagring slått av eller full), sier statuslinjen: «Verktøykisten kunne ikke lagres i denne nettleseren (lagring er av eller full). Eksporter den for å beholde den.»

:::safari
Safari kan tømme et nettsteds lagrede data når du ikke har brukt nettstedet på en stund. Eksporter kisten din nå og da, så du kan importere den igjen.
:::

**Eksporter kisten din som en sikkerhetskopi**, særlig etter at du har laget verktøy du er avhengig av.

## Del en kiste med kontoret

1. Sett opp verktøyene én gang.
2. Velg {{ui:Eksporter}}. Du får «MarkupCraft tool chest.json».
3. Legg filen der kontoret oppbevarer sine standarder, eller send den rundt.
4. Alle andre velger {{ui:Importer}} på fanen {{ui:Verktøy}} og velger filen.

Resultat: "Importerte 12 verktøy fra "MarkupCraft tool chest.json"." Verktøy som kommer fra samme kiste, erstatter de eldre kopiene, så import av en oppdatert kontorkiste oppfrisker disse verktøyene i stedet for å doble dem; nye verktøy legges til. En kiste rommer opptil 500 verktøy.

MarkupCraft sjekker hver verdi i en importert fil og hopper over det den ikke kan bruke («2 hoppet over (ikke brukbar)»). Filer som ikke er en kiste, avvises: «Denne filen er ikke en MarkupCraft-verktøykiste.» eller «Denne filen er ikke en verktøykiste (den er ikke JSON).»

Verktøykistefiler fra andre markeringsprogrammer kan ikke importeres.
