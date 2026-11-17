---
title: Die eigenen Linien, Bilder und Texte der Seite ändern
summary: Verschieben, skalieren, umfärben oder löschen Sie, was die PDF selbst zeichnet, verschieben Sie die Punkte einer Linie, ersetzen Sie ein Bild und ändern Sie die Wörter einer Textzeile.
keywords: Seiteninhalt, Basisinhalt, PDF bearbeiten, Zeichnung bearbeiten, Vektor, Pfad, Form, Linie, Bild, Grafik, Bild ersetzen, Text, Wörter, Schrift, Punkte, Knoten, verschieben, skalieren, umfärben, löschen, Inhaltswerkzeug
from: 471d457e
---

Markierungen liegen über einem Blatt. Das Werkzeug {{ui:Inhalt}} arbeitet am Blatt selbst: an den Linien, Bildern und Textzeilen, die die PDF zeichnet. Ihre PDF auf diesem Computer wird nie verändert: Die Bearbeitungen sind Teil der Kopie, die Sie speichern.

## Auswählen, was geändert werden soll

1. Wählen Sie {{ui:Inhalt}} in der Gruppe {{ui:Auswahl}} oder drücken Sie {{key:B}}.
2. Unter {{ui:Auswahl}} in {{ui:Eigenschaften}} schalten Sie {{ui:Formen}}, {{ui:Bilder}} und {{ui:Text}} ein oder aus. Nur die eingeschalteten Arten lassen sich auswählen, sodass Sie den Text einer überladenen Zeichnung wählen können, ohne deren Linien zu erfassen.
3. Klicken Sie etwas an, um es auszuwählen. Shift+Klick fügt hinzu oder entfernt. Ziehen Sie einen Rahmen über leeres Papier, um mehrere auszuwählen: Nach rechts gezogen nimmt er alles, was vollständig im Rahmen liegt; nach links gezogen nimmt er alles, was ihn berührt.

Eine Form in einem beschnittenen Bereich wird nur dort ausgewählt, wo sie sichtbar ist.

## Verschieben, skalieren, umfärben, löschen

- **Verschieben:** Ziehen Sie ein ausgewähltes Objekt, oder drücken Sie die Pfeiltasten (halten Sie Shift für größere Schritte). Halten Sie beim Ziehen Shift, um gerade quer oder gerade nach oben zu verschieben.
- **Skalieren:** Ziehen Sie eines der acht Quadrate um die Auswahl. Sie wächst oder schrumpft von der gegenüberliegenden Seite. Halten Sie Shift, um die Proportionen beizubehalten.
- **Umfärben:** Für Linien und Formen stellen Sie {{ui:Linienfarbe}}, {{ui:Füllfarbe}} und {{ui:Linienstärke (pt)}} in {{ui:Eigenschaften}} ein.
- **Löschen:** Drücken Sie {{key:Delete}} oder wählen Sie {{ui:Von der Seite löschen}}.
- **Rückgängig:** Jede Änderung ist ein Schritt: {{key:Mod+Z}} nimmt sie zurück, {{key:Mod+Y}} stellt sie wieder her.

{{ui:Wie zuvor wiederherstellen}} macht alle Änderungen an den ausgewählten Objekten auf einmal rückgängig; {{ui:Diese Seite wie zuvor wiederherstellen}} tut dies für die ganze Seite.

## Seiteninhalt kopieren, ausschneiden und einfügen

Wählen Sie Linien, Bilder oder Text mit dem Werkzeug {{ui:Inhalt}} aus, dann:

- {{key:Mod+C}} kopiert, {{key:Mod+X}} schneidet aus (kopiert und entfernt sie von der Seite), {{key:Mod+D}} legt eine Kopie daneben.
- {{key:Mod+V}} fügt als Seiteninhalt ein, neben dem Original oder dort, wo der Zeiger ist (wie [Einstellungen](topic:settings) beschreiben); {{key:Mod+Shift+V}} fügt an genau derselben Stelle ein. Sie können auf einer anderen Seite, in einer anderen geöffneten PDF oder in einem anderen MarkupCraft-Tab dieses Browsers einfügen.
- Das Menü der Gruppe {{ui:Bearbeiten}} und das Kontextmenü mit der rechten Maustaste haben dieselben Befehle.

