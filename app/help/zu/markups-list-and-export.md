---
title: Uhlu lokumaka, izihlungi nokuthumela
summary: Bona konke okumakiwe kusethi, hlunga ngeshidi, umbhali, isimo nohlobo, uye kokukodwa, bese uthumela uhlu njenge-CSV noma BCF.
keywords: uhlu lokumaka, uhlu, isifinyezo, xlsx, incwadi yespredshidi, umbiko we-PDF, ngenisa bcf, hlunga, hlela, umbiko, thumela, csv, bcf, bcfzip, izindaba, uhlu lwamazwana, yiya kokukodwa
from: 6c70261e
---

## Vula uhlu

Khetha ithebhu {{ui:Markups}} ngakwesokudla. Konke ukumaka kuyo yonke ifayela elivuliwe kuyadwetshwa, ngokulandelana kwamashidi bese kulandela ukuthi kwadalwa nini. Umugqa ngamunye ubonisa:

- isithonjana esinombala wokumaka, inombolo yokulungisa uma inayo ("#4"), nesihloko sawo,
- umbhalo wawo, amazwi esitembu noma inani elilinganisiwe, nomzwana wawo,
- ishidi, umbhali nosuku,
- isimo sawo (noma "Kufundeka kuphela" kumazwana afika nefayela), nenani lezimpendulo uma inazo.

Umugqa ongaphezulu kohlu uzibala: "38 okumakiwe", noma "12 kwezingu-38 okumakiwe" uma uhlungiwe.

## Yiya kokumakiwe

Chofoza umugqa. I-MarkupCraft ibonisa leso shidi, ikhethe ukumaka, futhi isondeze kuwo uma ungaphandle kwesikrini noma uncane kakhulu ukuze ubonakale. Endaweni ethi {{ui:Properties}} kukhona imininingwane yawo nochungechunge uma ubuyela kuleyo thebhu.

## Hlunga

Imenyu ezine ngaphezulu kohlu. Ziyahlanganiswa.

| Imenyu | Izinketho |
|---|---|
| {{ui:Sheet}} | Wonke amashidi, Leli shidi (liyakulandela uma ushintsha amashidi), noma noma iliphi ishidi elinokumaka |
| {{ui:Author}} | Noma ubani, noma umbhali ngamunye kusethi |
| {{ui:Status}} | Noma yisiphi isimo, Kuvuliwe, Kwamukelwe, Kwenqatshiwe, Kuqedile |
| {{ui:Type}} | Noma yiluphi uhlobo, noma uhlobo ngalunye lokumaka kusethi |

Izibonelo:

- Okusalindile kulesi shidi: {{ui:Sheet}} "Leli shidi", {{ui:Status}} "Kuvuliwe".
- Amazwana komunye umeluleki: {{ui:Author}} igama lakhe.
- Zonke izilinganiso: {{ui:Type}} "{{ui:Length}}" noma "{{ui:Area}}".

Uhlu lubonisa kuze kube yimigqa engu-2000; ncisha ngesihlungi emasethini amakhulu kakhulu.

## Thumela ku-CSV

Khetha {{ui:CSV}} phezulu kwethebhu. Uzothola "<name> markups.csv" nokumakiwe njengoba kuhlungiwe, umugqa ngamunye, namakholomu alandelayo:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- "Text" ibamba amagama ezinkinobho zamabhokisi ombhalo nezichazi, amagama esitembu, noma igama leqembu lokubala.
- "Measurement" ibamba izilinganiso zobude, "indawo, umngcele" kumazwana, nomugqa othi "iqembu: n" kwezibalo.
- Amasuku aphelele isikhathi se-UTC.

Ukuze uthumele konke, buyisela zonke izihlungi ekukhetheni kwazo kokuqala kuqala.

## Isifinyezo: incwadi yomsebenzi noma i-PDF

- {{ui:XLSX}} idawuniloda "<name> markup summary.xlsx" enamashidi amathathu: **Markups** (umugqa owodwa ngamunye wokumaka oluhlwini, namakholomu afana ne-CSV), **By sheet** (okumakiwe okungaki ishidi ngalinye, okuvuliwe nokuvaliwe, nokuthi ngamunye wohlobo, namanani aphelele), **Punch list** (uma kukhona izinto zokulungisa).
- {{ui:PDF}} idawuniloda "<name> markup summary.pdf": umbiko wokuphrinta noma wokuthumela, unegama lesethi, usuku, nethebula yokumakiwe oluhlwini (inombolo, ishidi, uhlobo, isihloko, umbhalo noma amazwana, inani elilinganisiwe, umbhali, isimo, nempendulo yakamuva). Umbhalo omude uyagoqeka; ikhanda lethebula liphinda ekhasini ngalinye.

