---
title: BCF-Grundlagen
summary: Was ein BCF-Export aus MarkupCraft enthält, wie Sie ihn mit BIM-Koordinationswerkzeugen verwenden und welche Grenzen er hat.
keywords: bcf, bcfzip, BIM Collaboration Format, Themen, Koordination, Kollision, Topics, Blickpunkt, Momentaufnahme, openbim, buildingsmart, Themen exportieren
from: 0de26175
---

BCF (BIM Collaboration Format) ist ein offenes Dateiformat, um Themen zwischen BIM-Werkzeugen auszutauschen. Viele Programme zur Modellkoordination und Modellerstellung können eine `.bcfzip`-Datei als Liste von Themen importieren. MarkupCraft schreibt **BCF 2.1**.

## Erstellen

1. Öffnen Sie die Registerkarte {{ui:Markierungen}}.
2. Filtern Sie die Liste nach dem, was Sie senden möchten, zum Beispiel {{ui:Status}} „Offen“. Nur die aufgelisteten Markierungen werden exportiert.
3. Wählen Sie {{ui:BCF}}.
4. Warten Sie, während für jede Markierung eine Momentaufnahme erstellt wird („Momentaufnahmen für BCF werden erstellt (5 von 20)…“).

Ergebnis: „<name> markups.bcfzip“ wird heruntergeladen, und die Statusleiste zeigt an, wie viele Themen sie enthält und wie groß die Datei ist.

## Inhalt

Jede Markierung wird zu einem **Thema**:

| Themenfeld | Gefüllt mit |
|---|---|
| Titel | Nummer der Mängelliste, Gegenstand und Blatt, zum Beispiel „#4 Revisionswolke auf A-101 — Grundriss“ |
| Typ | Die Art der Markierung (Revisionswolke, Hinweisbeschriftung, Länge …) |
| Status | Offen, Akzeptiert, Abgelehnt oder Erledigt |
| Etiketten | Die Art der Markierung und das Blatt |
| Autor und Datum | Der Autor der Markierung sowie das Erstellungs- und Änderungsdatum |
| Zugewiesen an, Fälligkeitsdatum | Aus dem zugehörigen Mängelpunkt, falls vorhanden |
| Beschreibung | Ihr Text oder Stempeltext, gemessener Wert, Kommentar sowie Blatt und Datei |
| Kommentare | Einer pro Antwort, mit Autor und Datum |
| Momentaufnahme | Ein Bild der Markierung auf ihrem Teil des Blattes |
| Blickpunkt | Eine Draufsicht auf die Stelle der Markierung auf dem Blatt |

Wenn Sie dieselbe Markierung erneut exportieren, erhält sie dieselbe Thema-ID. So kann ein Werkzeug, das BCF importiert, sie als dasselbe Problem erkennen.

## Was beim Importieren zurückkommt

{{ui:BCF importieren}} liest BCF-2.0-, 2.1- und 3.0-Dateien (geprüft an den 19 offiziellen buildingSMART-3.0-Testdateien: jedes Thema wurde gelesen, die Kommentare der drei Themen mit Text ebenfalls). Bei einem Thema, das von Ihnen stammt (gleiche Thema-ID), fügt er die neuen Kommentare als Antworten hinzu und übernimmt den neuen Status. Jedes andere Thema wird zu einer Notiz auf dem Blatt, dessen Label oder Dateiname es nennt, sonst auf dem gerade geöffneten Blatt. Titel, Beschreibung, zugewiesene Person und Fälligkeitsdatum werden zum Text der Notiz, und ihre Kommentare werden zu Antworten.

| Im BCF-Thema | In MarkupCraft |
|---|---|
| Titel, Beschreibung, zugewiesene Person, Fälligkeitsdatum | Der Text der Notiz |
| Kommentare mit Text | Antworten |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done zählen als Completed) | Der Status der Markierung |
| Autor und Erstellungsdatum | Autor und Datum der Notiz |
| Kameraposition | Eine Stelle auf dem Blatt, nur bei einem Thema, das über Label oder Dateiname an ein Blatt gebunden ist |
| Modellauswahl, ausgeblendete Teile, Schnittebenen, Momentaufnahmen | Nicht erhalten: Ein Blatt hat kein Modell, in dem sie angezeigt werden könnten |

## Wissenswerte Grenzen

- **Ein Blatt ist kein Modell.** Der Blickpunkt verweist auf die Stelle der Markierung auf dem Papier, gemessen in Metern Papier. Er führt ein BIM-Werkzeug nicht zu einer Stelle im Modell. Nutzen Sie die Momentaufnahme und den Blattnamen, um die Stelle zu finden.
- **Status und Typen sind die von MarkupCraft** (Offen, Akzeptiert, Abgelehnt, Erledigt; Revisionswolke, Hinweisbeschriftung …). Die Datei deklariert sie, wie BCF es erlaubt, aber ein Werkzeug mit eigenen festen Listen kann sie zuordnen oder ignorieren.
- **Der Import bringt Kommentare, keine Modellansichten.** {{ui:BCF importieren}} fügt den exportierten Markierungen Antworten und Status hinzu und erstellt Notizen zu anderen Themen; eine Modellkamera kann er nicht anzeigen. Siehe [Markierungsliste und Export](topic:markups-list-and-export#import-bcf).
- Die Rücksendung der Markierungen als PDF ist bei Zeichnungsprüfungen oft einfacher. BCF dient dazu, Kommentare zu Zeichnungen in einen Ablauf der Modellkoordination zu bringen.
