---
title: Planmappe öffnen und zwischen Blättern wechseln
summary: Öffnen Sie eine oder mehrere PDFs oder beginnen Sie mit leeren Seiten, finden Sie Blätter über Nummer oder Name, zoomen und verschieben Sie, und benennen Sie ein Blatt um, wenn die Datei es falsch angibt.
keywords: öffnen, neu, leere Seite, leeres Blatt, Skizze, Raster, unbenannt, Planmappe, Satz, Blätter, Seiten, Miniaturansichten, Seitenbezeichnungen, Blattnummer, Schriftfeld, umbenennen, navigieren, Zoom, verschieben, einpassen, Blätter durchsuchen
from: 1e7f4d50
---

## Den Satz öffnen

1. Wählen Sie {{ui:Öffnen}} in der Symbolleiste oder drücken Sie {{key:Mod+O}}.
2. Wählen Sie im Dateidialog alle PDFs des Satzes aus ({{pick:mac=⌘ gedrückt halten und jede Datei anklicken|windows linux=Ctrl gedrückt halten und jede Datei anklicken}}, oder wählen Sie einen Bereich mit Shift) und bestätigen Sie dann.
   Oder ziehen Sie die Dateien aus {{pick:mac=Finder|windows=Datei-Explorer|linux=Ihrem Dateiverwaltungsprogramm}} in den Blattbereich. „PDFs zum Öffnen ablegen“ erscheint, während Sie ziehen.
3. Warten Sie, während die Statusleiste „Wird geöffnet: <file>…“ anzeigt. Bei großen Dateien wird mitgezählt: „(10 von 60 Blättern)“.

Das Ergebnis: Die Liste {{ui:Blätter}} zeigt jede Seite jeder Datei in der Reihenfolge, in der Sie sie geöffnet haben, und die Statusleiste zeigt etwa „3 Dateien geöffnet (42 Blätter im Satz).“ Hatten die Dateien bereits Kommentare, wird ergänzt, wie viele gelesen wurden.

Um später weitere Dateien zum Satz hinzuzufügen, öffnen Sie sie auf dieselbe Weise. Sie werden ans Ende der Liste angehängt.

## Mit leeren Seiten beginnen

Um ohne Zeichnung zu skizzieren oder Notizen zu machen, erstellen Sie leere Seiten, statt eine PDF zu öffnen:

1. Wählen Sie {{ui:Neu}} in der Symbolleiste oder {{ui:Mit einer leeren Seite beginnen}} auf dem Startbildschirm oder drücken Sie {{key:Mod+N}}, sofern Ihr Browser es zulässt (die Desktop-App und Studio immer).
2. Wählen Sie das {{ui:Papierformat}}: Letter, Tabloid oder ANSI B, ARCH D, ARCH E, A4, A3 oder A1, und {{ui:Hochformat}} oder {{ui:Querformat}}.
3. Wählen Sie ein {{ui:Raster}}: {{ui:Keines}}, {{ui:Punkte}} oder {{ui:Quadrate}}. Das Raster liegt alle 1/4 in bei Zoll-Papier mit einer stärkeren Linie je Zoll, und alle 5 mm bei metrischem Papier mit einer stärkeren Linie alle 10 mm. Es wird auf der Seite gedruckt.
4. Geben Sie ein, wie viele {{ui:Seiten}} Sie möchten, von 1 bis 20, und wählen Sie dann {{ui:Erstellen}}.

Das Ergebnis: Eine neue PDF namens „Untitled-1.pdf“ (dann „Untitled-2.pdf“ usw.) öffnet sich wie jede andere Datei, hier auf diesem Computer erstellt. Alle Werkzeuge funktionieren darauf, und {{ui:Speichern}} lädt „Untitled-1 (marked up).pdf“ herunter. MarkupCraft merkt sich Ihre Auswahl für das nächste Mal.

Die Seiten haben keinen Maßstab: Die Statusleiste zeigt „Nicht kalibriert“. Das Raster ist kein Maßstab. Zum Messen kalibrieren Sie das Blatt oder wählen zuerst einen Maßstab; siehe [Kalibrieren und messen](topic:calibrate-and-measure).

Um einem leeren Satz eine Seite hinzuzufügen, öffnen Sie eines seiner Blätter und wählen Sie {{ui:Leere Seite hinzufügen}} unter der Liste {{ui:Blätter}}. Die neue Seite hat dasselbe Papier und Raster und kommt ans Ende. Wie jede Seitenänderung lässt sie sich nicht rückgängig machen; siehe [Drucken und Seiten ändern](topic:pages-and-printing).

