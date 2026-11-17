---
title: Si viene de otro software de marcado
summary: Cómo los hábitos de un programa de marcado de PDF de escritorio se corresponden con MarkupCraft, y las diferencias que suelen sorprender.
keywords: cambiar, migrar, familiar, marcado de PDF de escritorio, caja de herramientas, lista de marcas, superposición, sesiones, perfil, atajos, diferencias
from: c8f323e1
---

Si revisa dibujos en Bluebeam Revu (o comenta PDF en otro programa de PDF de escritorio), la mayor parte de MarkupCraft le resultará familiar: nubes, llamadas, una caja de herramientas, una lista de marcas, estados con respuestas, mediciones calibradas, superposiciones de hojas. La gran diferencia es cómo se manejan los archivos, así que lea la siguiente sección aunque omita el resto.

## Las cinco diferencias que importan

1. **Guardar crea un archivo nuevo.** MarkupCraft funciona en el navegador y no puede escribir sobre el PDF de su disco. {{ui:Guardar}} descarga "<name> (marked up).pdf" y el original queda como estaba. La próxima vez, abra la copia "(marked up)" y limpie las copias viejas por su cuenta.
2. **El PDF se guarda cuando usted guarda.** Hasta entonces, una copia de recuperación en este navegador conserva sus marcas aunque haya un fallo o se cierre una pestaña, y MarkupCraft se la ofrece la próxima vez. Es una red de seguridad: guarde el PDF para conservar la revisión.
3. **Su perfil vive en el navegador.** Su nombre de autor, la configuración de herramientas y la caja de herramientas se guardan en este navegador, en esta computadora. Un navegador o una computadora distinta empieza de cero, y borrar los datos del sitio los elimina. Exporte su caja de herramientas como respaldo. Vea [Qué se guarda en este navegador](topic:browser-storage).
4. **Todavía no hay sesiones compartidas.** No hay una sesión de revisión en vivo y compartida, ni un proyecto en la nube. La revisión viaja en el PDF: guarde, envíe la copia, la siguiente persona responde y guarda.
5. **La escala es por hoja, y solo por hoja.** No hay ventanas gráficas dentro de una hoja ni "aplicar esta escala a todas las páginas". Calibre cada hoja que mida.

## Hábito por hábito

| Está acostumbrado a | En MarkupCraft |
|---|---|
| Panel de miniaturas, etiquetas de página | {{ui:Hojas}} a la izquierda. Los nombres vienen de las etiquetas de página o se leen del cajetín; corríjalos con {{ui:Cambiar nombre de la hoja}}. |
| Abrir varios PDF como un juego | Ábralos todos a la vez; se convierten en una sola lista. No se guarda ningún archivo de juego: abra los mismos PDF la próxima vez. |
| Caja de herramientas con conjuntos de herramientas | Pestaña {{ui:Herramientas}}: una caja por navegador, herramientas guardadas con estilo y asunto. Compártalas con {{ui:Exportar}} e {{ui:Importar}} como archivo JSON. Los archivos de conjuntos de herramientas de otros programas no se pueden importar. |
| Panel de propiedades | Pestaña {{ui:Propiedades}}: estado, asunto, comentario, estilo, respuestas y elemento de la lista de pendientes en un solo lugar. |
| Lista de marcas con columnas | Pestaña {{ui:Marcas}} con filtros por hoja, autor, estado y tipo. Exporte CSV o BCF. Sin columnas personalizadas y sin resumen de PDF u hoja de cálculo todavía. |
| Estado y estado de revisión | {{ui:Estado}}: Abierta, Aceptada, Rechazada, Completada. Sin conjuntos de estados personalizados. Se guardan como estados de revisión estándar. |
| Respuestas en una marca | El hilo "Respuestas" en {{ui:Propiedades}}, con los cambios de estado registrados. Una respuesta enviada no se puede editar. |
| Calibrar, luego longitud, área, conteo | {{ui:Calibrar}}, {{ui:Longitud}} ({{key:M}}), {{ui:Área}} ({{key:Q}}, da área y perímetro), {{ui:Conteo}} ({{key:U}}). Todavía no hay ángulo, radio, volumen, longitud de polilínea ni recortes. |
| Superponer páginas | {{ui:Comparar}}: rojo para lo anterior, azul para lo nuevo, alinear por dos puntos. Sin "comparar documentos" automático con nubes. |
| Sellos | {{ui:Sello}} con seis sellos integrados y texto personalizado, firmado con su nombre y la fecha. Todavía no hay sellos de imagen ni de firma. |
| Seguimiento de pendientes o incidencias | Pestaña {{ui:Lista de pendientes}}: elementos numerados con responsable, fecha límite y estado; exportación CSV. |
| Sesión de colaboración en vivo | Todavía no disponible. Pase el PDF guardado. |
| Aplanar | Todavía no implementado. Las marcas se quedan como comentarios que otros visores pueden mostrar e imprimir. |
| Capas para marcas | Todavía no implementado. Use asuntos, autores y los filtros de la lista para ordenar los comentarios. |
| Hipervínculos entre hojas | Todavía no implementado. |
| Barra espaciadora para desplazar, rueda para hacer zoom | Igual: mantenga presionado {{key:Space}} y arrastre; la rueda hace zoom en el puntero. La rueda nunca desplaza la página. |

