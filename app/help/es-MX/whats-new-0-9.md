---
title: Novedades de la versión 0.9 (anteriores)
summary: Notas y una mesa de trabajo que nunca se imprimen, notas privadas cifradas y una copia limpia para el cliente, vínculos por lotes para un juego completo de planos, una herramienta Arco con diez métodos, seguir a otro revisor en Live y una corrección para marcas borradas que seguían en el PDF guardado.
keywords: novedades 0.9, versión anterior, novedades, qué hay de nuevo, 0.9, notas de la versión, registro de cambios, notas, mesa de trabajo, notas privadas, frase de contraseña, cifrado, ocultar notas, mostrar notas, copia limpia, captura, vínculos por lotes, referencias a hojas, vincular hojas, bloque de títulos, número de hoja, adenda, renumerar, vínculo pdf, arco, métodos de arco, arco de tres puntos, radio, seguir, seguir a, live, vista de clase, lista de personas, marca borrada, sugerencias emergentes, títulos de pestañas, novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, asignada a, día de vencimiento, vencidos, revisar ahora, qué cambió, revisiones, comparar, nota de voz, decisión, redline, archivo de respuestas, dibujante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas de la barra de herramientas, cuadrícula de propiedades, actualización
from: aa3dfeb8
---

Esto es lo que cambió en MarkupCraft 0.9, en comparación con 0.8.1. La idea principal es que sus notas de trabajo no salgan en la hoja que recibe el cliente, y que un juego completo de planos pueda vincularse en una sola pasada.

## Nuevo

### Notas, mesa de trabajo y notas privadas

- **La mesa de trabajo.** El área alrededor de cada hoja es un escritorio: todo lo que se dibuje, escriba o pegue junto a la hoja es una nota y nunca se imprime. Elija {{ui:Show the pasteboard}} para alejar la vista y tener espacio, o {{ui:Snapshot to the pasteboard}}, arrastre un recuadro y luego {{ui:To the pasteboard}} para colocar junto a la hoja una imagen de parte del dibujo. Una captura es una imagen y no cambia cuando cambia la hoja. Vea [Notes, the pasteboard and private notes](topic:notes-and-pasteboard).
- **Mostrar y ocultar notas.** Cualquier marca puede ser una nota: configure {{ui:New markups are}} en la pestaña {{ui:Notes}}, o {{ui:This markup is}} en {{ui:Properties}}. {{key:Shift+H}} o el interruptor {{ui:Notes}} debajo de la hoja oculta o muestra todas las notas a la vez. Las notas no se incluyen en la impresión, las copias aplanadas, las listas ni las exportaciones, y otros lectores de PDF no las muestran. Su PDF guardado las conserva para la próxima vez que lo abra en MarkupCraft.
- **Notas privadas.** Elija {{ui:Set a passphrase}} y luego convierta una marca en {{ui:A private note}}. Se cifra en el archivo con una frase de contraseña de al menos 10 caracteres, y no hay recuperación: nadie, incluidos nosotros, puede abrirla sin la frase. {{ui:Lock}} oculta las notas privadas; {{ui:Stay unlocked on this device}} está desactivada de forma predeterminada.
- **Guardar una copia limpia.** {{ui:Save a clean copy}} elimina todas las notas, las notas privadas y todo lo que esté en la mesa de trabajo. Úselo para el archivo que se envía al cliente.

### Vincular un juego completo

