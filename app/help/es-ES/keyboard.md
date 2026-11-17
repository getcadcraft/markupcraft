---
title: Teclado y ratón
summary: Cada tecla, acción de ratón y gesto táctil que entiende MarkupCraft, agrupados, más los atajos que conserva el navegador.
keywords: teclado, atajos, teclas de acceso rápido, teclas, ratón, rueda, clic derecho, botón central, touchpad, táctil, gestos, pellizcar, espacio para desplazar
from: 7bf207ec
---

Los atajos escritos con {{key:Mod}} aceptan ⌘ o Control en un Mac, y Ctrl en Windows y Linux. Las letras de herramienta solo funcionan cuando no está escribiendo en un cuadro; mientras escribe, las letras son simples letras. Véase también [Teclas, ratones y touchpads](common:keys).

## Herramientas

| Tecla | Herramienta |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:H}} | {{ui:Desplazar}} |
| {{key:B}} | {{ui:Contenido}}: las líneas, imágenes y textos propios de la página (véase [Cambiar el contenido propio de la página](topic:page-content)) |
| {{key:P}} | {{ui:Lápiz}} |
| {{key:I}} | {{ui:Resaltar}} |
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

{{ui:Calibrar}} no tiene tecla: use su botón de la barra de herramientas o el botón de escala de la barra de estado. Las letras de herramienta se ignoran mientras se mantiene pulsada {{key:Alt}}.

## Mientras dibuja

| Tecla o acción | Qué hace |
|---|---|
| {{key:Shift}} mientras dibuja | Líneas, flechas, longitudes y lados de polilínea en pasos de 45°; rectángulos, elipses y nubes de cuadro, cuadrados; lápiz y resaltador, un único trazo recto |
| Doble clic, {{key:Enter}} o clic derecho | Termina una polilínea, polígono, nube libre o área |
| {{key:Backspace}} | Elimina el último punto de una polilínea, polígono, nube libre o área |
| {{key:Esc}} | Cancela lo que está dibujando; sin nada en curso, anula la selección; sin nada seleccionado, vuelve a {{ui:Seleccionar}} |
| {{key:Mod+Enter}} | Termina de escribir en un cuadro de texto, llamada o nota (o haga clic fuera de él) |
| {{key:Esc}} mientras escribe | Cancela el texto que estaba escribiendo |
| {{key:Shift}}+clic con {{ui:Contar}} | Elimina el punto más cercano del grupo de recuento seleccionado |

## Selección y edición

| Tecla o acción | Qué hace |
|---|---|
| Clic | Seleccionar una anotación |
| {{key:Shift}}+clic | Añadir o quitar una anotación de la selección |
| Arrastrar de izquierda a derecha sobre la hoja vacía | Seleccionar lo que queda completamente dentro de la ventana |
| Arrastrar de derecha a izquierda sobre la hoja vacía | Seleccionar lo que toca la ventana |
| {{key:Mod+A}} | Seleccionar todas las anotaciones de esta hoja |
| Arrastrar una anotación seleccionada | Moverla ({{key:Shift}}: en pasos de 45°) |
| Arrastrar un controlador | Cambiar el tamaño o la forma ({{key:Shift}}: mantener las proporciones, o 45°) |
| Teclas de flecha | Desplazar la selección un píxel de pantalla ({{key:Shift}}: diez) |
| Doble clic, o {{key:Enter}} | Editar el texto de un cuadro de texto, llamada o nota; en un sello, abrir {{ui:Propiedades}} |
| {{key:Delete}} o {{key:Backspace}} | Eliminar la selección |
| {{key:Esc}} | No seleccionar nada |
| {{key:Mod+Z}} | Deshacer |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |

## Cortar, copiar y pegar

