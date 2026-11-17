---
title: Viene de otro software de anotación
summary: Cómo se corresponden los hábitos de un programa de anotación de PDF de escritorio con MarkupCraft, y las diferencias que sorprenden a la gente.
keywords: cambiar, migrar, familiar, anotación de PDF de escritorio, caja de herramientas, lista de anotaciones, superposición, sesiones, perfil, atajos, diferencias
from: c8f323e1
---

Si revisa planos en Bluebeam Revu (o comenta PDF en otro programa de PDF de escritorio), la mayor parte de MarkupCraft le resultará familiar: nubes, llamadas, una caja de herramientas, una lista de anotaciones, estados con respuestas, medidas calibradas, superposiciones de hojas. La gran diferencia está en cómo se manejan los archivos, así que lea la siguiente sección aunque se salte el resto.

## Las cinco diferencias que importan

1. **Guardar crea un archivo nuevo.** MarkupCraft funciona en el navegador y no puede sobrescribir el PDF de su disco. {{ui:Guardar}} descarga "<nombre> (marked up).pdf" y el original queda como estaba. La próxima vez, abra la copia "(marked up)", y limpie usted las copias antiguas.
2. **El PDF se guarda cuando guarda.** Hasta entonces, una copia de recuperación en este navegador conserva sus anotaciones ante un fallo o una pestaña cerrada, y MarkupCraft se la ofrece la próxima vez. Es una red de seguridad: guarde el PDF para conservar la revisión.
3. **Su perfil vive en el navegador.** Su nombre de autor, los ajustes de herramientas y la caja de herramientas se guardan en este navegador de este equipo. Otro navegador u otro equipo empieza de cero, y borrar los datos del sitio los elimina. Exporte su caja de herramientas como copia de seguridad. Véase [Qué se queda en este navegador](topic:browser-storage).
4. **Todavía no hay sesiones compartidas.** No hay una sesión de revisión en vivo y compartida, ni un proyecto en la nube. La revisión viaja en el PDF: guarde, envíe la copia, la siguiente persona responde y guarda.
5. **La escala es por hoja, y solo por hoja.** No hay ventanas gráficas dentro de una hoja ni "aplicar esta escala a todas las páginas". Calibre cada hoja que vaya a medir.

## Hábito por hábito

| Está acostumbrado a | En MarkupCraft |
|---|---|
| Panel de miniaturas, etiquetas de página | {{ui:Hojas}} a la izquierda. Los nombres vienen de las etiquetas de página o se leen del cajetín; corríjalos con {{ui:Renombrar hoja}}. |
| Abrir varios PDF como un conjunto | Ábralos todos a la vez; forman una sola lista. No se guarda ningún archivo de conjunto: vuelva a abrir los mismos PDF la próxima vez. |
| Caja de herramientas con conjuntos de herramientas | Pestaña {{ui:Herramientas}}: una caja por navegador, herramientas guardadas con estilo y asunto. Se comparten con {{ui:Exportar}} e {{ui:Importar}} como archivo JSON. Los archivos de conjuntos de herramientas de otros programas no se pueden importar. |
| Panel de propiedades | Pestaña {{ui:Propiedades}}: estado, asunto, comentario, estilo, respuestas y elemento de la lista de pendientes en un solo lugar. |
| Lista de anotaciones con columnas | Pestaña {{ui:Anotaciones}} con filtros por hoja, autor, estado y tipo. Exporta CSV o BCF. Todavía no hay columnas personalizadas ni resumen en PDF u hoja de cálculo. |
| Estado y situación de revisión | {{ui:Estado}}: Abierto, Aceptado, Rechazado, Completado. No hay conjuntos de estados personalizados. Se guardan como estados de revisión estándar. |
| Respuestas en una anotación | El hilo "Respuestas" en {{ui:Propiedades}}, con los cambios de estado registrados en él. Una respuesta enviada no se puede editar. |
| Calibrar, luego longitud, área, recuento | {{ui:Calibrar}}, {{ui:Longitud}} ({{key:M}}), {{ui:Área}} ({{key:Q}}, da área y perímetro), {{ui:Contar}} ({{key:U}}). Todavía no hay ángulo, radio, volumen, longitud de polilínea ni recortes. |
| Superponer páginas | Pestaña {{ui:Comparar}}: rojo para lo antiguo, azul para lo nuevo, alineación por dos puntos. No hay nubeado automático de "comparar documentos". |
| Sellos | {{ui:Sello}} con seis sellos integrados y texto personalizado, firmados con su nombre y la fecha. Todavía no hay sellos de imagen ni de firma. |
| Seguimiento de pendientes o de incidencias | Pestaña {{ui:Lista de pendientes}}: elementos numerados con responsable, fecha límite y estado; exportación CSV. |
| Sesión de colaboración en vivo | Todavía no disponible. Haga circular el PDF guardado. |
| Aplanar | Todavía no implementado. Las anotaciones siguen siendo comentarios que otros visores pueden mostrar e imprimir. |
| Capas para anotaciones | Todavía no implementadas. Use asuntos, autores y los filtros de la lista para ordenar los comentarios. |
| Enlaces entre hojas | Todavía no implementados. |
| Barra espaciadora para desplazar, rueda para hacer zoom | Igual: mantenga {{key:Space}} pulsado y arrastre; la rueda hace zoom en el puntero. La rueda nunca desplaza la página. |

