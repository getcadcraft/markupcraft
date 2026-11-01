---
title: Archivos que MarkupCraft abre y guarda
summary: Entran PDF, sale una copia del PDF con anotaciones, además de archivos CSV, BCF y de la caja de herramientas; adónde va cada uno, con y sin conexión.
keywords: pdf, abrir, guardar, exportar, descargar, csv, bcf, bcfzip, json, caja de herramientas, tipos de archivo, formatos, subir, contraseña, cifrado
from: b3045b4c
---

## Qué abre MarkupCraft

| Archivo | Cómo | Qué ocurre |
|---|---|---|
| PDF (`.pdf`) | {{ui:Abrir}}, {{key:Mod+O}}, o suéltelo sobre la zona de hojas. Se pueden abrir varios a la vez. | Cada página se convierte en una hoja. Las anotaciones que ya hay en el archivo se leen de nuevo (más abajo). |
| Caja de herramientas (`.json`) | Pestaña {{ui:Herramientas}} y después {{ui:Importar}} | Las herramientas se añaden a su caja. Consulte [La caja de herramientas](topic:tool-chest). |

Cualquier otra cosa se rechaza con "MarkupCraft abre archivos PDF." en la barra de estado. Si suelta una mezcla, los PDF se abren y la barra de estado indica cuántos archivos no eran PDF.

### Anotaciones que ya hay en un PDF

- **Las anotaciones que guardó MarkupCraft** vuelven exactamente igual: tipo, estilo, autor, fechas, estado, respuestas, número de pendiente, la escala de la hoja y los nombres de hoja que haya escrito.
- **Los comentarios de otros programas de PDF** también se leen. Los rectángulos, las elipses, las líneas y las flechas, las polilíneas, los polígonos, los trazos a mano alzada (lápiz), los cuadros de texto y las notas adhesivas se convierten en anotaciones normales y editables de MarkupCraft. Vienen con sus respuestas y sus estados de revisión.
- **Todo lo demás** (resaltados de texto hechos seleccionando texto, sellos de otros programas y otros tipos) se muestra tal cual, marcado como de solo lectura. Puede seleccionarlo, verlo en la lista de anotaciones y responderle, pero no moverlo, cambiarlo ni borrarlo.
- Los vínculos y los campos de formulario se dejan como están y no aparecen en la lista.
- Una escala guardada por otro programa (una ventana gráfica de medición) se usa como escala de la hoja cuando MarkupCraft entiende su unidad.

### Archivos que no se abren

- Un PDF que necesita contraseña: '"nombre" necesita contraseña para abrirse. Abra una copia sin protección.'
- Un archivo dañado o que en realidad no es un PDF: '"nombre" no se pudo leer como PDF (…)'.
- Un PDF que se abre pero está protegido contra cambios se abre sin problema. Guardarlo se rechaza (consulte más abajo).

Cuando se abren varios archivos a la vez, los que funcionan se abren y un cuadro llamado "Algunos archivos no se abrieron" enumera los demás.

## Qué guarda MarkupCraft

Guardar es siempre una **descarga** de un archivo nuevo. Una página web no puede sobrescribir un archivo de su ordenador, y MarkupCraft nunca modifica su original.

| Usted elige | Obtiene | Notas |
|---|---|---|
| {{ui:Guardar}} ({{key:Mod+S}}) | "<nombre> (con anotaciones).pdf" | Una copia del PDF original con cada anotación escrita como un comentario PDF real. Guardar de nuevo un archivo "(con anotaciones)" conserva el mismo nombre; nunca se convierte en "(con anotaciones) (con anotaciones)". Consulte [Guardar el PDF con anotaciones](topic:save-the-marked-up-pdf). |
| Pestaña {{ui:Anotaciones}} y después {{ui:CSV}} | "<nombre> anotaciones.csv" | Las anotaciones tal como aparecen en la lista (se aplican los filtros). |
| Pestaña {{ui:Anotaciones}} y después {{ui:BCF}} | "<nombre> anotaciones.bcfzip" | BCF 2.1 para herramientas de coordinación BIM, con una instantánea por anotación. Consulte [Conceptos básicos de BCF](topic:bcf-basics). |
| Pestaña {{ui:Lista de pendientes}} y después {{ui:Exportar CSV}} | "<nombre> lista de pendientes.csv" | Los pendientes por orden de número. |
| Pestaña {{ui:Herramientas}} y después {{ui:Exportar}} | "Caja de herramientas de MarkupCraft.json" | Su caja de herramientas, para compartir o conservar. |

