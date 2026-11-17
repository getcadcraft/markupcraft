---
title: Send markeringer til tegneren som rødlinjer
summary: Skriv de åpne markeringene som en rødlinjefil til den som tegner endringene, og last deretter inn svarene deres slik at hver markering viser Akseptert eller Avvist.
keywords: rødlinje, revisjon, tegner, godta, avvise, svar, cc-redline, revisjonssky, bruk markeringer
from: cb099d04
---

Gjennomgang er halve jobben; tegningen må fortsatt endres. Rødlinjefilen bærer hver åpen markering til tegneren, og tegnerens svar fører resultatet tilbake.

## Send

1. Åpne {{ui:Oppgaver}}-fanen og åpne {{ui:Rødlinjer til revisjon}}.
2. Skriv inn revisjonen markeringene gjelder for (for eksempel B).
3. Velg {{ui:Eksporter rødlinjefil}}.

Du får en `.redline.json`-fil med ett element per åpen markering: arket, hvor den er (som brøkdeler av arket, slik at en ny utskrift i en annen størrelse fortsatt stemmer, og i pt), ordene, forfatteren og tråden, og oppgaven hvis den har en. Skrivebeskyttede kommentarer fra andre programmer, bilder og tegnforklaringer utelates.

## Svar

Tegnesiden svarer på hvert element med Akseptert, Avvist eller Ferdig, med en merknad, i en `.redline-answers.json`-fil. Velg {{ui:Last inn svarfil…}} og velg den: hver markering får den statusen og tegnerens merknad i tråden sin, og en oppgave der markeringen ble akseptert eller ferdigstilt, blir fullført. Ett angrertrinn tar alle svarene tilbake.

Filformatet er beskrevet i `docs/REDLINE-FORMAT.md`. CadCraft-delen (lese pakken, godta eller avvise hvert element, revisjonssky og loggen) bygges separat.