## Teclas que cambian

Muchas teclas de una sola letra son lo que cabría esperar, pero compruebe estas antes de que sus dedos actúen por usted:

- {{key:K}} es {{ui:Llamada}}, y {{key:Q}} es {{ui:Área}}. Si está acostumbrado a usar Q para las llamadas, aquí iniciará un área.
- {{key:C}} es el cuadro {{ui:Nube}}; {{key:Shift+C}} es {{ui:Nube libre}}.
- {{key:M}} es {{ui:Longitud}}, {{key:U}} es {{ui:Contar}}, {{key:Y}} es {{ui:Polilínea}}, {{key:G}} es {{ui:Polígono}}, {{key:I}} es {{ui:Resaltar}}.
- {{key:Mod+D}} duplica la selección (en lugar del marcador del navegador).
- {{key:Mod+Plus}} y {{key:Mod+Minus}} hacen zoom en la hoja, no en la página del navegador.
- Cualquier tecla se puede cambiar: véase más abajo.

:::tip
Si sus dedos conocen Bluebeam Revu, elija el estilo de menú {{ui:Revisión de PDF}} en {{ui:Ajustes}} › {{ui:MarkupCraft}} › {{ui:Menús, teclas y ratón}}: una barra de menús (Archivo, Editar, Ver, Documento, Anotación, Medir, Ventana) sobre una fila de herramientas de revisión, {{key:Q}} para una llamada, {{key:H}} para el resaltador, {{key:N}} para un polígono, y las medidas en {{key:Alt+Shift}} con una letra. Cualquier tecla también se puede cambiar allí. Véase [Menús, teclas y ratón](topic:menus-keys-and-mouse).
:::

La lista completa está en [Teclado y ratón](topic:keyboard).

## Cosas que funcionan de otra manera a lo que cabría esperar

- **Las herramientas se quedan activas.** Después de una nube, sigue dibujando nubes. {{key:Esc}} una vez quita la selección; dos veces vuelve a {{ui:Seleccionar}}.
- **Los textos y las llamadas necesitan texto.** Si termina sin escribir nada, no se añade ninguna anotación. Las notas se guardan vacías.
- **Las medidas necesitan primero una escala.** {{ui:Longitud}} y {{ui:Área}} pasan a {{ui:Calibrar}} en una hoja sin calibrar y vuelven después.
- **Comentarios de otros programas.** Los rectángulos, elipses, líneas, polilíneas, polígonos, tinta, cuadros de texto y notas adhesivas creados en otro lugar se convierten en anotaciones de MarkupCraft editables, y se reescriben a la manera de MarkupCraft al guardar (su aspecto puede cambiar ligeramente). Los resaltados de texto, los sellos de otros programas y otros tipos especiales siguen siendo de solo lectura: puede responderlos, pero no cambiarlos.
- **Los caracteres fuera de las letras de Europa occidental** se imprimen como "?" en el PDF guardado. Véase [Guardar el PDF anotado](topic:save-the-marked-up-pdf).
- **Las fechas de los sellos** usan UTC, así que un sello hecho tarde por la noche en América puede mostrar la fecha de mañana.
- **Las medidas se conservan** como comentarios de medida estándar, y cada hoja calibrada mantiene su escala; así un programa que lee las medidas de un PDF normalmente puede mostrarlas. El comportamiento exacto depende de ese programa.

## Usar ambos

Puede ir y volver. Los comentarios hechos en otro programa se abren en MarkupCraft, y el PDF "(marked up)" se abre en otros programas de PDF con cada anotación, respuesta y estado visibles. Lo que solo MarkupCraft puede leer de nuevo (responsable y fecha límite del elemento de pendiente, estado del elemento) se conserva en el archivo para MarkupCraft.
