---
title: Marcar un full
summary: Dibuixeu núvols de revisió, crides, caixes de text, fletxes, formes, traços de llapis i ressaltats, i definiu-ne el color i la línia abans o després.
keywords: marcatge, marca, revisió en vermell, núvol, núvol de revisió, crida, línia de crida, caixa de text, fletxa, línia, rectangle, el·lipse, cercle, polilínia, polígon, llapis, a mà alçada, tinta, ressaltador, color, amplada de línia
from: 9d6de0ac
---

Totes les eines funcionen de la mateixa manera: en trieu una, dibuixeu al full, i la marca nova queda seleccionada perquè la pugueu veure a {{ui:Propietats}}. L'eina es manté activa per a la següent. La barra d'estat diu sempre què espera l'eina a continuació.

:::touch
En una pantalla tàctil, utilitzeu un dit per dibuixar. Un segon dit cancel·la el que va començar el primer i fa pessic o desplaça, així que mai no deixeu cap marca per accident mentre feu zoom. Més a [Revisió en un iPad o pantalla tàctil](topic:review-on-a-tablet).
:::

## Núvols de revisió

**Núvol de quadre:** trieu {{ui:Núvol}} ({{key:C}}) i arrossegueu un quadre. Mantingueu {{key:Shift}} premuda per fer-lo quadrat.

**Núvol lliure** al voltant d'una forma irregular:

1. Trieu {{ui:Núvol lliure}} ({{key:Shift+C}}).
2. Feu clic a cada cantonada de l'àrea.
3. Acabeu amb un doble clic, {{key:Enter}} o un clic dret. En tàctil, feu doble toc.

Mentre feu clic als punts, {{key:Backspace}} elimina l'últim punt i {{key:Esc}} cancel·la tota la forma. Mantingueu {{key:Shift}} premuda per mantenir el costat següent en un múltiple de 45°. Un núvol lliure necessita almenys tres punts.

Els arcs sempre sobresurten cap a fora, i la seva mida depèn de l'amplada de la línia: una línia més gruixuda fa arcs més grans.

## Crides

Una crida és una caixa de text amb una línia que apunta a alguna cosa.

1. Trieu {{ui:Crida}} ({{key:K}}).
2. Premeu sobre el punt que voleu cridar i arrossegueu fins on ha d'anar el text. Deixeu anar.
   Si només feu clic sense arrossegar, la caixa es col·loca amunt i a la dreta del punt.
3. Escriviu el text. La caixa creix cap avall a mesura que el text es parteix en línies.
4. Feu clic en qualsevol lloc fora de la caixa, o premeu {{key:Mod+Enter}}, per acabar. {{key:Esc}} descarta la crida.

Si acabeu sense escriure res, no s'afegeix cap crida ("No s'ha escrit res, així que no s'ha afegit cap crida.").

Després de dibuixar-la, seleccioneu-la per moure la caixa, arrossegar la punta de la línia de crida o el seu colze (els dos controladors en forma de rombe), o canviar la mida de la caixa.

## Caixes de text

1. Trieu {{ui:Text}} ({{key:T}}).
2. Feu clic on comença el text (obtindreu una caixa d'una amplada raonable), o arrossegueu una caixa de la mida que vulgueu.
3. Escriviu i després feu clic fora o premeu {{key:Mod+Enter}}.

El text no té vora per defecte. Per posar-li una, augmenteu {{ui:Amplada de línia}} a {{ui:Propietats}}. Per donar-li un fons, marqueu {{ui:Farciment}}.

Per canviar les paraules més tard: amb {{ui:Selecció}} activada, feu doble clic al text, o seleccioneu-lo i premeu {{key:Enter}}, o trieu {{ui:Edita a la fulla}} a {{ui:Propietats}}. També el podeu editar al quadre {{ui:Text}} de {{ui:Propietats}}.

## Fletxes i línies

1. Trieu {{ui:Fletxa}} ({{key:A}}) o {{ui:Línia}} ({{key:L}}).
2. Arrossegueu de l'inici fins al final. O feu clic a l'inici, deixeu anar, i feu clic al final.
3. Mantingueu {{key:Shift}} premuda per mantenir-la en un múltiple de 45°.

La punta de la fletxa és al final on heu acabat.

## Rectangles, el·lipses, polilínies i polígons

- {{ui:Rectangle}} ({{key:R}}) i {{ui:El·lipse}} ({{key:E}}): arrossegueu un quadre. {{key:Shift}} fa un quadrat o un cercle. Un clic sense arrossegar no dibuixa res, i la barra d'estat indica que cal arrossegar.
- {{ui:Polilínia}} ({{key:Y}}) i {{ui:Polígon}} ({{key:G}}): feu clic als punts; acabeu amb un doble clic, {{key:Enter}} o un clic dret (doble toc en tàctil). {{key:Backspace}} elimina l'últim punt. Un polígon es tanca sol i necessita tres punts; una polilínia en necessita dos.

## Llapis i ressaltador

- {{ui:Llapis}} ({{key:P}}): arrossegueu per dibuixar a mà alçada. El traç s'alisa una mica en deixar anar.
- {{ui:Ressalta}} ({{key:I}}): igual, però amb un traç ample, groc i transparent que tenyeix el dibuix de sota en lloc de tapar-lo.
- Mantingueu {{key:Shift}} premuda mentre dibuixeu per obtenir un sol traç recte des del punt on heu començat.

El ressaltador és un traç a mà alçada. No s'ajusta al text del PDF.

## Color, línia i farciment

Hi ha dues maneres:

- **Abans de dibuixar:** trieu l'eina. Sense res seleccionat, {{ui:Propietats}} mostra la configuració de l'eina "<eina>": {{ui:Color}}, {{ui:Amplada de línia}} (en punts), {{ui:Farciment}} i {{ui:Opacitat del farciment}} per a formes tancades, {{ui:Opacitat}}, i {{ui:Mida del text}} per al text. Totes les marques noves d'aquell tipus les fan servir, i MarkupCraft les recorda en aquest navegador.
- **Després de dibuixar:** seleccioneu una o més marques i canvieu els mateixos controls sota "Style". Amb diverses seleccionades, el canvi s'aplica a totes en un sol pas.

Els valors per defecte: marques vermelles, ressaltador groc, mesures blaves, recomptes taronges i segells de color segons el significat.

Els estils desats que reutilitzeu cada dia pertanyen a la caixa d'eines: vegeu [La caixa d'eines](topic:tool-chest).

## Assumpte i comentari

Cada marca també té un {{ui:Assumpte}} (una etiqueta curta, com "Núvol" o "RFI", que es mostra a la llista de marques i en altres visualitzadors de PDF) i un {{ui:Comentari}} (notes més llargues). Ompliu-los a {{ui:Propietats}}. Per a una conversa sobre una marca, utilitzeu les respostes: vegeu [Estats i respostes](topic:statuses-and-replies).

## A continuació

- [Selecciona, mou i canvia marques](topic:select-and-edit)
- [Segells i notes](topic:stamps-and-notes)
- [Tots els tipus de marca](topic:markup-types)
