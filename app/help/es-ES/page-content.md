---
title: Cambiar las líneas, imágenes y texto propios de la página
summary: Mueva, cambie de tamaño, cambie el color o borre lo que dibuja el propio PDF, mueva los puntos de una línea, sustituya una imagen y cambie las palabras de una línea de texto.
keywords: contenido de página, contenido base, editar PDF, editar dibujo, vector, trazado, forma, línea, imagen, sustituir imagen, texto, palabras, fuente, puntos, nodos, mover, cambiar tamaño, cambiar color, borrar, herramienta de contenido
from: 471d457e
---

Las anotaciones se colocan sobre una hoja. La herramienta {{ui:Contenido}} trabaja sobre la propia hoja: las líneas, imágenes y líneas de texto que dibuja el PDF. Su PDF en este ordenador nunca se cambia: las ediciones forman parte de la copia que guarda.

## Elegir qué cambiar

1. Elija {{ui:Contenido}} en el grupo {{ui:Seleccionar}}, o pulse {{key:B}}.
2. En {{ui:Propiedades}}, bajo {{ui:Seleccionar}}, active o desactive {{ui:Formas}}, {{ui:Imágenes}} y {{ui:Texto}}. Solo se pueden elegir los tipos activados, así puede elegir el texto de un dibujo cargado sin atrapar sus líneas.
3. Haga clic en algo para seleccionarlo. Shift+clic añade o quita. Para seleccionar varios, arrastre un recuadro sobre papel vacío: arrastrar hacia la derecha toma lo que queda completamente dentro del recuadro, y arrastrar hacia la izquierda toma lo que toca.

Una forma dentro de un área recortada solo se elige donde se ve.

## Mover, cambiar tamaño, cambiar color, borrar

- **Mover:** arrastre un objeto seleccionado, o pulse las teclas de flecha (mantenga Shift para pasos mayores). Mantenga Shift mientras arrastra para mover en línea recta horizontal o vertical.
- **Cambiar tamaño:** arrastre uno de los ocho cuadrados alrededor de la selección. Crece o se reduce desde el lado opuesto. Mantenga Shift para conservar las proporciones.
- **Cambiar color:** para líneas y formas, ajuste {{ui:Color de la línea}}, {{ui:Color de relleno}} y {{ui:Grosor de línea (pt)}} en {{ui:Propiedades}}.
- **Borrar:** pulse {{key:Delete}}, o elija {{ui:Borrar de la página}}.
- **Deshacer:** cada cambio es un paso: {{key:Mod+Z}} lo deshace y {{key:Mod+Y}} lo rehace.

{{ui:Devolver a como estaba}} deshace de una vez todos los cambios en los objetos seleccionados; {{ui:Devolver esta página a como estaba}} lo hace para toda la página.

## Copiar, cortar y pegar contenido de página

Seleccione líneas, imágenes o texto con la herramienta {{ui:Contenido}}, y luego:

- {{key:Mod+C}} copia, {{key:Mod+X}} corta (copia y los quita de la página), y {{key:Mod+D}} pone una copia junto a ellos.
- {{key:Mod+V}} pega como contenido de página, junto al original o donde esté el puntero (como indican los [Ajustes](topic:settings)); {{key:Mod+Shift+V}} pega exactamente en el mismo lugar. Puede pegar en otra página, en otro PDF abierto o en otra pestaña de MarkupCraft de este navegador.
- Los menús del grupo {{ui:Editar}} y el menú del botón derecho tienen los mismos comandos.

Un pegado conserva las líneas como líneas, las palabras como palabras en su propia fuente, y las imágenes como imágenes. Es una sola pieza: muévala, cambie su tamaño con sus cuadrados, bórrela, o deshágala con {{key:Mod+Z}}. Pasa a formar parte de la página en la copia que guarde. Lo último que copió, anotaciones o contenido de página, es lo que {{key:Mod+V}} pega.

Lo que contiene la copia se recorta al cuadro alrededor de la selección: lo que MarkupCraft no puede sacar de la copia (vea abajo) y que está dentro de ese cuadro, también se incluye.

## Mover los puntos de una línea

Haga doble clic en una línea o curva (o selecciónela y elija {{ui:Editar puntos}}). Sus puntos se muestran como cuadrados y sus manejadores de curva como círculos. Arrastre un punto o un manejador; un punto lleva consigo los manejadores cercanos, para que la curva conserve su forma alrededor. Pulse {{key:Esc}}, o haga clic fuera de la línea, al terminar.

Los rectángulos no tienen puntos que arrastrar: cambie su tamaño con los cuadrados que los rodean.

## Sustituir una imagen

Seleccione una imagen y elija {{ui:Sustituir imagen…}}, y luego elija un archivo PNG, JPEG o SVG (o un PDF: su primera página). La nueva imagen ocupa el lugar de la anterior, conservando sus propias proporciones.

## Cambiar las palabras de una línea de texto

Haga doble clic en una línea de texto, escriba las palabras nuevas en {{ui:Palabras}} y pulse {{key:Enter}}. Las palabras se escriben con la fuente y el tamaño de la línea, y la línea conserva su longitud, así que el texto que sigue no se mueve.

:::note
La mayoría de los PDF solo incluyen las letras que usan de cada fuente. Cuando escribe una letra que la copia de la fuente del archivo no tiene, MarkupCraft la imprime en Helvetica y lo indica. {{ui:Propiedades}} muestra qué letras tiene la fuente en el archivo.
:::

El texto se cambia una línea cada vez; no fluye a la línea siguiente.

## Lo que MarkupCraft deja como está

- **Las páginas escaneadas** son una sola imagen: puede mover, cambiar de tamaño, sustituir o borrar la imagen, pero no editar lo que contiene.
- **PDF cifrados y firmados:** cambiar la página rompería una firma, así que la herramienta {{ui:Contenido}} lo indica y no cambia nada. Las anotaciones siguen funcionando.
- **Áreas de recorte, objetos divididos entre dos partes del contenido de la página, y mezclas de color que llenan toda un área** se quedan como están; MarkupCraft explica el motivo cuando lo intenta.
- **Palabras en una fuente estándar que el PDF no describe** (como una fuente Times sin anchos de letra en el archivo) no se pueden cambiar, porque MarkupCraft no podría mantener el espaciado de la línea. La línea sí se puede mover.

## Poner anotaciones en la página

Las líneas, rectángulos, elipses, polilíneas, nubes y trazos de lápiz que dibujó como anotaciones pueden pasar a formar parte de la propia página: selecciónelos y elija {{ui:Pasar a la página}} en {{ui:Propiedades}}. El texto, los sellos, las imágenes y los colores semitransparentes siguen siendo anotaciones.
