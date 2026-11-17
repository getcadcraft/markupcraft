---
title: Modificarea liniilor, imaginilor și textului propriu al paginii
summary: Mutați, redimensionați, recolorați sau ștergeți ce desenează chiar PDF-ul, mutați punctele unei linii, înlocuiți o imagine și schimbați cuvintele unei linii de text.
keywords: conținut de pagină, conținut de bază, editare PDF, editare desen, vector, traseu, formă, linie, imagine, înlocuire imagine, text, cuvinte, font, puncte, noduri, mutare, redimensionare, recolorare, ștergere, instrument de conținut
from: 471d457e
---

Adnotările stau deasupra foii. Instrumentul {{ui:Conținut}} lucrează pe foaia în sine: liniile, imaginile și rândurile de text pe care le desenează PDF-ul. PDF-ul de pe acest calculator nu se schimbă niciodată: modificările fac parte din copia pe care o salvați.

## Alegeți ce modificați

1. Alegeți {{ui:Conținut}} din grupul {{ui:Selectare}}, sau apăsați {{key:B}}.
2. Sub {{ui:Alegere}} din {{ui:Proprietăți}}, activați sau dezactivați {{ui:Forme}}, {{ui:Imagini}} și Text. Pot fi selectate doar tipurile active, astfel încât puteți selecta textul unui desen aglomerat fără să prindeți liniile.
3. Faceți clic pe ceva ca să-l selectați. Shift+clic adaugă sau elimină. Trageți o casetă peste hârtia goală ca să selectați mai multe: trăgând spre dreapta se iau obiectele complet incluse în casetă, trăgând spre stânga cele pe care le atinge.

O formă dintr-o zonă decupată este selectată doar acolo unde se vede.

## Mutare, redimensionare, recolorare, ștergere

- **Mutare:** trageți un obiect selectat sau apăsați tastele săgeți (țineți Shift pentru pași mai mari). Țineți Shift în timp ce trageți ca să mutați drept pe orizontală sau pe verticală.
- **Redimensionare:** trageți unul dintre cele opt pătrate din jurul selecției. Crește sau scade din latura opusă. Țineți Shift ca să păstrați proporțiile.
- **Recolorare:** pentru linii și forme, setați {{ui:Culoare linie}}, {{ui:Culoare de umplere}} și {{ui:Grosime de linie (pt)}} în {{ui:Proprietăți}}.
- **Ștergere:** apăsați {{key:Delete}} sau alegeți {{ui:Ștergere din pagină}}.
- **Anulare:** fiecare modificare este un pas: {{key:Mod+Z}} o anulează, {{key:Mod+Y}} o reface.

{{ui:Revenire la starea inițială}} anulează deodată toate modificările obiectelor selectate; {{ui:Readuceți această pagină la starea inițială}} face asta pentru toată pagina.

## Copiere, decupare și lipire conținut de pagină

Selectați linii, imagini sau text cu instrumentul {{ui:Conținut}}, apoi:

- {{key:Mod+C}} copiază, {{key:Mod+X}} decupează (copiază și le scoate din pagină), {{key:Mod+D}} pune o copie lângă ele.
- {{key:Mod+V}} lipește ca și conținut de pagină, lângă original sau acolo unde este indicatorul (cum spun [Setările](topic:settings)); {{key:Mod+Shift+V}} lipește exact în același loc. Lipirea se poate face pe altă pagină, într-un alt PDF deschis sau într-o altă filă MarkupCraft din acest browser.
- Meniul grupului {{ui:Editare}} și meniul de clic dreapta au aceleași comenzi.

O lipire păstrează liniile ca linii, cuvintele ca cuvinte în fontul lor și imaginile ca imagini. Este o singură piesă: mutați-o, redimensionați-o după pătrate, ștergeți-o sau anulați-o cu {{key:Mod+Z}}. Devine parte din pagină în copia pe care o salvați. Ce ați copiat ultima dată, adnotări sau conținut de pagină, este ce lipește {{key:Mod+V}}.

Ce conține copia este decupat în caseta din jurul selecției: orice nu poate fi scos din copie de MarkupCraft (vezi mai jos) și se află în acea casetă vine odată cu ea.

## Mutați punctele unei linii

Faceți dublu clic pe o linie sau o curbă (sau selectați-o și alegeți {{ui:Editare puncte}}). Punctele ei apar ca pătrate, iar mânerele curbei ca cercuri. Trageți un punct sau un mâner; un punct aduce cu el mânerele de lângă el, astfel încât curba își păstrează forma în jurul lui. Apăsați {{key:Esc}} sau faceți clic în afara liniei când ați terminat.

Dreptunghiurile nu au puncte de tras: redimensionați-le cu pătratele din jurul lor.

## Înlocuiți o imagine

Selectați o imagine și alegeți {{ui:Înlocuire imagine…}}, apoi alegeți un fișier PNG, JPEG sau SVG (sau un PDF: prima lui pagină). Noua imagine umple locul celei vechi, păstrându-și propriile proporții.

## Schimbați cuvintele unei linii de text

Faceți dublu clic pe o linie de text, scrieți cuvintele noi în {{ui:Cuvinte}} și apăsați {{key:Enter}}. Cuvintele sunt scrise în fontul și mărimea liniei, iar linia își păstrează lungimea, deci textul de după ea nu se mută.

:::note
Majoritatea PDF-urilor conțin doar literele folosite din fiecare font. Când scrieți o literă pe care copia fontului din fișier nu o are, MarkupCraft o tipărește în Helvetica și o spune. {{ui:Proprietăți}} arată ce litere are fontul din fișier.
:::

Textul se schimbă câte o linie; nu trece pe linia următoare.

## Ce lasă MarkupCraft neschimbat

- **Paginile scanate** sunt o singură imagine: puteți muta, redimensiona, înlocui sau șterge imaginea, dar conținutul ei nu poate fi editat.
- **PDF-urile criptate și semnate:** schimbarea paginii ar strica o semnătură, deci instrumentul {{ui:Conținut}} o spune și nu schimbă nimic. Adnotările funcționează în continuare.
- **Zonele de decupare**, obiectele împărțite între două părți ale conținutului paginii și amestecurile de culoare care umplu toată o zonă rămân cum sunt; MarkupCraft spune de ce când încercați.
- **Cuvintele dintr-un font standard pe care PDF-ul nu-l descrie** (cum este un font Times fără lățimile literelor în fișier) nu pot fi schimbate, pentru că MarkupCraft nu ar putea păstra spațiul dintre rânduri. Linia poate fi totuși mutată.

## Puneți adnotările în pagină

Liniile, dreptunghiurile, elipsele, polilinii, norii și traseele de creion desenate ca adnotări pot deveni parte din pagina în sine: selectați-le și alegeți {{ui:Introducere în pagină}} în {{ui:Proprietăți}}. Textul, ștampilele, imaginile și culorile transparente rămân adnotări.
