---
title: Jaunumi 0.7 versijā (iepriekšējā)
summary: RFI, iesniegumi un dienas žurnāli jaunā Lauks cilnē, ar izpildes datumiem, nokavētiem ierakstiem sarkanā krāsā, CSV un BCF, darbs bezsaistē un apvienošana; palīgi, kas iestata statusus, atbild un eksportē sarakstu; mērvienību saraksti, kas seko Iestatījumiem; paneļi, kas paslēpjas, un dialogi, ko var pārvietot.
keywords: jaunumi 0.7, iepriekšējā versija, versijas piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, lauks, lauka ieraksti, rfi, informācijas pieprasījums, iesniegums, dienas žurnāls, objekta dienasgrāmata, nokavēts, izpildes datums, piešķirti man, tapa, apvienot, bezsaistē, planšetdators, bcf, csv, palīgs, mcp, atzīmes statuss, atbilde, eksportēt, mērvienības, mērvienību saraksti, zvaigznīte, kalibrēt, kompakts, paneļi, dialogi, portugāļu
from: f8578677
---

Šeit ir, kas mainījās MarkupCraft 0.7 salīdzinājumā ar 0.6. Galvenā jaunā lieta ir lauka ieraksti: RFI, iesniegumi un dienas žurnāli, kas glabājas PDF failā blakus jūsu atzīmēm.

## Jauns

### RFI, iesniegumi un dienas žurnāli

