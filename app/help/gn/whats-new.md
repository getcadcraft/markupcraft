---
title: Mba'épa oñemoambue 0.9
summary: Notas y mesa de trabajo que nunca se imprimen, notas privadas cifradas y copia limpia para el cliente, enlaces por lotes para un juego completo de planos, una herramienta Arco con diez métodos, seguir a otro revisor en Live, y una corrección para anotaciones borradas que seguían en el PDF guardado.
keywords: novedades, qué hay de nuevo, 0.9, notas de versión, registro de cambios, notas, mesa de trabajo, notas privadas, frase de contraseña, cifrado, ocultar notas, mostrar notas, copia limpia, captura, enlaces por lotes, llamadas de hojas, enlazar hojas, bloque de título, número de hoja, adenda, renumerar, enlace pdf, arco, métodos de arco, arco de tres puntos, radio, seguir, seguirme, live, vista de clase, lista de personas, anotación borrada, información emergente, títulos de pestañas, novedades, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, asignado, día límite, vencido, verificar ahora, qué cambió, revisiones, comparar, nota de voz, decisión, redline, archivo de respuestas, dibujante, asistente, mcp, problemas, idiomas, dispositivos de entrada, trackpad, filas de la barra, cuadrícula de propiedades, actualización
from: dbdd7ed4
---

Ko'ã mba'e oñemoambue MarkupCraft 0.9-pe, 0.8.1 rehe. Tuicha mba'e: nota-kuéra ndaipóri imprimirse hoja-pe, ha juego completo de planos oñemboguejy peteĩ jeýpe.

## Pyahu

### Notas, mesa de trabajo y notas privadas

- **La mesa de trabajo.** El área alrededor de cada hoja es un escritorio: lo que dibujes, escribas o pegues al lado de la hoja es una nota y nunca se imprime. Elegí {{ui:Mostrar la mesa de trabajo}} para alejarte y tener espacio, o {{ui:Captura a la mesa de trabajo}}, arrastrá un cuadro, y después {{ui:A la mesa de trabajo}} para poner una imagen de parte del dibujo al lado de la hoja. Una captura es una imagen y no cambia cuando cambia la hoja. Ehecha [Notas, mesa de trabajo y notas privadas](topic:notes-and-pasteboard).
- **Mostrar y ocultar notas.** Cualquier anotación puede ser una nota: poné {{ui:Las nuevas anotaciones son}} en la pestaña {{ui:Notas}}, o {{ui:Esta anotación es}} en {{ui:Propiedades}}. {{key:Shift+H}} o el interruptor {{ui:Notas}} debajo de la hoja oculta y muestra todas las notas a la vez. Las notas quedan fuera de la impresión, las copias aplanadas, las listas y las exportaciones, y otros lectores de PDF no las muestran. Tu PDF guardado las conserva para la próxima vez que lo abras en MarkupCraft.
- **Notas privadas.** Elegí {{ui:Definir una frase de contraseña}}, y después hacé que una anotación sea {{ui:Una nota privada}}. Se cifra en el archivo con una frase de contraseña de al menos 10 caracteres, y no hay recuperación: nadie, ni nosotros, puede abrirla sin la frase. {{ui:Bloquear}} guarda las notas privadas; {{ui:Mantener desbloqueado en este dispositivo}} está desactivado por defecto.
- **Guardar una copia limpia.** {{ui:Guardar una copia limpia}} quita todas las notas, notas privadas y todo lo que esté en la mesa de trabajo. Usala para el archivo que va al cliente.

### Enlazar un juego completo

