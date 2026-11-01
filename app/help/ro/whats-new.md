---
title: Noutăți în 0.7
summary: RFI-uri, documente de aprobare și jurnale zilnice într-o filă nouă Teren, cu termene, întârzieri în roșu, CSV și BCF, lucru offline și Îmbinare; asistenți care setează stările, răspund și exportă lista; liste de unități care urmează Setările; panouri care se ascund și casete de dialog care se mută.
keywords: noutăți, release notes, modificări, jurnal de modificări, 0.7, versiune, funcții noi, teren, înregistrări de teren, rfi, cerere de informații, document de aprobare, jurnal zilnic, jurnal de șantier, termen, întârziat, atribuite mie, pin, îmbinare, offline, tabletă, bcf, csv, asistent, mcp, stare adnotare, răspuns, export, unități, liste de unități, stea, calibrare, compact, panouri, casete de dialog, portugheză
from: 142e1a1e
---

Aceasta este lista modificărilor din MarkupCraft 0.7, față de 0.6. Noutatea cea mai mare sunt înregistrările de teren: RFI-uri, documente de aprobare și jurnale zilnice păstrate în PDF, lângă adnotări.

## Noutăți

### RFI-uri, documente de aprobare și jurnale zilnice

- **Fila Teren.** Deschideți fila {{ui:Teren}} și alegeți {{ui:RFI}}, {{ui:Document de aprobare}} sau {{ui:Jurnal zilnic}}. Atingeți sau faceți clic pe foaia unde aparține un RFI sau un document de aprobare, iar un pin marchează locul; un jurnal zilnic se pune pe foaia deschisă, fără pin ({{ui:Plasare pin}} adaugă unul mai târziu, {{ui:Mutare pin}} mută orice pin). Fiecare înregistrare are propriul număr (RFI-0001, SUB-0001, LOG-0001), un titlu, text, o stare, o persoană desemnată, un termen, un fir de răspunsuri și o listă de nume de atașamente. Vezi [Urmărirea RFI-urilor, documentelor de aprobare și jurnalelor zilnice](topic:field-records).
- **Vedeți ce întârzie.** Filtrați lista după tip, stare, termen (întârziate, scadente în 7 zile, cu sau fără termen), foaia aceasta sau toate foile, o căutare de text sau {{ui:Atribuite mie}}. O înregistrare depășită încă în așteptare este marcată **Întârziat**, în roșu, pe listă și pe pinul ei. Vezi [Găsiți ce contează](topic:field-records#find-what-matters).
- **CSV și BCF.** {{ui:CSV}} scrie înregistrările listate ca tabel de calcul; {{ui:BCF}} le scrie ca subiecte BCF, fiecare cu un instantaneu al locului său pe foaie. Amândouă urmează filtrele. Vezi [Export](topic:field-records#export).
- **Offline, și două copii devin una.** Înregistrările se salvează în PDF și nu au nevoie de rețea, astfel încât o tabletă de pe șantier poate adăuga, răspunde și salva. La birou, {{ui:Îmbinare}} unește înregistrările altei copii a aceluiași PDF după identificatori, ca un singur pas de anulare. Vezi [Salvarea, offline și îmbinarea copiilor](topic:field-records#save-offline-and-merging-copies).

### Asistenți AI

- **Mai mult pot face asistenții.** Propriul asistent, conectat prin CadCraft Studio, poate acum să seteze starea unei adnotări (`markup_status`, înregistrată în firul ei), să răspundă într-un fir (`markup_reply`) și să exporte lista {{ui:Adnotări}} ca CSV sau BCF (`markups_export`, adică ce arată lista cu filtrele ei). Fiecare modificare este un singur pas de anulare, semnată cu numele asistentului. Vezi [Ce poate cere un asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## În toate aplicațiile

- **Unități.** {{ui:Setări}} › {{ui:General}} › {{ui:Unități}} are câte o listă pentru lungime, arie, volum, unghi și pantă, cu dimensiunile exacte date de definițiile unităților (piciorul topografic al SUA este o unitate separată). Dezactivați unitățile pe care nu le folosiți și ies din listele de unități; marcați una cu stea și lucrul nou începe în ea. Un fișier își păstrează întotdeauna propria unitate. În MarkupCraft, unitățile de măsurare și de poziție din {{ui:Setări}} › {{ui:MarkupCraft}} și unitatea din caseta de calibrare urmează comutatoarele, steaua stabilește unitatea de măsurare până salvați setările proprii ale MarkupCraft, iar distanța reală pe care o tastați la calibrare poate avea semnul oricărei unități, cum ar fi `3 yd` sau `1.5 km`. Vezi [Unități, valori tastate și listele de unități](common:unit-lists).
- **Un aspect mai dens și panouri care se ascund.** {{ui:Setări}} › {{ui:General}} › {{ui:Densitatea aspectului}} › {{ui:Compactă}} încape mai mult pe ecran (ecranele tactile și telefoanele își păstrează butoanele mari). Fiecare panou lateral are o bară de titlu subțire: trageți-o ca să ancorați sau să detașați panoul, lăsați-o pe bara altui panou ca să partajați un cadru ca file, fixați-o ca să alunece spre margine sau ascundeți panoul și aduceți-l înapoi de la margine. Vezi [Aranjarea panourilor](common:arrange-panels#make-the-layout-denser).
- **Casetele de dialog se mută.** Trageți o casetă de dialog de bara ei de titlu, ca să nu stea în calea desenului; revine acolo unde ați lăsat-o. Faceți dublu clic pe bara de titlu ca să o centrați din nou. Vezi [Mutarea unei casete de dialog](common:arrange-panels#move-a-dialog).
- **Rețete pentru asistenți AI.** Zece cereri exemplu pentru propriul asistent (ordonați un desen, trasați un set, verificați desene, puneți întrebări despre model, totalizați o extragere de cantități, încercați o variantă de piesă…), fiecare cu instrumentele pe care le apelează și permisiunile de care are nevoie, și fiecare reluată de testele noastre. Aplicațiile nu conțin AI. Vezi [Rețete pentru asistenți AI](common:assistants-recipes).
- **Limbi.** **Português (Portugal)** este nou în {{ui:Setări}} › {{ui:General}} › {{ui:Limbă}}. Împreună cu **Português (Brasil)**, **Español (México)** și **Bahasa Indonesia**, acestea au acum fiecare cuvânt din aplicații, ca ciorne neverificate încă de un vorbitor nativ. Subiectele de ajutor sunt în engleză.
- **CadCraft Studio** spune de ce a eșuat verificarea actualizărilor (nu există încă fișier pentru acest sistem, lipsă de rețea, semnătură greșită) în loc să spună doar „Gata”, și nu mai readuce un card Noutăți pe care l-ați închis, până la o versiune mai nouă.

## Încă nu este în această versiune

- **0.7 nu este semnat cu cod.** Semnarea și pachetul Microsoft Store au trecut în 0.8, pentru că validarea certificatului nu a sosit încă. Verificați SHA-256 de lângă fiecare fișier de pe getcadcraft.com/download. Pe Windows, dacă SmartScreen oprește programul de instalare, alegeți {{ui:Mai multe informații}}, apoi {{ui:Executare oricum}}. Pe Mac, prima dată, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. CadCraft Studio nu este încă într-un magazin de aplicații, iar nu există încă versiune pentru iPad sau iPhone.
- Listele de unghi și pantă din {{ui:Unități}} sunt salvate, dar nicio casetă nu le citește încă.
- Înregistrările de teren nu sunt partajate într-o sesiune live CadCraft Studio (sesiunile live transportă doar adnotări); aduceți copiile împreună cu {{ui:Îmbinare}}.
- Îmbinarea preia o înregistrare întreagă din copia modificată ultima dată: dacă două persoane au modificat câmpuri diferite ale unei înregistrări, câmpurile copiei mai recente câștigă. Firele și numele atașamentelor sunt unite.
- Atașamentele sunt doar nume; fișierele rămân unde sunt. Nu există echipe, notificări sau proiecte cloud pentru înregistrări, iar asistenții nu au încă instrumente pentru înregistrări.
- Înregistrările de teren au fost testate într-un browser, la dimensiuni de telefon și tabletă, cu rețeaua oprită, dar încă nu manual pe o tabletă reală.
- Încă din 0.6: rotirea obiectelor paginii la orice unghi, desenarea de forme noi direct în pagină, schimbarea fontului sau a dimensiunii unei linii și textul care curge pe mai multe rânduri. O copie salvată cu modificări ale paginii nu a fost deschisă încă în Acrobat.
- Încă din 0.5: anularea unei modificări a paginii (cum ar fi adăugarea unei pagini goale), citirea textului din foi scanate și sesiunile live dincolo de propria rețea.

Restul se află în [Ce nu este încă realizat](topic:not-built-yet).
