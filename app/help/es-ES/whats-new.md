---
title: Novedades de la versión 0.9
summary: Notas y una mesa de trabajo que nunca se imprimen, notas privadas cifradas y una copia limpia para el cliente, enlaces por lotes para todo un juego de planos, una herramienta Arco con diez métodos, seguir a otro revisor en Live, y una corrección para anotaciones borradas que siguen en el PDF guardado.
keywords: novedades, qué hay de nuevo, 0.9, notas de la versión, registro de cambios, notas, mesa de trabajo, notas privadas, frase de contraseña, cifrado, ocultar notas, mostrar notas, copia limpia, instantánea, enlaces por lotes, llamadas a hojas, enlazar hojas, bloque de rótulos, número de hoja, adenda, renumerar, enlace pdf, arco, métodos de arco, arco de tres puntos, radio, seguir, seguir a alguien, live, vista de clase, lista de personas, anotación borrada, descripciones emergentes, títulos de pestañas, novedades, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, responsable, día de vencimiento, vencido, comprobar ahora, qué cambió, revisiones, comparar, nota de voz, decisión, corrección, archivo de respuestas, delineante, asistente, mcp, problemas, idiomas, dispositivos de entrada, panel táctil, filas de la barra de herramientas, cuadrícula de propiedades, actualización
from: dbdd7ed4
---

Esto es lo que cambió en MarkupCraft 0.9, en comparación con la 0.8.1. La idea principal es que sus notas de trabajo no aparecen en la página que recibe el cliente, y que todo un juego de planos puede enlazarse en una sola pasada.

## Novedades

### Notas, la mesa de trabajo y notas privadas

- **La mesa de trabajo.** El área alrededor de cada hoja es una mesa: todo lo dibujado, escrito o pegado junto a la hoja es una nota y nunca se imprime. Elija {{ui:Mostrar la mesa de trabajo}} para alejar la vista y tener espacio, o {{ui:Instantánea en la mesa de trabajo}}, arrastre un recuadro y después {{ui:A la mesa de trabajo}} para poner una imagen de parte del dibujo junto a la hoja. Una instantánea es una imagen y no cambia cuando cambia la hoja. Véase [Notas, la mesa de trabajo y las notas privadas](topic:notes-and-pasteboard).
- **Mostrar y ocultar notas.** Cualquier anotación puede ser una nota: fije {{ui:Las nuevas anotaciones son}} en la pestaña {{ui:Notas}}, o {{ui:Esta anotación es}} en {{ui:Propiedades}}. {{key:Shift+H}} o el interruptor {{ui:Notas}} bajo la hoja oculta y muestra todas las notas a la vez. Las notas no se incluyen en la impresión, las copias aplanadas, las listas ni las exportaciones, y otros lectores de PDF no las muestran. Su PDF guardado las conserva para la próxima vez que lo abra en MarkupCraft.
- **Notas privadas.** Elija {{ui:Establecer una frase de contraseña}} y después haga una anotación {{ui:Una nota privada}}. Se cifra en el archivo con una frase de contraseña de al menos 10 caracteres, y no hay recuperación: nadie, tampoco nosotros, puede abrirla sin la frase. {{ui:Bloquear}} guarda las notas privadas; {{ui:Mantener desbloqueadas en este dispositivo}} está desactivado por defecto.
- **Guardar una copia limpia.** {{ui:Guardar una copia limpia}} elimina todas las notas, las notas privadas y todo lo que haya en la mesa de trabajo. Úselo para el archivo que va al cliente.

### Enlazar un juego completo

- **Enlaces por lotes.** Elija {{ui:Páginas}} › {{ui:Enlaces por lotes…}}, o {{ui:Enlazar llamadas a hojas…}} bajo {{ui:Buscar texto}} en el panel {{ui:Hojas}}. El paso 1 lista el número y el nombre de cada hoja tal como se leen en su bloque de rótulos; corrija los que estén mal. El paso 2 lista las llamadas encontradas, como `3/A-501` o `DETALLE 2 EN A-501`. {{ui:Se enlazará}} muestra la hoja y la vista de cada una, {{ui:Sin enlazar}} muestra los números que ninguna hoja abierta tiene, y {{ui:Crear los enlaces}} los crea todos en un solo paso de deshacer. Vuelva a ejecutarlo tras una adenda o una renumeración; los enlaces que hizo a mano nunca se cambian. Un enlace con vista se guarda como enlace PDF, de modo que otros lectores también abren el detalle. Véase [Enlaces de hojas](topic:sheet-links).

### Dibujo

- **Arco, diez métodos.** La herramienta {{ui:Arco}} ({{key:O}}) tiene ahora un cuadro {{ui:Método de arco}} sobre la página con diez formas de dibujar un arco, y el ángulo, la longitud, el radio y la dirección pueden marcarse con clic o escribirse. Véase [Dibujar un arco de diez maneras](topic:draw-an-arc).