- **Enlaces por lotes.** Elegí {{ui:Páginas}} › {{ui:Enlaces por lotes…}}, o {{ui:Enlazar llamadas de hojas…}} debajo de {{ui:Buscar texto}} en el panel {{ui:Hojas}}. El paso 1 lista el número y nombre de cada hoja, tal como se leen en su bloque de título; corregí los que estén mal. El paso 2 lista las llamadas encontradas, como `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Se enlazará}} muestra la hoja y la vista de cada una, {{ui:Sin enlazar}} muestra números que ninguna hoja abierta tiene, y {{ui:Crear los enlaces}} hace todos en un solo paso de deshacer. Volvé a ejecutarlo después de una adenda o una renumeración; los enlaces que hiciste a mano nunca se cambian. Un enlace con vista se guarda como enlace PDF, así otros lectores también abren el detalle. Ehecha [Enlaces de hojas](topic:sheet-links).

### Dibujo

- **Arco, diez métodos.** La herramienta {{ui:Arco}} ({{key:O}}) ahora tiene un cuadro {{ui:Método de arco}} sobre la página con diez formas de dibujar un arco, y ángulo, longitud, radio y dirección se pueden clicar o escribir. Ehecha [Dibujar un arco de diez formas](topic:draw-an-arc).

### Trabajar juntos

- **Seguir a un revisor.** En una sesión Live elegí {{ui:Seguir}} junto al nombre de una persona y tu vista se mueve con la suya; si vos mismo desplazás o hacés zoom, se detiene. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. La lista de personas muestra el color de cada persona, su nombre, la hoja en la que está y cuándo fue su última edición. Ehecha [Seguir a otro revisor en una sesión Live](topic:follow-in-live).

## En todas las apps

- Las sugerencias son de Bootstrap, la sugerencia de inicio se puede cerrar, las tiras de pestañas se desplazan cuando se desbordan, y los títulos de pestañas del navegador dicen `<documento> — MarkupCraft | CadCraft`.
- Un panel con varias secciones abre una y cierra las otras (un candado junto al cursor mantiene una abierta); un interruptor de Configuración desactiva esto.
- Cada app empieza desde una colección predeterminada de objetos de la Biblioteca.
- Las unidades de peso y temperatura están disponibles en la configuración de Unidades.

## Corregido

- **Las anotaciones borradas ya no se pueden leer dentro del PDF guardado.** Antes, al guardar, se quitaba de la página una anotación borrada o reescrita, pero el objeto con su texto quedaba en el archivo. Ahora guardar elimina esos objetos. Los archivos guardados con versiones anteriores todavía los tienen hasta que los guardes otra vez.

## Límites reales

- Los enlaces por lotes se probaron en nuestros propios juegos de prueba. Los juegos reales dibujan burbujas de muchas maneras, así que en un juego de cliente algunas vistas pueden faltar. Las hojas escaneadas necesitan primero {{ui:Leer texto (OCR)…}}.
- Las notas, las notas privadas y la mesa de trabajo se probaron en un navegador sin interfaz y en nuestros propios archivos, no con un juego vectorial grande real ni en una sesión Live real de dos personas. Cambiar una frase de contraseña todavía no está hecho. Las versiones anteriores a 0.9 no muestran las notas.
- La vista de clase es la lista de personas; todavía no se probó con un profesor y alumnos reales.
- Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los lea.
- Los instaladores de Windows no tienen firma de código (Más información, luego Ejecutar igual); la imagen de disco de macOS no está notarizada (clic derecho, luego Abrir).

## Antes: 0.8 y 0.8.1

Esto es lo que cambió en MarkupCraft 0.8 y 0.8.1, comparado con 0.7. Lo grande es que una anotación puede ser una tarea que alguien, o tu propio asistente, realiza, y que se cierra sola cuando el dibujo realmente cambia.

### Pyahu

**Anotaciones que actúan**

- **Hacer una anotación una tarea.** Seleccioná una o más anotaciones, abrí la pestaña {{ui:Tareas}} y elegí {{ui:Convertir la selección en tarea}}. Una tarea tiene un título, una persona o tu asistente conectado que la hace, un día límite opcional y un estado, y conserva su lugar en la hoja y su hilo. Ehecha [Hacer una anotación una tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su anotación. Abrí una revisión más nueva de la hoja y elegí {{ui:Verificar ahora}}: si las líneas de esa zona cambiaron más de un pelo, la tarea se marca como Done, su anotación pasa a Completed y una nota en el hilo dice qué cambió. Un nuevo sello de fecha, o líneas que se movieron menos de 1.5 puntos, no cuentan. Una tarea también puede vigilar un elemento del modelo: tu asistente informa el elemento con `tasks_check`, y un informe posterior que difiera, o un elemento borrado, cierra la tarea. Un paso de deshacer la reabre.
- **Encontrar el trabajo.** Filtrá la lista de {{ui:Tareas}} por estado y por a quién corresponde, incluido {{ui:Vencido}}; elegí {{ui:Asignado a}} y después {{ui:Asistente}} para ver qué espera a tu asistente. Una tarea que pasó su día límite aparece como advertencia en el panel Problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF con la anotación y viajan por Live como otras propiedades de anotación.

**Qué cambió, como lista simple**

- **Listar los cambios.** Abrí la pestaña {{ui:Comparar}}, después {{ui:Comparar juego completo}}, elegí el archivo anterior y el posterior, y elegí {{ui:Listar los cambios}}. La lista empieza con un conteo, después cubre cada hoja cambiada, empezando por el cambio más grande: dónde está en la hoja, qué tan grande es (en unidades reales además de pulgadas de papel en una hoja calibrada), si se agregaron o quitaron líneas, cuántas anotaciones hay allí, y qué palabras aparecieron o desaparecieron. {{ui:Copiar la lista}} la pone en el portapapeles y {{ui:CSV}} escribe una fila por cambio. Ehecha [Listar lo que cambió entre revisiones](topic:what-changed-in-words).

**Notas de voz y decisiones**

- **Notas de voz.** En la pestaña {{ui:Notas}} elegí {{ui:Grabar una nota de voz}}, y después {{ui:Detener grabación}}; las grabaciones se detienen solas a los dos minutos. La nota queda fijada en el centro de la hoja; la arrastrás a donde corresponde y escribís un título en {{ui:Propiedades}}, y {{ui:Reproducir}} en la lista la toca. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Fijar una decisión}} escribe una o dos frases en la hoja. Si reemplaza una decisión anterior, elegí esa en {{ui:Reemplaza a}}: la anterior queda, marcada como Replaced, y apunta a la nueva. Un paso de deshacer la quita. Ehecha [Fijar notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

**Redline a revisión**

- **Enviar y responder.** En la pestaña {{ui:Tareas}} abrí {{ui:Redline a revisión}}, escribí la revisión contra la que están las anotaciones y elegí {{ui:Exportar archivo redline}}. Obtenés un archivo `.redline.json` con un elemento por anotación abierta: hoja, posición (como fracciones de la hoja, así una nueva impresión en otro tamaño sigue coincidiendo), palabras, autor, hilo y su tarea. Quien dibuje los cambios responde Accepted, Rejected o Done en un archivo `.redline-answers.json`; {{ui:Cargar archivo de respuestas…}} da a cada anotación ese estado y la nota del dibujante, como un solo paso de deshacer. Ehecha [Enviar anotaciones al dibujante como redline](topic:redline-to-revision).

**Asistentes de IA**

- **Más herramientas.** Un asistente que conectaste por CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), verificar una contra una revisión o un elemento más nuevos (`tasks_check`) y leer la lista simple de cambios entre dos juegos de planos abiertos (`revisions_changes`). Solo obtiene las herramientas que marcaste bajo el interruptor Asistentes, y cada cambio es un paso de deshacer. Ehecha [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

### En todas las apps

- **Idiomas.** CadCraft Studio ahora tiene 54 idiomas. Diez son nuevos: lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los que no son inglés son borradores de máquina hasta que un hablante nativo los lea.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un trackpad, los botones laterales del mouse, un lápiz, toques con el dedo, un mouse 3D, un control de juego o un controlador MIDI, para todas las apps o solo para esta. Hasta que cambies algo, cada dispositivo funciona como antes. Ehecha [Usar un trackpad, mouse 3D o control](common:input-devices).
- **Filas de la barra.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} tiene {{ui:Ajustar}} (el predeterminado), {{ui:2 filas}} y {{ui:1 fila}}, para que el dibujo tenga más espacio. Ehecha [Organizar los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una anotación usan la cuadrícula compartida, con categorías plegables y columnas de etiqueta y valor.
- **Panel de problemas.** Las advertencias de la app, como una tarea vencida, se reúnen en un solo panel Problemas.
- **Live y complementos.** Las sesiones Live se describen en [Trabajar juntos en vivo](common:work-together-live); la lista de complementos que sigue a tu cuenta está en [Complementos y la lista de tu cuenta](common:addons-basics).
- **Conectá tu IA.** CadCraft Studio es el centro para tu propio asistente: conectate una vez para las ocho apps. Las apps no contienen IA propia.

### Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la app de escritorio y las ediciones empaquetadas quedaban en inglés. Esto todavía no se probó en todas las plataformas: avisanos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la oferta de 0.8.1 en {{ui:Configuración}} › {{ui:Actualizaciones}}.

### Todavía no en esta versión

- **Sin firma de código.** Los instaladores de Windows y la imagen .dmg de macOS todavía no tienen firma. En Windows, si SmartScreen detiene el instalador, elegí {{ui:Más información}}, luego {{ui:Ejecutar igual}}. En un Mac, hacé clic derecho en CadCraft Studio y elegí {{ui:Abrir}}. Las versiones para tiendas están en pausa.
- **Conectar tu IA está incompleto en algunos puntos.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y tu propia clave de API dentro de Studio no están prometidos para esta versión. El ciclo de tareas se probó, pero todavía no con un asistente real.
- **Las verificaciones de tareas necesitan el mismo tamaño de página.** Una hoja impresa de nuevo en otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja, y si no, por posición en la página.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y el título de la nota, no el sonido. La grabación se probó con un micrófono falso en un navegador sin interfaz; un micrófono real en un teléfono, tableta o laptop todavía falta verificar.
- **Las hojas de cálculo y las razones en un PDF** se guardan en una entrada privada del archivo. Un MarkupCraft anterior ignora esa entrada y la descarta la próxima vez que guarda el archivo, así que abrí y guardá ese tipo de archivo con 0.8 o posterior.
- **El lado del dibujante en los redlines.** Que CadCraft lea el archivo redline y responda todavía no está hecho.
- **Otros idiomas.** La barra de la app en tamil se desborda 528 px.

Todo lo demás está en [Lo que todavía no está hecho](topic:not-built-yet). Para la versión anterior a esta, ver [Novedades en 0.7](topic:whats-new-0-7).
