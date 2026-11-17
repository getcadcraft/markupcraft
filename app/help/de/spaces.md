---
title: Räume
summary: Benennen Sie die Räume oder Zonen eines Blatts und filtern, zählen und exportieren Sie Markierungen dann nach dem Raum, in dem sie liegen.
keywords: Raum, Räume, Zone, Gebäudeflügel, Arbeitsbereich, Ort, nach Raum filtern, nach Raum gruppieren, nach Raum exportieren
from: b199339c
---

Ein Raum ist eine benannte Zone auf einem Blatt: ein Zimmer, ein Gebäudeflügel, eine Bauphase. Jede Markierung darin gehört zu ihm, sodass Sie die Markierungen eines Raums auflisten, filtern und exportieren können.

## Einen Raum anlegen

1. Öffnen Sie {{ui:Räume}} oben im Bereich {{ui:Blätter}} und wählen Sie {{ui:Neuer Raum}}.
2. Klicken Sie die Ecken der Zone an und doppelklicken Sie oder drücken Sie {{key:Enter}}.
3. Geben Sie den Namen ein, etwa `Küche` oder `Geschoss 2 Ost`, und wählen Sie {{ui:Raum hinzufügen}}.

Der Raum erscheint als hellgrüne Zone mit gestrichelter Umrandung und seinem Namen. Die Statusleiste zeigt an, wie viele Markierungen darin liegen.

## Was in einem Raum liegt

Eine Markierung liegt in dem Raum, der die Mitte der Markierung enthält. Liegen Räume ineinander (ein Zimmer in einem Flügel), gilt der kleinere. Verschieben Sie eine Markierung, wechselt sie den Raum. Wählen Sie einen Raum aus, um seine Umrisse über die Griffe oder seinen Namen unter {{ui:Name}} in {{ui:Eigenschaften}} zu ändern.

- {{ui:Eigenschaften}} zeigt den Raum einer Markierung an.
- Die Liste {{ui:Markierungen}} filtert nach {{ui:Raum}}, einschließlich {{ui:Kein Raum}}.
- CSV- und XLSX-Exporte erhalten eine Spalte {{ui:Raum}}, sobald der Satz Räume hat.
- Der Bereich {{ui:Räume}} listet jeden Raum mit der Anzahl seiner Markierungen auf; wählen Sie einen Raum, um dorthin zu gelangen.

## Im gespeicherten PDF

Ein Raum ist ein Polygonkommentar mit seinem Namen als Text, mit gestrichelter Umrandung gezeichnet, damit auch andere Betrachter ihn anzeigen. In MarkupCraft öffnet er sich wieder als Raum.