### Trabajar en equipo

- **Seguir a un revisor.** En una sesión Live, elija {{ui:Seguir}} junto al nombre de una persona y su vista se moverá con la suya; si usted desplaza o amplía la vista, deja de seguirla. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. La lista de personas muestra el color y el nombre de cada persona, la hoja en la que está y cuándo fue su última edición. Véase [Seguir a otro revisor en una sesión Live](topic:follow-in-live).

## En todas las aplicaciones

- Las descripciones emergentes son de Bootstrap, el consejo de inicio se puede cerrar, las barras de pestañas se desplazan cuando desbordan, y los títulos de las pestañas del navegador leen `<documento> — MarkupCraft | CadCraft`.
- Un panel con varias secciones abre una y cierra las demás (un candado junto a la flecha mantiene una abierta); un interruptor de Ajustes desactiva esto.
- Cada aplicación empieza con una colección predeterminada de objetos de la biblioteca.
- Las unidades de peso y de temperatura están disponibles en los ajustes de Unidades.

## Corregido

- **Las anotaciones borradas ya no siguen legibles dentro del PDF guardado.** Antes, al guardar, se quitaba una anotación borrada o reescrita de su página, pero el objeto, con su texto, quedaba en el archivo. Ahora guardar elimina esos objetos. Los archivos guardados con versiones anteriores siguen conteniéndolos hasta que los guarde de nuevo.

## Límites reconocidos

- Los enlaces por lotes se probaron en nuestros propios juegos de prueba. Los juegos reales dibujan los globos de muchas formas, así que en un juego de un cliente algunas vistas pueden no encontrarse. Las hojas escaneadas necesitan antes {{ui:Leer texto (OCR)…}}.
- Las notas, las notas privadas y la mesa de trabajo se probaron en un navegador sin interfaz y en nuestros propios archivos, no con un juego vectorial grande y real ni en una sesión Live real de dos personas. Cambiar una frase de contraseña no está creado. Las versiones anteriores a la 0.9 no muestran notas.
- La vista de clase es la lista de personas; no se ha probado con un profesor y alumnos reales.
- Los idiomas distintos del inglés son borradores automáticos hasta que los lea un hablante nativo.
- Los instaladores de Windows no tienen firma de código (Más información, después Ejecutar de todas formas); la imagen de disco de macOS no está notarizada (clic con el botón derecho, después Abrir).

## Anteriormente: 0.8 y 0.8.1

Esto es lo que cambió en MarkupCraft 0.8 y 0.8.1, en comparación con la 0.7. La gran novedad es que una anotación puede ser una tarea que alguien, o su propio asistente, realiza, y que se cierra sola cuando el dibujo cambia de verdad.

### Novedades

**Anotaciones que actúan**

