---
title: Spremljanje RFI-jev, predložitev in dnevnih dnevnikov
summary: Dodajte RFI-je, predložitve in dnevne dnevnike na liste, s številkami, zadolženimi osebami, roki in nitmi; filtrirajte zapadle zapise; izvozite CSV ali BCF; delajte brez povezave in združujte kopije.
keywords: rfi, zahteva za informacije, predložitev, dnevni dnevnik, poročilo s terena, gradbeni dnevnik, gradnja, zapadlo, rok, dodeljeno meni, nit, priloga, združi, brez povezave, tablični računalnik, bcf, csv, teren
from: 95039c5a
---

Zavihek {{ui:Teren}} hrani tri vrste zapisov poleg vaših označb. Vsak je vezan na list; RFI ali predložitev ima tudi bucico na mestu na listu, na katerega se nanaša.

- **RFI**: vprašanje za projektantsko ekipo. Stanja: Odprto, Odgovorjeno, Zaprto.
- **{{ui:Predložitev}}**: nekaj, kar je treba pregledati, preden se delo nadaljuje. Stanja: Odprto, V pregledu, Odobreno, Odobreno z opombami, Popravi in ponovno predloži, Zaprto.
- **Dnevni dnevnik**: vremenske razmere dneva, število ljudi na gradbišču in opravljeno delo. Stanja: Osnutek, Končno.

Vsak zapis ima svojo številko v svoji vrsti (RFI-0001, SUB-0001, LOG-0001), naslov, besedilo, zadolženo osebo, rok, nit odgovorov in seznam imen prilog.

## Dodajanje zapisa

1. Odprite zavihek {{ui:Teren}} in izberite {{ui:RFI}} ali {{ui:Predložitev}}.
2. Tapnite ali kliknite list, na katerega zapis spada. Pojavi se bucica, zapis pa se odpre v zavihku.
3. Vpišite naslov, vprašanje ali opis, zadolženo osebo in rok.

Dnevni dnevnik se doda odprtemu listu brez bucice. {{ui:Postavi bucico}} jo kasneje postavi nanj; {{ui:Premakni bucico}} premakne katero koli bucico. Tapnite bucico na listu, da odprete njen zapis.

## Odgovarjanje in spremljanje

Spremenite {{ui:Stanje}} in sprememba se zabeleži v niti. Napišite odgovor in izberite {{ui:Pošlji odgovor}} (Ctrl+Enter prav tako pošlje). Priloge so samo imena: vpišite ime ali izberite datoteke, seznam pa ekipi pokaže, kaj spada k zapisu. Same datoteke ostanejo, kjer so.

Zapis, pri katerem je rok že mimo in ki še čaka (RFI, ki ni v stanju Odgovorjeno ali Zaprto; predložitev, o kateri še ni odločeno), je na seznamu in na svoji bucici označen z rdečo oznako **Zapadlo**.

## Iskanje tistega, kar je pomembno

Filtri so nad seznamom: vrsta, stanje, rok (zapadlo, v naslednjih 7 dneh, z rokom ali brez roka), ta list ali vsi listi, iskanje po besedilu in {{ui:Dodeljeno meni}}, ki primerja zadolženo osebo z imenom, pod katerim vas MarkupCraft pozna (glejte [Nastavite svoje ime](topic:set-your-name)). Vrstica pod filtri šteje, kaj je prikazano in kaj je zapadlo.

## Izvoz

{{ui:CSV}} izpisane zapise zapiše kot preglednico. {{ui:BCF}} jih zapiše kot teme BCF, vsako s posnetkom njenega mesta na listu, da jih lahko prikažejo drugi programi za BCF. Oba upoštevata filtre.

## Shranjevanje, delo brez povezave in združevanje kopij

Zapisi se shranijo v PDF, ko ga shranite, in se vrnejo, ko ga odprete. Za to ni potrebno omrežje: dodajajte, urejajte, odgovarjajte in shranjujte na tabličnem računalniku v kleti, nato PDF prenesite nazaj. Starejši PDF-ji in PDF-ji iz drugih programov se odprejo, kot so se vedno.

Za združitev dveh kopij odprite eno in izberite {{ui:Združi}}, nato izberite drugo kopijo istega PDF-ja. Zapisi se združijo po svojih identifikatorjih:

- zapis, ki ga ima samo ena kopija, se doda;
- zapis, ki je v obeh, prevzame svoja polja (naslov, besedilo, stanje, zadolženo osebo, rok) kot celoto iz kopije, ki je bila nazadnje spremenjena; če sta dve osebi spremenili različna polja istega zapisa, velja različica iz poznejše kopije; niti in imena prilog iz obeh kopij se združijo;
- če sta obe kopiji isti novi zapis oštevilčili enako, dobi tisti, ki prihaja, naslednjo prosto številko;
- zapis, odstranjen v eni kopiji, ostane odstranjen, razen če je bil urejen pozneje.

Združitev je en korak razveljavitve.

## Omejitve

- Zapisov prek Live TeamWork še ni mogoče deliti; uporabite {{ui:Združi}}.
- V tej različici ni ekip, obvestil ali oblačnih projektov za zapise.
- Strani, izbrisane iz PDF-ja, odnesejo s seboj svoje zapise (potrditev strani jih prešteje).
