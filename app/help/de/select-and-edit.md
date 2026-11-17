---
title: Markierungen auswählen, verschieben und ändern
summary: Markierungen anklicken oder mit einem Fenster auswählen, verschieben, Größe ändern, feinverschieben, ausschneiden, kopieren, einfügen, an gleicher Position einfügen, duplizieren, löschen und rückgängig machen.
keywords: auswählen, Auswahl, Alles auswählen, Auswahl aufheben, Fenster, Kreuzen, verschieben, Größe ändern, Griffe, Anfasser, feinverschieben, ausschneiden, kopieren, einfügen, an gleicher Position einfügen, duplizieren, Zwischenablage, andere Registerkarte, löschen, Rückgängig, Wiederholen, bearbeiten
from: 62c7def3
---

Wählen Sie zuerst {{ui:Auswahl}} ({{key:V}}). Auch {{key:Esc}} führt dorthin: Der erste Druck hebt die Auswahl auf, der nächste schaltet zurück zu {{ui:Auswahl}}.

## Markierungen auswählen

:::mouse
- **Eine Markierung:** klicken Sie sie an. Ein gestrichelter Rahmen und Griffe erscheinen, und {{ui:Eigenschaften}} zeigt sie an.
- **Eine hinzufügen oder entfernen:** halten Sie {{key:Shift}} und klicken Sie.
- **Vollständig in einem Fenster:** ziehen Sie von links nach rechts auf eine freie Stelle des Blatts. Nur Markierungen, die ganz im Rahmen liegen, werden gewählt (durchgezogene Umrandung).
- **Vom Fenster berührt:** ziehen Sie von rechts nach links. Alles, was der Rahmen berührt, wird gewählt (grün, gestrichelte Umrandung).
- **Alles auf diesem Blatt:** {{key:Mod+A}}, oder {{ui:Mehr}} und dann {{ui:Alles auswählen}} in der Gruppe {{ui:Bearbeiten}} der Symbolleiste.
- **Nichts:** klicken Sie auf eine leere Stelle, drücken Sie {{key:Esc}}, oder wählen Sie {{ui:Mehr}} und dann {{ui:Auswahl aufheben}}.
:::

:::touch
- **Eine Markierung:** tippen Sie darauf.
- **Mehrere:** ziehen Sie mit einem Finger über eine freie Stelle des Blatts, um ein Fenster aufzuziehen. Von links nach rechts wird gewählt, was vollständig enthalten ist; von rechts nach links wird gewählt, was berührt wird.
- Antippen mit gehaltener {{key:Shift}} funktioniert nur mit angeschlossener Tastatur. Ohne Tastatur verwenden Sie ein Fenster.
- In {{ui:Auswahl}} verschiebt ein Finger das Blatt nie; verwenden Sie zwei Finger oder das Werkzeug {{ui:Pan}}.
:::

Schreibgeschützte Kommentare, die mit der Datei kamen, zeigen einen grauen gestrichelten Rahmen und keine Griffe. Sie können ausgewählt und beantwortet, aber nicht geändert werden.

## Verschieben und Größe ändern

- **Verschieben:** ziehen Sie eine ausgewählte Markierung. Mit gehaltener {{key:Shift}} bewegen Sie nur in Schritten von 45°. Mehrere ausgewählte Markierungen bewegen sich gemeinsam.
- **Größe ändern:** ist eine Markierung ausgewählt, ziehen Sie an einem Griff. Quadratische Griffe ändern die Größe des Rahmens (mit gehaltener {{key:Shift}} bleiben die Proportionen erhalten). Runde Griffe verschieben einen Eckpunkt einer Linie, Polylinie, eines Polygons, einer Wolke oder einer Messung (mit {{key:Shift}} für 45°). Rautenförmige Griffe verschieben die Spitze und Knickstelle einer Hinweisbeschriftung. Stiftstriche skalieren aus ihrem Rahmen.
- **Feinverschieben:** drücken Sie die Pfeiltasten, um die Auswahl um einen Bildschirmpixel zu bewegen; mit gehaltener {{key:Shift}} um zehn. Jeder Tastendruck ist ein Rückgängig-Schritt.

## Text oder Darstellung ändern

- **Text, Hinweisbeschriftungen und Notizen:** doppelklicken Sie die Markierung, drücken Sie {{key:Enter}} oder wählen Sie {{ui:Auf dem Blatt bearbeiten}} in {{ui:Eigenschaften}}. Schreiben Sie, dann klicken Sie außerhalb oder drücken Sie {{key:Mod+Enter}}. {{key:Esc}} bricht die Bearbeitung ab.
- **Stempel:** wählen Sie in {{ui:Eigenschaften}} einen anderen Stempel (ein Doppelklick öffnet {{ui:Eigenschaften}} für Sie).
- **Stil:** {{ui:Farbe}}, {{ui:Linienstärke}}, {{ui:Füllung}}, {{ui:Deckkraft}} und {{ui:Textgröße}} unter „Stil“ in {{ui:Eigenschaften}}. Bei mehreren Auswahlen zeigt {{ui:Eigenschaften}} die gewählten Arten und ändert sie alle gleichzeitig.

## Kopieren, Einfügen und Duplizieren

Die Gruppe {{ui:Bearbeiten}} der Symbolleiste enthält {{ui:Kopieren}} und {{ui:Einfügen}}. Ihr Menü {{ui:Mehr}} enthält alle diese Befehle, jeweils mit ihrer Taste.

