---
title: Noutăți în 0.9
summary: Notele și un panou alăturat care nu se tipăresc niciodată, note private criptate și o copie curată pentru client, legături în lot pentru un întreg set de desene, un instrument Arc cu zece metode, urmărirea altui revizor în Live și o remediere pentru adnotările șterse care rămâneau în PDF-ul salvat.
keywords: noutăți, ce este nou, 0.9, note de lansare, jurnal de modificări, note, panou alăturat, note private, parolă, criptat, ascunde notele, arată notele, copie curată, captură, legături în lot, indicatoare de foaie, legare foi, bloc de titlu, număr de foaie, addendum, renumerotare, legătură PDF, arc, metode de arc, arc cu trei puncte, rază, urmărire, urmărește-mă, live, vizualizare de clasă, listă de persoane, adnotare ștearsă, indicații, titluri de file, noutăți, jurnal de modificări, modificări, comparare, 0.8, 0.8.1, versiune, funcții noi, sarcină, sarcini, responsabil, zi de termen, întârziate, verificare acum, ce s-a schimbat, revizii, comparare, notă vocală, decizie, linii roșii, fișier de răspunsuri, desenator, asistent, mcp, probleme, limbi, dispozitive de intrare, touchpad, rânduri ale barei de instrumente, grila de proprietăți, actualizare
from: dbdd7ed4
---

Acestea sunt modificările din MarkupCraft 0.9, comparativ cu 0.8.1. Ideea principală este că notele tale de lucru rămân în afara paginii pe care o primește clientul, iar un întreg set de desene poate fi legat dintr-o singură trecere.

## Nou

### Note, panoul alăturat și note private

- **Panoul alăturat.** Zona din jurul fiecărei foi este un birou: orice desenați, scrieți sau lipiți lângă foaie este o notă și nu se tipărește niciodată. Alegeți {{ui:Show the pasteboard}} ca să micșorați pentru spațiu, sau {{ui:Snapshot to the pasteboard}}, trageți o casetă, apoi {{ui:To the pasteboard}} ca să puneți lângă foaie o imagine a unei părți din desen. O captură este o imagine și nu se schimbă când se schimbă foaia. Vezi [Note, panoul alăturat și note private](topic:notes-and-pasteboard).
- **Afișarea și ascunderea notelor.** Orice adnotare poate fi o notă: setați {{ui:New markups are}} în fila {{ui:Notes}} sau {{ui:This markup is}} în {{ui:Properties}}. {{key:Shift+H}} sau comutatorul {{ui:Notes}} de sub foaie ascunde și arată toate notele deodată. Notele sunt lăsate afară la tipărire, la copiile aplatizate, la liste și la exporturi, iar alte cititoare PDF nu le arată. PDF-ul tău salvat le păstrează pentru data următoare când îl deschizi în MarkupCraft.
- **Note private.** Alegeți {{ui:Set a passphrase}}, apoi faceți o adnotare {{ui:A private note}}. Ea este criptată în fișier cu o parolă de cel puțin 10 caractere, iar nu există recuperare: nimeni, nici noi, nu o poate deschide fără parolă. {{ui:Lock}} pune notele private deoparte; {{ui:Stay unlocked on this device}} este dezactivat implicit.
- **Salvarea unei copii curate.** {{ui:Save a clean copy}} elimină fiecare notă, fiecare notă privată și tot ce se află pe panoul alăturat. Folosiți-o pentru fișierul care merge la client.

### Legarea unui întreg set

- **Legături în lot.** Alegeți {{ui:Pages}} › {{ui:Batch links…}}, sau {{ui:Link sheet callouts…}} sub {{ui:Find text}} în panoul {{ui:Sheets}}. Pasul 1 listează numărul și numele fiecărei foi, așa cum sunt citite din cartușul ei; corectați-le pe cele greșite. Pasul 2 listează indicatoarele găsite, precum `3/A-501` sau `DETAIL 2 ON A-501`. {{ui:Will link}} arată foaia și vederea pentru fiecare, {{ui:Not linked}} arată numerele pe care nicio foaie deschisă nu le are, iar {{ui:Create the links}} le face pe toate într-un singur pas de anulare. Rulați-l din nou după un addendum sau o renumerotare; legăturile făcute manual nu se schimbă niciodată. O legătură cu o vedere este salvată ca legătură PDF, deci și alte cititoare deschid detaliul. Vezi [Legăturile foilor](topic:sheet-links).

