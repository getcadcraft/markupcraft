---
title: Mba'épa oñemoambue 0.7 (anterior)
summary: RFI, submittals ha registro diario pyahu Campo pestaña-pe, fecha límite, vencido en rojo, CSV ha BCF, trabajo sin conexión ha Combinar; asistentes oñemoĩva estado, ohai respuesta ha omoĩ lista; listas de unidades oñeñeʼẽva Configuración-gui; paneles oñeñeʼẽva ha diálogos oñemoambuéva.
keywords: novedades 0.7, versión anterior, notas de versión, registro de cambios, cambios, 0.7, versión, nuevas funciones, campo, registros de campo, rfi, solicitud de información, submittal, registro diario, bitácora, vencido, fecha límite, asignado a mí, chincheta, combinar, sin conexión, tableta, bcf, csv, asistente, mcp, estado de anotación, respuesta, exportar, unidades, listas de unidades, estrella, calibrar, compacta, paneles, diálogos, portugués
from: ca5ba1f0
---

Ko'ã mba'e oñemoambue MarkupCraft 0.7-pe, 0.6 rehe. Tuicha mba'e pyahu ha'e registros de campo: RFI, submittals ha registro diario oñemboguara PDF-pe anotaciones ndive.

## Pyahu

### RFI, submittals ha registro diario

- **La pestaña Campo.** Abrí la pestaña {{ui:Campo}} ha eiporavo {{ui:RFI}}, {{ui:Submittal}} térã {{ui:Registro diario}}. Toca térã clic hoja-pe, moõpa RFI térã submittal oĩ, ha chincheta omarka hendápe; registro diario ojoaju hoja abierta-pe chincheta'ỹre ({{ui:Colocar chincheta}} omoĩ upéi, {{ui:Mover chincheta}} ombosũ peteĩ chincheta). Cada registro oguereko número propio (RFI-0001, SUB-0001, LOG-0001), título, texto, estado, persona asignada, fecha límite, hilo de respuestas ha lista de nombres de adjuntos. Ehecha [Seguir RFI, submittals ha registros diarios](topic:field-records).
- **Ehecha mbaʼeve oĩ atrasado.** Filtrá la lista por tipo, estado, fecha límite (vencido, vence en 7 días, con o sin fecha límite), esta hoja o todas las hojas, búsqueda de texto, o {{ui:Asignado a mí}}. Registro que pasó su fecha límite y sigue pendiente se marca **Vencido**, en rojo, en la lista y en su chincheta. Ehecha [Encontrar lo importante](topic:field-records#find-what-matters).
- **CSV y BCF.** {{ui:CSV}} ohai registros listados como planilla; {{ui:BCF}} ohai como temas BCF, cada uno con una captura de su lugar en la hoja. Ambos siguen los filtros. Ehecha [Exportar](topic:field-records#export).
- **Sin conexión, y dos copias hechas una.** Registros se guardan dentro del PDF y no necesitan red, así una tableta en obra puede agregar, responder y guardar. En la oficina, {{ui:Combinar}} une los registros de otra copia del mismo PDF por sus ids, como un solo paso de deshacer. Ehecha [Guardar, sin conexión y combinar copias](topic:field-records#save-offline-and-merging-copies).

### Asistentes de IA

- **Más cosas que puede hacer el asistente.** Tu propio asistente, conectado por CadCraft Studio, ahora puede poner el estado de una anotación (`markup_status`, registrado en su hilo), responder en un hilo (`markup_reply`) y exportar la lista {{ui:Anotaciones}} como CSV o BCF (`markups_export`, lo que muestra la lista con sus filtros). Cada cambio es un paso de deshacer, firmado con el nombre del asistente. Ehecha [Lo que un asistente puede pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## En todas las apps

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para longitud, superficie, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de cada unidad (el pie de agrimensura de EE. UU. es unidad propia). Desactivá las unidades que no usás y salen de las listas; marcá una con estrella y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. En MarkupCraft, las unidades de medida y posición en {{ui:Configuración}} › {{ui:MarkupCraft}} y la unidad del diálogo de calibrar siguen los interruptores; la estrella fija la unidad de medida hasta que guardes la configuración propia de MarkupCraft, y la distancia real que escribís al calibrar puede llevar la marca de cualquier unidad, como `3 yd` o `1.5 km`. Ehecha [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Diseño más denso y paneles que se ordenan.** {{ui:Configuración}} › {{ui:General}} › {{ui:Diseño densidad}} › {{ui:Compacta}} entra más en pantalla (las pantallas táctiles y los teléfonos mantienen sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrastrala para acoplar o flotar el panel, soltala sobre la barra de otro panel para compartir un marco como pestañas, fijala para que se deslice al borde, u ocultala y traela de vuelta desde el borde. Ehecha [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los diálogos se mueven.** Arrastrá un diálogo por su barra de título para sacarlo del dibujo; vuelve donde lo dejaste. Doble clic en la barra de título lo vuelve a centrar. Ehecha [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez pedidos resueltos para tu propio asistente (ordenar un dibujo, trazar un juego, revisar planos, hacer preguntas a un modelo, totalizar un cómputo, probar una variante de pieza…), cada uno con las herramientas que llama y los permisos que necesita, y cada uno reproducido por nuestras pruebas. Las apps no contienen IA. Ehecha [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}. Ese, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ahora tienen todas las palabras de las apps, como borradores aún no revisados por un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** dice por qué falló una comprobación de actualización (todavía no hay archivo para tu sistema, sin red, firma inválida) en vez de solo "Done", y deja de volver a mostrar una tarjeta de Novedades que cerraste hasta que haya una versión más nueva.

## Todavía no en esta versión

- **0.7 no tiene firma de código.** La firma, y el paquete de Microsoft Store, pasaron a 0.8 porque la validación del certificado todavía no llegó. Verificá el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elegí {{ui:Más información}}, luego {{ui:Ejecutar igual}}. En una Mac, la primera vez, hacé clic derecho en CadCraft Studio y elegí {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones, y todavía no hay versión para iPad ni iPhone.
- Las listas de ángulo y pendiente en {{ui:Unidades}} se guardan, pero todavía ningún cuadro las lee.
- Los registros de campo no se comparten en una sesión en vivo de CadCraft Studio (las sesiones en vivo llevan solo anotaciones); juntá las copias con {{ui:Combinar}}.
- Combinar toma un registro entero de la copia cambiada por última vez: si dos personas cambiaron campos distintos de un mismo registro, ganan los campos de la copia más reciente. Los hilos y los nombres de adjuntos se unen.
- Los adjuntos son solo nombres; los archivos quedan donde están. No hay equipos, notificaciones ni proyectos en la nube para registros, y los asistentes todavía no tienen herramientas para registros.
- Los registros de campo se probaron en un navegador con tamaños de teléfono y tableta y con la red cortada, pero todavía no a mano en una tableta real.
- Todavía de 0.6: girar objetos de página a cualquier ángulo, dibujar formas nuevas directamente en la página, cambiar la fuente o el tamaño de una línea, y texto que fluye en varias líneas. Una copia guardada con cambios de página todavía no se abrió en Acrobat.
- Todavía de 0.5: deshacer un cambio de página (como agregar una página en blanco), leer texto de hojas escaneadas, y sesiones en vivo fuera de tu propia red.

Todo lo demás está en [Lo que todavía no está hecho](topic:not-built-yet).
