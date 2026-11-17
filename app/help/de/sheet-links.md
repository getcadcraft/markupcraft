---
title: Blattverknüpfungen
summary: Eine Markierung zu einem anderen Blatt springen lassen und jeden Blatthinweis wie 3/A-501 mit Stapelverknüpfungen in einem Durchgang mit seinem Blatt und seiner Ansicht verknüpfen.
keywords: Hyperlink, Verknüpfung, Verknüpfungen, springen, Blatthinweis, Detailhinweis, Schnitthinweis, 3/A-501, zu Blatt wechseln, zurück, automatische Verknüpfung, Stapelverknüpfung, Stapelverknüpfungen, Schriftfeld, Blattnummer, Blattname, Ansicht, Detail, umbenennen, neu nummerieren, Nachtrag, PDF-Verknüpfung
from: 86a17c37
---

Eine Blattverknüpfung führt Sie von einer Markierung zu einem anderen Blatt des Satzes: von einer Detailblase zum Detail, von einer Notiz zu dem Blatt, auf das sie verweist.

## Eine Markierung mit einem Blatt verknüpfen

1. Wählen Sie die Markierung aus.
2. Wählen Sie in {{ui:Eigenschaften}} unter {{ui:Verknüpfung mit Blatt}} das Blatt aus.

Oben rechts an der Markierung erscheint ein kleiner Pfeil. Um ihm zu folgen, halten Sie {{key:Mod}} und klicken Sie auf die Markierung, oder wählen Sie sie aus und wählen Sie {{ui:Zu … wechseln}} in {{ui:Eigenschaften}}. {{key:Alt+Left}} führt zurück zu dem Blatt, von dem Sie kamen.

Eine Verknüpfung nennt das Blatt über seine Nummer. Sie funktioniert daher auch nach dem erneuten Öffnen des Satzes oder nach dem Austauschen einer neuen Ausgabe: Sie öffnet das neueste Blatt mit dieser Nummer. Ist dieses Blatt nicht geöffnet, sagt die Statusleiste es.

## Alle Blatthinweise auf einmal verknüpfen

Wählen Sie {{ui:Seiten}} › {{ui:Stapelverknüpfungen…}} oder {{ui:Blattverweise verknüpfen…}} unter {{ui:Text suchen}} oben im Bereich {{ui:Blätter}}.

1. **Prüfen Sie die Blattnummern.** MarkupCraft listet jedes geöffnete Blatt mit der Nummer und dem Namen, die es aus dem Schriftfeld des Blatts (oder seiner Seitenbeschriftung) gelesen hat, und mit der Angabe, woher sie stammen. Korrigieren Sie falsche Nummern und tragen Sie eine Nummer dort ein, wo keine gefunden wurde (ein Schriftfeld, dessen Nummer als Linien gedruckt wurde, hat keinen lesbaren Text). Wählen Sie dann {{ui:Hinweisbeschriftungen suchen}}. Ihre Korrekturen sind ein Rückgängig-Schritt, und sie werden zu den Seitenbeschriftungen in der gespeicherten PDF.
2. **Prüfen Sie die Liste.** MarkupCraft liest den Text jedes Blatts nach Hinweisen wie „3/A-501“, „5 / A501“, „DETAIL 2 ON A-501“, einer Blase mit „3“ über „A-501“ oder einem einfachen „A-501“ in einer Notiz. Außerdem liest es die Ansichtstitel jedes Blatts (eine Detailnummer mit der Blattnummer darunter oder eine große Nummer mit Titel daneben). Die Liste hat drei Teile:
   - {{ui:Wird verknüpft}}: jeder Hinweis, das Blatt, zu dem er führt, und die Ansicht auf diesem Blatt. Entfernen Sie den Haken bei unerwünschten. Wurde die Ansicht nicht gefunden (ein Hinweis auf Ansicht 7 bei einem Blatt mit den Ansichten 1 bis 6), wählen Sie die Ansicht aus der Liste daneben oder lassen Sie {{ui:Ganzes Blatt}} stehen.
   - {{ui:Nicht verknüpft}}: Blattnummern, die kein geöffnetes Blatt hat, mit der Anzahl der Hinweise, die jede nennt. Wählen Sie das Blatt, das gemeint ist (zum Beispiel ein Blatt, das umnummeriert wurde). Jeder Hinweis auf diese Nummer verknüpft sich dann damit. Oder lassen Sie es unverknüpft.
   - Wie viele Hinweise bereits verknüpft sind und trotzdem an die richtige Stelle führen. Sie bleiben unverändert.
3. Wählen Sie {{ui:Verknüpfungen erstellen}}.

Jeder Hinweis erhält ein dünnes blaues Kästchen als Blattverknüpfung. {{key:Mod}}+Klick darauf öffnet das Blatt, auf die Ansicht gezoomt. Ein {{key:Mod+Z}} entfernt alle.

Codes, die nur wie Blattnummern aussehen, etwa R-19 oder W12X26, werden ausgelassen: Ein Hinweis muss wie die eigenen Blattnummern des Satzes geformt sein. Die eigene Nummer eines Blatts, in seinem Schriftfeld und seinen Ansichtstiteln, ist nie ein Hinweis. Gescannte Blätter haben keinen lesbaren Text: Verwenden Sie zuerst {{ui:Text lesen (OCR)…}} oder verknüpfen Sie deren Hinweise einzeln.

## Erneut ausführen, wenn sich der Satz ändert

Stapelverknüpfungen können so oft laufen, wie Sie möchten:

- **Ein Blatt wurde hinzugefügt**, etwa ein Nachtrag mit A-601: Öffnen Sie dessen Datei und führen Sie Stapelverknüpfungen erneut aus. Hinweise auf A-601, die vorher nicht verknüpft waren, werden jetzt verknüpft.
- **Ein Blatt wurde umnummeriert**: Korrigieren Sie seine Nummer in Schritt 1. Von Stapelverknüpfungen erstellte Verknüpfungen, die ihr Blatt nicht mehr finden, werden unter {{ui:Nicht verknüpft}} aufgeführt. Wählen Sie einmal das Blatt, und alle folgen ihm. Verknüpfungen, die zu einer anderen Ansicht gewechselt sind, werden aktualisiert.
- Von Hand in {{ui:Eigenschaften}} gesetzte Verknüpfungen werden nie geändert.

## In der gespeicherten PDF

Eine Verknüpfung zu einem Blatt in derselben PDF wird auch als PDF-Verknüpfung geschrieben, sodass andere Betrachter bei einem Klick ebenfalls dorthin springen. Eine Verknüpfung mit Ansicht öffnet diese Ansicht im anderen Betrachter (der PDF-Sprung „Rechteck einpassen“); eine ohne Ansicht öffnet das ganze Blatt. Verknüpfungen zu einem Blatt in einer anderen Datei des Satzes funktionieren nur in MarkupCraft.
