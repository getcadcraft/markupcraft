---
title: Stempel und Haftnotizen
summary: Versehen Sie ein Blatt mit Genehmigt, Überarbeiten und erneut einreichen oder eigenem Wortlaut als Stempel und hinterlassen Sie Haftnotizen, die sich als Pop-up-Kommentare öffnen.
keywords: Stempel, Bild, Abbildung, Bild einfügen, Screenshot, Zwischenablage, Logo, Fotostempel, Unterschrift, unterschreiben, genehmigt, genehmigt mit Anmerkungen, überarbeiten und erneut einreichen, abgelehnt, geprüft, ungültig, eigener Stempel, Haftnotiz, Notiz, Kommentar, Pop-up
from: 76026792
---

## Ein Blatt stempeln

1. Wählen Sie {{ui:Stempel}} ({{key:S}}).
2. Wählen Sie in {{ui:Eigenschaften}} rechts den Stempel unter {{ui:Stempel}}:
   - Genehmigt
   - Genehmigt mit Anmerkungen
   - Überarbeiten und erneut einreichen
   - Abgelehnt
   - Geprüft
   - Ungültig
   - Eigener Text… (geben Sie bis zu 60 Zeichen in das Feld ein, das erscheint, und drücken Sie {{key:Enter}} oder klicken Sie daneben)
3. Klicken Sie auf die Stelle des Blatts, an der der Stempel stehen soll. Oder ziehen Sie einen Rahmen, um seine Größe zu wählen.

Ergebnis: ein eingerahmter Stempel in Großbuchstaben mit einer zweiten Zeile „Von <Ihr Name>, <Datum>“. Ein angeklickter Stempel wird für den Bildschirm bei Ihrer Zoomstufe bemessen und auf dem gedruckten Blatt zwischen einem halben und 1 1/4 in hoch gehalten.

Der Stempel, den Sie gewählt haben, bleibt auch für den nächsten gewählt, selbst nachdem Sie MarkupCraft in diesem Browser erneut öffnen.

**Farben richten sich nach der Bedeutung:** Die Stempel Genehmigt sind grün, Überarbeiten und erneut einreichen orange, Abgelehnt und Ungültig rot, Geprüft blau und eigene Stempel violett. Wenn Sie in {{ui:Eigenschaften}} eine andere {{ui:Farbe}} wählen, bleibt diese erhalten.

### Einen Stempel später ändern

Wählen Sie ihn aus und wählen Sie in {{ui:Eigenschaften}} einen anderen Stempel. Hatte er noch seine automatische Farbe, wechselt sie mit der Bedeutung.

Name und Datum auf dem Stempel sind der Autor des Stempels und der Tag, an dem er entstanden ist. Sie ändern sich nicht, wenn Sie ihn bearbeiten, und der Autor eines Stempels lässt sich nicht ändern. Um im Namen einer anderen Person zu stempeln, muss diese Person ihren Namen selbst festlegen und selbst stempeln.

:::note
Das Datum auf einem Stempel ist das Datum in koordinierter Weltzeit (UTC). Spätabends in Amerika oder frühmorgens in Asien und Australien kann es im Vergleich zu Ihrer Uhr den nächsten oder den vorherigen Tag zeigen. Die Erstellungszeit in {{ui:Eigenschaften}} ist in Ihrer eigenen Zeitzone angegeben.
:::

### Oft verwendete Stempel

Der Werkzeugkasten enthält ein Stempelwerkzeug „Genehmigt mit Anmerkungen“, und Sie können jeden Stempel (Wortlaut und Farbe) als eigenes Werkzeug speichern. Siehe [Der Werkzeugkasten](topic:tool-chest).

Stempel mit ausfüllbaren Feldern (Eingangsdatum, Projektnummer) sind noch nicht umgesetzt.

## Ein Bild oder Ihre Unterschrift stempeln

Die Stempelliste in {{ui:Eigenschaften}} endet mit zwei weiteren Auswahlmöglichkeiten:

- {{ui:Bild…}} fragt nach einer PNG-, JPEG- oder SVG-Datei auf diesem Computer oder nach einer Seite einer PDF-Datei, etwa ein Firmensiegel oder ein Logo. Große Bilder werden auf 1600 Pixel an ihrer längeren Seite verkleinert; eine SVG-Datei oder eine PDF-Seite wird zu einem Bild dieser Größe.
- {{ui:Meine Unterschrift…}} öffnet ein Unterschriftsfeld: Unterschreiben Sie mit Maus, Stift oder Finger und wählen Sie {{ui:Diese Unterschrift verwenden}}. Mit {{ui:Löschen}} beginnen Sie von vorn. {{ui:Ein Bild einer Unterschrift verwenden…}} verwendet stattdessen einen Scan oder ein Foto Ihrer Unterschrift: MarkupCraft macht das weiße Papier durchsichtig und schneidet das Bild auf die Tinte zu (bei einer PNG-Datei wird vorher nachgefragt).

