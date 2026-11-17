---
title: Comparar dos revisiones
summary: Superponga una emisión antigua y otra nueva de una hoja en dos colores, alinéelas por dos puntos y nube lo que cambió.
keywords: comparar, superposición, superponer páginas, revisión, diferencias, cambios, antiguo nuevo, alinear, revisión de comprobación, emisión, boletín
from: 62f5d1c5
---

Comparar superpone dos hojas. Las líneas que solo están en la hoja antigua se muestran en rojo, las que solo están en la nueva en azul, y las que están en ambas en gris apagado. Los colores aparecen nombrados en la leyenda bajo la hoja: "Solo en la hoja antigua", "Solo en la hoja nueva", "En ambas".

## Comparar dos hojas

1. Abra las dos emisiones. Pueden ser páginas del mismo PDF o de PDF distintos; ábralas juntas como un conjunto (véase [Trabajar con varios archivos a la vez](topic:several-files)).
2. Elija la pestaña {{ui:Comparar}} a la derecha.
3. Elija la {{ui:Hoja antigua}} y la {{ui:Hoja nueva}}. La hoja nueva empieza siendo la que tiene abierta. Cuando hay varios archivos abiertos, el nombre del archivo de cada hoja se muestra después de su nombre.
4. Elija {{ui:Comparar}}.

Resultado: MarkupCraft muestra la hoja nueva con la antigua mezclada, aparece la leyenda, y la pestaña indica "Comparando <antigua> (antigua) con <nueva> (nueva). Las anotaciones de la hoja nueva siguen siendo editables."

## Pasar de la antigua a la nueva

Arrastre el control deslizante {{ui:Antigua y nueva}}. Todo a la izquierda muestra solo la hoja antigua, todo a la derecha solo la nueva, y en el medio se ven ambas. Deslizar de un lado a otro es a menudo la forma más rápida de ver un cambio pequeño.

## Alinear las hojas

Si las dos emisiones se trazaron con un margen, un tamaño o una rotación distintos, todo parece cambiado. Para corregirlo:

**Por dos puntos (lo mejor):**

1. Elija {{ui:Alinear por dos puntos}}. La vista muestra solo la hoja antigua.
2. Haga clic en un detalle nítido que pueda encontrar en las dos hojas, como la intersección de una retícula de pilares. La pestaña cuenta los pasos ("1 de 4").
3. Haga clic en un segundo detalle, lejos del primero, como la esquina opuesta de la retícula.
4. La vista pasa a la hoja nueva. Haga clic de nuevo en el primer detalle.
5. Haga clic de nuevo en el segundo detalle.

Resultado: "Alineada: hoja antigua escalada al 100.00 %, girada 0.00°. Ajuste con las flechas para afinar." La hoja antigua se mueve, escala y gira para encajar. {{key:Esc}} cancela mientras elige los puntos. Amplíe cada detalle antes de hacer clic para un ajuste preciso.

**Con desplazamientos:** use los cuatro botones de flecha bajo "Alinear" para mover la hoja antigua. Elija el paso (0.25, 1, 5 o 20 pt; 72 pt es una pulgada sobre el papel). La pestaña indica cuánto se ha movido.

{{ui:Restablecer}} quita la alineación y los desplazamientos.

## Solo líneas cambiadas

Bajo los botones de alineación, elija {{ui:Líneas cambiadas}} en lugar de {{ui:Superposición de imagen}}. MarkupCraft compara entonces las propias líneas de las dos hojas, no sus imágenes: la hoja nueva se muestra tal cual, con las líneas que solo están en la hoja antigua en rojo y las que solo están en la nueva en azul. Una línea que solo se acortó muestra únicamente la parte que falta. Alinee antes las hojas (véase más arriba): la comparación usa la alineación, así que una hoja que solo se desplazó no muestra cambios. La línea de estado indica cuánto cambió.

Esto funciona con PDF trazados desde CAD, donde el dibujo está hecho de líneas. Las hojas escaneadas no tienen líneas que comparar: para ellas use la superposición de imagen. El texto escrito con una fuente (no dibujado como trazos) no se compara.

## Marcar los cambios

Mientras compara, está en la hoja nueva y todas las herramientas funcionan. Dibuje nubes alrededor de los cambios a medida que los encuentre; pertenecen a la hoja nueva y permanecen cuando deja de comparar.

{{ui:Nubear los cambios}} lo hace por usted: agrupa las líneas cambiadas que están cerca unas de otras y dibuja una nube de revisión alrededor de cada grupo en la hoja nueva, con "Cambiado desde <hoja antigua>" como comentario. Un {{key:Mod+Z}} las elimina todas; borre las que no necesite.

## Comparar un conjunto completo

Cuando la nueva emisión llega como su propio PDF, abra los dos PDF y abra {{ui:Comparar dos conjuntos}} en la pestaña {{ui:Comparar}}. Elija el archivo antiguo y el nuevo, y después elija {{ui:Comparar los conjuntos}}. Las hojas se emparejan por su número (como en [la hoja de sustitución](topic:slip-sheet-a-revised-set)), se comparan por sus líneas, y se listan con las más cambiadas primero. Elija una hoja de la lista para comparar esa pareja con {{ui:Líneas cambiadas}}.

{{ui:Nubear todos los cambios}} dibuja una nube en cada grupo de líneas cambiadas de cada hoja modificada, en un solo paso que puede deshacer. La comparación de conjuntos no alinea antes las hojas, así que una hoja que se desplazó en la página aparece como cambiada: compare esa pareja por separado y use {{ui:Alinear por dos puntos}}.

## Dejar de comparar

Elija {{ui:Dejar de comparar}}, o vaya a otra hoja. La alineación se recuerda para la misma pareja de hojas hasta que cierre el conjunto.

## Conviene saber

- Comparar trabaja con lo que está dibujado, píxel a píxel. No sabe que una línea se ha movido; muestra la posición antigua en un color y la nueva en el otro.
- El texto que cambió de disposición, una fecha cambiada en el cajetín o un estilo de trazado distinto también aparecen como cambios.
- Una hoja escaneada comparada con una trazada resulta ruidosa: el escaneo difumina y desplaza las líneas.
- Comparar texto escrito con una fuente, y una lista de lo que cambió, todavía no están implementados.
