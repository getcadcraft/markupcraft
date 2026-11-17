---
title: Zwei Revisionen vergleichen
summary: Legen Sie eine alte und eine neue Ausgabe eines Blatts in zwei Farben übereinander, richten Sie sie über zwei Punkte aus und umwolken Sie, was sich geändert hat.
keywords: vergleichen, Überlagerung, Seiten überlagern, Revision, Diff, Unterschiede, Änderungen, alt neu, ausrichten, Rückprüfung, Ausgabe, Bulletin
from: 62f5d1c5
---

Vergleichen legt zwei Blätter übereinander. Linien nur auf dem alten Blatt erscheinen in Rot, Linien nur auf dem neuen Blatt in Blau, und Linien auf beiden in gedämpftem Grau. Die Farben sind in der Legende unter dem Blatt benannt: „Nur auf dem alten Blatt“, „Nur auf dem neuen Blatt“, „Auf beiden“.

## Zwei Blätter vergleichen

1. Öffnen Sie beide Ausgaben. Sie können Seiten desselben PDFs oder verschiedener PDFs sein; öffnen Sie sie zusammen als einen Satz (siehe [Mit mehreren Dateien gleichzeitig arbeiten](topic:several-files)).
2. Wählen Sie rechts die Registerkarte {{ui:Vergleichen}}.
3. Wählen Sie das {{ui:Altes Blatt}} und das {{ui:Neues Blatt}}. Das neue Blatt beginnt mit dem, auf dem Sie gerade sind. Wenn mehrere Dateien geöffnet sind, wird hinter dem Namen jedes Blatts sein Dateiname angezeigt.
4. Wählen Sie {{ui:Vergleichen}}.

Ergebnis: MarkupCraft zeigt das neue Blatt mit dem alten darin gemischt, die Legende erscheint, und die Registerkarte zeigt „Vergleich von <old> (alt) mit <new> (neu). Markierungen auf dem neuen Blatt bleiben bearbeitbar.“

## Zwischen alt und neu überblenden

Ziehen Sie den Schieber {{ui:Alt und neu}}. Ganz links zeigt nur das alte Blatt, ganz rechts nur das neue, in der Mitte beide. Hin- und Herschieben ist oft der schnellste Weg, eine kleine Änderung zu sehen.

## Die Blätter ausrichten

Wenn die beiden Ausgaben mit einem anderen Rand, einer anderen Größe oder Drehung gedruckt wurden, wirkt alles verändert. So beheben Sie es:

**Über zwei Punkte (am besten):**

1. Wählen Sie {{ui:An zwei Punkten ausrichten}}. Die Ansicht zeigt nur das alte Blatt.
2. Klicken Sie auf ein scharfes Merkmal, das Sie auf beiden Blättern finden, etwa einen Schnittpunkt eines Stützenrasters. Die Registerkarte zählt die Schritte („1 von 4“).
3. Klicken Sie auf einen zweiten Punkt, weit vom ersten entfernt, etwa die gegenüberliegende Rasterecke.
4. Die Ansicht wechselt zum neuen Blatt. Klicken Sie wieder auf das erste Merkmal.
5. Klicken Sie wieder auf das zweite Merkmal.

Ergebnis: „Ausgerichtet: altes Blatt auf 100.00 % skaliert, um 0.00° gedreht. Zum Feinabstimmen verschieben.“ Das alte Blatt wird verschoben, skaliert und gedreht, damit es passt. {{key:Esc}} bricht ab, solange Sie Punkte wählen. Zoomen Sie vor jedem Klick auf jedes Merkmal, um präzise zu passen.

**Durch Verschieben:** Verwenden Sie die vier Pfeiltasten unter „Ausrichten“, um das alte Blatt zu bewegen. Wählen Sie die Schrittweite (0.25, 1, 5 oder 20 pt; 72 pt ist ein Zoll auf dem Papier). Die Registerkarte zeigt, wie weit es verschoben wurde.

{{ui:Zurücksetzen}} entfernt die Ausrichtung und die Verschiebungen.

