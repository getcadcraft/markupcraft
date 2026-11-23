---
title: Kas naujo 0.9 versijoje (ankstesnė)
summary: Pastabos ir šalinė sritis, kurios niekada nespausdinamos, šifruotos privačios pastabos ir švari kopija klientui, paketinės nuorodos visam brėžinių rinkiniui, lankų įrankis su dešimčia būdų, kito peržiūrėtojo sekimas Live sesijoje ir pataisa, kad ištrinti žymėjimai neliktų išsaugotame PDF.
keywords: kas naujo 0.9, ankstesnis leidimas, kas naujo, 0.9, leidimo pastabos, pakeitimų žurnalas, pastabos, šalinė sritis, privačios pastabos, slaptafraze, šifruota, slėpti pastabas, rodyti pastabas, švari kopija, momentinė nuotrauka, paketinės nuorodos, lapų nuorodos, susieti lapus, antraštės blokas, lapo numeris, priedas, pervardijimas, pdf nuoroda, lankas, lankų būdai, trijų taškų lankas, spindulys, sekti, sekti mane, live, klasės vaizdas, dalyvių sąrašas, ištrintas žymėjimas, patarimai, skirtukų pavadinimai, 0.8, 0.8.1, versija, naujos funkcijos, užduotis, užduotys, atsakingasis, terminas, pavėluota, tikrinti dabar, kas pasikeitė, revizijos, palyginti, balso pastaba, sprendimas, raudonasis žymėjimas, atsakymų failas, brėžėjas, asistentas, mcp, problemos, kalbos, įvesties įrenginiai, jutiklinė plokštė, 3D pelė, įrankių juostos eilutės, ypatybių lentelė, atnaujinimas
from: aa3dfeb8
---

Tai, kas pasikeitė MarkupCraft 0.9 versijoje, palyginti su 0.8.1. Pagrindinė idėja: jūsų darbo pastabos lieka ne klientui skirtame puslapyje, o visą brėžinių rinkinį galima susieti vienu ėjimu.

## Naujovės

### Pastabos, šalinė sritis ir privačios pastabos

- **Šalinė sritis.** Plotas aplink kiekvieną lapą yra stalas: viskas, kas nupiešta, įrašyta ar įklijuota šalia lapo, yra pastaba ir niekada nespausdinama. Pasirinkite {{ui:Rodyti šalinę sritį}}, kad atitolintumėte vaizdą, arba {{ui:Nufotografuoti į šalinę sritį}}, nubraukite stačiakampį, tada {{ui:Į šalinę sritį}}, kad šalia lapo būtų padėta dalies brėžinio nuotrauka. Momentinė nuotrauka yra paveikslėlis ir nesikeičia, kai pasikeičia lapas. Žr. [Pastabos, šalinė sritis ir privačios pastabos](topic:notes-and-pasteboard).
- **Rodyti ir slėpti pastabas.** Bet koks žymėjimas gali būti pastaba: nustatykite {{ui:Nauji žymėjimai yra}} skirtuke {{ui:Pastabos}} arba {{ui:Šis žymėjimas yra}} lange {{ui:Ypatybės}}. {{key:Shift+H}} arba {{ui:Pastabos}} jungiklis po lapu paslepia ir parodo visas pastabas iš karto. Pastabos neįtraukiamos į spausdinimą, suplokštintas kopijas, sąrašus ir eksportus, o kiti PDF skaitytuvai jų nerodo. Išsaugotas PDF jas išlaiko, kad kitą kartą atidarę MarkupCraft jas rastumėte.
- **Privačios pastabos.** Pasirinkite {{ui:Nustatyti slaptafrazę}}, tada padarykite žymėjimą {{ui:Privati pastaba}}. Ji šifruojama faile slaptafraze iš bent 10 simbolių, ir atkurti negalima: niekas, įskaitant mus, negali jos atverti be slaptafrazės. {{ui:Užrakinti}} paslepia privačias pastabas; {{ui:Likti atrakintam šiame įrenginyje}} pagal numatytuosius nustatymus išjungta.
- **Įrašyti švarią kopiją.** {{ui:Įrašyti švarią kopiją}} pašalina visas pastabas, privačias pastabas ir viską, kas yra šalinėje srityje. Naudokite ją failui, kuris siunčiamas klientui.

### Susieti visą rinkinį

