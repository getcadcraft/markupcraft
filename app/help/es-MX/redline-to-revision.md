---
title: Enviar marcas al dibujante como redline
summary: Escriba las marcas abiertas como archivo redline para quien dibuja los cambios, y luego cargue sus respuestas para que cada marca muestre Aceptado o Rechazado.
keywords: redline, revisión, dibujante, aceptar, rechazar, respuestas, cc-redline, nube de revisión, aplicar marcas
from: cb099d04
---

Revisar es la mitad del trabajo; el dibujo todavía tiene que cambiar. El archivo redline lleva cada marca al dibujante, y las respuestas del dibujante traen el resultado de vuelta.

## Enviar

1. Abra la pestaña {{ui:Tareas}} y abra {{ui:Marcas a revisión}}.
2. Escriba la revisión contra la que están las marcas (por ejemplo B).
3. Elija {{ui:Exportar archivo de redline}}.

Obtiene un archivo `.redline.json` con un elemento por cada marca abierta: su hoja, dónde está (como fracciones de la hoja, para que una nueva impresión en otro tamaño siga alineada, y en puntos), sus palabras, su autor y su conversación, y su tarea si tiene una. Los comentarios de solo lectura de otros programas, las imágenes y las leyendas se omiten.

## Respuestas

El lado de dibujo responde a cada elemento como Aceptado, Rechazado o Hecho, con una nota, en un archivo `.redline-answers.json`. Elija {{ui:Cargar archivo de respuestas…}} y selecciónelo: cada marca recibe ese estado y la nota del dibujante en su conversación, y una tarea cuya marca fue aceptada o hecha queda terminada. Un paso de deshacer revierte todas las respuestas.

El formato del archivo está en `docs/REDLINE-FORMAT.md`. El lado de CadCraft (leer el paquete, aceptar o rechazar cada elemento, las nubes de revisión y el registro) se desarrolla por separado.
