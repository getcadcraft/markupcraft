---
title: Cada tipo de marca
summary: Los diecisiete tipos de marca, sus teclas, cómo se dibuja cada uno, su apariencia por defecto y lo que se convierte en el PDF guardado.
keywords: tipos de marca, lista de herramientas, tipos de anotación, nube, llamada, texto, nota, sello, pluma, resaltado, línea, flecha, rectángulo, elipse, polilínea, polígono, longitud, área, conteo
from: 29bf32e7
---

## Las herramientas

| Barra de herramientas | Tecla | Cómo dibujar | Apariencia por defecto | En el PDF guardado |
|---|---|---|---|---|
| {{ui:Pluma}} | {{key:P}} | Arrastre | Rojo, 1.5 pt | Tinta |
| {{ui:Resaltado}} | {{key:I}} | Arrastre | Amarillo, 14 pt de ancho, translúcido, tiñe lo que queda debajo | Tinta (marcada como trazo de resaltado) |
| {{ui:Línea}} | {{key:L}} | Arrastre, o clic en inicio y final | Rojo, 2 pt | Línea |
| {{ui:Flecha}} | {{key:A}} | Arrastre, o clic en inicio y final | Rojo, 2 pt, punta cerrada al final | Línea con punta de flecha |
| {{ui:Arco}} | {{key:O}} | Clic en el inicio, un punto del arco y luego el final | Rojo, 2 pt | Polilínea a lo largo del arco |
| {{ui:Rectángulo}} | {{key:R}} | Arrastre un cuadro | Rojo, 2 pt, sin relleno | Cuadrado |
| {{ui:Elipse}} | {{key:E}} | Arrastre un cuadro | Rojo, 2 pt, sin relleno | Círculo |
| {{ui:Polilínea}} | {{key:Y}} | Clic en puntos, doble clic para terminar | Rojo, 2 pt | Polilínea |
| {{ui:Polígono}} | {{key:G}} | Clic en puntos, doble clic para terminar | Rojo, 2 pt, sin relleno | Polígono |
| {{ui:Nube}} | {{key:C}} | Arrastre un cuadro | Rojo, festones de 1.5 pt | Cuadrado con borde de nube |
| {{ui:Nube libre}} | {{key:Shift+C}} | Clic en puntos, doble clic para terminar | Rojo, festones de 1.5 pt | Polígono con borde de nube |
| {{ui:Llamada}} | {{key:K}} | Presione sobre el punto, arrastre hasta el texto, escriba | Texto y directriz rojos, 1 pt, texto de 12 pt | Cuadro de texto con directriz de llamada |
| {{ui:Texto}} | {{key:T}} | Clic o arrastre un cuadro, escriba | Texto rojo de 12 pt, sin borde | Cuadro de texto |
| {{ui:Nota}} | {{key:N}} | Clic, escriba | Icono de nota amarillo | Nota adhesiva |
| {{ui:Sello}} | {{key:S}} | Elija un sello, clic o arrastre | Mayúsculas con marco más "Por <nombre>, <fecha>"; color según su significado | Sello |
| {{ui:Longitud}} | {{key:M}} | Clic en inicio y final (necesita una escala) | Línea de cota azul con marcas y la longitud | Línea marcada como cota, con una medida |
| {{ui:Ángulo}} | {{key:X}} | Clic en el extremo de un brazo, en la esquina y en el extremo del otro brazo | Brazos azules, un pequeño arco en la esquina y el ángulo en grados | Polilínea con el ángulo como texto |
| {{ui:Área}} | {{key:Q}} | Clic en las esquinas, doble clic para terminar (necesita una escala) | Contorno azul, relleno azul claro, área y perímetro | Polígono marcado como área, con una medida |
| {{ui:Conteo}} | {{key:U}} | Clic en cada elemento | Puntos numerados naranjas y una etiqueta "grupo: n" | Un comentario de tinta por grupo, un anillo por elemento |

En pantalla táctil, «doble clic para terminar» es un doble toque, y «clic» es un toque que actúa al levantar el dedo (para puntos, notas y conteos).

## Lo que lleva cada marca

| Campo | Dónde lo ve |
|---|---|
| Autor | {{ui:Propiedades}}, la lista, la segunda línea del sello, otros visores de PDF |
| Creación y modificación | {{ui:Propiedades}} (en su zona horaria), la lista, el CSV |
| Estado | Abierto, Aceptado, Rechazado o Completado |
| Asunto | Una etiqueta corta; por defecto es el tipo («Nube», «Cuadro de texto», «Medida de longitud») |
| Comentario | Notas más largas. En una nota, su texto es su comentario. |
| Texto | Solo cuadros de texto y llamadas |
| Respuestas | La conversación, con los cambios de estado |
| Elemento de pendientes | Número, persona asignada, fecha límite, estado del elemento, cuando se agrega a la lista de pendientes |
| Estilo | Color, grosor de línea, relleno y opacidad del relleno (formas cerradas, texto y llamadas), opacidad, tamaño del texto (texto, llamadas y medidas) |

## Comentarios de solo lectura

Los comentarios que vienen con el archivo y que MarkupCraft no puede editar (resaltados de texto, sellos de otros programas y otros tipos especiales) aparecen con el tipo «Otro» y la etiqueta de estado «Solo lectura». Conservan exactamente el aspecto que les da el archivo. Puede seleccionarlos, ver su autor, asunto y comentario, y responderles.

## Aún no implementado

Los archivos adjuntos todavía no están implementados. Cualquier marca puede vincularse a una hoja; vea [Vínculos a hojas](topic:sheet-links). Las imágenes y las firmas se colocan con la herramienta {{ui:Sello}}; vea [Sellos y notas](topic:stamps-and-notes). Vea [Lo que todavía no está implementado](topic:not-built-yet).
