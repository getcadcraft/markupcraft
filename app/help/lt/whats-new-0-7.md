---
title: Kas naujo 0.7 versijoje (ankstesnė)
summary: RFI, pateikimai ir dienos žurnalai naujame skirtuke Laukas, su terminais, pavėluotais raudonai, CSV ir BCF, darbas neprisijungus ir Sujungti; asistentai, kurie nustato būsenas, atsako ir eksportuoja sąrašą; vienetų sąrašai, kurie seka Parametrus; skydeliai, kurie susitvarko, ir dialogai, kurie juda.
keywords: kas naujo 0.7, ankstesnė versija, versijos aprašymas, keitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, laukas, lauko įrašai, rfi, informacijos prašymas, pateikimas, dienos žurnalas, statybvietės dienoraštis, pavėluota, terminas, priskirta man, žymeklis, sujungti, neprisijungus, planšetė, bcf, csv, asistentas, mcp, žymėjimo būsena, atsakymas, eksportas, vienetai, vienetų sąrašai, žvaigždutė, kalibruoti, kompaktiškas, skydeliai, dialogai, portugalų
from: ca5ba1f0
---

Tai, kas pasikeitė MarkupCraft 0.7 versijoje, palyginti su 0.6. Didžiausias naujas dalykas – lauko įrašai: RFI, pateikimai ir dienos žurnalai, saugomi PDF šalia jūsų žymėjimų.

## Nauja

### RFI, pateikimai ir dienos žurnalai

