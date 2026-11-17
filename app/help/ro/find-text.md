---
title: Căutarea textului în desene
summary: Căutați cuvintele de pe fiecare foaie, săriți la fiecare apariție și încadrați-le pe toate dintr-un singur pas.
keywords: căutare, caută, text, cuvânt, cuvinte, ctrl f, căutați, notă, notă cheie, indicator, nor pe toate, evidențiere, ocr, scanare, scanat, citire text, selectare text, copiere text, tesseract
from: 3435c9eb
---

{{ui:Find text}}, la începutul panoului {{ui:Sheets}}, caută cuvintele desenate pe foi. {{ui:Search sheets}} de sub el caută doar în numele foilor.

## Căutare

1. Apăsați {{key:Mod+F}} sau deschideți {{ui:Find text}}.
2. Scrieți cuvintele, de exemplu `hood` sau `verify in field`.
3. Alegeți {{ui:All sheets}} sau {{ui:This sheet}} și bifați {{ui:Match case}} sau {{ui:Whole words}} dacă aveți nevoie.
4. Apăsați {{key:Enter}} sau alegeți {{ui:Find}}.

Rezultat: fiecare apariție este listată cu numărul foii și cuvintele din jur și este marcată cu galben pe foaia ei. Alegeți o apariție pentru a deschide foaia și a face zoom pe ea.

O expresie se găsește chiar dacă desenul o împarte pe două bucăți de text sau pe două rânduri.

## Încadrarea tuturor aparițiilor

Alegeți {{ui:Cloud all}}. Un nor de revizuire merge în jurul fiecărei apariții din listă, pe fiecare foaie, cu „Found: <cuvintele căutate>” ca comentariu. Un {{key:Mod+Z}} le înlătură pe toate.

## Citirea textului dintr-o scanare (OCR)

O foaie scanată este doar o imagine: până când nu i se citesc cuvintele, nu există nimic de căutat. Când numărătoarea spune că foile nu au text, alegeți {{ui:Read text (OCR)…}} de sub ea sau {{ui:Pages}} › {{ui:Read text (OCR)…}}.

1. Alegeți paginile: această foaie, fiecare pagină a fișierului sau fiecare pagină din fiecare fișier deschis.
2. Alegeți limba textului. {{ui:Also English}} citește și cuvinte în engleză.
3. Alegeți {{ui:Read text}}. O bară arată pagina citită; {{ui:Stop}} oprește rularea și păstrează paginile deja citite.

Rezultat: cuvintele pot fi găsite, selectate și copiate ca orice alt text. Totul rulează pe calculator; nimic nu este trimis nicăieri. Funcționează fără conexiune în Studio, iar în browser după ce aplicația este salvată pentru offline (în engleză și în limba interfeței) sau după ce o limbă a fost folosită o dată. Paginile care au deja text rămân neschimbate.

La salvare, cuvintele intră în PDF ca text invizibil în spatele imaginii, separat de adnotări, ca alte programe PDF să le poată căuta și copia și ele. Până la salvare, fișierul apare ca nesalvat.

## Selectarea și copierea textului

Alegeți {{ui:More}} › {{ui:Select text to copy}}. Trageți de la un cuvânt la altul pentru a selecta cuvintele dintre ele, trageți dintr-un spațiu gol pentru a selecta cuvintele dintr-o casetă sau faceți dublu clic pe un cuvânt. {{key:Mod+A}} selectează fiecare cuvânt de pe foaie. {{key:Mod+C}} le copiază, păstrând rândurile. Orice alt instrument oprește selecția.

## De reținut

- Desenele ale căror litere sunt desenate ca linii nu au text; citirea lor ca imagine funcționează cel mai bine pe text tipărit, cum este o carte scanată sau o specificație.
- Cititorul este Tesseract, inclus în aplicație cu datele lui de limbă pentru engleză și limbile aplicației. Prima rulare îl încarcă (circa 6 MB, mai mult pentru o a doua limbă).
- Cât de bine citește depinde de scanare: paginile curate la 300 dpi se citesc aproape cuvânt cu cuvânt; scanările vechi, estompate sau de rezoluție mică pierd mai multe cuvinte.
- Lista arată primele 500 de apariții; {{ui:Cloud all}} încadrează până la 2.000.
- Aparițiile se șterg când închideți setul și, pentru un fișier, când schimbați paginile lui.
