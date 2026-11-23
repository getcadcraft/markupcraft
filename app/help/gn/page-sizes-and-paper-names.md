---
title: Tamaños de página y nombres de papel
summary: Ver el tamaño de cada página del PDF en milímetros y pulgadas y su nombre de papel (series A, B y C, ANSI, ARCH), y agrupar un juego mixto por tamaño para encontrar las páginas raras.
keywords: tamaño de página, tamaño de papel, nombre de papel, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, arquitectónico, mm, pulgadas, tamaño personalizado, por tamaño, tamaño raro, juego mixto, revisar pdf, cliente, incidencia, mediabox, cropbox, rotación
from: 08e1354f
---

Antes de enviar un juego al cliente, revisá que cada hoja tenga el tamaño que debe tener. {{ui:MarkupCraft}} lee el tamaño de cada página del propio PDF y le pone nombre al papel.

## Qué vas a hacer

Mirar el tamaño de una hoja, y después agrupar todo el juego por tamaño.

## Pasos

1. Abrí los PDF ({{ui:Abrir}}), después presioná {{key:Esc}} hasta que no haya nada seleccionado y {{ui:Seleccionar}} esté activo.
2. Mirá {{ui:Propiedades}}. {{ui:Papel}} indica el nombre y la orientación, por ejemplo "A4, vertical". {{ui:Tamaño}} da milímetros y pulgadas.
3. Cada fila de la lista {{ui:Hojas}} tiene una línea de tamaño debajo del nombre de la hoja.
4. Elegí {{ui:Por tamaño}} en el encabezado de {{ui:Hojas}}. La lista junta las hojas bajo un título por tamaño, el grupo más grande primero. Un tamaño con solo unas pocas hojas se marca como raro.
5. Elegí {{ui:Por tamaño}} otra vez para volver al orden propio del juego.

Resultado: una página que tiene un tamaño distinto del resto se ve fácilmente antes de enviar el juego.

## Cómo se elige el nombre

- El tamaño sale del recuadro de la página en el PDF con la rotación aplicada, así que un A3 horizontal sigue siendo A3.
- Los nombres son las series A y B (ISO 216), la serie C (ISO 269), ANSI A a E y ARCH A a E.
- Una página a menos de 2 mm de un tamaño con nombre toma ese nombre. Cualquier otra página dice {{ui:personalizado}}, y {{ui:Tamaño con nombre más cercano}} indica cuál es el tamaño más cercano y cuánto difiere.
- Las pulgadas salen del tamaño real de la página, así que una página A4 mide 8,26 por 11,69 pulg.

## En los archivos que guardás

El libro resumen ({{ui:Lista de anotaciones}}, después la hoja de cálculo) tiene una columna {{ui:Tamaño de papel}} en la hoja {{ui:Por hoja}} y una hoja de trabajo {{ui:Tamaños de página}}. El informe PDF tiene una línea "Tamaños de página" con la cantidad de cada tamaño.

:::note
Los valores en pulgadas de ANSI y ARCH se escribieron a partir de las tablas publicadas y no se compararon con las normas impresas. Tomá una página "personalizado" que esté cerca de uno de ellos como algo para verificar vos mismo.
:::
