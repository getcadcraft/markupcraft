---
title: Convertir una anotación en tarea
summary: Asignar una anotación a una persona o a tu asistente, con un día límite y un vínculo al plano o al elemento del modelo, y verla cerrarse cuando eso cambia de verdad.
keywords: tarea, tareas, asignado, asistente, vencimiento, vencido, vínculo, cierra, cambiado, elemento, área del plano, anotaciones que actúan, MCP
from: 9e970202
---

Una tarea es una anotación que alguien tiene que hacer. Conserva su lugar en la hoja y su hilo, y agrega un título, un asignado, un día límite, un estado y, si se quiere, un vínculo a lo que trata.

## Crear una tarea

1. Seleccionar una o más anotaciones.
2. Abrir la pestaña {{ui:Tareas}} y elegir {{ui:Convertir la selección en tarea}}.
3. Completar el título (empieza con el texto de la anotación), para quién es ({{ui:Persona}} o {{ui:Asistente}}, y un nombre), un día límite opcional, y qué vigilar.

Una tarea de asistente es trabajo para el asistente que conectaste a MarkupCraft (ver [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants)). MarkupCraft no trae un asistente propio: solo lista el trabajo y recibe las respuestas del asistente. Elegir {{ui:Asignado a}}, y luego {{ui:Asistente}} en la lista, muestra lo que espera por él.

## Vigilar un cambio

- **El dibujo dentro de la anotación.** MarkupCraft guarda las líneas dentro del cuadro de la anotación tal como están ahora. Cuando se abre una revisión más nueva de esa hoja (un segundo archivo con el mismo número de hoja, o la misma posición de página), elegir {{ui:Verificar ahora}}: si las líneas de esa área difieren por más de un pelo, la tarea se cierra.
- **Un elemento del modelo.** Indicar la app y el id del elemento. El asistente lee el elemento con las herramientas propias de la otra app e informa con `tasks_check`. El primer informe se guarda como estado inicial; un informe posterior que difiera cierra la tarea. Un elemento que fue eliminado también la cierra.
- **Nada.** Una tarea simple que se termina a mano.

Una tarea cerrada se marca como Hecha, su anotación pasa a Completado, y una nota en el hilo dice qué cambió. Un paso de deshacer la vuelve a abrir.

**Límite:** la verificación supone que la revisión nueva usa el mismo origen y tamaño de página. Una hoja reimpresa con otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja, o si no por posición de página; MarkupCraft no escala una revisión para que encaje con la otra.

Volver a imprimir el mismo plano con una nueva fecha de sello, o líneas que se movieron menos de 1.5 puntos, no cuenta como cambio. Si no hay una revisión más nueva abierta, la tarea queda abierta y la barra de estado lo dice.

## La lista

La lista de {{ui:Tareas}} se puede filtrar por estado y por para quién es, incluido {{ui:Vencido}}. Una tarea pasada de su día límite aparece como advertencia en el panel de Problemas. {{ui:CSV}} exporta la lista.

Las tareas se guardan en el PDF junto con la anotación, y viajan por Live como las demás propiedades de anotación.
