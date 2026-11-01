---
title: Kas naujo 0.7 versijoje
summary: RFI, pateikimai ir dienos žurnalai naujame skirtuke Laukas, su terminais, pavėlavę – raudonai, CSV ir BCF, darbas neprisijungus ir sujungimas; asistentai, kurie nustato būsenas, atsako ir eksportuoja sąrašą; vienetų sąrašai, kurie seka parametrus; skydeliai, kurie susitvarko, ir dialogai, kurie juda.
keywords: kas naujo, naujienos, išleidimo pastabos, pakeitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, laukas, lauko įrašai, rfi, informacijos prašymas, pateikimas, dienos žurnalas, darbo dienoraštis, pavėlavimas, terminas, priskirta man, žymeklis, sujungti, neprisijungus, planšetė, bcf, csv, asistentas, mcp, žymėjimo būsena, atsakymas, eksportas, vienetai, vienetų sąrašai, žvaigždutė, kalibruoti, kompaktiškas, skydeliai, dialogai, portugalų
from: 142e1a1e
---

Tai, kas pasikeitė MarkupCraft 0.7 versijoje, palyginti su 0.6. Didžiausia naujiena – lauko įrašai: RFI, pateikimai ir dienos žurnalai, saugomi PDF šalia jūsų žymėjimų.

## Nauja

### RFI, pateikimai ir dienos žurnalai

