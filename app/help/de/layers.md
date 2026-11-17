---
title: Layer für Markierungen
summary: Markierungen auf benannte Layer legen, dann jeden Layer ein- oder ausblenden oder sperren; andere PDF-Betrachter können sie ebenfalls umschalten.
keywords: Layer, ausblenden, einblenden, sperren, Markierungen gruppieren, Fachbereich, Maschinenbau, Elektro, optionaler Inhalt, OCG, Sichtbarkeit
from: 0fbb4c26
---

Layer gruppieren Markierungen, zum Beispiel nach Fachbereich oder nach Prüfer. Blenden Sie einen Layer aus, um die Zeichnung darunter zu sehen, oder sperren Sie ihn, damit seine Markierungen nicht versehentlich verschoben werden.

## Einen Layer anlegen und darauf zeichnen

1. Öffnen Sie {{ui:Layers}} oben im Bereich {{ui:Sheets}}.
2. Wählen Sie {{ui:New layer}}, geben Sie einen Namen wie `Maschinenbau` ein und wählen Sie {{ui:Add layer}}.
3. Der neue Layer wird zum aktuellen Layer: Jede Markierung, die Sie ab jetzt zeichnen, liegt darauf. Wählen Sie den Namen eines anderen Layers oder {{ui:No layer}}, um zu ändern, wohin neue Markierungen kommen.

Um eine Markierung auf einen anderen Layer zu verschieben, wählen Sie sie aus und den Layer unter {{ui:Layer}} in {{ui:Properties}}. {{ui:New layer…}} am Ende dieser Liste legt sofort einen an. Das Verschieben lässt sich mit {{key:Mod+Z}} rückgängig machen.

## Einblenden, Ausblenden und Sperren

Die Zeile jedes Layers hat zwei Schaltflächen:

- Das **Auge** blendet den Layer ein oder aus. Ausgeblendete Markierungen werden nicht gezeichnet und können nicht ausgewählt werden; sie zählen trotzdem in der Liste {{ui:Markups}}.
- Das **Schloss** lässt die Markierungen des Layers auf dem Blatt, verhindert aber, dass sie ausgewählt, verschoben oder gelöscht werden.

Die Stift-Schaltfläche benennt einen Layer um und nimmt seine Markierungen mit. Filtern Sie die Liste {{ui:Markups}} nach {{ui:Layer}}, um die Markierungen eines einzelnen Layers zu sehen.

## Im gespeicherten PDF

Jeder Layer wird zu einem PDF-Layer (optionaler Inhalt). Andere PDF-Betrachter listen die Layer in ihrem Layer-Bereich auf und können sie umschalten; ein ausgeblendeter Layer startet dort ebenfalls ausgeblendet. Layer, die die Zeichnung schon hatte, etwa CAD-Layer, bleiben unverändert. Öffnen Sie die Kopie wieder in MarkupCraft, kommen die Markierungen auf ihre Layer zurück, ausgeblendet und gesperrt, so wie Sie sie verlassen haben.

## Gut zu wissen

- Ein- und Ausblenden sowie Sperren sind keine Bearbeitungen: Sie werden nicht mit {{key:Mod+Z}} rückgängig gemacht, wohl aber mit dem PDF gespeichert.
- Kopieren und Einfügen behalten den Layer einer Markierung.
- Eine reduzierte Kopie zeichnet jede Markierung in die Seite, unabhängig von ihrem Layer. Siehe [Eine reduzierte Kopie speichern](topic:flatten).
