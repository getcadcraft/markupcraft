---
title: Selecciona, mou i canvia les marques
summary: Trieu marques fent-hi clic o amb una finestra; mou-les, canvia'n la mida, desplaça-les a poc a poc, retalla, copia, enganxa, enganxa al mateix lloc, duplica, suprimeix i desfés.
keywords: selecciona, selecció, selecciona-ho tot, neteja la selecció, finestra, intersecció, mou, canvia la mida, nanses, nansa, desplaça a poc a poc, retalla, copia, enganxa, enganxa al mateix lloc, duplica, porta-retalls, altra pestanya, suprimeix, desfés, refés, edita
from: 62c7def3
---

Trieu {{ui:Selecció}} ({{key:V}}) primer. Prémer {{key:Esc}} també us hi porta: la primera pulsació neteja la selecció, i la següent torna a {{ui:Selecció}}.

## Trieu marques

:::mouse
- **Una marca:** feu-hi clic. Apareix un quadre de guions i nanses, i {{ui:Propietats}} la mostra.
- **Afegir-ne o treure'n una:** manteniu {{key:Shift}} i feu clic.
- **Completament dins d'una finestra:** arrossegueu d'esquerra a dreta en una part buida del full. Només es trien les marques totalment dins del quadre (contorn sòlid).
- **Tocant una finestra:** arrossegueu de dreta a esquerra. Es tria tot el que toca el quadre (contorn verd de guions).
- **Tot el que hi ha en aquest full:** {{key:Mod+A}}, o {{ui:Més}} i després {{ui:Selecciona-ho tot}} al grup {{ui:Edita}} de la barra d'eines.
- **Res:** feu clic en un lloc buit, premeu {{key:Esc}}, o {{ui:Més}} i després {{ui:Neteja la selecció}}.
:::

:::touch
- **Una marca:** toqueu-la.
- **Diverses:** arrossegueu un dit per una part buida del full per dibuixar una finestra. D'esquerra a dreta tria el que hi és completament; de dreta a esquerra tria el que toca.
- Tocar amb {{key:Shift}} premut només funciona amb un teclat connectat. Sense teclat, useu una finestra.
- Un dit mai no desplaça en {{ui:Selecció}}; useu dos dits, o l'eina {{ui:Desplaça}}.
:::

Els comentaris de només lectura que venien amb el fitxer mostren un quadre gris de guions i cap nansa. Es poden seleccionar i respondre, però no canviar.

## Mou i canvia la mida

- **Mou:** arrossegueu una marca seleccionada. Manteniu {{key:Shift}} per moure només en múltiples de 45°. Diverses marques seleccionades es mouen juntes.
- **Canvia la mida:** amb una marca seleccionada, arrossegueu una nansa. Les nanses quadrades canvien la mida del quadre (manteniu {{key:Shift}} per conservar les proporcions); les nanses rodones mouen un punt de la cantonada d'una línia, polilínia, polígon, núvol o mesura (manteniu {{key:Shift}} per a 45°); les nanses en rombe mouen la punta i el doblec d'una crida. Els traços de llapis s'escalen des del seu quadre.
- **Desplaçament fi:** premeu les tecles de fletxa per moure la selecció un píxel de pantalla; manteniu {{key:Shift}} per a deu. Cada pulsació és un pas per desfer.

## Canvia el text o l'aspecte

- **Text, crides i notes:** feu doble clic a la marca, o premeu {{key:Enter}}, o trieu {{ui:Edita al full}} a {{ui:Propietats}}. Escriviu, i després feu clic fora o premeu {{key:Mod+Enter}}. {{key:Esc}} cancel·la l'edició.
- **Segells:** trieu un segell diferent a {{ui:Propietats}} (el doble clic obre {{ui:Propietats}} per a vosaltres).
- **Estil:** {{ui:Color}}, {{ui:Amplada de línia}}, {{ui:Farciment}}, {{ui:Opacitat}} i {{ui:Mida del text}} sota «Estil» a {{ui:Propietats}}. Amb diverses seleccionades, {{ui:Propietats}} mostra els tipus que heu triat i els canvia tots alhora.

## Copia, enganxa i duplica

El grup {{ui:Edita}} de la barra d'eines té {{ui:Copia}} i {{ui:Enganxa}}; el seu menú {{ui:Més}} té totes aquestes ordres, cadascuna amb la seva tecla.

