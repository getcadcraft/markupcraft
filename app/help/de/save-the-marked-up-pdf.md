---
title: Markierte PDF speichern
summary: Eine Kopie mit allen Markierungen als normale PDF-Kommentare herunterladen, prüfen, was andere PDF-Programme anzeigen, und später weiterarbeiten.
keywords: speichern, herunterladen, PDF exportieren, markiert, Anmerkungen, Kommentare, teilen, senden, Thema, weiterarbeiten, wieder öffnen, Hin- und Rückweg, drucken
from: 4c198ebe
---

## Speichern

1. Wählen Sie in der Symbolleiste {{ui:Speichern}} oder drücken Sie {{key:Mod+S}}.
2. Sind mehrere Dateien geöffnet, wählen Sie {{ui:Diese Datei}} (die Datei des aktuellen Blatts) oder {{ui:Jede geänderte Datei}}. Jede Kopie wird separat heruntergeladen.
3. Warten Sie, bis „Wird gespeichert: <Datei>…“ abgeschlossen ist. Beim ersten Speichern in einer Sitzung wird auch der PDF-Schreiber geladen.

Ergebnis: Ihr Browser lädt „<Name> (marked up).pdf“ herunter, und die Statusleiste meldet es: 'A-Plans (marked up).pdf gespeichert (24 Markierungen, 18.2 MB). Die Originaldatei ist unverändert.' Der Punkt nach {{ui:Speichern}} verschwindet.

**Ihre Originaldatei wird nie verändert.** MarkupCraft schreibt eine neue Datei. Wo sie landet, hängt von den Download-Einstellungen Ihres Browsers ab (siehe [Dateien, die MarkupCraft öffnet und speichert](topic:files#where-downloads-go)).

## Später weiterarbeiten

Öffnen Sie beim nächsten Mal die Kopie „(marked up)“, nicht das Original. Alles ist wieder bearbeitbar: Markierungen, Status, Antworten, Mängelpunkte, der Maßstab jedes Blatts und alle Blattnamen, die Sie eingegeben haben. Wenn Sie erneut speichern, wird eine Datei mit demselben Namen „(marked up)“ heruntergeladen. Ihr Browser kann eine Nummer wie „(1)“ ergänzen, falls der alte Download noch im Ordner liegt. Ersetzen oder bereinigen Sie alte Kopien selbst.

MarkupCraft speichert die PDF nicht automatisch. Während Sie arbeiten, behält es eine Wiederherstellungskopie in diesem Browser, sodass ein Absturz oder ein geschlossener Tab Ihre Markierungen nicht verliert: Beim nächsten Öffnen von MarkupCraft fragt es „Ihre Arbeit wiederherstellen?“. Siehe [Ihre Arbeit wiederherstellen](common:recover). Speichern Sie trotzdem vor dem Schließen. Wenn Sie mit nicht gespeicherten Markierungen gehen wollen, fragt der Browser zuerst „Seite verlassen?“ (iPad Safari tut das nicht).

## Was andere PDF-Programme sehen

Jede Markierung wird als normaler PDF-Kommentar (Anmerkung) mit eigener Zeichnung geschrieben. So zeigt, druckt und listet jeder PDF-Betrachter sie im Kommentarbereich:

- **Das Aussehen ist gleich** wie in MarkupCraft: Wolken mit ihren Bögen, Pfeilspitzen, Stempel, Zählpunkte, Mängelnummern-Abzeichen, Messbeschriftungen.
- **Die Details sind standardisiert:** Autor, Datum, Betreff, der Kommentartext und die Farben.
- **Wolken** sind Rechteck- oder Polygonkommentare mit gewellter Umrandung; **Textfelder** und **Hinweisbeschriftungen** sind Textfeldkommentare; **Notizen** sind Haftnotizen; **Stift**- und **Hervorhebungsstriche** sind Tinte; **Stempel** sind Stempelkommentare.
- **Längen und Flächen** sind Messkommentare, und jedes kalibrierte Blatt enthält seinen Maßstab, sodass Betrachter, die Messungen verstehen, die Werte anzeigen können.
- **Antworten** sind Antworten auf den Kommentar, und **Status** sind Prüfzustände (Offen wird ohne Zustand angezeigt).
- **Blattnummern**, die Sie eingegeben haben, werden zu den Seitenbeschriftungen, die andere Betrachter anzeigen.

Einige Dinge liest nur MarkupCraft zurück: die zuständige Person und das Fälligkeitsdatum des Mängelpunkts, der Status des Mängelpunkts und einige Stildetails. Andere Programme behalten sie, solange sie den Kommentar nicht neu schreiben.

In einem anderen Programm können Kommentare wie alle anderen verschoben oder bearbeitet werden. Wenn jemand das tut und die Datei zurückschickt, verwendet MarkupCraft beim Öffnen die neue Position des Kommentars.

Vollständige Details: [Was in der PDF gespeichert wird](topic:what-the-pdf-keeps).

## Zeichen, die als „?“ gedruckt werden

Markierungstext wird mit der Standardschrift Helvetica geschrieben, die jeder PDF-Betrachter hat. Sie deckt Englisch und westeuropäische Buchstaben ab (é, ñ, ü, ø und ähnliche), aber keine anderen Schriftsysteme, keine Symbole außerhalb dieses Zeichensatzes und keine Emojis. Diese Zeichen werden in MarkupCraft korrekt angezeigt, in der gespeicherten Kopie aber als „?“ gedruckt. Die Speichermeldung zählt sie: „3 Zeichen außerhalb des westeuropäischen Zeichensatzes werden in der Kopie als „?“ gedruckt.“ Schreiben Sie solche Wörter aus oder verwenden Sie einen einfachen Ersatz (zum Beispiel „Dm.“ für das Durchmesserzeichen).

## Dateien, die nicht gespeichert werden können

- **Geschützte PDFs:** „Diese PDF-Datei ist geschützt (verschlüsselt), daher kann keine markierte Kopie geschrieben werden. Bitten Sie um eine ungeschützte Kopie.“ Sie können sie trotzdem am Bildschirm prüfen und die CSV- und BCF-Datei exportieren.
- Schlägt das Speichern aus einem anderen Grund fehl, zeigt ein Feld „<Datei> konnte nicht gespeichert werden.“ mit dem Grund. Ihre Markierungen sind weiterhin im Tab; nichts geht verloren, bis Sie ihn schließen.

## Reduzieren und Drucken

Das Reduzieren (Markierungen in die Seite einbrennen) ist noch nicht umgesetzt, ebenso der Druckbefehl. Zum Drucken öffnen Sie die gespeicherte Kopie in einem beliebigen PDF-Betrachter und drucken mit angezeigten Kommentaren.
