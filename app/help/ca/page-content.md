---
title: Canvia les línies, les imatges i el text de la pàgina
summary: Mou, redimensiona, canvia el color o suprimeix el que dibuixa el mateix PDF, mou els punts d'una línia, substitueix una imatge i canvia les paraules d'una línia de text.
keywords: contingut de la pàgina, contingut base, edita el PDF, edita el dibuix, vectorial, camí, forma, línia, imatge, substitueix imatge, text, paraules, tipus de lletra, punts, nodes, mou, redimensiona, canvia el color, suprimeix, eina de contingut
from: 471d457e
---

Les marques es posen sobre un full. L'eina {{ui:Contingut}} actua sobre el full mateix: les línies, les imatges i les línies de text que dibuixa el PDF. El vostre PDF en aquest ordinador no es modifica mai: les edicions formen part de la còpia que deseu.

## Triar què canviar

1. Trieu {{ui:Contingut}} al grup {{ui:Selecció}}, o premeu {{key:B}}.
2. Sota {{ui:Tria}} a {{ui:Propietats}}, activeu o desactiveu {{ui:Formes}}, {{ui:Imatges}} i {{ui:Text}}. Només es poden triar els tipus que estan activats, així podeu triar el text d'un dibuix ple sense agafar-ne les línies.
3. Feu clic a alguna cosa per seleccionar-la. Shift+clic afegeix o treu. Arrossegueu un quadre sobre paper buit per seleccionar-ne diversos: si arrossegueu cap a la dreta, agafa el que queda completament dins del quadre; si arrossegueu cap a l'esquerra, agafa el que el toca.

Una forma dins d'una àrea retallada només es tria on es veu.

## Moure, redimensionar, canviar el color, suprimir

- **Moure:** arrossegueu un objecte seleccionat, o premeu les tecles de fletxa (manteniu Shift per fer passos més grans). Manteniu Shift mentre arrossegueu per moure en línia recta, en horitzontal o en vertical.
- **Redimensionar:** arrossegueu un dels vuit quadrats al voltant de la selecció. Creix o es redueix des del costat oposat. Manteniu Shift per conservar les proporcions.
- **Canviar el color:** per a línies i formes, definiu {{ui:Color de línia}}, {{ui:Color de farciment}} i {{ui:Gruix de línia (pt)}} a {{ui:Propietats}}.
- **Suprimir:** premeu {{key:Delete}}, o trieu {{ui:Suprimeix de la pàgina}}.
- **Desfer:** cada canvi és un pas: {{key:Mod+Z}} el desfà, {{key:Mod+Y}} el torna a posar.

{{ui:Torna-ho a com estava}} desfà de cop tots els canvis als objectes seleccionats; {{ui:Torna aquesta pàgina a com estava}} ho fa per a tota la pàgina.

## Copiar, retallar i enganxar contingut de la pàgina

Seleccioneu línies, imatges o text amb l'eina {{ui:Contingut}}, i després:

- {{key:Mod+C}} copia, {{key:Mod+X}} retalla (copia i les treu de la pàgina), {{key:Mod+D}} posa una còpia al costat.
- {{key:Mod+V}} enganxa com a contingut de la pàgina, al costat de l'original o on hi hagi el punter (tal com diuen la [Configuració](topic:settings)); {{key:Mod+Shift+V}} enganxa exactament al mateix lloc. Enganxeu en una altra pàgina, en un altre PDF obert o en una altra pestanya de MarkupCraft d'aquest navegador.
- El menú del grup {{ui:Edita}} i el menú del clic dret tenen les mateixes ordres.

Una enganxada manté les línies com a línies, les paraules com a paraules amb el seu propi tipus de lletra, i les imatges com a imatges. És una sola peça: mogueu-la, redimensioneu-la amb els quadrats, suprimiu-la o useu {{key:Mod+Z}} per desfer-la. Forma part de la pàgina a la còpia que deseu. Allò que vau copiar per últim, marques o contingut de la pàgina, és el que {{key:Mod+V}} enganxa.

El que conté la còpia es retalla al quadre al voltant de la selecció: allò que MarkupCraft no pot treure de la còpia (vegeu més avall) i que es troba dins d'aquest quadre també hi ve.

## Moure els punts d'una línia

Feu doble clic a una línia o corba (o seleccioneu-la i trieu {{ui:Edita els punts}}). Els seus punts es mostren com a quadrats, i les seves nanses de corba com a cercles. Arrossegueu un punt o una nansa; un punt porta al costat les nanses properes, de manera que la corba conserva la seva forma al voltant. Premeu {{key:Esc}}, o feu clic fora de la línia, quan acabeu.

Els rectangles no tenen punts per arrossegar: redimensioneu-los amb els quadrats que hi ha al voltant.

## Substituir una imatge

Seleccioneu una imatge i trieu {{ui:Substitueix la imatge…}}, i després trieu un fitxer PNG, JPEG o SVG (o un PDF: la seva primera pàgina). La nova imatge omple el lloc de l'antiga, i manté les seves pròpies proporcions.

## Canviar les paraules d'una línia de text

Feu doble clic a una línia de text, escriviu les paraules noves a {{ui:Paraules}} i premeu {{key:Enter}}. Les paraules s'escriuen amb el tipus de lletra i la mida de la línia, i la línia manté la seva llargada, de manera que el text que hi ha després no es mou.

:::note
La majoria de PDF només porten les lletres que usen de cada tipus de lletra. Quan escriviu una lletra que la còpia del tipus de lletra del fitxer no té, MarkupCraft l'imprimeix en Helvetica i ho indica. {{ui:Propietats}} mostra quines lletres té el tipus de lletra del fitxer.
:::

El text es canvia una línia alhora; no passa a la línia següent.

## Què deixa MarkupCraft tal com està

- **Les pàgines escanejades** són una sola imatge: podeu moure, redimensionar, substituir o suprimir la imatge, però el que hi ha dins no es pot editar.
- **PDF xifrats i signats:** canviar la pàgina trencaria una signatura, així que l'eina {{ui:Contingut}} ho indica i no canvia res. Les marques continuen funcionant.
- **Àrees de retall, objectes dividits entre dues parts del contingut de la pàgina, i degradats de color que omplen tota una àrea** es queden com estan; MarkupCraft indica el motiu quan ho proveu.
- **Paraules en un tipus de lletra estàndard que el PDF no descriu** (com un Times sense amplades de lletra al fitxer) no es poden canviar, perquè MarkupCraft no podria mantenir l'espaiat de la línia. La línia encara es pot moure.

## Posar les marques a la pàgina

Les línies, els rectangles, les el·lipses, les polilínies, els núvols i els traços de llapis que heu dibuixat com a marques poden passar a formar part de la pròpia pàgina: seleccioneu-les i trieu {{ui:Posa a la pàgina}} a {{ui:Propietats}}. El text, els segells, les imatges i els colors transparents es queden com a marques.
