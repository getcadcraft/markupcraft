---
title: Stiftstriche bereinigen sowie Prüfkommentare und Baufortschritt übernehmen
summary: Wandeln Sie Freihand-Stiftstriche in Linien, Kreise, Bögen und Rechtecke um; übernehmen Sie die Prüfkommentare eines Bauantragspakets und den Vermessungsfortschritt einer Baustelle als Notizen.
keywords: Stift, Freihand, bereinigen, begradigen, Kreis, Linie, Rechteck, Bogen, Bauantrag, Prüfkommentare, Fortschritt, Drohne, Scan, Vermessung, Notizen, csv
from: 547d8e42
---

## Stiftstriche bereinigen

Zeichnen Sie mit {{ui:Stift}}, öffnen Sie dann das Menü {{ui:Mehr}} in der Gruppe Bearbeiten und wählen Sie {{ui:Stiftstriche bereinigen}}. Jeder ausgewählte Stiftstrich wird zu dem, was er sein sollte: ein gerader Strich zu einer Linie (exakt waagerecht oder senkrecht, wenn er es fast war), ein runder zu einer Ellipse, ein Teil eines Kreises zu einem Bogen, ein geschlossenes Viereck zu einem Rechteck, alles andere zu einer Polylinie oder einem Polygon. Lose Enden von Strichen, die zusammen gezeichnet wurden, werden aufeinander gezogen. Ohne ausgewählten Stiftstrich wird jeder Stiftstrich auf dem geöffneten Blatt bereinigt. Es ist ein einziger Rückgängig-Schritt: {{key:Ctrl+Z}} stellt die Freihandform wieder her. Die Form wird nach festen Regeln auf Ihrem Computer berechnet; nichts wird irgendwohin gesendet.

## Prüfkommentare übernehmen

Das Bauantragspaket von BimCraft enthält `01-review-comments.csv`: die Kommentare, die ein Prüfer voraussichtlich machen wird, jeweils mit der Regel, dem Paragrafen, dem Erforderlichen, dem Gefundenen und dem, was zu tun ist. Öffnen Sie in der Registerkarte {{ui:Aufgaben}} {{ui:Prüfkommentare zum Bauantrag}} und wählen Sie {{ui:Kommentare übernehmen (CSV)}}. Jeder Kommentar wird zu einer offenen Notiz in einer Spalte links auf dem geöffneten Blatt; ziehen Sie jede an die Stelle, auf die sie sich bezieht. Sie werden aus den vorhandenen Prüfungen berechnet, nicht von einem Bauprüfer.

## HAZOP-Knotenfelder übernehmen

Das P&ID-Add-on von CadCraft zeichnet die Knoten einer HAZOP-Studie und kann sie als {{ui:HAZOP-Knotenfelder}} (eine JSON-Datei) speichern. Öffnen Sie hier das gedruckte P&ID-Blatt, wechseln Sie zur Registerkarte {{ui:Aufgaben}}, öffnen Sie {{ui:HAZOP-Knotenfelder}} und wählen Sie {{ui:Knotenfelder importieren (JSON)}}. Jeder Knoten wird zu einem offenen Rechteck auf dem Blatt mit seiner Nummer, seinem Namen, seiner Anlage und seinen Leitungen im Text, und das Team schreibt seine Befunde als Antworten darauf. Das Blatt wird als in voller Größe gedruckt angenommen, gemessen ab der unteren linken Ecke der Zeichnung; wenn es in einem anderen Maßstab gedruckt wurde, tragen Sie zuerst diese Zahl unter {{ui:Gedruckt im Maßstab}} ein (0.5 für 1:2). Ein Knoten außerhalb der Seite wird nicht gezeichnet, und das Feld zeigt an, wie viele es sind. Die Markierungen dienen der Studie: Sie zeigen, wo die Knoten liegen, sie bewerten die Studie nicht.

## Baufortschritt übernehmen

CivilCraft führt für jeden Drohnenflug oder Scan der Baustelle eine Zeile. Öffnen Sie in der Registerkarte {{ui:Aufgaben}} {{ui:Baufortschritt}} und wählen Sie {{ui:Fortschritt übernehmen (JSON)}}. Jede Vermessung wird zu einer Notiz auf dem geöffneten Blatt, die angibt, wie viel erledigt ist, was noch abzutragen oder aufzufüllen ist, was zu tief ausgehoben oder zu hoch aufgefüllt wurde und was vom Plan abweicht. Eine Vermessung mit etwas außerhalb des Plans bleibt offen; eine saubere wird akzeptiert.
