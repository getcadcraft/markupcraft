---
title: Arkkoblinger
summary: Få en markering til å hoppe til et annet ark, og koble hver arkhenvisning som 3/A-501 til sitt ark og visning i ett gjennomløp med Batchlenker.
keywords: hyperlenke, lenke, lenker, hopp, arkhenvisning, detaljhenvisning, snitthenvisning, 3/A-501, gå til ark, tilbake, automatisk lenke, batchlenke, batchlenker, arkblokk, arknummer, arknavn, visning, detalj, gi nytt navn, nummerer på nytt, tillegg, pdf-lenke
from: 86a17c37
---

En arkkobling tar deg fra en markering til et annet ark i settet: fra en detaljboble til detaljen, fra et notat til arket det viser til.

## Koble en markering til et ark

1. Velg markeringen.
2. I {{ui:Properties}} velger du arket under {{ui:Link to sheet}}.

En liten pil vises øverst til høyre på markeringen. For å følge den, hold {{key:Mod}} og klikk på markeringen, eller velg den og velg {{ui:Go to …}} i {{ui:Properties}}. {{key:Alt+Left}} går tilbake til arket du kom fra.

En lenke angir arket med nummeret sitt, så den fungerer fortsatt etter at du åpner settet på nytt eller bytter ut ark med en ny utgave: den åpner det nyeste arket med det nummeret. Hvis det arket ikke er åpent, sier statuslinjen det.

## Koble alle arkhenvisninger på en gang

Velg {{ui:Pages}} › {{ui:Batch links…}}, eller {{ui:Link sheet callouts…}} under {{ui:Find text}} øverst i panelet {{ui:Sheets}}.

1. **Sjekk arknumrene.** MarkupCraft lister hvert åpne ark med nummeret og navnet det leste fra arkets blokk (eller sidetittel), og hvor hvert kom fra. Rett de som er feil, og skriv inn et nummer der det ikke fant noe (en tegningsblokk der nummeret var tegnet som linjer, har ingen tekst å lese). Velg deretter {{ui:Find callouts}}. Rettelsene dine er ett angrertrinn, og de blir sidetitlene i den lagrede PDF-filen.
2. **Gå gjennom listen.** MarkupCraft leser teksten på hvert ark for henvisninger som "3/A-501", "5 / A501", "DETAIL 2 ON A-501", en boble med "3" over "A-501", eller en vanlig "A-501" i et notat, og leser hvert arks visningstitler (et detaljnummer med arknummeret under, eller et stort nummer med en tittel ved siden av). Listen har tre deler:
   - {{ui:Will link}}: hver henvisning, arket den går til og visningen på arket. Fjern haken for dem du ikke vil ha. Hvis visningen ikke ble funnet (en henvisning til visning 7 på et ark med visningene 1 til 6), velg visningen fra listen ved siden av, eller la {{ui:Whole sheet}} stå.
   - {{ui:Not linked}}: arknumre som ingen åpent ark har, med hvor mange henvisninger som nevner hvert. Velg arket hver av dem betyr (for eksempel et ark som ble nummerert på nytt), så kobles hver henvisning til det nummeret. Eller la den stå ukoblet.
   - Hvor mange henvisninger som allerede er koblet og fortsatt går til riktig sted. De blir liggende som de er.
3. Velg {{ui:Create the links}}.

Hver henvisning får en tynn blå boks som er en arkkobling. {{key:Mod}}+klikk på den åpner arket zoomet til visningen. Ett {{key:Mod+Z}} fjerner dem alle.

Koder som bare ligner arknumre, for eksempel R-19 eller W12X26, utelates: en henvisning må ha form som settets egne arknumre. Et arks eget nummer, i tegningsblokken og i visningstitlene, blir aldri en henvisning. Skannede ark har ingen tekst å lese: bruk {{ui:Read text (OCR)…}} først, eller koble henvisningene deres én for én.

## Kjør det på nytt når settet endres

Batchlenker kan kjøres så ofte du vil:

- **Et ark er lagt til**, for eksempel et tillegg med A-601: åpne filen og kjør Batchlenker igjen. Henvisninger til A-601 som ikke ble koblet før, blir koblet nå.
- **Et ark er nummerert på nytt**: rett nummeret i trinn 1. Lenker laget av Batchlenker som ikke lenger finner arket sitt, listes under {{ui:Not linked}}; velg arket én gang, så følger de alle med. Lenker som er flyttet til en annen visning, oppdateres.
- Lenker du lagde for hånd i {{ui:Properties}}, endres aldri.

## I den lagrede PDF-filen

En lenke til et ark i samme PDF-fil skrives også som en PDF-lenke, slik at andre lesere hopper dit med et klikk. En lenke med en visning åpner den visningen i den andre leseren (PDF-hoppet "fit rectangle"); en uten visning åpner hele arket. Lenker til et ark i en annen fil i settet fungerer bare i MarkupCraft.
