---
title: Listar los cambios entre revisiones
summary: Compare dos juegos de planos y obtenga una lista sencilla, hoja por hoja, de dónde cambiaron el dibujo y las palabras, lista para leer, copiar o entregar a su asistente.
keywords: qué cambió, cambios, lista de revisión, lista de comparación, lista sencilla, narrar, asistente, delta, resumen de revisión
from: bab93d2e
---

Las herramientas de comparación muestran los cambios en la hoja. Esta herramienta los pone por escrito.

1. Abra ambas revisiones (véase [Abrir un juego de planos](topic:open-a-plan-set)).
2. Abra la pestaña {{ui:Comparar}} y después {{ui:Comparar un conjunto completo}}.
3. Elija el archivo anterior y el posterior y pulse {{ui:Listar los cambios}}.

La lista empieza con un recuento («2 de 14 hojas emparejadas cambiaron; 1 nueva; 1 eliminada») y después recorre cada hoja modificada, empezando por el cambio mayor: dónde está en la hoja (arriba a la izquierda, centro…), qué tamaño tiene, si se añadieron líneas, se quitaron o ambas cosas, cuántas anotaciones hay allí y qué palabras aparecieron o desaparecieron. En una hoja calibrada, el tamaño aparece en unidades reales además de en pulgadas sobre el papel.

La lista indica lo que hay en la página; no indica lo que significa. Que se mueva una línea dibujada puede ser un muro o una directriz. Su asistente conectado puede leer la lista con la herramienta `revisions_changes` y explicarla con palabras, y usted puede mirar la hoja para lo demás. {{ui:Copiar la lista}} la pone en el portapapeles y {{ui:CSV}} escribe una fila por cada cambio.

Las hojas se emparejan por número de hoja, como en [Sustituir hojas en un juego revisado](topic:slip-sheet-a-revised-set). Se ignoran los cambios menores de unos pocos puntos, y el texto que forma parte de una imagen (un escaneo) no tiene palabras que comparar.
