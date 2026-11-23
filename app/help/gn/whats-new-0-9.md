---
title: Novedades de la 0.9 (anterior)
summary: Notas y una mesa de trabajo que nunca se imprimen, notas privadas cifradas y una copia limpia para el cliente, enlaces por lotes para todo un juego de planos, una herramienta Arco con diez métodos, seguir a otro revisor en Live, y una corrección para anotaciones borradas que seguían en el PDF guardado.
keywords: novedades 0.9, versión anterior, novedades, notas de la versión, registro de cambios, notas, mesa de trabajo, notas privadas, frase de contraseña, cifrado, ocultar notas, mostrar notas, copia limpia, captura, enlaces por lotes, llamadas de hojas, enlazar hojas, bloque de rótulo, número de hoja, adenda, renumerar, enlace pdf, arco, métodos de arco, arco de tres puntos, radio, seguir, seguir a alguien, live, vista de clase, lista de personas, anotación eliminada, globos de ayuda, títulos de pestañas, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, asignado, fecha límite, vencido, verificar ahora, qué cambió, revisiones, comparar, nota de voz, decisión, redline, archivo de respuestas, dibujante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas de la barra, cuadrícula de propiedades, actualización
from: aa3dfeb8
---

Esto es lo que cambió en MarkupCraft 0.9, comparado con 0.8.1. La idea principal es que tus notas de trabajo queden fuera de la hoja que recibe el cliente, y que todo un juego de planos se pueda enlazar en una sola pasada.

## Nuevo

### Notas, mesa de trabajo y notas privadas

- **La mesa de trabajo.** El área alrededor de cada hoja es un escritorio: todo lo que se dibuja, escribe o pega al lado de la hoja es una nota y nunca se imprime. Elegí {{ui:Mostrar la mesa de trabajo}} para alejar la vista y tener más espacio, o {{ui:Captura a la mesa de trabajo}}, arrastrá un recuadro, y luego {{ui:A la mesa de trabajo}} para poner una imagen de parte del plano al lado de la hoja. Una captura es una imagen y no cambia cuando cambia la hoja. Ver [Notas, mesa de trabajo y notas privadas](topic:notes-and-pasteboard).
- **Mostrar y ocultar notas.** Cualquier anotación puede ser una nota: definí {{ui:Las nuevas anotaciones son}} en la pestaña {{ui:Notas}}, o {{ui:Esta anotación es}} en {{ui:Propiedades}}. {{key:Shift+H}} o el interruptor {{ui:Notas}} debajo de la hoja oculta y muestra todas las notas a la vez. Las notas quedan fuera de la impresión, de las copias aplanadas, de las listas y de las exportaciones, y otros lectores de PDF no las muestran. El PDF guardado las conserva para la próxima vez que lo abras en MarkupCraft.
- **Notas privadas.** Elegí {{ui:Definir una frase de contraseña}}, y después convertí una anotación en {{ui:Una nota privada}}. Se cifra en el archivo con una frase de contraseña de al menos 10 caracteres, y no hay recuperación: nadie, nosotros incluidos, puede abrirla sin la frase. {{ui:Bloquear}} guarda las notas privadas; {{ui:Mantener desbloqueado en este dispositivo}} viene desactivado por defecto.
- **Guardar una copia limpia.** {{ui:Guardar una copia limpia}} elimina todas las notas, las notas privadas y todo lo que esté en la mesa de trabajo. Usala para el archivo que va al cliente.

### Enlazar un juego completo

