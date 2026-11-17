---
title: MarkupCraft-indstillinger
summary: Skift dit navn, farven og linjetykkelsen på nye markeringer, hvor indsæt lægger kopier, og enhederne for længder og arkets position.
keywords: indstillinger, præferencer, valgmuligheder, navn, forfatter, farve, standardfarve, linjevægt, linjetykkelse, tyk, tynd, indsæt, indsæt ved markøren, forskydning, enheder, metrisk, millimeter, tommer, fod, nulstil
from: 63ad97fd
---

Åbn {{ui:Indstillinger}} med tandhjulet i linjen øverst, eller tryk {{key:Mod+,}}. Den første fane, {{ui:MarkupCraft}}, rummer indstillinger, der hører til denne app; {{ui:Generelt}} rummer dem, alle CadCraft-apps deler (tema, værktøjslinje, paneler). MarkupCraft-indstillingerne findes kun i appen: du ændrer dem her, og denne browser husker dem (se [Hvad der bliver i denne browser](topic:browser-storage)). En ændring træder i kraft med det samme; der er intet at gemme.

## Dit navn

{{ui:Navn på markeringer}} er det navn, hver ny markering og hvert nyt svar bærer, og som gemte PDF'er viser som kommentarens forfatter. Det er det samme navn som knappen i den højre ende af statuslinjen; ændr det det ene sted, og det ændres begge steder. Markeringer, der allerede er tegnet, beholder det navn, de blev lavet med. Se [Angiv dit forfatternavn](topic:set-your-name).

## Nye markeringer

- **{{ui:Markeringsfarve}}** er den farve, nye penne, linjer, pile, rektangler, ellipser, polylinjer, polygoner, skyer, henvisninger og tekst starter med (rød i begyndelsen). Fremhævere, noter, stempler, længder, arealer og tællinger beholder deres egne farver, fordi deres farver siger, hvad de er.
- **{{ui:Tynde linjer}}, {{ui:Normal}}, {{ui:Tykke linjer}}** gør linjerne på de samme markeringer halvt så tykke, eller halvt så meget tykkere, end de ellers er.

En farve eller linjetykkelse, du vælger for ét værktøj i {{ui:Egenskaber}} (med værktøjet tændt og intet valgt), vinder over disse. Værktøjer fra [værktøjskassen](topic:tool-chest) beholder deres egen stil. Markeringer, der allerede er tegnet, ændres ikke: vælg dem og ændr dem i {{ui:Egenskaber}}.

## Indsæt

Hvor {{key:Mod+V}} lægger det, du har kopieret:

- **{{ui:Ved markøren}}** (standard): med markøren på arket lander kopien centreret, hvor den peger. Med markøren andetsteds lander den ved siden af originalen.
- **{{ui:Ved siden af kopien}}**: altid lidt nedad og til højre for originalen, et skridt længere med hver indsættelse.

Knappen {{ui:Sæt ind}} og {{key:Mod+Shift+V}} ({{ui:Sæt ind på samme sted}}) virker på samme måde med begge valg. Se [Kopiér, sæt ind og duplikér](topic:select-and-edit#copy-paste-and-duplicate).

## Målinger

- **{{ui:Vis længder i}}** er den enhed, dialogen for arkets målestok tilbyder først, når du kalibrerer ud fra to punkter: fod og tommer, decimalfod, tommer, meter eller millimeter. Ark, du allerede har kalibreret, beholder deres enhed. Se [Kalibrér et ark og mål](topic:calibrate-and-measure).
- **{{ui:Position på arket}}** vælger tommer eller millimeter for markørens position nederst til venstre på skærmen. Det er en position på papiret, ikke en reel afstand.

## Nulstil

{{ui:Nulstil MarkupCraft-indstillinger}} nederst i dialogen sætter disse indstillinger, og paneler- og værktøjslinje-indstillingerne på {{ui:Generelt}}, tilbage til, hvordan de starter. Dit navn beholdes, da det siger, hvem du er snarere end hvordan du foretrækker at arbejde, og de farver, du valgte i hvert værktøjs eget panel, beholdes også.
