---
title: Marcar una hoja
summary: Dibuje nubes de revisión, llamadas, cuadros de texto, flechas, formas, trazos de pluma y resaltados, y defina su color y línea antes o después.
keywords: marcar, marcado, marca de revisión, nube, nube de revisión, llamada, directriz, cuadro de texto, flecha, línea, rectángulo, elipse, círculo, polilínea, polígono, pluma, a mano alzada, tinta, resaltado, color, grosor de línea
from: 9d6de0ac
---

Todas las herramientas funcionan igual: elíjala, dibuje en la hoja, y la nueva marca queda seleccionada para que la vea en {{ui:Propiedades}}. La herramienta sigue activa para la siguiente. La barra de estado siempre indica lo que la herramienta espera a continuación.

:::touch
En una pantalla táctil, use un dedo para dibujar. Un segundo dedo cancela lo que empezó el primero y, en su lugar, pellizca o encuadra, así que nunca deja una marca por accidente al hacer zoom. Más en [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).
:::

## Nubes de revisión

**Nube de cuadro:** elija {{ui:Nube}} ({{key:C}}) y arrastre un cuadro. Mantenga {{key:Shift}} para hacerlo cuadrado.

**Nube libre** alrededor de una forma irregular:

1. Elija {{ui:Nube libre}} ({{key:Shift+C}}).
2. Haga clic en cada esquina del área.
3. Termine con un doble clic, {{key:Enter}} o un clic derecho. En pantalla táctil, haga doble toque.

Mientras hace clic en puntos, {{key:Backspace}} quita el último punto y {{key:Esc}} cancela toda la forma. Mantenga {{key:Shift}} para que el siguiente lado quede en un múltiplo de 45°. Una nube libre necesita al menos tres puntos.

Los arcos siempre se abultan hacia afuera, y su tamaño depende del grosor de línea: una línea más gruesa da arcos más grandes.

## Llamadas

Una llamada es un cuadro de texto con una directriz que apunta a algo.

1. Elija {{ui:Llamada}} ({{key:K}}).
2. Presione sobre el punto que quiere llamar y arrastre hasta donde debe ir el texto. Suelte.
   Si solo hace clic sin arrastrar, el cuadro se coloca arriba y a la derecha del punto.
3. Escriba el texto. El cuadro crece hacia abajo conforme se ajustan las líneas.
4. Haga clic en cualquier lugar fuera del cuadro, o pulse {{key:Mod+Enter}}, para terminar. {{key:Esc}} descarta la llamada.

Si termina sin escribir nada, no se agrega ninguna llamada ("No se escribió nada, así que no se agregó ninguna llamada.").

Después de dibujarla, selecciónela para mover el cuadro, arrastrar la punta de la directriz o su codo (los dos controladores en forma de rombo), o cambiar el tamaño del cuadro.

## Cuadros de texto

1. Elija {{ui:Texto}} ({{key:T}}).
2. Haga clic donde empieza el texto (obtendrá un cuadro de ancho razonable), o arrastre un cuadro del tamaño que quiera.
3. Escriba y luego haga clic fuera o pulse {{key:Mod+Enter}}.

El texto no tiene borde por defecto. Para agregarle uno, aumente {{ui:Grosor de línea}} en {{ui:Propiedades}}. Para darle fondo, marque {{ui:Relleno}}.

Para cambiar las palabras después: con {{ui:Seleccionar}} activo, haga doble clic en el texto, o selecciónelo y pulse {{key:Enter}}, o elija {{ui:Editar en la hoja}} en {{ui:Propiedades}}. También puede editarlo en el cuadro {{ui:Texto}} de {{ui:Propiedades}}.

## Flechas y líneas

1. Elija {{ui:Flecha}} ({{key:A}}) o {{ui:Línea}} ({{key:L}}).
2. Arrastre desde el inicio hasta el final. O haga clic en el inicio, suelte y haga clic en el final.
3. Mantenga {{key:Shift}} para que quede en un múltiplo de 45°.

La punta de la flecha está en el extremo donde terminó.

## Rectángulos, elipses, polilíneas y polígonos

- {{ui:Rectángulo}} ({{key:R}}) y {{ui:Elipse}} ({{key:E}}): arrastre un cuadro. {{key:Shift}} hace un cuadrado o un círculo. Un clic sin arrastrar no dibuja nada, y la barra de estado pide arrastrar.
- {{ui:Polilínea}} ({{key:Y}}) y {{ui:Polígono}} ({{key:G}}): haga clic en los puntos; termine con un doble clic, {{key:Enter}} o un clic derecho (doble toque en pantalla táctil). {{key:Backspace}} quita el último punto. Un polígono se cierra solo y necesita tres puntos; una polilínea necesita dos.

## Pluma y resaltado

- {{ui:Pluma}} ({{key:P}}): arrastre para dibujar a mano alzada. El trazo se suaviza un poco al soltar.
- {{ui:Resaltado}} ({{key:I}}): igual, pero con un trazo amarillo ancho y translúcido que tiñe el dibujo de abajo en lugar de taparlo.
- Mantenga {{key:Shift}} mientras dibuja para obtener un solo trazo recto desde donde empezó.

El resaltado es un trazo a mano alzada. No se ajusta al texto del PDF.

## Color, línea y relleno

Hay dos formas:

- **Antes de dibujar:** elija la herramienta. Sin nada seleccionado, {{ui:Propiedades}} muestra la configuración de la herramienta «<herramienta>»: {{ui:Color}}, {{ui:Grosor de línea}} (en puntos), {{ui:Relleno}} y {{ui:Opacidad del relleno}} para formas cerradas, {{ui:Opacidad}}, y {{ui:Tamaño del texto}} para texto. Cada nueva marca de ese tipo las usa, y MarkupCraft las recuerda en este navegador.
- **Después de dibujar:** seleccione una o más marcas y cambie los mismos controles en «Estilo». Con varias seleccionadas, el cambio se aplica a todas en un solo paso.

Los valores por defecto: marcas rojas, resaltado amarillo, medidas azules, conteos naranjas y sellos coloreados según su significado.

Los estilos guardados que usa a diario van en el cofre de herramientas: vea [El cofre de herramientas](topic:tool-chest).

## Asunto y comentario

Cada marca también tiene un {{ui:Asunto}} (una etiqueta corta como «Nube» o «RFI», que se muestra en la lista de marcas y en otros visores de PDF) y un {{ui:Comentario}} (notas más largas). Llénelos en {{ui:Propiedades}}. Para una conversación sobre una marca, use respuestas: vea [Estados y respuestas](topic:statuses-and-replies).

## Siguiente

- [Seleccionar, mover y cambiar marcas](topic:select-and-edit)
- [Sellos y notas](topic:stamps-and-notes)
- [Cada tipo de marca](topic:markup-types)
