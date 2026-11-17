---
title: Convertir una anotación en tarea
summary: Asigne una anotación a una persona o a su asistente, con un día límite y un enlace al elemento del dibujo o del modelo al que se refiere, y vea cómo se cierra cuando ese elemento cambia de verdad.
keywords: tarea, tareas, responsable, asistente, fecha límite, vencida, enlace, cierre, cambio, elemento, zona del dibujo, anotaciones que actúan, MCP
from: 9e970202
---

Una tarea es una anotación que alguien tiene que realizar. Conserva su lugar en la hoja y su hilo, y añade un título, un responsable, un día límite, un estado y, si lo desea, un enlace al elemento del que trata.

## Crear una tarea

1. Seleccione una o varias anotaciones.
2. Abra la pestaña {{ui:Tareas}} y elija {{ui:Convertir la selección en tarea}}.
3. Rellene el título (parte del texto de la anotación), para quién es ({{ui:Persona}} o {{ui:Asistente}}, y un nombre), un día límite opcional y qué vigilar.

Una tarea de asistente es trabajo para el asistente que conectó a MarkupCraft (véase [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants)). MarkupCraft no tiene asistente propio: solo lista el trabajo y recibe las respuestas del asistente. Al elegir {{ui:Asignada a}} y después {{ui:Asistente}} en la lista, se muestra lo que le espera.

## Vigilar un cambio

- **El dibujo dentro de la anotación.** MarkupCraft conserva las líneas dentro del cuadro de la anotación tal como están ahora. Cuando abra una revisión más reciente de esa hoja (un segundo archivo con el mismo número de hoja, o la misma posición en la página), elija {{ui:Comprobar ahora}}: si las líneas de esa zona difieren más de un pelo, la tarea se cierra.
- **Un elemento del modelo.** Indique la aplicación y el id del elemento. Su asistente lee el elemento con las herramientas propias de la otra aplicación y lo informa con `tasks_check`. El primer informe se guarda como estado inicial; un informe posterior que difiera cierra la tarea. Un elemento que se haya eliminado también la cierra.
- **Nada.** Una tarea sencilla que usted cierra a mano.

Una tarea cerrada se marca como Hecha, su anotación pasa a Completada, y una nota en el hilo indica qué cambió. Un único paso de deshacer la reabre.

**Límite:** la comprobación supone que la revisión más reciente usa el mismo origen y el mismo tamaño de página. Una hoja reimpresa a otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja y, si no lo tienen, por posición en la página; MarkupCraft no escala una revisión para ajustarla a la otra.

Volver a imprimir el mismo dibujo con una nueva fecha de sello, o líneas que se movieron menos de 1.5 pt, no cuenta como cambio. Si no hay ninguna revisión más reciente abierta, la tarea sigue abierta y la barra de estado lo indica.

## La lista

La lista de {{ui:Tareas}} puede filtrarse por estado y por para quién es, incluido {{ui:Vencido}}. Una tarea que ha pasado su día límite aparece en el panel de problemas como advertencia. {{ui:CSV}} exporta la lista.

Las tareas se guardan en el PDF junto con la anotación, y viajan a través de Live como las demás propiedades de la anotación.