## Nur geänderte Linien

Wählen Sie unter den Ausrichtungsschaltflächen {{ui:Geänderte Linien}} statt {{ui:Bildüberlagerung}}. MarkupCraft vergleicht dann die eigenen Linien der beiden Blätter, nicht ihre Bilder: Das neue Blatt wird so gezeigt, wie es ist, mit den Linien, die nur auf dem alten Blatt liegen, in Rot, und den nur auf dem neuen Blatt in Blau. Eine Linie, die nur kürzer geworden ist, zeigt nur den fehlenden Teil. Richten Sie die Blätter zuerst aus (siehe oben): Der Vergleich nutzt die Ausrichtung, daher zeigt ein Blatt, das nur verschoben wurde, keine Änderungen. Die Statuszeile zeigt, wie viel sich geändert hat.

Das funktioniert für PDFs aus CAD-Plots, bei denen die Zeichnung aus Linien besteht. Gescannte Blätter haben keine Linien zum Vergleichen: Verwenden Sie für sie die Bildüberlagerung. In einer Schrift gesetzter Text (nicht als Striche gezeichnet) wird nicht verglichen.

## Die Änderungen markieren

Während des Vergleichs sind Sie auf dem neuen Blatt, und jedes Werkzeug funktioniert. Zeichnen Sie Wolken um die Änderungen, sobald Sie sie finden; sie gehören zum neuen Blatt und bleiben erhalten, wenn Sie den Vergleich beenden.

{{ui:Änderungen umwolken}} erledigt das für Sie: Es fasst die geänderten Linien zusammen, die nahe beieinander liegen, und zieht um jede Gruppe eine Revisionswolke auf dem neuen Blatt, mit „Geändert seit <old sheet>“ als Kommentar. Ein {{key:Mod+Z}} entfernt alle; löschen Sie die, die Sie nicht brauchen.

## Einen ganzen Satz vergleichen

Wenn die neue Ausgabe als eigenes PDF kommt, öffnen Sie beide PDFs und öffnen Sie {{ui:Zwei Sätze vergleichen}} in der Registerkarte {{ui:Vergleichen}}. Wählen Sie die alte und die neue Datei und wählen Sie {{ui:Sätze vergleichen}}. Blätter werden über ihre Nummer gepaart (wie bei [Satz austauschen](topic:slip-sheet-a-revised-set)), über ihre Linien verglichen und mit den meisten Änderungen zuerst aufgelistet. Wählen Sie ein Blatt in der Liste, um dieses Paar mit {{ui:Geänderte Linien}} zu vergleichen.

{{ui:Alle Änderungen umwolken}} zieht eine Wolke um jede Gruppe geänderter Linien auf jedem geänderten Blatt, in einem Schritt, den Sie rückgängig machen können. Der Satzvergleich richtet die Blätter nicht zuerst aus, daher zeigt ein Blatt, das auf der Seite verschoben wurde, als geändert: Vergleichen Sie dieses Paar für sich und verwenden Sie {{ui:An zwei Punkten ausrichten}}.

## Vergleich beenden

Wählen Sie {{ui:Vergleich beenden}} oder wechseln Sie zu einem anderen Blatt. Die Ausrichtung bleibt für dasselbe Blattpaar erhalten, bis Sie den Satz schließen.

## Gut zu wissen

- Vergleichen arbeitet auf dem, was gezeichnet ist, Pixel für Pixel. Es erkennt nicht, dass sich eine Linie bewegt hat; es zeigt die alte Position in einer Farbe und die neue in der anderen.
- Text, der umgebrochen wurde, ein geändertes Datum im Schriftfeld oder ein anderer Plotstil erscheinen ebenfalls als Änderungen.
- Ein gescanntes Blatt, mit einem geplotteten verglichen, ist verrauscht: Scannen verwischt und verschiebt Linien.
- Der Vergleich von Text in einer Schrift und eine Liste der Änderungen sind noch nicht umgesetzt.
