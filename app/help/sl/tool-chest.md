---
title: Skrinja orodij
summary: Shranite oblikovano označbo kot ponovno uporabno orodje, z njim rišite in svojo skrinjo delite s pisarno kot datoteko.
keywords: skrinja orodij, orodja, nabor orodij, orodja po meri, shranjene označbe, priljubljene, pisarniški standard, uvoz, izvoz, deljenje, json
from: 7dfa36e0
---

Zavihek {{ui:Orodja}} hrani vašo **skrinjo orodij**: označbe, shranjene z videzom, pripravljene za ponovno risanje. Orodje ohrani vrsto označbe, barvo, debelino črte, polnilo, neprozornost, velikost besedila in predmet ter besedilo žiga, ime skupine štetja ali začetno besedilo besedilnega polja ali oblačka.

## Orodja, ki jih dobite

Nova skrinja ima šest orodij: „Revizijski oblak“ (rdeč), „Vprašanje v oblaku“ (moder), „Rumeni označevalnik“, „RFI oblaček“ (moder, začne se z „RFI: “), „Preverjanje na terenu“ (oranžen oblaček, ki pravi „Preverjanje na terenu.“) in „Odobreno z opombami“ (žig).

## Rišite z orodjem

1. Odprite zavihek {{ui:Orodja}}.
2. Kliknite orodje. Videti je pritisnjeno, ustrezno orodje v orodni vrstici pa se vklopi.
3. Rišite kot običajno. {{ui:Lastnosti}} prikažejo: „Rišete z ‚<orodje>‘ iz skrinje orodij.“

Dokler je orodje iz skrinje vklopljeno, spremembe, ki jih naredite v {{ui:Lastnosti}} pred risanjem, veljajo za to orodje samo za zdaj, brez spreminjanja shranjenega orodja ali vaših običajnih nastavitev orodij. Izbira gumba v orodni vrstici ali pritisk tipke orodja vrne na navadno orodje.

## Shranite lastno

1. Narišite označbo in jo oblikujte po svoje: barva, črta, polnilo, predmet, besedilo žiga.
2. Izberite jo.
3. Izberite {{ui:Shrani izbrano kot orodje}} v zavihku {{ui:Orodja}} ali {{ui:Shrani kot orodje}} v {{ui:Lastnosti}}.
4. Vnesite {{ui:Ime orodja}} in izberite {{ui:Shrani orodje}}.

Rezultat: orodje se doda na konec skrinje, zavihek {{ui:Orodja}} pa se odpre in ga prikaže.

## Žigi, narejeni iz izbora

Izberite več označb (ali vsebino strani z orodjem {{ui:Vsebina}}) in izberite {{ui:Shrani izbor kot žig …}} v {{ui:Več}} ali v meniju z desnim klikom. Skrinja dobi en žig, ki jih vse drži („Žig: 3 označbe skupaj“). Kliknite ga, nato kliknite na poljuben list: označbe pristanejo skupaj, centrirane tam, kjer kliknete, kot nove označbe z vašim imenom; vsebina strani se tam nariše na stran. Ti žigi se shranijo in delijo s skrinjo kot katerokoli orodje.

## Odstranite orodje

Izberite × na koncu vrstice orodja, nato {{ui:Odstrani}}. Označbe, ki so že narisane z njim, ostanejo take, kot so.

## Kje je skrinja shranjena

Skrinja je shranjena **v tem brskalniku, na tem računalniku**. Drug brskalnik ali računalnik ima svojo skrinjo (začne se s šestimi privzetimi), zasebno okno jo pozabi, ko se zapre, brisanje podatkov tega spletnega mesta v nastavitvah brskalnika pa jo izbriše.

Če brskalnik ne more shraniti (shranjevanje je izklopljeno ali polno), vrstica stanja pravi: „Skrinje orodij ni mogoče ohraniti v tem brskalniku (shranjevanje je izklopljeno ali polno). Izvozite jo, da jo ohranite.“

:::safari
Safari lahko izbriše shranjene podatke spletnega mesta, če tega mesta nekaj časa niste uporabljali. Občasno izvozite svojo skrinjo, da jo lahko pozneje znova uvozite.
:::

**Izvozite svojo skrinjo kot varnostno kopijo**, zlasti potem, ko izdelate orodja, na katera se zanašate.

## Delite skrinjo s pisarno

1. Enkrat nastavite orodja.
2. Izberite {{ui:Izvozi}}. Dobite „MarkupCraft tool chest.json“.
3. To datoteko shranite tja, kjer pisarna hrani svoje standarde, ali jo pošljite naokoli.
4. Vsi drugi izberejo {{ui:Uvozi}} v svojem zavihku {{ui:Orodja}} in izberejo datoteko.

Rezultat: „Uvoženih orodij: 12 iz ‚MarkupCraft tool chest.json‘.“ Orodja iz iste skrinje nadomestijo svoje starejše kopije, zato uvoz posodobljene pisarniške skrinje osveži ta orodja, namesto da bi jih podvojil; nova orodja se dodajo. Skrinja lahko hrani do 500 orodij.

MarkupCraft preveri vsako vrednost v uvoženi datoteki in preskoči, kar ne more uporabiti („Preskočenih: 2 (ni uporabnih)“). Datoteke, ki niso skrinja, se zavrnejo: „Ta datoteka ni skrinja orodij MarkupCraft.“ ali „Ta datoteka ni skrinja orodij (ni JSON).“

Datotek skrinj orodij iz drugih programov za označevanje ni mogoče uvoziti.
