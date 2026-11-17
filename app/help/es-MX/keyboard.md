---
title: Teclado y ratón
summary: Cada tecla, acción del ratón y gesto táctil que entiende MarkupCraft, agrupados, más los atajos que conserva el navegador.
keywords: teclado, atajos, teclas de acceso rápido, teclas, ratón, rueda, clic derecho, botón central, panel táctil, táctil, gestos, pellizcar, encuadre con espacio
from: 7bf207ec
---

Los atajos escritos con {{key:Mod}} aceptan ⌘ o Control en una Mac, y Ctrl en Windows y Linux. Las letras de herramientas funcionan solo cuando no escribe en un cuadro; mientras escribe, las letras son solo letras. Vea también [Teclas, ratón y panel táctil](common:keys).

## Herramientas

| Tecla | Herramienta |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:H}} | {{ui:Encuadre}} |
| {{key:B}} | {{ui:Contenido}}: las líneas, imágenes y texto propios de la página (vea [Cambiar el contenido propio de la página](topic:page-content)) |
| {{key:P}} | {{ui:Pluma}} |
| {{key:I}} | {{ui:Resaltado}} |
| {{key:L}} | {{ui:Línea}} |
| {{key:A}} | {{ui:Flecha}} |
| {{key:R}} | {{ui:Rectángulo}} |
| {{key:E}} | {{ui:Elipse}} |
| {{key:Y}} | {{ui:Polilínea}} |
| {{key:G}} | {{ui:Polígono}} |
| {{key:C}} | {{ui:Nube}} (arrastre un cuadro) |
| {{key:Shift+C}} | {{ui:Nube libre}} |
| {{key:K}} | {{ui:Llamada}} |
| {{key:T}} | {{ui:Texto}} |
| {{key:N}} | {{ui:Nota}} |
| {{key:S}} | {{ui:Sello}} |
| {{key:M}} | {{ui:Longitud}} |
| {{key:Q}} | {{ui:Área}} |
| {{key:U}} | {{ui:Conteo}} |
| {{key:O}} | {{ui:Arco}} |
| {{key:X}} | {{ui:Ángulo}} |

{{ui:Calibrar}} no tiene tecla: use su botón de la barra de herramientas o el botón de escala de la barra de estado. Las letras de herramientas se ignoran mientras se mantiene {{key:Alt}}.

## Mientras dibuja

| Tecla o acción | Qué hace |
|---|---|
| {{key:Shift}} mientras dibuja | Líneas, flechas, longitudes y lados de polilínea en pasos de 45°; rectángulos, elipses y nubes de cuadro cuadrados; pluma y resaltado, un solo trazo recto |
| Doble clic, {{key:Enter}} o clic derecho | Termina una polilínea, polígono, nube libre o área |
| {{key:Backspace}} | Quita el último punto de una polilínea, polígono, nube libre o área |
| {{key:Esc}} | Cancela lo que dibuja; si no hay nada en curso, borra la selección; si no hay nada seleccionado, regresa a {{ui:Seleccionar}} |
| {{key:Mod+Enter}} | Termina de escribir en un cuadro de texto, llamada o nota (o haga clic fuera de él) |
| {{key:Esc}} mientras escribe | Cancela el texto que estaba escribiendo |
| {{key:Shift}}-clic con {{ui:Conteo}} | Quita el punto más cercano del grupo de conteo seleccionado |

## Seleccionar y editar

| Tecla o acción | Qué hace |
|---|---|
| Clic | Selecciona una marca |
| {{key:Shift}}-clic | Agrega o quita una marca de la selección |
| Arrastre de izquierda a derecha sobre hoja vacía | Selecciona lo que queda completamente dentro de la ventana |
| Arrastre de derecha a izquierda sobre hoja vacía | Selecciona lo que toca la ventana |
| {{key:Mod+A}} | Selecciona todas las marcas de esta hoja |
| Arrastre una marca seleccionada | La mueve ({{key:Shift}}: en pasos de 45°) |
| Arrastre un controlador | Cambia el tamaño o la forma ({{key:Shift}}: mantiene proporciones, o 45°) |
| Teclas de flecha | Desplaza la selección un píxel de pantalla ({{key:Shift}}: diez) |
| Doble clic, o {{key:Enter}} | Edita el texto de un cuadro de texto, llamada o nota; en un sello, abre {{ui:Propiedades}} |
| {{key:Delete}} o {{key:Backspace}} | Borra la selección |
| {{key:Esc}} | No selecciona nada |
| {{key:Mod+Z}} | Deshacer |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |

## Cortar, copiar y pegar

