---
title: Neuerungen in 0.9
summary: Notizen und eine Ablagefläche, die nie gedruckt werden, verschlüsselte private Notizen und eine bereinigte Kopie für den Kunden, Stapelverknüpfungen für einen ganzen Zeichnungssatz, ein Bogenwerkzeug mit zehn Methoden, das Folgen eines anderen Prüfers in Live und eine Korrektur, damit gelöschte Markierungen nicht in der gespeicherten PDF bleiben.
keywords: Neuerungen, was ist neu, 0.9, Versionshinweise, Änderungsprotokoll, Notizen, Ablagefläche, private Notizen, Passphrase, verschlüsselt, Notizen ausblenden, Notizen anzeigen, bereinigte Kopie, Momentaufnahme, Stapelverknüpfungen, Blattverweise, Blätter verknüpfen, Schriftfeld, Blattnummer, Nachtrag, umnummerieren, PDF-Link, Bogen, Bogenmethoden, Dreipunktbogen, Radius, folgen, mir folgen, Live, Klassenansicht, Personenliste, gelöschte Markierung, Tooltips, Registerkartentitel, Neuerungen, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Aufgabe, Aufgaben, Zuständiger, Fälligkeitstag, überfällig, jetzt prüfen, was sich geändert hat, Revisionen, vergleichen, Sprachnotiz, Entscheidung, Redline, Antwortdatei, Entwerfer, Assistent, MCP, Probleme, Sprachen, Eingabegeräte, Trackpad, Symbolleistenzeilen, Eigenschaftsraster, Aktualisierung
from: dbdd7ed4
---

Das hat sich in MarkupCraft 0.9 gegenüber 0.8.1 geändert. Die Grundidee: Ihre Arbeitsnotizen bleiben von der Seite fern, die der Kunde bekommt, und ein ganzer Zeichnungssatz lässt sich in einem Durchgang verknüpfen.

## Neu

### Notizen, Ablagefläche und private Notizen

- **Die Ablagefläche.** Der Bereich um jedes Blatt ist ein Schreibtisch: Alles, was neben dem Blatt gezeichnet, getippt oder eingefügt wird, ist eine Notiz und wird nie gedruckt. Wählen Sie {{ui:Ablagefläche anzeigen}}, um für mehr Platz herauszuzoomen, oder {{ui:Momentaufnahme auf die Ablagefläche}}, ziehen Sie einen Rahmen und wählen Sie dann {{ui:Auf die Ablagefläche}}, um ein Bild eines Teils der Zeichnung neben das Blatt zu legen. Eine Momentaufnahme ist ein Bild und ändert sich nicht, wenn sich das Blatt ändert. Siehe [Notizen, Ablagefläche und private Notizen](topic:notes-and-pasteboard).
- **Notizen ein- und ausblenden.** Jede Markierung kann eine Notiz sein: Stellen Sie {{ui:Neue Markierungen sind}} im Reiter {{ui:Notizen}} ein oder {{ui:Diese Markierung ist}} in {{ui:Eigenschaften}}. {{key:Shift+H}} oder der Schalter {{ui:Notizen}} unter dem Blatt blendet alle Notizen auf einmal ein oder aus. Notizen werden beim Drucken, bei reduzierten Kopien, in Listen und Exporten weggelassen, und andere PDF-Leser zeigen sie nicht. Ihre gespeicherte PDF behält sie für das nächste Öffnen in MarkupCraft.
- **Private Notizen.** Wählen Sie {{ui:Passphrase festlegen}} und machen Sie dann eine Markierung zu {{ui:Eine private Notiz}}. Sie wird in der Datei mit einer Passphrase von mindestens 10 Zeichen verschlüsselt, und es gibt keine Wiederherstellung: Niemand, auch wir nicht, kann sie ohne die Passphrase öffnen. {{ui:Sperren}} legt private Notizen weg; {{ui:Auf diesem Gerät entsperrt bleiben}} ist standardmäßig aus.
- **Eine bereinigte Kopie speichern.** {{ui:Bereinigte Kopie speichern}} entfernt jede Notiz, jede private Notiz und alles auf der Ablagefläche. Verwenden Sie es für die Datei, die an den Kunden geht.

### Einen ganzen Satz verknüpfen

- **Stapelverknüpfungen.** Wählen Sie {{ui:Seiten}} › {{ui:Stapelverknüpfungen…}} oder {{ui:Blattverweise verknüpfen…}} unter {{ui:Text suchen}} im Bereich {{ui:Blätter}}. Schritt 1 listet die Nummer und den Namen jedes Blatts, wie sie aus dem Schriftfeld gelesen wurden; korrigieren Sie falsche. Schritt 2 listet die gefundenen Verweise, etwa `3/A-501` oder `DETAIL 2 ON A-501`. {{ui:Wird verknüpft}} zeigt Blatt und Ansicht für jeden, {{ui:Nicht verknüpft}} zeigt Nummern, zu denen kein offenes Blatt existiert, und {{ui:Verknüpfungen erstellen}} erstellt alle in einem Rückgängig-Schritt. Führen Sie es nach einem Nachtrag oder einer Umnummerierung erneut aus; von Hand erstellte Verknüpfungen werden nie geändert. Eine Verknüpfung mit einer Ansicht wird als PDF-Link gespeichert, damit auch andere Leser das Detail öffnen. Siehe [Blattverknüpfungen](topic:sheet-links).

