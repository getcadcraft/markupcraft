---
title: Kas jauns 0.7 versijā
summary: RFI, iesniegumi un dienas žurnāli jaunā Lauks cilnē ar izpildes termiņiem, nokavētie sarkanā krāsā, CSV un BCF, darbs bezsaistē un Apvienot; asistenti, kas iestata statusus, atbild un eksportē sarakstu; mērvienību saraksti, kas seko iestatījumiem; paneļi, kas noslēpjas, un dialoglodziņi, kas pārvietojas.
keywords: kas jauns, izmaiņas, versijas piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, lauks, lauka ieraksti, rfi, informācijas pieprasījums, iesniegums, dienas žurnāls, objekta dienasgrāmata, nokavēts, izpildes termiņš, piešķirts man, tapa, apvienot, bezsaistē, planšetdators, bcf, csv, asistents, mcp, atzīmes statuss, atbilde, eksportēt, mērvienības, mērvienību saraksti, zvaigzne, kalibrēt, kompakts, paneļi, dialoglodziņi, portugāļu
from: 142e1a1e
---

Šis ir tas, kas mainījās MarkupCraft 0.7 versijā, salīdzinot ar 0.6. Lielākā jaunā lieta ir lauka ieraksti: RFI, iesniegumi un dienas žurnāli, kas glabājas PDF failā blakus jūsu atzīmēm.

## Jaunumi

### RFI, iesniegumi un dienas žurnāli

