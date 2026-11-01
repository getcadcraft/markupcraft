---
title: Un recorrido por la pantalla
summary: La barra de herramientas, la lista de hojas, la zona de hojas, los cinco paneles de la derecha y la barra de estado, con sus nombres en pantalla.
keywords: pantalla, disposición, barra de herramientas, paneles, barra lateral, miniaturas, propiedades, barra de estado, interfaz, pantalla completa, tema, modo oscuro
from: 18d82de6
---

MarkupCraft llena la ventana del navegador. De arriba abajo y de izquierda a derecha:

## La barra de la parte superior

La barra fina que hay sobre todo lo demás pertenece a la familia CadCraft, no a MarkupCraft. Tiene:

- el nombre de la aplicación y qué versión está ejecutando,
- {{ui:Acerca de MarkupCraft}}, que abre la página de la aplicación en el sitio web,
- {{ui:Ayuda}}, que abre esta ayuda en un panel lateral (o pulse {{key:F1}}),
- {{ui:Guardar para uso sin conexión}}, que conserva MarkupCraft, su lector y escritor de PDF y esta ayuda en este navegador para que se abra sin conexión; después dice "Listo sin conexión" (consulte [Trabajar sin conexión](common:offline)),
- el botón del modo de pantalla ({{ui:Pantalla completa}}),
- {{ui:Ajustes}} (o {{key:Mod+,}}), con una pestaña {{ui:MarkupCraft}} para los ajustes propios de esta aplicación y {{ui:General}} para los que comparten todas las aplicaciones de CadCraft (consulte [Ajustes de MarkupCraft](topic:settings)), y
- {{ui:Papel}} y {{ui:Modelo}}, los temas claro y oscuro. En {{ui:Modelo}} las hojas se dibujan en claro sobre oscuro; sus anotaciones conservan sus propios colores.

El botón del modo de pantalla, o {{key:Ctrl+Shift+F}}, recorre tres modos: normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, mueva el puntero al borde superior de la pantalla (o toque ahí) y vuelven a deslizarse. Este atajo usa la tecla Control en todos los ordenadores, también en Mac.

:::note
En pantalla completa, {{key:Esc}} también hace que el navegador salga de la pantalla completa. Si solo quería cancelar un dibujo, pulse {{key:Ctrl+Shift+F}} otra vez para volver a la pantalla completa.
:::

## La barra de herramientas

Bajo la barra superior, las herramientas están agrupadas y rotuladas:

| Grupo | Botones |
|---|---|
| Archivo | {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Cerrar}} |
| Seleccionar | {{ui:Seleccionar}}, {{ui:Desplazar}} |
| Dibujar | {{ui:Lápiz}}, {{ui:Resaltar}}, {{ui:Línea}}, {{ui:Flecha}}, {{ui:Rectángulo}}, {{ui:Elipse}}, {{ui:Polilínea}}, {{ui:Polígono}} |
| Revisar | {{ui:Nube}}, {{ui:Nube libre}} |
| Anotar | {{ui:Llamada}}, {{ui:Texto}}, {{ui:Nota}}, {{ui:Sello}} |
| Medir | {{ui:Calibrar}}, {{ui:Longitud}}, {{ui:Área}}, {{ui:Contar}} |
| Editar | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} y {{ui:Más}}: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Borrar}}, {{ui:Seleccionar todo}}, {{ui:No seleccionar nada}} |

La herramienta que está usando aparece pulsada. Mantenga el puntero sobre un botón para ver su tecla (por ejemplo "Rectángulo (R)"); el menú {{ui:Más}} enumera la tecla de cada comando a su lado. Los botones que no pueden actuar ahora aparecen atenuados: {{ui:Copiar}} hasta que seleccione una anotación, {{ui:Pegar}} hasta que se copie algo. Un puntito después de {{ui:Guardar}} significa que hay anotaciones sin guardar. La lista completa de teclas está en [Teclado y ratón](topic:keyboard).

Una herramienta sigue activa después de dibujar con ella, de modo que puede dibujar varias nubes seguidas. Pulse {{key:Esc}} (dos veces si la anotación nueva sigue seleccionada) o {{key:V}} para volver a {{ui:Seleccionar}}.

