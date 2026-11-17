---
title: Conceptos básicos de BCF
summary: Qué contiene una exportación BCF de MarkupCraft, cómo usarla con herramientas de coordinación BIM y sus límites.
keywords: bcf, bcfzip, formato de colaboración BIM, incidencias, coordinación, interferencia, temas, punto de vista, instantánea, openbim, buildingsmart, exportar incidencias
from: 446f38c1
---

BCF (BIM Collaboration Format) es un formato de archivo abierto para pasar incidencias entre herramientas BIM. Muchos programas de coordinación y modelado pueden importar un archivo `.bcfzip` como lista de incidencias. MarkupCraft escribe **BCF 2.1**.

## Crear uno

1. Abra la pestaña {{ui:Marcas}}.
2. Filtre la lista con lo que quiera enviar, por ejemplo {{ui:Estado}} "Abierta". Solo se exportan las marcas que aparecen en la lista.
3. Elija {{ui:BCF}}.
4. Espere mientras se crea una instantánea de cada marca ("Creando instantáneas para BCF (5 de 20)…").

Resultado: se descarga "<name> markups.bcfzip" y la barra de estado indica cuántos temas contiene y el tamaño del archivo.

## Qué contiene

Cada marca se convierte en un **tema**:

| Campo del tema | Se llena con |
|---|---|
| Título | Número de pendiente, asunto y hoja, por ejemplo "#4 Nube en A-101 — Plano de planta" |
| Tipo | El tipo de marca (Nube, Llamada, Longitud…) |
| Estado | Abierta, Aceptada, Rechazada o Completada |
| Etiquetas | El tipo de marca y la hoja |
| Autor y fechas | El autor de la marca y las fechas de creación y de modificación |
| Asignado a, fecha límite | Tomados de su elemento de la lista de pendientes, si lo tiene |
| Descripción | Su texto o el texto del sello, el valor medido, el comentario, y la hoja y el archivo |
| Comentarios | Uno por respuesta, con autor y fecha |
| Instantánea | Una imagen de la marca en su parte de la hoja |
| Punto de vista | Una vista desde arriba del lugar de la marca en la hoja |

Exportar la misma marca otra vez genera el mismo ID de tema, de modo que una herramienta que importe BCF puede reconocerla como la misma incidencia.

## Límites que conviene conocer

- **Una hoja no es un modelo.** El punto de vista apunta a la posición de la marca en el papel, medida en metros de papel. No lleva una herramienta BIM a un lugar del modelo. Use la instantánea y el nombre de la hoja para encontrar el sitio.
- **Los estados y los tipos son propios de MarkupCraft** (Abierta, Aceptada, Rechazada, Completada; Nube, Llamada…). El archivo los declara, como permite BCF, pero una herramienta con listas fijas propias puede asignarlos a otros valores o ignorarlos.
- **Al importar se traen comentarios, no vistas del modelo.** {{ui:Importar BCF}} agrega respuestas y estados a las marcas que exportó, y crea notas de otras incidencias; no puede mostrar una cámara del modelo. Vea [Lista de marcas y exportación](topic:markups-list-and-export#import-bcf).
- Para las revisiones de planos suele ser más sencillo enviar las marcas de vuelta en un PDF. BCF sirve para llevar los comentarios de los planos a un flujo de coordinación de modelos.
