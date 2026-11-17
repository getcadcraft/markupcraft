---
title: Estados y respuestas
summary: Marque cada comentario como Abierto, Aceptado, Rechazado o Completado, coméntelo en un hilo de respuestas y pase el hilo en el PDF.
keywords: estado, estado de revisión, aceptado, rechazado, completado, abierto, respuesta, respuestas, hilo, comentario, conversación, debate, responder, comprobación posterior
from: 0f3e8b91
---

Cada anotación tiene un **estado** y un **hilo de respuestas**. Juntos recogen una ronda de revisión: el revisor anota, el diseñador responde y fija los estados, y el revisor hace la comprobación posterior.

## Fijar un estado

1. Seleccione la anotación (o varias).
2. En {{ui:Propiedades}}, elija un {{ui:Estado}}: Abierto, Aceptado, Rechazado o Completado.

Resultado: el estado aparece como una etiqueta en la lista de {{ui:Anotaciones}}, y se añade una línea al hilo: "Estado cambiado a Aceptado por Ana Ruiz." Con varias anotaciones seleccionadas, el cuadro de estado dice "Mezclado" hasta que elija uno, y entonces cambia todas.

Las anotaciones nuevas empiezan en Abierto. Las anotaciones pegadas o duplicadas también empiezan en Abierto.

## Responder

1. Seleccione la anotación.
2. En {{ui:Propiedades}}, busque "Respuestas" debajo de los ajustes de estilo.
3. Escriba en {{ui:Escriba una respuesta}}.
4. Elija {{ui:Respuesta}}, o pulse {{key:Mod+Enter}}.

Resultado: la respuesta aparece con su nombre, la fecha y la hora, y el encabezado la cuenta: "Respuestas (3)". La lista de {{ui:Anotaciones}} muestra un número de respuestas en la fila.

- Los cambios de estado aparecen en el mismo hilo y se marcan como entradas de estado, para que el historial se lea en orden.
- Si empieza a escribir una respuesta y hace clic en otra cosa, su borrador se conserva hasta que vuelva a esa anotación (hasta que cierre el conjunto).
- Si no tiene configurado su nombre, MarkupCraft se lo pide antes de enviar.
- También puede responder a comentarios de solo lectura que venían con el archivo.

:::note
Una respuesta no se puede editar ni borrar una vez enviada. Justo después de enviarla, {{key:Mod+Z}} la retira; después de eso, añada una respuesta nueva que la corrija.
:::

## Añadir una foto

Debajo del cuadro de respuesta, {{ui:Añadir foto}} añade una imagen al hilo: un PNG o JPEG de este equipo, o, en una tableta o un móvil, una foto que haga allí en ese momento. Lo que escriba en el cuadro de respuesta se convierte en su pie de foto. El hilo muestra una miniatura; elíjala para verla a tamaño completo. Las fotos grandes se reducen a 1600 px en su lado más largo.

En el PDF guardado, cada foto también viaja como archivo adjunto junto a la anotación (un clip), para que otros visores de PDF puedan abrirla.

## Pasar la revisión

Todavía no existe una sesión compartida en línea: la revisión viaja en el PDF.

1. Elija {{ui:Guardar}}. La copia contiene cada anotación con su estado y sus respuestas.
2. Envíe esa copia como envía hoy los planos.
3. La siguiente persona la abre en MarkupCraft, responde, fija estados y vuelve a guardar.

Otros programas de PDF ven las respuestas como respuestas al comentario, y los estados como estados de revisión (Aceptado, Rechazado, Completado; Abierto aparece sin estado). Sus propias respuestas y estados de revisión vuelven a MarkupCraft al abrir el archivo: gana el estado más reciente.

Si dos personas anotan copias separadas al mismo tiempo, no hay fusión. Puede abrir ambas copias en un mismo conjunto y copiar algunas anotaciones con {{key:Mod+C}} y {{key:Mod+V}}, pero una copia pegada es una anotación nueva: lleva su nombre, una fecha nueva y el estado Abierto, y se coloca ligeramente desplazada. Acuerden quién anota qué hojas para evitarlo.

## Buscar lo que sigue abierto

En la pestaña {{ui:Anotaciones}}, fije {{ui:Estado}} en "Abierto" para listar solo los elementos abiertos, y {{ui:Autor}} en un revisor. Consulte [La lista de anotaciones](topic:markups-list-and-export).

El estado (Abierto, Aceptado, Rechazado, Completado) se refiere al comentario. Un elemento de la lista de pendientes tiene su propio estado, separado, para el trabajo en obra; consulte [Crear una lista de pendientes](topic:punch-list).
