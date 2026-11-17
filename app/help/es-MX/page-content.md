---
title: Cambiar las líneas, imágenes y texto de la página
summary: Mueva, cambie de tamaño, cambie el color o borre lo que dibuja el propio PDF, mueva los puntos de una línea, reemplace una imagen y cambie las palabras de una línea de texto.
keywords: contenido de la página, contenido base, editar PDF, editar dibujo, vectorial, trayectoria, forma, línea, imagen, reemplazar imagen, texto, palabras, fuente, puntos, nodos, mover, cambiar tamaño, cambiar color, borrar, herramienta de contenido
from: 471d457e
---

Las marcas quedan sobre una hoja. La herramienta {{ui:Contenido}} trabaja sobre la hoja misma: las líneas, imágenes y líneas de texto que dibuja el PDF. Su PDF en esta computadora nunca se cambia: las ediciones forman parte de la copia que guarda.

## Elegir qué cambiar

1. Elija {{ui:Contenido}} en el grupo {{ui:Seleccionar}}, o presione {{key:B}}.
2. En {{ui:Propiedades}}, bajo {{ui:Seleccionar}}, active o desactive {{ui:Formas}}, {{ui:Imágenes}} y {{ui:Texto}}. Solo se pueden elegir los tipos activados, así que puede elegir el texto de un dibujo cargado sin tomar sus líneas.
3. Haga clic en algo para seleccionarlo. Shift+clic agrega o quita. Arrastre un recuadro sobre papel vacío para seleccionar varios: arrastrar hacia la derecha toma lo que queda completamente dentro del recuadro; arrastrar hacia la izquierda toma lo que toque.

Una forma dentro de un área recortada se elige solo donde se ve.

## Mover, cambiar tamaño, cambiar color, borrar

- **Mover:** arrastre un objeto seleccionado, o presione las teclas de flecha (mantenga Shift para pasos más grandes). Mantenga Shift mientras arrastra para mover en línea recta a lo largo o hacia arriba.
- **Cambiar tamaño:** arrastre uno de los ocho cuadros alrededor de la selección. Crece o se encoge desde el lado opuesto. Mantenga Shift para conservar las proporciones.
- **Cambiar color:** para líneas y formas, configure {{ui:Color de línea}}, {{ui:Color de relleno}} y {{ui:Grosor de línea (pt)}} en {{ui:Propiedades}}.
- **Borrar:** presione {{key:Delete}}, o elija {{ui:Borrar de la página}}.
- **Deshacer:** cada cambio es un paso: {{key:Mod+Z}} lo deshace, {{key:Mod+Y}} lo rehace.

{{ui:Dejarlo como estaba}} deshace todos los cambios a los objetos seleccionados de una vez; {{ui:Dejar esta página como estaba}} lo hace para toda la página.

## Copiar, cortar y pegar contenido de la página

Seleccione líneas, imágenes o texto con la herramienta {{ui:Contenido}}, y luego:

- {{key:Mod+C}} copia, {{key:Mod+X}} corta (copia y los saca de la página), {{key:Mod+D}} pone una copia junto a ellos.
- {{key:Mod+V}} pega como contenido de la página, junto al original o donde esté el puntero (como indica [Configuración](topic:settings)); {{key:Mod+Shift+V}} pega exactamente en el mismo lugar. Puede pegar en otra página, en otro PDF abierto o en otra pestaña de MarkupCraft de este navegador.
- El menú del grupo {{ui:Edición}} y el menú del clic derecho tienen los mismos comandos.

Un pegado conserva las líneas como líneas, las palabras como palabras en su propia fuente, y las imágenes como imágenes. Es una sola pieza: muévala, cambie su tamaño con sus cuadros, bórrela o use {{key:Mod+Z}} para quitarla. Pasa a formar parte de la página en la copia que guarda. Lo último que copió, marcas o contenido de página, es lo que pega {{key:Mod+V}}.

Lo que contiene la copia se limita al cuadro alrededor de la selección: lo que MarkupCraft no puede sacar de la copia (vea abajo) y que esté dentro de ese cuadro, también se lleva.

## Mover los puntos de una línea

Haga doble clic en una línea o curva (o selecciónela y elija {{ui:Editar puntos}}). Sus puntos se muestran como cuadros, y sus manijas de curva como círculos. Arrastre un punto o una manija; un punto lleva consigo las manijas cercanas, así la curva mantiene su forma alrededor. Presione {{key:Esc}}, o haga clic fuera de la línea, al terminar.

Los rectángulos no tienen puntos que arrastrar: cambie su tamaño con los cuadros alrededor de ellos.

## Reemplazar una imagen

Seleccione una imagen y elija {{ui:Reemplazar imagen…}}, luego elija un archivo PNG, JPEG o SVG (o un PDF: su primera página). La nueva imagen ocupa el lugar de la anterior, conservando sus propias proporciones.

## Cambiar las palabras de una línea de texto

Haga doble clic en una línea de texto, escriba las palabras nuevas en {{ui:Palabras}} y presione {{key:Enter}}. Las palabras se escriben con la fuente y el tamaño de la línea, y la línea conserva su longitud, así que el texto que sigue no se mueve.

:::note
La mayoría de los PDF llevan solo las letras que usan de cada fuente. Cuando escribe una letra que la copia de la fuente del archivo no tiene, MarkupCraft la imprime en Helvetica y lo indica. {{ui:Propiedades}} muestra qué letras tiene la fuente en el archivo.
:::

El texto se cambia una línea a la vez; no fluye a la línea siguiente.

## Lo que MarkupCraft deja como está

- **Las páginas escaneadas** son una sola imagen: puede mover, cambiar tamaño, reemplazar o borrar la imagen, pero lo que contiene no se puede editar.
- **PDF cifrados y firmados:** cambiar la página rompería una firma, así que la herramienta {{ui:Contenido}} lo indica y no cambia nada. Las marcas siguen funcionando.
- **Áreas de recorte**, objetos divididos entre dos partes del contenido de la página, y mezclas de color que llenan toda un área se quedan como están; MarkupCraft explica por qué cuando lo intenta.
- **Palabras en una fuente estándar que el PDF no describe** (como una fuente Times sin anchos de letra en el archivo) no se pueden cambiar, porque MarkupCraft no podría conservar el espaciado de la línea. La línea sí se puede mover.

## Poner las marcas en la página

Las líneas, rectángulos, elipses, polilíneas, nubes y trazos de pluma que dibujó como marcas pueden pasar a formar parte de la página misma: selecciónelas y elija {{ui:Poner en la página}} en {{ui:Propiedades}}. El texto, los sellos, las imágenes y los colores transparentes siguen siendo marcas.
