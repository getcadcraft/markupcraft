---
title: Conceptos básicos de BCF
summary: Lo que contiene una exportación BCF desde MarkupCraft, cómo usarla con herramientas de coordinación BIM, y sus límites.
keywords: bcf, bcfzip, formato de colaboración BIM, incidencias, coordinación, colisión, temas, punto de vista, captura, openbim, buildingsmart, exportar incidencias
from: 0de26175
---

BCF (BIM Collaboration Format) ha'e formato de archivo abierto para pasar incidencias entre herramientas BIM. Heta programa de coordinación y autoría de modelos puede importar un archivo `.bcfzip` como lista de incidencias. MarkupCraft ohai **BCF 2.1**.

## Ojapo peteĩ

1. Eabrí la pestaña {{ui:Anotaciones}}.
2. Eflitrá la lista según lo que querés enviar, por ejemplo {{ui:Estado}} "Abierto". Solo se exportan las anotaciones listadas.
3. Elegí {{ui:BCF}}.
4. Esperá mientras se hace una captura de cada anotación ("Haciendo capturas para BCF (5 de 20)…").

Resultado: se descarga "<name> markups.bcfzip", y la barra de estado indica cuántos temas contiene y el tamaño del archivo.

## Mba'e oguereko

Cada anotación se convierte en un **tema**:

| Campo del tema | Se completa con |
|---|---|
| Título | Número de punch, asunto y hoja, por ejemplo "#4 Nube en A-101 — Plano de planta" |
| Tipo | El tipo de anotación (Nube, Llamada, Longitud…) |
| Estado | Abierto, Aceptado, Rechazado o Completado |
| Etiquetas | El tipo de anotación y la hoja |
| Autor y fechas | El autor de la anotación, y las fechas de creación y modificación |
| Asignado a, fecha límite | Del elemento de punch, cuando tiene uno |
| Descripción | Su texto o el texto del sello, el valor medido, el comentario, y la hoja y el archivo |
| Comentarios | Uno por cada respuesta, con autor y fecha |
| Captura | Una imagen de la anotación en su parte de la hoja |
| Punto de vista | Una vista desde arriba del lugar de la anotación en la hoja |

Exportar otra vez la misma anotación da el mismo ID de tema, así una herramienta que importa BCF puede reconocerla como la misma incidencia.

## Lo que vuelve al importar

{{ui:Importar BCF}} lee archivos BCF 2.0, 2.1 y 3.0 (probado con los 19 archivos de prueba oficiales de buildingSMART 3.0: se leyó cada tema, y los comentarios de los tres que tienen texto). Para un tema que es tuyo (mismo ID de tema) agrega los comentarios nuevos como respuestas y toma el nuevo estado. Cualquier otro tema pasa a ser una nota en la hoja que nombre su etiqueta o nombre de archivo; si no, en la hoja abierta, con su título, descripción, asignado y fecha límite como texto de la nota, y sus comentarios como respuestas.

| En el tema BCF | En MarkupCraft |
|---|---|
| Título, descripción, asignado, fecha límite | El texto de la nota |
| Comentarios con texto | Respuestas |
| Estado Open, Accepted, Rejected, Completed (Closed, Resolved, Done cuentan como Completed) | Estado de la anotación: Abierto, Aceptado, Rechazado, Completado |
| Autor y fecha de creación | Autor y fecha de la nota |
| Posición de la cámara | Un lugar en la hoja, solo para un tema vinculado a una hoja por etiqueta o nombre de archivo |
| Selección de modelo, partes ocultas, planos de corte, capturas | No se guarda: una hoja no tiene modelo donde mostrarlos |

## Límites a tener en cuenta

- **Una hoja no es un modelo.** El punto de vista apunta a la posición de la anotación en el papel, medida en metros de papel. No lleva a una herramienta BIM a un lugar del modelo. Usá la captura y el nombre de la hoja para encontrar el lugar.
- **Los estados y tipos son propios de MarkupCraft** (Abierto, Aceptado, Rechazado, Completado; Nube, Llamada…). El archivo los declara, como permite BCF, pero una herramienta con listas fijas propias puede asignarlos o ignorarlos.
- **Importar trae comentarios, no vistas del modelo.** {{ui:Importar BCF}} agrega respuestas y estados a las anotaciones que exportaste, y crea notas de otras incidencias; no puede mostrar una cámara del modelo. Ver [Lista de anotaciones y exportación](topic:markups-list-and-export#import-bcf).
- Enviar las anotaciones de vuelta como PDF suele ser más simple para revisiones de planos. BCF sirve para llevar comentarios de planos a un flujo de coordinación de modelos.