### Desen

- **Arc, zece metode.** Instrumentul {{ui:Arc}} ({{key:O}}) are acum o casetă {{ui:Arc method}} peste pagină, cu zece moduri de a desena un arc, iar unghiul, lungimea, raza și direcția pot fi date cu clic sau scrise. Vezi [Desenarea unui arc în zece moduri](topic:draw-an-arc).

### Lucrul împreună

- **Urmărirea unui revizor.** Într-o sesiune Live alegeți {{ui:Follow}} lângă numele unei persoane, iar vederea ta se mută odată cu a ei; deplasarea sau zoomul făcut de tine oprește urmărirea. Gazda poate alege {{ui:Ask everyone to follow me}}. Lista de persoane arată culoarea fiecăruia, numele, foaia pe care se află și când a fost ultima lui modificare. Vezi [Urmărirea altui revizor într-o sesiune Live](topic:follow-in-live).

## În fiecare aplicație

- Indicațiile de unelte sunt indicații Bootstrap, indicația de pornire poate fi închisă, benzile de file derulează când depășesc spațiul, iar titlurile filelor din browser arată `<document> — MarkupCraft | CadCraft`.
- Un panou cu mai multe secțiuni deschide una și le închide pe celelalte (un lacăt de lângă cursor păstrează una deschisă); un comutator din Setări dezactivează asta.
- Fiecare aplicație pornește de la o colecție implicită de obiecte din bibliotecă.
- Unitățile de greutate și de temperatură sunt disponibile în setările de Unități.

## Reparat

- **Adnotările șterse nu mai rămân citibile în PDF-ul salvat.** Salvarea scotea înainte o adnotare ștearsă sau rescrisă de pe pagina ei, dar lăsa obiectul, cu textul său, în fișier. Acum salvarea șterge acele obiecte. Fișierele salvate de versiuni anterioare le mai conțin până le salvați din nou.

## Limite sincere

- Legăturile în lot au fost încercate pe seturile noastre de test. Seturile reale desenează bulele în multe feluri, deci pe un set al unui client unele vederi pot fi ratate. Foile scanate au nevoie întâi de {{ui:Read text (OCR)…}}.
- Notele, notele private și panoul alăturat au fost testate într-un browser fără interfață și pe fișierele noastre, nu pe un set vectorial mare real și nu într-o sesiune Live reală între două persoane. Schimbarea unei parole nu este încă realizată. Versiunile mai vechi de 0.9 nu afișează note.
- Vizualizarea de clasă este lista de persoane; nu a fost încercată cu un profesor și cu elevi reali.
- Limbile diferite de engleză sunt ciorne automate până le citește un vorbitor nativ.
- Programele de instalare Windows nu au semnătură de cod (Mai multe informații, apoi Rulați oricum); imaginea de disc macOS nu este notarizată (clic dreapta, apoi Deschidere).

## Mai devreme: 0.8 și 0.8.1

Acestea sunt modificările din MarkupCraft 0.8 și 0.8.1, comparativ cu 0.7. Noutatea mare este că o adnotare poate fi o sarcină pe care o face cineva, sau asistentul tău propriu, și care se închide singură când desenul se schimbă cu adevărat.

### Nou

**Adnotări care acționează**

