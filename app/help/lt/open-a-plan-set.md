---
title: Atidaryti planų rinkinį ir judėti tarp lapų
summary: Atidarykite vieną PDF ar daugybę arba pradėkite nuo tuščių puslapių, raskite lapus pagal numerį ar pavadinimą, keiskite mastelį ir slinkite, o kai failas gauna klaidingą pavadinimą, pervardykite lapą.
keywords: atidaryti, naujas, tuščias puslapis, tuščias lapas, eskizas, tinklelis, be pavadinimo, planų rinkinys, lapai, puslapiai, miniatiūros, puslapių žymos, lapo numeris, antraštės blokas, pervardyti, naršyti, keisti mastelį, slinkti, pritaikyti, ieškoti lapų
from: 1e7f4d50
---

## Atidaryti rinkinį

1. Įrankių juostoje pasirinkite {{ui:Atidaryti}} arba paspauskite {{key:Mod+O}}.
2. Failų naršyklėje pažymėkite visus rinkinio PDF failus ({{pick:mac=laikant ⌘ spauskite kiekvieną failą|windows linux=laikant Ctrl spauskite kiekvieną failą}}, arba pažymėkite intervalą laikydami Shift), tada patvirtinkite.
   Arba vilkite failus iš {{pick:mac=Finder|windows=File Explorer|linux=failų tvarkyklės}} į lapo sritį. Vilkdami rodomas tekstas „Numeskite PDF failus, kad juos atidarytumėte“.
3. Palaukite, kol būsenos juostoje rodoma „Atidaroma <file>…“. Dideliems failams rodomas skaičius: „(10 iš 60 lapų)“.

Rezultatas: {{ui:Lapai}} sąraše rodomas kiekvienas kiekvieno failo puslapis atidarymo tvarka, o būsenos juostoje rodoma maždaug „Failų atidaryta: 3 (rinkinyje lapų: 42).“ Jei failuose jau buvo komentarų, pridedama, kiek jų perskaityta.

Norėdami vėliau pridėti daugiau failų, atidarykite juos tuo pačiu būdu. Jie prijungiami prie sąrašo pabaigos.

## Pradėti nuo tuščių puslapių

Norėdami eskizuoti ar rašyti pastabas be brėžinio, sukurkite tuščius puslapius vietoj PDF atidarymo:

1. Įrankių juostoje pasirinkite {{ui:Naujas}} arba pradžios ekrane {{ui:Pradėti nuo tuščio puslapio}}, arba paspauskite {{key:Mod+N}}, kai jūsų naršyklė tai leidžia (darbalaukio programa ir Studio visada leidžia).
2. Pasirinkite {{ui:Popieriaus dydis}}: Letter, Tabloid arba ANSI B, ARCH D, ARCH E, A4, A3 arba A1, ir {{ui:Stačias}} arba {{ui:Gulsčias}}.
3. Pasirinkite {{ui:Tinklelis}}: {{ui:Nėra}}, {{ui:Taškai}} arba {{ui:Kvadratai}}. Tinklelis kas 1/4 colio, o kas colį – storesne linija colių popieriuje, ir kas 5 mm, o kas 10 mm – storesne linija metriniame popieriuje. Jis atspausdinamas ant puslapio.
4. Įveskite, kiek {{ui:Puslapiai}} norite, nuo 1 iki 20, tada pasirinkite {{ui:Sukurti}}.

Rezultatas: sukuriamas naujas PDF pavadinimu "Untitled-1.pdf" (tada "Untitled-2.pdf" ir t. t.), kuris atsidaro kaip bet kuris kitas failas, sukurtas šiame kompiuteryje. Visi įrankiai veikia su juo, o {{ui:Įrašyti}} atsisiunčia "Untitled-1 (marked up).pdf". MarkupCraft prisimena jūsų pasirinkimus kitam kartui.

Puslapiai neturi mastelio: būsenos juostoje rodoma „Nekalibruota“. Tinklelis nėra mastelis. Norėdami matuoti, pirmiausia kalibruokite lapą arba pasirinkite mastelį; žr. [Kalibravimas ir matavimas](topic:calibrate-and-measure).

