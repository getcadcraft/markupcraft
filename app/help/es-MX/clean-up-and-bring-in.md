---
title: Limpiar los trazos a mano, y traer comentarios de revisión y avance de obra
summary: Convierta trazos a mano alzada en líneas, círculos, arcos y rectángulos; traiga los comentarios de revisión de un paquete de permiso y el avance de topografía de una obra como notas.
keywords: pluma, a mano alzada, limpiar, enderezar, círculo, línea, rectángulo, arco, permiso, comentarios de revisión, avance, dron, escaneo, topografía, notas, csv
from: 547d8e42
---

## Limpiar los trazos a mano

Dibuje con {{ui:Pluma}}, luego abra el menú {{ui:Más}} en el grupo Editar y elija {{ui:Limpiar los trazos a mano}}. Cada trazo de pluma seleccionado se convierte en lo que se pretendía: un trazo recto pasa a ser una línea (dejada exactamente horizontal o vertical cuando estaba casi así), uno redondo una elipse, parte de un círculo un arco, uno cerrado de cuatro esquinas un rectángulo, y cualquier otro una polilínea o un polígono. Los extremos sueltos de trazos dibujados juntos se atraen entre sí. Si no hay ningún trazo de pluma seleccionado, se limpian todos los trazos de pluma de la hoja abierta. Es un solo paso de deshacer: Ctrl+Z devuelve el trazo a mano alzada. La forma se calcula en su computadora con reglas fijas; no se envía nada a ningún lugar.

## Traer comentarios de revisión

El paquete de permiso de BimCraft contiene `01-review-comments.csv`: los comentarios que probablemente haga un revisor de planos, cada uno con la regla, la cláusula, lo que se necesita, lo que se encontró y qué hacer. En la pestaña {{ui:Tareas}}, abra {{ui:Comentarios de revisión del permiso}} y elija {{ui:Traer comentarios (CSV)}}. Cada comentario se convierte en una nota con estado Abierta, en una columna a la izquierda de la hoja abierta; arrastre cada una al lugar al que se refiere. Se calculan a partir de las verificaciones que existen, no a partir de un revisor de planos.

## Traer cajas de nodos HAZOP

El complemento P&ID de CadCraft dibuja los nodos de un estudio HAZOP y puede guardarlos como {{ui:Cajas de nodos HAZOP}} (un archivo JSON). Abra aquí la hoja P&ID impresa, vaya a la pestaña {{ui:Tareas}}, abra {{ui:Cajas de nodos HAZOP}} y elija {{ui:Traer cajas de nodos (JSON)}}. Cada nodo se convierte en un rectángulo con estado Abierta en la hoja, con su número, nombre, equipo y líneas en el texto, y el equipo escribe sus hallazgos como respuestas sobre él. La hoja se toma como se imprimió, a tamaño completo, desde la esquina inferior izquierda del dibujo; si se imprimió a otra escala, escriba ese número en {{ui:Impreso a}} primero (0.5 para 1:2). Un nodo que cae fuera de la página no se dibuja, y el panel indica cuántos son. Los marcadores son una ayuda para el estudio: muestran dónde están los nodos, no evalúan el estudio.

## Traer el avance de la obra

CivilCraft guarda una fila por cada vuelo de dron o escaneo de la obra. En la pestaña {{ui:Tareas}}, abra {{ui:Avance de la obra}} y elija {{ui:Traer avance (JSON)}}. Cada levantamiento se convierte en una nota en la hoja abierta que indica cuánto está hecho, qué queda por cortar o rellenar, qué se excavó de más o se rellenó de más, y qué queda fuera del plano. Un levantamiento con algo fuera del plano queda Abierta; uno limpio queda Aceptada.
