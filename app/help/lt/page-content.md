---
title: Keisti paties puslapio linijas, paveikslėlius ir tekstą
summary: Perkelkite, keiskite dydį, perdažykite ar naikinkite tai, ką pats PDF piešia, perkelkite linijos taškus, pakeiskite paveikslėlį ir teksto eilutės žodžius.
keywords: puslapio turinys, pagrindinis turinys, redaguoti PDF, redaguoti brėžinį, vektorius, kelias, figūra, linija, paveikslėlis, nuotrauka, pakeisti paveikslėlį, tekstas, žodžiai, šriftas, taškai, mazgai, perkelti, keisti dydį, perdažyti, naikinti, turinio įrankis
from: 471d457e
---

Žymėjimai yra lapo viršuje. Įrankis {{ui:Turinys}} veikia pačiame lape: linijas, paveikslėlius ir teksto eilutes, kurias piešia PDF. Jūsų PDF šiame kompiuteryje niekada nekeičiamas: pakeitimai yra kopijoje, kurią įrašote.

## Pasirinkti, ką keisti

1. Pasirinkite {{ui:Turinys}} grupėje {{ui:Pasirinkti}} arba paspauskite {{key:B}}.
2. Skiltyje {{ui:Pasirinkimas}} {{ui:Ypatybės}} skydelyje įjunkite arba išjunkite {{ui:Figūros}}, {{ui:Paveikslėliai}} ir {{ui:Tekstas}}. Galima pasirinkti tik įjungtus tipus, todėl galite pasirinkti užimto brėžinio tekstą, nepagavę jo linijų.
3. Spustelėkite ką nors, kad pažymėtumėte. Shift+spustelėjimas prideda arba pašalina. Vilkite langelį per tuščią popierių, kad pažymėtumėte kelis: vilkimas į dešinę pasirenka tai, kas visiškai telpa langelyje, vilkimas į kairę – tai, ką langelis liečia.

Figūra iškirptoje srityje pasirenkama tik ten, kur ji matoma.

## Perkelti, keisti dydį, perdažyti, naikinti

- **Perkelti:** vilkite pažymėtą objektą arba paspauskite rodyklių klavišus (dideliems žingsniams laikykite {{key:Shift}}). Laikydami {{key:Shift}} vilkdami, judinkite tiesiai į šoną arba tiesiai aukštyn.
- **Keisti dydį:** vilkite vieną iš aštuonių kvadratų aplink pažymėjimą. Dydis didėja arba mažėja nuo priešingos pusės. Laikykite {{key:Shift}}, kad išlaikytumėte proporcijas.
- **Perdažyti:** linijoms ir figūroms nustatykite {{ui:Linijos spalva}}, {{ui:Užpildo spalva}} ir {{ui:Linijos storis (pt)}} skydelyje {{ui:Ypatybės}}.
- **Naikinti:** paspauskite {{key:Delete}} arba pasirinkite {{ui:Ištrinti iš puslapio}}.
- **Anuliuoti:** kiekvienas pakeitimas yra vienas žingsnis: {{key:Mod+Z}} jį atšaukia, {{key:Mod+Y}} grąžina.

{{ui:Grąžinti, kaip buvo}} atšaukia visus pažymėtų objektų pakeitimus vienu kartu; {{ui:Grąžinti šį puslapį, kaip buvo}} tai daro visam puslapiui.

## Kopijuoti, iškirpti ir įklijuoti puslapio turinį

Pasirinkite linijas, paveikslėlius ar tekstą įrankiu {{ui:Turinys}}, tada:

- {{key:Mod+C}} kopijuoja, {{key:Mod+X}} iškerpa (nukopijuoja ir išima iš puslapio), {{key:Mod+D}} padeda kopiją šalia jų.
- {{key:Mod+V}} įklijuoja kaip puslapio turinį, šalia originalo arba ten, kur yra žymeklis (kaip nurodyta [Parametrai](topic:settings)); {{key:Mod+Shift+V}} įklijuoja tiksliai toje pačioje vietoje. Įklijuokite kitame puslapyje, kitame atidarytame PDF arba kitame MarkupCraft skirtuke šioje naršyklėje.
- {{ui:Redaguoti}} grupės meniu ir dešiniojo pelės klavišo meniu turi tas pačias komandas.

