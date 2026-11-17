---
title: MarkupCraft mit einem KI-Assistenten verwenden
summary: Lassen Sie Ihren eigenen KI-Assistenten oder ein Skript die Markierungen eines Satzes auflisten, einfache hinzufügen, deren Status setzen, antworten und die Liste exportieren: Berechtigungen, Verbindung über CadCraft Studio und das Aktivitätsprotokoll.
keywords: KI, Assistent, Agent, MCP, Model Context Protocol, Skript, Automatisierung, Markierungen, Prüfung, Berechtigungen, trennen, Aktivität
from: 095f2977
---

## Was Sie lernen

Wie Sie einen KI-Assistenten (oder ein Skript, das Sie geschrieben haben) mit MarkupCraft arbeiten lassen und entscheiden, worauf er zugreifen darf.

MarkupCraft hat **keine eigene KI** und sendet nichts irgendwohin. Sie bringen den Assistenten mit: jedes Programm, das das Model Context Protocol (MCP) spricht. MarkupCraft gibt ihm nur Werkzeuge, und Sie wählen, welche.

## Einschalten

1. Öffnen Sie {{ui:Einstellungen}} (das Zahnrad in der App-Leiste oder {{key:Mod+,}}) und wechseln Sie zum Reiter {{ui:MarkupCraft}}.
2. Setzen Sie unter {{ui:Assistenten}} den Haken bei **KI-Assistenten und Skripten die Nutzung von MarkupCraft erlauben**. Bis dahin ist es ausgeschaltet.
3. Wählen Sie, was er darf: **Lesen** ist zu Beginn angehakt; aktivieren Sie **Bearbeiten**, **Speichern** oder **Exportieren** nur, wenn Sie sie brauchen.

Werkzeuge außerhalb der angehakten Berechtigungen werden dem Assistenten nicht angeboten; fragt er trotzdem danach, lehnt MarkupCraft ab und schreibt es ins Aktivitätsprotokoll. Den Schalter auszuschalten beendet alle Verbindungen sofort; {{ui:MarkupCraft-Einstellungen zurücksetzen}} schaltet ihn ebenfalls aus.

## Ihren Assistenten verbinden

Assistenten verbinden sich über **CadCraft Studio** auf Ihrem Computer: Studio betreibt einen kleinen Server, den nur dieser Computer erreichen kann, geschützt durch ein Token, das es bei jedem Start erzeugt. Wählen Sie in Studio {{ui:Assistent verbinden}} und kopieren Sie die Adresse und das Token in Ihren Assistenten (Studio zeigt die genauen Einstellungen zum Einfügen). Geben Sie das Token niemals weiter.

:::note
Ein Browser-Tab kann keine Verbindung für einen Assistenten öffnen: In den Browser-Apps hat der Schalter keine Wirkung, bis Sie CadCraft Studio auf Ihrem Computer verwenden.
:::

## Sie behalten die Kontrolle

- **Jede Änderung ist ein Rückgängig-Schritt**, benannt nach dem Assistenten (zum Beispiel „Assistent: cloudrect hinzufügen“). {{key:Mod+Z}} nimmt die letzte Änderung des Assistenten als Ganzes zurück.
- **Sie wissen, wenn einer verbunden ist.** Eine Schaltfläche in der App-Leiste nennt den Assistenten, solange er verbunden ist; klicken Sie darauf, um zu sehen, was er darf, oder um ihn zu **trennen**.
- **Aktivität.** {{ui:Einstellungen}} › {{ui:MarkupCraft}} › {{ui:Assistenten}} › {{ui:Aktivität}} listet jeden Aufruf: wann, welches Werkzeug, erledigt oder abgelehnt. {{ui:Protokoll speichern}} behält eine Kopie.

## Was ein Assistent anfordern kann

