---
title: Amafayela i-MarkupCraft evula futhi ilondoloza
summary: Ama-PDF angenayo, ikhophi ye-PDF emakiwe ephumayo, kanye namafayela e-CSV, BCF nesikhwama samathuluzi; lapho ngayinye iya khona, ku-inthanethi nangaphandle kwayo.
keywords: pdf, vula, londoloza, thumela, landa, csv, bcf, bcfzip, json, isikhwama samathuluzi, izinhlobo zamafayela, amafomethi, layisha, iphasiwedi, ibethelwe
from: b3045b4c
---

## Okuvulwa yi-MarkupCraft

| Ifayela | Indlela | Okwenzekayo |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open}}, {{key:Mod+O}}, noma uphonsa phezu kwendawo yamashidi. Ngaphezu kwelilodwa ngesikhathi esisodwa kuyiwe. | Ikhasi ngalinye liba yishidi. Okumakiwe okusele ku-PDF kuyafundwa (ngezansi). |
| Isikhwama samathuluzi (`.json`) | Ithebhu {{ui:Tools}}, bese {{ui:Import}} | Amathuluzi engezwa esikhwameni sakho. Bona [Isikhwama samathuluzi](topic:tool-chest). |

Okunye noma yini kuyenqatshwa ngombhalo othi "MarkupCraft ivula amafayela e-PDF kuphela." kubha yesimo. Uma uphonsa ingxube, ama-PDF ayavuleka, futhi ibha yesimo ithi yimangaki amafayela angewona ama-PDF.

### Okumakiwe okusele ku-PDF

- **Okumakiwe elikulondoloze i-MarkupCraft** libuya njengoba kunjalo: uhlobo, isitayela, umbhali, izinsuku, isimo, izimpendulo, inombolo yokulungisa, isikali seshidi namanye amagama amashidi owabhala.
- **Amazwana avela ezinye izinhlelo ze-PDF** nawo ayafundwa. Unxande, iyelipsi, imigqa notolo, iphola-layini, ipholigoni, imigqa yepeni (ipeni), amabhokisiombhalo namanothi anamathelayo aba yizimakwe ezijwayelekile ze-MarkupCraft, ezihlelekayo. Izimpendulo zawo nezimo zokubuyekeza nazo ziyeza.
- **Konke okunye** (okuqaqanjiswe ngokukhetha umbhalo, izitembu zezinye izinhlelo, nezinye izinhlobo) kuboniswa njengoba kunjalo, kumakwe njengokufundeka kuphela. Ungakikhetha, uwubone kuhlu lwezimakwe futhi uphendule kuwo, kodwa awukwazi ukuwuhambisa, ukuwushintsha noma ukuwususa.
- Izixhumanisi namasimu efomu ashiywa njalo futhi awaboniswa ohlwini.
- Isikali esilondolozwe yenye inhlelo (indawo yokulinganisa ebonakalayo) siyasetshenziswa njengesikali seshidi uma i-MarkupCraft iqonda iyunithi yaso.

### Amafayela angavulwa

- I-PDF edinga iphasiwedi ukuze ivulwe: '"name" idinga iphasiwedi ukuze ivulwe. Vula ikhophi engavikelwe.'
- Ifayela elonakele noma elingeyona i-PDF ngempela: '"name" ayikwazanga ukufundwa njenge-PDF (…)'.
- I-PDF evulekayo kodwa evikelwe ekushintsheni ivula kahle. Ukuyilondoloza kuyenqatshwa (bona ngezansi).

Uma kuvulwa amafayela amaningi ngesikhathi esisodwa, awasebenzayo ayavuleka, futhi ibhokisi elithi "Amanye amafayela awavulekanga" libala ezinye.

## Okulondolozwayo yi-MarkupCraft

Ukulondoloza kuhlala kuwukulanda ifayela elisha. Ikhasi lewebhu alikwazi ukubhala phezu kwefayela ekhompyutheni yakho, futhi i-MarkupCraft ayikaze ishintshe ifayela lakho lokuqala.

