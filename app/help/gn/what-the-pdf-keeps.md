---
title: Mba'épa oñemboguara PDF-pe
summary: Techapyrã oĩva copia anotada-pe, mba'épa ohecha ambue PDF programa-kuéra, ha mba'épa oñeme'ẽ jey oñeme'ẽ jave archivo.
keywords: anotaciones pdf, comentarios, datos guardados, ida y vuelta, etiquetas de página, medición, estado de revisión, respuestas, interoperabilidad, compatibilidad, reabrir, datos privados
from: 6439ad28
---

Copia anotada ha'e PDF original, oñemoĩvo comentario-kuéra (anotaciones PDF). Página-kuéra, ilustración-kuéra, texto, marcador-kuéra ha enlace-kuéra oñemoĩ jey ha'e jeýpe.

## Cada anotación

| MarkupCraft | Guardado como | Otros visores PDF muestran |
|---|---|---|
| Rectángulo, nube de cajas | Anotación cuadrada (nube: borde nubarrón) | Un comentario rectángulo o nube |
| Elipse | Anotación círculo | Un comentario elipse |
| Polígono, nube libre | Anotación polígono (nube: borde nubarrón) | Un comentario polígono o nube |
| Polilínea | Anotación PolyLine | Un comentario polilínea |
| Línea, flecha | Anotación línea (flecha: punta cerrada) | Un comentario línea o flecha |
| Longitud | Anotación línea marcada como cota, con medida | Una medida de longitud, donde el visor la admite |
| Superficie | Anotación polígono marcada como superficie, con medida | Una medida de superficie, donde se admite; si no, un polígono |
| Grupo de conteo | Una anotación de tinta, un anillo por ítem; su texto es "group: n" | Un comentario de tinta |
| Lápiz, resaltador | Anotación de tinta (resaltador marcado como tal) | Un comentario de tinta |
| Texto | Anotación FreeText | Un comentario de cuadro de texto |
| Llamada | Anotación FreeText con guía de llamada | Un comentario de llamada |
| Nota | Anotación de texto | Una nota adhesiva que se abre con su texto |
| Sello | Anotación sello | Un comentario sello |

Cada una se guarda con:

- **su propia apariencia**, dibujada igual que MarkupCraft la dibuja en pantalla, así se ve igual en cualquier visor y se imprime igual, con la insignia del número de punch;
- **el autor**, **las fechas de creación y modificación**, **el asunto**, **el texto del comentario** (en cuadros de texto y llamadas, el texto y el comentario), **el color** y **la opacidad**;
- **sus datos de MarkupCraft** en una entrada privada que otros programas ignoran: estado, ítem de punch, estilo y tipo, para que se reabra exactamente igual.

## Hilos y estados

- Cada respuesta se guarda como comentario de respuesta vinculado a su anotación, con su autor, fecha y texto. Las respuestas no tienen icono propio en la hoja.
- Cada cambio de estado se guarda como respuesta con un estado de revisión. Otras herramientas de revisión lo muestran como Accepted, Rejected o Completed; Open se guarda sin estado.
- Una anotación con estado distinto de Open pero sin cambio de estado registrado recibe una respuesta de estado de revisión, para que otros programas también vean el estado.
- Las respuestas a comentarios de solo lectura del archivo original se guardan igual, vinculadas a ese comentario.

## Cada hoja

- **Escala:** una hoja calibrada recibe un área de medición que cubre la página (la forma estándar de guardar la escala de página) y la copia propia de MarkupCraft de la calibración.
- **Número de hoja:** un número escrito con {{ui:Renombrar hoja}} pasa a ser la etiqueta de la página. Cuando alguna página de un archivo tiene una, cada página de ese archivo recibe una etiqueta: su número escrito, si no su etiqueta anterior, si no su número de página.
- **Título de hoja:** un título escrito se guarda solo para MarkupCraft; otros visores no lo muestran.

## Texto y caracteres

El texto se escribe en Helvetica, que tiene todo visor PDF. Las letras fuera del conjunto Europa Occidental (Windows-1252) se imprimen como "?" en la copia; el mensaje de guardado las cuenta.

## Hojas de cálculo y razones

Las hojas de cálculo y las razones se guardan en una entrada privada del PDF llamada `/MarkupCraftShell`. Otros programas PDF la ignoran. Un MarkupCraft anterior también la ignora y la descarta la próxima vez que guarde ese archivo.

## Qué pasa con los comentarios que ya estaban

Cuando abrís un PDF que ya tiene comentarios:

- Los comentarios propios de MarkupCraft se leen exactamente. Si otro programa movió o cambió el tamaño de uno, gana su nueva posición.
- Rectángulos, elipses, líneas, polilíneas, polígonos, tinta, cuadros de texto y notas adhesivas de otros programas pasan a ser anotaciones editables. **Al guardar, MarkupCraft quita los originales y los vuelve a escribir a su manera**, con sus ventanas emergentes y respuestas. Su aspecto puede cambiar un poco.
- Los estados de revisión de otros programas fijan el estado; gana el más nuevo.
- Todo lo demás (resaltados de texto, sellos de otros programas y tipos especiales) se **mantiene sin tocar** en la copia, solo de lectura.
- Enlaces y campos de formulario se mantienen sin tocar y no se listan.

Guardar el mismo archivo otra vez nunca duplica nada: las anotaciones que MarkupCraft leyó se reemplazan, no se agregan de nuevo.

## Lo que no cambia

El archivo original en disco nunca se modifica. La copia no está optimizada en tamaño, así que puede ser algo más grande que el original. Los PDF protegidos (cifrados) no se pueden guardar.