| Werkzeug | Berechtigung | Was es tut |
|---|---|---|
| `app_info`, `sheets_list` | Lesen | Die geöffneten Sätze, ihre Blätter und wie viele Markierungen jedes hat |
| `markups_list` | Lesen | Die Markierungen mit Typ, Blatt, Text, Kommentar, Messung, Status, Autor und Antworten, gefiltert nach Blatt, Status, Typ oder Autor |
| `markup_add` | Bearbeiten | Fügt einem Blatt ein Rechteck, eine Wolke, eine Ellipse, ein Textfeld, eine Notiz, eine Linie oder einen Pfeil hinzu |
| `markup_status`, `markup_reply` | Bearbeiten | Setzt den Status einer Markierung (im Verlauf protokolliert, vom Assistenten signiert); fügt einem Verlauf einen Kommentar hinzu |
| `markups_export` | Exportieren | Die CSV oder BCF der Liste {{ui:Markierungen}} mit dem, was die Liste zeigt (ihre Filter, wie Sie sie eingestellt haben); in Studio kann sie die Datei in einen Ordner schreiben, den Sie erlaubt haben |
| `tasks_list` | Lesen | Die Markierungen, die Aufgaben sind: Zuständiger (Person oder Assistent), Fälligkeitstag, Zustand, Verknüpfung, wie sie abgeschlossen wurden. `assignee: "assistant"` listet die Arbeit auf, die auf einen Assistenten wartet |
| `task_set`, `task_clear` | Bearbeiten | Machen eine Markierung zur Aufgabe oder ändern sie (Titel, Zuständiger, Fälligkeit, Zustand, Verknüpfung); entfernen die Aufgabe wieder |
| `tasks_check` | Bearbeiten | Schließt Aufgaben, deren verknüpfter Zeichnungsbereich oder Modellelement sich tatsächlich geändert hat; übergibt die Elementzustände, die aus dem anderen Programm gelesen wurden |
| `revisions_changes` | Lesen | Die einfache Liste der Änderungen zwischen zwei geöffneten Planungssätzen, zum Formulieren in eigenen Worten |
| `pins_list`, `decision_add` | Lesen, Bearbeiten | Sprachnotizen (Länge, Person, Zeitpunkt, Bildunterschrift; nie der Ton, kein Transkript) und Entscheidungen; heftet eine Entscheidung an und ersetzt eine frühere |
| `redline_export`, `redline_answer` | Exportieren, Bearbeiten | Schreibt die Redline-Datei für den Zeichner; übernimmt die Antworten des Zeichners |

Ein Assistent, der eine Markierung hinzufügt, nennt sich selbst als Autor: den Namen, den das Assistenzprogramm sich gibt, gefolgt von „(Assistent)“ oder von „(Assistent für <Ihr Name>)“, sobald Sie Ihren Prüfernamen festgelegt haben. Seine Statusänderungen und Antworten werden auf dieselbe Weise signiert. Jede davon ist ein Rückgängig-Schritt. Das Speichern des markierten PDFs bleibt bei Ihnen: Verwenden Sie wie gewohnt {{ui:Speichern}}.

Ohne MarkupCraft zu öffnen, listet der CadCraft-MCP-Server die Markierungen eines PDFs in einem Ordner, den Sie angeben (`markups_list`), und `cadcraft info Set.pdf` gibt sie in der Befehlszeile aus.

## Wenn etwas nicht funktioniert

- **Der Assistent sieht keine MarkupCraft-Werkzeuge:** Prüfen Sie, ob der Schalter in diesem Fenster eingeschaltet ist und das Fenster in Studio geöffnet ist.
- **„braucht die Berechtigung Bearbeiten“:** Setzen Sie unter {{ui:Assistenten}} den Haken bei **Bearbeiten** und fragen Sie erneut.
- **Fehler „401“ oder „token“:** Das Token hat sich geändert (Studio wurde neu gestartet oder {{ui:Neues Token}}). Kopieren Sie das neue in die Einstellungen des Assistenten.

## Siehe auch

- [Rezepte für KI-Assistenten](common:assistants-recipes): ausgearbeitete Beispiele, jedes mit den Werkzeugen, die es aufruft.
