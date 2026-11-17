---
title: Novedades de la versión 0.9
summary: Notas y una mesa de trabajo que nunca se imprimen, notas privadas cifradas y una copia limpia para el cliente, vínculos por lotes para todo un juego de dibujos, una herramienta Arco con diez métodos, seguir a otro revisor en vivo, y una corrección para que las marcas eliminadas no permanezcan en el PDF guardado.
keywords: novedades, qué hay de nuevo, 0.9, notas de la versión, registro de cambios, notas, mesa de trabajo, notas privadas, frase de contraseña, cifrado, ocultar notas, mostrar notas, copia limpia, captura, vínculos por lotes, referencias a hojas, vincular hojas, cajetín, número de hoja, adenda, renumerar, vínculo PDF, arco, métodos de arco, arco de tres puntos, radio, seguir, seguirme, en vivo, vista de clase, lista de personas, marca eliminada, textos de ayuda emergentes, títulos de pestañas, novedades, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, tarea, tareas, asignado, día límite, vencido, revisar ahora, qué cambió, revisiones, comparar, nota de voz, decisión, redline, archivo de respuestas, delineante, asistente, MCP, problemas, idiomas, dispositivos de entrada, panel táctil, filas de la barra de herramientas, cuadrícula de propiedades, actualización
from: dbdd7ed4
---

Esto es lo que cambió en MarkupCraft 0.9, comparado con 0.8.1. La idea principal es que sus notas de trabajo se quedan fuera de la hoja que recibe el cliente, y que todo un juego de dibujos se puede vincular en una sola pasada.

## Nuevo

### Notas, la mesa de trabajo y notas privadas

- **La mesa de trabajo.** El área alrededor de cada hoja es un escritorio: todo lo que se dibuja, escribe o pega junto a la hoja es una nota y nunca se imprime. Elija {{ui:Mostrar la mesa de trabajo}} para alejar la vista y tener espacio, o {{ui:Captura a la mesa de trabajo}}, arrastre un recuadro y luego elija {{ui:A la mesa de trabajo}} para poner una imagen de parte del dibujo junto a la hoja. Una captura es una imagen y no cambia cuando cambia la hoja. Vea [Notas, la mesa de trabajo y notas privadas](topic:notes-and-pasteboard).
- **Mostrar y ocultar notas.** Cualquier marca puede ser una nota: configure {{ui:Las marcas nuevas son}} en la pestaña {{ui:Notas}}, o {{ui:Esta marca es}} en {{ui:Propiedades}}. {{key:Shift+H}} o el interruptor {{ui:Notas}} debajo de la hoja oculta y muestra todas las notas a la vez. Las notas se excluyen de la impresión, de las copias aplanadas, de las listas y de las exportaciones, y otros lectores de PDF no las muestran. Su PDF guardado las conserva para la próxima vez que lo abra en MarkupCraft.
- **Notas privadas.** Elija {{ui:Establecer una frase de contraseña}} y luego convierta una marca en {{ui:Una nota privada}}. Se cifra en el archivo con una frase de contraseña de al menos 10 caracteres, y no hay recuperación: nadie, incluidos nosotros, puede abrirla sin la frase de contraseña. {{ui:Bloquear}} oculta las notas privadas; {{ui:Mantener desbloqueadas en este dispositivo}} está desactivado de forma predeterminada.
- **Guardar una copia limpia.** {{ui:Guardar una copia limpia}} elimina cada nota, nota privada y todo lo que hay en la mesa de trabajo. Úsela para el archivo que va al cliente.

### Vincular un juego completo

- **Vínculos por lotes.** Elija {{ui:Páginas}} › {{ui:Vínculos por lotes…}}, o {{ui:Vincular referencias a hojas…}} debajo de {{ui:Buscar texto}} en el panel {{ui:Hojas}}. El paso 1 enumera el número y el nombre de cada hoja según se leen de su cajetín; corrija los que estén mal. El paso 2 enumera las referencias encontradas, como `3/A-501` o `DETAIL 2 ON A-501`. {{ui:Se vinculará}} muestra la hoja y la vista de cada una, {{ui:Sin vincular}} muestra números que ninguna hoja abierta tiene, y {{ui:Crear los vínculos}} los crea todos en un solo paso de deshacer. Vuelva a ejecutarlo después de una adenda o de una renumeración; los vínculos hechos a mano nunca se cambian. Un vínculo con vista se guarda como vínculo PDF, para que otros lectores también abran el detalle. Vea [Vínculos de hojas](topic:sheet-links).

### Dibujo

- **Arco, diez métodos.** La herramienta {{ui:Arco}} ({{key:O}}) ahora tiene un cuadro {{ui:Método de arco}} sobre la página con diez formas de dibujar un arco, y el ángulo, la longitud, el radio y la dirección se pueden designar con el cursor o escribir. Vea [Dibujar un arco de diez formas](topic:draw-an-arc).

### Trabajar en conjunto

