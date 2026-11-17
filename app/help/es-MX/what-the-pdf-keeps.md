---
title: Lo que se guarda en el PDF
summary: Qué contiene exactamente la copia con marcas, qué ven otros programas de PDF y qué se vuelve a leer al abrir un archivo.
keywords: anotaciones pdf, comentarios, datos guardados, ida y vuelta, etiquetas de página, medición, estado de revisión, respuestas, interoperabilidad, compatibilidad, reabrir, datos privados
from: 6439ad28
---

La copia con marcas es el PDF original con comentarios (anotaciones PDF) agregados. Las páginas, sus dibujos, texto, marcadores y vínculos se copian tal como estaban.

## Cada marca

| MarkupCraft | Se guarda como | Otros visores de PDF muestran |
|---|---|---|
| Rectángulo, nube en cuadro | Anotación Square (nube: borde en nube) | Un comentario de rectángulo o nube |
| Elipse | Anotación Circle | Un comentario de elipse |
| Polígono, nube libre | Anotación Polygon (nube: borde en nube) | Un comentario de polígono o nube |
| Polilínea | Anotación PolyLine | Un comentario de polilínea |
| Línea, flecha | Anotación Line (flecha: punta cerrada) | Un comentario de línea o flecha |
| Longitud | Anotación Line marcada como cota, con una medición | Una medición de longitud, donde el visor la admita |
| Área | Anotación Polygon marcada como área, con una medición | Una medición de área, donde se admita; si no, un polígono |
| Grupo de conteo | Una anotación Ink, un anillo por elemento; su texto es "group: n" | Un comentario de tinta |
| Lápiz, resaltador | Anotación Ink (resaltador marcado como tal) | Un comentario de tinta |
| Texto | Anotación FreeText | Un comentario de cuadro de texto |
| Llamada | Anotación FreeText con directriz de llamada | Un comentario de llamada |
| Nota | Anotación Text | Una nota adhesiva que se abre con su texto |
| Sello | Anotación Stamp | Un comentario de sello |

Cada una se guarda con:

- **su propia apariencia**, dibujada exactamente como MarkupCraft la dibuja en pantalla, para que se vea igual en cualquier visor y se imprima igual, incluida la insignia del número de pendiente;
- **el autor**, **las fechas de creación y de modificación**, **el asunto**, **el texto del comentario** (en cuadros de texto y llamadas, el texto y el comentario), **el color** y **la opacidad**;
- **sus datos de MarkupCraft** en una entrada privada que otros programas ignoran: estado, elemento de pendiente, estilo y tipo, para que se reabra exactamente igual.

## Conversaciones y estados

- Cada respuesta se guarda como un comentario de respuesta vinculado a su marca, con su autor, fecha y texto. Las respuestas no tienen icono propio en la hoja.
- Cada cambio de estado se guarda como una respuesta que lleva un estado de revisión. Otras herramientas de revisión lo muestran como Aceptado, Rechazado o Completado; Abierto se guarda sin estado.
- Una marca con un estado distinto de Abierto, pero sin cambio de estado registrado, recibe una respuesta de estado de revisión, para que otros programas también vean el estado.
- Las respuestas a comentarios de solo lectura del archivo original se guardan de la misma forma, vinculadas a ese comentario.

## Cada hoja

- **Escala:** una hoja calibrada recibe una ventana gráfica de medición que cubre la página (la forma estándar de guardar la escala de una página) y la copia propia de MarkupCraft de la calibración.
- **Número de hoja:** un número escrito con {{ui:Cambiar nombre de la hoja}} se convierte en la etiqueta de página. Cuando alguna página de un archivo la tiene, cada página de ese archivo recibe una etiqueta: su número escrito; si no, su etiqueta anterior; si no, su número de página.
- **Título de la hoja:** un título escrito se guarda solo para MarkupCraft; otros visores no lo muestran.

## Texto y caracteres

El texto se escribe en Helvetica, que tienen todos los visores de PDF. Las letras fuera del conjunto de Europa occidental (Windows-1252) se imprimen como "?" en la copia; el mensaje de guardado las cuenta.

## Hojas de cálculo y motivos

Las hojas de cálculo y los motivos se guardan en una entrada privada del PDF llamada `/MarkupCraftShell`. Otros programas de PDF la ignoran. Un MarkupCraft anterior también la ignora y la descarta la próxima vez que guarda ese archivo.

## Qué pasa con los comentarios que ya existían

Al abrir un PDF que ya tiene comentarios:

- Los comentarios propios de MarkupCraft se vuelven a leer exactamente. Si otro programa movió o cambió el tamaño de uno, prevalece su nueva posición.
- Los rectángulos, elipses, líneas, polilíneas, polígonos, tinta, cuadros de texto y notas adhesivas de otros programas se convierten en marcas editables. **Al guardar, MarkupCraft elimina los originales y los vuelve a escribir a su manera**, con sus ventanas emergentes y respuestas. Su aspecto puede cambiar ligeramente.
- Los estados de revisión de otros programas fijan el estado; gana el más reciente.
- Todo lo demás (resaltados de texto, sellos de otros programas y tipos especiales) se **conserva sin cambios** en la copia, de solo lectura.
- Los vínculos y los campos de formulario se conservan sin cambios y no se enumeran.

Volver a guardar el mismo archivo nunca duplica nada: las marcas que MarkupCraft leyó se reemplazan, no se vuelven a agregar.

## Lo que no cambia

Su archivo original en disco nunca se modifica. La copia no está optimizada en tamaño, así que puede ser algo más grande que el original. Los PDF protegidos (cifrados) no se pueden guardar.
