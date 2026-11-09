---
title: Novedades en 0.8 y 0.8.1
summary: Anotaciones que se vuelven tareas y se cierran solas, una lista simple de lo que cambió entre revisiones, notas de voz y decisiones en el plano, archivos redline para el dibujante, y los cambios compartidos de 0.8: dispositivos de entrada, filas de la barra, Problemas, más idiomas.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, asignado, día de vencimiento, vencido, verificar ahora, qué cambió, revisiones, comparar, nota de voz, decisión, redline, archivo de respuestas, dibujante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas de la barra, cuadrícula de propiedades, actualizar
from: 40368796
---

Esto es lo que cambió en MarkupCraft 0.8 y 0.8.1, comparado con 0.7. Lo más nuevo es que una anotación puede ser una tarea que alguien, o el asistente propio, realiza, y que se cierra sola cuando el dibujo cambia de verdad.

## Nuevo

### Anotaciones que actúan

- **Convertir una anotación en tarea.** Seleccionar una o más anotaciones, abrir la pestaña {{ui:Tareas}} y elegir {{ui:Convertir la selección en tarea}}. Una tarea tiene un título, una persona o el asistente conectado para realizarla, un día de vencimiento opcional y un estado, y mantiene su lugar en la hoja y su hilo. Ver [Convertir una anotación en tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su anotación. Abrir una revisión más nueva de la hoja y elegir {{ui:Verificar ahora}}: si las líneas de esa zona cambiaron de forma apreciable, la tarea se marca como Terminada, su anotación pasa a Completada y una nota en el hilo dice qué cambió. Una nueva fecha de sello, o líneas que se movieron menos de 1.5 puntos, no cuentan. Una tarea también puede vigilar un elemento del modelo: el asistente informa el elemento con `tasks_check`, y un informe posterior que difiera, o un elemento eliminado, cierra la tarea. Un paso de deshacer la vuelve a abrir.
- **Encontrar el trabajo.** Filtrar la lista {{ui:Tareas}} por estado y por a quién corresponde, incluido {{ui:Vencido}}; elegir {{ui:Asignado a}}, luego {{ui:Asistente}} para ver lo que espera al asistente. Una tarea pasada de su día de vencimiento se muestra como aviso en el panel Problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF junto con la anotación y viajan por Live como las demás propiedades de anotación.

### Lo que cambió, como lista simple

- **Listar los cambios.** Abrir la pestaña {{ui:Comparar}}, luego {{ui:Comparar un conjunto completo}}, elegir el archivo anterior y el posterior, y elegir {{ui:Listar los cambios}}. La lista empieza con un conteo y luego cubre cada hoja cambiada, del mayor cambio al menor: dónde está en la hoja, qué tan grande es (en unidades reales y también en pulgadas de papel en una hoja calibrada), si se agregaron o quitaron líneas, cuántas anotaciones hay allí, y qué palabras aparecieron o desaparecieron. {{ui:Copiar la lista}} la pone en el portapapeles, y {{ui:CSV}} escribe una fila por cambio. Ver [Listar lo que cambió entre revisiones](topic:what-changed-in-words).

### Notas de voz y decisiones

- **Notas de voz.** En la pestaña {{ui:Notas}} elegir {{ui:Grabar una nota de voz}}, luego {{ui:Detener grabación}}; las grabaciones se detienen solas a los dos minutos. La nota queda fijada en el centro de la hoja, se arrastra a donde corresponde y se escribe un subtítulo en {{ui:Propiedades}}, y {{ui:Reproducir}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Fijar una decisión}} escribe una o dos oraciones en la hoja. Si reemplaza una decisión anterior, elegirla en {{ui:Reemplaza a}}: la anterior queda, marcada como Reemplazada, y apunta a la nueva. Un paso de deshacer la quita. Ver [Fijar notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

### Redline a revisión

- **Enviar y responder.** En la pestaña {{ui:Tareas}} abrir {{ui:Redline a revisión}}, escribir la revisión con la que se comparan las anotaciones y elegir {{ui:Exportar archivo redline}}. Se obtiene un archivo `.redline.json` con un elemento por cada anotación abierta: hoja, posición (como fracciones de la hoja, para que una nueva impresión en otro tamaño siga coincidiendo), palabras, autor, hilo y su tarea. Quien dibuje los cambios responde Aceptada, Rechazada o Terminada en un archivo `.redline-answers.json`; {{ui:Cargar archivo de respuestas…}} asigna a cada anotación ese estado y la nota del dibujante, como un solo paso de deshacer. Ver [Enviar anotaciones al dibujante como redline](topic:redline-to-revision).

### Asistentes de IA

- **Más herramientas.** Un asistente conectado mediante CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), verificar una contra una revisión más nueva o un elemento (`tasks_check`), y leer la lista simple de cambios entre dos conjuntos de planos abiertos (`revisions_changes`). Solo obtiene las herramientas marcadas en el interruptor de Asistentes, y cada cambio es un paso de deshacer. Ver [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

## En todas las apps

- **Idiomas.** CadCraft Studio ahora tiene 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los idiomas que no son el inglés son borradores automáticos hasta que un hablante nativo los revise.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hace un trackpad, los botones laterales del mouse, un lápiz, los toques con el dedo, un mouse 3D, un control de juego o un controlador MIDI, para todas las apps o solo para esta. Hasta que se cambie algo, cada dispositivo funciona como antes. Ver [Usar un trackpad, mouse 3D o controlador](common:input-devices).
- **Filas de la barra.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} tiene {{ui:Ajustar}} (el predeterminado), {{ui:2 filas}} y {{ui:1 fila}}, para que el dibujo tenga más espacio. Ver [Ordenar los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una anotación usan la cuadrícula compartida, con categorías plegables y columnas de etiqueta y valor.
- **Panel de Problemas.** Los avisos de la app, como una tarea vencida, se reúnen en un solo panel de Problemas.
- **Live y complementos.** Las sesiones Live se describen en [Trabajar juntos en vivo](common:work-together-live); la lista de complementos que sigue la cuenta está en [Complementos y lista de la cuenta](common:addons-basics).
- **Conectar la IA.** CadCraft Studio es el centro para el asistente propio: se conecta una sola vez para las ocho apps. Las apps no tienen IA propia.

## Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la app de escritorio y las ediciones empaquetadas quedaban en inglés. Esto todavía no se probó en todas las plataformas: avisar si el idioma no cambia.
- A las instalaciones de Studio 0.8 se les ofrece la 0.8.1 mediante {{ui:Configuración}} › {{ui:Actualizaciones}}.

## No está en esta versión todavía

- **No está firmada con código.** Los instaladores de Windows y el .dmg de macOS todavía no tienen firma. En Windows, si SmartScreen detiene el instalador, elegir {{ui:Más información}}, luego {{ui:Ejecutar igual}}. En una Mac, hacer clic derecho en CadCraft Studio y elegir {{ui:Abrir}}. Las versiones para tiendas están en pausa.
- **Conectar la IA todavía está incompleto en algunos puntos.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y la clave de API propia dentro de Studio no están previstos para esta versión. El ciclo de tareas se probó, pero todavía no con un asistente real.
- **Las verificaciones de tareas requieren el mismo tamaño de página.** Una hoja replanteada a otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja, o si no por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y el subtítulo de la nota, no el sonido. La grabación se probó con un micrófono falso en un navegador sin interfaz; falta comprobarla con un micrófono real en un teléfono, una tableta o una portátil.
- **Las hojas de cálculo y los motivos en un PDF** se guardan en una entrada privada del archivo. Un MarkupCraft anterior ignora esa entrada y la descarta la próxima vez que guarda el archivo, así que conviene abrir y guardar ese archivo con la 0.8 o una posterior.
- **El lado del dibujante de los redline.** La lectura del archivo redline por parte de CadCraft y su respuesta todavía no están construidas.
- **Otros idiomas.** La barra de la app en tamil se desborda 528 px.

Todo lo demás está en [Lo que aún no está construido](topic:not-built-yet). Para la versión anterior, ver [Novedades en 0.7](topic:whats-new-0-7).