"<nombre>" es el nombre del primer PDF abierto sin ".pdf".

Los archivos CSV se abren en cualquier hoja de cálculo. Son UTF-8 con la marca que buscan las hojas de cálculo, de modo que los nombres con tildes salen bien. Una celda que empieza por =, +, - o @ lleva un apóstrofo delante para que una hoja de cálculo nunca la ejecute como fórmula.

## Adónde van las descargas

Lo decide su navegador: normalmente su carpeta Descargas, o le pregunta cada vez si así lo ha configurado. Consulte [Navegadores y ordenadores](common:browsers#what-differs-between-browsers).

:::chromium
Cuando guarda de una vez todos los archivos modificados de un conjunto, Chrome y Edge pueden preguntar si este sitio puede descargar varios archivos. Elija {{ui:Permitir}}, o solo obtendrá la primera copia.
:::

:::safari
En un iPad, Safari pregunta antes de cada descarga y deja el archivo en la aplicación Archivos, en Descargas. En un Mac va a la carpeta indicada en los ajustes de Safari.
:::

## Con y sin conexión

- **Sus PDF nunca salen de este ordenador**, con o sin conexión. No hay subida a ningún sitio.
- El lector de PDF se carga la primera vez que abre un PDF ("Cargando el lector de PDF…"), y el escritor de PDF la primera vez que guarda ("Cargando el escritor de PDF…") o abre un archivo que ya tiene comentarios.
- Con conexión, ambos se cargan desde el sitio web.
- **Para trabajar sin conexión,** elija {{ui:Guardar para uso sin conexión}} en la barra de la parte superior mientras está en línea. El botón cuenta "Guardando N de M" y después dice "Listo sin conexión". Esa copia incluye el lector de PDF y el escritor de PDF (unos 6 MB en total) y esta ayuda, de modo que después abrir, anotar y guardar PDF funciona sin conexión en este navegador.
- Si el botón dice "No se pudo guardar", algunos archivos no se descargaron: compruebe la conexión y púlselo de nuevo. Si dice "Sin conexión no disponible", esta ventana del navegador no puede conservar una copia sin conexión (las ventanas privadas y algunos ordenadores gestionados); use una ventana normal.
- Para actualizar o quitar la copia, pulse "Listo sin conexión" y elija "Guardar de nuevo (obtener la versión más reciente)" o "Quitar la copia sin conexión". Más en [Trabajar sin conexión](common:offline).

:::offline
Está sin conexión. Si la barra de la parte superior dice "Listo sin conexión", todo funciona, también guardar. Si no lo dice y todavía no ha guardado en esta pestaña, {{ui:Guardar}} puede fallar con "No se pudo cargar el escritor de PDF". Sus anotaciones siguen en la pestaña: manténgala abierta, vuelva a conectarse y elija {{ui:Guardar}} de nuevo.
:::

## Conviene saber

- Los juegos de planos grandes tardan en abrirse: MarkupCraft lee el texto de cada página para encontrar los números de hoja. La barra de estado cuenta las hojas a medida que avanza.
- Abrir el mismo PDF dos veces añade sus hojas dos veces. Si ocurre, cierre el conjunto y ábralo de nuevo.
- {{ui:Cerrar}} cierra todos los archivos abiertos a la vez. Si alguno tiene anotaciones sin guardar, pregunta: {{ui:Cancelar}}, {{ui:Cerrar sin guardar}} o {{ui:Guardar copias primero}}.
- Todavía no se puede guardar en la nube ni hay versiones de escritorio. Guarde sus PDF con el resto de los archivos del proyecto y haga copias de seguridad como de costumbre. Consulte [Adónde van sus archivos](common:your-files).
