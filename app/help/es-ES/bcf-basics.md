---
title: Conceptos básicos de BCF
summary: Qué contiene una exportación BCF desde MarkupCraft, cómo usarla con herramientas de coordinación BIM y sus límites.
keywords: bcf, bcfzip, formato de colaboración BIM, incidencias, coordinación, interferencias, temas, punto de vista, instantánea, openbim, buildingsmart, exportar incidencias
from: 0de26175
---

BCF (BIM Collaboration Format) es un formato de archivo abierto para pasar incidencias entre herramientas BIM. Muchos programas de coordinación de modelos y de autoría pueden importar un archivo `.bcfzip` como lista de incidencias. MarkupCraft escribe **BCF 2.1**.

## Crear uno

1. Abra la pestaña {{ui:Anotaciones}}.
2. Filtre la lista con lo que quiera enviar, por ejemplo {{ui:Estado}} "Abierto". Solo se exportan las anotaciones de la lista.
3. Elija {{ui:BCF}}.
4. Espere mientras se genera una instantánea de cada anotación ("Generando instantáneas para BCF (5 de 20)…").

Resultado: se descarga "<name> markups.bcfzip" y la barra de estado indica cuántos temas contiene y el tamaño del archivo.

## Qué contiene

Cada anotación se convierte en un **tema**:

| Campo del tema | Se rellena con |
|---|---|
| Título | Número de pendiente, asunto y hoja, por ejemplo "#4 Nube en A-101 — Planta" |
| Tipo | El tipo de anotación (Nube, Llamada, Longitud…) |
| Estado | Open, Accepted, Rejected o Completed |
| Etiquetas | El tipo de anotación y la hoja |
| Autor y fechas | El autor de la anotación y las fechas de creación y modificación |
| Asignada a, fecha límite | De su pendiente, cuando tiene uno |
| Descripción | Su texto o el texto del sello, el valor medido, el comentario, y la hoja y el archivo |
| Comentarios | Uno por respuesta, con autor y fecha |
| Instantánea | Una imagen de la anotación en su parte de la hoja |
| Punto de vista | Una vista desde arriba del lugar de la anotación en la hoja |

Exportar de nuevo la misma anotación da el mismo ID de tema, de modo que una herramienta que importe BCF puede reconocerla como la misma incidencia.

## Qué vuelve al importar

{{ui:Importar BCF}} lee archivos BCF 2.0, 2.1 y 3.0 (comprobado con los 19 archivos de prueba oficiales de buildingSMART 3.0: se leyó cada tema y los comentarios de los tres que tienen texto). Para un tema que es de los suyos (mismo ID de tema) añade los comentarios nuevos como respuestas y toma el estado nuevo. Cualquier otro tema se convierte en una nota en la hoja que nombre su etiqueta o nombre de archivo; si no, en la hoja abierta, con su título, descripción, responsable y fecha límite como texto de la nota, y sus comentarios como respuestas.

| En el tema BCF | En MarkupCraft |
|---|---|
| Título, descripción, responsable, fecha límite | El texto de la nota |
| Comentarios con texto | Respuestas |
| Estado Open, Accepted, Rejected, Completed (Closed, Resolved, Done cuentan como Completed) | El estado de la anotación |
| Autor y fecha de creación | El autor y la fecha de la nota |
| Posición de cámara | Un lugar en la hoja, solo para un tema vinculado a una hoja por etiqueta o nombre de archivo |
| Selección de modelo, partes ocultas, planos de corte, instantáneas | No se conservan: una hoja no tiene modelo donde mostrarlos |

## Límites que debe conocer

- **Una hoja no es un modelo.** El punto de vista apunta a la posición de la anotación sobre el papel, medida en metros de papel. No lleva una herramienta BIM a un lugar del modelo. Use la instantánea y el nombre de la hoja para encontrar el sitio.
- **Los estados y tipos son propios de MarkupCraft** (Open, Accepted, Rejected, Completed; Nube, Llamada…). El archivo los declara, como permite BCF, pero una herramienta con listas fijas propias puede asignarlos a otros valores o ignorarlos.
- **Importar trae comentarios, no vistas de modelo.** {{ui:Importar BCF}} añade respuestas y estados a las anotaciones exportadas y crea notas de otras incidencias; no puede mostrar una cámara del modelo. Vea [Lista de anotaciones y exportación](topic:markups-list-and-export#import-bcf).
- Devolver las anotaciones como PDF suele ser más sencillo para revisiones de planos. BCF sirve para llevar los comentarios de los planos a un flujo de coordinación de modelos.
