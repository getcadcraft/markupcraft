---
title: Folosirea MarkupCraft cu un asistent AI
summary: Lăsați asistentul AI propriu sau un script să listeze adnotările unui set, să adauge adnotări simple, să seteze starea, să răspundă și să exporte lista: permisiuni, conectare prin CadCraft Studio și jurnalul de activitate.
keywords: ai, asistent, agent, mcp, model context protocol, script, automatizare, adnotări, revizuire, permisiuni, deconectare, activitate
from: 095f2977
---

## Ce veți învăța

Cum să lăsați un asistent AI (sau un script scris de dvs.) să lucreze cu MarkupCraft și cum să decideți ce are voie să atingă.

MarkupCraft **nu are AI propriu** și nu trimite nimic nicăieri. Aduceți dvs. asistentul: orice program care vorbește Model Context Protocol (MCP). MarkupCraft îi oferă doar instrumente, iar dvs. alegeți care.

## Activarea

1. Deschideți {{ui:Settings}} (roata din bara aplicației sau {{key:Mod+,}}) și mergeți la fila {{ui:MarkupCraft}}.
2. Sub {{ui:Assistants}}, bifați **Permiteți asistenților AI și scripturilor să folosească MarkupCraft**. Opțiunea este dezactivată până o bifați.
3. Alegeți ce are voie să facă: **Citire** este bifată la început; bifați **Editare**, **Salvare** sau **Export** doar când aveți nevoie de ele.

Instrumentele din afara permisiunilor bifate nu sunt oferite asistentului, iar dacă acesta cere totuși unul, MarkupCraft îl refuză și îl notează în jurnalul de activitate. Oprirea comutatorului încheie imediat fiecare conexiune; {{ui:Resetare setări MarkupCraft}} îl oprește și pe el.

## Conectarea asistentului

Asistenții se conectează prin **CadCraft Studio** de pe calculatorul dvs.: Studio rulează un server mic, la care doar acest calculator poate ajunge, protejat de un token pe care îl generează de fiecare dată când pornește. În Studio, alegeți {{ui:Connect an assistant}} și copiați adresa și tokenul în asistentul dvs. (Studio arată setările exacte de lipit). Nu partajați niciodată tokenul.

:::note
O filă de browser nu poate deschide o conexiune pentru un asistent: în aplicațiile din browser, comutatorul nu are efect până nu folosiți CadCraft Studio pe calculatorul dvs.
:::

## Rămâneți în control

- **Fiecare modificare este un singur pas de anulare**, etichetat cu numele asistentului pentru ea (de exemplu „Asistent: adăugare cloudrect”). {{key:Mod+Z}} retrage ultima modificare a asistentului, în întregime.
- **Știți când unul este conectat.** Un buton din bara aplicației numește asistentul cât timp este conectat; faceți clic pe el pentru a vedea ce are voie să facă, sau pentru a-l deconecta (**Deconectare**).
- **Activitate.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} listează fiecare apel: când, ce instrument, realizat sau refuzat. {{ui:Save the log}} păstrează o copie.

## Ce poate cere un asistent

| Instrument | Permisiune | Ce face |
|---|---|---|
| `app_info`, `sheets_list` | Citire | Seturile deschise, foile lor și câte adnotări are fiecare |
| `markups_list` | Citire | Adnotările cu tip, foaie, text, comentariu, măsurătoare, stare, autor și răspunsuri, filtrate după foaie, stare, tip sau autor |
| `markup_add` | Editare | Adaugă pe o foaie un dreptunghi, nor, elipsă, casetă de text, notă, linie sau săgeată |
| `markup_status`, `markup_reply` | Editare | Setează starea unei adnotări (înregistrată în firul ei, semnată de asistent); adaugă un comentariu într-un fir |
| `markups_export` | Export | CSV-ul sau BCF-ul propriu al listei {{ui:Markups}}, cu ce arată lista (filtrele așa cum le-ați setat); în Studio poate scrie fișierul într-un folder pe care l-ați permis |
| `tasks_list` | Citire | Adnotările care sunt sarcini: persoana desemnată (persoană sau asistent), ziua scadentă, starea, legătura, cum s-a încheiat. `assignee: "assistant"` listează lucrul care așteaptă un asistent |
| `task_set`, `task_clear` | Editare | Fac o adnotare sarcină sau o modifică (titlu, persoană desemnată, scadență, stare, legătură); scot sarcina |
| `tasks_check` | Editare | Închid sarcinile a căror zonă de desen legată sau element de model s-a schimbat efectiv; transmiteți stările elementelor citite din cealaltă aplicație |
| `revisions_changes` | Citire | Lista simplă a ceea ce s-a schimbat între două seturi de plan deschise, pentru a o formula în cuvintele dvs. |
| `pins_list`, `decision_add` | Citire, Editare | Note vocale (durată, cine, când, legendă; niciodată sunetul, fără transcriere) și decizii; fixați o decizie și o înlocuiți pe una anterioară |
| `redline_export`, `redline_answer` | Export, Editare | Scriu fișierul redline pentru proiectant; aplică răspunsurile proiectantului |

O adnotare adăugată de un asistent îl numește autor: numele pe care i-l dă programul asistentului, urmat de „(assistant)”, sau de „(assistant for <numele dvs.>)” după ce ați setat numele dvs. de revizor. Modificările sale de stare și răspunsurile sunt semnate în același mod. Fiecare este un singur pas de anulare. Salvarea PDF-ului adnotat rămâne în sarcina dvs.: folosiți {{ui:Save}} ca de obicei.

Fără a deschide MarkupCraft, serverul MCP CadCraft listează adnotările unui PDF dintr-un folder pe care îl numiți (`markups_list`), iar `cadcraft info Set.pdf` le afișează în linia de comandă.

## Dacă ceva nu funcționează

- **Asistentul nu vede instrumentele MarkupCraft:** verificați că fila este pornită în această fereastră și că fereastra este deschisă în Studio.
- **„needs the edit permission”:** bifați **Editare** sub {{ui:Assistants}}, apoi cereți din nou.
- **Erori „401” sau „token”:** tokenul s-a schimbat (Studio a fost repornit sau s-a generat {{ui:New token}}). Copiați cel nou în setările asistentului.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu instrumentele pe care le apelează.
