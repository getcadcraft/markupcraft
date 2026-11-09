---
title: Noutăți în 0.8 și 0.8.1
summary: Adnotări care devin sarcini și se închid singure, o listă simplă a modificărilor dintre revizii, note vocale și decizii pe plan, fișiere cu linii roșii pentru desenator, și modificările comune din 0.8: dispozitive de intrare, rânduri ale barei de instrumente, Probleme, mai multe limbi.
keywords: noutăți, ce este nou, note de lansare, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, sarcină, sarcini, responsabil, zi scadentă, întârziat, verificare acum, ce s-a schimbat, revizii, comparare, notă vocală, decizie, linii roșii, fișier de răspunsuri, desenator, asistent, mcp, probleme, limbi, dispozitive de intrare, trackpad, rânduri ale barei de instrumente, grilă de proprietăți, actualizare
from: 40368796
---

Iată ce s-a schimbat în MarkupCraft 0.8 și 0.8.1, comparativ cu 0.7. Noutatea mare este că o adnotare poate fi o sarcină pe care o face cineva sau asistentul conectat, și care se închide singură atunci când desenul se schimbă cu adevărat.

## Noutăți

### Adnotări care acționează

- **Transformați o adnotare într-o sarcină.** Selectați una sau mai multe adnotări, deschideți fila {{ui:Sarcini}} și alegeți {{ui:Transformare selecție în sarcină}}. O sarcină are un titlu, o persoană sau asistentul conectat care o face, o zi scadentă opțională și o stare, și își păstrează locul pe planșă și firul de discuție. Vezi [Transformarea unei adnotări în sarcină](topic:markups-that-act).
- **Sarcini care se închid singure.** O sarcină poate urmări desenul din interiorul adnotării sale. Deschideți o revizie mai nouă a planșei și alegeți {{ui:Verificare acum}}: dacă liniile din zona respectivă s-au schimbat cu mai mult decât un fir de păr, sarcina este marcată ca Realizată, adnotarea devine Finalizată, iar o notă din firul de discuție spune ce s-a schimbat. O ștampilă nouă de dată sau linii care s-au mutat cu mai puțin de 1.5 points nu contează. În schimb, o sarcină poate urmări un element al modelului: asistentul conectat raportează elementul cu `tasks_check`, iar un raport ulterior care diferă, sau un element șters, închide sarcina. Un pas de anulare o redeschide.
- **Găsiți lucrul de făcut.** Filtrați lista {{ui:Sarcini}} după stare și după persoana pentru care este, inclusiv {{ui:Întârziate}}; alegeți {{ui:Atribuită lui}}, apoi {{ui:Asistent}}, ca să vedeți ce așteaptă asistentul. O sarcină depășită după ziua scadentă apare ca avertisment în panoul Probleme. {{ui:CSV}} exportă lista. Sarcinile sunt salvate în PDF împreună cu adnotarea și circulă prin Live ca alte proprietăți ale adnotărilor.

### Ce s-a schimbat, ca listă simplă

- **Listarea modificărilor.** Deschideți fila {{ui:Comparare}}, apoi {{ui:Comparare un set întreg}}, alegeți fișierul mai vechi și pe cel mai nou și alegeți {{ui:Listare modificări}}. Lista începe cu un număr, apoi acoperă fiecare planșă modificată, cea mai mare modificare prima: unde se află pe planșă, cât de mare este (în unități reale, precum și în in pe hârtie la o planșă calibrată), dacă au fost adăugate sau eliminate linii, câte adnotări se află acolo și ce cuvinte au apărut sau au dispărut. {{ui:Copiere listă}} pune lista în clipboard, iar {{ui:CSV}} scrie câte un rând pentru fiecare modificare. Vezi [Listarea a ce s-a schimbat între revizii](topic:what-changed-in-words).

### Note vocale și decizii

- **Note vocale.** În fila {{ui:Note}} alegeți {{ui:Înregistrare notă vocală}}, apoi {{ui:Oprire înregistrare}}; înregistrările se opresc singure după două minute. Nota este fixată în centrul planșei, o trageți unde trebuie și scrieți o legendă în {{ui:Proprietăți}}, iar {{ui:Redare}} din listă o redă. Înregistrarea este salvată în PDF.
- **Decizii.** {{ui:Fixare decizie}} scrie una sau două propoziții pe planșă. Dacă înlocuiește o decizie anterioară, alegeți-o în {{ui:Înlocuiește}}: cea veche rămâne, marcată ca Înlocuită, și trimite la cea nouă. Un pas de anulare o readuce. Vezi [Fixarea notelor vocale și a deciziilor pe o planșă](topic:voice-notes-and-decisions).

### Linii roșii către revizie

- **Trimitere și răspuns.** În fila {{ui:Sarcini}} deschideți {{ui:Linii roșii către revizie}}, scrieți revizia la care se referă adnotările și alegeți {{ui:Export fișier de linii roșii}}. Veți primi un fișier `.redline.json` cu câte un element pentru fiecare adnotare deschisă: planșa, poziția (ca fracții din planșă, astfel încât o re-trasare la altă dimensiune tot se aliniază), cuvintele, autorul, firul de discuție și sarcina sa. Cel care desenează modificările răspunde cu Acceptată, Respinsă sau Realizată, într-un fișier `.redline-answers.json`; {{ui:Încărcare fișier de răspunsuri…}} dă fiecărei adnotări starea respectivă și nota desenatorului, ca un singur pas de anulare. Vezi [Trimiterea adnotărilor către desenator ca linii roșii](topic:redline-to-revision).