## So erhalten Blätter ihre Namen

MarkupCraft benennt jedes Blatt „<Blattnummer> — <Titel>“, zum Beispiel „A-101 — Grundriss“, aus dem ersten dieser Elemente, das es findet:

1. Ein Name, den Sie mit {{ui:Blatt umbenennen}} eingegeben haben (siehe unten).
2. Die eigenen Seitenbezeichnungen der PDF, wenn die Person, die die PDF erstellt hat, sie gesetzt hat (zum Beispiel „A-101“).
3. Das Schriftfeld: MarkupCraft liest den Text der Seite und sucht nach etwas, das wie eine Blattnummer aussieht (A-101, A1.01, M-201A, KA1-1). Dabei bevorzugt es die untere rechte Ecke, den rechten Rand und das untere Band und nimmt die größte Schrift in der Nähe als Titel.
4. Andernfalls der Dateiname und die Seite: „Plans — Seite 3“.

Um zu sehen, welche Quelle verwendet wurde, drücken Sie {{key:Esc}}, bis nichts ausgewählt ist und {{ui:Auswahl}} eingeschaltet ist, und sehen Sie dann in {{ui:Eigenschaften}} nach: „Gelesen aus“ zeigt „Die Seitenbezeichnung“, „Das Schriftfeld“, „Der Dateiname“ oder „Von Hand eingegeben“.

:::note
Gescannte Blätter und PDFs, deren Schrift als Linien exportiert wurde, haben keinen Text zum Lesen. Sie werden nach Datei und Seite benannt, bis Sie sie umbenennen. MarkupCraft kann Text aus Bildern noch nicht lesen.
:::

## Zwischen Blättern wechseln

- Klicken Sie ein Blatt in {{ui:Blätter}} an.
- Drücken Sie {{key:PageDown}} für das nächste Blatt und {{key:PageUp}} für das vorherige, oder verwenden Sie die Pfeile in der Leiste unter dem Blatt.
- Tippen Sie in {{ui:Blätter durchsuchen}}: einen Teil einer Nummer („A-2“), ein Wort des Titels („Dach“) oder einen Dateinamen. Die Liste wird beim Tippen eingegrenzt („4 von 42“). Drücken Sie {{key:Enter}}, um den ersten Treffer zu öffnen. Leeren Sie das Feld, um wieder alle Blätter zu sehen.

Jedes Blatt behält seinen eigenen Zoom und seine Position, bis Sie den Satz schließen.

## Zoomen und verschieben

:::mouse
- **Zoomen:** Drehen Sie das Rad über dem Blatt. Es zoomt um den Zeiger herum. Oder drücken Sie {{key:Plus}} und {{key:Minus}} (auch mit {{key:Mod}}) oder verwenden Sie die Zoom-Schaltflächen. Geben Sie einen genauen Prozentwert im Zoomfeld ein.
- **Einpassen:** {{ui:Seite einpassen}} ({{key:Mod+0}}) zeigt das ganze Blatt; {{ui:Breite einpassen}} ({{key:Mod+9}}) füllt die Breite.
- **Verschieben:** Ziehen Sie mit der mittleren Taste (Rad) oder mit der rechten Taste, oder halten Sie {{key:Space}} gedrückt und ziehen Sie, oder wählen Sie {{ui:Pan}} ({{key:H}}) und ziehen Sie. Ohne Auswahl bewegen auch die Pfeiltasten das Blatt.
:::

:::mac mouse
Auf einem Mac-Trackpad zoomt Scrollen mit zwei Fingern (es scrollt das Blatt nicht). Zum Verschieben halten Sie {{key:Space}} gedrückt und ziehen mit einem Finger, oder wechseln Sie mit {{key:H}} zu {{ui:Pan}}. Eine Pinch-Geste zoomt in Chrome, Edge und Firefox.
:::

:::touch
- **Zoomen und verschieben:** Legen Sie zwei Finger auf das Blatt. Spreizen oder zusammenführen Sie sie, um um den Punkt zwischen ihnen zu zoomen, und bewegen Sie sie gemeinsam, um zu verschieben. Beides geschieht gleichzeitig.
- **Mit einem Finger verschieben:** Wählen Sie zuerst {{ui:Pan}}. Mit jedem anderen Werkzeug zeichnet oder wählt ein Finger.
- {{ui:Seite einpassen}} und {{ui:Breite einpassen}} befinden sich in der Leiste unter dem Blatt.
:::

