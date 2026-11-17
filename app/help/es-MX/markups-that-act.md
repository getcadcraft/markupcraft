---
title: Crear una marca como tarea
summary: Asigne una marca a una persona o a su asistente, con un día límite y un vínculo al dibujo o al elemento del modelo al que se refiere, y vea cómo se cierra cuando ese cambio realmente ocurre.
keywords: tarea, tareas, asignado, asistente, vencimiento, vencida, vínculo, cierra, cambiado, elemento, área del dibujo, marcas que actúan, MCP
from: 9e970202
---

Una tarea es una marca que alguien tiene que hacer. Conserva su lugar en la hoja y su hilo, y agrega un título, una persona asignada, un día límite, un estado y, si lo desea, un vínculo a aquello a lo que se refiere.

## Crear una tarea

1. Seleccione una o más marcas.
2. Abra la pestaña {{ui:Tareas}} y elija {{ui:Hacer tarea la selección}}.
3. Complete el título (parte del texto de la marca), para quién es ({{ui:Persona}} o {{ui:Asistente}}, y un nombre), un día límite opcional, y qué vigilar.

Una tarea de asistente es trabajo para el asistente que conectó a MarkupCraft (vea [Use MarkupCraft con un asistente de IA](topic:use-with-ai-assistants)). MarkupCraft no contiene un asistente propio: solo lista el trabajo y recibe las respuestas del asistente. Elija {{ui:Asignada a}} y luego {{ui:Asistente}} en la lista para ver lo que le espera.

## Vigilar un cambio

- **El dibujo dentro de la marca.** MarkupCraft conserva las líneas dentro del cuadro de la marca tal como están ahora. Cuando abre una revisión más nueva de esa hoja (un segundo archivo con el mismo número de hoja, o la misma posición de página), elija {{ui:Revisar ahora}}: si las líneas en esa área difieren más que un pelo, la tarea se cierra.
- **Un elemento del modelo.** Indique la app y el id del elemento. Su asistente lee el elemento con las herramientas propias de la otra app y lo informa con `tasks_check`. El primer informe se guarda como estado inicial; un informe posterior que sea distinto cierra la tarea. Un elemento que fue borrado también la cierra.
- **Nada.** Una tarea simple que termina a mano.

Una tarea cerrada se marca como Hecha, su marca pasa a Completada, y una nota en el hilo dice qué cambió. Un paso de deshacer la reabre.

**Límite:** la verificación supone que la revisión más nueva usa el mismo origen de página y el mismo tamaño de página. Una hoja vuelta a trazar con otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja, o si no, por posición de página; MarkupCraft no escala una revisión para que encaje con la otra.

Volver a trazar el mismo dibujo con una nueva fecha de sello, o líneas que se movieron menos de 1.5 pt, no cuenta como cambio. Si no hay una revisión más nueva abierta, la tarea queda abierta y la barra de estado lo indica.

## La lista

La lista de {{ui:Tareas}} puede filtrarse por estado y por para quién es, incluido {{ui:Vencidos}}. Una tarea que pasó de su día límite aparece en el panel de problemas como advertencia. {{ui:CSV}} exporta la lista.

Las tareas se guardan en el PDF con la marca, y viajan por Live como las demás propiedades de la marca.
