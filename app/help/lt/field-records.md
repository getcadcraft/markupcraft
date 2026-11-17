---
title: RFI, pateikimų ir kasdienių žurnalų sekimas
summary: Įdėkite RFI, pateikimus ir kasdienius žurnalus į lapus su numeriais, priskirtaisiais asmenimis, terminais ir atsakymų gijomis; filtruokite pavėluotus; eksportuokite CSV arba BCF; dirbkite neprisijungę ir sujunkite kopijas.
keywords: rfi, informacijos prašymas, pateikimas, kasdienis žurnalas, lauko ataskaita, statybvietės dienynas, statyba, pavėluota, terminas, priskirta man, gija, priedas, sujungti, neprisijungus, planšetė, bcf, csv, laukas
from: 95039c5a
---

{{ui:Laukas}} skirtukas laiko tris įrašų rūšis šalia jūsų žymėjimų. Kiekvienas įrašas susietas su lapu; RFI arba pateikimas taip pat turi žymeklį lape, vietoje, kurios jis susijęs.

- **RFI**: klausimas projektavimo komandai. Būsenos: Atviras, Atsakyta, Uždarytas.
- **Pateikimas**: kažkas, ką reikia peržiūrėti prieš pradedant darbus. Būsenos: Atviras, Peržiūroje, Patvirtinta, Patvirtinta su pastabomis, Taisyti ir pateikti iš naujo, Uždarytas.
- **Kasdienis žurnalas**: dienos oras, žmonių skaičius statybvietėje ir atlikti darbai. Būsenos: Juodraštis, Galutinis.

Kiekvienas įrašas turi savo rūšies numerį (RFI-0001, SUB-0001, LOG-0001), pavadinimą, tekstą, priskirtąjį asmenį, terminą, atsakymų giją ir priedų pavadinimų sąrašą.

## Pridėti vieną

1. Atidarykite {{ui:Laukas}} skirtuką ir pasirinkite {{ui:RFI}} arba {{ui:Pateikimas}}.
2. Bakstelėkite arba spustelėkite lapą, kuriam jis priklauso. Atsiranda žymeklis, o įrašas atsidaro skirtuke.
3. Įveskite pavadinimą, klausimą ar aprašymą, nurodykite, kam jis priskirtas, ir kada yra terminas.

Kasdienis žurnalas pridedamas prie atidaryto lapo be žymeklio. {{ui:Padėti žymeklį}} vėliau padeda jį ant lapo; {{ui:Perkelti žymeklį}} perkelia bet kurį žymeklį. Lape bakstelėjus žymeklį, atsidaro jo įrašas.

## Atsakyti ir sekti

Pakeiskite {{ui:Būsena}}, ir pakeitimas įrašomas gijoje. Parašykite atsakymą ir pasirinkite {{ui:Siųsti atsakymą}} (Ctrl+Enter taip pat siunčia). Priedai yra tik pavadinimai: įveskite vieną arba pasirinkite failus, o sąraše matyti, kas priklauso įrašui. Patys failai lieka ten, kur buvo.

Įrašas, kurio terminas jau praėjo ir kuris dar laukia sprendimo (RFI, kuris nėra Atsakytas ar Uždarytas, arba pateikimas, dėl kurio dar nėra sprendimo), pažymimas **Pavėluota** raudonai sąraše ir ant savo žymeklio.

## Raskite, kas svarbu

Filtrai yra virš sąrašo: tipas, būsena, terminas (pavėluota, terminas per 7 dienas, turi arba neturi termino), šis lapas arba visi lapai, teksto paieška ir {{ui:Priskirta man}}, kuris palygina priskirtąjį asmenį su vardu, pagal kurį MarkupCraft jus žino (žr. [Nustatykite savo vardą](topic:set-your-name)). Eilutė po filtrais skaičiuoja, kas rodoma ir kas pavėluota.

## Eksportas

{{ui:CSV}} įrašo išvardytus įrašus kaip skaičiuoklę. {{ui:BCF}} įrašo juos kaip BCF temas, kiekvieną su lapo vietos nuotrauka, kad kiti BCF įrankiai galėtų juos išvardyti. Abu taiko filtrus.

## Įrašymas, darbas neprisijungus ir kopijų sujungimas

Įrašai įrašomi PDF viduje, kai jį įrašote, ir grįžta, kai jį atidarote. Tinklas nereikalingas: pridėkite, redaguokite, atsakykite ir įrašykite planšetėje rūsyje, o tada grąžinkite PDF. Senesni PDF ir PDF iš kitų programų atsidaro kaip anksčiau.

Norėdami sujungti dvi kopijas, atidarykite vieną ir pasirinkite {{ui:Sujungti}}, tada pasirinkite kitą tos pačios PDF kopiją. Įrašai jungiami pagal savo identifikatorius:

- įrašas, kurį turi tik viena kopija, pridedamas;
- įrašas, esantis abiejose kopijose, perima savo laukus (pavadinimą, tekstą, būseną, priskirtąjį asmenį, terminą) iš paskutinį kartą pakeistos kopijos, visą, todėl jei du asmenys keitė skirtingus to paties įrašo laukus, laimi vėlesnės kopijos versija; gijos ir priedų pavadinimai iš abiejų kopijų sujungiami;
- jei abi kopijos tą patį naują įrašą sunumeravo vienodai, tas, kuris atkeliavo, gauna kitą laisvą numerį;
- įrašas, pašalintas vienoje kopijoje, lieka pašalintas, nebent buvo redaguotas vėliau.

Sujungimas yra vienas anuliavimo žingsnis.

## Apribojimai

- Įrašų dar nebendrina Live TeamWork; naudokite {{ui:Sujungti}}.
- Šioje versijoje įrašams nėra komandų, pranešimų ar debesies projektų.
- Ištrinus puslapius iš PDF, jų įrašai pasišalina kartu (puslapio patvirtinime nurodomas jų skaičius).
