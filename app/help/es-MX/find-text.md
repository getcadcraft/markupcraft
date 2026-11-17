---
title: Buscar texto en los planos
summary: Busque las palabras de cada hoja, vaya a cada coincidencia y enmárquelas todas en un solo paso.
keywords: buscar, búsqueda, texto, palabra, palabras, ctrl f, buscar algo, nota, nota clave, llamada, nube en todo, resaltar coincidencias, ocr, escaneo, escaneado, leer texto, seleccionar texto, copiar texto, tesseract
from: 3435c9eb
---

{{ui:Buscar texto}}, en la parte superior del panel {{ui:Hojas}}, busca las palabras dibujadas en las propias hojas. {{ui:Buscar hojas}}, debajo, solo busca nombres de hojas.

## Buscar

1. Pulse {{key:Mod+F}} o abra {{ui:Buscar texto}}.
2. Escriba las palabras, como `campana` o `verificar en obra`.
3. Elija {{ui:Todas las hojas}} o {{ui:Esta hoja}}, y marque {{ui:Coincidir mayúsculas y minúsculas}} o {{ui:Palabras completas}} si lo necesita.
4. Pulse {{key:Enter}} o elija {{ui:Buscar}}.

Resultado: cada coincidencia aparece en la lista con su número de hoja y las palabras alrededor, y se marca en amarillo en su hoja. Elija una coincidencia para abrir su hoja y acercar la vista a ella.

Una frase se encuentra aunque el dibujo la divida en dos fragmentos de texto o en dos líneas.

## Enmarcar cada coincidencia

Elija {{ui:Nube en todo}}. Se traza una nube de revisión alrededor de cada coincidencia de la lista, en cada hoja, con "Encontrado: <sus palabras>" como comentario. Un {{key:Mod+Z}} las elimina todas.

## Leer el texto de un escaneo (OCR)

Una hoja escaneada es solo una imagen: hasta que se leen sus palabras, no hay nada que buscar. Cuando el conteo indique que hay hojas sin texto, elija {{ui:Leer texto (OCR)…}} debajo, o {{ui:Páginas}} › {{ui:Leer texto (OCR)…}}.

1. Elija las páginas: esta hoja, cada página del archivo o cada página de todos los archivos abiertos.
2. Elija el idioma del texto. {{ui:También inglés}} lee también palabras en inglés.
3. Elija {{ui:Leer texto}}. Una barra muestra la página que se está leyendo; {{ui:Detener}} termina la ejecución y conserva las páginas ya leídas.

Resultado: las palabras se pueden buscar, seleccionar y copiar como cualquier otro texto. Todo se ejecuta en su equipo: no se envía nada a ningún lugar. Funciona sin conexión en Studio, y en el navegador una vez que la aplicación se guardó para uso sin conexión (inglés y el idioma de su interfaz) o cuando un idioma ya se usó una vez. Las páginas que ya tienen texto no se modifican.

Al guardar, las palabras se incorporan al PDF como texto invisible detrás de la imagen, aparte de sus marcas, para que otros programas de PDF también puedan buscarlas y copiarlas. Hasta que guarde, el archivo aparece como sin guardar.

## Seleccionar y copiar texto

Elija {{ui:Más}} › {{ui:Seleccionar texto para copiar}}. Arrastre de una palabra a otra para seleccionar las palabras entre ellas, arrastre desde un espacio vacío para seleccionar las palabras de un recuadro, o haga doble clic en una palabra. {{key:Mod+A}} selecciona cada palabra de la hoja. {{key:Mod+C}} las copia, conservando las líneas. Cualquier otra herramienta la termina.

## Para tener en cuenta

- Los planos cuyas letras están dibujadas como líneas tampoco tienen texto; leerlos como imagen funciona mejor con texto impreso, como un libro escaneado o una especificación.
- El lector es Tesseract, incluido en la aplicación con sus datos de idioma para inglés y los idiomas de la aplicación. La primera ejecución lo carga (unos 6 MB, más por un segundo idioma).
- Qué tan bien lee depende del escaneo: las páginas limpias a 300 dpi se leen casi palabra por palabra; los escaneos viejos, tenues o de baja resolución pierden más palabras.
- La lista muestra las primeras 500 coincidencias; {{ui:Nube en todo}} marca hasta 2,000.
- Las coincidencias se borran al cerrar el juego de planos, y para un archivo al cambiar sus páginas.
