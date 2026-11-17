---
title: Qué se guarda en el PDF
summary: Qué contiene exactamente la copia anotada, qué ven otros programas de PDF y qué se vuelve a leer al abrir un archivo.
keywords: anotaciones pdf, comentarios, datos guardados, ida y vuelta, etiquetas de página, medida, estado de revisión, respuestas, interoperabilidad, compatibilidad, reabrir, datos privados
from: 6439ad28
---

La copia anotada es el PDF original con comentarios (anotaciones PDF) añadidos. Las propias páginas, sus dibujos, textos, marcadores y enlaces se copian tal como estaban.

## Cada anotación

| MarkupCraft | Se guarda como | Otros visores de PDF muestran |
|---|---|---|
| Rectángulo, nube de cuadro | Anotación Square (nube: borde en nube) | Un comentario de rectángulo o nube |
| Elipse | Anotación Circle | Un comentario de elipse |
| Polígono, nube libre | Anotación Polygon (nube: borde en nube) | Un comentario de polígono o nube |
| Polilínea | Anotación PolyLine | Un comentario de polilínea |
| Línea, flecha | Anotación Line (flecha: punta cerrada) | Un comentario de línea o flecha |
| Longitud | Anotación Line marcada como cota, con una medida | Una medida de longitud, cuando el visor la admite |
| Área | Anotación Polygon marcada como área, con una medida | Una medida de área, cuando se admite; si no, un polígono |
| Grupo de recuento | Una anotación Ink, un anillo por elemento; su texto es «grupo: n» | Un comentario de tinta |
| Lápiz, marcador | Anotación Ink (el marcador se indica como tal) | Un comentario de tinta |
| Texto | Anotación FreeText | Un comentario de cuadro de texto |
| Llamada | Anotación FreeText con una línea de llamada | Un comentario de llamada |
| Nota | Anotación Text | Una nota adhesiva que se abre con su texto |
| Sello | Anotación Stamp | Un comentario de sello |

Cada una se guarda con:

- **su propio aspecto**, dibujado exactamente como lo dibuja MarkupCraft en pantalla, de modo que se ve igual en cualquier visor e imprime igual, con la insignia del número de pendiente incluida;
- **el autor**, **las fechas de creación y modificación**, **el asunto**, **el texto del comentario** (en cuadros de texto y llamadas, el texto y el comentario), **el color** y **la opacidad**;
- **sus datos de MarkupCraft** en una entrada privada que ignoran otros programas: estado, elemento de pendiente, estilo y tipo, para que se reabra exactamente igual.

## Hilos y estados

- Cada respuesta se guarda como comentario de respuesta vinculado a su anotación, con su autor, fecha y texto. Las respuestas no tienen icono propio en la hoja.
- Cada cambio de estado se guarda como respuesta con un estado de revisión. Otras herramientas de revisión lo muestran como Aceptado, Rechazado o Completado; Abierto se guarda sin estado.
- Una anotación con un estado distinto de Abierto pero sin cambio de estado registrado recibe una respuesta de estado de revisión, para que otros programas vean también el estado.
- Las respuestas a comentarios de solo lectura del archivo original se guardan del mismo modo, vinculadas a ese comentario.

## Cada hoja

- **Escala:** una hoja calibrada recibe una ventana de medida que cubre la página (la forma estándar de guardar la escala de una página) y una copia propia de MarkupCraft de la calibración.
- **Número de hoja:** un número escrito con {{ui:Renombrar hoja}} pasa a ser la etiqueta de la página. Cuando alguna página de un archivo tiene una, todas las páginas de ese archivo reciben una etiqueta: su número escrito, si no su etiqueta anterior, y si no, su número de página.
- **Título de la hoja:** un título escrito se guarda solo para MarkupCraft; otros visores no lo muestran.

## Texto y caracteres

El texto se escribe en Helvetica, que tienen todos los visores de PDF. Las letras fuera del juego de caracteres de Europa occidental (Windows-1252) se imprimen como «?» en la copia; el mensaje de guardado las cuenta.

## Hojas de cálculo y justificaciones

Las hojas de cálculo y las justificaciones se guardan en una entrada privada del PDF llamada `/MarkupCraftShell`. Otros programas de PDF la ignoran. Una versión anterior de MarkupCraft también la ignora y la elimina la próxima vez que guarde ese archivo.

## Qué pasa con los comentarios que ya existían

Al abrir un PDF que ya tiene comentarios:

- Los comentarios propios de MarkupCraft se leen tal cual. Si otro programa movió o cambió el tamaño de uno, prevalece su nueva posición.
- Los rectángulos, elipses, líneas, polilíneas, polígonos, tinta, cuadros de texto y notas adhesivas de otros programas se convierten en anotaciones editables. **Al guardar, MarkupCraft elimina los originales y los vuelve a escribir a su manera**, con sus ventanas emergentes y respuestas. Su aspecto puede cambiar ligeramente.
- Los estados de revisión de otros programas fijan el estado; prevalece el más reciente.
- Todo lo demás (resaltados de texto, sellos de otros programas y tipos especiales) se **mantiene sin cambios** en la copia, en solo lectura.
- Los enlaces y los campos de formulario se mantienen sin cambios y no aparecen en la lista.

Volver a guardar el mismo archivo nunca duplica nada: las anotaciones que MarkupCraft leyó se reemplazan, no se vuelven a añadir.

## Lo que no cambia

Su archivo original en disco nunca cambia. La copia no está optimizada en tamaño, por lo que puede ser algo mayor que el original. Los PDF protegidos (cifrados) no se pueden guardar.
