---
title: Menüs, Tasten und Maus
summary: Die eigene Symbolleiste von MarkupCraft, eine Menüleiste für die PDF-Prüfung oder ein Menüband wählen, jedem Werkzeug eine eigene Taste geben, Werkzeuge zwischen Menüs verschieben und festlegen, was das Rad und die Maustasten tun.
keywords: Menüstil, Menüs, Menüleiste, Symbolleiste, Menüband, Registerkarten, PDF-Prüfung, Tastenkürzel, Hotkeys, Tasten, anpassen, neu belegen, Maus, Rad, umkehren, Zoomrichtung, mittlere Taste, rechte Taste, Pan, exportieren, importieren, wechseln, vertraut
from: 081438a6
---

Die Werkzeuge von MarkupCraft sind dieselben, egal wie Sie sie erreichen. Ein **Menüstil** bestimmt nur, wo sie auf dem Bildschirm sitzen, wie sie dort heißen und welche Tasten sie auswählen. Wählen Sie einen in {{ui:Settings}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menus, keys and mouse}}; die Änderung wirkt sofort, und dieser Browser merkt sie sich.

## Die drei Stile

| Stil | Was Sie bekommen |
|---|---|
| {{ui:MarkupCraft}} | Die eigene Symbolleiste von MarkupCraft (Datei, Auswahl, Zeichnen, Überarbeiten, Anmerken, Messen, Bearbeiten) und ihre Einzelbuchstaben-Tasten: {{key:V}} Auswahl, {{key:H}} Pan, {{key:P}} Stift, {{key:I}} Textmarker, {{key:L}} Linie, {{key:A}} Pfeil, {{key:R}} Rechteck, {{key:E}} Ellipse, {{key:C}} Wolke, {{key:K}} Hinweis, {{key:T}} Text, {{key:N}} Notiz, {{key:S}} Stempel, {{key:M}} Länge, {{key:Q}} Fläche, {{key:U}} Zählen. Der Ausgangsstil. |
| {{ui:PDF review}} | Eine Menüleiste ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Measure}}, {{ui:Review}}, {{ui:Window}}) über einer Reihe von Prüfwerkzeugen, mit Tasten belegt, wie PDF-Prüfprogramme ihre belegen: {{key:V}} Auswahl, {{key:Shift+V}} Pan, {{key:H}} Textmarker, {{key:Q}} Hinweis, {{key:N}} Polygon, {{key:Shift+N}} Polylinie, {{key:Shift+T}} Notiz, {{key:Shift+A}} Bogen, und die Messungen auf {{key:Alt+Shift}}: {{key:Alt+Shift+K}} Kalibrieren, {{key:Alt+Shift+L}} Länge, {{key:Alt+Shift+G}} Winkel, {{key:Alt+Shift+A}} Fläche, {{key:Alt+Shift+C}} Zählen. {{key:Alt+L}} öffnet die Markierungsliste. Die mittlere Taste schwenkt (Pan); ein Rechtsklick tut es nicht. |
| {{ui:Ribbon}} | Registerkarten, nach der Arbeit benannt: {{ui:Mark up}} (auswählen, zeichnen, Wolken, Hinweise, Text, Notizen, Stempel), {{ui:Measure}}, {{ui:Edit}}, {{ui:Review}} (die Markierungsliste und ihre Exporte, BCF-Themen, die Mängelliste, Felddaten, die Werkzeugkiste, Vergleichen), {{ui:Pages}} und {{ui:View}}, mit {{ui:File}} und Schnellschaltflächen zum Öffnen, Speichern, Rückgängig und Wiederholen. Die Werkzeuge behalten die Einzelbuchstaben-Tasten von MarkupCraft. Eine Schaltfläche für einen Bereich, der nicht geöffnet ist, öffnet zuerst diesen Bereich. |

Jeder Stil behält die {{key:Mod}}-Tasten: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} für Seite einpassen und {{key:Mod+9}} für Breite einpassen; {{key:PageUp}} und {{key:PageDown}} wechseln das Blatt.

