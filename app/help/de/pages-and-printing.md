---
title: Drucken und die Seiten einer PDF ändern
summary: Blätter mit ihren Markierungen drucken und Seiten einer geöffneten PDF drehen, verschieben, einfügen, löschen oder extrahieren.
keywords: drucken, Drucker, Papier, Seiten, Seite, drehen, wenden, neu anordnen, Seite verschieben, einfügen, Seite hinzufügen, leere Seite, Seite löschen, Seite entfernen, extrahieren, teilen, Seitenoperationen
from: 81832d9b
---

Das Menü {{ui:Seiten}} in der Gruppe {{ui:Datei}} arbeitet auf der PDF, zu der das geöffnete Blatt gehört. Ihre PDF auf diesem Computer wird nie verändert: Die Änderungen sind Teil der Kopie, die Sie speichern.

## Drucken

1. Drücken Sie {{key:Mod+P}} oder wählen Sie {{ui:Seiten}}, dann {{ui:Drucken…}}.
2. Wenn mehr als ein Blatt geöffnet ist, wählen Sie, was gedruckt wird: {{ui:Dieses Blatt}}, jede Seite dieser Datei, den ganzen Satz oder die Seiten, die Sie eingeben (etwa `1-3, 5`).
3. Wählen Sie {{ui:Drucken}}. Der Druckdialog Ihres Browsers öffnet sich: Wählen Sie dort den Drucker, das Papier und den Maßstab.

Die Markierungen werden so gedruckt, wie sie auf dem Blatt aussehen: Sie sind in die Seiten der Kopie gezeichnet, die an den Drucker geht. Kommentare anderer Programme werden so gedruckt, wie es ihre PDF vorgibt.

:::safari firefox
Wenn Ihr Browser nicht aus der Seite heraus drucken kann, öffnen sich die Blätter als PDF in einem neuen Tab. Drucken Sie von dort.
:::

## Eine Seite drehen

Wählen Sie {{ui:Seiten}}, dann {{ui:Seite im Uhrzeigersinn drehen}} oder {{ui:Seite gegen den Uhrzeigersinn drehen}}. Das geöffnete Blatt dreht sich um eine Viertelumdrehung. Seine Markierungen bleiben dort, wo sie auf der Zeichnung waren, und Text, den Sie geschrieben haben, dreht sich mit der Seite, sodass er aufrecht lesbar bleibt.

## Eine Seite verschieben

Wählen Sie {{ui:Seiten}}, dann {{ui:Seite nach vorn verschieben}} oder {{ui:Seite nach hinten verschieben}}. Das geöffnete Blatt tauscht den Platz mit seinem Nachbarn in der eigenen PDF. Seine Markierungen, sein Maßstab und seine Blattnummer wandern mit.

## Seiten einfügen

- {{ui:Seiten aus einem PDF einfügen…}} setzt jede Seite einer anderen PDF hinter das geöffnete Blatt.
- {{ui:Leere Seite einfügen}} fügt eine leere Seite gleicher Größe hinter dem geöffneten Blatt ein, für Skizzen und Notizen. In einem mit {{ui:Neu}} erstellten Satz hat sie auch dessen Raster.
- In einem mit {{ui:Neu}} erstellten Satz fügt {{ui:Leere Seite hinzufügen}} unter der Liste {{ui:Blätter}} eine weitere Seite wie die anderen am Ende hinzu. Siehe [Mit leeren Seiten beginnen](topic:open-a-plan-set#start-with-blank-pages).

Eingefügte Seiten erhalten ihre Seitennummer als Bezeichnung, bis Sie sie umbenennen. Siehe [Blatt umbenennen](topic:open-a-plan-set#rename-a-sheet).

## Seiten löschen

1. Wählen Sie {{ui:Seiten}}, dann {{ui:Seiten löschen…}}.
2. Geben Sie die Seitennummern dieser PDF ein, etwa `3` oder `2-4`. Die Seite des geöffneten Blatts ist bereits eingetragen.
3. Wählen Sie {{ui:Seiten löschen}}. Wenn diese Seiten Markierungen enthalten, sagt MarkupCraft, wie viele, und fragt erneut nach.

Eine PDF behält mindestens eine Seite. Um eine ganze Datei zu entfernen, schließen Sie den Satz und öffnen Sie die Dateien, die Sie noch brauchen.

## Seiten extrahieren

Wählen Sie {{ui:Seiten}}, dann {{ui:Seiten extrahieren…}}, und geben Sie die Seiten ein. Sie werden als neue PDF namens „<file> (pages 1-3).pdf“ heruntergeladen, mit ihren Markierungen als Kommentaren, die Sie weiter bearbeiten können. Die geöffnete Datei bleibt, wie sie ist.

## Gut zu wissen

- **Rückgängig stoppt bei einer Seitenänderung.** {{key:Mod+Z}} macht Markierungen rückgängig, die danach gezeichnet wurden, aber nicht die Seitenänderung selbst oder etwas davor. Schließen Sie ohne Speichern, um von Ihrer ursprünglichen PDF neu zu beginnen.
- Seitennummern zählen die Seiten einer PDF, nicht des ganzen Satzes. Das Verschieben einer Seite hält sie in ihrer eigenen Datei.
- Die geänderten Seiten sind nicht gespeicherte Arbeit: {{ui:Speichern}} lädt die neu geordnete Kopie herunter, und beim Verlassen wird nachgefragt.
