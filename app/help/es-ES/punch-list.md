---
title: Crear una lista de pendientes
summary: Convierta anotaciones en elementos pendientes numerados con responsable, fecha límite y estado, y exporte la lista.
keywords: lista de pendientes, pendiente, lista de deficiencias, deficiencia, incidencias de obra, observación, asignar, responsable, fecha límite, cierre, recorrido, número
from: b98b38e6
---

Un elemento pendiente es una anotación con un número, un responsable, una fecha límite y un estado del elemento. El número se dibuja en la hoja junto a la anotación, así que la hoja impresa y la lista coinciden.

## Añadir elementos

1. Anote cada problema en las hojas: una nube, una llamada, una nota, lo que sea.
2. Seleccione una o más (vea [Seleccionar, mover y cambiar anotaciones](topic:select-and-edit)).
3. Abra la pestaña {{ui:Lista de pendientes}} y elija {{ui:Añadir la selección a la lista de pendientes}}, o elija {{ui:Añadir a la lista de pendientes}} en {{ui:Propiedades}}.

Resultado: cada anotación recibe el siguiente número (1, 2, 3…), en orden de hoja y después en el orden en que se dibujaron. Aparece una insignia numerada en la hoja, y la barra de estado indica "Se han añadido 3 elementos a la lista de pendientes." Las anotaciones que ya tienen número, y los comentarios de solo lectura, se omiten.

## Completar los detalles

En la pestaña {{ui:Lista de pendientes}}, cada elemento muestra su número, asunto, texto, hoja y estado, con tres campos debajo. Los mismos campos están en {{ui:Propiedades}}, bajo "Lista de pendientes", cuando la anotación está seleccionada:

- {{ui:Responsable}}: un nombre o un oficio, como texto libre.
- {{ui:Fecha límite}}: una fecha, desde el selector de fecha.
- {{ui:Estado del elemento}}: Abierto, En curso, Listo para revisar o Cerrado.

Haga clic en el encabezado de un elemento para ir a él en su hoja.

El estado del elemento es independiente del estado de revisión de la anotación (Abierto, Aceptado, Rechazado, Completado). Use el estado del elemento para el trabajo, y el estado de revisión para el comentario.

## Quitar un elemento

Seleccione la anotación y elija {{ui:Quitar de la lista de pendientes}} en {{ui:Propiedades}}. La anotación se queda; solo se va el número. Mientras el conjunto esté abierto, los números no se reutilizan: el siguiente elemento recibe el siguiente número nuevo, así que un hueco significa que se quitó un elemento. Cuando se vuelve a abrir un archivo, la numeración continúa a partir del número más alto que contenga.

## Exportar la lista

Elija {{ui:Exportar CSV}} en la pestaña {{ui:Lista de pendientes}}. Obtiene "<name> punch list.csv", con las columnas Nº, Hoja, Archivo, Página, Elemento, Comentario, Responsable, Fecha límite, Estado, Estado de la anotación, Autor y Creado, ordenadas por número. Ábralo en cualquier hoja de cálculo.

Los números de pendiente, los responsables, las fechas límite y los estados de elemento también se guardan dentro del PDF anotado, así que vuelven al reabrirlo. Otros visores de PDF muestran la insignia numerada como parte de la anotación. La exportación BCF de la lista de anotaciones también incluye el responsable y la fecha límite (vea [Conceptos básicos de BCF](topic:bcf-basics)).

## En obra con una tableta

Abra el conjunto en un iPad, recorra la obra, y coloque una {{ui:Nota}} o dibuje una {{ui:Nube}} en cada problema. Añádalos a la lista de pendientes según avanza, y guarde antes de salir. Vea [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).

Un informe de la lista de pendientes en PDF o en hoja de cálculo con formato, y fotos adjuntas a los elementos, todavía no están disponibles.