- **Convierta una anotación en tarea.** Seleccione una o más anotaciones, abra la pestaña {{ui:Tareas}} y elija {{ui:Convertir la selección en tarea}}. Una tarea tiene un título, una persona o su asistente conectado que la realiza, un día de vencimiento opcional y un estado, y conserva su lugar en la hoja y su hilo. Véase [Convertir una anotación en tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su anotación. Abra una revisión más nueva de la hoja y elija {{ui:Comprobar ahora}}: si las líneas de esa zona cambiaron más de un pelo, la tarea se marca como Hecha, su anotación pasa a Completada y una nota en el hilo indica qué cambió. Una nueva marca de fecha, o líneas que se movieron menos de 1.5 puntos, no cuentan. En su lugar, una tarea puede vigilar un elemento del modelo: su asistente informa del elemento con `tasks_check`, y un informe posterior que difiera, o un elemento borrado, cierra la tarea. Un paso de deshacer la reabre.
- **Encuentre el trabajo.** Filtre la lista de {{ui:Tareas}} por estado y por a quién va dirigida, incluido {{ui:Vencido}}; elija {{ui:Asignada a}} y después {{ui:Asistente}} para ver lo que espera a su asistente. Una tarea que ha pasado su día de vencimiento aparece como advertencia en el panel de Problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF con la anotación y viajan por Live como otras propiedades de las anotaciones.

**Lo que cambió, como lista sencilla**

- **Listar los cambios.** Abra la pestaña {{ui:Comparar}} y después {{ui:Comparar un conjunto completo}}, elija el archivo anterior y el posterior y pulse {{ui:Listar los cambios}}. La lista empieza con un recuento y después recorre cada hoja modificada, empezando por el cambio mayor: dónde está en la hoja, qué tamaño tiene (en unidades reales además de pulgadas de papel en una hoja calibrada), si se añadieron o quitaron líneas, cuántas anotaciones hay allí y qué palabras aparecieron o desaparecieron. {{ui:Copiar la lista}} la pone en el portapapeles y {{ui:CSV}} escribe una fila por cada cambio. Véase [Listar los cambios entre revisiones](topic:what-changed-in-words).

**Notas de voz y decisiones**

- **Notas de voz.** En la pestaña {{ui:Notas}} elija {{ui:Grabar una nota de voz}} y después {{ui:Detener la grabación}}; las grabaciones se detienen solas a los dos minutos. La nota queda fijada en el centro de la hoja; la arrastra a donde corresponde y escribe un pie en {{ui:Propiedades}}, y {{ui:Reproducir}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Fijar una decisión}} escribe una o dos frases en la hoja. Si sustituye a una decisión anterior, elíjala en {{ui:Sustituye a}}: la antigua se queda, marcada como Sustituida, y apunta a la nueva. Un paso de deshacer la quita. Véase [Fijar notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

**Corrección sobre la revisión**

- **Enviar y responder.** En la pestaña {{ui:Tareas}} abra {{ui:Corrección sobre la revisión}}, escriba la revisión con la que se comparan las anotaciones y elija {{ui:Exportar archivo de corrección}}. Obtiene un archivo `.redline.json` con un elemento por anotación abierta: hoja, posición (como fracciones de la hoja, para que una nueva impresión a otro tamaño siga alineada), texto, autor, hilo y su tarea. Quien dibuja los cambios responde Aceptado, Rechazado o Hecho en un archivo `.redline-answers.json`; {{ui:Cargar archivo de respuestas…}} da a cada anotación ese estado y la nota del delineante, como un solo paso de deshacer. Véase [Enviar anotaciones al delineante como corrección](topic:redline-to-revision).

**Asistentes de IA**

- **Más herramientas.** Un asistente que conectó a través de CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), comprobar una frente a una revisión más nueva o un elemento (`tasks_check`) y leer la lista sencilla de cambios entre dos juegos de planos abiertos (`revisions_changes`). Solo recibe las herramientas que marcó bajo el interruptor Asistentes, y cada cambio es un paso de deshacer. Véase [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

### En todas las aplicaciones

- **Idiomas.** CadCraft Studio tiene ahora 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los que no son inglés son borradores automáticos hasta que los lea un hablante nativo.
- **Dispositivos de entrada.** {{ui:Ajustes}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un panel táctil, los botones laterales del ratón, un lápiz, los toques con el dedo, un ratón 3D, un mando de juego o un controlador MIDI, para todas las aplicaciones o solo para esta. Hasta que cambie algo, cada dispositivo funciona como antes. Véase [Usar un panel táctil, un ratón 3D o un mando](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} tiene {{ui:Ajustar}} (por defecto), {{ui:2 filas}} y {{ui:1 fila}}, para que el dibujo tenga más espacio. Véase [Organizar los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una anotación usan la cuadrícula común, con categorías plegables y columnas de etiqueta y valor.
- **Panel de problemas.** Las advertencias de la aplicación, como una tarea vencida, se reúnen en un único panel de Problemas.
- **Live y complementos.** Las sesiones Live se describen en [Trabajar juntos en directo](common:work-together-live); la lista de complementos que sigue a su cuenta está en [Complementos y lista de su cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro para su propio asistente: conéctelo una vez para las ocho aplicaciones. Las aplicaciones no contienen ninguna IA propia.

### Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la aplicación de escritorio y las ediciones empaquetadas se quedaban en inglés. Esto aún no se ha probado en todas las plataformas: díganos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la 0.8.1 a través de {{ui:Ajustes}} › {{ui:Actualizaciones}}.

### Todavía no en esta versión

- **Sin firma de código.** Los instaladores de Windows y la imagen de disco .dmg de macOS aún no llevan firma. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}}, después {{ui:Ejecutar de todas formas}}. En un Mac, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tienda están en espera.
- **Conectar su IA sigue incompleto en algunos puntos.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y su propia clave de API dentro de Studio no están prometidos para esta versión. El ciclo de tareas se ha probado, pero todavía no con un asistente real.
- **Las comprobaciones de tareas requieren el mismo tamaño de página.** Una hoja impresa de nuevo en otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja, y si no, por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración de la nota, su autor y su pie, no el sonido. La grabación se probó con un micrófono falso en un navegador sin interfaz; un micrófono real en un teléfono, tableta u ordenador portátil aún está por comprobar.
- **Las hojas de cálculo y justificaciones de un PDF** se guardan en una entrada privada del archivo. Una versión anterior de MarkupCraft ignora esa entrada y la elimina la próxima vez que guarda el archivo; por eso, abra y guarde un archivo así con la 0.8 o posterior.
- **El lado del delineante de las correcciones.** Que CadCraft lea el archivo de corrección y lo responda todavía no está creado.
- **Otros idiomas.** La barra de la aplicación en tamil se desborda 528 px.

Todo lo demás está en [Lo que todavía no está desarrollado](topic:not-built-yet). Para la versión anterior, véase [Novedades de la versión 0.7](topic:whats-new-0-7).
