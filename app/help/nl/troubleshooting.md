---
title: Problemen oplossen
summary: Berichten die MarkupCraft toont en wat u eraan kunt doen, plus oplossingen voor dingen die niet lijken te werken.
keywords: probleem, fout, werkt niet, help, bericht, opent niet, kan niet opslaan, wachtwoord, beveiligd, meting geweigerd, ijken, offline, leeg, traag, verloren markups, vraagtekens
from: bb650b39
---

De meeste problemen worden uitgelegd in de statusbalk onderaan het scherm. Lees die eerst.

## Bestanden openen

**"MarkupCraft opent PDF-bestanden. "x" is geen PDF."**
U koos of sleepte iets anders. Alleen PDF's worden geopend. Exporteer tekeningen eerst als PDF uit uw CAD-programma.

**'"naam" heeft een wachtwoord nodig om te openen. Open een niet-beveiligde kopie.'**
De PDF is met een wachtwoord beveiligd. Vraag de afzender om een niet-beveiligde kopie, of open hem in een PDF-programma waarvan u het wachtwoord kent, en sla een kopie op zonder wachtwoord.

**'"naam" kon niet als PDF worden gelezen (…)'**
Het bestand is beschadigd of is niet echt een PDF (een onvolledige download, een e-mailbijlage die is afgekapt). Download het opnieuw. Kunnen andere PDF-programma's het openen, gebruik dan hun "opslaan als" om een schone kopie te maken en open die.

**"Sommige bestanden zijn niet geopend"**
Als u er meerdere tegelijk opent, toont dit vak welke bestanden zijn mislukt en waarom. De andere zijn geopend.

**"De PDF-lezer kon niet laden: …"**
De PDF-engine kon niet worden opgehaald. Online: laad de pagina opnieuw en probeer het nog eens; controleer of een firewall of contentblokkering de site niet blokkeert. Offline: MarkupCraft is in deze browser niet voor offline gebruik opgeslagen (de balk bovenaan zegt niet "Offline gereed"). Ga online, kies {{ui:Opslaan voor offline gebruik}} en wacht tot "Offline gereed" verschijnt. Zie [Offline werken](common:offline).

**"Sommige annotaties kunnen twee keer op het scherm verschijnen" of "Extra details van annotaties konden niet worden gelezen"**
De bestaande opmerkingen van het bestand zijn ongebruikelijk. Ze worden toch zo goed mogelijk geopend; controleer ze voordat u erop vertrouwt. Opslaan werkt nog steeds.

