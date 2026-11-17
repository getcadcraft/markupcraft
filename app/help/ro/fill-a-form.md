---
title: Completarea unui formular PDF
summary: Scrieți în câmpurile de formular ale unui PDF, bifați casetele și alegeți din liste; valorile se salvează în formularul în sine.
keywords: formular, formulare, completabil, completare, completare formular, acroform, câmp, câmpuri, câmp de text, casetă de bifare, bifare, buton radio, meniu derulant, listă, autorizație, cerere, formular de inspecție, formular de aprobare, semnare
from: ab366541
---

Multe PDF-uri vin cu un formular: cereri de autorizație, liste de verificare pentru inspecție, pagini de gardă pentru documente de aprobare. MarkupCraft afișează câmpurile formularului și valorile lor și vă lasă să le completați. Valorile merg în câmpurile PDF-ului, deci Acrobat și orice alt cititor PDF le arată și le păstrează.

## Completarea formularului

1. Deschideți PDF-ul. Când are un formular, bara de stare spune câte câmpuri are.
2. Alegeți {{ui:Fill form}} în bara de instrumente (sau apăsați {{key:F}}). Fiecare câmp de pe pagină primește o casetă în care puteți scrie.
3. Faceți clic pe un câmp și scrieți. Bifați casetele, alegeți butoanele radio, selectați din meniurile derulante și liste. {{key:Tab}} trece la următorul câmp.
4. Pentru a muta foaia în timpul completării, trageți oriunde în afara câmpurilor.
5. Apăsați {{key:Esc}} sau alegeți alt instrument când ați terminat. Ce ați scris rămâne pe foaie.

Cu {{ui:Select}}, un dublu clic pe un câmp activează {{ui:Fill form}} și vă pune în acel câmp.

## Salvarea formularului completat

Alegeți {{ui:Save}}. Copia descărcată are valorile introduse în câmpuri, cu adnotările alături. Bara de stare spune câte câmpuri au fost completate.

Pentru a preda un formular pe care nimeni nu îl poate modifica, alegeți {{ui:Pages}}, apoi {{ui:Save a flattened copy…}}: valorile devin parte din pagină. Tipărirea face la fel.

## De reținut

- Un câmp blocat de PDF (doar citire) nu poate fi modificat. Caseta lui este gri.
- Textul până la limita de lungime a câmpului este păstrat; caracterele în plus nu se scriu.
- Unele formulare vin fără un desen al casetelor și butoanelor, iar alte programe le arată goale. MarkupCraft le desenează, iar la salvare adaugă imaginea, ca ele să se vadă peste tot.
- Anularea într-un câmp este a câmpului: apăsați {{key:Ctrl+Z}} cât scrieți în el. Anularea adnotărilor nu anulează valorile din formular.
- Dacă browserul se închide, valorile scrise revin împreună cu restul lucrului nesalvat.
- Valorile scrise cu litere pe care fontul standard PDF nu le poate scrie (de exemplu caractere chinezești) sunt salvate, iar PDF-ul cere fiecărui cititor să le deseneze singur.
- Câmpurile de semnătură și butoanele nu se completează aici. Pentru a semna, folosiți {{ui:Stamp}} și semnătura proprie.
- Valorile introduse într-un formular nu sunt partajate încă într-o sesiune live.
