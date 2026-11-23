---
title: Velikosti strani in imena papirja
summary: Oglejte si velikost vsake strani PDF v milimetrih in palcih ter ime papirja (serije A, B in C, ANSI, ARCH), in razvrstite mešan nabor po velikosti, da najdete odstopajoče strani.
keywords: velikost strani, velikost papirja, ime papirja, a0, a1, a2, a3, a4, serija b, serija c, ansi, arch, arhitekturna, mm, palci, velikost po meri, po velikosti, nenavadna velikost, mešan nabor, preveri pdf, stranka, izdaja, mediabox, cropbox, rotacija
from: 08e1354f
---

Preden set gre stranki, preverite, ali je vsak list prave velikosti. {{ui:MarkupCraft}} prebere velikost vsake strani iz samega PDF in poimenuje papir.

## Kaj boste naredili

Oglejte si velikost enega lista, nato razvrstite celoten nabor po velikosti.

## Koraki

1. Odprite PDF-je ({{ui:Odpri}}), nato pritisnite {{key:Esc}}, dokler ni nič izbrano, in {{ui:Izbor}} je vklopljen.
2. Oglejte si {{ui:Lastnosti}}. {{ui:Papir}} pove ime in smer, na primer „A4, portrait“. {{ui:Velikost}} poda milimetre in palce.
3. Vsaka vrstica seznama {{ui:Listi}} ima pod imenom lista vrstico z velikostjo.
4. Izberite {{ui:Po velikosti}} v glavi {{ui:Listi}}. Seznam zbere liste pod eno naslovno vrstico za vsako velikost, največja skupina najprej. Velikost z le nekaj listi je označena kot izstopajoča.
5. Ponovno izberite {{ui:Po velikosti}}, da se vrnete v lastni vrstni red nabora.

Rezultat: stran, ki je druge velikosti kot ostale, je pred pošiljanjem nabora zlahka opazna.

## Kako je izbrano ime

- Velikost pride iz okvirja strani v PDF z upoštevano rotacijo, zato je ležeči A3 še vedno A3.
- Imena so serije A in B (ISO 216), serija C (ISO 269), ANSI A do E in ARCH A do E.
- Stran, ki je znotraj 2 mm od imenovane velikosti, dobi to ime. Vsaka druga stran pove {{ui:po meri}}, {{ui:Najbližja imenovana velikost}} pa pove, katera velikost je najbližja in koliko se razlikuje.
- Palci izhajajo iz prave velikosti strani, zato je stran A4 8.26 x 11.69 in.

## V datotekah, ki jih shranite

Povzetek delovnega zvezka ({{ui:Seznam označb}}, nato preglednica) ima stolpec {{ui:Velikost papirja}} na listu {{ui:Po listih}} in delovni list {{ui:Velikosti strani}}. Poročilo PDF ima vrstico „Velikosti strani“ s številom vsake velikosti.

:::note
Vrednosti palcev za ANSI in ARCH so bile vpisane iz objavljenih tabel in niso bile primerjane z natisnjenimi standardi. Stran „po meri“, ki je blizu eni od njih, obravnavajte kot zadevo za vaše lastno preverjanje.
:::
