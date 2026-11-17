---
title: Conceptos básicos de BCF
summary: Qué contiene una exportación BCF de MarkupCraft, cómo usarla con herramientas de coordinación BIM y cuáles son sus límites.
keywords: bcf, bcfzip, formato de colaboración BIM, incidencias, coordinación, colisión, temas, punto de vista, captura, openbim, buildingsmart, exportar incidencias
from: 446f38c1
---

BCF (BIM Collaboration Format) es un formato de archivo abierto para pasar incidencias entre herramientas BIM. Muchos programas de coordinación de modelos y de modelado pueden importar un archivo `.bcfzip` como lista de incidencias. MarkupCraft escribe **BCF 2.1**.

## Crear uno

1. Abra la pestaña {{ui:Anotaciones}}.
2. Filtre la lista con lo que quiera enviar, por ejemplo {{ui:Estado}} "Abierto". Solo se exportan las anotaciones que aparecen en la lista.
3. Elija {{ui:BCF}}.
4. Espere mientras se crea una captura de cada anotación ("Creando capturas para BCF (5 de 20)…").

Resultado: se descarga "<nombre> markups.bcfzip" y la barra de estado indica cuántos temas contiene y el tamaño del archivo.

## Qué contiene

Cada anotación se convierte en un **tema**:

| Campo del tema | Contenido |
|---|---|
| Título | Número de la lista de pendientes, asunto y hoja, por ejemplo "#4 Nube en A-101 — Planta baja" |
| Tipo | El tipo de anotación (Nube, Llamada, Longitud…) |
| Estado | Abierto, Aceptado, Rechazado o Completado |
| Etiquetas | El tipo de anotación y la hoja |
| Autor y fechas | El autor de la anotación, y las fechas de creación y de modificación |
| Asignado a, fecha límite | Procedente de su elemento de la lista de pendientes, cuando lo tiene |
| Descripción | Su texto o el texto del sello, el valor medido, el comentario, y la hoja y el archivo |
| Comentarios | Uno por cada respuesta, con autor y fecha |
| Captura | Una imagen de la anotación en su parte de la hoja |
| Punto de vista | Una vista desde arriba de la posición de la anotación en la hoja |

Exportar de nuevo la misma anotación da el mismo ID de tema, de modo que una herramienta que importe BCF puede reconocerla como la misma incidencia.

## Límites que debe conocer

- **Una hoja no es un modelo.** El punto de vista apunta a la posición de la anotación sobre el papel, medida en metros de papel. No lleva a una herramienta BIM a un lugar del modelo. Use la captura y el nombre de la hoja para localizar el punto.
- **Los estados y los tipos son propios de MarkupCraft** (Abierto, Aceptado, Rechazado, Completado; Nube, Llamada…). El archivo los declara, como permite BCF, pero una herramienta con listas fijas propias puede asignarlos a otros valores o ignorarlos.
- **Importar trae comentarios, no vistas del modelo.** {{ui:Importar BCF}} añade respuestas y estados a las anotaciones que exportó, y crea notas de otras incidencias; no puede mostrar una cámara del modelo. Véase [Lista de anotaciones y exportación](topic:markups-list-and-export#import-bcf).
- Para las revisiones de planos, enviar las anotaciones de vuelta en un PDF suele ser más sencillo. BCF sirve para llevar los comentarios de los planos a un flujo de coordinación de modelos.
