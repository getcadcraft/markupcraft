---
title: Novedades de la versión 0.7 (anterior)
summary: RFI, documentos para aprobación y partes diarios en una nueva pestaña Obra, con fechas de vencimiento, vencidos en rojo, CSV y BCF, trabajo sin conexión y Combinar; asistentes que fijan estados, responden y exportan la lista; listas de unidades que siguen a Ajustes; paneles que se repliegan y diálogos que se mueven.
keywords: novedades 0.7, versión anterior, notas de la versión, registro de cambios, cambios, 0.7, versión, nuevas funciones, obra, registros de obra, rfi, solicitud de información, documento para aprobación, parte diario, diario de obra, vencido, fecha de vencimiento, asignados a mí, chincheta, combinar, sin conexión, tableta, bcf, csv, asistente, mcp, estado de anotación, respuesta, exportar, unidades, listas de unidades, estrella, calibrar, compacta, paneles, diálogos, portugués
from: ca5ba1f0
---

Esto es lo que cambió en MarkupCraft 0.7, en comparación con la 0.6. La gran novedad son los registros de obra: RFI, documentos para aprobación y partes diarios guardados dentro del PDF, junto a sus anotaciones.

## Novedades

### RFI, documentos para aprobación y partes diarios

- **La pestaña Obra.** Abra la pestaña {{ui:Obra}} y elija {{ui:RFI}}, {{ui:Documento para aprobación}} o {{ui:Parte diario}}. Toque o haga clic en la hoja donde corresponde un RFI o un documento para aprobación, y una chincheta marcará el lugar; un parte diario se coloca en la hoja abierta sin chincheta ({{ui:Colocar chincheta}} añade una después, {{ui:Mover chincheta}} mueve cualquier chincheta). Cada registro tiene su propio número (RFI-0001, SUB-0001, LOG-0001), un título, un texto, un estado, un responsable, una fecha de vencimiento, un hilo de respuestas y una lista de nombres de adjuntos. Véase [Gestionar RFI, documentos para aprobación y partes diarios](topic:field-records).
- **Vea lo que va con retraso.** Filtre la lista por tipo, estado, fecha de vencimiento (vencido, vence en 7 días, con o sin fecha de vencimiento), por esta hoja o todas las hojas, por una búsqueda de texto, o por {{ui:Asignados a mí}}. Un registro que ha pasado su fecha de vencimiento y sigue pendiente se marca como **Vencido**, en rojo, en la lista y en su chincheta. Véase [Encontrar lo importante](topic:field-records#find-what-matters).
- **CSV y BCF.** {{ui:CSV}} escribe los registros listados como hoja de cálculo; {{ui:BCF}} los escribe como temas BCF, cada uno con una instantánea de su lugar en la hoja. Ambos siguen los filtros. Véase [Exportar](topic:field-records#export).
- **Sin conexión, y dos copias hechas una.** Los registros se guardan dentro del PDF y no necesitan red, así que una tableta en obra puede añadirlos, responderlos y guardarlos. De vuelta en la oficina, {{ui:Combinar}} une los registros de otra copia del mismo PDF por sus identificadores, como un solo paso de deshacer. Véase [Guardar, trabajar sin conexión y combinar copias](topic:field-records#save-offline-and-merging-copies).

### Asistentes de IA

- **Más cosas que puede hacer un asistente.** Su propio asistente, conectado a través de CadCraft Studio, puede ahora fijar el estado de una anotación (`markup_status`, registrado en su hilo), responder en un hilo (`markup_reply`) y exportar la lista de {{ui:Anotaciones}} como CSV o BCF (`markups_export`, lo que muestra la lista con sus filtros). Cada cambio es un paso de deshacer, firmado con el nombre del asistente. Véase [Lo que puede pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## En todas las aplicaciones

- **Unidades.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie de agrimensor de EE. UU. es una unidad propia). Desactive las unidades que nunca usa y salen de las listas; marque una con estrella y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. En MarkupCraft, las unidades de medida y de posición en {{ui:Ajustes}} › {{ui:MarkupCraft}} y la unidad del diálogo de calibrar siguen a los interruptores; la estrella fija la unidad de medida hasta que guarde los ajustes propios de MarkupCraft; y la distancia real que escriba al calibrar puede llevar la marca de cualquier unidad, como `3 yd` o `1.5 km`. Véase [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Una disposición más densa y paneles que se repliegan.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Densidad de la disposición}} › {{ui:Compacta}} cabe más en pantalla (las pantallas táctiles y los teléfonos mantienen sus botones grandes). Cada panel lateral tiene una barra de título estrecha: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco con pestañas, fíjela para que se deslice hacia el borde, o oculte el panel y tráigalo de nuevo desde el borde. Véase [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los diálogos se mueven.** Arrastre un diálogo por su barra de título para apartarlo del dibujo; vuelve a donde lo dejó. Haga doble clic en la barra de título para volver a centrarlo. Véase [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas para su propio asistente (ordenar un dibujo, trazar un juego, revisar dibujos, hacer preguntas a un modelo, totalizar una cubicación, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una repetida por nuestras pruebas. Las aplicaciones no contienen IA. Véase [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Ajustes}} › {{ui:General}} › {{ui:Idioma}}. Ese idioma, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** tienen ahora todas las palabras de las aplicaciones, como borradores que aún no ha revisado un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** indica por qué falló una comprobación de actualizaciones (aún no hay archivo para su sistema, no hay red, firma incorrecta) en lugar de solo «Hecho», y deja de volver a mostrar una tarjeta de novedades que cerró hasta que haya una versión más nueva.

## Todavía no en esta versión

- **0.7 no tiene firma de código.** La firma y el paquete de Microsoft Store pasaron a la 0.8 porque la validación del certificado aún no ha llegado. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}}, después {{ui:Ejecutar de todas formas}}. En un Mac, la primera vez, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones, y todavía no hay versión para iPad ni iPhone.
- Las listas de ángulo y pendiente de {{ui:Unidades}} se guardan, pero todavía ningún elemento las lee.
- Los registros de obra no se comparten en una sesión en directo de CadCraft Studio (las sesiones en directo solo llevan anotaciones); traiga las copias juntas con {{ui:Combinar}}.
- Combinar toma un registro entero de la copia modificada por última vez: si dos personas cambiaron campos distintos de un registro, prevalecen los campos de la copia más reciente. Los hilos y los nombres de adjuntos se unen.
- Los adjuntos son solo nombres; los archivos se quedan donde están. No hay equipos, notificaciones ni proyectos en la nube para registros, y los asistentes todavía no tienen herramientas para registros.
- Los registros de obra se probaron en un navegador con tamaños de teléfono y tableta y con la red cortada, pero todavía no a mano en una tableta real.
- Sigue pendiente de la 0.6: girar objetos de página a cualquier ángulo, dibujar formas nuevas directamente en la página, cambiar la fuente o el tamaño de una línea, y texto que fluye en varias líneas. Una copia guardada con ediciones de página todavía no se ha abierto en Acrobat.
- Sigue pendiente de la 0.5: deshacer un cambio de página (como añadir una página en blanco), leer texto de hojas escaneadas y sesiones en directo fuera de su propia red.

Todo lo demás está en [Lo que todavía no está desarrollado](topic:not-built-yet).
