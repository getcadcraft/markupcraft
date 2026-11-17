---
title: Einheiten, Längen und Maßstäbe
summary: Alle Möglichkeiten, eine Länge einzugeben, die Einheiten, in denen Längen und Flächen angezeigt werden, die Rundung und die Liste der voreingestellten Maßstäbe.
keywords: Einheiten, Fuß, Zoll, Fuß und Zoll, metrisch, Meter, Millimeter, Zentimeter, Maßstab, Voreinstellung, Architekturmaßstab, Ingenieurmaßstab, Verhältnis, Quadratfuß, Rundung, Brüche
from: 574b0291
---

## Eine Länge eingeben

Wenn Sie aus zwei Punkten kalibrieren, geben Sie die reale Strecke ein. MarkupCraft liest all diese Formen:

| Sie geben ein | Bedeutung |
|---|---|
| `24'-0"` | 24 Fuß |
| `12' 6 1/2"` oder `12'-6 1/2"` | 12 Fuß 6½ Zoll |
| `12' 6` | 12 Fuß 6 Zoll (Zollzeichen weggelassen) |
| `6"` oder `1/2"` | Zoll |
| `12.5'` oder `12.5 ft` | 12½ Fuß |
| `3 ft 6 in` | 3 Fuß 6 Zoll (auch feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metrisch (auch meter, metre, millimeter, centimetre…) |
| `24` | eine nackte Zahl, in der Einheit, die unter {{ui:Längen anzeigen in}} gewählt ist |

Typografische Anführungszeichen (’ ”) und zwei Apostrophe ('') für Zoll funktionieren ebenfalls. Längen von null und negative Längen werden abgelehnt.

:::warning
Ein Komma wird als Dezimalpunkt gelesen: `1,5 m` bedeutet 1.5 Meter. Geben Sie keine Tausendertrennzeichen ein: `1,200 mm` wird als 1.2 Millimeter gelesen. Geben Sie `1200 mm` ein.
:::

## Wie Längen und Flächen angezeigt werden

| {{ui:Längen anzeigen in}} | Eine Länge wird angezeigt als | Eine Fläche wird angezeigt als |
|---|---|---|
| {{ui:Fuß und Zoll}} | `12'-6 1/2"`, gerundet auf 1/16" | Quadratfuß, zwei Dezimalstellen |
| {{ui:Dezimale Fuß}} | `12.54'`, zwei Dezimalstellen | Quadratfuß, zwei Dezimalstellen |
| {{ui:Zoll}} | `150.5"`, bis zu zwei Dezimalstellen | Quadratzoll, eine Dezimalstelle |
| {{ui:Meter}} | `3.820 m`, drei Dezimalstellen | Quadratmeter, drei Dezimalstellen |
| {{ui:Millimeter}} | `3820 mm`, ganze Millimeter | Quadratmillimeter, ganze Zahl |

Der Umfang einer Fläche verwendet das Längenformat.

## Voreingestellte Maßstäbe

Die Voreinstellungen gehen davon aus, dass das PDF in seiner vollen gedruckten Größe vorliegt: 72 PDF-Punkte pro Zoll, so wie ein CAD-Programm es plottet.

| Gruppe | Maßstäbe | Längen angezeigt in |
|---|---|---|
| Architektur | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Fuß und Zoll |
| Ingenieur | 1" = 10', 20', 30', 40', 50', 60', 100' | Dezimale Fuß |
| Metrisch | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeter |
| Metrisch | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meter |

Um einen voreingestellten Maßstab zu verwenden, die Längen aber in einer anderen Einheit zu sehen, kalibrieren Sie stattdessen aus zwei Punkten und wählen Sie dort die Einheit.

## Maßstäbe anderer Programme

Wenn ein PDF bereits einen Maßstab für eine Seite aus einem anderen Programm enthält (ein auf der Seite gespeicherter Messmaßstab), verwendet MarkupCraft ihn, sofern er in Fuß, Zoll, Metern, Zentimetern oder Millimetern angegeben ist. Seine Bezeichnung wird so angezeigt, wie die Datei sie angibt.

## Papierpositionen

Die Statusleiste zeigt, wo sich der Zeiger auf dem Papier befindet, in Zoll von der oberen linken Ecke des Blatts, unabhängig vom Maßstab des Blatts. Die Verschiebeschritte von Compare sind in Punkten angegeben (72 Punkte pro Zoll).

## Genauigkeit

Eine Messung ist nur so gut wie die Kalibrierung und Ihre Klicks. Kalibrieren Sie über das längste bekannte Maß, das Sie finden, zoomen Sie zum Anklicken der Enden hinein und prüfen Sie dann ein weiteres Maß. Ein PDF, das beim Erstellen skaliert wurde (ein Plot „Auf Seite einpassen“ oder ein Satz in halber Größe), ist nach der Kalibrierung anhand eines Maßes weiterhin genau, aber nicht mit einer Voreinstellung.
