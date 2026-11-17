---
title: Buscar texto en los planos
summary: Busque las palabras de cada hoja, vaya a cada coincidencia y márquelas todas de una vez con una nube de revisión.
keywords: buscar, búsqueda, texto, palabra, palabras, ctrl f, buscar, nota, nota clave, llamada, nubear todo, resaltar coincidencias, ocr, escanear, escaneado, leer texto, seleccionar texto, copiar texto, tesseract
from: 3435c9eb
---

{{ui:Find text}}, en la parte superior del panel {{ui:Sheets}}, busca las palabras dibujadas en las propias hojas. {{ui:Search sheets}}, debajo, solo busca nombres de hoja.

## Buscar

1. Pulse {{key:Mod+F}}, o abra {{ui:Find text}}.
2. Escriba las palabras, como `campana` o `verificar en obra`.
3. Elija {{ui:All sheets}} o {{ui:This sheet}}, y marque {{ui:Match case}} o {{ui:Whole words}} si los necesita.
4. Pulse {{key:Enter}} o elija {{ui:Find}}.

Resultado: cada coincidencia aparece en la lista con su número de hoja y las palabras de alrededor, y se marca en amarillo en su hoja. Elija una coincidencia para abrir su hoja y acercar la vista a ella.

Una frase se encuentra aunque el dibujo la divida en dos fragmentos de texto o en dos líneas.

## Nubear cada coincidencia

Elija {{ui:Cloud all}}. Se traza una nube de revisión alrededor de cada coincidencia de la lista, en todas las hojas, con "Encontrado: <sus palabras>" como comentario. Un {{key:Mod+Z}} las elimina todas.

## Leer el texto de un escaneo (OCR)

Una hoja escaneada es solo una imagen: hasta que se lean sus palabras, no hay nada que encontrar. Cuando el recuento indica que hay hojas sin texto, elija {{ui:Read text (OCR)…}} debajo, o bien {{ui:Pages}} › {{ui:Read text (OCR)…}}.

1. Elija las páginas: esta hoja, todas las páginas del archivo o todas las páginas de todos los archivos abiertos.
2. Elija el idioma del texto. {{ui:Also English}} lee también palabras en inglés.
3. Elija {{ui:Read text}}. Una barra muestra la página que se está leyendo; {{ui:Stop}} termina la lectura y conserva las páginas ya leídas.

Resultado: las palabras se pueden encontrar, seleccionar y copiar como cualquier otro texto. Todo se ejecuta en su ordenador: no se envía nada a ningún sitio. Funciona sin conexión en Studio, y en el navegador una vez guardada la aplicación para uso sin conexión (en inglés y en el idioma de su interfaz) o cuando ya se ha usado un idioma una vez. Las páginas que ya tienen texto se dejan como están.

Al guardar, las palabras se incluyen en el PDF como texto invisible detrás de la imagen, aparte de sus marcas, para que otros programas de PDF también puedan buscarlas y copiarlas. Hasta que guarde, el archivo aparece como no guardado.

## Seleccionar y copiar texto

Elija {{ui:More}} › {{ui:Select text to copy}}. Arrastre desde una palabra hasta otra para seleccionar las palabras entre ambas, arrastre desde un espacio vacío para seleccionar las palabras de un recuadro, o haga doble clic en una palabra. {{key:Mod+A}} selecciona todas las palabras de la hoja. {{key:Mod+C}} las copia, conservando las líneas. Cualquier otra herramienta lo termina.

## Conviene saber

- Los dibujos cuyas letras están dibujadas como líneas tampoco tienen texto; leerlos como imagen funciona mejor con texto impreso, como un libro escaneado o un pliego de prescripciones.
- El lector es Tesseract, integrado en la aplicación con sus datos de idioma para el inglés y los idiomas de la aplicación. La primera ejecución lo carga (unos 6 MB, más con un segundo idioma).
- La calidad de lectura depende del escaneo: las páginas limpias a 300 dpi se leen casi palabra por palabra; los escaneos antiguos, tenues o de baja resolución pierden más palabras.
- La lista muestra las primeras 500 coincidencias; {{ui:Cloud all}} nubea hasta 2,000.
- Las coincidencias se borran al cerrar el conjunto, y para un archivo al cambiar sus páginas.
