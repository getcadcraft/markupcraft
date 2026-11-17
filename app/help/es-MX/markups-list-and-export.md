---
title: La lista de marcas, filtros y exportaciones
summary: Vea todas las marcas del juego, filtre por hoja, autor, estado y tipo, vaya a una, y exporte la lista como CSV o BCF.
keywords: lista de marcas, lista, resumen, xlsx, libro de cálculo, informe pdf, importar bcf, filtro, ordenar, informe, exportar, csv, hoja de cálculo, bcf, bcfzip, incidencias, lista de comentarios, ir a
from: 6c70261e
---

## Abrir la lista

Elija la pestaña {{ui:Marcas}} a la derecha. Se listan todas las marcas de todos los archivos abiertos, en orden de hoja y luego en el orden en que se hicieron. Cada fila muestra:

- un icono del color de la marca, su número de lista de pendientes si tiene uno («#4»), y su asunto,
- su texto, el texto del sello o el valor medido, y su comentario,
- la hoja, el autor y la fecha,
- su estado (o «Solo lectura» para comentarios que venían con el archivo), y un conteo de respuestas cuando tiene respuestas.

La línea sobre la lista las cuenta: «38 marcas», o «12 de 38 marcas» cuando está filtrada.

## Ir a una marca

Haga clic en una fila. MarkupCraft muestra esa hoja, selecciona la marca y hace zoom si está fuera de pantalla o es demasiado pequeña para verla. {{ui:Propiedades}} muestra sus detalles y su conversación cuando vuelve a esa pestaña.

## Filtrar

Cuatro menús sobre la lista. Se combinan.

| Menú | Opciones |
|---|---|
| {{ui:Hoja}} | Todas las hojas, Esta hoja (lo sigue al cambiar de hoja), o cualquier hoja que tenga marcas |
| {{ui:Autor}} | Cualquiera, o cada autor del juego |
| {{ui:Estado}} | Cualquier estado, Abierto, Aceptado, Rechazado, Completado |
| {{ui:Tipo}} | Cualquier tipo, o cada clase de marca del juego |

Ejemplos:

- Lo que sigue abierto en esta hoja: {{ui:Hoja}} «Esta hoja», {{ui:Estado}} «Abierto».
- Los comentarios de un consultor: {{ui:Autor}} su nombre.
- Todas las medidas: {{ui:Tipo}} «Longitud» o «Área».

La lista muestra hasta 2000 filas; en conjuntos muy grandes, redúzcala con un filtro.

## Exportar a CSV

Elija {{ui:CSV}} en la parte superior de la pestaña. Obtiene «<name> markups.csv» con **las marcas tal como están filtradas**, una por fila, con estas columnas:

Núm. de pendiente, Hoja, Archivo, Página, Tipo, Asunto, Texto, Comentario, Medida, Autor, Creado, Modificado, Estado, Respuestas, Última respuesta, Color, Solo lectura.

- «Texto» contiene las palabras de los cuadros de texto y las llamadas, el texto de un sello o el nombre de un grupo de conteo.
- «Medida» contiene longitudes, «área, perímetro» para áreas, y «grupo: n» para conteos.
- Las fechas son marcas de tiempo completas en UTC.

Para exportar todo, primero devuelva cada filtro a su primera opción.

## Una leyenda en la hoja

{{ui:Leyenda}} en la pestaña {{ui:Marcas}} coloca una leyenda en la parte superior derecha de lo que ve: un cuadro que lista cada tipo de marca de la hoja (por asunto y color, como «Nube», «Pregunta» o «Salidas») con cuántas hay. Un grupo de conteo cuenta sus marcas. La leyenda sigue contando al dibujar, mover o borrar marcas, y se imprime y se guarda con los conteos del momento.

Muévala y cambie su tamaño como cualquier marca. En sus {{ui:Propiedades}}, cambie su {{ui:Título}}, o defina {{ui:Conteos}} como {{ui:Todo el juego}} para contar todas las hojas. Los espacios, otras leyendas y los comentarios de otros programas no se cuentan.

## Sus propias columnas, y ordenamiento

{{ui:Columnas}} en la pestaña {{ui:Marcas}} agrega columnas propias a cada marca: un **texto**, una **opción** (como Oficio: Mecánico, Eléctrico, Plomería), un **número** (como Costo) o una **fecha**. Dé un nombre a cada una, elija su tipo, liste las opciones para una columna de opciones, y elija {{ui:Guardar columnas}}.

- Llénelas en {{ui:Propiedades}}: cada columna tiene un campo ahí. Una columna de número acepta solo números, y una de fecha solo una fecha.
- La lista muestra los valores bajo cada marca. El filtro {{ui:Columna}} elige un valor (o las marcas donde está vacía), y {{ui:Ordenar}} ordena la lista por una columna, por autor, estado, tipo o fecha, en lugar de por hoja.
- Las exportaciones CSV y XLSX llevan las columnas después de las habituales. Las columnas se guardan con el PDF y regresan cuando lo vuelve a abrir.

## Exportar un resumen: libro o PDF

- {{ui:XLSX}} descarga «<name> markup summary.xlsx» con tres hojas: **Marcas** (una fila por marca de la lista, las mismas columnas del CSV), **Por hoja** (cuántas marcas tiene cada hoja, abiertas y cerradas, y cuántas hay de cada tipo, con totales) y **Lista de pendientes** (cuando hay elementos de pendientes).
- {{ui:PDF}} descarga «<name> markup summary.pdf»: un informe para imprimir o enviar, con el nombre del juego, la fecha y una tabla de las marcas de la lista (número, hoja, tipo, asunto, texto o comentario, valor medido, autor, estado y la última respuesta). El texto largo se ajusta; el encabezado de la tabla se repite en cada página.

Ambos toman la lista tal como está filtrada, así que filtre primero para informar de una hoja, un autor o solo los elementos abiertos.

## Exportar a BCF

Elija {{ui:BCF}}. MarkupCraft hace una imagen de cada marca de la lista en su hoja («Creando instantáneas para BCF (3 de 12)…»), y luego descarga «<name> markups.bcfzip». Cada marca se convierte en un tema BCF con su estado, autor, fechas, respuestas como comentarios, persona asignada y fecha límite tomadas de su elemento de pendientes, y la instantánea.

Úselo para llevar comentarios de revisión de planos a herramientas de coordinación BIM que leen BCF. Lo que se traslada y lo que no, está en [Conceptos básicos de BCF](topic:bcf-basics).

## Importar BCF

{{ui:Importar BCF}} lee un archivo .bcfzip (o .bcf) de una herramienta BIM:

- Las incidencias que vienen de la propia exportación BCF de MarkupCraft vuelven a encontrar sus marcas: las respuestas nuevas se agregan al hilo, y se fija un estado nuevo (Cerrado cuenta como Completado). Las respuestas que ya están no se agregan dos veces.
- Las demás incidencias se vuelven notas, con su título, descripción, autor y comentarios. Una nota va en la hoja cuyo número o nombre indican las etiquetas de la incidencia; si no, va en la hoja abierta. Una cámara BIM no tiene lugar en papel, así que esas notas se apilan en la esquina superior izquierda de la hoja para que usted las mueva.

Toda la importación es un solo paso: {{key:Mod+Z}} la revierte. Vea [Conceptos básicos de BCF](topic:bcf-basics).

## Lo que la lista todavía no hace

- Agrupar la lista (en su lugar, ordene y luego filtre).
- Editar valores en la lista (edítelos en {{ui:Propiedades}}; los campos de pendientes se editan en la pestaña {{ui:Lista de pendientes}}).
