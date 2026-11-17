---
title: Comparar dos revisiones
summary: Superponga una emisión anterior y una nueva de una hoja en dos colores, alinéelas por dos puntos y marque con nube lo que cambió.
keywords: comparar, superposición, superponer páginas, revisión, diferencias, cambios, anterior nueva, alinear, verificación, emisión, boletín
from: 62f5d1c5
---

Comparar superpone dos hojas. Las líneas solo en la hoja anterior se muestran en rojo, las líneas solo en la hoja nueva en azul, y las que están en ambas en gris atenuado. Los colores aparecen nombrados en la leyenda bajo la hoja: "Solo en la hoja anterior", "Solo en la hoja nueva", "En ambas".

## Compare dos hojas

1. Abra ambas emisiones. Pueden ser páginas del mismo PDF o de PDF distintos; ábralas juntas como un juego (vea [Trabajar con varios archivos a la vez](topic:several-files)).
2. Elija la pestaña {{ui:Comparar}} a la derecha.
3. Elija la {{ui:Hoja anterior}} y la {{ui:Hoja nueva}}. La hoja nueva empieza siendo la que tiene abierta. Cuando hay varios archivos abiertos, el nombre del archivo de cada hoja se muestra después de su nombre.
4. Elija {{ui:Comparar}}.

Resultado: MarkupCraft muestra la hoja nueva con la anterior mezclada, aparece la leyenda, y la pestaña dice "Comparando <old> (anterior) con <new> (nueva). Las marcas en la hoja nueva siguen siendo editables."

## Pase entre anterior y nueva

Arrastre el control deslizante {{ui:Anterior y nueva}}. Totalmente a la izquierda muestra solo la hoja anterior, totalmente a la derecha solo la nueva, y en medio ambas. Deslizar de un lado a otro suele ser la forma más rápida de ver un cambio pequeño.

## Alinee las hojas

Si las dos emisiones se trazaron con distinto margen, tamaño o rotación, todo parece cambiado. Corríjalo:

**Por dos puntos (lo mejor):**

1. Elija {{ui:Alinear por dos puntos}}. La vista muestra solo la hoja anterior.
2. Haga clic en un detalle nítido que pueda encontrar en ambas hojas, como la intersección de una cuadrícula de columnas. La pestaña cuenta los pasos ("1 de 4").
3. Haga clic en un segundo detalle, lejos del primero, como la esquina opuesta de la cuadrícula.
4. La vista cambia a la hoja nueva. Haga clic de nuevo en el primer detalle.
5. Haga clic de nuevo en el segundo detalle.

Resultado: "Alineada: hoja anterior escalada 100.00%, girada 0.00°. Ajuste para afinar." La hoja anterior se mueve, escala y gira para encajar. {{key:Esc}} cancela mientras elige los puntos. Acérquese a cada detalle antes de hacer clic para un ajuste preciso.

**Con desplazamientos:** use los cuatro botones de flecha bajo "Alinear" para mover la hoja anterior. Elija el paso (0.25, 1, 5 o 20 pt; 72 pt es una pulgada en el papel). La pestaña indica cuánto se ha movido.

{{ui:Restablecer}} quita la alineación y los desplazamientos.

## Solo líneas cambiadas

Debajo de los botones de alineación, elija {{ui:Líneas modificadas}} en lugar de {{ui:Superposición de imagen}}. MarkupCraft entonces compara las líneas propias de las dos hojas, no sus imágenes: la hoja nueva se muestra tal cual, con las líneas solo de la hoja anterior en rojo y las solo de la nueva en azul. Una línea que solo se acortó muestra únicamente la parte que falta. Alinee las hojas primero (vea arriba): la comparación usa la alineación, así que una hoja que solo se corrió no muestra cambios. La línea de estado indica cuánto cambió.

Esto funciona con PDF trazados desde CAD, donde el dibujo está hecho de líneas. Las hojas escaneadas no tienen líneas que comparar: use la superposición de imagen para ellas. El texto escrito con una fuente (no dibujado como trazos) no se compara.

## Marque los cambios

Mientras compara, está en la hoja nueva y todas las herramientas funcionan. Dibuje nubes alrededor de los cambios a medida que los encuentre; pertenecen a la hoja nueva y se mantienen cuando deja de comparar.

{{ui:Nube en los cambios}} lo hace por usted: agrupa las líneas cambiadas que están cerca entre sí y dibuja una nube de revisión alrededor de cada grupo en la hoja nueva, con "Cambiado desde <hoja anterior>" como comentario. Un {{key:Mod+Z}} las quita todas; borre las que no necesite.

## Compare un juego completo

Cuando la nueva emisión llega como su propio PDF, abra ambos PDF y abra {{ui:Comparar dos juegos}} en la pestaña {{ui:Comparar}}. Elija el archivo anterior y el nuevo, y luego elija {{ui:Comparar los juegos}}. Las hojas se emparejan por su número (como en [reemplazo de hojas](topic:slip-sheet-a-revised-set)), se comparan por sus líneas, y se listan con la más cambiada primero. Elija una hoja de la lista para comparar ese par con {{ui:Líneas modificadas}}.

{{ui:Nube en todos los cambios}} marca con nube cada grupo de líneas cambiadas en cada hoja modificada, en un solo paso que se puede deshacer. La comparación de juegos no alinea primero las hojas, así que una hoja que se corrió en la página aparece como cambiada: compare ese par por separado y use {{ui:Alinear por dos puntos}}.

## Deje de comparar

Elija {{ui:Dejar de comparar}}, o vaya a otra hoja. La alineación se recuerda para el mismo par de hojas hasta que cierre el juego.

## Conviene saber

- Comparar trabaja con lo que está dibujado, píxel por píxel. No sabe que una línea se movió; muestra la posición anterior en un color y la nueva posición en el otro.
- El texto que cambió de renglones, una fecha cambiada en el cajetín o un estilo de trazado distinto también aparecen como cambios.
- Una hoja escaneada comparada con una trazada tiene mucho ruido: el escaneo desenfoca y desplaza las líneas.
- Todavía no están implementados la comparación de texto escrito con una fuente ni una lista de lo que cambió.
