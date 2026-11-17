---
title: Markierungen als Redline an den Zeichner senden
summary: Schreiben Sie die offenen Markierungen als Redline-Datei für denjenigen, der die Änderungen zeichnet, und laden Sie dann dessen Antworten, damit jede Markierung Angenommen oder Abgelehnt zeigt.
keywords: Redline, Revision, Zeichner, annehmen, ablehnen, Antworten, cc-redline, Revisionswolke, Markierungen anwenden
from: cb099d04
---

Prüfen ist nur die halbe Arbeit; die Zeichnung muss sich noch ändern. Die Redline-Datei trägt jede offene Markierung zum Zeichner, und dessen Antworten bringen das Ergebnis zurück.

## Senden

1. Öffnen Sie den Reiter {{ui:Aufgaben}} und öffnen Sie {{ui:Redline zur Revision}}.
2. Geben Sie die Revision ein, auf die sich die Markierungen beziehen (zum Beispiel B).
3. Wählen Sie {{ui:Redline-Datei exportieren}}.

Sie erhalten eine `.redline.json`-Datei mit einem Eintrag pro offener Markierung: ihr Blatt, ihre Position (als Bruchteile des Blatts, damit ein Neudruck in anderer Größe weiterhin passt, und in Punkt), ihre Wörter, Autor und Unterhaltung sowie ihre Aufgabe, falls vorhanden. Schreibgeschützte Kommentare anderer Programme, Bilder und Legenden sind nicht enthalten.

## Antworten

Der Zeichner beantwortet jeden Eintrag mit Angenommen, Abgelehnt oder Erledigt, mit einer Notiz, in einer `.redline-answers.json`-Datei. Wählen Sie {{ui:Antwortdatei laden…}} und wählen Sie sie aus: Jede Markierung erhält diesen Status und die Notiz des Zeichners in ihrer Unterhaltung, und eine Aufgabe, deren Markierung angenommen oder erledigt wurde, ist abgeschlossen. Ein Rückgängig-Schritt nimmt alle Antworten zurück.

Das Dateiformat steht in `docs/REDLINE-FORMAT.md`. Die CadCraft-Seite (Lesen des Pakets, Annehmen oder Ablehnen jedes Eintrags, Revisionswolken und das Protokoll) wird separat entwickelt.
