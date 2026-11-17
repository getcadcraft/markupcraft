---
title: Alle Markierungsarten
summary: Die siebzehn Arten von Markierungen, ihre Tasten, wie jede gezeichnet wird, ihr Standardaussehen und was sie im gespeicherten PDF werden.
keywords: Markierungsarten, Werkzeugliste, Anmerkungsarten, Wolke, Hinweis, Text, Notiz, Stempel, Stift, Textmarker, Linie, Pfeil, Rechteck, Ellipse, Polylinie, Polygon, Länge, Fläche, Zählung
from: 29bf32e7
---

## Die Werkzeuge

| Symbolleiste | Taste | So zeichnen Sie | Standardaussehen | Im gespeicherten PDF |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | Ziehen | Rot, 1.5 pt | Tinte |
| {{ui:Highlight}} | {{key:I}} | Ziehen | Gelb, 14 pt breit, durchsichtig, färbt ein, was darunter liegt | Tinte (als Textmarker-Strich gekennzeichnet) |
| {{ui:Line}} | {{key:L}} | Ziehen oder Anfang und Ende klicken | Rot, 2 pt | Linie |
| {{ui:Arrow}} | {{key:A}} | Ziehen oder Anfang und Ende klicken | Rot, 2 pt, geschlossene Pfeilspitze am Ende | Linie mit Pfeilspitze |
| {{ui:Arc}} | {{key:O}} | Anfang klicken, einen Punkt auf dem Bogen, dann das Ende | Rot, 2 pt | Polylinie entlang des Bogens |
| {{ui:Rectangle}} | {{key:R}} | Rahmen ziehen | Rot, 2 pt, ohne Füllung | Quadrat |
| {{ui:Ellipse}} | {{key:E}} | Rahmen ziehen | Rot, 2 pt, ohne Füllung | Kreis |
| {{ui:Polyline}} | {{key:Y}} | Punkte klicken, Doppelklick zum Beenden | Rot, 2 pt | Polylinie |
| {{ui:Polygon}} | {{key:G}} | Punkte klicken, Doppelklick zum Beenden | Rot, 2 pt, ohne Füllung | Polygon |
| {{ui:Cloud}} | {{key:C}} | Rahmen ziehen | Rot, 1.5 pt Bögen | Quadrat mit wolkigem Rand |
| {{ui:Free cloud}} | {{key:Shift+C}} | Punkte klicken, Doppelklick zum Beenden | Rot, 1.5 pt Bögen | Polygon mit wolkigem Rand |
| {{ui:Callout}} | {{key:K}} | Auf den Punkt drücken, zum Text ziehen, schreiben | Roter Text und Führungslinie, 1 pt, 12 pt Text | Textfeld mit Hinweis-Führungslinie |
| {{ui:Text}} | {{key:T}} | Klicken oder einen Rahmen ziehen, schreiben | Roter Text, 12 pt, ohne Rahmen | Textfeld |
| {{ui:Note}} | {{key:N}} | Klicken, schreiben | Gelbes Notizsymbol | Haftnotiz |
| {{ui:Stamp}} | {{key:S}} | Stempel wählen, klicken oder ziehen | Umrahmte Großbuchstaben plus „Von <Name>, <Datum>“; farbig nach Bedeutung | Stempel |
| {{ui:Length}} | {{key:M}} | Anfang und Ende klicken (braucht einen Maßstab) | Blaue Maßlinie mit Strichen und der Länge | Linie als Bemaßung gekennzeichnet, mit Messwert |
| {{ui:Angle}} | {{key:X}} | Ende des einen Schenkels klicken, dann die Ecke, dann das Ende des anderen Schenkels | Blaue Schenkel, kleiner Bogen an der Ecke und der Winkel in Grad | Polylinie mit dem Winkel als Text |
| {{ui:Area}} | {{key:Q}} | Ecken klicken, Doppelklick zum Beenden (braucht einen Maßstab) | Blaue Kontur, hellblaue Füllung, Fläche und Umfang | Polygon als Fläche gekennzeichnet, mit Messwert |
| {{ui:Count}} | {{key:U}} | Jedes Element klicken | Orangefarbene nummerierte Punkte und eine Marke „Gruppe: n“ | Ein Tinten-Kommentar je Gruppe, ein Ring je Element |

Auf Touch bedeutet „Doppelklick zum Beenden“ ein Doppeltippen, und „Klicken“ ist ein Tippen, das beim Anheben des Fingers wirkt (bei Punkten, Notizen und Zählungen).

## Was jede Markierung enthält

| Feld | Wo Sie es sehen |
|---|---|
| Autor | {{ui:Properties}}, die Liste, die zweite Zeile des Stempels, andere PDF-Betrachter |
| Erstellt und geändert | {{ui:Properties}} (Ihre Zeitzone), die Liste, die CSV |
| Status | Offen, Angenommen, Abgelehnt oder Erledigt |
| Betreff | Eine kurze Bezeichnung; Standard ist die Art („Cloud“, „Textfeld“, „Längenmessung“) |
| Kommentar | Längere Notizen. Bei einer Notiz ist ihr Text der Kommentar. |
| Text | Nur Textfelder und Hinweise |
| Antworten | Der Verlauf, mit Statusänderungen |
| Mängelpunkt | Nummer, Zuständiger, Fälligkeitsdatum, Status des Eintrags, wenn in die Mängelliste aufgenommen |
| Stil | Farbe, Linienstärke, Füllung und Deckkraft der Füllung (geschlossene Formen, Text und Hinweise), Deckkraft, Textgröße (Text, Hinweise und Messungen) |

## Schreibgeschützte Kommentare

Kommentare, die mit der Datei kamen und die MarkupCraft nicht bearbeiten kann (Texthervorhebungen, Stempel anderer Programme und andere Sonderarten), werden mit der Art „Andere“ und dem Statuschip „Schreibgeschützt“ aufgelistet. Sie behalten genau das Aussehen, das die Datei ihnen gibt. Sie können sie auswählen, ihren Autor, Betreff und Kommentar sehen und ihnen antworten.

## Noch nicht umgesetzt

Dateianhänge sind noch nicht umgesetzt. Jede Markierung kann auf ein Blatt verlinken; siehe [Blattlinks](topic:sheet-links). Bilder und Unterschriften setzen Sie mit dem Werkzeug {{ui:Stamp}}; siehe [Stempel und Notizen](topic:stamps-and-notes). Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