**Het blad heeft de verkeerde naam, of "pagina 3"**
Zie [Hoe bladen hun naam krijgen](topic:open-a-plan-set#how-sheets-get-their-names). Gescande bladen hebben geen tekst om te lezen; gebruik {{ui:Blad hernoemen}}.

**Dezelfde bladen verschijnen twee keer**
Hetzelfde bestand is twee keer geopend. Kies {{ui:Sluiten}} (sla eerst op als dat nodig is) en open de set opnieuw.

## Tekenen en selecteren

**Er gebeurt niets als ik op het blad klik**
Controleer welk gereedschap is ingedrukt in de werkbalk, en lees de statusbalk. Bij {{ui:Rechthoek}}, {{ui:Ellips}} en {{ui:Wolk}} tekent een klik zonder slepen niets: sleep. Bij {{ui:Polylijn}}, {{ui:Veelhoek}}, {{ui:Vrije wolk}} en {{ui:Oppervlakte}} worden punten toegevoegd: rond af met een dubbelklik of {{key:Enter}}.

**"Een veelhoek heeft minstens 3 punten nodig." (of 2 voor een polylijn)**
Klik meer punten voordat u afrondt.

**"Niets getypt, dus er is geen tekst toegevoegd."**
Tekstvakken en callouts worden alleen bewaard als ze tekst hebben. Teken het opnieuw en typ voordat u ergens anders klikt.

**"De twee punten zijn gelijk. Klik op twee verschillende punten."**
Voor lijnen, pijlen, lengten en ijken moeten de twee uiteinden uit elkaar liggen. Sleep, of klik twee keer op verschillende plekken.

**Ik kan een markup niet verplaatsen of verwijderen; hij heeft een grijs stippelkader**
Het is een alleen-lezen opmerking die met het bestand is meegekomen (bijvoorbeeld een tekstmarkering). MarkupCraft houdt hem zoals hij is: u kunt er alleen op reageren. De statusbalk zegt "alleen-lezen markup(s) worden bewaard zoals in het bestand".

**Mijn toetsen typen letters in een vak in plaats van gereedschappen te kiezen**
De cursor staat in een tekstvak (een reactie, een veld in {{ui:Eigenschappen}}, het zoeken in het blad). Klik eerst op een leeg deel van het bladgebied, of druk op {{key:Esc}} als u markuptekst bewerkt.

**Spatie verschuift niet, of pijltjestoetsen doen niets**
U hebt net op een werkbalkknop geklikt, die heeft daardoor nog het toetsenbord. Sleep dan met de middelste muisknop, of klik één keer op het blad met {{ui:Selecteren}} aan, en probeer het opnieuw. Zie ook [Toetsenbord en muis](topic:keyboard#when-a-key-does-nothing).

**Een knijpbeweging op het touchscreen liet een spoor achter**
Een sleepgereedschap (pen, wolk, rechthoek) startte voordat de tweede vinger kwam, en eindigde voordat het werd geannuleerd. Druk op {{ui:Ongedaan maken}}. Zet beide vingers tegelijk neer als u wilt zoomen.

## Meten

**"Ijk dit blad eerst: kies twee punten op een bekende afstand van elkaar, of kies de schaal. Meet daarna."**
Elk blad heeft zijn eigen schaal nodig voordat {{ui:Lengte}} of {{ui:Oppervlakte}} werkt. MarkupCraft is overgeschakeld naar {{ui:IJken}}: klik op de twee uiteinden van een bekende maat en typ de lengte, of klik op de schaalknop in de statusbalk en kies een schaal. Zie [Een blad ijken en meten](topic:calibrate-and-measure).

**'Dat is geen lengte die MarkupCraft begrijpt.'**
Typ het zoals `24'-0"`, `12' 6 1/2"`, `7.2 m` of `900 mm`. Zie [Eenheden, lengten en schalen](topic:units-and-scales).

**Metingen zijn een beetje of heel erg fout**
- Een vooraf ingestelde schaal op een PDF die niet op ware grootte is, meet verkeerd. Ijk in plaats daarvan op een lange bekende maat.
- Een duizendtalscheidingsteken werd als decimaalteken gelezen: `1,200 mm` betekent 1.2 mm. Typ `1200 mm`.
- Zoom in wanneer u de uiteinden aanklikt.
- De tekening is misschien niet op schaal ("NTS").

**"Selecteer eerst een telgroep, en Shift+klik dan op een markering om die te verwijderen."**
Kies {{ui:Selecteren}}, klik op de telgroep, kies daarna opnieuw {{ui:Tellen}} en {{key:Shift}}-klik op de stip.

## Opslaan

**"Deze PDF is beveiligd (versleuteld), dus een gemarkeerde kopie kan niet worden geschreven."**
Het bestand verbiedt wijzigingen. Vraag om een niet-beveiligde kopie. Ondertussen kunt u de lijst met markups nog wel exporteren als CSV of BCF.

**"De PDF-schrijver kon niet laden: …"**
Meestal bent u offline en is de app niet voor offline gebruik opgeslagen (geen "Offline gereed" in de balk bovenaan). Uw markups staan nog in het tabblad: laat het open, ga online en kies {{ui:Opslaan}} opnieuw. Kies daarna {{ui:Opslaan voor offline gebruik}}, zodat het de volgende keer offline werkt; de opgeslagen kopie bevat de PDF-schrijver.

**"Kon <bestand> niet opslaan"**
Het vak laat zien waarom. Uw markups staan nog in het tabblad. Probeer het opnieuw; herhaalt het zich, exporteer dan de CSV zodat de opmerkingen niet verloren gaan, en meld het bericht.

**Ik koos Opslaan, maar er kwam maar één bestand aan**
Uw browser heeft de extra downloads geblokkeerd. Zoek naar een melding in de adresbalk, sta deze site toe om meerdere bestanden te downloaden, en sla daarna opnieuw op.

**Ik kan het opgeslagen bestand niet vinden**
Het is naar de downloadmap van uw browser gegaan. Open de downloadlijst van de browser (in Chrome en Edge: {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; in Firefox en Safari: de downloadknop in de werkbalk) om te zien waar het staat. Zie [Browsers en computers](common:browsers).

**Sommige tekst toont "?" in andere PDF-viewers**
Tekens buiten de West-Europese tekenset worden in de kopie als "?" afgedrukt. Het opslagbericht telt ze. Zie [De gemarkeerde PDF opslaan](topic:save-the-marked-up-pdf).

**De stempel toont morgens- of gisterensdatum**
Stempeldata zijn in UTC. Zie [Stempels en plaknotities](topic:stamps-and-notes).

## Offline werken

**De offlineknop zegt "Kon niet opslaan"**
Sommige bestanden van de app zijn niet gedownload. Controleer de verbinding en klik opnieuw op de knop; er wordt "N van M opslaan" geteld tot "Offline gereed".

**De offlineknop zegt "Offline niet beschikbaar"**
Dit browservenster kan geen offlinekopie bewaren: een privévenster, of een computer waarvan het beleid dat blokkeert. Open MarkupCraft in een normaal venster en probeer het opnieuw.

**Offline is de app een oudere versie**
De offlinekopie is de versie die u opsloeg. Als u online bent, klik op "Offline gereed" en kies "Opnieuw opslaan (de nieuwste versie ophalen)". Om de ruimte vrij te maken, kies "De offlinekopie verwijderen". Zie [Offline werken](common:offline).

**De help opent niet**
Druk op {{key:F1}} (op een Mac met **fn**), of kies {{ui:Help}} in de bovenbalk. Het werkt ook offline.

## Verloren dingen

**Mijn markups zijn weg na het sluiten of opnieuw laden van het tabblad**
Open MarkupCraft opnieuw in dezelfde browser: het biedt het niet-opgeslagen werk weer aan met "Uw werk herstellen?". Kies {{ui:Herstellen}} en sla de PDF op. Kopieën worden tot 30 dagen bewaard; een privévenster of het wissen van sitegegevens laat er geen over. Zie [Uw werk herstellen](common:recover).

**Mijn naam, gereedschapsinstellingen of gereedschapskist zijn weg**
Die worden alleen in deze browser bewaard en zijn gewist (sitegegevens gewist, een privévenster, een andere browser of computer, of Safari's opruiming van sites die een tijd niet zijn bezocht). Stel de naam opnieuw in en importeer uw geëxporteerde kist. Zie [Wat in deze browser blijft](topic:browser-storage).

**"De gereedschapskist kon niet in deze browser worden bewaard (opslag is uit of vol). Exporteer haar om haar te bewaren."**
De browser weigert gegevens voor deze site op te slaan (privémodus, opslag geblokkeerd door een instelling of beleid, of vol). Exporteer de kist na het wijzigen, en importeer haar de volgende keer.

## Weergave en snelheid

**Het blad ziet er even wazig uit**
MarkupCraft toont een snelle, ruwe weergave terwijl u zoomt of verschuift, en tekent het scherp opnieuw een moment nadat u stopt.

**Alles is traag met een grote set**
Sluit andere zware tabbladen, open minder bestanden tegelijk, en zoom niet tot het maximum op enorme bladen. Zie [Met meerdere bestanden tegelijk werken](topic:several-files#big-sets).

**Het blad is donker met lichte lijnen**
U bent in het thema {{ui:Model}}. Kies {{ui:Papier}} in de bovenbalk voor donkere lijnen op wit. Uw markups en de opgeslagen PDF worden niet beïnvloed.
