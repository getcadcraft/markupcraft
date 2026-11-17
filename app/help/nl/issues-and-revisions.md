---
title: Issues, revisies en het wijzigingslog van de tekening
summary: Houd één issuegeschiedenis bij met het model van de architect: lees de issues in, leg bouwplaatsinstructies, werkplaatstekeningen en gekoppelde modellen vast bij een issue, en lees het wijzigingslog van de tekening.
keywords: issue, revisie, revisies, wijzigingslog, wijzigingslog tekening, tekeningregister, bouwplaatsinstructie, werkplaatstekening, gekoppeld model, aanbesteding, bouw, issuegeschiedenis, revisiewolk, wolk, markupset, changelog, drawing changelog, drawing register, site instruction, shop drawing, linked model, tender, construction, issue history, revision cloud, cloud, markup set
from: e4688f64
---

## Wat u gaat doen

Werk vanuit dezelfde issuegeschiedenis als de rest van het team. Zie welke bladen bij welke revisie zijn uitgegeven, en houd bij wat op de bouwplaats gebeurt bij het issue waar het bij hoort.

## Stappen

1. Open **Issues en revisies**.
2. Kies **Een issuegeschiedenis lezen** en kies het bestand `.issues.json` dat is opgeslagen vanuit BimCraft of een andere app. De issues en records ervan worden aan de uwe toegevoegd. Er wordt niets vervangen.
3. Kies **Een record toevoegen** voor een bouwplaatsinstructie, een werkplaatstekening, een markupset, een gekoppeld model of een notitie. Kies het issue waar het bij hoort en de status. Een bestand dat u kiest, wordt vastgelegd op naam, grootte en SHA-256; het bestand blijft waar het is.
4. **Wijzigingslog tekening** toont één rij voor elk blad en één kolom voor elk issue. Een revisie tussen haakjes is opnieuw uitgegeven zonder wijzigingen.
5. **Het wijzigingslog downloaden (CSV)** slaat de issues, de bladentabel en de records op. **De issuegeschiedenis opslaan** schrijft een bestand dat de andere apps lezen.

## Goed om te weten

- **De geselecteerde markups registreren** zet de markups die u selecteerde bij het laatste issue. Een wolk wordt geregistreerd als revisiewolk bij de revisie van dat issue. Kies **Tonen** naast het record om ernaartoe te springen.
- **Een issue registreren** geeft uw gemarkeerde bladen uit. **Wijzigingen sinds** toont daarna welke bladen na dat issue zijn gemarkeerd.
- De geschiedenis wordt opgeslagen in de gemarkeerde PDF. Ze valt niet onder Ongedaan maken.
- Het twee keer lezen van hetzelfde bestand voegt niets dubbel toe. Wanneer twee kopieën hetzelfde record bevatten, blijft het nieuwste behouden.
