---
title: Noutăți în 0.9 (anterioară)
summary: Note și un panou alăturat care nu se tipăresc niciodată, note private criptate și o copie curată pentru client, legături în lot pentru un set complet de desene, un instrument Arc cu zece metode, urmărirea altui revizuitor în Live și o remediere pentru adnotările șterse care rămâneau în PDF-ul salvat.
keywords: noutăți 0.9, versiune anterioară, noutăți, ce e nou, 0.9, note de lansare, jurnal modificări, note, panou alăturat, note private, parolă, criptat, ascundere note, afișare note, copie curată, captură, legături în lot, indicatoare de foaie, legare foi, bloc de titlu, număr foaie, addendum, renumerotare, legătură PDF, arc, metode arc, arc cu trei puncte, rază, urmărire, urmărește-mă, live, vizualizare pe clase, listă persoane, adnotare ștearsă, titluri file, 0.8, 0.8.1, versiune, funcții noi, sarcină, sarcini, persoană atribuită, zi scadentă, întârziate, verificare acum, ce s-a schimbat, revizii, comparare, notă vocală, decizie, linii roșii, fișier de răspunsuri, desenator, asistent, mcp, probleme, limbi, dispozitive de intrare, trackpad, rânduri bară de instrumente, grilă proprietăți, actualizare
from: aa3dfeb8
---

Aceasta este lista modificărilor din MarkupCraft 0.9, comparativ cu 0.8.1. Ideea principală este că notele de lucru rămân în afara paginii pe care o primește clientul, iar un întreg set de desene poate fi legat dintr-o singură trecere.

## Noutăți

### Note, panoul alăturat și notele private

- **Panoul alăturat.** Zona din jurul fiecărei foi este un birou: orice se desenează, se scrie sau se lipește lângă foaie este o notă și nu se tipărește niciodată. Alegeți {{ui:Afișare panou alăturat}} pentru a micșora zoom-ul și a avea spațiu, sau {{ui:Captură pe panoul alăturat}}, trageți un dreptunghi, apoi {{ui:Pe panoul alăturat}} pentru a pune o imagine a unei părți din desen lângă foaie. O captură este o imagine și nu se modifică atunci când se modifică foaia. Vezi [Note, panoul alăturat și notele private](topic:notes-and-pasteboard).
- **Afișarea și ascunderea notelor.** Orice adnotare poate fi o notă: setați {{ui:Adnotările noi sunt}} în fila {{ui:Note}}, sau {{ui:Această adnotare este}} în {{ui:Proprietăți}}. {{key:Shift+H}} sau comutatorul {{ui:Note}} de sub foaie ascunde și afișează toate notele deodată. Notele sunt excluse din tipărire, din copiile aplatizate, din liste și din exporturi, iar alte cititoare PDF nu le arată. PDF-ul salvat le păstrează pentru data următoare când îl deschideți în MarkupCraft.
- **Note private.** Alegeți {{ui:Setare parolă}}, apoi faceți o adnotare {{ui:O notă privată}}. Ea este criptată în fișier cu o parolă de cel puțin 10 caractere, iar recuperarea nu există: nimeni, nici noi, nu o poate deschide fără parolă. {{ui:Blocare}} pune notele private deoparte; {{ui:Rămâne deblocat pe acest dispozitiv}} este dezactivat implicit.
- **Salvarea unei copii curate.** {{ui:Salvare copie curată}} elimină toate notele, notele private și tot ce se află pe panoul alăturat. Folosiți-o pentru fișierul care merge la client.

### Legarea unui întreg set

- **Legături în lot.** Alegeți {{ui:Pagini}} › {{ui:Legături în lot…}}, sau {{ui:Legare indicatoare de foaie…}} sub {{ui:Căutare text}} în panoul {{ui:Foi}}. Pasul 1 listează numărul și numele fiecărei foi, așa cum sunt citite din blocul de titlu; corectați-le pe cele greșite. Pasul 2 listează indicatoarele găsite, precum `3/A-501` sau `DETAIL 2 ON A-501`. {{ui:De legat}} arată foaia și vederea pentru fiecare, {{ui:Nelegate}} arată numerele pe care nicio foaie deschisă nu le are, iar {{ui:Creare legături}} le creează pe toate dintr-un singur pas de anulare. Rulați-l din nou după un addendum sau o renumerotare; legăturile făcute manual nu se modifică niciodată. O legătură cu o vedere se salvează ca legătură PDF, astfel încât și alte cititoare deschid detaliul. Vezi [Legăturile foilor](topic:sheet-links).

