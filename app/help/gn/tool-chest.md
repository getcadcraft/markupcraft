---
title: La caja de herramientas
summary: Guarde una anotación con estilo como herramienta reutilizable, dibuje con ella y comparta su caja con la oficina como archivo.
keywords: caja de herramientas, herramientas, juego de herramientas, herramientas personalizadas, anotaciones guardadas, favoritos, estándar de oficina, importar, exportar, compartir, json
from: 7dfa36e0
---

La pestaña {{ui:Herramientas}} guarda tu **caja de herramientas**: anotaciones guardadas con su aspecto, listas para dibujar otra vez. Una herramienta conserva el tipo, color, grosor de línea, relleno, opacidad, tamaño de texto y asunto de la anotación, además del texto de un sello, el nombre de grupo de un conteo o el texto inicial de una caja de texto o llamada.

## Las herramientas con las que empezás

Una caja nueva tiene seis: "Nube de revisión" (roja), "Nube de pregunta" (azul), "Resaltador amarillo", "Llamada RFI" (azul, empieza con "RFI: "), "Verificar en obra" (una llamada naranja que dice "Verificar en obra.") y "Aprobado con observaciones" (un sello).

## Dibujar con una herramienta

1. Abrí la pestaña {{ui:Herramientas}}.
2. Hacé clic en una herramienta. Se ve presionada, y la herramienta correspondiente de la barra se activa.
3. Dibujá como de costumbre. {{ui:Propiedades}} dice 'Dibujando con "<herramienta>" desde la caja de herramientas.'

Mientras una herramienta de la caja está activa, los cambios que hagas en {{ui:Propiedades}} antes de dibujar se aplican a esa herramienta por ahora, sin cambiar la herramienta guardada ni tu configuración normal. Elegir un botón de la barra, o apretar la tecla de una herramienta, vuelve a la herramienta común.

## Guardar una propia

1. Dibujá una anotación y dale el estilo que quieras: color, línea, relleno, asunto, texto del sello.
2. Seleccionala.
3. Elegí {{ui:Guardar lo seleccionado como herramienta}} en la pestaña {{ui:Herramientas}}, o {{ui:Guardar como herramienta}} en {{ui:Propiedades}}.
4. Escribí un {{ui:Nombre de la herramienta}} y elegí {{ui:Guardar herramienta}}.

Resultado: la herramienta se agrega al final de la caja, y la pestaña {{ui:Herramientas}} se abre para mostrarla.

## Sellos hechos desde una selección

Seleccioná varias anotaciones (o contenido de página con la herramienta {{ui:Contenido}}) y elegí {{ui:Guardar la selección como sello…}} en {{ui:Más}} o en el menú del clic derecho. La caja recibe un sello que las contiene todas ("Sello: 3 anotaciones juntas"). Hacé clic en él, después hacé clic en cualquier hoja: las anotaciones aparecen juntas, centradas donde hacés clic, como anotaciones nuevas con tu nombre; el contenido de página se dibuja en la página en ese lugar. Estos sellos se guardan y se comparten con la caja como cualquier herramienta.

## Quitar una herramienta

Elegí la × al final de la fila de la herramienta, después {{ui:Quitar}}. Las anotaciones ya dibujadas con ella quedan como están.

## Dónde se guarda la caja

La caja se guarda **en este navegador, en esta computadora**. Otro navegador o computadora tiene su propia caja (empezando por las seis predeterminadas), una ventana privada la olvida al cerrarse, y borrar los datos del sitio en la configuración del navegador la elimina.

Si el navegador no puede guardarla (almacenamiento apagado o lleno), la barra de estado dice: "No se pudo guardar la caja de herramientas en este navegador (el almacenamiento está apagado o lleno). Exportala para conservarla."

:::safari
Safari puede borrar los datos guardados de un sitio web si no usaste el sitio durante un tiempo. Exportá tu caja de vez en cuando para poder importarla de nuevo.
:::

**Exportá tu caja como copia de respaldo**, sobre todo después de crear herramientas en las que confiás.

## Compartir una caja con tu oficina

1. Configurá las herramientas una vez.
2. Elegí {{ui:Exportar}}. Obtenés "MarkupCraft tool chest.json".
3. Dejá ese archivo donde la oficina guarda sus estándares, o envialo.
4. Los demás eligen {{ui:Importar}} en su pestaña {{ui:Herramientas}} y seleccionan el archivo.

Resultado: "Se importaron 12 herramientas desde "MarkupCraft tool chest.json"." Las herramientas que vienen de la misma caja reemplazan sus copias anteriores, así que importar una caja de oficina actualizada refresca esas herramientas en lugar de duplicarlas; las herramientas nuevas se agregan. Una caja tiene hasta 500 herramientas.

MarkupCraft revisa cada valor de un archivo importado y omite lo que no puede usar ("2 omitidas (no utilizables)"). Los archivos que no son una caja se rechazan: "Este archivo no es una caja de herramientas de MarkupCraft." o "Este archivo no es una caja de herramientas (no es JSON)."

No se pueden importar cajas de herramientas de otros programas de anotación.
