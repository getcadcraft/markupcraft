---
title: Auf einem iPad oder Touchscreen prüfen
summary: Zoomen, verschieben und zeichnen Sie mit den Fingern oder einem Stift, was beim Loslassen wirkt, was eine Tastatur braucht und wie Sie Ihre Arbeit auf einem Tablet sichern.
keywords: iPad, Tablet, Touch, Touchscreen, Pinch, Zoom, zwei Finger, Apple Pencil, Stift, Finger, vor Ort, Baustelle, Oberfläche, Gesten, mobil
from: 91eb6438
---

MarkupCraft funktioniert mit Touch: auf einem iPad (Safari oder Chrome), auf einem Laptop mit Touchscreen oder auf einem Windows- oder Android-Tablet mit aktuellem Browser. Im Querformat zeigt ein Tablet das vollständige Layout.

## Gesten

| Geste | Was sie tut |
|---|---|
| Ein Finger | Zeichnet mit dem aktuellen Werkzeug oder wählt mit {{ui:Auswahl}} aus |
| Zwei Finger, auseinander oder zusammen | Zoomt um den Punkt zwischen Ihren Fingern |
| Zwei Finger, gemeinsam bewegt | Verschiebt; Sie können in einer Bewegung zoomen und verschieben |
| Ein zweiter Finger beim Zeichnen | Bricht ab, was der erste Finger begonnen hat, und startet stattdessen das Zoomen |
| Doppeltippen oder Berühren und Halten | Beendet eine Polylinie, ein Polygon, eine freie Wolke oder eine Fläche |
| Text, Hinweis oder Notiz berühren und halten, mit {{ui:Auswahl}} | Öffnet ihren Text zum Bearbeiten |
| Ein Finger mit eingeschaltetem {{ui:Pan}} | Verschiebt |

Auf einem Touchscreen sind die Schaltflächen der Symbolleiste, Menüs, Reiter und Dialoge größer, damit sie mit einem Finger leicht zu treffen sind.

## Was beim Loslassen geschieht

Damit der erste Finger einer Zoomgeste nie eine Spur hinterlässt, wirken manche Werkzeuge beim **Loslassen** und nicht beim Berühren:

- {{ui:Zählen}}: Der Punkt wird beim Loslassen hinzugefügt.
- {{ui:Notiz}}: Die Notiz wird beim Loslassen platziert.
- {{ui:Polylinie}}, {{ui:Polygon}}, {{ui:Freie Wolke}} und {{ui:Fläche}}: Jeder Punkt wird beim Loslassen hinzugefügt.
- {{ui:Linie}}, {{ui:Pfeil}}, {{ui:Länge}} und {{ui:Kalibrieren}}: Wenn Sie den Anfang antippen und dann das Ende antippen, wird das Ende beim Loslassen gesetzt.

Wenn Ihr Finger vor dem Loslassen mehr als ein wenig rutscht, zählt es nicht als Tippen, und nichts wird hinzugefügt. Tippen Sie sauber; zum Korrigieren verwenden Sie {{ui:Rückgängig}}.

Werkzeuge, die Sie ziehen ({{ui:Stift}}, {{ui:Hervorhebung}}, {{ui:Wolke}}, {{ui:Rechteck}}, {{ui:Ellipse}}, {{ui:Hinweis}}, {{ui:Text}}, {{ui:Stempel}}), beginnen, sobald Sie berühren; ein zweiter Finger bricht sie ab.

## Mit dem Finger auswählen

- Tippen Sie auf eine Markierung, um sie auszuwählen; ziehen Sie sie, um sie zu verschieben; ziehen Sie einen Griff, um sie zu skalieren. Nachdem ein Finger das Blatt berührt hat, haben Markierungen und Griffe ein größeres Ziel, und die Griffe werden größer gezeichnet.
- Ziehen Sie über leeres Blatt, um ein Auswahlfenster zu zeichnen (von links nach rechts: vollständig innerhalb; von rechts nach links: berührend).
- In {{ui:Auswahl}} verschiebt ein Finger **nicht**. Verwenden Sie zwei Finger oder wählen Sie {{ui:Pan}}.

## Was eine Tastatur braucht

Ohne Tastatur gibt es kein {{key:Shift}}, {{key:Esc}} oder {{key:Enter}}. So machen Sie es stattdessen:

