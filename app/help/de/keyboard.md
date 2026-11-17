---
title: Tastatur und Maus
summary: Jede Taste, jede Mausaktion und jede Touch-Geste, die MarkupCraft versteht, nach Gruppen geordnet, dazu die Tastenkürzel, die der Browser behält.
keywords: Tastatur, Tastenkürzel, Hotkeys, Tasten, Maus, Mausrad, Rechtsklick, mittlere Taste, Trackpad, Touch, Gesten, Pinch, Leertaste Pan
from: 7bf207ec
---

Tastenkürzel mit {{key:Mod}} funktionieren auf dem Mac mit ⌘ oder Control, unter Windows und Linux mit Ctrl. Werkzeugbuchstaben wirken nur, wenn Sie nicht in einem Feld schreiben; beim Schreiben sind Buchstaben nur Buchstaben. Siehe auch [Tasten, Mäuse und Trackpads](common:keys).

## Werkzeuge

| Taste | Werkzeug |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:H}} | {{ui:Pan}} |
| {{key:B}} | {{ui:Content}}: die eigenen Linien, Bilder und Texte der Seite (siehe [Den eigenen Inhalt der Seite ändern](topic:page-content)) |
| {{key:P}} | {{ui:Pen}} |
| {{key:I}} | {{ui:Highlight}} |
| {{key:L}} | {{ui:Line}} |
| {{key:A}} | {{ui:Arrow}} |
| {{key:R}} | {{ui:Rectangle}} |
| {{key:E}} | {{ui:Ellipse}} |
| {{key:Y}} | {{ui:Polyline}} |
| {{key:G}} | {{ui:Polygon}} |
| {{key:C}} | {{ui:Cloud}} (Rahmen ziehen) |
| {{key:Shift+C}} | {{ui:Free cloud}} |
| {{key:K}} | {{ui:Callout}} |
| {{key:T}} | {{ui:Text}} |
| {{key:N}} | {{ui:Note}} |
| {{key:S}} | {{ui:Stamp}} |
| {{key:M}} | {{ui:Length}} |
| {{key:Q}} | {{ui:Area}} |
| {{key:U}} | {{ui:Count}} |
| {{key:O}} | {{ui:Arc}} |
| {{key:X}} | {{ui:Angle}} |

{{ui:Calibrate}} hat keine Taste: Verwenden Sie die Schaltfläche in der Symbolleiste oder die Maßstabsschaltfläche in der Statusleiste. Werkzeugbuchstaben werden ignoriert, solange {{key:Alt}} gedrückt ist.

## Beim Zeichnen

| Taste oder Aktion | Wirkung |
|---|---|
| {{key:Shift}} beim Zeichnen | Linien, Pfeile, Längen und Polylinien-Segmente in 45°-Schritten; Rechtecke, Ellipsen und Kastenwolken quadratisch; Stift und Textmarker als ein gerader Strich |
| Doppelklick, {{key:Enter}} oder Rechtsklick | Polylinie, Polygon, freie Wolke oder Fläche abschließen |
| {{key:Backspace}} | Letzten Punkt einer Polylinie, eines Polygons, einer freien Wolke oder einer Fläche entfernen |
| {{key:Esc}} | Abbrechen, was Sie zeichnen; ist nichts in Arbeit, wird die Auswahl aufgehoben; ist nichts ausgewählt, geht es zurück zu {{ui:Select}} |
| {{key:Mod+Enter}} | Eingabe in einem Textfeld, Hinweis oder einer Notiz beenden (oder außerhalb davon klicken) |
| {{key:Esc}} beim Schreiben | Den gerade eingegebenen Text abbrechen |
| {{key:Shift}}-Klick bei {{ui:Count}} | Den nächstgelegenen Punkt der ausgewählten Zählgruppe entfernen |

## Auswählen und bearbeiten

