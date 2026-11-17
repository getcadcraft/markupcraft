---
title: Markups selecteren, verplaatsen en wijzigen
summary: Kies markups door te klikken of met een venster, verplaats, wijzig het formaat, schuif ze bij, knip, kopieer, plak, plak op dezelfde plaats, dupliceer, verwijder en maak ongedaan.
keywords: selecteren, selectie, alles selecteren, niets selecteren, venster, kruisvenster, verplaatsen, formaat wijzigen, grips, handvatten, bijschuiven, knippen, kopiëren, plakken, op dezelfde plaats plakken, dupliceren, klembord, ander tabblad, verwijderen, ongedaan maken, opnieuw, bewerken
from: 62c7def3
---

Kies eerst {{ui:Selecteren}} ({{key:V}}). Met {{key:Esc}} komt u er ook: de eerste keer wist die de selectie, de volgende keer schakelt u terug naar {{ui:Selecteren}}.

## Markups kiezen

:::mouse
- **Eén markup:** klik erop. Er verschijnt een gestreept kader met handvatten, en {{ui:Eigenschappen}} toont hem.
- **Eén toevoegen of verwijderen:** houd {{key:Shift}} ingedrukt en klik.
- **Volledig binnen een venster:** sleep van links naar rechts over een leeg deel van het blad. Alleen markups die helemaal binnen het kader liggen worden gekozen (ononderbroken omlijning).
- **Een venster raken:** sleep van rechts naar links. Alles wat het kader raakt wordt gekozen (groen, gestreepte omlijning).
- **Alles op dit blad:** {{key:Mod+A}}, of {{ui:Meer}} en dan {{ui:Alles selecteren}} in de groep {{ui:Bewerken}} van de werkbalk.
- **Niets:** klik op een lege plek, druk op {{key:Esc}}, of kies {{ui:Meer}} en dan {{ui:Niets selecteren}}.
:::

:::touch
- **Eén markup:** tik erop.
- **Meerdere:** sleep één vinger over een leeg deel van het blad om een venster te tekenen. Van links naar rechts kiest wat volledig binnen ligt; van rechts naar links kiest wat het raakt.
- Tikken met {{key:Shift}} ingedrukt werkt alleen met een aangesloten toetsenbord. Zonder toetsenbord gebruikt u een venster.
- Met één vinger verschuift u nooit in {{ui:Selecteren}}; gebruik twee vingers, of het gereedschap {{ui:Verschuiven}}.
:::

Alleen-lezen opmerkingen die bij het bestand kwamen, tonen een grijs gestreept kader zonder handvatten. Ze kunnen worden geselecteerd en beantwoord, maar niet gewijzigd.

## Verplaatsen en formaat wijzigen

- **Verplaatsen:** sleep een geselecteerde markup. Houd {{key:Shift}} ingedrukt om alleen langs veelvouden van 45° te verplaatsen. Meerdere geselecteerde markups verplaatsen samen.
- **Formaat wijzigen:** kies één markup en sleep een handvat. Vierkante handvatten wijzigen het kader (houd {{key:Shift}} voor dezelfde verhoudingen); ronde handvatten verplaatsen één hoekpunt van een lijn, polylijn, veelhoek, wolk of meting (houd {{key:Shift}} voor 45°); ruitvormige handvatten verplaatsen de punt en de knik van een callout. Pen-streken schalen vanuit hun kader.
- **Bijschuiven:** druk op de pijltjestoetsen om de selectie één schermpixel te verplaatsen; houd {{key:Shift}} voor tien. Elke keer drukken is één stap ongedaan maken.

## Tekst of uiterlijk wijzigen

- **Tekst, callouts en notities:** dubbelklik op de markup, of druk op {{key:Enter}}, of kies {{ui:Op het blad bewerken}} in {{ui:Eigenschappen}}. Typ, en klik daarna buiten het veld of druk op {{key:Mod+Enter}}. {{key:Esc}} annuleert de bewerking.
- **Stempels:** kies een ander stempel in {{ui:Eigenschappen}} (dubbelklikken opent {{ui:Eigenschappen}} voor u).
- **Stijl:** {{ui:Kleur}}, {{ui:Lijndikte}}, {{ui:Vulling}}, {{ui:Dekking}} en {{ui:Tekstgrootte}} onder "Stijl" in {{ui:Eigenschappen}}. Met meerdere geselecteerd toont {{ui:Eigenschappen}} de soorten die u koos en wijzigt ze allemaal tegelijk.

## Kopiëren, plakken en dupliceren

De groep {{ui:Bewerken}} op de werkbalk heeft {{ui:Kopiëren}} en {{ui:Plakken}}; het menu {{ui:Meer}} heeft al deze opdrachten, elk met de sneltoets.

