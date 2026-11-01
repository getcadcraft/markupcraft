---
title: Archivos que MarkupCraft abre y guarda
summary: PDF de entrada, una copia de PDF con marcas de salida, además de archivos CSV, BCF y de caja de herramientas; a dónde va cada uno, con y sin conexión.
keywords: pdf, abrir, guardar, exportar, descargar, csv, bcf, bcfzip, json, caja de herramientas, tipos de archivo, formatos, subir, contraseña, cifrado
from: b3045b4c
---

## Qué abre MarkupCraft

| Archivo | Cómo | Qué pasa |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir}}, {{key:Mod+O}}, o suéltelo en el área de la hoja. Varios a la vez no hay problema. | Cada página se vuelve una hoja. Las marcas que ya trae el archivo se leen de vuelta (abajo). |
| Caja de herramientas (`.json`) | Pestaña {{ui:Herramientas}}, luego {{ui:Importar}} | Las herramientas se agregan a su caja. Vea [La caja de herramientas](topic:tool-chest). |

Todo lo demás se rechaza con "MarkupCraft opens PDF files." en la barra de estado. Si suelta una mezcla, los PDF se abren y la barra de estado dice cuántos archivos no eran PDF.

### Marcas que ya están en un PDF

- **Las marcas que guardó MarkupCraft** regresan exactas: tipo, estilo, autor, fechas, estado, respuestas, número de pendiente, la escala de la hoja y cualquier nombre de hoja que haya escrito.
- **Los comentarios de otros programas de PDF** también se leen. Rectángulos, elipses, líneas y flechas, polilíneas, polígonos, trazos de tinta (pluma), cuadros de texto y notas adhesivas se vuelven marcas normales y editables de MarkupCraft. Sus respuestas y estados de revisión vienen con ellos.
- **Todo lo demás** (resaltados de texto hechos al seleccionar texto, sellos de otros programas y otros tipos) se muestra tal cual, marcado como solo lectura. Puede seleccionarlo, verlo en la lista de marcas y responderle, pero no moverlo, cambiarlo ni eliminarlo.
- Los vínculos y los campos de formulario se dejan como están y no se enumeran.
- Una escala guardada por otro programa (una ventana gráfica de medición) se usa como escala de la hoja cuando MarkupCraft entiende su unidad.

### Archivos que no abren

- Un PDF que necesita contraseña: '"name" needs a password to open. Open an unprotected copy.'
- Un archivo dañado o que en realidad no es un PDF: '"name" could not be read as a PDF (…)'.
- Un PDF que abre pero está protegido contra cambios abre sin problema. Guardarlo se rechaza (vea abajo).

Cuando se abren varios archivos a la vez, los que sirven se abren y un cuadro llamado "Some files did not open" enumera los demás.

## Qué guarda MarkupCraft

Guardar siempre es una **descarga** de un archivo nuevo. Una página web no puede sobrescribir un archivo de su computadora, y MarkupCraft nunca cambia su original.

| Usted elige | Obtiene | Notas |
|---|---|---|
| {{ui:Guardar}} ({{key:Mod+S}}) | "<nombre> (marked up).pdf" | Una copia del PDF original con cada marca escrita como un verdadero comentario de PDF. Guardar de nuevo un archivo "(marked up)" conserva el mismo nombre; nunca se vuelve "(marked up) (marked up)". Vea [Guarde el PDF con marcas](topic:save-the-marked-up-pdf). |
| Pestaña {{ui:Marcas}}, luego {{ui:CSV}} | "<nombre> markups.csv" | Las marcas como están en la lista (se aplican los filtros). |
| Pestaña {{ui:Marcas}}, luego {{ui:BCF}} | "<nombre> markups.bcfzip" | BCF 2.1 para herramientas de coordinación BIM, una captura por marca. Vea [Conceptos básicos de BCF](topic:bcf-basics). |
| Pestaña {{ui:Pendientes}}, luego {{ui:Exportar CSV}} | "<nombre> punch list.csv" | Las partidas de pendientes en orden de número. |
| Pestaña {{ui:Herramientas}}, luego {{ui:Exportar}} | "MarkupCraft tool chest.json" | Su caja de herramientas, para compartir o conservar. |

"<nombre>" es el nombre del primer PDF abierto sin ".pdf".

Los archivos CSV abren en cualquier hoja de cálculo. Son UTF-8 con la marca que buscan las hojas de cálculo, así que los nombres con acento salen bien. Una celda que empieza con =, +, - o @ recibe un apóstrofo al inicio para que una hoja de cálculo nunca la ejecute como fórmula.

## A dónde van las descargas

Lo decide su navegador: normalmente su carpeta Descargas, o pregunta cada vez si así lo configuró. Vea [Navegadores y computadoras](common:browsers#what-differs-between-browsers).

:::chromium
Cuando guarda de una vez todos los archivos modificados de un juego, Chrome y Edge pueden preguntar si este sitio puede descargar varios archivos. Elija {{ui:Permitir}}, o solo obtendrá la primera copia.
:::

:::safari
En un iPad, Safari pregunta antes de cada descarga y deja el archivo en la app Archivos, en Descargas. En una Mac va a la carpeta fijada en la configuración de Safari.
:::

## Con y sin conexión

- **Sus PDF nunca salen de esta computadora**, con o sin conexión. No hay subida a ningún lado.
- El lector de PDF se carga la primera vez que abre un PDF ("Loading the PDF reader…"), y el escritor de PDF la primera vez que guarda ("Loading the PDF writer…") o abre un archivo que ya trae comentarios.
- Con conexión, ambos se cargan desde el sitio web.
- **Para trabajar sin conexión,** elija {{ui:Guardar para usar sin conexión}} en la barra de arriba mientras tiene conexión. El botón cuenta "Saving N of M" y luego dice "Offline ready". Esa copia incluye el lector y el escritor de PDF (unos 6 MB en total) y esta ayuda, así que después abrir, marcar y guardar PDF funciona sin conexión en este navegador.
- Si el botón dice "Could not save", algunos archivos no se descargaron: revise la conexión y haga clic otra vez. Si dice "Offline not available", esta ventana del navegador no puede conservar una copia sin conexión (ventanas privadas y algunas computadoras administradas); use una ventana normal.
- Para actualizar o quitar la copia, haga clic en "Offline ready" y elija "Guardar de nuevo (obtener la versión más reciente)" o "Quitar la copia sin conexión". Más en [Trabajar sin conexión](common:offline).

:::offline
No tiene conexión. Si la barra de arriba dice "Offline ready", todo funciona, guardar incluido. Si no y todavía no ha guardado en esta pestaña, {{ui:Guardar}} puede fallar con "The PDF writer could not load". Sus marcas siguen en la pestaña: manténgala abierta, vuelva a tener conexión y elija {{ui:Guardar}} otra vez.
:::

## Cosas que conviene saber

- Los juegos de planos grandes tardan en abrirse: MarkupCraft lee el texto de cada página para encontrar números de hoja. La barra de estado cuenta las hojas conforme avanza.
- Abrir el mismo PDF dos veces agrega sus hojas dos veces. Si pasa, cierre el juego y ábralo de nuevo.
- {{ui:Cerrar}} cierra todos los archivos abiertos a la vez. Si alguno tiene marcas sin guardar, pregunta: {{ui:Cancelar}}, {{ui:Cerrar sin guardar}} o {{ui:Guardar copias primero}}.
- Todavía no se puede guardar en la nube y aún no hay versiones de escritorio. Conserve sus PDF con el resto de los archivos del proyecto y respáldelos como de costumbre. Vea [A dónde van sus archivos](common:your-files).
