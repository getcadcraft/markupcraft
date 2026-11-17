---
title: Sutvarkyti pieštuko brūkšnius ir įkelti peržiūros pastabas bei statybvietės eigą
summary: Paverskite laisvai nubrėžtus pieštuko brūkšnius linijomis, apskritimais, lankais ir stačiakampiais; įkelkite leidimų paketo peržiūros pastabas ir statybvietės matavimų eigą kaip pastabas.
keywords: pieštukas, laisvai, sutvarkyti, tiesinti, apskritimas, linija, stačiakampis, lankas, leidimas, peržiūros pastabos, eiga, dronas, nuskaitymas, geodezinis matavimas, pastabos, csv
from: 547d8e42
---

## Sutvarkyti pieštuko brūkšnius

Piešdami su {{ui:Rašiklis}}, atidarykite {{ui:Daugiau}} meniu Redagavimo grupėje ir pasirinkite {{ui:Sutvarkyti pieštuko brūkšnius}}. Kiekvienas pasirinktas pieštuko brūkšnys tampa tuo, kuo buvo skirtas: tiesus brūkšnys – linija (tiksliai horizontali arba vertikali, jei buvo beveik tokia), apvalus – elipse, apskritimo dalis – lankas, uždaras keturkampis – stačiakampis, o bet kas kita – polilinija arba daugiakampis. Brūkšnių laisvieji galai, nubraižyti kartu, patraukiami vienas prie kito. Jei pieštuko brūkšnys nepasirinktas, sutvarkomi visi pieštuko brūkšniai atidarytame lape. Tai vienas atšaukimo žingsnis: Ctrl+Z grąžina laisvai nubraižytą formą. Forma apskaičiuojama jūsų kompiuteryje pagal fiksuotas taisykles; niekas niekur nesiunčiama.

## Įkelti peržiūros pastabas

BimCraft leidimų paketas turi failą `01-review-comments.csv`: pastabas, kurias greičiausiai padarys plano peržiūrėtojas. Kiekviena jų turi taisyklę, punktą, ko reikia, kas rasta ir ką daryti. Skirtuke {{ui:Užduotys}} atidarykite {{ui:Peržiūros pastabos dėl leidimo}} ir pasirinkite {{ui:Įkelti pastabas (CSV)}}. Kiekviena pastaba tampa atidaryta pastaba stulpelyje kairėje atidaryto lapo pusėje; nuvilkite kiekvieną į vietą, kurios ji liečia. Jos apskaičiuojamos pagal esamus patikrinimus, o ne pagal plano vertintoją.

## Įkelti HAZOP mazgų langelius

CadCraft P&ID priedas nubraižo HAZOP analizės mazgus ir gali juos išsaugoti kaip {{ui:HAZOP mazgų langeliai}} (JSON failą). Atidarykite čia spausdintą P&ID lapą, eikite į skirtuką {{ui:Užduotys}}, atidarykite {{ui:HAZOP mazgų langeliai}} ir pasirinkite {{ui:Įkelti mazgų langelius (JSON)}}. Kiekvienas mazgas tampa atvira stačiakampio formos pastaba lape, o tekste – jo numeris, pavadinimas, įranga ir linijos. Komanda savo išvadas rašo kaip atsakymus į ją. Lapas laikomas atspausdintu pilnu dydžiu nuo brėžinio apatinio kairiojo kampo; jei jis spausdintas kitu masteliu, pirmiausia lauke {{ui:Atspausdinta mastelyje}} įveskite tą skaičių (0.5, jei 1:2). Mazgas, patenkantis už puslapio ribų, nenubraižomas, o skydelyje nurodoma, kiek jų yra. Žymos – analizės pagalbinė priemonė: jos rodo, kur yra mazgai, bet analizės nevertina.

## Įkelti statybvietės eigą

CivilCraft saugo eilutę kiekvienam dronų skrydžiui ar nuskaitymui. Skirtuke {{ui:Užduotys}} atidarykite {{ui:Statybvietės eiga}} ir pasirinkite {{ui:Įkelti eigą (JSON)}}. Kiekvienas matavimas tampa pastaba atidarytame lape, kurioje nurodoma, kiek atlikta, kiek dar liko iškasti ar užpilti, kas buvo perkasta ar perpilta ir kas išlenda už plano ribų. Matavimas su bet kuo, išlindusiu už plano, lieka Atidaryta; švarus – Priimta.
