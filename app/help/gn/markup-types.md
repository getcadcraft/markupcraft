---
title: Cada tipo de anotación
summary: Los diecisiete tipos de anotación, sus teclas, cómo se dibuja cada uno, su aspecto por defecto y cómo queda en el PDF guardado.
keywords: tipos de anotación, lista de herramientas, tipos de anotación, nube, llamada, texto, nota, sello, lápiz, resaltador, línea, flecha, rectángulo, elipse, polilínea, polígono, longitud, área, conteo
from: 29bf32e7
---

## Las herramientas

| Barra de herramientas | Tecla | Cómo dibujar | Aspecto por defecto | En el PDF guardado |
|---|---|---|---|---|
| {{ui:Lápiz}} | {{key:P}} | Arrastrar | Rojo, 1.5 pt | Tinta |
| {{ui:Resaltado}} | {{key:I}} | Arrastrar | Amarillo, 14 pt de ancho, transparente, tiñe lo que está debajo | Tinta (marcada como trazo de resaltador) |
| {{ui:Línea}} | {{key:L}} | Arrastrar, o hacer clic en inicio y final | Rojo, 2 pt | Línea |
| {{ui:Flecha}} | {{key:A}} | Arrastrar, o hacer clic en inicio y final | Rojo, 2 pt, punta cerrada al final | Línea con punta de flecha |
| {{ui:Arco}} | {{key:O}} | Hacer clic en el inicio, en un punto del arco y luego en el final | Rojo, 2 pt | Polilínea a lo largo del arco |
| {{ui:Rectángulo}} | {{key:R}} | Arrastrar un cuadro | Rojo, 2 pt, sin relleno | Cuadrado |
| {{ui:Elipse}} | {{key:E}} | Arrastrar un cuadro | Rojo, 2 pt, sin relleno | Círculo |
| {{ui:Polilínea}} | {{key:Y}} | Hacer clic en puntos, doble clic para terminar | Rojo, 2 pt | Polilínea |
| {{ui:Polígono}} | {{key:G}} | Hacer clic en puntos, doble clic para terminar | Rojo, 2 pt, sin relleno | Polígono |
| {{ui:Nube}} | {{key:C}} | Arrastrar un cuadro | Rojo, ondas de 1.5 pt | Cuadrado con borde de nube |
| {{ui:Nube libre}} | {{key:Shift+C}} | Hacer clic en puntos, doble clic para terminar | Rojo, ondas de 1.5 pt | Polígono con borde de nube |
| {{ui:Llamada}} | {{key:K}} | Presionar en el punto, arrastrar hasta el texto, escribir | Texto y guía en rojo, 1 pt, texto de 12 pt | Cuadro de texto con guía de llamada |
| {{ui:Texto}} | {{key:T}} | Hacer clic o arrastrar un cuadro, escribir | Texto rojo de 12 pt, sin borde | Cuadro de texto |
| {{ui:Nota}} | {{key:N}} | Hacer clic, escribir | Ícono de nota amarillo | Nota adhesiva |
| {{ui:Sello}} | {{key:S}} | Elegir un sello, hacer clic o arrastrar | Mayúsculas con marco y "Por <nombre>, <fecha>"; coloreado según su significado | Sello |
| {{ui:Longitud}} | {{key:M}} | Hacer clic en inicio y final (necesita una escala) | Línea de cota azul con marcas y la longitud | Línea marcada como cota, con una medida |
| {{ui:Ángulo}} | {{key:X}} | Hacer clic en el extremo de un brazo, en el vértice y luego en el extremo del otro brazo | Brazos azules, un pequeño arco en el vértice y el ángulo en grados | Polilínea con el ángulo como texto |
| {{ui:Área}} | {{key:Q}} | Hacer clic en las esquinas, doble clic para terminar (necesita una escala) | Contorno azul, relleno celeste, área y perímetro | Polígono marcado como área, con una medida |
| {{ui:Contar}} | {{key:U}} | Hacer clic en cada elemento | Puntos naranjas numerados y una etiqueta "grupo: n" | Un comentario de tinta por grupo, un anillo por elemento |

En táctil, "doble clic para terminar" es un doble toque, y "clic" es un toque que actúa al levantar el dedo (para puntos, notas y conteos).

## Lo que lleva cada anotación

| Campo | Dónde se ve |
|---|---|
| Autor | {{ui:Propiedades}}, la lista, la segunda línea del sello, otros visores de PDF |
| Creada y modificada | {{ui:Propiedades}} (en su zona horaria), la lista, el CSV |
| Estado | Abierto, Aceptado, Rechazado o Completado |
| Asunto | Una etiqueta corta; por defecto el tipo ("Nube", "Cuadro de texto", "Medición de longitud") |
| Comentario | Notas más largas. En una nota, su texto es su comentario. |
| Texto | Solo cuadros de texto y llamadas |
| Respuestas | El hilo, con los cambios de estado |
| Ítem de pendiente | Número, asignado, fecha límite, estado del ítem, cuando se agrega a la {{ui:Lista de pendientes}} |
| Estilo | Color, ancho de línea, relleno y opacidad del relleno (formas cerradas, texto y llamadas), opacidad, tamaño de texto (texto, llamadas y medidas) |

## Comentarios de solo lectura

Los comentarios que vinieron con el archivo y que MarkupCraft no puede editar (resaltados de texto, sellos de otros programas y otros tipos especiales) aparecen con el tipo "Otro" y la etiqueta de estado "Solo lectura". Conservan exactamente el aspecto que les da el archivo. Se pueden seleccionar, ver su autor, asunto y comentario, y responderles.

## Todavía no implementado

Los adjuntos de archivo todavía no están hechos. Cualquier anotación puede enlazar a una hoja; ver [Enlaces a hojas](topic:sheet-links). Las imágenes y firmas se colocan con la herramienta {{ui:Sello}}; ver [Sellos y notas](topic:stamps-and-notes). Ver [Lo que todavía no está hecho](topic:not-built-yet).
