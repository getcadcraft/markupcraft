---
title: Trabajar con varios archivos a la vez
summary: Abra muchos PDF como un solo conjunto, busque hojas entre archivos, copie anotaciones entre ellos y guarde la copia de cada archivo.
keywords: varios archivos, varios pdf, juego de planos, conjunto, lote, muchos archivos, combinar, disciplinas, arquitectónico estructural mecánico, guardar todo, cerrar
from: f59354ae
---

Un juego de planos suele llegar como un PDF por disciplina, o un PDF por hoja. MarkupCraft trata todo lo que abre como **un solo conjunto**.

## Abrirlos todos juntos

Seleccione todos los PDF a la vez en el selector de archivos, o suéltelos todos sobre el área de hojas. Para añadir más después, ábralos de la misma forma; se añaden al final de la lista {{ui:Hojas}} en el orden en que los abre.

Resultado: «Se abrieron 6 archivos (84 hojas en el conjunto).» Cada página es una hoja. Las hojas con número muestran «Hoja A-101» debajo de su nombre; las demás muestran el archivo y la página.

No hay un archivo de «conjunto» guardado: la próxima vez, abra de nuevo los mismos PDF (las copias «(marked up)», si guardó).

## En todo el conjunto

- **Buscar una hoja:** {{ui:Buscar hojas}} busca en los números de hoja, nombres de hoja y nombres de archivo de todos los archivos. {{key:PageUp}} y {{key:PageDown}} recorren en orden todas las hojas de todos los archivos.
- **Lista de anotaciones:** la pestaña {{ui:Anotaciones}} enumera las anotaciones de todos los archivos. Filtre por {{ui:Hoja}} para reducirla. El CSV tiene una columna Archivo.
- **Lista de pendientes:** una sola numeración para todo el conjunto.
- **Comparar:** la hoja antigua y la nueva pueden proceder de archivos distintos.
- **Copiar y pegar:** {{key:Mod+C}} en una hoja y {{key:Mod+V}} en otra, de cualquier archivo. La copia cae en el mismo lugar de la página, ligeramente desplazada.

## Guardar

Elija {{ui:Guardar}}. Con más de un archivo abierto, MarkupCraft pregunta:

- {{ui:Este archivo}}: una copia con anotaciones del archivo de la hoja en la que está.
- {{ui:Todos los archivos modificados}}: una copia de cada archivo con cambios sin guardar. Cada una se descarga por separado, como «<nombre del archivo> (marked up).pdf».
- {{ui:Cancelar}}

:::chromium
La primera vez que guarde varios archivos a la vez, Chrome y Edge pueden preguntar si este sitio puede descargar varios archivos. Elija {{ui:Permitir}}; si no, solo llega la primera copia.
:::

:::safari
Safari puede preguntar una vez por cada archivo. En un iPad, cada copia va a la app Archivos.
:::

Un archivo cuyas anotaciones se han guardado deja de contar como modificado; los demás siguen contando.

Las exportaciones de CSV, BCF y lista de pendientes llevan el nombre del **primer** archivo que abrió.

## Cerrar

{{ui:Cerrar}} cierra todo el conjunto; todavía no hay forma de cerrar solo un archivo. Si hay algo sin guardar, pregunta:

- {{ui:Cancelar}}: no ocurre nada.
- {{ui:Cerrar sin guardar}}: se pierden las anotaciones sin guardar.
- {{ui:Guardar copias primero}}: guarda cada archivo modificado y luego cierra.

Cerrar también borra el historial de deshacer.

## Conjuntos grandes

- El texto de cada página se lee al abrir para encontrar los números de hoja, así que un conjunto de 100 hojas tarda un rato. La barra de estado cuenta las hojas a medida que avanza.
- Las imágenes de hoja de la lista se dibujan al desplazarse hasta ellas.
- Cada PDF abierto se mantiene en la memoria de la pestaña del navegador. Si la pestaña se vuelve lenta, cierre otras pestañas pesadas o revise una disciplina cada vez.
- Abrir dos veces el mismo archivo da dos copias de sus hojas. Si ocurre, elija {{ui:Cerrar}} y vuelva a abrir el conjunto.
