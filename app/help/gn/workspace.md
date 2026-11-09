---
title: Recorrido por la pantalla
summary: La barra de herramientas, la lista de hojas, la zona de hojas, los cinco paneles de la derecha y la barra de estado, por sus nombres en pantalla.
keywords: pantalla, diseño, barra de herramientas, paneles, barra lateral, miniaturas, propiedades, barra de estado, interfaz, pantalla completa, tema, modo oscuro
from: 18d82de6
---

MarkupCraft ocupa toda la ventana del navegador. De arriba abajo y de izquierda a derecha:

## La barra en la parte superior

La barra fina encima de todo pertenece a la familia CadCraft, no a MarkupCraft en sí. Tiene:

- el nombre de la app y la versión que se está usando,
- {{ui:Acerca de MarkupCraft}}, que abre la página de la app en el sitio web,
- {{ui:Ayuda}}, que abre esta ayuda en un panel lateral (o presionar {{key:F1}}),
- {{ui:Guardar para usar sin conexión}}, que mantiene MarkupCraft, su lector y escritor de PDF, y esta ayuda en este navegador para que se abran sin conexión; luego dice "Listo sin conexión" (ver [Trabajar sin conexión](common:offline)),
- el botón de modo de pantalla ({{ui:Pantalla completa}}), y
- {{ui:Configuración}} (o {{key:Mod+,}}), con una pestaña {{ui:MarkupCraft}} para la configuración propia de esta app y {{ui:General}} para la que comparten todas las apps de CadCraft (ver [Configuración de MarkupCraft](topic:settings)), y
- {{ui:Papel}} y {{ui:Modelo}}, los temas claro y oscuro. En {{ui:Modelo}} las hojas se dibujan en claro sobre oscuro; las anotaciones conservan sus propios colores.

El botón de modo de pantalla, o {{key:Ctrl+Shift+F}}, recorre tres modos: normal, pantalla completa y pantalla completa con las barras ocultas. Con las barras ocultas, mover el puntero al borde superior de la pantalla (o tocar allí) y las barras vuelven a aparecer. Este atajo usa la tecla Control en todas las computadoras, incluida la Mac.

:::note
En pantalla completa, {{key:Esc}} también hace que el navegador salga de pantalla completa. Si solo se quería cancelar un dibujo, presionar {{key:Ctrl+Shift+F}} de nuevo para volver a pantalla completa.
:::

## La barra de herramientas

Debajo de la barra superior, las herramientas están agrupadas y rotuladas:

| Grupo | Botones |
|---|---|
| Archivo | {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Cerrar}} |
| Seleccionar | {{ui:Seleccionar}}, {{ui:Desplazar}} |
| Dibujar | {{ui:Lápiz}}, {{ui:Resaltado}}, {{ui:Línea}}, {{ui:Flecha}}, {{ui:Rectángulo}}, {{ui:Elipse}}, {{ui:Polilínea}}, {{ui:Polígono}} |
| Revisar | {{ui:Nube}}, {{ui:Nube libre}} |
| Anotar | {{ui:Llamada}}, {{ui:Texto}}, {{ui:Nota}}, {{ui:Sello}} |
| Medir | {{ui:Calibrar}}, {{ui:Longitud}}, {{ui:Área}}, {{ui:Contar}} |
| Editar | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, y {{ui:Más}}: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}}, {{ui:No seleccionar nada}} |

La herramienta que se está usando se ve presionada. Mantener el puntero sobre un botón para ver su tecla (por ejemplo "Rectángulo (R)"); el menú {{ui:Más}} enumera la tecla de cada comando al lado. Los botones que no pueden actuar en ese momento aparecen atenuados: {{ui:Copiar}} hasta seleccionar una anotación, {{ui:Pegar}} hasta que haya algo copiado. Un pequeño punto después de {{ui:Guardar}} indica que hay anotaciones sin guardar. La lista completa de teclas está en [Teclado y mouse](topic:keyboard).

