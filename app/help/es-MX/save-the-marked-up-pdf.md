---
title: Guardar el PDF con marcas
summary: Descargue una copia con todas las marcas escritas como comentarios PDF estándar, revise qué ven otros lectores de PDF y siga trabajando en ella más adelante.
keywords: guardar, descargar, exportar pdf, con marcas, anotaciones, comentarios, compartir, enviar, emitir, seguir trabajando, reabrir, ida y vuelta, imprimir
from: 4c198ebe
---

## Guardar

1. Elija {{ui:Guardar}} en la barra de herramientas, o pulse {{key:Mod+S}}.
2. Si hay varios archivos abiertos, elija {{ui:Este archivo}} (el archivo de la hoja en la que está) o {{ui:Cada archivo con cambios}}. Cada copia se descarga por separado.
3. Espere a que termine "Guardando <file>…". La primera vez que guarda en una sesión también se carga el generador de PDF.

Resultado: su navegador descarga "<name> (marked up).pdf", y la barra de estado lo informa: "Guardado A-Plans (marked up).pdf (24 marcas, 18.2 MB). El archivo original no cambió." El punto junto a {{ui:Guardar}} desaparece.

**Su PDF original nunca se modifica.** MarkupCraft escribe un archivo nuevo. Dónde queda depende de la configuración de descargas de su navegador (vea [Archivos que MarkupCraft abre y guarda](topic:files#where-downloads-go)).

## Seguir trabajando después

Abra la copia "(marked up)", no el original, la próxima vez. Todo vuelve editable: marcas, estados, respuestas, elementos pendientes, la escala de cada hoja y los nombres de hoja que escribió. Al volver a guardarla se descarga un archivo con el mismo nombre "(marked up)"; su navegador puede agregar un número como "(1)" si la descarga anterior sigue en la carpeta. Reemplace o limpie usted mismo las copias anteriores.

MarkupCraft no guarda el PDF por sí solo. Mientras trabaja, mantiene una copia de recuperación en este navegador, así que si se cae o se cierra una pestaña no se pierden sus marcas: la próxima vez que abra MarkupCraft preguntará "¿Recuperar su trabajo?". Vea [Recuperar su trabajo](common:recover). Aun así, guarde antes de cerrar; si intenta salir con marcas sin guardar, el navegador primero pregunta "¿Salir del sitio?" (iPad Safari no lo hace).

## Lo que ven otros lectores de PDF

Cada marca se escribe como un comentario (anotación) estándar de PDF con su propio dibujo, así que cualquier visor de PDF la muestra, la imprime y la lista en su panel de comentarios:

- **El aspecto es el mismo** que en MarkupCraft: nubes con sus festones, puntas de flecha, sellos, puntos de conteo, globos de número de pendiente y etiquetas de medición.
- **Los detalles son estándar:** autor, fecha, asunto, texto del comentario y colores.
- **Las nubes** son comentarios de rectángulo o polígono con borde de nube; **los cuadros de texto** y las **llamadas** son comentarios de cuadro de texto; las **notas** son notas adhesivas; los trazos de **pluma** y de **marcatexto** son tinta; los **sellos** son comentarios de sello.
- **Las longitudes y las áreas** son comentarios de medición, y cada hoja calibrada lleva su escala, así que los visores que entienden mediciones pueden mostrar los valores.
- **Las respuestas** son respuestas al comentario, y **los estados** son estados de revisión (Abierto se muestra como sin estado).
- **Los números de hoja** que escribió se convierten en las etiquetas de página que muestran otros visores.

Solo MarkupCraft lee de nuevo algunos datos: el responsable y la fecha límite del elemento pendiente, el estado del elemento y algunos detalles de estilo. Otros programas los conservan, a menos que reescriban el comentario.

En otro programa, los comentarios se pueden mover o editar como cualquier otro. Si alguien lo hace y devuelve el archivo, MarkupCraft usa la nueva posición del comentario al abrirlo.

Detalle completo: [Lo que se guarda en el PDF](topic:what-the-pdf-keeps).

## Caracteres que se imprimen como "?"

El texto de las marcas se escribe con la fuente estándar Helvetica que tiene todo visor de PDF. Cubre las letras del inglés y de Europa occidental (é, ñ, ü, ø y similares), pero no otros alfabetos, símbolos fuera de ese conjunto ni emojis. Esos caracteres se ven bien en MarkupCraft, pero se imprimen como "?" en la copia guardada, y el mensaje de guardado los cuenta: "3 caracteres fuera del conjunto de Europa occidental se imprimen como "?" en la copia." Escriba esas palabras completas o use un sustituto simple (por ejemplo "diám." para el símbolo de diámetro).

## Archivos que no se pueden guardar

- **PDF protegidos:** "Este PDF está protegido (cifrado), así que no se puede escribir una copia con marcas. Pida una copia sin protección." Aun así puede revisarlo en pantalla y exportar el CSV y el BCF.
- Si el guardado falla por otra razón, un cuadro llamado "No se pudo guardar <file>" muestra el motivo. Sus marcas siguen en la pestaña; nada se pierde hasta que la cierre.

## Aplanado e impresión

Todavía no existe el aplanado (grabar las marcas en la página) ni el comando de imprimir. Para imprimir, abra la copia guardada en cualquier visor de PDF e imprima con los comentarios visibles.
