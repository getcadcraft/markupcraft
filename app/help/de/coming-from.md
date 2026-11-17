---
title: Umstieg von anderer Markup-Software
summary: Wie die Gewohnheiten eines Desktop-PDF-Markup-Programms auf MarkupCraft übertragen werden und welche Unterschiede Menschen überraschen.
keywords: umsteigen, Umstieg, migrieren, vertraut, Desktop-PDF-Markup, Werkzeugkasten, Markierungsliste, Überlagerung, Sitzungen, Profil, Tastenkürzel, Unterschiede
from: c8f323e1
---

Wenn Sie Zeichnungen in Bluebeam Revu prüfen (oder PDFs in einem anderen Desktop-PDF-Programm kommentieren), wird Ihnen das meiste von MarkupCraft vertraut vorkommen: Wolken, Hinweise, ein Werkzeugkasten, eine Markierungsliste, Status mit Antworten, kalibrierte Messungen, Blattüberlagerungen. Der große Unterschied ist der Umgang mit Dateien. Lesen Sie daher den nächsten Abschnitt, auch wenn Sie den Rest überspringen.

## Die fünf wichtigsten Unterschiede

1. **Speichern erzeugt eine neue Datei.** MarkupCraft läuft im Browser und kann die PDF auf Ihrer Festplatte nicht überschreiben. {{ui:Speichern}} lädt „<name> (marked up).pdf“ herunter, und das Original bleibt unverändert. Öffnen Sie beim nächsten Mal die Kopie „(marked up)“ und räumen Sie alte Kopien selbst auf.
2. **Das PDF wird beim Speichern gesichert.** Bis dahin hält eine Wiederherstellungskopie in diesem Browser Ihre Markierungen bei einem Absturz oder geschlossenem Tab, und MarkupCraft bietet sie beim nächsten Mal an. Es ist ein Sicherheitsnetz: Speichern Sie das PDF, um die Prüfung zu behalten.
3. **Ihr Profil liegt im Browser.** Ihr Autorname, Ihre Werkzeugeinstellungen und Ihr Werkzeugkasten werden in diesem Browser auf diesem Computer gespeichert. Ein anderer Browser oder Computer beginnt neu, und das Löschen der Website-Daten entfernt sie. Exportieren Sie Ihren Werkzeugkasten als Sicherung. Siehe [Was in diesem Browser gespeichert bleibt](topic:browser-storage).
4. **Noch keine gemeinsamen Sitzungen.** Es gibt keine gemeinsame Live-Prüfsitzung und kein Cloud-Projekt. Die Prüfung reist im PDF: speichern, die Kopie senden, die nächste Person antwortet und speichert.
5. **Der Maßstab gilt je Blatt, und nur je Blatt.** Es gibt keine Ansichtsfenster innerhalb eines Blatts und kein „diesen Maßstab auf alle Seiten anwenden“. Kalibrieren Sie jedes Blatt, das Sie messen.

## Gewohnheit für Gewohnheit

| Das kennen Sie | In MarkupCraft |
|---|---|
| Miniaturansichten-Bereich, Seitenbezeichnungen | {{ui:Blätter}} links. Die Namen stammen aus den Seitenbezeichnungen oder werden aus dem Schriftfeld gelesen; korrigieren Sie sie mit {{ui:Blatt umbenennen}}. |
| Mehrere PDFs als Satz öffnen | Öffnen Sie sie alle auf einmal; sie werden zu einer Liste. Es wird keine Satzdatei gespeichert: Öffnen Sie beim nächsten Mal dieselben PDFs. |
| Werkzeugkasten mit Werkzeugsätzen | Registerkarte {{ui:Werkzeuge}}: ein Kasten je Browser, gespeicherte Werkzeuge mit Stil und Betreff. Teilen über {{ui:Exportieren}} und {{ui:Importieren}} als JSON-Datei. Werkzeugsatzdateien anderer Programme lassen sich nicht importieren. |
| Eigenschaftsbereich | Registerkarte {{ui:Eigenschaften}}: Status, Betreff, Kommentar, Stil, Antworten und Mängelposition an einer Stelle. |
| Markierungsliste mit Spalten | Registerkarte {{ui:Markierungen}} mit Filtern nach Blatt, Autor, Status und Art. Export als CSV oder BCF. Noch keine eigenen Spalten und noch keine Zusammenfassung für PDF oder Arbeitsmappe. |
| Status und Prüfzustand | {{ui:Status}}: Offen, Akzeptiert, Abgelehnt, Abgeschlossen. Keine eigenen Statussätze. Gespeichert als Standard-Prüfzustände. |
| Antworten auf eine Markierung | Der Verlauf „Antworten“ in {{ui:Eigenschaften}}, mit protokollierten Statusänderungen. Eine gesendete Antwort kann nicht bearbeitet werden. |
| Kalibrieren, dann Länge, Fläche, Zählen | {{ui:Kalibrieren}}, {{ui:Länge}} ({{key:M}}), {{ui:Fläche}} ({{key:Q}}, ergibt Fläche und Umfang), {{ui:Zählen}} ({{key:U}}). Noch kein Winkel, Radius, Volumen, Polylänge oder Aussparungen. |
| Seiten überlagern | Registerkarte {{ui:Vergleichen}}: Rot für alt, Blau für neu, Ausrichtung über zwei Punkte. Kein automatisches Umwolken von „Dokumente vergleichen“. |
| Stempel | {{ui:Stempel}} mit sechs eingebauten Stempeln und eigenem Text, unterschrieben mit Ihrem Namen und dem Datum. Noch keine Bild- oder Unterschriftsstempel. |
| Mängel- oder Vorgangsverfolgung | Registerkarte {{ui:Mängelliste}}: nummerierte Positionen mit Zuständigem, Fälligkeitsdatum und Status; CSV-Export. |
| Live-Zusammenarbeitssitzung | Noch nicht verfügbar. Geben Sie das gespeicherte PDF weiter. |
| Reduzieren | Noch nicht umgesetzt. Markierungen bleiben als Kommentare, die andere Betrachter anzeigen und drucken können. |
| Ebenen für Markierungen | Noch nicht umgesetzt. Verwenden Sie Betreffe, Autoren und die Filter der Liste, um Kommentare zu ordnen. |
| Hyperlinks zwischen Blättern | Noch nicht umgesetzt. |
| Leertaste zum Verschieben, Mausrad zum Zoomen | Gleich: Halten Sie {{key:Space}} und ziehen Sie; das Mausrad zoomt am Zeiger. Das Mausrad scrollt die Seite nie. |