| Okukhethayo | Okutholayo | Izaziso |
|---|---|---|
| {{ui:Save}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Ikhophi ye-PDF yokuqala enayo yonke imakwe ibhalwe njengekhomenti langempela ye-PDF. Ukulondoloza ifayela "(marked up)" futhi kugcina igama elifanayo; ngeke liba "(marked up) (marked up)". Bona [Londoloza i-PDF emakiwe](topic:save-the-marked-up-pdf). |
| Ithebhu {{ui:Markups}}, bese {{ui:CSV}} | "<name> markups.csv" | Okumakiwe njengoba kuhlelwe (amafiltha ayasebenza). |
| Ithebhu {{ui:Markups}}, bese {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 wamathuluzi okuhlanganisa i-BIM, isithombe esisheshayo ngakunye okumakiwe. Bona [Izisekelo ze-BCF](topic:bcf-basics). |
| Ithebhu {{ui:Punch list}}, bese {{ui:Export CSV}} | "<name> punch list.csv" | Izinto zokulungisa ngokulandelana kwenombolo. |
| Ithebhu {{ui:Tools}}, bese {{ui:Export}} | "MarkupCraft tool chest.json" | Isikhwama sakho samathuluzi, sokwabelana noma sokugcina. |

"<name>" yigama lefayela le-PDF elivulwe kuqala ngaphandle kwe-".pdf".

Amafayela e-CSV avulwa kunoma iyiphi i-spreadsheet. Ayi-UTF-8 nophawu amashidi awafunayo, ngakho amagama anamasignesha aveza kahle. Iseli elaqala nge-=, +, - noma @ linamelwa i-apostrofi eyinhloko ukuze i-spreadsheet ingayisebenzisi njengefomula.

## Lapho okulandwayo kuya khona

Isiphequluli sakho siyaqumela: ngokuvamile kuwufolda yakho ye-Downloads, noma sibuza njalo uma usisethele kanjalo. Bona [Iziphequluli nekhompyutha](common:browsers#what-differs-between-browsers).

:::chromium
Uma ulondoloza wonke amafayela ashintshiwe esethini ngesikhathi esisodwa, i-Chrome ne-Edge zingabuza ukuthi lesi sayithi sivunyelwa yini ukulanda amafayela amaningi. Khetha {{ui:Allow}}, uma kungenjalo uthola ikhophi yokuqala kuphela.
:::

:::safari
Ku-iPad, i-Safari ibuza ngaphambi kokulanda ngakunye futhi ifake ifayela ku-app ye-Files, ngaphansi kwe-Downloads. Ku-Mac liya kufolda esethwe ezilungiselelweni ze-Safari.
:::

## Ku-inthanethi nangaphandle kwayo

- **Ama-PDF akho akusoze ashiye le khompyutha**, ku-inthanethi noma ngaphandle kwayo. Akukho ukulayisha noma kuphi.
- Isifundi se-PDF silayishwa ngokuqala ukuvula i-PDF ("Kulayishwa isifundi se-PDF…"), nombhali we-PDF ngokuqala ukulondoloza ("Kulayishwa umbhali we-PDF…") noma ukuvula ifayela elinamazwana kakade.
- Uma unoxhumo, zombili zilayishwa kusayithi lewebhu.
- **Ukusebenza ngaphandle kokuxhumeka,** khetha {{ui:Save for offline}} ebhalweni eliphezulu ngesikhathi usuxhunyiwe. Inkinobho ibala "Ilondoloza N kwangu-M" bese ithi "Ilungele ukusebenza ngaphandle". Leyo kopi ifaka isifundi se-PDF nombhali we-PDF (cishe ama-MB ayi-6 ngokuphelele) nalo usizo, ngakho ngemva kwalokho ukuvula, ukumaka nokulondoloza ama-PDF kusebenza ngaphandle kwe-inthanethi kulesi siphequluli.
- Uma inkinobho ithi "Akukwazanga ukulondoloza", amanye amafayela awanganyelwanga: hlola uxhumo bese uyicofa futhi. Uma ithi "Ukusebenza ngaphandle akutholakali", lo windi wesiphequluli awukwazi ukugcina ikhophi yangaphandle (amawindi asemfihlweni namanye amakhompyutha alawulwayo); sebenzisa iwindi elijwayelekile.
- Ukuze uvuselele noma ususe ikhophi, cofa "Ilungele ukusebenza ngaphandle" bese ukhetha "Londoloza futhi (thola inguqulo emisha)" noma "Susa ikhophi yangaphandle". Okwengeziwe ku-[Ukusebenza ngaphandle](common:offline).

:::offline
Awuxhunyiwe. Uma ibha ephezulu ithi "Ilungele ukusebenza ngaphandle", konke kuyasebenza, kufaka phakathi ukulondoloza. Uma kungenjalo futhi awukalondolozi kulelithebhu, {{ui:Save}} ingahluleka ngokuthi "Umbhali we-PDF akakwazanga ukulayisha". Izimakwe zakho sezisekulelithebhu: yigcine ivulekile, uphinde uxhume, bese ukhetha {{ui:Save}} futhi.
:::

## Okufanele wazi

- Amasethi amakhulu amapulani athatha isikhathi ukuvula: i-MarkupCraft ifunda umbhalo wekhasi ngalinye ukuze ithole izinombolo zamashidi. Ibha yesimo ibala amashidi njengoba iqhubeka.
- Ukuvula i-PDF efanayo kabili kwengeza amashidi ayo kabili. Vala isethi bese uyivula futhi uma kwenzeka lokho.
- {{ui:Close}} ivala wonke amafayela avulekile ngesikhathi esisodwa. Uma kukhona izimakwe ezingalondolozwanga, iyabuza: {{ui:Cancel}}, {{ui:Close without saving}} noma {{ui:Save copies first}}.
- Ukulondoloza ku-ifu akukatholakali, futhi azikho izinguqulo zedeskithophu okwamanje. Gcina ama-PDF akho namafayela wamaphrojekthi akho ndawonye futhi uwasekele njengokujwayelekile. Bona [Lapho amafayela akho aya khona](common:your-files).
