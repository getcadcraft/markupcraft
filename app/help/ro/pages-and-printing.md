---
title: Imprimare și modificarea paginilor unui PDF
summary: Imprimați foile cu adnotările lor și rotiți, mutați, inserați, ștergeți sau extrageți pagini dintr-un PDF deschis.
keywords: imprimare, imprimantă, hârtie, pagini, pagină, rotire, întoarcere, reordonare, mutare pagină, inserare, adăugare pagină, pagină goală, ștergere pagină, eliminare pagină, extragere, divizare, operații pe pagini
from: 81832d9b
---

Meniul {{ui:Pagini}} din grupul {{ui:Fișier}} lucrează pe PDF-ul căruia îi aparține foaia deschisă. PDF-ul de pe acest calculator nu se schimbă niciodată: modificările fac parte din copia pe care o salvați.

## Imprimare

1. Apăsați {{key:Mod+P}} sau alegeți {{ui:Pagini}}, apoi {{ui:Imprimare…}}.
2. Când sunt mai multe foi deschise, alegeți ce să tipăriți: {{ui:Această foaie}}, fiecare pagină din acest fișier, tot setul sau paginile pe care le scrieți (de exemplu `1-3, 5`).
3. Alegeți {{ui:Imprimare}}. Se deschide dialogul de imprimare al browserului: alegeți acolo imprimanta, hârtia și scara.

Adnotările se tipăresc așa cum arată pe foaie: sunt desenate în paginile copiei trimise imprimantei. Comentariile făcute de alte programe se tipăresc așa cum le spune PDF-ul lor.

:::safari firefox
Dacă browserul nu poate tipări din interiorul paginii, foile se deschid ca PDF într-o filă nouă. Tipăriți de acolo.
:::

## Rotiți o pagină

Alegeți {{ui:Pagini}}, apoi {{ui:Rotire pagină în sens orar}} sau {{ui:Rotire pagină în sens antiorar}}. Foaia deschisă se rotește cu un sfert de tură. Adnotările ei rămân unde erau pe desen, iar textul pe care l-ați scris se rotește odată cu pagina, ca să se citească drept.

## Mutați o pagină

Alegeți {{ui:Pagini}}, apoi {{ui:Mutare pagină mai devreme}} sau {{ui:Mutare pagină mai târziu}}. Foaia deschisă schimbă locul cu vecina ei din propriul PDF. Adnotările, scara și numărul foii merg cu ea.

## Inserați pagini

- {{ui:Inserare pagini dintr-un PDF…}} pune toate paginile unui alt PDF după foaia deschisă.
- {{ui:Inserare pagină goală}} adaugă o pagină goală de aceeași mărime după foaia deschisă, pentru schițe și note. Într-un set creat cu {{ui:Nou}}, are și grila setului.
- Într-un set creat cu {{ui:Nou}}, {{ui:Adăugare pagină goală}} sub lista {{ui:Foi}} adaugă încă o pagină ca celelalte, la sfârșit. Vedeți [Începeți cu pagini goale](topic:open-a-plan-set#start-with-blank-pages).

Paginile inserate primesc numărul lor de pagină ca etichetă până le redenumiți. Vedeți [Redenumiți o foaie](topic:open-a-plan-set#rename-a-sheet).

## Ștergeți pagini

1. Alegeți {{ui:Pagini}}, apoi {{ui:Ștergere pagini…}}.
2. Scrieți numerele paginilor acestui PDF, de exemplu `3` sau `2-4`. Pagina foii deschise este completată automat.
3. Alegeți {{ui:Ștergere pagini}}. Dacă acele pagini au adnotări, MarkupCraft spune câte sunt și întreabă din nou.

Un PDF păstrează cel puțin o pagină. Ca să scoateți un fișier întreg, închideți setul și deschideți fișierele de care mai aveți nevoie.

## Extrageți pagini

Alegeți {{ui:Pagini}}, apoi {{ui:Extragere pagini…}}, și scrieți paginile. Ele se descarcă ca PDF nou, numit „<fișier> (pages 1-3).pdf”, cu adnotările lor ca Comentarii pe care le puteți edita în continuare. Fișierul deschis rămâne cum este.

## De reținut

- **Anularea se oprește la o modificare de pagină.** {{key:Mod+Z}} anulează adnotările desenate după ea, dar nu și modificarea de pagină în sine sau ce a fost înainte. Închideți fără salvare ca să porniți din nou de la PDF-ul original.
- Numerele paginilor se numără pe un PDF, nu pe tot setul. Mutarea unei pagini o ține în propriul fișier.
- Paginile modificate sunt lucru nesalvat: {{ui:Salvare}} descarcă copia reorganizată, iar plecarea întreabă mai întâi.
