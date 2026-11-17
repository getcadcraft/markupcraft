---
title: La lista de anotaciones, filtros y exportaciones
summary: Ver cada anotación del conjunto, filtrar por hoja, autor, estado y tipo, ir a una, y exportar la lista como CSV o BCF.
keywords: lista de anotaciones, lista, resumen, xlsx, libro de cálculo, informe pdf, importar bcf, filtro, ordenar, informe, exportar, csv, planilla, bcf, bcfzip, incidencias, lista de comentarios, ir a
from: 6c70261e
---

## Abrir la lista

Elegir la pestaña {{ui:Anotaciones}} a la derecha. Se listan todas las anotaciones de todos los archivos abiertos, en orden de hoja y luego en el orden en que se hicieron. Cada fila muestra:

- un ícono en el color de la anotación, su número de pendiente si tiene uno ("#4"), y su asunto,
- su texto, las palabras del sello o el valor medido, y su comentario,
- la hoja, el autor y la fecha,
- su estado (o "Solo lectura" para los comentarios que vinieron con el archivo), y un contador de respuestas cuando tiene respuestas.

La línea encima de la lista las cuenta: "38 anotaciones", o "12 de 38 anotaciones" cuando hay filtro.

## Ir a una anotación

Hacer clic en una fila. MarkupCraft muestra esa hoja, selecciona la anotación y hace zoom si está fuera de pantalla o es demasiado pequeña para verla. {{ui:Propiedades}} muestra sus detalles y su hilo al volver a esa pestaña.

## Filtrar

Cuatro menús encima de la lista. Se combinan.

| Menú | Opciones |
|---|---|
| {{ui:Hoja}} | Todas las hojas, Esta hoja (sigue el cambio de hoja), o cualquier hoja con anotaciones |
| {{ui:Autor}} | Cualquiera, o cada autor del conjunto |
| {{ui:Estado}} | Cualquier estado, Abierto, Aceptado, Rechazado, Completado |
| {{ui:Tipo}} | Cualquier tipo, o cada tipo de anotación del conjunto |

Ejemplos:

- Lo que sigue abierto en esta hoja: {{ui:Hoja}} "Esta hoja", {{ui:Estado}} "Abierto".
- Los comentarios de un consultor: {{ui:Autor}} su nombre.
- Todas las medidas: {{ui:Tipo}} "Longitud" o "Área".

La lista muestra hasta 2000 filas; en conjuntos muy grandes, reducirla con un filtro.

## Exportar a CSV

Elegir {{ui:CSV}} arriba de la pestaña. Se obtiene "<nombre> markups.csv" con **las anotaciones tal como están filtradas**, una por fila, con estas columnas:

Nº de pendiente, Hoja, Archivo, Página, Tipo, Asunto, Texto, Comentario, Medida, Autor, Creada, Modificada, Estado, Respuestas, Última respuesta, Color, Solo lectura.

- "Texto" guarda las palabras de los cuadros de texto y llamadas, el texto de un sello, o el nombre de un grupo de conteo.
- "Medida" guarda las longitudes, "área, perímetro" para las áreas, y "grupo: n" para los conteos.
- Las fechas son marcas de tiempo completas en UTC.

Para exportar todo, volver cada filtro a su primera opción antes.

## Una leyenda en la hoja

{{ui:Leyenda}} en la pestaña {{ui:Anotaciones}} pone una leyenda arriba a la derecha de lo que se ve: una caja que lista cada tipo de anotación de la hoja (por asunto y color, como "Nube", "Pregunta" o "Tomacorrientes") con cuántas hay. Un grupo de conteo cuenta sus marcas. La leyenda sigue contando al dibujar, mover o eliminar anotaciones, y se imprime y se guarda con los conteos del momento.

Moverla y cambiar su tamaño como cualquier anotación. En sus {{ui:Propiedades}}, cambiar su {{ui:Título}}, o poner {{ui:Conteo}} en {{ui:Todo el conjunto}} para contar todas las hojas. Los espacios, otras leyendas y los comentarios de otros programas no se cuentan.

## Tus propias columnas, y ordenar

{{ui:Columnas}} en la pestaña {{ui:Anotaciones}} agrega columnas propias a cada anotación: un **texto**, una **opción** (como Oficio: Mecánica, Eléctrica, Plomería), un **número** (como Costo) o una **fecha**. Dar a cada una un nombre, elegir su tipo, listar las opciones para una columna de opciones, y elegir {{ui:Guardar columnas}}.

- Completarlas en {{ui:Propiedades}}: cada columna tiene un campo allí. Una columna de número acepta solo números, y una de fecha solo una fecha.
- La lista muestra los valores debajo de cada anotación. El filtro {{ui:Columna}} elige un valor (o las anotaciones donde está vacío), y {{ui:Ordenar}} ordena la lista por una columna, por autor, estado, tipo o fecha, en lugar de por hoja.
- Las exportaciones CSV y XLSX llevan las columnas después de las habituales. Las columnas se guardan con el PDF y vuelven al reabrirlo.

## Exportar un resumen: libro o PDF

- {{ui:XLSX}} descarga "<nombre> markup summary.xlsx" con tres hojas: **Anotaciones** (una fila por anotación listada, con las mismas columnas que el CSV), **Por hoja** (cuántas anotaciones tiene cada hoja, abiertas y cerradas, y cuántas hay de cada tipo, con totales) y **Lista de pendientes** (cuando hay ítems de pendientes).
- {{ui:PDF}} descarga "<nombre> markup summary.pdf": un informe para imprimir o enviar, con el nombre del conjunto, la fecha y una tabla de las anotaciones listadas (número, hoja, tipo, asunto, texto o comentario, valor medido, autor, estado y la última respuesta). El texto largo se ajusta, y el encabezado de la tabla se repite en cada página.

Ambos toman la lista tal como está filtrada, así que filtrar primero para informar una sola hoja, un solo autor o solo los ítems abiertos.

## Exportar a BCF

Elegir {{ui:BCF}}. MarkupCraft saca una imagen de cada anotación listada en su hoja ("Haciendo capturas para BCF (3 de 12)…"), y luego descarga "<nombre> markups.bcfzip". Cada anotación pasa a ser un tema BCF con su estado, autor y fechas, las respuestas como comentarios, el asignado y la fecha límite de su ítem de pendiente, y la captura.

Usarlo para llevar comentarios de revisión de planos a las herramientas de coordinación BIM que leen BCF. Lo que se traslada y lo que no, está en [Conceptos básicos de BCF](topic:bcf-basics).

## Importar BCF

{{ui:Importar BCF}} lee un archivo .bcfzip (o .bcf) de una herramienta BIM:

- Las incidencias que vinieron de la exportación BCF de MarkupCraft vuelven a encontrar sus anotaciones: las respuestas nuevas se agregan al hilo, y se fija un estado nuevo (Cerrado cuenta como Completado). Las respuestas que ya están no se agregan dos veces.
- Las demás incidencias pasan a ser notas, con su título, descripción, autor y comentarios. Una nota va en la hoja cuyo número o nombre indican las etiquetas de la incidencia; si no, en la hoja abierta. Una cámara BIM no tiene lugar en el papel, así que esas notas se apilan arriba a la izquierda de la hoja para que las muevas.

Toda la importación es un solo paso: {{key:Mod+Z}} la deshace. Ver [Conceptos básicos de BCF](topic:bcf-basics).

## Lo que la lista todavía no hace

- Agrupar la lista (ordenar y luego filtrar, en su lugar).
- Editar valores en la lista (editar en {{ui:Propiedades}}; los campos de pendientes se editan en la pestaña {{ui:Lista de pendientes}}).