- **Cilne Lauks.** Atveriet cilni {{ui:Lauks}} un izvēlieties {{ui:RFI}}, {{ui:Iesniegums}} vai {{ui:Dienas žurnāls}}. Pieskarieties vai noklikšķiniet uz lapas vietas, kur pieder RFI vai iesniegums, un tapa atzīmē vietu; dienas žurnāls tiek ierakstīts atvērtajā lapā bez tapas ({{ui:Novietot tapu}} pievieno tapu vēlāk, {{ui:Pārvietot tapu}} pārvieto jebkuru tapu). Katram ierakstam ir savs numurs (RFI-0001, SUB-0001, LOG-0001), nosaukums, teksts, statuss, atbildīgais, izpildes datums, atbilžu pavediens un pielikumu nosaukumu saraksts. Skat. [Izsekot RFI, iesniegumiem un dienas žurnāliem](topic:field-records).
- **Redziet, kas kavējas.** Filtrējiet sarakstu pēc tipa, statusa, izpildes datuma (nokavēts, jāizpilda 7 dienu laikā, ar vai bez izpildes datuma), šīs lapas vai visām lapām, teksta meklēšanas vai {{ui:Piešķirti man}}. Ieraksts, kas pārsniedz izpildes datumu un vēl gaida, saraksta un savas tapas sarkanā krāsā tiek atzīmēts kā **Nokavēts**. Skat. [Atrast svarīgāko](topic:field-records#find-what-matters).
- **CSV un BCF.** {{ui:CSV}} ieraksta uzskaitītos ierakstus kā izklājlapu; {{ui:BCF}} tos ieraksta kā BCF tēmas, katrai ar lapas vietas momentuzņēmumu. Abi seko filtriem. Skat. [Eksportēt](topic:field-records#export).
- **Bezsaistē un divas kopijas kļūst par vienu.** Ieraksti tiek saglabāti PDF failā un tiem nav vajadzīgs tīkls, tāpēc planšetdators objektā var pievienot, atbildēt un saglabāt tos. Birojā {{ui:Apvienot}} savieno citas tā paša PDF kopijas ierakstus pēc to identifikatoriem kā vienu atsaukšanas soli. Skat. [Saglabāšana, darbs bezsaistē un kopiju apvienošana](topic:field-records#save-offline-and-merging-copies).

### AI palīgi

- **Vairāk, ko palīgs var darīt.** Jūsu pašu palīgs, kas pieslēgts caur CadCraft Studio, tagad var iestatīt atzīmes statusu (`markup_status`, reģistrēts tās pavedienā), atbildēt pavedienā (`markup_reply`) un eksportēt sarakstu {{ui:Atzīmes}} kā CSV vai BCF (`markups_export`, ko saraksts rāda ar saviem filtriem). Katra izmaiņa ir viens atsaukšanas solis, parakstīts ar palīga vārdu. Skat. [Ko palīgs var pieprasīt](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Visās lietotnēs

- **Mērvienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Mērvienības}} ir atsevišķs saraksts garumam, laukumam, tilpumam, leņķim un slīpumam, ar precīziem izmēriem, ko dod mērvienību definīcijas (ASV pēdas mērījumu pēda ir sava mērvienība). Izslēdziet mērvienības, ko nekad nelietojat, un tās pazudīs no sarakstiem; atzīmējiet kādu ar zvaigznīti, un jauns darbs sāksies tajā. Fails vienmēr saglabā savu mērvienību. MarkupCraft mērīšanas un pozīcijas mērvienības iestatījumos {{ui:Iestatījumi}} › {{ui:MarkupCraft}}, kā arī mērvienība kalibrēšanas dialogā seko slēdžiem; zvaigznīte nosaka mērīšanas mērvienību, līdz saglabājat MarkupCraft savus iestatījumus; un reālais attālums, ko ierakstāt kalibrējot, var saturēt jebkuras mērvienības apzīmējumu, piemēram, `3 yd` vai `1.5 km`. Skat. [Mērvienības, ierakstītās vērtības un mērvienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas paslēpjas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina ekrānā vairāk (skārienekrāni un tālruņi saglabā savas lielās pogas). Katram sānu panelim ir plāna nosaukuma josla: velciet to, lai piestiprinātu vai atbrīvotu paneli, nometiet to uz cita paneļa joslas, lai kopīgi izmantotu vienu rāmi kā cilnes, piespraudiet to, lai tas paslīdētu līdz malai, vai paslēpiet to un atgrieziet no malas. Skat. [Izkārtot paneļus](common:arrange-panels#make-the-layout-denser).
- **Dialogi var pārvietoties.** Velciet dialogu pēc tā nosaukuma joslas, lai tas nestāv ceļā rasējumam; tas atgriežas tur, kur to atstājāt. Veiciet dubultklikšķi uz nosaukuma joslas, lai tas atkal tiktu centrēts. Skat. [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Recepti AI palīgiem.** Desmit sagatavoti pieprasījumi jūsu palīgam (sakārtot rasējumu, izdrukāt komplektu, pārbaudīt rasējumus, uzdot modelim jautājumus, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam nepieciešamas, un katrs atkārtots mūsu testos. Lietotnēs nav AI. Skat. [Recepti AI palīgiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauna sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}}. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir ar katru lietotņu vārdu, kā melnraksti, ko dzimtā valodas runātājs vēl nav pārskatījis. Palīdzības tēmas ir angļu valodā.
- **CadCraft Studio** pasaka, kāpēc atjauninājumu pārbaude neizdevās (vēl nav faila jūsu sistēmai, nav tīkla, nederīgs paraksts), nevis tikai "Gatavs", un pārstāj atkal parādīt izslēgtu kartīti "Jaunumi", līdz parādās jaunāka versija.

## Vēl nav šajā versijā

- **0.7 nav koda parakstīta.** Parakstīšana un Microsoft Store pakotne pārcelta uz 0.8, jo sertifikāta pārbaude vēl nav pabeigta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Vairāk informācijas}}, pēc tam {{ui:Palaist tomēr}}. Macintosh datorā pirmajā reizē ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un vēl nav iPad vai iPhone versijas.
- Leņķu un slīpumu saraksti sadaļā {{ui:Mērvienības}} tiek saglabāti, bet neviens rīks tos vēl nenolasa.
- Lauka ieraksti netiek koplietoti CadCraft Studio tiešraides sesijās (tiešraides sesijās tiek pārraidītas tikai atzīmes); atnesiet kopijas kopā ar {{ui:Apvienot}}.
- Apvienošana ņem ierakstu kā veselumu no pēdējo reizi mainītās kopijas: ja divi cilvēki mainīja dažādus viena ieraksta laukus, spēkā ir vēlākās kopijas lauki. Pavedieni un pielikumu nosaukumi tiek apvienoti.
- Pielikumi ir tikai nosaukumi; faili paliek tur, kur atrodas. Ierakstiem nav komandu, paziņojumu vai mākoņprojektu, un palīgiem vēl nav rīku ierakstiem.
- Lauka ieraksti tika pārbaudīti pārlūkprogrammā tālruņa un planšetdatora izmēros ar pārtrauktu tīklu, bet vēl nav pārbaudīti ar rokām reālā planšetdatorā.
- Joprojām no 0.6: lapas objektu pagriešana jebkurā leņķī, jaunu formu zīmēšana tieši lapā, līnijas fonta vai izmēra maiņa un teksts, kas plūst pāri vairākām rindām. Saglabāta kopija ar lapas labojumiem vēl nav atvērta Acrobat.
- Joprojām no 0.5: lapas izmaiņas atsaukšana (piemēram, tukšas lapas pievienošana), teksta nolasīšana no skenētām lapām un tiešraides sesijas ārpus jūsu paša tīkla.

Visu pārējo skat. [Kas vēl nav izveidots](topic:not-built-yet).
