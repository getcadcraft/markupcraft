---
title: Novedades de la versión 0.7
summary: RFI, entregas y bitácoras diarias en una nueva pestaña Obra, con fechas límite, vencidos en rojo, CSV y BCF, trabajo sin conexión y Combinar; asistentes que fijan estados, responden y exportan la lista; listas de unidades que siguen la configuración; paneles que se recogen y diálogos que se mueven.
keywords: novedades, notas de la versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, obra, registros de obra, rfi, solicitud de información, entrega, bitácora diaria, diario de obra, vencido, fecha límite, asignados a mí, marcador, combinar, sin conexión, tableta, bcf, csv, asistente, mcp, estado de marca, respuesta, exportar, unidades, listas de unidades, estrella, calibrar, compacto, paneles, diálogos, portugués
from: 142e1a1e
---

Esto es lo que cambió en MarkupCraft 0.7, comparado con 0.6. Lo grande y nuevo son los registros de obra: RFI, entregas y bitácoras diarias que se guardan dentro del PDF junto a sus marcas.

## Novedades

### RFI, entregas y bitácoras diarias

- **La pestaña Obra.** Abra la pestaña {{ui:Obra}} y elija {{ui:RFI}}, {{ui:Entrega}} o {{ui:Bitácora diaria}}. Toque o haga clic en la hoja donde corresponde un RFI o una entrega y un marcador señala el lugar; una bitácora diaria va en la hoja abierta sin marcador ({{ui:Colocar marcador}} agrega uno después, {{ui:Mover marcador}} mueve cualquier marcador). Cada registro tiene su propio número (RFI-0001, SUB-0001, LOG-0001), un título, texto, un estado, un responsable, una fecha límite, una conversación de respuestas y una lista de nombres de adjuntos. Vea [Dé seguimiento a RFI, entregas y bitácoras diarias](topic:field-records).
- **Vea lo que va tarde.** Filtre la lista por tipo, estado, fecha límite (vencidos, vencen en 7 días, con o sin fecha límite), esta hoja o todas las hojas, una búsqueda de texto, o {{ui:Asignados a mí}}. Un registro que pasó su fecha límite y sigue esperando se marca **Overdue**, en rojo, en la lista y en su marcador. Vea [Encuentre lo que importa](topic:field-records#find-what-matters).
- **CSV y BCF.** {{ui:CSV}} escribe los registros listados como hoja de cálculo; {{ui:BCF}} los escribe como temas BCF, cada uno con una captura de su lugar en la hoja. Ambos siguen los filtros. Vea [Exportar](topic:field-records#export).
- **Sin conexión, y dos copias hechas una.** Los registros se guardan dentro del PDF y no necesitan red, así que una tableta en obra puede agregarlos, responderlos y guardarlos. De vuelta en la oficina, {{ui:Combinar}} une los registros de otra copia del mismo PDF por sus identificadores, como un solo paso de deshacer. Vea [Guardar, trabajar sin conexión y combinar copias](topic:field-records#save-offline-and-merging-copies).

### Asistentes de IA

- **Más cosas que un asistente puede hacer.** Su propio asistente, conectado mediante CadCraft Studio, ahora puede fijar el estado de una marca (`markup_status`, anotado en su conversación), responder en una conversación (`markup_reply`) y exportar la lista de {{ui:Marcas}} como CSV o BCF (`markups_export`, lo que muestra la lista con sus filtros). Cada cambio es un paso de deshacer, firmado con el nombre del asistente. Vea [Qué puede pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## En todas las aplicaciones

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} tiene una lista cada una para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie topográfico de EE. UU. es su propia unidad). Desactive las unidades que nunca usa y salen de las listas de unidades; marque una con estrella y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. En MarkupCraft, las unidades de medición y de posición en {{ui:Configuración}} › {{ui:MarkupCraft}} y la unidad del diálogo de calibración siguen los interruptores, la estrella fija la unidad de medición hasta que guarde la configuración propia de MarkupCraft, y la distancia real que escribe al calibrar puede llevar la marca de cualquier unidad, como `3 yd` o `1.5 km`. Vea [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Un diseño más denso y paneles que se recogen.** {{ui:Configuración}} › {{ui:General}} › {{ui:Densidad del diseño}} › {{ui:Compacta}} cabe más en la pantalla (las pantallas táctiles y los teléfonos conservan sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco como pestañas, fíjelo para que se deslice hacia el borde, u ocúltelo y tráigalo de vuelta desde el borde. Vea [Organice los paneles](common:arrange-panels#make-the-layout-denser).
- **Los diálogos se mueven.** Arrastre un diálogo por su barra de título para quitarlo del paso del dibujo; vuelve donde lo dejó. Haga doble clic en la barra de título para centrarlo otra vez. Vea [Mueva un diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas para su propio asistente (ordenar un dibujo, trazar un juego, revisar dibujos, hacer preguntas a un modelo, totalizar una cuantificación, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Vea [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}. Ese, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ya tienen cada palabra de las aplicaciones, como borradores aún no revisados por un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** dice por qué falló una búsqueda de actualización (aún no hay archivo para su sistema, no hay red, firma incorrecta) en lugar de solo "Listo", y deja de traer una tarjeta de Novedades que usted cerró hasta que haya una versión más nueva.

## Aún no está en esta versión

- **0.7 no está firmada con certificado de código.** La firma y el paquete de Microsoft Store pasaron a 0.8 porque la validación del certificado aún no llega. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todas formas}}. En una Mac, la primera vez, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones y aún no hay versión para iPad ni iPhone.
- Las listas de ángulo y pendiente en {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- Los registros de obra no se comparten en una sesión en vivo de CadCraft Studio (las sesiones en vivo llevan solo marcas); junte las copias con {{ui:Combinar}}.
- Combinar toma un registro completo de la copia cambiada al último: si dos personas cambiaron campos distintos de un mismo registro, los campos de la copia más reciente ganan. Las conversaciones y los nombres de adjuntos se unen.
- Los adjuntos son solo nombres; los archivos se quedan donde están. No hay equipos, notificaciones ni proyectos en la nube para los registros, y los asistentes aún no tienen herramientas para registros.
- Los registros de obra se probaron en un navegador con tamaños de teléfono y tableta y sin red, pero todavía no a mano en una tableta real.
- Todavía de 0.6: girar objetos de página a cualquier ángulo, dibujar formas nuevas directo en la página, cambiar la fuente o el tamaño de una línea y texto que fluye en varias líneas. Una copia guardada con ediciones de página aún no se ha abierto en Acrobat.
- Todavía de 0.5: deshacer un cambio de página (como agregar una página en blanco), leer texto de hojas escaneadas y sesiones en vivo más allá de su propia red.

Todo lo demás está en [Lo que aún no está construido](topic:not-built-yet).
