---
title: Markér et ark
summary: Tegn revisionssky, henvisninger, tekstbokse, pile, figurer, pennestreger og fremhævninger, og indstil deres farve og linje før eller efter.
keywords: markering, rødpen, revision, sky, revisionssky, henvisning, henvisningslinje, tekstboks, pil, linje, rektangel, ellipse, cirkel, polylinje, polygon, pen, frihånd, blæk, fremhæver, farve, linjetykkelse
from: 9d6de0ac
---

Alle værktøjer virker på samme måde: vælg det, tegn på arket, og den nye markering bliver valgt, så du kan se den i {{ui:Egenskaber}}. Værktøjet forbliver aktivt til den næste. Statuslinjen siger altid, hvad værktøjet forventer næste gang.

:::touch
På en touchskærm bruger du én finger til at tegne. En anden finger annullerer det første fingeret begyndte og knibe eller panorerer i stedet, så du aldrig efterlader et mærke ved et uheld, mens du zoomer. Mere i [Gennemgang på en iPad eller touchskærm](topic:review-on-a-tablet).
:::

## Revisionssky

**Boksesky:** vælg {{ui:Sky}} ({{key:C}}) og træk en boks. Hold {{key:Shift}} for at gøre den kvadratisk.

**Fri sky** rundt om en uregelmæssig form:

1. Vælg {{ui:Fri sky}} ({{key:Shift+C}}).
2. Klik på hvert hjørne af området.
3. Afslut med et dobbeltklik, {{key:Enter}} eller et højreklik. På touch: dobbelttryk.

Mens du klikker punkter, fjerner {{key:Backspace}} det sidste punkt, og {{key:Esc}} annullerer hele formen. Hold {{key:Shift}} for at holde den næste side i et multiplum af 45°. En fri sky kræver mindst tre punkter.

Bølgerne buer altid udad, og deres størrelse følger linjetykkelsen: en tykkere linje giver større buer.

## Henvisninger

En henvisning er en tekstboks med en henvisningslinje, der peger på noget.

1. Vælg {{ui:Henvisning}} ({{key:K}}).
2. Tryk på det punkt du vil henvise til, og træk hen til hvor teksten skal stå. Slip.
   Klikker du blot uden at trække, placeres boksen op og til højre for punktet.
3. Skriv teksten. Boksen vokser nedad, når linjerne brydes.
4. Klik et sted uden for boksen, eller tryk {{key:Mod+Enter}}, for at afslutte. {{key:Esc}} kasserer henvisningen.

Afslutter du uden at skrive noget, tilføjes ingen henvisning (»Intet skrevet, så ingen henvisning blev tilføjet.«).

Når den er tegnet, vælg den for at flytte boksen, trække henvisningslinjens spids eller dens knæk (de to diamanthåndtag), eller ændre boksens størrelse.

## Tekstbokse

1. Vælg {{ui:Tekst}} ({{key:T}}).
2. Klik hvor teksten starter (du får en boks med en fornuftig bredde), eller træk en boks i den størrelse du vil have.
3. Skriv, og klik derefter udenfor eller tryk {{key:Mod+Enter}}.

Tekst har som standard ingen kant. Vil du give den en, hæv {{ui:Linjetykkelse}} i {{ui:Egenskaber}}. Vil du give den en baggrund, sæt flueben i {{ui:Udfyldning}}.

Vil du ændre teksten senere: med {{ui:Vælg}} aktiveret, dobbeltklik på teksten, eller vælg den og tryk {{key:Enter}}, eller vælg {{ui:Rediger på arket}} i {{ui:Egenskaber}}. Du kan også redigere den i feltet {{ui:Tekst}} i {{ui:Egenskaber}}.

## Pile og linjer

1. Vælg {{ui:Pil}} ({{key:A}}) eller {{ui:Linje}} ({{key:L}}).
2. Træk fra start til slut. Eller klik på start, slip, og klik på slut.
3. Hold {{key:Shift}} for at holde den i et multiplum af 45°.

Pilespidsen sidder i den ende, hvor du afsluttede.

## Rektangler, ellipser, polylinjer og polygoner

- {{ui:Rektangel}} ({{key:R}}) og {{ui:Ellipse}} ({{key:E}}): træk en boks. {{key:Shift}} laver en firkant eller en cirkel. Et klik uden at trække tegner intet, og statuslinjen beder dig om at trække.
- {{ui:Polylinje}} ({{key:Y}}) og {{ui:Polygon}} ({{key:G}}): klik punkter; afslut med et dobbeltklik, {{key:Enter}} eller et højreklik (dobbelttryk på touch). {{key:Backspace}} fjerner det sidste punkt. Et polygon lukker sig selv og kræver tre punkter; en polylinje kræver to.

## Pen og fremhæver

- {{ui:Pen}} ({{key:P}}): træk for at tegne frihåndsstreger. Strøget udjævnes lidt, når du slipper.
- {{ui:Fremhæv}} ({{key:I}}): det samme, med et bredt, gennemsigtigt gult strøg, der farver tegningen under det i stedet for at dække den.
- Hold {{key:Shift}} nede, mens du tegner, for at få ét lige strøg fra startpunktet.

Fremhæveren er et frihåndsstrøg. Den fastgør sig ikke til tekst i PDF'en.

## Farve, linje og udfyldning

Der er to måder:

- **Før du tegner:** vælg værktøjet. Uden valg viser {{ui:Egenskaber}} indstillinger for »<værktøj>-værktøj«: {{ui:Farve}}, {{ui:Linjetykkelse}} (i punkter), {{ui:Udfyldning}} og {{ui:Udfyldningens dækning}} for lukkede figurer, {{ui:Dækning}} og {{ui:Tekststørrelse}} for tekst. Hver ny markering af den slags bruger dem, og MarkupCraft husker dem i denne browser.
- **Efter tegning:** vælg en eller flere markeringer og ændr de samme indstillinger under »Stil«. Med flere valgt gælder ændringen dem alle i ét trin.

Standardindstillingerne: røde markeringer, en gul fremhæver, blå målinger, orange tællinger og stempler farvet efter betydning.

Gemte udseender, du bruger hver dag, hører hjemme i værktøjskassen: se [Værktøjskassen](topic:tool-chest).

## Emne og kommentar

Hver markering har også et {{ui:Emne}} (en kort etiket som »Sky« eller »RFI«, vist i markeringslisten og i andre PDF-fremvisere) og en {{ui:Kommentar}} (længere noter). Udfyld dem i {{ui:Egenskaber}}. Til en samtale om en markering bruger du svar: se [Statusser og svar](topic:statuses-and-replies).

## Næste

- [Vælg, flyt og ændr markeringer](topic:select-and-edit)
- [Stempler og notater](topic:stamps-and-notes)
- [Alle markeringstyper](topic:markup-types)
