---
title: Problēmu novēršana
summary: Ziņojumi, ko MarkupCraft rāda, un ko ar tiem darīt, kā arī labojumi lietām, kas, šķiet, nedarbojas.
keywords: problēma, kļūda, nedarbojas, palīdzība, ziņojums, neatveras, nevar saglabāt, parole, aizsargāts, mērījums noraidīts, kalibrēt, bezsaistē, tukšs, lēns, pazaudētas atzīmes, jautājumzīmes
from: bb650b39
---

Vairums problēmu ir paskaidrotas ekrāna apakšā esošajā statusjoslā. Vispirms izlasiet to.

## Failu atvēršana

**"MarkupCraft opens PDF files. "x" is not a PDF."**
Jūs izvēlējāties vai nometāt kaut ko citu. Atveras tikai PDF faili. Vispirms eksportējiet rasējumus no savas CAD programmas kā PDF.

**'"name" needs a password to open. Open an unprotected copy.'**
'"name" atvēršanai nepieciešama parole. Atveriet nenoaizsargātu kopiju.'
PDF ir aizsargāts ar paroli. Lūdziet sūtītājam nenoaizsargātu kopiju vai atveriet to PDF programmā, kurā zināt paroli, un saglabājiet kopiju bez paroles.

**'"name" could not be read as a PDF (…)'**
'"name" nevarēja nolasīt kā PDF (…)'
Fails ir bojāts vai nav īsts PDF (nepabeigta lejupielāde, e-pasta pielikums nogriezts). Lejupielādējiet to vēlreiz. Ja citas PDF programmas to var atvērt, izmantojiet to "saglabāt kā", lai izveidotu tīru kopiju, un atveriet to.

**"Some files did not open"**
Kad atverat vairākus uzreiz, šajā lodziņā uzskaitīti neatvērtie faili un iemesls. Pārējie ir atvērti.

**"The PDF reader could not load: …"**
PDF dzinēju nevarēja ielādēt. Tiešsaistē: pārlādējiet lapu un mēģiniet vēlreiz; pārbaudiet, vai ugunsmūris vai satura bloķētājs nebloķē vietni. Bezsaistē: MarkupCraft šajā pārlūkprogrammā netika saglabāts darbam bezsaistē (augšējā joslā nav rakstīts "Gatavs darbam bezsaistē"). Pieslēdzieties internetam, izvēlieties {{ui:Saglabāt bezsaistei}} un uzgaidiet "Gatavs darbam bezsaistē". Skatiet [Darbs bezsaistē](common:offline).

**"Some annotations may show twice on screen" or "Extra annotation details could not be read"**
Faila esošie komentāri ir neparasti. Tie tomēr tiek atvērti, cik labi MarkupCraft spēj; pirms paļaušanās uz tiem pārbaudiet tos. Saglabāšana joprojām darbojas.

