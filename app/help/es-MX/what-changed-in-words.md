---
title: Listar lo que cambió entre revisiones
summary: Compare dos juegos de planos y obtenga una lista simple, hoja por hoja, de dónde cambiaron el dibujo y las palabras, lista para leer, copiar o entregar a su asistente.
keywords: qué cambió, cambios, lista de revisión, lista de comparación, lista simple, narrar, asistente, delta, resumen de revisión
from: bab93d2e
---

Las herramientas de comparación muestran los cambios en la hoja. Esta herramienta los anota.

1. Abra ambas revisiones (vea [Abrir un juego de planos](topic:open-a-plan-set)).
2. Abra la pestaña {{ui:Comparar}} y luego {{ui:Comparar un juego completo}}.
3. Elija el archivo anterior y el posterior, y elija {{ui:Listar los cambios}}.

La lista empieza con un conteo ("2 de 14 hojas coincidentes cambiaron; 1 nueva; 1 eliminada") y luego cubre cada hoja cambiada, empezando por el cambio más grande: dónde está en la hoja (arriba a la izquierda, al centro…), qué tan grande es, si se agregaron líneas, se quitaron o ambas cosas, cuántas marcas hay allí y qué palabras aparecieron o desaparecieron. En una hoja calibrada, el tamaño aparece en unidades reales además de pulgadas en el papel.

La lista dice lo que hay en la página; no dice lo que significa. Una línea dibujada que se mueve podría ser un muro o una directriz. Su asistente conectado puede leer la lista con la herramienta `revisions_changes` y explicarla con palabras, y lo demás puede verlo en la hoja. {{ui:Copiar la lista}} la pone en el portapapeles y {{ui:CSV}} escribe una fila por cambio.

Las hojas se emparejan por número de hoja, como en [Insertar hojas de reemplazo en un juego revisado](topic:slip-sheet-a-revised-set). Se ignoran los cambios de unos pocos puntos, y el texto que forma parte de una imagen (un escaneo) no tiene palabras que comparar.