### Zeichnen

- **Bogen, zehn Methoden.** Das Werkzeug {{ui:Bogen}} ({{key:O}}) hat jetzt ein Feld {{ui:Bogenmethode}} über der Seite mit zehn Arten, einen Bogen zu zeichnen. Winkel, Länge, Radius und Richtung können angeklickt oder eingetippt werden. Siehe [Einen Bogen auf zehn Arten zeichnen](topic:draw-an-arc).

### Gemeinsam arbeiten

- **Einem Prüfer folgen.** Wählen Sie in einer Live-Sitzung neben dem Namen einer Person {{ui:Folgen}}, und Ihre Ansicht bewegt sich mit ihrer; sobald Sie selbst schwenken oder zoomen, hört es auf. Der Host kann {{ui:Alle bitten, mir zu folgen}} wählen. Die Personenliste zeigt die Farbe jeder Person, ihren Namen, das Blatt, auf dem sie ist, und wann ihre letzte Änderung war. Siehe [Einem anderen Prüfer in einer Live-Sitzung folgen](topic:follow-in-live).

## In jeder App

- Tooltips sind Bootstrap-Tooltips, der Starttipp lässt sich schließen, Registerkartenleisten scrollen, wenn sie überlaufen, und Browser-Registerkartentitel lauten `<Dokument> — MarkupCraft | CadCraft`.
- Ein Bereich mit mehreren Abschnitten öffnet einen und schließt die anderen (ein Schloss neben dem Pfeil hält einen offen); ein Schalter in den Einstellungen schaltet das aus.
- Jede App startet mit einer Standardsammlung von Bibliotheksobjekten.
- Gewichts- und Temperatureinheiten sind in den Einheiteneinstellungen verfügbar.

## Behoben

- **Gelöschte Markierungen bleiben in der gespeicherten PDF nicht mehr lesbar.** Früher nahm Speichern eine gelöschte oder umgeschriebene Anmerkung von ihrer Seite, ließ aber das Objekt mit seinem Text in der Datei. Jetzt löscht Speichern diese Objekte. Dateien, die frühere Versionen gespeichert haben, enthalten sie noch, bis Sie sie erneut speichern.

## Ehrliche Grenzen

- Stapelverknüpfungen wurden an unseren eigenen Testsätzen erprobt. Echte Sätze zeichnen Blasen auf viele Arten, daher können bei einem Kundensatz manche Ansichten übersehen werden. Gescannte Blätter brauchen zuerst {{ui:Text lesen (OCR)…}}.
- Notizen, private Notizen und die Ablagefläche wurden in einem Headless-Browser und an eigenen Dateien getestet, nicht mit einem großen echten Vektorsatz und nicht in einer echten Live-Sitzung mit zwei Personen. Eine Passphrase zu ändern ist nicht umgesetzt. Versionen vor 0.9 zeigen keine Notizen.
- Die Klassenansicht ist die Personenliste; sie wurde noch nicht mit einer echten Lehrkraft und echten Schülerinnen und Schülern erprobt.
- Andere Sprachen als Englisch sind maschinelle Entwürfe, bis ein Muttersprachler sie gelesen hat.
- Windows-Installationsprogramme sind nicht code-signiert (Weitere Informationen, dann Trotzdem ausführen); das macOS-Disk-Image ist nicht notarisiert (Rechtsklick, dann Öffnen).

## Früher: 0.8 und 0.8.1

Das hat sich in MarkupCraft 0.8 und 0.8.1 gegenüber 0.7 geändert. Das große Neue: Eine Markierung kann eine Aufgabe sein, die jemand oder Ihr eigener Assistent erledigt und die sich selbst schließt, wenn sich die Zeichnung wirklich ändert.

### Neu

**Markierungen, die handeln**

