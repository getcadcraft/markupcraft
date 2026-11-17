---
title: Rückfragen, Einreichungen und Bautagebücher verfolgen
summary: Rückfragen (RFI), Einreichungen und Bautagebücher auf den Blättern erfassen, mit Nummern, zugewiesenen Personen, Fälligkeitsdaten und Unterhaltungen; überfällige Einträge filtern; als CSV oder BCF exportieren; offline arbeiten und Kopien zusammenführen.
keywords: rfi, Rückfrage, Informationsanfrage, Einreichung, Bautagebuch, Baustellenbericht, Bau, überfällig, Fälligkeitsdatum, mir zugewiesen, Unterhaltung, Anhang, zusammenführen, offline, Tablet, bcf, csv, Baustelle
from: 95039c5a
---

Die Registerkarte {{ui:Baustelle}} verwaltet drei Arten von Einträgen neben Ihren Markierungen. Jeder Eintrag ist einem Blatt zugeordnet; eine Rückfrage oder eine Einreichung hat außerdem einen Pin an der Stelle auf dem Blatt, auf die sie sich bezieht.

- **Rückfrage (RFI)**: eine Frage an das Planungsteam. Status: Offen, Beantwortet, Geschlossen.
- **Einreichung**: etwas, das vor dem Baubeginn geprüft werden muss. Status: Offen, In Prüfung, Genehmigt, Genehmigt mit Anmerkungen, Überarbeiten und erneut einreichen, Geschlossen.
- **Bautagebuch**: das Wetter des Tages, die Anzahl der Personen auf der Baustelle und die ausgeführten Arbeiten. Status: Entwurf, Endgültig.

Jeder Eintrag hat eine eigene Nummer seiner Art (RFI-0001, SUB-0001, LOG-0001), einen Titel, einen Text, eine zugewiesene Person, ein Fälligkeitsdatum, eine Unterhaltung mit Antworten und eine Liste der Anhangsnamen.

## Einen Eintrag hinzufügen

1. Öffnen Sie die Registerkarte {{ui:Baustelle}} und wählen Sie {{ui:Rückfrage}} oder {{ui:Einreichung}}.
2. Tippen oder klicken Sie auf das Blatt, zu dem der Eintrag gehört. Ein Pin erscheint, und der Eintrag öffnet sich in der Registerkarte.
3. Tragen Sie Titel, Frage oder Beschreibung, die zugewiesene Person und das Fälligkeitsdatum ein.

Ein Bautagebuch wird ohne Pin dem geöffneten Blatt hinzugefügt. {{ui:Pin platzieren}} setzt später einen Pin darauf; {{ui:Pin verschieben}} verschiebt jeden Pin. Ein Tipp auf einen Pin auf dem Blatt öffnet den zugehörigen Eintrag.

## Beantworten und verfolgen

Ändern Sie den {{ui:Status}}; die Änderung wird in der Unterhaltung protokolliert. Schreiben Sie eine Antwort und wählen Sie {{ui:Antwort senden}} (Ctrl+Enter sendet ebenfalls). Anhänge sind nur Namen: Geben Sie einen ein oder wählen Sie Dateien aus; die Liste zeigt dem Team, was zum Eintrag gehört. Die Dateien selbst bleiben, wo sie sind.

Ein Eintrag, dessen Fälligkeitsdatum verstrichen ist und der noch offen ist (eine Rückfrage, die nicht Beantwortet oder Geschlossen ist, oder eine Einreichung, über die noch nicht entschieden wurde), wird in der Liste und an seinem Pin rot als **Überfällig** markiert.

## Das Wesentliche finden

Die Filter stehen über der Liste: Typ, Status, Fälligkeitsdatum (überfällig, in 7 Tagen fällig, mit oder ohne Fälligkeitsdatum), {{ui:Dieses Blatt}} oder {{ui:Alle Blätter}}, eine Textsuche und {{ui:Mir zugewiesen}}. Letzteres vergleicht die zugewiesene Person mit dem Namen, unter dem MarkupCraft Sie kennt (siehe [Ihren Namen festlegen](topic:set-your-name)). Die Zeile unter den Filtern zählt, was angezeigt wird und was überfällig ist.

## Exportieren

{{ui:CSV}} schreibt die aufgelisteten Einträge als Tabelle. {{ui:BCF}} schreibt sie als BCF-Themen, jeweils mit einer Momentaufnahme ihrer Stelle auf dem Blatt, damit andere BCF-Werkzeuge sie auflisten können. Beide berücksichtigen die Filter.

## Speichern, offline arbeiten und Kopien zusammenführen

Einträge werden beim Speichern in der PDF gespeichert und sind beim Öffnen wieder da. Es ist keine Netzwerkverbindung nötig: Fügen Sie auf einem Tablet im Keller Einträge hinzu, bearbeiten, beantworten und speichern Sie sie, und bringen Sie die PDF danach zurück. Ältere PDFs und PDFs aus anderen Programmen öffnen sich wie bisher.

Um zwei Kopien zusammenzuführen, öffnen Sie eine und wählen Sie {{ui:Zusammenführen}}, dann die andere Kopie derselben PDF. Einträge werden anhand ihrer IDs verbunden:

- Ein Eintrag, den nur eine Kopie hat, wird hinzugefügt;
- ein Eintrag in beiden Kopien übernimmt seine Felder (Titel, Text, Status, zugewiesene Person, Fälligkeitsdatum) als Ganzes aus der zuletzt geänderten Kopie. Haben zwei Personen verschiedene Felder desselben Eintrags geändert, gewinnt also die Fassung der späteren Kopie. Unterhaltungen und Anhangsnamen aus beiden Kopien werden zusammengeführt;
- haben beide Kopien einem neuen Eintrag dieselbe Nummer gegeben, erhält der hinzukommende Eintrag die nächste freie Nummer;
- ein in einer Kopie entfernter Eintrag bleibt entfernt, es sei denn, er wurde danach bearbeitet.

Ein Zusammenführen lässt sich mit einem Schritt rückgängig machen.

## Einschränkungen

- Einträge werden noch nicht über Live TeamWork geteilt; verwenden Sie {{ui:Zusammenführen}}.
- In dieser Version gibt es für Einträge keine Teams, Benachrichtigungen oder Cloud-Projekte.
- Aus der PDF gelöschte Seiten nehmen ihre Einträge mit (die Bestätigung beim Löschen der Seiten zählt sie).
