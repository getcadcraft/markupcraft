---
title: Neuerungen in 0.9 (früher)
summary: Notizen und eine Ablagefläche, die nie gedruckt werden, verschlüsselte private Notizen und eine bereinigte Kopie für den Kunden, Stapelverknüpfungen für einen ganzen Zeichnungssatz, ein Bogenwerkzeug mit zehn Methoden, das Folgen eines anderen Prüfers in Live und eine Korrektur, nach der gelöschte Markierungen nicht mehr in der gespeicherten PDF bleiben.
keywords: Neuerungen 0.9, frühere Version, Neuerungen, Was ist neu, 0.9, Versionshinweise, Änderungsprotokoll, Notizen, Ablagefläche, private Notizen, Passphrase, verschlüsselt, Notizen ausblenden, Notizen anzeigen, bereinigte Kopie, Momentaufnahme, Stapelverknüpfungen, Blattverweise, Blätter verknüpfen, Schriftfeld, Blattnummer, Nachtrag, umnummerieren, PDF-Link, Bogen, Bogenmethoden, Dreipunktbogen, Radius, folgen, Folge mir, Live, Klassenansicht, Personenliste, gelöschte Markierung, Tooltips, Registerkartentitel, Neuerungen, Was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Aufgabe, Aufgaben, Zuständige Person, Fälligkeitstag, überfällig, Jetzt prüfen, was sich geändert hat, Revisionen, Vergleichen, Sprachnotiz, Entscheidung, Redline, Antwortdatei, Zeichner, Assistent, mcp, Probleme, Sprachen, Eingabegeräte, Trackpad, Symbolleistenzeilen, Eigenschaftsraster, Aktualisierung
from: aa3dfeb8
---

Das hat sich in MarkupCraft 0.9 gegenüber 0.8.1 geändert. Die Grundidee: Ihre Arbeitsnotizen bleiben aus dem Dokument heraus, das der Kunde erhält, und ein ganzer Zeichnungssatz kann in einem Durchgang verknüpft werden.

## Neu

### Notizen, Ablagefläche und private Notizen

- **Die Ablagefläche.** Die Fläche um jedes Blatt ist ein Arbeitstisch: Alles, was neben dem Blatt gezeichnet, getippt oder eingefügt wird, ist eine Notiz und wird nie gedruckt. Wählen Sie {{ui:Ablagefläche anzeigen}}, um für mehr Platz herauszuzoomen, oder {{ui:Momentaufnahme auf die Ablagefläche}}, ziehen Sie einen Rahmen und wählen Sie dann {{ui:Auf die Ablagefläche}}, um ein Bild eines Teils der Zeichnung neben dem Blatt abzulegen. Eine Momentaufnahme ist ein Bild und ändert sich nicht, wenn sich das Blatt ändert. Siehe [Notizen, Ablagefläche und private Notizen](topic:notes-and-pasteboard).
- **Notizen ein- und ausblenden.** Jede Markierung kann eine Notiz sein: Setzen Sie {{ui:Neue Markierungen sind}} auf der Registerkarte {{ui:Notizen}} oder {{ui:Diese Markierung ist}} unter {{ui:Eigenschaften}}. {{key:Shift+H}} oder der Schalter {{ui:Notizen}} unter dem Blatt blendet alle Notizen auf einmal ein oder aus. Notizen werden beim Drucken, bei reduzierten Kopien, in Listen und Exporten weggelassen, und andere PDF-Leser zeigen sie nicht an. Ihre gespeicherte PDF behält sie für das nächste Öffnen in MarkupCraft.
- **Private Notizen.** Wählen Sie {{ui:Passphrase festlegen}} und machen Sie dann eine Markierung zu {{ui:Eine private Notiz}}. Sie wird mit einer Passphrase von mindestens 10 Zeichen in der Datei verschlüsselt, und es gibt keine Wiederherstellung: Niemand, auch wir nicht, kann sie ohne die Passphrase öffnen. {{ui:Sperren}} verbirgt private Notizen; {{ui:Auf diesem Gerät entsperrt bleiben}} ist standardmäßig aus.
- **Bereinigte Kopie speichern.** {{ui:Bereinigte Kopie speichern}} entfernt alle Notizen, privaten Notizen und alles auf der Ablagefläche. Verwenden Sie sie für die Datei, die an den Kunden geht.

