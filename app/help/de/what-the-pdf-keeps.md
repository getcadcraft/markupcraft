---
title: Was in der PDF gespeichert wird
summary: Genau, was die markierte Kopie enthält, was andere PDF-Programme anzeigen und was beim Öffnen einer Datei zurückgelesen wird.
keywords: PDF-Anmerkungen, Kommentare, gespeicherte Daten, Round-Trip, Seitenbeschriftungen, Messung, Prüfstatus, Antworten, Interoperabilität, Kompatibilität, erneut öffnen, private Daten
from: 6439ad28
---

Die markierte Kopie ist die ursprüngliche PDF mit hinzugefügten Kommentaren (PDF-Anmerkungen). Die Seiten selbst, ihre Zeichnungen, Texte, Lesezeichen und Verknüpfungen werden unverändert kopiert.

## Jede Markierung

| MarkupCraft | Gespeichert als | Andere PDF-Betrachter zeigen |
|---|---|---|
| Rechteck, Rechteckwolke | Quadrat-Anmerkung (Wolke: wolkiger Rand) | Einen Rechteck- oder Wolkenkommentar |
| Ellipse | Kreis-Anmerkung | Einen Ellipsenkommentar |
| Polygon, Freiformwolke | Polygon-Anmerkung (Wolke: wolkiger Rand) | Einen Polygon- oder Wolkenkommentar |
| Polylinie | PolyLine-Anmerkung | Einen Polylinienkommentar |
| Linie, Pfeil | Linien-Anmerkung (Pfeil: geschlossene Pfeilspitze) | Einen Linien- oder Pfeilkommentar |
| Länge | Linien-Anmerkung als Bemaßung markiert, mit einer Messung | Eine Längenmessung, sofern der Betrachter sie unterstützt |
| Fläche | Polygon-Anmerkung als Fläche markiert, mit einer Messung | Eine Flächenmessung, sofern unterstützt; sonst ein Polygon |
| Zählgruppe | Eine Tinten-Anmerkung, ein Ring pro Element; ihr Text ist „group: n“ | Einen Tintenkommentar |
| Stift, Textmarker | Tinten-Anmerkung (Textmarker als solche markiert) | Einen Tintenkommentar |
| Text | FreeText-Anmerkung | Einen Textfeldkommentar |
| Hinweisbeschriftung | FreeText-Anmerkung mit Hinweislinie | Einen Hinweisbeschriftungskommentar |
| Notiz | Text-Anmerkung | Eine Haftnotiz, die sich zu ihrem Text öffnet |
| Stempel | Stempel-Anmerkung | Einen Stempelkommentar |

Jede Markierung wird gespeichert mit:

- **eigenem Erscheinungsbild**, genau so gezeichnet, wie MarkupCraft sie am Bildschirm zeigt, sodass sie in jedem Betrachter gleich aussieht und gleich gedruckt wird, einschließlich des Mängelnummer-Abzeichens;
- **dem Autor**, **den Erstellungs- und Änderungsdaten**, **dem Betreff**, **dem Kommentartext** (bei Textfeldern und Hinweisbeschriftungen den Text und den Kommentar), **der Farbe** und **der Deckkraft**;
- **seinen MarkupCraft-Details** in einem privaten Eintrag, den andere Programme ignorieren: Status, Mängelpunkt, Stil und Typ, damit er genau wieder geöffnet wird.

## Verläufe und Status

- Jede Antwort wird als Antwortkommentar gespeichert, verknüpft mit ihrer Markierung, mit Autor, Datum und Text. Antworten haben auf dem Blatt kein eigenes Symbol.
- Jede Statusänderung wird als Antwort mit einem Prüfstatus gespeichert. Andere Prüfwerkzeuge zeigen ihn als Akzeptiert, Abgelehnt oder Erledigt; Offen wird ohne Status gespeichert.
- Eine Markierung mit einem anderen Status als Offen, aber ohne protokollierte Statusänderung, erhält eine Prüfstatus-Antwort, damit andere Programme den Status ebenfalls sehen.
- Antworten auf schreibgeschützte Kommentare aus der Originaldatei werden auf dieselbe Weise gespeichert, verknüpft mit diesem Kommentar.

## Jedes Blatt

- **Maßstab:** Ein kalibriertes Blatt erhält ein Messansichtsfenster, das die Seite abdeckt (der übliche Weg, einen Seitenmaßstab zu speichern), und MarkupCraft's eigene Kopie der Kalibrierung.
- **Blattnummer:** Eine mit {{ui:Blatt umbenennen}} eingetippte Nummer wird zur Seitenbeschriftung. Hat eine Seite einer Datei eine solche, erhält jede Seite dieser Datei eine Beschriftung: ihre eingetippte Nummer, sonst ihre bisherige Beschriftung, sonst ihre Seitennummer.
- **Blatttitel:** Ein eingetippter Titel wird nur für MarkupCraft gespeichert; andere Betrachter zeigen ihn nicht.

## Text und Zeichen

Text wird in Helvetica geschrieben, die jeder PDF-Betrachter hat. Buchstaben außerhalb des westeuropäischen Zeichensatzes (Windows-1252) werden in der Kopie als „?“ gedruckt; die Speichermeldung zählt sie.

## Berechnungsblätter und Begründungen

Berechnungsblätter und Begründungen werden in einem privaten Eintrag der PDF namens `/MarkupCraftShell` gespeichert. Andere PDF-Programme ignorieren ihn. Eine ältere MarkupCraft ignoriert ihn ebenfalls und verwirft ihn beim nächsten Speichern dieser Datei.

## Was mit bereits vorhandenen Kommentaren geschieht

Wenn Sie eine PDF öffnen, die bereits Kommentare hat:

- MarkupCraft's eigene Kommentare werden genau zurückgelesen. Hat ein anderes Programm einen verschoben oder in der Größe geändert, gilt seine neue Position.
- Rechtecke, Ellipsen, Linien, Polylinien, Polygone, Tinte, Textfelder und Haftnotizen aus anderen Programmen werden zu bearbeitbaren Markierungen. **Beim Speichern entfernt MarkupCraft die Originale und schreibt sie auf seine eigene Weise neu**, mit ihren Pop-ups und Antworten. Ihr Aussehen kann sich leicht ändern.
- Prüfstatus aus anderen Programmen setzen den Status; der neueste gewinnt.
- Alles Übrige (Texthervorhebungen, Stempel anderer Programme und Sonderarten) bleibt in der Kopie **unverändert** erhalten, schreibgeschützt.
- Verknüpfungen und Formularfelder bleiben unverändert erhalten und werden nicht aufgelistet.

Eine Datei erneut zu speichern verdoppelt nie etwas: Die Markierungen, die MarkupCraft gelesen hat, werden ersetzt, nicht erneut hinzugefügt.

## Was nicht verändert wird

Ihre Originaldatei auf dem Datenträger wird nie verändert. Die Kopie ist nicht auf Dateigröße optimiert und kann daher etwas größer sein als das Original. Geschützte (verschlüsselte) PDFs können nicht gespeichert werden.
