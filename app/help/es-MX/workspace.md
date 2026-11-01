---
title: Un recorrido por la pantalla
summary: La barra de herramientas, la lista de hojas, el área de la hoja, los cinco paneles de la derecha y la barra de estado, con sus nombres en pantalla.
keywords: pantalla, diseño, barra de herramientas, paneles, barra lateral, miniaturas, propiedades, barra de estado, interfaz, pantalla completa, tema, modo oscuro
from: 18d82de6
---

MarkupCraft llena la ventana del navegador. De arriba abajo y de izquierda a derecha:

## La barra de hasta arriba

La barra delgada sobre todo lo demás pertenece a la familia CadCraft, no a MarkupCraft mismo. Tiene:

- el nombre de la aplicación y la versión que está usando,
- {{ui:Acerca de MarkupCraft}}, que abre la página de la aplicación en el sitio web,
- {{ui:Ayuda}}, que abre esta ayuda en un panel lateral (o pulse {{key:F1}}),
- {{ui:Guardar para usar sin conexión}}, que conserva MarkupCraft, su lector y escritor de PDF y esta ayuda en este navegador para que abra sin conexión; entonces dice "Offline ready" (vea [Trabajar sin conexión](common:offline)),
- el botón de modo de pantalla ({{ui:Pantalla completa}}),
- {{ui:Configuración}} (o {{key:Mod+,}}), con una pestaña {{ui:MarkupCraft}} para los ajustes propios de esta aplicación y {{ui:General}} para los que comparten todas las aplicaciones CadCraft (vea [Configuración de MarkupCraft](topic:settings)), y
- {{ui:Papel}} y {{ui:Modelo}}, los temas claro y oscuro. En {{ui:Modelo}} las hojas se dibujan claras sobre oscuro; sus marcas conservan sus propios colores.

El botón de modo de pantalla, o {{key:Ctrl+Shift+F}}, recorre tres modos: normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, mueva el puntero al borde superior de la pantalla (o toque ahí) y regresan deslizándose. Este atajo usa la tecla Control en todas las computadoras, también en una Mac.

:::note
En pantalla completa, {{key:Esc}} también hace que el navegador salga de pantalla completa. Si solo quería cancelar un dibujo, pulse {{key:Ctrl+Shift+F}} otra vez para volver a pantalla completa.
:::

## La barra de herramientas

Bajo la barra de arriba, las herramientas están agrupadas y rotuladas:

| Grupo | Botones |
|---|---|
| Archivo | {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Cerrar}} |
| Seleccionar | {{ui:Seleccionar}}, {{ui:Encuadre}} |
| Dibujo | {{ui:Pluma}}, {{ui:Resaltado}}, {{ui:Línea}}, {{ui:Flecha}}, {{ui:Rectángulo}}, {{ui:Elipse}}, {{ui:Polilínea}}, {{ui:Polígono}} |
| Revisar | {{ui:Nube de revisión}}, {{ui:Nube libre}} |
| Anotar | {{ui:Llamada}}, {{ui:Texto}}, {{ui:Nota}}, {{ui:Sello}} |
| Medir | {{ui:Calibrar}}, {{ui:Longitud}}, {{ui:Área}}, {{ui:Conteo}} |
| Edición | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y {{ui:Más}}: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}}, {{ui:No seleccionar nada}} |

La herramienta que está usando se ve presionada. Mantenga el puntero sobre un botón para ver su tecla (por ejemplo "Rectangle (R)"); el menú {{ui:Más}} muestra la tecla de cada comando a su lado. Los botones que no pueden actuar ahora aparecen atenuados: {{ui:Copiar}} hasta que selecciona una marca, {{ui:Pegar}} hasta que se copia algo. Un punto pequeño después de {{ui:Guardar}} significa que algunas marcas aún no están guardadas. La lista completa de teclas está en [Teclado y mouse](topic:keyboard).

