---
title: Sebenzisa i-MarkupCraft nomsizi we-AI
summary: Vumela umsizi wakho we-AI noma i-script ohlu lwezinto ezimakiwe zeseti, zengeze ezilula, zisethe isimo, ziphendule futhi zithumele uhlu: izimvume, ukuxhumeka nge-CadCraft Studio, nelogu lomsebenzi.
keywords: ai, umsizi, ejenti, mcp, model context protocol, script, ukuzenzakalela, okumakiwe, ukubuyekeza, izimvume, ukunqamula uxhumo, umsebenzi
from: 095f2977
---

## Okuzofunda

Ukuthi ungavumela kanjani umsizi we-AI (noma i-script oyibhalile) ukuthi asebenze ne-MarkupCraft, nokuthi unquma kanjani ukuthi angathinta yini.

I-MarkupCraft **ayinayo i-AI yayo** futhi ayithumeli lutho noma kanjani. Wena uletha umsizi: noma yiluphi uhlelo olukhuluma i-Model Context Protocol (MCP). I-MarkupCraft inikeza amathuluzi kuphela, futhi wena ukhetha ayiphi.

## Yivule

1. Vula {{ui:Izilungiselelo}} (ugiya ebhareni lohlelo, noma {{key:Mod+,}}) bese uya ethebhini {{ui:MarkupCraft}}.
2. Ngaphansi kwe-{{ui:Abasizi}}, faka itiki ku-**Vumela abasizi be-AI namascript basebenzise i-MarkupCraft**. Icishiwe kuze wenze lokho.
3. Khetha okufanele akwenze: **Funda** usuvuliwe kuqala; faka itiki ku-**Hlela**, **Gcina** noma **Thumela** kuphela uma uzidinga.

Amathuluzi angaphandle kwezimvume ozifake awanikezwa umsizi, futhi uma eyicela noma kunjalo, i-MarkupCraft iyenqaba iyibhale nelogu lomsebenzi. Ukucisha iswishi kuqeda uxhumo lonke ngesikhathi esisodwa; {{ui:Setha kabusha izilungiselelo ze-MarkupCraft}} ikucisha nayo.

## Xhuma umsizi wakho

Abasizi bexhuma nge-**CadCraft Studio** esikhompyutheni yakho: iStudio iqalisa iseva encane okufinyelelwa yisikhompyutha kuphela, evikelwe ithokheni eyenza njalo lapho iqala. Ku-Studio, khetha {{ui:Xhuma umsizi}} bese ukopisha ikheli nethokheni kumsizi wakho (iStudio ibonisa izilungiselelo ezinembile okufanele uzinamathise). Ungabelani ngethokheni.

:::note
Ithebhu yesiphequluli ayikwazi ukuvula uxhumo lomsizi: ezinhlelweni zesiphequluli iswishi ayinamthela uma usebenzisa i-CadCraft Studio esikhompyutheni yakho.
:::

## Wena useyilawula

- **Ushintsho ngalunye lukuyinyathelo elilodwa lokuhlehlisa**, lubhalwe ngegama lomsizi lokwenza lokho (isibonelo "Umsizi: engeza cloudrect"). {{key:Mod+Z}} ithatha ushintsho lokugcina lomsizi lonke ngesikhathi esisodwa.
- **Uyazi lapho kuxhunyiwe okunye.** Inkinobho ebhareni lohlelo ibiza umsizi uma exhunyiwe; yichofoze ukuze ubone ayikwazi ukwenza, noma ukuze **uyinqamule**.
- **Umsebenzi.** {{ui:Izilungiselelo}} › {{ui:MarkupCraft}} › {{ui:Abasizi}} › {{ui:Umsebenzi}} ibhala yonke inkulumo: kwasebenza nini, ithuluzi elithile, liqedile noma lenqatshiwe. {{ui:Londoloza ilogu}} igcina ikhophi.

## Yini umsizi angayicela

