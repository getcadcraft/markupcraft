---
title: Einen Bereich der Seite oder eine Überlagerung kopieren
summary: Kopieren Sie einen Teil eines Blatts mit einem Rechteck, einer Ellipse oder einer Freihandform und fügen Sie ihn in ein anderes Blatt, CadCraft, BimCraft, DetailCraft oder ein beliebiges Programm in seiner Größe ein; kopieren Sie ihn als durchsichtige Überlagerung und richten Sie ein Bild über zwei Punkte aus.
keywords: Bereich kopieren, Bereich, zuschneiden, Ausschnitt, Schnappschuss, Region, Rechteck, Ellipse, Kreis, Freihand, Lasso, Bild, Grafik, png, Überlagerung, transparent, durchsichtig, Tönung, Deckkraft, einfügen, Originalgröße, Maßstab, ausrichten, zwei Punkte, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Wählen Sie {{ui:Mehr}} › {{ui:Bereich der Seite kopieren…}}. Eine Leiste öffnet sich über dem Blatt.

## Den Bereich wählen

Wählen Sie in der Leiste {{ui:Rechteck}}, {{ui:Ellipse}} oder {{ui:Freihand}} und ziehen Sie dann auf dem Blatt:

- **Rechteck:** Ziehen Sie einen Kasten um den Teil, den Sie kopieren möchten.
- **Ellipse:** Ziehen Sie einen Kasten; die Ellipse darin wird kopiert, und die Ecken außerhalb davon sind durchsichtig.
- **Freihand:** Zeichnen Sie um den Teil, den Sie kopieren möchten; die Form schließt sich selbst. Außerhalb davon ist alles durchsichtig.

Ziehen Sie erneut, um neu zu beginnen, oder drücken Sie {{key:Esc}}.

## Kopieren

- {{ui:Markierungen einschließen}} kopiert Ihre Markierungen mit der Seite; deaktivieren Sie es für die saubere Zeichnung.
- {{ui:Auflösung}}: {{ui:Wie auf dem Bildschirm}}, 72, 150 oder 300 dpi. Das Bild bleibt unter 3 MB; würde ein großer Bereich bei hoher Auflösung diese Grenze überschreiten, wird die Auflösung gesenkt, und die Statuszeile sagt, auf welche.
- {{ui:Kopieren}} (oder {{key:Mod+C}} oder {{key:Enter}}) legt den Bereich als PNG-Bild in die Zwischenablage, das sich in Word, E-Mails, andere PDF-Programme und Zeichenprogramme einfügen lässt.
- {{ui:Als PNG speichern}} lädt stattdessen das Bild herunter, für ein Programm, das die durchsichtigen Teile beim Einfügen verwirft.

## Als Überlagerung kopieren

{{ui:Als Überlagerung kopieren}} macht außerdem das weiße Papier durchsichtig, sodass nur die Linien übrig bleiben. {{ui:Farbe}} gibt jeder Linie eine Farbe (Rot, Blau, Grün, Orange oder Lila), damit sich die Überlagerung von der Zeichnung darunter abhebt; {{ui:Eigene Farben}} behält sie bei. {{ui:Stärke}} ist, wie stark sie beim Einfügen in unseren Apps beginnt (standardmäßig 50 %, sofern Sie nichts ändern).

## Einfügen

**In MarkupCraft** fügt {{key:Mod+V}} auf jedem Blatt den Bereich als Bildmarkierung am Zeiger ein. Er kommt in seiner Größe:

- auf Papier in derselben Größe, die er auf dem Blatt hatte, von dem er stammt;
- wenn beide Blätter einen Maßstab haben, in derselben Größe in der Zeichnung: Ein Bereich von einem Blatt im Maßstab 1:50 kommt auf einem Blatt im Maßstab 1:100 mit der halben Papiergröße.

Eine Überlagerung beginnt mit ihrer Stärke; ändern Sie sie mit {{ui:Deckkraft}} in {{ui:Eigenschaften}}. Verschieben, skalieren, sperren und löschen Sie sie wie jedes Bild, und setzen Sie den Haken bei {{ui:Beim Speichern in die Seite reduzieren}}, um sie in die Seite zu zeichnen.

**In CadCraft, BimCraft und DetailCraft** kennt die Kopie ebenfalls ihre Größe, sodass ein Einfügen in der realen Größe der Zeichnung erfolgt, wenn das Blatt einen Maßstab hatte, oder nach einer Größe fragt, wenn es keinen hatte. Lesen Sie die Hilfe jeder App zu Bildern.

## Ein Bild mit zwei Punkten ausrichten

Wählen Sie ein Bild oder eine Überlagerung aus und wählen Sie dann {{ui:Mehr}} › {{ui:Ein Bild mit zwei Punkten ausrichten}}:

1. Klicken Sie auf einen Punkt des Bildes.
2. Klicken Sie auf die Stelle, an die dieser Punkt soll.
3. Klicken Sie auf einen zweiten Punkt des Bildes, weit vom ersten entfernt.
4. Klicken Sie auf die Stelle, an die dieser Punkt soll.

Das Bild wird skaliert, verschoben und gedreht, sodass beide Punkte dort liegen, wo Sie geklickt haben. {{key:Esc}} bricht ab; {{key:Mod+Z}} macht es in einem Schritt rückgängig.

## Gut zu wissen

- Die Größe wandert mit der Kopie nur zwischen unseren Apps auf derselben Website und nur bei einer Kopie, die in den letzten Stunden erstellt wurde; ein anderes Programm erhält ein einfaches Bild.
- Wenn der Browser MarkupCraft nicht erlaubt, die Systemzwischenablage zu nutzen, sagt die Statuszeile es: Einfügen in unseren Apps funktioniert weiterhin, und {{ui:Als PNG speichern}} funktioniert für andere Programme.
- Das Ausrichten dreht das Bild, indem es seine Pixel neu zeichnet; ein gedrehtes Bild ist daher etwas weicher als das Original.