Los mismos comandos están en el grupo {{ui:Editar}} de la barra de herramientas ({{ui:Copiar}}, {{ui:Pegar}}) y en su menú {{ui:Más}}, cada uno con su tecla. Cada uno es un único paso de deshacer. Véase [Copiar, pegar y duplicar](topic:select-and-edit#copy-paste-and-duplicate).

| Tecla | Qué hace |
|---|---|
| {{key:Mod+X}} | Cortar: copiar la selección y eliminarla |
| {{key:Mod+C}} | Copiar la selección |
| {{key:Mod+V}} | Pegar. Con el puntero sobre la hoja, la copia queda centrada donde apunta; si no, junto al original. Los ajustes pueden hacer que siempre se pegue junto al original. |
| {{key:Mod+Shift+V}} | Pegar en el mismo sitio: el mismo lugar de la hoja, en esta hoja u otra |
| {{key:Mod+D}} | Duplicar la selección junto a ella (el portapapeles no se modifica) |

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abrir o cerrar esta ayuda (un panel al lateral; la hoja sigue siendo utilizable). También {{ui:Ayuda}} en la barra superior. |
| {{key:Esc}} en la ayuda | Cerrar la ayuda |

:::mac
En la mayoría de teclados de Mac, pulse {{key:F1}} con **fn** (o la tecla del globo), o use {{ui:Ayuda}}. Véase [Teclas, ratones y touchpads](common:keys#function-keys-on-a-mac).
:::

## Archivos y hojas

| Tecla | Qué hace |
|---|---|
| {{key:Mod+N}} | Páginas nuevas en blanco (cuando el navegador permite que la página use la tecla; véase [Empezar con páginas en blanco](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Abrir PDF |
| {{key:Mod+P}} | Imprimir (véase [Imprimir y cambiar las páginas](topic:pages-and-printing)) |
| {{key:Mod+F}} | Buscar texto en los dibujos (véase [Buscar texto](topic:find-text)) |
| {{key:Mod}}+clic en una anotación con enlace | Seguir el enlace a su hoja; {{key:Alt+Left}} vuelve atrás (véase [Enlaces a hojas](topic:sheet-links)) |
| {{key:Mod+S}} | Guardar una copia anotada |
| {{key:PageDown}} / {{key:PageUp}} | Hoja siguiente / anterior |
| {{key:Enter}} en {{ui:Buscar hojas}} | Abrir la primera hoja que coincida |
| {{key:Mod+Enter}} en {{ui:Escriba una respuesta}} | Enviar la respuesta |

## Zoom y desplazamiento

| Tecla o acción | Qué hace |
|---|---|
| Rueda del ratón | Acercar o alejar alrededor del puntero (la rueda nunca desplaza la página) |
| {{key:Ctrl}} + rueda | Zoom más rápido |
| {{key:Plus}} o {{key:Minus}} (también con {{key:Mod}}) | Acercar o alejar desde el centro; {{key:=}} funciona como más |
| {{key:Mod+0}} | {{ui:Ajustar página}} |
| {{key:Mod+9}} | {{ui:Ajustar ancho}} |
| Arrastrar con el botón central | Desplazar |
| Arrastrar con el botón derecho | Desplazar (cuando no está en mitad de una polilínea) |
| Mantener {{key:Space}} y arrastrar | Desplazar |
| Teclas de flecha sin nada seleccionado | Desplazar |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: normal, pantalla completa, pantalla completa con barras ocultas (tecla Ctrl en todos los equipos) |

:::mac
**En un touchpad:** el desplazamiento con dos dedos hace zoom. Pellizcar también hace zoom en Chrome, Edge y Firefox. Desplace con {{key:Space}} pulsada mientras arrastra, o con la herramienta {{ui:Desplazar}}. Un clic con dos dedos es un clic derecho y termina una polilínea. Aquí, el clic con Control puede actuar como clic simple y no como clic derecho, así que use un clic con dos dedos.
:::

:::touch
## Táctil

| Gesto | Qué hace |
|---|---|
| Un dedo | Dibujar con la herramienta actual, o seleccionar |
| Dos dedos | Pellizcar para hacer zoom alrededor de su punto medio; mover para desplazar |
| Segundo dedo durante un trazo | Cancela el trazo y hace zoom en su lugar |
| Doble toque | Termina una polilínea, polígono, nube libre o área |

Los puntos de recuento, las notas, los puntos de polilínea y el segundo punto de una herramienta de dos puntos se colocan cuando se levanta el dedo. Véase [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).
:::

## Atajos que conserva el navegador

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} y {{key:Mod+Q}} pertenecen al navegador. Cerrar la pestaña o la ventana con anotaciones sin guardar las pierde, tras la pregunta del navegador "¿Salir del sitio?" en un equipo.
- La mayoría de los navegadores reservan {{key:Mod+N}} para una ventana nueva, así que en una pestaña del navegador use {{ui:Nuevo}} de la barra de herramientas; la aplicación de escritorio y Studio pasan la tecla a MarkupCraft.
- MarkupCraft toma {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} y {{key:Mod+Minus}} del navegador mientras la aplicación tiene el teclado, y {{key:Mod+C}} y {{key:Mod+X}} mientras hay anotaciones seleccionadas. {{key:Mod+,}} abre {{ui:Ajustes}}. Para hacer zoom en toda la página del navegador, use el menú del navegador.
- {{key:Mod+9}} salta a la última pestaña del navegador en algunos navegadores antes de que MarkupCraft lo vea. Si ocurre, use {{ui:Ajustar ancho}} bajo la hoja.
- {{key:Esc}} en pantalla completa también sale de la pantalla completa.

## Cuando una tecla no hace nada

- **Está escribiendo en un cuadro.** Haga clic primero en la hoja. (Un clic con una herramienta de dibujo dibuja; pulse {{key:Esc}} después o use {{key:Mod+Z}}.)
- **Hay un diálogo abierto.** Las teclas van al diálogo hasta que se cierre.
- **Acaba de hacer clic en un botón de la barra de herramientas** y las teclas de flecha o {{key:Space}} actúan sobre ese botón. Mueva el puntero sobre la hoja y use la rueda o el botón central, o pulse una letra de herramienta en lugar de hacer clic en los botones.

## Dónde está Mover

No hay un comando Mover: seleccione una anotación y arrástrela ({{key:Shift}} mantiene los pasos de 45°). Un alfiler se mueve con {{ui:Mover chincheta}}, y una página, con {{ui:Mover la página antes}} o {{ui:Mover la página después}}.
