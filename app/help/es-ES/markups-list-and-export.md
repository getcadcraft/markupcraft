---
title: La lista de anotaciones, filtros y exportaciones
summary: Vea todas las anotaciones del conjunto, filtre por hoja, autor, estado y tipo, vaya a una de ellas y exporte la lista como CSV o BCF.
keywords: lista de anotaciones, lista, resumen, xlsx, libro de hojas de cálculo, libro, informe pdf, importar bcf, filtrar, ordenar, informe, exportar, csv, hoja de cálculo, bcf, bcfzip, incidencias, lista de comentarios, ir a
from: 6c70261e
---

## Abrir la lista

Elija la pestaña {{ui:Anotaciones}} a la derecha. Se listan todas las anotaciones de todos los archivos abiertos, en el orden de las hojas y, después, en el orden en que se hicieron. Cada fila muestra:

- un icono del color de la anotación, su número de pendiente si tiene uno («#4»), y su asunto,
- su texto, el texto del sello o el valor medido, y su comentario,
- la hoja, el autor y la fecha,
- su estado (o «Solo lectura» para los comentarios que llegaron con el archivo), y un recuento de respuestas cuando tiene respuestas.

La línea encima de la lista las cuenta: «38 anotaciones», o «12 de 38 anotaciones» cuando hay filtro.

## Ir a una anotación

Haga clic en una fila. MarkupCraft muestra esa hoja, selecciona la anotación y hace zoom si está fuera de pantalla o es demasiado pequeña para verla. {{ui:Propiedades}} muestra sus detalles y su hilo cuando vuelve a esa pestaña.

## Filtrar

Hay cuatro menús encima de la lista. Se combinan.

| Menú | Opciones |
|---|---|
| {{ui:Hoja}} | Todas las hojas, Esta hoja (la sigue al cambiar de hoja), o cualquier hoja que tenga anotaciones |
| {{ui:Autor}} | Cualquiera, o cada autor del conjunto |
| {{ui:Estado}} | Cualquier estado, Abierto, Aceptado, Rechazado, Completado |
| {{ui:Tipo}} | Cualquier tipo, o cada tipo de anotación del conjunto |

Ejemplos:

- Lo que aún está abierto en esta hoja: {{ui:Hoja}} «Esta hoja», {{ui:Estado}} «Abierto».
- Los comentarios de un consultor: {{ui:Autor}} su nombre.
- Todas las mediciones: {{ui:Tipo}} «Longitud» o «Área».

La lista muestra hasta 2000 filas; en conjuntos muy grandes, restrínjala con un filtro.

## Exportar a CSV

Elija {{ui:CSV}} en la parte superior de la pestaña. Obtendrá «<nombre> markups.csv» con **las anotaciones tal como están filtradas**, una por fila, con estas columnas:

Nº de pendiente, Hoja, Archivo, Página, Tipo, Asunto, Texto, Comentario, Medición, Autor, Creada, Modificada, Estado, Respuestas, Última respuesta, Color, Solo lectura.

- «Texto» contiene las palabras de los cuadros de texto y de las llamadas, el texto de un sello o el nombre de un grupo de recuento.
- «Medición» contiene las longitudes, «área, perímetro» para las áreas, y «grupo: n» para los recuentos.
- Las fechas son marcas de tiempo completas en UTC.

Para exportar todo, devuelva primero cada filtro a su primera opción.

## Una leyenda en la hoja

{{ui:Leyenda}} en la pestaña {{ui:Anotaciones}} coloca una leyenda en la parte superior derecha de lo que ve: un cuadro que enumera cada tipo de anotación de la hoja (por asunto y color, como «Nube», «Pregunta» o «Tomas») con cuántas hay. Un grupo de recuento cuenta sus marcas. La leyenda sigue contando mientras dibuja, mueve o elimina anotaciones, y se imprime y se guarda con los recuentos de ese momento.

Muévala y cambie su tamaño como cualquier anotación. En sus {{ui:Propiedades}}, cambie su {{ui:Título}}, o ponga {{ui:Recuentos}} en {{ui:Todo el conjunto}} para contar en todas las hojas. Los espacios, otras leyendas y los comentarios de otros programas no se cuentan.

## Sus propias columnas, y la ordenación

{{ui:Columnas}} en la pestaña {{ui:Anotaciones}} añade columnas propias a cada anotación: un **texto**, una **opción** (como Oficio: Mecánico, Eléctrico, Fontanería), un **número** (como Coste) o una **fecha**. Dé un nombre a cada una, elija su tipo, enumere las opciones en una columna de opciones, y elija {{ui:Guardar columnas}}.

- Rellénelas en {{ui:Propiedades}}: cada columna tiene allí su campo. Una columna numérica admite solo números, y una de fecha, solo fechas.
- La lista muestra los valores bajo cada anotación. El filtro {{ui:Columna}} elige un valor (o las anotaciones donde está vacía), y {{ui:Ordenar}} ordena la lista por una columna, por autor, estado, tipo o fecha, en lugar de por hoja.
- Las exportaciones CSV y XLSX incluyen las columnas después de las habituales. Las columnas se guardan con el PDF y regresan al volver a abrirlo.

## Exportar un resumen: libro o PDF

- {{ui:XLSX}} descarga «<nombre> markup summary.xlsx» con tres hojas: **Anotaciones** (una fila por anotación de la lista, con las mismas columnas que el CSV), **Por hoja** (cuántas anotaciones tiene cada hoja, abiertas y cerradas, y cuántas hay de cada tipo, con totales) y **Lista de pendientes** (cuando hay elementos pendientes).
- {{ui:PDF}} descarga «<nombre> markup summary.pdf»: un informe para imprimir o enviar, con el nombre del conjunto, la fecha y una tabla de las anotaciones de la lista (número, hoja, tipo, asunto, texto o comentario, valor medido, autor, estado y la última respuesta). El texto largo se ajusta, y el encabezado de la tabla se repite en cada página.

Ambos usan la lista tal como está filtrada, así que filtre primero para informar de una sola hoja, de un solo autor o solo de los elementos abiertos.

## Exportar a BCF

Elija {{ui:BCF}}. MarkupCraft hace una captura de cada anotación de la lista en su hoja («Creando capturas para BCF (3 de 12)…») y después descarga «<nombre> markups.bcfzip». Cada anotación se convierte en un tema BCF con su estado, autor y fechas; las respuestas, como comentarios; el responsable y la fecha límite de su elemento pendiente; y la captura.

Úselo para llevar los comentarios de revisión de dibujos a herramientas de coordinación BIM que leen BCF. Lo que se traslada y lo que no, está en [Fundamentos de BCF](topic:bcf-basics).

## Importar BCF

{{ui:Importar BCF}} lee un archivo .bcfzip (o .bcf) de una herramienta BIM:

- Las incidencias que vienen de la exportación BCF propia de MarkupCraft vuelven a encontrar sus anotaciones: las respuestas nuevas se añaden al hilo, y se establece un estado nuevo (Cerrado cuenta como Completado). Las respuestas que ya estaban no se añaden dos veces.
- Las demás incidencias se convierten en notas, con su título, descripción, autor y comentarios. Una nota va a la hoja cuyo número o nombre indican las etiquetas de la incidencia y, si no, a la hoja abierta. Una cámara BIM no tiene lugar en papel, así que esas notas se apilan en la esquina superior izquierda de la hoja para que usted las mueva.

La importación completa es un solo paso: {{key:Mod+Z}} la deshace. Véase [Fundamentos de BCF](topic:bcf-basics).

## Lo que la lista todavía no hace

- Agrupar la lista (ordene y después filtre, en su lugar).
- Editar valores en la lista (edítelos en {{ui:Propiedades}}; los campos de pendientes se editan en la pestaña {{ui:Lista de pendientes}}).