### Desen

- **Arc, zece metode.** Instrumentul {{ui:Arc}} ({{key:O}}) are acum o casetă {{ui:Metodă arc}} peste pagină, cu zece moduri de a desena un arc, iar unghiul, lungimea, raza și direcția pot fi indicate cu clic sau tastate. Vezi [Desenarea unui arc în zece moduri](topic:draw-an-arc).

### Lucrul împreună

- **Urmărirea unui revizuitor.** Într-o sesiune Live, alegeți {{ui:Urmărire}} lângă numele unei persoane, iar vederea se mută odată cu a persoanei respective; panoramarea sau zoom-ul propriu oprește urmărirea. Gazda poate alege {{ui:Cereți tuturor să mă urmărească}}. Lista persoanelor arată culoarea fiecăreia, numele, foaia pe care se află și momentul ultimei modificări. Vezi [Urmărirea altui revizuitor într-o sesiune Live](topic:follow-in-live).

## În fiecare aplicație

- Indicațiile (tooltip-urile) sunt tooltip-uri Bootstrap, fișa de pornire poate fi închisă, iar bările cu file derulează atunci când depășesc spațiul; titlurile filelor din browser arată `<document> — MarkupCraft | CadCraft`.
- Un panou cu mai multe secțiuni deschide una și le închide pe celelalte (un lacăt lângă cursor păstrează una deschisă); un comutator din {{ui:Setări}} oprește acest lucru.
- Fiecare aplicație pornește cu o colecție implicită de elemente din bibliotecă.
- Unitățile de greutate și de temperatură sunt disponibile în setările de {{ui:Unități}}.

## Remediat

- **Adnotările șterse nu mai rămân citibile în PDF-ul salvat.** Până acum, salvarea scotea de pe pagină o adnotare ștearsă sau rescrisă, dar lăsa obiectul, cu textul lui, în fișier. Acum salvarea șterge aceste obiecte. Fișierele salvate de versiunile anterioare le conțin în continuare până le salvați din nou.

## Limite reale

- Legăturile în lot au fost încercate pe seturile noastre de test. Seturile reale desenează bulele în multe feluri, așa că pe un set de client unele vederi pot fi omise. Foile scanate au nevoie întâi de {{ui:Citire text (OCR)…}}.
- Notele, notele private și panoul alăturat au fost testate într-un browser fără interfață și pe fișierele noastre, nu pe un set vectorial mare real și nu într-o sesiune Live reală cu două persoane. Schimbarea parolei este încă nerealizată. Versiunile mai vechi de 0.9 nu afișează note.
- Vizualizarea pe clase este lista persoanelor; nu a fost încercată cu un profesor și cu elevi reali.
- Limbile diferite de engleză sunt ciorne automate până le citește un vorbitor nativ.
- Programele de instalare pentru Windows nu au semnătură de cod (Mai multe informații, apoi Rulare oricum); imaginea de disc pentru macOS nu este notarizată (clic dreapta, apoi Deschidere).

## Mai devreme: 0.8 și 0.8.1

Aceasta este lista modificărilor din MarkupCraft 0.8 și 0.8.1, comparativ cu 0.7. Noutatea mare este că o adnotare poate fi o sarcină pe care o face cineva sau asistentul propriu și care se închide singură atunci când desenul se schimbă cu adevărat.

### Noutăți

**Adnotări care acționează**

