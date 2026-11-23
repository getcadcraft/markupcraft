---
title: Conceptos básicos de BCF
summary: Qué contiene una exportación BCF desde MarkupCraft, cómo usarla con herramientas de coordinación BIM y sus límites.
keywords: bcf, bcfzip, formato de colaboración BIM, incidencias, coordinación, interferencia, temas, vista, captura, openbim, buildingsmart, exportar incidencias
from: 0de26175
---

BCF (BIM Collaboration Format) es un formato de archivo abierto para pasar incidencias entre herramientas BIM. Muchos programas de coordinación y creación de modelos pueden importar un archivo `.bcfzip` como una lista de incidencias. MarkupCraft escribe **BCF 2.1**.

## Crear uno

1. Abra la pestaña {{ui:Markups}}.
2. Filtre la lista con lo que desea enviar, por ejemplo {{ui:Status}} "Open". Solo se exportan las marcas listadas.
3. Elija {{ui:BCF}}.
4. Espere mientras se crea una captura de cada marca ("Making snapshots for BCF (5 of 20)…").

Resultado: se descarga "<name> markups.bcfzip" y la barra de estado indica cuántos temas contiene y el tamaño del archivo.

## Qué contiene

Cada marca se convierte en un **tema**:

| Campo del tema | Se llena con |
|---|---|
| Title | Número de pendiente, asunto y hoja, por ejemplo "#4 Cloud on A-101 — Floor plan" |
| Type | El tipo de marca (Cloud, Callout, Length…) |
| Status | Open, Accepted, Rejected o Completed |
| Labels | El tipo de marca y la hoja |
| Author and dates | El autor de la marca, y las fechas de creación y modificación |
| Assigned to, due date | De su elemento de pendiente, cuando lo tiene |
| Description | Su texto o el texto del sello, el valor medido, el comentario, y la hoja y el archivo |
| Comments | Uno por respuesta, con autor y fecha |
| Snapshot | Una imagen de la marca en su parte de la hoja |
| Viewpoint | Una vista desde arriba de la ubicación de la marca en la hoja |

Exportar de nuevo la misma marca genera el mismo ID de tema, para que una herramienta que importe BCF pueda reconocerla como la misma incidencia.

## Qué regresa al importar

{{ui:Import BCF}} lee archivos BCF 2.0, 2.1 y 3.0 (verificado con los 19 archivos de prueba oficiales de buildingSMART 3.0: se leyó cada tema y los comentarios de los tres que tienen texto). Para un tema que es suyo (mismo ID de tema) agrega los comentarios nuevos como respuestas y toma el nuevo estado. Cualquier otro tema se convierte en una nota en la hoja que indique su etiqueta o el nombre del archivo; si no, en la hoja abierta, con su título, descripción, asignado y fecha de vencimiento como texto de la nota, y sus comentarios como respuestas.

| En el tema BCF | En MarkupCraft |
|---|---|
| Title, description, assignee, due date | El texto de la nota |
| Comments con texto | Respuestas |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done cuentan como Completed) | El estado de la marca |
| Author y fecha de creación | El autor y la fecha de la nota |
| Camera position | Un lugar en la hoja, solo para un tema vinculado a una hoja por etiqueta o nombre de archivo |
| Model selection, hidden parts, clipping planes, snapshots | No se conservan: una hoja no tiene modelo donde mostrarlos |

## Límites que debe conocer

- **Una hoja no es un modelo.** La vista apunta a la posición de la marca en el papel, medida en metros de papel. No lleva a una herramienta BIM a un lugar del modelo. Use la captura y el nombre de la hoja para encontrar el punto.
- **Los estados y tipos son propios de MarkupCraft** (Open, Accepted, Rejected, Completed; Cloud, Callout…). El archivo los declara, como permite BCF, pero una herramienta con listas fijas propias puede asignarlos a otros valores o ignorarlos.
- **Importar trae comentarios, no vistas del modelo.** {{ui:Import BCF}} agrega respuestas y estados a las marcas que exportó, y crea notas de otras incidencias; no puede mostrar una cámara del modelo. Vea [Markups list and export](topic:markups-list-and-export#import-bcf).
- Enviar las marcas de vuelta como PDF suele ser más sencillo para la revisión de planos. BCF sirve para llevar los comentarios de planos a un flujo de coordinación de modelos.
