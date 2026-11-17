---
title: El cofre de herramientas
summary: Guarde una marca con estilo como herramienta reutilizable, dibuje con ella y comparta su cofre con la oficina como archivo.
keywords: cofre de herramientas, herramientas, juego de herramientas, herramientas personalizadas, marcas guardadas, favoritos, estándar de la oficina, importar, exportar, compartir, json
from: 7dfa36e0
---

La pestaña {{ui:Herramientas}} contiene su **cofre de herramientas**: marcas guardadas con su aspecto, listas para dibujarse de nuevo. Una herramienta conserva el tipo, color, grosor de línea, relleno, opacidad, tamaño de texto y asunto de la marca, además de la redacción de un sello, el nombre de grupo de un conteo o el texto inicial de un cuadro de texto o de una llamada.

## Las herramientas iniciales

Un cofre nuevo trae seis: "Nube de revisión" (roja), "Nube de pregunta" (azul), "Resaltador amarillo", "Llamada RFI" (azul, empieza con "RFI: "), "Verificar en campo" (una llamada naranja que dice "Verificar en campo.") y "Aprobado con observaciones" (un sello).

## Dibujar con una herramienta

1. Abra la pestaña {{ui:Herramientas}}.
2. Haga clic en una herramienta. Se ve presionada, y la herramienta correspondiente de la barra de herramientas se activa.
3. Dibuje como de costumbre. {{ui:Propiedades}} indica 'Dibujando con "<herramienta>" del cofre de herramientas.'

Mientras una herramienta del cofre está activa, los cambios que haga en {{ui:Propiedades}} antes de dibujar se aplican a esa herramienta solo por ahora, sin cambiar la herramienta guardada ni sus ajustes normales. Elegir un botón de la barra de herramientas, o pulsar la tecla de una herramienta, regresa a la herramienta normal.

## Guardar una propia

1. Dibuje una marca y dele el estilo que quiera: color, línea, relleno, asunto, redacción del sello.
2. Selecciónela.
3. Elija {{ui:Guardar la selección como herramienta}} en la pestaña {{ui:Herramientas}}, o {{ui:Guardar como herramienta}} en {{ui:Propiedades}}.
4. Escriba un {{ui:Nombre de la herramienta}} y elija {{ui:Guardar herramienta}}.

Resultado: la herramienta se agrega al final del cofre, y la pestaña {{ui:Herramientas}} se abre para mostrarla.

## Sellos hechos con una selección

Seleccione varias marcas (o contenido de la página con la herramienta {{ui:Contenido}}) y elija {{ui:Guardar la selección como sello…}} en {{ui:Más}} o en el menú contextual. El cofre recibe un sello que contiene todas ("Sello: 3 marcas juntas"). Haga clic en él y luego en cualquier hoja: las marcas se colocan juntas, centradas donde haga clic, como marcas nuevas con su nombre; el contenido de la página se dibuja en la página en ese punto. Estos sellos se guardan y se comparten con el cofre como cualquier otra herramienta.

## Quitar una herramienta

Elija la × al final de la fila de la herramienta, y luego {{ui:Quitar}}. Las marcas ya dibujadas con ella se mantienen como están.

## Dónde se guarda el cofre

El cofre se guarda **en este navegador, en esta computadora**. Otro navegador o computadora tiene su propio cofre (que empieza con las seis herramientas iniciales); una ventana privada lo olvida al cerrarse, y borrar los datos de este sitio en la configuración del navegador lo elimina.

Si el navegador no puede guardarlo (almacenamiento desactivado o lleno), la barra de estado dice: "El cofre de herramientas no se pudo guardar en este navegador (el almacenamiento está desactivado o lleno). Expórtelo para conservarlo."

:::safari
Safari puede borrar los datos guardados de un sitio web cuando no lo ha usado durante un tiempo. Exporte su cofre de vez en cuando para poder importarlo de nuevo.
:::

**Exporte su cofre como respaldo**, sobre todo después de crear herramientas que usa.

## Compartir un cofre con su oficina

1. Configure las herramientas una vez.
2. Elija {{ui:Exportar}}. Obtendrá "MarkupCraft tool chest.json".
3. Coloque ese archivo donde la oficina guarda sus estándares, o envíelo.
4. Los demás eligen {{ui:Importar}} en su pestaña {{ui:Herramientas}} y seleccionan el archivo.

Resultado: "Se importaron 12 herramientas desde "MarkupCraft tool chest.json"." Las herramientas que vienen del mismo cofre reemplazan sus copias anteriores, así que importar un cofre de oficina actualizado refresca esas herramientas en lugar de duplicarlas; las nuevas se agregan. Un cofre admite hasta 500 herramientas.

MarkupCraft revisa cada valor de un archivo importado y omite lo que no puede usar ("2 omitidos (no utilizables)"). Los archivos que no son un cofre se rechazan: "Este archivo no es un cofre de herramientas de MarkupCraft." o "Este archivo no es un cofre de herramientas (no es JSON)."

No se pueden importar archivos de cofres de herramientas de otros programas de marcado.
