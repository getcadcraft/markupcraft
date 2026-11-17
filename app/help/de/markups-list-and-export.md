---
title: Die Markierungsliste, Filter und Exporte
summary: Jede Markierung im Satz sehen, nach Blatt, Autor, Status und Art filtern, zu einer springen und die Liste als CSV oder BCF exportieren.
keywords: Markierungsliste, Liste, Übersicht, XLSX, Tabellenarbeitsmappe, Arbeitsmappe, PDF-Bericht, BCF importieren, Filter, sortieren, Bericht, Export, CSV, Tabelle, BCF, bcfzip, Themen, Kommentarliste, springen
from: 6c70261e
---

## Die Liste öffnen

Wählen Sie rechts den Reiter {{ui:Markups}}. Jede Markierung jeder geöffneten Datei ist aufgelistet, nach Blattreihenfolge und dann in der Reihenfolge, in der sie entstanden ist. Jede Zeile zeigt:

- ein Symbol in der Farbe der Markierung, ihre Mängelnummer, falls vorhanden („#4“), und ihren Betreff,
- ihren Text, Stempeltext oder Messwert und ihren Kommentar,
- das Blatt, den Autor und das Datum,
- ihren Status (oder „Schreibgeschützt“ bei Kommentaren, die mit der Datei kamen) und eine Anzahl an Antworten, wenn es welche gibt.

Die Zeile über der Liste zählt sie: „38 Markierungen“ oder „12 von 38 Markierungen“, wenn ein Filter aktiv ist.

## Zu einer Markierung springen

Klicken Sie auf eine Zeile. MarkupCraft zeigt das Blatt, wählt die Markierung aus und zoomt darauf, wenn sie außerhalb des Bildes oder zu klein zum Erkennen ist. {{ui:Properties}} zeigt ihre Details und den Verlauf, wenn Sie zurück zu diesem Reiter wechseln.

## Filtern

Vier Menüs über der Liste. Sie wirken zusammen.

| Menü | Auswahl |
|---|---|
| {{ui:Sheet}} | Alle Blätter, „Dieses Blatt“ (folgt Ihnen beim Wechsel der Blätter) oder jedes Blatt mit Markierungen |
| {{ui:Author}} | Beliebig, oder jeder Autor im Satz |
| {{ui:Status}} | Beliebiger Status, Offen, Angenommen, Abgelehnt, Erledigt |
| {{ui:Type}} | Beliebige Art, oder jede Markierungsart im Satz |

Beispiele:

- Was auf diesem Blatt noch offen ist: {{ui:Sheet}} „Dieses Blatt“, {{ui:Status}} „Offen“.
- Die Kommentare eines Beraters: {{ui:Author}} dessen Name.
- Alle Messungen: {{ui:Type}} „Length“ oder „Area“.

Die Liste zeigt bis zu 2000 Zeilen; bei sehr großen Sätzen engen Sie sie mit einem Filter ein.

## Nach CSV exportieren

Wählen Sie {{ui:CSV}} oben im Reiter. Sie erhalten „<name> markups.csv“ mit **den Markierungen, so wie sie gerade gefiltert sind**, eine pro Zeile, mit diesen Spalten:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- „Text“ enthält den Wortlaut von Textfeldern und Hinweisen, den Stempeltext oder den Namen einer Zählgruppe.
- „Measurement“ enthält Längen, „area, perimeter“ bei Flächen und „group: n“ bei Zählungen.
- Datumsangaben sind vollständige Zeitstempel in UTC.

Um alles zu exportieren, setzen Sie zuerst alle Filter auf ihre erste Auswahl zurück.

## Eine Legende auf dem Blatt

{{ui:Legend}} im Reiter {{ui:Markups}} legt eine Legende oben rechts von dem, was Sie sehen: ein Kasten mit jeder Markierungsart auf dem Blatt (nach Betreff und Farbe, etwa „Cloud“, „Question“ oder „Outlets“) und ihrer Anzahl. Eine Zählgruppe zählt ihre Markierungen. Die Legende zählt beim Zeichnen, Verschieben oder Löschen von Markierungen mit, und sie wird mit den Zählungen des jeweiligen Moments gedruckt und gespeichert.

Verschieben und skalieren Sie sie wie jede Markierung. Ändern Sie in ihren {{ui:Properties}} den {{ui:Title}} oder setzen Sie {{ui:Counts}} auf {{ui:The whole set}}, um jedes Blatt zu zählen. Räume, andere Legenden und Kommentare anderer Programme werden nicht gezählt.

## Eigene Spalten und Sortieren

{{ui:Columns}} im Reiter {{ui:Markups}} fügt jeder Markierung eigene Spalten hinzu: einen **Text**, eine **Auswahl** (etwa Gewerk: Maschinenbau, Elektro, Sanitär), eine **Zahl** (etwa Kosten) oder ein **Datum**. Geben Sie jeder Spalte einen Namen, wählen Sie die Art, listen Sie bei einer Auswahlspalte die Optionen auf und wählen Sie {{ui:Save columns}}.

- Füllen Sie sie unter {{ui:Properties}} aus: Jede Spalte hat dort ein Feld. Eine Zahlenspalte nimmt nur Zahlen an, eine Datumsspalte nur ein Datum.
- Die Liste zeigt die Werte unter jeder Markierung. Der Filter {{ui:Column}} wählt einen Wert (oder die Markierungen, bei denen er leer ist), und {{ui:Sort}} ordnet die Liste nach einer Spalte, nach Autor, Status, Art oder Datum statt nach Blatt.
- CSV- und XLSX-Exporte führen die Spalten nach den üblichen Spalten auf. Die Spalten werden mit dem PDF gespeichert und kommen beim erneuten Öffnen zurück.

## Eine Übersicht exportieren: Arbeitsmappe oder PDF

- {{ui:XLSX}} lädt „<name> markup summary.xlsx“ herunter, mit drei Tabellen: **Markups** (eine Zeile pro gelisteter Markierung, dieselben Spalten wie bei der CSV), **By sheet** (wie viele Markierungen jedes Blatt hat, offen und geschlossen, und wie viele jeder Art, mit Summen) und **Punch list** (wenn Mängelpunkte vorhanden sind).
- {{ui:PDF}} lädt „<name> markup summary.pdf“ herunter: ein Bericht zum Drucken oder Versenden mit dem Namen des Satzes, dem Datum und einer Tabelle der gelisteten Markierungen (Nummer, Blatt, Art, Betreff, Text oder Kommentar, Messwert, Autor, Status und die letzte Antwort). Langer Text bricht um; die Kopfzeile der Tabelle wiederholt sich auf jeder Seite.

Beide nehmen die Liste so, wie sie gefiltert ist. Filtern Sie also zuerst, um nur ein Blatt, einen Autor oder die offenen Punkte zu berichten.

## Nach BCF exportieren

Wählen Sie {{ui:BCF}}. MarkupCraft macht ein Bild jeder gelisteten Markierung auf ihrem Blatt („Schnappschüsse für BCF werden erstellt (3 von 12)…“) und lädt dann „<name> markups.bcfzip“ herunter. Jede Markierung wird zu einem BCF-Thema mit Status, Autor, Daten, Antworten als Kommentaren, Zuständigem und Fälligkeitsdatum aus ihrem Mängelpunkt sowie dem Schnappschuss.

Verwenden Sie es, um Prüfkommentare zu Zeichnungen in BIM-Koordinationswerkzeuge zu übernehmen, die BCF lesen. Was übernommen wird und was nicht, steht unter [BCF-Grundlagen](topic:bcf-basics).

## BCF importieren

{{ui:Import BCF}} liest eine .bcfzip- (oder .bcf-)Datei aus einem BIM-Werkzeug:

- Themen aus dem eigenen BCF-Export von MarkupCraft finden ihre Markierungen wieder: Neue Antworten werden dem Verlauf hinzugefügt, und ein neuer Status wird gesetzt (Closed zählt als Erledigt). Bereits vorhandene Antworten werden nicht doppelt hinzugefügt.
- Andere Themen werden zu Notizen, mit Titel, Beschreibung, Autor und Kommentaren. Eine Notiz kommt auf das Blatt, dessen Nummer oder Name die Labels des Themas angeben, sonst auf das geöffnete Blatt. Eine BIM-Kamera hat auf Papier keinen Platz; solche Notizen werden deshalb oben links auf dem Blatt gestapelt, damit Sie sie verschieben können.

Der gesamte Import ist ein einziger Schritt: {{key:Mod+Z}} nimmt ihn zurück. Siehe [BCF-Grundlagen](topic:bcf-basics).

## Was die Liste noch nicht kann

- Die Liste gruppieren (stattdessen sortieren, dann filtern).
- Werte in der Liste bearbeiten (in {{ui:Properties}} bearbeiten; Mängelfelder sind im Reiter {{ui:Punch list}} bearbeitbar).
