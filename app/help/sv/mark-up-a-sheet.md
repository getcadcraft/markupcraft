---
title: Markera ett blad
summary: Rita revisionsmoln, utropsrutor, textrutor, pilar, former, pennstreck och överstrykningar, och ange deras färg och linje före eller efter.
keywords: markering, redline, moln, revisionsmoln, utropsruta, hänvisning, textruta, pil, linje, rektangel, ellips, cirkel, polylinje, polygon, penna, frihand, bläck, överstrykning, färg, linjetjocklek
from: 9d6de0ac
---

Alla verktyg fungerar på samma sätt: välj det, rita på bladet, och den nya markeringen blir markerad så att du kan se den i {{ui:Properties}}. Verktyget förblir aktivt för nästa. Statusfältet säger alltid vad verktyget väntar på härnäst.

:::touch
På en pekskärm ritar du med ett finger. Ett andra finger avbryter det första fingrets streck och nyper eller panorerar i stället, så att du aldrig lämnar ett märke av misstag när du zoomar. Mer i [Granska på en iPad eller pekskärm](topic:review-on-a-tablet).
:::

## Revisionsmoln

**Rutmoln:** välj {{ui:Cloud}} ({{key:C}}) och dra en ruta. Håll {{key:Shift}} nedtryckt för att göra den kvadratisk.

**Fritt moln** runt en oregelbunden form:

1. Välj {{ui:Free cloud}} ({{key:Shift+C}}).
2. Klicka på varje hörn av området.
3. Avsluta med ett dubbelklick, {{key:Enter}} eller ett högerklick. På touch, dubbeltryck.

Medan du klickar punkter tar {{key:Backspace}} bort den sista punkten och {{key:Esc}} avbryter hela formen. Håll {{key:Shift}} nedtryckt för att hålla nästa sida i steg om 45°. Ett fritt moln behöver minst tre punkter.

Bucklorna bulnar alltid utåt, och deras storlek följer linjetjockleken: en tjockare linje ger större bågar.

## Utropsrutor

En utropsruta är en textruta med en hänvisning som pekar på något.

1. Välj {{ui:Callout}} ({{key:K}}).
2. Tryck på punkten du vill ange och dra till där texten ska stå. Släpp.
   Om du bara klickar utan att dra placeras rutan uppåt och till höger om punkten.
3. Skriv texten. Rutan växer nedåt när raderna bryts.
4. Klicka var som helst utanför rutan, eller tryck {{key:Mod+Enter}}, för att avsluta. {{key:Esc}} kastar bort utropsrutan.

Om du avslutar utan att skriva något läggs ingen utropsruta till (”Inget skrivet, så ingen utropsruta lades till.”).

När den är ritad: markera den för att flytta rutan, dra hänvisningens spets eller dess böj (de två diamantformade handtagen), eller ändra storlek på rutan.

## Textrutor

1. Välj {{ui:Text}} ({{key:T}}).
2. Klicka där texten börjar (du får en ruta med rimlig bredd), eller dra en ruta i den storlek du vill ha.
3. Skriv, klicka sedan utanför eller tryck {{key:Mod+Enter}}.

Text har ingen kant som standard. För att ge den en kant, höj {{ui:Line width}} i {{ui:Properties}}. För att ge den en bakgrund, markera {{ui:Fill}}.

För att ändra orden senare: när {{ui:Select}} är aktiverat, dubbelklicka på texten, eller markera den och tryck {{key:Enter}}, eller välj {{ui:Edit on the sheet}} i {{ui:Properties}}. Du kan också redigera den i rutan {{ui:Text}} i {{ui:Properties}}.

## Pilar och linjer

1. Välj {{ui:Arrow}} ({{key:A}}) eller {{ui:Line}} ({{key:L}}).
2. Dra från start till slut. Eller klicka på start, släpp och klicka på slut.
3. Håll {{key:Shift}} nedtryckt för att hålla den i steg om 45°.

Pilspetsen sitter i den ände där du avslutade.

## Rektanglar, ellipser, polylinjer och polygoner

- {{ui:Rectangle}} ({{key:R}}) och {{ui:Ellipse}} ({{key:E}}): dra en ruta. {{key:Shift}} gör en kvadrat eller en cirkel. Ett klick utan att dra ritar ingenting, och statusfältet säger att du ska dra.
- {{ui:Polyline}} ({{key:Y}}) och {{ui:Polygon}} ({{key:G}}): klicka punkter; avsluta med ett dubbelklick, {{key:Enter}} eller ett högerklick (dubbeltryck på touch). {{key:Backspace}} tar bort den sista punkten. En polygon sluter sig själv och behöver tre punkter; en polylinje behöver två.

## Penna och överstrykning

- {{ui:Pen}} ({{key:P}}): dra för att rita fritt. Strecket jämnas ut lite när du släpper.
- {{ui:Highlight}} ({{key:I}}): samma sak, med ett brett, genomskinligt gult streck som färgar ritningen under det i stället för att täcka den.
- Håll {{key:Shift}} nedtryckt medan du ritar för att få ett rakt streck från där du började.

Överstrykningen är ett frihandsstreck. Den fäster inte vid text i PDF-filen.

## Färg, linje och fyllning

Två sätt:

- **Före ritning:** välj verktyget. När inget är markerat visar {{ui:Properties}} inställningar för verktyget "<tool>": {{ui:Color}}, {{ui:Line width}} (i punkter), {{ui:Fill}} och {{ui:Fill opacity}} för slutna former, {{ui:Opacity}}, och {{ui:Text size}} för text. Varje ny markering av den typen använder dem, och MarkupCraft kommer ihåg dem i den här webbläsaren.
- **Efter ritning:** markera en eller flera markeringar och ändra samma reglage under "Stil". Med flera markerade gäller ändringen alla i ett steg.

Standardvärdena: röda markeringar, en gul överstrykning, blå mätningar, orangea räkningar och stämplar färgade efter betydelse.

Sparade utseenden som du använder varje dag hör hemma i verktygslådan: se [Verktygslådan](topic:tool-chest).

## Ämne och kommentar

Varje markering har också ett {{ui:Subject}} (en kort etikett som ”Moln” eller ”RFI”, som visas i markeringslistan och i andra PDF-läsare) och en {{ui:Comment}} (längre anteckningar). Fyll i dem i {{ui:Properties}}. För ett samtal om en markering, använd svar: se [Status och svar](topic:statuses-and-replies).

## Nästa

- [Markera, flytta och ändra markeringar](topic:select-and-edit)
- [Stämplar och anteckningar](topic:stamps-and-notes)
- [Alla markeringstyper](topic:markup-types)