Norėdami pridėti puslapį prie tuščio rinkinio, atidarykite vieną iš jo lapų ir pasirinkite {{ui:Pridėti tuščią puslapį}} po {{ui:Lapai}} sąrašu. Naujas puslapis turi tokį patį popierių ir tinklelį ir įdedamas į pabaigą. Kaip ir kiekvienas puslapio pakeitimas, jo anuliuoti negalima; žr. [Spausdinti ir keisti puslapius](topic:pages-and-printing).

## Kaip lapai gauna pavadinimus

MarkupCraft pavadina kiekvieną lapą „<lapo numeris> — <pavadinimas>“, pavyzdžiui „A-101 — Aukšto planas“, pagal pirmą iš šių, kurį randa:

1. Pavadinimą, kurį įvedėte naudodami {{ui:Pervardyti lapą}} (žemiau).
2. PDF puslapio žymas, jei jas nustatė PDF autorius (pavyzdžiui, „A-101“).
3. Antraštės bloką: MarkupCraft skaito puslapio tekstą ir ieško to, kas panašu į lapo numerį (A-101, A1.01, M-201A, KA1-1), pirmenybę teikdamas apatiniam dešiniajam kampui, dešiniajai juostai ir apatinei juostai, ir kaip pavadinimą paima ilgiausią šalia esantį tekstą.
4. Kitu atveju – failo pavadinimą ir puslapį: „Plans — page 3“.

Norėdami sužinoti, kuris būdas naudotas, paspauskite {{key:Esc}}, kol nieko nebus pažymėta ir įjungtas {{ui:Pasirinkti}}, tada žiūrėkite {{ui:Ypatybės}}: „Nuskaityta iš“ rodo „Puslapio žyma“, „Antraštės blokas“, „Failo pavadinimas“ arba „Įvesta ranka“.

:::note
Nuskaitytuose lapuose ir PDF, kurių raidės eksportuotos kaip linijos, nėra teksto, kurį būtų galima nuskaityti. Jie pavadinami pagal failą ir puslapį, kol juos pervardysite. MarkupCraft dar negali skaityti teksto iš paveikslėlių.
:::

## Judėti tarp lapų

- Spustelėkite lapą {{ui:Lapai}} sąraše.
- Paspauskite {{key:PageDown}} kitam lapui ir {{key:PageUp}} ankstesniam arba naudokite rodykles juostoje po lapu.
- Įrašykite {{ui:Ieškoti lapų}}: dalį numerio („A-2“), pavadinimo žodį („stogas“) arba failo pavadinimą. Sąrašas siaurėja rašant („4 iš 42“). Paspauskite {{key:Enter}}, kad atvertumėte pirmą atitikmenį. Išvalykite laukelį, kad vėl matytumėte visus lapus.

Kiekvienas lapas išlaiko savo keitimo mastelį ir padėtį, kol uždarote rinkinį.

## Keisti mastelį ir slinkti

:::mouse
- **Keisti mastelį:** sukite ratuką virš lapo. Mastelis keičiamas aplink žymeklį. Arba paspauskite {{key:Plus}} ir {{key:Minus}} (taip pat su {{key:Mod}}), arba naudokite mastelio mygtukus. Įveskite tikslų procentą mastelio laukelyje.
- **Pritaikyti:** {{ui:Pritaikyti puslapį}} ({{key:Mod+0}}) rodo visą lapą; {{ui:Pritaikyti plotį}} ({{key:Mod+9}}) užpildo plotį.
- **Slinkti:** vilkite vidurinį mygtuką (ratuką), arba vilkite dešiniuoju mygtuku, arba laikykite {{key:Space}} ir vilkite, arba pasirinkite {{ui:Slinkti}} ({{key:H}}) ir vilkite. Jei nieko nepažymėta, rodyklių klavišai taip pat perkelia lapą.
:::

:::mac mouse
Mac jutikliniame kilimėlyje dviejų pirštų slinkimas keičia mastelį (lapo neslenka). Norėdami slinkti, laikykite {{key:Space}} ir vilkite vienu pirštu, arba perjunkite į {{ui:Slinkti}} su {{key:H}}. Gnybimas keičia mastelį Chrome, Edge ir Firefox.
:::

:::touch
- **Keisti mastelį ir slinkti:** uždėkite du pirštus ant lapo. Išskleiskite arba suspauskite juos, kad keistumėte mastelį aplink tašką tarp jų, ir perkelkite kartu, kad slinktumėte. Abu veiksmai vyksta vienu metu.
- **Slinkti vienu pirštu:** pirmiausia pasirinkite {{ui:Slinkti}}. Su kitu įrankiu vienas pirštas piešia arba pažymi.
- {{ui:Pritaikyti puslapį}} ir {{ui:Pritaikyti plotį}} yra juostoje po lapu.
:::

