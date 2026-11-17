---
title: Básicos del BCF
summary: Mba'e oguereko MarkupCraft-gui BCF exportación, mba'éichapa oñemboguata BIM coordinación herramientakuéra-pe, ha umi limitación.
keywords: bcf, bcfzip, formato de colaboración BIM, problemas, coordinación, choque, temas, punto de vista, captura, openbim, buildingsmart, exportar problemas
from: 446f38c1
---

BCF (BIM Collaboration Format) ha'e formato de archivo abierto, oñemboguata problemas BIM herramientakuéra apytépe. Hetaiterei coordinación ha modelado programakuéra ikatu oñeike peteĩ `.bcfzip` archivo, ha'e lista de problemas. MarkupCraft ojapo **BCF 2.1**.

## Ojapo peteĩ

1. Eike pestaña {{ui:Anotaciones}}.
2. Filtrá lista oipotáva remitir, por ejemplo {{ui:Estado}} "Abierto". Solo anotación listadas oñeexporta.
3. Eiporavo {{ui:BCF}}.
4. Esperá oñemoĩ captura cada anotación-pe ("Oñemoĩ capturas BCF-pe (5 de 20)…").

Resultado: "<name> markups.bcfzip" oñembokuaa, ha barra de estado ohechauka cuántos tema oguereko ha archivo tamaño.

## Mba'e oguereko

Anotación peteĩ-peteĩ ojapo peteĩ **tema**:

| Campo del tema | Oñehenóiva |
|---|---|
| Título | Punch número, tema ha hoja, por ejemplo "#4 Nube en A-101 — Plano de planta" |
| Tipo | Anotación clase (Nube, Llamada, Longitud…) |
| Estado | Abierto, Aceptado, Rechazado o Completado |
| Etiquetas | Anotación clase ha hoja |
| Autor y fechas | Anotación autor, ojapo ha ojeapo fecha |
| Asignado a, fecha límite | Punch ítem-gui, oguereko rire |
| Descripción | Texto térã sello palabra, medida valor, comentario, hoja ha archivo |
| Comentarios | Peteĩ respuesta-pe, autor ha fecha-ndi |
| Captura | Anotación imagen hoja parte-pe |
| Punto de vista | Anotación ubicación hoja-pe, arriba-gui |

Jey exportación anotación mismo oipuru mismo topic ID, upévare BCF oipuru ikatu ohechakuaa mismo problema.

## Limitaciones ojekuaáva

- **Hoja ndaha'éi modelo.** Punto de vista ohechauka anotación ubicación papel-pe, papel metro-pe medido. Ndaha'éi BIM herramienta oguenohẽ modelo-pe. Oipuru captura ha hoja nombre oheka hag̃ua lugar.
- **Estados ha clases MarkupCraft-pegua.** (Abierto, Aceptado, Rechazado, Completado; Nube, Llamada…) Archivo oñemoĩ, BCF oipermite, pero herramienta lista fija oguereko ikatu oñemboykéva térã oñemoĩ.
- **Importar trae comentarios, ndaha'éi modelo vista.** {{ui:Importar BCF}} oñemoĩ respuesta ha estado anotaciones oexportáva-pe, ha oñemoĩ nota ambue problemas-pe; ndikatúi ohechauka modelo cámara. Ehecha [Lista de anotaciones y exportación](topic:markups-list-and-export#import-bcf).
- Anotaciones PDF-pe devolver ojeporúva hetaiterei revisión planos-pe. BCF ojapo hag̃ua planos comentarios modelo coordinación tape-pe.
