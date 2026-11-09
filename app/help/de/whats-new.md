---
title: Neu in 0.8 und 0.8.1
summary: Markierungen, die zu Aufgaben werden und sich selbst schließen, eine einfache Liste der Änderungen zwischen Revisionen, Sprachnotizen und Entscheidungen im Plan, Redline-Dateien für den Zeichner sowie die gemeinsamen Änderungen von 0.8: Eingabegeräte, Symbolleistenzeilen, Probleme-Bereich, weitere Sprachen.
keywords: was ist neu, neuigkeiten, versionshinweise, änderungsprotokoll, changelog, änderungen, 0.8, 0.8.1, version, neue funktionen, aufgabe, aufgaben, zuständig, fälligkeitstag, überfällig, jetzt prüfen, was sich geändert hat, revisionen, vergleichen, sprachnotiz, entscheidung, redline, antwortdatei, zeichner, assistent, mcp, probleme, sprachen, eingabegeräte, trackpad, symbolleistenzeilen, eigenschaftenraster, update
from: 40368796
---

Dies sind die Änderungen in MarkupCraft 0.8 und 0.8.1 gegenüber 0.7. Das große Neue ist, dass eine Markierung eine Aufgabe sein kann, die jemand erledigt, oder Ihr eigener Assistent, und die sich selbst schließt, wenn sich die Zeichnung tatsächlich ändert.

## Neu

### Markierungen, die handeln

- **Eine Markierung zur Aufgabe machen.** Wählen Sie eine oder mehrere Markierungen, öffnen Sie die Registerkarte {{ui:Aufgaben}} und wählen Sie {{ui:Auswahl zur Aufgabe machen}}. Eine Aufgabe hat einen Titel, eine Person oder Ihren verbundenen Assistenten, der sie erledigt, einen optionalen Fälligkeitstag und einen Status. Sie behält ihren Platz auf dem Blatt und ihre Unterhaltung. Siehe [Eine Markierung zur Aufgabe machen](topic:markups-that-act).
- **Aufgaben, die sich selbst schließen.** Eine Aufgabe kann den Bereich der Zeichnung innerhalb ihrer Markierung beobachten. Öffnen Sie eine neuere Revision des Blatts und wählen Sie {{ui:Jetzt prüfen}}: Wenn sich die Linien in diesem Bereich um mehr als eine Haaresbreite geändert haben, wird die Aufgabe als Fertig markiert, ihre Markierung wird Abgeschlossen, und eine Notiz in der Unterhaltung beschreibt, was sich geändert hat. Ein neuer Datumsstempel oder Linien, die sich um weniger als 1.5 Punkte verschoben haben, zählen nicht. Eine Aufgabe kann stattdessen auch ein Modellelement beobachten: Ihr Assistent meldet das Element mit `tasks_check`, und eine spätere Meldung, die abweicht, oder ein gelöschtes Element schließt die Aufgabe. Ein Rückgängig-Schritt öffnet sie wieder.
- **Aufgaben finden.** Filtern Sie die Liste {{ui:Aufgaben}} nach Status und nach Zuständigkeit, auch nach {{ui:Überfällig}}. Wählen Sie {{ui:Zugewiesen an}} und dann {{ui:Assistent}}, um zu sehen, was auf Ihren Assistenten wartet. Eine Aufgabe nach ihrem Fälligkeitstag wird als Warnung im Probleme-Bereich angezeigt. {{ui:CSV}} exportiert die Liste. Aufgaben werden mit der Markierung in der PDF gespeichert und werden über Live wie andere Markierungseigenschaften übertragen.

### Was sich geändert hat, als einfache Liste