| Ordre | Tecla | Què fa |
|---|---|---|
| {{ui:Retalla}} | {{key:Mod+X}} | Copia les marques seleccionades i les suprimeix |
| {{ui:Copia}} | {{key:Mod+C}} | Copia les marques seleccionades |
| {{ui:Enganxa}} | {{key:Mod+V}} | Posa una còpia al full on sou (on, més avall) |
| {{ui:Enganxa al mateix lloc}} | {{key:Mod+Shift+V}} | Posa la còpia exactament al lloc d'on es va copiar: al mateix full, sobre l'original; en un altre full, al mateix lloc del paper |
| {{ui:Duplica}} | {{key:Mod+D}} | Fa una còpia de la selecció una mica més avall i a la dreta, sense tocar el que havíeu copiat abans |

**On posa Enganxa la còpia:**

- {{key:Mod+V}} amb el punter sobre el full posa la còpia centrada on és el punter. Moveu el punter, premeu {{key:Mod+V}} de nou, i en poseu una altra.
- El botó {{ui:Enganxa}} (aleshores el punter és a la barra d'eines), o {{key:Mod+V}} amb el punter fora del full, la posa una mica més avall i a la dreta de l'original. Cada enganxada de la mateixa còpia avança una mica més, de manera que les còpies no s'amaguen entre elles. En un altre full, la primera enganxada cau on era l'original al seu full. Si aquest lloc és fora de vista, la còpia cau al mig de la vista.
- Perquè {{key:Mod+V}} enganxi sempre al costat de l'original, trieu {{ui:Al costat de la còpia}} sota {{ui:Enganxa}} a la [configuració de MarkupCraft](topic:settings).

Les marques enganxades queden seleccionades, de manera que les podeu arrossegar de seguida. Cada retall, enganxada o duplicat és un pas per desfer: {{key:Mod+Z}} treu tota l'enganxada.

Les còpies enganxades són marques noves: tenen el vostre nom, la data d'avui, l'estat Obert, cap número d'element de la llista de deficiències i un fil buit. El seu tipus, forma, estil, text i comentari s'hi porten. Els comentaris de només lectura que venien amb el fitxer no es poden copiar ni retallar.

**Entre pestanyes:** el que copieu també es guarda en aquest navegador, de manera que una altra pestanya de MarkupCraft al mateix navegador el pot enganxar. Copiar marques no utilitza el porta-retalls de l'ordinador: no les podeu enganxar en un altre programa, i el text que hàgiu copiat en un altre lloc no s'enganxa com a marca.

**Menú del clic dret:** feu clic dret a una marca (o al paper buit) per a {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa aquí}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica}}, {{ui:Suprimeix}}, {{ui:Desa la selecció com a segell…}}, {{ui:Aplana dins la pàgina en desar}}, {{ui:Insereix una imatge aquí…}} i {{ui:Selecciona-ho tot}}. Fer clic dret en una marca que no és seleccionada la selecciona primer. Arrossegar amb el botó dret continua desplaçant. En una pantalla tàctil, una premsa llarga sobre una marca obre el mateix menú (sobre el text, comença a editar el text). La tecla de menú o {{key:Shift+F10}} l'obren a la selecció.

El contingut de la pàgina seleccionat amb l'eina {{ui:Contingut}} també es copia i s'enganxa: vegeu [Canvia les línies, imatges i text de la pàgina](topic:page-content).

Per copiar una part de la pàgina com a imatge (un rectangle, una el·lipse o una forma lliure), o com a superposició transparent per a un altre full o aplicació, vegeu [Copia una àrea de la pàgina, o una superposició](topic:copy-an-area).

## Suprimeix

Premeu {{key:Delete}} o {{key:Backspace}}, trieu {{ui:Més}} i després {{ui:Suprimeix}} a la barra d'eines, o {{ui:Suprimeix}} a {{ui:Propietats}}. La barra d'estat diu quantes s'han suprimit. Els comentaris de només lectura del fitxer mai no se suprimeixen («conservat tal com és al fitxer»).

## Desfés i refés

- {{key:Mod+Z}} desfà, {{key:Mod+Y}} o {{key:Mod+Shift+Z}} refà. La barra d'eines té {{ui:Desfés}} i {{ui:Refés}}.
- La barra d'estat diu què s'ha desfet («S'ha desfet: mou la marca.»).
- Desfer cobreix cada canvi de marques, estats, respostes, elements de la llista de deficiències, escales de fulls i noms de fulls, fins a 500 passos.
- L'historial s'esborra quan tanqueu el conjunt.

## Copia marques a altres fulls

Per posar el mateix segell, la mateixa nota o el mateix núvol en diversos fulls, seleccioneu-lo (o diverses marques) i trieu {{ui:Copia a altres fulls…}} a {{ui:Propietats}}. Marqueu els fulls, o {{ui:Tots els fulls}}, i trieu {{ui:Copia}}. Cada full rep una còpia al mateix lloc de la pàgina, signada amb el vostre nom. Un {{key:Mod+Z}} les treu totes.
