---
title: Ein Blatt markieren
summary: Revisionswolken, Hinweise, Textfelder, Pfeile, Formen, Stiftstriche und Hervorhebungen zeichnen und ihre Farbe und Linie vorher oder nachher festlegen.
keywords: Markierung, Rotstift, Wolke, Revisionswolke, Hinweis, Führungslinie, Textfeld, Pfeil, Linie, Rechteck, Ellipse, Kreis, Polylinie, Polygon, Stift, Freihand, Tinte, Textmarker, Farbe, Linienstärke
from: 9d6de0ac
---

Alle Werkzeuge funktionieren gleich: Wählen Sie es, zeichnen Sie auf dem Blatt, und die neue Markierung wird ausgewählt, damit Sie sie in {{ui:Properties}} sehen. Das Werkzeug bleibt für die nächste Markierung aktiv. Die Statusleiste zeigt immer, was das Werkzeug als Nächstes erwartet.

:::touch
Auf einem Touchscreen zeichnen Sie mit einem Finger. Ein zweiter Finger bricht ab, was der erste begonnen hat, und zoomt oder verschiebt stattdessen. So entsteht beim Zoomen nie versehentlich eine Markierung. Mehr dazu unter [Prüfen auf einem iPad oder Touchscreen](topic:review-on-a-tablet).
:::

## Revisionswolken

**Rahmenwolke:** Wählen Sie {{ui:Cloud}} ({{key:C}}) und ziehen Sie einen Rahmen. Halten Sie {{key:Shift}}, um ihn quadratisch zu machen.

**Freie Wolke** um eine unregelmäßige Form:

1. Wählen Sie {{ui:Free cloud}} ({{key:Shift+C}}).
2. Klicken Sie auf jede Ecke des Bereichs.
3. Beenden Sie mit einem Doppelklick, {{key:Enter}} oder einem Rechtsklick. Auf Touch: doppeltippen.

Während Sie Punkte setzen, entfernt {{key:Backspace}} den letzten Punkt und {{key:Esc}} bricht die ganze Form ab. Halten Sie {{key:Shift}}, damit die nächste Seite ein Vielfaches von 45° bleibt. Eine freie Wolke braucht mindestens drei Punkte.

Die Bögen wölben sich immer nach außen, und ihre Größe folgt der Linienstärke: Eine dickere Linie ergibt größere Bögen.

## Hinweise

Ein Hinweis ist ein Textfeld mit einer Führungslinie, die auf etwas zeigt.

1. Wählen Sie {{ui:Callout}} ({{key:K}}).
2. Drücken Sie auf den Punkt, den Sie kennzeichnen wollen, und ziehen Sie dorthin, wo der Text stehen soll. Lassen Sie los.
   Klicken Sie nur, ohne zu ziehen, wird das Feld oben rechts vom Punkt platziert.
3. Schreiben Sie den Text. Das Feld wächst nach unten, wenn die Zeilen umbrechen.
4. Klicken Sie irgendwo außerhalb des Felds oder drücken Sie {{key:Mod+Enter}}, um abzuschließen. {{key:Esc}} verwirft den Hinweis.

Schließen Sie ab, ohne etwas zu schreiben, wird kein Hinweis hinzugefügt („Nichts eingegeben, daher wurde kein Hinweis hinzugefügt.“).

Nach dem Zeichnen wählen Sie ihn aus, um das Feld zu verschieben, die Spitze der Führungslinie oder deren Knick zu ziehen (die beiden rautenförmigen Ziehpunkte) oder das Feld in der Größe zu ändern.

## Textfelder

1. Wählen Sie {{ui:Text}} ({{key:T}}).
2. Klicken Sie, wo der Text beginnt (Sie erhalten ein Feld mit sinnvoller Breite), oder ziehen Sie ein Feld in der gewünschten Größe.
3. Schreiben Sie, dann klicken Sie außerhalb oder drücken Sie {{key:Mod+Enter}}.

Text hat standardmäßig keinen Rahmen. Um einen Rahmen zu geben, erhöhen Sie {{ui:Line width}} in {{ui:Properties}}. Für einen Hintergrund setzen Sie den Haken bei {{ui:Fill}}.

