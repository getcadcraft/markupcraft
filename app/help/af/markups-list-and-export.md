---
title: Die opmerkingslys, filters en uitvoere
summary: Sien elke opmerking in die stel, filtreer volgens blad, outeur, status en tipe, spring na een, en voer die lys uit as CSV of BCF.
keywords: opmerkingslys, lys, opsomming, xlsx, sigbladwerkboek, werkboek, pdf-verslag, voer bcf in, filter, sorteer, verslag, uitvoer, csv, sigblad, bcf, bcfzip, kwessies, kommentaarlys, spring
from: 6c70261e
---

## Maak die lys oop

Kies die {{ui:Opmerkings}}-oortjie aan die regterkant. Elke opmerking van elke oop lêer word gelys, in bladvolgorde en dan in die volgorde waarin hulle gemaak is. Elke ry wys:

- 'n ikoon in die opmerking se kleur, sy afwerkingsnommer as hy een het ("#4"), en sy onderwerp,
- sy teks, stempelwoorde of gemete waarde, en sy kommentaar,
- die blad, die outeur en die datum,
- sy status (of "Lees-alleen" vir kommentaar wat saam met die lêer gekom het), en 'n antwoordtelling wanneer hy antwoorde het.

Die reël bo die lys tel hulle: "38 opmerkings", of "12 van 38 opmerkings" wanneer gefiltreer.

## Spring na 'n opmerking

Klik op 'n ry. MarkupCraft wys daardie blad, kies die opmerking, en zoem daarna as hy buite die skerm is of te klein is om te sien. {{ui:Eienskappe}} het sy besonderhede en draad wanneer jy terug na daardie oortjie skakel.

## Filtreer

Vier kieslyste bo die lys. Hulle kombineer.

| Kieslys | Keuses |
|---|---|
| {{ui:Blad}} | Alle blaaie, Hierdie blad (volg jou wanneer jy blaaie verander), of enige blad wat opmerkings het |
| {{ui:Outeur}} | Enigiemand, of elke outeur in die stel |
| {{ui:Status}} | Enige status, Oop, Aanvaar, Verwerp, Voltooi |
| {{ui:Tipe}} | Enige tipe, of elke soort opmerking in die stel |

Voorbeelde:

- Wat nog op hierdie blad oop is: {{ui:Blad}} "Hierdie blad", {{ui:Status}} "Oop".
- Een konsultant se kommentaar: {{ui:Outeur}} hul naam.
- Alle metings: {{ui:Tipe}} "Lengte" of "Oppervlakte".

Die lys wys tot 2000 rye; beperk dit met 'n filter in baie groot stelle.

## Uitvoer na CSV

Kies {{ui:CSV}} bo-aan die oortjie. Jy kry "<naam> markups.csv" met **die opmerkings soos nou gefiltreer**, een per ry, met hierdie kolomme:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- "Text" hou die woorde van teksblokkies en aanwysings, 'n stempel se woorde, of 'n telgroep se naam.
- "Measurement" hou lengtes, "area, perimeter" vir oppervlaktes, en "group: n" vir tellings.
- Datums is volle tydstempels in UTC.

Om alles uit te voer, stel eers elke filter terug na sy eerste keuse.

## 'n Legenda op die blad

{{ui:Legenda}} in die {{ui:Opmerkings}}-oortjie sit 'n legenda bo-regs van wat jy sien: 'n boks wat elke soort opmerking op die blad lys (volgens onderwerp en kleur, soos "Wolk", "Vraag" of "Uitlaatpunte") met hoeveel daar is. 'n Telgroep tel sy merkings. Die legenda hou aan tel soos jy teken, skuif of skrap, en dit druk en stoor saam met die tellings van daardie oomblik.

Skuif en verander grootte soos enige opmerking. Verander in sy {{ui:Eienskappe}} sy {{ui:Titel}}, of stel {{ui:Tellings}} op {{ui:Die hele stel}} om elke blad te tel. Spasies, ander legendas en kommentaar van ander programme word nie getel nie.

