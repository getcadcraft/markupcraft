---
title: Primerjajte dve reviziji
summary: Prekrijte staro in novo izdajo lista v dveh barvah, poravnajte ju po dveh točkah in označite, kaj se je spremenilo.
keywords: primerjava, prekrivanje, prekrivanje strani, revizija, diff, razlike, spremembe, staro novo, poravnava, preverjanje, izdaja, biltem
from: 62f5d1c5
---

Primerjava položi dva lista drug čez drugega. Črte, ki so samo na starem listu, so prikazane rdeče, črte, ki so samo na novem, modro, črte na obeh pa v sivi barvi. Barve so poimenovane v legendi pod listom: „Samo na starem listu“, „Samo na novem listu“, „Na obeh“.

## Primerjajte dva lista

1. Odprite obe izdaji. Lahko sta strani istega PDF-ja ali različnih PDF-jev; odprite ju skupaj kot en nabor (glejte [Delo z več datotekami hkrati](topic:several-files)).
2. Izberite zavihek {{ui:Primerjava}} na desni.
3. Izberite {{ui:Stari list}} in {{ui:Novi list}}. Novi list se začne kot tisti, na katerem ste. Ko je odprtih več datotek, je za imenom vsakega lista prikazano ime njegove datoteke.
4. Izberite {{ui:Primerjava}}.

Rezultat: MarkupCraft prikaže novi list s pomešanim starim, pojavi se legenda, zavihek pa pove „Primerjava: <old> (staro) z <new> (novo). Označbe na novem listu ostanejo urejljive.“

## Prehajanje med starim in novim

Povlecite drsnik {{ui:Staro in novo}}. Čisto levo prikazuje samo stari list, čisto desno samo novega, sredina oba. Premikanje naprej in nazaj je pogosto najhitrejši način, da opazite majhno spremembo.

## Poravnajte lista

Če sta bili izdaji izrisani z drugačnim robom, velikostjo ali zasukom, je vse videti spremenjeno. Popravite:

**Po dveh točkah (najboljše):**

1. Izberite {{ui:Poravnaj po dveh točkah}}. Pogled prikaže samo stari list.
2. Kliknite ostro značilnost, ki jo najdete na obeh listih, na primer presečišče mreže stebrov. Zavihek šteje korake („1 od 4“).
3. Kliknite drugo značilnost, daleč od prve, na primer nasprotni vogal mreže.
4. Pogled preklopi na novi list. Ponovno kliknite prvo značilnost.
5. Ponovno kliknite drugo značilnost.

Rezultat: „Poravnano: stari list merilo 100.00 %, zasukan 0.00°. Premaknite za natančno nastavitev.“ Stari list je premaknjen, merjen in zasukan, da se prilega. {{key:Esc}} prekliče med izbiro. Pred vsakim klikom povečajte značilnost za natančnejše prileganje.

**S premikanjem:** uporabite štiri puščične gumbe pod „Poravnava“, da premaknete stari list. Izberite korak (0.25, 1, 5 ali 20 pt; 72 pt je ena palca na papirju). Zavihek pove, za koliko se je premaknil.

{{ui:Ponastavi}} odstrani poravnavo in premike.

## Samo spremenjene črte

Pod gumbi za poravnavo izberite {{ui:Spremenjene črte}} namesto {{ui:Prekrivanje slik}}. MarkupCraft nato primerja lastne črte obeh listov, ne njune slike: novi list se prikaže takšen, kot je, črte, ki so samo na starem listu, so rdeče, samo na novem pa modre. Črta, ki se je samo skrajšala, prikaže samo manjkajoči del. Najprej poravnajte lista (glejte zgoraj): primerjava uporablja poravnavo, zato list, ki je bil samo premaknjen, ne kaže sprememb. Vrstica stanja pove, koliko se je spremenilo.

To deluje za PDF-je, izrisane iz CAD, kjer je risba iz črt. Skenirani listi nimajo črt za primerjavo: zanje uporabite prekrivanje slik. Besedilo, zapisano v pisavi (ne narisano kot poteze), se ne primerja.

## Označite spremembe

Med primerjavo ste na novem listu in vsa orodja delujejo. Narišite oblake okoli sprememb, ko jih najdete; pripadajo novemu listu in ostanejo, ko prenehate primerjati.

{{ui:Spremembe v oblak}} to naredi namesto vas: združi spremenjene črte, ki so blizu skupaj, in nariše revizijski oblak okoli vsake skupine na novem listu, s komentarjem „Spremenjeno od <old sheet>“. Ena {{key:Mod+Z}} jih odstrani vse; izbrišite tiste, ki jih ne potrebujete.

## Primerjajte cel nabor

Ko nova izdaja pride kot svoj PDF, odprite oba PDF-ja in v zavihku {{ui:Primerjava}} odprite {{ui:Primerjava dveh kompletov}}. Izberite staro in novo datoteko, nato izberite {{ui:Primerjaj komplete}}. Listi se parijo po številki (kot v [vstavljanju listov za revizijo](topic:slip-sheet-a-revised-set)), primerjajo po svojih črtah in navedejo z najbolj spremenjenimi najprej. Izberite list na seznamu, da ta par primerjate z {{ui:Spremenjene črte}}.

{{ui:Vse spremembe v oblak}} nariše oblak okoli vsake skupine spremenjenih črt na vseh spremenjenih listih v enem koraku, ki ga lahko razveljavite. Primerjava nabora listov najprej ne poravna, zato list, ki je bil na strani samo premaknjen, izgleda kot spremenjen: primerjajte ta par posebej in uporabite {{ui:Poravnaj po dveh točkah}}.

## Prenehajte primerjati

Izberite {{ui:Končaj primerjavo}} ali pojdite na drug list. Poravnava se shrani za isti par listov, dokler ne zaprete nabora.

## Dobro je vedeti

- Primerjava deluje na tem, kar je narisano, piksel za pikslom. Ne ve, da se je črta premaknila; prikaže staro lego v eni barvi in novo v drugi.
- Besedilo, ki se je preoblikovalo, spremenjen datum v glavi risbe ali drugačen slog izrisa se prikažejo kot spremembe.
- Skeniran list, primerjan z izrisanim, je moten: skeniranje zamegli in premakne črte.
- Primerjava besedila, zapisanega v pisavi, in seznam spremenjenih stvari še nista izdelana.
