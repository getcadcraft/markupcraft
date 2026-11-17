---
title: Mehrere Dateien gleichzeitig bearbeiten
summary: Viele PDFs als einen Satz öffnen, Blätter über Dateien hinweg finden, Markierungen zwischen ihnen kopieren und die Kopie jeder Datei speichern.
keywords: mehrere Dateien, mehrere PDFs, Plansatz, Satz, Stapel, viele Dateien, zusammenführen, Fachbereiche, Architektur, Tragwerk, Technik, alle speichern, schließen
from: f59354ae
---

Ein Plansatz kommt oft als ein PDF pro Fachbereich oder als ein PDF pro Blatt. MarkupCraft behandelt alles, was Sie öffnen, als **einen Satz**.

## Gemeinsam öffnen

Wählen Sie alle PDFs gleichzeitig im Dateiauswahldialog oder ziehen Sie sie alle auf den Blattbereich. Um später weitere hinzuzufügen, öffnen Sie sie auf dieselbe Weise. Sie werden in der Reihenfolge, in der Sie sie öffnen, ans Ende der Liste {{ui:Blätter}} angehängt.

Ergebnis: „6 Dateien geöffnet (84 Blätter im Satz).“ Jede Seite ist ein Blatt. Blätter mit Blattnummer zeigen „Blatt A-101“ unter ihrem Namen; andere zeigen Datei und Seite.

Es gibt keine gespeicherte Satz-Datei: Öffnen Sie beim nächsten Mal dieselben PDFs erneut (die Kopien „(marked up)“, falls Sie gespeichert haben).

## Im gesamten Satz

- **Ein Blatt finden:** {{ui:Blätter durchsuchen}} sucht in Blattnummern, Blattnamen und Dateinamen aller Dateien. {{key:PageUp}} und {{key:PageDown}} gehen in Reihenfolge durch alle Blätter aller Dateien.
- **Markierungsliste:** die Registerkarte {{ui:Markierungen}} listet Markierungen aus allen Dateien. Filtern Sie nach {{ui:Blatt}}, um sie einzugrenzen. Die CSV-Datei hat eine Spalte „Datei“.
- **Mängelliste:** eine Nummerierung für den gesamten Satz.
- **Vergleichen:** das alte und das neue Blatt können aus verschiedenen Dateien stammen.
- **Kopieren und Einfügen:** {{key:Mod+C}} auf einem Blatt und {{key:Mod+V}} auf einem anderen, in beliebiger Datei. Die Kopie landet an derselben Stelle auf der Seite, leicht versetzt.

## Speichern

Wählen Sie {{ui:Speichern}}. Sind mehr als eine Datei geöffnet, fragt MarkupCraft:

- {{ui:Diese Datei}}: eine markierte Kopie der Datei des aktuellen Blatts.
- {{ui:Jede geänderte Datei}}: eine Kopie jeder Datei mit nicht gespeicherten Änderungen. Jede wird separat als „<Dateiname> (marked up).pdf“ heruntergeladen.
- {{ui:Abbrechen}}

:::chromium
Wenn Sie zum ersten Mal mehrere Dateien auf einmal speichern, fragen Chrome und Edge eventuell, ob diese Website mehrere Dateien herunterladen darf. Wählen Sie {{ui:Zulassen}}; sonst kommt nur die erste Kopie an.
:::

:::safari
Safari fragt eventuell einmal für jede Datei. Auf einem iPad landet jede Kopie in der Dateien-App.
:::

Eine Datei, deren Markierungen gespeichert wurden, gilt nicht mehr als geändert; die anderen gelten weiterhin als geändert.

Exporte von CSV, BCF und Mängelliste werden nach der **ersten** Datei benannt, die Sie geöffnet haben.

## Schließen

{{ui:Schließen}} schließt den gesamten Satz; eine einzelne Datei lässt sich noch nicht schließen. Ist etwas nicht gespeichert, fragt es:

- {{ui:Abbrechen}}: nichts geschieht.
- {{ui:Ohne Speichern schließen}}: nicht gespeicherte Markierungen gehen verloren.
- {{ui:Zuerst Kopien speichern}}: speichert jede geänderte Datei und schließt dann.

Schließen löscht auch den Rückgängig-Verlauf.

## Große Sätze

- Der Text jeder Seite wird beim Öffnen gelesen, um Blattnummern zu finden. Ein Satz mit 100 Blättern braucht daher etwas Zeit. Die Statusleiste zählt die Blätter mit.
- Blattbilder in der Liste werden erst gezeichnet, wenn Sie beim Scrollen dorthin kommen.
- Jede geöffnete PDF wird im Speicher des Browser-Tabs gehalten. Wird der Tab langsam, schließen Sie andere speicherintensive Browser-Registerkarten oder prüfen Sie einen Fachbereich nach dem anderen.
- Öffnen Sie dieselbe Datei zweimal, erhalten Sie zwei Kopien ihrer Blätter. Wenn das passiert, wählen Sie {{ui:Schließen}} und öffnen Sie den Satz erneut.
