---
title: Seleccionar, mover y cambiar marcas
summary: Elija marcas haciendo clic o con una ventana, mueva, cambie de tamaño, desplace un poco, corte, copie, pegue, pegue en el mismo lugar, duplique, elimine y deshaga.
keywords: seleccionar, selección, seleccionar todo, no seleccionar nada, ventana, captura, mover, cambiar tamaño, pinzamientos, manejadores, desplazar con flechas, cortar, copiar, pegar, pegar en el mismo lugar, duplicar, portapapeles, otra pestaña, eliminar, deshacer, rehacer, editar
from: 62c7def3
---

Primero elija {{ui:Seleccionar}} ({{key:V}}). También llega ahí con {{key:Esc}}: la primera pulsación borra la selección y la siguiente vuelve a {{ui:Seleccionar}}.

## Elegir marcas

:::mouse
- **Una marca:** haga clic en ella. Aparecen un recuadro discontinuo y manejadores, y {{ui:Propiedades}} la muestra.
- **Agregar o quitar una:** mantenga pulsado {{key:Shift}} y haga clic.
- **Totalmente dentro de una ventana:** arrastre de izquierda a derecha en una parte vacía de la hoja. Solo se eligen las marcas que quedan completamente dentro del recuadro (contorno continuo).
- **Tocando una ventana:** arrastre de derecha a izquierda. Se eligen las marcas que toca el recuadro (contorno verde discontinuo).
- **Todo lo de esta hoja:** {{key:Mod+A}}, o {{ui:Más}} y luego {{ui:Seleccionar todo}} en el grupo {{ui:Edición}} de la barra de herramientas.
- **Nada:** haga clic en un lugar vacío, pulse {{key:Esc}}, o elija {{ui:Más}} y luego {{ui:No seleccionar nada}}.
:::

:::touch
- **Una marca:** toque la marca.
- **Varias:** arrastre con un dedo sobre una parte vacía de la hoja para trazar una ventana. De izquierda a derecha elige lo que queda totalmente dentro; de derecha a izquierda elige lo que toca.
- Tocar con {{key:Shift}} presionado solo funciona con un teclado conectado. Sin teclado, use una ventana.
- Un dedo nunca desplaza la vista en {{ui:Seleccionar}}; use dos dedos o la herramienta {{ui:Encuadre}}.
:::

Los comentarios de solo lectura que vienen con el archivo muestran un recuadro discontinuo gris y no tienen manejadores. Se pueden elegir y responder, pero no cambiar.

## Mover y cambiar de tamaño

- **Mover:** arrastre una marca seleccionada. Mantenga pulsado {{key:Shift}} para mover solo en múltiplos de 45°. Varias marcas seleccionadas se mueven juntas.
- **Cambiar tamaño:** con una marca seleccionada, arrastre un manejador. Los manejadores cuadrados cambian el tamaño del recuadro (mantenga {{key:Shift}} para conservar sus proporciones); los redondos mueven un punto de esquina de una línea, polilínea, polígono, nube o medición (mantenga {{key:Shift}} para 45°); los manejadores en rombo mueven la punta y el quiebre de una llamada. Los trazos de pluma se escalan desde su recuadro.
- **Desplazar un poco:** pulse las teclas de flecha para mover la selección un píxel de pantalla; mantenga {{key:Shift}} para diez. Cada pulsación es un paso de deshacer.

## Cambiar el texto o el aspecto

- **Texto, llamadas y notas:** haga doble clic en la marca, o pulse {{key:Enter}}, o elija {{ui:Editar en la hoja}} en {{ui:Propiedades}}. Escriba, y luego haga clic fuera o pulse {{key:Mod+Enter}}. {{key:Esc}} cancela la edición.
- **Sellos:** elija otro sello en {{ui:Propiedades}} (el doble clic abre {{ui:Propiedades}} por usted).
- **Estilo:** {{ui:Color}}, {{ui:Grosor de línea}}, {{ui:Relleno}}, {{ui:Opacidad}} y {{ui:Tamaño del texto}} bajo "Estilo" en {{ui:Propiedades}}. Con varias marcas seleccionadas, {{ui:Propiedades}} muestra los tipos que eligió y los cambia todos a la vez.

## Copiar, pegar y duplicar

El grupo {{ui:Edición}} de la barra de herramientas tiene {{ui:Copiar}} y {{ui:Pegar}}; su menú {{ui:Más}} tiene todos estos comandos, cada uno con su tecla.

