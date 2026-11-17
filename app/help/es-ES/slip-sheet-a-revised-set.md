---
title: Insertar hojas de una emisión revisada
summary: Abra la nueva emisión de un juego de planos junto a la anterior y lleve cada anotación abierta a la hoja con el mismo número.
keywords: insertar hojas, emisión revisada, nueva emisión, revisión, sustituida, sustituir, pasar anotaciones, reemplazar hojas, reemitir, adenda, boletín
from: e15163a0
---

Cuando llega una nueva emisión de los planos, insertar hojas traslada su revisión a ella: cada hoja nueva recibe las anotaciones de la hoja antigua con el mismo número, y la hoja antigua se marca con un sello «Sustituida».

## Insertar hojas

1. Abra el conjunto actual, con sus anotaciones.
2. Elija {{ui:Páginas}} y luego {{ui:Insertar hojas de una emisión revisada…}}, y elija los PDF nuevos. Se abren junto al conjunto antiguo.
3. El cuadro enumera cada hoja nueva y la hoja antigua a la que sustituye. Desmarque una fila para dejar las anotaciones de esa hoja donde están. Las hojas con un número nuevo no tienen nada que llevar.
4. Elija si dejar las anotaciones cerradas (Aceptada, Rechazada, Completada) en las hojas antiguas, y si marcar las hojas antiguas con un sello.
5. Elija {{ui:Pasar las anotaciones}}.

Resultado: las anotaciones aparecen en las hojas nuevas en el mismo lugar, con sus respuestas, estados y autores. Un pendiente se traslada a la hoja nueva y conserva su número. Las hojas antiguas conservan sus anotaciones como registro, bajo un sello rojo «Sustituida». La barra de estado resume lo que se trasladó.

{{ui:Solo abrir los archivos}} abre el nuevo conjunto sin trasladar nada, por ejemplo para comparar antes. Véase [Comparar dos revisiones](topic:compare-revisions).

## Cómo se emparejan las hojas

- **Por número de hoja**, leído tal como lo muestra la lista de hojas: un número que escribió con {{ui:Renombrar hoja}}, la etiqueta de página del PDF o el cajetín. No importan las mayúsculas, los espacios, los puntos ni los guiones: «A-101» coincide con «a101».
- Si dos archivos abiertos tienen una hoja con ese número, se sustituye la más reciente, de modo que puede insertar emisión tras emisión.
- **Los conjuntos escaneados** no tienen números que leer. Cuando un archivo nuevo no los tiene, sus páginas se emparejan en orden de página con un archivo abierto que tenga el mismo número de páginas. Revise esas filas antes de trasladar.

## Conviene saber

- Un solo {{key:Mod+Z}} deshace toda la inserción: las copias, los sellos y los pendientes trasladados. Los archivos nuevos siguen abiertos.
- Si una hoja nueva tiene otro tamaño, las anotaciones se escalan con la página, y la barra de estado indica cuántas conviene revisar.
- La escala de una hoja antigua se traslada cuando la hoja nueva tiene el mismo tamaño y no tiene escala.
- Los comentarios hechos por otros programas se quedan en las hojas antiguas: aquí son de solo lectura.
- Guarde los archivos nuevos para conservar las anotaciones trasladadas. Véase [Guardar el PDF con anotaciones](topic:save-the-marked-up-pdf).
