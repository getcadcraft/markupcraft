---
title: Sammenlign to revisioner
summary: Læg en gammel og en ny udgave af et ark over hinanden i to farver, ret dem ind efter to punkter, og sæt sky om det, der har ændret sig.
keywords: sammenlign, overlay, overlay-sider, revision, diff, forskelle, ændringer, gammel ny, ret ind, backcheck, udgave, bulletin
from: 62f5d1c5
---

Sammenlign lægger to ark over hinanden. Linjer, der kun findes på det gamle ark, vises i rødt, linjer der kun findes på det nye ark i blåt, og linjer på begge i en dæmpet grå. Farverne er navngivet i forklaringen under arket: "Kun på det gamle ark", "Kun på det nye ark", "På begge".

## Sammenlign to ark

1. Åbn begge udgaver. De kan være sider i samme PDF eller i forskellige PDF'er; åbn dem sammen som ét sæt (se [Arbejd med flere filer samtidig](topic:several-files)).
2. Vælg fanen {{ui:Sammenlign}} til højre.
3. Vælg {{ui:Gammelt ark}} og {{ui:Nyt ark}}. Det nye ark starter med det, du er på. Når flere filer er åbne, vises hvert arks filnavn efter dets navn.
4. Vælg {{ui:Sammenlign}}.

Resultat: MarkupCraft viser det nye ark med det gamle blandet ind, forklaringen dukker op, og fanen siger "Sammenligner <old> (gammel) med <new> (ny). Markeringer på det nye ark forbliver redigerbare."

## Overgang mellem gammel og ny

Træk skyderen {{ui:Gammel og ny}}. Helt til venstre vises kun det gamle ark, helt til højre kun det nye, og i midten begge. At skubbe frem og tilbage er ofte den hurtigste måde at se en lille ændring på.

## Ret arkene ind

Blev de to udgaver plottet med forskellig margen, størrelse eller rotation, ser alt ændret ud. Ret det:

**Efter to punkter (bedst):**

1. Vælg {{ui:Ret ind efter to punkter}}. Visningen viser kun det gamle ark.
2. Klik på et skarpt træk, du kan finde på begge ark, for eksempel et skæringspunkt i et søjlenet. Fanen tæller trinene ("1 af 4").
3. Klik på et andet træk, langt fra det første, for eksempel det modsatte gitterhjørne.
4. Visningen skifter til det nye ark. Klik på det første træk igen.
5. Klik på det andet træk igen.

Resultat: "Rettet ind: gammelt ark skaleret 100.00 %, drejet 0.00°. Finjustér med små forskydninger." Det gamle ark flyttes, skaleres og drejes, så det passer. {{key:Esc}} annullerer, mens du vælger. Zoom ind på hvert træk, før du klikker, for en præcis tilpasning.

**Ved forskydning:** brug de fire pilknapper under "Ret ind" til at flytte det gamle ark. Vælg trinnet (0.25, 1, 5 eller 20 pt; 72 pt er én tomme på papiret). Fanen siger, hvor langt det er flyttet.

{{ui:Nulstil}} fjerner justeringen og forskydningerne.

## Kun ændrede linjer

Under justeringsknapperne vælger du {{ui:Ændrede linjer}} i stedet for {{ui:Billedoverlejring}}. MarkupCraft sammenligner så de to arks egne linjer, ikke deres billeder: det nye ark vises, som det er, med de linjer, der kun findes på det gamle ark, i rødt, og linjerne, der kun findes på det nye, i blåt. En linje, der kun er blevet kortere, viser kun den manglende del. Ret arkene ind først (se ovenfor): sammenligningen bruger justeringen, så et ark, der kun er forskudt, viser ingen ændringer. Statuslinjen siger, hvor meget der er ændret.

Dette virker for PDF'er plottet fra CAD, hvor tegningen består af linjer. Scannede ark har ingen linjer at sammenligne: brug billedoverlejringen til dem. Tekst sat med en skrifttype (ikke tegnet som streger) sammenlignes ikke.

## Markér ændringerne

Mens du sammenligner, er du på det nye ark, og alle værktøjer virker. Tegn skyer om ændringerne, efterhånden som du finder dem; de hører til det nye ark og bliver, når du stopper sammenligningen.

{{ui:Sæt sky om ændringerne}} gør det for dig: den grupperer de ændrede linjer, der ligger tæt, og tegner en revisionssky rundt om hver gruppe på det nye ark, med "Ændret siden <old sheet>" som kommentar. Ét {{key:Mod+Z}} fjerner dem alle; slet dem, du ikke har brug for.

## Sammenlign et helt sæt

Kommer den nye udgave som sin egen PDF, åbner du begge PDF'er og åbner {{ui:Sammenlign to sæt}} i fanen {{ui:Sammenlign}}. Vælg den gamle og den nye fil, og vælg derefter {{ui:Sammenlign sættene}}. Ark parres efter deres nummer (som i [slip-sheeting](topic:slip-sheet-a-revised-set)), sammenlignes ud fra deres linjer og listes med de mest ændrede først. Vælg et ark i listen for at sammenligne det par med {{ui:Ændrede linjer}}.

{{ui:Sæt sky om alle ændringer}} sætter sky om hver gruppe af ændrede linjer på hvert ændret ark i ét trin, som du kan fortryde. Sætsammenligningen retter ikke arkene ind først, så et ark, der er forskudt på siden, vises som ændret: sammenlign det par alene og brug {{ui:Ret ind efter to punkter}}.

## Stop sammenligningen

Vælg {{ui:Stop sammenligning}}, eller gå til et andet ark. Justeringen huskes for det samme par af ark, indtil du lukker sættet.

## Godt at vide

- Sammenlign virker på det, der er tegnet, pixel for pixel. Den ved ikke, at en linje er flyttet; den viser den gamle position i én farve og den nye i den anden.
- Tekst, der er flyttet om, en ændret dato i tegningshovedet eller en anden plotstil vises også som ændringer.
- Et scannet ark sammenlignet med et plottet er støjende: scanning slører og forskyder linjer.
- Sammenligning af tekst sat med en skrifttype og en liste over, hvad der er ændret, er ikke lavet endnu.