| Comando | Tecla | Qué hace |
|---|---|---|
| {{ui:Cortar}} | {{key:Mod+X}} | Copia las marcas seleccionadas y las borra |
| {{ui:Copiar}} | {{key:Mod+C}} | Copia las marcas seleccionadas |
| {{ui:Pegar}} | {{key:Mod+V}} | Pone una copia en la hoja en la que está (dónde, abajo) |
| {{ui:Pegar en el mismo lugar}} | {{key:Mod+Shift+V}} | Pone la copia exactamente en el lugar de donde se copió: en la misma hoja, encima del original; en otra hoja, en el mismo lugar del papel |
| {{ui:Duplicar}} | {{key:Mod+D}} | Hace una copia de la selección un poco abajo y a la derecha, sin tocar lo que copió antes |

**Dónde pone la copia {{ui:Pegar}}:**

- {{key:Mod+V}} con el puntero sobre la hoja pone la copia centrada donde está el puntero. Mueva el puntero, pulse {{key:Mod+V}} otra vez y colocará otra.
- El botón {{ui:Pegar}} (entonces el puntero está en la barra de herramientas), o {{key:Mod+V}} con el puntero fuera de la hoja, la pone un poco abajo y a la derecha del original. Cada pegado de la misma copia avanza un poco más, así que las copias nunca se tapan entre sí. En otra hoja, el primer pegado cae donde estaba el original en su hoja. Si ese lugar queda fuera de la vista, la copia cae en el centro de la vista.
- Para que {{key:Mod+V}} siempre pegue junto al original, elija {{ui:Junto a la copia}} en {{ui:Pegar}} dentro de la [configuración de MarkupCraft](topic:settings).

Las marcas pegadas quedan seleccionadas, así que puede arrastrarlas enseguida. Cada cortar, pegar o duplicar es un paso de deshacer: {{key:Mod+Z}} quita todo el pegado.

Las copias pegadas son marcas nuevas: reciben su nombre, la fecha de hoy, el estado Abierto, ningún número de pendiente y una conversación vacía. Su tipo, forma, estilo, texto y comentario se conservan. Los comentarios de solo lectura que vienen con el archivo no se pueden copiar ni cortar.

**Entre pestañas:** lo que copia también se guarda en este navegador, así que otra pestaña de MarkupCraft del mismo navegador puede pegarlo. Copiar marcas no usa el portapapeles de la computadora: no las puede pegar en otro programa, y el texto que copió en otro lugar no se pega como marca.

**Menú del clic derecho:** haga clic derecho en una marca (o en el papel vacío) para {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar aquí}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Guardar la selección como sello…}}, {{ui:Aplanar en la página al guardar}}, {{ui:Insertar una imagen aquí…}} y {{ui:Seleccionar todo}}. Hacer clic derecho en una marca que no está seleccionada la selecciona primero. Arrastrar con el botón derecho sigue encuadrando. En una pantalla táctil, una pulsación prolongada sobre una marca abre el mismo menú (sobre un texto, empieza a editarlo). La tecla de menú o {{key:Shift+F10}} lo abren en la selección.

El contenido de la página seleccionado con la herramienta {{ui:Contenido}} también se copia y se pega: vea [Cambiar las líneas, imágenes y textos propios de la página](topic:page-content).

Para copiar una parte de la página como imagen (un rectángulo, una elipse o una forma libre), o como una superposición transparente para otra hoja u otra app, vea [Copiar un área de la página o una superposición](topic:copy-an-area).

## Eliminar

Pulse {{key:Delete}} o {{key:Backspace}}, elija {{ui:Más}} y luego {{ui:Eliminar}} en la barra de herramientas, o {{ui:Eliminar}} en {{ui:Propiedades}}. La barra de estado indica cuántas se eliminaron. Los comentarios de solo lectura del archivo nunca se eliminan ("se conservan como en el archivo").

## Deshacer y rehacer

- {{key:Mod+Z}} deshace, {{key:Mod+Y}} o {{key:Mod+Shift+Z}} rehace. La barra de herramientas tiene {{ui:Deshacer}} y {{ui:Rehacer}}.
- La barra de estado indica qué se deshizo ("Se deshizo: mover marca.").
- Deshacer cubre cada cambio en marcas, estados, respuestas, elementos pendientes, escalas de hoja y nombres de hoja, hasta 500 pasos.
- El historial se borra al cerrar el juego.

## Copiar marcas a otras hojas

Para poner el mismo sello, nota o nube en varias hojas, seleccione esa marca (o varias marcas) y elija {{ui:Copiar a otras hojas…}} en {{ui:Propiedades}}. Marque las hojas, o {{ui:Todas las hojas}}, y elija {{ui:Copiar}}. Cada hoja recibe una copia en el mismo lugar de la página, firmada con su nombre. Un {{key:Mod+Z}} las quita todas.
