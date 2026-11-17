---
title: Teclado ha mouse
summary: Cada tecla, acción de mouse y gesto táctil que MarkupCraft entiende, agrupados, más los atajos que mantiene el navegador.
keywords: teclado, atajos, teclas de acceso rápido, teclas, mouse, rueda, clic derecho, botón central, trackpad, táctil, gestos, pellizcar, espacio para desplazar
from: 7bf207ec
---

Los atajos escritos con {{key:Mod}} aceptan ⌘ o Control en Mac, y Ctrl en Windows y Linux. Las letras de herramienta funcionan solo cuando no se escribe en un cuadro; mientras se escribe, las letras son solo letras. Ver también [Teclas, mouse y trackpads](common:keys).

## Herramientas

| Tecla | Herramienta |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:H}} | {{ui:Desplazar}} |
| {{key:B}} | {{ui:Contenido}}: las líneas, imágenes y texto propios de la página (ver [Cambiar el contenido propio de la página](topic:page-content)) |
| {{key:P}} | {{ui:Lápiz}} |
| {{key:I}} | {{ui:Resaltado}} |
| {{key:L}} | {{ui:Línea}} |
| {{key:A}} | {{ui:Flecha}} |
| {{key:R}} | {{ui:Rectángulo}} |
| {{key:E}} | {{ui:Elipse}} |
| {{key:Y}} | {{ui:Polilínea}} |
| {{key:G}} | {{ui:Polígono}} |
| {{key:C}} | {{ui:Nube}} (arrastrar un cuadro) |
| {{key:Shift+C}} | {{ui:Nube libre}} |
| {{key:K}} | {{ui:Llamada}} |
| {{key:T}} | {{ui:Texto}} |
| {{key:N}} | {{ui:Nota}} |
| {{key:S}} | {{ui:Sello}} |
| {{key:M}} | {{ui:Longitud}} |
| {{key:Q}} | {{ui:Área}} |
| {{key:U}} | {{ui:Contar}} |
| {{key:O}} | {{ui:Arco}} |
| {{key:X}} | {{ui:Ángulo}} |

{{ui:Calibrar}} no tiene tecla: usar su botón de la barra de herramientas o el botón de escala de la barra de estado. Las letras de herramienta se ignoran mientras se mantiene {{key:Alt}}.

## Mientras se dibuja

| Tecla o acción | Qué hace |
|---|---|
| {{key:Shift}} mientras se dibuja | Líneas, flechas, longitudes y lados de polilínea en pasos de 45°; rectángulos, elipses y nubes de cuadro cuadrados; lápiz y resaltador, un solo trazo recto |
| Doble clic, {{key:Enter}} o clic derecho | Terminar una polilínea, polígono, nube libre o área |
| {{key:Backspace}} | Quitar el último punto de una polilínea, polígono, nube libre o área |
| {{key:Esc}} | Cancelar lo que se dibuja; sin nada en curso, quitar la selección; sin nada seleccionado, volver a {{ui:Seleccionar}} |
| {{key:Mod+Enter}} | Terminar de escribir en un cuadro de texto, llamada o nota (o hacer clic afuera) |
| {{key:Esc}} mientras se escribe | Cancelar el texto que se estaba escribiendo |
| {{key:Shift}}-clic con {{ui:Contar}} | Quitar el punto más cercano del grupo de conteo seleccionado |

## Seleccionar y editar

| Tecla o acción | Qué hace |
|---|---|
| Clic | Seleccionar una anotación |
| {{key:Shift}}-clic | Agregar o quitar una anotación de la selección |
| Arrastrar de izquierda a derecha en hoja vacía | Seleccionar lo que queda totalmente dentro de la ventana |
| Arrastrar de derecha a izquierda en hoja vacía | Seleccionar lo que toca la ventana |
| {{key:Mod+A}} | Seleccionar cada anotación de esta hoja |
| Arrastrar una anotación seleccionada | Moverla ({{key:Shift}}: en pasos de 45°) |
| Arrastrar un controlador | Cambiar tamaño o forma ({{key:Shift}}: mantener proporciones, o 45°) |
| Teclas de flecha | Mover la selección un píxel de pantalla ({{key:Shift}}: diez) |
| Doble clic, o {{key:Enter}} | Editar el texto de un cuadro de texto, llamada o nota; en un sello, abrir {{ui:Propiedades}} |
| {{key:Delete}} o {{key:Backspace}} | Eliminar la selección |
| {{key:Esc}} | No seleccionar nada |
| {{key:Mod+Z}} | Deshacer |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |

## Cortar, copiar y pegar