## Tasten, die sich unterscheiden

Viele Einzelbuchstaben-Tasten sind so, wie Sie es erwarten, aber prüfen Sie diese, bevor Ihre Finger es für Sie tun:

- {{key:K}} ist {{ui:Hinweis}}, und {{key:Q}} ist {{ui:Fläche}}. Wenn Sie an Q für Hinweise gewöhnt sind, startet hier eine Fläche.
- {{key:C}} ist das Kastenwerkzeug {{ui:Wolke}}; {{key:Shift+C}} ist {{ui:Freie Wolke}}.
- {{key:M}} ist {{ui:Länge}}, {{key:U}} ist {{ui:Zählen}}, {{key:Y}} ist {{ui:Polylinie}}, {{key:G}} ist {{ui:Polygon}}, {{key:I}} ist {{ui:Hervorhebung}}.
- {{key:Mod+D}} dupliziert die Auswahl (statt des Lesezeichens des Browsers).
- {{key:Mod+Plus}} und {{key:Mod+Minus}} zoomen das Blatt, nicht die Browserseite.
- Jede Taste kann geändert werden: siehe unten.

:::tip
Wenn Ihre Finger Bluebeam Revu kennen, wählen Sie den Menüstil {{ui:PDF-Prüfung}} unter {{ui:Einstellungen}} › {{ui:MarkupCraft}} › {{ui:Menüs, Tasten und Maus}}: eine Menüleiste (Datei, Bearbeiten, Ansicht, Dokument, Markierung, Messen, Fenster) über einer Reihe von Prüfwerkzeugen, {{key:Q}} für einen Hinweis, {{key:H}} für den Textmarker, {{key:N}} für ein Polygon und die Messungen auf {{key:Alt+Shift}} mit einem Buchstaben. Auch dort kann jede Taste geändert werden. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).
:::

Die vollständige Liste steht unter [Tastatur und Maus](topic:keyboard).

## Dinge, die anders funktionieren, als Sie vielleicht erwarten

- **Werkzeuge bleiben aktiv.** Nach einer Wolke zeichnen Sie weiter Wolken. {{key:Esc}} einmal hebt die Auswahl auf, zweimal kehrt zu {{ui:Auswahl}} zurück.
- **Text und Hinweise brauchen Text.** Wenn Sie nichts eingeben und abschließen, wird keine Markierung hinzugefügt. Notizen bleiben leer.
- **Messungen brauchen zuerst einen Maßstab.** {{ui:Länge}} und {{ui:Fläche}} schalten auf einem unkalibrierten Blatt auf {{ui:Kalibrieren}} um und kehren danach zurück.
- **Kommentare aus anderen Programmen.** Rechtecke, Ellipsen, Linien, Polylinien, Polygone, Tinte, Textfelder und Haftnotizen, die anderswo erstellt wurden, werden zu bearbeitbaren MarkupCraft-Markierungen und beim Speichern in MarkupCraft-Art neu geschrieben (ihr Aussehen kann sich leicht ändern). Texthervorhebungen, Stempel anderer Programme und andere Sonderarten bleiben schreibgeschützt: Sie können darauf antworten, sie aber nicht ändern.
- **Zeichen außerhalb der westeuropäischen Buchstaben** werden im gespeicherten PDF als „?“ gedruckt. Siehe [Das markierte PDF speichern](topic:save-the-marked-up-pdf).
- **Stempeldaten** verwenden UTC, sodass ein Stempel, der spätabends in Amerika erstellt wird, das Datum von morgen zeigen kann.
- **Messungen werden übernommen** als Standard-Messkommentare, und jedes kalibrierte Blatt behält seinen Maßstab, sodass ein Programm, das PDF-Messungen liest, sie meist anzeigen kann. Das genaue Verhalten hängt von diesem Programm ab.

## Beides verwenden

Sie können hin und her wechseln. Kommentare aus anderen Programmen öffnen sich in MarkupCraft, und das PDF „(marked up)“ öffnet sich in anderen PDF-Programmen mit allen Markierungen, Antworten und Status sichtbar. Was nur MarkupCraft zurücklesen kann (Zuständiger und Fälligkeitsdatum des Mängels, Status der Position), wird für MarkupCraft in der Datei gespeichert.