- **Änderungen auflisten.** Öffnen Sie die Registerkarte {{ui:Vergleichen}}, dann {{ui:Ganzen Satz vergleichen}}, wählen Sie die frühere und die spätere Datei und wählen Sie {{ui:Änderungen auflisten}}. Die Liste beginnt mit einer Anzahl und behandelt dann jedes geänderte Blatt, die größte Änderung zuerst: wo auf dem Blatt, wie groß (in realen Einheiten sowie in Zoll auf dem Papier bei einem kalibrierten Blatt), ob Linien hinzugefügt oder entfernt wurden, wie viele Markierungen dort liegen und welche Wörter erschienen oder verschwunden sind. {{ui:Liste kopieren}} legt sie in die Zwischenablage, und {{ui:CSV}} schreibt eine Zeile pro Änderung. Siehe [Änderungen zwischen Revisionen auflisten](topic:what-changed-in-words).

### Sprachnotizen und Entscheidungen

- **Sprachnotizen.** Wählen Sie in der Registerkarte {{ui:Notizen}} {{ui:Sprachnotiz aufnehmen}}, dann {{ui:Aufnahme beenden}}. Aufnahmen enden nach zwei Minuten von selbst. Die Notiz wird in der Mitte des Blatts angeheftet. Sie ziehen sie an die richtige Stelle und geben in {{ui:Eigenschaften}} eine Beschriftung ein, und {{ui:Abspielen}} in der Liste spielt sie ab. Die Aufnahme wird in der PDF gespeichert.
- **Entscheidungen.** {{ui:Entscheidung anheften}} schreibt ein oder zwei Sätze auf das Blatt. Wenn sie eine frühere Entscheidung ersetzt, wählen Sie diese unter {{ui:Sie ersetzt}}: Die alte bleibt, wird als Ersetzt markiert und verweist auf die neue. Ein Rückgängig-Schritt nimmt sie zurück. Siehe [Sprachnotizen und Entscheidungen auf einem Blatt anheften](topic:voice-notes-and-decisions).

### Redline zur Revision

- **Senden und beantworten.** Öffnen Sie in der Registerkarte {{ui:Aufgaben}} {{ui:Redline zur Revision}}, geben Sie die Revision ein, auf die sich die Markierungen beziehen, und wählen Sie {{ui:Redline-Datei exportieren}}. Sie erhalten eine Datei `.redline.json` mit einem Eintrag pro offener Markierung: Blatt, Position (als Anteile des Blatts, damit ein erneutes Plotten in anderer Größe noch passt), Wörter, Autor, Unterhaltung und deren Aufgabe. Wer die Änderungen zeichnet, antwortet mit Akzeptiert, Abgelehnt oder Fertig in einer Datei `.redline-answers.json`. {{ui:Antwortdatei laden…}} setzt bei jeder Markierung diesen Status und die Notiz des Zeichners, als ein Rückgängig-Schritt. Siehe [Markierungen als Redline an den Zeichner senden](topic:redline-to-revision).

### KI-Assistenten

- **Weitere Werkzeuge.** Ein Assistent, den Sie über CadCraft Studio verbunden haben, kann Aufgaben auflisten (`tasks_list`), eine erstellen oder ändern (`task_set`), die Aufgabe entfernen (`task_clear`), eine gegen eine neuere Revision oder ein Element prüfen (`tasks_check`) und die einfache Liste der Änderungen zwischen zwei geöffneten Planmappen lesen (`revisions_changes`). Er erhält nur die Werkzeuge, die Sie unter dem Schalter für Assistenten angehakt haben, und jede Änderung ist ein Rückgängig-Schritt. Siehe [MarkupCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants).

## In allen Apps

