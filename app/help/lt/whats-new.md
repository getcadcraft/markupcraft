---
title: Kas naujo 0.8 ir 0.8.1 versijose
summary: Žymėjimai, kurie tampa užduotimis ir užsidaro patys, paprastas sąrašas, kas pasikeitė tarp revizijų, balso pastabos ir sprendimai ant brėžinio, raudonųjų pakeitimų failai braižytojui ir bendri 0.8 pakeitimai: įvesties įrenginiai, įrankių juostos eilutės, problemos, daugiau kalbų.
keywords: kas naujo, what's new, išleidimo pastabos, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, nauji elementai, užduotis, užduotys, atsakingasis, terminas, pavėluota, tikrinti dabar, kas pasikeitė, revizijos, palyginti, balso pastaba, sprendimas, raudonasis žymėjimas, atsakymų failas, braižytojas, asistentas, mcp, problemos, kalbos, įvesties įrenginiai, jutiklinė plokštelė, įrankių juostos eilutės, ypatybių lentelė, atnaujinimas
from: 40368796
---

Tai, kas pakeista MarkupCraft 0.8 ir 0.8.1 versijose, palyginti su 0.7. Didžiausias naujovė: žymėjimas gali būti užduotis, kurią atlieka kas nors arba jūsų asistentas, o ji užsidaro pati, kai brėžinys iš tikrųjų pasikeičia.

## Naujovės

### Žymėjimai, kurie veikia

- **Padaryti žymėjimą užduotimi.** Pasirinkite vieną ar kelis žymėjimus, atidarykite skirtuką {{ui:Tasks}} ir pasirinkite {{ui:Make selected a task}}. Užduotis turi pavadinimą, asmenį arba jūsų prijungtą asistentą, kuris ją atliks, neprivalomą terminą ir būseną; ji išlaiko savo vietą lape ir savo giją. Žr. [Padaryti žymėjimą užduotimi](topic:markups-that-act).
- **Užduotys, kurios užsidaro pačios.** Užduotis gali stebėti brėžinį žymėjimo viduje. Atidarykite naujesnę lapo reviziją ir pasirinkite {{ui:Check now}}: jei linijos tame plote pakito daugiau nei truputį, užduotis pažymima kaip atlikta, jos žymėjimas tampa užbaigtas, o gijoje atsiranda pastaba, kas pasikeitė. Nauja datos žyma arba linijos, pasislinkusios mažiau nei 1,5 taško, neskaičiuojamos. Užduotis taip pat gali stebėti modelio elementą: jūsų asistentas praneša apie elementą su `tasks_check`, o vėlesnis skirtingas pranešimas arba ištrintas elementas uždaro užduotį. Vienas atšaukimo žingsnis ją vėl atidaro.
- **Raskite darbą.** Filtruokite sąrašą {{ui:Tasks}} pagal būseną ir pagal tai, kam ji skirta, įskaitant {{ui:Overdue}}; pasirinkite {{ui:Assigned to}}, tada {{ui:Assistant}}, kad pamatytumėte, ką laukia jūsų asistentas. Užduotis, kurios terminas praėjo, Problemų skydelyje rodoma kaip įspėjimas. {{ui:CSV}} eksportuoja sąrašą. Užduotys išsaugomos PDF faile kartu su žymėjimu ir per Live keliauja kaip kitos žymėjimo ypatybės.

### Kas pasikeitė, paprastu sąrašu

- **Išvardyti pakeitimus.** Atidarykite skirtuką {{ui:Compare}}, tada {{ui:Compare a whole set}}, pasirinkite ankstesnį ir vėlesnį failą ir pasirinkite {{ui:List the changes}}. Sąrašas prasideda skaičiumi, tada aprašo kiekvieną pakeistą lapą, didžiausius pakeitimus pirmus: kur lape, koks didelis (tikrais vienetais ir popieriaus coliais kalibruotame lape), ar linijos buvo pridėtos ar pašalintos, kiek žymėjimų ten yra ir kurie žodžiai atsirado ar dingo. {{ui:Copy the list}} įdeda jį į iškarpinę, o {{ui:CSV}} įrašo po vieną eilutę kiekvienam pakeitimui. Žr. [Išvardyti, kas pasikeitė tarp revizijų](topic:what-changed-in-words).

### Balso pastabos ir sprendimai

- **Balso pastabos.** Skirtuke {{ui:Notes}} pasirinkite {{ui:Record a voice note}}, tada {{ui:Stop recording}}; įrašai savaime sustoja po dviejų minučių. Pastaba prikabinama prie lapo centro, ją patempiate ten, kur jai vieta, ir įrašote antraštę lange {{ui:Properties}}, o {{ui:Play}} sąraše ją paleidžia. Įrašas išsaugomas PDF viduje.
- **Sprendimai.** {{ui:Pin a decision}} įrašo vieną ar du sakinius ant lapo. Jei jis pakeičia ankstesnį sprendimą, pasirinkite tą sprendimą lauke {{ui:It replaces}}: senasis lieka, pažymėtas kaip Pakeistas, ir nurodo į naująjį. Vienas atšaukimo žingsnis jį panaikina. Žr. [Prikabinti balso pastabas ir sprendimus prie lapo](topic:voice-notes-and-decisions).

### Raudonasis žymėjimas iki revizijos

