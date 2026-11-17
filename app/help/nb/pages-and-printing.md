---
title: Skriv ut, og endre sidene i en PDF
summary: Skriv ut ark med markeringene sine, og roter, flytt, sett inn, slett eller trekk ut sider i en åpen PDF.
keywords: skriv ut, skriver, papir, sider, side, roter, snu, omorden, flytt side, sett inn, legg til side, blank side, slett side, fjern side, trekk ut, del, sideoperasjoner
from: 81832d9b
---

{{ui:Sider}}-menyen i {{ui:Fil}}-gruppen virker på PDF-en som det åpne arket tilhører. PDF-en på denne datamaskinen endres aldri: endringene er en del av kopien du lagrer.

## Skriv ut

1. Trykk {{key:Mod+P}}, eller velg {{ui:Sider}}, deretter {{ui:Skriv ut…}}.
2. Når mer enn ett ark er åpent, velg hva som skal skrives ut: {{ui:Dette arket}}, alle sider i denne filen, hele settet, eller sidene du skriver inn (for eksempel `1-3, 5`).
3. Velg {{ui:Skriv ut}}. Nettleserens utskriftsdialog åpnes: velg skriver, papir og målestokk der.

Markeringene skrives ut slik de ser ut på arket: de tegnes inn i sidene i kopien som sendes til skriveren. Kommentarer fra andre programmer skrives ut slik deres PDF sier.

:::safari firefox
Hvis nettleseren din ikke kan skrive ut fra inne i siden, åpnes arkene som en PDF i en ny fane. Skriv ut derfra.
:::

## Snu en side

Velg {{ui:Sider}}, deretter {{ui:Roter siden med klokken}} eller {{ui:Roter siden mot klokken}}. Det åpne arket snur en kvart omdreining. Markeringene forblir der de var på tegningen, og tekst du skrev, snur med siden, slik at den fortsatt leses rett opp.

## Flytt en side

Velg {{ui:Sider}}, deretter {{ui:Flytt siden tidligere}} eller {{ui:Flytt siden senere}}. Det åpne arket bytter plass med naboen i sin egen PDF. Markeringene, målestokken og arknummeret følger med.

## Sett inn sider

- {{ui:Sett inn sider fra en PDF…}} legger alle sider i en annen PDF etter det åpne arket.
- {{ui:Sett inn en blank side}} legger til en tom side i samme størrelse etter det åpne arket, for skisser og notater. I et sett laget med {{ui:Ny}} har den settets rutenett også.
- I et sett laget med {{ui:Ny}} legger {{ui:Legg til en blank side}} under listen {{ui:Ark}} til én side til, lik de andre, på slutten. Se [Start med blanke sider](topic:open-a-plan-set#start-with-blank-pages).

Innsatte sider får sidenummeret sitt som merking til du gir dem nytt navn. Se [Gi et ark nytt navn](topic:open-a-plan-set#rename-a-sheet).

## Slett sider

1. Velg {{ui:Sider}}, deretter {{ui:Slett sider…}}.
2. Skriv inn sidenumrene til denne PDF-en, for eksempel `3` eller `2-4`. Det åpne arkets side er fylt inn.
3. Velg {{ui:Slett sider}}. Hvis disse sidene har markeringer, sier MarkupCraft hvor mange, og spør igjen.

En PDF beholder minst én side. For å fjerne en hel fil, lukk settet og åpne filene du fortsatt trenger.

## Trekk ut sider

Velg {{ui:Sider}}, deretter {{ui:Trekk ut sider…}}, og skriv inn sidene. De lastes ned som en ny PDF med navnet «<file> (pages 1-3).pdf», med markeringene sine som kommentarer du kan fortsette å redigere. Den åpne filen forblir som den er.

## Greit å vite

- **Angre stopper ved en sideendring.** {{key:Mod+Z}} angrer markeringer tegnet etter den, men ikke selve sideendringen eller noe før den. Lukk uten å lagre for å starte på nytt fra den opprinnelige PDF-en.
- Sidenumrene teller sidene i én PDF, ikke hele settet. Å flytte en side holder den i sin egen fil.
- De endrede sidene er ulagret arbeid: {{ui:Lagre}} laster ned den omorganiserte kopien, og å forlate siden spør først.