- **Paketinės nuorodos.** Pasirinkite {{ui:Puslapiai}} › {{ui:Paketinės nuorodos…}} arba {{ui:Susieti lapų nuorodas…}} po {{ui:Ieškoti teksto}} {{ui:Lapai}} skydelyje. 1 žingsnis išvardija kiekvieno lapo numerį ir pavadinimą, nuskaitytus iš jo antraštės bloko; ištaisykite netikslius. 2 žingsnis išvardija rastas nuorodas, pavyzdžiui, `3/A-501` arba `DETAIL 2 ON A-501`. {{ui:Bus susieta}} rodo lapą ir vaizdą kiekvienai, {{ui:Nesusieta}} rodo numerius, kurių nėra nė vienam atidarytam lapui, o {{ui:Sukurti nuorodas}} sukuria visas vienu atšaukimo žingsniu. Paleiskite iš naujo po priedo ar pervardijimo; nuorodos, kurias sukūrėte rankiniu būdu, niekada nekeičiamos. Nuoroda su vaizdu išsaugoma kaip PDF nuoroda, kad kiti skaitytuvai atvertų ir detalę. Žr. [Lapų nuorodos](topic:sheet-links).

### Brėžinys

- **Lankas, dešimt būdų.** Įrankis {{ui:Lankas}} ({{key:O}}) dabar turi lauką {{ui:Lanko būdas}} virš puslapio su dešimčia lanko braižymo būdų; kampą, ilgį, spindulį ir kryptį galima nurodyti spustelėjimu arba įvesti. Žr. [Lankas braižomas dešimčia būdų](topic:draw-an-arc).

### Bendras darbas

- **Sekti peržiūrėtoją.** Live sesijoje pasirinkite {{ui:Sekti}} šalia asmens vardo, ir jūsų vaizdas judės kartu su jo vaizdu; patys slinkdami ar keisdami mastelį sustabdote sekimą. Sesijos vedėjas gali pasirinkti {{ui:Paprašyti visų sekti mane}}. Dalyvių sąrašas rodo kiekvieno asmens spalvą, vardą, lapą, kuriame jis yra, ir kada buvo paskutinis jo keitimas. Žr. [Sekti kitą peržiūrėtoją Live sesijoje](topic:follow-in-live).

## Visose programose

- Patarimai yra Bootstrap patarimai, pradžios patarimą galima uždaryti, skirtukų juostos slenka, kai persipildo, o naršyklės skirtukų pavadinimai yra `<dokumentas> — MarkupCraft | CadCraft`.
- Skydelis su keliomis dalimis atveria vieną ir uždaro kitas (užraktas šalia rodyklės palieka vieną atvirą); {{ui:Parametrai}} jungiklis tai išjungia.
- Kiekviena programa pradeda nuo numatytojo bibliotekos objektų rinkinio.
- Svorio ir temperatūros vienetai pasiekiami vienetų parametruose.

## Pataisyta

- **Ištrinti žymėjimai nebeliko įskaitomi išsaugotame PDF.** Anksčiau išsaugant ištrinta ar perrašyta anotacija buvo pašalinama iš savo puslapio, bet objektas su tekstu liko faile. Dabar išsaugant tie objektai ištrinami. Failai, išsaugoti ankstesnėmis versijomis, juos dar turi, kol neišsaugosite iš naujo.

## Atviri apribojimai

- Paketinės nuorodos išbandytos su mūsų pačių bandymų rinkiniais. Tikri rinkiniai burbulus braižo įvairiai, todėl klientų rinkiniuose kai kurie vaizdai gali būti praleisti. Skenuotiems lapams pirmiausia reikia {{ui:Skaityti tekstą (OCR)…}}.
- Pastabos, privačios pastabos ir šalinė sritis išbandyti naršyklėje be galvos ir mūsų pačių failuose, ne su dideliu tikru vektoriniu rinkiniu ir ne tikroje dviejų asmenų Live sesijoje. Slaptafrazės keitimas dar neįgyvendintas. Versijos, senesnės nei 0.9, pastabų nerodo.
- Klasės vaizdas yra dalyvių sąrašas; jis dar nebandytas su tikru mokytoju ir mokiniais.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol jas perskaitys gimtoji kalba kalbantis.
- Windows diegimo programos nepasirašytos kodu (Daugiau informacijos, tada Vis tiek vykdyti); macOS disko atvaizdas nenotarizuotas (dešiniuoju pelės klavišu, tada Atidaryti).

## Ankstesnė: 0.8 ir 0.8.1

Tai, kas pasikeitė MarkupCraft 0.8 ir 0.8.1 versijose, palyginti su 0.7. Didžiausia naujovė: žymėjimas gali būti užduotis, kurią atlieka kas nors arba jūsų prijungtas asistentas, ir ji užsidaro pati, kai brėžinys iš tikrųjų pasikeičia.

### Naujovės

**Žymėjimai, kurie veikia**

