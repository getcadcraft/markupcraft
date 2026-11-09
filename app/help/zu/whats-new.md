---
title: Okusha ku-0.8 nasku-0.8.1
summary: Izimakwe ezingushintshela imisebenzi nezivala zodwa, uhlu olulula lwezinto ezishintshile phakathi kwezinguqulo, amazwi nezinqumo epulanini, amafayela e-redline somdwebi, nezinguquko ezabelwana ku-0.8: amadivayisi okufaka, imigqa yebha yamathuluzi, izinkinga, izilimi eziningi.
keywords: okusha, yini esintsha, amanothi okukhishwa, ushintsho, 0.8, 0.8.1, inguqulo, izici ezintsha, umsebenzi, imisebenzi, umenzi, usuku lokugcina, ephuzile, hlola manje, ushintsho, izinguqulo, qhathanisa, inothi lezwi, isinqumo, redline, ifayela lezimpendulo, somdwebi, umsizi, mcp, izinkinga, izilimi, amadivayisi okufaka, itrackpad, imigqa yebha yamathuluzi, igridi yezici, isibuyekezo
from: 40368796
---

Lokhu kuwushintsho olwenziwe ku-MarkupCraft 0.8 nasku-0.8.1, uma kuqhathaniswa ne-0.7. Okusha okukhulu ukuthi imakwe ingaba umsebenzi umuntu, noma umsizi wakho, ayenzayo, futhi uvale wodwa uma umdwebo ushintsha ngempela.

## Okusha

### Izimakwe ezenza

- **Yenza imakwe ibe umsebenzi.** Khetha imakwe eyodwa noma eminingi, vula ithebhu {{ui:Tasks}} bese ukhetha {{ui:Make selected a task}}. Umsebenzi unesihloko, umuntu noma umsizi wakho oxhunyiwe owuzenzayo, usuku lokugcina olukhethwayo nesimo, futhi ugcina indawo yawo ishidini nokuxoxa kwawo. Bona [Yenza imakwe ibe umsebenzi](topic:markups-that-act).
- **Imisebenzi evala yodwa.** Umsebenzi ungalandela umdwebo ngaphakathi kwemakwe yawo. Vula ishidi elisha lenguqulo bese ukhetha {{ui:Check now}}: uma imigqa kuleyo ndawo ishintshe ngaphezu kancane, umsebenzi umakwa njengoWenziwe, imakwe yawo ibe yiIqediwe, futhi inothi kuthelo lokuxoxa lichaza ukuthi yini eshintshile. Usuku olusha lokufaka isitembu, noma imigqa eyanyakazela ngaphansi kwamaphuyinti angu-1.5, akubalwa. Umsebenzi ungalandela isakhi semodeli esikhundleni salokho: umsizi wakho ubika isakhi nge-`tasks_check`, futhi umbiko olandelayo ohlukile, noma isakhi esisusiwe, kuvala umsebenzi. Isinyathelo esisodwa sokuhlehlisa siwuvulela futhi.
- **Thola umsebenzi.** Hlunga uhlu lwe-{{ui:Tasks}} ngesimo nangomuntu owenzelwe, okufaka phakathi {{ui:Overdue}}; khetha {{ui:Assigned to}}, bese {{ui:Assistant}} ukubona okulindele umsizi wakho. Umsebenzi odlula usuku lawo lokugcina ubonakala njengesexwayiso ePaneli Yezinkinga. {{ui:CSV}} ithumela uhlu. Imisebenzi igcinwa ku-PDF kanye nemakwe futhi ihamba ne-Live njengezinye izici zemakwe.

### Ushintsho olubhalwe ngamagama

- **Bhala izinguquko.** Vula ithebhu {{ui:Compare}}, bese {{ui:Qhathanisa isethi yonke}}, khetha ifayela elidala nelisha bese ukhetha {{ui:List the changes}}. Uhlu luqala ngenani, bese lumboza ishidi ngalinye elishintshile, elishintsha kakhulu kuqala: ikuphi ishidi, likhulu kangakanani (ngamayunithi angempela nangamaintshi ephepha kwishidi elilinganisiwe), ukuthi imigqa yengeziwe noma isusiwe yini, imakwe emangaki elapho, namagama avele noma anyamalala. {{ui:Copy the list}} ikopishela uhlu ku-clipboard, {{ui:CSV}} ibhala umugqa owodwa ngoshintsho ngalunye. Bona [Hlola okushintshile phakathi kwezinguqulo](topic:what-changed-in-words).

