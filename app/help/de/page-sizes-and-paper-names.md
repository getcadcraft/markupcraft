---
title: Seitenformate und Papiernamen
summary: Sehen Sie die Größe jeder PDF-Seite in Millimetern und Zoll sowie ihren Papiernamen (A-, B- und C-Reihe, ANSI, ARCH) und gruppieren Sie einen gemischten Satz nach Größe, um die Ausreißerseiten zu finden.
keywords: Seitengröße, Papierformat, Papiername, a0, a1, a2, a3, a4, B-Reihe, C-Reihe, ANSI, ARCH, architektonisch, mm, Zoll, benutzerdefinierte Größe, nach Größe, Ausreißergröße, gemischter Satz, PDF prüfen, Kunde, Ausgabe, MediaBox, CropBox, Drehung
from: 08e1354f
---

Bevor ein Satz an einen Kunden geht, prüfen Sie, ob jedes Blatt die richtige Größe hat. {{ui:MarkupCraft}} liest die Größe jeder Seite aus der PDF-Datei selbst und benennt das Papierformat.

## Was Sie tun

Die Größe eines Blatts ansehen und dann den gesamten Satz nach Größe gruppieren.

## Schritte

1. Öffnen Sie die PDFs ({{ui:Öffnen}}), drücken Sie dann {{key:Esc}}, bis nichts ausgewählt ist, und stellen Sie sicher, dass {{ui:Auswahl}} eingeschaltet ist.
2. Sehen Sie sich {{ui:Eigenschaften}} an. {{ui:Papier}} nennt den Namen und die Ausrichtung, zum Beispiel „A4, Hochformat“. {{ui:Größe}} gibt Millimeter und Zoll an.
3. Jede Zeile der Liste {{ui:Blätter}} hat unter dem Blattnamen eine Größenzeile.
4. Wählen Sie {{ui:Nach Größe}} in der Kopfzeile von {{ui:Blätter}}. Die Liste fasst die Blätter unter einer Überschrift pro Größe zusammen, die größte Gruppe zuerst. Eine Größe mit nur wenigen Blättern ist als Ausreißer markiert.
5. Wählen Sie {{ui:Nach Größe}} erneut, um zur eigenen Reihenfolge des Satzes zurückzukehren.

Ergebnis: Eine Seite, die eine andere Größe als der Rest hat, ist leicht zu erkennen, bevor Sie den Satz senden.

## So wird der Name gewählt

- Die Größe stammt aus der Box der Seite in der PDF-Datei mit angewandter Drehung. Ein Querformat-A3 bleibt daher A3.
- Die Namen sind die A- und B-Reihe (ISO 216), die C-Reihe (ISO 269), ANSI A bis E und ARCH A bis E.
- Eine Seite innerhalb von 2 mm einer benannten Größe erhält diesen Namen. Jede andere Seite zeigt {{ui:benutzerdefiniert}}, und {{ui:Nächste benannte Größe}} nennt die nächstliegende Größe und wie weit sie entfernt ist.
- Zoll stammen aus der tatsächlichen Seitengröße, daher ist eine A4-Seite 8.26 × 11.69 in.

## In den gespeicherten Dateien

Die Zusammenfassungsarbeitsmappe ({{ui:Markierungsliste}}, dann die Tabelle) hat eine Spalte {{ui:Papierformat}} auf dem Blatt {{ui:Nach Blatt}} und ein Arbeitsblatt {{ui:Seitenformate}}. Der PDF-Bericht hat eine Zeile „Seitenformate“ mit der Anzahl jeder Größe.

:::note
Die Zollwerte für ANSI und ARCH wurden aus den veröffentlichten Tabellen abgetippt und nicht mit den gedruckten Normen verglichen. Prüfen Sie eine „benutzerdefinierte“ Seite, die einer davon nahekommt, selbst.
:::
