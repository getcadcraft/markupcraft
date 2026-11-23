---
title: Novedades de la versión 0.9 (anteriores)
summary: Notas y una mesa de trabajo que nunca se imprimen, notas privadas cifradas y una copia limpia para el cliente, enlaces por lotes para un conjunto completo de planos, una herramienta Arco con diez métodos, seguir a otro revisor en Live y una corrección para que las anotaciones borradas sigan en el PDF guardado.
keywords: novedades 0.9, versión anterior, novedades, qué hay de nuevo, 0.9, notas de la versión, registro de cambios, notas, mesa de trabajo, notas privadas, frase de contraseña, cifrado, ocultar notas, mostrar notas, copia limpia, instantánea, enlaces por lotes, llamadas a hojas, enlazar hojas, bloque de rótulos, número de hoja, adenda, renumerar, enlace pdf, arco, métodos de arco, arco de tres puntos, radio, seguir, seguir a otro, live, vista de clase, lista de personas, anotación borrada, información emergente, títulos de pestaña, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, responsable, día límite, vencido, comprobar ahora, qué ha cambiado, revisiones, comparar, nota de voz, decisión, corrección, archivo de respuestas, delineante, asistente, mcp, problemas, idiomas, dispositivos de entrada, panel táctil, filas de la barra de herramientas, cuadrícula de propiedades, actualización
from: aa3dfeb8
---

Esto es lo que ha cambiado en MarkupCraft 0.9, respecto a la 0.8.1. La idea principal es que sus notas de trabajo no llegan a la página que recibe el cliente, y que un conjunto completo de planos se puede enlazar de una sola vez.

## Novedades

### Notas, la mesa de trabajo y las notas privadas

- **La mesa de trabajo.** La zona que rodea cada hoja es una mesa: todo lo que se dibuje, escriba o pegue junto a la hoja es una nota y nunca se imprime. Elija {{ui:Mostrar la mesa de trabajo}} para alejar la vista y tener espacio, o {{ui:Instantánea en la mesa de trabajo}}, arrastre un recuadro y luego {{ui:A la mesa de trabajo}} para poner una imagen de parte del plano junto a la hoja. Una instantánea es una imagen y no cambia cuando cambia la hoja. Vea [Notas, la mesa de trabajo y las notas privadas](topic:notes-and-pasteboard).
- **Mostrar y ocultar notas.** Cualquier anotación puede ser una nota: marque {{ui:Las nuevas anotaciones son}} en la pestaña {{ui:Notas}}, o {{ui:Esta anotación es}} en {{ui:Propiedades}}. {{key:Shift+H}} o el interruptor {{ui:Notas}} bajo la hoja oculta y muestra todas las notas a la vez. Las notas no se incluyen en la impresión, en las copias aplanadas, en las listas ni en las exportaciones, y otros lectores de PDF no las muestran. El PDF guardado las conserva para la próxima vez que lo abra en MarkupCraft.
- **Notas privadas.** Elija {{ui:Establecer una frase de contraseña}} y luego convierta una anotación en {{ui:Una nota privada}}. Se cifra en el archivo con una frase de contraseña de al menos 10 caracteres, y no hay recuperación: nadie, tampoco nosotros, puede abrirla sin la frase. {{ui:Bloquear}} guarda las notas privadas; {{ui:Mantener desbloqueadas en este dispositivo}} está desactivada de forma predeterminada.
- **Guardar una copia limpia.** {{ui:Guardar una copia limpia}} elimina todas las notas, las notas privadas y todo lo que haya en la mesa de trabajo. Úselo para el archivo que se envía al cliente.

### Enlazar un conjunto completo