- **Vínculos por lotes.** Elija {{ui:Pages}} › {{ui:Batch links…}}, o {{ui:Link sheet callouts…}} bajo {{ui:Find text}} en el panel {{ui:Sheets}}. El paso 1 lista el número y el nombre de cada hoja tal como se leen de su bloque de títulos; corrija los que estén mal. El paso 2 lista las referencias encontradas, como `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Will link}} muestra la hoja y la vista de cada una, {{ui:Not linked}} muestra los números que ninguna hoja abierta tiene, y {{ui:Create the links}} los crea todos en un solo paso de deshacer. Vuelva a ejecutarlo después de una adenda o una renumeración; los vínculos que hizo a mano nunca se modifican. Un vínculo con vista se guarda como vínculo PDF, para que otros lectores también abran el detalle. Vea [Sheet links](topic:sheet-links).

### Dibujo

- **Arco, diez métodos.** La herramienta {{ui:Arc}} ({{key:O}}) ahora tiene un cuadro {{ui:Arc method}} sobre la página con diez formas de dibujar un arco, y el ángulo, la longitud, el radio y la dirección se pueden indicar con clic o escribirse. Vea [Draw an arc ten ways](topic:draw-an-arc).

### Trabajo en equipo

- **Seguir a un revisor.** En una sesión Live elija {{ui:Follow}} junto al nombre de una persona y su vista se mueve con la suya; si usted mismo desplaza o hace zoom, el seguimiento se detiene. El anfitrión puede elegir {{ui:Ask everyone to follow me}}. La lista de personas muestra el color, el nombre, la hoja en la que está y la hora de su última edición de cada persona. Vea [Follow another reviewer in a Live session](topic:follow-in-live).

## En todas las aplicaciones

- Las sugerencias emergentes son tooltips de Bootstrap, la sugerencia de inicio se puede cerrar, las barras de pestañas se desplazan cuando no caben, y los títulos de las pestañas del navegador muestran `<document> — MarkupCraft | CadCraft`.
- Un panel con varias secciones abre una y cierra las demás (un candado junto al cursor mantiene una abierta); un interruptor en Configuración desactiva esto.
- Cada aplicación inicia con una colección predeterminada de objetos de la biblioteca.
- Las unidades de peso y temperatura están disponibles en la configuración de {{ui:Units}}.

## Corregido

- **Las marcas eliminadas ya no se pueden leer dentro del PDF guardado.** Antes, al guardar, se quitaba de la página una anotación borrada o reescrita, pero el objeto, con su texto, quedaba en el archivo. Ahora al guardar se eliminan esos objetos. Los archivos guardados con versiones anteriores siguen conteniéndolos hasta que los guarde de nuevo.

## Límites reconocidos

- Los vínculos por lotes se probaron con nuestros propios juegos de prueba. Los juegos reales dibujan las burbujas de muchas maneras, así que en un juego de un cliente algunas vistas podrían no detectarse. Las hojas escaneadas necesitan primero {{ui:Read text (OCR)…}}.
- Las notas, las notas privadas y la mesa de trabajo se probaron en un navegador sin interfaz gráfica y con nuestros propios archivos, no con un juego vectorial grande y real, ni en una sesión Live real con dos personas. El cambio de frase de contraseña no está implementado. Las versiones anteriores a 0.9 no muestran las notas.
- La vista de clase es la lista de personas; no se ha probado con un profesor y estudiantes reales.
- Los idiomas distintos del inglés son borradores de máquina hasta que los lea un hablante nativo.
- Los instaladores de Windows no están firmados digitalmente (Más información, luego Ejecutar de todas formas); la imagen de disco de macOS no está notarizada (clic derecho, luego Abrir).

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en MarkupCraft 0.8 y 0.8.1, en comparación con 0.7. Lo más importante es que una marca puede ser una tarea que alguien, o su propio asistente, realiza, y que se cierra sola cuando el dibujo realmente cambia.

### Nuevo

**Marcas que actúan**

- **Convierta una marca en tarea.** Seleccione una o más marcas, abra la pestaña {{ui:Tasks}} y elija {{ui:Make selected a task}}. Una tarea tiene un título, una persona o su asistente conectado que la realiza, un día de vencimiento opcional y un estado, y conserva su lugar en la hoja y su conversación. Vea [Make a markup a task](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su marca. Abra una revisión más reciente de la hoja y elija {{ui:Check now}}: si las líneas de esa área cambiaron más de un pelo, la tarea se marca como Done, su marca pasa a Completed y una nota en la conversación indica qué cambió. Un nuevo sello de fecha, o líneas que se movieron menos de 1.5 puntos, no cuentan. Una tarea también puede vigilar un elemento del modelo: su asistente informa el elemento con `tasks_check`, y un informe posterior distinto, o un elemento eliminado, cierra la tarea. Un paso de deshacer la vuelve a abrir.
- **Encuentre el trabajo.** Filtre la lista de {{ui:Tasks}} por estado y por a quién corresponde, incluido {{ui:Overdue}}; elija {{ui:Assigned to}} y luego {{ui:Assistant}} para ver lo que espera a su asistente. Una tarea vencida aparece como advertencia en el panel Problems. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF con la marca y viajan por Live como las demás propiedades de las marcas.

**Qué cambió, en forma de lista**

- **Liste los cambios.** Abra la pestaña {{ui:Compare}}, luego {{ui:Compare a whole set}}, elija el archivo anterior y el posterior, y elija {{ui:List the changes}}. La lista empieza con un conteo y después cubre cada hoja cambiada, con el cambio más grande primero: en qué parte de la hoja, qué tan grande (en unidades reales y también en pulgadas de papel en una hoja calibrada), si se agregaron o quitaron líneas, cuántas marcas hay ahí y qué palabras aparecieron o desaparecieron. {{ui:Copy the list}} la pone en el portapapeles y {{ui:CSV}} escribe una fila por cambio. Vea [List what changed between revisions](topic:what-changed-in-words).

**Notas de voz y decisiones**

- **Notas de voz.** En la pestaña {{ui:Notes}} elija {{ui:Record a voice note}} y luego {{ui:Stop recording}}; las grabaciones se detienen solas a los dos minutos. La nota se fija al centro de la hoja, usted la arrastra a donde corresponda y escribe un pie en {{ui:Properties}}, y {{ui:Play}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Pin a decision}} escribe una o dos oraciones en la hoja. Si reemplaza una decisión anterior, elíjala en {{ui:It replaces}}: la anterior permanece, marcada como Replaced, y apunta a la nueva. Un paso de deshacer la revierte. Vea [Pin voice notes and decisions on a sheet](topic:voice-notes-and-decisions).

**Marcas a revisión**

- **Enviar y responder.** En la pestaña {{ui:Tasks}} abra {{ui:Redline to revision}}, escriba la revisión con la que se comparan las marcas y elija {{ui:Export redline file}}. Obtiene un archivo `.redline.json` con un elemento por cada marca abierta: hoja, posición (como fracciones de la hoja, para que una nueva impresión a otro tamaño siga alineada), palabras, autor, conversación y su tarea. Quien dibuje los cambios responde Accepted, Rejected o Done en un archivo `.redline-answers.json`; {{ui:Load answers file…}} da a cada marca ese estado y la nota del dibujante, como un solo paso de deshacer. Vea [Send markups to the drafter as a redline](topic:redline-to-revision).

**Asistentes de IA**

- **Más herramientas.** Un asistente que conectó mediante CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), comprobar una contra una revisión más reciente o un elemento (`tasks_check`), y leer la lista simple de cambios entre dos juegos de planos abiertos (`revisions_changes`). Solo recibe las herramientas que marcó bajo el interruptor Assistants, y cada cambio es un paso de deshacer. Vea [Use MarkupCraft with an AI assistant](topic:use-with-ai-assistants).

### En todas las aplicaciones

- **Idiomas.** CadCraft Studio ahora tiene 54 idiomas. Diez son nuevos: lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los idiomas distintos del inglés son borradores de máquina hasta que los lea un hablante nativo.
- **Dispositivos de entrada.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} define qué hacen un trackpad, los botones laterales del mouse, un lápiz, los toques con el dedo, un mouse 3D, un control de juegos o un controlador MIDI, para todas las aplicaciones o solo para esta. Hasta que cambie algo, todos los dispositivos funcionan como antes. Vea [Use a trackpad, 3D mouse or controller](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} tiene {{ui:Wrap}} (el predeterminado), {{ui:2 rows}} y {{ui:1 row}}, para que el dibujo tenga más espacio. Vea [Arrange the panels](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una marca usan la cuadrícula compartida, con categorías plegables y columnas de etiqueta y valor.
- **Panel de problemas.** Las advertencias de la aplicación, como una tarea vencida, se reúnen en un solo panel Problems.
- **Live y complementos.** Las sesiones Live se describen en [Work together live](common:work-together-live); la lista de complementos que sigue a su cuenta está en [Add-ons and your account list](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro para su propio asistente: conéctelo una vez para las ocho aplicaciones. Las aplicaciones no contienen IA propia.

### Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la aplicación de escritorio y las ediciones empaquetadas se quedaban en inglés. Esto aún no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la 0.8.1 mediante {{ui:Settings}} › {{ui:Updates}}.

### Todavía no incluido en esta versión

- **Sin firma de código.** Los instaladores de Windows y la .dmg de macOS aún no tienen firma. En Windows, si SmartScreen detiene el instalador, elija {{ui:More info}} y luego {{ui:Run anyway}}. En un Mac, haga clic derecho en CadCraft Studio y elija {{ui:Open}}. Las versiones para tiendas están en pausa.
- **Conectar su IA aún está incompleto en algunos puntos.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y su propia clave de API dentro de Studio no están garantizados en esta versión. El ciclo de tareas se ha probado, pero aún no con un asistente real.
- **Las comprobaciones de tareas requieren el mismo tamaño de página.** Una hoja impresa de nuevo a otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja y, si no, por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y el pie de la nota, no el sonido. La grabación se probó con un micrófono falso en un navegador sin interfaz gráfica; un micrófono real en un teléfono, tableta o laptop aún falta por verificar.
- **Las hojas de cálculo y las razones de un PDF** se guardan en una entrada privada del archivo. Un MarkupCraft anterior ignora esa entrada y la elimina la próxima vez que guarde el archivo; por eso abra y guarde esos archivos con la versión 0.8 o posterior.
- **El lado del dibujante en las marcas a revisión.** Que CadCraft lea el archivo de redline y lo responda aún no está implementado.
- **Otros idiomas.** La barra de la aplicación en tamil se desborda 528 px.

Todo lo demás está en [What is not built yet](topic:not-built-yet). Para la versión anterior a esta, vea [What's new in 0.7](topic:whats-new-0-7).
