---
title: Žymėjimų sąrašas, filtrai ir eksportas
summary: Peržiūrėkite kiekvieną rinkinio žymėjimą, filtruokite pagal lapą, autorių, būseną ir tipą, pereikite prie vieno iš jų ir eksportuokite sąrašą kaip CSV arba BCF.
keywords: žymėjimų sąrašas, sąrašas, santrauka, xlsx, skaičiuoklės sąsiuvinis, sąsiuvinis, PDF ataskaita, importuoti bcf, filtras, rikiuoti, ataskaita, eksportas, csv, skaičiuoklė, bcf, bcfzip, problemos, komentarų sąrašas, pereiti
from: 6c70261e
---

## Atidaryti sąrašą

Pasirinkite dešinėje esantį skirtuką {{ui:Žymėjimai}}. Išvardijami visi kiekvieno atidaryto failo žymėjimai, pagal lapų tvarką, o tada pagal sukūrimo tvarką. Kiekvienoje eilutėje rodoma:

- piktograma žymėjimo spalva, jo defekto numeris, jei jis yra („#4“), ir tema,
- jo tekstas, antspaudo tekstas arba išmatuota reikšmė, ir komentaras,
- lapas, autorius ir data,
- jo būsena (arba „Tik skaitoma“ komentarams, kurie atėjo su failu) ir atsakymų skaičius, kai yra atsakymų.

Eilutė virš sąrašo juos suskaičiuoja: „38 žymėjimų“ arba „12 iš 38 žymėjimų“, kai taikomas filtras.

## Pereiti prie žymėjimo

Spustelėkite eilutę. MarkupCraft parodo tą lapą, pažymi žymėjimą ir priartina, kai jis nematomas ar per mažas. {{ui:Ypatybės}} turi jo detales ir giją, kai grįžtate į tą skirtuką.

## Filtruoti

Keturi meniu virš sąrašo. Jie derinami.

| Meniu | Pasirinkimai |
|---|---|
| {{ui:Lapas}} | Visi lapai, Šis lapas (seka jus keičiant lapus), arba bet kuris lapas, turintis žymėjimų |
| {{ui:Autorius}} | Bet kas arba kiekvienas rinkinio autorius |
| {{ui:Būsena}} | Bet kokia, Atidaryta, Priimta, Atmesta, Užbaigta |
| {{ui:Tipas}} | Bet koks tipas arba kiekvienas žymėjimo tipas rinkinyje |

Pavyzdžiai:

- Kas dar atviras šiame lape: {{ui:Lapas}} „Šis lapas“, {{ui:Būsena}} „Atidaryta“.
- Vieno konsultanto komentarai: {{ui:Autorius}} – jo vardas.
- Visi matavimai: {{ui:Tipas}} „Ilgis“ arba „Plotas“.

Sąraše rodoma ne daugiau kaip 2000 eilučių; labai dideliuose rinkiniuose susiaurinkite jį filtru.

## Eksportuoti į CSV

Pasirinkite {{ui:CSV}} skirtuko viršuje. Gausite „<name> markups.csv“ su **žymėjimais, kaip jie dabar filtruojami**, po vieną eilutėje, su šiais stulpeliais:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- „Text“ stulpelyje – teksto laukelių ir iškvietimų žodžiai, antspaudo tekstas arba skaičiavimo grupės pavadinimas.
- „Measurement“ stulpelyje – ilgiai, plotams – „area, perimeter“, o skaičiavimams – „group: n“.
- Datos – pilnos laiko žymos UTC.

Norint eksportuoti viską, pirmiausia visus filtrus nustatykite į pirmąjį pasirinkimą.

## Lapo legenda

{{ui:Legenda}} skirtuke {{ui:Žymėjimai}} įdeda legendą į viršutinį dešinįjį matomo lapo kampą: langelis, išvardijantis kiekvieną lape esantį žymėjimo tipą (pagal temą ir spalvą, pavyzdžiui, „Cloud“, „Question“ ar „Outlets“), su kiekvieno tipo skaičiumi. Skaičiavimo grupė skaičiuoja savo žymas. Legenda toliau skaičiuoja braižant, perkeliant ar trinant žymėjimus, o spausdinama ir įrašoma su tuo metu esančiais skaičiais.

Perkelkite ir keiskite jos dydį kaip bet kurį žymėjimą. Jos skiltyje {{ui:Ypatybės}} pakeiskite {{ui:Pavadinimas}} arba nustatykite {{ui:Skaičiai}} į {{ui:Visas rinkinys}}, kad būtų skaičiuojami visi lapai. Tarpai, kitos legendos ir kitų programų komentarai neskaičiuojami.

## Jūsų stulpeliai ir rikiavimas

{{ui:Stulpeliai}} skirtuke {{ui:Žymėjimai}} prideda jūsų stulpelių kiekvienam žymėjimui: **tekstas**, **pasirinkimas** (pavyzdžiui, Specialybė: Mechaninė, Elektros, Santechnika), **skaičius** (pavyzdžiui, Kaina) arba **data**. Suteikite kiekvienam pavadinimą, pasirinkite tipą, sąrašo pasirinkimus pasirinkimo stulpeliui ir pasirinkite „{{ui:Išsaugoti stulpelius}}“.

- Užpildykite juos skiltyje „{{ui:Ypatybės}}“: kiekvienas stulpelis turi ten laukelį. Skaičių stulpelyje priimami tik skaičiai, datų – tik data.
- Sąraše po kiekvienu žymėjimu rodomos reikšmės. Filtras „{{ui:Stulpelis}}“ pasirenka vieną reikšmę (arba žymėjimus, kuriuose ji tuščia), o „{{ui:Rikiuoti}}“ surikiuoja sąrašą pagal stulpelį, autorių, būseną, tipą ar datą, o ne pagal lapą.
- CSV ir XLSX eksportuose stulpeliai pateikiami po įprastų. Stulpeliai įrašomi kartu su PDF ir grįžta, kai jį vėl atidarote.

## Eksportuoti santrauką: skaičiuoklės sąsiuvinį arba PDF

- {{ui:XLSX}} parsisiunčia „<name> markup summary.xlsx“ su trimis lapais: **Žymėjimai** (viena eilutė kiekvienam sąraše esančiam žymėjimui, tie patys stulpeliai kaip CSV), **Pagal lapą** (kiek žymėjimų turi kiekvienas lapas, atvirų ir uždarytų, ir kiek kiekvieno tipo, su sumomis) ir **Defektų sąrašas** (kai yra defekto punktų).
- {{ui:PDF}} parsisiunčia „<name> markup summary.pdf“: ataskaita spausdinimui ar siuntimui, su rinkinio pavadinimu, data ir sąrašyje esančių žymėjimų lentele (numeris, lapas, tipas, tema, tekstas ar komentaras, išmatuota reikšmė, autorius, būsena ir paskutinis atsakymas). Ilgas tekstas lūžta; lentelės antraštė kartojasi kiekviename puslapyje.

Abu eksportai ima sąrašą taip, kaip jis filtruotas, todėl pirmiausia nufiltruokite, kad ataskaitoje būtų vienas lapas, vienas autorius ar tik atviri punktai.

## Eksportuoti į BCF

Pasirinkite {{ui:BCF}}. MarkupCraft daro kiekvieno sąraše esančio žymėjimo nuotrauką jo lape („Making snapshots for BCF (3 of 12)…“), tada parsisiunčia „<name> markups.bcfzip“. Kiekvienas žymėjimas tampa viena BCF tema su savo būsena, autoriumi, datomis, atsakymais kaip komentarais, atsakingu asmeniu ir terminu iš savo defekto punkto bei nuotrauka.

Naudokite tai brėžinių peržiūros komentarams perkelti į BIM koordinavimo įrankius, kurie skaito BCF. Kas perkeliama, o kas ne, aprašyta [BCF pagrindai](topic:bcf-basics).

## Importuoti BCF

{{ui:Importuoti BCF}} nuskaito .bcfzip (arba .bcf) failą iš BIM įrankio:

- Problemos, kilusios iš MarkupCraft savo BCF eksporto, atranda savo žymėjimus: naujos atsakymai pridedami prie gijos, o nustatoma nauja būsena (Closed prilyginamas Completed). Jau esantys atsakymai nepridedami du kartus.
- Kitos problemos tampa pastabomis su savo pavadinimu, aprašymu, autoriumi ir komentarais. Pastaba patenka į lapą, kurio numeris ar pavadinimas nurodytas problemos žymose, o jei tokio nėra – į atidarytą lapą. BIM kameros vietos popieriuje nėra, todėl tokios pastabos sudedamos į lapo viršutinį kairįjį kampą, kad jas galėtumėte perkelti.

Visas importas yra vienas žingsnis: {{key:Mod+Z}} jį atšaukia. Žr. [BCF pagrindai](topic:bcf-basics).

## Ko sąrašas dar nedaro

- Sąrašo grupavimo (vietoj to surikiuokite, tada filtruokite).
- Reikšmių redagavimo sąraše (redaguokite skiltyje „{{ui:Ypatybės}}“; defektų laukus galima redaguoti skirtuke {{ui:Defektų sąrašas}}).