- **Transformarea unei adnotări în sarcină.** Selectați una sau mai multe adnotări, deschideți fila {{ui:Sarcini}} și alegeți {{ui:Transformare selecție în sarcină}}. O sarcină are un titlu, o persoană sau asistentul conectat care o face, o zi scadentă opțională și o stare; își păstrează locul pe foaie și firul de discuție. Vezi [Transformarea unei adnotări în sarcină](topic:markups-that-act).
- **Sarcini care se închid singure.** O sarcină poate urmări desenul din interiorul adnotării sale. Deschideți o revizie mai nouă a foii și alegeți {{ui:Verificare acum}}: dacă liniile din acea zonă s-au schimbat cu mai mult decât un fir de păr, sarcina este marcată ca Gata, adnotarea devine Finalizată, iar o notă din fir spune ce s-a schimbat. O nouă ștampilă de dată sau liniile care s-au mutat cu mai puțin de 1.5 puncte nu contează. În loc de desen, o sarcină poate urmări un element al modelului: asistentul raportează elementul cu `tasks_check`, iar un raport ulterior diferit sau un element șters închide sarcina. Un pas de anulare o redeschide.
- **Găsirea lucrului.** Filtrați lista {{ui:Sarcini}} după stare și după persoana căreia îi este destinată, inclusiv {{ui:Întârziate}}; alegeți {{ui:Atribuită lui}}, apoi {{ui:Asistent}}, pentru a vedea ce așteaptă asistentul. O sarcină depășită după ziua scadentă apare ca avertisment în panoul Probleme. {{ui:CSV}} exportă lista. Sarcinile se salvează în PDF împreună cu adnotarea și circulă prin Live ca alte proprietăți ale adnotărilor.

**Ce s-a schimbat, ca listă simplă**

- **Listarea modificărilor.** Deschideți fila {{ui:Comparare}}, apoi {{ui:Comparare set complet}}, alegeți fișierul anterior și pe cel ulterior și alegeți {{ui:Listare modificări}}. Lista începe cu un număr, apoi acoperă fiecare foaie modificată, cea mai mare modificare prima: unde se află pe foaie, cât de mare este (în unități reale, precum și în inci de hârtie, pe o foaie calibrată), dacă au fost adăugate sau eliminate linii, câte adnotări se află acolo și ce cuvinte au apărut sau au dispărut. {{ui:Copiere listă}} o pune pe clipboard, iar {{ui:CSV}} scrie câte un rând pentru fiecare modificare. Vezi [Listarea a ce s-a schimbat între revizii](topic:what-changed-in-words).

**Voce și decizii**

- **Note vocale.** În fila {{ui:Note}} alegeți {{ui:Înregistrare notă vocală}}, apoi {{ui:Oprire înregistrare}}; înregistrările se opresc singure după două minute. Nota este fixată în centrul foii; o trageți unde trebuie și scrieți o legendă în {{ui:Proprietăți}}, iar {{ui:Redare}} din listă o redă. Înregistrarea se salvează în PDF.
- **Decizii.** {{ui:Fixare decizie}} scrie una sau două propoziții pe foaie. Dacă înlocuiește o decizie anterioară, alegeți-o în {{ui:Înlocuiește}}: cea veche rămâne, marcată Înlocuită, și indică spre cea nouă. Un pas de anulare le întoarce. Vezi [Fixarea notelor vocale și a deciziilor pe o foaie](topic:voice-notes-and-decisions).

**Linii roșii către revizie**

- **Trimitere și răspuns.** În fila {{ui:Sarcini}} deschideți {{ui:Linii roșii către revizie}}, scrieți revizia cu care se compară adnotările și alegeți {{ui:Export fișier de linii roșii}}. Obțineți un fișier `.redline.json` cu un element pentru fiecare adnotare deschisă: foaia, poziția (ca fracții din foaie, astfel încât o retipărire la altă dimensiune se aliniază în continuare), cuvintele, autorul, firul și sarcina. Cel care desenează modificările răspunde Accepted, Rejected sau Done într-un fișier `.redline-answers.json`; {{ui:Încărcare fișier de răspunsuri…}} dă fiecărei adnotări starea respectivă și nota desenatorului, ca un singur pas de anulare. Vezi [Trimiterea adnotărilor către desenator ca linii roșii](topic:redline-to-revision).

**Asistenți AI**

- **Mai multe unelte.** Un asistent conectat prin CadCraft Studio poate lista sarcinile (`tasks_list`), crea sau modifica una (`task_set`), scoate sarcina (`task_clear`), verifica una față de o revizie mai nouă sau de un element (`tasks_check`) și citi lista simplă a modificărilor dintre două seturi de planuri deschise (`revisions_changes`). Primește doar uneltele bifate sub comutatorul Asistenți, iar fiecare modificare este un singur pas de anulare. Vezi [Folosirea MarkupCraft cu un asistent AI](topic:use-with-ai-assistants).

