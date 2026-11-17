---
title: Todos los tipos de anotación
summary: Los diecisiete tipos de anotación, sus teclas, cómo se dibuja cada uno, su aspecto por defecto y lo que se convierte en el PDF guardado.
keywords: tipos de anotación, lista de herramientas, tipos de anotación, nube, llamada, texto, nota, sello, lápiz, resaltador, línea, flecha, rectángulo, elipse, polilínea, polígono, longitud, área, recuento
from: 29bf32e7
---

## Las herramientas

| Barra de herramientas | Tecla | Cómo dibujar | Aspecto por defecto | En el PDF guardado |
|---|---|---|---|---|
| {{ui:Lápiz}} | {{key:P}} | Arrastrar | Rojo, 1.5 pt | Tinta |
| {{ui:Resaltar}} | {{key:I}} | Arrastrar | Amarillo, 14 pt de ancho, translúcido, tiñe lo que hay debajo | Tinta (marcada como trazo de resaltador) |
| {{ui:Línea}} | {{key:L}} | Arrastrar, o hacer clic en el inicio y el final | Rojo, 2 pt | Línea |
| {{ui:Flecha}} | {{key:A}} | Arrastrar, o hacer clic en el inicio y el final | Rojo, 2 pt, punta cerrada al final | Línea con punta de flecha |
| {{ui:Arco}} | {{key:O}} | Hacer clic en el inicio, en un punto del arco y después en el final | Rojo, 2 pt | Polilínea a lo largo del arco |
| {{ui:Rectángulo}} | {{key:R}} | Arrastrar un cuadro | Rojo, 2 pt, sin relleno | Cuadrado |
| {{ui:Elipse}} | {{key:E}} | Arrastrar un cuadro | Rojo, 2 pt, sin relleno | Círculo |
| {{ui:Polilínea}} | {{key:Y}} | Hacer clic en puntos, doble clic para terminar | Rojo, 2 pt | Polilínea |
| {{ui:Polígono}} | {{key:G}} | Hacer clic en puntos, doble clic para terminar | Rojo, 2 pt, sin relleno | Polígono |
| {{ui:Nube}} | {{key:C}} | Arrastrar un cuadro | Rojo, arcos de 1.5 pt | Cuadrado con borde de nube |
| {{ui:Nube libre}} | {{key:Shift+C}} | Hacer clic en puntos, doble clic para terminar | Rojo, arcos de 1.5 pt | Polígono con borde de nube |
| {{ui:Llamada}} | {{key:K}} | Pulsar sobre el punto, arrastrar hasta el texto, escribir | Texto y directriz en rojo, 1 pt, texto de 12 pt | Cuadro de texto con directriz de llamada |
| {{ui:Texto}} | {{key:T}} | Hacer clic o arrastrar un cuadro, escribir | Texto rojo de 12 pt, sin borde | Cuadro de texto |
| {{ui:Nota}} | {{key:N}} | Hacer clic, escribir | Icono de nota amarillo | Nota adhesiva |
| {{ui:Sello}} | {{key:S}} | Elegir un sello, hacer clic o arrastrar | Mayúsculas enmarcadas más «Por <nombre>, <fecha>»; color según su significado | Sello |
| {{ui:Longitud}} | {{key:M}} | Hacer clic en el inicio y el final (necesita escala) | Cota azul con marcas y la longitud | Línea marcada como cota, con una medición |
| {{ui:Ángulo}} | {{key:X}} | Hacer clic en el extremo de un brazo, en el vértice y en el extremo del otro brazo | Brazos azules, un pequeño arco en el vértice y el ángulo en grados | Polilínea con el ángulo como texto |
| {{ui:Área}} | {{key:Q}} | Hacer clic en las esquinas, doble clic para terminar (necesita escala) | Contorno azul, relleno azul claro, área y perímetro | Polígono marcado como área, con una medición |
| {{ui:Contar}} | {{key:U}} | Hacer clic en cada elemento | Puntos naranjas numerados y una etiqueta «grupo: n» | Un comentario de tinta por grupo, un anillo por elemento |

En táctil, «doble clic para terminar» es un doble toque, y «clic» es un toque que actúa al levantar el dedo (para puntos, notas y recuentos).

## Lo que lleva cada anotación

| Campo | Dónde se ve |
|---|---|
| Autor | {{ui:Propiedades}}, la lista, la segunda línea del sello, otros visores de PDF |
| Creación y modificación | {{ui:Propiedades}} (en su zona horaria), la lista, el CSV |
| Estado | Abierto, Aceptado, Rechazado o Completado |
| Asunto | Una etiqueta corta; por defecto, el tipo («Nube», «Cuadro de texto», «Medición de longitud») |
| Comentario | Notas más largas. En una nota, su texto es su comentario. |
| Texto | Solo cuadros de texto y llamadas |
| Respuestas | El hilo, con los cambios de estado |
| Elemento pendiente | Número, responsable, fecha límite, estado del elemento, cuando se añade a la lista de pendientes |
| Estilo | Color, grosor de línea, relleno y opacidad del relleno (formas cerradas, texto y llamadas), opacidad, tamaño del texto (texto, llamadas y mediciones) |

## Comentarios de solo lectura

Los comentarios que llegaron con el archivo y que MarkupCraft no puede editar (resaltados de texto, sellos de otros programas y otros tipos especiales) aparecen con el tipo «Otro» y la etiqueta de estado «Solo lectura». Conservan exactamente el aspecto que les da el archivo. Puede seleccionarlos, ver su autor, asunto y comentario, y responderles.

## Aún no disponible

Los archivos adjuntos todavía no están disponibles. Cualquier anotación puede enlazar a una hoja; véase [Enlaces a hojas](topic:sheet-links). Las imágenes y las firmas se colocan con la herramienta {{ui:Sello}}; véase [Sellos y notas](topic:stamps-and-notes). Véase [Lo que todavía no está disponible](topic:not-built-yet).