- **Eine Markierung zur Aufgabe machen.** Wählen Sie eine oder mehrere Markierungen, öffnen Sie die Registerkarte {{ui:Aufgaben}} und wählen Sie {{ui:Auswahl zur Aufgabe machen}}. Eine Aufgabe hat einen Titel, eine Person oder Ihren verbundenen Assistenten, der sie erledigt, einen optionalen Fälligkeitstag und einen Status. Sie behält ihren Platz auf dem Blatt und ihren Verlauf. Siehe [Eine Markierung zur Aufgabe machen](topic:markups-that-act).
- **Aufgaben, die sich selbst schließen.** Eine Aufgabe kann die Zeichnung innerhalb ihrer Markierung beobachten. Öffnen Sie eine neuere Revision des Blatts und wählen Sie {{ui:Jetzt prüfen}}: Haben sich die Linien in diesem Bereich um mehr als eine Haarbreite geändert, wird die Aufgabe als Erledigt markiert, ihre Markierung wird Abgeschlossen, und eine Notiz im Verlauf sagt, was sich geändert hat. Ein neuer Datumsstempel oder Linien, die sich um weniger als 1.5 Punkte verschoben haben, zählen nicht. Eine Aufgabe kann stattdessen ein Modellelement beobachten: Ihr Assistent meldet das Element mit `tasks_check`, und eine spätere abweichende Meldung oder ein gelöschtes Element schließt die Aufgabe. Ein Rückgängig-Schritt öffnet sie wieder.
- **Aufgaben finden.** Filtern Sie die Liste {{ui:Aufgaben}} nach Status und danach, für wen sie ist, einschließlich {{ui:Überfällig}}. Wählen Sie {{ui:Zugewiesen an}}, dann {{ui:Assistent}}, um zu sehen, was auf Ihren Assistenten wartet. Eine Aufgabe nach ihrem Fälligkeitstag erscheint als Warnung im Probleme-Bereich. {{ui:CSV}} exportiert die Liste. Aufgaben werden mit der Markierung in der PDF gespeichert und reisen über Live wie andere Markierungseigenschaften.

**Was sich geändert hat, als einfache Liste**

- **Änderungen auflisten.** Öffnen Sie die Registerkarte {{ui:Vergleichen}}, dann {{ui:Ganzen Satz vergleichen}}, wählen Sie die frühere und die spätere Datei und wählen Sie {{ui:Änderungen auflisten}}. Die Liste beginnt mit einer Anzahl und behandelt dann jedes geänderte Blatt, die größte Änderung zuerst: wo auf dem Blatt, wie groß (in echten Einheiten sowie in Zoll auf dem Papier bei einem kalibrierten Blatt), ob Linien hinzugefügt oder entfernt wurden, wie viele Markierungen dort liegen und welche Wörter erschienen oder verschwunden sind. {{ui:Liste kopieren}} legt sie in die Zwischenablage, und {{ui:CSV}} schreibt eine Zeile pro Änderung. Siehe [Änderungen zwischen Revisionen auflisten](topic:what-changed-in-words).

**Sprachnotizen und Entscheidungen**

- **Sprachnotizen.** Wählen Sie im Reiter {{ui:Notizen}} {{ui:Sprachnotiz aufnehmen}} und dann {{ui:Aufnahme beenden}}; Aufnahmen stoppen nach zwei Minuten von selbst. Die Notiz wird in der Mitte des Blatts angeheftet; Sie ziehen sie an ihren Platz und tippen eine Beschriftung in {{ui:Eigenschaften}}. {{ui:Abspielen}} in der Liste spielt sie ab. Die Aufnahme wird in der PDF gespeichert.
- **Entscheidungen.** {{ui:Entscheidung anheften}} schreibt ein oder zwei Sätze auf das Blatt. Ersetzt sie eine frühere Entscheidung, wählen Sie diese in {{ui:Sie ersetzt}}: Die alte bleibt, als Ersetzt markiert, und verweist auf die neue. Ein Rückgängig-Schritt nimmt sie zurück. Siehe [Sprachnotizen und Entscheidungen auf einem Blatt anheften](topic:voice-notes-and-decisions).

**Redline zur Revision**

- **Senden und beantworten.** Öffnen Sie in der Registerkarte {{ui:Aufgaben}} {{ui:Redline zur Revision}}, tippen Sie die Revision ein, gegen die die Markierungen gelten, und wählen Sie {{ui:Redline-Datei exportieren}}. Sie erhalten eine Datei `.redline.json` mit einem Eintrag pro offener Markierung: Blatt, Position (als Bruchteile des Blatts, damit ein erneutes Plotten in anderer Größe weiterhin passt), Wörter, Autor, Verlauf und Aufgabe. Wer die Änderungen zeichnet, antwortet mit Akzeptiert, Abgelehnt oder Erledigt in einer Datei `.redline-answers.json`. {{ui:Antwortdatei laden…}} gibt jeder Markierung diesen Status und die Notiz des Entwerfers, als ein Rückgängig-Schritt. Siehe [Markierungen als Redline an den Entwerfer senden](topic:redline-to-revision).

**KI-Assistenten**

