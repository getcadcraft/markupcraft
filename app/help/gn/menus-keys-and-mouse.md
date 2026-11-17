---
title: Menús, teclas y mouse
summary: Elegir la barra de herramientas propia de MarkupCraft, una barra de menús de revisión de PDF o una cinta; dar a cualquier herramienta tu propia tecla, mover herramientas entre menús y definir qué hacen la rueda y los botones del mouse.
keywords: estilo de menú, menús, barra de menús, barra de herramientas, cinta, pestañas, revisión de PDF, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, mouse, rueda, invertir, dirección de zoom, botón central, botón derecho, desplazar, exportar, importar, cambiar, familiar
from: 081438a6
---

Las herramientas de MarkupCraft son las mismas por donde se las llame. Un **estilo de menú** solo decide dónde están en pantalla, cómo se llaman allí y qué teclas las eligen. Elegir uno en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menús, teclas y mouse}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué se obtiene |
|---|---|
| {{ui:MarkupCraft}} | La barra de herramientas propia de MarkupCraft ({{ui:Archivo}}, {{ui:Seleccionar}}, Dibujar, Revisar, Anotar, {{ui:Medir}}, {{ui:Editar}}) y sus teclas de una letra: {{key:V}} seleccionar, {{key:H}} desplazar, {{key:P}} lápiz, {{key:I}} resaltador, {{key:L}} línea, {{key:A}} flecha, {{key:R}} rectángulo, {{key:E}} elipse, {{key:C}} nube, {{key:K}} llamada, {{key:T}} texto, {{key:N}} nota, {{key:S}} sello, {{key:M}} longitud, {{key:Q}} área, {{key:U}} conteo. El inicio. |
| {{ui:Revisión de PDF}} | Una barra de menús ({{ui:Archivo}}, {{ui:Editar}}, {{ui:Vista}}, {{ui:Documento}}, {{ui:Anotación}}, {{ui:Medir}}, {{ui:Revisión}}, {{ui:Ventana}}) sobre una fila de herramientas de revisión, con teclas ordenadas como las ponen los programas de revisión de PDF: {{key:V}} seleccionar, {{key:Shift+V}} desplazar, {{key:H}} resaltador, {{key:Q}} llamada, {{key:N}} polígono, {{key:Shift+N}} polilínea, {{key:Shift+T}} nota, {{key:Shift+A}} arco, y las medidas en {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrar, {{key:Alt+Shift+L}} longitud, {{key:Alt+Shift+G}} ángulo, {{key:Alt+Shift+A}} área, {{key:Alt+Shift+C}} conteo. {{key:Alt+L}} abre la lista de anotaciones. El botón central desplaza; el clic derecho no. |
| {{ui:Cinta}} | Pestañas con nombre según el trabajo: {{ui:Anotar}} (seleccionar, dibujar, nubes, llamadas, texto, notas, sellos), {{ui:Medir}}, {{ui:Editar}}, {{ui:Revisión}} (la lista de anotaciones y sus exportaciones, las incidencias BCF, la lista de pendientes, los registros de campo, la caja de herramientas, comparar), {{ui:Páginas}} y {{ui:Vista}}, con {{ui:Archivo}} y botones rápidos para abrir, guardar, deshacer y rehacer. Las herramientas mantienen las teclas de una letra de MarkupCraft. Un botón de un panel que no está abierto abre antes ese panel. |

Todo estilo mantiene las teclas {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} para ajustar página y {{key:Mod+9}} para ajustar ancho; {{key:PageUp}} y {{key:PageDown}} cambian de hoja.

:::tip
Una tecla que pertenece al diseño propio de MarkupCraft, pero no al estilo elegido, no hace nada, y la barra de estado dice dónde fue a parar su herramienta ("En Revisión de PDF, Llamada es Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su función. Mientras se escribe en un cuadro de texto, una llamada o una nota, toda tecla es del texto, y los números escritos al dibujar siguen abriendo el cuadro de longitud.
:::

## Hacerlo propio

1. Elegir el estilo más cercano a lo que se quiere, y luego hacer clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, buscar una herramienta (ayuda el cuadro de búsqueda). {{ui:Emoĩ clave}} y presionar la tecla, o dos teclas seguidas para una tecla de dos letras. Hacer clic en una tecla para quitarla.
3. Con la barra de menús, {{ui:Dónde está}} mueve la herramienta a otro menú, o a {{ui:Solo teclas}}.
4. En {{ui:Mouse}}, definir la rueda y los botones que desplazan la hoja.
5. Ponerle un nombre y hacer clic en {{ui:Guardar}}.

Guardar un estilo integrado crea una copia propia ("Mi Revisión de PDF"); el integrado nunca cambia. Una tecla asignada a dos herramientas se muestra en rojo y hay que corregirla antes de poder guardar.

## Mouse

- **Rueda del mouse**: {{ui:Subir la rueda acerca}} (el inicio) o {{ui:Subir la rueda aleja}}, y qué tan rápido. Un pellizco en trackpad siempre hace zoom en el sentido en que se mueven los dedos.
- **Desplazar la hoja con**: el botón central, el derecho, o ambos. {{key:Space}} y arrastrar, y la herramienta {{ui:Desplazar}}, siempre desplazan; el botón izquierdo, en cambio, dibuja y selecciona, así que marcarlo no cambia nada aquí.
- MarkupCraft no tiene vista 3D, así que los botones 3D no hacen nada aquí.

## Llevarlo contigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a las herramientas propias de MarkupCraft: lo demás se deja afuera y se cuenta en la barra de estado. {{ui:Eliminar este estilo}} quita uno propio.

:::note
Estos ajustes quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}} bajo las tarjetas de estilo hace que cada app abra en su estilo correspondiente: {{ui:Revisión de PDF}} va con los estilos de barra de menús de las otras apps, {{ui:Cinta}} con sus cintas, y la barra propia de MarkupCraft con las suyas. Una app sin estilo correspondiente conserva el suyo.
:::

:::tip
Los diseños de espacio de trabajo en {{ui:Configuración}} › {{ui:Global}} › {{ui:Diseño}} ({{ui:Cinta y explorador de proyecto}}, {{ui:Caja de herramientas y cuadro de información}}) arman su cinta con las pestañas del estilo {{ui:Cinta}}, y su caja de herramientas con la barra propia de MarkupCraft, así que cada herramienta funciona igual en ellos.
:::

Relacionado: [Teclado y mouse](topic:keyboard) · [Configuración de MarkupCraft](topic:settings) · [Venir desde otro software de anotación](topic:coming-from)
