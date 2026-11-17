---
title: Eine Mängelliste erstellen
summary: Verwandeln Sie Markierungen in nummerierte Mängelpunkte mit Zuständigkeit, Fälligkeitsdatum und Status, und exportieren Sie die Liste.
keywords: Mängelliste, Mangel, Mängelpunkt, Restarbeiten, Mängel auf der Baustelle, Beobachtung, zuweisen, Zuständigkeit, Fälligkeitsdatum, Abnahme, Begehung, Nummer
from: b98b38e6
---

Ein Mängelpunkt ist eine Markierung mit Nummer, Zuständigkeit, Fälligkeitsdatum und Punktstatus. Die Nummer wird auf dem Blatt neben der Markierung gezeichnet, sodass das gedruckte Blatt und die Liste übereinstimmen.

## Punkte hinzufügen

1. Markieren Sie jedes Problem auf den Blättern: eine Wolke, einen Hinweis, eine Notiz, was auch immer.
2. Wählen Sie eine oder mehrere davon aus (siehe [Markierungen auswählen, verschieben und ändern](topic:select-and-edit)).
3. Öffnen Sie entweder den Reiter {{ui:Mängelliste}} und wählen Sie {{ui:Auswahl zur Mängelliste hinzufügen}}, oder wählen Sie {{ui:Zur Mängelliste hinzufügen}} in {{ui:Eigenschaften}}.

Das Ergebnis: Jede Markierung erhält die nächste Nummer (1, 2, 3…), in Blattreihenfolge und dann in der Reihenfolge, in der sie gezeichnet wurden. Auf dem Blatt erscheint ein nummeriertes Abzeichen, und die Statusleiste sagt „3 Punkte zur Mängelliste hinzugefügt.“ Markierungen, die bereits eine Nummer haben, und schreibgeschützte Kommentare werden übersprungen.

## Details ausfüllen

Im Reiter {{ui:Mängelliste}} zeigt jeder Punkt seine Nummer, seinen Betreff, Text, Blatt und Status, mit drei Feldern darunter. Dieselben Felder stehen in {{ui:Eigenschaften}} unter „Mängelliste“, wenn die Markierung ausgewählt ist:

- {{ui:Zuständig}}: ein Name oder ein Gewerk, als Freitext.
- {{ui:Fällig}}: ein Datum aus der Datumsauswahl.
- {{ui:Status des Punkts}}: Offen, In Arbeit, Bereit zur Prüfung oder Geschlossen.

Klicken Sie auf die Überschrift eines Punkts, um zu ihm auf seinem Blatt zu springen.

Der Punktstatus ist vom Prüfstatus der Markierung getrennt (Offen, Angenommen, Abgelehnt, Erledigt). Verwenden Sie den Punktstatus für die Arbeit und den Prüfstatus für den Kommentar.

## Einen Punkt entfernen

Wählen Sie die Markierung und wählen Sie {{ui:Aus der Mängelliste nehmen}} in {{ui:Eigenschaften}}. Die Markierung bleibt; nur die Nummer geht. Solange der Satz geöffnet ist, werden Nummern nicht wiederverwendet: Der nächste Punkt erhält die nächste neue Nummer, sodass eine Lücke bedeutet, dass ein Punkt entfernt wurde. Wenn eine Datei erneut geöffnet wird, läuft die Nummerierung nach der höchsten Nummer darin weiter.

## Die Liste exportieren

Wählen Sie {{ui:CSV exportieren}} im Reiter {{ui:Mängelliste}}. Sie erhalten „<name> punch list.csv“ mit den Spalten Nr., Blatt, Datei, Seite, Punkt, Kommentar, Zuständig, Fällig, Status, Markierungsstatus, Autor und Erstellt, in Nummernreihenfolge. Öffnen Sie sie in jedem Tabellenkalkulationsprogramm.

Die Punktnummern, Zuständigen, Fälligkeitsdaten und Punktstatus werden auch in der markierten PDF gespeichert, sodass sie beim erneuten Öffnen zurückkommen. Andere PDF-Betrachter zeigen das Nummernabzeichen als Teil der Markierung. Der BCF-Export der Markierungsliste enthält Zuständigen und Fälligkeitsdatum ebenfalls (siehe [BCF-Grundlagen](topic:bcf-basics)).

## Vor Ort mit einem Tablet

Öffnen Sie den Satz auf einem iPad, gehen Sie die Baustelle ab und legen Sie bei jedem Problem eine {{ui:Notiz}} ab oder zeichnen Sie eine {{ui:Wolke}}. Fügen Sie sie unterwegs zur Mängelliste hinzu und speichern Sie, bevor Sie gehen. Siehe [Auf einem iPad oder Touchscreen prüfen](topic:review-on-a-tablet).

Eine Mängelliste als formatierter PDF- oder Tabellenbericht und Fotos, die an Punkte angehängt werden, sind noch nicht umgesetzt.
