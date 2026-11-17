---
title: Der Werkzeugkasten
summary: Speichern Sie eine gestaltete Markierung als wiederverwendbares Werkzeug, zeichnen Sie damit und teilen Sie Ihren Werkzeugkasten als Datei mit dem Büro.
keywords: Werkzeugkasten, Werkzeuge, Werkzeugsatz, eigene Werkzeuge, gespeicherte Markierungen, Favoriten, Büro-Standard, importieren, exportieren, teilen, JSON
from: 7dfa36e0
---

Der Reiter {{ui:Werkzeuge}} enthält Ihren **Werkzeugkasten**: Markierungen, die mit ihrem Aussehen gespeichert sind und sich erneut zeichnen lassen. Ein Werkzeug behält die Art, Farbe, Linienstärke, Füllung, Deckkraft, Textgröße und den Betreff der Markierung sowie den Wortlaut eines Stempels, den Gruppennamen einer Zählung oder den Starttext eines Textfelds oder einer Hinweisbeschriftung.

## Die Werkzeuge, mit denen Sie beginnen

Ein neuer Werkzeugkasten enthält sechs: „Revisionswolke“ (rot), „Fragenwolke“ (blau), „Gelber Textmarker“, „RFI-Hinweisbeschriftung“ (blau, beginnt mit „RFI: “), „Vor Ort prüfen“ (eine orangefarbene Hinweisbeschriftung mit dem Text „Vor Ort prüfen.“) und „Genehmigt mit Anmerkungen“ (ein Stempel).

## Mit einem Werkzeug zeichnen

1. Öffnen Sie den Reiter {{ui:Werkzeuge}}.
2. Klicken Sie ein Werkzeug an. Es sieht gedrückt aus, und das passende Werkzeug in der Symbolleiste wird aktiviert.
3. Zeichnen Sie wie üblich. {{ui:Eigenschaften}} zeigt „Zeichnen mit ‚<Werkzeug>‘ aus dem Werkzeugkasten.“

Solange ein Werkzeug aus dem Werkzeugkasten aktiv ist, wirken sich Änderungen in {{ui:Eigenschaften}} vor dem Zeichnen nur vorerst auf dieses Werkzeug aus, ohne das gespeicherte Werkzeug oder Ihre üblichen Werkzeugeinstellungen zu ändern. Wenn Sie eine Schaltfläche der Symbolleiste wählen oder die Taste eines Werkzeugs drücken, kehren Sie zum normalen Werkzeug zurück.

## Eigene Werkzeuge speichern

1. Zeichnen Sie eine Markierung und gestalten Sie sie wie gewünscht: Farbe, Linie, Füllung, Betreff, Stempeltext.
2. Wählen Sie sie aus.
3. Wählen Sie im Reiter {{ui:Werkzeuge}} {{ui:Auswahl als Werkzeug speichern}} oder in {{ui:Eigenschaften}} {{ui:Als Werkzeug speichern}}.
4. Geben Sie einen {{ui:Name des Werkzeugs}} ein und wählen Sie {{ui:Werkzeug speichern}}.

Ergebnis: Das Werkzeug wird ans Ende des Werkzeugkastens angefügt, und der Reiter {{ui:Werkzeuge}} öffnet sich und zeigt es.

## Stempel aus einer Auswahl

Wählen Sie mehrere Markierungen (oder Seiteninhalt mit dem Werkzeug {{ui:Inhalt}}) und wählen Sie {{ui:Auswahl als Stempel speichern…}} unter {{ui:Mehr}} oder im Kontextmenü. Der Werkzeugkasten erhält einen Stempel, der alle enthält („Stempel: 3 Markierungen zusammen“). Klicken Sie ihn an und dann auf ein beliebiges Blatt: Die Markierungen landen zusammen, zentriert an der Klickstelle, als neue Markierungen mit Ihrem Namen; Seiteninhalt wird dort in die Seite gezeichnet. Diese Stempel werden wie jedes Werkzeug gespeichert und mit dem Werkzeugkasten geteilt.

## Ein Werkzeug entfernen

Wählen Sie das × am Ende der Zeile des Werkzeugs und dann {{ui:Entfernen}}. Bereits damit gezeichnete Markierungen bleiben unverändert.

## Wo der Werkzeugkasten gespeichert wird

Der Werkzeugkasten wird **in diesem Browser auf diesem Computer** gespeichert. Ein anderer Browser oder Computer hat seinen eigenen Werkzeugkasten (beginnend mit den sechs Standardwerkzeugen); ein privates Fenster vergisst ihn beim Schließen, und das Löschen der Website-Daten in den Browser-Einstellungen entfernt ihn.

Wenn der Browser ihn nicht speichern kann (Speicherung ausgeschaltet oder voll), sagt die Statusleiste: „Der Werkzeugkasten konnte in diesem Browser nicht gespeichert werden (Speicher ist aus oder voll). Exportieren Sie ihn, um ihn zu behalten.“

:::safari
Safari kann die gespeicherten Daten einer Website löschen, wenn Sie die Website eine Weile nicht benutzt haben. Exportieren Sie Ihren Werkzeugkasten ab und zu, damit Sie ihn wieder importieren können.
:::

**Exportieren Sie Ihren Werkzeugkasten als Sicherung**, besonders nachdem Sie Werkzeuge erstellt haben, auf die Sie sich verlassen.

## Einen Werkzeugkasten mit dem Büro teilen

1. Richten Sie die Werkzeuge einmal ein.
2. Wählen Sie {{ui:Exportieren}}. Sie erhalten „MarkupCraft tool chest.json“.
3. Legen Sie diese Datei dorthin, wo das Büro seine Standards aufbewahrt, oder schicken Sie sie herum.
4. Alle anderen wählen im Reiter {{ui:Werkzeuge}} {{ui:Importieren}} und die Datei aus.

Ergebnis: „12 Werkzeuge aus ‚MarkupCraft tool chest.json‘ importiert.“ Werkzeuge aus demselben Werkzeugkasten ersetzen ihre älteren Kopien, daher aktualisiert das Importieren eines geänderten Büro-Werkzeugkastens diese Werkzeuge, statt sie zu verdoppeln; neue Werkzeuge werden hinzugefügt. Ein Werkzeugkasten enthält bis zu 500 Werkzeuge.

MarkupCraft prüft jeden Wert in einer importierten Datei und überspringt, was es nicht verwenden kann („2 übersprungen (nicht verwendbar)“). Dateien, die kein Werkzeugkasten sind, werden abgelehnt: „Diese Datei ist kein MarkupCraft-Werkzeugkasten.“ oder „Diese Datei ist kein Werkzeugkasten (sie ist kein JSON).“

Werkzeugkasten-Dateien anderer Markierungsprogramme lassen sich nicht importieren.