## La lista de hojas (izquierda)

{{ui:Hojas}} enumera todas las páginas de todos los PDF abiertos. Cada fila muestra una imagen pequeña de la hoja, su nombre, su número de hoja o el archivo y la página, y cuántas anotaciones tiene. El recuento que sigue al título es el número de hojas.

- Pulse una fila para mostrar esa hoja.
- Escriba en {{ui:Buscar hojas}} para filtrar por nombre de hoja, número de hoja o nombre de archivo. Pulse {{key:Enter}} para abrir la primera coincidencia.

Los nombres de hoja proceden del PDF cuando los tiene. Consulte [Abrir un conjunto de planos y moverse entre hojas](topic:open-a-plan-set).

## La zona de hojas (centro)

La hoja en la que está trabajando. Antes de abrir nada muestra "Abra un conjunto de planos" con un botón {{ui:Abrir PDF}}. Suelte PDF en cualquier parte de aquí para abrirlos.

Bajo la hoja, una barra estrecha tiene:

- las flechas de hoja anterior y siguiente, y "3 de 12: A-101 — Planta" (mantenga el puntero sobre ella para ver el archivo y la página),
- alejar, el cuadro de zoom (escriba un porcentaje y pulse {{key:Enter}}; el 100 % es el tamaño real en una pantalla normal), acercar,
- {{ui:Ajustar página}} y {{ui:Ajustar ancho}}.

Cada hoja recuerda su propio zoom mientras el conjunto está abierto.

Cuando compara dos hojas, aquí aparece una leyenda: "Solo en la hoja antigua", "Solo en la hoja nueva" y "En ambas". Consulte [Comparar dos revisiones](topic:compare-revisions).

## Los paneles (derecha)

Cinco pestañas:

| Pestaña | Qué muestra |
|---|---|
| {{ui:Propiedades}} | La anotación seleccionada: autor, fechas, valores medidos, estado, asunto, texto, comentario, estilo, sus respuestas y su pendiente. Con una herramienta de dibujo activada y nada seleccionado, los ajustes que usarán las anotaciones nuevas. Con nada seleccionado y {{ui:Seleccionar}} activado, la hoja: número, título, de dónde se leyó el nombre, tamaño de papel, escala y {{ui:Renombrar hoja}}. |
| {{ui:Anotaciones}} | Todas las anotaciones del conjunto abierto, con filtros, y las exportaciones {{ui:CSV}} y {{ui:BCF}}. Consulte [La lista de anotaciones](topic:markups-list-and-export). |
| {{ui:Lista de pendientes}} | Pendientes numerados con responsable, fecha de vencimiento y estado. Consulte [Crear una lista de pendientes](topic:punch-list). |
| {{ui:Herramientas}} | La caja de herramientas: herramientas guardadas con su estilo. Consulte [La caja de herramientas](topic:tool-chest). |
| {{ui:Comparar}} | Superponer dos hojas. Consulte [Comparar dos revisiones](topic:compare-revisions). |

## La barra de estado (abajo)

- A la izquierda, dónde está el puntero sobre la hoja, en pulgadas (o milímetros, en [Ajustes](topic:settings)) sobre el papel.
- En el centro, mensajes: qué espera una herramienta a continuación, qué se acaba de guardar, por qué se rechazó algo. **Léala cuando algo no ocurra.**
- El botón de escala de la hoja ("Sin calibrar", o la escala). Púlselo para establecer la escala. Consulte [Calibrar una hoja y medir](topic:calibrate-and-measure).
- Su nombre ("Indique su nombre" hasta que dé uno). Púlselo para cambiarlo.

## En una pantalla pequeña

Por debajo de unos 1180 píxeles de ancho, los paneles se estrechan y las imágenes de las hojas se reducen. En una pantalla del tamaño de un teléfono las partes se apilan: barra de herramientas (desplácela hacia los lados), la hoja, la barra de estado, los paneles y, al final, la lista de hojas. Una tableta en horizontal conserva la disposición completa.