**The sheet has the wrong name, or "page 3"**
Lapai ir nepareizs nosaukums vai "page 3". Skatiet [Kā lapas iegūst nosaukumus](topic:open-a-plan-set#how-sheets-get-their-names). Skenētām lapām nav teksta, ko nolasīt; izmantojiet {{ui:Pārdēvēt lapu}}.

**The same sheets appear twice**
Tas pats fails ir atvērts divreiz. Izvēlieties {{ui:Aizvērt}} (vispirms saglabājiet, ja vajadzīgs) un atveriet kopu vēlreiz.

## Zīmēšana un atlase

**Nothing happens when I click on the sheet**
Pārbaudiet, kurš rīks ir nospiests rīkjoslā, un izlasiet statusjoslu. Ar {{ui:Taisnstūris}}, {{ui:Elipse}} un {{ui:Mākonis}} klikšķis bez vilkšanas neko nezīmē: velciet. Ar {{ui:Polilīnija}}, {{ui:Daudzstūris}}, {{ui:Brīvais mākonis}} un {{ui:Laukums}} tiek pievienoti punkti: pabeidziet ar dubultklikšķi vai {{key:Enter}}.

**"A polygon needs at least 3 points." (or 2 for a polyline)**
"Daudzstūrim nepieciešami vismaz 3 punkti." (vai 2 polilīnijai). Pirms pabeigšanas noklikšķiniet vairāk punktu.

**"Nothing typed, so no text was added."**
"Nekas nav ierakstīts, tāpēc teksts nav pievienots." Teksta lodziņi un norādes tiek saglabāti tikai tad, ja tajos ir teksts. Uzzīmējiet tos vēlreiz un ierakstiet tekstu, pirms noklikšķināt citur.

**"The two points are the same. Click two different points."**
"Abi punkti ir vienādi. Noklikšķiniet uz diviem dažādiem punktiem." Līnijām, bultām, garumiem un kalibrēšanai abiem galiem jābūt atstatus. Velciet vai noklikšķiniet divreiz dažādās vietās.

**I cannot move or delete a markup; it has a gray dashed box**
Nevaru pārvietot vai dzēst atzīmi; tai ir pelēks punktēts rāmis. Tas ir tikai lasāms komentārs, kas nācis kopā ar failu (piemēram, teksta iezīmējums). MarkupCraft to saglabā, kāds tas ir: var tikai atbildēt. Statusjoslā rakstīts "tikai lasāmas atzīmes tiek saglabātas kā failā".

**My keys type letters into a box instead of choosing tools**
Kursors atrodas teksta lodziņā (atbildes, lauka sadaļā {{ui:Rekvizīti}}, lapas meklēšanā). Vispirms noklikšķiniet tukšā lapas laukuma daļā vai nospiediet {{key:Esc}}, ja rediģējat atzīmes tekstu.

**Space does not pan, or arrow keys do nothing**
Jūs tikko noklikšķinājāt rīkjoslas pogu, tāpēc tā joprojām saņem tastatūru. Velciet ar vidējo peles pogu vai vienreiz noklikšķiniet lapā ar ieslēgtu {{ui:Atlasīt}} un mēģiniet vēlreiz. Skatiet arī [Tastatūra un pele](topic:keyboard#when-a-key-does-nothing).

**A pinch on the touch screen left a mark**
Vilkšanas rīks (pildspalva, mākonis, taisnstūris) sākās, pirms ieradās otrs pirksts, un pabeidza, pirms to atcēla. Nospiediet {{ui:Atsaukt}}. Ja vēlaties tālummaiņu, uzlieciet abus pirkstus vienlaicīgi.

## Mērīšana

**"Calibrate this sheet first: pick two points a known distance apart, or choose its scale. Then measure."**
"Vispirms kalibrējiet šo lapu: izvēlieties divus punktus ar zināmu attālumu vai izvēlieties tās mērogu. Pēc tam mēriet."
Katrai lapai pirms {{ui:Garums}} vai {{ui:Laukums}} vajadzīgs savs mērogs. MarkupCraft ir pārslēgts uz {{ui:Kalibrēt}}: noklikšķiniet uz zināma izmēra abiem galiem un ierakstiet tā garumu vai noklikšķiniet uz mēroga pogas statusjoslā un izvēlieties mērogu. Skatiet [Lapas kalibrēšana un mērīšana](topic:calibrate-and-measure).

**'That is not a length MarkupCraft understands.'**
'MarkupCraft nesaprot šo garumu.'
Ierakstiet to tā: `24'-0"`, `12' 6 1/2"`, `7.2 m` vai `900 mm`. Skatiet [Mērvienības, garumi un mērogi](topic:units-and-scales).

**Measurements are a bit off, or wildly off**
- Iepriekš iestatīts mērogs PDF, kas nav pilnā izmērā, mēra nepareizi. Kalibrējiet pēc gara zināma izmēra.
- Tūkstošu atdalītājs tika nolasīts kā decimālzīme: `1,200 mm` nozīmē 1,2 mm. Ierakstiet `1200 mm`.
- Tuviniet, kad noklikšķināt galus.
- Rasējums, iespējams, nav mērogā ("NTS").

**"Select a count group first, then Shift+click a mark to remove it."**
"Vispirms atlasiet skaitīšanas grupu, pēc tam Shift+klikšķis uz atzīmes, lai to noņemtu." Izvēlieties {{ui:Atlasīt}}, noklikšķiniet uz skaitīšanas grupas, pēc tam atkal izvēlieties {{ui:Skaitīt}} un {{key:Shift}}-klikšķis uz punkta.

## Saglabāšana

**"This PDF is protected (encrypted), so a marked-up copy cannot be written."**
"Šis PDF ir aizsargāts (šifrēts), tāpēc atzīmētu kopiju nevar ierakstīt." Fails aizliedz izmaiņas. Lūdziet nenoaizsargātu kopiju. Tikmēr joprojām varat eksportēt atzīmju sarakstu kā CSV vai BCF.

**"The PDF writer could not load: …"**
"PDF rakstītāju nevarēja ielādēt: …" Parasti esat bezsaistē un lietotne netika saglabāta darbam bezsaistē (augšējā joslā nav "Gatavs darbam bezsaistē"). Jūsu atzīmes joprojām ir cilnē: atstājiet to atvērtu, pieslēdzieties internetam un atkal izvēlieties {{ui:Saglabāt}}. Pēc tam izvēlieties {{ui:Saglabāt bezsaistei}}, lai nākamreiz tas darbotos bezsaistē; saglabātā kopija ietver PDF rakstītāju.

**"Could not save <file>"**
"Nevarēja saglabāt <file>". Lodziņā rādīts iemesls. Jūsu atzīmes joprojām ir cilnē. Mēģiniet vēlreiz; ja kļūda atkārtojas, eksportējiet CSV, lai komentāri nepazaudētos, un ziņojiet par ziņojumu.

**I chose Save but only one file arrived**
Izvēlējos Saglabāt, bet saņemts tikai viens fails. Jūsu pārlūkprogramma bloķēja papildu lejupielādes. Meklējiet paziņojumu adreses joslā un atļaujiet šai vietnei lejupielādēt vairākus failus, pēc tam saglabājiet vēlreiz.

**I cannot find the saved file**
Tas nonāca jūsu pārlūkprogrammas lejupielāžu mapē. Atveriet pārlūkprogrammas lejupielāžu sarakstu (Chrome un Edge: {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; Firefox un Safari: lejupielādes poga rīkjoslā), lai redzētu, kur tas ir. Skatiet [Pārlūkprogrammas un datori](common:browsers).

**Some text shows "?" in other PDF viewers**
Rakstzīmes ārpus Rietumeiropas kopas kopijā tiek drukātas kā "?". Saglabāšanas ziņojums tās saskaita. Skatiet [Saglabāt atzīmēto PDF](topic:save-the-marked-up-pdf).

**The stamp shows tomorrow's (or yesterday's) date**
Zīmogu datumi ir UTC. Skatiet [Zīmogi un līmlapiņas](topic:stamps-and-notes).

## Darbs bezsaistē

**The offline button says "Could not save"**
Bezsaistes poga rāda "Nevarēja saglabāt". Dažu lietotnes failu nelejupielādējās. Pārbaudiet savienojumu un noklikšķiniet uz pogas vēlreiz; tā skaita "Saglabā N no M", līdz "Gatavs darbam bezsaistē".

**The offline button says "Offline not available"**
Bezsaistes poga rāda "Bezsaiste nav pieejama". Šis pārlūkprogrammas logs nevar saglabāt bezsaistes kopiju: privātais logs vai dators, kura politika to bloķē. Atveriet MarkupCraft parastā logā un mēģiniet vēlreiz.

**Offline, the app is an older version**
Bezsaistes kopija ir versija, ko saglabājāt. Kad esat tiešsaistē, noklikšķiniet uz "Gatavs darbam bezsaistē" un izvēlieties "Saglabāt vēlreiz (iegūt jaunāko versiju)". Lai atbrīvotu vietu, izvēlieties "Noņemt bezsaistes kopiju". Skatiet [Darbs bezsaistē](common:offline).

**The help will not open**
Nospiediet {{key:F1}} (Mac datorā ar **fn**) vai augšējā joslā izvēlieties {{ui:Palīdzība}}. Tā darbojas arī bezsaistē.

## Pazaudētas lietas

**My markups are gone after closing or reloading the tab**
Atveriet MarkupCraft vēlreiz tajā pašā pārlūkprogrammā: tas piedāvā nesaglabāto darbu ar "Atkopt jūsu darbu?". Izvēlieties {{ui:Atkopt}} un saglabājiet PDF. Kopijas tiek glabātas līdz 30 dienām; privātais logs vai vietnes datu notīrīšana neatstāj nevienu. Skatiet [Darba atkopšana](common:recover).

**My name, tool settings or tool chest are gone**
Tie tiek glabāti tikai šajā pārlūkprogrammā un tika notīrīti (notīrīti vietnes dati, privātais logs, cita pārlūkprogramma vai dators, vai Safari tīrīšana vietnēm, kuras kādu laiku nav apmeklētas). Iestatiet vārdu vēlreiz un importējiet eksportēto kasti. Skatiet [Kas paliek šajā pārlūkprogrammā](topic:browser-storage).

**"The tool chest could not be kept in this browser (storage is off or full). Export it to keep it."**
"Rīku kasti nevarēja saglabāt šajā pārlūkprogrammā (krātuve ir izslēgta vai pilna). Eksportējiet to, lai to saglabātu." Pārlūkprogramma atsakās glabāt šīs vietnes datus (privātais režīms, krātuve bloķēta iestatījumos vai politikā, vai tā pilna). Pēc izmaiņām eksportējiet kasti un nākamreiz importējiet to.

## Attēlojums un ātrums

**The sheet looks blurry for a moment**
MarkupCraft, tuvinot vai panoramējot, rāda ātru, aptuvenu attēlu un pārzīmē to asu brīdi pēc apstāšanās.

**Everything is slow with a big set**
Aizveriet citas smagas cilnes, atveriet mazāk failu vienlaikus un izvairieties tuvināt līdz maksimumam uz milzīgām lapām. Skatiet [Darbs ar vairākiem failiem vienlaikus](topic:several-files#big-sets).

**The sheet is dark with light lines**
Jūs esat motīvā {{ui:Modelis}}. Augšējā joslā izvēlieties {{ui:Papīrs}}, lai iegūtu tumšas līnijas uz balta. Jūsu atzīmes un saglabātais PDF netiek ietekmēti.
