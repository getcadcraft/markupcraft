---
title: Endre sidens egne linjer, bilder og tekst
summary: Flytt, endre størrelse på, endre farge på eller slett det PDF-en selv tegner, flytt punktene på en linje, erstatt et bilde, og endre ordene i en tekstlinje.
keywords: sideinnhold, grunninnhold, rediger PDF, rediger tegning, vektor, bane, figur, linje, bilde, erstatt bilde, tekst, ord, skrift, punkter, noder, flytt, endre størrelse, endre farge, slett, innholdsverktøy
from: 471d457e
---

Markeringer ligger oppå et ark. {{ui:Innhold}}-verktøyet virker på selve arket: linjene, bildene og tekstlinjene som PDF-en tegner. PDF-en på denne datamaskinen endres aldri: endringene er en del av kopien du lagrer.

## Velg hva som skal endres

1. Velg {{ui:Innhold}} i {{ui:Velg}}-gruppen, eller trykk {{key:B}}.
2. Under {{ui:Velg}} i {{ui:Egenskaper}} slår du {{ui:Former}}, {{ui:Bilder}} og {{ui:Tekst}} av eller på. Bare de typene som er på, kan velges, så du kan velge teksten i en travel tegning uten å fange linjene.
3. Klikk noe for å velge det. Shift+klikk legger til eller fjerner. Dra en boks over tomt papir for å velge flere: dra mot høyre tar det som er helt inni boksen, dra mot venstre tar det som boksen berører.

En figur inne i et avklippet område velges bare der den vises.

## Flytt, endre størrelse, endre farge, slett

- **Flytt:** dra et valgt objekt, eller trykk piltastene (hold Shift for større steg). Hold Shift mens du drar, for å flytte rett bort eller rett opp.
- **Endre størrelse:** dra i en av de åtte rutene rundt utvalget. Det vokser eller krymper fra motsatt side. Hold Shift for å beholde proporsjonene.
- **Endre farge:** for linjer og figurer, sett {{ui:Linjefarge}}, {{ui:Fyllfarge}} og {{ui:Linjebredde (pt)}} i {{ui:Egenskaper}}.
- **Slett:** trykk {{key:Delete}}, eller velg {{ui:Slett fra siden}}.
- **Angre:** hver endring er ett steg: {{key:Mod+Z}} tar den tilbake, {{key:Mod+Y}} legger den inn igjen.

{{ui:Sett tilbake som det var}} angrer alle endringer på de valgte objektene samtidig; {{ui:Sett denne siden tilbake som den var}} gjør det for hele siden.

## Kopier, klipp ut og lim inn sideinnhold

Velg linjer, bilder eller tekst med {{ui:Innhold}}-verktøyet, og deretter:

- {{key:Mod+C}} kopierer, {{key:Mod+X}} klipper ut (kopierer og fjerner dem fra siden), {{key:Mod+D}} legger en kopi ved siden av dem.
- {{key:Mod+V}} limer inn som sideinnhold, ved siden av originalen eller der pekeren er (slik [Innstillinger](topic:settings) beskriver); {{key:Mod+Shift+V}} limer inn på nøyaktig samme sted. Du kan lime inn på en annen side, i en annen åpen PDF eller i en annen MarkupCraft-fane i denne nettleseren.
- Menyen i {{ui:Rediger}}-gruppen og høyreklikkmenyen har de samme kommandoene.

En innliming beholder linjer som linjer, ord som ord i sin egen skrift, og bilder som bilder. Den er én enhet: flytt den, endre størrelsen med rutene, slett den, eller {{key:Mod+Z}} den bort. Den blir en del av siden i kopien du lagrer. Det du kopierte sist, markeringer eller sideinnhold, er det {{key:Mod+V}} limer inn.

Det kopien inneholder, klippes til boksen rundt utvalget: noe MarkupCraft ikke kan ta ut av kopien (se nedenfor), og som ligger innenfor den boksen, følger med.

## Flytt punktene på en linje

Dobbeltklikk en linje eller kurve (eller velg den og velg {{ui:Rediger punkter}}). Punktene vises som ruter, og kurvehåndtakene som sirkler. Dra et punkt eller et håndtak; et punkt tar med seg håndtakene ved siden av seg, slik at kurven beholder formen sin rundt det. Trykk {{key:Esc}}, eller klikk utenfor linjen, når du er ferdig.

Rektangler har ingen punkter å dra: endre størrelsen med rutene rundt dem.

## Erstatt et bilde

Velg et bilde og velg {{ui:Bytt ut bilde…}}, og velg deretter en PNG-, JPEG- eller SVG-fil (eller en PDF: dens første side). Det nye bildet fyller plassen til det gamle og beholder sine egne proporsjoner.

## Endre ordene i en tekstlinje

Dobbeltklikk en tekstlinje, skriv de nye ordene i {{ui:Ord}} og trykk {{key:Enter}}. Ordene skrives i linjens egen skrift og størrelse, og linjen beholder lengden sin, så teksten etter den flytter seg ikke.

:::note
De fleste PDF-er bærer bare de bokstavene de bruker fra hver skrift. Når du skriver en bokstav filens kopi av skriften ikke har, skriver MarkupCraft den bokstaven i Helvetica og sier fra om det. {{ui:Egenskaper}} viser hvilke bokstaver skriften i filen har.
:::

Tekst endres én linje om gangen; den flyter ikke over i neste linje.

## Det MarkupCraft lar være

- **Skannede sider** er ett bilde: du kan flytte, endre størrelse på, erstatte eller slette bildet, men innholdet i det kan ikke redigeres.
- **Krypterte og signerte PDF-er:** å endre siden ville bryte en signatur, så {{ui:Innhold}}-verktøyet sier fra om det og endrer ingenting. Markeringer fungerer fortsatt.
- **Avklippingsområder, objekter delt mellom to deler av sidens innhold, og fargeoverganger som fyller et helt område** står som de er; MarkupCraft forklarer hvorfor når du prøver.
- **Ord i en standardskrift som PDF-en ikke beskriver** (for eksempel en Times-skrift uten bokstavbredder i filen) kan ikke endres, fordi MarkupCraft ikke kan beholde linjens avstand. Linjen kan fortsatt flyttes.

## Legg markeringer inn i siden

Linjer, rektangler, ellipser, polylinjer, skyer og penneslag du tegnet som markeringer, kan bli en del av selve siden: velg dem og velg {{ui:Legg inn i siden}} i {{ui:Egenskaper}}. Tekst, stempler, bilder og gjennomsiktige farger forblir markeringer.