- **Transformați o adnotare în sarcină.** Selectați una sau mai multe adnotări, deschideți fila {{ui:Tasks}} și alegeți {{ui:Make selected a task}}. O sarcină are un titlu, o persoană sau asistentul tău conectat care o face, o zi de termen opțională și o stare, și își păstrează locul pe foaie și firul ei. Vezi [Transformarea unei adnotări în sarcină](topic:markups-that-act).
- **Sarcini care se închid singure.** O sarcină poate urmări desenul din interiorul adnotării sale. Deschideți o revizie mai nouă a foii și alegeți {{ui:Check now}}: dacă liniile din zona aceea s-au schimbat cu mai mult decât un fir de păr, sarcina este marcată Finalizată, adnotarea devine Finalizată, iar o notă din fir spune ce s-a schimbat. O ștampilă nouă cu dată sau liniile mutate cu mai puțin de 1,5 puncte nu contează. O sarcină poate urmări în schimb un element al modelului: asistentul tău raportează elementul cu `tasks_check`, iar un raport ulterior care diferă sau un element șters închide sarcina. Un singur pas de anulare o redeschide.
- **Găsirea lucrului.** Filtrați lista {{ui:Tasks}} după stare și după cine o are, inclusiv {{ui:Overdue}}; alegeți {{ui:Assigned to}}, apoi {{ui:Assistant}}, ca să vedeți ce așteaptă asistentul tău. O sarcină trecută de ziua termenului apare ca avertisment în panoul Probleme. {{ui:CSV}} exportă lista. Sarcinile sunt salvate în PDF împreună cu adnotarea și circulă prin Live ca alte proprietăți ale adnotărilor.

**Lista modificărilor, ca listă simplă**

- **Listarea modificărilor.** Deschideți fila {{ui:Compare}}, apoi {{ui:Compare a whole set}}, alegeți fișierul mai vechi și pe cel mai nou și alegeți {{ui:List the changes}}. Lista începe cu un număr, apoi acoperă fiecare foaie modificată, cea cu cea mai mare modificare prima: unde se află pe foaie, cât de mare este (în unități reale, pe o foaie calibrată, nu doar în inchi pe hârtie), dacă au fost adăugate sau eliminate linii, câte adnotări se află acolo și ce cuvinte au apărut sau au dispărut. {{ui:Copy the list}} o pune pe clipboard, iar {{ui:CSV}} scrie câte un rând pentru fiecare modificare. Vezi [Listarea modificărilor dintre revizii](topic:what-changed-in-words).

**Note vocale și decizii**

- **Note vocale.** În fila {{ui:Notes}} alegeți {{ui:Record a voice note}}, apoi {{ui:Stop recording}}; înregistrările se opresc singure după două minute. Nota este fixată în centrul foii, o trageți unde trebuie, scrieți o legendă în {{ui:Properties}}, iar {{ui:Play}} din listă o redă. Înregistrarea este salvată în PDF.
- **Decizii.** {{ui:Pin a decision}} scrie una sau două propoziții pe foaie. Dacă înlocuiește o decizie anterioară, alegeți-o în {{ui:It replaces}}: cea veche rămâne, marcată Înlocuită, și indică spre cea nouă. Un singur pas de anulare o desface. Vezi [Fixarea notelor vocale și a deciziilor pe o foaie](topic:voice-notes-and-decisions).

**Linii roșii către revizie**

- **Trimitere și răspuns.** În fila {{ui:Tasks}} deschideți {{ui:Redline to revision}}, scrieți revizia cu care sunt comparate adnotările și alegeți {{ui:Export redline file}}. Primiți un fișier `.redline.json` cu un element pentru fiecare adnotare deschisă: foaia, poziția (ca fracții din foaie, astfel încât o retipărire la alt format se aliniază în continuare), cuvintele, autorul, firul și sarcina ei. Cel care desenează modificările răspunde Acceptat, Respins sau Finalizat într-un fișier `.redline-answers.json`; {{ui:Load answers file…}} dă fiecărei adnotări starea respectivă și nota desenatorului, ca un singur pas de anulare. Vezi [Trimiterea adnotărilor către desenator ca linii roșii](topic:redline-to-revision).

**Asistenții AI**

- **Mai multe instrumente.** Un asistent conectat prin CadCraft Studio poate lista sarcini (`tasks_list`), crea sau modifica una (`task_set`), scoate sarcina (`task_clear`), verifica una față de o revizie mai nouă sau un element (`tasks_check`) și citi lista simplă a modificărilor dintre două seturi de planșe deschise (`revisions_changes`). Primește doar instrumentele bifate sub comutatorul Asistenți, iar fiecare modificare este un singur pas de anulare. Vezi [Folosirea MarkupCraft cu un asistent AI](topic:use-with-ai-assistants).

