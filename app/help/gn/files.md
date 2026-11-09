---
title: Archivos que abre y guarda MarkupCraft
summary: PDF de entrada, copia PDF anotada de salida, además de archivos CSV, BCF y de caja de herramientas; dónde va cada uno, en línea y sin conexión.
keywords: pdf, abrir, guardar, exportar, descargar, csv, bcf, bcfzip, json, caja de herramientas, tipos de archivo, formatos, subir, contraseña, cifrado
from: b3045b4c
---

## Lo que abre MarkupCraft

| Archivo | Cómo | Qué pasa |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir}}, {{key:Mod+O}}, o soltarlo en la zona de hojas. Varios a la vez está bien. | Cada página se convierte en una hoja. Las anotaciones que ya tiene el archivo se leen de nuevo (ver abajo). |
| Caja de herramientas (`.json`) | Pestaña {{ui:Herramientas}}, luego {{ui:Importar}} | Las herramientas se agregan a la caja. Ver [La caja de herramientas](topic:tool-chest). |

Cualquier otro archivo se rechaza con el mensaje "MarkupCraft abre archivos PDF." en la barra de estado. Si se sueltan archivos mezclados, los PDF se abren y la barra de estado indica cuántos archivos no eran PDF.

### Anotaciones que ya tiene un PDF

- **Las anotaciones guardadas por MarkupCraft** vuelven exactamente: tipo, estilo, autor, fechas, estado, respuestas, número de pendiente, la escala de la hoja y cualquier nombre de hoja que se haya escrito.
- **Los comentarios de otros programas de PDF** también se leen. Rectángulos, elipses, líneas y flechas, polilíneas, polígonos, trazos de tinta (lápiz), cuadros de texto y notas adhesivas pasan a ser anotaciones normales y editables de MarkupCraft. Sus respuestas y estados de revisión también se incorporan.
- **Todo lo demás** (resaltados de texto hechos seleccionando texto, sellos de otros programas y otros tipos) se muestra tal cual, marcado como de solo lectura. Se puede seleccionar, verlo en la lista de anotaciones y responder, pero no mover, cambiar ni {{ui:Eliminar}}.
- Los enlaces y los campos de formulario no se tocan y no aparecen en la lista.
- Una escala guardada por otro programa (una ventana de medición) se usa como escala de la hoja cuando MarkupCraft entiende su unidad.

### Archivos que no se abren

- Un PDF que pide contraseña: '"nombre" necesita una contraseña para abrirse. Abrir una copia sin protección.'
- Un archivo dañado o que no es realmente un PDF: '"nombre" no pudo leerse como PDF (…)'.
- Un PDF que se abre pero está protegido contra cambios se abre bien. Guardarlo se rechaza (ver abajo).

Cuando se abren varios archivos a la vez, los que funcionan se abren y aparece un cuadro llamado "Algunos archivos no se abrieron" que enumera los demás.

## Lo que guarda MarkupCraft

Guardar siempre es una **descarga** de un archivo nuevo. Una página web no puede sobrescribir un archivo de su computadora, y MarkupCraft nunca modifica el original.

