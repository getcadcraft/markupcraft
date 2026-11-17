---
title: Cerca text als dibuixos
summary: Cerqueu les paraules de cada full, salteu a cada coincidència i feu-les totes núvol d'un sol cop.
keywords: cerca, cercar, text, paraula, paraules, ctrl f, mira, nota, nota clau, crida, fes núvol a tot, ressalta coincidències, ocr, escaneig, escanejat, llegeix el text, selecciona el text, copia el text, tesseract
from: 3435c9eb
---

{{ui:Cerca text}}, a la part superior del tauler {{ui:Fulls}}, cerca les paraules dibuixades als mateixos fulls. {{ui:Cerca fulls}} sota seu només cerca noms de fulls.

## Cerca

1. Premeu {{key:Mod+F}}, o obriu {{ui:Cerca text}}.
2. Escriviu les paraules, com ara `hood` o `verify in field`.
3. Trieu {{ui:Tots els fulls}} o {{ui:Aquest full}}, i marqueu {{ui:Distingeix majúscules}} o {{ui:Paraules completes}} si ho necessiteu.
4. Premeu {{key:Enter}} o trieu {{ui:Cerca}}.

Resultat: cada coincidència es llista amb el número del seu full i les paraules del voltant, i es marca de groc al seu full. Trieu una coincidència per obrir el seu full i fer-hi zoom.

Una frase es troba fins i tot quan el dibuix la parteix en dos fragments de text o en dues línies.

## Fer núvol a cada coincidència

Trieu {{ui:Fes núvol a tot}}. Un núvol de revisió envolta cada coincidència de la llista, a tots els fulls, amb "Trobat: <les vostres paraules>" com a comentari. Un {{key:Mod+Z}} les elimina totes.

## Llegir el text d'un escaneig (OCR)

Un full escanejat només és una imatge: fins que no se n'han llegit les paraules, no hi ha res a trobar. Quan el recompte indica que hi ha fulls sense text, trieu {{ui:Llegeix el text (OCR)…}} sota seu, o {{ui:Pàgines}} › {{ui:Llegeix el text (OCR)…}}.

1. Trieu les pàgines: aquest full, cada pàgina del fitxer, o cada pàgina de tots els fitxers oberts.
2. Trieu l'idioma del text. {{ui:També anglès}} llegeix també les paraules en anglès.
3. Trieu {{ui:Llegeix el text}}. Una barra mostra la pàgina que es llegeix; {{ui:Atura}} acaba l'execució i conserva les pàgines ja llegides.

Resultat: les paraules es poden trobar, seleccionar i copiar com qualsevol altre text. Tot es fa al vostre ordinador: no s'envia res enlloc. Funciona sense connexió a Studio, i al navegador quan l'aplicació s'ha desat per usar fora de línia (en anglès i en l'idioma de la interfície) o quan ja s'ha fet servir un idioma una vegada. Les pàgines que ja tenen text es deixen tal com estan.

En desar, les paraules entren al PDF com a text invisible darrere de la imatge, a part dels vostres marcatges, perquè altres programes de PDF les puguin cercar i copiar també. Mentre no es desi, el fitxer apareix com a no desat.

## Seleccionar i copiar el text

Trieu {{ui:Més}} › {{ui:Selecciona el text per copiar}}. Arrossegueu d'una paraula a una altra per seleccionar les paraules entre elles, arrossegueu des d'una zona buida del full per seleccionar les paraules d'un quadre, o feu doble clic en una paraula. {{key:Mod+A}} selecciona totes les paraules del full. {{key:Mod+C}} les copia, mantenint les línies. Qualsevol altra eina ho finalitza.

## Bon a saber

- Els dibuixos on les lletres estan dibuixades com a línies tampoc no tenen text; llegir-los com a imatge funciona millor amb text imprès, com un llibre escanejat o una especificació.
- El lector és Tesseract, integrat a l'aplicació amb les seves dades de llengua per a l'anglès i per als idiomes de l'aplicació. La primera execució el carrega (uns 6 MB, més per a una segona llengua).
- La qualitat de lectura depèn de l'escaneig: les pàgines netes a 300 dpi es llegeixen gairebé paraula per paraula; els escanejos antics, febles o de baixa resolució perden més paraules.
- La llista mostra les primeres 500 coincidències; {{ui:Fes núvol a tot}} en fa núvol fins a 2,000.
- Les coincidències s'esborren en tancar el conjunt, i per a un fitxer en canviar-ne les pàgines.
