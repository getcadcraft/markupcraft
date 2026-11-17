---
title: Estados y respuestas
summary: Marque cada comentario como Abierto, Aceptado, Rechazado o Completado, coméntelo en una conversación de respuestas y pase la conversación en el PDF.
keywords: estado, estado de revisión, aceptado, rechazado, completado, abierto, respuesta, respuestas, conversación, comentario, diálogo, discusión, responder, revisión de seguimiento
from: 0f3e8b91
---

Cada marca tiene un **estado** y una **conversación de respuestas**. Juntos llevan una ronda de revisión: el revisor marca, el diseñador responde y asigna estados, y el revisor verifica.

## Asignar un estado

1. Seleccione la marca (o varias).
2. En {{ui:Propiedades}}, elija un {{ui:Estado}}: Abierto, Aceptado, Rechazado o Completado.

Resultado: el estado aparece como una etiqueta en la lista de {{ui:Marcas}}, y se agrega una línea a la conversación: "Estado cambiado a Aceptado por Ana Ruiz." Con varias marcas seleccionadas, el cuadro de estado dice "Mixto" hasta que elija uno, y entonces cambia todas.

Las marcas nuevas empiezan como Abierto. Las marcas pegadas o duplicadas también empiezan como Abierto.

## Responder

1. Seleccione la marca.
2. En {{ui:Propiedades}}, busque "Respuestas" debajo de la configuración de estilo.
3. Escriba en {{ui:Escriba una respuesta}}.
4. Elija {{ui:Responder}}, o pulse {{key:Mod+Enter}}.

Resultado: la respuesta aparece con su nombre, la fecha y la hora, y el encabezado la cuenta: "Respuestas (3)". La lista de {{ui:Marcas}} muestra un conteo de respuestas en la fila.

- Los cambios de estado aparecen en la misma conversación y se marcan como entradas de estado, así el historial se lee en orden.
- Si empieza a escribir una respuesta y hace clic en otra cosa, su borrador se conserva hasta que regrese a esa marca (hasta que cierre el juego).
- Si su nombre no está configurado, MarkupCraft lo pide antes de enviar.
- También puede responder a comentarios de solo lectura que vinieron con el archivo.

:::note
Una respuesta no se puede editar ni borrar una vez enviada. Justo después de enviarla, {{key:Mod+Z}} la retira; después de eso, agregue una nueva respuesta que la corrija.
:::

## Agregar una foto

Debajo del cuadro de respuesta, {{ui:Agregar foto}} agrega una imagen a la conversación: un PNG o JPEG de esta computadora, o, en una tableta o teléfono, una foto que tome ahí mismo. Lo que escribió en el cuadro de respuesta se convierte en su leyenda. La conversación muestra una miniatura; elíjala para verla en tamaño completo. Las fotos grandes se reducen a 1600 píxeles en su lado más largo.

En el PDF guardado, cada foto también viaja como archivo adjunto junto a la marca (un clip), así que otros visores de PDF pueden abrirla.

## Pasar la revisión

Todavía no hay una sesión compartida en línea: la revisión viaja en el PDF.

1. Elija {{ui:Guardar}}. La copia contiene cada marca con su estado y sus respuestas.
2. Envíe esa copia como envía los planos hoy.
3. La siguiente persona la abre en MarkupCraft, responde, asigna estados y guarda de nuevo.

Otros programas de PDF ven las respuestas como respuestas al comentario, y los estados como estados de revisión (Aceptado, Rechazado, Completado; Abierto aparece sin estado). Sus propias respuestas y estados de revisión regresan a MarkupCraft cuando abre el archivo: gana el estado más reciente.

Si dos personas marcan copias separadas al mismo tiempo, no hay combinación. Puede abrir ambas copias en un juego y copiar algunas marcas con {{key:Mod+C}} y {{key:Mod+V}}, pero una copia pegada es una marca nueva: lleva su nombre, una fecha nueva y el estado Abierto, y cae ligeramente desplazada. Acuerden quién marca qué hojas para evitarlo.

## Encontrar lo que sigue abierto

En la pestaña {{ui:Marcas}}, configure {{ui:Estado}} en "Abierto" para listar solo los elementos abiertos, y {{ui:Autor}} en un revisor. Consulte [La lista de marcas](topic:markups-list-and-export).

El estado (Abierto, Aceptado, Rechazado, Completado) se refiere al comentario. Un elemento de pendientes tiene su propio estado, separado, para el trabajo en campo; consulte [Hacer una lista de pendientes](topic:punch-list).
