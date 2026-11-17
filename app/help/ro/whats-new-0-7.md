---
title: Noutăți în 0.7 (anterior)
summary: RFI-uri, documente de aprobare și jurnale zilnice într-o filă nouă Teren, cu termene, întârzieri în roșu, CSV și BCF, lucru offline și Îmbinare; asistenți care setează stări, răspund și exportă lista; liste de unități care urmează Setările; panouri care se ascund și casete de dialog care se mută.
keywords: noutăți 0.7, versiune anterioară, note de lansare, jurnal de modificări, modificări, 0.7, versiune, funcții noi, teren, înregistrări de teren, rfi, cerere de informații, document de aprobare, jurnal zilnic, jurnal de șantier, întârziat, termen, atribuite mie, pin, îmbinare, offline, tabletă, bcf, csv, asistent, mcp, stare adnotare, răspuns, export, unități, liste de unități, stea, calibrare, compact, panouri, casete de dialog, portugheză
from: f8578677
---

Acestea sunt modificările din MarkupCraft 0.7, comparativ cu 0.6. Noutatea mare sunt înregistrările de teren: RFI-uri, documente de aprobare și jurnale zilnice păstrate în PDF, lângă adnotările tale.

## Nou

### RFI-uri, documente de aprobare și jurnale zilnice

