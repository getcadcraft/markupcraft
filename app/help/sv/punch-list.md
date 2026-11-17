---
title: Skapa en åtgärdslista
summary: Förvandla markeringar till numrerade åtgärdsposter med en ansvarig, ett förfallodatum och en status, och exportera listan.
keywords: åtgärdslista, åtgärd, bristlista, brist, fältproblem, observation, tilldela, ansvarig, förfallodatum, avslutning, guidad genomgång, nummer
from: b98b38e6
---

En åtgärdspost är en markering med ett nummer, en ansvarig, ett förfallodatum och en poststatus. Numret ritas på bladet bredvid markeringen, så det utskrivna bladet och listan stämmer överens.

## Lägg till poster

1. Markera varje problem på bladen: ett moln, en hänvisning, en anteckning, vad som helst.
2. Markera en eller flera av dem (se [Markera, flytta och ändra markeringar](topic:select-and-edit)).
3. Antingen öppnar du fliken {{ui:Åtgärdslista}} och väljer {{ui:Lägg till markerade i åtgärdslistan}}, eller väljer {{ui:Lägg till i åtgärdslistan}} i {{ui:Egenskaper}}.

Resultat: varje markering får nästa nummer (1, 2, 3…), i bladordning och sedan i den ordning de ritades. En numrerad bricka visas på bladet, och statusfältet säger "Lade till 3 poster i åtgärdslistan." Markeringar som redan har ett nummer, och skrivskyddade kommentarer, hoppas över.

## Fyll i detaljerna

På fliken {{ui:Åtgärdslista}} visar varje post sitt nummer, ämne, text, blad och status, med tre fält under den. Samma fält finns i {{ui:Egenskaper}} under "Åtgärdslista" när markeringen är vald:

- {{ui:Ansvarig}}: ett namn eller ett yrke, som fritext.
- {{ui:Förfaller}}: ett datum, från datumväljaren.
- {{ui:Poststatus}}: Öppen, Pågår, Klar för granskning eller Stängd.

Klicka på en posts rubrik för att hoppa till den på dess blad.

Poststatusen är skild från markeringens granskningsstatus (Öppen, Godkänd, Avvisad, Slutförd). Använd poststatusen för arbetet och granskningsstatusen för kommentaren.

## Ta bort en post

Markera markeringen och välj {{ui:Ta bort från åtgärdslistan}} i {{ui:Egenskaper}}. Markeringen står kvar; bara numret försvinner. Medan satsen är öppen återanvänds inga nummer: nästa post får fortfarande nästa nya nummer, så ett hål betyder att en post tagits bort. När en fil öppnas igen fortsätter numreringen efter det högsta numret i den.

## Exportera listan

Välj {{ui:Exportera CSV}} på fliken {{ui:Åtgärdslista}}. Du får filen "<name> punch list.csv" med kolumnerna No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author och Created, i nummerordning. Öppna den i valfritt kalkylblad.

Åtgärdsnumren, de ansvariga, förfallodatumen och poststatusarna sparas också inuti den markerade PDF:en, så de återkommer när du öppnar den igen. Andra PDF-läsare visar nummerbrickan som en del av markeringen. Markeringslistans BCF-export innehåller också ansvarig och förfallodatum (se [BCF-grunder](topic:bcf-basics)).

## På plats med en surfplatta

Öppna satsen på en iPad, gå runt på bygget, och släpp en {{ui:Anteckning}} eller rita ett {{ui:Moln}} vid varje problem. Lägg till dem i åtgärdslistan allt eftersom, och spara innan du går. Se [Granska på iPad eller pekskärm](topic:review-on-a-tablet).

En åtgärdslista som formaterad PDF- eller kalkylrapport, och foton bifogade till poster, finns inte ännu.
