---
title: Ateinant iš kitos žymėjimo programinės įrangos
summary: Kaip stalinės PDF žymėjimo programos darbo įpročiai atitinka MarkupCraft ir kokie skirtumai dažnai klaidina.
keywords: perjungimas, perjungti, migruoti, pažįstama, stalinė PDF žymėjimo programa, įrankių dėžė, žymėjimų sąrašas, perdanga, sesijos, profilis, spartieji klavišai, skirtumai
from: c8f323e1
---

Jei peržiūrite brėžinius Bluebeam Revu (arba komentuojate PDF failus kitoje stalinėje PDF programoje), didžioji dalis MarkupCraft atrodys pažįstama: debesys, iškvietimai, įrankių dėžė, žymėjimų sąrašas, būsenos su atsakymais, kalibruoti matavimai, lapų perdangos. Didžiausias skirtumas – failų tvarkymas, todėl perskaitykite kitą skyrių, net jei likusį praleisite.

## Penki svarbūs skirtumai

1. **Įrašymas sukuria naują failą.** MarkupCraft veikia naršyklėje ir negali perrašyti PDF failo diske. {{ui:Įrašyti}} parsisiunčia „<name> (marked up).pdf“, o originalas lieka nepakitęs. Kitą kartą atidarykite „(marked up)“ kopiją ir patys sutvarkykite senas kopijas.
2. **PDF įrašomas, kai jį įrašote.** Iki tol naršyklėje esanti atkūrimo kopija išsaugo jūsų žymėjimus strigties ar uždaryto skirtuko atveju, o kitą kartą MarkupCraft ją pasiūlo atgauti. Tai saugos tinklas: įrašykite PDF, kad išsaugotumėte peržiūrą.
3. **Jūsų profilis gyvena naršyklėje.** Jūsų autoriaus vardas, įrankių nustatymai ir įrankių dėžė saugomi šioje naršyklėje šiame kompiuteryje. Kita naršyklė ar kompiuteris pradeda nuo nulio, o svetainės duomenų išvalymas juos ištrina. Įeksportuokite įrankių dėžę kaip atsarginę kopiją. Žr. [Kas lieka šioje naršyklėje](topic:browser-storage).
4. **Bendrų sesijų dar nėra.** Nėra gyvos, bendros peržiūros sesijos ir nėra debesies projekto. Peržiūra keliauja PDF faile: įrašykite, nusiųskite kopiją, kitas žmogus atsako ir įrašo.
5. **Mastelis yra kiekvienam lapui atskirai – ir tik taip.** Lapo viduje nėra vaizdo langų ir nėra „taikyti šį mastelį visiems puslapiams“. Kalibruokite kiekvieną lapą, kurį matuojate.

## Įprotis po įpročio

| Esate pratę | MarkupCraft |
|---|---|
| Miniatiūrų skydelis, puslapių žymos | {{ui:Lapai}} kairėje. Pavadinimai imami iš puslapių žymų arba nuskaitomi iš antraštės bloko; taisykite juos su {{ui:Pervardyti lapą}}. |
| Kelių PDF atidarymas kaip rinkinio | Atidarykite visus iš karto; jie tampa vienu sąrašu. Rinkinio failas neįrašomas: kitą kartą atidarykite tuos pačius PDF. |
| Įrankių dėžė su įrankių rinkiniais | {{ui:Įrankiai}} skirtukas: viena dėžė kiekvienoje naršyklėje, įrankiai išsaugomi su stiliumi ir tema. Dalinkitės per {{ui:Eksportuoti}} ir {{ui:Importuoti}} kaip JSON failą. Įrankių rinkinių failų iš kitų programų importuoti negalima. |
| Ypatybių skydelis | {{ui:Ypatybės}} skirtukas: būsena, tema, komentaras, stilius, atsakymai ir defekto punktas vienoje vietoje. |
| Žymėjimų sąrašas su stulpeliais | {{ui:Žymėjimai}} skirtukas su filtrais pagal lapą, autorių, būseną ir tipą. Eksportuokite CSV arba BCF. Pasirinktinių stulpelių ir PDF ar darbaknygės suvestinės kol kas nėra. |
| Būsena ir peržiūros būklė | {{ui:Būsena}}: Atidaryta, Priimta, Atmesta, Baigta. Pasirinktinių būsenų rinkinių nėra. Įrašoma kaip standartinės peržiūros būsenos. |
| Atsakymai į žymėjimą | Gija „Atsakymai“ lange {{ui:Ypatybės}}, kurioje registruojami būsenų pakeitimai. Išsiųsto atsakymo redaguoti negalima. |
| Kalibruoti, tada ilgis, plotas, kiekis | {{ui:Kalibruoti}}, {{ui:Ilgis}} ({{key:M}}), {{ui:Plotas}} ({{key:Q}}, pateikia plotą ir perimetrą), {{ui:Skaičiuoti}} ({{key:U}}). Kampų, spindulio, tūrio, polilinijos ilgio ar išpjovų kol kas nėra. |
| Perdangos puslapiai | {{ui:Palyginti}} skirtukas: raudona – senas, mėlyna – naujas, lyginama pagal du taškus. Automatinio „palyginti dokumentus“ debesavimo nėra. |
| Antspaudai | {{ui:Antspaudas}} su šešiais įmontuotais antspaudais ir savu tekstu, pasirašomas jūsų vardu ir data. Paveikslėlių ir parašų antspaudų kol kas nėra. |
| Defektų ar problemų sekimas | {{ui:Defektų sąrašas}} skirtukas: sunumeruoti punktai su atsakingu asmeniu, terminu ir būsena; CSV eksportas. |
| Gyva bendradarbiavimo sesija | Dar nepasiekiama. Perduokite įrašytą PDF. |
| Suplokštinimas | Dar nepadarytas. Žymėjimai lieka komentarais, kuriuos kiti žiūrovai gali rodyti ir spausdinti. |
| Žymėjimų sluoksniai | Dar nepadaryti. Komentarams rūšiuoti naudokite dalykus, autorius ir sąrašo filtrus. |
| Nuorodos tarp lapų | Dar nepadarytos. |
| Tarpo klavišas slinkimui, ratukas mastelio keitimui | Tas pats: laikykite {{key:Space}} ir vilkite; ratukas keičia mastelį žymeklio vietoje. Ratukas niekada neslenka puslapio. |