Una herramienta sigue activa después de dibujar con ella, así que puede dibujar varias nubes seguidas. Pulse {{key:Esc}} (dos veces si la marca nueva sigue seleccionada) o {{key:V}} para volver a {{ui:Seleccionar}}.

## La lista de hojas (izquierda)

{{ui:Hojas}} enumera cada página de cada PDF abierto. Cada fila muestra una imagen pequeña de la hoja, su nombre, su número de hoja o archivo y página, y cuántas marcas tiene. La cuenta después del encabezado es el número de hojas.

- Haga clic en una fila para mostrar esa hoja.
- Escriba en {{ui:Buscar hojas}} para filtrar por nombre de hoja, número de hoja o nombre de archivo. Pulse {{key:Enter}} para abrir la primera coincidencia.

Los nombres de hoja salen del PDF cuando los trae. Vea [Abra un juego de planos y pase entre hojas](topic:open-a-plan-set).

## El área de la hoja (centro)

La hoja en la que trabaja. Antes de abrir algo muestra "Open a plan set" con un botón {{ui:Abrir PDF}}. Suelte PDF en cualquier parte de aquí para abrirlos.

Bajo la hoja, una barra angosta tiene:

- las flechas de hoja anterior y siguiente, y "3 of 12: A-101 — Floor plan" (mantenga el puntero encima para ver el archivo y la página),
- alejar, el cuadro de zoom (escriba un porcentaje y pulse {{key:Enter}}; 100% es el tamaño real en una pantalla típica), acercar,
- {{ui:Ajustar a la página}} y {{ui:Ajustar al ancho}}.

Cada hoja recuerda su propio zoom mientras el juego está abierto.

Cuando compara dos hojas, aquí aparece una leyenda: "Only on the old sheet", "Only on the new sheet" y "On both". Vea [Compare dos revisiones](topic:compare-revisions).

## Los paneles (derecha)

Cinco pestañas:

| Pestaña | Qué muestra |
|---|---|
| {{ui:Propiedades}} | La marca seleccionada: autor, fechas, valores medidos, estado, asunto, texto, comentario, estilo, sus respuestas y su partida de pendientes. Con una herramienta de dibujo activa y nada seleccionado, los ajustes que usarán las marcas nuevas. Con nada seleccionado y {{ui:Seleccionar}} activa, la hoja: número, título, de dónde se leyó el nombre, tamaño de papel, escala y {{ui:Cambiar nombre de la hoja}}. |
| {{ui:Marcas}} | Cada marca del juego abierto, con filtros, y exportaciones {{ui:CSV}} y {{ui:BCF}}. Vea [La lista de marcas](topic:markups-list-and-export). |
| {{ui:Pendientes}} | Partidas de pendientes numeradas con responsable, fecha límite y estado. Vea [Haga una lista de pendientes](topic:punch-list). |
| {{ui:Herramientas}} | La caja de herramientas: herramientas guardadas con estilo. Vea [La caja de herramientas](topic:tool-chest). |
| {{ui:Comparar}} | Superponga dos hojas. Vea [Compare dos revisiones](topic:compare-revisions). |

## La barra de estado (abajo)

- A la izquierda, dónde está el puntero sobre la hoja, en pulgadas (o milímetros, en [Configuración](topic:settings)) sobre el papel.
- En el centro, mensajes: qué espera una herramienta a continuación, qué se acaba de guardar, por qué algo se rechazó. **Léala cuando algo no ocurra.**
- El botón de escala de la hoja ("Not calibrated", o la escala). Haga clic para fijar la escala. Vea [Calibre una hoja y mida](topic:calibrate-and-measure).
- Su nombre ("Set your name" hasta que dé uno). Haga clic para cambiarlo.

## En una pantalla pequeña

Por debajo de unos 1180 píxeles de ancho los paneles se angostan y las imágenes de las hojas se encogen. En una pantalla del tamaño de un teléfono las partes se apilan: barra de herramientas (desplácela de lado), la hoja, la barra de estado, los paneles y al final la lista de hojas. Una tableta en horizontal conserva el diseño completo.