Ein Einfügen behält Linien als Linien, Wörter als Wörter in ihrer eigenen Schrift und Bilder als Bilder. Es ist ein einziges Stück: Verschieben Sie es, skalieren Sie es über seine Quadrate, löschen Sie es oder machen Sie es mit {{key:Mod+Z}} rückgängig. Es wird Teil der Seite in der Kopie, die Sie speichern. Was Sie zuletzt kopiert haben, Markierungen oder Seiteninhalt, ist das, was {{key:Mod+V}} einfügt.

Was die Kopie enthält, wird auf den Rahmen um die Auswahl zugeschnitten: Etwas, das MarkupCraft nicht aus der Kopie herausnehmen kann (siehe unten) und das innerhalb dieses Rahmens liegt, kommt mit.

## Die Punkte einer Linie verschieben

Doppelklicken Sie auf eine Linie oder Kurve (oder wählen Sie sie aus und wählen Sie {{ui:Punkte bearbeiten}}). Ihre Punkte werden als Quadrate angezeigt, ihre Kurvengriffe als Kreise. Ziehen Sie einen Punkt oder einen Griff; ein Punkt bringt die Griffe neben sich mit, sodass die Kurve um ihn herum ihre Form behält. Drücken Sie {{key:Esc}} oder klicken Sie neben die Linie, wenn Sie fertig sind.

Rechtecke haben keine Punkte zum Ziehen: Skalieren Sie sie über die Quadrate um sie herum.

## Ein Bild ersetzen

Wählen Sie ein Bild aus und wählen Sie {{ui:Bild ersetzen…}}, dann wählen Sie eine PNG-, JPEG- oder SVG-Datei (oder eine PDF: deren erste Seite). Das neue Bild füllt den Platz des alten und behält seine eigenen Proportionen.

## Die Wörter einer Textzeile ändern

Doppelklicken Sie auf eine Textzeile, geben Sie die neuen Wörter in {{ui:Wörter}} ein und drücken Sie {{key:Enter}}. Die Wörter werden in der eigenen Schrift und Größe der Zeile geschrieben, und die Zeile behält ihre Länge, sodass der Text danach nicht verrutscht.

:::note
Die meisten PDFs enthalten nur die Buchstaben, die sie aus jeder Schrift verwenden. Wenn Sie einen Buchstaben eingeben, den die Kopie der Schrift in der Datei nicht hat, druckt MarkupCraft diesen Buchstaben in Helvetica und sagt dies. {{ui:Eigenschaften}} zeigt, welche Buchstaben die Schrift in der Datei hat.
:::

Text wird jeweils eine Zeile geändert; er fließt nicht in die nächste Zeile.

## Was MarkupCraft unverändert lässt

- **Gescannte Seiten** sind ein einziges Bild: Sie können das Bild verschieben, skalieren, ersetzen oder löschen, aber was darin ist, lässt sich nicht bearbeiten.
- **Verschlüsselte und signierte PDFs:** Das Ändern der Seite würde eine Signatur brechen. Daher sagt das Werkzeug {{ui:Inhalt}} dies und ändert nichts. Markierungen funktionieren weiterhin.
- **Beschnittene Bereiche**, Objekte, die zwischen zwei Teilen des Seiteninhalts geteilt sind, und Farbübergänge, die einen ganzen Bereich füllen, bleiben, wie sie sind; MarkupCraft sagt, warum, wenn Sie es versuchen.
- **Wörter in einer Standardschrift, die die PDF nicht beschreibt** (etwa eine Times-Schrift ohne Zeichenbreiten in der Datei), lassen sich nicht ändern, weil MarkupCraft den Zeilenabstand nicht halten könnte. Die Zeile kann dennoch verschoben werden.

## Markierungen in die Seite übernehmen

Linien, Rechtecke, Ellipsen, Polylinien, Wolken und Freihandstriche, die Sie als Markierungen gezeichnet haben, können Teil der Seite selbst werden: Wählen Sie sie aus und wählen Sie {{ui:In die Seite übernehmen}} in {{ui:Eigenschaften}}. Text, Stempel, Bilder und durchsichtige Farben bleiben Markierungen.