| Befehl | Taste | Was er tut |
|---|---|---|
| {{ui:Ausschneiden}} | {{key:Mod+X}} | Kopiert die ausgewählten Markierungen und löscht sie |
| {{ui:Kopieren}} | {{key:Mod+C}} | Kopiert die ausgewählten Markierungen |
| {{ui:Einfügen}} | {{key:Mod+V}} | Legt eine Kopie auf das aktuelle Blatt (wo, siehe unten) |
| {{ui:An gleicher Position einfügen}} | {{key:Mod+Shift+V}} | Setzt die Kopie genau an die Stelle, von der sie kopiert wurde: auf demselben Blatt genau auf das Original; auf einem anderen Blatt an dieselbe Stelle auf dem Papier |
| {{ui:Duplizieren}} | {{key:Mod+D}} | Erstellt eine Kopie der Auswahl etwas nach unten und rechts, ohne das zuvor Kopierte anzutasten |

**Wo Einfügen die Kopie setzt:**

- {{key:Mod+V}} mit dem Zeiger auf dem Blatt setzt die Kopie zentriert an die Zeigerposition. Bewegen Sie den Zeiger und drücken Sie erneut {{key:Mod+V}}, und Sie setzen eine weitere Kopie.
- Die Schaltfläche {{ui:Einfügen}} (dann ist der Zeiger in der Symbolleiste) oder {{key:Mod+V}} mit dem Zeiger außerhalb des Blatts setzt die Kopie etwas nach unten und rechts vom Original. Jedes Einfügen derselben Kopie rückt einen Schritt weiter, sodass Kopien einander nie verdecken. Auf einem anderen Blatt landet das erste Einfügen dort, wo sich das Original auf seinem Blatt befand. Liegt diese Stelle außerhalb des Sichtbereichs, landet die Kopie in der Mitte der Ansicht.
- Damit {{key:Mod+V}} immer neben dem Original einfügt, wählen Sie {{ui:Neben der Kopie}} unter {{ui:Einfügen}} in den [MarkupCraft-Einstellungen](topic:settings).

Eingefügte Markierungen sind ausgewählt, sodass Sie sie sofort verschieben können. Jedes Ausschneiden, Einfügen oder Duplizieren ist ein Rückgängig-Schritt: {{key:Mod+Z}} nimmt das ganze Einfügen zurück.

Eingefügte Kopien sind neue Markierungen. Sie erhalten Ihren Namen, das heutige Datum, den Status Offen, keine Mängelnummer und eine leere Unterhaltung. Art, Form, Stil, Text und Kommentar bleiben erhalten. Schreibgeschützte Kommentare aus der Datei können nicht kopiert oder ausgeschnitten werden.

**Zwischen Registerkarten:** Was Sie kopieren, wird auch in diesem Browser gespeichert, sodass eine andere MarkupCraft-Registerkarte im selben Browser es einfügen kann. Das Kopieren von Markierungen nutzt nicht die Zwischenablage des Computers: Sie können sie nicht in ein anderes Programm einfügen, und Text, den Sie woanders kopiert haben, wird nicht als Markierung eingefügt.

**Kontextmenü:** klicken Sie mit der rechten Maustaste auf eine Markierung (oder auf leeres Papier), um {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Hier einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Auswahl als Stempel speichern…}}, {{ui:Beim Speichern in die Seite reduzieren}}, {{ui:Hier ein Bild einfügen…}} und {{ui:Alles auswählen}} zu erhalten. Ein Rechtsklick auf eine nicht ausgewählte Markierung wählt sie zuerst aus. Mit der rechten Maustaste ziehen Sie weiterhin das Blatt. Auf einem Touchscreen öffnet ein langer Druck auf eine Markierung dasselbe Menü (auf Text beginnt er die Textbearbeitung). Die Menütaste oder {{key:Shift+F10}} öffnet es an der Auswahl.

Seiteninhalt, der mit dem Werkzeug {{ui:Inhalt}} ausgewählt wird, lässt sich ebenfalls kopieren und einfügen: siehe [Linien, Bilder und Text der Seite selbst ändern](topic:page-content).

Um einen Teil der Seite selbst als Bild (ein Rechteck, eine Ellipse oder eine Freiform) oder als durchsichtige Überlagerung für ein anderes Blatt oder eine andere App zu kopieren, siehe [Einen Bereich der Seite oder eine Überlagerung kopieren](topic:copy-an-area).

## Löschen

Drücken Sie {{key:Delete}} oder {{key:Backspace}}, wählen Sie in der Symbolleiste {{ui:Mehr}} und dann {{ui:Löschen}}, oder wählen Sie {{ui:Löschen}} in {{ui:Eigenschaften}}. Die Statusleiste meldet, wie viele gelöscht wurden. Schreibgeschützte Kommentare aus der Datei werden nie gelöscht („wie in der Datei belassen“).

## Rückgängig und Wiederholen

- {{key:Mod+Z}} macht rückgängig, {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} wiederholt. Die Symbolleiste hat {{ui:Rückgängig}} und {{ui:Wiederholen}}.
- Die Statusleiste sagt, was rückgängig gemacht wurde („Rückgängig gemacht: Markierung verschieben.“).
- Rückgängig umfasst jede Änderung an Markierungen, Status, Antworten, Mängelpunkten, Blattmaßstäben und Blattnamen, bis zu 500 Schritte.
- Der Verlauf wird gelöscht, wenn Sie den Satz schließen.

## Markierungen auf andere Blätter kopieren

Um denselben Stempel, dieselbe Notiz oder Wolke auf mehrere Blätter zu legen, wählen Sie sie (oder mehrere Markierungen) aus und wählen Sie {{ui:Auf andere Blätter kopieren…}} in {{ui:Eigenschaften}}. Setzen Sie die Haken bei den Blättern oder wählen Sie {{ui:Alle Blätter}}, und wählen Sie {{ui:Kopieren}}. Jedes Blatt erhält eine Kopie an derselben Stelle auf der Seite, signiert mit Ihrem Namen. Ein {{key:Mod+Z}} entfernt sie alle.
