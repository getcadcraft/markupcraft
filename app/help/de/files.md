---
title: Dateien, die MarkupCraft öffnet und speichert
summary: PDFs hinein, eine markierte PDF-Kopie heraus, dazu CSV, BCF und Werkzeugkisten-Dateien; wohin was geht, online und offline.
keywords: PDF, öffnen, speichern, exportieren, Download, CSV, BCF, bcfzip, JSON, Werkzeugkiste, Dateitypen, Formate, Upload, Kennwort, verschlüsselt
from: b3045b4c
---

## Was MarkupCraft öffnet

| Datei | Wie | Was geschieht |
|---|---|---|
| PDF (`.pdf`) | {{ui:Öffnen}}, {{key:Mod+O}} oder auf dem Blattbereich ablegen. Mehrere auf einmal sind in Ordnung. | Jede Seite wird zu einem Blatt. Markierungen, die schon in der Datei sind, werden zurückgelesen (siehe unten). |
| Werkzeugkiste (`.json`) | Registerkarte {{ui:Werkzeuge}}, dann {{ui:Importieren}} | Die Werkzeuge werden Ihrer Kiste hinzugefügt. Siehe [Die Werkzeugkiste](topic:tool-chest). |

Alles andere wird mit „MarkupCraft öffnet PDF-Dateien.“ in der Statusleiste abgelehnt. Wenn Sie eine Mischung ablegen, werden die PDFs geöffnet, und die Statusleiste nennt, wie viele Dateien keine PDFs waren.

### Markierungen, die schon in einem PDF sind

- **Markierungen, die MarkupCraft gespeichert hat,** kommen genau zurück: Typ, Stil, Autor, Datum, Status, Antworten, Mängelnummer, der Maßstab des Blatts und alle von Ihnen eingegebenen Blattnamen.
- **Kommentare aus anderen PDF-Programmen** werden ebenfalls gelesen. Rechtecke, Ellipsen, Linien und Pfeile, Polylinien, Polygone, Freihandstriche (Stift), Textfelder und Haftnotizen werden zu normalen, bearbeitbaren MarkupCraft-Markierungen. Ihre Antworten und Prüfstatus kommen mit.
- **Alles andere** (durch Textauswahl erzeugte Texthervorhebungen, Stempel anderer Programme und weitere Arten) wird so angezeigt, wie es ist, und als schreibgeschützt gekennzeichnet. Sie können es auswählen, in der Markierungsliste sehen und beantworten, aber nicht verschieben, ändern oder löschen.
- Links und Formularfelder bleiben unberührt und werden nicht aufgelistet.
- Ein von einem anderen Programm gespeicherter Maßstab (ein Messansichtsfenster) wird als Maßstab des Blatts verwendet, wenn MarkupCraft seine Einheit versteht.

### Dateien, die sich nicht öffnen

- Ein PDF, das ein Kennwort braucht: „„Name“ benötigt zum Öffnen ein Kennwort. Öffnen Sie eine ungeschützte Kopie.“
- Eine beschädigte Datei oder eine, die in Wirklichkeit kein PDF ist: „„Name“ konnte nicht als PDF gelesen werden (…).“
- Ein PDF, das sich öffnet, aber gegen Änderungen geschützt ist, öffnet sich problemlos. Das Speichern wird abgelehnt (siehe unten).

Wenn mehrere Dateien auf einmal geöffnet werden, öffnen sich die funktionierenden, und ein Feld „Einige Dateien wurden nicht geöffnet“ listet die übrigen auf.

## Was MarkupCraft speichert

Speichern ist immer der **Download** einer neuen Datei. Eine Webseite kann keine Datei auf Ihrem Computer überschreiben, und MarkupCraft ändert Ihr Original nie.

| Sie wählen | Sie erhalten | Hinweise |
|---|---|---|
| {{ui:Speichern}} ({{key:Mod+S}}) | „<Name> (marked up).pdf“ | Eine Kopie des Original-PDFs, in die jede Markierung als echter PDF-Kommentar geschrieben ist. Wird eine Datei „(marked up)“ erneut gespeichert, behält sie denselben Namen; sie wird nie zu „(marked up) (marked up)“. Siehe [Das markierte PDF speichern](topic:save-the-marked-up-pdf). |
| Registerkarte {{ui:Markierungen}}, dann {{ui:CSV}} | „<Name> markups.csv“ | Die Markierungen wie aufgelistet (Filter gelten). |
| Registerkarte {{ui:Markierungen}}, dann {{ui:BCF}} | „<Name> markups.bcfzip“ | BCF 2.1 für BIM-Koordinationswerkzeuge, ein Schnappschuss je Markierung. Siehe [BCF-Grundlagen](topic:bcf-basics). |
| Registerkarte {{ui:Mängelliste}}, dann {{ui:CSV exportieren}} | „<Name> punch list.csv“ | Die Mängelpunkte in Nummernfolge. |
| Registerkarte {{ui:Werkzeuge}}, dann {{ui:Exportieren}} | „MarkupCraft tool chest.json“ | Ihre Werkzeugkiste zum Weitergeben oder Aufbewahren. |

