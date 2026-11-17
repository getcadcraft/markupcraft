---
title: Ausgaben, Revisionen und das Zeichnungs-Änderungsprotokoll
summary: Eine gemeinsame Ausgabenhistorie mit dem Modell der Architektur führen: Ausgaben einlesen, Bauanweisungen, Werkstattzeichnungen und verknüpfte Modelle zu einer Ausgabe erfassen und das Zeichnungs-Änderungsprotokoll lesen.
keywords: ausgabe, revision, revisionen, änderungsprotokoll, zeichnungs-änderungsprotokoll, zeichnungsverzeichnis, bauanweisung, werkstattzeichnung, verknüpftes modell, ausschreibung, bau, ausgabenhistorie, revisionswolke, wolke, markierungssatz
from: e4688f64
---

## Was Sie tun können

Arbeiten Sie mit derselben Ausgabenhistorie wie das übrige Team. Sehen Sie, welche Blätter in welcher Revision herausgegeben wurden, und halten Sie fest, was auf der Baustelle passiert, bei der Ausgabe, zu der es gehört.

## Schritte

1. Öffnen Sie **Ausgaben und Revisionen**.
2. Wählen Sie **Ausgabenhistorie lesen** und die `.issues.json`-Datei, die in BimCraft oder einer anderen App gespeichert wurde. Ihre Ausgaben und Einträge werden hinzugefügt. Nichts wird ersetzt.
3. Wählen Sie **Eintrag hinzufügen** für eine Bauanweisung, eine Werkstattzeichnung, einen Markierungssatz, ein verknüpftes Modell oder eine Notiz. Wählen Sie die Ausgabe, zu der er gehört, und seinen Status. Eine von Ihnen gewählte Datei wird anhand ihres Namens, ihrer Größe und ihres SHA-256-Werts erfasst; die Datei bleibt, wo sie ist.
4. **Zeichnungs-Änderungsprotokoll** zeigt eine Zeile für jedes Blatt und eine Spalte für jede Ausgabe. Eine Revision in Klammern wurde unverändert erneut herausgegeben.
5. **Änderungsprotokoll herunterladen (CSV)** speichert die Ausgaben, die Blatttabelle und die Einträge. **Ausgabenhistorie speichern** schreibt eine Datei, die die anderen Apps lesen.

## Gut zu wissen

- **Ausgewählte Markierungen erfassen** ordnet die ausgewählten Markierungen der neuesten Ausgabe zu. Eine Wolke wird als Revisionswolke mit der Revision dieser Ausgabe erfasst. Wählen Sie neben dem Eintrag **Anzeigen**, um dorthin zu springen.
- **Ausgabe erfassen** gibt Ihre markierten Blätter heraus. **Änderungen seit** zeigt danach, welche Blätter nach dieser Ausgabe markiert wurden.
- Die Historie wird in der markierten PDF gespeichert. Sie ist nicht Teil von Rückgängig.
- Das zweimalige Lesen derselben Datei fügt nichts doppelt hinzu. Enthalten zwei Kopien denselben Eintrag, bleibt der neuere erhalten.
