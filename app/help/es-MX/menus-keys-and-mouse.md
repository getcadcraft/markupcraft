---
title: Menús, teclas y ratón
summary: Elija la barra de herramientas propia de MarkupCraft, una barra de menús de revisión de PDF o una cinta, dé a cualquier herramienta su propia tecla, mueva herramientas entre menús, y defina qué hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, barra de menús, barra de herramientas, cinta, pestañas, revisión de pdf, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, encuadre, exportar, importar, cambio, familiar
from: 081438a6
---

Las herramientas de MarkupCraft son las mismas por cualquier camino que use para llegar a ellas. Un **estilo de menú** solo decide dónde están en pantalla, cómo se llaman allí y qué teclas las eligen. Elíjalo en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Lo que obtiene |
|---|---|
| {{ui:MarkupCraft}} | La barra de herramientas propia de MarkupCraft (Archivo, Seleccionar, Dibujar, Revisar, Anotar, Medir, Edición) y sus teclas de una letra: {{key:V}} seleccionar, {{key:H}} encuadre, {{key:P}} pluma, {{key:I}} resaltado, {{key:L}} línea, {{key:A}} flecha, {{key:R}} rectángulo, {{key:E}} elipse, {{key:C}} nube, {{key:K}} llamada, {{key:T}} texto, {{key:N}} nota, {{key:S}} sello, {{key:M}} longitud, {{key:Q}} área, {{key:U}} conteo. El inicio. |
| {{ui:Revisión de PDF}} | Una barra de menús ({{ui:Archivo}}, {{ui:Edición}}, {{ui:Vista}}, {{ui:Documento}}, {{ui:Marca}}, {{ui:Medir}}, {{ui:Revisión}}, {{ui:Ventana}}) sobre una fila de herramientas de revisión, con teclas puestas como las ponen los programas de revisión de PDF: {{key:V}} seleccionar, {{key:Shift+V}} encuadre, {{key:H}} resaltado, {{key:Q}} llamada, {{key:N}} polígono, {{key:Shift+N}} polilínea, {{key:Shift+T}} nota, {{key:Shift+A}} arco, y las medidas en {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibrar, {{key:Alt+Shift+L}} longitud, {{key:Alt+Shift+G}} ángulo, {{key:Alt+Shift+A}} área, {{key:Alt+Shift+C}} conteo. {{key:Alt+L}} abre la lista de marcas. El botón central encuadra; el clic derecho no. |
| {{ui:Cinta}} | Pestañas con nombre según el trabajo: {{ui:Marcar}} (seleccionar, dibujar, nubes, llamadas, texto, notas, sellos), {{ui:Medir}}, {{ui:Edición}}, {{ui:Revisión}} (la lista de marcas y sus exportaciones, incidencias BCF, la lista de pendientes, registros de campo, el cofre de herramientas, comparar), {{ui:Páginas}} y {{ui:Vista}}, con {{ui:Archivo}} y botones rápidos para abrir, guardar, deshacer y rehacer. Las herramientas conservan las teclas de una letra de MarkupCraft. Un botón para un panel que no está abierto abre antes ese panel. |

Todos los estilos conservan las teclas {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} para ajustar página y {{key:Mod+9}} para ajustar ancho; {{key:PageUp}} y {{key:PageDown}} cambian de hoja.

:::tip
Una tecla que pertenece al diseño propio de MarkupCraft, pero no al estilo que eligió, no hace nada, y la barra de estado indica adónde fue su herramienta («En Revisión de PDF, Llamada es Q»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su significado. Mientras escribe en un cuadro de texto, llamada o nota, cada tecla es del texto; y los números escritos mientras dibuja siguen abriendo el cuadro de longitud.
:::

## Hágalo suyo

1. Elija el estilo más cercano a lo que quiere y luego haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque una herramienta (el cuadro de búsqueda ayuda). Elija {{ui:Agregar una tecla}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con la barra de menús, {{ui:Dónde está}} mueve la herramienta a otro menú, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda y los botones que encuadran la hoja.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia («Mi revisión de PDF»); el integrado nunca cambia. Una tecla asignada a dos herramientas se muestra en rojo y hay que corregirla antes de guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el inicio) o {{ui:Girar hacia arriba aleja}}, y qué tan rápido. Un pellizco en el panel táctil siempre hace zoom en la dirección en que se mueven sus dedos.
- **Encuadre de la hoja con**: el botón central, el botón derecho, o ambos. {{key:Space}} y arrastrar, y la herramienta {{ui:Encuadre}}, siempre encuadran; el botón izquierdo dibuja y selecciona en cualquier otro caso, así que marcarlo no cambia nada aquí.
- MarkupCraft no tiene vista 3D, así que los botones 3D no hacen nada aquí.

## Llévelo con usted

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a las herramientas propias de MarkupCraft: cualquier otra cosa se deja fuera y se cuenta en la barra de estado. {{ui:Eliminar este estilo}} quita uno propio.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las apps}} debajo de las tarjetas de estilo hace que cada app abra en su estilo equivalente: {{ui:Revisión de PDF}} va con los estilos de barra de menús de las otras apps, {{ui:Cinta}} con sus cintas, y la barra de herramientas propia de MarkupCraft con las suyas. Una app sin un estilo equivalente conserva el suyo.
:::

:::tip
Los diseños de espacio de trabajo en {{ui:Configuración}} › {{ui:Global}} › {{ui:Diseño}} ({{ui:Cinta y navegador de proyecto}}, {{ui:Caja de herramientas y cuadro de información}}) construyen su cinta a partir de las pestañas del estilo {{ui:Cinta}}, y su caja de herramientas a partir de la barra de herramientas de MarkupCraft, así que cada herramienta funciona igual en ellos.
:::

Relacionado: [Teclado y ratón](topic:keyboard) · [Configuración de MarkupCraft](topic:settings) · [Viene de otro software de marcado](topic:coming-from)
