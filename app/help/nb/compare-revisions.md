---
title: Sammenlign to revisjoner
summary: Legg en gammel og en ny utgave av et ark over hverandre i to farger, rett dem inn etter to punkter, og sky det som er endret.
keywords: sammenlign, overlegg, overleggsider, revisjon, diff, forskjeller, endringer, gammelt nytt, rett inn, etterkontroll, utgave, bulletin
from: 62f5d1c5
---

Sammenlign legger to ark over hverandre. Linjer bare på det gamle arket vises i rødt, linjer bare på det nye arket i blått, og linjer på begge i en dempet grå. Fargene er forklart i tegnforklaringen under arket: «Bare på det gamle arket», «Bare på det nye arket» og «På begge».

## Sammenlign to ark

1. Åpne begge utgavene. De kan være sider i samme PDF eller i forskjellige PDF-er. Åpne dem sammen som ett sett (se [Arbeid med flere filer samtidig](topic:several-files)).
2. Velg fanen {{ui:Sammenlign}} til høyre.
3. Velg {{ui:Gammelt ark}} og {{ui:Nytt ark}}. Det nye arket starter som det du står på. Når flere filer er åpne, vises hvert arks filnavn etter navnet.
4. Velg {{ui:Sammenlign}}.

Resultat: MarkupCraft viser det nye arket med det gamle blandet inn, tegnforklaringen vises, og fanen sier «Sammenligner <gammelt> (gammelt) med <nytt> (nytt). Markeringer på det nye arket forblir redigerbare.»

## Gå mellom gammelt og nytt

Dra glidebryteren {{ui:Gammelt og nytt}}. Helt til venstre vises bare det gamle arket, helt til høyre bare det nye, og i midten vises begge. Å flytte den frem og tilbake er ofte den raskeste måten å se en liten endring på.

## Rett arkene inn

Hvis de to utgavene ble plottet med ulik marg, størrelse eller rotasjon, ser alt endret ut. Slik fikser du det:

**Etter to punkter (best):**

1. Velg {{ui:Rett inn etter to punkter}}. Visningen viser bare det gamle arket.
2. Klikk et skarpt trekk du kan finne på begge arkene, for eksempel et skjæringspunkt i søylenettet. Fanen teller trinnene («1 av 4»).
3. Klikk et andre trekk, langt fra det første, for eksempel det motsatte hjørnet i nettet.
4. Visningen bytter til det nye arket. Klikk det første trekket igjen.
5. Klikk det andre trekket igjen.

Resultat: «Innrettet: gammelt ark skalert 100.00%, rotert 0.00°. Flytt for finjustering.» Det gamle arket flyttes, skaleres og roteres for å passe. {{key:Esc}} avbryter mens du velger. Zoom inn på hvert trekk før du klikker, for en presis tilpasning.

**Ved forskyvning:** bruk de fire pilknappene under «Rett inn» for å flytte det gamle arket. Velg steget (0.25, 1, 5 eller 20 pt; 72 pt er én tomme på papiret). Fanen sier hvor langt det har flyttet seg.

{{ui:Tilbakestill}} fjerner innrettingen og forskyvningene.

## Bare endrede linjer

Under innrettingsknappene velger du {{ui:Endrede linjer}} i stedet for {{ui:Bildeoverlegg}}. MarkupCraft sammenligner da de to arkenes egne linjer, ikke bildene deres: det nye arket vises som det er, med linjene som bare finnes på det gamle arket i rødt, og linjene bare på det nye i blått. En linje som bare ble kortere, viser bare den manglende delen. Rett inn arkene først (se over). Sammenligningen bruker innrettingen, så et ark som bare var forskjøvet, viser ingen endringer. Statuslinjen sier hvor mye som er endret.

Dette fungerer for PDF-er plottet fra CAD, der tegningen består av linjer. Skannede ark har ingen linjer å sammenligne: bruk bildeoverlegget for dem. Tekst satt i en skrifttype (ikke tegnet som streker) sammenlignes ikke.

## Marker endringene

Mens du sammenligner, er du på det nye arket, og alle verktøy virker. Tegn skyer rundt endringene etter hvert som du finner dem. De tilhører det nye arket og blir værende når du slutter å sammenligne.

{{ui:Sky rundt endringene}} gjør dette for deg: den grupperer de endrede linjene som ligger nær hverandre, og tegner en revisjonssky rundt hver gruppe på det nye arket, med «Endret siden <gammelt ark>» som kommentar. Én {{key:Mod+Z}} fjerner dem alle. Slett de du ikke trenger.

## Sammenlign et helt sett

Når den nye utgaven kommer som en egen PDF, åpner du begge PDF-ene og åpner {{ui:Sammenlign to sett}} i fanen {{ui:Sammenlign}}. Velg den gamle filen og den nye filen, og velg {{ui:Sammenlign settene}}. Ark pares etter nummeret (som i [utskifting av ark](topic:slip-sheet-a-revised-set)), sammenlignes etter linjene, og listes med mest endret først. Velg et ark i listen for å sammenligne det paret med {{ui:Endrede linjer}}.

{{ui:Sky rundt alle endringer}} skyer hver gruppe med endrede linjer på hvert endret ark, i ett trinn du kan angre. Settsammenligningen rettes ikke inn først, så et ark som ble forskjøvet på siden, vises som endret. Sammenlign det paret alene og bruk {{ui:Rett inn etter to punkter}}.

## Slutt å sammenligne

Velg {{ui:Stopp sammenligning}}, eller gå til et annet ark. Innrettingen huskes for samme par av ark til du lukker settet.

## Greit å vite

- Sammenligning virker på det som er tegnet, piksel for piksel. Den vet ikke at en linje er flyttet. Den viser den gamle posisjonen i én farge og den nye i den andre.
- Tekst som er flyttet om, en endret dato i tegningshodet eller en annen plottstil vises også som endringer.
- Et skannet ark sammenlignet med et plottet er støyende: skanning gjør linjer utydelige og forskyver dem.
- Sammenligning av tekst satt i en skrifttype, og en liste over hva som er endret, er ikke bygget ennå.
