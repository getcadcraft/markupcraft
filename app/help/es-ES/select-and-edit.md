---
title: Seleccionar, mover y modificar anotaciones
summary: Elija anotaciones haciendo clic o con una ventana, muévalas, cambie su tamaño, desplácelas con las flechas, córtelas, cópielas, péguelas, péguelas en el mismo lugar, duplíquelas, bórrelas y deshágalas.
keywords: seleccionar, selección, seleccionar todo, no seleccionar nada, ventana, cruce, mover, cambiar tamaño, agarres, controladores, desplazar ligeramente, cortar, copiar, pegar, pegar en el mismo lugar, duplicar, portapapeles, otra pestaña, borrar, deshacer, rehacer, editar
from: 62c7def3
---

Elija {{ui:Seleccionar}} ({{key:V}}) primero. También se llega pulsando {{key:Esc}}: la primera pulsación borra la selección y la siguiente vuelve a {{ui:Seleccionar}}.

## Elegir anotaciones

:::mouse
- **Una anotación:** haga clic en ella. Aparecen un recuadro discontinuo y controladores, y {{ui:Propiedades}} la muestra.
- **Añadir o quitar una:** mantenga pulsado {{key:Shift}} y haga clic.
- **Totalmente dentro de una ventana:** arrastre de izquierda a derecha sobre una parte vacía de la hoja. Solo se eligen las anotaciones que están completamente dentro del recuadro (contorno continuo).
- **Que toquen una ventana:** arrastre de derecha a izquierda. Se elige todo lo que toque el recuadro (contorno verde discontinuo).
- **Todo lo de esta hoja:** {{key:Mod+A}}, o {{ui:Más}} y luego {{ui:Seleccionar todo}} en el grupo {{ui:Editar}} de la barra de herramientas.
- **Nada:** haga clic en un punto vacío, pulse {{key:Esc}} o elija {{ui:Más}} y luego {{ui:No seleccionar nada}}.
:::

:::touch
- **Una anotación:** toque con el dedo.
- **Varias:** arrastre un dedo sobre una parte vacía de la hoja para dibujar una ventana. De izquierda a derecha elige lo que queda completamente dentro; de derecha a izquierda, lo que toca.
- Tocar con {{key:Shift}} pulsado solo funciona con un teclado conectado. Sin teclado, use una ventana.
- Un dedo nunca desplaza en {{ui:Seleccionar}}; use dos dedos o la herramienta {{ui:Desplazar}}.
:::

Los comentarios de solo lectura que venían con el archivo muestran un recuadro discontinuo gris y no tienen controladores. Se pueden seleccionar y responder, pero no cambiar.

## Mover y cambiar tamaño

- **Mover:** arrastre una anotación seleccionada. Mantenga pulsado {{key:Shift}} para mover solo en múltiplos de 45°. Varias anotaciones seleccionadas se mueven juntas.
- **Cambiar tamaño:** con una anotación seleccionada, arrastre un controlador. Los controladores cuadrados cambian el tamaño del recuadro (mantenga {{key:Shift}} para conservar sus proporciones); los redondos mueven un punto de esquina de una línea, polilínea, polígono, nube o medición (mantenga {{key:Shift}} para 45°); los de rombo mueven la punta y el quiebro de una llamada. Los trazos de lápiz se escalan desde su recuadro.
- **Desplazar ligeramente:** pulse las teclas de flecha para mover la selección un píxel de pantalla; mantenga {{key:Shift}} para diez. Cada pulsación es un paso de deshacer.

## Cambiar el texto o el aspecto

- **Texto, llamadas y notas:** haga doble clic en la anotación, o pulse {{key:Enter}}, o elija {{ui:Editar en la hoja}} en {{ui:Propiedades}}. Escriba y luego haga clic fuera o pulse {{key:Mod+Enter}}. {{key:Esc}} cancela la edición.
- **Sellos:** elija otro sello en {{ui:Propiedades}} (al hacer doble clic se abre {{ui:Propiedades}} automáticamente).
- **Estilo:** {{ui:Color}}, {{ui:Grosor de línea}}, {{ui:Relleno}}, {{ui:Opacidad}} y {{ui:Tamaño del texto}} bajo «Estilo» en {{ui:Propiedades}}. Con varias seleccionadas, {{ui:Propiedades}} muestra los tipos que eligió y los cambia todos a la vez.

## Copiar, pegar y duplicar

El grupo {{ui:Editar}} de la barra de herramientas tiene {{ui:Copiar}} y {{ui:Pegar}}; su menú {{ui:Más}} tiene todas estas órdenes, cada una con su tecla.

