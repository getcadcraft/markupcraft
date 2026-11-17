---
title: Eine Markierung zur Aufgabe machen
summary: Einer Markierung einen Zuständigen (eine Person oder Ihren Assistenten), einen Fälligkeitstag und eine Verknüpfung zur Zeichnung oder zum Modellelement geben, auf das sie sich bezieht, und sehen, dass sie sich schließt, wenn sich dort wirklich etwas ändert.
keywords: Aufgabe, Aufgaben, Zuständiger, Assistent, Fälligkeit, überfällig, Verknüpfung, schließt, geändert, Element, Zeichnungsbereich, Markierungen mit Aktionen, MCP
from: 9e970202
---

Eine Aufgabe ist eine Markierung, die jemand erledigen muss. Sie behält ihren Platz auf dem Blatt und ihren Verlauf und bekommt einen Titel, einen Zuständigen, einen Fälligkeitstag, einen Zustand und, falls gewünscht, eine Verknüpfung zu dem, worum es geht.

## Eine Aufgabe erstellen

1. Wählen Sie eine oder mehrere Markierungen aus.
2. Öffnen Sie den Reiter {{ui:Tasks}} und wählen Sie {{ui:Make selected a task}}.
3. Füllen Sie den Titel aus (er übernimmt den Text der Markierung), wer sie bekommt ({{ui:Person}} oder {{ui:Assistant}} und ein Name), optional einen Fälligkeitstag und worauf zu achten ist.

Eine Assistenten-Aufgabe ist Arbeit für den Assistenten, den Sie mit MarkupCraft verbunden haben (siehe [MarkupCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants)). MarkupCraft enthält keinen eigenen Assistenten: Es listet nur die Arbeit auf und nimmt die Antworten des Assistenten entgegen. Wenn Sie {{ui:Assigned to}} wählen und dann in der Liste {{ui:Assistant}}, sehen Sie, was auf ihn wartet.

## Auf eine Änderung achten

- **Die Zeichnung innerhalb der Markierung.** MarkupCraft behält die Linien innerhalb des Rahmens der Markierung so, wie sie jetzt sind. Öffnen Sie eine neuere Revision dieses Blatts (eine zweite Datei mit derselben Blattnummer oder derselben Seitenposition) und wählen Sie {{ui:Check now}}: Unterscheiden sich die Linien in diesem Bereich um mehr als ein Haar, wird die Aufgabe geschlossen.
- **Ein Modellelement.** Geben Sie die App und die ID des Elements an. Ihr Assistent liest das Element mit den eigenen Werkzeugen der anderen App und meldet es mit `tasks_check`. Die erste Meldung wird als Ausgangszustand behalten; eine spätere Meldung, die abweicht, schließt die Aufgabe. Ein gelöschtes Element schließt sie ebenfalls.
- **Nichts.** Eine einfache Aufgabe, die Sie von Hand abschließen.

Eine geschlossene Aufgabe wird als Erledigt markiert, ihre Markierung wird Erledigt, und eine Notiz im Verlauf sagt, was sich geändert hat. Ein Schritt zum Rückgängigmachen öffnet sie wieder.

**Grenze:** Die Prüfung setzt voraus, dass die neuere Revision denselben Seitenursprung und dieselbe Seitengröße hat. Ein Blatt, das in anderer Größe neu gedruckt wurde, passt nicht, daher schließen sich seine Aufgaben nicht. Blätter werden über die Blattnummer gepaart, sonst über die Seitenposition; MarkupCraft skaliert eine Revision nicht auf die andere.

Ein neuer Druck derselben Zeichnung mit neuem Datumsstempel oder Linien, die sich um weniger als 1.5 pt verschoben haben, zählt nicht als Änderung. Ist keine neuere Revision geöffnet, bleibt die Aufgabe offen, und die Statusleiste sagt das.

## Die Liste

Die Liste {{ui:Tasks}} lässt sich nach Zustand und danach filtern, für wen sie ist, auch nach {{ui:Overdue}}. Eine Aufgabe, deren Fälligkeitstag überschritten ist, erscheint im Bereich Probleme als Warnung. {{ui:CSV}} exportiert die Liste.

Aufgaben werden mit der Markierung im PDF gespeichert und reisen über Live wie die anderen Eigenschaften der Markierung.
