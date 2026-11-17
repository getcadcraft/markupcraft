---
title: Delo z več datotekami hkrati
summary: Odprite veliko PDF-jev kot en komplet, poiščite liste med datotekami, kopirajte označbe med njimi in shranite kopijo vsake datoteke.
keywords: več datotek, več pdf-jev, komplet načrtov, komplet, serijsko, veliko datotek, združi, discipline, arhitekturna, konstrukcijska, strojna, shrani vse, zapri
from: f59354ae
---

Komplet načrtov pogosto pride kot en PDF za vsako disciplino ali en PDF za vsak list. MarkupCraft vse, kar odprete, obravnava kot **en komplet**.

## Odprite jih skupaj

Izberite vse PDF-je naenkrat v izbirniku datotek ali jih spustite na območje lista. Če jih želite dodati pozneje, jih odprite na enak način; pridružijo se na konec seznama {{ui:Listi}} v vrstnem redu, kot ste jih odprli.

Rezultat: „Odprto: 6 datotek (84 listov v kompletu).“ Vsaka stran je list. Listi s številko lista pod imenom prikazujejo „List A-101“; drugi prikazujejo datoteko in stran.

Datoteke kompleta ni: naslednjič znova odprite iste PDF-je (kopije „(marked up)“, če ste shranili).

## Po celotnem kompletu

- **Iskanje lista:** {{ui:Išči po listih}} išče po številkah listov, imenih listov in imenih datotek vseh datotek. {{key:PageUp}} in {{key:PageDown}} se po vrsti sprehodita čez vse liste vseh datotek.
- **Seznam označb:** zavihek {{ui:Označbe}} prikazuje označbe iz vseh datotek. Filtrirajte po {{ui:List}}, da ga zožite. CSV ima stolpec Datoteka.
- **Seznam točk pomanjkljivosti:** eno številčenje za ves komplet.
- **Primerjava:** stari in novi list lahko prihajata iz različnih datotek.
- **Kopiranje in lepljenje:** {{key:Mod+C}} na enem listu in {{key:Mod+V}} na drugem, v katerikoli datoteki. Kopija pristane na istem mestu na strani, malo zamaknjena.

## Shranjevanje

Izberite {{ui:Shrani}}. Če je odprtih več datotek, MarkupCraft vpraša:

- {{ui:Ta datoteka}}: kopija z označbami datoteke, ki pripada listu, na katerem ste.
- {{ui:Vse spremenjene datoteke}}: kopija vsake datoteke z neshranjenimi spremembami. Vsaka se prenese posebej kot „<ime datoteke> (marked up).pdf“.
- {{ui:Prekliči}}

:::chromium
Ko prvič hkrati shranite več datotek, vas lahko Chrome in Edge vprašata, ali ima to spletno mesto dovoljenje za prenos več datotek. Izberite {{ui:Dovoli}}; sicer pride samo prva kopija.
:::

:::safari
Safari vpraša enkrat za vsako datoteko. Na iPadu gre vsaka kopija v aplikacijo Datoteke.
:::

Datoteka, katere označbe so shranjene, ni več šteta za spremenjeno; druge so še vedno.

Izvozi CSV, BCF in seznama točk pomanjkljivosti se poimenujejo po **prvi** datoteki, ki ste jo odprli.

## Zapiranje

{{ui:Zapri}} zapre ves komplet; še ni mogoče zapreti samo ene datoteke. Če je kaj neshranjeno, vpraša:

- {{ui:Prekliči}}: nič se ne zgodi.
- {{ui:Zapri brez shranjevanja}}: neshranjene označbe se izgubijo.
- {{ui:Najprej shrani kopije}}: shrani vsako spremenjeno datoteko, nato zapre.

Zapiranje tudi počisti zgodovino razveljavitev.

## Veliki kompleti

- Besedilo vsake strani se ob odprtju prebere, da se najdejo številke listov, zato 100-listni komplet vzame nekaj časa. Vrstica stanja šteje liste sproti.
- Slike listov v seznamu se narišejo, ko se pomaknete do njih.
- Vsak odprt PDF je shranjen v pomnilniku zavihka brskalnika. Če se zavihek upočasni, zaprite druge zahtevne zavihke ali pregledujte eno disciplino naenkrat.
- Če odprete isto datoteko dvakrat, dobite dve kopiji njenih listov. Če se to zgodi, izberite {{ui:Zapri}} in komplet znova odprite.
