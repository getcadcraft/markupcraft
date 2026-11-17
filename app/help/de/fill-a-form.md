---
title: Ein PDF-Formular ausfüllen
summary: Text in die Formularfelder einer PDF eingeben, Kästchen ankreuzen und aus Listen wählen; die Werte werden im Formular selbst gespeichert.
keywords: formular, formulare, ausfüllbar, eintragen, ausfüllen, feld, felder, textfeld, kontrollkästchen, ankreuzen, optionsfeld, dropdown, liste, genehmigung, antrag, prüfformular, einreichungsformular, freigeben
from: ab366541
---

Viele PDFs enthalten ein Formular: Genehmigungsanträge, Prüflisten, Deckblätter für Einreichungen. MarkupCraft zeigt die Felder des Formulars und ihre Werte und lässt Sie sie ausfüllen. Die Werte gehen in die eigenen Felder der PDF, sodass Acrobat und jeder andere PDF-Reader sie anzeigt und behält.

## Das Formular ausfüllen

1. Öffnen Sie die PDF. Wenn sie ein Formular enthält, zeigt die Statusleiste an, wie viele Felder es hat.
2. Wählen Sie {{ui:Formular ausfüllen}} in der Symbolleiste (oder drücken Sie {{key:F}}). Jedes Feld auf der Seite erhält ein Kästchen, in das Sie schreiben können.
3. Klicken Sie auf ein Feld und geben Sie Text ein. Setzen Sie Häkchen in Kontrollkästchen, wählen Sie Optionsfelder sowie Einträge aus Dropdown-Feldern und Listen. {{key:Tab}} springt zum nächsten Feld.
4. Um das Blatt beim Ausfüllen zu verschieben, ziehen Sie irgendwo außerhalb der Felder.
5. Drücken Sie {{key:Esc}} oder wählen Sie ein anderes Werkzeug, wenn Sie fertig sind. Was Sie eingegeben haben, bleibt auf dem Blatt.

Mit {{ui:Auswahl}} aktiviert ein Doppelklick auf ein Feld {{ui:Formular ausfüllen}} und setzt den Cursor in dieses Feld.

## Das ausgefüllte Formular speichern

Wählen Sie {{ui:Speichern}}. Die Kopie, die Sie herunterladen, enthält Ihre Werte in den Feldern, mit Ihren Markierungen daneben. Die Statusleiste zeigt an, wie viele Felder ausgefüllt wurden.

Um ein Formular abzugeben, das niemand mehr ändern kann, wählen Sie {{ui:Seiten}} und dann {{ui:Reduzierte Kopie speichern…}}: Die Werte werden Teil der Seite. Beim Drucken geschieht dasselbe.

## Gut zu wissen

- Ein Feld, das die PDF sperrt (nur lesbar), kann nicht geändert werden. Sein Kästchen ist grau.
- Text bis zur eigenen Längenbegrenzung des Feldes wird übernommen; zusätzliche Zeichen werden nicht eingegeben.
- Manche Formulare haben kein gezeichnetes Bild ihrer Kästchen und Schaltflächen, und andere Programme zeigen sie leer an. MarkupCraft zeichnet sie, und beim Speichern fügt es das Bild hinzu, damit sie überall angezeigt werden.
- Rückgängig im Feld gilt nur für dieses Feld: Drücken Sie {{key:Ctrl+Z}}, während Sie darin schreiben. Das Rückgängig für Markierungen macht Formularwerte nicht rückgängig.
- Wenn Ihr Browser geschlossen wird, kehren die eingegebenen Werte mit dem Rest Ihrer nicht gespeicherten Änderungen zurück.
- Werte in Zeichen, die die Standardschrift der PDF nicht darstellen kann (zum Beispiel Chinesisch), werden gespeichert, und die PDF bittet jeden Leser, sie selbst zu zeichnen.
- Unterschriftsfelder und Druckschaltflächen werden hier nicht ausgefüllt. Zum Unterschreiben verwenden Sie {{ui:Stempel}} und Ihre Unterschrift.
- Werte in einem Formular werden in einer Live-Sitzung noch nicht geteilt.