### În fiecare aplicație

- **Limbi.** CadCraft Studio are acum 54 de limbi. Zece sunt noi: lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili și uzbecă. Toate limbile care nu sunt engleza sunt ciorne automate până le citește un vorbitor nativ.
- **Dispozitive de intrare.** {{ui:Setări}} › {{ui:Global}} › {{ui:Dispozitive de intrare}} stabilește ce fac un trackpad, butoanele laterale ale mouse-ului, un creion, atingerile cu degetul, un mouse 3D, un controler de joc sau un controler MIDI, pentru fiecare aplicație sau doar pentru aceasta. Până modificați ceva, fiecare dispozitiv funcționează ca înainte. Vezi [Folosirea unui trackpad, a unui mouse 3D sau a unui controler](common:input-devices).
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} are {{ui:Încadrare}} (implicit), {{ui:2 rânduri}} și {{ui:1 rând}}, astfel încât desenul să aibă mai mult spațiu. Vezi [Aranjarea panourilor](common:arrange-panels).
- **Grilă de proprietăți.** Câmpurile de stil ale unei adnotări folosesc grila comună, cu categorii care se pot restrânge și coloane de etichetă și de valoare.
- **Panoul Probleme.** Avertismentele din aplicație, precum o sarcină întârziată, se adună într-un singur panou Probleme.
- **Live și suplimente.** Sesiunile Live sunt descrise în [Lucrul împreună live](common:work-together-live); lista de suplimente asociată contului este descrisă în [Suplimente și lista contului](common:addons-basics).
- **Conectați-vă AI-ul.** CadCraft Studio este punctul central pentru propriul asistent: conectați-l o singură dată pentru toate cele opt aplicații. Aplicațiile nu conțin AI propriu.

### Remediat în 0.8.1

- **Studio poate schimba limba cât rulează.** Înainte, aplicația desktop și edițiile împachetate rămâneau în engleză. Nu este încă testat pe toate platformele: spuneți-ne dacă limba nu se schimbă.
- Instalările Studio 0.8 primesc oferta 0.8.1 prin {{ui:Setări}} › {{ui:Actualizări}}.

### Nu este încă în această versiune

- **Fără semnătură de cod.** Programele de instalare pentru Windows și fișierul .dmg pentru macOS nu au încă semnătură. Pe Windows, dacă SmartScreen oprește instalarea, alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulare oricum}}. Pe Mac, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. Versiunile pentru magazine sunt suspendate.
- **Conectarea AI-ului este neterminată în unele privințe.** Conectarea dintr-un clic în Studio, conectorul găzduit pentru asistenții din browser și cheia proprie API din Studio nu sunt promise pentru această versiune. Bucla de sarcini a fost testată, dar nu încă cu un asistent real.
- **Verificările sarcinilor cer aceeași dimensiune de pagină.** O foaie retipărită la altă dimensiune nu se va potrivi, deci sarcinile ei nu se închid. Foile se asociază după numărul foii, altfel după poziția paginii.
- **Notele vocale sunt doar înregistrări.** Nu există transcriere, iar un asistent vede lungimea notei, autorul și legenda, nu sunetul. Înregistrarea a fost încercată cu un microfon fals într-un browser fără interfață; un microfon real pe telefon, tabletă sau laptop urmează să fie verificat.
- **Foile de calcul și motivele dintr-un PDF** sunt păstrate într-o intrare privată a fișierului. Un MarkupCraft mai vechi ignoră această intrare și o elimină la următoarea salvare, deci deschideți și salvați un astfel de fișier cu 0.8 sau mai nou.
- **Partea desenatorului din linii roșii.** Citirea fișierului cu linii roșii de către CadCraft și răspunsul la el nu sunt încă realizate.
- **Alte limbi.** Bara de aplicație în tamilă depășește cu 528 px.

Restul este în [Ce nu este încă realizat](topic:not-built-yet). Pentru versiunea dinaintea acesteia, vezi [Noutăți în 0.7](topic:whats-new-0-7).
