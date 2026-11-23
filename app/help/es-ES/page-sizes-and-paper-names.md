---
title: Tamaños de página y nombres de papel
summary: Vea el tamaño de cada página de un PDF en milímetros y pulgadas y su nombre de papel (series A, B y C, ANSI, ARCH), y agrupe un conjunto mixto por tamaño para encontrar las páginas raras.
keywords: tamaño de página, formato de papel, nombre de papel, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, arquitectónico, mm, pulgadas, tamaño personalizado, por tamaño, tamaño raro, conjunto mixto, revisar pdf, cliente, incidencia, mediabox, cropbox, rotación
from: 08e1354f
---

Antes de enviar un conjunto al cliente, compruebe que cada hoja tiene el tamaño que debe tener. {{ui:MarkupCraft}} lee el tamaño de cada página del propio PDF y le da nombre al papel.

## Lo que hará

Mire el tamaño de una hoja y luego agrupe todo el conjunto por tamaño.

## Pasos

1. Abra los PDF ({{ui:Abrir}}), luego pulse {{key:Esc}} hasta que no haya nada seleccionado y {{ui:Seleccionar}} esté activo.
2. Mire {{ui:Propiedades}}. {{ui:Papel}} indica el nombre y la orientación, por ejemplo "A4, vertical". {{ui:Tamaño}} da los milímetros y las pulgadas.
3. Cada fila de la lista {{ui:Hojas}} tiene una línea de tamaño bajo el nombre de la hoja.
4. Elija {{ui:Por tamaño}} en el encabezado de {{ui:Hojas}}. La lista reúne las hojas bajo un encabezado por tamaño, con el grupo más grande primero. Un tamaño con solo unas pocas hojas se marca como raro.
5. Elija {{ui:Por tamaño}} otra vez para volver al orden propio del conjunto.

Resultado: una página de tamaño distinto al resto se ve con facilidad antes de enviar el conjunto.

## Cómo se elige el nombre

- El tamaño procede del recuadro de la página en el PDF, con la rotación aplicada, así que un A3 apaisado sigue siendo A3.
- Los nombres son las series A y B (ISO 216), la serie C (ISO 269), ANSI de A a E y ARCH de A a E.
- Una página a menos de 2 mm de un tamaño con nombre toma ese nombre. Cualquier otra página indica {{ui:personalizado}}, y {{ui:Tamaño con nombre más próximo}} indica qué tamaño es el más cercano y a cuánta distancia está.
- Las pulgadas proceden del tamaño real de la página, así que una página A4 mide 8.26 por 11.69 in.

## En los archivos que guarda

El libro de resumen ({{ui:Lista de anotaciones}}, y luego la hoja de cálculo) tiene una columna {{ui:Formato de papel}} en la hoja {{ui:Por hoja}} y una hoja de cálculo {{ui:Tamaños de página}}. El informe en PDF tiene una línea "Tamaños de página" con el recuento de cada tamaño.

:::note
Los valores en pulgadas de ANSI y ARCH se escribieron a partir de las tablas publicadas y no se han comparado con las normas impresas. Trate una página "personalizada" que se parezca a uno de ellos como algo que debe comprobar usted mismo.
:::
