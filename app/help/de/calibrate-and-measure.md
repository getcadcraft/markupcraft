---
title: Ein Blatt kalibrieren und messen
summary: Legen Sie den Maßstab jedes Blatts über eine Voreinstellung oder ein bekanntes Maß fest, und messen Sie dann Längen, Flächen mit Umfängen und Anzahlen.
keywords: kalibrieren, Maßstab, Maßstab festlegen, messen, Länge, Abstand, Bemaßung, Fläche, Quadratfuß, Umfang, zählen, Mengenermittlung, Lineal, Arithmetik, Berechnung, plus, Bruch
from: 49a25c6d
---

Längen und Flächen brauchen den Maßstab des Blatts. MarkupCraft speichert einen Maßstab **je Blatt**: Kalibrieren Sie jedes Blatt, das Sie messen. Zählungen brauchen keinen Maßstab.

Die Statusleiste zeigt den Maßstab des aktuellen Blatts oder „Nicht kalibriert“.

## Einen Maßstab aus der Liste wählen

Verwenden Sie dies, wenn das PDF in voller Größe vorliegt (ein 24 × 36-Blatt, das in 24 × 36 druckt) und die Zeichnung ihren Maßstab angibt.

1. Klicken Sie in der Statusleiste auf die Maßstabsschaltfläche („Nicht kalibriert“). Das Feld „Blattmaßstab“ öffnet sich.
2. Wählen Sie unter {{ui:Maßstab}} den Maßstab: architektonisch (1/32" = 1'-0" bis 3" = 1'-0"), technisch (1" = 10' bis 1" = 100') oder metrisch (1:1 bis 1:1000).
3. Wählen Sie {{ui:Maßstab festlegen}}.

Ergebnis: Die Statusleiste zeigt den Maßstab, zum Beispiel `1/4" = 1'-0"`. Architektonische Maßstäbe zeigen Längen in Fuß und Zoll, technische in Dezimalfuß, metrische bis 1:50 in Millimetern und ab 1:100 in Metern.

:::warning
Eine Voreinstellung stimmt nur, wenn das PDF nicht verkleinert wurde. Ein halb großer Satz oder ein Blatt, das beim Erstellen „an Seite anpassen“ war, wird mit einer Voreinstellung falsch gemessen. Kalibrieren Sie stattdessen anhand eines bekannten Maßes, und prüfen Sie in jedem Fall ein Maß.
:::

## Anhand eines bekannten Maßes kalibrieren

Verwenden Sie dies bei halb großen Sätzen, gescannten Blättern, Details in ungewöhnlichen Maßstäben oder um eine Voreinstellung zu prüfen.

1. Suchen Sie ein langes Maß, dem Sie vertrauen, oder einen grafischen Maßstab.
2. Wählen Sie {{ui:Kalibrieren}} in der Gruppe {{ui:Messen}} (oder wählen Sie {{ui:Zwei Punkte wählen}} im Feld „Blattmaßstab“).
3. Klicken Sie auf ein Ende des Maßes, dann auf das andere. (Oder ziehen Sie von einem Ende zum anderen.) Zoomen Sie vorher für Genauigkeit hinein; {{key:Shift}} hält die Linie in 45°-Schritten.
4. Das Feld zeigt, wie weit die Punkte auf dem Papier auseinanderliegen, und fragt „Wie weit liegen sie wirklich auseinander?“. Geben Sie den {{ui:Tatsächlichen Abstand}} ein, zum Beispiel `24'-0"`, `12' 6 1/2"`, `7.2 m` oder `900 mm`.
5. Wählen Sie unter {{ui:Längen anzeigen in}}, wie Längen dargestellt werden: {{ui:Fuß und Zoll}}, {{ui:Dezimale Fuß}}, {{ui:Zoll}}, {{ui:Meter}} oder {{ui:Millimeter}}.
6. Wählen Sie {{ui:Maßstab festlegen}}.

Ergebnis: Die Statusleiste zeigt „Kalibriert: 24'-0" über 1.00 in“ (die tatsächliche Länge und die Länge auf dem Papier), und das Werkzeug, mit dem Sie messen wollten, wird wieder aktiv. Jede Art, eine Länge einzugeben, steht unter [Einheiten und Längen](topic:units-and-scales).

Die tatsächliche Strecke kann auch eine kleine Rechnung sein: `12'6"+3/4"`, `(24'-0")/3` oder `2*450mm`. Verwenden Sie `+ - * /` und Klammern; eine Zahl ohne Einheit zählt in der Einheit unter {{ui:Längen anzeigen in}} (Fuß bei {{ui:Fuß und Zoll}}). {{ui:Maßstab festlegen}} verwendet das Ergebnis.

Wenn MarkupCraft nicht lesen kann, was Sie eingegeben haben, sagt das Feld es: „Das ist keine Länge, die MarkupCraft versteht. Versuchen Sie 24'-0", 12' 6 1/2", 7.2 m oder 900 mm.“ Eine Rechnung, die es nicht lösen kann, nennt Grund und Stelle, zum Beispiel „Eine Klammer ist nicht geschlossen (Zeichen 5).“

## Eine Länge messen

1. Wählen Sie {{ui:Länge}} ({{key:M}}).
2. Klicken Sie auf den Anfang, dann auf das Ende. Oder ziehen Sie vom Anfang zum Ende. {{key:Shift}} hält sie in 45°-Schritten.

Ergebnis: Eine Bemaßungslinie mit Strichen und der darauf geschriebenen Länge. Die Statusleiste wiederholt sie („Länge: 12'-6 1/2" (1/4" = 1'-0")."), und {{ui:Eigenschaften}} zeigt sie unter {{ui:Länge}}. Fuß und Zoll werden auf das nächste 1/16" gerundet.

Wenn das Blatt noch keinen Maßstab hat, schaltet die Wahl von {{ui:Länge}} auf {{ui:Kalibrieren}} um, und die Statusleiste erklärt: „Kalibrieren Sie dieses Blatt zuerst: Wählen Sie zwei Punkte mit bekanntem Abstand oder legen Sie seinen Maßstab fest. Messen Sie dann.“ Nachdem Sie den Maßstab festgelegt haben, kehrt {{ui:Länge}} zurück.

## Maßstäblich skizzieren

Auf einem kalibrierten Blatt können Sie echte Längen eintippen, während Sie eine {{ui:Linie}}, einen {{ui:Pfeil}}, eine {{ui:Länge}}, eine {{ui:Polylinie}}, ein {{ui:Polygon}}, eine {{ui:Freie Wolke}}, eine {{ui:Fläche}} oder einen Raum zeichnen:

1. Klicken Sie auf den ersten Punkt.
2. Zeigen Sie in die Richtung des nächsten Abschnitts und tippen Sie seine Länge ein, etwa `16` (in der Einheit des Blatts), `12'6"` oder `3.5 m`. Ein Feld öffnet sich beim Zeiger, während Sie tippen.
3. Drücken Sie {{key:Enter}}. Der Punkt landet in dieser Entfernung in Zeigerrichtung.

Um die Richtung genau festzulegen, fügen Sie `<` und einen Winkel in Grad hinzu: `8 < 90` geht 8 Fuß gerade nach oben, `4<0` nach rechts, `10 < 225` nach unten und links, so wie das Blatt gesehen wird (auch gedrehte Seiten). Tippen Sie für die nächsten Ecken weiter Längen ein und schließen Sie die Form wie üblich ab. {{key:Esc}} schließt das Feld, ohne einen Punkt zu setzen.

## Einen Winkel messen

1. Wählen Sie {{ui:Winkel}} ({{key:X}}).
2. Klicken Sie auf das Ende des einen Schenkels, dann auf die Ecke, dann auf das Ende des anderen Schenkels.

Ergebnis: Die beiden Schenkel, ein kleiner Bogen an der Ecke und der Winkel in Grad, auf eine Zehntel genau (0° bis 180°). Ein Winkel braucht keinen Maßstab. {{ui:Eigenschaften}} zeigt ihn unter {{ui:Winkel}}, und die Liste, CSV und BCF enthalten ihn.

Ein {{ui:Bogen}} ({{key:O}}) auf einem kalibrierten Blatt zeigt in {{ui:Eigenschaften}} außerdem seine Länge entlang der Kurve.

## Eine Fläche und ihren Umfang messen

1. Wählen Sie {{ui:Fläche}} ({{key:Q}}).
2. Klicken Sie auf jede Ecke des Raums oder Bereichs.
3. Beenden Sie mit einem Doppelklick, {{key:Enter}} oder einem Rechtsklick (Doppeltippen bei Touch). {{key:Backspace}} entfernt die letzte Ecke.

Ergebnis: Eine schattierte Kontur mit der Fläche und „P“ mit dem Umfang in der Mitte, zum Beispiel „128.00 sq ft“ und „P 48'-0"“. Maßstäbe in Fuß ergeben Quadratfuß, in Zoll Quadratzoll, in Metern Quadratmeter, in Millimetern Quadratmillimeter. Eine Fläche braucht mindestens drei Ecken.

### Aussparungen

Um eine Stütze, einen Schacht oder einen Innenhof auszulassen, wählen Sie die Fläche aus und wählen Sie in {{ui:Eigenschaften}} {{ui:Aussparung hinzufügen}}. Klicken Sie auf die Ecken der Aussparung innerhalb der Fläche und schließen Sie ab wie bei einer Fläche. Die Aussparung bleibt offen (nicht schattiert), ihre Fläche wird abgezogen, und ihre Kanten werden zum Umfang addiert: Ein Raum von 16' × 8' mit einer Aussparung von 4' × 4' zeigt „112.00 sq ft“ und „P 64'-0"“. Fügen Sie so viele hinzu, wie Sie brauchen; sie dürfen sich nicht überlappen oder die Umrisslinie der Fläche kreuzen. {{ui:Aussparungen entfernen}} entfernt alle, und {{key:Mod+Z}} macht eine rückgängig.

## Dinge zählen

1. Wählen Sie {{ui:Zählen}} ({{key:U}}).
2. Geben Sie in {{ui:Eigenschaften}} einen {{ui:Gruppenname}} ein, zum Beispiel „Bodenabläufe“. (Er bleibt für das nächste Mal erhalten.)
3. Klicken Sie auf jedes Element auf dem Blatt.

Ergebnis: Jeder Klick fügt einen nummerierten Punkt hinzu, der erste Punkt trägt eine Kennzeichnung wie „Bodenabläufe: 7“, und die Statusleiste behält die laufende Summe.

- **Eine andere Gruppe beginnen:** Drücken Sie einmal {{key:Esc}} (das hebt die Auswahl auf), ändern Sie den {{ui:Gruppenname}} und klicken Sie erneut.
- **Zu einer bestehenden Gruppe hinzufügen:** Wählen Sie zuerst die Gruppe aus, dann {{ui:Zählen}} und klicken Sie.
- **Eine Markierung entfernen:** Halten Sie bei ausgewählter Gruppe {{key:Shift}} gedrückt und klicken Sie auf den Punkt. Das Entfernen des letzten Punktes entfernt die Gruppe. Auf einem Touchscreen ohne Tastatur verwenden Sie stattdessen {{key:Mod+Z}} oder {{ui:Rückgängig}}.
- **Eine Gruppe umbenennen:** Wählen Sie sie aus und bearbeiten Sie {{ui:Gruppenname}} in {{ui:Eigenschaften}}.

Eine Zählgruppe gehört zu einem Blatt. Zählungen auf mehreren Blättern erscheinen in der Markierungsliste als getrennte Gruppen.

## Einen Maßstab ändern oder entfernen

Klicken Sie in der Statusleiste auf die Maßstabsschaltfläche. Das Feld zeigt den aktuellen Maßstab; wählen Sie einen anderen, wählen Sie {{ui:Zwei Punkte wählen}}, oder wählen Sie {{ui:Maßstab entfernen}}.

Bereits gezeichnete Längen und Flächen werden sofort mit dem neuen Maßstab **neu gemessen**. Rückgängig stellt den alten Maßstab wieder her.

## Wohin die Zahlen gehen

- {{ui:Eigenschaften}} zeigt die Werte der ausgewählten Messung.
- Die Registerkarte {{ui:Markierungen}} listet jeden Wert auf, und ihre CSV hat eine Spalte „Messung“. Siehe [Die Markierungsliste](topic:markups-list-and-export).
- Das gespeicherte PDF behält den Maßstab auf der Seite und schreibt Längen und Flächen als Messkommentare, damit andere PDF-Programme, die Messungen verstehen, sie anzeigen können. Siehe [Was im PDF gespeichert wird](topic:what-the-pdf-keeps).

Für eine vollständige Mengenermittlung mit Positionen, Baugruppen und Preisen verwenden Sie TakeoffCraft: MarkupCraft misst zur Prüfung, nicht für die Kalkulation.
