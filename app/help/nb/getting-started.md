---
title: Kom i gang med MarkupCraft
summary: Åpne et tegningssett, legg ut din første sky og henvisning på et ark, og lagre en markert kopi.
keywords: start, første steg, åpne pdf, gjennomgang, markering, redline, rød penn, tegningssett, veiledning, hurtigstart
from: 0b1aae4e
---

MarkupCraft er laget for gjennomgang av tegninger: du åpner PDF-tegningssett, markerer dem med skyer, henvisninger, tekst, stempler og mål, følger statusen til hver kommentar og lagrer en kopi av PDF-en som enhver PDF-leser kan vise.

Det kjører i nettleseren din. PDF-ene dine åpnes på din egen datamaskin og **lastes aldri opp**. Lagring laster ned en ny kopi; originalfilen din endres ikke.

:::note
MarkupCraft er under utvikling. Hjelpen beskriver versjonen du kjører. Det den ikke kan ennå, står i [Hva som ikke er bygget ennå](topic:not-built-yet).
:::

## Dette trenger du

- En nylig versjon av Chrome, Edge, Firefox eller Safari på en Mac-, Windows- eller Linux-maskin, eller Safari eller Chrome på en iPad. Se [Nettlesere og datamaskiner](common:browsers).
- En eller flere PDF-filer. Et helt tegningssett kan være én PDF eller mange.
- En mus med hjul er mest behagelig. En pekeplate fungerer, og det gjør en berøringsskjerm også (se [Gjennomgang på en iPad eller berøringsskjerm](topic:review-on-a-tablet)).

## Din første gjennomgang i ti steg

1. Åpne MarkupCraft i nettleseren din. Midt på skjermen står det «Åpne et tegningssett».
2. Velg {{ui:Åpne PDF-er}} (eller {{ui:Åpne}} lengst til venstre i verktøylinjen, eller trykk {{key:Mod+O}}), velg én eller flere PDF-er og bekreft.
   Du kan også dra PDF-er fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren din}} og slippe dem på arkflaten.
   Første gang står det «Laster PDF-leseren…» i statuslinjen nederst. Deretter blir hver side et ark i listen {{ui:Ark}} til venstre, og det første arket fyller midten.
3. Klikk på et ark i listen for å vise det. Drei musehjulet over arket for å zoome inn der pekeren er.
4. Velg {{ui:Sky}} i gruppen {{ui:Revider}} i verktøylinjen (eller trykk {{key:C}}).
   Første gang du velger et tegneverktøy, ber MarkupCraft om navnet ditt. Skriv det og velg {{ui:Lagre}}. Hver markering registrerer det. (Mer i [Angi forfatternavnet ditt](topic:set-your-name).)
5. Dra en boks rundt området du vil flagge. En rød revisjonssky vises og er valgt.
6. Velg {{ui:Henvisning}} i gruppen {{ui:Merknad}} (eller trykk {{key:K}}). Trykk på det du peker på, dra til der teksten skal stå og slipp.
7. Skriv kommentaren din i boksen som vises. Klikk hvor som helst utenfor boksen (eller trykk {{key:Mod+Enter}}) for å fullføre.
8. Trykk {{key:Esc}} to ganger: én gang for å fjerne utvalget, én gang for å gå tilbake til verktøyet {{ui:Velg}}. Klikk på skyen. Fanen {{ui:Egenskaper}} til høyre viser hvem som laget den, når, og {{ui:Status}}.
9. Velg {{ui:Lagre}} i verktøylinjen (eller trykk {{key:Mod+S}}).
   Nettleseren laster ned en kopi med et navn som «A-Plans (marked up).pdf». Statuslinjen oppgir hvor mange markeringer som ble skrevet.
10. Åpne den kopien i en hvilken som helst PDF-leser for å kontrollere: skyen og henvisningen er der, som vanlige PDF-kommentarer med navnet ditt på.

For å fortsette å arbeide senere åpner du «(marked up)»-kopien i MarkupCraft. Markeringene dine kommer tilbake redigerbare, med statuser, svar og avviksnumre.

## Tilkoblet og frakoblet

:::online
Du er tilkoblet. MarkupCraft laster PDF-leseren sin første gang du åpner en PDF, og PDF-skriveren sin første gang du lagrer. For å kunne arbeide uten tilkobling senere (på befaring, på et fly) velger du {{ui:Lagre for frakoblet bruk}} i linjen øverst nå og venter på «Klar frakoblet». Kopien inneholder PDF-leseren og PDF-skriveren, slik at det deretter fungerer frakoblet å åpne og lagre PDF-er. Se [Arbeide frakoblet](common:offline).
:::

:::offline
Du er frakoblet. Hvis linjen øverst sier «Klar frakoblet», ble MarkupCraft lagret for frakoblet bruk i denne nettleseren, og alt fungerer: åpne, markere, måle, lagre. Hvis det ikke ble det, bruk det som allerede er lastet i denne fanen og ikke last siden på nytt før du er tilkoblet igjen. Se [Arbeide frakoblet](common:offline).
:::

## Hva appen husker, og hva den ikke husker

- **Markeringene dine ligger i PDF-en du lagrer.** Ingenting lagres på en server. Appen lagrer ikke PDF-en selv, men holder en gjenopprettingskopi i denne nettleseren til du gjør det. Lagre før du lukker fanen; nettleseren spør først hvis du prøver å forlate siden med ulagrede markeringer (unntatt på en iPad, se [Gjennomgang på en iPad eller berøringsskjerm](topic:review-on-a-tablet)).
- **Navnet ditt, verktøystilene dine og verktøykassen din** blir værende i denne nettleseren på denne datamaskinen. En annen nettleser eller datamaskin starter på nytt, og hvis du tømmer nettleserens nettstedsdata, forsvinner de. Se [Hva som blir i denne nettleseren](topic:browser-storage).
- Lagring i skyen og gjennomgangsøkter som deles mellom flere personer er ikke tilgjengelig ennå.

## Hvor du går videre

- [En omvisning på skjermen](topic:workspace)
- [Marker et ark](topic:mark-up-a-sheet)
- [Kalibrer et ark og mål](topic:calibrate-and-measure)
- [Hvis du kommer fra annen markeringsprogramvare](topic:coming-from) hvis du allerede gjennomgår tegninger i et annet program.
