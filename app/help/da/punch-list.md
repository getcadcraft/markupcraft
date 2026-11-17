---
title: Lav en mangelliste
summary: Lav markeringer om til nummererede mangelpunkter med en ansvarlig, en frist og en status, og eksportér listen.
keywords: mangelliste, mangel, mangelpunkt, fejlliste, mangler i marken, observation, tildel, ansvarlig, frist, aflevering, rundgang, nummer
from: b98b38e6
---

Et mangelpunkt er en markering med et nummer, en ansvarlig, en frist og en punktstatus. Nummeret tegnes på arket ved siden af markeringen, så det udskrevne ark og listen stemmer overens.

## Tilføj punkter

1. Markér hver fejl på arkene: en sky, en henvisning, et notat, hvad som helst.
2. Vælg en eller flere af dem (se [Vælg, flyt og ændr markeringer](topic:select-and-edit)).
3. Enten åbn fanen {{ui:Mangelliste}} og vælg {{ui:Føj det valgte til mangellisten}}, eller vælg {{ui:Føj til mangellisten}} i {{ui:Egenskaber}}.

Resultat: hver markering får det næste nummer (1, 2, 3…), i arkrækkefølge og derefter i den rækkefølge, de blev tegnet. Et nummereret mærke vises på arket, og statuslinjen siger "3 punkter føjet til mangellisten." Markeringer, der allerede har et nummer, og skrivebeskyttede kommentarer, springes over.

## Udfyld detaljerne

På fanen {{ui:Mangelliste}} viser hvert punkt sit nummer, emne, tekst, ark og status, med tre felter under. De samme felter findes i {{ui:Egenskaber}} under "Mangelliste", når markeringen er valgt:

- {{ui:Ansvarlig}}: et navn eller et fag, som fri tekst.
- {{ui:Frist}}: en dato, fra datovælgeren.
- {{ui:Punktets status}}: Åben, I gang, Klar til gennemgang eller Lukket.

Klik på et punkts overskrift for at hoppe til det på dets ark.

Punktets status er adskilt fra markeringens gennemgangsstatus (Åben, Accepteret, Afvist, Færdig). Brug punktets status til arbejdet, og gennemgangsstatus til kommentaren.

## Fjern et punkt

Vælg markeringen og vælg {{ui:Tag af mangellisten}} i {{ui:Egenskaber}}. Markeringen bliver; kun nummeret går. Mens sættet er åbent, genbruges numre ikke: det næste punkt får stadig det næste nye nummer, så et hul betyder, at et punkt er taget af. Når en fil åbnes igen, fortsætter nummereringen efter det højeste nummer i den.

## Eksportér listen

Vælg {{ui:Eksportér CSV}} på fanen {{ui:Mangelliste}}. Du får "<name> punch list.csv" med kolonnerne Nr., Ark, Fil, Side, Punkt, Kommentar, Ansvarlig, Frist, Status, Markeringsstatus, Forfatter og Oprettet, i nummerrækkefølge. Åbn den i et hvilket som helst regneark.

Mangelpunkternes numre, ansvarlige, frister og punktstatusser gemmes også inde i den markerede PDF, så de kommer tilbage, når du åbner den igen. Andre PDF-fremvisere viser nummermærket som en del af markeringen. BCF-eksporten i markeringslisten har også ansvarlig og frist med (se [BCF-grundbegreber](topic:bcf-basics)).

## På stedet med en tablet

Åbn sættet på en iPad, gå rundt på byggepladsen, og slip et {{ui:Notat}} eller tegn en {{ui:Sky}} ved hvert problem. Føj dem til mangellisten undervejs, og gem, før du går. Se [Gennemgang på en iPad eller touchskærm](topic:review-on-a-tablet).

En mangelliste som formateret PDF- eller regnearksrapport, og fotos vedhæftet punkter, er ikke lavet endnu.