| Taste oder Aktion | Wirkung |
|---|---|
| Klick | Eine Markierung auswählen |
| {{key:Shift}}-Klick | Eine Markierung zur Auswahl hinzufügen oder daraus entfernen |
| Auf leerem Blatt von links nach rechts ziehen | Auswählen, was vollständig im Fenster liegt |
| Auf leerem Blatt von rechts nach links ziehen | Auswählen, was das Fenster berührt |
| {{key:Mod+A}} | Jede Markierung auf diesem Blatt auswählen |
| Eine ausgewählte Markierung ziehen | Sie verschieben ({{key:Shift}}: in 45°-Schritten) |
| Einen Ziehpunkt ziehen | Größe oder Form ändern ({{key:Shift}}: Proportionen beibehalten oder 45°) |
| Pfeiltasten | Auswahl um einen Bildschirmpixel verschieben ({{key:Shift}}: zehn) |
| Doppelklick oder {{key:Enter}} | Text eines Textfelds, Hinweises oder einer Notiz bearbeiten; bei einem Stempel {{ui:Properties}} öffnen |
| {{key:Delete}} oder {{key:Backspace}} | Auswahl löschen |
| {{key:Esc}} | Nichts auswählen |
| {{key:Mod+Z}} | Rückgängig |
| {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} | Wiederholen |

## Ausschneiden, kopieren und einfügen