Los mismos comandos están en el grupo {{ui:Edición}} de la barra de herramientas ({{ui:Copiar}}, {{ui:Pegar}}) y en su menú {{ui:Más}}, cada uno con su tecla. Cada uno es un solo paso de deshacer. Vea [Copiar, pegar y duplicar](topic:select-and-edit#copy-paste-and-duplicate).

| Tecla | Qué hace |
|---|---|
| {{key:Mod+X}} | Cortar: copia la selección y la borra |
| {{key:Mod+C}} | Copia la selección |
| {{key:Mod+V}} | Pega. Con el puntero sobre la hoja, la copia queda centrada donde apunta; si no, junto al original. La configuración puede hacer que siempre se pegue junto al original. |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar: el mismo punto de la hoja, en esta hoja o en otra |
| {{key:Mod+D}} | Duplica la selección junto a ella (el portapapeles no cambia) |

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abre o cierra esta ayuda (un panel al costado; la hoja sigue disponible). También {{ui:Ayuda}} en la barra superior. |
| {{key:Esc}} en la ayuda | Cierra la ayuda |

:::mac
En la mayoría de los teclados de Mac, pulse {{key:F1}} con **fn** (o la tecla de globo), o use {{ui:Ayuda}}. Vea [Teclas, ratón y panel táctil](common:keys#function-keys-on-a-mac).
:::

## Archivos y hojas

| Tecla | Qué hace |
|---|---|
| {{key:Mod+N}} | Páginas nuevas en blanco (cuando el navegador deja que la página use la tecla; vea [Empezar con páginas en blanco](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | Abre PDF |
| {{key:Mod+P}} | Imprime (vea [Imprimir y cambiar las páginas](topic:pages-and-printing)) |
| {{key:Mod+F}} | Busca texto en los dibujos (vea [Buscar texto](topic:find-text)) |
| {{key:Mod}}+clic en una marca vinculada | Sigue el vínculo a su hoja; {{key:Alt+Left}} regresa (vea [Vínculos a hojas](topic:sheet-links)) |
| {{key:Mod+S}} | Guarda una copia marcada |
| {{key:PageDown}} / {{key:PageUp}} | Hoja siguiente / anterior |
| {{key:Enter}} en {{ui:Buscar hojas}} | Abre la primera hoja que coincida |
| {{key:Mod+Enter}} en {{ui:Escriba una respuesta}} | Envía la respuesta |

## Zoom y encuadre

| Tecla o acción | Qué hace |
|---|---|
| Rueda del ratón | Acerca o aleja alrededor del puntero (la rueda nunca desplaza) |
| {{key:Ctrl}} + rueda | Zoom más rápido |
| {{key:Plus}} o {{key:Minus}} (también con {{key:Mod}}) | Acerca o aleja alrededor del centro; {{key:=}} funciona como más |
| {{key:Mod+0}} | {{ui:Ajustar página}} |
| {{key:Mod+9}} | {{ui:Ajustar ancho}} |
| Arrastre con el botón central | Encuadra |
| Arrastre con el botón derecho | Encuadra (cuando no está en medio de una polilínea) |
| Mantenga {{key:Space}} y arrastre | Encuadra |
| Teclas de flecha sin nada seleccionado | Encuadra |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: normal, pantalla completa, pantalla completa con barras ocultas (tecla Control en cualquier computadora) |

:::mac
**En el panel táctil:** el desplazamiento con dos dedos hace zoom. El pellizco también hace zoom en Chrome, Edge y Firefox. Encuadre con {{key:Space}} mantenido mientras arrastra, o con la herramienta {{ui:Encuadre}}. Un clic con dos dedos es un clic derecho y termina una polilínea. Aquí, el control-clic puede actuar como un clic simple y no como clic derecho, así que use un clic con dos dedos.
:::

:::touch
## Táctil

| Gesto | Qué hace |
|---|---|
| Un dedo | Dibuja con la herramienta actual, o selecciona |
| Dos dedos | Pellizque para hacer zoom alrededor de su punto medio; muévalos para encuadrar |
| Segundo dedo durante un trazo | Cancela el trazo y hace zoom en su lugar |
| Doble toque | Termina una polilínea, polígono, nube libre o área |

Los conteos de puntos, notas, puntos de polilínea y el segundo punto de una herramienta de dos puntos se colocan al levantar el dedo. Vea [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).
:::

## Atajos que conserva el navegador

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} y {{key:Mod+Q}} pertenecen al navegador. Cerrar la pestaña o la ventana con marcas sin guardar las pierde, después de la pregunta «¿Salir del sitio?» del navegador en una computadora.
- La mayoría de los navegadores reservan {{key:Mod+N}} para una ventana nueva, así que en una pestaña del navegador use {{ui:Nuevo}} de la barra de herramientas; la app de escritorio y Studio pasan la tecla a MarkupCraft.
- MarkupCraft toma {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} y {{key:Mod+Minus}} lejos del navegador mientras la app tiene el teclado, y {{key:Mod+C}} y {{key:Mod+X}} cuando hay marcas seleccionadas. {{key:Mod+,}} abre {{ui:Configuración}}. Para hacer zoom en toda la página del navegador, use el menú del navegador.
- {{key:Mod+9}} salta a la última pestaña del navegador en algunos navegadores antes de que MarkupCraft lo reciba. Si pasa, use {{ui:Ajustar ancho}} debajo de la hoja.
- {{key:Esc}} en pantalla completa también sale de pantalla completa.

## Cuando una tecla no hace nada

- **Está escribiendo en un cuadro.** Haga clic primero en la hoja. (Un clic con una herramienta de dibujo dibuja; pulse {{key:Esc}} después o use {{key:Mod+Z}}.)
- **Hay un cuadro de diálogo abierto.** Las teclas van al cuadro hasta que se cierre.
- **Acaba de hacer clic en un botón de la barra de herramientas**, y las teclas de flecha o {{key:Space}} actúan sobre ese botón. Mueva el puntero sobre la hoja y use la rueda o el botón central, o pulse una letra de herramienta en lugar de hacer clic en botones.

## Dónde está Desplazar

No hay un comando Desplazar: seleccione una marca y arrástrela ({{key:Shift}} mantiene pasos de 45°). Un marcador se mueve con {{ui:Mover marcador}}, y una página con {{ui:Mover la página antes}} o {{ui:Mover la página después}}.
