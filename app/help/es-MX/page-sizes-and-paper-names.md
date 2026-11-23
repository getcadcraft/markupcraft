---
title: Tamaños de página y nombres de papel
summary: Vea el tamaño de cada página PDF en milímetros y pulgadas, y su nombre de papel (series A, B y C, ANSI, ARCH), y agrupe un juego mixto por tamaño para encontrar las páginas atípicas.
keywords: tamaño de página, tamaño de papel, nombre de papel, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, arquitectónico, mm, pulgadas, tamaño personalizado, por tamaño, tamaño atípico, juego mixto, revisar pdf, cliente, emisión, mediabox, cropbox, rotación
from: 08e1354f
---

Antes de enviar un juego al cliente, compruebe que cada hoja tenga el tamaño que debe tener. {{ui:MarkupCraft}} lee el tamaño de cada página desde el propio PDF y nombra el papel.

## Lo que hará

Revise el tamaño de una hoja y luego agrupe todo el juego por tamaño.

## Pasos

1. Abra los PDF ({{ui:Open}}), luego presione {{key:Esc}} hasta que no haya nada seleccionado y {{ui:Select}} esté activado.
2. Revise {{ui:Properties}}. {{ui:Paper}} indica el nombre y la orientación, por ejemplo "A4, vertical". {{ui:Size}} da milímetros y pulgadas.
3. Cada fila de la lista {{ui:Sheets}} tiene una línea de tamaño debajo del nombre de la hoja.
4. Elija {{ui:By size}} en el encabezado de {{ui:Sheets}}. La lista reúne las hojas bajo un encabezado por tamaño, con el grupo más grande primero. Un tamaño con solo unas pocas hojas se marca como atípico.
5. Elija {{ui:By size}} de nuevo para volver al orden original del juego.

Resultado: una página de tamaño distinto al resto es fácil de ver antes de enviar el juego.

## Cómo se elige el nombre

- El tamaño proviene del recuadro de la página en el PDF, con la rotación aplicada, así que un A3 horizontal sigue siendo A3.
- Los nombres son las series A y B (ISO 216), la serie C (ISO 269), ANSI de la A a la E y ARCH de la A a la E.
- Una página a menos de 2 mm de un tamaño con nombre toma ese nombre. Cualquier otra página indica {{ui:custom}} y {{ui:Nearest named size}} muestra cuál tamaño es el más cercano y a qué distancia está.
- Las pulgadas provienen del tamaño real de la página, así que una página A4 mide 8.26 por 11.69 in.

## En los archivos que guarda

El libro de resumen ({{ui:Markups list}}, luego la hoja de cálculo) tiene una columna {{ui:Paper size}} en la hoja {{ui:By sheet}} y una hoja de cálculo {{ui:Page sizes}}. El informe PDF tiene una línea "Page sizes" con el conteo de cada tamaño.

:::note
Los valores en pulgadas de ANSI y ARCH se escribieron a partir de las tablas publicadas y no se han comparado con los estándares impresos. Trate una página "personalizado" que esté cerca de uno de ellos como un asunto para su propia verificación.
:::