### Asistenți AI

- **Mai multe instrumente.** Un asistent conectat prin CadCraft Studio poate lista sarcini (`tasks_list`), crea sau modifica una (`task_set`), o scoate (`task_clear`), o verifica față de o revizie mai nouă sau un element (`tasks_check`) și citi lista simplă a modificărilor dintre două seturi de planșe deschise (`revisions_changes`). Primește doar instrumentele bifate sub comutatorul pentru asistenți, iar fiecare modificare este un singur pas de anulare. Vezi [Folosirea MarkupCraft cu un asistent AI](topic:use-with-ai-assistants).

## În fiecare aplicație

- **Limbi.** CadCraft Studio are acum 54 de limbi. Zece sunt noi: lituaniană, letonă, bosniacă, marathi, telugu, albaneză, afrikaans, filipineză, swahili și uzbecă. Toate limbile non-engleze sunt ciorne automate până când le citește un vorbitor nativ.
- **Dispozitive de intrare.** {{ui:Setări}} › {{ui:Global}} › {{ui:Dispozitive de intrare}} stabilește ce fac un trackpad, butoanele laterale ale mouse-ului, un creion, atingerile cu degetul, un mouse 3D, un controler de jocuri sau un controler MIDI, pentru toate aplicațiile sau doar pentru aceasta. Până schimbați ceva, fiecare dispozitiv funcționează ca înainte. Vezi [Folosirea unui trackpad, a mouse-ului 3D sau a unui controler](common:input-devices).
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} are {{ui:Încadrare}} (implicit), {{ui:2 rânduri}} și {{ui:1 rând}}, astfel încât desenul are mai mult spațiu. Vezi [Aranjarea panourilor](common:arrange-panels).
- **Grila de proprietăți.** Câmpurile de stil ale unei adnotări folosesc grila comună, cu categorii care se pot restrânge și coloane pentru etichetă și valoare.
- **Panoul Probleme.** Avertismentele aplicației, precum o sarcină întârziată, se adună într-un singur panou Probleme.
- **Live și suplimentele.** Sesiunile Live sunt descrise în [Lucrul împreună în Live](common:work-together-live); lista de suplimente din cont este în [Suplimente și lista din cont](common:addons-basics).
- **Conectați-vă AI-ul.** CadCraft Studio este centrul pentru propriul asistent: conectați-l o singură dată pentru toate cele opt aplicații. Aplicațiile nu conțin AI propriu.

## Remediat în 0.8.1

- **Studio poate schimba limba cât timp rulează.** Înainte, aplicația desktop și edițiile împachetate rămâneau în engleză. Nu este încă testat pe toate platformele: spuneți-ne dacă limba nu se schimbă.
- Instalările Studio 0.8 primesc oferta de actualizare la 0.8.1 prin {{ui:Setări}} › {{ui:Actualizări}}.

## Nu este încă în această versiune

- **Fără semnătură de cod.** Programele de instalare pentru Windows și fișierul .dmg pentru macOS nu au încă semnătură. Pe Windows, dacă SmartScreen oprește instalatorul, alegeți {{ui:Mai multe informații}}, apoi {{ui:Rulare oricum}}. Pe Mac, faceți clic dreapta pe CadCraft Studio și alegeți {{ui:Deschidere}}. Versiunile pentru magazine sunt suspendate.
- **Conectarea AI-ului este neterminată în unele părți.** Conectarea dintr-un clic în Studio, conectorul găzduit pentru asistenții din browser și propria cheie API în Studio nu sunt promise pentru această versiune. Bucla de sarcini a fost testată, dar nu încă cu un asistent real.
- **Verificarea sarcinilor cere aceeași dimensiune a paginii.** O planșă re-trasată la altă dimensiune nu se va potrivi, deci sarcinile ei nu se închid. Planșele sunt asociate după numărul planșei, altfel după poziția paginii.
- **Notele vocale sunt doar înregistrări.** Nu există transcriere, iar un asistent vede lungimea notei, autorul și legenda, nu sunetul. Înregistrarea a fost încercată cu un microfon fals într-un browser fără interfață; un microfon real pe telefon, tabletă sau laptop mai trebuie verificat.
- **Foile de calcul și motivele dintr-un PDF** sunt păstrate într-o intrare privată a fișierului. O versiune mai veche de MarkupCraft ignoră acea intrare și o elimină la următoarea salvare, deci deschideți și salvați astfel de fișiere cu versiunea 0.8 sau ulterioară.
- **Partea desenatorului din liniile roșii.** Citirea fișierului de linii roșii de către CadCraft și răspunsul la el nu sunt încă realizate.
- **Alte limbi.** Bara de aplicație în tamilă depășește cu 528 px.

Restul se află în [Ce nu este încă realizat](topic:not-built-yet). Pentru versiunea dinainte, vezi [Noutăți în 0.7](topic:whats-new-0-7).
