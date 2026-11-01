---
title: Ein Rundgang durch den Bildschirm
summary: Die Symbolleiste, die Blattliste, der Blattbereich, die fünf Bereiche rechts und die Statusleiste, mit ihren Namen auf dem Bildschirm.
keywords: Bildschirm, Layout, Symbolleiste, Bereiche, Seitenleiste, Miniaturansichten, Eigenschaften, Statusleiste, Oberfläche, Vollbild, Design, Dunkelmodus
from: 18d82de6
---

MarkupCraft füllt das Browserfenster. Von oben nach unten und von links nach rechts:

## Die Leiste ganz oben

Die schmale Leiste über allem gehört zur CadCraft-Familie, nicht zu MarkupCraft selbst. Sie enthält:

- den App-Namen und die laufende Version,
- {{ui:Über MarkupCraft}}, was die Seite der App auf der Website öffnet,
- {{ui:Hilfe}}, was diese Hilfe in einem Seitenbereich öffnet (oder drücken Sie {{key:F1}}),
- {{ui:Für Offline speichern}}, was MarkupCraft, seinen PDF-Leser und -Schreiber und diese Hilfe in diesem Browser ablegt, damit sie ohne Verbindung öffnen; danach steht dort „Offline bereit“ (siehe [Offline arbeiten](common:offline)),
- die Schaltfläche für den Bildschirmmodus ({{ui:Vollbild}}) und
- {{ui:Einstellungen}} (oder {{key:Mod+,}}), mit einer Registerkarte {{ui:MarkupCraft}} für die eigenen Einstellungen dieser App und {{ui:Allgemein}} für die, die alle CadCraft-Apps teilen (siehe [MarkupCraft-Einstellungen](topic:settings)), und
- {{ui:Papier}} und {{ui:Modell}}, das helle und das dunkle Design. In {{ui:Modell}} werden die Blätter hell auf dunkel gezeichnet; Ihre Markierungen behalten ihre eigenen Farben.

Die Schaltfläche für den Bildschirmmodus oder {{key:Ctrl+Shift+F}} schaltet durch drei Modi: normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Bei ausgeblendeten Leisten bewegen Sie den Zeiger an den oberen Bildschirmrand (oder tippen dorthin), und sie gleiten zurück. Dieses Kürzel nutzt auf jedem Computer die Taste Ctrl, auch auf dem Mac.

:::note
Im Vollbild lässt {{key:Esc}} auch den Browser den Vollbildmodus verlassen. Wollten Sie nur eine Zeichnung abbrechen, drücken Sie erneut {{key:Ctrl+Shift+F}}, um zum Vollbild zurückzukehren.
:::

## Die Symbolleiste

Unter der oberen Leiste sind die Werkzeuge gruppiert und beschriftet:

| Gruppe | Schaltflächen |
|---|---|
| Datei | {{ui:Öffnen}}, {{ui:Speichern}}, {{ui:Schließen}} |
| Auswahl | {{ui:Auswählen}}, {{ui:Pan}} |
| Zeichnen | {{ui:Stift}}, {{ui:Hervorhebung}}, {{ui:Linie}}, {{ui:Pfeil}}, {{ui:Rechteck}}, {{ui:Ellipse}}, {{ui:Polylinie}}, {{ui:Polygon}} |
| Revision | {{ui:Wolke}}, {{ui:Freie Wolke}} |
| Beschriften | {{ui:Hinweis}}, {{ui:Text}}, {{ui:Notiz}}, {{ui:Stempel}} |
| Messen | {{ui:Kalibrieren}}, {{ui:Länge}}, {{ui:Fläche}}, {{ui:Zählen}} |
| Bearbeiten | {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}} und {{ui:Mehr}}: {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Alles auswählen}}, {{ui:Auswahl aufheben}} |

Das Werkzeug, das Sie gerade nutzen, wirkt gedrückt. Halten Sie den Zeiger über eine Schaltfläche, um ihre Taste zu sehen (zum Beispiel „Rechteck (R)“); das Menü {{ui:Mehr}} listet die Taste jedes Befehls daneben auf. Schaltflächen, die gerade nichts tun können, sind abgeblendet: {{ui:Kopieren}}, bis Sie eine Markierung auswählen, {{ui:Einfügen}}, bis etwas kopiert ist. Ein kleiner Punkt hinter {{ui:Speichern}} bedeutet, dass einige Markierungen noch nicht gespeichert sind. Die vollständige Tastenliste steht unter [Tastatur und Maus](topic:keyboard).

Ein Werkzeug bleibt nach dem Zeichnen eingeschaltet, sodass Sie mehrere Wolken hintereinander zeichnen können. Drücken Sie {{key:Esc}} (zweimal, wenn die neue Markierung noch ausgewählt ist) oder {{key:V}}, um zu {{ui:Auswählen}} zurückzukehren.

