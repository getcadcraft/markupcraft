---
title: Dimensiuni de pagină și denumirile hârtiei
summary: Vedeți dimensiunea fiecărei pagini PDF în milimetri și inci, precum și denumirea hârtiei (seriile A, B și C, ANSI, ARCH), și grupați un set amestecat după dimensiune pentru a găsi paginile ieșite din comun.
keywords: dimensiune pagină, dimensiune hârtie, denumire hârtie, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, arhitectural, mm, inci, dimensiune personalizată, după dimensiune, dimensiune neobișnuită, set amestecat, verificare pdf, client, problemă, mediabox, cropbox, rotație
from: 08e1354f
---

Înainte ca un set să ajungă la client, verificați că fiecare foaie are dimensiunea corectă. {{ui:MarkupCraft}} citește dimensiunea fiecărei pagini din PDF însuși și denumește hârtia.

## Ce veți face

Priviți dimensiunea unei foi, apoi grupați întregul set după dimensiune.

## Pași

1. Deschideți PDF-urile ({{ui:Deschidere}}), apoi apăsați {{key:Esc}} până când nimic nu este selectat și {{ui:Selectare}} este activată.
2. Priviți în {{ui:Proprietăți}}. {{ui:Hârtie}} spune denumirea și orientarea, de exemplu „A4, portret”. {{ui:Dimensiune}} dă milimetri și inci.
3. Fiecare rând din lista {{ui:Foi}} are sub numele foii o linie cu dimensiunea.
4. Alegeți {{ui:După dimensiune}} din antetul {{ui:Foi}}. Lista grupează foile sub câte un titlu pentru fiecare dimensiune, cel mai mare grup primul. O dimensiune cu doar câteva foi este marcată ca excepție.
5. Alegeți din nou {{ui:După dimensiune}} pentru a reveni la ordinea proprie a setului.

Rezultat: o pagină cu altă dimensiune decât restul se observă ușor înainte de a trimite setul.

## Cum se alege denumirea

- Dimensiunea provine din caseta paginii din PDF, cu rotația aplicată, astfel încât un A3 în peisaj rămâne A3.
- Denumirile sunt seriile A și B (ISO 216), seria C (ISO 269), ANSI A până la E și ARCH A până la E.
- O pagină aflată la cel mult 2 mm de o dimensiune denumită primește acea denumire. Orice altă pagină are {{ui:personalizată}}, iar {{ui:Cea mai apropiată dimensiune denumită}} spune care dimensiune este cea mai apropiată și cât de departe este.
- Dimensiunile în inci provin din dimensiunea reală a paginii, astfel încât o pagină A4 are 8.26 pe 11.69 in.

## În fișierele pe care le salvați

Fișierul sumar ({{ui:Lista de adnotări}}, apoi foaia de calcul) are o coloană {{ui:Dimensiune hârtie}} pe foaia {{ui:Pe foi}} și o foaie de lucru {{ui:Dimensiuni pagini}}. Raportul PDF are o linie „Dimensiuni pagini” cu numărul fiecărei dimensiuni.

:::note
Valorile în inci pentru ANSI și ARCH au fost introduse manual din tabelele publicate și nu au fost comparate cu standardele tipărite. Tratați o pagină „personalizată” apropiată de una dintre acestea ca pe o verificare proprie.
:::
