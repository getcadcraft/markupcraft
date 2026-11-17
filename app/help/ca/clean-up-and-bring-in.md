---
title: Neteja els traços de llapis i importa comentaris de revisió i el progrés de l'obra
summary: Converteix els traços de llapis a mà alçada en línies, cercles, arcs i rectangles; importa com a notes els comentaris de revisió d'un paquet de permís i el progrés de topografia d'una obra.
keywords: llapis, mà alçada, neteja, redreça, cercle, línia, rectangle, arc, permís, comentaris de revisió, progrés, dron, escaneig, topografia, notes, csv
from: 547d8e42
---

## Neteja els traços de llapis

Dibuixeu amb {{ui:Llapis}}, i després obriu el menú {{ui:Més}} al grup Edició i trieu {{ui:Neteja els traços de llapis}}. Cada traç de llapis seleccionat esdevé el que volia ser: un traç recte esdevé una línia (posada exactament horitzontal o vertical quan era gairebé així), un de rodó una el·lipse, part d'un cercle un arc, un de quatre cantons i tancat un rectangle, i qualsevol altra cosa una polilínia o un polígon. Els extrems solts de traços dibuixats junts s'estiren els uns cap als altres. Sense cap traç de llapis seleccionat, es neteja cada traç de llapis del full obert. És un sol pas per desfer: Ctrl+Z torna el traç a mà alçada. La forma es calcula al vostre ordinador amb regles fixes; no s'envia enlloc.

## Importa els comentaris de revisió

El paquet de permís de BimCraft conté `01-review-comments.csv`: els comentaris que probablement farà un revisor del pla, cadascun amb la norma, la clàusula, el que cal, el que s'ha trobat i el que cal fer. A la pestanya {{ui:Tasques}}, obriu {{ui:Comentaris de revisió del permís}} i trieu {{ui:Importa comentaris (CSV)}}. Cada comentari esdevé una nota oberta en una columna a l'esquerra del full obert; arrossegueu cadascuna fins al lloc al qual es refereix. Es calculen a partir de les comprovacions que existeixen, no del criteri d'un examinador de plans.

## Importa les caixes de nodes HAZOP

El complement de P&ID de CadCraft dibuixa els nodes d'un estudi HAZOP i els pot desar com a {{ui:Caixes de nodes HAZOP}} (un fitxer JSON). Obriu aquí el full de P&ID imprès, aneu a la pestanya {{ui:Tasques}}, obriu {{ui:Caixes de nodes HAZOP}} i trieu {{ui:Importa caixes de nodes (JSON)}}. Cada node esdevé un rectangle obert sobre el full amb el seu número, nom, equip i línies al text, i l'equip escriu les conclusions com a respostes. El full es pren tal com s'ha imprès, a mida completa, des de la cantonada inferior esquerra del dibuix; si s'ha imprès a una altra escala, escriviu primer aquest número a {{ui:Imprès a}} (0.5 per a 1:2). Un node que cau fora de la pàgina no es dibuixa, i el panell indica quants són. Els marcadors són una ajuda per a l'estudi: mostren on són els nodes, però no jutgen l'estudi.

## Importa el progrés de l'obra

CivilCraft manté una fila per a cada vol de dron o escaneig de l'obra. A la pestanya {{ui:Tasques}}, obriu {{ui:Progrés de l'obra}} i trieu {{ui:Importa el progrés (JSON)}}. Cada levantament esdevé una nota al full obert que indica quant està fet, què queda per excavar o omplir, què s'ha excavat de més o omplert de més i què sobresurt del pla. Un levantament amb alguna cosa fora del pla queda Obert; un de net es marca com a Acceptat.
