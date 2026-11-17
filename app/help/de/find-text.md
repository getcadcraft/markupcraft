---
title: Text in den Zeichnungen suchen
summary: Die Wörter auf jedem Blatt suchen, zu jedem Treffer springen und alle Treffer mit einem Schritt umwolken.
keywords: suchen, finden, Text, Wort, Wörter, ctrl f, nach etwas suchen, Notiz, keynote, Hinweisbeschriftung, alle umwolken, Treffer markieren, ocr, scan, gescannt, Text lesen, Text auswählen, Text kopieren, tesseract
from: 3435c9eb
---

{{ui:Text suchen}} oben im Bereich {{ui:Blätter}} durchsucht die Wörter, die auf den Blättern selbst gezeichnet sind. {{ui:Blätter durchsuchen}} darunter durchsucht nur die Blattnamen.

## Suchen

1. Drücken Sie {{key:Mod+F}} oder öffnen Sie {{ui:Text suchen}}.
2. Geben Sie die Wörter ein, zum Beispiel `hood` oder `verify in field`.
3. Wählen Sie {{ui:Alle Blätter}} oder {{ui:Dieses Blatt}} und aktivieren Sie {{ui:Groß-/Kleinschreibung beachten}} oder {{ui:Ganze Wörter}}, wenn Sie das brauchen.
4. Drücken Sie {{key:Enter}} oder wählen Sie {{ui:Suchen}}.

Ergebnis: Jeder Treffer wird mit seiner Blattnummer und den umgebenden Wörtern aufgelistet und auf seinem Blatt gelb markiert. Wählen Sie einen Treffer, um sein Blatt zu öffnen und darauf zu zoomen.

Eine Wortgruppe wird auch gefunden, wenn die Zeichnung sie auf zwei Textstücke oder zwei Zeilen verteilt.

## Alle Treffer umwolken

Wählen Sie {{ui:Alle umwolken}}. Um jeden Treffer in der Liste, auf jedem Blatt, wird eine Revisionswolke gelegt, mit „Gefunden: <Ihre Wörter>“ als Kommentar. Ein Druck auf {{key:Mod+Z}} entfernt alle auf einmal.

## Den Text eines Scans lesen (OCR)

Ein gescanntes Blatt ist nur ein Bild: Bis seine Wörter gelesen sind, gibt es nichts zu finden. Wenn die Anzahl angibt, dass Blätter keinen Text haben, wählen Sie darunter {{ui:Text lesen (OCR)…}} oder {{ui:Seiten}} › {{ui:Text lesen (OCR)…}}.

1. Wählen Sie die Seiten: dieses Blatt, jede Seite der Datei oder jede Seite aller geöffneten Dateien.
2. Wählen Sie die Sprache des Textes. {{ui:Auch Englisch}} liest auch englische Wörter.
3. Wählen Sie {{ui:Text lesen}}. Ein Balken zeigt die gerade gelesene Seite; {{ui:Beenden}} beendet den Lauf und behält die bereits gelesenen Seiten.

Ergebnis: Die Wörter lassen sich wie jeder andere Text finden, auswählen und kopieren. Alles läuft auf Ihrem Computer: Nichts wird irgendwohin gesendet. In Studio funktioniert es ohne Verbindung, und im Browser, sobald die App für den Offline-Betrieb gespeichert wurde (Englisch und Ihre Oberflächensprache) oder eine Sprache einmal verwendet wurde. Seiten, die bereits Text haben, bleiben unverändert.

Beim Speichern werden die Wörter als unsichtbarer Text hinter das Bild in die PDF geschrieben, getrennt von Ihren Markierungen, sodass auch andere PDF-Programme sie suchen und kopieren können. Bis Sie speichern, wird die Datei als nicht gespeichert angezeigt.

## Text auswählen und kopieren

Wählen Sie {{ui:Mehr}} › {{ui:Text zum Kopieren auswählen}}. Ziehen Sie von einem Wort zum anderen, um die Wörter dazwischen auszuwählen, ziehen Sie von einer leeren Stelle, um die Wörter in einem Rahmen auszuwählen, oder doppelklicken Sie auf ein Wort. {{key:Mod+A}} wählt jedes Wort auf dem Blatt aus. {{key:Mod+C}} kopiert sie und behält die Zeilen bei. Jedes andere Werkzeug beendet die Auswahl.

## Gut zu wissen

- Zeichnungen, deren Buchstaben als Linien gezeichnet sind, haben ebenfalls keinen Text; das Lesen als Bild funktioniert am besten bei gedrucktem Text wie einem gescannten Buch oder einer Leistungsbeschreibung.
- Der Leser ist Tesseract, in der App eingebaut mit seinen Sprachdaten für Englisch und die Sprachen der App. Der erste Lauf lädt ihn (etwa 6 MB, mehr für eine zweite Sprache).
- Wie gut gelesen wird, hängt vom Scan ab: Saubere Seiten mit 300 dpi werden nahezu Wort für Wort erkannt; alte, blasse oder niedrig aufgelöste Scans verpassen mehr Wörter.
- Die Liste zeigt die ersten 500 Treffer; {{ui:Alle umwolken}} umwolkt bis zu 2,000.
- Die Treffer werden gelöscht, wenn Sie den Satz schließen, und für eine Datei, wenn Sie ihre Seiten ändern.