- **Padaryti žymėjimą užduotimi.** Pasirinkite vieną ar kelis žymėjimus, atverkite skirtuką {{ui:Užduotys}} ir pasirinkite {{ui:Padaryti pasirinktą užduotimi}}. Užduotis turi pavadinimą, asmenį arba jūsų prijungtą asistentą, kuris ją atliks, neprivalomą terminą ir būseną; ji išlaiko savo vietą lape ir savo giją. Žr. [Žymėjimo pavertimas užduotimi](topic:markups-that-act).
- **Užduotys, kurios užsidaro pačios.** Užduotis gali stebėti brėžinį savo žymėjimo viduje. Atverkite naujesnę lapo reviziją ir pasirinkite {{ui:Tikrinti dabar}}: jei linijos tame plote pasikeitė daugiau nei per plauką, užduotis pažymima kaip Atlikta, jos žymėjimas tampa Baigtas, o gijoje atsiranda pastaba, kas pasikeitė. Nauja datos žyma arba linijos, pasislinkusios mažiau nei 1,5 taško, neskaičiuojamos. Užduotis vietoj to gali stebėti modelio elementą: asistentas praneša elementą su `tasks_check`, ir vėlesnis kitoks pranešimas arba ištrintas elementas uždaro užduotį. Vienas atšaukimo žingsnis ją vėl atidaro.
- **Raskite darbą.** Filtruokite {{ui:Užduotys}} sąrašą pagal būseną ir pagal tai, kam ji skirta, įskaitant {{ui:Pavėluota}}; pasirinkite {{ui:Priskirta}}, tada {{ui:Asistentas}}, kad pamatytumėte, ką laukia jūsų asistentas. Užduotis, praėjusi terminą, rodoma kaip įspėjimas Problemų skydelyje. {{ui:CSV}} eksportuoja sąrašą. Užduotys išsaugomos PDF kartu su žymėjimu ir per Live keliauja kaip kitos žymėjimo savybės.

**Kas pasikeitė, paprastu sąrašu**

- **Išvardinkite pakeitimus.** Atverkite skirtuką {{ui:Palyginti}}, tada {{ui:Palyginti visą rinkinį}}, pasirinkite ankstesnį ir vėlesnį failą ir spauskite {{ui:Išvardyti pakeitimus}}. Sąrašas prasideda skaičiumi, tada aprašo kiekvieną pakeistą lapą, didžiausią pokytį pirmą: kur lape, koks didelis (realiais vienetais, taip pat popieriaus coliais kalibruotame lape), ar pridėtos ar pašalintos linijos, kiek žymėjimų yra toje vietoje ir kokie žodžiai atsirado ar dingo. {{ui:Kopijuoti sąrašą}} įdeda jį į iškarpinę, o {{ui:CSV}} įrašo po eilutę kiekvienam pakeitimui. Žr. [Kas pasikeitė tarp revizijų, žodžiais](topic:what-changed-in-words).

**Balso pastabos ir sprendimai**

- **Balso pastabos.** Skirtuke {{ui:Pastabos}} pasirinkite {{ui:Įrašyti balso pastabą}}, tada {{ui:Sustabdyti įrašymą}}; įrašai sustoja patys po dviejų minučių. Pastaba prisegta prie lapo centro: ją nuvilkite ten, kur ji turi būti, įrašykite antraštę lange {{ui:Ypatybės}}, o sąraše {{ui:Leisti}} ją paleidžia. Įrašas išsaugomas PDF viduje.
- **Sprendimai.** {{ui:Prikabinti sprendimą}} užrašo vieną ar du sakinius ant lapo. Jei jis pakeičia ankstesnį sprendimą, pasirinkite jį lauke {{ui:Jis pakeičia}}: senas lieka, pažymėtas kaip Pakeistas, ir rodo į naują. Vienas atšaukimo žingsnis jį grąžina. Žr. [Balso pastabų ir sprendimų prikabinimas ant lapo](topic:voice-notes-and-decisions).

**Raudonasis žymėjimas iki revizijos**

- **Siųskite ir atsakykite.** Skirtuke {{ui:Užduotys}} atverkite {{ui:Raudonasis žymėjimas iki revizijos}}, įrašykite revizijos numerį, su kuria žymėjimai lyginami, ir spauskite {{ui:Eksportuoti raudonųjų pakeitimų failą}}. Gausite `.redline.json` failą su vienu elementu kiekvienam atviram žymėjimui: lapas, padėtis (lapo dalimis, todėl perbraižymas kitu dydžiu vis tiek sutampa), žodžiai, autorius, gija ir jos užduotis. Tas, kuris braižo pakeitimus, atsako Priimta, Atmesta arba Atlikta `.redline-answers.json` faile; {{ui:Įkelti atsakymų failą…}} suteikia kiekvienam žymėjimui tą būseną ir brėžėjo pastabą kaip vieną atšaukimo žingsnį. Žr. [Siųskite žymėjimus brėžėjui kaip raudonąjį žymėjimą](topic:redline-to-revision).

**AI asistentai**

