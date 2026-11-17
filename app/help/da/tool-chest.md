---
title: Værktøjskassen
summary: Gem en markering med dens udseende som et genbrugeligt værktøj, tegn med det, og del din kasse med kontoret som en fil.
keywords: værktøjskasse, værktøjer, værktøjssæt, egne værktøjer, gemte markeringer, favoritter, kontorstandard, importér, eksportér, del, json
from: 7dfa36e0
---

Fanen {{ui:Værktøjer}} rummer din **værktøjskasse**: markeringer gemt med deres udseende, klar til at tegne igen. Et værktøj beholder markeringens type, farve, linjebredde, udfyldning, opacitet, tekststørrelse og emne, samt et stempels ordlyd, en tællings gruppenavn eller startteksten i et tekstfelt eller en henvisning.

## Værktøjerne du starter med

En ny kasse har seks: »Revisionssky« (rød), »Spørgsmålssky« (blå), »Gul fremhævning«, »RFI-henvisning« (blå, starter med »RFI: «), »Kontrollér i marken« (en orange henvisning, der siger »Kontrollér i marken.«) og »Godkendt med bemærkninger« (et stempel).

## Tegn med et værktøj

1. Åbn fanen {{ui:Værktøjer}}.
2. Klik på et værktøj. Det ser trykket ud, og det tilsvarende værktøj på værktøjslinjen aktiveres.
3. Tegn som sædvanligt. {{ui:Egenskaber}} siger »Tegner med "<værktøj>" fra værktøjskassen.«

Mens et kasseværktøj er aktivt, gælder ændringer, du foretager i {{ui:Egenskaber}} før tegning, for det værktøj indtil videre, uden at ændre det gemte værktøj eller dine almindelige værktøjsindstillinger. Vælger du en værktøjslinjeknap, eller trykker på et værktøjs tast, går du tilbage til det almindelige værktøj.

## Gem dine egne

1. Tegn en markering, og stil den, som du vil have den: farve, linje, udfyldning, emne, stempelordlyd.
2. Vælg den.
3. Vælg {{ui:Gem det valgte som værktøj}} i fanen {{ui:Værktøjer}}, eller {{ui:Gem som værktøj}} i {{ui:Egenskaber}}.
4. Skriv et {{ui:Værktøjsnavn}}, og vælg {{ui:Gem værktøj}}.

Resultat: værktøjet føjes til enden af kassen, og fanen {{ui:Værktøjer}} åbner for at vise det.

## Stempler lavet af et valg

Vælg flere markeringer (eller sideindhold med værktøjet {{ui:Indhold}}), og vælg {{ui:Gem valget som stempel…}} i {{ui:Mere}} eller i genvejsmenuen. Kassen får ét stempel, der rummer dem alle (»Stempel: 3 markeringer sammen«). Klik på det, og klik derefter på et hvilket som helst ark: markeringerne lander samlet, centreret, hvor du klikker, som nye markeringer med dit navn; sideindhold tegnes ind på siden dér. Disse stempler gemmes og deles med kassen, ligesom alle andre værktøjer.

## Fjern et værktøj

Vælg × i slutningen af værktøjets række, og derefter {{ui:Fjern}}. Markeringer, der allerede er tegnet med det, forbliver, som de er.

## Hvor kassen gemmes

Kassen gemmes **i denne browser, på denne computer**. En anden browser eller computer har sin egen kasse (der starter med de seks standardværktøjer), et privat vindue glemmer den, når det lukkes, og rydning af dette websteds data i browserens indstillinger sletter den.

Hvis browseren ikke vil gemme den (lagring slået fra, eller fuld), siger statuslinjen: »Værktøjskassen kunne ikke gemmes i denne browser (lagring er slået fra eller fuld). Eksportér den for at gemme den.«

:::safari
Safari kan rydde et websteds gemte data, når du ikke har brugt siden i et stykke tid. Eksportér din kasse nu og da, så du kan importere den igen.
:::

**Eksportér din kasse som en sikkerhedskopi**, især efter at du har lavet værktøjer, du stoler på.

## Del en kasse med dit kontor

1. Opsæt værktøjerne én gang.
2. Vælg {{ui:Eksportér}}. Du får »MarkupCraft tool chest.json«.
3. Læg filen, hvor kontoret opbevarer sine standarder, eller send den rundt.
4. Alle andre vælger {{ui:Importér}} i deres fane {{ui:Værktøjer}} og vælger filen.

Resultat: »Importerede 12 værktøjer fra "MarkupCraft tool chest.json".« Værktøjer, der kommer fra samme kasse, erstatter deres ældre kopier, så import af en opdateret kontorkasse opdaterer dem i stedet for at fordoble dem; nye værktøjer føjes til. En kasse rummer op til 500 værktøjer.

MarkupCraft kontrollerer hver værdi i en importeret fil og springer over det, den ikke kan bruge (»2 sprunget over (ikke brugbar)«). Filer, der ikke er en kasse, afvises: »Denne fil er ikke en MarkupCraft-værktøjskasse.« eller »Denne fil er ikke en værktøjskasse (den er ikke JSON).«

Værktøjskassefiler fra andre markeringsprogrammer kan ikke importeres.