„<Name>“ ist der Dateiname des ersten geöffneten PDFs ohne „.pdf“.

Die CSV-Dateien öffnen sich in jeder Tabellenkalkulation. Sie sind UTF-8 mit der Markierung, nach der Tabellenkalkulationen suchen, sodass Namen mit Akzenten richtig erscheinen. Eine Zelle, die mit =, +, - oder @ beginnt, erhält ein vorangestelltes Apostroph, damit eine Tabellenkalkulation sie nie als Formel ausführt.

## Wohin Downloads gehen

Das entscheidet Ihr Browser: meist Ihr Ordner „Downloads“, oder er fragt jedes Mal, wenn Sie ihn so eingestellt haben. Siehe [Browser und Computer](common:browsers#what-differs-between-browsers).

:::chromium
Wenn Sie alle geänderten Dateien eines Satzes auf einmal speichern, fragen Chrome und Edge möglicherweise, ob diese Website mehrere Dateien herunterladen darf. Wählen Sie {{ui:Zulassen}}, sonst erhalten Sie nur die erste Kopie.
:::

:::safari
Auf einem iPad fragt Safari vor jedem Download und legt die Datei in der App „Dateien“ unter „Downloads“ ab. Auf einem Mac geht sie in den Ordner, der in den Safari-Einstellungen festgelegt ist.
:::

## Online und offline

- **Ihre PDFs verlassen diesen Computer nie,** weder online noch offline. Es gibt nirgendwohin einen Upload.
- Der PDF-Leser wird beim ersten Öffnen eines PDFs geladen („PDF-Leser wird geladen…“), der PDF-Schreiber beim ersten Speichern („PDF-Schreiber wird geladen…“) oder beim Öffnen einer Datei, die bereits Kommentare enthält.
- Mit Verbindung werden beide von der Website geladen.
- **Um ohne Verbindung zu arbeiten,** wählen Sie {{ui:Für Offline speichern}} in der Leiste oben, solange Sie online sind. Die Schaltfläche zählt „Speichern 3 von 8“ und meldet dann „Offline bereit“. Diese Kopie enthält PDF-Leser und PDF-Schreiber (zusammen etwa 6 MB) und diese Hilfe, sodass Öffnen, Markieren und Speichern von PDFs danach in diesem Browser offline funktionieren.
- Wenn die Schaltfläche „Speichern nicht möglich“ meldet, wurden einige Dateien nicht heruntergeladen: Prüfen Sie die Verbindung und klicken Sie erneut. Meldet sie „Offline nicht verfügbar“, kann dieses Browserfenster keine Offline-Kopie behalten (private Fenster und manche verwalteten Computer); nutzen Sie ein normales Fenster.
- Um die Kopie zu aktualisieren oder zu entfernen, klicken Sie auf „Offline bereit“ und wählen „Erneut speichern (neueste Version holen)“ oder „Offline-Kopie entfernen“. Mehr unter [Offline arbeiten](common:offline).

:::offline
Sie sind offline. Wenn die Leiste oben „Offline bereit“ zeigt, funktioniert alles, auch das Speichern. Wenn nicht und Sie in diesem Tab noch nicht gespeichert haben, kann {{ui:Speichern}} mit „Der PDF-Schreiber konnte nicht geladen werden“ scheitern. Ihre Markierungen sind weiterhin im Tab: Lassen Sie ihn offen, gehen Sie wieder online und wählen Sie erneut {{ui:Speichern}}.
:::

## Wissenswertes

- Große Plansätze brauchen beim Öffnen eine Weile: MarkupCraft liest den Text jeder Seite, um Blattnummern zu finden. Die Statusleiste zählt die Blätter mit.
- Wird dasselbe PDF zweimal geöffnet, kommen seine Blätter zweimal dazu. Schließen Sie in diesem Fall den Satz und öffnen Sie ihn erneut.
- {{ui:Schließen}} schließt alle geöffneten Dateien auf einmal. Haben welche nicht gespeicherte Markierungen, fragt es nach: {{ui:Abbrechen}}, {{ui:Ohne Speichern schließen}} oder {{ui:Zuerst Kopien speichern}}.
- Speichern in der Cloud ist noch nicht vorhanden, und es gibt noch keine Desktop-Builds. Bewahren Sie Ihre PDFs bei Ihren übrigen Projektdateien auf und sichern Sie sie wie gewohnt. Siehe [Wohin Ihre Dateien gehen](common:your-files).