### Amazwi nezinqumo

- **Amanothi ezwi.** Ethebhini {{ui:Notes}} khetha {{ui:Record a voice note}}, bese {{ui:Stop recording}}; ukurekhoda kuyeka ngokwakho emizuzwini emibili. Inothi liphinwa phakathi kweshidi, uyidonsa lapho kufanele khona, ubhale isihloko esifushane ku-{{ui:Properties}}, futhi {{ui:Play}} ohlwini liyidlala. Ukurekhoda kugcinwa ngaphakathi kwe-PDF.
- **Izinqumo.** {{ui:Pin a decision}} ibhala umusho noma amabili ashidini. Uma kuthatha indawo yesinqumo sangaphambili, khetha lowo kwi-{{ui:It replaces}}: owakudala uhlala, umakwe njengoUshintshiwe, futhi ukhomba kolusha. Isinyathelo esisodwa sokuhlehlisa siwuthathela emuva. Bona [Phina amanothi ezwi nezinqumo ashidini](topic:voice-notes-and-decisions).

### Redline njengoshintsho

- **Thumela futhi uphendule.** Ethebhini {{ui:Tasks}} vula {{ui:Redline to revision}}, bhala inguqulo izimakwe ezihambisana nayo bese ukhetha {{ui:Export redline file}}. Uthola ifayela le-`.redline.json` linento eyodwa ngemakwe evulekile ngayinye: ishidi, indawo (njengamaxhaphozi ashidini, ukuze ukuphrinta kabusha ngosayizi ohlukile kuhlale kuhlelekile), amagama, umbhali, ukuxoxa nomsebenzi wayo. Lowo odweba izinguquko uphendula ngokuthi Ukwamukelwe, Kwenqatshiwe noma Wenziwe efayeleni le-`.redline-answers.json`; {{ui:Load answers file…}} inika imakwe ngayinye leso simo nenothi somdwebi, njengesinyathelo esisodwa sokuhlehlisa. Bona [Thumela izimakwe kumdwebi njenge-redline](topic:redline-to-revision).

### Ama-AI omsizi

- **Amathuluzi amaningi.** Umsizi owuxhumele nge-CadCraft Studio ungabhala imisebenzi (`tasks_list`), enze noma ashintshe owodwa (`task_set`), ayisuse emsebenzini (`task_clear`), ahlole owodwa ngokumelene nenguqulo entsha noma isakhi (`tasks_check`) futhi afunde uhlu olulula lwezinguquko phakathi kwamasethi amapulani amabili avuliwe (`revisions_changes`). Uthola kuphela amathuluzi owakhethe ngaphansi kwesiwushintshi esithi Abasizi, futhi noshintsho ngalunye lungesinyathelo esisodwa sokuhlehlisa. Bona [Sebenzisa i-MarkupCraft nomsizi we-AI](topic:use-with-ai-assistants).

## Kuzo zonke izinhlelo

