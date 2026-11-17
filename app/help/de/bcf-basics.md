---
title: BCF-Grundlagen
summary: Was ein BCF-Export aus MarkupCraft enthält, wie Sie ihn mit BIM-Koordinationswerkzeugen verwenden und welche Grenzen er hat.
keywords: bcf, bcfzip, BIM-Kollaborationsformat, Themen, Koordination, Kollision, Blickpunkt, Schnappschuss, openBIM, buildingSMART, Themen exportieren
from: 446f38c1
---

BCF (BIM Collaboration Format) ist ein offenes Dateiformat, mit dem Themen zwischen BIM-Werkzeugen übergeben werden. Viele Programme zur Modellkoordination und Modellerstellung können eine `.bcfzip`-Datei als Liste von Themen importieren. MarkupCraft schreibt **BCF 2.1**.

## Eine Datei erstellen

1. Öffnen Sie die Registerkarte {{ui:Markierungen}}.
2. Filtern Sie die Liste nach dem, was Sie senden möchten, zum Beispiel {{ui:Status}} „Offen“. Nur die aufgelisteten Markierungen werden exportiert.
3. Wählen Sie {{ui:BCF}}.
4. Warten Sie, während von jeder Markierung ein Schnappschuss erstellt wird („Schnappschüsse für BCF werden erstellt (5 von 20)…“).

Ergebnis: "<name> markups.bcfzip" wird heruntergeladen, und die Statusleiste zeigt, wie viele Themen die Datei enthält und wie groß sie ist.

## Was darin enthalten ist

Jede Markierung wird zu einem **Thema**:

| Themenfeld | Inhalt |
|---|---|
| Titel | Mängelnummer, Gegenstand und Blatt, zum Beispiel „#4 Wolke auf A-101 — Grundriss“ |
| Typ | Die Art der Markierung (Wolke, Hinweis, Länge …) |
| Status | Offen, Akzeptiert, Abgelehnt oder Abgeschlossen |
| Kennzeichnungen | Die Art der Markierung und das Blatt |
| Autor und Datum | Der Autor der Markierung sowie Erstellungs- und Änderungsdatum |
| Zugewiesen an, Fälligkeitsdatum | Aus der zugehörigen Mängelposition, sofern vorhanden |
| Beschreibung | Ihr Text oder Stempeltext, der gemessene Wert, der Kommentar sowie Blatt und Datei |
| Kommentare | Einer pro Antwort, mit Autor und Datum |
| Schnappschuss | Ein Bild der Markierung an ihrer Stelle auf dem Blatt |
| Blickpunkt | Eine Draufsicht auf die Stelle der Markierung auf dem Blatt |

Ein erneuter Export derselben Markierung ergibt dieselbe Themen-ID, sodass ein BCF-Werkzeug sie als dasselbe Thema erkennt.

## Zu beachtende Grenzen

- **Ein Blatt ist kein Modell.** Der Blickpunkt zeigt auf die Position der Markierung auf dem Papier, gemessen in Metern Papier. Er bringt ein BIM-Werkzeug nicht zu einer Stelle im Modell. Verwenden Sie den Schnappschuss und den Blattnamen, um die Stelle zu finden.
- **Status und Typen stammen von MarkupCraft** (Offen, Akzeptiert, Abgelehnt, Abgeschlossen; Wolke, Hinweis …). Die Datei deklariert sie, wie BCF es erlaubt, aber ein Werkzeug mit eigenen festen Listen kann sie zuordnen oder ignorieren.
- **Beim Importieren kommen Kommentare, keine Modellansichten.** {{ui:BCF importieren}} fügt Antworten und Status zu den exportierten Markierungen hinzu und legt Notizen zu anderen Themen an; eine Modellkamera kann es nicht anzeigen. Siehe [Markierungsliste und Export](topic:markups-list-and-export#import-bcf).
- Markierungen als PDF zurückzusenden ist bei Planprüfungen oft einfacher. BCF dient dazu, Kommentare zu Zeichnungen in einen Modellkoordinationsprozess zu bringen.
