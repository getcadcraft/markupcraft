---
title: Natisnite in spremenite strani datoteke PDF
summary: Natisnite liste z njihovimi oznakami ter zasukajte, premaknite, vstavite, izbrišite ali izvlecite strani odprte datoteke PDF.
keywords: natisni, tiskalnik, papir, strani, stran, zasukaj, obrni, preuredi, premakni stran, vstavi, dodaj stran, prazna stran, izbriši stran, odstrani stran, izvleci, razdeli, operacije s stranmi
from: 81832d9b
---

Meni {{ui:Strani}} v skupini {{ui:Datoteka}} deluje na datoteki PDF, ki ji pripada odprti list. Vaša datoteka PDF na tem računalniku se nikoli ne spremeni: spremembe so del kopije, ki jo shranite.

## Tiskanje

1. Pritisnite {{key:Mod+P}} ali izberite {{ui:Strani}}, nato {{ui:Natisni …}}.
2. Ko je odprtih več listov, izberite, kaj natisniti: {{ui:Ta list}}, vsako stran te datoteke, ves komplet ali strani, ki jih vpišete (na primer `1-3, 5`).
3. Izberite {{ui:Natisni}}. Odpre se pogovorno okno tiskalnika v brskalniku: tam izberite tiskalnik, papir in merilo.

Oznake se natisnejo tako, kot so videti na listu: narisane so na straneh kopije, ki gre v tiskalnik. Komentarji, ki so jih naredili drugi programi, se natisnejo tako, kot to določa njihova datoteka PDF.

:::safari firefox
Če brskalnik ne more tiskati iz strani, se listi odprejo kot datoteka PDF v novem zavihku. Natisnite od tam.
:::

## Zasuk strani

Izberite {{ui:Strani}}, nato {{ui:Zasukaj stran v smeri urnega kazalca}} ali {{ui:Zasukaj stran v nasprotni smeri urnega kazalca}}. Odprti list se zavrti za četrt obrata. Njegove oznake ostanejo, kjer so bile na risbi, besedilo, ki ste ga vpisali, pa se zavrti s stranjo, da še vedno lepo bere.

## Premik strani

Izberite {{ui:Strani}}, nato {{ui:Premakni stran bližje začetku}} ali {{ui:Premakni stran bližje koncu}}. Odprti list zamenja mesto s sosedom v svoji datoteki PDF. Njegove oznake, merilo in številka lista gredo z njim.

## Vstavljanje strani

- {{ui:Vstavi strani iz PDF-ja …}} vstavi vsako stran druge datoteke PDF za odprti list.
- {{ui:Vstavi prazno stran}} doda prazno stran enake velikosti za odprti list, za skice in opombe. V kompletu, narejenem z {{ui:Novo}}, ima tudi mrežo kompleta.
- V kompletu, narejenem z {{ui:Novo}}, pod seznamom {{ui:Listi}} {{ui:Dodaj prazno stran}} doda eno stran več, kot so ostale, na konec. Glejte [Začnite s praznimi stranmi](topic:open-a-plan-set#start-with-blank-pages).

Vstavljene strani dobijo številko strani kot oznako, dokler jih ne preimenujete. Glejte [Preimenovanje lista](topic:open-a-plan-set#rename-a-sheet).

## Brisanje strani

1. Izberite {{ui:Strani}}, nato {{ui:Izbriši strani …}}.
2. Vpišite številke strani te datoteke PDF, na primer `3` ali `2-4`. Polje je izpolnjeno s stranjo odprtega lista.
3. Izberite {{ui:Izbriši strani}}. Če te strani vsebujejo oznake, MarkupCraft pove, koliko jih je, in vpraša znova.

Datoteka PDF ohrani vsaj eno stran. Če želite odstraniti celo datoteko, zaprite komplet in odprite datoteke, ki jih še potrebujete.

## Izvlečenje strani

Izberite {{ui:Strani}}, nato {{ui:Izvleci strani …}}, in vpišite strani. Prenesejo se kot nova datoteka PDF z imenom „<file> (pages 1-3).pdf“, z njihovimi oznakami kot komentarji, ki jih lahko še urejate. Odprta datoteka ostane taka, kot je.

## Dobro je vedeti

- **Razveljavitev se ustavi pri spremembi strani.** {{key:Mod+Z}} razveljavi oznake, narisane za njo, ne pa same spremembe strani ali česa pred njo. Zaprite brez shranjevanja, če želite začeti znova z izvirno datoteko PDF.
- Številke strani štejejo strani ene datoteke PDF, ne celotnega kompleta. Premik strani jo ohrani znotraj njene datoteke.
- Spremenjene strani so neshranjeno delo: {{ui:Shrani}} prenese preurejeno kopijo, pri odhodu pa vas program vpraša.