- **Lauka cilne.** Atveriet cilni {{ui:Lauks}} un izvēlieties {{ui:RFI}}, {{ui:Iesniegums}} vai {{ui:Dienas žurnāls}}. Pieskarieties vai noklikšķiniet lapā, kur pieder RFI vai iesniegums, un tapa atzīmē vietu; dienas žurnāls tiek ievietots atvērtajā lapā bez tapas ({{ui:Novietot tapu}} pievieno tapu vēlāk, {{ui:Pārvietot tapu}} pārvieto jebkuru tapu). Katram ierakstam ir savs numurs (RFI-0001, SUB-0001, LOG-0001), nosaukums, teksts, statuss, izpildītājs, izpildes termiņš, atbilžu pavediens un pievienoto failu nosaukumu saraksts. Skatiet [Izsekot RFI, iesniegumiem un dienas žurnāliem](topic:field-records).
- **Redziet, kas kavējas.** Filtrējiet sarakstu pēc tipa, statusa, izpildes termiņa (nokavēts, izpildes termiņš 7 dienās, ar izpildes termiņu vai bez tā), šīs lapas vai visām lapām, teksta meklēšanas vai {{ui:Piešķirti man}}. Ieraksts, kas pārsniedz izpildes termiņu un vēl gaida, tiek atzīmēts ar **Nokavēts** sarakstā un savā tapā sarkanā krāsā. Skatiet [Atrast svarīgo](topic:field-records#find-what-matters).
- **CSV un BCF.** {{ui:CSV}} saglabā sarakstā redzamos ierakstus kā izklājlapu; {{ui:BCF}} saglabā tos kā BCF tēmas, katrai ar momentuzņēmumu par tās vietu lapā. Abi seko filtriem. Skatiet [Eksportēšana](topic:field-records#export).
- **Bezsaistē un divas kopijas kļūst par vienu.** Ieraksti tiek saglabāti PDF failā un nav vajadzīgs tīkls, tāpēc planšetdators objektā var pievienot, atbildēt un saglabāt tos. Birojā {{ui:Apvienot}} savieno cita tā paša PDF kopijas ierakstus pēc to ID kā vienu atsaukšanas soli. Skatiet [Saglabāšana, darbs bezsaistē un kopiju apvienošana](topic:field-records#save-offline-and-merging-copies).

### MI asistenti

- **Vairāk, ko var asistents.** Jūsu pašu asistents, kas savienots caur CadCraft Studio, tagad var iestatīt atzīmes statusu (`markup_status`, ierakstīts tā pavedienā), atbildēt pavedienā (`markup_reply`) un eksportēt {{ui:Atzīmes}} sarakstu kā CSV vai BCF (`markups_export`, kas redzams sarakstā ar tā filtriem). Katra izmaiņa ir viens atsaukšanas solis, parakstīts ar asistenta vārdu. Skatiet [Ko asistents var pieprasīt](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Visās lietotnēs

- **Mērvienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}} katram garumam, laukumam, tilpumam, leņķim un slīpumam ir savs saraksts ar precīziem izmēriem, kādus dod mērvienību definīcijas (ASV topogrāfiskā pēda ir atsevišķa mērvienība). Izslēdziet mērvienības, ko nekad neizmantojat, un tās pazūd no mērvienību sarakstiem; atzīmējiet vienu ar zvaigznīti, un jauns darbs sākas tajā. Fails vienmēr saglabā savu mērvienību. MarkupCraft mērīšanas un pozīcijas mērvienības iestatījumos {{ui:Iestatījumi}} › {{ui:MarkupCraft}} un kalibrēšanas dialoglodziņa mērvienība seko slēdžiem; zvaigznīte iestata mērīšanas mērvienību, līdz saglabājat MarkupCraft savus iestatījumus; un reālais attālums, ko ievadāt kalibrējot, var saturēt jebkuras mērvienības apzīmējumu, piemēram, `3 yd` vai `1.5 km`. Skatiet [Mērvienības, ievadītās vērtības un mērvienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas noslēpjas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina ekrānā vairāk (skārienekrāni un tālruņi saglabā lielās pogas). Katram sānu panelim ir šaura virsrakstjosla: velciet to, lai piestiprinātu vai atbrīvotu (peldošu) paneli, nometiet uz cita paneļa joslas, lai dalītos vienā rāmī cilnēs, piespraudiet, lai tas noslīdētu līdz malai, vai paslēpiet to un atgrieziet no malas. Skatiet [Panelu izkārtošana](common:arrange-panels#make-the-layout-denser).
- **Dialoglodziņi pārvietojas.** Velciet dialoglodziņu aiz virsrakstjoslas prom no rasējuma; tas atgriežas tur, kur to atstājāt. Divreiz noklikšķiniet uz virsrakstjoslas, lai to atkal centrētu. Skatiet [Dialoglodziņa pārvietošana](common:arrange-panels#move-a-dialog).
- **Receptes MI asistentiem.** Desmit pārbaudīti pieprasījumu piemēri jūsu pašu asistentam (sakārtot rasējumu, izdrukāt komplektu, pārbaudīt rasējumus, uzdot jautājumus par modeli, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam vajadzīgas; katrs ir atkārtots mūsu testos. Lietotnēs nav MI. Skatiet [Receptes MI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}}. Tai, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir visi lietotņu vārdi kā melnraksti, ko dzimtās valodas runātājs vēl nav pārskatījis. Palīdzības temati ir angļu valodā.
- **CadCraft Studio** parāda, kāpēc atjauninājumu pārbaude neizdevās (vēl nav faila jūsu sistēmai, nav tīkla, nederīgs paraksts), nevis tikai "Gatavs", un vairs neatgriež kartīti "Kas jauns", ko esat aizvēris, līdz parādās jaunāka versija.

## Vēl šajā versijā nav

- **0.7 nav kodu parakstīta.** Parakstīšana un Microsoft Store pakotne pārcelta uz 0.8, jo sertifikāta validācija vēl nav saņemta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Windows sistēmā, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}}, pēc tam {{ui:Palaist tik un tā}}. Mac datorā pirmoreiz ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un iPad vai iPhone versijas vēl nav.
- Leņķu un slīpumu saraksti {{ui:Vienības}} tiek saglabāti, bet neviens lodziņš tos vēl nenolasa.
- Lauka ieraksti netiek kopīgoti CadCraft Studio tiešraides sesijā (tiešraides sesijās ir tikai atzīmes); apvienojiet kopijas ar {{ui:Apvienot}}.
- {{ui:Apvienot}} ņem ierakstu kopumā no pēdējo reizi mainītās kopijas: ja divi cilvēki mainīja dažādus viena ieraksta laukus, vēlākās kopijas lauki uzvar. Pavedieni un pievienoto failu nosaukumi tiek apvienoti.
- Pielikumi ir tikai nosaukumi; faili paliek savā vietā. Ierakstiem nav komandu, paziņojumu vai mākoņa projektu, un asistentiem vēl nav rīku ierakstiem.
- Lauka ieraksti tika pārbaudīti pārlūkā tālruņa un planšetdatora izmēros, atvienojot tīklu, bet vēl nav pārbaudīti ar roku uz īsta planšetdatora.
- Vēl no 0.6: lapas objektu pagriešana jebkurā leņķī, jaunu formu zīmēšana tieši lapā, līnijas fonta vai izmēra maiņa un teksts, kas plūst pāri vairākām rindām. Saglabātā kopija ar lapas labojumiem vēl nav atvērta programmā Acrobat.
- Vēl no 0.5: lapas izmaiņas atsaukšana (piemēram, tukšas lapas pievienošana), tekstu lasīšana no skenētām lapām un tiešraides sesijas ārpus jūsu pašu tīkla.

Pārējais ir sadaļā [Kas vēl nav izveidots](topic:not-built-yet).