Įklijavimas išsaugo linijas kaip linijas, žodžius kaip žodžius jų šriftu, o paveikslėlius kaip paveikslėlius. Tai vienas vientisas elementas: perkelkite jį, keiskite dydį pagal kvadratus, naikinkite arba atšaukite su {{key:Mod+Z}}. Jis tampa puslapio dalimi kopijoje, kurią įrašote. Paskutinis nukopijuotas dalykas, žymėjimai ar puslapio turinys, yra tai, ką įklijuoja {{key:Mod+V}}.

Kopija apima tik pažymėjimo rėmą: bet kas, ko MarkupCraft negali iškelti (žr. žemiau), ir kas yra tame rėme, patenka kartu.

## Perkelti linijos taškus

Dukart spustelėkite liniją ar kreivę (arba ją pažymėkite ir pasirinkite {{ui:Redaguoti taškus}}). Jos taškai rodomi kaip kvadratai, o kreivės rankenėlės – kaip apskritimai. Vilkite tašką arba rankenėlę; taškas patraukia šalia esančias rankenėles, todėl kreivė išlaiko savo formą aplink jį. Baigę paspauskite {{key:Esc}} arba spustelėkite šalia linijos.

Stačiakampiai neturi taškų, kuriuos galima vilkti: keiskite jų dydį pagal aplink esančius kvadratus.

## Pakeisti paveikslėlį

Pažymėkite paveikslėlį ir pasirinkite {{ui:Pakeisti paveikslėlį…}}, tada pasirinkite PNG, JPEG arba SVG failą (arba PDF: jo pirmą puslapį). Naujas paveikslėlis užima senojo vietą ir išlaiko savo proporcijas.

## Pakeisti teksto eilutės žodžius

Dukart spustelėkite teksto eilutę, įveskite naujus žodžius į {{ui:Žodžiai}} ir paspauskite {{key:Enter}}. Žodžiai rašomi eilutės šriftu ir dydžiu, o eilutė išlaiko savo ilgį, todėl tekstas po jos nejuda.

:::note
Dauguma PDF failų turi tik tas raides, kurių reikia iš kiekvieno šrifto. Kai įvedate raidę, kurios failo šrifto kopijoje nėra, MarkupCraft ją rašo Helvetica šriftu ir apie tai praneša. {{ui:Ypatybės}} rodo, kurias raides failo šriftas turi.
:::

Tekstas keičiamas po vieną eilutę; jis neperkeliamas į kitą eilutę.

## Ką MarkupCraft palieka nepakeistą

- **Nuskaityti puslapiai** yra vienas paveikslėlis: galite perkelti, keisti dydį, pakeisti ar naikinti paveikslėlį, bet jo turinio redaguoti negalima.
- **Užšifruoti ir pasirašyti PDF:** puslapio keitimas pažeistų parašą, todėl {{ui:Turinys}} įrankis tai praneša ir nieko nekeičia. Žymėjimai vis dar veikia.
- **Iškirpimo sritys, objektai, padalyti tarp dviejų puslapio turinio dalių, ir spalvų mišiniai, užpildantys visą sritį, lieka kaip yra; MarkupCraft pasako priežastį, kai bandote.
- **Žodžiai standartiniu šriftu, kurio PDF nenurodo** (pvz., Times šriftas be raidžių pločių faile), negali būti pakeisti, nes MarkupCraft negalėtų išlaikyti eilutės tarpų. Eilutę vis tiek galima perkelti.

## Žymėjimų įdėjimas į puslapį

Linijos, stačiakampiai, elipsės, polilinijos, debesys ir pieštuko brūkšniai, nubrėžti kaip žymėjimai, gali tapti pačio puslapio dalimi: pažymėkite juos ir pasirinkite {{ui:Įdėta į puslapį}} skydelyje {{ui:Ypatybės}}. Tekstas, antspaudai, paveikslėliai ir permatomos spalvos lieka žymėjimais.