| Comando | Tecla | Qué hace |
|---|---|---|
| {{ui:Cortar}} | {{key:Mod+X}} | Copia las anotaciones seleccionadas y las borra |
| {{ui:Copiar}} | {{key:Mod+C}} | Copia las anotaciones seleccionadas |
| {{ui:Pegar}} | {{key:Mod+V}} | Pone una copia en la hoja en la que está (dónde, abajo) |
| {{ui:Pegar en el mismo lugar}} | {{key:Mod+Shift+V}} | Pone la copia exactamente en el punto desde el que se copió: en la misma hoja, encima del original; en otra hoja, en el mismo lugar del papel |
| {{ui:Duplicar}} | {{key:Mod+D}} | Hace una copia de la selección un poco abajo y a la derecha, sin tocar lo copiado antes |

**Dónde pega la copia:**

- {{key:Mod+V}} con el puntero sobre la hoja pone la copia centrada donde está el puntero. Mueva el puntero, pulse {{key:Mod+V}} de nuevo y colocará otra.
- El botón {{ui:Pegar}} (entonces el puntero está en la barra de herramientas), o {{key:Mod+V}} con el puntero fuera de la hoja, la pone un poco abajo y a la derecha del original. Cada pegado de la misma copia avanza un poco más, de modo que las copias nunca se tapan. En otra hoja, el primer pegado cae donde estaba el original en su hoja. Si ese punto queda fuera de vista, la copia cae en el centro de la vista.
- Para que {{key:Mod+V}} pegue siempre junto al original, elija {{ui:Junto a la copia}} en {{ui:Pegar}} dentro de los [ajustes de MarkupCraft](topic:settings).

Las anotaciones pegadas quedan seleccionadas, así que puede arrastrarlas enseguida. Cada cortar, pegar o duplicar es un paso de deshacer: {{key:Mod+Z}} retira todo el pegado.

Las copias pegadas son anotaciones nuevas: reciben su nombre, la fecha de hoy, el estado Abierto, ningún número de pendiente y un hilo vacío. Se conservan su tipo, forma, estilo, texto y comentario. Los comentarios de solo lectura que venían con el archivo no se pueden copiar ni cortar.

**Entre pestañas:** lo que copia también se guarda en este navegador, de modo que otra pestaña de MarkupCraft en el mismo navegador puede pegarlo. Copiar anotaciones no usa el portapapeles del equipo: no puede pegarlas en otro programa, y el texto copiado desde otro lugar no se pega como anotación.

**Menú contextual:** haga clic con el botón derecho sobre una anotación (o sobre papel vacío) para obtener {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar aquí}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Borrar}}, {{ui:Guardar la selección como sello…}}, {{ui:Acoplar a la página al guardar}}, {{ui:Insertar una imagen aquí…}} y {{ui:Seleccionar todo}}. Si hace clic con el botón derecho en una anotación que no está seleccionada, primero la selecciona. Arrastrar con el botón derecho sigue desplazando la vista. En pantalla táctil, una pulsación larga sobre una anotación abre el mismo menú (sobre texto, empieza a editar el texto). La tecla de menú o {{key:Shift+F10}} lo abre en la selección.

El contenido de página seleccionado con la herramienta {{ui:Contenido}} también se copia y pega: véase [Cambiar las líneas, imágenes y texto propios de la página](topic:page-content).

Para copiar una parte de la página como imagen (un rectángulo, una elipse o una forma libre), o como superposición transparente para otra hoja u otra aplicación, véase [Copiar un área de la página, o una superposición](topic:copy-an-area).

## Borrar

Pulse {{key:Delete}} o {{key:Backspace}}, elija {{ui:Más}} y luego {{ui:Borrar}} en la barra de herramientas, o {{ui:Borrar}} en {{ui:Propiedades}}. La barra de estado indica cuántas se borraron. Los comentarios de solo lectura del archivo nunca se borran («se conservan como en el archivo»).

## Deshacer y rehacer

- {{key:Mod+Z}} deshace, {{key:Mod+Y}} o {{key:Mod+Shift+Z}} rehace. La barra de herramientas tiene {{ui:Deshacer}} y {{ui:Rehacer}}.
- La barra de estado indica qué se deshizo («Deshecho: mover anotación.»).
- Deshacer cubre todo cambio en anotaciones, estados, respuestas, pendientes, escalas de hoja y nombres de hoja, hasta 500 pasos.
- El historial se borra al cerrar el conjunto.

## Copiar anotaciones a otras hojas

Para poner el mismo sello, nota o nube en varias hojas, selecciónela (o varias anotaciones) y elija {{ui:Copiar a otras hojas…}} en {{ui:Propiedades}}. Marque las hojas, o {{ui:Todas las hojas}}, y elija {{ui:Copiar}}. Cada hoja recibe una copia en el mismo lugar de la página, firmada con su nombre. Un solo {{key:Mod+Z}} las elimina todas.