### Ein ganzes Set verknüpfen

- **Stapelverknüpfungen.** Wählen Sie {{ui:Seiten}} › {{ui:Stapelverknüpfungen…}} oder {{ui:Blattverweise verknüpfen…}} unter {{ui:Text suchen}} im Bereich {{ui:Blätter}}. Schritt 1 listet Nummer und Namen jedes Blattes, wie sie aus dem Schriftfeld gelesen wurden; korrigieren Sie falsche Angaben. Schritt 2 listet die gefundenen Verweise, zum Beispiel `3/A-501` oder `DETAIL 2 ON A-501`. {{ui:Wird verknüpft}} zeigt Blatt und Ansicht für jeden an, {{ui:Nicht verknüpft}} zeigt Nummern, zu denen kein geöffnetes Blatt existiert, und {{ui:Verknüpfungen erstellen}} erstellt alle in einem einzigen Rückgängig-Schritt. Führen Sie es nach einem Nachtrag oder einer Umnummerierung erneut aus; von Hand erstellte Verknüpfungen werden nie geändert. Eine Verknüpfung mit Ansicht wird als PDF-Link gespeichert, sodass andere Leser auch das Detail öffnen. Siehe [Blattverknüpfungen](topic:sheet-links).

### Zeichnen

- **Bogen, zehn Methoden.** Das Werkzeug {{ui:Bogen}} ({{key:O}}) hat jetzt ein Feld {{ui:Bogenmethode}} über dem Blatt mit zehn Arten, einen Bogen zu zeichnen. Winkel, Länge, Radius und Richtung können angeklickt oder eingegeben werden. Siehe [Einen Bogen auf zehn Arten zeichnen](topic:draw-an-arc).

### Gemeinsam arbeiten

- **Einem Prüfer folgen.** Wählen Sie in einer Live-Sitzung neben dem Namen einer Person {{ui:Folgen}}, dann bewegt sich Ihre Ansicht mit ihrer Ansicht mit. Wenn Sie selbst verschieben oder zoomen, hört das Folgen auf. Der Host kann {{ui:Alle bitten, mir zu folgen}} wählen. Die Personenliste zeigt die Farbe jeder Person, ihren Namen, das Blatt, auf dem sie ist, und wann ihre letzte Änderung war. Siehe [In einer Live-Sitzung einem anderen Prüfer folgen](topic:follow-in-live).

## In allen Apps

- Tooltips sind Bootstrap-Tooltips, der Starttipp kann geschlossen werden, Registerkartenleisten scrollen, wenn sie überlaufen, und Browser-Registerkartentitel lauten `<document> — MarkupCraft | CadCraft`.
- Ein Bereich mit mehreren Abschnitten öffnet einen und schließt die anderen (ein Schloss neben dem Pfeil hält einen offen); ein Schalter in den Einstellungen schaltet das aus.
- Jede App startet mit einer Standardsammlung von Bibliotheksobjekten.
- Gewichts- und Temperatureinheiten sind in den Einstellungen für Einheiten verfügbar.

## Behoben

- **Entfernte Markierungen bleiben in der gespeicherten PDF nicht mehr lesbar.** Beim Speichern wurde eine gelöschte oder umgeschriebene PDF-Anmerkung zwar von ihrer Seite genommen, das Objekt mit seinem Text blieb aber in der Datei. Beim Speichern werden diese Objekte jetzt gelöscht. Dateien, die von früheren Versionen gespeichert wurden, enthalten sie noch, bis Sie sie erneut speichern.