- **Sprachen.** CadCraft Studio hat jetzt 54 Sprachen. Zehn sind neu: Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili und Usbekisch. Alle nicht englischen sind maschinelle Entwürfe, bis sie von Muttersprachlern gelesen wurden.
- **Eingabegeräte.** {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Eingabegeräte}} legt fest, was ein Trackpad, die Seitentasten Ihrer Maus, ein Stift, Fingertipps, eine 3D-Maus, ein Gamecontroller oder ein MIDI-Controller tut, für jede App oder nur für diese. Solange Sie nichts ändern, funktioniert jedes Gerät wie bisher. Siehe [Trackpad, 3D-Maus oder Controller verwenden](common:input-devices).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} hat {{ui:Umbrechen}} (Standard), {{ui:2 Zeilen}} und {{ui:1 Zeile}}, damit die Zeichnung mehr Platz erhält. Siehe [Panels anordnen](common:arrange-panels).
- **Eigenschaftenraster.** Die Stilfelder einer Markierung verwenden das gemeinsame Raster mit einklappbaren Kategorien sowie Bezeichnungs- und Wertspalten.
- **Probleme-Bereich.** Warnungen der App, etwa eine überfällige Aufgabe, sammeln sich in einem Probleme-Bereich.
- **Live und Add-ons.** Live-Sitzungen werden in [Gemeinsam live arbeiten](common:work-together-live) beschrieben. Die Liste der Add-ons, die Ihrem Konto folgt, steht in [Add-ons und Ihre Kontoliste](common:addons-basics).
- **Ihre KI verbinden.** CadCraft Studio ist die Zentrale für Ihren eigenen Assistenten: einmal verbinden für alle acht Apps. Die Apps enthalten keine eigene KI.

## In 0.8.1 behoben

- **Studio kann die Sprache während des Betriebs wechseln.** Zuvor blieben die Desktop-App und die gepackten Ausgaben auf Englisch. Dies ist noch nicht auf allen Plattformen getestet. Sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.
- Studio-0.8-Installationen erhalten 0.8.1 über {{ui:Einstellungen}} › {{ui:Updates}}.

## Noch nicht in dieser Version

- **Nicht code-signiert.** Die Windows-Installer und die macOS-.dmg-Dateien haben noch keine Signatur. Wenn unter Windows SmartScreen den Installer stoppt, wählen Sie {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}. Auf einem Mac klicken Sie mit der rechten Maustaste auf CadCraft Studio und wählen {{ui:Öffnen}}. Store-Versionen sind vorerst zurückgestellt.
- **Ihre KI verbinden ist an manchen Stellen unfertig.** Das Verbinden mit einem Klick in Studio, der gehostete Connector für Browser-Assistenten und Ihr eigener API-Schlüssel in Studio sind für diese Version nicht zugesagt. Der Aufgabenablauf wurde getestet, aber noch nicht mit einem echten Assistenten.
- **Aufgabenprüfungen brauchen dieselbe Seitengröße.** Ein Blatt, das in anderer Größe erneut geplottet wurde, passt nicht, daher schließen sich seine Aufgaben nicht. Blätter werden über die Blattnummer zugeordnet, sonst über die Position auf der Seite.
- **Sprachnotizen sind nur Aufnahmen.** Es gibt kein Transkript. Ein Assistent sieht die Länge, den Autor und die Beschriftung einer Notiz, nicht den Ton. Die Aufnahme wurde mit einem simulierten Mikrofon in einem Browser ohne Oberfläche getestet. Ein echtes Mikrofon auf einem Telefon, Tablet oder Laptop ist noch zu prüfen.
- **Berechnungsblätter und Begründungen in einer PDF** werden in einem privaten Eintrag der Datei gespeichert. Eine ältere MarkupCraft-Version ignoriert diesen Eintrag und verwirft ihn beim nächsten Speichern der Datei. Öffnen und speichern Sie solche Dateien daher mit 0.8 oder neuer.
- **Die Zeichnerseite der Redlines.** CadCraft, das die Redline-Datei liest und beantwortet, ist noch nicht umgesetzt.
- **Andere Sprachen.** Die App-Leiste für Tamil läuft um 528 px über.

Alles Weitere steht in [Was noch nicht umgesetzt ist](topic:not-built-yet). Zur Version davor siehe [Neu in 0.7](topic:whats-new-0-7).