Zombili zithatha uhlu njengoba luhlungiwe, ngakho hlunga kuqala ukuze ubike ishidi elilodwa, umbhali oyedwa noma izinto ezivulekile kuphela.

## Thumela ku-BCF

Khetha {{ui:BCF}}. I-MarkupCraft yenza isithombe ngasinye sokumaka oluhlwini ephepheni lakhe ("Kwenziwa izithombe ze-BCF (3 kwezingu-12)…"), bese idawuniloda "<name> markups.bcfzip". Ukumaka ngakunye kuba yisihloko esisodwa se-BCF nesimo sakho, umbhali, izinsuku, izimpendulo njengamazwana, umuntu obekiwe nosuku lokuphela okuvela kwento yakho yokulungisa, nesithombe.

Sebenzisa lokhu ukuletha amazwana okubuyekeza imidwebo kumathuluzi okuhlanganisa we-BIM afunda i-BCF. Okuhambisanayo nokungahambisani kuchazwe ku-[Izisekelo ze-BCF](topic:bcf-basics).

## Ngenisa i-BCF

{{ui:Import BCF}} ifunda ifayela le-.bcfzip (noma .bcf) elivela kwithuluzi le-BIM:

- Izindaba ezivela ekuthumeleni kwe-BCF kwe-MarkupCraft ziyithola imikhakha yazo futhi: izimpendulo ezintsha ziyangezwa kuchungechunge, bese kusethwa isimo esisha (Closed kubalwa njengo-Completed). Izimpendulo ezikhona azingezwa kabili.
- Ezinye izindaba ziba amanothi, nesihloko, nencazelo, umbhali namazwana azo. Inothi lingena ishidini elinenombolo noma igama elinikezwe amalebhula endaba, uma kungenjalo lingena ishidi elivuliwe; ikhamera ye-BIM ayinasikhala ephepheni, ngakho la manothi ahlanganiswa phezulu kwesobunxele seshidi ukuze uwahambise.

Yonke ukungenisa kuyisinyathelo esisodwa: {{key:Mod+Z}} iyasihlehlisa. Bona [Izisekelo ze-BCF](topic:bcf-basics).

## Okungakenziwa uhlu okwamanje

- Ukuqoqa uhlu (hlela, bese uhlunga kunalokho).
- Ukuhlela amanani oluhlwini (hlela endaweni ethi {{ui:Properties}}; izinkambu zokulungisa zihlelwa ethebhini {{ui:Punch list}}).

## Isichazamazwi ephepheni

{{ui:Legend}} ethebhini {{ui:Markups}} ibeka isichazamazwi phezulu nakwesokudla kwalokho okubonakalayo: ibhokisi elibala uhlobo ngalunye lokumaka oluseshidini (ngesihloko nombala, njengo "Cloud", "Question" noma "Outlets") nokuthi zingaki. Iqembu lokubala libala izimpawu zalo. Isichazamazwi siqhubeka sibala njengoba udweba, uhambisa noma usula okumakiwe, futhi siyaphrinta futhi sigcinwe nezibalo zalowo mzuzu.

Yihambise futhi ushintshe usayizi wayo njengoba kwenza nakunoma yikuphi ukumaka. Endaweni ethi {{ui:Properties}} yayo, shintsha {{ui:Title}}, noma setha {{ui:Counts}} ibe {{ui:The whole set}} ukuze ibale wonke amashidi. Izikhala, ezinye izichazamazwi namazwana avela ezinhlelweni ezinye azibalwa.

## Amakholomu akho nokuhlela

{{ui:Columns}} ethebhini {{ui:Markups}} ingeza amakholomu akho kukho konke ukumaka: i-**text**, i-**choice** (njengo Umkhakha: Mekhanikhali, Ugesi, Amapayipi), i-**number** (njengo Izindleko) noma i-**date**. Nika ngalinye igama, khetha uhlobo lwalo, bhala izinketho zekholomu lokukhetha, bese ukhetha {{ui:Save columns}}.

- Zigcwalise endaweni ethi {{ui:Properties}}: ikholomu ngalinye linenkambu lapho. Ikholomu lezinombolo lamukela izinombolo kuphela, ikholomu lesikhathi usuku kuphela.
- Uhlu lubonisa amanani ngaphansi kwesokumaka ngasinye, isihlungi esithi {{ui:Column}} sikhetha inani elilodwa (noma okumakiwe lapho lingenalutho), futhi {{ui:Sort}} ihlela uhlu ngekholomu, ngombhali, ngesimo, ngohlobo noma ngosuku, esikhundleni sokuhlelwa ngeshidi.
- Ukuthumela kwe-CSV ne-XLSX kuthwala amakholomu ngemva kwawajwayelekile. Amakholomu alondolozwa ne-PDF futhi abuya uma uyivula kabusha.