- **Mehr Werkzeuge.** Ein Assistent, den Sie über CadCraft Studio verbunden haben, kann Aufgaben auflisten (`tasks_list`), eine erstellen oder ändern (`task_set`), die Aufgabe entfernen (`task_clear`), eine gegen eine neuere Revision oder ein Element prüfen (`tasks_check`) und die einfache Liste der Änderungen zwischen zwei offenen Plansätzen lesen (`revisions_changes`). Er bekommt nur die Werkzeuge, die Sie unter dem Schalter Assistenten angehakt haben, und jede Änderung ist ein Rückgängig-Schritt. Siehe [MarkupCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants).

### In jeder App

- **Sprachen.** CadCraft Studio hat jetzt 54 Sprachen. Zehn sind neu: Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Suaheli und Usbekisch. Alle nicht-englischen sind maschinelle Entwürfe, bis ein Muttersprachler sie gelesen hat.
- **Eingabegeräte.** {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Eingabegeräte}} legt fest, was ein Trackpad, die Seitentasten Ihrer Maus, ein Stift, Fingertipps, eine 3D-Maus, ein Game-Controller oder ein MIDI-Controller tut, und zwar für jede App oder nur für diese eine. Bis Sie etwas ändern, funktioniert jedes Gerät wie zuvor. Siehe [Trackpad, 3D-Maus oder Controller verwenden](common:input-devices).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} hat {{ui:Umbrechen}} (der Standard), {{ui:2 Zeilen}} und {{ui:1 Zeile}}, damit die Zeichnung mehr Platz bekommt. Siehe [Bereiche anordnen](common:arrange-panels).
- **Eigenschaftsraster.** Die Stilfelder einer Markierung nutzen das gemeinsame Raster, mit einklappbaren Kategorien sowie Bezeichnungs- und Wertspalten.
- **Probleme-Bereich.** Warnungen der App, etwa eine überfällige Aufgabe, sammeln sich in einem Probleme-Bereich.
- **Live und Erweiterungen.** Live-Sitzungen werden in [Gemeinsam live arbeiten](common:work-together-live) beschrieben; die Liste der Erweiterungen, die Ihrem Konto folgt, steht in [Erweiterungen und Ihre Kontoliste](common:addons-basics).
- **Ihren KI-Assistenten verbinden.** CadCraft Studio ist die Zentrale für Ihren eigenen Assistenten: einmal verbinden für alle acht Apps. Die Apps enthalten keine eigene KI.

### Behoben in 0.8.1

- **Studio kann die Sprache während des Laufs wechseln.** Vorher blieben die Desktop-App und die gepackten Ausgaben auf Englisch. Das ist noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, falls die Sprache nicht wechselt.
- Studio-0.8-Installationen erhalten 0.8.1 über {{ui:Einstellungen}} › {{ui:Aktualisierungen}}.

### Noch nicht in dieser Version

- **Nicht code-signiert.** Die Windows-Installationsprogramme und das macOS-.dmg haben noch keine Signatur. Unter Windows wählen Sie, wenn SmartScreen das Installationsprogramm stoppt, {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}. Auf einem Mac klicken Sie mit der rechten Maustaste auf CadCraft Studio und wählen {{ui:Öffnen}}. Store-Versionen sind auf Eis gelegt.
- **Den KI-Assistenten verbinden ist an manchen Stellen unfertig.** Ein Ein-Klick-Verbinden in Studio, der gehostete Connector für Browser-Assistenten und Ihr eigener API-Schlüssel in Studio sind für diese Version nicht zugesagt. Die Aufgabenschleife wurde getestet, aber noch nicht mit einem echten Assistenten.
- **Aufgabenprüfungen brauchen dieselbe Seitengröße.** Ein Blatt, das in anderer Größe neu geplottet wird, passt nicht, daher schließen sich seine Aufgaben nicht. Blätter werden über die Blattnummer zugeordnet, sonst über die Position auf der Seite.
- **Sprachnotizen sind nur Aufnahmen.** Es gibt kein Transkript, und ein Assistent sieht die Länge, den Autor und die Beschriftung einer Notiz, nicht den Ton. Die Aufnahme wurde mit einem simulierten Mikrofon in einem Headless-Browser getestet; ein echtes Mikrofon an Telefon, Tablet oder Laptop ist noch zu prüfen.
- **Berechnungsblätter und Begründungen in einer PDF** werden in einem privaten Eintrag der Datei gespeichert. Eine ältere MarkupCraft ignoriert diesen Eintrag und verwirft ihn beim nächsten Speichern der Datei. Öffnen und speichern Sie solche Dateien daher mit 0.8 oder neuer.
- **Die Entwerfer-Seite von Redlines.** Dass CadCraft die Redline-Datei liest und beantwortet, ist noch nicht umgesetzt.
- **Andere Sprachen.** Die App-Leiste für Tamil läuft um 528 px über.

Alles Übrige steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet). Zur Vorversion siehe [Neuerungen in 0.7 (früher)](topic:whats-new-0-7).
