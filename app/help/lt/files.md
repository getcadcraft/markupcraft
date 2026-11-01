---
title: Failai, kuriuos MarkupCraft atidaro ir įrašo
summary: PDF failai įeina, žymėta PDF kopija išeina, taip pat CSV, BCF ir įrankių rinkinio failai; kur kiekvienas patenka, prisijungus ir neprisijungus.
keywords: pdf, atidaryti, įrašyti, eksportuoti, atsisiųsti, csv, bcf, bcfzip, json, įrankių rinkinys, failų tipai, formatai, įkelti, slaptažodis, užšifruotas
from: b3045b4c
---

## Ką MarkupCraft atidaro

| Failas | Kaip | Kas vyksta |
|---|---|---|
| PDF (`.pdf`) | {{ui:Atidaryti}}, {{key:Mod+O}} arba numeskite ant lapo srities. Kelis vienu metu atidaryti galima. | Kiekvienas puslapis tampa lapu. PDF faile jau esantys žymėjimai nuskaitomi (žr. žemiau). |
| Įrankių rinkinys (`.json`) | Skirtukas {{ui:Įrankiai}}, tada {{ui:Importuoti}} | Įrankiai pridedami į jūsų įrankių rinkinį. Žr. [Įrankių rinkinys](topic:tool-chest). |

Viskas kita atmetama, o būsenos juostoje rodoma: "MarkupCraft atidaro PDF failus." Jei numetate mišrų failų rinkinį, PDF failai atsidaro, o būsenos juostoje nurodoma, kiek failų nėra PDF.

### PDF faile jau esantys žymėjimai

- **MarkupCraft įrašyti žymėjimai** grįžta tokie patys: tipas, stilius, autorius, datos, būsena, atsakymai, defekto numeris, lapo mastelis ir visi lapų pavadinimai, kuriuos įvedėte.
- **Komentarai iš kitų PDF programų** taip pat nuskaitomi. Stačiakampiai, elipsės, linijos ir rodyklės, polilinijos, daugiakampiai, rašiklio (tušo) brūkšniai, teksto laukeliai ir lipnieji lapeliai tampa įprastais, redaguojamais MarkupCraft žymėjimais. Jų atsakymai ir peržiūros būsenos atsineša kartu.
- **Visa kita** (teksto paryškinimai, sužymėti pasirenkant tekstą, kitų programų antspaudai ir kiti tipai) rodoma kaip yra, pažymėta kaip tik skaitoma. Galite jį pasirinkti, matyti žymėjimų sąraše ir atsakyti į jį, bet negalite perkelti, keisti ar naikinti.
- Nuorodos ir formos laukai paliekami nepakeisti ir į sąrašą neįtraukiami.
- Kitos programos įrašytas mastelis (matavimo rėmelis) naudojamas kaip lapo mastelis, kai MarkupCraft supranta jo vienetą.

### Failai, kurie neatsidaro

- PDF, kuriam reikia slaptažodžio: '"pavadinimas" atidarymui reikia slaptažodžio. Atidarykite nesaugomą kopiją.'
- Pažeistas failas arba tas, kuris iš tikrųjų nėra PDF: '"pavadinimas" nepavyko perskaityti kaip PDF (…)'.
- PDF, kuris atsidaro, bet apsaugotas nuo keitimų, atsidaro normaliai. Jo įrašymas neleidžiamas (žr. žemiau).

Kai atveriama kelis failus vienu metu, veikiantys atsidaro, o langas, pavadintas "Kai kurie failai neatsidarė", išvardija kitus.

## Ką MarkupCraft įrašo

Įrašymas visada yra naujo failo **atsisiuntimas**. Tinklalapis negali perrašyti failo jūsų kompiuteryje, o MarkupCraft niekada nekeičia jūsų originalo.