Sie können weit über das ganze Blatt hinaus herauszoomen und bis 6400% hineinzoomen. Das Blatt wird kurz nach dem Stoppen wieder scharf gezeichnet.

## Lesezeichen

{{ui:Lesezeichen}} oben im Bereich {{ui:Blätter}} zeigt die Lesezeichen (Gliederung) der PDF, zu der das geöffnete Blatt gehört. Wählen Sie eines, um zu dessen Seite zu gelangen. Der Stift benennt ein Lesezeichen um, das Kreuz entfernt es. {{ui:Aus Blättern erstellen}} erzeugt ein Lesezeichen pro Blatt, benannt wie in der Blattliste (Blattnummer und Titel), und {{ui:Für dieses Blatt hinzufügen}} fügt eines für das Blatt hinzu, auf dem Sie gerade sind. Änderungen sind Teil der nicht gespeicherten Arbeit der Datei: {{ui:Speichern}} schreibt sie in die Kopie, in der jeder PDF-Betrachter sie zeigt.

## Ansicht drehen

Die zwei Drehschaltflächen rechts in der Leiste unter dem Blatt drehen die Ansicht um eine Viertelumdrehung in eine der beiden Richtungen, für ein quer gezeichnetes Blatt. Nur die Ansicht dreht sich: Die PDF und ihre Markierungen bleiben, wie sie sind, und das nächste Blatt öffnet sich so, wie seine PDF ist. Jedes Blatt merkt sich seine eigene Drehung, solange der Satz geöffnet ist. Text, den Sie in einer gedrehten Ansicht hinzufügen, liest sich aufrecht, so wie Sie ihn sehen. Um die Seite selbst in der gespeicherten PDF zu drehen, verwenden Sie {{ui:Seiten}}, dann {{ui:Seite im Uhrzeigersinn drehen}}; siehe [Drucken und Seiten ändern](topic:pages-and-printing).

## Blatt umbenennen

Wenn der Name eines Blatts falsch ist oder fehlt:

1. Zeigen Sie das Blatt an.
2. Drücken Sie {{key:Esc}}, bis nichts ausgewählt ist und das Werkzeug {{ui:Auswahl}} eingeschaltet ist. {{ui:Eigenschaften}} zeigt nun das Blatt.
3. Wählen Sie {{ui:Blatt umbenennen}}.
4. Geben Sie die {{ui:Blattnummer}} und den {{ui:Titel}} ein und wählen Sie dann {{ui:Speichern}}.

Das Ergebnis: Die Blattliste, die Leiste unter dem Blatt und die Markierungsliste verwenden alle den neuen Namen, und „Gelesen aus“ zeigt „Von Hand eingegeben“. Das Umbenennen lässt sich mit {{key:Mod+Z}} rückgängig machen.

Um zu dem zurückzukehren, was die Datei angibt, öffnen Sie {{ui:Blatt umbenennen}} erneut, leeren Sie beide Felder und wählen Sie {{ui:Speichern}}.

Beim Speichern wird eine eingegebene Blattnummer zur Seitenbezeichnung in der PDF, sodass andere PDF-Betrachter „A-101“ auch in ihrem Seitenfeld zeigen. Wenn Sie einer Seite einer Datei eine Nummer geben, erhält jede Seite dieser Datei eine Bezeichnung in der Kopie (ihre eingegebene Nummer, sonst ihre alte Bezeichnung, sonst ihre Seitennummer). Ein eingegebener Titel bleibt für MarkupCraft erhalten, andere Betrachter zeigen ihn jedoch nicht.

## Die PDF zu TakeoffCraft bringen oder hierher holen

Wenn TakeoffCraft am selben Ort geöffnet ist (im Labor, unter Try oder in den Online-Apps), hat die Leiste unter dem Blatt {{ui:In TakeoffCraft öffnen}}. Damit öffnet sich die PDF des Blatts in TakeoffCraft in einem neuen Tab, so wie sie hier geöffnet wurde, damit Sie Mengen darauf messen können. Ihre Markierungen bleiben hier; speichern Sie sie wie gewohnt.

Die Schaltfläche {{ui:MarkupCraft}} in TakeoffCraft tut dasselbe in umgekehrter Richtung: Die PDF öffnet sich hier, als hätten Sie {{ui:Öffnen}} gewählt. Wenn der Browser den neuen Tab blockiert, erlauben Sie Pop-ups für diese Website und wählen Sie die Schaltfläche erneut.
