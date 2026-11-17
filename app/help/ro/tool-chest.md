---
title: Cutia de instrumente
summary: Salvați o adnotare cu aspectul ei ca instrument refolosibil, desenați cu ea și distribuiți cutia cu biroul sub formă de fișier.
keywords: cutie de instrumente, instrumente, set de instrumente, instrumente personalizate, adnotări salvate, favorite, standard de birou, import, export, distribuire, json
from: 7dfa36e0
---

Fila {{ui:Tools}} conține **cutia dvs. de instrumente**: adnotări salvate cu aspectul lor, gata de desenat din nou. Un instrument păstrează tipul adnotării, culoarea, grosimea liniei, umplerea, opacitatea, dimensiunea textului și subiectul, plus textul unei ștampile, numele grupului unei numărări sau textul de start al unei casete de text ori al unui indicator.

## Instrumentele cu care începeți

O cutie nouă are șase: „Nor de revizuire” (roșu), „Nor de întrebare” (albastru), „Evidențiator galben”, „Indicator RFI” (albastru, începe cu „RFI: ”), „Verificare pe teren” (un indicator portocaliu care spune „Verificare pe teren.”) și „Aprobat cu observații” (o ștampilă).

## Desenarea cu un instrument

1. Deschideți fila {{ui:Tools}}.
2. Faceți clic pe un instrument. Pare apăsat, iar instrumentul corespunzător din bara de instrumente se activează.
3. Desenați ca de obicei. {{ui:Properties}} spune: Desenare cu „<instrument>” din cutia de instrumente.

Cât timp un instrument din cutie este activ, modificările pe care le faceți în {{ui:Properties}} înainte de desenare se aplică acelui instrument doar pentru moment, fără a schimba instrumentul salvat sau setările dvs. obișnuite. Alegerea unui buton din bara de instrumente, sau apăsarea tastei unui instrument, revine la instrumentul obișnuit.

## Salvarea propriilor instrumente

1. Desenați o adnotare și stilizați-o cum doriți: culoare, linie, umplere, subiect, text de ștampilă.
2. Selectați-o.
3. Alegeți {{ui:Save selected as a tool}} în fila {{ui:Tools}}, sau {{ui:Save as a tool}} în {{ui:Properties}}.
4. Tastați un {{ui:Tool name}} și alegeți {{ui:Save tool}}.

Rezultat: instrumentul se adaugă la sfârșitul cutiei, iar fila {{ui:Tools}} se deschide pentru a-l arăta.

## Ștampile făcute dintr-o selecție

Selectați mai multe adnotări (sau conținutul paginii cu instrumentul {{ui:Content}}) și alegeți {{ui:Save selection as a stamp…}} în {{ui:More}} sau în meniul clic-dreapta. Cutia primește o singură ștampilă care le conține pe toate („Ștampilă: 3 adnotări împreună”). Faceți clic pe ea, apoi faceți clic pe orice foaie: adnotările ajung împreună, centrate acolo unde faceți clic, ca adnotări noi cu numele dvs.; conținutul paginii se desenează în pagină, acolo. Aceste ștampile se salvează și se distribuie cu cutia, ca orice instrument.

## Eliminarea unui instrument

Alegeți × de la capătul rândului instrumentului, apoi {{ui:Remove}}. Adnotările deja desenate cu el rămân așa cum sunt.

## Unde este păstrată cutia

Cutia este stocată **în acest browser, pe acest calculator**. Un alt browser sau calculator are propria cutie (începând cu cele șase implicite), o fereastră privată o uită când se închide, iar ștergerea datelor site-ului din setările browserului o șterge.

Dacă browserul nu o poate stoca (stocarea este dezactivată sau plină), bara de stare spune: „Cutia de instrumente nu a putut fi păstrată în acest browser (stocarea este dezactivată sau plină). Exportați-o pentru a o păstra.”

:::safari
Safari poate șterge datele stocate ale unui site când nu l-ați mai folosit o perioadă. Exportați-vă din când în când cutia, pentru a o putea importa din nou.
:::

**Exportați cutia ca rezervă**, mai ales după ce construiți instrumente de care depindeți.

## Distribuirea unei cutii cu biroul

1. Configurați instrumentele o singură dată.
2. Alegeți {{ui:Export}}. Obțineți „MarkupCraft tool chest.json”.
3. Puneți acel fișier unde biroul își ține standardele sau trimiteți-l.
4. Ceilalți aleg {{ui:Import}} în fila {{ui:Tools}} și selectează fișierul.

Rezultat: „Au fost importate 12 instrumente din MarkupCraft tool chest.json.” Instrumentele venite din aceeași cutie înlocuiesc copiile lor mai vechi, astfel încât importul unei cutii de birou actualizate reîmprospătează acele instrumente în loc să le dubleze; instrumentele noi se adaugă. O cutie poate avea până la 500 de instrumente.

MarkupCraft verifică fiecare valoare dintr-un fișier importat și sare peste ce nu poate folosi („2 omise (nefolosibile)”). Fișierele care nu sunt o cutie sunt refuzate: „Acest fișier nu este o cutie de instrumente MarkupCraft.” sau „Acest fișier nu este o cutie de instrumente (nu este JSON).”

Fișierele cutiilor de instrumente din alte programe de adnotare nu pot fi importate.
