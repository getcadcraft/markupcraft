---
title: Fehlerbehebung
summary: Meldungen, die MarkupCraft anzeigt, und was zu tun ist, sowie Lösungen für Dinge, die nicht zu funktionieren scheinen.
keywords: Problem, Fehler, funktioniert nicht, Hilfe, Meldung, öffnet sich nicht, kann nicht speichern, Passwort, geschützt, Messung abgelehnt, kalibrieren, offline, leer, langsam, verlorene Markierungen, Fragezeichen
from: bb650b39
---

Die meisten Probleme erklärt die Statusleiste unten auf dem Bildschirm. Lesen Sie sie zuerst.

## Dateien öffnen

**„MarkupCraft öffnet PDF-Dateien. ‚x‘ ist keine PDF-Datei.“**
Sie haben etwas anderes gewählt oder abgelegt. Nur PDF-Dateien lassen sich öffnen. Exportieren Sie Zeichnungen zuerst aus Ihrem CAD-Programm als PDF.

**‚„name“ benötigt ein Passwort zum Öffnen. Öffnen Sie eine ungeschützte Kopie.‘**
Die PDF-Datei ist passwortgeschützt. Bitten Sie den Absender um eine ungeschützte Kopie oder öffnen Sie sie in einem PDF-Programm, in dem Sie das Passwort kennen, und speichern Sie eine Kopie ohne Passwort.

**‚„name“ konnte nicht als PDF gelesen werden (…)‘**
Die Datei ist beschädigt oder keine echte PDF-Datei (ein unvollständiger Download, ein abgeschnittener E-Mail-Anhang). Laden Sie sie erneut herunter. Können andere PDF-Programme sie öffnen, erstellen Sie dort mit „Speichern unter“ eine saubere Kopie und öffnen Sie diese.

**„Einige Dateien konnten nicht geöffnet werden“**
Wenn Sie mehrere auf einmal öffnen, listet dieses Feld die fehlgeschlagenen Dateien und den Grund. Die anderen sind geöffnet.

**„Der PDF-Leser konnte nicht geladen werden: …“**
Die PDF-Engine konnte nicht abgerufen werden. Online: Laden Sie die Seite neu und versuchen Sie es erneut; prüfen Sie, ob eine Firewall oder ein Inhaltsblocker die Website blockiert. Offline: MarkupCraft wurde in diesem Browser nicht für die Offline-Nutzung gespeichert (die Leiste oben sagt nicht „Offline bereit“). Stellen Sie eine Verbindung her, wählen Sie {{ui:Für Offline speichern}} und warten Sie auf „Offline bereit“. Siehe [Offline arbeiten](common:offline).

**„Einige Anmerkungen werden auf dem Bildschirm möglicherweise zweimal angezeigt“ oder „Zusätzliche Anmerkungsdetails konnten nicht gelesen werden“**
Die vorhandenen Kommentare der Datei sind ungewöhnlich. Sie werden trotzdem so gut wie möglich geöffnet; prüfen Sie sie, bevor Sie sich darauf verlassen. Das Speichern funktioniert weiterhin.

