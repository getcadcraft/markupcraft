---
title: Send markeringer til tegneren som rettelser
summary: Skriv de åbne markeringer som en rettelsesfil til den, der tegner ændringerne, og indlæs derefter svarene, så hver markering viser Accepteret eller Afvist.
keywords: rettelse, revision, tegner, accepter, afvis, svar, cc-redline, revisionssky, anvend markeringer
from: cb099d04
---

Gennemgang er halvdelen af arbejdet; tegningen skal stadig ændres. Rettelsesfilen fører hver åben markering til tegneren, og tegnerens svar bringer resultatet tilbage.

## Send

1. Åbn fanen {{ui:Opgaver}} og åbn {{ui:Rettelser til revision}}.
2. Skriv den revision, markeringerne hører til (f.eks. B).
3. Vælg {{ui:Eksportér rettelsesfil}}.

Du får en `.redline.json`-fil med ét punkt pr. åben markering: dets ark, hvor den er (som brøkdele af arket, så en genudskrivning i en anden størrelse stadig passer, og i punkter), dens tekst, forfatter og tråd, og dens opgave, hvis den har en. Skrivebeskyttede kommentarer fra andre programmer, billeder og signaturforklaringer er udeladt.

## Svar

Tegnersiden svarer på hvert punkt med Accepteret, Afvist eller Færdig, med en note, i en `.redline-answers.json`-fil. Vælg {{ui:Indlæs svarfil…}} og vælg den: hver markering får den status og tegnerens note i sin tråd, og en opgave, hvis markering blev accepteret eller færdig, er afsluttet. Ét fortrydelsestrin tager alle svarene tilbage.

Filformatet står i `docs/REDLINE-FORMAT.md`. CadCraft-siden (læsning af pakken, accept eller afvisning af hvert punkt, revisionsskyer og loggen) bygges separat.
