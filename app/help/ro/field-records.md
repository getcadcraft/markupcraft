---
title: Urmărirea RFI-urilor, a documentelor de aprobare și a jurnalelor zilnice
summary: Puneți RFI-urile, documentele de aprobare și jurnalele zilnice pe foi, cu numere, responsabili, termene și conversații; filtrați ce este depășit; exportați CSV sau BCF; lucrați offline și îmbinați copii.
keywords: rfi, cerere de informații, document de aprobare, jurnal zilnic, raport de teren, jurnal de șantier, construcție, depășit, termen, atribuite mie, conversație, atașament, îmbinare, offline, tabletă, bcf, csv, teren
from: 95039c5a
---

Fila {{ui:Field}} păstrează trei tipuri de înregistrări alături de adnotări. Fiecare este legată de o foaie; un RFI sau un document de aprobare are și un pin în locul de pe foaie la care se referă.

- **RFI**: o întrebare pentru echipa de proiectare. Stări: Deschis, Răspuns dat, Închis.
- **Document de aprobare**: ceva ce trebuie verificat înainte ca lucrarea să continue. Stări: Deschis, În verificare, Aprobat, Aprobat cu observații, A se revizui și retrimite, Închis.
- **Jurnal zilnic**: vremea din ziua respectivă, numărul de persoane pe șantier și lucrările executate. Stări: Ciornă, Final.

Fiecare înregistrare are un număr al tipului său (RFI-0001, SUB-0001, LOG-0001), un titlu, un text, un responsabil, un termen, o conversație de răspunsuri și o listă de nume de atașamente.

## Adăugare una

1. Deschideți fila {{ui:Field}} și alegeți {{ui:RFI}} sau {{ui:Submittal}}.
2. Atingeți sau faceți clic pe foaia unde aparține. Apare un pin, iar înregistrarea se deschide în filă.
3. Completați titlul, întrebarea sau descrierea, persoana căreia i se atribuie și termenul.

Un jurnal zilnic se adaugă la foaia deschisă, fără pin. {{ui:Place pin}} plasează unul ulterior; {{ui:Move pin}} mută orice pin. Atingerea unui pin de pe foaie deschide înregistrarea lui.

## Răspuns și urmărire

Schimbați {{ui:Status}} și modificarea se înregistrează în conversație. Scrieți un răspuns și alegeți {{ui:Send reply}} (Ctrl+Enter trimite și el). Atașamentele sunt doar nume: scrieți unul sau alegeți fișiere, iar lista arată echipei ce ține de înregistrare. Fișierele în sine rămân unde sunt.

O înregistrare al cărei termen a trecut și care încă așteaptă (un RFI care nu este Răspuns dat sau Închis, un document de aprobare care nu este decis) este marcată **Depășit**, cu roșu, în listă și pe pinul ei.

## Găsirea a ceea ce contează

Filtrele sunt deasupra listei: tip, stare, termen (depășit, termen în 7 zile, cu sau fără termen), această foaie sau toate foile, o căutare text și {{ui:Assigned to me}}, care compară responsabilul cu numele pe care îl cunoaște MarkupCraft (vezi [Setare nume](topic:set-your-name)). Linia de sub filtre numără ce se afișează și ce este depășit.

## Export

{{ui:CSV}} scrie înregistrările din listă ca foaie de calcul. {{ui:BCF}} le scrie ca subiecte BCF, fiecare cu o instantanee a locului său pe foaie, ca alte instrumente BCF să le poată lista. Ambele respectă filtrele.

## Salvare, lucru offline și îmbinarea copiilor

Înregistrările se salvează în PDF la salvarea acestuia și revin când îl deschideți. Nu este nevoie de rețea: adăugați, editați, răspundeți și salvați pe o tabletă într-un subsol, apoi aduceți PDF-ul înapoi. PDF-urile mai vechi și cele din alte programe se deschid ca întotdeauna.

Pentru a reuni două copii, deschideți una și alegeți {{ui:Merge}}, apoi alegeți cealaltă copie a aceluiași PDF. Înregistrările se unesc după id-uri:

- o înregistrare pe care o are doar o copie este adăugată;
- o înregistrare din ambele copii își ia câmpurile (titlu, text, stare, responsabil, termen) din copia modificată ultima, în întregime; deci, dacă două persoane au modificat câmpuri diferite ale aceleiași înregistrări, versiunea din copia mai recentă câștigă; conversațiile și numele atașamentelor din ambele copii se unesc;
- dacă ambele copii au numerotat la fel o înregistrare nouă, cea care sosește primește următorul număr liber;
- o înregistrare ștearsă într-o copie rămâne ștearsă, dacă nu a fost editată după aceea.

Îmbinarea este un singur pas de Anulare.

## Limite

- Înregistrările nu sunt partajate încă de Live TeamWork; folosiți {{ui:Merge}}.
- Nu există echipe, notificări sau proiecte cloud pentru înregistrări în această versiune.
- Paginile șterse din PDF își iau înregistrările cu ele (confirmarea paginii le numără).
