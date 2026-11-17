---
title: Limpiar los trazos de lápiz, e importar comentarios de revisión y avance de obra
summary: Convierta los trazos de lápiz a mano alzada en líneas, círculos, arcos y rectángulos; importe como notas los comentarios de revisión de un paquete de permisos y el avance del levantamiento de una obra.
keywords: lápiz, mano alzada, limpiar, enderezar, círculo, línea, rectángulo, arco, permiso, comentarios de revisión, avance, dron, escaneo, levantamiento, notas, csv
from: 547d8e42
---

## Limpiar los trazos de lápiz

Dibuje con {{ui:Lápiz}}, después abra el menú {{ui:Más}} en el grupo Editar y elija {{ui:Limpiar los trazos de lápiz}}. Cada trazo de lápiz seleccionado se convierte en lo que se quería dibujar: un trazo recto pasa a ser una línea (dejada exactamente horizontal o vertical cuando estaba casi así), uno redondo una elipse, parte de un círculo un arco, uno cerrado de cuatro esquinas un rectángulo, y cualquier otro una polilínea o un polígono. Los extremos sueltos de trazos dibujados juntos se unen entre sí. Si no hay ningún trazo de lápiz seleccionado, se limpian todos los trazos de lápiz de la hoja abierta. Es un solo paso de deshacer: Ctrl+Z devuelve el trazo a mano alzada. La forma se calcula en su equipo con reglas fijas; no se envía nada a ningún sitio.

## Importar comentarios de revisión

BimCraft guarda en su paquete de permisos el archivo `01-review-comments.csv`: los comentarios que probablemente haga un revisor de planos, cada uno con la norma, la cláusula, lo que se necesita, lo que se encontró y lo que hay que hacer. En la pestaña {{ui:Tareas}}, abra {{ui:Comentarios de revisión del permiso}} y elija {{ui:Traer comentarios (CSV)}}. Cada comentario se convierte en una nota Abierta en una columna a la izquierda de la hoja abierta; arrastre cada una hasta el lugar al que se refiere. Se calculan a partir de las comprobaciones existentes, no a partir de un examen de un técnico municipal.

## Importar recuadros de nodos HAZOP

El complemento de P&ID de CadCraft dibuja los nodos de un estudio HAZOP y puede guardarlos como {{ui:Recuadros de nodos HAZOP}} (un archivo JSON). Abra aquí la hoja impresa del P&ID, vaya a la pestaña {{ui:Tareas}}, abra {{ui:Recuadros de nodos HAZOP}} y elija {{ui:Importar recuadros de nodos (JSON)}}. Cada nodo se convierte en un rectángulo Abierto sobre la hoja, con su número, su nombre, el equipo y las líneas en el texto, y el equipo escribe sus conclusiones como respuestas en él. La hoja se toma como se imprimió a tamaño real desde la esquina inferior izquierda del dibujo; si se imprimió a otra escala, escriba antes ese número en {{ui:Impreso a}} (0.5 para 1:2). Un nodo que cae fuera de la página no se dibuja, y el panel indica cuántos son. Los marcadores son una ayuda para el estudio: muestran dónde están los nodos, pero no juzgan el estudio.

## Importar el avance de obra

CivilCraft guarda una fila por cada vuelo de dron o escaneo de la obra. En la pestaña {{ui:Tareas}}, abra {{ui:Avance de obra}} y elija {{ui:Importar avance (JSON)}}. Cada levantamiento se convierte en una nota en la hoja abierta que indica cuánto está hecho, qué queda por excavar o rellenar, qué se ha excavado o rellenado de más y qué se sale del plano. Un levantamiento con algo fuera del plano permanece Abierto; uno limpio pasa a Aceptado.
