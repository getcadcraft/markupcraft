---
title: La caixa d'eines
summary: Deseu una marca amb estil com a eina reutilitzable, dibuixeu-hi i compartiu la vostra caixa amb l'oficina com a fitxer.
keywords: caixa d'eines, eines, conjunt d'eines, eines personalitzades, marques desades, preferits, estàndard de l'oficina, importa, exporta, comparteix, json
from: 7dfa36e0
---

La pestanya {{ui:Eines}} conté la vostra **caixa d'eines**: marques desades amb el seu aspecte, a punt per tornar a dibuixar. Una eina conserva el tipus de marca, el color, el gruix de línia, el farciment, l'opacitat, la mida del text i l'assumpte, a més del text d'un segell, el nom de grup d'un recompte, o el text inicial d'un quadre de text o d'una crida.

## Les eines amb què comenceu

Una caixa nova en té sis: "Núvol de revisió" (vermell), "Núvol de pregunta" (blau), "Marcador groc", "Crida RFI" (blau, comença amb "RFI: "), "Verificació en obra" (una crida taronja que diu "Verificació en obra.") i "Aprovat amb notes" (un segell).

## Dibuixar amb una eina

1. Obriu la pestanya {{ui:Eines}}.
2. Feu clic en una eina. Sembla premuda, i l'eina corresponent de la barra d'eines s'activa.
3. Dibuixeu com de costum. {{ui:Propietats}} diu 'Dibuixant amb "<eina>" de la caixa d'eines.'

Mentre una eina de la caixa estigui activa, els canvis que feu a {{ui:Propietats}} abans de dibuixar s'apliquen de moment a aquesta eina, sense canviar l'eina desada ni la configuració normal de les eines. En triar un botó de la barra d'eines, o en prémer la tecla d'una eina, es torna a l'eina senzilla.

## Desar les vostres pròpies

1. Dibuixeu una marca i doneu-li estil com voleu: color, línia, farciment, assumpte, text del segell.
2. Seleccioneu-la.
3. Trieu {{ui:Desa la selecció com a eina}} a la pestanya {{ui:Eines}}, o {{ui:Desa com a eina}} a {{ui:Propietats}}.
4. Escriviu un {{ui:Nom de l'eina}} i trieu {{ui:Desa l'eina}}.

Resultat: l'eina s'afegeix al final de la caixa, i la pestanya {{ui:Eines}} s'obre per mostrar-la.

## Segells fets d'una selecció

Seleccioneu diverses marques (o contingut de la pàgina amb l'eina {{ui:Contingut}}) i trieu {{ui:Desa la selecció com a segell…}} a {{ui:Més}} o al menú contextual. La caixa rep un segell que les conté totes ("Segell: 3 marques juntes"). Feu-hi clic i després feu clic en qualsevol full: les marques apareixen juntes, centrades on feu clic, com a marques noves amb el vostre nom; el contingut de la pàgina es dibuixa a la pàgina en aquell lloc. Aquests segells es desen i es comparteixen amb la caixa com qualsevol eina.

## Eliminar una eina

Trieu la × al final de la fila de l'eina, i després {{ui:Elimina}}. Les marques ja dibuixades amb ella es mantenen tal com són.

## On es guarda la caixa

La caixa es desa **en aquest navegador, en aquest ordinador**. Un altre navegador o ordinador té la seva pròpia caixa (que comença amb les sis predeterminades); una finestra privada l'oblida en tancar-la, i esborrar les dades d'aquest lloc a la configuració del navegador la suprimeix.

Si el navegador no la vol desar (l'emmagatzematge desactivat o ple), la barra d'estat diu: "No s'ha pogut conservar la caixa d'eines en aquest navegador (l'emmagatzematge està desactivat o ple). Exporteu-la per conservar-la."

:::safari
Safari pot esborrar les dades emmagatzemades d'un lloc web quan no l'heu fet servir durant un temps. Exporteu la vostra caixa de tant en tant perquè la pugueu tornar a importar.
:::

**Exporteu la vostra caixa com a còpia de seguretat**, sobretot després de crear eines en què confieu.

## Compartir una caixa amb l'oficina

1. Configureu les eines una vegada.
2. Trieu {{ui:Exporta}}. Obtindreu "MarkupCraft tool chest.json".
3. Deixeu aquest fitxer on l'oficina guarda els seus estàndards, o envieu-lo.
4. Tots els altres trien {{ui:Importa}} a la seva pestanya {{ui:Eines}} i seleccionen el fitxer.

Resultat: "S'han importat 12 eines de "MarkupCraft tool chest.json"." Les eines que venen de la mateixa caixa substitueixen les còpies més antigues; per tant, importar una caixa d'oficina actualitzada actualitza aquestes eines en lloc de duplicar-les, i les eines noves s'afegeixen. Una caixa conté fins a 500 eines.

MarkupCraft comprova cada valor d'un fitxer importat i omet el que no pot utilitzar ("2 omeses (no utilitzables)"). Els fitxers que no són una caixa es rebutgen: "Aquest fitxer no és una caixa d'eines de MarkupCraft." o "Aquest fitxer no és una caixa d'eines (no és JSON)."

Els fitxers de caixa d'eines d'altres programes de revisió no es poden importar.