## Die Blattliste (links)

{{ui:Blätter}} listet jede Seite jedes geöffneten PDFs auf. Jede Zeile zeigt ein kleines Bild des Blatts, seinen Namen, seine Blattnummer oder Datei und Seite und wie viele Markierungen es hat. Die Zahl hinter der Überschrift ist die Anzahl der Blätter.

- Klicken Sie auf eine Zeile, um dieses Blatt anzuzeigen.
- Geben Sie in {{ui:Blätter durchsuchen}} etwas ein, um nach Blattname, Blattnummer oder Dateiname zu filtern. Drücken Sie {{key:Enter}}, um den ersten Treffer zu öffnen.

Blattnamen stammen aus dem PDF, wenn es welche hat. Siehe [Einen Plansatz öffnen und zwischen Blättern wechseln](topic:open-a-plan-set).

## Der Blattbereich (Mitte)

Das Blatt, an dem Sie arbeiten. Solange nichts geöffnet ist, zeigt er „Einen Plansatz öffnen“ mit einer Schaltfläche {{ui:PDFs öffnen}}. Legen Sie PDFs irgendwo hier ab, um sie zu öffnen.

Unter dem Blatt hat eine schmale Leiste:

- die Pfeile für voriges und nächstes Blatt und „3 von 12: A-101 — Grundriss“ (halten Sie den Zeiger darüber, um Datei und Seite zu sehen),
- Verkleinern, das Zoomfeld (Prozentwert eingeben und {{key:Enter}} drücken; 100 % ist die tatsächliche Größe auf einem üblichen Bildschirm), Vergrößern,
- {{ui:Seite einpassen}} und {{ui:Breite einpassen}}.

Jedes Blatt merkt sich seinen eigenen Zoom, solange der Satz geöffnet ist.

Wenn Sie zwei Blätter vergleichen, erscheint hier eine Legende: „Nur auf dem alten Blatt“, „Nur auf dem neuen Blatt“ und „Auf beiden“. Siehe [Zwei Revisionen vergleichen](topic:compare-revisions).

## Die Bereiche (rechts)

Fünf Registerkarten:

| Registerkarte | Was sie zeigt |
|---|---|
| {{ui:Eigenschaften}} | Die ausgewählte Markierung: Autor, Datum, gemessene Werte, Status, Betreff, Text, Kommentar, Stil, ihre Antworten und ihr Mängelpunkt. Bei eingeschaltetem Zeichenwerkzeug und ohne Auswahl die Einstellungen, die neue Markierungen verwenden. Ohne Auswahl und bei eingeschaltetem {{ui:Auswählen}} das Blatt: Nummer, Titel, woher der Name gelesen wurde, Papierformat, Maßstab und {{ui:Blatt umbenennen}}. |
| {{ui:Markierungen}} | Jede Markierung im geöffneten Satz, mit Filtern und den Exporten {{ui:CSV}} und {{ui:BCF}}. Siehe [Die Markierungsliste](topic:markups-list-and-export). |
| {{ui:Mängelliste}} | Nummerierte Mängelpunkte mit Zuständigem, Fälligkeitsdatum und Status. Siehe [Eine Mängelliste erstellen](topic:punch-list). |
| {{ui:Werkzeuge}} | Die Werkzeugkiste: gespeicherte Werkzeuge mit Stil. Siehe [Die Werkzeugkiste](topic:tool-chest). |
| {{ui:Vergleichen}} | Zwei Blätter überlagern. Siehe [Zwei Revisionen vergleichen](topic:compare-revisions). |

## Die Statusleiste (unten)

- Links, wo der Zeiger auf dem Blatt steht, in Zoll (oder Millimetern, in den [Einstellungen](topic:settings)) auf dem Papier.
- In der Mitte Meldungen: was ein Werkzeug als Nächstes erwartet, was gerade gespeichert wurde, warum etwas abgelehnt wurde. **Lesen Sie sie, wenn etwas nicht geschieht.**
- Die Schaltfläche für den Maßstab des Blatts („Nicht kalibriert“ oder der Maßstab). Klicken Sie darauf, um den Maßstab festzulegen. Siehe [Ein Blatt kalibrieren und messen](topic:calibrate-and-measure).
- Ihr Name („Namen festlegen“, bis Sie einen angeben). Klicken Sie darauf, um ihn zu ändern.

## Auf einem kleinen Bildschirm

Unterhalb von etwa 1180 Pixeln Breite werden die Bereiche schmaler und die Blattbilder kleiner. Auf einem Bildschirm in Telefongröße werden die Teile gestapelt: Symbolleiste (seitlich scrollbar), das Blatt, die Statusleiste, die Bereiche, dann unten die Blattliste. Ein Tablet im Querformat behält das volle Layout.
