---
title: Anotar una hoja
summary: Dibujar nubes de revisión, llamadas, cuadros de texto, flechas, formas, trazos de lápiz y resaltados, y definir su color y su línea antes o después.
keywords: anotación, marcado, redline, nube, nube de revisión, llamada, guía, cuadro de texto, flecha, línea, rectángulo, elipse, círculo, polilínea, polígono, lápiz, a mano alzada, tinta, resaltador, color, ancho de línea
from: 9d6de0ac
---

Todas las herramientas funcionan igual: elegirla, dibujar en la hoja, y la nueva anotación queda seleccionada para que se vea en {{ui:Propiedades}}. La herramienta sigue activa para la siguiente. La barra de estado siempre dice lo que la herramienta espera a continuación.

:::touch
En pantalla táctil, usar un dedo para dibujar. Un segundo dedo cancela lo que empezó el primero y hace zoom o desplaza en su lugar, así nunca se deja una marca por accidente al hacer zoom. Más en [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).
:::

## Nubes de revisión

**Nube de cuadro:** elegir {{ui:Nube}} ({{key:C}}) y arrastrar un cuadro. Mantener {{key:Shift}} para hacerla cuadrada.

**Nube libre** alrededor de una forma irregular:

1. Elegir {{ui:Nube libre}} ({{key:Shift+C}}).
2. Hacer clic en cada esquina del área.
3. Terminar con un doble clic, {{key:Enter}} o un clic derecho. En táctil, doble toque.

Mientras se hace clic en puntos, {{key:Backspace}} quita el último punto y {{key:Esc}} cancela toda la forma. Mantener {{key:Shift}} para que el próximo lado quede en un múltiplo de 45°. Una nube libre necesita al menos tres puntos.

Las ondas siempre se abultan hacia afuera, y su tamaño sigue el ancho de línea: una línea más gruesa da arcos más grandes.

## Llamadas

Una llamada es un cuadro de texto con una guía que apunta a algo.

1. Elegir {{ui:Llamada}} ({{key:K}}).
2. Presionar sobre el punto que se quiere señalar y arrastrar hasta donde debe ir el texto. Soltar.
   Si solo se hace clic sin arrastrar, el cuadro se coloca arriba y a la derecha del punto.
3. Escribir el texto. El cuadro crece hacia abajo a medida que las líneas se ajustan.
4. Hacer clic en cualquier parte fuera del cuadro, o presionar {{key:Mod+Enter}}, para terminar. {{key:Esc}} descarta la llamada.

Si se termina sin escribir nada, no se agrega ninguna llamada ("Nada escrito, así que no se agregó ninguna llamada.").

Una vez dibujada, seleccionarla para mover el cuadro, arrastrar la punta de la guía o su codo (los dos controladores en forma de rombo), o cambiar el tamaño del cuadro.

## Cuadros de texto

1. Elegir {{ui:Texto}} ({{key:T}}).
2. Hacer clic donde empieza el texto (se obtiene un cuadro de ancho razonable), o arrastrar un cuadro del tamaño que se quiera.
3. Escribir, luego hacer clic afuera o presionar {{key:Mod+Enter}}.

El texto no tiene borde por defecto. Para ponerle uno, subir {{ui:Ancho de línea}} en {{ui:Propiedades}}. Para ponerle fondo, marcar {{ui:Relleno}}.

Para cambiar las palabras después: con {{ui:Seleccionar}} activo, hacer doble clic en el texto, o seleccionarlo y presionar {{key:Enter}}, o elegir {{ui:Editar en la hoja}} en {{ui:Propiedades}}. También se puede editar en el cuadro {{ui:Texto}} de {{ui:Propiedades}}.

## Flechas y líneas

1. Elegir {{ui:Flecha}} ({{key:A}}) o {{ui:Línea}} ({{key:L}}).
2. Arrastrar desde el inicio hasta el final. O hacer clic en el inicio, soltar, y hacer clic en el final.
3. Mantener {{key:Shift}} para que quede en un múltiplo de 45°.

La punta de la flecha está en el extremo donde se terminó.

## Rectángulos, elipses, polilíneas y polígonos

- {{ui:Rectángulo}} ({{key:R}}) y {{ui:Elipse}} ({{key:E}}): arrastrar un cuadro. {{key:Shift}} hace un cuadrado o un círculo. Un clic sin arrastrar no dibuja nada, y la barra de estado pide arrastrar.
- {{ui:Polilínea}} ({{key:Y}}) y {{ui:Polígono}} ({{key:G}}): hacer clic en puntos; terminar con doble clic, {{key:Enter}} o clic derecho (doble toque en táctil). {{key:Backspace}} quita el último punto. Un polígono se cierra solo y necesita tres puntos; una polilínea necesita dos.

## Lápiz y resaltador

- {{ui:Lápiz}} ({{key:P}}): arrastrar para dibujar a mano alzada. El trazo se suaviza un poco al soltar.
- {{ui:Resaltado}} ({{key:I}}): igual, con un trazo amarillo ancho y transparente que tiñe el dibujo que está debajo en lugar de taparlo.
- Mantener {{key:Shift}} mientras se dibuja para obtener un solo trazo recto desde donde se empezó.

El resaltador es un trazo a mano alzada. No se ajusta al texto del PDF.

## Color, línea y relleno

Hay dos formas:

- **Antes de dibujar:** elegir la herramienta. Sin nada seleccionado, {{ui:Propiedades}} muestra la configuración de "<herramienta>": {{ui:Color}}, {{ui:Ancho de línea}} (en puntos), {{ui:Relleno}} y {{ui:Opacidad del relleno}} para formas cerradas, {{ui:Opacidad}}, y {{ui:Tamaño de texto}} para texto. Toda nueva anotación de ese tipo los usa, y MarkupCraft los recuerda en este navegador.
- **Después de dibujar:** seleccionar una o más anotaciones y cambiar los mismos controles en "Estilo". Con varias seleccionadas, el cambio se aplica a todas en un solo paso.

Los valores por defecto: anotaciones en rojo, resaltador amarillo, medidas en azul, conteos en naranja, y sellos coloreados según su significado.

Los estilos guardados que se usan todos los días van en la caja de herramientas: ver [La caja de herramientas](topic:tool-chest).

## Asunto y comentario

Cada anotación también tiene un {{ui:Asunto}} (una etiqueta corta como "Nube" o "RFI", que se muestra en la lista de anotaciones y en otros visores de PDF) y un {{ui:Comentario}} (notas más largas). Completarlos en {{ui:Propiedades}}. Para una conversación sobre una anotación, usar respuestas: ver [Estados y respuestas](topic:statuses-and-replies).

## Siguiente

- [Seleccionar, mover y cambiar anotaciones](topic:select-and-edit)
- [Sellos y notas](topic:stamps-and-notes)
- [Cada tipo de anotación](topic:markup-types)
