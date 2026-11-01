---
title: Neu in 0.7
summary: RFIs, Einreichungen und Bautagebücher in einer neuen Registerkarte Baustelle, mit Fälligkeitsdaten, Überfälligem in Rot, CSV und BCF, Offline-Arbeit und Zusammenführen; Assistenten, die Status setzen, antworten und die Liste exportieren; Einheitenlisten, die den Einstellungen folgen; Bereiche, die sich wegräumen lassen, und Dialoge, die sich verschieben lassen.
keywords: Neuerungen, Was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.7, Version, neue Funktionen, Baustelle, Baustellenvorgänge, RFI, Rückfrage, Einreichung, Bautagebuch, Baustellentagebuch, überfällig, Fälligkeitsdatum, mir zugewiesen, Pin, Zusammenführen, Offline, Tablet, BCF, CSV, Assistent, MCP, Markierungsstatus, Antwort, Export, Einheiten, Einheitenlisten, Stern, Kalibrieren, kompakt, Bereiche, Dialoge, Portugiesisch
from: 142e1a1e
---

Das hat sich in MarkupCraft 0.7 gegenüber 0.6 geändert. Das große Neue sind Baustellenvorgänge: RFIs, Einreichungen und Bautagebücher, die im PDF neben Ihren Markierungen aufbewahrt werden.

## Neu

### RFIs, Einreichungen und Bautagebücher