- **Enlaces por lotes.** Elija {{ui:Páginas}} › {{ui:Enlaces por lotes…}}, o {{ui:Enlazar llamadas a hojas…}} bajo {{ui:Buscar texto}} en el panel {{ui:Hojas}}. El paso 1 muestra el número y el nombre de cada hoja, tal como se leen de su bloque de rótulos; corrija los que estén mal. El paso 2 muestra las llamadas encontradas, como `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Se enlazará}} indica la hoja y la vista de cada una, {{ui:Sin enlazar}} muestra los números que ninguna hoja abierta tiene, y {{ui:Crear los enlaces}} los crea todos en un solo paso de deshacer. Vuelva a ejecutarlo tras una adenda o una renumeración; los enlaces que hizo a mano no se modifican nunca. Un enlace con vista se guarda como enlace PDF, de modo que otros lectores también abren el detalle. Vea [Enlaces de hojas](topic:sheet-links).

### Dibujo

- **Arco, diez métodos.** La herramienta {{ui:Arco}} ({{key:O}}) tiene ahora un cuadro {{ui:Método de arco}} sobre la página con diez formas de dibujar un arco, y el ángulo, la longitud, el radio y la dirección se pueden indicar con el ratón o escribirlos. Vea [Dibujar un arco de diez formas](topic:draw-an-arc).

### Trabajar en equipo

- **Seguir a un revisor.** En una sesión Live elija {{ui:Seguir}} junto al nombre de una persona y su vista se mueve con la suya; si usted desplaza o amplía la vista, deja de seguirla. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. La lista de personas muestra el color de cada una, su nombre, la hoja en la que está y la hora de su última edición. Vea [Seguir a otro revisor en una sesión Live](topic:follow-in-live).

## En todas las aplicaciones

- Las información emergente son de Bootstrap, la sugerencia de inicio se puede cerrar, las tiras de pestañas se desplazan cuando no caben, y los títulos de las pestañas del navegador dicen `<documento> — MarkupCraft | CadCraft`.
- Un panel con varias secciones abre una y cierra las demás (un candado junto al cursor mantiene una abierta); un interruptor de Ajustes desactiva esto.
- Cada aplicación empieza con una colección predeterminada de objetos de la biblioteca.
- Las unidades de peso y temperatura están disponibles en los ajustes de unidades.

## Corregido

- **Las anotaciones eliminadas ya no siguen siendo legibles dentro del PDF guardado.** Antes, al guardar, se quitaba una anotación borrada o reescrita de su página, pero el objeto, con su texto, quedaba en el archivo. Ahora al guardar se eliminan esos objetos. Los archivos guardados con versiones anteriores siguen conteniéndolos hasta que los vuelva a guardar.

## Límites reconocidos

- Los enlaces por lotes se probaron en nuestros propios conjuntos de prueba. Los conjuntos reales dibujan los globos de muchas formas, así que en un conjunto de un cliente algunas vistas pueden no encontrarse. Las hojas escaneadas necesitan antes {{ui:Leer texto (OCR)…}}.
- Las notas, las notas privadas y la mesa de trabajo se probaron en un navegador sin interfaz gráfica y en nuestros propios archivos, no con un conjunto vectorial grande y real ni en una sesión Live real de dos personas. Cambiar una frase de contraseña no está implementado. Las versiones anteriores a la 0.9 no muestran las notas.
- La vista de clase es la lista de personas; no se ha probado con un profesor y alumnos reales.
- Los idiomas distintos del inglés son borradores de máquina hasta que los lea un hablante nativo.
- Los instaladores de Windows no están firmados digitalmente (Más información, y luego Ejecutar de todos modos); la imagen de disco de macOS no está notarizada (clic derecho y luego Abrir).

## Anteriores: 0.8 y 0.8.1

Esto es lo que ha cambiado en MarkupCraft 0.8 y 0.8.1, respecto a la 0.7. La gran novedad es que una anotación puede ser una tarea que alguien, o su propio asistente, realiza, y que se cierra sola cuando el dibujo cambia de verdad.

### Novedades

**Anotaciones que actúan**

- **Convertir una anotación en tarea.** Seleccione una o más anotaciones, abra la pestaña {{ui:Tareas}} y elija {{ui:Convertir la selección en tarea}}. Una tarea tiene un título, una persona o su asistente conectado que la realiza, un día límite opcional y un estado, y mantiene su lugar en la hoja y su hilo. Vea [Convertir una anotación en tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su anotación. Abra una revisión más reciente de la hoja y elija {{ui:Comprobar ahora}}: si las líneas de esa zona cambiaron más de un pelo, la tarea se marca como Hecha, su anotación pasa a Completada y una nota en el hilo indica qué cambió. Un nuevo sello de fecha, o líneas que se movieron menos de 1,5 puntos, no cuentan. Una tarea también puede vigilar un elemento del modelo: su asistente informa del elemento con `tasks_check`, y un informe posterior distinto, o un elemento eliminado, cierra la tarea. Un paso de deshacer la vuelve a abrir.
- **Encontrar el trabajo.** Filtre la lista de {{ui:Tareas}} por estado y por a quién va dirigida, incluido {{ui:Vencido}}; elija {{ui:Asignada a}} y luego {{ui:Asistente}} para ver lo que espera a su asistente. Una tarea que supera su día límite aparece como aviso en el panel de problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF con la anotación y viajan por Live como otras propiedades de la anotación.

**Qué ha cambiado, en una lista**

- **Listar los cambios.** Abra la pestaña {{ui:Comparar}}, luego {{ui:Comparar un conjunto completo}}, elija el archivo anterior y el posterior y pulse {{ui:Listar los cambios}}. La lista empieza con un recuento y después recoge cada hoja cambiada, la de mayor cambio primero: dónde está en la hoja, su tamaño (en unidades reales y también en pulgadas de papel en una hoja calibrada), si se añadieron o quitaron líneas, cuántas anotaciones hay allí y qué palabras aparecieron o desaparecieron. {{ui:Copiar la lista}} la pone en el portapapeles, y {{ui:CSV}} escribe una fila por cambio. Vea [Listar lo que ha cambiado entre revisiones](topic:what-changed-in-words).

**Notas de voz y decisiones**

- **Notas de voz.** En la pestaña {{ui:Notas}} elija {{ui:Grabar una nota de voz}} y luego {{ui:Detener la grabación}}; las grabaciones se detienen solas a los dos minutos. La nota se fija en el centro de la hoja; la arrastra a donde corresponda y escribe un pie en {{ui:Propiedades}}, y {{ui:Reproducir}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Fijar una decisión}} escribe una o dos frases en la hoja. Si sustituye a una decisión anterior, elíjala en {{ui:Sustituye a}}: la antigua se conserva, marcada como Sustituida, y apunta a la nueva. Un paso de deshacer la devuelve. Vea [Fijar notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

**Corrección sobre la revisión**

- **Enviar y responder.** En la pestaña {{ui:Tareas}} abra {{ui:Corrección sobre la revisión}}, escriba la revisión con la que se comparan las anotaciones y elija {{ui:Exportar archivo de corrección}}. Obtiene un archivo `.redline.json` con un elemento por cada anotación abierta: hoja, posición (como fracciones de la hoja, para que una nueva impresión a otro tamaño siga alineada), palabras, autor, hilo y su tarea. Quien dibuje los cambios responde Aceptada, Rechazada o Hecha en un archivo `.redline-answers.json`; {{ui:Cargar archivo de respuestas…}} da a cada anotación ese estado y la nota del delineante, en un solo paso de deshacer. Vea [Enviar anotaciones al delineante como corrección](topic:redline-to-revision).

**Asistentes de IA**

- **Más herramientas.** Un asistente que conectó a través de CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), comprobar una frente a una revisión más reciente o a un elemento (`tasks_check`) y leer la lista simple de cambios entre dos conjuntos de planos abiertos (`revisions_changes`). Solo recibe las herramientas que marcó en el interruptor de Asistentes, y cada cambio es un paso de deshacer. Vea [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

### En todas las aplicaciones

- **Idiomas.** CadCraft Studio tiene ahora 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los que no son inglés son borradores de máquina hasta que los lea un hablante nativo.
- **Dispositivos de entrada.** {{ui:Ajustes}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un panel táctil, los botones laterales del ratón, un lápiz, los toques con el dedo, un ratón 3D, un mando de juego o un controlador MIDI, para todas las aplicaciones o solo para esta. Hasta que cambie algo, cada dispositivo funciona como antes. Vea [Usar un panel táctil, un ratón 3D o un mando](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} tiene {{ui:Ajustar}} (la opción predeterminada), {{ui:2 filas}} y {{ui:1 fila}}, para dar más espacio al dibujo. Vea [Organizar los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una anotación usan la cuadrícula común, con categorías plegables y columnas de etiqueta y valor.
- **Panel de problemas.** Los avisos de la aplicación, como una tarea vencida, se reúnen en un solo panel de problemas.
- **Live y complementos.** Las sesiones Live se describen en [Trabajar en equipo en directo](common:work-together-live); la lista de complementos de su cuenta está en [Complementos y su lista de cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro para su propio asistente: conéctelo una vez para las ocho aplicaciones. Las aplicaciones no incluyen IA propia.

### Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la aplicación de escritorio y las ediciones empaquetadas se quedaban en inglés. Esto aún no se ha probado en todas las plataformas: díganos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la 0.8.1 a través de {{ui:Ajustes}} › {{ui:Actualizaciones}}.

### Todavía no incluido en esta versión

- **Sin firma digital.** Los instaladores de Windows y el .dmg de macOS aún no llevan firma. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tiendas están en pausa.
- **Conectar su IA aún está incompleto en algunos puntos.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y su propia clave de API dentro de Studio no están garantizados en esta versión. El ciclo de tareas se ha probado, pero aún no con un asistente real.
- **Las comprobaciones de tareas necesitan el mismo tamaño de página.** Una hoja impresa de nuevo a otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja, o si no, por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y el pie de la nota, pero no el sonido. La grabación se probó con un micrófono simulado en un navegador sin interfaz gráfica; falta comprobar un micrófono real en un teléfono, una tableta o un portátil.
- **Las hojas de cálculo y las razones en un PDF** se guardan en una entrada privada del archivo. Una versión anterior de MarkupCraft ignora esa entrada y la elimina la próxima vez que guarde el archivo, así que abra y guarde estos archivos con la 0.8 o posterior.
- **La parte del delineante en las correcciones.** Que CadCraft lea el archivo de corrección y responda a él todavía no está implementado.
- **Otros idiomas.** La barra de la aplicación en tamil se desborda 528 px.

Todo lo demás está en [Lo que aún no está implementado](topic:not-built-yet). Para la versión anterior a esta, vea [Novedades de la 0.7](topic:whats-new-0-7).
