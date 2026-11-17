---
title: Crear una lista de pendientes
summary: Convierta marcas en pendientes numerados con responsable, fecha de vencimiento y estado, y exporte la lista.
keywords: lista de pendientes, pendiente, lista de fallas, deficiencia, incidencias de campo, observación, asignar, responsable, fecha de vencimiento, entrega de obra, recorrido, número
from: b98b38e6
---

Un pendiente es una marca con número, responsable, fecha de vencimiento y estado del pendiente. El número se dibuja en la hoja junto a la marca, para que la hoja impresa y la lista coincidan.

## Agregar pendientes

1. Marque cada incidencia en las hojas: una nube, una llamada, una nota, lo que sea.
2. Seleccione una o más de ellas (vea [Seleccionar, mover y cambiar marcas](topic:select-and-edit)).
3. Abra la pestaña {{ui:Lista de pendientes}} y elija {{ui:Agregar la selección a la lista de pendientes}}, o elija {{ui:Agregar a la lista de pendientes}} en {{ui:Propiedades}}.

Resultado: cada marca recibe el siguiente número (1, 2, 3…), en el orden de las hojas y luego en el orden en que se dibujaron. Aparece una insignia numerada en la hoja, y la barra de estado dice "Se agregaron 3 pendientes a la lista de pendientes." Las marcas que ya tienen número, y los comentarios de solo lectura, se omiten.

## Completar los detalles

En la pestaña {{ui:Lista de pendientes}}, cada pendiente muestra su número, asunto, texto, hoja y estado, con tres campos debajo. Los mismos campos están en {{ui:Propiedades}}, bajo "Lista de pendientes", cuando se selecciona la marca:

- {{ui:Responsable}}: un nombre o un oficio, como texto libre.
- {{ui:Vencimiento}}: una fecha, del selector de fecha.
- {{ui:Estado del pendiente}}: Abierto, En proceso, Listo para revisión o Cerrado.

Haga clic en el encabezado de un pendiente para ir a él en su hoja.

El estado del pendiente es independiente del estado de revisión de la marca (Abierto, Aceptado, Rechazado, Completado). Use el estado del pendiente para el trabajo, y el estado de revisión para el comentario.

## Quitar un pendiente

Seleccione la marca y elija {{ui:Quitar de la lista de pendientes}} en {{ui:Propiedades}}. La marca se queda; solo se quita el número. Mientras el juego está abierto, los números no se reutilizan: el siguiente pendiente todavía recibe el siguiente número nuevo, así que un hueco significa que se quitó un pendiente. Cuando un archivo se vuelve a abrir, la numeración continúa después del número más alto que tenga.

## Exportar la lista

Elija {{ui:Exportar CSV}} en la pestaña {{ui:Lista de pendientes}}. Obtiene "<nombre> punch list.csv", con las columnas Núm., Hoja, Archivo, Página, Pendiente, Comentario, Responsable, Vencimiento, Estado, Estado de la marca, Autor y Creado, en orden de número. Ábralo en cualquier hoja de cálculo.

Los números de pendiente, los responsables, las fechas de vencimiento y los estados también se guardan dentro del PDF marcado, así regresan al volver a abrirlo. Otros visores de PDF muestran la insignia numerada como parte de la marca. La exportación BCF de la lista de marcas también incluye el responsable y la fecha de vencimiento (vea [Conceptos básicos de BCF](topic:bcf-basics)).

## En obra con una tableta

Abra el juego en un iPad, recorra la obra, y coloque una {{ui:Nota}} o dibuje una {{ui:Nube}} en cada incidencia. Agréguelas a la lista de pendientes conforme avanza, y guarde antes de irse. Vea [Revisar en un iPad o pantalla táctil](topic:review-on-a-tablet).

Un informe con formato de la lista de pendientes en PDF u hoja de cálculo, y las fotos adjuntas a los pendientes, todavía no están disponibles.