Klicken Sie danach auf das Blatt, um es zu platzieren (ein Bild 3 in breit, eine Unterschrift 2 in breit), oder ziehen Sie einen Rahmen, damit es hineinpasst; die Proportionen bleiben erhalten. Ändern Sie die Größe mit den Griffen wie bei jeder Markierung ({{key:Shift}} hält die Proportionen).

Das zuletzt verwendete Bild bleibt in diesem Browser gespeichert, damit es beim nächsten Mal bereitsteht; {{ui:Anderes Bild wählen…}} ersetzt es. Jede Unterschrift, die Sie zeichnen oder laden, wird unter {{ui:Ihre Unterschriften}} gespeichert (bis zu acht, die neueste zuerst): Klicken Sie eine an, um sie zu verwenden, oder auf × , um sie zu entfernen. Siehe [Was in diesem Browser gespeichert bleibt](topic:browser-storage).

Im gespeicherten PDF ist ein Bild ein Stempelkommentar, der das Bild zeigt, sodass jeder PDF-Betrachter es anzeigt und druckt. Eine hier gezeichnete Unterschrift ist ein Bild Ihrer Unterschrift und keine zertifizierte digitale Signatur.

## Ein Bild aus der Zwischenablage einfügen

Kopieren Sie ein Bild in einem anderen Programm oder machen Sie einen Screenshot in die Zwischenablage und drücken Sie dann {{key:Mod+V}} über dem Blatt. Es landet an der Zeigerposition, höchstens 3 in breit oder hoch bei gewahrten Proportionen, als Bildmarkierung, die Sie verschieben und in der Größe ändern können. Im gespeicherten PDF ist sie ein Stempelkommentar, der das Bild zeigt, wie die oben genannten Bilder.

{{ui:Mehr}} › {{ui:Bild einfügen}} in der Gruppe {{ui:Bearbeiten}} tut dasselbe über das Menü; der Browser fragt unter Umständen zuerst nach. Wenn die Zwischenablage kein Bild enthält, fügt {{key:Mod+V}} kopierte Markierungen wie bisher ein.

## Ein Bild aus einer Datei einfügen

Wählen Sie {{ui:Mehr}} › {{ui:Ein Bild aus einer Datei einfügen…}} in der Gruppe {{ui:Bearbeiten}} (oder {{ui:Hier ein Bild einfügen…}} im Kontextmenü) und wählen Sie eine PNG-, JPEG- oder SVG-Datei oder eine PDF-Datei (bei einer PDF-Datei mit mehreren Seiten wird gefragt, welche). Sie können auch eine PNG-, JPEG- oder SVG-Datei auf das Blatt ziehen: Sie landet dort, wo Sie sie ablegen. Das Bild ist eine Markierung, höchstens 3 in breit oder hoch: Verschieben und ändern Sie die Größe wie bei jeder anderen.

Um ein Bild Teil der Seite zu machen, aktivieren Sie in {{ui:Eigenschaften}} das Kontrollkästchen {{ui:Beim Speichern in die Seite reduzieren}}. Siehe [Eine reduzierte Kopie speichern](topic:flatten).

## Einen Stempel aus einer Auswahl erstellen

Wählen Sie Markierungen (oder Seiteninhalt mit dem Werkzeug {{ui:Inhalt}}) und wählen Sie {{ui:Auswahl als Stempel speichern…}} unter {{ui:Mehr}}, im Kontextmenü oder {{ui:Als Stempel speichern…}} in {{ui:Eigenschaften}}. Geben Sie ihm einen Namen. Er landet im Werkzeugkasten: Klicken Sie ihn dort an, dann auf ein beliebiges Blatt, um alles Ausgewählte zusammen zu platzieren, zentriert an der Klickstelle. Siehe [Der Werkzeugkasten](topic:tool-chest).

## Haftnotizen

1. Wählen Sie {{ui:Notiz}} ({{key:N}}).
2. Klicken Sie, wo die Notiz stehen soll. Ein kleines Notizsymbol erscheint mit einem Feld daneben.
3. Tippen Sie die Notiz. Klicken Sie außerhalb oder drücken Sie {{key:Mod+Enter}}, um sie zu behalten; {{key:Esc}} verwirft sie.

Anders als bei Text und Hinweisbeschriftungen bleibt eine Notiz erhalten, auch wenn Sie nichts eingeben, sodass Sie das Symbol jetzt setzen und später schreiben können.

- Der Text der Notiz steht im Feld {{ui:Notiz}} in {{ui:Eigenschaften}}. Doppelklicken Sie das Symbol (oder wählen Sie es aus und drücken Sie {{key:Enter}}), um ihn auf dem Blatt zu bearbeiten.
- Auf dem Blatt sehen Sie nur das Symbol. Andere PDF-Betrachter zeigen eine Standard-Haftnotiz, die sich beim Anklicken mit dem Text öffnet.
- Ändern Sie die Farbe des Symbols mit {{ui:Farbe}} in {{ui:Eigenschaften}}.

Für einen Austausch hin und her verwenden Sie stattdessen den Antwortverlauf an jeder Markierung: siehe [Status und Antworten](topic:statuses-and-replies).
