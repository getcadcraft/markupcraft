---
title: Innstillinger for MarkupCraft
summary: Endre navnet ditt, fargen og linjevekten til nye markeringer, hvor innliming legger kopier, og enhetene for lengder og plassering på arket.
keywords: innstillinger, valg, alternativer, navn, forfatter, farge, standardfarge, linjevekt, linjebredde, tykk, tynn, lim inn, lim inn ved pekeren, forskyvning, enheter, metrisk, millimeter, tommer, fot, tilbakestill
from: 63ad97fd
---

Åpne {{ui:Settings}} med tannhjulet i linjen øverst, eller trykk {{key:Mod+,}}. Den første fanen, {{ui:MarkupCraft}}, inneholder innstillingene som hører til denne appen; {{ui:General}} inneholder de som alle CadCraft-apper deler (tema, verktøylinje, paneler). Innstillingene for MarkupCraft finnes bare i appen: du endrer dem her, og denne nettleseren husker dem (se [Hva som blir liggende i denne nettleseren](topic:browser-storage)). En endring trer i kraft med en gang; det finnes ingenting å lagre.

## Navnet ditt

{{ui:Name on markups}} er navnet som hver nye markering og hvert nytt svar bærer, og som lagrede PDF-filer viser som kommentarens forfatter. Det er det samme navnet som knappen helt til høyre i statuslinjen; endre det på et av stedene. Markeringer som allerede er tegnet, beholder navnet de ble laget med. Se [Angi navnet ditt som forfatter](topic:set-your-name).

## Nye markeringer

- **{{ui:Markup color}}** er fargen nye penner, linjer, piler, rektangler, ellipser, polylinjer, polygoner, skyer, henvisninger og tekst begynner med (rød som start). Utheving, notater, stempler, lengder, arealer og tellinger beholder sine egne farger, fordi fargene deres sier hva de er.
- **{{ui:Thin lines}}, {{ui:Normal}}, {{ui:Heavy lines}}** gjør linjene til de samme markeringene halvparten så brede, slik de er, eller halvparten så mye bredere igjen.

En farge eller linjebredde du velger for ett verktøy i {{ui:Properties}} (med verktøyet på og ingenting valgt), vinner over disse. Verktøy fra [verktøykisten](topic:tool-chest) beholder sin egen stil. Markeringer som allerede er tegnet, endres ikke: velg dem og endre dem i {{ui:Properties}}.

## Lim inn

Hvor {{key:Mod+V}} legger det du kopierte:

- **{{ui:At the pointer}}** (standard): med pekeren på arket havner kopien sentrert der den peker. Med pekeren et annet sted havner den ved siden av originalen.
- **{{ui:Beside the copy}}**: alltid litt ned og til høyre for originalen, og et steg lenger for hver innliming.

Knappen {{ui:Paste}} og {{key:Mod+Shift+V}} ({{ui:Paste in place}}) fungerer likt med begge valgene. Se [Kopier, lim inn og dupliser](topic:select-and-edit#copy-paste-and-duplicate).

## Målinger

- **{{ui:Show lengths in}}** er enheten kalibreringsdialogen for målestokk foreslår først når du kalibrerer fra to punkter: fot og tommer, desimalfot, tommer, meter eller millimeter. Ark du allerede har kalibrert, beholder sin enhet. Se [Kalibrer et ark og mål](topic:calibrate-and-measure).
- **{{ui:Position on the sheet}}** velger tommer eller millimeter for pekerens posisjon nederst til venstre på skjermen. Det er en posisjon på papiret, ikke en virkelig avstand.

## Tilbakestill

{{ui:Reset MarkupCraft settings}} nederst i dialogen setter disse innstillingene, og innstillingene for paneler og verktøylinje under {{ui:General}}, tilbake til utgangspunktet. Navnet ditt beholdes, fordi det sier hvem du er, ikke hvordan du liker å jobbe, og fargene du valgte i hvert verktøys eget panel, beholdes også.
