---
title: Änderungen zwischen Revisionen auflisten
summary: Zwei Plansätze vergleichen und pro Blatt eine einfache Liste erhalten, wo sich Zeichnung und Text geändert haben, zum Lesen, Kopieren oder zur Weitergabe an Ihren Assistenten.
keywords: was sich geändert hat, Änderungen, Revisionsliste, Vergleichsliste, einfache Liste, beschreiben, Assistent, Delta, Revisionszusammenfassung
from: bab93d2e
---

Die Vergleichswerkzeuge zeigen die Änderungen auf dem Blatt. Dieses Werkzeug hält sie schriftlich fest.

1. Öffnen Sie beide Revisionen (siehe [Plansatz öffnen](topic:open-a-plan-set)).
2. Öffnen Sie die Registerkarte {{ui:Vergleichen}}, dann {{ui:Ganzen Satz vergleichen}}.
3. Wählen Sie die frühere und die spätere Datei und wählen Sie {{ui:Änderungen auflisten}}.

Die Liste beginnt mit einer Anzahl („2 von 14 zugeordneten Blättern geändert; 1 neu; 1 entfernt“) und behandelt dann jedes geänderte Blatt, die größte Änderung zuerst: wo auf dem Blatt (oben links, Mitte …), wie groß sie ist, ob Linien hinzugefügt, entfernt oder beides geändert wurden, wie viele Markierungen dort liegen und welche Wörter erschienen oder verschwunden sind. Auf einem kalibrierten Blatt steht die Größe zusätzlich in echten Einheiten sowie in Zoll auf dem Papier.

Die Liste sagt, was auf der Seite steht; sie sagt nicht, was es bedeutet. Eine verschobene gezeichnete Linie kann eine Wand oder eine Führungslinie sein. Ihr verbundener Assistent kann die Liste mit dem Werkzeug `revisions_changes` lesen und in Worte fassen; den Rest prüfen Sie am Blatt. {{ui:Liste kopieren}} legt sie in die Zwischenablage, und {{ui:CSV}} schreibt eine Zeile pro Änderung.

Blätter werden über die Blattnummer zugeordnet, wie in [Einen überarbeiteten Satz austauschen](topic:slip-sheet-a-revised-set). Änderungen von weniger als einigen Punkten werden ignoriert, und Text, der Teil eines Bildes (eines Scans) ist, hat keine Wörter zum Vergleichen.
