---
title: Sustituir hojas con un juego revisado
summary: Abra la nueva emisión de un juego de planos junto a la anterior y pase cada marca abierta a la hoja con el mismo número.
keywords: hoja de reemplazo, reemplazar hojas, juego revisado, nueva emisión, revisión, sustituir, sustituida, pasar hacia adelante, reemitir, adenda, boletín
from: e15163a0
---

Cuando llega una nueva emisión de los planos, la sustitución de hojas traslada su revisión a ella: cada hoja nueva toma las marcas de la hoja anterior con el mismo número, y la hoja anterior se sella como "Reemplazado".

## Sustituir hojas

1. Abra el juego actual, con sus marcas.
2. Elija {{ui:Páginas}}, luego {{ui:Sustituir hojas con un juego revisado…}}, y elija los PDF nuevos. Se abren junto al juego anterior.
3. El cuadro enumera cada hoja nueva y la hoja anterior a la que reemplaza. Desmarque una fila para dejar las marcas de esa hoja donde están. Las hojas con número nuevo no tienen nada que pasar.
4. Elija si dejar las marcas cerradas (Aceptado, Rechazado, Completado) en las hojas anteriores, y si sellar las hojas anteriores.
5. Elija {{ui:Pasar las marcas}}.

Resultado: las marcas aparecen en las hojas nuevas en el mismo lugar, con sus respuestas, estados y autores. Un elemento pendiente pasa a la hoja nueva y conserva su número. Las hojas anteriores conservan sus marcas como registro, bajo un sello rojo "Reemplazado". La barra de estado resume lo que se trasladó.

{{ui:Solo abrir los archivos}} abre el juego nuevo sin pasar nada, por ejemplo para comparar primero. Vea [Comparar dos revisiones](topic:compare-revisions).

## Cómo se emparejan las hojas

- **Por número de hoja**, tal como lo muestra la lista de hojas: un número que escribió con {{ui:Cambiar nombre de la hoja}}, la etiqueta de página del PDF o el cajetín. Las mayúsculas, los espacios, los puntos y los guiones no importan: "A-101" coincide con "a101".
- Si dos archivos abiertos tienen una hoja con ese número, se reemplaza la más reciente, así que puede sustituir emisión tras emisión.
- **Los juegos escaneados** no tienen números que leer. Cuando un archivo nuevo no los tiene, sus páginas se emparejan en orden de página con un archivo abierto que tenga el mismo número de páginas. Revise esas filas antes de pasarlas.

## Conviene saber

- Un solo {{key:Mod+Z}} deshace toda la sustitución: las copias, los sellos y los elementos pendientes trasladados. Los archivos nuevos siguen abiertos.
- Si una hoja nueva tiene otro tamaño, las marcas se escalan con la página, y la barra de estado indica cuántas conviene revisar.
- La escala de una hoja anterior pasa a la nueva cuando la nueva tiene el mismo tamaño y no tiene escala.
- Los comentarios hechos por otros programas se quedan en las hojas anteriores: aquí son de solo lectura.
- Guarde los archivos nuevos para conservar las marcas trasladadas. Vea [Guardar el PDF con marcas](topic:save-the-marked-up-pdf).
