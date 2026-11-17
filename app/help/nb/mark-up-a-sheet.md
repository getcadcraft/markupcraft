---
title: Marker et ark
summary: Tegn revisjonssky, henvisninger, tekstbokser, piler, figurer, penn-strøk og utheving, og sett farge og linje før eller etter.
keywords: markering, rødpenn, redline, sky, revisjonssky, henvisning, peker, tekstboks, pil, linje, rektangel, ellipse, sirkel, polylinje, mangekant, penn, frihånd, blekk, utheving, farge, linjebredde
from: 9d6de0ac
---

Alle verktøy virker på samme måte: velg det, tegn på arket, og den nye markeringen velges, slik at du ser den i {{ui:Egenskaper}}. Verktøyet forblir på til neste. Statuslinjen forteller alltid hva verktøyet venter på neste.

:::touch
På en berøringsskjerm bruker du ett finger til å tegne. Et annet finger avbryter det første og klyper eller panorerer i stedet, så du aldri setter et merke ved et uhell når du zoomer. Mer i [Gjennomgang på en iPad eller berøringsskjerm](topic:review-on-a-tablet).
:::

## Revisjonssky

**Boksky:** velg {{ui:Sky}} ({{key:C}}) og dra en boks. Hold {{key:Shift}} for å gjøre den kvadratisk.

**Fri sky** rundt en uregelmessig form:

1. Velg {{ui:Fri sky}} ({{key:Shift+C}}).
2. Klikk på hvert hjørne av området.
3. Fullfør med et dobbeltklikk, {{key:Enter}} eller et høyreklikk. På berøring: dobbelttrykk.

Mens du klikker punkter, fjerner {{key:Backspace}} det siste punktet, og {{key:Esc}} avbryter hele figuren. Hold {{key:Shift}} for å holde neste side på et multiplum av 45°. En fri sky trenger minst tre punkter.

Buene bues alltid utover, og størrelsen følger linjebredden: en tykkere linje gir større buer.

## Henvisninger

En henvisning er en tekstboks med en peker som peker på noe.

1. Velg {{ui:Henvisning}} ({{key:K}}).
2. Trykk på punktet du vil henvise til, og dra dit teksten skal stå. Slipp.
   Hvis du bare klikker uten å dra, plasseres boksen opp og til høyre for punktet.
3. Skriv teksten. Boksen vokser nedover når linjene brytes.
4. Klikk et hvilket som helst sted utenfor boksen, eller trykk {{key:Mod+Enter}}, for å fullføre. {{key:Esc}} kaster bort henvisningen.

Hvis du fullfører uten å skrive noe, legges ingen henvisning til («Ingenting er skrevet, så ingen henvisning ble lagt til.»).

Etter at den er tegnet, velg den for å flytte boksen, dra spissen av pekeren eller bøyningen (de to diamantformede håndtakene), eller endre størrelsen på boksen.

## Tekstbokser

1. Velg {{ui:Tekst}} ({{key:T}}).
2. Klikk der teksten starter (du får en boks med en passende bredde), eller dra en boks i størrelsen du vil ha.
3. Skriv, og klikk utenfor eller trykk {{key:Mod+Enter}}.

Tekst har ingen ramme som standard. For å få en ramme, øk {{ui:Linjebredde}} i {{ui:Egenskaper}}. For å få en bakgrunn, kryss av for {{ui:Fyll}}.

For å endre ordene senere: med {{ui:Velg}} på, dobbeltklikk på teksten, eller velg den og trykk {{key:Enter}}, eller velg {{ui:Rediger på arket}} i {{ui:Egenskaper}}. Du kan også redigere den i boksen {{ui:Tekst}} i {{ui:Egenskaper}}.

## Piler og linjer

1. Velg {{ui:Pil}} ({{key:A}}) eller {{ui:Linje}} ({{key:L}}).
2. Dra fra start til slutt. Eller klikk start, slipp, og klikk slutt.
3. Hold {{key:Shift}} for å holde den på et multiplum av 45°.

Pilspissen er i enden du avsluttet på.

## Rektangler, ellipser, polylinjer og mangekanter

- {{ui:Rektangel}} ({{key:R}}) og {{ui:Ellipse}} ({{key:E}}): dra en boks. {{key:Shift}} gjør den til en kvadrat eller en sirkel. Et klikk uten å dra tegner ingenting, og statuslinjen ber deg dra.
- {{ui:Polylinje}} ({{key:Y}}) og {{ui:Mangekant}} ({{key:G}}): klikk punkter; fullfør med dobbeltklikk, {{key:Enter}} eller høyreklikk (dobbelttrykk på berøring). {{key:Backspace}} fjerner siste punkt. En mangekant lukker seg selv og trenger tre punkter; en polylinje trenger to.

## Penn og utheving

- {{ui:Penn}} ({{key:P}}): dra for å tegne frihånd. Streken glattes litt når du slipper.
- {{ui:Utheving}} ({{key:I}}): det samme, med en bred, gjennomsiktig gul strek som farger tegningen under i stedet for å dekke den.
- Hold {{key:Shift}} mens du tegner for å få én rett strek fra der du startet.

Utheving er en frihåndsstrek. Den fester seg ikke til tekst i PDF-en.

## Farge, linje og fyll

To måter:

- **Før du tegner:** velg verktøyet. Når ingenting er valgt, viser {{ui:Egenskaper}} innstillingene for «<verktøy>-verktøy»: {{ui:Farge}}, {{ui:Linjebredde}} (i punkter), {{ui:Fyll}} og {{ui:Fyllopasitet}} for lukkede figurer, {{ui:Opasitet}}, og {{ui:Tekststørrelse}} for tekst. Hver ny markering av den typen bruker dem, og MarkupCraft husker dem i denne nettleseren.
- **Etter at du har tegnet:** velg én eller flere markeringer og endre de samme innstillingene under «Stil». Når flere er valgt, gjelder endringen for alle i ett steg.

Standardene: røde markeringer, en gul utheving, blå mål, oransje tellinger, og stempler farget etter betydning.

Lagrede utseender du bruker hver dag, hører hjemme i verktøysamlingen: se [Verktøysamlingen](topic:tool-chest).

## Emne og kommentar

Hver markering har også et {{ui:Emne}} (en kort merkelapp som «Sky» eller «RFI», vist i markeringslisten og i andre PDF-visere) og en {{ui:Kommentar}} (lengre notater). Fyll dem inn i {{ui:Egenskaper}}. For en samtale om en markering, bruk svar: se [Statuser og svar](topic:statuses-and-replies).

## Neste

- [Velg, flytt og endre markeringer](topic:select-and-edit)
- [Stempler og notater](topic:stamps-and-notes)
- [Alle markeringstyper](topic:markup-types)
