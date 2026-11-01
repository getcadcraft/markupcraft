---
title: Erste Schritte mit MarkupCraft
summary: Einen Plansatz öffnen, die erste Wolke und Hinweisbeschriftung auf ein Blatt setzen und eine markierte Kopie speichern.
keywords: Start, erste Schritte, PDF öffnen, Prüfung, Markierung, Redline, roter Stift, Plansatz, Tutorial, Schnellstart
from: 0b1aae4e
---

MarkupCraft dient der Planprüfung: Sie öffnen PDF-Plansätze, markieren sie mit Wolken, Hinweisbeschriftungen, Text, Stempeln und Messungen, verfolgen den Status jedes Kommentars und speichern eine Kopie des PDFs, die jeder PDF-Betrachter anzeigen kann.

Es läuft in Ihrem Webbrowser. Ihre PDFs werden auf Ihrem eigenen Computer geöffnet und **nie hochgeladen**. Beim Speichern wird eine neue Kopie heruntergeladen; Ihre Originaldatei bleibt unverändert.

:::note
MarkupCraft ist in Entwicklung. Die Hilfe beschreibt den Stand, den Sie gerade nutzen. Was noch nicht vorhanden ist, steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet).
:::

## Was Sie brauchen

- Ein aktuelles Chrome, Edge, Firefox oder Safari auf einem Mac-, Windows- oder Linux-Computer oder Safari oder Chrome auf einem iPad. Siehe [Browser und Computer](common:browsers).
- Eine oder mehrere PDF-Dateien. Ein ganzer Plansatz kann ein PDF oder viele sein.
- Am bequemsten ist eine Maus mit Rad. Ein Trackpad funktioniert ebenso wie ein Touchscreen (siehe [Prüfen auf dem iPad oder Touchscreen](topic:review-on-a-tablet)).

## Ihre erste Prüfung in zehn Schritten

1. Öffnen Sie MarkupCraft in Ihrem Browser. In der Mitte des Bildschirms steht „Einen Plansatz öffnen“.
2. Wählen Sie {{ui:PDFs öffnen}} (oder {{ui:Öffnen}} am linken Ende der Symbolleiste oder drücken Sie {{key:Mod+O}}), wählen Sie ein oder mehrere PDFs und bestätigen Sie.
   Sie können PDFs auch aus {{pick:mac=dem Finder|windows=dem Datei-Explorer|linux=Ihrem Dateimanager}} ziehen und auf dem Blattbereich ablegen.
   Beim ersten Mal zeigt die Statusleiste unten „PDF-Leser wird geladen…“. Danach wird jede Seite zu einem Blatt in der Liste {{ui:Blätter}} links, und das erste Blatt füllt die Mitte.
3. Klicken Sie in der Liste auf ein Blatt, um es anzuzeigen. Mit dem Mausrad über dem Blatt zoomen Sie dort hinein, wo der Zeiger steht.
4. Wählen Sie {{ui:Wolke}} in der Gruppe {{ui:Revision}} der Symbolleiste (oder drücken Sie {{key:C}}).
   Wenn Sie zum ersten Mal ein Zeichenwerkzeug wählen, fragt MarkupCraft nach Ihrem Namen. Geben Sie ihn ein und wählen Sie {{ui:Speichern}}. Jede Markierung hält ihn fest. (Mehr unter [Autornamen festlegen](topic:set-your-name).)
5. Ziehen Sie einen Rahmen um den Bereich, den Sie kennzeichnen wollen. Eine rote Revisionswolke erscheint und ist ausgewählt.
6. Wählen Sie {{ui:Hinweis}} in der Gruppe {{ui:Beschriften}} (oder drücken Sie {{key:K}}). Drücken Sie auf das, worauf Sie zeigen, ziehen Sie dorthin, wo der Text stehen soll, und lassen Sie los.
7. Geben Sie Ihren Kommentar in das erscheinende Feld ein. Klicken Sie außerhalb des Felds (oder drücken Sie {{key:Mod+Enter}}), um abzuschließen.
8. Drücken Sie {{key:Esc}} zweimal: einmal, um die Auswahl aufzuheben, einmal, um zum Werkzeug {{ui:Auswählen}} zurückzukehren. Klicken Sie die Wolke an. Die Registerkarte {{ui:Eigenschaften}} rechts zeigt, wer sie erstellt hat, wann, und ihren {{ui:Status}}.
9. Wählen Sie {{ui:Speichern}} in der Symbolleiste (oder drücken Sie {{key:Mod+S}}).
   Ihr Browser lädt eine Kopie herunter, die etwa „A-Plans (marked up).pdf“ heißt. Die Statusleiste nennt, wie viele Markierungen geschrieben wurden.
10. Öffnen Sie diese Kopie zur Kontrolle in einem beliebigen PDF-Betrachter: Wolke und Hinweisbeschriftung sind da, als normale PDF-Kommentare mit Ihrem Namen.

Um später weiterzuarbeiten, öffnen Sie die Kopie „(marked up)“ in MarkupCraft. Ihre Markierungen kommen bearbeitbar zurück, mit Status, Antworten und Mängelnummern.

## Online und offline

:::online
Sie sind online. MarkupCraft lädt seinen PDF-Leser beim ersten Öffnen eines PDFs und seinen PDF-Schreiber beim ersten Speichern. Um später ohne Verbindung zu arbeiten (bei einem Baustellenbesuch, im Flugzeug), wählen Sie jetzt {{ui:Für Offline speichern}} in der Leiste oben und warten Sie auf „Offline bereit“. Die Kopie enthält PDF-Leser und -Schreiber, sodass Öffnen und Speichern von PDFs dann offline funktionieren. Siehe [Offline arbeiten](common:offline).
:::

:::offline
Sie sind offline. Wenn die Leiste oben „Offline bereit“ zeigt, wurde MarkupCraft in diesem Browser für die Offline-Nutzung gespeichert und alles funktioniert: Öffnen, Markieren, Messen, Speichern. Wenn nicht, nutzen Sie, was in diesem Tab bereits geladen ist, und laden Sie die Seite nicht neu, bis Sie wieder online sind. Siehe [Offline arbeiten](common:offline).
:::

## Was die App sich merkt und was nicht

- **Ihre Markierungen leben in dem PDF, das Sie speichern.** Auf einem Server wird nichts aufbewahrt. Die App speichert das PDF nicht von selbst, behält aber in diesem Browser eine Wiederherstellungskopie, bis Sie es tun. Speichern Sie, bevor Sie den Tab schließen; der Browser fragt nach, wenn Sie mit nicht gespeicherten Markierungen gehen wollen (außer auf dem iPad, siehe [Prüfen auf dem iPad oder Touchscreen](topic:review-on-a-tablet)).
- **Ihr Name, Ihre Werkzeugstile und Ihre Werkzeugkiste** bleiben in diesem Browser auf diesem Computer. Ein anderer Browser oder Computer beginnt leer, und das Löschen der Websitedaten des Browsers entfernt sie. Siehe [Was in diesem Browser bleibt](topic:browser-storage).
- Speichern in der Cloud und zwischen mehreren Personen geteilte Prüfsitzungen sind noch nicht vorhanden.

## Wie es weitergeht

- [Ein Rundgang durch den Bildschirm](topic:workspace)
- [Ein Blatt markieren](topic:mark-up-a-sheet)
- [Ein Blatt kalibrieren und messen](topic:calibrate-and-measure)
- [Umstieg von anderer Markierungssoftware](topic:coming-from), wenn Sie Zeichnungen bisher in einem anderen Programm prüfen.