### În fiecare aplicație

- **Limbi.** CadCraft Studio are acum 54 de limbi. Zece sunt noi: lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili și uzbekă. Toate limbile diferite de engleză sunt ciorne automate până le citește un vorbitor nativ.
- **Dispozitive de intrare.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} stabilește ce face un touchpad, butoanele laterale ale mouse-ului, un creion, atingerile cu degetul, un mouse 3D, un controler de joc sau un controler MIDI, pentru fiecare aplicație sau doar pentru aceasta. Până schimbați ceva, fiecare dispozitiv funcționează ca înainte. Vezi [Folosirea unui touchpad, a unui mouse 3D sau a unui controler](common:input-devices).
- **Rânduri ale barei de instrumente.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} are {{ui:Wrap}} (implicit), {{ui:2 rows}} și {{ui:1 row}}, ca desenul să aibă mai mult loc. Vezi [Aranjarea panourilor](common:arrange-panels).
- **Grila de proprietăți.** Câmpurile de stil ale unei adnotări folosesc grila comună, cu categorii care se pot strânge și coloane de etichetă și de valoare.
- **Panoul Probleme.** Avertismentele aplicației, precum o sarcină întârziată, se adună într-un singur panou Probleme.
- **Live și suplimente.** Sesiunile Live sunt descrise în [Lucrul împreună live](common:work-together-live); lista de suplimente care urmează contul tău este în [Suplimente și lista contului tău](common:addons-basics).
- **Conectarea AI-ului.** CadCraft Studio este centrul pentru asistentul tău propriu: conectați o dată pentru toate cele opt aplicații. Aplicațiile nu au AI propriu.

### Reparat în 0.8.1

- **Studio poate schimba limba cât timp rulează.** Înainte, aplicația desktop și edițiile împachetate rămâneau în engleză. Nu este încă testat pe fiecare platformă: spuneți-ne dacă limba nu se schimbă.
- Instalările Studio 0.8 primesc 0.8.1 prin {{ui:Settings}} › {{ui:Updates}}.

### Nu este încă în această versiune

- **Fără semnătură de cod.** Programele de instalare Windows și imaginea .dmg macOS nu au încă semnătură. Pe Windows, dacă SmartScreen oprește programul de instalare, alegeți {{ui:More info}}, apoi {{ui:Run anyway}}. Pe Mac, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Open}}. Versiunile pentru magazine sunt suspendate.
- **Conectarea AI-ului este neterminată în unele locuri.** Conectarea dintr-un clic în Studio, conectorul găzduit pentru asistenții din browser și cheia ta API proprie în Studio nu sunt promise pentru această versiune. Bucla de sarcini a fost testată, dar nu încă cu un asistent real.
- **Verificările sarcinilor cer aceeași dimensiune de pagină.** O foaie retipărită la altă dimensiune nu se va potrivi, deci sarcinile ei nu se închid. Foile sunt asociate după numărul foii, altfel după poziția paginii.
- **Notele vocale sunt doar înregistrări.** Nu există transcriere, iar un asistent vede lungimea, autorul și legenda unei note, nu sunetul. Înregistrarea a fost încercată cu un microfon fals într-un browser fără interfață; un microfon real pe telefon, tabletă sau laptop urmează să fie verificat.
- **Fișele de calcul și motivele dintr-un PDF** sunt păstrate într-o intrare privată a fișierului. O versiune mai veche de MarkupCraft ignoră intrarea și o elimină la următoarea salvare a fișierului, deci deschideți și salvați un astfel de fișier cu 0.8 sau mai nou.
- **Partea desenătorului din linii roșii.** Citirea fișierului de linii roșii de către CadCraft și răspunsul la el nu sunt încă realizate.
- **Alte limbi.** Bara de aplicație în tamilă depășește cu 528 px.

Tot restul este în [Ce nu este încă realizat](topic:not-built-yet). Pentru versiunea dinaintea acesteia, vezi [Noutăți în 0.7](topic:whats-new-0-7).
