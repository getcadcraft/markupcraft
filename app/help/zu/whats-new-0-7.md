---
title: Okusha ku-0.7 (kwangaphambili)
summary: Ama-RFI, izinikezo nezincwadi zansuku zonke ethebhini elisha le-Inkundla, ngezinsuku zokuphela, okuphuzile kubomvu, i-CSV ne-BCF, umsebenzi ongaxhunyiwe nokuHlanganisa; abasizi abasetha izimo, abaphendula nabakhipha uhlu; uhlu lwezinyunithi olulandela Izilungiselelo; amaphaneli angalungiswa afihleke namadayalogi anyakazayo.
keywords: okusha 0.7, inguqulo edlule, amanothi okukhishwa, izinguquko, uhlu lwezinguquko, 0.7, inguqulo, izici ezintsha, inkundla, amarekhodi enkundla, rfi, isicelo solwazi, isinikezo, incwadi yansuku zonke, idayari yesayithi, ephuzile, usuku lokuphela, ekunikezwe mina, ipini, hlanganisa, ongaxhunyiwe, ithebulethi, bcf, csv, umsizi, mcp, isimo sokumaka, impendulo, khipha, izinyunithi, uhlu lwezinyunithi, inkanyezi, linganisa, ukuhlanganisa, amaphaneli, idayalogi, isiputukezi
from: f8578677
---

Lokhu kushintshe ku-MarkupCraft 0.7, uma kuqhathaniswa no-0.6. Okukhulu okusha amarekhodi enkundla: ama-RFI, izinikezo nezincwadi zansuku zonke agcinwa ngaphakathi kwe-PDF ecaleni kokumakiwe kwakho.

## Okusha

### ama-RFI, izinikezo nezincwadi zansuku zonke

