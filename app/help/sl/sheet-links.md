---
title: Povezave listov
summary: Naredite, da označba preskoči na drug list, in s skupinskimi povezavami vsako sklico na list, kot je 3/A-501, povežite z njenim listom in pogledom v enem prehodu.
keywords: hiperpovezava, povezava, povezave, skok, sklic na list, sklic na podrobnost, sklic na prerez, 3/A-501, pojdi na list, nazaj, samodejna povezava, skupinska povezava, skupinske povezave, glava risbe, številka lista, ime lista, pogled, podrobnost, preimenuj, preštevilči, dodatek, povezava pdf
from: 86a17c37
---

Povezava lista vas z označbe popelje na drug list kompleta: z mehurčka podrobnosti na podrobnost, z opombe na list, na katerega se nanaša.

## Povežite označbo z listom

1. Izberite označbo.
2. V {{ui:Lastnosti}} izberite list pod {{ui:Povezava na list}}.

Majhna puščica se pokaže v zgornjem desnem kotu označbe. Če ji želite slediti, držite {{key:Mod}} in kliknite označbo ali jo izberite in v {{ui:Lastnosti}} izberite {{ui:Pojdi na …}}. {{key:Alt+Left}} vas vrne na list, s katerega ste prišli.

Povezava imenuje list po njegovi številki, zato še vedno deluje, ko znova odprete komplet ali nadomestite list z novo izdajo: odpre najnovejši list s to številko. Če ta list ni odprt, to pove vrstica stanja.

## Povežite vse sklice na liste hkrati

Izberite {{ui:Strani}} › {{ui:Skupinske povezave…}}, ali {{ui:Poveži sklice na liste …}} pod {{ui:Iskanje besedila}} na vrhu podokna {{ui:Listi}}.

1. **Preverite številke listov.** MarkupCraft navede vsak odprt list s številko in imenom, ki ju je prebral iz glave risbe lista (ali oznake strani), ter pove, od kod je vzet. Popravite napačne in vpišite številko tam, kjer je ni našel (glava risbe, katere številka je bila natisnjena kot črte, nima besedila za branje). Nato izberite {{ui:Najdi oblačke}}. Vaši popravki so en korak razveljavitve in postanejo oznake strani v shranjenem PDF-ju.
2. **Pregledajte seznam.** MarkupCraft prebere besedilo vsakega lista in išče sklice, kot so „3/A-501“, „5 / A501“, „DETAIL 2 ON A-501“, mehurček s „3“ nad „A-501“ ali kar golo „A-501“ v opombi. Prebere tudi naslove pogledov vsakega lista (številka podrobnosti s številko lista pod njo ali velika številka z naslovom poleg). Seznam ima tri dele:
   - {{ui:Bo povezano}}: vsak sklic, list, na katerega kaže, in pogled na tem listu. Odkljukajte tiste, ki jih ne želite. Če pogleda niste našli (sklic na pogled 7 na listu s pogledi od 1 do 6), izberite pogled s seznama ob njem ali pustite {{ui:Ves list}}.
   - {{ui:Ni povezano}}: številke listov, ki jih noben odprt list nima, s številom sklicev na vsako. Izberite list, ki ga ta številka pomeni (na primer list, ki je bil preštevilčen), in vsak sklic na to številko se bo povezal nanj. Ali pa pustite nepovezano.
   - Koliko sklicev je že povezanih in še vedno kaže na pravo mesto. Ti ostanejo nespremenjeni.
3. Izberite {{ui:Ustvari povezave}}.

Vsak sklic dobi tanek moder okvirček, ki je povezava lista. {{key:Mod}}+klik nanj odpre list, povečan na pogled. En {{key:Mod+Z}} jih odstrani vse.

Kode, ki samo izgledajo kot številke listov, na primer R-19 ali W12X26, so izpuščene: sklic mora biti oblikovan kot številke listov v kompletu. Lastna številka lista v njegovi glavi risbe in v naslovih pogledov nikoli ni sklic. Skenirani listi nimajo besedila za branje: najprej uporabite {{ui:Preberi besedilo (OCR) …}}, ali pa povežite njihove sklice enega za drugim.

## Ko se komplet spremeni

Skupinske povezave lahko zaženete poljubno pogosto:

- **Dodan je bil list**, na primer dodatek z A-601: odprite njegovo datoteko in znova zaženite Skupinske povezave. Sklici na A-601, ki se prej niso povezali, se zdaj povežejo.
- **List je bil preštevilčen**: popravite njegovo številko v 1. koraku. Povezave, ki jih je naredila skupinska povezava in ki ne najdejo več svojega lista, so navedene pod {{ui:Ni povezano}}; izberite list enkrat in vse sledijo njemu. Povezave, ki so se premaknile na drug pogled, se posodobijo.
- Povezave, ki ste jih naredili ročno v {{ui:Lastnosti}}, se nikoli ne spremenijo.

## V shranjenem PDF-ju

Povezava na list v istem PDF-ju se zapiše tudi kot povezava PDF, zato tudi drugi bralniki po kliku skočijo tja. Povezava s pogledom odpre ta pogled v drugem bralniku (skok PDF „fit rectangle“); tista brez pogleda odpre cel list. Povezave na list v drugi datoteki kompleta delujejo samo v MarkupCraft.