Una herramienta queda activa después de dibujar con ella, así que se pueden dibujar varias nubes seguidas. Presionar {{key:Esc}} (dos veces si la nueva anotación sigue seleccionada) o {{key:V}} para volver a {{ui:Seleccionar}}.

## La lista de hojas (izquierda)

{{ui:Hojas}} enumera cada página de cada PDF abierto. Cada fila muestra una pequeña imagen de la hoja, su nombre, su número de hoja o archivo y página, y cuántas anotaciones tiene. El conteo después del título es el número de hojas.

- Hacer clic en una fila para mostrar esa hoja.
- Escribir en {{ui:Buscar hojas}} para filtrar por nombre de hoja, número de hoja o nombre de archivo. Presionar {{key:Enter}} para abrir la primera coincidencia.

Los nombres de hoja provienen del PDF cuando lo tiene. Ver [Abrir un conjunto de planos y moverse entre hojas](topic:open-a-plan-set).

## La zona de hojas (centro)

La hoja en la que se trabaja. Antes de abrir algo muestra "Abrir un conjunto de planos" con un botón {{ui:Abrir PDF}}. Soltar PDF en cualquier parte para abrirlos.

Debajo de la hoja, una barra angosta tiene:

- las flechas de hoja anterior y siguiente, y "3 de 12: A-101 — Planta" (mantener el puntero encima para ver el archivo y la página),
- alejar, el cuadro de zoom (escribir un porcentaje y presionar {{key:Enter}}; 100% es el tamaño real en una pantalla típica), acercar,
- {{ui:Ajustar página}} y {{ui:Ajustar ancho}}.

Cada hoja recuerda su propio zoom mientras el conjunto está abierto.

Cuando se comparan dos hojas, aparece una leyenda aquí: "Solo en la hoja anterior", "Solo en la hoja nueva" y "En ambas". Ver [Comparar dos revisiones](topic:compare-revisions).

## Los paneles (derecha)

Cinco pestañas:

| Pestaña | Qué muestra |
|---|---|
| {{ui:Propiedades}} | La anotación seleccionada: autor, fechas, valores medidos, estado, asunto, texto, comentario, estilo, sus respuestas y su pendiente. Con una herramienta de dibujo activa y nada seleccionado, la configuración que usarán las nuevas anotaciones. Con nada seleccionado y {{ui:Seleccionar}} activo, la hoja: número, título, de dónde se leyó el nombre, tamaño de papel, escala, y {{ui:Renombrar hoja}}. |
| {{ui:Anotaciones}} | Cada anotación del conjunto abierto, con filtros, y las exportaciones {{ui:CSV}} y {{ui:BCF}}. Ver [La lista de anotaciones](topic:markups-list-and-export). |
| {{ui:Lista de pendientes}} | Pendientes numerados con responsable, fecha de vencimiento y estado. Ver [Hacer una lista de pendientes](topic:punch-list). |
| {{ui:Herramientas}} | La caja de herramientas: herramientas guardadas y con estilo. Ver [La caja de herramientas](topic:tool-chest). |
| {{ui:Comparar}} | Superponer dos hojas. Ver [Comparar dos revisiones](topic:compare-revisions). |

## La barra de estado (abajo)

- A la izquierda, donde está el puntero sobre la hoja, en pulgadas (o en milímetros, en [Configuración](topic:settings)) sobre el papel.
- En el centro, mensajes: qué espera la herramienta a continuación, qué se acaba de guardar, por qué algo fue rechazado. **Leerla cuando algo no sucede.**
- El botón de escala de la hoja ("Sin calibrar", o la escala). Hacer clic para fijar la escala. Ver [Calibrar una hoja y medir](topic:calibrate-and-measure).
- El nombre ("Establecer nombre" hasta que se indique uno). Hacer clic para cambiarlo.

## En una pantalla pequeña

Por debajo de unos 1180 píxeles de ancho, los paneles se angostan y las imágenes de hoja se reducen. En una pantalla del tamaño de un teléfono, las partes se apilan: la barra de herramientas (se desplaza hacia los costados), la hoja, la barra de estado, los paneles, y al final la lista de hojas. Una tableta en horizontal mantiene el diseño completo.
