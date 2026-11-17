---
title: Bladkoppelingen
summary: Laat een markup naar een ander blad springen, en koppel elke bladaanwijzing zoals 3/A-501 in één keer aan het blad en de weergave met Batchkoppelingen.
keywords: hyperlink, koppeling, koppelingen, springen, bladaanwijzing, detailaanwijzing, doorsnede-aanwijzing, 3/A-501, naar blad gaan, terug, automatisch koppelen, batchkoppeling, batchkoppelingen, titelblok, bladnummer, bladnaam, weergave, detail, hernoemen, hernummeren, addendum, pdf-koppeling
from: 86a17c37
---

Een bladkoppeling brengt u van een markup naar een ander blad van de set: van een detailbelletje naar het detail, van een notitie naar het blad waarnaar die verwijst.

## Een markup aan een blad koppelen

1. Selecteer de markup.
2. Kies in {{ui:Eigenschappen}} het blad onder {{ui:Koppelen aan blad}}.

Er verschijnt een klein pijltje rechtsboven op de markup. Om het te volgen houdt u {{key:Mod}} ingedrukt en klikt u op de markup, of selecteert u hem en kiest u {{ui:Ga naar …}} in {{ui:Eigenschappen}}. {{key:Alt+Left}} brengt u terug naar het blad waar u vandaan kwam.

Een koppeling noemt het blad bij zijn nummer, dus die blijft werken nadat u de set opnieuw opent of een nieuwe uitgifte als slipblad invoegt: hij opent het nieuwste blad met dat nummer. Is dat blad niet geopend, dan zegt de statusbalk dat.

## Elke bladaanwijzing in één keer koppelen

Kies {{ui:Pagina's}} › {{ui:Batchkoppelingen…}}, of {{ui:Bladaanwijzingen koppelen…}} onder {{ui:Tekst zoeken}} bovenaan het paneel {{ui:Bladen}}.

1. **Controleer de bladnummers.** MarkupCraft toont elk geopend blad met het nummer en de naam die het uit het titelblok van het blad (of het paginalabel) las, en waar elk vandaan kwam. Verbeter wat fout is, en typ een nummer waar het er geen vond (een titelblok waarvan het nummer als lijnen is geplot, heeft geen tekst om te lezen). Kies daarna {{ui:Callouts zoeken}}. Uw correcties zijn één stap ongedaan te maken, en ze worden de paginalabels in de opgeslagen pdf.
2. **Bekijk de lijst.** MarkupCraft leest de tekst van elk blad op aanwijzingen zoals "3/A-501", "5 / A501", "DETAIL 2 ON A-501", een belletje met "3" boven "A-501", of een gewoon "A-501" in een notitie, en leest de weergavetitels van elk blad (een detailnummer met het bladnummer eronder, of een groot nummer met een titel ernaast). De lijst heeft drie delen:
   - {{ui:Wordt gekoppeld}}: elke aanwijzing, het blad waar die naartoe gaat en de weergave op dat blad. Vink uit wat u niet wilt. Is de weergave niet gevonden (een aanwijzing naar weergave 7 op een blad met weergaven 1 tot en met 6), kies dan de weergave uit de lijst ernaast, of laat {{ui:Heel blad}} staan.
   - {{ui:Niet gekoppeld}}: bladnummers die geen geopend blad heeft, met het aantal aanwijzingen dat elk noemt. Kies het blad dat elk betekent (bijvoorbeeld een blad dat is hernummerd), en elke aanwijzing naar dat nummer koppelt ernaar. Of laat het niet gekoppeld.
   - Hoeveel aanwijzingen al gekoppeld zijn en nog naar de juiste plek gaan. Die blijven zoals ze zijn.
3. Kies {{ui:De koppelingen maken}}.

Elke aanwijzing krijgt een dun blauw kader dat een bladkoppeling is. {{key:Mod}}+klik erop opent het blad ingezoomd op de weergave. Eén {{key:Mod+Z}} verwijdert ze allemaal.

Codes die alleen op bladnummers lijken, zoals R-19 of W12X26, worden weggelaten: een aanwijzing moet de vorm hebben van de bladnummers van de set. Het eigen nummer van een blad, in het titelblok en in de weergavetitels, is nooit een aanwijzing. Gescande bladen hebben geen tekst om te lezen: gebruik eerst {{ui:Tekst lezen (OCR)…}}, of koppel hun aanwijzingen één voor één.

## Opnieuw uitvoeren als de set verandert

Batchkoppelingen kunt u zo vaak uitvoeren als u wilt:

- **Een blad is toegevoegd**, bijvoorbeeld een addendum met A-601: open het bestand en voer Batchkoppelingen opnieuw uit. Aanwijzingen naar A-601 die eerder niet gekoppeld waren, worden nu gekoppeld.
- **Een blad is hernummerd**: pas het nummer aan in stap 1. Koppelingen die Batchkoppelingen maakte en die hun blad niet meer vinden, komen onder {{ui:Niet gekoppeld}}; kies het blad één keer en ze volgen het allemaal. Koppelingen die naar een andere weergave zijn verschoven, worden bijgewerkt.
- Koppelingen die u met de hand in {{ui:Eigenschappen}} maakte, worden nooit gewijzigd.

## In de opgeslagen pdf

Een koppeling naar een blad in dezelfde pdf wordt ook als pdf-koppeling geschreven, zodat andere lezers daar ook bij een klik naartoe springen. Een koppeling met een weergave opent die weergave in de andere lezer (de pdf-sprong "fit rectangle"); een koppeling zonder weergave opent het hele blad. Koppelingen naar een blad in een ander bestand van de set werken alleen in MarkupCraft.