Um den Text später zu ändern: Doppelklicken Sie bei eingeschaltetem {{ui:Select}} auf den Text, oder wählen Sie ihn aus und drücken Sie {{key:Enter}}, oder wählen Sie {{ui:Edit on the sheet}} in {{ui:Properties}}. Sie können ihn auch im Feld {{ui:Text}} in {{ui:Properties}} bearbeiten.

## Pfeile und Linien

1. Wählen Sie {{ui:Arrow}} ({{key:A}}) oder {{ui:Line}} ({{key:L}}).
2. Ziehen Sie vom Anfang zum Ende. Oder klicken Sie auf den Anfang, lassen Sie los und klicken Sie auf das Ende.
3. Halten Sie {{key:Shift}}, damit sie ein Vielfaches von 45° bleibt.

Die Pfeilspitze sitzt an dem Ende, an dem Sie abgeschlossen haben.

## Rechtecke, Ellipsen, Polylinien und Polygone

- {{ui:Rectangle}} ({{key:R}}) und {{ui:Ellipse}} ({{key:E}}): Ziehen Sie einen Rahmen. {{key:Shift}} macht ein Quadrat oder einen Kreis. Ein Klick ohne Ziehen zeichnet nichts, und die Statusleiste fordert zum Ziehen auf.
- {{ui:Polyline}} ({{key:Y}}) und {{ui:Polygon}} ({{key:G}}): Klicken Sie Punkte; beenden Sie mit einem Doppelklick, {{key:Enter}} oder einem Rechtsklick (auf Touch: doppeltippen). {{key:Backspace}} entfernt den letzten Punkt. Ein Polygon schließt sich selbst und braucht drei Punkte; eine Polylinie braucht zwei.

## Stift und Textmarker

- {{ui:Pen}} ({{key:P}}): Ziehen Sie für eine Freihandlinie. Der Strich wird beim Loslassen leicht geglättet.
- {{ui:Highlight}} ({{key:I}}): dasselbe, mit einem breiten, durchsichtigen gelben Strich, der die darunterliegende Zeichnung einfärbt, statt sie zu überdecken.
- Halten Sie {{key:Shift}} beim Zeichnen, um einen geraden Strich ab dem Startpunkt zu erhalten.

Der Textmarker ist ein Freihandstrich. Er rastet nicht am Text im PDF ein.

## Farbe, Linie und Füllung

Zwei Wege:

- **Vor dem Zeichnen:** Wählen Sie das Werkzeug. Ohne Auswahl zeigt {{ui:Properties}} die Einstellungen des Werkzeugs: {{ui:Color}}, {{ui:Line width}} (in pt), {{ui:Fill}} und {{ui:Fill opacity}} für geschlossene Formen, {{ui:Opacity}} und {{ui:Text size}} für Text. Jede neue Markierung dieser Art verwendet sie, und MarkupCraft merkt sie sich in diesem Browser.
- **Nach dem Zeichnen:** Wählen Sie eine oder mehrere Markierungen und ändern Sie dieselben Steuerelemente unter „Stil“. Bei mehreren Auswahlen gilt die Änderung für alle in einem Schritt.

Die Standardwerte: rote Markierungen, ein gelber Textmarker, blaue Messungen, orangefarbene Zählungen und Stempel in Farben nach ihrer Bedeutung.

Gespeicherte Looks, die Sie täglich nutzen, gehören in die Werkzeugkiste: siehe [Die Werkzeugkiste](topic:tool-chest).

## Betreff und Kommentar

Jede Markierung hat außerdem einen {{ui:Subject}} (eine kurze Bezeichnung wie „Cloud“ oder „RFI“, die in der Markierungsliste und in anderen PDF-Betrachtern angezeigt wird) und einen {{ui:Comment}} (längere Notizen). Füllen Sie sie in {{ui:Properties}} aus. Für ein Gespräch über eine Markierung verwenden Sie Antworten: siehe [Status und Antworten](topic:statuses-and-replies).

## Weiter

- [Auswählen, verschieben und Markierungen bearbeiten](topic:select-and-edit)
- [Stempel und Notizen](topic:stamps-and-notes)
- [Alle Markierungsarten](topic:markup-types)