- **Seguir a un revisor.** En una sesión en vivo elija {{ui:Seguir}} junto al nombre de una persona y su vista se mueve con la de esa persona; si usted desplaza o amplía la vista, el seguimiento se detiene. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. La lista de personas muestra el color, el nombre y la hoja de cada persona, y cuándo fue su última edición. Vea [Seguir a otro revisor en una sesión en vivo](topic:follow-in-live).

## En todas las aplicaciones

- Los textos de ayuda emergentes son de Bootstrap, el consejo inicial se puede cerrar, las barras de pestañas se desplazan cuando se desbordan, y los títulos de las pestañas del navegador muestran `<document> — MarkupCraft | CadCraft`.
- Un panel con varias secciones abre una y cierra las demás (un candado junto a la flecha mantiene una abierta); un interruptor de Configuración desactiva esto.
- Cada aplicación comienza con una colección predeterminada de objetos de la biblioteca.
- Las unidades de peso y de temperatura están disponibles en la configuración de Unidades.

## Corregido

- **Las marcas eliminadas ya no quedan legibles dentro del PDF guardado.** Antes, al guardar, se quitaba una anotación eliminada o reescrita de su página, pero el objeto, con su texto, quedaba en el archivo. Ahora, al guardar, esos objetos se borran. Los archivos guardados por compilaciones anteriores todavía los conservan hasta que los vuelva a guardar.

## Límites reales

- Los vínculos por lotes se probaron con nuestros propios juegos de prueba. Los juegos reales dibujan los globos de muchas maneras, así que en un juego de cliente podrían omitirse algunas vistas. Las hojas escaneadas necesitan primero {{ui:Leer texto (OCR)…}}.
- Las notas, las notas privadas y la mesa de trabajo se probaron en un navegador sin interfaz gráfica y en nuestros propios archivos, no con un juego vectorial real y grande, y no en una sesión en vivo real de dos personas. Cambiar una frase de contraseña todavía no está hecho. Las compilaciones anteriores a la 0.9 no muestran notas.
- La vista de clase es la lista de personas; todavía no se ha probado con un profesor y estudiantes reales.
- Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los revise.
- Los instaladores de Windows no tienen firma de código (Más información, luego Ejecutar de todas formas); la imagen de disco de macOS no está notarizada (clic derecho, luego Abrir).

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en MarkupCraft 0.8 y 0.8.1, comparado con 0.7. Lo más importante es que una marca puede ser una tarea que alguien, o su propio asistente, realiza, y que se cierra sola cuando el dibujo cambia de verdad.

### Nuevo

**Marcas que actúan**

- **Convertir una marca en tarea.** Seleccione una o más marcas, abra la pestaña {{ui:Tareas}} y elija {{ui:Hacer tarea la selección}}. Una tarea tiene un título, una persona o su asistente conectado que la realiza, un día límite opcional y un estado, y conserva su lugar en la hoja y su conversación. Vea [Convertir una marca en tarea](topic:markups-that-act).
- **Tareas que se cierran solas.** Una tarea puede vigilar el dibujo dentro de su marca. Abra una revisión más nueva de la hoja y elija {{ui:Revisar ahora}}: si las líneas de esa área cambiaron más que un poquito, la tarea se marca como Hecha, su marca pasa a Completada y una nota en la conversación indica qué cambió. Un nuevo sello de fecha, o líneas que se movieron menos de 1.5 puntos, no cuentan. En cambio, una tarea puede vigilar un elemento del modelo: su asistente informa el elemento con `tasks_check`, y un informe posterior que difiera, o un elemento eliminado, cierra la tarea. Un paso de deshacer la vuelve a abrir.
- **Encuentre el trabajo.** Filtre la lista de {{ui:Tareas}} por estado y por a quién corresponde, incluido {{ui:Vencidos}}; elija {{ui:Asignada a}} y luego {{ui:Asistente}} para ver lo que espera a su asistente. Una tarea que pasó su día límite aparece como advertencia en el panel de problemas. {{ui:CSV}} exporta la lista. Las tareas se guardan en el PDF junto con la marca y viajan por la sesión en vivo como otras propiedades de las marcas.

**Lo que cambió, como lista simple**

- **Listar los cambios.** Abra la pestaña {{ui:Comparar}}, luego {{ui:Comparar un juego completo}}, elija el archivo anterior y el posterior, y elija {{ui:Listar los cambios}}. La lista empieza con un conteo y luego cubre cada hoja cambiada, empezando por el cambio más grande: dónde está en la hoja, qué tan grande es (en unidades reales y en pulgadas de papel en una hoja calibrada), si se agregaron o quitaron líneas, cuántas marcas hay allí y qué palabras aparecieron o desaparecieron. {{ui:Copiar la lista}} la pone en el portapapeles y {{ui:CSV}} escribe una fila por cambio. Vea [Listar lo que cambió entre revisiones](topic:what-changed-in-words).

**Notas de voz y decisiones**

