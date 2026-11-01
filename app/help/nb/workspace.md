---
title: En omvisning på skjermen
summary: Verktøylinjen, arklisten, arkflaten, de fem panelene til høyre og statuslinjen, med navnene slik de står på skjermen.
keywords: skjerm, oppsett, verktøylinje, paneler, sidefelt, miniatyrbilder, egenskaper, statuslinje, grensesnitt, fullskjerm, tema, mørk modus
from: 18d82de6
---

MarkupCraft fyller nettleservinduet. Ovenfra og ned og fra venstre mot høyre:

## Linjen helt øverst

Den tynne linjen over alt annet tilhører CadCraft-familien, ikke MarkupCraft selv. Den har:

- appnavnet og hvilken versjon du kjører,
- {{ui:Om MarkupCraft}}, som åpner appens side på nettstedet,
- {{ui:Hjelp}}, som åpner denne hjelpen i et sidepanel (eller trykk {{key:F1}}),
- {{ui:Lagre for frakoblet bruk}}, som beholder MarkupCraft, PDF-leseren og PDF-skriveren og denne hjelpen i nettleseren slik at den åpnes uten tilkobling; den sier deretter «Klar frakoblet» (se [Arbeide frakoblet](common:offline)),
- skjermmodusknappen ({{ui:Fullskjerm}}), og
- {{ui:Innstillinger}} (eller {{key:Mod+,}}), med fanen {{ui:MarkupCraft}} for denne appens egne innstillinger og {{ui:Generelt}} for dem alle CadCraft-appene deler (se [Innstillinger for MarkupCraft](topic:settings)), og
- {{ui:Papir}} og {{ui:Modell}}, det lyse og det mørke temaet. I {{ui:Modell}} tegnes arkene lyst på mørkt; markeringene dine beholder sine egne farger.

Skjermmodusknappen, eller {{key:Ctrl+Shift+F}}, går gjennom tre moduser: normal, fullskjerm, og fullskjerm med linjene skjult. Med linjene skjult flytter du pekeren til øverste kant av skjermen (eller trykker der), så glir de tilbake. Denne hurtigtasten bruker Ctrl-tasten på alle datamaskiner, også Mac.

:::note
I fullskjerm får {{key:Esc}} også nettleseren til å forlate fullskjerm. Hvis du bare mente å avbryte en tegning, trykk {{key:Ctrl+Shift+F}} igjen for å gå tilbake til fullskjerm.
:::

## Verktøylinjen

Under linjen øverst er verktøyene gruppert og merket:

| Gruppe | Knapper |
|---|---|
| Fil | {{ui:Åpne}}, {{ui:Lagre}}, {{ui:Lukk}} |
| Velg | {{ui:Velg}}, {{ui:Panorer}} |
| Tegn | {{ui:Penn}}, {{ui:Utheving}}, {{ui:Linje}}, {{ui:Pil}}, {{ui:Rektangel}}, {{ui:Ellipse}}, {{ui:Polylinje}}, {{ui:Mangekant}} |
| Revider | {{ui:Sky}}, {{ui:Fri sky}} |
| Merknad | {{ui:Henvisning}}, {{ui:Tekst}}, {{ui:Notat}}, {{ui:Stempel}} |
| Mål | {{ui:Kalibrer}}, {{ui:Lengde}}, {{ui:Areal}}, {{ui:Tell}} |
| Rediger | {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}}, og {{ui:Mer}}: {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}}, {{ui:Fjern utvalg}} |

Verktøyet du bruker ser nedtrykket ut. Hold pekeren over en knapp for å se tasten (for eksempel «Rektangel (R)»); menyen {{ui:Mer}} lister tasten til hver kommando ved siden av den. Knapper som ikke kan brukes akkurat nå, er nedtonet: {{ui:Kopier}} til du velger en markering, {{ui:Lim inn}} til noe er kopiert. En liten prikk etter {{ui:Lagre}} betyr at noen markeringer ikke er lagret ennå. Den fullstendige tastelisten står i [Tastatur og mus](topic:keyboard).