| Pasirinkite | Gausite | Pastabos |
|---|---|---|
| {{ui:Įrašyti}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Originalaus PDF kopija su kiekvienu žymėjimu, įrašytu kaip tikras PDF komentaras. Įrašius "(marked up)" failą dar kartą, vardas išlieka tas pats; niekada netampa "(marked up) (marked up)". Žr. [Įrašyti žymėtą PDF](topic:save-the-marked-up-pdf). |
| Skirtukas {{ui:Žymėjimai}}, tada {{ui:CSV}} | "<name> markups.csv" | Žymėjimai, kaip jie išvardyti (taikomi filtrai). |
| Skirtukas {{ui:Žymėjimai}}, tada {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 BIM koordinavimo įrankiams, su momentine nuotrauka kiekvienam žymėjimui. Žr. [BCF pagrindai](topic:bcf-basics). |
| Skirtukas {{ui:Defektų sąrašas}}, tada {{ui:Eksportuoti CSV}} | "<name> punch list.csv" | Defektų punktai numerių tvarka. |
| Skirtukas {{ui:Įrankiai}}, tada {{ui:Eksportuoti}} | "MarkupCraft tool chest.json" | Jūsų įrankių rinkinys, skirtas dalintis ar saugoti. |

"<name>" yra pirmojo atidaryto PDF failo pavadinimas be ".pdf".

CSV failus galima atverti bet kurioje skaičiuoklėje. Jie UTF-8 koduote su žymeniu, kurio ieško skaičiuoklės, todėl pavadinimai su diakritiniais ženklais rodomi teisingai. Langelis, prasidedantis =, +, - ar @, gauna pradinį apostrofą, kad skaičiuoklė jo niekada nevykdytų kaip formulės.

## Kur patenka atsisiuntimai

Jūsų naršyklė nusprendžia: paprastai aplanke Atsisiuntimai arba klausia kiekvieną kartą, jei taip nustatėte. Žr. [Naršyklės ir kompiuteriai](common:browsers#what-differs-between-browsers).

:::chromium
Kai vienu metu įrašote visus pakeistus rinkinio failus, Chrome ir Edge gali paklausti, ar šiai svetainei leidžiama atsisiųsti kelis failus. Pasirinkite {{ui:Leisti}}, kitaip gausite tik pirmą kopiją.
:::

:::safari
iPad įrenginyje Safari prieš kiekvieną atsisiuntimą klausia ir failą įdeda į programą Failai, aplanke Atsisiuntimai. Mac kompiuteryje failas patenka į aplanką, nustatytą Safari parametruose.
:::

## Prisijungus ir neprisijungus

- **Jūsų PDF failai niekada nepasiekia kito kompiuterio**, nei prisijungus, nei neprisijungus. Niekur nieko neįkeliama.
- PDF skaityklė įkeliama, kai pirmą kartą atidarote PDF ("Įkeliama PDF skaityklė…"), o PDF rašyklė – kai pirmą kartą įrašote ("Įkeliama PDF rašyklė…") arba atidarote failą, kuriame jau yra komentarų.
- Turint ryšį, abi įkeliamos iš svetainės.
- **Norėdami dirbti be ryšio,** prisijungę viršutinėje juostoje pasirinkite {{ui:Įrašyti neprisijungus}}. Mygtukas rodo "Įrašoma N iš M", tada – "Paruošta neprisijungus". Ta kopija apima PDF skaityklę ir PDF rašyklę (iš viso apie 6 MB) bei šį žinyną, todėl vėliau PDF atidarymas, žymėjimas ir įrašymas veikia neprisijungus šioje naršyklėje.
- Jei mygtuke parašyta "Nepavyko įrašyti", kai kurie failai neatsisiųsti: patikrinkite ryšį ir spustelėkite dar kartą. Jei parašyta "Neprisijungus negalima", šis naršyklės langas negali išsaugoti kopijos neprisijungus (privatūs langai ir kai kurie valdomi kompiuteriai); naudokite įprastą langą.
- Norėdami atnaujinti ar pašalinti kopiją, spustelėkite "Paruošta neprisijungus" ir pasirinkite "Įrašyti iš naujo (gauti naujausią versiją)" arba "Pašalinti kopiją neprisijungus". Daugiau – [Darbas neprisijungus](common:offline).

:::offline
Esate neprisijungę. Jei viršutinėje juostoje parašyta "Paruošta neprisijungus", viskas veikia, įskaitant įrašymą. Jei ne, o šiame skirtuke dar nieko neįrašėte, {{ui:Įrašyti}} gali nepavykti su pranešimu "Nepavyko įkelti PDF rašyklės". Jūsų žymėjimai vis dar yra skirtuke: palikite jį atidarytą, grįžkite prie ryšio ir vėl pasirinkite {{ui:Įrašyti}}.
:::

## Dalykai, kuriuos verta žinoti

- Dideli brėžinių rinkiniai atsidaro ilgai: MarkupCraft nuskaito kiekvieno puslapio tekstą, kad rastų lapų numerius. Būsenos juosta skaičiuoja lapus, kai jie apdorojami.
- Atidarius tą patį PDF du kartus, jo lapai pridedami du kartus. Tokiu atveju uždarykite rinkinį ir atidarykite iš naujo.
- {{ui:Uždaryti}} uždaro visus atidarytus failus vienu metu. Jei kurie nors turi neįrašytų žymėjimų, klausiama: {{ui:Atšaukti}}, {{ui:Uždaryti neįrašius}} arba {{ui:Pirma įrašyti kopijas}}.
- Debesies įrašymas dar nepasiekiamas, o stalinių versijų dar nėra. Laikykite PDF failus kartu su kitais projekto failais ir įprastai kurkite jų atsargines kopijas. Žr. [Kur keliauja jūsų failai](common:your-files).
