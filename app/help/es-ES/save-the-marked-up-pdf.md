---
title: Guardar el PDF con anotaciones
summary: Descargue una copia con todas las anotaciones escritas como comentarios PDF estándar, compruebe lo que ven otros lectores de PDF y siga trabajando en ella más adelante.
keywords: guardar, descargar, exportar pdf, con anotaciones, anotaciones, comentarios, compartir, enviar, incidencia, seguir trabajando, reabrir, ida y vuelta, imprimir
from: 4c198ebe
---

## Guardar

1. Elija {{ui:Guardar}} en la barra de herramientas, o pulse {{key:Mod+S}}.
2. Si hay varios archivos abiertos, elija {{ui:Este archivo}} (el archivo de la hoja en la que está) o {{ui:Todos los archivos modificados}}. Cada copia se descarga por separado.
3. Espere a que termine «Guardando <archivo>…». La primera vez que guarde en una sesión también se carga el generador de PDF.

Resultado: su navegador descarga «<nombre> (marked up).pdf», y la barra de estado lo indica: «Guardado A-Plans (marked up).pdf (24 anotaciones, 18.2 MB). El archivo original no ha cambiado.» El punto junto a {{ui:Guardar}} desaparece.

**Su PDF original nunca se modifica.** MarkupCraft escribe un archivo nuevo. Dónde se guarda depende de la configuración de descargas de su navegador (véase [Archivos que MarkupCraft abre y guarda](topic:files#where-downloads-go)).

## Seguir trabajando más adelante

La próxima vez, abra la copia «(marked up)» y no el original. Todo vuelve a ser editable: anotaciones, estados, respuestas, pendientes, la escala de cada hoja y los nombres de hoja que escribió. Si lo guarda de nuevo, se descarga un archivo con el mismo nombre «(marked up)»; su navegador puede añadir un número como «(1)» si la descarga anterior sigue en la carpeta. Sustituya o elimine usted mismo las copias antiguas.

MarkupCraft no guarda el PDF por sí solo. Mientras trabaja, mantiene una copia de recuperación en este navegador, de modo que un fallo o una pestaña cerrada no pierden sus anotaciones: la próxima vez que abra MarkupCraft le preguntará «¿Recuperar su trabajo?». Véase [Recuperar su trabajo](common:recover). Guarde de todos modos antes de cerrar; si intenta salir con anotaciones sin guardar, el navegador pregunta primero «¿Salir del sitio?» (Safari en iPad no lo hace).

## Lo que ven otros lectores de PDF

Cada anotación se escribe como un comentario PDF estándar (anotación) con su propio dibujo, de modo que cualquier visor de PDF la muestra, la imprime y la incluye en su panel de comentarios:

- **El aspecto es el mismo** que en MarkupCraft: nubes con sus festones, puntas de flecha, sellos, puntos de recuento, insignias con número de pendiente, etiquetas de medida.
- **Los detalles son estándar:** autor, fecha, asunto, texto del comentario y colores.
- **Las nubes** son comentarios de rectángulo o polígono con borde de nube; **los cuadros de texto** y **las llamadas** son comentarios de cuadro de texto; **las notas** son notas adhesivas; **los trazos de lápiz** y **de marcador** son tinta; **los sellos** son comentarios de sello.
- **Las longitudes y las áreas** son comentarios de medición, y cada hoja calibrada incluye su escala, de modo que los visores que entienden las mediciones pueden mostrar los valores.
- **Las respuestas** son respuestas al comentario, y **los estados** son estados de revisión (Abierto se muestra como sin estado).
- **Los números de hoja** que escribió se convierten en las etiquetas de página que muestran otros visores.

Algunos datos solo los lee MarkupCraft: el responsable y la fecha límite del pendiente, su estado y algunos detalles de estilo. Otros programas los conservan mientras no reescriban el comentario.

En otro programa, los comentarios se pueden mover o editar como cualquier otro. Si alguien lo hace y devuelve el archivo, MarkupCraft usa la nueva posición del comentario al abrirlo.

Detalle completo: [Qué se guarda en el PDF](topic:what-the-pdf-keeps).

## Caracteres que se imprimen como «?»

El texto de las anotaciones se escribe con la fuente estándar Helvetica, que tienen todos los visores de PDF. Cubre las letras inglesas y de Europa occidental (é, ñ, ü, ø y similares), pero no otros alfabetos, símbolos fuera de ese conjunto ni emojis. Esos caracteres se ven bien en MarkupCraft, pero en la copia guardada se imprimen como «?», y el mensaje de guardado los cuenta: «3 caracteres fuera del conjunto de Europa occidental se imprimen como "?" en la copia.» Escriba esas palabras por extenso, o use un sustituto sencillo (por ejemplo «diám.» para el signo de diámetro).

## Archivos que no se pueden guardar

- **PDF protegidos:** «Este PDF está protegido (cifrado), así que no se puede escribir una copia con anotaciones. Pida una copia sin protección.» Todavía puede revisarlo en pantalla y exportar el CSV y el BCF.
- Si el guardado falla por otro motivo, un cuadro llamado «No se pudo guardar <archivo>» muestra el motivo. Sus anotaciones siguen en la pestaña; no se pierde nada hasta que la cierre.

## Aplanar e imprimir

Todavía no existe la opción de aplanar (incrustar las anotaciones en la página) ni el comando de imprimir. Para imprimir, abra la copia guardada en cualquier visor de PDF e imprima con los comentarios visibles.