Los mismos comandos están en el grupo {{ui:Editar}} de la barra de herramientas ({{ui:Copiar}}, {{ui:Pegar}}) y en su menú {{ui:Más}}, cada uno con su tecla. Cada uno es un solo paso de deshacer. Ver [Copiar, pegar y duplicar](topic:select-and-edit#copy-paste-and-duplicate).

| Tecla | Qué hace |
|---|---|
| {{key:Mod+X}} | Cortar: copiar la selección y eliminarla |
| {{key:Mod+C}} | Copiar la selección |
| {{key:Mod+V}} | Pegar. Con el puntero sobre la hoja, la copia cae centrada donde apunta; si no, al lado del original. La configuración puede hacer que siempre pegue al lado del original. |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar: la misma posición en la hoja, en esta hoja u otra |
| {{key:Mod+D}} | Duplicar la selección al lado (el portapapeles no cambia) |

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abrir o cerrar esta ayuda (un panel al costado; la hoja sigue usable). También {{ui:Ayuda}} en la barra superior. |
| {{key:Esc}} en la ayuda | Cerrar la ayuda |

:::mac
En la mayoría de teclados Mac, presionar {{key:F1}} con **fn** (o la tecla globo), o usar {{ui:Ayuda}}. Ver [Teclas, mouse y trackpads](common:keys#function-keys-on-a-mac).
:::

## Archivos y hojas

| Tecla | Qué hace |
|---|---|
| {{key:Mod+N}} | Páginas nuevas en blanco (cuando el navegador deja que la página use la tecla; ver [Empezar con páginas en blanco](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Abrir PDF |
| {{key:Mod+P}} | Imprimir (ver [Imprimir y cambiar las páginas](topic:pages-and-printing)) |
| {{key:Mod+F}} | Buscar texto en los planos (ver [Buscar texto](topic:find-text)) |
| {{key:Mod}}+clic en una anotación vinculada | Seguir su enlace a la hoja; {{key:Alt+Left}} vuelve atrás (ver [Enlaces a hojas](topic:sheet-links)) |
| {{key:Mod+S}} | Guardar una copia anotada |
| {{key:PageDown}} / {{key:PageUp}} | Hoja siguiente / anterior |
| {{key:Enter}} en {{ui:Buscar hojas}} | Abrir la primera hoja que coincida |
| {{key:Mod+Enter}} en {{ui:Escribí una respuesta}} | Enviar la respuesta |

## Zoom y desplazamiento

| Tecla o acción | Qué hace |
|---|---|
| Rueda del mouse | Acercar o alejar alrededor del puntero (la rueda nunca desplaza) |
| {{key:Ctrl}} + rueda | Zoom más rápido |
| {{key:Plus}} o {{key:Minus}} (también con {{key:Mod}}) | Acercar o alejar desde el centro; {{key:=}} funciona como más |
| {{key:Mod+0}} | {{ui:Ajustar página}} |
| {{key:Mod+9}} | {{ui:Ajustar ancho}} |
| Arrastrar con el botón central | Desplazar |
| Arrastrar con el botón derecho | Desplazar (cuando no se está en medio de una polilínea) |
| Mantener {{key:Space}} y arrastrar | Desplazar |
| Teclas de flecha sin nada seleccionado | Desplazar |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: normal, pantalla completa, pantalla completa con barras ocultas (tecla Control en toda computadora) |

:::mac
**En trackpad:** desplazar con dos dedos hace zoom. Pellizcar también hace zoom en Chrome, Edge y Firefox. Desplazar con {{key:Space}} mantenida mientras se arrastra, o con la herramienta {{ui:Desplazar}}. Un clic con dos dedos es un clic derecho y termina una polilínea. Control-clic puede actuar aquí como un clic simple y no como clic derecho, así que usar un clic con dos dedos.
:::

:::touch
## Táctil

| Gesto | Qué hace |
|---|---|
| Un dedo | Dibujar con la herramienta actual, o seleccionar |
| Dos dedos | Pellizcar para acercar alrededor de su centro; mover para desplazar |
| Segundo dedo durante un trazo | Cancela el trazo y hace zoom en su lugar |
| Doble toque | Terminar una polilínea, polígono, nube libre o área |

Los puntos de conteo, las notas, los puntos de polilínea y el segundo punto de una herramienta de dos puntos se colocan al levantar el dedo. Ver [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).
:::

## Atajos que mantiene el navegador

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} y {{key:Mod+Q}} pertenecen al navegador. Cerrar la pestaña o la ventana con anotaciones sin guardar las pierde, después de la pregunta "¿Salir del sitio?" del navegador en computadora.
- La mayoría de navegadores usan {{key:Mod+N}} para una ventana nueva, así que en una pestaña del navegador usar {{ui:Nuevo}} de la barra de herramientas; la app de escritorio y Studio pasan la tecla a MarkupCraft.
- MarkupCraft toma {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} y {{key:Mod+Minus}} del navegador mientras la app tiene el teclado, y {{key:Mod+C}} y {{key:Mod+X}} mientras hay anotaciones seleccionadas. {{key:Mod+,}} abre {{ui:Configuración}}. Para hacer zoom en toda la página del navegador, usar el menú del navegador.
- {{key:Mod+9}} salta a la última pestaña del navegador en algunos navegadores antes de que MarkupCraft lo vea. Si eso pasa, usar {{ui:Ajustar ancho}} debajo de la hoja.
- {{key:Esc}} en pantalla completa también sale de pantalla completa.

## Cuando una tecla no hace nada

- **Se escribe en un cuadro.** Hacer clic primero en la hoja. (Un clic con una herramienta de dibujo dibuja; presionar {{key:Esc}} después o usar {{key:Mod+Z}}.)
- **Hay un diálogo abierto.** Las teclas van al diálogo hasta que se cierre.
- **Se acaba de hacer clic en un botón de la barra de herramientas** y las teclas de flecha o {{key:Space}} actúan sobre ese botón. Poner el puntero sobre la hoja y usar la rueda o el botón central, o presionar una letra de herramienta en lugar de hacer clic en botones.

## Dónde está Mover

No hay un comando Mover: seleccionar una anotación y arrastrarla ({{key:Shift}} mantiene pasos de 45°). Un alfiler se mueve con {{ui:Mover chincheta}}, y una página con {{ui:Mover página antes}} o {{ui:Mover página después}}.