- **Enlaces por lotes.** Elegí {{ui:Páginas}} › {{ui:Enlaces por lotes…}}, o {{ui:Enlazar llamadas de hojas…}} debajo de {{ui:Buscar texto}} en el panel {{ui:Hojas}}. El paso 1 lista el número y nombre de cada hoja tal como se leen de su rótulo; corregí los que estén mal. El paso 2 lista las llamadas encontradas, como `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Enlazará}} muestra la hoja y la vista de cada una, {{ui:Sin enlazar}} muestra los números que ninguna hoja abierta tiene, y {{ui:Crear los enlaces}} las crea todas en un solo paso de deshacer. Volvé a ejecutarlo después de una adenda o de una renumeración; los enlaces que hiciste a mano nunca se cambian. Un enlace con vista se guarda como enlace PDF, así otros lectores también abren el detalle. Ver [Enlaces de hojas](topic:sheet-links).

### Dibujo

- **Arco, diez métodos.** La herramienta {{ui:Arco}} ({{key:O}}) ahora tiene un cuadro {{ui:Método de arco}} sobre la página con diez maneras de dibujar un arco, y el ángulo, la longitud, el radio y la dirección se pueden hacer con clic o escribiéndolos. Ver [Dibujar un arco de diez maneras](topic:draw-an-arc).

### Trabajo en equipo

- **Seguir a un revisor.** En una sesión Live elegí {{ui:Seguir}} al lado del nombre de una persona, y tu vista se mueve con la suya; si vos mismo desplazás o hacés zoom, se deja de seguir. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. La lista de personas muestra el color de cada una, su nombre, la hoja en la que está y cuándo fue su última edición. Ver [Seguir a otro revisor en una sesión Live](topic:follow-in-live).

## En todas las apps

- Los globos de ayuda son de Bootstrap, el consejo de inicio se puede cerrar, las franjas de pestañas se desplazan cuando no entran, y los títulos de pestañas del navegador dicen `<documento> — MarkupCraft | CadCraft`.
- Un panel con varias secciones abre una y cierra las demás (un candado al lado del cursor mantiene una abierta); un interruptor de {{ui:Configuración}} desactiva esto.
- Cada app arranca con una colección predeterminada de objetos de la Biblioteca.
- Las unidades de peso y temperatura están disponibles en la configuración de Unidades.

## Corregido

- **Las anotaciones eliminadas ya no quedan legibles dentro del PDF guardado.** Antes, al guardar, se quitaba una anotación borrada o reescrita de su página pero el objeto, con su texto, quedaba en el archivo. Ahora al guardar se eliminan esos objetos. Los archivos guardados con versiones anteriores los siguen teniendo hasta que los guardes otra vez.

## Límites reales

- Los enlaces por lotes se probaron con nuestros propios juegos de prueba. Los juegos reales dibujan las burbujas de muchas formas, así que en un juego de un cliente algunas vistas pueden no detectarse. Las hojas escaneadas necesitan primero {{ui:Leer texto (OCR)…}}.
- Las notas, las notas privadas y la mesa de trabajo se probaron en un navegador sin interfaz y con nuestros propios archivos, no con un juego grande de vectores real ni en una sesión Live real de dos personas. Cambiar una frase de contraseña todavía no está hecho. Las versiones anteriores a la 0.9 no muestran notas.
- La vista de clase es la lista de personas; todavía no se probó con un docente real y alumnos.
- Los idiomas distintos del inglés son borradores de máquina hasta que los lea un hablante nativo.
- Los instaladores de Windows no tienen firma de código (Más información, luego Ejecutar igual); la imagen de disco de macOS no está notarizada (clic derecho, luego Abrir).

## Anterior: 0.8 y 0.8.1

Esto es lo que cambió en MarkupCraft 0.8 y 0.8.1, comparado con 0.7. Lo gran novedad es que una anotación puede ser una tarea que alguien, o tu propio asistente, realiza, y que se cierra sola cuando el plano cambia de verdad.

### Nuevo

**Anotaciones que actúan**

- **Convertir una anotación en tarea.** Seleccioná una o más anotaciones, abrí la pestaña {{ui:Tareas}} y elegí {{ui:Convertir la selección en tarea}}. Una tarea tiene un título, una persona o tu asistente conectado que la realiza, una fecha límite opcional y un estado, y conserva su lugar en la hoja y su hilo. Ver [Convertir una anotación en tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su anotación. Abrí una revisión más nueva de la hoja y elegí {{ui:Verificar ahora}}: si las líneas de esa área cambiaron más de un pelo, la tarea se marca como Hecho, su anotación pasa a Completado y una nota en el hilo dice qué cambió. Un nuevo sello de fecha, o líneas que se movieron menos de 1,5 puntos, no cuentan. Una tarea también puede vigilar un elemento del modelo: tu asistente informa el elemento con `tasks_check`, y un informe posterior que sea distinto, o un elemento eliminado, cierra la tarea. Un paso de deshacer la vuelve a abrir.
- **Encontrar el trabajo.** Filtrá la lista de {{ui:Tareas}} por estado y por para quién es, incluido {{ui:Vencido}}; elegí {{ui:Asignado a}}, y después {{ui:Asistente}} para ver qué espera a tu asistente. Una tarea que pasó su fecha límite aparece como aviso en el panel de Problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF con la anotación y viajan por Live como otras propiedades de la anotación.

**Qué cambió, en una lista simple**

- **Listar los cambios.** Abrí la pestaña {{ui:Comparar}}, después {{ui:Comparar un conjunto completo}}, elegí el archivo anterior y el posterior, y elegí {{ui:Listar los cambios}}. La lista empieza con un conteo, y después cubre cada hoja cambiada, el cambio más grande primero: dónde está en la hoja, qué tan grande es (en unidades reales y también en pulgadas de papel en una hoja calibrada), si se agregaron o quitaron líneas, cuántas anotaciones hay ahí, y qué palabras aparecieron o desaparecieron. {{ui:Copiar la lista}} la pone en el portapapeles, y {{ui:CSV}} escribe una fila por cambio. Ver [Listar lo que cambió entre revisiones](topic:what-changed-in-words).

**Notas de voz y decisiones**

- **Notas de voz.** En la pestaña {{ui:Notas}} elegí {{ui:Grabar una nota de voz}}, y después {{ui:Detener grabación}}; las grabaciones se detienen solas a los dos minutos. La nota queda fijada en el centro de la hoja, la arrastrás a donde corresponde y escribís un subtítulo en {{ui:Propiedades}}, y {{ui:Reproducir}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Fijar una decisión}} escribe una o dos oraciones en la hoja. Si reemplaza una decisión anterior, elegí esa en {{ui:Reemplaza a}}: la anterior queda, marcada como Reemplazado, y apunta a la nueva. Un paso de deshacer la quita. Ver [Fijar notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

**Redline a revisión**

- **Enviar y responder.** En la pestaña {{ui:Tareas}} abrí {{ui:Redline a revisión}}, escribí la revisión con la que se comparan las anotaciones y elegí {{ui:Exportar archivo redline}}. Obtenés un archivo `.redline.json` con un elemento por cada anotación abierta: hoja, posición (como fracciones de la hoja, así un nuevo trazado a otro tamaño sigue coincidiendo), palabras, autor, hilo y su tarea. Quien dibuja los cambios responde Aceptado, Rechazado o Hecho en un archivo `.redline-answers.json`; {{ui:Cargar archivo de respuestas…}} le da a cada anotación ese estado y la nota del dibujante, como un solo paso de deshacer. Ver [Enviar anotaciones al dibujante como redline](topic:redline-to-revision).

**Asistentes de IA**

- **Más herramientas.** Un asistente que conectaste por CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), verificar una contra una revisión más nueva o un elemento (`tasks_check`), y leer la lista simple de cambios entre dos juegos de planos abiertos (`revisions_changes`). Solo recibe las herramientas que marcaste en el interruptor {{ui:Asistentes}}, y cada cambio es un paso de deshacer. Ver [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

### En todas las apps

- **Idiomas.** CadCraft Studio ahora tiene 54 idiomas. Diez son nuevos: lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los que no son inglés son borradores de máquina hasta que los lea un hablante nativo.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un trackpad, los botones laterales del mouse, un lápiz, los toques con dedos, un mouse 3D, un control de juego o un controlador MIDI, para todas las apps o solo para esta. Hasta que cambies algo, cada dispositivo funciona como antes. Ver [Usar un trackpad, mouse 3D o control](common:input-devices).
- **Filas de la barra.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} tiene {{ui:Ajustar}} (el predeterminado), {{ui:2 filas}} y {{ui:1 fila}}, para que el plano tenga más espacio. Ver [Organizar los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una anotación usan la cuadrícula compartida, con categorías plegables y columnas de etiqueta y valor.
- **Panel de Problemas.** Los avisos de la app, como una tarea vencida, se juntan en un solo panel de Problemas.
- **Live y complementos.** Las sesiones Live se describen en [Trabajar juntos en vivo](common:work-together-live); la lista de complementos que sigue a tu cuenta está en [Complementos y tu lista de cuenta](common:addons-basics).
- **Conectá tu IA.** CadCraft Studio es el centro para tu propio asistente: conectalo una vez para las ocho apps. Las apps no tienen IA propia.

### Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras funciona.** Antes, la app de escritorio y las ediciones empaquetadas quedaban en inglés. Esto todavía no se probó en todas las plataformas: avisanos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la 0.8.1 por {{ui:Configuración}} › {{ui:Actualizaciones}}.

### Todavía no está en esta versión

- **Sin firma de código.** Los instaladores de Windows y la imagen .dmg de macOS todavía no tienen firma. En Windows, si SmartScreen detiene el instalador, elegí {{ui:Más información}}, después {{ui:Ejecutar igual}}. En un Mac, hacé clic derecho en CadCraft Studio y elegí {{ui:Abrir}}. Las versiones para tiendas están en pausa.
- **Conectar tu IA todavía está incompleto en partes.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y tu propia clave de API dentro de Studio no están prometidos para esta versión. El ciclo de tareas se probó, pero todavía no con un asistente real.
- **Las verificaciones de tareas necesitan el mismo tamaño de página.** Una hoja re-trazada a otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja, o si no por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y el subtítulo de una nota, no el sonido. La grabación se probó con un micrófono falso en un navegador sin interfaz; un micrófono real en un teléfono, tableta o laptop todavía falta verificarlo.
- **Las hojas de cálculo y las razones dentro de un PDF** se guardan en una entrada privada del archivo. Un MarkupCraft anterior ignora esa entrada y la quita la próxima vez que guarda el archivo, así que abrí y guardá esos archivos con la 0.8 o posterior.
- **El lado del dibujante de los redlines.** Que CadCraft lea el archivo redline y lo responda todavía no está hecho.
- **Otros idiomas.** La barra de la app en tamil se desborda 528 px.

Todo lo demás está en [Lo que todavía no está hecho](topic:not-built-yet). Para la versión anterior, ver [Novedades de la 0.7](topic:whats-new-0-7).