Dieselben Befehle finden Sie in der Gruppe {{ui:Edit}} der Symbolleiste ({{ui:Copy}}, {{ui:Paste}}) und im Menü {{ui:More}}, jeweils mit ihrer Taste. Jeder ist ein einzelner Schritt, den {{key:Mod+Z}} zurücknimmt. Siehe [Kopieren, Einfügen und Duplizieren](topic:select-and-edit#copy-paste-and-duplicate).

| Taste | Wirkung |
|---|---|
| {{key:Mod+X}} | Ausschneiden: Auswahl kopieren und löschen |
| {{key:Mod+C}} | Auswahl kopieren |
| {{key:Mod+V}} | Einfügen. Zeigt der Mauszeiger auf das Blatt, wird die Kopie dort zentriert eingefügt, sonst neben dem Original. Die Einstellungen können erzwingen, dass sie immer neben dem Original eingefügt wird. |
| {{key:Mod+Shift+V}} | An gleicher Position einfügen: dieselbe Stelle auf dem Blatt, auf diesem oder einem anderen Blatt |
| {{key:Mod+D}} | Auswahl direkt daneben duplizieren (die Zwischenablage bleibt unverändert) |

## Hilfe

| Taste | Wirkung |
|---|---|
| {{key:F1}} | Diese Hilfe öffnen oder schließen (als Bereich an der Seite; das Blatt bleibt bedienbar). Auch {{ui:Help}} in der Leiste oben. |
| {{key:Esc}} in der Hilfe | Hilfe schließen |

:::mac
Auf den meisten Mac-Tastaturen drücken Sie {{key:F1}} zusammen mit **fn** (oder der Globustaste) oder verwenden {{ui:Help}}. Siehe [Tasten, Mäuse und Trackpads](common:keys#function-keys-on-a-mac).
:::

## Dateien und Blätter

| Taste | Wirkung |
|---|---|
| {{key:Mod+N}} | Neue leere Seiten (wenn der Browser der Seite diese Taste überlässt; siehe [Mit leeren Seiten beginnen](topic:open-a-plan-set#start-with-blank-pages)) |
| {{key:Mod+O}} | PDFs öffnen |
| {{key:Mod+P}} | Drucken (siehe [Drucken und Seiten ändern](topic:pages-and-printing)) |
| {{key:Mod+F}} | Text in den Zeichnungen suchen (siehe [Text suchen](topic:find-text)) |
| {{key:Mod}}+Klick auf eine verknüpfte Markierung | Ihrem Blattlink folgen; {{key:Alt+Left}} geht zurück (siehe [Blattlinks](topic:sheet-links)) |
| {{key:Mod+S}} | Eine markierte Kopie speichern |
| {{key:PageDown}} / {{key:PageUp}} | Nächstes / vorheriges Blatt |
| {{key:Enter}} in {{ui:Search sheets}} | Das erste passende Blatt öffnen |
| {{key:Mod+Enter}} in {{ui:Write a reply}} | Die Antwort senden |

## Zoom und Pan

| Taste oder Aktion | Wirkung |
|---|---|
| Mausrad | Zoom rein oder raus um den Mauszeiger (das Rad scrollt nie) |
| {{key:Ctrl}} + Rad | Schneller zoomen |
| {{key:Plus}} oder {{key:Minus}} (auch mit {{key:Mod}}) | Zoom rein oder raus um die Mitte; {{key:=}} wirkt wie Plus |
| {{key:Mod+0}} | {{ui:Fit page}} |
| {{key:Mod+9}} | {{ui:Fit width}} |
| Mit der mittleren Maustaste ziehen | Pan |
| Mit der rechten Maustaste ziehen | Pan (solange Sie nicht mitten in einer Polylinie sind) |
| {{key:Space}} halten und ziehen | Pan |
| Pfeiltasten ohne Auswahl | Pan |
| {{key:Ctrl+Shift+F}} | Bildschirmmodus: normal, Vollbild, Vollbild mit ausgeblendeten Leisten (Control-Taste auf jedem Computer) |

:::mac
**Auf dem Trackpad:** Scrollen mit zwei Fingern zoomt. Eine Pinch-Geste zoomt außerdem in Chrome, Edge und Firefox. Pan mit gehaltener {{key:Space}} beim Ziehen oder mit dem Werkzeug {{ui:Pan}}. Ein Klick mit zwei Fingern ist ein Rechtsklick und beendet eine Polylinie. Ein Control-Klick kann hier wie ein einfacher Klick statt wie ein Rechtsklick wirken; nutzen Sie deshalb einen Klick mit zwei Fingern.
:::

:::touch
## Touch

| Geste | Wirkung |
|---|---|
| Ein Finger | Mit dem aktuellen Werkzeug zeichnen oder auswählen |
| Zwei Finger | Pinch zoomt um ihre Mitte, Bewegen führt Pan aus |
| Zweiter Finger während eines Strichs | Bricht den Strich ab und zoomt stattdessen |
| Doppeltippen | Polylinie, Polygon, freie Wolke oder Fläche abschließen |

Zählpunkte, Notizen, Polylinienpunkte und der zweite Punkt eines Zwei-Punkt-Werkzeugs werden gesetzt, wenn der Finger angehoben wird. Siehe [Prüfen auf einem iPad oder Touchscreen](topic:review-on-a-tablet).
:::

## Tastenkürzel, die der Browser behält

- {{key:Mod+W}}, {{key:Mod+T}}, {{key:Mod+N}} und {{key:Mod+Q}} gehören dem Browser. Das Schließen des Tabs oder Fensters mit nicht gespeicherten Markierungen verwirft sie, nach der Abfrage „Seite verlassen?“ des Browsers auf dem Computer.
- Die meisten Browser nutzen {{key:Mod+N}} für ein neues Fenster. Verwenden Sie deshalb in einem Browser-Tab {{ui:New}} in der Symbolleiste; die Desktop-App und Studio leiten die Taste an MarkupCraft weiter.
- MarkupCraft übernimmt {{key:Mod+O}}, {{key:Mod+S}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+0}}, {{key:Mod+Plus}} und {{key:Mod+Minus}} vom Browser, solange die App die Tastatur hat, und {{key:Mod+C}} sowie {{key:Mod+X}}, solange Markierungen ausgewählt sind. {{key:Mod+,}} öffnet {{ui:Settings}}. Um stattdessen die ganze Browserseite zu zoomen, verwenden Sie das Menü des Browsers.
- {{key:Mod+9}} springt in manchen Browsern zum letzten Browser-Tab, bevor MarkupCraft die Taste erhält. Ist das der Fall, verwenden Sie {{ui:Fit width}} unter dem Blatt.
- {{key:Esc}} beendet im Vollbild auch das Vollbild.

## Wenn eine Taste nichts tut

- **Sie schreiben in einem Feld.** Klicken Sie zuerst auf das Blatt. (Ein Klick mit einem Zeichenwerkzeug zeichnet; drücken Sie danach {{key:Esc}} oder verwenden Sie {{key:Mod+Z}}.)
- **Ein Dialog ist offen.** Tasten gehen an den Dialog, bis er geschlossen ist.
- **Sie haben gerade auf eine Schaltfläche der Symbolleiste geklickt**, und die Pfeiltasten oder {{key:Space}} wirken stattdessen auf diese Schaltfläche. Bewegen Sie den Mauszeiger über das Blatt und verwenden Sie das Rad oder die mittlere Taste, oder drücken Sie einen Werkzeugbuchstaben, statt Schaltflächen zu klicken.

## Wo Verschieben zu finden ist

Es gibt keinen Befehl Verschieben: Wählen Sie eine Markierung aus und ziehen Sie sie ({{key:Shift}} hält 45°-Schritte ein). Ein Pin wird mit {{ui:Move pin}} verschoben, eine Seite mit {{ui:Move page earlier}} oder {{ui:Move page later}}.