## Ehrliche Grenzen

- Stapelverknüpfungen wurden an eigenen Testsätzen geprüft. Echte Sätze zeichnen Blasen auf viele Arten, daher können bei einem Kundensatz einige Ansichten übersehen werden. Gescannte Blätter brauchen zuerst {{ui:Text lesen (OCR)…}}.
- Notizen, private Notizen und die Ablagefläche wurden in einem Headless-Browser und an eigenen Dateien geprüft, nicht mit einem großen echten Vektorsatz und nicht in einer echten Live-Sitzung mit zwei Personen. Das Ändern einer Passphrase ist nicht umgesetzt. Versionen vor 0.9 zeigen keine Notizen.
- Die Klassenansicht ist die Personenliste; sie wurde nicht mit einer echten Lehrkraft und echten Lernenden getestet.
- Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine Person, für die diese Sprache Muttersprache ist, sie liest.
- Windows-Installer sind nicht code-signiert (Weitere Informationen, dann Trotzdem ausführen); das macOS-Disk-Image ist nicht notarisiert (Rechtsklick, dann Öffnen).

## Früher: 0.8 und 0.8.1

Das hat sich in MarkupCraft 0.8 und 0.8.1 gegenüber 0.7 geändert. Das große Neue: Eine Markierung kann eine Aufgabe sein, die jemand erledigt oder Ihr eigener Assistent, und sie schließt sich selbst, wenn sich die Zeichnung wirklich ändert.

### Neu

**Markierungen, die handeln**

- **Eine Markierung zur Aufgabe machen.** Wählen Sie eine oder mehrere Markierungen, öffnen Sie die Registerkarte {{ui:Aufgaben}} und wählen Sie {{ui:Auswahl zur Aufgabe machen}}. Eine Aufgabe hat einen Titel, eine Person oder Ihren verbundenen Assistenten, der sie erledigt, ein optionales Fälligkeitsdatum und einen Zustand; sie behält ihren Platz auf dem Blatt und ihren Verlauf. Siehe [Eine Markierung zur Aufgabe machen](topic:markups-that-act).
- **Aufgaben, die sich selbst schließen.** Eine Aufgabe kann den Bereich der Zeichnung innerhalb ihrer Markierung beobachten. Öffnen Sie eine neuere Revision des Blattes und wählen Sie {{ui:Jetzt prüfen}}: Haben sich die Linien in diesem Bereich um mehr als eine Haaresbreite geändert, wird die Aufgabe als Erledigt markiert, ihre Markierung wird Erledigt, und eine Notiz im Verlauf sagt, was sich geändert hat. Ein neuer Datumsstempel oder Linien, die sich um weniger als 1.5 Punkt bewegt haben, zählen nicht. Eine Aufgabe kann stattdessen ein Modellelement beobachten: Ihr Assistent meldet das Element mit `tasks_check`, und eine spätere, abweichende Meldung oder ein gelöschtes Element schließt die Aufgabe. Ein Rückgängig-Schritt öffnet sie wieder.
- **Die Arbeit finden.** Filtern Sie die Liste {{ui:Aufgaben}} nach Zustand und danach, für wen sie ist, einschließlich {{ui:Überfällig}}. Wählen Sie {{ui:Zugewiesen an}}, dann {{ui:Assistent}}, um zu sehen, was auf Ihren Assistenten wartet. Eine Aufgabe nach ihrem Fälligkeitstag erscheint als Warnung im Bereich Probleme. {{ui:CSV}} exportiert die Liste. Aufgaben werden mit der Markierung in der PDF gespeichert und reisen wie andere Markierungseigenschaften über Live.

**Was sich geändert hat, als einfache Liste**

