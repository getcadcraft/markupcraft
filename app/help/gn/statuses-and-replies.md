---
title: Estados y respuestas
summary: Marque cada comentario como Abierto, Aceptado, Rechazado o Completado, converse en un hilo de respuestas y pase el hilo en el PDF.
keywords: estado, estado de revisión, aceptado, rechazado, completado, abierto, respuesta, respuestas, hilo, comentario, conversación, discusión, responder, verificación
from: 0f3e8b91
---

Toda anotación tiene un **estado** y un **hilo de respuestas**. Juntos llevan una ronda de revisión: quien revisa anota, quien diseña responde y fija los estados, y quien revisa verifica de nuevo.

## Fijar un estado

1. Seleccioná la anotación (o varias).
2. En {{ui:Propiedades}}, elegí un {{ui:Estado}}: Abierto, Aceptado, Rechazado o Completado.

Resultado: el estado aparece como una etiqueta en la lista {{ui:Anotaciones}}, y se agrega una línea al hilo: "Estado fijado como Aceptado por Ana Ruiz." Con varias anotaciones seleccionadas, el cuadro de estado dice "Mixto" hasta que elijas uno, y entonces cambia todas.

Las anotaciones nuevas empiezan como Abierto. Las anotaciones pegadas o duplicadas también empiezan como Abierto.

## Responder

1. Seleccioná la anotación.
2. En {{ui:Propiedades}}, buscá "Respuestas" debajo de la configuración de estilo.
3. Escribí en {{ui:Escribí una respuesta}}.
4. Elegí {{ui:Respuesta}}, o apretá {{key:Mod+Enter}}.

Resultado: la respuesta aparece con tu nombre y la fecha y hora, y el encabezado la cuenta: "Respuestas (3)". La lista {{ui:Anotaciones}} muestra un contador de respuestas en la fila.

- Los cambios de estado aparecen en el mismo hilo y se marcan como entradas de estado, así el historial se lee en orden.
- Si empezás a escribir una respuesta y hacés clic en otra cosa, tu borrador se guarda hasta que vuelvas a esa anotación (hasta que cierres el conjunto).
- Si tu nombre no está configurado, MarkupCraft lo pide antes de enviar.
- También podés responder a comentarios de solo lectura que vinieron con el archivo.

:::note
Una respuesta no se puede editar ni borrar una vez enviada. Justo después de enviarla, {{key:Mod+Z}} la deshace; después de eso, agregá una respuesta nueva que la corrija.
:::

## Agregar una foto

Debajo del cuadro de respuesta, {{ui:Agregar foto}} agrega una imagen al hilo: un PNG o JPEG de esta computadora, o, en una tableta o teléfono, una foto que tomes ahí mismo. Lo que escribiste en el cuadro de respuesta se convierte en su leyenda. El hilo muestra una miniatura; elegila para verla a tamaño completo. Las fotos grandes se reducen a 1600 píxeles en su lado más largo.

En el PDF guardado, cada foto también viaja como archivo adjunto junto a la anotación (un clip), para que otros visores de PDF puedan abrirla.

## Pasar la revisión a otra persona

Todavía no hay una sesión en línea compartida: la revisión viaja en el PDF.

1. Elegí {{ui:Guardar}}. La copia tiene cada anotación con su estado y sus respuestas.
2. Enviá esa copia como enviás los planos hoy.
3. La siguiente persona la abre en MarkupCraft, responde, fija estados y vuelve a guardar.

Otros programas de PDF ven las respuestas como respuestas al comentario, y los estados como estados de revisión (Aceptado, Rechazado, Completado; Abierto aparece como sin estado). Sus propias respuestas y estados de revisión vuelven a MarkupCraft cuando abrís el archivo: gana el estado más nuevo.

Si dos personas anotan copias separadas al mismo tiempo, no hay fusión. Podés abrir ambas copias en un mismo conjunto y copiar algunas anotaciones con {{key:Mod+C}} y {{key:Mod+V}}, pero una copia pegada es una anotación nueva: lleva tu nombre, una fecha nueva y el estado Abierto, y queda un poco corrida. Acordá quién anota qué hojas para evitarlo.

## Buscar lo que sigue abierto

En la pestaña {{ui:Anotaciones}}, poné {{ui:Estado}} en "Abierto" para listar sólo los puntos abiertos, y {{ui:Autor}} en un revisor. Ver [La lista de anotaciones](topic:markups-list-and-export).

El estado (Abierto, Aceptado, Rechazado, Completado) se refiere al comentario. Un pendiente de obra tiene su propio estado separado para el trabajo en terreno; ver [Hacer una lista de pendientes](topic:punch-list).