- **Siųskite ir atsakykite.** Skirtuke {{ui:Tasks}} atidarykite {{ui:Redline to revision}}, įveskite revizijos numerį, su kuriuo lyginami žymėjimai, ir pasirinkite {{ui:Export redline file}}. Gausite failą `.redline.json` su vienu elementu kiekvienam atviram žymėjimui: lapu, pozicija (kaip lapo dalimis, kad perbraižymas kitu dydžiu vis tiek sutaptų), žodžiais, autoriumi, gija ir jos užduotimi. Tas, kas daro pakeitimus, atsako Priimta, Atmesta arba Atlikta faile `.redline-answers.json`; {{ui:Load answers file…}} suteikia kiekvienam žymėjimui tą būseną ir braižytojo pastabą kaip vieną atšaukimo žingsnį. Žr. [Siųsti žymėjimus braižytojui kaip raudonąjį žymėjimą](topic:redline-to-revision).

### DI asistentai

- **Daugiau įrankių.** Asistentas, prijungtas per CadCraft Studio, gali išvardyti užduotis (`tasks_list`), sukurti ar pakeisti vieną (`task_set`), nuimti užduotį (`task_clear`), patikrinti vieną pagal naujesnę reviziją ar elementą (`tasks_check`) ir perskaityti paprastą pakeitimų sąrašą tarp dviejų atvirų planų rinkinių (`revisions_changes`). Jis gauna tik tuos įrankius, kuriuos pažymėjote jungiklio Assistants skiltyje, ir kiekvienas pakeitimas yra vienas atšaukimo žingsnis. Žr. [Naudoti MarkupCraft su DI asistentu](topic:use-with-ai-assistants).

## Visose programose

- **Kalbos.** CadCraft Studio dabar turi 54 kalbas. Dešimt yra naujos: lietuvių, latvių, bosnių, maratių, telugu, albanų, afrikaans, filipiniečių, svahili ir uzbekų. Visos ne anglų kalbos yra mašininiai juodraščiai, kol jas perskaitys gimtoji kalba.
- **Įvesties įrenginiai.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} nustato, ką daro jutiklinė plokštelė, pelės šoniniai mygtukai, rašiklis, pirštų bakstelėjimai, 3D pelė, žaidimų valdiklis ar MIDI valdiklis, visoms programoms arba tik šiai. Kol nieko nekeičiate, kiekvienas įrenginys veikia kaip anksčiau. Žr. [Naudoti jutiklinę plokštelę, 3D pelę ar valdiklį](common:input-devices).
- **Įrankių juostos eilutės.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} turi {{ui:Wrap}} (numatytoji), {{ui:2 rows}} ir {{ui:1 row}}, todėl brėžiniui lieka daugiau vietos. Žr. [Išdėstyti skydelius](common:arrange-panels).
- **Ypatybių lentelė.** Žymėjimo Stiliaus laukai naudoja bendrą lentelę, su sutraukiamomis kategorijomis ir antraščių bei reikšmių stulpeliais.
- **Problemų skydelis.** Programos įspėjimai, pavyzdžiui, pavėluota užduotis, surenkami viename Problemų skydelyje.
- **Live ir priedai.** Live sesijos aprašytos [Dirbti kartu tiesiogiai](common:work-together-live); priedų sąrašas, sekantis jūsų paskyrą, aprašytas [Priedai ir jūsų paskyros sąrašas](common:addons-basics).
- **Prijunkite savo DI.** CadCraft Studio yra jūsų asistento centras: prijunkite vieną kartą visoms aštuonioms programoms. Programos savo DI neturi.

## Ištaisyta 0.8.1 versijoje

- **Studio gali keisti kalbą veikimo metu.** Anksčiau darbalaukio programa ir supakuoti leidimai liko anglų kalba. Tai dar nepatikrinta visose platformose: praneškite, jei kalba nepasikeičia.
- Studio 0.8 diegimams siūlomas 0.8.1 per {{ui:Settings}} › {{ui:Updates}}.

## Šios versijos dar nėra

- **Nepasirašyta kodu.** Windows diegimo programos ir macOS .dmg dar neturi parašo. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:More info}}, tada {{ui:Run anyway}}. Mac kompiuteryje dešiniuoju pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Open}}. Parduotuvės versijos sustabdytos.
- **Savo DI prijungimas kai kur nebaigtas.** Vieno paspaudimo prijungimas Studio viduje, prijungiamas talpinamas jungtis naršyklės asistentams ir jūsų pačių API raktas Studio viduje šiai versijai neužtikrinami. Užduočių ciklas išbandytas, bet dar ne su tikru asistentu.
- **Užduočių patikrinimui reikia to paties lapo dydžio.** Lapas, perbraižytas kitu dydžiu, nesutaps, todėl jo užduotys neužsidarys. Lapai poruojami pagal lapo numerį, o jei jo nėra, pagal puslapio vietą.
- **Balso pastabos – tik įrašai.** Nėra transkripcijos, o asistentas mato pastabos trukmę, autorių ir antraštę, bet ne garsą. Įrašymas išbandytas su netikru mikrofonu be ekrano naršyklėje; tikras mikrofonas telefone, planšetėje ar nešiojamajame kompiuteryje dar turi būti patikrintas.
- **Skaičiavimo lapai ir priežastys PDF faile** saugomi privačiame failo įraše. Senesnis MarkupCraft jį ignoruoja ir pašalina kitą kartą, kai įrašo failą, todėl tokius failus atidarykite ir įrašykite su 0.8 ar naujesne versija.
- **Braižytojo pusė raudonųjų pakeitimų.** CadCraft, skaitantis raudonojo žymėjimo failą ir į jį atsakantis, dar nesukurtas.
- **Kitos kalbos.** Tamilų kalbos programos juosta išsiplečia per 528 px.

Visa kita yra [Kas dar nesukurta](topic:not-built-yet). Ankstesnį leidimą žr. [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
