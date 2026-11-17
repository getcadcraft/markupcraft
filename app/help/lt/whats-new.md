---
title: Kas naujo 0.9 versijoje
summary: Pastabos ir šalinė sritis, kurios niekada nespausdinamos, šifruotos privačios pastabos ir švari kopija klientui, paketinės nuorodos visam brėžinių rinkiniui, Lankas įrankis su dešimčia būdų, kito peržiūrėtojo sekimas Live sesijoje ir pataisa, kad ištrinti žymėjimai neliktų išsaugotame PDF.
keywords: kas naujo, kas naujo 0.9, 0.9, versijos aprašymas, pakeitimai, pastabos, šalinė sritis, privačios pastabos, slaptafrazė, šifruota, slėpti pastabas, rodyti pastabas, švari kopija, nuotrauka, paketinės nuorodos, lapų iškvietimai, susieti lapus, antraštės blokas, lapo numeris, priedas, pervardijimas, pdf nuoroda, lankas, lanko būdai, trijų taškų lankas, spindulys, sekti, sekti mane, live, klasės vaizdas, dalyvių sąrašas, ištrintas žymėjimas, įrankių patarimai, skirtukų pavadinimai, 0.8, 0.8.1, versija, naujos funkcijos, užduotis, užduotys, pavedimas, termino diena, pavėluota, tikrinti dabar, kas pasikeitė, revizijos, palyginti, balso pastaba, sprendimas, raudonasis žymėjimas, atsakymų failas, brėžėjas, asistentas, mcp, problemos, kalbos, įvesties įrenginiai, jutiklinė planšetė, įrankių juostos eilutės, savybių lentelė, atnaujinimas
from: dbdd7ed4
---

Tai, kas pasikeitė MarkupCraft 0.9 versijoje, palyginti su 0.8.1. Pagrindinė mintis: jūsų darbo pastabos neįtraukiamos į lapą, kurį gauna klientas, o visą brėžinių rinkinį galima susieti vienu veiksmu.

## Nauja

### Pastabos, šalinė sritis ir privačios pastabos

- **Šalinė sritis.** Sritis aplink kiekvieną lapą yra darbalaukis: viskas, nubraižyta, įrašyta ar įklijuota šalia lapo, yra pastaba ir niekada nespausdinama. Pasirinkite {{ui:Rodyti šalinę sritį}}, kad nutolintumėte ir gautumėte vietos, arba {{ui:Nufotografuoti į šalinę sritį}}, nuvilkite langelį, tada {{ui:Į šalinę sritį}}, kad šalia lapo įdėtumėte brėžinio dalies paveikslėlį. Nuotrauka yra paveikslėlis ir nesikeičia, kai keičiasi lapas. Žr. [Pastabos, šalinė sritis ir privačios pastabos](topic:notes-and-pasteboard).
- **Rodyti ir slėpti pastabas.** Bet kuris žymėjimas gali būti pastaba: nustatykite {{ui:Nauji žymėjimai yra}} skirtuke {{ui:Pastabos}} arba {{ui:Šis žymėjimas yra}} lange {{ui:Ypatybės}}. {{key:Shift+H}} arba {{ui:Pastabos}} jungiklis po lapu vienu metu paslepia ir parodo visas pastabas. Pastabos neįtraukiamos į spausdinimą, suplokštintas kopijas, sąrašus ir eksportus, o kitos PDF skaitymo programos jų nerodo. Išsaugotas PDF jas išlaiko, todėl kitą kartą atidarius jį MarkupCraft pastabos vis dar bus.
- **Privačios pastabos.** Pasirinkite {{ui:Nustatyti slaptafrazę}}, tada padarykite žymėjimą {{ui:Privati pastaba}}. Ji šifruojama faile slaptafraze, kurią sudaro bent 10 simbolių, ir atkūrimo nėra: niekas, įskaitant mus, negali jos atverti be slaptafrazės. {{ui:Užrakinti}} paslepia privačias pastabas; {{ui:Likti atrakintam šiame įrenginyje}} pagal numatytuosius nustatymus išjungta.
- **Įrašyti švarią kopiją.** {{ui:Įrašyti švarią kopiją}} pašalina visas pastabas, privačias pastabas ir viską šalinėje srityje. Naudokite failui, kuris eina klientui.

### Susieti visą rinkinį