## Teclas que cambian

Muchas teclas de una sola letra son lo que podría esperar, pero verifique estas antes de que sus dedos las usen por usted:

- {{key:K}} es {{ui:Llamada}}, y {{key:Q}} es {{ui:Área}}. Si está acostumbrado a Q para llamadas, aquí iniciará un área.
- {{key:C}} es el cuadro {{ui:Nube}}; {{key:Shift+C}} es {{ui:Nube libre}}.
- {{key:M}} es {{ui:Longitud}}, {{key:U}} es {{ui:Conteo}}, {{key:Y}} es {{ui:Polilínea}}, {{key:G}} es {{ui:Polígono}}, {{key:I}} es {{ui:Resaltado}}.
- {{key:Mod+D}} duplica la selección (en lugar del marcador del navegador).
- {{key:Mod+Plus}} y {{key:Mod+Minus}} hacen zoom en la hoja, no en la página del navegador.
- Cualquier tecla se puede cambiar: vea más abajo.

:::tip
Si sus dedos conocen Bluebeam Revu, elija el estilo de menú {{ui:Revisión de PDF}} en {{ui:Configuración}} › {{ui:MarkupCraft}} › {{ui:Menús, teclas y ratón}}: una barra de menús (Archivo, Editar, Ver, Documento, Marca, Medir, Ventana) sobre una fila de herramientas de revisión, {{key:Q}} para una llamada, {{key:H}} para el resaltador, {{key:N}} para un polígono, y las mediciones en {{key:Alt+Shift}} con una letra. Cualquier tecla también se puede cambiar ahí. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).
:::

La lista completa está en [Teclado y ratón](topic:keyboard).

## Cosas que funcionan de forma distinta a lo esperado

- **Las herramientas se quedan activas.** Después de una nube, sigue dibujando nubes. {{key:Esc}} una vez limpia la selección; dos veces regresa a {{ui:Seleccionar}}.
- **El texto y las llamadas necesitan texto.** Si termina sin escribir nada, no se agrega ninguna marca. Las notas se guardan vacías.
- **Las mediciones necesitan primero una escala.** {{ui:Longitud}} y {{ui:Área}} cambian a {{ui:Calibrar}} en una hoja sin calibrar y vuelven después.
- **Comentarios de otros programas.** Los rectángulos, elipses, líneas, polilíneas, polígonos, tinta, cuadros de texto y notas adhesivas hechos en otros programas se vuelven marcas de MarkupCraft editables, y se reescriben a la manera de MarkupCraft al guardar (su aspecto puede cambiar un poco). Los resaltados de texto, los sellos de otros programas y otros tipos especiales quedan de solo lectura: puede responderles, pero no cambiarlos.
- **Los caracteres fuera de las letras de Europa occidental** se imprimen como "?" en el PDF guardado. Vea [Guardar el PDF marcado](topic:save-the-marked-up-pdf).
- **Las fechas de los sellos** usan UTC, así que un sello hecho tarde en la noche en América puede mostrar la fecha de mañana.
- **Las mediciones se trasladan** como comentarios de medición estándar, y cada hoja calibrada conserva su escala, así que un programa que lee mediciones de PDF normalmente puede mostrarlas. El comportamiento exacto depende de ese programa.

## Uso de ambos

Puede ir y venir. Los comentarios hechos en otros programas se abren en MarkupCraft, y el PDF "(marked up)" se abre en otros programas de PDF con todas las marcas, respuestas y estados visibles. Lo que solo MarkupCraft lee de vuelta (responsable, fecha límite y estado del elemento de la lista de pendientes) se guarda en el archivo para MarkupCraft.