- **Ithebhu le-Inkundla.** Vula ithebhu le-{{ui:Field}} bese ukhetha {{ui:RFI}}, {{ui:Submittal}} noma {{ui:Daily log}}. Thepha noma chofoza ishidi lapho i-RFI noma isinikezo kufanele sibe khona, ipini imaka indawo; incwadi yansuku zonke iya kushidi elivulekile ngaphandle kwepini ({{ui:Place pin}} yengeza elinye kamuva, {{ui:Move pin}} ihambisa noma yiliphi ipini). Irekhodi ngalinye linenombolo yalo (RFI-0001, SUB-0001, LOG-0001), isihloko, umbhalo, isimo, umuntu obekelwe umsebenzi, usuku lokuphela, intambo yezimpendulo nohlu lwamagama okunamathiselwe. Bona [Landela ama-RFI, izinikezo nezincwadi zansuku zonke](topic:field-records).
- **Bona okuphuzile.** Hlunga uhlu ngohlobo, isimo, usuku lokuphela (eliphuzile, eliphela phakathi kwezinsuku ezi-7, linosuku lokuphela noma alinalo), leli shidi noma wonke amashidi, ukusesha umbhalo, noma {{ui:Ekunikezwe mina}}. Irekhodi edlule usuku lokuphela futhi seliseletha lingasasebenzi libonakala **Liphuzile**, ngombala obomvu, ohlwini nasepinini yalo. Bona [Thola okubalulekile](topic:field-records#find-what-matters).
- **I-CSV ne-BCF.** {{ui:CSV}} ibhala amarekhodi adweshiwe njengesipredishithi; {{ui:BCF}} iwabhala njengezihloko ze-BCF, ngalinye linesithombe esibonisa indawo yalo esheetini. Zombili zilandela izihlungi. Bona [Khipha](topic:field-records#export).
- **Ongaxhunyiwe, namakhophi amabili abe munye.** Amarekhodi agcinwa ngaphakathi kwe-PDF futhi awadingi inethiwekhi, ngakho ithebulethi esiteshini ingawengeza, awaphendule futhi awalondoloze. Lapho ubuyela ehhovisi, {{ui:Hlanganisa}} ihlanganisa amarekhodi ekhophini yesibili ye-PDF efanayo ngama-ID awo, njengesinyathelo esisodwa sokuhlehlisa. Bona [Londoloza, ukusebenza ngaphandle kwenethiwekhi nokuhlanganisa amakhophi](topic:field-records#save-offline-and-merging-copies).

### Abasizi be-AI

- **Okwengeziwe umsizi angakwenza.** Umsizi wakho, oxhunyiwe nge-CadCraft Studio, manje ungabeka isimo sokumaka (`markup_status`, sirekhodwe entonjeni yaso), aphendule entonjeni (`markup_reply`) futhi akhiphe uhlu lwe-{{ui:Okumakiwe}} njenge-CSV noma i-BCF (`markups_export`, okubonisa uhlu ngezihlungi zalo). Ushintsho ngalunye luyisinyathelo esisodwa sokuhlehlisa, lusayinwe ngegama lomsizi. Bona [Okungacelwa umsizi](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Kuzo zonke izinhlelo

- **Izinyunithi.** {{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › {{ui:Izinyunithi}} inohlu olulodwa ngalunye lobude, indawo, ivolumu, i-engeli nokuthambeka, ngosayizi abanikezwe izincazelo zeyunithi ngayinye (ifidi lesivo lase-US liyiyunithi yalo). Vala izinyunithi ongazisebenzisi futhi ziphuma ezinhlwini zezinyunithi; ukhethe eyodwa okusha kuqala kuyo. Ifayela ligcina iyunithi yalo njalo. Ku-MarkupCraft, izinyunithi zokulinganisa nezokuma ku-{{ui:Izilungiselelo}} › {{ui:MarkupCraft}} kanye neyunithi ewindini lokulinganisa zilandela izinkinobho zokuvula, inkanyezi isetha iyunithi yokulinganisa kuze kulondolozwe izilungiselelo ze-MarkupCraft, futhi indawo yangempela oyitayipha lapho ulinganisa ingaba noma yimuphi uphawu lweyunithi, njengo-`3 yd` noma `1.5 km`. Bona [Izinyunithi, amanani otayiphile nohlu lwezinyunithi](common:unit-lists).
- **Ukwakheka okujiyile nezimpaneli ezilungiselelwayo.** {{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › {{ui:Ubukhulu besakhiwo}} › {{ui:Okuhlangene}} kufaka okwengeziwe esikrinini (izikrini zokuthinta nama-foni agcina izinkinobho zawo ezinkulu). Iphaneli ngayinye eceleni inebha yesihloko esincane: yidonsele ukuze uyifake noma uyenze ibe phezulu, yiphonsele ebhareni lephaneli elinye ukuze wabelane ngefreyimu eyodwa njengamathebhu, uyibophe ukuze ishelele ifike emaphethelweni, noma uyifihle bese uyibuyisa emaphethelweni. Bona [Hlela amaphaneli](common:arrange-panels#make-the-layout-denser).
- **Amadayalogi anyakaza.** Donsa idayalogi ngebha yesihloko ukuyisusa endleleni yomdwebo; ibuya lapho uyishiye khona. Chofoza kabili ebhareni yesihloko ukuze uyibeke phakathi futhi. Bona [Hambisa idayalogi](common:arrange-panels#move-a-dialog).
- **Izindlela zokupheka zabasizi be-AI.** Izicelo eziyishumi ezisebenzayo zomsizi wakho (hlela kahle umdwebo, hlela isethi yamapuleni, hlola imidwebo, buza imodeli imibuzo, bala amanani aphelele, zama ukuguqulwa kwengxenye…), ngalinye linamathuluzi aliwabizayo nezimvume edinga zona, futhi ngalinye liphindwa yizivivinyo zethu. Izinhlelo azinayo i-AI. Bona [Izindlela zokupheka zabasizi be-AI](common:assistants-recipes).
- **Ulimi.** **Português (Portugal)** kusha ku-{{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › {{ui:Ulimi}}. Yona, **Português (Brasil)**, **Español (México)** kanye ne**Bahasa Indonesia** manje sekunawo wonke amagama ezinhlelo, njengemihlahlandlela engakabhekwa umuntu wendabuko. Izihloko zosizo zisesiNgisini.
- **I-CadCraft Studio** ichaza ukuthi kungani ukuhlola isibuyekezo kwehlulekile (akukho ifayela lesistimu yakho okwamanje, akukho inethiwekhi, isiginesha embi) esikhundleni sokuthi "Kwenziwe" nje, futhi ayisabuyisi ikhadi le-What's new elivalwe kuze kube khona ukukhishwa okusha.

## Akukakafiki kule nguqulo

- **I-0.7 ayisayinwanga ngekhodi.** Ukusayina, nephakheji ye-Microsoft Store, kwadluliselwa ku-0.8 ngoba ukuqinisekiswa kwesitifiketi akukafiki. Hlola i-SHA-256 eseceleni kwefayela ngalinye ku-getcadcraft.com/download. Ku-Windows, uma i-SmartScreen imisa isifakeli, khetha {{ui:More info}}, bese {{ui:Run anyway}}. Ku-Mac, ngokuqala, cindezela ngenkinobho yesokudla ku-CadCraft Studio bese ukhetha {{ui:Open}}. I-CadCraft Studio ayikatholakali esitolo sezinhlelo, futhi akukho ukwakha kwe-iPad noma i-iPhone okwamanje.
- Uhlu lwe-engeli nokuthambeka ku-{{ui:Units}} lulondolozwa, kodwa akukho bhokisi elilufundayo okwamanje.
- Amarekhodi enkundla awabelwani esikhathini esiphilayo se-CadCraft Studio (izikhathi eziphilayo zithwala okumakiwe kuphela); hlanganisa amakhophi nge-{{ui:Merge}}.
- {{ui:Merge}} ithatha irekhodi njengoliphelele ekhophini eyashintshwa ekugcineni: uma abantu ababili beshintshe izinkambu ezihlukile zerekhodi elinye, izinkambu zekhophi yakamuva ziyanqoba. Izintambo namagama okunamathiselwe ayahlanganiswa.
- Okunamathiselwe kungamagama kuphela; amafayela ahlala lapho ayekhona. Azikho amaqembu, izaziso noma amaphrojekthi efu lamarekhodi, futhi abasizi abanawo amathuluzi wamarekhodi okwamanje.
- Amarekhodi enkundla ahlolwe kusiphequluli ngosayizi bamafoni nethebulethi ngenethiwekhi evalwe, kodwa awakahlolwa ngesandla ethebulethini langempela.
- Kusele kusuka ku-0.6: ukuphendula izinto zekhasi ngi-engeli noma iyiphi, ukudweba izimo ezintsha ngqo ekhasini, ukushintsha ifonti noma usayizi womugqa, nombhalo ogeleza emigqeni emibili noma ngaphezulu. Ikhophi elondoloziwe enokuhlelwa kwamakhasi akakavulwa ku-Acrobat okwamanje.
- Kusele kusuka ku-0.5: ukuhlehlisa ushintsho lwekhasi (njengokungeza ikhasi elingenalutho), ukufunda umbhalo kumashidi askeniwe, nezikhathi eziphilayo ngaphandle kwenethiwekhi yakho.

Konke okunye kusencwadini [Okungakakhiwa](topic:not-built-yet).