- **Skirtukas Laukas.** Atidarykite {{ui:Laukas}} skirtuką ir pasirinkite {{ui:RFI}}, {{ui:Pateikimas}} arba {{ui:Dienos žurnalas}}. Palieskite ar spustelėkite lapą, kur priklauso RFI ar pateikimas, ir žymeklis pažymės vietą; dienos žurnalas dedamas ant atidaryto lapo be žymeklio ({{ui:Padėti žymeklį}} pridės vėliau, {{ui:Perkelti žymeklį}} perkelia bet kurį žymeklį). Kiekvienas įrašas turi savo numerį (RFI-0001, SUB-0001, LOG-0001), pavadinimą, tekstą, būseną, atsakingąjį, terminą, atsakymų giją ir priedų pavadinimų sąrašą. Žr. [Sekti RFI, pateikimus ir dienos žurnalus](topic:field-records).
- **Matykite, kas vėluoja.** Filtruokite sąrašą pagal tipą, būseną, terminą (pavėluota, terminas per 7 dienas, turi arba neturi termino), šį lapą ar visus lapus, teksto paiešką ar {{ui:Priskirta man}}. Įrašas, kurio terminas praėjo ir kuris dar laukia, sąraše ir savo žymeklyje pažymimas raudonai **Pavėluota**. Žr. [Raskite, kas svarbu](topic:field-records#find-what-matters).
- **CSV ir BCF.** {{ui:CSV}} įrašo išvardytus įrašus kaip skaičiuoklę; {{ui:BCF}} įrašo juos kaip BCF temas, kiekvieną su vietos nuotrauka lape. Abu seka filtrus. Žr. [Eksportas](topic:field-records#export).
- **Neprisijungus, o dvi kopijos tampa viena.** Įrašai saugomi PDF viduje ir nereikalauja tinklo, todėl planšetė aikštelėje gali juos pridėti, atsakyti ir išsaugoti. Grįžę į biurą, {{ui:Sujungti}} sujungia kitos tos pačios PDF kopijos įrašus pagal jų ID kaip vieną atšaukimo žingsnį. Žr. [Išsaugojimas, darbas neprisijungus ir kopijų sujungimas](topic:field-records#save-offline-and-merging-copies).

### DI asistentai

- **Daugiau, ką gali asistentas.** Jūsų asistentas, prijungtas per CadCraft Studio, dabar gali nustatyti žymėjimo būseną (`markup_status`, įrašoma jo gijoje), atsakyti gijoje (`markup_reply`) ir eksportuoti {{ui:Žymėjimai}} sąrašą kaip CSV ar BCF (`markups_export`, rodoma tai, ką sąrašas rodo su filtrais). Kiekvienas pakeitimas yra vienas atšaukimo žingsnis, pasirašytas asistento vardu. Žr. [Ką gali paprašyti asistentas](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Kiekvienoje programoje

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais pagal vienetų apibrėžimus (JAV apžvalgos pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, ir jie išeina iš vienetų sąrašų; pažymėkite vieną žvaigždute, ir nauji darbai pradedami juo. Failas visada išlaiko savo vienetą. MarkupCraft matavimo ir padėties vienetai {{ui:Parametrai}} › {{ui:MarkupCraft}} ir vienetas kalibravimo dialogo lange seka jungiklius; žvaigždutė nustato matavimo vienetą, kol išsaugosite savo MarkupCraft parametrus; o tikras atstumas, kurį įvedate kalibruodami, gali turėti bet kurio vieneto žymą, pavyzdžiui `3 yd` ar `1.5 km`. Žr. [Vienetai, įvedamos reikšmės ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie susitvarko.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} sutalpina ekrane daugiau (jutikliniai ekranai ir telefonai išlaiko didelius mygtukus). Kiekvienas šoninis skydelis turi ploną pavadinimo juostą: tempkite, kad prikabintumėte ar atskirtumėte skydelį, numeskite ant kito skydelio juostos, kad dalytumėtės vienu rėmu kaip skirtukais, prisekite, kad jis pasitrauktų į kraštą, arba paslėpkite ir grąžinkite iš krašto. Žr. [Išdėstykite skydelius](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Tempkite dialogą už pavadinimo juostos, kad jis nestovėtų ant brėžinio; jis grįš ten, kur paliksite. Dukart spustelėkite pavadinimo juostą, kad jį vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt pavyzdinių užklausų jūsų asistentui (sutvarkyti brėžinį, nubraižyti rinkinį, patikrinti brėžinius, uždavinėti modeliui klausimus, susumuoti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji iškviečia, ir leidimais, kurių reikia; kiekvieną pakartoja mūsų testai. Programose DI nėra. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** yra naujiena {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}}. Ji, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, kurių dar neperžiūrėjo gimtakalbis. Pagalbos temos yra anglų kalba.
- **CadCraft Studio** nurodo, kodėl nepavyko patikrinti atnaujinimų (dar nėra failo jūsų sistemai, nėra tinklo, neteisingas parašas), o ne tik „Atlikta“, ir nebeatneša uždaryto „Kas naujo“ lapelio, kol nėra naujesnės versijos.

## Dar nėra šioje versijoje

- **0.7 nėra pasirašyta kodu.** Pasirašymas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar negautas. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek vykdyti}}. Mac kompiuteryje pirmą kartą dešiniuoju pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Atidaryti}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- {{ui:Vienetai}} kampo ir nuolydžio sąrašai išsaugomi, bet kol kas jų nenuskaito nė viena funkcija.
- Lauko įrašai nesidalija CadCraft Studio Live sesijoje (Live sesijose perduodami tik žymėjimai); kopijas suvedkite su {{ui:Sujungti}}.
- {{ui:Sujungti}} įrašą paima visą iš paskutiniai pakeistos kopijos: jei du žmonės pakeitė skirtingus vieno įrašo laukus, laimi vėlesnės kopijos laukai. Gijos ir priedų pavadinimai sujungiami.
- Priedai yra tik pavadinimai; patys failai lieka ten, kur yra. Įrašams nėra komandų, pranešimų ar debesies projektų, o asistentai įrašams įrankių dar neturi.
- Lauko įrašai išbandyti naršyklėje telefono ir planšetės dydžiais, nutraukus tinklą, bet dar ne rankiniu būdu tikroje planšetėje.
- Dar iš 0.6: puslapio objektų sukimas bet kuriuo kampu, naujų figūrų piešimas tiesiai į puslapį, linijos šrifto ar dydžio keitimas ir tekstas, tekantis per kelias eilutes. Išsaugota kopija su puslapio pakeitimais dar nebuvo atidaryta Acrobat programoje.
- Dar iš 0.5: puslapio pakeitimo atšaukimas (pavyzdžiui, tuščio puslapio pridėjimas), teksto skaitymas iš skenuotų lapų ir tiesioginės sesijos už jūsų tinklo ribų.

Visa kita – [Kas dar nesukurta](topic:not-built-yet).