- **Änderungen auflisten.** Öffnen Sie die Registerkarte {{ui:Vergleichen}}, dann {{ui:Ganzen Satz vergleichen}}, wählen Sie die frühere und die spätere Datei und wählen Sie {{ui:Änderungen auflisten}}. Die Liste beginnt mit einer Anzahl und behandelt dann jedes geänderte Blatt, die größte Änderung zuerst: wo auf dem Blatt, wie groß (in echten Einheiten sowie in Papierzoll auf einem kalibrierten Blatt), ob Linien hinzugefügt oder entfernt wurden, wie viele Markierungen dort liegen und welche Wörter erschienen oder verschwunden sind. {{ui:Liste kopieren}} legt sie in die Zwischenablage, und {{ui:CSV}} schreibt eine Zeile pro Änderung. Siehe [Änderungen zwischen Revisionen als Liste anzeigen](topic:what-changed-in-words).

**Sprachnotizen und Entscheidungen**

- **Sprachnotizen.** Wählen Sie auf der Registerkarte {{ui:Notizen}} {{ui:Sprachnotiz aufnehmen}}, dann {{ui:Aufnahme beenden}}; Aufnahmen enden nach zwei Minuten von selbst. Die Notiz wird in der Mitte des Blattes angeheftet, Sie ziehen sie an ihren Platz und tippen eine Bildunterschrift unter {{ui:Eigenschaften}}, und {{ui:Abspielen}} in der Liste spielt sie ab. Die Aufnahme wird in der PDF gespeichert.
- **Entscheidungen.** {{ui:Entscheidung anheften}} schreibt ein oder zwei Sätze auf das Blatt. Ersetzt sie eine frühere Entscheidung, wählen Sie diese unter {{ui:Sie ersetzt}}: Die alte bleibt, wird als Ersetzt markiert und verweist auf die neue. Ein Rückgängig-Schritt nimmt sie zurück. Siehe [Sprachnotizen und Entscheidungen auf einem Blatt anheften](topic:voice-notes-and-decisions).

**Redline zur Revision**

- **Senden und beantworten.** Öffnen Sie auf der Registerkarte {{ui:Aufgaben}} {{ui:Redline zur Revision}}, geben Sie die Revision ein, auf die sich die Markierungen beziehen, und wählen Sie {{ui:Redline-Datei exportieren}}. Sie erhalten eine Datei `.redline.json` mit einem Eintrag pro offener Markierung: Blatt, Position (als Anteile des Blattes, damit ein neuer Druck in anderer Größe weiterhin passt), Wörter, Autor, Verlauf und deren Aufgabe. Wer die Änderungen zeichnet, antwortet mit Akzeptiert, Abgelehnt oder Erledigt in einer Datei `.redline-answers.json`. {{ui:Antwortdatei laden…}} gibt jeder Markierung diesen Status und die Notiz des Zeichners, als ein einziger Rückgängig-Schritt. Siehe [Markierungen als Redline an den Zeichner senden](topic:redline-to-revision).

**KI-Assistenten**

- **Mehr Werkzeuge.** Ein Assistent, den Sie über CadCraft Studio verbunden haben, kann Aufgaben auflisten (`tasks_list`), eine erstellen oder ändern (`task_set`), die Aufgabe entfernen (`task_clear`), eine gegen eine neuere Revision oder ein Element prüfen (`tasks_check`) und die einfache Liste der Änderungen zwischen zwei geöffneten Planmappen lesen (`revisions_changes`). Er bekommt nur die Werkzeuge, die Sie unter dem Schalter Assistenten angekreuzt haben, und jede Änderung ist ein Rückgängig-Schritt. Siehe [MarkupCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants).

### In allen Apps

