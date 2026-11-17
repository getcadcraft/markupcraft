---
title: Menús, teclas y ratón
summary: Elija la barra de herramientas propia de MarkupCraft, una barra de menús de revisión de PDF o una cinta; asigne su propia tecla a cualquier herramienta, mueva herramientas entre menús y ajuste lo que hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, barra de menús, barra de herramientas, cinta, pestañas, revisión de pdf, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, desplazar, exportar, importar, cambio, familiar
from: 081438a6
---

Las herramientas de MarkupCraft son las mismas por cualquier vía que las alcance. Un **estilo de menú** solo decide dónde están en pantalla, cómo se llaman allí y qué teclas las activan. Elíjalo en {{ui:Ajustes}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:MarkupCraft}} | La barra de herramientas propia de MarkupCraft (Archivo, Seleccionar, Dibujar, Revisar, Anotar, Medir, Editar) y sus teclas de una letra: {{key:V}} seleccionar, {{key:H}} desplazar, {{key:P}} lápiz, {{key:I}} resaltador, {{key:L}} línea, {{key:A}} flecha, {{key:R}} rectángulo, {{key:E}} elipse, {{key:C}} nube, {{key:K}} llamada, {{key:T}} texto, {{key:N}} nota, {{key:S}} sello, {{key:M}} longitud, {{key:Q}} área, {{key:U}} recuento. El punto de partida. |
| {{ui:Revisión de PDF}} | Una barra de menús ({{ui:Archivo}}, {{ui:Editar}}, {{ui:Vista}}, {{ui:Documento}}, {{ui:Anotación}}, {{ui:Medir}}, {{ui:Revisión}}, {{ui:Ventana}}) sobre una fila de herramientas de revisión, con teclas dispuestas como lo hacen los programas de revisión de PDF: {{key:V}} seleccionar, {{key:Shift+V}} desplazar, {{key:H}} resaltador, {{key:Q}} llamada, {{key:N}} polígono, {{key:Shift+N}} polilínea, {{key:Shift+T}} nota, {{key:Shift+A}} arco, y las mediciones en {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrar, {{key:Alt+Shift+L}} longitud, {{key:Alt+Shift+G}} ángulo, {{key:Alt+Shift+A}} área, {{key:Alt+Shift+C}} recuento. {{key:Alt+L}} abre la lista de anotaciones. El botón central desplaza; un clic derecho no. |
| {{ui:Cinta de opciones}} | Pestañas con nombre según el trabajo: {{ui:Marcar}} (seleccionar, dibujar, nubes, llamadas, texto, notas, sellos), {{ui:Medir}}, {{ui:Editar}}, {{ui:Revisión}} (la lista de anotaciones y sus exportaciones, las incidencias BCF, la lista de pendientes, los registros de campo, la caja de herramientas y comparar), {{ui:Páginas}} y {{ui:Vista}}, con {{ui:Archivo}} y botones rápidos para abrir, guardar, deshacer y rehacer. Las herramientas mantienen las teclas propias de una letra de MarkupCraft. Un botón de un panel que no está abierto abre antes ese panel. |

Todos los estilos conservan las teclas {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} para ajustar página y {{key:Mod+9}} para ajustar ancho; {{key:PageUp}} y {{key:PageDown}} cambian de hoja.

:::tip
Una tecla que pertenece al diseño propio de MarkupCraft, pero no al estilo elegido, no hace nada, y la barra de estado indica dónde fue a parar su herramienta («En Revisión de PDF, Llamada es Q»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas mantienen siempre su función. Mientras escribe en un cuadro de texto, llamada o nota, todas las teclas son del texto, y los números escritos mientras dibuja siguen abriendo el cuadro de longitud.
:::

## Hágalo suyo

1. Elija el estilo más parecido a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque una herramienta (el cuadro de búsqueda ayuda). Haga clic en {{ui:Añadir una tecla}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con la barra de menús, {{ui:Dónde está}} mueve la herramienta a otro menú, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, ajuste la rueda y los botones que desplazan la hoja.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia («Mi revisión de PDF»); el integrado nunca cambia. Una tecla asignada a dos herramientas se muestra en rojo y hay que corregirla antes de poder guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el punto de partida) o {{ui:Girar hacia arriba aleja}}, y a qué velocidad. Un pellizco en el touchpad siempre hace zoom en el sentido en que se mueven sus dedos.
- **Desplazar la hoja con**: el botón central, el botón derecho, o ambos. {{key:Space}} y arrastrar, y la herramienta {{ui:Desplazar}}, desplazan siempre; el botón izquierdo, en cambio, dibuja y selecciona, así que marcarlo aquí no cambia nada.
- MarkupCraft no tiene vista 3D, así que los botones 3D no hacen nada aquí.

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} añade uno, desde otro equipo o de un colega. Un archivo importado solo puede apuntar a las herramientas propias de MarkupCraft: lo demás se deja fuera y se cuenta en la barra de estado. {{ui:Borrar este estilo}} quita uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}}, bajo las tarjetas de estilo, hace que cada aplicación abra en su estilo equivalente: {{ui:Revisión de PDF}} va con los estilos de barra de menús de las demás aplicaciones; {{ui:Cinta de opciones}}, con sus cintas; la barra de herramientas propia de MarkupCraft, con la suya. Una aplicación sin un estilo equivalente conserva el suyo.
:::

:::tip
Los diseños de espacio de trabajo de {{ui:Ajustes}} › {{ui:Global}} › {{ui:Disposición}} ({{ui:Cinta y explorador de proyectos}}, {{ui:Caja de herramientas y cuadro de información}}) construyen su cinta a partir de las pestañas del estilo {{ui:Cinta de opciones}}, y su caja de herramientas a partir de la barra de herramientas de MarkupCraft, de modo que cada herramienta funciona igual en ellos.
:::

Relacionado: [Teclado y ratón](topic:keyboard) · [Ajustes de MarkupCraft](topic:settings) · [Venir de otro software de anotación](topic:coming-from)
