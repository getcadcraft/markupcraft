---
title: Copierea unei zone din pagină sau a unei suprapuneri
summary: Copiați o parte a unei foi cu un dreptunghi, o elipsă sau o formă liberă și lipiți-o într-o altă foaie, în CadCraft, BimCraft, DetailCraft sau în orice program, la dimensiunea sa; copiați-o ca suprapunere transparentă și aliniați o imagine după două puncte.
keywords: copiere zonă, zonă, decupare, captură, instantaneu, clip, regiune, dreptunghi, elipsă, cerc, formă liberă, lasou, imagine, png, suprapunere, transparent, tentă, opacitate, lipire, dimensiune reală, scară, aliniere, două puncte, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Alegeți {{ui:Mai multe}} › {{ui:Copiere a unei zone din pagină…}}. Se deschide o bară peste foaie.

## Alegerea zonei

Alegeți {{ui:Dreptunghi}}, {{ui:Elipsă}} sau {{ui:Formă liberă}} în bară, apoi trageți pe foaie:

- **Dreptunghi:** trageți o casetă în jurul părții de copiat.
- **Elipsă:** trageți o casetă; elipsa din interiorul ei este copiată, iar colțurile din afara ei sunt transparente.
- **Formă liberă:** desenați în jurul părții de copiat; forma se închide singură. În afara ei totul este transparent.

Trageți din nou ca să începeți de la capăt, sau apăsați {{key:Esc}}.

## Copierea

- {{ui:Includere adnotări}} copiază adnotările odată cu pagina; debifați-l pentru desenul curat.
- {{ui:Rezoluție}}: {{ui:Ca pe ecran}}, 72, 150 sau 300 dpi. Imaginea se păstrează sub 3 MB; când o zonă mare la o rezoluție înaltă ar depăși acest prag, rezoluția se coboară, iar linia de stare spune la ce valoare.
- {{ui:Copiere}} (sau {{key:Mod+C}} sau {{key:Enter}}) pune zona pe clipboard ca imagine PNG, care se lipește în Word, e-mail, alte programe PDF și programe de desen.
- {{ui:Salvare ca PNG}} descarcă în schimb imaginea, pentru un program care pierde părțile transparente la lipire.

## Copierea ca suprapunere

{{ui:Copiere ca suprapunere}} face și hârtia albă transparentă, astfel încât rămân doar liniile. {{ui:Culoare}} dă fiecărei linii o singură culoare (roșu, albastru, verde, portocaliu sau mov), ca suprapunerea să iasă în evidență față de desenul de sub ea; {{ui:Culori proprii}} le păstrează. {{ui:Intensitate}} este cât de puternică începe când se lipește în aplicațiile noastre (50% implicit).

## Lipirea

**În MarkupCraft**, {{key:Mod+V}} pe orice foaie lipește zona ca adnotare cu imagine la cursor. Aceasta intră la dimensiunea ei:

- pe hârtie, la aceeași dimensiune pe care o avea pe foaia de unde provine;
- când ambele foi au scară, aceeași dimensiune în desen: o zonă de pe o foaie 1:50 intră la jumătate din dimensiunea de hârtie pe o foaie 1:100.

O suprapunere pornește cu intensitatea sa; schimbați-o cu {{ui:Opacitate}} din {{ui:Proprietăți}}. Mutați, redimensionați, blocați și ștergeți-o ca orice imagine și bifați {{ui:Aplatizare în pagină la salvare}} ca să fie desenată în pagină.

**În CadCraft, BimCraft și DetailCraft** copia își cunoaște și dimensiunea, deci o lipire intră la dimensiunea reală a desenului când foaia avea scară sau cere una când nu avea. Vezi ajutorul fiecărei aplicații despre imagini.

## Alinierea unei imagini după două puncte

Selectați o singură imagine sau suprapunere, apoi alegeți {{ui:Mai multe}} › {{ui:Aliniere a unei imagini cu două puncte}}:

1. Faceți clic pe un punct al imaginii.
2. Faceți clic acolo unde trebuie să ajungă punctul respectiv.
3. Faceți clic pe un al doilea punct al imaginii, departe de primul.
4. Faceți clic acolo unde trebuie să ajungă acel punct.

Imaginea este scalată, mutată și rotită astfel încât ambele puncte să ajungă unde s-a făcut clic. {{key:Esc}} oprește; {{key:Mod+Z}} o anulează într-un singur pas.

## De reținut

- Dimensiunea se transmite odată cu copia doar între aplicațiile noastre de pe același site și doar pentru o copie făcută în ultimele câteva ore; alt program primește o imagine simplă.
- Dacă browserul nu permite MarkupCraft să folosească clipboardul sistemului, linia de stare spune asta: lipirea în aplicațiile noastre funcționează în continuare, iar {{ui:Salvare ca PNG}} funcționează pentru alte programe.
- Alinierea rotește imaginea prin redesenarea pixelilor săi, deci o imagine rotită este ușor mai moale decât originalul.