- **Die Registerkarte Baustelle.** Öffnen Sie die Registerkarte {{ui:Baustelle}} und wählen Sie {{ui:RFI}}, {{ui:Einreichung}} oder {{ui:Bautagebuch}}. Tippen oder klicken Sie auf das Blatt, wo ein RFI oder eine Einreichung hingehört, und ein Pin kennzeichnet die Stelle; ein Bautagebuch kommt ohne Pin auf das geöffnete Blatt ({{ui:Pin platzieren}} fügt später einen hinzu, {{ui:Pin verschieben}} verschiebt jeden Pin). Jeder Vorgang hat eine eigene Nummer (RFI-0001, SUB-0001, LOG-0001), einen Titel, Text, einen Status, einen Zuständigen, ein Fälligkeitsdatum, eine Antwortunterhaltung und eine Liste von Anhangsnamen. Siehe [RFIs, Einreichungen und Bautagebücher verfolgen](topic:field-records).
- **Sehen, was überfällig ist.** Filtern Sie die Liste nach Typ, Status, Fälligkeit (überfällig, in 7 Tagen fällig, mit oder ohne Fälligkeitsdatum), diesem Blatt oder allen Blättern, einer Textsuche oder {{ui:Mir zugewiesen}}. Ein Vorgang, der über sein Fälligkeitsdatum hinaus noch wartet, wird in der Liste und auf seinem Pin rot als **Überfällig** gekennzeichnet. Siehe [Das Wichtige finden](topic:field-records#find-what-matters).
- **CSV und BCF.** {{ui:CSV}} schreibt die gelisteten Vorgänge als Tabelle; {{ui:BCF}} schreibt sie als BCF-Themen, jedes mit einem Schnappschuss seiner Stelle auf dem Blatt. Beide folgen den Filtern. Siehe [Export](topic:field-records#export).
- **Offline, und zwei Kopien werden eine.** Vorgänge werden im PDF gespeichert und brauchen kein Netz, sodass ein Tablet auf der Baustelle sie hinzufügen, beantworten und speichern kann. Zurück im Büro führt {{ui:Zusammenführen}} die Vorgänge einer anderen Kopie desselben PDFs anhand ihrer IDs zusammen, als ein Schritt zum Rückgängigmachen. Siehe [Speichern, offline und Kopien zusammenführen](topic:field-records#save-offline-and-merging-copies).

### KI-Assistenten

- **Mehr, was ein Assistent kann.** Ihr eigener Assistent, der über CadCraft Studio verbunden ist, kann jetzt den Status einer Markierung setzen (`markup_status`, in ihrer Unterhaltung protokolliert), in einer Unterhaltung antworten (`markup_reply`) und die Liste {{ui:Markierungen}} als CSV oder BCF exportieren (`markups_export`, was die Liste mit ihren Filtern zeigt). Jede Änderung ist ein Schritt zum Rückgängigmachen, mit dem Namen des Assistenten signiert. Siehe [Was ein Assistent anfordern kann](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## In jeder App

- **Einheiten.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} hat je eine Liste für Länge, Fläche, Volumen, Winkel und Gefälle, mit den genauen Größen, die die Definitionen der Einheiten vorgeben (der US-Vermessungsfuß ist eine eigene Einheit). Schalten Sie Einheiten, die Sie nie nutzen, aus, und sie verschwinden aus den Einheitenlisten; markieren Sie eine mit einem Stern, und neue Arbeit beginnt in ihr. Eine Datei behält immer ihre eigene Einheit. In MarkupCraft folgen die Mess- und Positionseinheiten unter {{ui:Einstellungen}} › {{ui:MarkupCraft}} und die Einheit im Dialogfeld zum Kalibrieren den Schaltern, der Stern legt die Messeinheit fest, bis Sie die eigenen Einstellungen von MarkupCraft speichern, und der echte Abstand, den Sie beim Kalibrieren eingeben, kann das Zeichen jeder Einheit tragen, etwa `3 yd` oder `1.5 km`. Siehe [Einheiten, eingegebene Werte und die Einheitenlisten](common:unit-lists).
- **Ein dichteres Layout und Bereiche, die sich wegräumen lassen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Layoutdichte}} › {{ui:Kompakt}} bringt mehr auf den Bildschirm (Touchscreens und Telefone behalten ihre großen Schaltflächen). Jeder seitliche Bereich hat eine schmale Titelleiste: Ziehen Sie sie, um den Bereich anzudocken oder schweben zu lassen, legen Sie sie auf der Leiste eines anderen Bereichs ab, damit beide als Registerkarten einen Rahmen teilen, heften Sie ihn an, damit er an den Rand wegrutscht, oder blenden Sie ihn aus und holen Sie ihn vom Rand zurück. Siehe [Die Bereiche anordnen](common:arrange-panels#make-the-layout-denser).
- **Dialoge lassen sich verschieben.** Ziehen Sie ein Dialogfeld an seiner Titelleiste aus dem Weg der Zeichnung; es kommt dort zurück, wo Sie es gelassen haben. Doppelklicken Sie auf die Titelleiste, um es wieder zu zentrieren. Siehe [Ein Dialogfeld verschieben](common:arrange-panels#move-a-dialog).
- **Rezepte für KI-Assistenten.** Zehn ausgearbeitete Anfragen für Ihren eigenen Assistenten (eine Zeichnung aufräumen, einen Satz plotten, Zeichnungen prüfen, einem Modell Fragen stellen, eine Mengenermittlung summieren, eine Bauteilvariante ausprobieren …), jeweils mit den Werkzeugen, die er aufruft, und den Berechtigungen, die er braucht, und jede von unseren Tests nachgespielt. Die Apps enthalten keine KI. Siehe [Rezepte für KI-Assistenten](common:assistants-recipes).
- **Sprachen.** **Português (Portugal)** ist neu unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Sprache}}. Es, **Português (Brasil)**, **Español (México)** und **Bahasa Indonesia** haben jetzt jedes Wort der Apps, als Entwürfe, die noch nicht von Muttersprachlern geprüft wurden. Die Hilfethemen sind auf Englisch.
- **CadCraft Studio** nennt den Grund, warum eine Updateprüfung fehlgeschlagen ist (noch keine Datei für Ihr System, kein Netz, eine ungültige Signatur), statt nur „Fertig“, und bringt eine geschlossene Karte „Neu“ nicht mehr zurück, bis es eine neuere Version gibt.

## Noch nicht in dieser Version

- **0.7 ist nicht codesigniert.** Das Signieren und das Paket für den Microsoft Store sind auf 0.8 verschoben, weil die Zertifikatsprüfung noch nicht durch ist. Prüfen Sie den SHA-256-Wert neben jeder Datei auf getcadcraft.com/download. Wenn unter Windows SmartScreen das Installationsprogramm aufhält, wählen Sie {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}. Klicken Sie auf einem Mac beim ersten Mal mit der rechten Maustaste auf CadCraft Studio und wählen Sie {{ui:Öffnen}}. CadCraft Studio ist noch in keinem App-Store, und es gibt noch keinen Build für iPad oder iPhone.
- Die Listen für Winkel und Gefälle unter {{ui:Einheiten}} werden gespeichert, aber noch liest sie kein Feld.
- Baustellenvorgänge werden in einer Live-Sitzung von CadCraft Studio nicht geteilt (Live-Sitzungen übertragen nur Markierungen); führen Sie Kopien mit {{ui:Zusammenführen}} zusammen.
- Das Zusammenführen übernimmt einen Vorgang als Ganzes aus der zuletzt geänderten Kopie: Haben zwei Personen verschiedene Felder eines Vorgangs geändert, gewinnen die Felder der späteren Kopie. Unterhaltungen und Anhangsnamen werden zusammengeführt.
- Anhänge sind nur Namen; die Dateien bleiben, wo sie sind. Es gibt keine Teams, Benachrichtigungen oder Cloud-Projekte für Vorgänge, und Assistenten haben noch keine Werkzeuge für Vorgänge.
- Baustellenvorgänge wurden in einem Browser in Telefon- und Tabletgröße bei getrenntem Netz getestet, aber noch nicht von Hand auf einem echten Tablet.
- Noch aus 0.6: Seitenobjekte um beliebige Winkel drehen, neue Formen direkt in die Seite zeichnen, Schriftart oder -größe einer Zeile ändern und Text, der über mehrere Zeilen fließt. Eine gespeicherte Kopie mit Seitenänderungen wurde noch nicht in Acrobat geöffnet.
- Noch aus 0.5: eine Seitenänderung rückgängig machen (etwa das Hinzufügen einer leeren Seite), Text aus gescannten Blättern lesen und Live-Sitzungen über Ihr eigenes Netz hinaus.

Alles Übrige steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet).