| Opdracht | Toets | Wat het doet |
|---|---|---|
| {{ui:Knippen}} | {{key:Mod+X}} | Kopieert de geselecteerde markups en verwijdert ze |
| {{ui:Kopiëren}} | {{key:Mod+C}} | Kopieert de geselecteerde markups |
| {{ui:Plakken}} | {{key:Mod+V}} | Zet een kopie op het blad waarop u staat (waar, zie hieronder) |
| {{ui:Op dezelfde plaats plakken}} | {{key:Mod+Shift+V}} | Zet de kopie precies op de plek waar hij is gekopieerd: op hetzelfde blad, bovenop het origineel; op een ander blad, op dezelfde plaats op het papier |
| {{ui:Dupliceren}} | {{key:Mod+D}} | Maakt een kopie van de selectie een stukje naar beneden en rechts, zonder wat u eerder kopieerde te wijzigen |

**Waar Plakken de kopie zet:**

- {{key:Mod+V}} met de aanwijzer op het blad zet de kopie gecentreerd op de plek van de aanwijzer. Verplaats de aanwijzer, druk nogmaals op {{key:Mod+V}}, en u plaatst een andere.
- De knop {{ui:Plakken}} (dan staat de aanwijzer op de werkbalk), of {{key:Mod+V}} met de aanwijzer buiten het blad, zet de kopie een stukje naar beneden en rechts van het origineel. Elke keer dat dezelfde kopie wordt geplakt, schuift hij een stapje verder, zodat kopieën elkaar nooit verbergen. Op een ander blad komt de eerste keer plakken op de plek waar het origineel op zijn blad stond. Ligt die plek buiten beeld, dan komt de kopie in het midden van het beeld.
- Om {{key:Mod+V}} altijd naast het origineel te laten plakken, kiest u {{ui:Naast de kopie}} onder {{ui:Plakken}} in [MarkupCraft-instellingen](topic:settings).

De geplakte markups zijn geselecteerd, zodat u ze meteen kunt slepen. Elk knippen, plakken of dupliceren is één stap ongedaan maken: {{key:Mod+Z}} haalt het hele plakken weer weg.

Geplakte kopieën zijn nieuwe markups: ze krijgen uw naam, de datum van vandaag, de status Open, geen puntnummer en een lege draad. Soort, vorm, stijl, tekst en opmerking komen mee. Alleen-lezen opmerkingen die bij het bestand kwamen, kunnen niet worden gekopieerd of geknipt.

**Tussen tabbladen:** wat u kopieert wordt ook in deze browser bewaard, zodat een ander MarkupCraft-tabblad in dezelfde browser het kan plakken. Markups kopiëren gebruikt het klembord van de computer niet: u kunt ze niet in een ander programma plakken, en tekst die u elders kopieerde wordt niet als markup geplakt.

**Menu met de rechtermuisknop:** klik met de rechtermuisknop op een markup (of op leeg papier) voor {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Hier plakken}}, {{ui:Op dezelfde plaats plakken}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Selectie opslaan als stempel…}}, {{ui:Bij opslaan platmaken in de pagina}}, {{ui:Hier een afbeelding invoegen…}} en {{ui:Alles selecteren}}. Met rechts klikken op een markup die niet geselecteerd is, selecteert u hem eerst. Slepen met de rechtermuisknop verschuift nog steeds. Op een touchscreen opent een lange druk op een markup hetzelfde menu (op tekst begint het bewerken van de tekst). De menutoets of {{key:Shift+F10}} opent het menu bij de selectie.

Pagina-inhoud die met het gereedschap {{ui:Inhoud}} is geselecteerd, kan ook worden gekopieerd en geplakt: zie [De eigen lijnen, afbeeldingen en tekst van de pagina wijzigen](topic:page-content).

Om een deel van de pagina zelf als afbeelding te kopiëren (een rechthoek, ellips of vrije vorm), of als doorzichtige overlay voor een ander blad of programma, zie [Een gebied van de pagina of een overlay kopiëren](topic:copy-an-area).

## Verwijderen

Druk op {{key:Delete}} of {{key:Backspace}}, kies {{ui:Meer}} en dan {{ui:Verwijderen}} op de werkbalk, of kies {{ui:Verwijderen}} in {{ui:Eigenschappen}}. De statusbalk zegt hoeveel er zijn verwijderd. Alleen-lezen opmerkingen uit het bestand worden nooit verwijderd ("bewaard zoals in het bestand").

## Ongedaan maken en opnieuw

- {{key:Mod+Z}} maakt ongedaan, {{key:Mod+Y}} of {{key:Mod+Shift+Z}} maakt opnieuw. De werkbalk heeft {{ui:Ongedaan maken}} en {{ui:Opnieuw}}.
- De statusbalk zegt wat ongedaan is gemaakt ("Verplaatsen van markup ongedaan gemaakt.").
- Ongedaan maken dekt elke wijziging aan markups, statussen, antwoorden, puntenlijst-items, bladschalen en bladnamen, tot 500 stappen.
- De geschiedenis wordt gewist wanneer u de set sluit.

## Markups naar andere bladen kopiëren

Om dezelfde stempel, notitie of wolk op meerdere bladen te zetten, selecteert u hem (of meerdere markups) en kiest u {{ui:Naar andere bladen kopiëren…}} in {{ui:Eigenschappen}}. Vink de bladen aan, of kies {{ui:Alle bladen}}, en kies {{ui:Kopiëren}}. Elk blad krijgt een kopie op dezelfde plek op de pagina, ondertekend met uw naam. Eén {{key:Mod+Z}} verwijdert ze allemaal.
