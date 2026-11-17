---
title: Zwei Bearbeitungen einer PDF-Datei zusammenführen
summary: git, Fossil oder Mercurial zwei markierte Kopien derselben PDF-Datei Markierung für Markierung zusammenführen lassen, Notizen eingeschlossen.
keywords: zusammenführen, Merge, git, Fossil, Mercurial, Versionskontrolle, Konflikt, Dreiwege, cadcraft merge, gitattributes, Markierungen, Notizen, Team, zwei Kopien
from: a450a9ef
---

Zwei Personen markieren dieselbe PDF-Datei in zwei Kopien. Haben sie verschiedene Markierungen berührt, lassen sich die Kopien durch ein Programm zusammenführen, statt von Hand.

## Was es möglich macht

Jede Markierung, die MarkupCraft speichert, trägt ihren eigenen Namen (ihre ID) in der PDF, und dieser Name ändert sich nie. Das Zusammenführen sucht Markierungen über diesen Namen, nicht über ihre Stelle in der Datei, weil jedes Programm beim Speichern die Positionen neu nummeriert. Notizen und versiegelte private Notizen werden genauso zugeordnet.

Die Blätter werden nie verändert: Beide Kopien müssen gleich viele Seiten haben. Weichen sie ab, behält das Zusammenführen Ihre Kopie unverändert und meldet das, denn Seiten hinzuzufügen oder zu entfernen ist Aufgabe einer Person.

## Einrichten

Git braucht zwei Zeilen, einmal pro Repository:

```
# .gitattributes
*.pdf merge=cadcraft

# einmal, auf jedem Computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ohne git führen Sie `cadcraft merge <base> <ours> <theirs> -o <result>` aus. Fossil und Mercurial nehmen dieselben drei Dateien in ihrer eigenen Einstellung für das Zusammenführungswerkzeug. Die Aufgabendatei, die mit einer Zeichnung mitläuft (`<name>.markups.json`, siehe [Eine Markierung zur Aufgabe machen](topic:markups-that-act)), wird genauso zusammengeführt, als einfacher Text.

## Die Regeln

- Eine Markierung, die nur auf einer Seite geändert wurde, wird übernommen. Dieselbe Änderung auf beiden Seiten wird einmal übernommen.
- Dieselbe Markierung auf zwei Arten geändert ist ein **Konflikt**: Ihre Seite bleibt, und der Bericht listet beide auf. Öffnen Sie das Ergebnis und korrigieren Sie diese Markierung von Hand.
- Eine Markierung, die auf einer Seite hinzugefügt wurde, bleibt erhalten. Eine, die auf einer Seite entfernt und auf der anderen unberührt ist, wird entfernt. Auf einer Seite entfernt und auf der anderen geändert: entfernt und gemeldet.
- Layer, Spalten, Datensätze und Notizen folgen denselben Regeln.
- Versiegelte private Notizen werden nie geöffnet: Die Blöcke beider Seiten bleiben, wie sie sind.

Die zusammengeführte Datei ist eine vollständige Neuschreibung Ihrer Kopie, so wie das Speichern von MarkupCraft selbst. Nichts wird hochgeladen; alles läuft auf Ihrem Computer.
