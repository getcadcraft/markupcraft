---
title: Novedades de la 0.7
summary: RFI, documentos para aprobación y partes diarios en una pestaña Obra nueva, con fechas de vencimiento, vencidos en rojo, CSV y BCF, trabajo sin conexión y Combinar; asistentes que establecen estados, responden y exportan la lista; listas de unidades que siguen los Ajustes; paneles que se recogen y cuadros de diálogo que se mueven.
keywords: novedades, notas de la versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, obra, registros de obra, rfi, solicitud de información, documento para aprobación, parte diario, diario de obra, vencido, fecha de vencimiento, asignados a mí, chincheta, combinar, sin conexión, tableta, bcf, csv, asistente, mcp, estado de anotación, respuesta, exportar, unidades, listas de unidades, estrella, calibrar, compacta, paneles, cuadros de diálogo, portugués
from: 142e1a1e
---

Esto es lo que cambió en MarkupCraft 0.7, en comparación con la 0.6. Lo más importante son los registros de obra: RFI, documentos para aprobación y partes diarios guardados dentro del PDF junto a sus anotaciones.

## Novedades

### RFI, documentos para aprobación y partes diarios

- **La pestaña Obra.** Abra la pestaña {{ui:Obra}} y elija {{ui:RFI}}, {{ui:Documento para aprobación}} o {{ui:Parte diario}}. Toque o pulse la hoja donde corresponde una RFI o un documento para aprobación y una chincheta marca el lugar; un parte diario va en la hoja abierta sin chincheta ({{ui:Colocar chincheta}} añade una más tarde, {{ui:Mover chincheta}} mueve cualquier chincheta). Cada registro tiene su propio número (RFI-0001, SUB-0001, LOG-0001), un título, texto, un estado, un responsable, una fecha de vencimiento, un hilo de respuestas y una lista de nombres de adjuntos. Consulte [Seguir RFI, documentos para aprobación y partes diarios](topic:field-records).
- **Vea lo que va tarde.** Filtre la lista por tipo, estado, fecha de vencimiento (vencidos, vencen en 7 días, con o sin fecha de vencimiento), esta hoja o todas las hojas, una búsqueda de texto, o {{ui:Asignados a mí}}. Un registro que ha pasado su fecha de vencimiento y sigue pendiente se marca como **Vencido**, en rojo, en la lista y en su chincheta. Consulte [Encontrar lo que importa](topic:field-records#find-what-matters).
- **CSV y BCF.** {{ui:CSV}} escribe los registros de la lista como hoja de cálculo; {{ui:BCF}} los escribe como temas BCF, cada uno con una instantánea de su lugar en la hoja. Ambos siguen los filtros. Consulte [Exportar](topic:field-records#export).
- **Sin conexión, y dos copias hechas una.** Los registros se guardan dentro del PDF y no necesitan red, de modo que una tableta en la obra puede añadirlos, responderlos y guardarlos. De vuelta en la oficina, {{ui:Combinar}} une los registros de otra copia del mismo PDF por sus identificadores, en un solo paso de deshacer. Consulte [Guardar, trabajar sin conexión y combinar copias](topic:field-records#save-offline-and-merging-copies).

### Asistentes de IA

- **Más cosas que puede hacer un asistente.** Su propio asistente, conectado a través de CadCraft Studio, ahora puede establecer el estado de una anotación (`markup_status`, registrado en su hilo), responder en un hilo (`markup_reply`) y exportar la lista de {{ui:Anotaciones}} como CSV o BCF (`markups_export`, lo que muestra la lista con sus filtros). Cada cambio es un paso de deshacer, firmado con el nombre del asistente. Consulte [Qué puede pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## En todas las aplicaciones

- **Unidades.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie topográfico de EE. UU. es una unidad propia). Desactive las unidades que nunca use y salen de las listas de unidades; marque una con una estrella y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. En MarkupCraft, las unidades de medición y de posición de {{ui:Ajustes}} › {{ui:MarkupCraft}} y la unidad del cuadro de diálogo de calibrar siguen los interruptores, la estrella fija la unidad de medición hasta que guarde los ajustes propios de MarkupCraft, y la distancia real que escribe al calibrar puede llevar la marca de cualquier unidad, como `3 yd` o `1.5 km`. Consulte [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Una disposición más densa y paneles que se recogen.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Densidad de la disposición}} › {{ui:Compacta}} hace caber más en la pantalla (las pantallas táctiles y los teléfonos conservan sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco como pestañas, fíjela para que se deslice hacia el borde, u ocúltelo y recupérelo desde el borde. Consulte [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los cuadros de diálogo se mueven.** Arrastre un cuadro de diálogo por su barra de título para apartarlo del dibujo; vuelve donde lo dejó. Haga doble clic en la barra de título para centrarlo de nuevo. Consulte [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas para su propio asistente (ordenar un dibujo, trazar un conjunto de planos, comprobar dibujos, hacer preguntas a un modelo, totalizar una medición, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Consulte [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Ajustes}} › {{ui:General}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** tienen ahora cada palabra de las aplicaciones, como borradores todavía no revisados por un hablante nativo. Los temas de ayuda de primeros pasos ya están disponibles en español; el resto de la ayuda sigue en inglés.
- **CadCraft Studio** indica por qué falló una comprobación de actualización (aún no hay archivo para su sistema, no hay red, firma incorrecta) en lugar de decir solo "Hecho", y deja de volver a mostrar una tarjeta de novedades que usted cerró hasta que haya una versión más reciente.

## Todavía no está en esta versión

- **La 0.7 no está firmada con certificado de código.** La firma y el paquete de Microsoft Store pasaron a la 0.8 porque todavía no ha llegado la validación del certificado. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y después {{ui:Ejecutar de todos modos}}. En un Mac, la primera vez, pulse con el botón derecho sobre CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en ninguna tienda de aplicaciones, y todavía no hay versión para iPad ni iPhone.
- Las listas de ángulo y de pendiente de {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- Los registros de obra no se comparten en una sesión en directo de CadCraft Studio (las sesiones en directo solo llevan anotaciones); reúna las copias con {{ui:Combinar}}.
- Combinar toma un registro entero de la copia que cambió en último lugar: si dos personas cambiaron campos distintos de un registro, ganan los campos de la copia más reciente. Los hilos y los nombres de adjuntos se unen.
- Los adjuntos son solo nombres; los archivos se quedan donde están. No hay equipos, notificaciones ni proyectos en la nube para los registros, y los asistentes todavía no tienen herramientas para registros.
- Los registros de obra se probaron en un navegador con tamaños de teléfono y de tableta y con la red cortada, pero todavía no a mano en una tableta real.
- Aún de la 0.6: girar objetos de la página a cualquier ángulo, dibujar formas nuevas directamente en la página, cambiar la fuente o el tamaño de una línea y texto que fluya en varias líneas. Una copia guardada con ediciones de página todavía no se ha abierto en Acrobat.
- Aún de la 0.5: deshacer un cambio de página (como añadir una página en blanco), leer texto de hojas escaneadas y sesiones en directo más allá de su propia red.

Todo lo demás está en [Lo que todavía no está implementado](topic:not-built-yet).