- **Sprachen.** CadCraft Studio hat jetzt 54 Sprachen. Zehn sind neu: Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Suaheli und Usbekisch. Alle nicht englischen sind maschinelle Entwürfe, bis eine Person, für die diese Sprache Muttersprache ist, sie liest.
- **Eingabegeräte.** {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Eingabegeräte}} legt fest, was ein Trackpad, die Seitentasten Ihrer Maus, ein Stift, Fingertipps, eine 3D-Maus, ein Game-Controller oder ein MIDI-Controller tut, für alle Apps oder nur für diese eine. Solange Sie nichts ändern, funktioniert jedes Gerät wie bisher. Siehe [Trackpad, 3D-Maus oder Controller verwenden](common:input-devices).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} hat {{ui:Umbrechen}} (Standard), {{ui:2 Zeilen}} und {{ui:1 Zeile}}, damit die Zeichnung mehr Platz bekommt. Siehe [Bereiche anordnen](common:arrange-panels).
- **Eigenschaftsraster.** Die Stilfelder einer Markierung verwenden das gemeinsame Raster mit einklappbaren Kategorien sowie Bezeichnungs- und Wertspalten.
- **Bereich Probleme.** Warnungen der App, wie eine überfällige Aufgabe, sammeln sich in einem Bereich Probleme.
- **Live und Add-ons.** Live-Sitzungen werden in [Live gemeinsam arbeiten](common:work-together-live) beschrieben; die Add-on-Liste, die Ihrem Konto folgt, steht in [Add-ons und Ihre Kontoliste](common:addons-basics).
- **Verbinden Sie Ihre KI.** CadCraft Studio ist die Zentrale für Ihren eigenen Assistenten: einmal verbinden für alle acht Apps. Die Apps enthalten keine eigene KI.

### In 0.8.1 behoben

- **Studio kann die Sprache während des Betriebs wechseln.** Vorher blieben die Desktop-App und die gepackten Ausgaben auf Englisch. Das ist noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, wenn die Sprache nicht wechselt.
- Studio-0.8-Installationen erhalten 0.8.1 über {{ui:Einstellungen}} › {{ui:Aktualisierungen}}.

### Noch nicht in dieser Version

- **Nicht code-signiert.** Die Windows-Installer und das macOS-.dmg haben noch keine Signatur. Wenn SmartScreen unter Windows den Installer stoppt, wählen Sie {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}. Auf dem Mac klicken Sie CadCraft Studio mit der rechten Maustaste an und wählen {{ui:Öffnen}}. Store-Versionen sind zurückgestellt.
- **Das Verbinden Ihrer KI ist an manchen Stellen unfertig.** Das Verbinden mit einem Klick in Studio, der gehostete Connector für Browser-Assistenten und Ihr eigener API-Schlüssel in Studio sind für diese Version nicht zugesagt. Die Aufgabenschleife wurde getestet, aber noch nicht mit einem echten Assistenten.
- **Aufgabenprüfungen brauchen dieselbe Seitengröße.** Ein in anderer Größe neu gedrucktes Blatt passt nicht, daher schließen sich seine Aufgaben nicht. Blätter werden über die Blattnummer gepaart, sonst über ihre Position in der Datei.
- **Sprachnotizen sind nur Aufnahmen.** Es gibt kein Transkript, und ein Assistent sieht Länge, Autor und Bildunterschrift einer Notiz, nicht den Ton. Die Aufnahme wurde mit einem simulierten Mikrofon in einem Headless-Browser getestet; ein echtes Mikrofon auf Telefon, Tablet oder Laptop ist noch zu prüfen.
- **Berechnungsblätter und Gründe in einer PDF** werden in einem privaten Eintrag der Datei gehalten. Eine ältere MarkupCraft-Version ignoriert diesen Eintrag und entfernt ihn beim nächsten Speichern der Datei. Öffnen und speichern Sie solche Dateien daher mit 0.8 oder neuer.
- **Die Seite des Zeichners bei Redlines.** Dass CadCraft die Redline-Datei liest und beantwortet, ist noch nicht umgesetzt.
- **Andere Sprachen.** Die App-Leiste für Tamil läuft um 528 px über.

Alles Weitere steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet). Zur Vorversion siehe [Neuerungen in 0.7](topic:whats-new-0-7).