Et verktøy forblir på etter at du har tegnet med det, slik at du kan tegne flere skyer på rad. Trykk {{key:Esc}} (to ganger hvis den nye markeringen fortsatt er valgt) eller {{key:V}} for å gå tilbake til {{ui:Velg}}.

## Arklisten (til venstre)

{{ui:Ark}} lister hver side i hver åpen PDF. Hver rad viser et lite bilde av arket, navnet, arknummeret eller filen og siden, og hvor mange markeringer det har. Tallet etter overskriften er antall ark.

- Klikk på en rad for å vise det arket.
- Skriv i {{ui:Søk i ark}} for å filtrere etter arknavn, arknummer eller filnavn. Trykk {{key:Enter}} for å åpne det første treffet.

Arknavn hentes fra PDF-en når den har dem. Se [Åpne et tegningssett og bytte mellom ark](topic:open-a-plan-set).

## Arkflaten (midten)

Arket du arbeider på. Før noe er åpnet, viser den «Åpne et tegningssett» med en knapp {{ui:Åpne PDF-er}}. Slipp PDF-er hvor som helst her for å åpne dem.

Under arket har en smal linje:

- pilene for forrige og neste ark, og «3 av 12: A-101 — Plan 1. etasje» (hold pekeren over den for å se filen og siden),
- zoom ut, zoomboksen (skriv en prosent og trykk {{key:Enter}}; 100 % er faktisk størrelse på en vanlig skjerm), zoom inn,
- {{ui:Tilpass side}} og {{ui:Tilpass bredde}}.

Hvert ark husker sin egen zoom så lenge settet er åpent.

Når du sammenligner to ark, vises en tegnforklaring her: «Bare på det gamle arket», «Bare på det nye arket» og «På begge». Se [Sammenlign to revisjoner](topic:compare-revisions).

## Panelene (til høyre)

Fem faner:

| Fane | Hva den viser |
|---|---|
| {{ui:Egenskaper}} | Den valgte markeringen: forfatter, datoer, målte verdier, status, emne, tekst, kommentar, stil, svarene og avvikspunktet. Med et tegneverktøy på og ingenting valgt, innstillingene nye markeringer vil bruke. Med ingenting valgt og {{ui:Velg}} på, arket: nummer, tittel, hvor navnet ble lest fra, papirstørrelse, målestokk og {{ui:Gi arket nytt navn}}. |
| {{ui:Markeringer}} | Alle markeringer i det åpne settet, med filtre, og eksport til {{ui:CSV}} og {{ui:BCF}}. Se [Markeringslisten](topic:markups-list-and-export). |
| {{ui:Avviksliste}} | Nummererte avviksposter med ansvarlig, frist og status. Se [Lag en avviksliste](topic:punch-list). |
| {{ui:Verktøy}} | Verktøykassen: lagrede verktøy med stil. Se [Verktøykassen](topic:tool-chest). |
| {{ui:Sammenlign}} | Legg to ark over hverandre. Se [Sammenlign to revisjoner](topic:compare-revisions). |

## Statuslinjen (nederst)

- Til venstre, hvor pekeren er på arket, i tommer (eller millimeter, i [Innstillinger](topic:settings)) på papiret.
- I midten, meldinger: hva et verktøy venter på neste, hva som nettopp er lagret, hvorfor noe ble avvist. **Les den når noe ikke skjer.**
- Arkets målestokkknapp («Ikke kalibrert», eller målestokken). Klikk på den for å angi målestokken. Se [Kalibrer et ark og mål](topic:calibrate-and-measure).
- Navnet ditt («Angi navnet ditt» til du oppgir et). Klikk på det for å endre det.

## På en liten skjerm

Under omtrent 1180 piksler bredde blir panelene smalere og arkbildene krymper. På en skjerm på telefonstørrelse stables delene: verktøylinjen (rull den sidelengs), arket, statuslinjen, panelene, og så arklisten nederst. Et nettbrett i liggende format beholder hele oppsettet.
