---
title: Seguimiento de RFI, documentos para aprobación y partes diarios
summary: Añada RFI, documentos para aprobación y partes diarios a las hojas, con números, responsables, fechas límite e hilos; filtre lo vencido; exporte a CSV o BCF; trabaje sin conexión y combine copias.
keywords: rfi, solicitud de información, documento para aprobación, parte diario, parte de obra, diario de obra, obra, vencido, fecha límite, asignados a mí, hilo, adjunto, combinar, sin conexión, tableta, bcf, csv, obra
from: 95039c5a
---

La pestaña {{ui:Field}} conserva tres tipos de registros junto a sus marcas. Cada uno está vinculado a una hoja; una RFI o un documento para aprobación también tiene una chincheta en el punto de la hoja al que se refiere.

- **RFI**: una pregunta para el equipo de proyecto. Estados: Abierta, Respondida, Cerrada.
- **Documento para aprobación**: algo que debe revisarse antes de seguir con el trabajo. Estados: Abierto, En revisión, Aprobado, Aprobado con observaciones, Revisar y volver a presentar, Cerrado.
- **Parte diario**: el tiempo del día, el número de personas en obra y el trabajo realizado. Estados: Borrador, Final.

Cada registro tiene un número propio de su tipo (RFI-0001, SUB-0001, LOG-0001), un título, un texto, un responsable, una fecha límite, un hilo de respuestas y una lista de nombres de adjuntos.

## Añadir uno

1. Abra la pestaña {{ui:Field}} y elija {{ui:RFI}} o {{ui:Submittal}}.
2. Toque o haga clic en la hoja donde corresponda. Aparece una chincheta y el registro se abre en la pestaña.
3. Rellene el título, la pregunta o la descripción, el responsable y la fecha límite.

Un parte diario se añade a la hoja abierta sin chincheta. {{ui:Place pin}} coloca una más tarde; {{ui:Move pin}} mueve cualquier chincheta. Al tocar una chincheta en la hoja se abre su registro.

## Responder y seguir

Cambie el {{ui:Status}} y el cambio queda registrado en el hilo. Escriba una respuesta y elija {{ui:Send reply}} (Ctrl+Intro también envía). Los adjuntos son solo nombres: escriba uno o elija archivos, y la lista indica al equipo qué acompaña al registro. Los archivos en sí se quedan donde están.

Un registro cuya fecha límite ha pasado y que sigue pendiente (una RFI que no está Respondida ni Cerrada, o un documento para aprobación que no tiene decisión) se marca como **Vencido**, en rojo, en la lista y en su chincheta.

## Encontrar lo importante

Los filtros están encima de la lista: tipo, estado, fecha límite (vencido, vence en 7 días, con o sin fecha límite), esta hoja o todas las hojas, una búsqueda de texto y {{ui:Assigned to me}}, que compara el responsable con el nombre por el que MarkupCraft le conoce (véase [Definir su nombre](topic:set-your-name)). La línea bajo los filtros cuenta lo que se muestra y lo que está vencido.

## Exportar

{{ui:CSV}} escribe los registros de la lista como hoja de cálculo. {{ui:BCF}} los escribe como temas BCF, cada uno con una captura de su lugar en la hoja, para que otras herramientas BCF puedan listarlos. Ambos siguen los filtros.

## Guardar, sin conexión y combinar copias

Los registros se guardan dentro del PDF al guardarlo, y vuelven al abrirlo. No hace falta red: añada, edite, responda y guarde en una tableta en un sótano, y luego traiga el PDF de vuelta. Los PDF antiguos, y los PDF de otros programas, se abren como siempre.

Para reunir dos copias, abra una y elija {{ui:Merge}}, y después seleccione la otra copia del mismo PDF. Los registros se unen por sus identificadores:

- un registro que solo tiene una copia se añade;
- un registro que está en ambas toma sus campos (título, texto, estado, responsable, fecha límite) de la copia modificada por última vez, completo; así que si dos personas cambiaron campos distintos del mismo registro, gana la versión de la copia más reciente; los hilos y los nombres de adjuntos de ambas copias se unen;
- si ambas copias numeraron igual un registro nuevo, el que llega recibe el siguiente número libre;
- un registro eliminado en una copia sigue eliminado, salvo que se editara después.

Una combinación equivale a un único paso de deshacer.

## Límites

- Los registros todavía no los comparte Live TeamWork; use Combinar.
- En esta versión no hay equipos, notificaciones ni proyectos en la nube para los registros.
- Las páginas eliminadas del PDF se llevan sus registros (la confirmación de página los cuenta).
