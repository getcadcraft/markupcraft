---
title: Trabajar con varios archivos a la vez
summary: Abra muchos PDF como un solo juego, busque hojas entre archivos, copie marcas entre ellos y guarde la copia de cada archivo.
keywords: varios archivos, varios pdf, juego de planos, juego, lote, muchos archivos, combinar, disciplinas, arquitectónica, estructural, mecánica, guardar todo, cerrar
from: f59354ae
---

Un juego de planos suele llegar como un PDF por disciplina, o como un PDF por hoja. MarkupCraft trata todo lo que abra como **un solo juego**.

## Ábralos juntos

Seleccione todos los PDF en el selector de archivos a la vez, o suéltelos todos en el área de hojas. Para agregar más después, ábralos de la misma manera; se unen al final de la lista {{ui:Hojas}}, en el orden en que los abre.

Resultado: "Se abrieron 6 archivos (84 hojas en el juego)." Cada página es una hoja. Las hojas con número de hoja muestran "Hoja A-101" debajo de su nombre; las demás muestran el archivo y la página.

No hay un archivo de "juego" guardado: la próxima vez, abra de nuevo los mismos PDF (las copias "(marked up)", si guardó).

## En todo el juego

- **Buscar una hoja:** {{ui:Buscar hojas}} busca en los números de hoja, los nombres de hoja y los nombres de archivo de todos los archivos. {{key:PageUp}} y {{key:PageDown}} recorren en orden todas las hojas de todos los archivos.
- **Lista de marcas:** la pestaña {{ui:Marcas}} lista las marcas de todos los archivos. Filtre por {{ui:Hoja}} para reducirla. El CSV tiene una columna de archivo.
- **Lista de pendientes:** una sola numeración para todo el juego.
- **Comparar:** la hoja anterior y la nueva pueden venir de archivos distintos.
- **Copiar y pegar:** {{key:Mod+C}} en una hoja y {{key:Mod+V}} en otra, en cualquier archivo. La copia cae en el mismo lugar de la página, un poco desplazada.

## Guardar

Elija {{ui:Guardar}}. Con más de un archivo abierto, MarkupCraft pregunta:

- {{ui:Este archivo}}: una copia con marcas del archivo de la hoja en la que está.
- {{ui:Cada archivo con cambios}}: una copia de cada archivo con cambios sin guardar. Cada una se descarga por separado, como "<nombre del archivo> (marked up).pdf".
- {{ui:Cancelar}}

:::chromium
La primera vez que guarda varios archivos a la vez, Chrome y Edge pueden preguntar si este sitio puede descargar varios archivos. Elija {{ui:Permitir}}; si no, solo llega la primera copia.
:::

:::safari
Safari puede preguntar una vez por cada archivo. En un iPad, cada copia va a la app Archivos.
:::

Un archivo cuyas marcas se guardaron deja de contar como modificado; los demás siguen contando.

Las exportaciones de CSV, BCF y de lista de pendientes llevan el nombre del **primer** archivo que abrió.

## Cerrar

{{ui:Cerrar}} cierra todo el juego; todavía no hay forma de cerrar un solo archivo. Si hay algo sin guardar, pregunta:

- {{ui:Cancelar}}: no pasa nada.
- {{ui:Cerrar sin guardar}}: las marcas sin guardar se pierden.
- {{ui:Guardar copias primero}}: guarda cada archivo con cambios y luego cierra.

Cerrar también borra el historial de deshacer.

## Juegos grandes

- El texto de cada página se lee al abrir para encontrar los números de hoja, así que un juego de 100 hojas tarda un poco. La barra de estado cuenta las hojas mientras avanza.
- Las imágenes de las hojas en la lista se dibujan al desplazarse hasta ellas.
- Cada PDF abierto se guarda en la memoria de la pestaña del navegador. Si la pestaña se vuelve lenta, cierre otras pestañas pesadas, o revise una disciplina a la vez.
- Abrir dos veces el mismo archivo le da dos copias de sus hojas. Si pasa, elija {{ui:Cerrar}} y abra el juego de nuevo.