| Ithuluzi | Imvume | Lenzani |
|---|---|---|
| `app_info`, `sheets_list` | Funda | Amaseti avulekile, amashidi awo nokuthi okumakiwe angaki kwelilodwa ngalinye |
| `markups_list` | Funda | Okumakiwe nohlobo, ishidi, umbhalo, ikhomenti, ukulinganisa, isimo, umbhali namaphendulo, kuhlungwe ngeshidi, isimo, uhlobo noma umbhali |
| `markup_add` | Hlela | Engeza unxande, ifu, iyelipsi, ibhokisi lombhalo, inothi, umugqa noma umcibisholo eshidini |
| `markup_status`, `markup_reply` | Hlela | Isetha isimo somakiwe (ilogwe ocingweni lwawo, isayinwe ngumsizi); engeza ikhomenti ocingweni |
| `markups_export` | Thumela | I-CSV noma i-BCF yohlu lwe-{{ui:Okumakiwe}} ngokwalokho olukhombisa (izihlungi njengoba uzisethile); ku-Studio ingabhala ifayela efolidini oyivumele |
| `tasks_list` | Funda | Okumakiwe angamasu: umuntu anikezwe (umuntu noma umsizi), usuku lokuphela, isimo, isixhumanisi, nokuthi aqedwe kanjani. `assignee: "assistant"` ibhala umsebenzi olindele umsizi |
| `task_set`, `task_clear` | Hlela | Yenza umakiwe ibe yisamu noma uyishintshe (isihloko, umuntu anikezwe, usuku, isimo, isixhumanisi); susa isamu |
| `tasks_check` | Hlela | Vala amasamu ezindawo zedrowing ezixhunyiwe noma izinto zemodeli okuthe ngempela zashintsha; dlulisa izimo zezinto ozifundile kwenye i-app |
| `revisions_changes` | Funda | Uhlu olulula lokuthi yini eshintshile phakathi kwamaseti amabili avuliwe amapulani, ukuze uyibeke ngamagama akho |
| `pins_list`, `decision_add` | Funda, Hlela | Amanothi ezwi (ubude, ubani, nini, isihloko; hhayi umsindo, hhayi umbhalo) nezinqumo; phina isinqumo kanye nokushintsha esandulele |
| `redline_export`, `redline_answer` | Thumela, Hlela | Bhala ifayela le-redline somklami; sebenzisa izimpendulo zomklami |

Okumakiwe umsizi awengezayo umbhala njengombhali wawo: igama uhlelo lomsizi olizibiza ngalo, kulandelwe ngu-"(umsizi)", noma ngu-"(umsizi ka-<igama lakho>)" uma usethe igama lakho njengombuyekezi. Ushintsho lwesimo namaphendulo abo asayiniwe ngendlela efanayo. Ngalinye lingumsebenzi wokuhlehlisa owodwa. Ukulondoloza i-PDF ephawuliwe kuhlala kuwe: sebenzisa {{ui:Londoloza}} njengejwayelekile.

Ngaphandle kokuvula i-MarkupCraft, iseva ye-CadCraft MCP ibhala okumakiwe e-PDF efolidini oyiqamba (`markups_list`), kanye ne-`cadcraft info Set.pdf` ibhala kumugqa womyalo.

## Uma okuthile kungasebenzi

- **Umsizi awubonu amathuluzi e-MarkupCraft:** hlola ukuthi iswishi ivuliwe kule ndawo, nokuthi iwindi livulekile ku-Studio.
- **"needs the edit permission":** faka itiki ku-**Hlela** ngaphansi kwe-{{ui:Abasizi}}, bese ucela futhi.
- **Amaphutha "401" noma "token":** ithokheni ishintshile (i-Studio iqalisiwe kabusha, noma {{ui:Ithokheni entsha}}). Kopisha eyintsha ezilungiselelweni zomsizi.

## Bona futhi

- [Izindlela zabasizi be-AI](common:assistants-recipes): izibonelo ezisebenzayo, ngayinye nethuluzi elibizwayo.