## Klavišai, kurie skiriasi

Daugelis vienos raidės klavišų veikia taip, kaip tikėtumėtės, bet šiuos patikrinkite, kol pirštai to nepadarė už jus:

- {{key:K}} yra {{ui:Iškvietimas}}, o {{key:Q}} yra {{ui:Plotas}}. Jei esate pratę naudoti Q iškvietimams, čia jis pradės plotą.
- {{key:C}} yra stačiakampio {{ui:Debesis}}; {{key:Shift+C}} yra {{ui:Laisvas debesis}}.
- {{key:M}} yra {{ui:Ilgis}}, {{key:U}} yra {{ui:Skaičiuoti}}, {{key:Y}} yra {{ui:Polilinija}}, {{key:G}} yra {{ui:Daugiakampis}}, {{key:I}} yra {{ui:Paryškinimas}}.
- {{key:Mod+D}} dubliuoja pasirinkimą (vietoj naršyklės žymelės).
- {{key:Mod+Plus}} ir {{key:Mod+Minus}} keičia lapo, o ne naršyklės puslapio mastelį.
- Bet kurį klavišą galima pakeisti: žr. žemiau.

:::tip
Jei jūsų pirštai pažįsta Bluebeam Revu, pasirinkite {{ui:PDF peržiūra}} meniu stilių skiltyje {{ui:Parametrai}} › {{ui:MarkupCraft}} › {{ui:Meniu, klavišai ir pelė}}: meniu juosta (Failas, Redagavimas, Rodinys, Dokumentas, Žymėjimas, Matuoti, Langas) virš peržiūros įrankių eilės, {{key:Q}} iškvietimui, {{key:H}} paryškintuvui, {{key:N}} daugiakampiui, o matavimai – ant {{key:Alt+Shift}} su raide. Bet kurį klavišą galima pakeisti ir ten. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).
:::

Visą sąrašą rasite [Klaviatūra ir pelė](topic:keyboard).

## Dalykai, kurie veikia kitaip, nei galbūt tikėtasi

- **Įrankiai lieka įjungti.** Nubraižę debesį, vis dar piešiate debesis. {{key:Esc}} vieną kartą panaikina pasirinkimą, du kartus grįžtama į {{ui:Pasirinkti}}.
- **Tekstui ir iškvietimams reikia teksto.** Baigus nieko neįvedus, žymėjimas nepridedamas. Pastabos lieka tuščios.
- **Matavimams pirmiausia reikia mastelio.** {{ui:Ilgis}} ir {{ui:Plotas}} nekalibruotame lape persijungia į {{ui:Kalibruoti}} ir po to grįžta.
- **Komentarai iš kitų programų.** Stačiakampiai, elipsės, linijos, polilinijos, daugiakampiai, rašalas, teksto laukai ir lipnūs lapeliai, sukurti kitur, tampa redaguojamais MarkupCraft žymėjimais ir įrašant perrašomi MarkupCraft būdu (išvaizda gali šiek tiek pasikeisti). Teksto paryškinimai, kitų programų antspaudai ir kiti specialūs tipai lieka tik skaitomi: galite į juos atsakyti, bet jų pakeisti negalite.
- **Simboliai, nepriklausantys Vakarų Europos raidėms,** įrašytame PDF spausdinami kaip „?“. Žr. [Įrašyti žymėtą PDF](topic:save-the-marked-up-pdf).
- **Antspaudų datos** naudoja UTC, todėl antspaudas, padarytas vėlai vakare Amerikoje, gali rodyti rytojaus datą.
- **Matavimai perkeliami** kaip standartiniai matavimų komentarai, o kiekvienas kalibruotas lapas išlaiko savo mastelį, todėl programa, skaitanti PDF matavimus, paprastai gali juos rodyti. Tikslus elgesys priklauso nuo tos programos.

## Naudojant abi

Galite keliauti pirmyn ir atgal. Kitur sukurti komentarai atsidaro MarkupCraft, o „(marked up)“ PDF atsidaro kitose PDF programose, kuriose matomi visi žymėjimai, atsakymai ir būsenos. Tai, ką skaito tik MarkupCraft (defekto punkto atsakingasis ir terminas, punkto būsena), išsaugoma faile MarkupCraft.
