---
title: Dar seguimiento a RFI, entregas y bitácoras diarias
summary: Coloque RFI, entregas y bitácoras diarias en las hojas, con números, responsables, fechas límite y conversaciones; filtre lo vencido; exporte a CSV o BCF; trabaje sin conexión y combine copias.
keywords: rfi, solicitud de información, entrega, bitácora diaria, reporte de obra, diario de obra, construcción, vencido, fecha límite, asignado a mí, conversación, adjunto, combinar, sin conexión, tableta, bcf, csv, obra
from: 95039c5a
---

La pestaña {{ui:Obra}} guarda tres tipos de registro junto a sus marcas. Cada uno está vinculado a una hoja; un RFI o una entrega también tiene un marcador en el lugar de la hoja al que se refiere.

- **RFI**: una pregunta para el equipo de diseño. Estados: Abierto, Respondido, Cerrado.
- **Entrega**: algo que debe revisarse antes de continuar con el trabajo. Estados: Abierta, En revisión, Aprobada, Aprobada con observaciones, Revisar y reenviar, Cerrada.
- **Bitácora diaria**: el clima del día, el número de personas en obra y el trabajo realizado. Estados: Borrador, Final.

Cada registro tiene un número propio de su tipo (RFI-0001, SUB-0001, LOG-0001), un título, texto, un responsable, una fecha límite, una conversación de respuestas y una lista de nombres de adjuntos.

## Agregar uno

1. Abra la pestaña {{ui:Obra}} y elija {{ui:RFI}} o {{ui:Entrega}}.
2. Toque o haga clic en la hoja donde corresponde. Aparece un marcador y el registro se abre en la pestaña.
3. Complete el título, la pregunta o la descripción, a quién está asignado y cuándo vence.

Una bitácora diaria se agrega a la hoja abierta sin marcador. {{ui:Colocar marcador}} coloca uno después; {{ui:Mover marcador}} mueve cualquier marcador. Al tocar un marcador en la hoja se abre su registro.

## Responder y dar seguimiento

Cambie el {{ui:Estado}} y el cambio queda registrado en la conversación. Escriba una respuesta y elija {{ui:Enviar respuesta}} (Ctrl+Enter también envía). Los adjuntos son solo nombres: escriba uno o elija archivos, y la lista indica al equipo qué acompaña al registro. Los archivos en sí permanecen donde están.

Un registro cuya fecha límite ya pasó y que sigue pendiente (un RFI que no está Respondido ni Cerrado, una entrega que aún no tiene decisión) se marca como **Vencido**, en rojo, en la lista y en su marcador.

## Encontrar lo importante

Los filtros están sobre la lista: tipo, estado, fecha límite (vencidos, vencen en 7 días, con o sin fecha límite), esta hoja o todas las hojas, una búsqueda de texto, y {{ui:Asignados a mí}}, que compara el responsable con el nombre con el que MarkupCraft lo conoce (vea [Defina su nombre](topic:set-your-name)). La línea bajo los filtros cuenta lo que se muestra y lo que está vencido.

## Exportar

{{ui:CSV}} escribe los registros de la lista como hoja de cálculo. {{ui:BCF}} los escribe como temas BCF, cada uno con una captura de su lugar en la hoja, para que otras herramientas BCF puedan listarlos. Ambas opciones siguen los filtros.

## Guardar, sin conexión y combinar copias

Los registros se guardan dentro del PDF al guardarlo, y vuelven al abrirlo. No necesitan red: agregue, edite, responda y guarde en una tableta en un sótano, y luego traiga el PDF de vuelta. Los PDF anteriores y los de otros programas se abren como siempre.

Para unir dos copias, abra una y elija {{ui:Combinar}}, luego seleccione la otra copia del mismo PDF. Los registros se unen por sus identificadores:

- un registro que solo tiene una copia se agrega;
- un registro que está en ambas toma sus campos (título, texto, estado, responsable, fecha límite) de la copia modificada más recientemente, como un todo; así que si dos personas cambiaron campos distintos del mismo registro, gana la versión de la copia posterior; las conversaciones y los nombres de adjuntos de ambas copias se unen;
- si ambas copias numeraron igual un registro nuevo, el que llega recibe el siguiente número libre;
- un registro eliminado en una copia permanece eliminado, salvo que haya sido editado después.

Una combinación es un solo paso de deshacer.

## Límites

- Live TeamWork todavía no comparte los registros; use {{ui:Combinar}}.
- En esta versión no hay equipos, notificaciones ni proyectos en la nube para registros.
- Las páginas eliminadas del PDF se llevan sus registros (la confirmación de página los cuenta).