- **Paketinės nuorodos.** Pasirinkite {{ui:Puslapiai}} › {{ui:Paketinės nuorodos…}} arba {{ui:Susieti lapų nuorodas…}} po {{ui:Ieškoti teksto}} skydelyje {{ui:Lapai}}. 1 žingsnis išvardija kiekvieno lapo numerį ir pavadinimą, nuskaitytus iš jo antraštės bloko; ištaisykite klaidingus. 2 žingsnis išvardija rastas iškvietimo nuorodas, pavyzdžiui `3/A-501` ar `DETAIL 2 ON A-501`. {{ui:Bus susieta}} rodo lapą ir vaizdą kiekvienai, {{ui:Nesusieta}} rodo numerius, kurių jokio atidaryto lapo nėra, o {{ui:Sukurti nuorodas}} sukuria visas vienu atšaukimo žingsniu. Paleiskite iš naujo po priedo ar pervardijimo; nuorodos, kurias sukūrėte rankiniu būdu, niekada nekeičiamos. Nuoroda su vaizdu išsaugoma kaip PDF nuoroda, todėl kitos skaitymo programos atidaro ir detalę. Žr. [Lapų nuorodos](topic:sheet-links).

### Brėžimas

- **Lankas, dešimt būdų.** {{ui:Lankas}} įrankis ({{key:O}}) dabar turi {{ui:Lanko būdas}} langelį virš puslapio su dešimčia būdų nubrėžti lanką, o kampas, ilgis, spindulys ir kryptis gali būti spragtelėti arba įvesti. Žr. [Nubrėžkite lanką dešimčia būdų](topic:draw-an-arc).

### Dirbti kartu

- **Sekti peržiūrėtoją.** Live sesijoje pasirinkite {{ui:Sekti}} šalia asmens vardo, ir jūsų vaizdas judės kartu su juo; patys perkeliant ar keičiant mastelį sekimas sustoja. Vedėjas gali pasirinkti {{ui:Paprašyti visų sekti mane}}. Dalyvių sąraše rodoma kiekvieno asmens spalva, vardas, lapas, kuriame jis yra, ir kada buvo paskutinis jo pakeitimas. Žr. [Sekti kitą peržiūrėtoją Live sesijoje](topic:follow-in-live).

## Kiekvienoje programoje

- Įrankių patarimai yra Bootstrap patarimai, pradžios patarimą galima uždaryti, skirtukų juostos slenka, kai telpa ne visos, o naršyklių skirtukų pavadinimai rodo `<document> — MarkupCraft | CadCraft`.
- Skydelis su keliais skyriais atveria vieną ir uždaro kitus (užraktas šalia rodyklės palieka vieną atvirą); jungiklis {{ui:Parametrai}} šį veikimą išjungia.
- Kiekviena programa pradeda nuo numatytojo {{ui:Biblioteka}} objektų rinkinio.
- Svorio ir temperatūros vienetai pasiekiami vienetų nustatymuose.

## Pataisyta

- **Ištrinti žymėjimai nebeliks įskaitomi išsaugotame PDF.** Anksčiau išsaugant ištrintą ar perrašytą anotaciją ji buvo nuimama nuo puslapio, bet objektas su savo tekstu liko faile. Dabar išsaugant tie objektai ištrinami. Failai, išsaugoti ankstesnėmis versijomis, juos dar turi, kol juos vėl neišsaugosite.

## Atviri apribojimai

- Paketinės nuorodos išbandytos mūsų pačių bandymų rinkiniuose. Tikri rinkiniai piešia burbulus įvairiais būdais, todėl kai kurie vaizdai klientų rinkiniuose gali būti praleisti. Skenuoti lapai pirmiausia reikalauja {{ui:Skaityti tekstą (OCR)…}}.
- Pastabos, privačios pastabos ir šalinė sritis išbandytos bevaizdėje naršyklėje ir mūsų pačių failuose, o ne su dideliu tikru vektoriniu rinkiniu ir ne tikroje dviejų žmonių Live sesijoje. Slaptafrazės keitimas dar nesukurtas. Senesnės nei 0.9 versijos pastabų nerodo.
- Klasės vaizdas yra dalyvių sąrašas; jis dar neišbandytas su tikru mokytoju ir mokiniais.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol jų nepatikrina gimtakalbis.
- Windows diegimo programos nepasirašytos kodu (Daugiau informacijos, tada Vis tiek vykdyti); macOS diskų atvaizdas nėra notarizuotas (dešiniuoju pelės mygtuku, tada Atidaryti).

## Ankstesnės: 0.8 ir 0.8.1

Tai, kas pasikeitė MarkupCraft 0.8 ir 0.8.1 versijose, palyginti su 0.7. Didžiausias naujas dalykas: žymėjimas gali būti užduotis, kurią atlieka kas nors ar jūsų asistentas, ir ji užsidaro pati, kai brėžinys tikrai pasikeičia.

### Nauja

**Veikiantys žymėjimai**

