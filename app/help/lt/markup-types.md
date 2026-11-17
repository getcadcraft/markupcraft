---
title: Kiekvienas žymėjimo tipas
summary: Septyniolika žymėjimo tipų, jų klavišai, kaip kiekvienas braižomas, jo numatytoji išvaizda ir tai, kuo jis tampa išsaugotame PDF.
keywords: žymėjimo tipai, įrankių sąrašas, anotacijų tipai, debesis, iškvietimas, tekstas, pastaba, antspaudas, rašiklis, paryškintuvas, linija, rodyklė, stačiakampis, elipsė, polilinija, daugiakampis, ilgis, plotas, skaičius
from: 29bf32e7
---

## Įrankiai

| Įrankių juosta | Klavišas | Kaip braižyti | Numatytoji išvaizda | Išsaugotame PDF |
|---|---|---|---|---|
| {{ui:Rašiklis}} | {{key:P}} | Vilkti | Raudona, 1.5 pt | Rašalas |
| {{ui:Paryškinimas}} | {{key:I}} | Vilkti | Geltona, 14 pt pločio, permatoma, nudažo tai, kas po ja | Rašalas (pažymėtas kaip paryškintuvo brūkšnys) |
| {{ui:Linija}} | {{key:L}} | Vilkti arba spustelėti pradžią ir pabaigą | Raudona, 2 pt | Linija |
| {{ui:Rodyklė}} | {{key:A}} | Vilkti arba spustelėti pradžią ir pabaigą | Raudona, 2 pt, uždara rodyklės galvutė gale | Linija su rodyklės galvute |
| {{ui:Lankas}} | {{key:O}} | Spustelėti pradžią, tašką ant lanko, tada pabaigą | Raudona, 2 pt | Polilinija išilgai lanko |
| {{ui:Stačiakampis}} | {{key:R}} | Vilkti langelį | Raudona, 2 pt, be užpildo | Kvadratas |
| {{ui:Elipsė}} | {{key:E}} | Vilkti langelį | Raudona, 2 pt, be užpildo | Apskritimas |
| {{ui:Polilinija}} | {{key:Y}} | Spustelėti taškus, dukart spustelėti baigimui | Raudona, 2 pt | Polilinija |
| {{ui:Daugiakampis}} | {{key:G}} | Spustelėti taškus, dukart spustelėti baigimui | Raudona, 2 pt, be užpildo | Daugiakampis |
| {{ui:Debesis}} | {{key:C}} | Vilkti langelį | Raudona, 1.5 pt lankeliai | Kvadratas su debesiška kraštine |
| {{ui:Laisvas debesis}} | {{key:Shift+C}} | Spustelėti taškus, dukart spustelėti baigimui | Raudona, 1.5 pt lankeliai | Daugiakampis su debesiška kraštine |
| {{ui:Iškvietimas}} | {{key:K}} | Paspausti ties tašku, vilkti į tekstą, rašyti | Raudonas tekstas ir nuoroda, 1 pt, 12 pt tekstas | Teksto laukelis su iškvietimo nuoroda |
| {{ui:Tekstas}} | {{key:T}} | Spustelėti arba vilkti langelį, rašyti | Raudonas 12 pt tekstas, be rėmelio | Teksto laukelis |
| {{ui:Pastaba}} | {{key:N}} | Spustelėti, rašyti | Geltona pastabos piktograma | Lipni pastaba |
| {{ui:Antspaudas}} | {{key:S}} | Pasirinkti antspaudą, spustelėti arba vilkti | Įrėmintos didžiosios raidės ir „Pagal <vardas>, <data>“; spalva pagal prasmę | Antspaudas |
| {{ui:Ilgis}} | {{key:M}} | Spustelėti pradžią ir pabaigą (reikia mastelio) | Mėlyna matmenų linija su brūkšniais ir ilgiu | Linija, pažymėta kaip matmuo, su matavimu |
| {{ui:Kampas}} | {{key:X}} | Spustelėti vieno kraštinės galą, kampą, tada kitos kraštinės galą | Mėlynos kraštinės, mažas lankas kampe ir kampas laipsniais | Polilinija, kurios tekstas yra kampas |
| {{ui:Plotas}} | {{key:Q}} | Spustelėti kampus, dukart spustelėti baigimui (reikia mastelio) | Mėlynas kontūras, šviesiai mėlynas užpildas, plotas ir perimetras | Daugiakampis, pažymėtas kaip plotas, su matavimu |
| {{ui:Skaičiuoti}} | {{key:U}} | Spustelėti kiekvieną elementą | Oranžiniai sunumeruoti taškai ir žyma „grupė: n“ | Po vieną rašalo komentarą kiekvienai grupei, žiedas kiekvienam elementui |

Jutikliniame ekrane „dukart spustelėti baigimui“ reiškia dukart palietimą, o „spustelėti“ – palietimą, kuris veikia pakėlus pirštą (taškams, pastaboms ir skaičiavimams).

## Ką turi kiekvienas žymėjimas

| Laukas | Kur matote |
|---|---|
| Autorius | {{ui:Ypatybės}}, sąrašas, antspaudo antra eilutė, kitos PDF peržiūros programos |
| Sukurta ir pakeista | {{ui:Ypatybės}} (jūsų laiko juosta), sąrašas, CSV |
| Būsena | Atidaryta, Priimta, Atmesta arba Užbaigta |
| Tema | Trumpa žyma; numatytoji – pagal tipą („Debesis“, „Teksto laukelis“, „Ilgio matavimas“) |
| Komentaras | Ilgesnės pastabos. Pastabos tekstas yra jos komentaras. |
| Tekstas | Tik teksto laukeliai ir iškvietimai |
| Atsakymai | Gija su būsenų pakeitimais |
| Defekto punktas | Numeris, atsakingas asmuo, terminas, punkto būsena, kada pridėtas į {{ui:Defektų sąrašas}} |
| Stilius | Spalva, linijos plotis, užpildas ir užpildo permatomumas (uždarytoms figūroms, tekstui ir iškvietimams), permatomumas, teksto dydis (tekstui, iškvietimams ir matavimams) |

## Tik skaitomi komentarai

Komentarai, kurie atėjo su failu ir kurių MarkupCraft negali redaguoti (teksto paryškinimai, kitų programų antspaudai ir kiti specialūs tipai), išvardijami tipu „Kita“ ir būsenos žyma „Tik skaitoma“. Jie išlaiko tokią išvaizdą, kokią suteikia failas. Galite juos pasirinkti, matyti autorių, temą ir komentarą bei į juos atsakyti.

## Dar neįdiegta

Failų priedai dar neįdiegti. Bet kuris žymėjimas gali nurodyti į lapą; žr. [Lapų nuorodos](topic:sheet-links). Paveikslėliai ir parašai dedami įrankiu {{ui:Antspaudas}}; žr. [Antspaudai ir pastabos](topic:stamps-and-notes). Žr. [Kas dar neįdiegta](topic:not-built-yet).
