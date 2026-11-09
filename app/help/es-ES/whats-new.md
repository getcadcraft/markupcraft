---
title: Novedades de 0.8 y 0.8.1
summary: Anotaciones que se convierten en tareas y se cierran solas, una lista sencilla de lo que cambió entre revisiones, notas de voz y decisiones en el plano, archivos de corrección para el delineante, y los cambios comunes de 0.8: dispositivos de entrada, filas de la barra de herramientas, Problemas, más idiomas.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, asignada, día límite, vencido, comprobar ahora, qué ha cambiado, revisiones, comparar, nota de voz, decisión, corrección, archivo de respuestas, delineante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas de la barra de herramientas, cuadrícula de propiedades, actualizar
from: 40368796
---

Esto es lo que ha cambiado en MarkupCraft 0.8 y 0.8.1, en comparación con 0.7. La gran novedad es que una anotación puede ser una tarea que alguien, o su propio asistente, realiza, y que se cierra sola cuando el dibujo cambia de verdad.

## Novedades

### Anotaciones que actúan

- **Convertir una anotación en tarea.** Seleccione una o varias anotaciones, abra la pestaña {{ui:Tasks}} y elija {{ui:Make selected a task}}. Una tarea tiene un título, una persona o su asistente conectado que la realiza, un día límite opcional y un estado, y conserva su lugar en la hoja y su hilo. Véase [Convertir una anotación en tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo que hay dentro de su anotación. Abra una revisión más reciente de la hoja y elija {{ui:Check now}}: si las líneas de esa zona han cambiado de forma apreciable, la tarea se marca como Hecha, su anotación pasa a Completada y una nota en el hilo indica qué cambió. Un nuevo sello de fecha, o líneas que se han movido menos de 1.5 puntos, no cuentan. En su lugar, una tarea puede vigilar un elemento del modelo: su asistente informa del elemento con `tasks_check`, y un informe posterior que sea distinto, o un elemento eliminado, cierra la tarea. Un paso de deshacer la vuelve a abrir.
- **Encontrar el trabajo.** Filtre la lista de {{ui:Tasks}} por estado y por destinatario, incluido {{ui:Overdue}}; elija {{ui:Assigned to}} y después {{ui:Assistant}} para ver lo que espera a su asistente. Una tarea que supera su día límite aparece como aviso en el panel Problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF con la anotación y viajan con Live como las demás propiedades de las anotaciones.

### Lo que cambió, en forma de lista

- **Listar los cambios.** Abra la pestaña {{ui:Compare}}, después {{ui:Compare a whole set}}, elija el archivo anterior y el posterior y seleccione {{ui:List the changes}}. La lista empieza con un recuento y cubre cada hoja modificada, empezando por el cambio mayor: dónde está en la hoja, su tamaño (en unidades reales y también en pulgadas de papel en una hoja calibrada), si se añadieron o eliminaron líneas, cuántas anotaciones hay allí y qué palabras aparecieron o desaparecieron. {{ui:Copy the list}} la copia al portapapeles y {{ui:CSV}} escribe una fila por cambio. Véase [Listar lo que ha cambiado entre revisiones](topic:what-changed-in-words).

### Notas de voz y decisiones

- **Notas de voz.** En la pestaña {{ui:Notes}} elija {{ui:Record a voice note}} y después {{ui:Stop recording}}; las grabaciones se detienen solas a los dos minutos. La nota queda fijada en el centro de la hoja: arrástrela a su lugar y escriba un texto en {{ui:Properties}}. {{ui:Play}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Pin a decision}} escribe una o dos frases en la hoja. Si sustituye a una decisión anterior, selecciónela en {{ui:It replaces}}: la anterior se conserva, marcada como Sustituida, y apunta a la nueva. Un paso de deshacer la devuelve. Véase [Fijar notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

### Corrección sobre la revisión

- **Enviar y responder.** En la pestaña {{ui:Tasks}} abra {{ui:Redline to revision}}, escriba la revisión con la que se comparan las anotaciones y elija {{ui:Export redline file}}. Obtendrá un archivo `.redline.json` con un elemento por cada anotación abierta: hoja, posición (como fracciones de la hoja, para que una nueva impresión a otro tamaño siga coincidiendo), palabras, autor, hilo y su tarea. Quien dibuje los cambios responde con Aceptada, Rechazada o Hecha en un archivo `.redline-answers.json`; {{ui:Load answers file…}} asigna a cada anotación ese estado y la nota del delineante, como un único paso de deshacer. Véase [Enviar anotaciones al delineante como corrección](topic:redline-to-revision).

### Asistentes de IA

- **Más herramientas.** Un asistente que conectó mediante CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), comprobar una frente a una revisión más reciente o un elemento (`tasks_check`) y leer la lista sencilla de cambios entre dos conjuntos de planos abiertos (`revisions_changes`). Solo recibe las herramientas que marcó con el interruptor Asistentes, y cada cambio es un paso de deshacer. Véase [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

## En todas las aplicaciones

- **Idiomas.** CadCraft Studio tiene ahora 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los idiomas distintos del inglés son borradores automáticos hasta que una persona nativa los revise.
- **Dispositivos de entrada.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} define qué hacen un trackpad, los botones laterales del ratón, un lápiz, los toques con los dedos, un ratón 3D, un mando de juegos o un controlador MIDI, para todas las aplicaciones o solo para esta. Hasta que cambie algo, cada dispositivo funciona como antes. Véase [Usar un trackpad, un ratón 3D o un mando](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} tiene {{ui:Wrap}} (el valor predeterminado), {{ui:2 rows}} y {{ui:1 row}}, para que el dibujo disponga de más espacio. Véase [Organizar los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una anotación usan la cuadrícula común, con categorías plegables y columnas de etiqueta y valor.
- **Panel Problemas.** Los avisos de la aplicación, como una tarea vencida, se reúnen en un único panel Problemas.
- **Live y complementos.** Las sesiones de Live se describen en [Trabajar juntos en directo](common:work-together-live); la lista de complementos que sigue a su cuenta está en [Complementos y la lista de su cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro para su propio asistente: conéctelo una sola vez para las ocho aplicaciones. Las aplicaciones no incluyen IA propia.

## Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la aplicación de escritorio y las ediciones empaquetadas se quedaban en inglés. Esto aún no se ha probado en todas las plataformas: indíquenos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la oferta de 0.8.1 en {{ui:Settings}} › {{ui:Updates}}.

## Todavía no incluido en esta versión

- **Sin firma de código.** Los instaladores de Windows y el .dmg de macOS aún no llevan firma. En Windows, si SmartScreen detiene el instalador, elija {{ui:More info}} y después {{ui:Run anyway}}. En un Mac, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Open}}. Las versiones para las tiendas están en espera.
- **Conectar su IA está incompleto en algunos puntos.** La conexión con un solo clic dentro de Studio, el conector alojado para asistentes de navegador y su propia clave de API dentro de Studio no están garantizados en esta versión. El ciclo de tareas se ha probado, pero aún no con un asistente real.
- **Las comprobaciones de tareas requieren el mismo tamaño de página.** Una hoja impresa de nuevo con otro tamaño no coincidirá, así que sus tareas no se cerrarán. Las hojas se emparejan por número de hoja, o si no, por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y el texto de la nota, no el sonido. La grabación se probó con un micrófono simulado en un navegador sin interfaz; aún queda por comprobar un micrófono real en un teléfono, una tableta o un portátil.
- **Las hojas de cálculo y las razones en un PDF** se guardan en una entrada privada del archivo. Un MarkupCraft anterior ignora esa entrada y la elimina la próxima vez que guarde el archivo, así que abra y guarde estos archivos con la versión 0.8 o posterior.
- **El lado del delineante en las correcciones.** Que CadCraft lea el archivo de corrección y lo responda todavía no está desarrollado.
- **Otros idiomas.** La barra de la aplicación en tamil se desborda 528 px.

Todo lo demás está en [Lo que aún no está desarrollado](topic:not-built-yet). Para la versión anterior, véase [Novedades de 0.7](topic:whats-new-0-7).
