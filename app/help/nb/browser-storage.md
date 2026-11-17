---
title: Hva som lagres i denne nettleseren
summary: Navnet ditt, innstillinger, verktøykassen og de siste markeringene du kopierte, lagres i denne nettleseren på denne datamaskinen. Markeringene dine lagres bare i PDF-filene du lagrer.
keywords: lokal lagring, nettleserlagring, innstillinger, valg, profil, slett data, privat vindu, inkognito, sikkerhetskopi, en annen datamaskin, synkronisering, tilbakestill
from: ab6e3c81
---

MarkupCraft har ingen konto og ingen lagring på server. Noen få små ting lagres i nettleserens lagring for dette nettstedet, og alt annet ligger i filene dine.

## Hva som lagres i nettleseren

| Hva | Angis der | Lagres som |
|---|---|---|
| Forfatternavnet ditt | Navneknappen i statuslinjen, eller {{ui:Innstillinger}} | Ett navn |
| MarkupCraft-innstillinger | {{ui:Innstillinger}}, fanen {{ui:MarkupCraft}}: farge og linjevekt for nye markeringer, hvor liming legger kopier, enheter (se [MarkupCraft-innstillinger](topic:settings)) | Ett sett |
| Verktøyinnstillinger | {{ui:Egenskaper}} mens et tegneverktøy er på: farge, linje, fyll, opasitet og tekststørrelse per verktøy, det valgte stempelet, navnet på telle-gruppen | Ett sett |
| Verktøykassen | Fanen {{ui:Verktøy}} | Opptil 500 verktøy |
| Det du kopierte sist | {{ui:Kopier}} eller {{ui:Klipp ut}} | De kopierte markeringene, slik at en annen fane kan lime dem inn; erstattes av neste kopiering |
| Stempelbilde og signatur | {{ui:Bilde…}} og {{ui:Min signatur…}} i stempellisten | Siste bilde og signaturen din |
| Gjenopprettingskopier | Lagres for deg mens en PDF har ulagrede markeringer | PDF-en og markeringene, fjernes når du lagrer, lukker eller forkaster den; beholdes i opptil 30 dager |

## Hva det betyr

- **Per nettleser, per datamaskin.** Chrome og Firefox på samme datamaskin har hver sin. Den bærbare og kontorstasjonen har hver sin. Ingenting synkroniseres mellom dem, selv om du logger inn i nettleseren.
- **Private vinduer og inkognitovinduer** starter tomme og glemmer alt når de lukkes.
- **Sletting av nettstedsdata fjerner dem.** Å slette informasjonskapsler og nettstedsdata for dette nettstedet, eller for alle nettsteder, i nettleserens innstillinger fjerner navnet, innstillingene og verktøykassen din. Noen opprydningsverktøy og noen firmaregler gjør dette automatisk.
- **Ingenting lastes opp.** Disse verdiene forlater aldri datamaskinen, bortsett fra navnet ditt i PDF-ene du lagrer. Gjenopprettingskopier blir også i denne nettleseren.

:::safari
Safari kan slette et nettsteds lagrede data etter noen uker uten besøk. Åpne MarkupCraft av og til, og behold en eksportert verktøykasse.
:::

## Hva som ikke lagres i nettleseren

- **Markeringene dine, for godt.** De hører hjemme i PDF-en «(marked up)» du lagrer. Gjenopprettingskopien er et sikkerhetsnett ved krasj eller en lukket fane, ikke et sted å oppbevare arbeidet: den fjernes når du lagrer, og sletting av nettstedsdata fjerner den. Se [Gjenopprett arbeidet ditt](common:recover).
- **Åpne filer.** Hver gang du åpner MarkupCraft, må du åpne PDF-ene igjen.
- **Arket du sto på, zoom, filtre og angrehistorikk.** Disse varer til du lukker settet eller fanen.

## Sikkerhetskopier og flytt oppsettet

- **Verktøykasse:** {{ui:Verktøy}}, deretter {{ui:Eksporter}}. På den andre nettleseren eller datamaskinen: {{ui:Verktøy}}, deretter {{ui:Importer}}.
- **Navn:** skriv det inn på nytt i den andre nettleseren (klikk navneknappen i statuslinjen).
- **Verktøyinnstillinger:** still dem inn på nytt, eller lagre hver stilede markering som et verktøy, slik at den følger med verktøykassen.

## Start på nytt

For å tilbakestille alt, slett dette nettstedets data i nettleserens innstillinger. Navnet, innstillingene og verktøykassen forsvinner; de seks standardverktøyene kommer tilbake.

## Frakoblet kopi

{{ui:Lagre for frakoblet bruk}} i linjen øverst lagrer appens egne filer (med PDF-leseren og -skriveren, omtrent 6 MB) i nettleseren også, atskilt fra disse innstillingene. Sletting av nettstedsdata fjerner denne kopien også. Klikk «Klar til frakoblet bruk» og velg «Fjern frakoblet kopi» for å fjerne bare den. Se [Arbeide frakoblet](common:offline).

Skylagring og synkronisering mellom datamaskiner er ikke bygget ennå.