- **Daugiau įrankių.** Asistentas, kurį prijungėte per CadCraft Studio, gali išvardyti užduotis (`tasks_list`), sukurti ar pakeisti vieną (`task_set`), nuimti užduotį (`task_clear`), patikrinti vieną pagal naujesnę reviziją ar elementą (`tasks_check`) ir perskaityti paprastą pakeitimų sąrašą tarp dviejų atvirų planų rinkinių (`revisions_changes`). Jis gauna tik tuos įrankius, kuriuos pažymėjote po jungikliu Asistentai, o kiekvienas pakeitimas yra vienas atšaukimo žingsnis. Žr. [Naudokite MarkupCraft su AI asistentu](topic:use-with-ai-assistants).

### Visose programose

- **Kalbos.** CadCraft Studio dabar turi 54 kalbas. Dešimt naujų: lietuvių, latvių, bosnių, maratų, telugų, albanų, afrikanų, filipiniečių, suahilių ir uzbekų. Visos ne anglų kalbos yra mašininiai juodraščiai, kol jas perskaitys gimtoji kalba kalbantis.
- **Įvesties įrenginiai.** {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Įvesties įrenginiai}} nustato, ką daro jutiklinė plokštė, šoniniai pelės mygtukai, rašiklis, pirštų bakstelėjimai, 3D pelė, žaidimų valdiklis ar MIDI valdiklis – visoms programoms arba tik šiai. Kol nieko nekeičiate, kiekvienas įrenginys veikia kaip anksčiau. Žr. [Naudokite jutiklinę plokštę, 3D pelę ar valdiklį](common:input-devices).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} turi {{ui:Kelios eilutės}} (numatytoji), {{ui:2 eilutės}} ir {{ui:1 eilutė}}, todėl brėžiniui lieka daugiau vietos. Žr. [Skydelių išdėstymas](common:arrange-panels).
- **Ypatybių lentelė.** Žymėjimo stiliaus laukai naudoja bendrą lentelę su skleidžiamomis kategorijomis ir reikšmių stulpeliais.
- **Problemų skydelis.** Programos įspėjimai, pavyzdžiui, pavėluota užduotis, surenkami viename Problemų skydelyje.
- **Live ir priedai.** Live sesijos aprašytos [Bendras darbas Live režimu](common:work-together-live); priedų sąrašas, susietas su jūsų paskyra, yra [Priedai ir jūsų paskyros sąrašas](common:addons-basics).
- **Prijunkite savo AI.** CadCraft Studio yra jūsų asistento centras: prijunkite vieną kartą visoms aštuonioms programoms. Pačiose programose AI nėra.

### Ištaisyta 0.8.1

- **Studio gali keisti kalbą veikdamas.** Anksčiau darbalaukio programa ir supakuoti leidimai liko anglų kalba. Tai dar neišbandyta visose platformose: pasakykite, jei kalba nepasikeičia.
- Studio 0.8 diegimams siūlomas 0.8.1 per {{ui:Parametrai}} › {{ui:Atnaujinimai}}.

### Dar neįgyvendinta šioje versijoje

- **Nepasirašyta kodu.** Windows diegimo programos ir macOS .dmg neturi parašo. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek vykdyti}}. Mac kompiuteryje dešiniuoju pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Atidaryti}}. Parduotuvės versijos laikomos sustabdytos.
- **Prijungimas prie AI dar nebaigtas kai kur.** Vieno paspaudimo prijungimas Studio viduje, talpinamas jungtis naršyklės asistentams ir jūsų pačių API raktas Studio viduje šiam leidimui neskelbiami. Užduočių ciklas išbandytas, bet dar ne su tikru asistentu.
- **Užduoties patikra reikalauja to paties lapo dydžio.** Lapas, perbraižytas kitu dydžiu, nesutaps, todėl jo užduotys neužsidarys. Lapai suporuojami pagal lapo numerį, o jei jo nėra – pagal puslapio vietą.
- **Balso pastabos – tik įrašai.** Transkripcijos nėra; asistentas mato pastabos trukmę, autorių ir antraštę, o ne garsą. Įrašymas išbandytas su netikru mikrofonu naršyklėje; tikras mikrofonas telefone, planšetėje ar nešiojamame kompiuteryje dar turi būti patikrintas.
- **Skaičiavimų lapai ir priežastys PDF faile** saugomi privačiame įraše. Senesnis MarkupCraft jį ignoruoja ir pašalina, kai kitą kartą išsaugo failą, todėl tokius failus atidarykite ir išsaugokite su 0.8 ar naujesne versija.
- **Raudonųjų žymėjimų pusė brėžėjui.** CadCraft, skaitantis raudonojo žymėjimo failą ir į jį atsakantis, dar nepadarytas.
- **Kitos kalbos.** Tamilų kalbos programos juosta persipildo 528 px.

Visa kita yra [Kas dar neįgyvendinta](topic:not-built-yet). Ankstesniam leidimui žr. [Kas naujo 0.7](topic:whats-new-0-7).
