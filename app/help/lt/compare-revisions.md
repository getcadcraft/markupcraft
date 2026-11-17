---
title: Palyginti dvi revizijas
summary: Perdenkite senos ir naujos lapo laidos du spalvomis, sulygiuokite pagal du taškus ir apdebesykite pakeitimus.
keywords: palyginti, perdanga, lapų perdanga, revizija, skirtumas, pokyčiai, pakeitimai, senas naujas, lygiuoti, atgalinis patikrinimas, laida, biuletenis
from: 62f5d1c5
---

Palyginimas uždeda du lapus vieną ant kito. Linijos, esančios tik senajame lape, rodomos raudonai, tik naujajame – mėlynai, o abiejuose – prislopinta pilka. Spalvos įvardytos legendoje po lapu: „Tik senajame lape“, „Tik naujajame lape“, „Abiejuose“.

## Palyginti du lapus

1. Atidarykite abi laidas. Jos gali būti to paties PDF puslapiai arba skirtingų PDF; atidarykite jas kartu kaip vieną rinkinį (žr. [Darbas su keliais failais vienu metu](topic:several-files)).
2. Dešinėje pasirinkite {{ui:Palyginti}} skirtuką.
3. Pasirinkite {{ui:Senasis lapas}} ir {{ui:Naujasis lapas}}. Naujasis lapas iš pradžių yra tas, kuriame esate. Kai atidaryta kelių failų, po kiekvieno lapo pavadinimu rodomas jo failo pavadinimas.
4. Pasirinkite {{ui:Palyginti}}.

Rezultatas: MarkupCraft rodo naująjį lapą su įmaišytu senuoju, pasirodo legenda, o skirtukas rodo „Lyginama <old> (senas) su <new> (naujas). Naujojo lapo žymėjimai lieka redaguojami.“

## Pereiti tarp senos ir naujos

Vilkite slankiklį {{ui:Senas ir naujas}}. Visiškai kairėje rodomas tik senas lapas, visiškai dešinėje – tik naujas, viduryje – abu. Dažnai greičiausias būdas pamatyti nedidelį pokytį – slankioti pirmyn ir atgal.

## Sulygiuoti lapus

Jei dvi laidos buvo išspausdintos su skirtingomis paraštėmis, dydžiu ar pasukimu, viskas atrodo pakitę. Ištaisykite:

**Pagal du taškus (geriausia):**

1. Pasirinkite {{ui:Suderinti pagal du taškus}}. Vaizde rodomas tik senas lapas.
2. Spustelėkite ryškią detalę, kurią galima rasti abiejuose lapuose, pavyzdžiui kolonų tinklelio susikirtimą. Skirtukas skaičiuoja žingsnius („1 iš 4“).
3. Spustelėkite antrą detalę, toli nuo pirmosios, pavyzdžiui priešingą tinklelio kampą.
4. Vaizdas persijungia į naująjį lapą. Dar kartą spustelėkite pirmąją detalę.
5. Dar kartą spustelėkite antrąją detalę.

Rezultatas: „Sulygiuota: senojo lapo mastelis 100.00 %, pasukimas 0.00°. Smulkiai pakoreguokite.“ Senas lapas perkeliamas, keičiamas jo mastelis ir pasukamas, kad tilptų. {{key:Esc}} atšaukia, kol renkate taškus. Prieš spustelėdami kiekvieną detalę priartinkite, kad sulygiavimas būtų tikslus.

**Pastūmimais:** naudokite keturis rodyklių mygtukus po „Sulygiuoti“, kad perkeltumėte senąjį lapą. Pasirinkite žingsnį (0,25, 1, 5 arba 20 pt; 72 pt yra vienas colis popieriuje). Skirtukas rodo, kiek toli lapas perkeltas.

{{ui:Atstatyti}} pašalina sulygiavimą ir pastūmimus.

## Tik pakitusios linijos

Po sulygiavimo mygtukais pasirinkite {{ui:Pakeistos linijos}} vietoj {{ui:Paveikslėlio perdengimas}}. Tada MarkupCraft lygina abiejų lapų pačias linijas, o ne jų paveikslėlius: naujasis lapas rodomas kaip yra, linijos, esančios tik senajame lape, – raudonai, o tik naujajame – mėlynai. Linija, kuri tik sutrumpėjo, rodo tik trūkstamą dalį. Pirmiausia sulygiuokite lapus (žr. aukščiau): palyginimas naudoja sulygiavimą, todėl lapas, kuris buvo tik pastumtas, pokyčių nerodo. Būsenos eilutėje rodoma, kiek pakito.

Tai veikia PDF failams, sukurtiems iš CAD, kai brėžinys sudarytas iš linijų. Nuskenuotuose lapuose linijų, kurias galima palyginti, nėra: jiems naudokite paveikslėlio perdangą. Šriftu parašytas tekstas (ne nubrėžtas brūkšniais) nelyginamas.

## Pažymėkite pakeitimus

Lyginant esate naujajame lape, ir visi įrankiai veikia. Apdebesykite pakeitimus, kai juos randate; jie priklauso naujajam lapui ir lieka, kai nustojate lyginti.

{{ui:Apdebesyti pakeitimus}} atlieka tai už jus: sugrupuoja arti esančias pakeistas linijas ir naujajame lape nubraižo peržiūros debesį aplink kiekvieną grupę, su komentaru „Pakeista nuo <old sheet>“. Vienas {{key:Mod+Z}} pašalina visus; ištrinkite tuos, kurių nereikia.

## Palyginti visą rinkinį

Kai nauja laida ateina kaip atskiras PDF, atidarykite abu PDF ir {{ui:Palyginti}} skirtuke atidarykite {{ui:Palyginti du rinkinius}}. Pasirinkite senąjį ir naująjį failą, tada pasirinkite {{ui:Palyginti rinkinius}}. Lapai susiporuojami pagal numerį (kaip [peržiūrėto rinkinio lapų keitimas](topic:slip-sheet-a-revised-set)), lyginami pagal linijas ir išvardijami nuo daugiausiai pakitusio. Pasirinkite lapą sąraše, kad palygintumėte tą porą su {{ui:Pakeistos linijos}}.

{{ui:Apdebesyti visus pakeitimus}} apdebesija kiekvieną pakeitimų grupę kiekviename pakeistame lape vienu žingsniu, kurį galima atšaukti. Rinkinio palyginimas lapų prieš tai nesulygiuoja, todėl lapas, pastumtas puslapyje, rodomas kaip pakitęs: palyginkite tą porą atskirai ir naudokite {{ui:Suderinti pagal du taškus}}.

## Nustoti lyginti

Pasirinkite {{ui:Baigti palyginimą}} arba eikite į kitą lapą. Sulygiavimas išsaugomas tai pačiai lapų porai, kol uždarote rinkinį.

## Verta žinoti

- Palyginimas veikia pagal tai, kas nubraižyta, pikselis po pikselio. Jis nežino, kad linija pasislinko; rodo seną poziciją viena spalva, o naują – kita.
- Tekstas, kuris persikėlė į naują eilutę, pakeista antraštės bloko data ar kitoks spausdinimo stilius taip pat rodomi kaip pakeitimai.
- Nuskenuotas lapas, palygintas su išspausdintu, yra triukšmingas: nuskaitymas išplauna ir pastumia linijas.
- Šriftu parašyto teksto lyginimas ir pakitimų sąrašas dar nepadaryti.