**Die Seite hat den falschen Namen oder heißt „Seite 3“**
Siehe [Wie Blätter ihre Namen bekommen](topic:open-a-plan-set#how-sheets-get-their-names). Gescannte Blätter haben keinen lesbaren Text; verwenden Sie {{ui:Blatt umbenennen}}.

**Dieselben Blätter erscheinen zweimal**
Dieselbe Datei wurde zweimal geöffnet. Wählen Sie {{ui:Schließen}} (speichern Sie vorher, falls nötig) und öffnen Sie den Satz erneut.

## Zeichnen und Auswählen

**Beim Klicken auf das Blatt passiert nichts**
Prüfen Sie, welches Werkzeug in der Symbolleiste aktiv ist, und lesen Sie die Statusleiste. Bei {{ui:Rechteck}}, {{ui:Ellipse}} und {{ui:Wolke}} zeichnet ein Klick ohne Ziehen nichts: Ziehen Sie. Bei {{ui:Polylinie}}, {{ui:Polygon}}, {{ui:Freie Wolke}} und {{ui:Fläche}} werden Punkte hinzugefügt: Beenden Sie mit einem Doppelklick oder {{key:Enter}}.

**„Ein Polygon braucht mindestens 3 Punkte.“ (oder 2 für eine Polylinie)**
Klicken Sie weitere Punkte, bevor Sie beenden.

**„Nichts eingegeben, daher wurde kein Text hinzugefügt.“**
Textfelder und Hinweisbeschriftungen werden nur behalten, wenn sie Text haben. Zeichnen Sie sie erneut und tippen Sie, bevor Sie woanders klicken.

**„Die beiden Punkte sind gleich. Klicken Sie auf zwei verschiedene Punkte.“**
Bei Linien, Pfeilen, Längen und Kalibrierung müssen die beiden Enden voneinander entfernt sein. Ziehen Sie oder klicken Sie zweimal an verschiedenen Stellen.

**Ich kann eine Markierung nicht verschieben oder löschen; sie hat einen grauen gestrichelten Rahmen**
Es ist ein schreibgeschützter Kommentar, der mit der Datei kam (zum Beispiel eine Texthervorhebung). MarkupCraft behält ihn unverändert: Sie können nur darauf antworten. Die Statusleiste sagt „schreibgeschützte Markierung(en) bleiben wie in der Datei erhalten“.

**Meine Tasten tippen Buchstaben in ein Feld, statt Werkzeuge zu wählen**
Der Cursor steht in einem Textfeld (einer Antwort, einem Feld in {{ui:Eigenschaften}}, der Blattsuche). Klicken Sie zuerst auf einen leeren Teil des Blattbereichs oder drücken Sie {{key:Esc}}, wenn Sie Markierungstext bearbeiten.

**Die Leertaste verschiebt nicht, oder die Pfeiltasten tun nichts**
Sie haben gerade eine Schaltfläche der Symbolleiste angeklickt, daher hat sie noch die Tastatur. Ziehen Sie stattdessen mit der mittleren Maustaste oder klicken Sie einmal auf das Blatt, während {{ui:Auswahl}} eingeschaltet ist, und versuchen Sie es erneut. Siehe auch [Tastatur und Maus](topic:keyboard#when-a-key-does-nothing).

**Eine Zwei-Finger-Geste auf dem Touchscreen hat eine Spur hinterlassen**
Ein Ziehwerkzeug (Stift, Wolke, Rechteck) startete, bevor der zweite Finger kam, und endete, bevor es abgebrochen wurde. Drücken Sie {{ui:Rückgängig}}. Setzen Sie beide Finger gleichzeitig auf, wenn Sie zoomen möchten.

## Messen

**„Kalibrieren Sie dieses Blatt zuerst: Wählen Sie zwei Punkte mit bekanntem Abstand oder wählen Sie seinen Maßstab. Messen Sie dann.“**
Jedes Blatt braucht seinen eigenen Maßstab, bevor {{ui:Länge}} oder {{ui:Fläche}} verwendet werden kann. MarkupCraft hat auf {{ui:Kalibrieren}} umgeschaltet: Klicken Sie die beiden Enden eines bekannten Maßes an und geben Sie dessen Länge ein, oder klicken Sie in der Statusleiste auf die Maßstabsschaltfläche und wählen Sie einen Maßstab. Siehe [Ein Blatt kalibrieren und messen](topic:calibrate-and-measure).

**„Das ist keine Länge, die MarkupCraft versteht.“**
Geben Sie sie so ein: `24'-0"`, `12' 6 1/2"`, `7.2 m` oder `900 mm`. Siehe [Einheiten, Längen und Maßstäbe](topic:units-and-scales).

**Die Messungen stimmen ein wenig oder völlig nicht**
- Ein voreingestellter Maßstab auf einem PDF, das nicht in voller Größe ist, misst falsch. Kalibrieren Sie stattdessen anhand eines langen bekannten Maßes.
- Ein Tausendertrennzeichen wurde als Dezimalpunkt gelesen: `1,200 mm` bedeutet 1.2 mm. Geben Sie `1200 mm` ein.
- Zoomen Sie beim Klicken auf die Enden hinein.
- Die Zeichnung ist möglicherweise nicht maßstäblich („NTS“).

**„Wählen Sie zuerst eine Zählgruppe aus, dann Shift+Klick auf eine Markierung, um sie zu entfernen.“**
Wählen Sie {{ui:Auswahl}}, klicken Sie auf die Zählgruppe, wählen Sie dann erneut {{ui:Zählen}} und klicken Sie mit {{key:Shift}} auf den Punkt.

## Speichern

**„Dieses PDF ist geschützt (verschlüsselt), daher kann keine markierte Kopie geschrieben werden.“**
Die Datei verbietet Änderungen. Bitten Sie um eine ungeschützte Kopie. Inzwischen können Sie die Markierungsliste weiterhin als CSV oder BCF exportieren.

**„Der PDF-Schreiber konnte nicht geladen werden: …“**
Meist sind Sie offline und die App wurde nicht für die Offline-Nutzung gespeichert (kein „Offline bereit“ in der Leiste oben). Ihre Markierungen sind weiterhin im Reiter: Lassen Sie ihn offen, stellen Sie eine Verbindung her und wählen Sie erneut {{ui:Speichern}}. Wählen Sie dann {{ui:Für Offline speichern}}, damit es beim nächsten Mal offline funktioniert; die gespeicherte Kopie enthält den PDF-Schreiber.

**„<Datei> konnte nicht gespeichert werden“**
Das Feld zeigt den Grund. Ihre Markierungen sind weiterhin im Reiter. Versuchen Sie es erneut; wenn es sich wiederholt, exportieren Sie die CSV, damit die Kommentare nicht verloren gehen, und melden Sie die Meldung.

**Ich habe Speichern gewählt, aber nur eine Datei kam an**
Ihr Browser hat die zusätzlichen Downloads blockiert. Suchen Sie einen Hinweis in der Adressleiste, erlauben Sie dieser Website den Download mehrerer Dateien und speichern Sie dann erneut.

**Ich finde die gespeicherte Datei nicht**
Sie ist im Downloads-Ordner Ihres Browsers gelandet. Öffnen Sie die Downloadliste des Browsers (in Chrome und Edge {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; in Firefox und Safari die Downloadschaltfläche in der Symbolleiste), um zu sehen, wo. Siehe [Browser und Computer](common:browsers).

**Einige Texte zeigen „?“ in anderen PDF-Betrachtern**
Zeichen außerhalb des westeuropäischen Zeichensatzes werden in der Kopie als „?“ gedruckt. Die Speichermeldung zählt sie. Siehe [Das markierte PDF speichern](topic:save-the-marked-up-pdf).

**Das Stempeldatum zeigt morgen (oder gestern)**
Stempeldaten sind in UTC angegeben. Siehe [Stempel und Haftnotizen](topic:stamps-and-notes).

## Offline arbeiten

**Die Offline-Schaltfläche sagt „Konnte nicht gespeichert werden“**
Einige Dateien der App wurden nicht heruntergeladen. Prüfen Sie die Verbindung und klicken Sie erneut auf die Schaltfläche; sie zählt „Speichern von N von M“, bis „Offline bereit“ erscheint.

**Die Offline-Schaltfläche sagt „Offline nicht verfügbar“**
Dieses Browserfenster kann keine Offline-Kopie speichern: ein privates Fenster oder ein Computer, dessen Richtlinie das blockiert. Öffnen Sie MarkupCraft in einem normalen Fenster und versuchen Sie es erneut.

**Offline ist die App eine ältere Version**
Die Offline-Kopie ist die Version, die Sie gespeichert haben. Sind Sie online, klicken Sie auf „Offline bereit“ und wählen Sie „Erneut speichern (neueste Version abrufen)“. Um Speicherplatz freizugeben, wählen Sie „Offline-Kopie entfernen“. Siehe [Offline arbeiten](common:offline).

**Die Hilfe öffnet sich nicht**
Drücken Sie {{key:F1}} (auf einem Mac mit **fn**) oder wählen Sie {{ui:Hilfe}} in der Leiste oben. Sie funktioniert auch offline.

## Verlorene Dinge

**Meine Markierungen sind nach dem Schließen oder Neuladen des Reiters weg**
Öffnen Sie MarkupCraft erneut im selben Browser: Es bietet die ungespeicherte Arbeit mit „Ihre Arbeit wiederherstellen?“ wieder an. Wählen Sie {{ui:Wiederherstellen}} und speichern Sie das PDF. Kopien werden bis zu 30 Tage aufbewahrt; ein privates Fenster oder das Löschen der Website-Daten lässt keine übrig. Siehe [Ihre Arbeit wiederherstellen](common:recover).

**Mein Name, meine Werkzeugeinstellungen oder mein Werkzeugkasten sind weg**
Sie werden nur in diesem Browser gespeichert und wurden gelöscht (Website-Daten gelöscht, ein privates Fenster, ein anderer Browser oder Computer oder Safaris Bereinigung von Websites, die eine Weile nicht besucht wurden). Legen Sie den Namen erneut fest und importieren Sie Ihren exportierten Werkzeugkasten. Siehe [Was in diesem Browser gespeichert bleibt](topic:browser-storage).

**„Der Werkzeugkasten konnte in diesem Browser nicht gespeichert werden (Speicher ist aus oder voll). Exportieren Sie ihn, um ihn zu behalten.“**
Der Browser verweigert das Speichern von Daten für diese Website (privater Modus, Speicherung durch eine Einstellung oder Richtlinie blockiert, oder Speicher voll). Exportieren Sie den Werkzeugkasten nach jeder Änderung und importieren Sie ihn beim nächsten Mal.

## Anzeige und Geschwindigkeit

**Das Blatt ist für einen Moment unscharf**
MarkupCraft zeigt beim Zoomen oder Verschieben eine schnelle, grobe Darstellung und zeichnet sie kurz nach dem Anhalten scharf neu.

**Alles ist bei einem großen Satz langsam**
Schließen Sie andere speicherintensive Reiter, öffnen Sie weniger Dateien gleichzeitig und vermeiden Sie das Zoomen auf das Maximum bei riesigen Blättern. Siehe [Mehrere Dateien gleichzeitig bearbeiten](topic:several-files#big-sets).

**Das Blatt ist dunkel mit hellen Linien**
Sie sind im Design {{ui:Modell}}. Wählen Sie {{ui:Papier}} in der Leiste oben für dunkle Linien auf Weiß. Ihre Markierungen und das gespeicherte PDF sind davon nicht betroffen.
