---
title: Novedades en 0.8 y 0.8.1
summary: Marcas que se convierten en tareas y se cierran solas, una lista sencilla de lo que cambió entre revisiones, notas de voz y decisiones en el plano, archivos redline para el dibujante, y los cambios compartidos de la 0.8: dispositivos de entrada, filas de la barra de herramientas, Problemas, más idiomas.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, asignada, día de vencimiento, vencidos, revisar ahora, qué cambió, revisiones, comparar, nota de voz, decisión, redline, archivo de respuestas, dibujante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas de la barra de herramientas, cuadrícula de propiedades, actualizar
from: 40368796
---

Esto es lo que cambió en MarkupCraft 0.8 y 0.8.1, comparado con la 0.7. Lo más importante es que una marca puede ser una tarea que alguien, o su propio asistente, realiza, y que se cierra sola cuando el dibujo realmente cambia.

## Nuevo

### Marcas que actúan

- **Convierta una marca en tarea.** Seleccione una o más marcas, abra la pestaña {{ui:Tareas}} y elija {{ui:Hacer tarea la selección}}. Una tarea tiene un título, una persona o su asistente conectado que la realiza, un día de vencimiento opcional y un estado, y conserva su lugar en la hoja y su conversación. Vea [Convierta una marca en tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su marca. Abra una revisión más reciente de la hoja y elija {{ui:Revisar ahora}}: si las líneas de esa área cambiaron más que una diferencia mínima, la tarea se marca como Hecha, su marca pasa a Completada y una nota en la conversación indica qué cambió. Un nuevo sello de fecha, o líneas que se movieron menos de 1.5 puntos, no cuentan. En cambio, una tarea puede vigilar un elemento del modelo: su asistente informa el elemento con `tasks_check`, y un informe posterior que sea distinto, o un elemento eliminado, cierra la tarea. Un paso de deshacer la vuelve a abrir.
- **Encuentre el trabajo.** Filtre la lista de {{ui:Tareas}} por estado y por responsable, incluido {{ui:Vencidos}}; elija {{ui:Asignada a}} y luego {{ui:Asistente}} para ver qué espera a su asistente. Una tarea con el día de vencimiento ya pasado aparece como advertencia en el panel de Problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF junto con la marca y viajan por Live como otras propiedades de las marcas.

### Qué cambió, en una lista sencilla

- **Liste los cambios.** Abra la pestaña {{ui:Comparar}}, luego {{ui:Comparar un juego completo}}, seleccione el archivo anterior y el posterior, y elija {{ui:Listar los cambios}}. La lista empieza con un conteo y después cubre cada hoja cambiada, del cambio más grande al más pequeño: dónde está en la hoja, qué tan grande es (en unidades reales y también en pulgadas de papel en una hoja calibrada), si se agregaron o quitaron líneas, cuántas marcas hay ahí y qué palabras aparecieron o desaparecieron. {{ui:Copiar la lista}} la pone en el portapapeles y {{ui:CSV}} escribe una fila por cambio. Vea [Liste lo que cambió entre revisiones](topic:what-changed-in-words).

### Notas de voz y decisiones

- **Notas de voz.** En la pestaña {{ui:Notas}} elija {{ui:Grabar nota de voz}} y luego {{ui:Detener grabación}}; las grabaciones se detienen solas a los dos minutos. La nota queda fijada en el centro de la hoja; arrástrela a donde corresponda y escriba una leyenda en {{ui:Propiedades}}, y {{ui:Reproducir}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Fijar una decisión}} escribe una o dos oraciones en la hoja. Si reemplaza una decisión anterior, seleccione esa en {{ui:Reemplaza a}}: la anterior se mantiene, marcada como Reemplazada, y apunta a la nueva. Un paso de deshacer la revierte. Vea [Fije notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

### Marcas a revisión

- **Envíe y responda.** En la pestaña {{ui:Tareas}} abra {{ui:Marcas a revisión}}, escriba la revisión con la que se comparan las marcas y elija {{ui:Exportar archivo de redline}}. Obtendrá un archivo `.redline.json` con un elemento por cada marca abierta: hoja, posición (como fracciones de la hoja, para que un nuevo trazado en otro tamaño siga alineado), palabras, autor, conversación y su tarea. Quien dibuje los cambios responde Aceptada, Rechazada o Hecha en un archivo `.redline-answers.json`; {{ui:Cargar archivo de respuestas…}} asigna a cada marca ese estado y la nota del dibujante, como un solo paso de deshacer. Vea [Envíe marcas al dibujante como redline](topic:redline-to-revision).

### Asistentes de IA

- **Más herramientas.** Un asistente que conectó mediante CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), comprobar una contra una revisión más reciente o un elemento (`tasks_check`) y leer la lista sencilla de cambios entre dos juegos de planos abiertos (`revisions_changes`). Solo recibe las herramientas que marcó en el interruptor Asistentes, y cada cambio es un paso de deshacer. Vea [Use MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

## En todas las aplicaciones

- **Idiomas.** CadCraft Studio ahora tiene 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los revise.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un trackpad, los botones laterales del mouse, un lápiz, los toques con el dedo, un mouse 3D, un control de juego o un controlador MIDI, para todas las aplicaciones o solo para esta. Hasta que cambie algo, cada dispositivo funciona como antes. Vea [Use un trackpad, mouse 3D o control](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} tiene {{ui:Repartir}} (el valor predeterminado), {{ui:2 filas}} y {{ui:1 fila}}, para que el dibujo tenga más espacio. Vea [Organice los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una marca usan la cuadrícula compartida, con categorías plegables y columnas de etiqueta y valor.
- **Panel de Problemas.** Las advertencias de la aplicación, como una tarea vencida, se reúnen en un solo panel de Problemas.
- **Live y complementos.** Las sesiones Live se describen en [Trabaje juntos en vivo](common:work-together-live); la lista de complementos que sigue a su cuenta está en [Complementos y su lista de cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro para su propio asistente: conéctelo una vez para las ocho aplicaciones. Las aplicaciones no tienen IA propia.

## Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la aplicación de escritorio y las ediciones empaquetadas se quedaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la oferta de 0.8.1 en {{ui:Configuración}} › {{ui:Actualizaciones}}.

## Todavía no está en esta versión

- **Sin firma de código.** Los instaladores de Windows y el .dmg de macOS todavía no tienen firma. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todas formas}}. En un Mac, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tiendas están en pausa.
- **Conectar su IA aún está incompleto en algunos puntos.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y su propia clave de API dentro de Studio no están prometidos en esta versión. El ciclo de tareas se probó, pero todavía no con un asistente real.
- **Las comprobaciones de tareas necesitan el mismo tamaño de página.** Una hoja con un nuevo trazado en otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja y, si no lo tienen, por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y la leyenda de la nota, no el sonido. La grabación se probó con un micrófono falso en un navegador sin interfaz; falta comprobar un micrófono real en un teléfono, tableta o laptop.
- **Las hojas de cálculo y los motivos en un PDF** se guardan en una entrada privada del archivo. Un MarkupCraft anterior ignora esa entrada y la elimina la próxima vez que guarde el archivo, así que abra y guarde ese archivo con la versión 0.8 o posterior.
- **La parte del dibujante en los redline.** La lectura del archivo redline por CadCraft y su respuesta todavía no están construidas.
- **Otros idiomas.** La barra de aplicación en tamil se desborda por 528 px.

Todo lo demás está en [Lo que todavía no está disponible](topic:not-built-yet). Para la versión anterior, vea [Novedades en 0.7](topic:whats-new-0-7).