- **Padarykite žymėjimą užduotimi.** Pažymėkite vieną ar kelis žymėjimus, atidarykite {{ui:Užduotys}} skirtuką ir pasirinkite {{ui:Padaryti pasirinktą užduotimi}}. Užduotis turi pavadinimą, asmenį ar jūsų prijungtą asistentą, kuris ją atliks, neprivalomą termino dieną ir būseną; ji išlaiko savo vietą lape ir savo giją. Žr. [Padarykite žymėjimą užduotimi](topic:markups-that-act).
- **Užduotys, kurios užsidaro pačios.** Užduotis gali stebėti brėžinį savo žymėjimo viduje. Atidarykite naujesnę lapo reviziją ir pasirinkite {{ui:Tikrinti dabar}}: jei linijos toje srityje pakito daugiau nei per plauką, užduotis pažymima Atlikta, jos žymėjimas tampa Baigtu, o gijoje esanti pastaba nurodo, kas pasikeitė. Nauja datos žyma ar linijos, pajudėjusios mažiau nei 1,5 taško, neskaičiuojamos. Užduotis vietoj to gali stebėti modelio elementą: asistentas praneša elementą su `tasks_check`, o vėlesnė kitokia ataskaita ar ištrintas elementas užduotį uždaro. Vienas atšaukimo žingsnis ją vėl atidaro.
- **Raskite darbą.** Filtruokite {{ui:Užduotys}} sąrašą pagal būseną ir pagal tai, kam ji skirta, įskaitant {{ui:Pavėluota}}; pasirinkite {{ui:Priskirta}}, tada {{ui:Asistentas}}, kad pamatytumėte, kas laukia jūsų asistento. Užduotis, praėjusi termino dieną, rodoma kaip įspėjimas Problemų skydelyje. {{ui:CSV}} eksportuoja sąrašą. Užduotys išsaugomos PDF kartu su žymėjimu ir per Live keliauja kaip kitos žymėjimo savybės.

**Kas pasikeitė, paprastu sąrašu**

- **Išvardykite pakeitimus.** Atidarykite {{ui:Palyginti}} skirtuką, tada {{ui:Palyginti visą rinkinį}}, pasirinkite ankstesnį ir vėlesnį failą ir spustelėkite {{ui:Išvardyti pakeitimus}}. Sąrašas prasideda skaičiumi, tada aprašo kiekvieną pakeistą lapą, didžiausi pakeitimai pirmi: kur lape, koks didelis (realiais vienetais ir popieriaus coliais kalibruotame lape), ar pridėtos ar pašalintos linijos, kiek žymėjimų toje vietoje ir kokie žodžiai atsirado ar dingo. {{ui:Kopijuoti sąrašą}} įdeda jį į iškarpinę, o {{ui:CSV}} įrašo po eilutę kiekvienam pakeitimui. Žr. [Išvardykite, kas pasikeitė tarp revizijų](topic:what-changed-in-words).

**Balso pastabos ir sprendimai**

- **Balso pastabos.** Skirtuke {{ui:Pastabos}} pasirinkite {{ui:Įrašyti balso pastabą}}, tada {{ui:Sustabdyti įrašymą}}; įrašai sustoja savaime po dviejų minučių. Pastaba prisegama prie lapo centro, ją nuvelkate ten, kur ji priklauso, o antraštę įrašote lange {{ui:Ypatybės}}; sąraše {{ui:Leisti}} ją paleidžia. Įrašas išsaugomas PDF viduje.
- **Sprendimai.** {{ui:Prikabinti sprendimą}} užrašo vieną ar du sakinius ant lapo. Jei jis pakeičia ankstesnį sprendimą, pasirinkite jį {{ui:Jis pakeičia}}: senas lieka, pažymėtas Pakeista, ir rodo į naują. Vienas atšaukimo žingsnis jį atšaukia. Žr. [Prikabinkite balso pastabas ir sprendimus prie lapo](topic:voice-notes-and-decisions).

**Raudonasis žymėjimas iki revizijos**

- **Siųskite ir atsakykite.** Skirtuke {{ui:Užduotys}} atidarykite {{ui:Raudonasis žymėjimas iki revizijos}}, įrašykite reviziją, su kuria lyginami žymėjimai, ir spustelėkite {{ui:Eksportuoti raudonųjų pakeitimų failą}}. Gausite `.redline.json` failą su vienu įrašu kiekvienam atviram žymėjimui: lapas, padėtis (lapo dalimis, todėl perbrėžimas kitu dydžiu vis tiek sutampa), žodžiai, autorius, gija ir jos užduotis. Tas, kuris piešia pakeitimus, atsako `.redline-answers.json` faile su Priimta, Atmesta arba Atlikta; {{ui:Įkelti atsakymų failą…}} suteikia kiekvienam žymėjimui tą būseną ir brėžėjo pastabą vienu atšaukimo žingsniu. Žr. [Siųskite žymėjimus brėžėjui kaip raudonąjį žymėjimą](topic:redline-to-revision).

**DI asistentai**