- **Skirtukas Laukas.** Atidarykite skirtuką {{ui:Laukas}} ir pasirinkite {{ui:RFI}}, {{ui:Pateikimas}} arba {{ui:Dienos žurnalas}}. Palieskite ar spustelėkite lapą, kur priklauso RFI ar pateikimas, ir žymeklis pažymės vietą; dienos žurnalas dedamas į atvirą lapą be žymeklio ({{ui:Padėti žymeklį}} pridės vėliau, {{ui:Perkelti žymeklį}} perkelia bet kurį žymeklį). Kiekvienas įrašas turi savo numerį (RFI-0001, SUB-0001, LOG-0001), pavadinimą, tekstą, būseną, atsakingąjį, terminą, atsakymų giją ir priedų pavadinimų sąrašą. Žr. [Sekite RFI, pateikimus ir dienos žurnalus](topic:field-records).
- **Matykite, kas vėluoja.** Filtruokite sąrašą pagal tipą, būseną, terminą (pavėlavę, baigiasi per 7 dienas, turi arba neturi termino), šį lapą ar visus lapus, teksto paiešką arba {{ui:Priskirta man}}. Įrašas, praėjęs terminą ir vis dar laukiantis, pažymimas raudonai **Pavėlavęs** – sąraše ir ant savo žymeklio. Žr. [Raskite, kas svarbu](topic:field-records#find-what-matters).
- **CSV ir BCF.** {{ui:CSV}} įrašo išvardytus įrašus kaip skaičiuoklę; {{ui:BCF}} įrašo juos kaip BCF temas, kiekvieną su momentine nuotrauka apie jo vietą lape. Abu seka filtrus. Žr. [Eksportas](topic:field-records#export).
- **Neprisijungus ir dvi kopijos tampa viena.** Įrašai saugomi PDF viduje ir jiems nereikia tinklo, todėl planšetė aikštelėje gali pridėti, atsakyti ir įrašyti. Biure {{ui:Sujungti}} sujungia to paties PDF kitos kopijos įrašus pagal jų ID kaip vieną atšaukimo žingsnį. Žr. [Įrašymas, darbas neprisijungus ir kopijų sujungimas](topic:field-records#save-offline-and-merging-copies).

### DI asistentai

- **Daugiau, ką asistentas gali daryti.** Jūsų asistentas, prijungtas per CadCraft Studio, dabar gali nustatyti žymėjimo būseną (`markup_status`, įrašoma jo gijoje), atsakyti gijoje (`markup_reply`) ir eksportuoti sąrašą {{ui:Žymėjimai}} kaip CSV ar BCF (`markups_export`, ką rodo sąrašas su filtrais). Kiekvienas pakeitimas – vienas atšaukimo žingsnis, pasirašytas asistento vardu. Žr. [Ko gali paprašyti asistentas](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tikslius dydžius pagal vienetų apibrėžimus (JAV geodezinė pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, – jie išeina iš vienetų sąrašų; pažymėkite vieną žvaigždute – ir naujas darbas prasidės su juo. Failas visada išlaiko savo vienetą. MarkupCraft programoje matavimo ir padėties vienetai {{ui:Parametrai}} › {{ui:MarkupCraft}} ir vienetas kalibravimo dialoge seka jungiklius; žvaigždutė nustato matavimo vienetą, kol neįrašysite savo MarkupCraft parametrų; o tikras atstumas, kurį įvedate kalibruodami, gali turėti bet kurio vieneto žymą, pavyzdžiui `3 yd` ar `1.5 km`. Žr. [Vienetai, įvesti dydžiai ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie susitvarko.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} telpa daugiau ekrane (jutikliniai ekranai ir telefonai išlaiko didelius mygtukus). Kiekvienas šoninis skydelis turi siaurą antraštės juostą: vilkite ją, kad skydelis prisitvirtintų ar atsiskirtų, numeskite ją ant kito skydelio juostos, kad dalintųsi vienu rėmu kaip skirtukais, prisekite, kad slystų į kraštą, arba paslėpkite ir grąžinkite iš krašto. Žr. [Išdėstykite skydelius](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Vilkite dialogą už antraštės juostos iš kelio brėžiniui; jis grįžta ten, kur paliktas. Dukart spustelėkite antraštės juostą, kad vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt pavyzdinių užklausų jūsų asistentui (sutvarkyti brėžinį, atspausdinti rinkinį, patikrinti brėžinius, uždavinėti modeliui klausimus, sudėti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji kviečia, ir leidimais, kurių reikia, ir kiekviena patikrinta mūsų testais. Programose DI nėra. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** naujai pasirodo {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}}. Ji ir **Português (Brasil)**, **Español (México)** bei **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, dar neperžiūrėtus gimtosios kalbos. Žinyno temos yra anglų kalba.
- **CadCraft Studio** nurodo, kodėl atnaujinimo tikrinimas nepavyko (dar nėra failo jūsų sistemai, nėra ryšio, neteisingas parašas), o ne tiesiog "Atlikta", ir nebesugrąžina uždaryto "Kas naujo" kortelės, kol nėra naujesnės versijos.

## Dar nėra šioje versijoje

- **0.7 nėra pasirašyta kodu.** Pasirašymas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar negautas. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje pirmą kartą dešiniu pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Atidaryti}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampų ir nuolydžių sąrašai skiltyje {{ui:Vienetai}} išsaugomi, bet nė vienas langas jų dar nenaudoja.
- Lauko įrašai nėra bendrinami CadCraft Studio tiesioginėje sesijoje (tiesioginėse sesijose perduodami tik žymėjimai); kopijas sujunkite su {{ui:Sujungti}}.
- {{ui:Sujungti}} paima įrašą kaip visumą iš paskutinį pakeistos kopijos: jei du žmonės pakeitė skirtingus to paties įrašo laukus, vėlesnės kopijos laukai laimi. Gijos ir priedų pavadinimai sujungiami.
- Priedai – tik pavadinimai; patys failai lieka, kur yra. Įrašams nėra narių, pranešimų ar debesies projektų, o asistentams įrašams įrankių dar nėra.
- Lauko įrašai išbandyti naršyklėje telefono ir planšetės dydžiais nutrūkus ryšiui, bet dar nebandyti rankomis tikroje planšetėje.
- Vis dar iš 0.6: puslapio objektų sukimas bet kuriuo kampu, naujų figūrų piešimas tiesiai į puslapį, linijos šrifto ar dydžio keitimas ir tekstas, tekantis per kelias eilutes. Įrašyta kopija su puslapio pakeitimais dar neatidaryta Acrobat programoje.
- Vis dar iš 0.5: puslapio pakeitimo atšaukimas (pvz., tuščio puslapio pridėjimas), tekstų skaitymas iš nuskenuotų lapų ir tiesioginės sesijos už jūsų tinklo ribų.

Viskas kita – [Kas dar nepadaryta](topic:not-built-yet).
