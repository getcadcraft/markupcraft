---
title: Enviar las anotaciones al delineante como corrección
summary: Escriba las anotaciones abiertas como archivo de corrección para quien dibuja los cambios, y luego cargue sus respuestas para que cada anotación muestre Aceptada o Rechazada.
keywords: corrección, revisión, delineante, aceptar, rechazar, respuestas, cc-redline, nube de revisión, aplicar anotaciones
from: cb099d04
---

Revisar es la mitad del trabajo; el dibujo todavía tiene que cambiar. El archivo de corrección lleva cada anotación abierta al delineante, y las respuestas del delineante devuelven el resultado.

## Enviar

1. Abra la pestaña {{ui:Tareas}} y abra {{ui:Corrección sobre la revisión}}.
2. Escriba la revisión a la que se refieren las anotaciones (por ejemplo B).
3. Elija {{ui:Exportar archivo de corrección}}.

Obtiene un archivo `.redline.json` con un elemento por cada anotación abierta: su hoja, su posición (como fracciones de la hoja, para que una nueva impresión a otro tamaño siga alineada, y en puntos), sus palabras, su autor e hilo, y su tarea si tiene una. Los comentarios de solo lectura de otros programas, las imágenes y las leyendas se omiten.

## Respuestas

El equipo de dibujo responde a cada elemento como Aceptado, Rechazado o Hecho, con una nota, en un archivo `.redline-answers.json`. Elija {{ui:Cargar archivo de respuestas…}} y seleccione el archivo: cada anotación recibe ese estado y la nota del delineante en su hilo, y una tarea cuya anotación fue aceptada o hecha queda terminada. Un solo paso de deshacer revierte todas las respuestas.

El formato del archivo está en `docs/REDLINE-FORMAT.md`. La parte de CadCraft (leer el paquete, aceptar o rechazar cada elemento, las nubes de revisión y el registro) se desarrolla por separado.