- **Notas de voz.** En la pestaña {{ui:Notas}} elija {{ui:Grabar nota de voz}}, luego {{ui:Detener grabación}}; las grabaciones se detienen solas a los dos minutos. La nota queda fijada en el centro de la hoja; usted la arrastra a donde corresponde y escribe una leyenda en {{ui:Propiedades}}, y {{ui:Reproducir}} en la lista la reproduce. La grabación se guarda dentro del PDF.
- **Decisiones.** {{ui:Fijar una decisión}} escribe una o dos oraciones en la hoja. Si reemplaza una decisión anterior, elija esa en {{ui:Reemplaza a}}: la anterior se queda, marcada como Reemplazada, y apunta a la nueva. Un paso de deshacer la quita. Vea [Fijar notas de voz y decisiones en una hoja](topic:voice-notes-and-decisions).

**Marcas a revisión**

- **Enviar y responder.** En la pestaña {{ui:Tareas}} abra {{ui:Marcas a revisión}}, escriba la revisión con la que se comparan las marcas y elija {{ui:Exportar archivo de redline}}. Obtiene un archivo `.redline.json` con un elemento por cada marca abierta: hoja, posición (como fracciones de la hoja, para que una nueva impresión a otro tamaño siga alineada), palabras, autor, conversación y su tarea. Quien dibuje los cambios responde Aceptada, Rechazada o Hecha en un archivo `.redline-answers.json`; {{ui:Cargar archivo de respuestas…}} asigna a cada marca ese estado y la nota del delineante, como un solo paso de deshacer. Vea [Enviar marcas al delineante como redline](topic:redline-to-revision).

**Asistentes de IA**

- **Más herramientas.** Un asistente que conectó mediante CadCraft Studio puede listar tareas (`tasks_list`), crear o cambiar una (`task_set`), quitar la tarea (`task_clear`), revisar una contra una revisión más nueva o contra un elemento (`tasks_check`) y leer la lista simple de cambios entre dos juegos de planos abiertos (`revisions_changes`). Solo recibe las herramientas que marcó en el interruptor Asistentes, y cada cambio es un paso de deshacer. Vea [Usar MarkupCraft con un asistente de IA](topic:use-with-ai-assistants).

### En todas las aplicaciones

- **Idiomas.** CadCraft Studio ahora tiene 54 idiomas. Diez son nuevos: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko. Todos los que no son inglés son borradores de máquina hasta que un hablante nativo los revise.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un panel táctil, los botones laterales del ratón, un lápiz, los toques con el dedo, un ratón 3D, un control de juego o un controlador MIDI, para todas las aplicaciones o solo para esta. Hasta que cambie algo, cada dispositivo funciona como antes. Vea [Usar un panel táctil, ratón 3D o control](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} tiene {{ui:Repartir}} (el predeterminado), {{ui:2 filas}} y {{ui:1 fila}}, para que el dibujo tenga más espacio. Vea [Organizar los paneles](common:arrange-panels).
- **Cuadrícula de propiedades.** Los campos de Estilo de una marca usan la cuadrícula compartida, con categorías plegables y columnas de etiqueta y valor.
- **Panel de problemas.** Las advertencias de la aplicación, como una tarea vencida, se reúnen en un solo panel de problemas.
- **En vivo y complementos.** Las sesiones en vivo se describen en [Trabajar juntos en vivo](common:work-together-live); la lista de complementos que sigue su cuenta está en [Complementos y lista de su cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro para su propio asistente: conéctelo una vez para las ocho aplicaciones. Las aplicaciones no contienen IA propia.

### Corregido en 0.8.1

- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, la aplicación de escritorio y las ediciones empaquetadas se quedaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- Las instalaciones de Studio 0.8 reciben la 0.8.1 a través de {{ui:Configuración}} › {{ui:Actualizaciones}}.

### Todavía no en esta versión

- **Sin firma de código.** Los instaladores de Windows y el .dmg de macOS todavía no tienen firma. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todas formas}}. En un Mac, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. Las versiones para tiendas están en pausa.
- **Conectar su IA está incompleto en algunos puntos.** La conexión con un clic dentro de Studio, el conector alojado para asistentes de navegador y su propia clave de API dentro de Studio no están prometidos para esta versión. El ciclo de tareas se ha probado, pero todavía no con un asistente real.
- **Las revisiones de tareas requieren el mismo tamaño de página.** Una hoja impresa de nuevo en otro tamaño no coincidirá, así que sus tareas no se cierran. Las hojas se emparejan por número de hoja y, si no hay número, por posición en el juego.
- **Las notas de voz son solo grabaciones.** No hay transcripción, y un asistente ve la duración, el autor y la leyenda de la nota, no el sonido. La grabación se probó con un micrófono falso en un navegador sin interfaz gráfica; falta comprobar un micrófono real en un teléfono, tableta o portátil.
- **Las hojas de cálculo y los motivos en un PDF** se guardan en una entrada privada del archivo. Un MarkupCraft anterior ignora esa entrada y la descarta la próxima vez que guarda el archivo, así que abra y guarde ese archivo con la 0.8 o una versión posterior.
- **La parte del delineante en los redlines.** Que CadCraft lea el archivo de redline y lo responda todavía no está construido.
- **Otros idiomas.** La barra de aplicación en tamil se desborda 528 px.

Lo demás está en [Lo que todavía no está construido](topic:not-built-yet). Para la versión anterior a esta, vea [Novedades de la versión 0.7](topic:whats-new-0-7).