Galite nutolinti gerokai toliau nei visas lapas ir priartinti iki 6400%. Lapas vėl perbraižomas ryškiai akimirką po to, kai nustojate judinti.

## Žymelės

{{ui:Žymelės}} viršuje {{ui:Lapai}} skydelyje rodo PDF, kuriam priklauso atidarytas lapas, žymeles (turinį). Pasirinkite vieną, kad nueitumėte į jos puslapį. Pieštukas pervardija žymelę, o kryžiukas ją pašalina. {{ui:Sudaryti iš lapų}} sukuria po vieną žymelę kiekvienam lapui, pavadintą taip, kaip ją rodo lapų sąrašas (lapo numeris ir pavadinimas), o {{ui:Pridėti šiam lapui}} prideda vieną lapui, kuriame esate. Pakeitimai yra neįrašyto failo dalis: {{ui:Įrašyti}} įrašo juos į kopiją, kurią rodo bet kuri PDF peržiūros programa.

## Pasukti vaizdą

Du sukimo mygtukai dešinėje juostos po lapu pasuka vaizdą per ketvirtį apsisukimo į bet kurią pusę, skirtą lapui, nubrėžtam šonu. Pasukamas tik vaizdas: PDF ir jo žymėjimai lieka kaip buvo, o kitas lapas atsidaro taip, kaip atidarytas jo PDF (kiekvienas lapas, kol rinkinys atidarytas, prisimena savo posūkį). Tekstas, pridėtas pasuktame vaizde, atrodo tiesus, kaip matote. Norėdami pasukti patį puslapį įrašytame PDF, naudokite {{ui:Puslapiai}}, tada {{ui:Pasukti puslapį pagal laikrodžio rodyklę}}; žr. [Spausdinti ir keisti puslapius](topic:pages-and-printing).

## Pervardyti lapą

Kai lapo pavadinimas klaidingas arba jo nėra:

1. Parodykite lapą.
2. Paspauskite {{key:Esc}}, kol nieko nebus pažymėta ir įjungtas įrankis {{ui:Pasirinkti}}. Dabar {{ui:Ypatybės}} rodo lapą.
3. Pasirinkite {{ui:Pervardyti lapą}}.
4. Įveskite {{ui:Lapo numeris}} ir {{ui:Pavadinimas}}, tada pasirinkite {{ui:Įrašyti}}.

Rezultatas: lapų sąrašas, juosta po lapu ir žymėjimų sąrašas naudoja naują pavadinimą, o „Nuskaityta iš“ rodo „Įvesta ranka“. Pervardijimą galima anuliuoti su {{key:Mod+Z}}.

Norėdami grįžti prie to, ką sako failas, vėl atidarykite {{ui:Pervardyti lapą}}, išvalykite abu laukelius ir pasirinkite {{ui:Įrašyti}}.

Įrašant įvestas lapo numeris tampa PDF puslapio žyma, todėl kitos PDF peržiūros programos puslapio langelyje rodo „A-101“. Jei suteiksite numerį bet kuriam failo puslapiui, kiekvienas to failo puslapis kopijoje gauna žymą (jūsų įvestas numeris, arba senoji žyma, arba puslapio numeris). Įvestas pavadinimas išsaugomas MarkupCraft, bet kitos peržiūros programos jo nerodo.

## Atidaryti PDF TakeoffCraft programoje arba atnešti jį čia

Kai TakeoffCraft atidaryta toje pačioje vietoje (laboratorijoje, Try arba internetinėse programose), juostoje po lapu yra {{ui:Atidaryti programoje TakeoffCraft}}. Ji atidaro lapo PDF TakeoffCraft naujame skirtuke, kaip jis buvo atidarytas čia, kad galėtumėte matuoti kiekius. Jūsų žymėjimai lieka čia; įrašykite juos įprastai.

TakeoffCraft mygtukas {{ui:MarkupCraft}} daro tą patį kita kryptimi: PDF atidaromas čia, tarsi būtumėte pasirinkę {{ui:Atidaryti}}. Jei naršyklė blokuoja naują skirtuką, leiskite šiai svetainei iškylančiuosius langus ir vėl pasirinkite mygtuką.