:::tip
Eine Taste, die zum eigenen Layout von MarkupCraft gehört, aber nicht zum gewählten Stil, tut nichts, und die Statusleiste sagt, wohin ihr Werkzeug gewandert ist („In PDF-Prüfung ist Hinweis Q“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} und die Pfeile behalten immer ihre Bedeutung. Solange Sie in einem Textfeld, Hinweis oder einer Notiz schreiben, gehört jede Taste dem Text, und Zahlen, die beim Zeichnen getippt werden, öffnen weiterhin das Längenfeld.
:::

## Eigene Einstellungen

1. Wählen Sie den Stil, der Ihren Wünschen am nächsten kommt, und klicken Sie auf {{ui:Customize…}}.
2. Suchen Sie unter {{ui:Keys and menus}} ein Werkzeug (das Suchfeld hilft). Klicken Sie auf {{ui:Add a key}} und drücken Sie die Taste, oder zwei Tasten nacheinander für eine Zweibuchstabentaste. Klicken Sie auf eine Taste, um sie zu entfernen.
3. Mit der Menüleiste verschiebt {{ui:Where it sits}} das Werkzeug in ein anderes Menü oder nach {{ui:Keys only}}.
4. Unter {{ui:Mouse}} legen Sie das Rad und die Tasten fest, die das Blatt verschieben.
5. Geben Sie ihm einen Namen und klicken Sie auf {{ui:Save}}.

Das Speichern eines eingebauten Stils erzeugt Ihre eigene Kopie („My PDF review“); der eingebaute Stil ändert sich nie. Eine Taste, die zwei Werkzeugen zugewiesen ist, wird rot angezeigt und muss behoben werden, bevor Sie speichern können.

## Maus

- **Mausrad:** {{ui:Scroll up zooms in}} (der Ausgangszustand) oder {{ui:Scroll up zooms out}}, und wie schnell. Eine Pinch-Geste auf dem Trackpad zoomt immer in die Richtung, in der sich Ihre Finger bewegen.
- **Blatt verschieben mit:** der mittleren Taste, der rechten Taste oder beiden. {{key:Space}} und Ziehen sowie das Werkzeug {{ui:Pan}} verschieben immer; die linke Taste zeichnet und wählt sonst aus, daher ändert das Ankreuzen hier nichts.
- MarkupCraft hat keine 3D-Ansicht, daher tun die 3D-Schaltflächen hier nichts.

## Mitnehmen

{{ui:Export}} speichert den verwendeten Stil als kleine `.ccinput.json`-Datei; {{ui:Import…}} fügt eine hinzu, etwa von einem anderen Computer oder von einem Teammitglied. Eine importierte Datei kann nur auf die eigenen Werkzeuge von MarkupCraft verweisen: Alles andere wird weggelassen und in der Statusleiste gezählt. {{ui:Delete this style}} entfernt einen eigenen Stil.

:::note
Diese Einstellungen bleiben in diesem Browser. {{ui:Use this style in every app}} unter den Stilkarten sorgt dafür, dass jede App im passenden Stil öffnet: {{ui:PDF review}} gehört zu den Menüleisten-Stilen der anderen Apps, {{ui:Ribbon}} zu deren Menübändern, die eigene Symbolleiste von MarkupCraft zu deren Symbolleisten. Eine App ohne passenden Stil behält ihren eigenen.
:::

:::tip
Die Arbeitsbereichs-Layouts in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon and project browser}}, {{ui:Toolbox and info box}}) bauen ihr Menüband aus den Registerkarten des Stils {{ui:Ribbon}} und ihre Werkzeugpalette aus der Symbolleiste von MarkupCraft, sodass jedes Werkzeug dort gleich funktioniert.
:::

Siehe auch: [Tastatur und Maus](topic:keyboard) · [Einstellungen von MarkupCraft](topic:settings) · [Umstieg von anderer Markierungssoftware](topic:coming-from)