| Elección | Resultado | Notas |
|---|---|---|
| {{ui:Guardar}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Una copia del PDF original con cada anotación escrita como comentario PDF real. Guardar de nuevo un archivo "(marked up)" conserva el mismo nombre; nunca pasa a ser "(marked up) (marked up)". Ver [Guardar el PDF anotado](topic:save-the-marked-up-pdf). |
| {{ui:Anotaciones}}, luego {{ui:CSV}} | "<name> markups.csv" | Las anotaciones tal como aparecen en la lista (se aplican los filtros). |
| {{ui:Anotaciones}}, luego {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 para herramientas de coordinación BIM, una instantánea por anotación. Ver [Conceptos básicos de BCF](topic:bcf-basics). |
| {{ui:Lista de pendientes}}, luego {{ui:Exportar CSV}} | "<name> punch list.csv" | Los pendientes en orden de número. |
| {{ui:Herramientas}}, luego {{ui:Exportar}} | "MarkupCraft tool chest.json" | La caja de herramientas, para compartir o guardar. |

"<name>" es el nombre de archivo del primer PDF abierto, sin ".pdf".

Los archivos CSV se abren en cualquier planilla de cálculo. Están en UTF-8, con la marca que las planillas buscan, así que los nombres con acentos salen bien. Una celda que empieza con =, +, - o @ recibe un apóstrofo al inicio, para que la planilla nunca la ejecute como fórmula.

## Dónde van las descargas

El navegador decide: normalmente la carpeta de Descargas, o pregunta cada vez si así está configurado. Ver [Navegadores y computadoras](common:browsers#what-differs-between-browsers).

:::chromium
Cuando se guardan a la vez todos los archivos modificados de un conjunto, Chrome y Edge pueden preguntar si este sitio puede descargar varios archivos. Elegir {{ui:Permitir}}; de lo contrario solo se obtiene la primera copia.
:::

:::safari
En un iPad, Safari pregunta antes de cada descarga y guarda el archivo en la app Files, dentro de Downloads. En una Mac va a la carpeta configurada en la configuración de Safari.
:::

## En línea y sin conexión

- **Los PDF nunca salen de esta computadora**, en línea o sin conexión. No se sube nada a ningún lugar.
- El lector de PDF se carga la primera vez que se abre un PDF ("Cargando el lector de PDF…"), y el escritor de PDF la primera vez que se guarda ("Cargando el escritor de PDF…") o cuando se abre un archivo que ya tiene comentarios.
- Con conexión, ambos se cargan desde el sitio web.
- **Para trabajar sin conexión,** elegir {{ui:Guardar para usar sin conexión}} en la barra superior mientras hay conexión. El botón cuenta "Guardando N de M" y luego dice "Listo sin conexión". Esa copia incluye el lector y el escritor de PDF (unos 6 MB en total) y esta ayuda, de modo que después abrir, anotar y guardar PDF funciona sin conexión en este navegador.
- Si el botón dice "No se pudo guardar", algunos archivos no se descargaron: revisar la conexión y hacer clic otra vez. Si dice "Sin conexión no disponible", esta ventana del navegador no puede guardar una copia sin conexión (ventanas privadas y algunas computadoras administradas); usar una ventana normal.
- Para actualizar o quitar la copia, hacer clic en "Listo sin conexión" y elegir "Guardar de nuevo (obtener la versión más reciente)" o "Quitar la copia sin conexión". Más en [Trabajar sin conexión](common:offline).

:::offline
Está sin conexión. Si la barra superior dice "Listo sin conexión", todo funciona, incluido guardar. Si no lo dice y todavía no se guardó nada en esta pestaña, {{ui:Guardar}} puede fallar con "No se pudo cargar el escritor de PDF". Las anotaciones siguen en la pestaña: mantenerla abierta, volver a tener conexión y elegir {{ui:Guardar}} otra vez.
:::

## Cosas para tener en cuenta

- Los conjuntos grandes de planos tardan en abrirse: MarkupCraft lee el texto de cada página para encontrar los números de hoja. La barra de estado cuenta las hojas a medida que avanza.
- Abrir dos veces el mismo PDF agrega sus hojas dos veces. Si pasa, cerrar el conjunto y abrirlo de nuevo.
- {{ui:Cerrar}} cierra todos los archivos abiertos a la vez. Si alguno tiene anotaciones sin guardar, pregunta: {{ui:Cancelar}}, {{ui:Cerrar sin guardar}} o {{ui:Guardar copias primero}}.
- El guardado en la nube todavía no está disponible, y aún no hay versiones de escritorio. Conviene guardar los PDF junto con los demás archivos del proyecto y respaldarlos como de costumbre. Ver [Dónde van sus archivos](common:your-files).