- **Izilimi.** I-CadCraft Studio manje inezilimi ezingama-54. Eziyishumi ziyizintsha: isi-Lithuanian, isi-Latvian, isi-Bosnian, isi-Marathi, isi-Telugu, isi-Albanian, isi-Afrikaans, isi-Filipino, isi-Swahili kanye ne-isi-Uzbek. Zonke ezingesiNgisi ziyizinhlobo zomshini kuze kufundwe umuntu wendabuko.
- **Amadivayisi okufaka.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} isetha ukuthi i-trackpad, izinkinobho ezingakuhlangothi lwemawusi, ipeni, ukuthinta ngeminwe, imawusi ye-3D, isilawuli somdlalo noma isilawuli se-MIDI kwenzani, kuzo zonke izinhlelo noma kulolu hlelo kuphela. Uma ungakashintshi lutho, zonke izidivayisi zisebenza njengakuqala. Bona [Sebenzisa i-trackpad, imawusi ye-3D noma isilawuli](common:input-devices).
- **Imigqa yebha yamathuluzi.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} inezinketho {{ui:Wrap}} (okuzenzakalelayo), {{ui:2 rows}} ne-{{ui:1 row}}, ukuze umdwebo uthole indawo enganingi. Bona [Hlela amaphaneli](common:arrange-panels).
- **Igridi yezici.** Izinkambu zesitayela sezimakwe zisebenzisa igridi elabelwana, namaqembu angawiswa, nezikholomu zamagama nezinani.
- **Ipaneli yezinkinga.** Izexwayiso zohlelo, njengomsebenzi ophuzile, ziqoqelwa ndawonye kupaneli eyodwa yezinkinga.
- **I-Live nezengezo.** Izikhathi ze-Live zichazwe ku-[Sebenzani ndawonye ku-live](common:work-together-live); uhlu lwezengezo olulandela i-akhawunti yakho lukuchazwe ku-[Izengezo nohlu lwe-akhawunti](common:addons-basics).
- **Xhuma i-AI yakho.** I-CadCraft Studio isikhungo somsizi wakho siqu: xhuma kanye kuzo zonke izinhlelo eziyisishiyagalombili. Izinhlelo azinayo i-AI yazo.

## Okulungisiwe ku-0.8.1

- **I-Studio ingashintsha ulimi ngenkathi isebenza.** Ngaphambili, uhlelo lwedeskithophu nezinguqulo ezipakishiwe kwakuhlala ngesiNgisi. Lokhu akuhlolwanga kuzo zonke izinkundla okwamanje: sitshele uma ulimi lungashintshi.
- Ukufakwa kwe-Studio 0.8 kunikezwa i-0.8.1 ngokuthi {{ui:Settings}} › {{ui:Izibuyekezo}}.

## Akukakwenziwa kule nguqulo

- **Ayisayinwanga ngekhodi.** Izifaki ze-Windows nefayela le-.dmg le-macOS azinasignesha okwamanje. Ku-Windows, uma i-SmartScreen imisa isifaki, khetha {{ui:More info}}, bese {{ui:Run anyway}}. Ku-Mac, cofa ngenkinobho yesokudla kwi-CadCraft Studio bese ukhetha {{ui:Open}}. Izakhiwo zesitolo zimisiwe.
- **Ukuxhuma i-AI akuphelele ezindaweni ezithile.** Ukuxhuma ngokuchofoza kanye ngaphakathi kwe-Studio, ikhonektha esingqongiwe lesiphequluli somsizi kanye nokhiye wakho we-API ngaphakathi kwe-Studio akuthenjiswa kule nguqulo. Umsebenzi uvivinywe, kodwa awukavivinywa nomsizi wangempela.
- **Izinhlolo zemisebenzi zidinga usayizi wekhasi ofanayo.** Ishidi elibuyekezwe kusayizi ohlukile ngeke lihambisane, ngakho imisebenzi yalo ayivali. Amashidi ahlanganiswa ngenombolo yeshidi, kungenjalo ngesikhundla sekhasi.
- **Amanothi ezwi ayizirekhodo kuphela.** Akukho ukubhalwa, futhi umsizi ubona ubude benothi, umbhali nesihloko, hhayi umsindo. Ukurekhoda kuvivinywe nge-microphone yezenzo kusiphequluli esingenasikrini, kodwa i-microphone yangempela efonini, ethebhulethini noma kulaptop isafanele ukuhlolwa.
- **Amashidi wezibalo nezizathu kwi-PDF** agcinwa kungeniso eyimfihlo yefayela. I-MarkupCraft endala iyawunaka lowo ngeniso futhi iyawususa lapho ilondoloza ifayela kulokho, ngakho vula futhi ulondoloze amafayela anjalo nge-0.8 noma kamuva.
- **Uhlangothi lomdwebi wamaredline.** I-CadCraft efunda ifayela le-redline iphendule kulo akukakwakhiwa.
- **Ezinye izilimi.** Ibha yohlelo lwesiTamil ichitheka ngama-px angu-528.

Konke okunye kusekhasini [Okungakakhiwa okwamanje](topic:not-built-yet). Ngokukhishwa kwangaphambili, bona [Okusha ku-0.7](topic:whats-new-0-7).