- **Fila Teren.** Deschideți fila {{ui:Field}} și alegeți {{ui:RFI}}, {{ui:Submittal}} sau {{ui:Daily log}}. Atingeți sau faceți clic pe foaia unde aparține un RFI sau un document de aprobare, iar un pin marchează locul; un jurnal zilnic se adaugă pe foaia deschisă, fără pin ({{ui:Place pin}} adaugă unul mai târziu, {{ui:Move pin}} mută orice pin). Fiecare înregistrare are propriul număr (RFI-0001, SUB-0001, LOG-0001), un titlu, text, o stare, un responsabil, un termen, un fir de răspunsuri și o listă de nume de atașamente. Vezi [Urmărirea RFI-urilor, a documentelor de aprobare și a jurnalelor zilnice](topic:field-records).
- **Vezi ce întârzie.** Filtrați lista după tip, stare, termen (întârziate, cu termen în 7 zile, cu sau fără termen), după foaia curentă sau toate foile, după o căutare de text sau după {{ui:Assigned to me}}. O înregistrare trecută de termen care încă așteaptă este marcată **Întârziate**, cu roșu, pe listă și pe pinul ei. Vezi [Găsirea a ceea ce contează](topic:field-records#find-what-matters).
- **CSV și BCF.** {{ui:CSV}} scrie înregistrările listate ca tabel de calcul; {{ui:BCF}} le scrie ca subiecte BCF, fiecare cu o captură a locului său pe foaie. Ambele urmează filtrele. Vezi [Export](topic:field-records#export).
- **Offline, și două copii făcute una.** Înregistrările sunt salvate în PDF și nu au nevoie de rețea, așa că o tabletă de pe șantier poate adăuga, răspunde și salva. La birou, {{ui:Merge}} unește înregistrările altei copii a aceluiași PDF după identificatorii lor, ca un singur pas de anulare. Vezi [Salvare, offline și îmbinarea copiilor](topic:field-records#save-offline-and-merging-copies).

### Asistenți AI

- **Mai mult poate face un asistent.** Asistentul tău propriu, conectat prin CadCraft Studio, poate acum să seteze starea unei adnotări (`markup_status`, înregistrată în firul ei), să răspundă într-un fir (`markup_reply`) și să exporte lista {{ui:Markups}} ca CSV sau BCF (`markups_export`, adică ce arată lista cu filtrele ei). Fiecare modificare este un singur pas de anulare, semnat cu numele asistentului. Vezi [Ce poate cere un asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## În fiecare aplicație

- **Unități.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} are câte o listă pentru lungime, arie, volum, unghi și pantă, cu dimensiunile exacte date de definițiile unităților (piciorul topografic american, US survey foot, este o unitate proprie). Dezactivați unitățile pe care nu le folosiți niciodată și ele ies din liste; marcați una cu stea și lucrul nou începe în ea. Un fișier își păstrează întotdeauna propria unitate. În MarkupCraft, unitățile de măsurare și de poziție din {{ui:Settings}} › {{ui:MarkupCraft}} și unitatea din caseta de calibrare urmează comutatoarele; steaua stabilește unitatea de măsurare până salvați propriile setări ale MarkupCraft, iar distanța reală pe care o scrieți la calibrare poate avea semnul oricărei unități, precum `3 yd` sau `1.5 km`. Vezi [Unități, valori scrise și listele de unități](common:unit-lists).
- **Un aspect mai dens și panouri care se ascund.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} încape mai mult pe ecran (ecranele tactile și telefoanele își păstrează butoanele mari). Fiecare panou lateral are o bară de titlu subțire: trageți-o ca să ancorați sau să detașați panoul, lăsați-o pe bara altui panou ca să partajați un cadru ca file, fixați-o ca să alunece până la margine sau ascundeți-o și aduceți-o înapoi de la margine. Vezi [Aranjarea panourilor](common:arrange-panels#make-the-layout-denser).
- **Casetele de dialog se mută.** Trageți o casetă de dialog de bara ei de titlu, în afara desenului; ea revine unde ați lăsat-o. Faceți dublu clic pe bara de titlu ca s-o centrați din nou. Vezi [Mutarea unei casete de dialog](common:arrange-panels#move-a-dialog).
- **Rețete pentru asistenții AI.** Zece cereri lucrate pentru asistentul tău propriu (ordonarea unui desen, trasarea unui set, verificarea desenelor, întrebări despre un model, totalizarea unei extrageri de cantități, încercarea unei variante de piesă…), fiecare cu instrumentele pe care le apelează și permisiunile necesare, și fiecare reluată de testele noastre. Aplicațiile nu conțin AI. Vezi [Rețete pentru asistenții AI](common:assistants-recipes).
- **Limbi.** **Português (Portugal)** este nou în {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Această limbă, **Português (Brasil)**, **Español (México)** și **Bahasa Indonesia** au acum toate cuvintele aplicațiilor, ca ciorne încă nerevizuite de un vorbitor nativ. Subiectele de ajutor sunt în engleză.
- **CadCraft Studio** arată de ce a eșuat verificarea unei actualizări (nu există încă fișier pentru sistemul tău, nu există rețea, semnătură greșită) în loc să scrie doar „Gata”, și nu mai aduce înapoi un card Noutăți pe care l-ați închis, până apare o versiune mai nouă.

## Nu este încă în această versiune

- **0.7 nu are semnătură de cod.** Semnarea și pachetul Microsoft Store au trecut în 0.8, pentru că validarea certificatului nu a sosit încă. Verificați SHA-256 de lângă fiecare fișier de pe getcadcraft.com/download. Pe Windows, dacă SmartScreen oprește programul de instalare, alegeți {{ui:More info}}, apoi {{ui:Run anyway}}. Pe Mac, prima dată, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Open}}. CadCraft Studio nu este încă într-un magazin de aplicații și nu există încă o versiune pentru iPad sau iPhone.
- Unghiul și listele de pantă din {{ui:Units}} sunt salvate, dar nicio casetă nu le citește încă.
- Înregistrările de teren nu sunt partajate într-o sesiune Live CadCraft Studio (sesiunile Live transportă doar adnotări); aduceți copiile împreună cu {{ui:Merge}}.
- Îmbinarea preia o înregistrare ca întreg din copia modificată ultima: dacă două persoane au modificat câmpuri diferite ale aceleiași înregistrări, câmpurile copiei mai noi câștigă. Firele de răspunsuri și numele atașamentelor sunt unite.
- Atașamentele sunt doar nume; fișierele rămân unde sunt. Nu există echipe, notificări sau proiecte cloud pentru înregistrări, iar asistenții nu au încă instrumente pentru înregistrări.
- Înregistrările de teren au fost testate într-un browser, la dimensiuni de telefon și tabletă, cu rețeaua oprită, dar încă nu manual pe o tabletă reală.
- Rămase din 0.6: rotirea obiectelor de pe pagină la orice unghi, desenarea de forme noi direct pe pagină, schimbarea fontului sau a dimensiunii unei linii și textul care curge pe mai multe rânduri. O copie salvată cu modificări de pagină nu a fost încă deschisă în Acrobat.
- Rămase din 0.5: anularea unei modificări de pagină (precum adăugarea unei pagini goale), citirea textului din foi scanate și sesiunile Live dincolo de propria rețea.

Tot restul este în [Ce nu este încă realizat](topic:not-built-yet).
