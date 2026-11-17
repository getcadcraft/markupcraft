---
title: La caja de herramientas
summary: Guarde una anotación con su estilo como herramienta reutilizable, dibuje con ella y comparta su caja con la oficina como archivo.
keywords: caja de herramientas, herramientas, conjunto de herramientas, herramientas personalizadas, anotaciones guardadas, favoritos, estándar de oficina, importar, exportar, compartir, json
from: 7dfa36e0
---

La pestaña {{ui:Herramientas}} contiene su **caja de herramientas**: anotaciones guardadas con su aspecto, listas para dibujar de nuevo. Una herramienta conserva el tipo, el color, el grosor de línea, el relleno, la opacidad, el tamaño de texto y el asunto de la anotación, además del texto de un sello, el nombre de grupo de un contador o el texto inicial de un cuadro de texto o una llamada.

## Las herramientas con las que empieza

Una caja nueva tiene seis: "Nube de revisión" (roja), "Nube de pregunta" (azul), "Marcador amarillo", "Llamada RFI" (azul, empieza con "RFI: "), "Verificar en obra" (una llamada naranja que dice "Verificar en obra.") y "Aprobado con observaciones" (un sello).

## Dibujar con una herramienta

1. Abra la pestaña {{ui:Herramientas}}.
2. Haga clic en una herramienta. Se ve pulsada y se activa la herramienta correspondiente de la barra.
3. Dibuje como de costumbre. {{ui:Propiedades}} indica 'Dibujando con "<herramienta>" de la caja de herramientas.'

Mientras una herramienta de la caja está activa, los cambios que haga en {{ui:Propiedades}} antes de dibujar se aplican a esa herramienta por ahora, sin cambiar la herramienta guardada ni sus ajustes normales. Elegir un botón de la barra, o pulsar la tecla de una herramienta, vuelve a la herramienta normal.

## Guardar la suya

1. Dibuje una anotación y dele el estilo que quiera: color, línea, relleno, asunto, texto del sello.
2. Selecciónela.
3. Elija {{ui:Guardar la selección como herramienta}} en la pestaña {{ui:Herramientas}}, o {{ui:Guardar como herramienta}} en {{ui:Propiedades}}.
4. Escriba un {{ui:Nombre de la herramienta}} y elija {{ui:Guardar herramienta}}.

Resultado: la herramienta se añade al final de la caja, y la pestaña {{ui:Herramientas}} se abre para mostrarla.

## Sellos hechos a partir de una selección

Seleccione varias anotaciones (o contenido de la página con la herramienta {{ui:Contenido}}) y elija {{ui:Guardar la selección como sello…}} en {{ui:Más}} o en el menú contextual. La caja recibe un sello que las contiene todas ("Sello: 3 anotaciones juntas"). Haga clic en él y, después, en cualquier hoja: las anotaciones se colocan juntas, centradas donde hace clic, como anotaciones nuevas con su nombre; el contenido de la página se dibuja en la página en ese punto. Estos sellos se guardan y se comparten con la caja como cualquier otra herramienta.

## Quitar una herramienta

Elija la × al final de la fila de la herramienta y, después, {{ui:Quitar}}. Las anotaciones ya dibujadas con ella se quedan como están.

## Dónde se guarda la caja

La caja se guarda **en este navegador, en este equipo**. Otro navegador o equipo tiene su propia caja (con las seis herramientas iniciales), una ventana privada la olvida al cerrarla, y borrar los datos de este sitio en los ajustes del navegador la elimina.

Si el navegador no la puede guardar (almacenamiento desactivado o lleno), la barra de estado dice: "La caja de herramientas no se pudo conservar en este navegador (el almacenamiento está desactivado o lleno). Expórtela para conservarla."

:::safari
Safari puede borrar los datos guardados de un sitio web si no ha usado el sitio durante un tiempo. Exporte su caja de vez en cuando para poder importarla de nuevo.
:::

**Exporte su caja como copia de seguridad**, sobre todo después de crear herramientas en las que confía.

## Compartir una caja con su oficina

1. Configure las herramientas una vez.
2. Elija {{ui:Exportar}}. Obtiene "MarkupCraft tool chest.json".
3. Ponga ese archivo donde la oficina guarda sus estándares, o envíelo.
4. Los demás eligen {{ui:Importar}} en su pestaña {{ui:Herramientas}} y seleccionan el archivo.

Resultado: "Se importaron 12 herramientas desde "MarkupCraft tool chest.json"." Las herramientas que proceden de la misma caja reemplazan sus copias anteriores, así que importar una caja de oficina actualizada refresca esas herramientas en lugar de duplicarlas; las nuevas se añaden. Una caja admite hasta 500 herramientas.

MarkupCraft comprueba cada valor de un archivo importado y omite lo que no puede usar ("2 omitidas (no utilizables)"). Los archivos que no son una caja se rechazan: "Este archivo no es una caja de herramientas de MarkupCraft." o "Este archivo no es una caja de herramientas (no es JSON)."

Las cajas de herramientas de otros programas de anotación no se pueden importar.