- **Daugiau įrankių.** Jūsų per CadCraft Studio prijungtas asistentas gali išvardyti užduotis (`tasks_list`), sukurti ar pakeisti vieną (`task_set`), nuimti užduotį (`task_clear`), patikrinti vieną pagal naujesnę reviziją ar elementą (`tasks_check`) ir perskaityti paprastą pakeitimų sąrašą tarp dviejų atidarytų brėžinių rinkinių (`revisions_changes`). Jis gauna tik tuos įrankius, kuriuos pažymėjote skiltyje {{ui:Asistentai}}, o kiekvienas pakeitimas yra vienas atšaukimo žingsnis. Žr. [Naudokite MarkupCraft su DI asistentu](topic:use-with-ai-assistants).

### Kiekvienoje programoje

- **Kalbos.** CadCraft Studio dabar turi 54 kalbas. Dešimt naujų: lietuvių, latvių, bosnių, maratų, telugų, albanų, afrikanų, filipiniečių, suahilių ir uzbekų. Visos ne anglų kalbos yra mašininiai juodraščiai, kol jų nepatikrina gimtakalbis.
- **Įvesties įrenginiai.** {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Įvesties įrenginiai}} nustato, ką atlieka jutiklinė planšetė, šoniniai pelės mygtukai, rašiklis, pirštų bakstelėjimai, 3D pelė, žaidimų valdiklis ar MIDI valdiklis – visoms programoms arba tik šiai. Kol nieko nepakeisite, kiekvienas įrenginys veikia kaip anksčiau. Žr. [Naudokite jutiklinę planšetę, 3D pelę ar valdiklį](common:input-devices).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} turi {{ui:Kelios eilutės}} (numatytasis), {{ui:2 eilutės}} ir {{ui:1 eilutė}}, kad brėžiniui liktų daugiau vietos. Žr. [Išdėstykite skydelius](common:arrange-panels).
- **Savybių lentelė.** Žymėjimo stiliaus laukai naudoja bendrą lentelę su sutraukiamomis kategorijomis ir etikečių bei reikšmių stulpeliais.
- **Problemų skydelis.** Programos įspėjimai, pavyzdžiui pavėluota užduotis, kaupiami viename Problemų skydelyje.
- **Live ir papildiniai.** Live sesijos aprašytos [Dirbkite kartu tiesiogiai](common:work-together-live); papildinių sąrašas, kuris seka jūsų paskyrą, – [Papildiniai ir jūsų paskyros sąrašas](common:addons-basics).
- **Prijunkite savo DI.** CadCraft Studio yra jūsų asistento centras: prisijunkite kartą visoms aštuonioms programoms. Pačiose programose DI nėra.

### Pataisyta 0.8.1 versijoje

- **Studio gali keisti kalbą veikiant.** Anksčiau darbalaukio programa ir supakuotos versijos likdavo anglų kalba. Tai dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.
- Studio 0.8 diegimams 0.8.1 siūlomas per {{ui:Parametrai}} › {{ui:Atnaujinimai}}.

### Dar nėra šioje versijoje

- **Nepasirašyta kodu.** Windows diegimo programos ir macOS .dmg dar neturi parašo. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek vykdyti}}. Mac kompiuteryje dešiniuoju pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Atidaryti}}. Parduotuvių versijos sustabdytos.
- **Prijungimas prie DI kai kur nebaigtas.** Vieno spustelėjimo prijungimas Studio viduje, prijungiamasis jungtis naršyklių asistentams ir jūsų pačių API raktas Studio viduje šiame leidime nežadami. Užduočių ciklas išbandytas, bet dar ne su tikru asistentu.
- **Užduočių patikrinimams reikia to paties puslapio dydžio.** Lapas, perbrėžtas kitu dydžiu, nesutaps, todėl jo užduotys neužsidarys. Lapai susiejami pagal lapo numerį, o jei jo nėra – pagal puslapio padėtį.
- **Balso pastabos – tik įrašai.** Nėra transkripcijos, o asistentas mato pastabos trukmę, autorių ir antraštę, o ne garsą. Įrašymas išbandytas su netikru mikrofonu bevaizdėje naršyklėje; tikras mikrofonas telefone, planšetėje ar nešiojamajame kompiuteryje dar neišbandytas.
- **Skaičiavimo lapai ir priežastys PDF** saugomi privačiame failo įraše. Senesnis MarkupCraft jį ignoruoja ir pašalina, kitą kartą išsaugojęs failą, todėl tokį failą atidarykite ir išsaugokite su 0.8 ar naujesne versija.
- **Brėžėjo pusė raudonųjų žymėjimų.** CadCraft nuskaitymas ir atsakymas į raudonųjų pakeitimų failą dar nesukurtas.
- **Kitos kalbos.** Tamilų kalbos programos viršutinė juosta išsilieja per 528 px.

Visa kita – [Kas dar nesukurta](topic:not-built-yet). Ankstesnei versijai žr. [Kas naujo 0.7](topic:whats-new-0-7).