## Jou eie kolomme, en sorteer

{{ui:Kolomme}} in die {{ui:Opmerkings}}-oortjie voeg kolomme van jou eie by elke opmerking: 'n **teks**, 'n **keuse** (soos Ambag: Meganies, Elektries, Loodgieter), 'n **getal** (soos Koste) of 'n **datum**. Gee elk 'n naam, kies sy soort, lys die keuses vir 'n keuse-kolom, en kies {{ui:Stoor kolomme}}.

- Vul hulle in onder {{ui:Eienskappe}}: elke kolom het 'n veld daar. 'n Getal-kolom neem slegs getalle, 'n datum-kolom 'n datum.
- Die lys wys die waardes onder elke opmerking, die {{ui:Kolom}}-filter kies een waarde (of die opmerkings waar dit leeg is), en {{ui:Sorteer}} orden die lys volgens 'n kolom, outeur, status, soort of datum, in plaas van volgens blad.
- CSV- en XLSX-uitvoere dra die kolomme na die gewone een. Die kolomme word saam met die PDF gestoor en kom terug wanneer jy dit weer oopmaak.

## Voer 'n opsomming uit: werkboek of PDF

- {{ui:XLSX}} laai "<naam> markup summary.xlsx" af met drie blaaie: **Markups** (een ry per gelyste opmerking, dieselfde kolomme as die CSV), **By sheet** (hoeveel opmerkings elke blad het, oop en gesluit, en hoeveel van elke soort, met totale) en **Punch list** (wanneer daar afwerkingsitems is).
- {{ui:PDF}} laai "<naam> markup summary.pdf" af: 'n verslag om te druk of te stuur, met die stel se naam, die datum en 'n tabel van die gelyste opmerkings (nommer, blad, soort, onderwerp, teks of kommentaar, gemete waarde, outeur, status en die laaste antwoord). Lang teks omvou; die tabelkop herhaal op elke bladsy.

Albei neem die lys soos dit gefiltreer is, so filtreer eers om een blad, een outeur, of net die oop items te rapporteer.

## Uitvoer na BCF

Kies {{ui:BCF}}. MarkupCraft maak 'n prent van elke gelyste opmerking op sy blad ("Maak snapshots vir BCF (3 van 12)…"), en laai dan "<naam> markups.bcfzip" af. Elke opmerking word een BCF-onderwerp met sy status, outeur, datums, antwoorde as kommentaar, toegewysde en sperdatum uit sy afwerkingsitem, en die snapshot.

Gebruik dit om hersieningskommentaar van tekeninge in BIM-koördinasie-instrumente te kry wat BCF lees. Wat oorgedra word, en wat nie, is in [BCF-grondbeginsels](topic:bcf-basics).

## Voer BCF in

{{ui:Voer BCF in}} lees 'n .bcfzip (of .bcf) lêer van 'n BIM-instrument:

- Kwessies wat van MarkupCraft se eie BCF-uitvoer kom, vind hul opmerkings weer: nuwe antwoorde word by die draad gevoeg, en 'n nuwe status (Gesluit tel as Voltooi) word gestel. Antwoorde wat reeds daar is, word nie twee keer gevoeg nie.
- Ander kwessies word notas, met hul titel, beskrywing, outeur en kommentaar. 'n Nota kom op die blad waarvan die nommer of naam die kwessie se etikette gee, anders op die oop blad. 'n BIM-kamera het geen plek op papier nie, so sulke notas word bo-links op die blad opgestapel vir jou om te skuif.

Die hele invoer is een stap: {{key:Mod+Z}} neem dit terug. Sien [BCF-grondbeginsels](topic:bcf-basics).

## Wat die lys nog nie doen nie

- Groepering van die lys (sorteer, dan filtreer, in plaas daarvan).
- Verander waardes in die lys (verander in {{ui:Eienskappe}}; afwerkingsvelde is wysigbaar in die {{ui:Afwerkingslys}}-oortjie).
