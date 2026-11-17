---
title: Skicka markeringar till ritaren som redline
summary: Skriv de öppna markeringarna som en redline-fil till den som ritar ändringarna, och läs sedan in deras svar så att varje markering visar Godkänd eller Avvisad.
keywords: redline, revision, ritare, godkänn, avvisa, svar, cc-redline, revisionsmoln, tillämpa markeringar
from: cb099d04
---

Granskning är halva jobbet; ritningen måste fortfarande ändras. Redline-filen bär varje öppen markering till ritaren, och ritarens svar för resultatet tillbaka.

## Skicka

1. Öppna fliken {{ui:Uppgifter}} och öppna {{ui:Redline till revision}}.
2. Skriv den revision markeringarna gäller för (till exempel B).
3. Välj {{ui:Exportera redlinefil}}.

Du får en `.redline.json`-fil med en post per öppen markering: dess blad, var den är (som bråkdelar av bladet, så att en ny utskrift i annan storlek fortfarande stämmer, och i punkter), dess ord, författare och tråd, och dess uppgift om den har en. Skrivskyddade kommentarer från andra program, bilder och teckenförklaringar utelämnas.

## Svar

Ritsidan svarar på varje post Godkänd, Avvisad eller Klar, med en anteckning, i en `.redline-answers.json`-fil. Välj {{ui:Läs in svarsfil…}} och välj den: varje markering får den statusen och ritarens anteckning i sin tråd, och en uppgift vars markering godkändes eller blev klar blir färdig. Ett enda ångra-steg tar tillbaka alla svar.

Filformatet beskrivs i `docs/REDLINE-FORMAT.md`. CadCraft-delen (att läsa paketet, godkänna eller avvisa varje post, revisionsmoln och loggen) byggs separat.
