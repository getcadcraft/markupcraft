---
title: Anotar una hoja
summary: Dibuje nubes de revisión, llamadas, cuadros de texto, flechas, formas, trazos de lápiz y resaltados, y ajuste su color y su línea antes o después.
keywords: anotación, marcado, tachado, nube, nube de revisión, llamada, directriz, cuadro de texto, flecha, línea, rectángulo, elipse, círculo, polilínea, polígono, lápiz, a mano alzada, tinta, resaltador, color, grosor de línea
from: 9d6de0ac
---

Todas las herramientas funcionan igual: elíjala, dibuje sobre la hoja, y la nueva anotación queda seleccionada para que la vea en {{ui:Propiedades}}. La herramienta sigue activa para la siguiente. La barra de estado indica siempre lo que espera la herramienta.

:::touch
En una pantalla táctil, use un dedo para dibujar. Un segundo dedo cancela lo que empezó el primero y hace pellizco o desplazamiento en su lugar, así que nunca deja una marca por accidente al hacer zoom. Más en [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).
:::

## Nubes de revisión

**Nube de cuadro:** elija {{ui:Nube}} ({{key:C}}) y arrastre un cuadro. Mantenga {{key:Shift}} para que sea cuadrada.

**Nube libre** alrededor de una forma irregular:

1. Elija {{ui:Nube libre}} ({{key:Shift+C}}).
2. Haga clic en cada esquina de la zona.
3. Termine con un doble clic, {{key:Enter}} o un clic derecho. En táctil, haga doble toque.

Mientras hace clic en los puntos, {{key:Backspace}} elimina el último punto y {{key:Esc}} cancela toda la forma. Mantenga {{key:Shift}} para que el siguiente lado quede en un múltiplo de 45°. Una nube libre necesita al menos tres puntos.

Los arcos de la nube siempre sobresalen hacia fuera, y su tamaño depende del grosor de línea: una línea más gruesa da arcos mayores.

## Llamadas

Una llamada es un cuadro de texto con una directriz que apunta a algo.

1. Elija {{ui:Llamada}} ({{key:K}}).
2. Pulse sobre el punto que quiere señalar y arrastre hasta donde debe ir el texto. Suelte.
   Si solo hace clic sin arrastrar, el cuadro se coloca arriba y a la derecha del punto.
3. Escriba el texto. El cuadro crece hacia abajo a medida que el texto se ajusta.
4. Haga clic en cualquier punto fuera del cuadro, o pulse {{key:Mod+Enter}}, para terminar. {{key:Esc}} descarta la llamada.

Si termina sin escribir nada, no se añade ninguna llamada ("No se ha escrito nada, así que no se añadió ninguna llamada.").

Una vez dibujada, selecciónela para mover el cuadro, arrastrar la punta de la directriz o su codo (los dos controladores en forma de rombo), o cambiar el tamaño del cuadro.

## Cuadros de texto

1. Elija {{ui:Texto}} ({{key:T}}).
2. Haga clic donde empieza el texto (obtendrá un cuadro de ancho razonable), o arrastre un cuadro del tamaño que quiera.
3. Escriba, y después haga clic fuera o pulse {{key:Mod+Enter}}.

El texto no tiene borde por defecto. Para ponérselo, suba {{ui:Grosor de línea}} en {{ui:Propiedades}}. Para darle fondo, marque {{ui:Relleno}}.

Para cambiar las palabras más tarde: con {{ui:Seleccionar}} activo, haga doble clic en el texto, o selecciónelo y pulse {{key:Enter}}, o elija {{ui:Editar en la hoja}} en {{ui:Propiedades}}. También puede editarlo en el cuadro {{ui:Texto}} de {{ui:Propiedades}}.

## Flechas y líneas

1. Elija {{ui:Flecha}} ({{key:A}}) o {{ui:Línea}} ({{key:L}}).
2. Arrastre desde el inicio hasta el final. O haga clic en el inicio, suelte, y haga clic en el final.
3. Mantenga {{key:Shift}} para que quede en un múltiplo de 45°.

La punta de la flecha está en el extremo donde terminó.

## Rectángulos, elipses, polilíneas y polígonos

- {{ui:Rectángulo}} ({{key:R}}) y {{ui:Elipse}} ({{key:E}}): arrastre un cuadro. {{key:Shift}} hace un cuadrado o un círculo. Un clic sin arrastrar no dibuja nada, y la barra de estado indica que hay que arrastrar.
- {{ui:Polilínea}} ({{key:Y}}) y {{ui:Polígono}} ({{key:G}}): haga clic en puntos; termine con un doble clic, {{key:Enter}} o un clic derecho (doble toque en táctil). {{key:Backspace}} elimina el último punto. Un polígono se cierra solo y necesita tres puntos; una polilínea necesita dos.

## Lápiz y resaltador

- {{ui:Lápiz}} ({{key:P}}): arrastre para dibujar a mano alzada. El trazo se suaviza un poco al soltar.
- {{ui:Resaltar}} ({{key:I}}): igual, con un trazo amarillo ancho y translúcido que tiñe el dibujo que hay debajo en lugar de taparlo.
- Mantenga {{key:Shift}} mientras dibuja para obtener un único trazo recto desde donde empezó.

El resaltador es un trazo a mano alzada. No se ajusta al texto del PDF.

## Color, línea y relleno

Hay dos formas:

- **Antes de dibujar:** elija la herramienta. Sin nada seleccionado, {{ui:Propiedades}} muestra los ajustes de la herramienta «<herramienta>»: {{ui:Color}}, {{ui:Grosor de línea}} (en puntos), {{ui:Relleno}} y {{ui:Opacidad del relleno}} para formas cerradas, {{ui:Opacidad}}, y {{ui:Tamaño del texto}} para el texto. Cada nueva anotación de ese tipo los usa, y MarkupCraft los recuerda en este navegador.
- **Después de dibujar:** seleccione una o varias anotaciones y cambie los mismos controles en «Estilo». Con varias seleccionadas, el cambio se aplica a todas en un solo paso.

Los valores por defecto son: anotaciones en rojo, resaltador amarillo, mediciones en azul, recuentos en naranja y sellos coloreados según su significado.

Los estilos guardados que usa a diario van en la caja de herramientas: véase [La caja de herramientas](topic:tool-chest).

## Asunto y comentario

Cada anotación también tiene un {{ui:Asunto}} (una etiqueta corta como «Nube» o «RFI», que aparece en la lista de anotaciones y en otros visores de PDF) y un {{ui:Comentario}} (notas más largas). Rellénelos en {{ui:Propiedades}}. Para una conversación sobre una anotación, use las respuestas: véase [Estados y respuestas](topic:statuses-and-replies).

## Siguiente

- [Seleccionar, mover y cambiar anotaciones](topic:select-and-edit)
- [Sellos y notas](topic:stamps-and-notes)
- [Todos los tipos de anotación](topic:markup-types)