| Tastaturaktion | Ohne Tastatur |
|---|---|
| {{key:Esc}}, um abzubrechen oder zu {{ui:Auswahl}} zurückzukehren | In der Symbolleiste auf {{ui:Auswahl}} tippen |
| {{key:Shift}} für 45°-Linien, Quadrate und Kreise | Vorsichtig zeichnen; mit den Griffen anpassen |
| {{key:Shift}}-Klick, um zu einer Auswahl hinzuzufügen | Ein Auswahlfenster verwenden |
| {{key:Shift}}-Klick, um einen Zählpunkt zu entfernen | Direkt nach einem falschen Tippen {{ui:Rückgängig}} |
| {{key:Mod+Enter}}, um das Tippen abzuschließen | Außerhalb des Textfelds tippen |
| {{key:Enter}}, um eine Polylinie zu beenden oder den Text einer Markierung zu bearbeiten | Berühren und halten, oder {{ui:Auf dem Blatt bearbeiten}} in {{ui:Eigenschaften}} |
| {{key:Delete}} | {{ui:Löschen}} in der Symbolleiste oder in {{ui:Eigenschaften}} |
| Eine neue Zählgruppe mit {{key:Esc}} beginnen | Auf leeres Blatt mit {{ui:Auswahl}} tippen, dann erneut auf {{ui:Zählen}} tippen |

Eine Tastatur mit Gehäuse oder eine Bluetooth-Tastatur bringt jede Tastenkombination zurück; auf einem iPad funktioniert die ⌘-Taste für {{key:Mod+Z}} und den Rest.

Schaltflächen zeigen auf Touch keine Tooltips. Die Taste für jedes Werkzeug steht in [Tastatur und Maus](topic:keyboard).

## Stift und Apple Pencil

Ein Stift (Apple Pencil, Surface Pen und Ähnliche) funktioniert wie eine Maus: Er zeichnet und wählt aus und wirkt sofort beim Aufsetzen. Verwenden Sie Ihre Finger zum Zoomen und Verschieben. Der Druck ändert die Linienstärke nicht.

## Öffnen und Speichern auf einem iPad

- {{ui:Öffnen}} zeigt die Dateien-Auswahl: iCloud Drive, Auf meinem iPad und jede Speicher-App, die Sie verbunden haben.
- {{ui:Speichern}} fragt nach dem Herunterladen; die Kopie landet in Dateien, unter Downloads (oder dem Ordner, der in den Safari-Einstellungen festgelegt ist).

## Ihre Arbeit auf einem Tablet sichern

:::warning
iPad-Safari warnt Sie nicht, bevor Sie eine Seite mit nicht gespeicherter Arbeit verlassen, und iPadOS kann einen Tab im Hintergrund neu laden, um Speicher freizugeben. MarkupCraft behält eine Wiederherstellungskopie im Browser und bietet sie an, wenn Sie es wieder öffnen (siehe [Ihre Arbeit wiederherstellen](common:recover)). Aber **speichern Sie nach jedem Blatt oder jedem Rundgang**: Ein privater Tab behält keine Kopie.
:::

- Ihr Name, Werkzeugeinstellungen und Werkzeugkiste werden in diesem Browser auf diesem iPad gehalten, wie auf einem Computer. Siehe [Was in diesem Browser gespeichert bleibt](topic:browser-storage).
- **Vor einem Baustellenbesuch ohne Empfang:** Öffnen Sie, solange Sie noch online sind, MarkupCraft in Safari (oder Chrome) auf dem iPad und wählen Sie {{ui:Für Offline speichern}} in der Leiste oben. Warten Sie, bis „Offline bereit“ erscheint (es zählt „Speichere N von M“; der PDF-Leser und -Schreiber sind etwa 6 MB groß). Vor Ort öffnen Sie dieselbe Adresse oder ein Lesezeichen dafür: Öffnen, Markieren und Speichern von PDFs funktioniert ohne Verbindung. Wenn „Offline nicht verfügbar“ erscheint, befinden Sie sich in einem privaten Tab; verwenden Sie einen normalen. Siehe [Offline arbeiten](common:offline).
- Safari entfernt eine Offline-Kopie, die Sie einige Wochen nicht benutzt haben. Klicken Sie vor einer Reise auf „Offline bereit“ und wählen Sie „Erneut speichern (neueste Version holen)“.
- Sehr große Planmappen brauchen viel Speicher. Öffnen Sie auf einem Tablet nur die Blätter, die Sie für den Besuch brauchen.

## Auf einem Telefon

Es funktioniert, aber der Bildschirm ist klein: Die Teile stapeln sich (Symbolleiste, Blatt, Statusleiste, Bereiche, dann die Blattliste), und die Symbolleiste scrollt seitlich. Nutzen Sie ein Telefon zum Ansehen und für eine schnelle Notiz, und ein Tablet oder einen Computer für eine richtige Prüfung.
