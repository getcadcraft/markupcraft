---
title: Arklinks
summary: Lad en markering springe til et andet ark, og link hver arkhenvisning, som 3/A-501, til dens ark og visning på én gang med Batch-links.
keywords: hyperlink, link, links, hop, arkhenvisning, detaljehenvisning, snithenvisning, 3/A-501, gå til ark, tilbage, automatisk link, batch-link, batch-links, titelblok, arknummer, arknavn, visning, detalje, omdøb, omnummerér, tillæg, pdf-link
from: 86a17c37
---

Et arklink fører dig fra en markering til et andet ark i sættet: fra en detaljeboble til detaljen, fra en note til det ark, den henviser til.

## Link en markering til et ark

1. Vælg markeringen.
2. I {{ui:Egenskaber}} vælger du arket under {{ui:Link til ark}}.

En lille pil vises i markeringens øverste højre hjørne. For at følge den holder du {{key:Mod}} nede og klikker på markeringen, eller vælger den og vælger {{ui:Gå til …}} i {{ui:Egenskaber}}. {{key:Alt+Left}} fører tilbage til det ark, du kom fra.

Et link nævner arket med dets nummer, så det stadig virker, efter du har åbnet sættet igen, eller har skiftet ark til en ny udgave: det åbner det nyeste ark med det nummer. Hvis det ark ikke er åbent, siger statuslinjen det.

## Link alle arkhenvisninger på én gang

Vælg {{ui:Sider}} › {{ui:Batch-links…}}, eller {{ui:Link arkhenvisninger…}} under {{ui:Find tekst}} øverst i panelet {{ui:Ark}}.

1. **Tjek arknumrene.** MarkupCraft lister hvert åbent ark med det nummer og navn, den læste fra arkets titelblok (eller dets sidelabel), og hvor hvert kom fra. Ret dem, der er forkerte, og skriv et nummer, hvor den ikke fandt noget (en titelblok, hvis nummer er tegnet som linjer, har ingen tekst at læse). Vælg derefter {{ui:Find henvisninger}}. Dine rettelser er ét fortrydelsestrin, og de bliver til sidelabels i den gemte PDF.
2. **Gennemgå listen.** MarkupCraft læser teksten på hvert ark for henvisninger som »3/A-501«, »5 / A501«, »DETAIL 2 ON A-501«, en boble med »3« over »A-501«, eller et simpelt »A-501« i en note. Den læser også hvert arks visningstitler (et detaljenummer med arknummeret under, eller et stort nummer med en titel ved siden af). Listen har tre dele:
   - {{ui:Vil linke}}: hver henvisning, arket den går til, og visningen på arket. Fjern fluebenet ved dem, du ikke vil have. Hvis visningen ikke blev fundet (en henvisning til visning 7 på et ark med visninger 1 til 6), vælg visningen i listen ved siden af, eller lad {{ui:Hele arket}} stå.
   - {{ui:Ikke linket}}: arknumre, som intet åbent ark har, med hvor mange henvisninger der nævner hvert. Vælg det ark, hver enkelt betyder (for eksempel et ark, der er omnummereret), og hver henvisning til det nummer linkes dertil. Eller lad den være ulinket.
   - Hvor mange henvisninger der allerede er linket og stadig går til det rigtige sted. De bliver, som de er.
3. Vælg {{ui:Opret linkene}}.

Hver henvisning får en tynd blå boks, der er et arklink. {{key:Mod}}+klik på den åbner arket zoomet til visningen. Ét {{key:Mod+Z}} fjerner dem alle.

Koder, der kun ligner arknumre, såsom R-19 eller W12X26, udelades: en henvisning skal have samme form som sættets egne arknumre. Et arks eget nummer, i dets titelblok og visningstitler, er aldrig en henvisning. Scannede ark har ingen tekst at læse: brug {{ui:Læs tekst (OCR)…}} først, eller link deres henvisninger én for én.

## Kør det igen, når sættet ændres

Batch-links kan køres så tit, du vil:

- **Et ark er tilføjet**, for eksempel et tillæg med A-601: åbn dens fil og kør Batch-links igen. Henvisninger til A-601, der ikke linkede før, linker nu.
- **Et ark er omnummereret**: ret dets nummer i trin 1. Links lavet af Batch-links, der ikke længere finder deres ark, listes under {{ui:Ikke linket}}; vælg arket én gang, og de følger alle med. Links, der er flyttet til en anden visning, opdateres.
- Links, du har lavet i hånden i {{ui:Egenskaber}}, ændres aldrig.

## I den gemte PDF

Et link til et ark i samme PDF skrives også som et PDF-link, så andre PDF-læsere springer dertil ved et klik. Et link med en visning åbner den visning i den anden PDF-læser (PDF-springet »fit rectangle«); et uden visning åbner hele arket. Links til et ark i en anden fil i sættet virker kun i MarkupCraft.
