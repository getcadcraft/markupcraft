---
title: Darbas su keliais failais vienu metu
summary: Atidarykite daug PDF kaip vieną rinkinį, ieškokite lapų visuose failuose, kopijuokite žymėjimus tarp jų ir įrašykite kiekvieno failo kopiją.
keywords: keli failai, keli pdf, brėžinių rinkinys, rinkinys, paketinis, daug failų, sujungti, disciplinos, architektūrinis, konstrukcinis, mechaninis, įrašyti visus, uždaryti
from: f59354ae
---

Brėžinių rinkinys dažnai ateina kaip vienas PDF kiekvienai disciplinai arba vienas PDF kiekvienam lapui. MarkupCraft visa, ką atidarote, laiko **vienu rinkiniu**.

## Atidaryti kartu

Pasirinkite visus PDF failų parinkties lange vienu metu arba numeskite juos visus į lapų sritį. Norėdami pridėti daugiau vėliau, atidarykite juos tuo pačiu būdu; jie prisijungs prie {{ui:Lapai}} sąrašo galo ta tvarka, kokia atidaryti.

Rezultatas: „Atidaryta failų: 6 (rinkinyje lapų: 84).“ Kiekvienas puslapis yra lapas. Lapai su lapo numeriu po savo pavadinimu rodo „Lapas A-101“; kiti rodo failą ir puslapį.

Atskiro „rinkinio“ failo nėra: kitą kartą atidarykite tuos pačius PDF failus iš naujo („(marked up)“ kopijas, jei įrašėte).

## Visame rinkinyje

- **Rasti lapą:** {{ui:Ieškoti lapų}} ieško lapų numerių, lapų pavadinimų ir visų failų pavadinimų. {{key:PageUp}} ir {{key:PageDown}} eina per visų failų visus lapus tvarka.
- **Žymėjimų sąrašas:** skirtuke {{ui:Žymėjimai}} rodomi žymėjimai iš visų failų. Filtruokite pagal {{ui:Lapas}}, kad sumažintumėte sąrašą. CSV turi stulpelį File.
- **Trūkumų sąrašas:** vienas numeravimas visam rinkiniui.
- **Lyginimas:** senas ir naujas lapas gali būti iš skirtingų failų.
- **Kopijuoti ir įklijuoti:** {{key:Mod+C}} viename lape ir {{key:Mod+V}} kitame, bet kuriame faile. Kopija patenka į tą pačią vietą puslapyje, šiek tiek poslinkusi.

## Įrašyti

Pasirinkite {{ui:Įrašyti}}. Kai atidaryta daugiau nei vienas failas, MarkupCraft klausia:

- {{ui:Šis failas}}: žymėtą failo, kuriame yra jūsų lapas, kopiją.
- {{ui:Kiekvienas pakeistas failas}}: kiekvieno failo, turinčio neįrašytų pakeitimų, kopiją. Kiekviena atsisiunčiama atskirai kaip „<file name> (marked up).pdf“.
- {{ui:Atšaukti}}

:::chromium
Pirmą kartą įrašant kelis failus iš karto, Chrome ir Edge gali paklausti, ar šiai svetainei leidžiama atsisiųsti kelis failus. Pasirinkite {{ui:Leisti}}; priešingu atveju ateis tik pirmoji kopija.
:::

:::safari
Safari gali paklausti kartą kiekvienam failui. iPad įrenginyje kiekviena kopija patenka į Files programą.
:::

Failas, kurio žymėjimai įrašyti, nebelaikomas pakeistu; kiti vis dar laikomi.

CSV, BCF ir trūkumų sąrašo eksportai pavadinami pagal **pirmąjį** atidarytą failą.

## Uždaryti

{{ui:Uždaryti}} uždaro visą rinkinį; kol kas nėra būdo uždaryti tik vieną failą. Jei yra neįrašytų pakeitimų, klausiama:

- {{ui:Atšaukti}}: nieko nevyksta.
- {{ui:Uždaryti neįrašius}}: neįrašyti žymėjimai prarandami.
- {{ui:Pirma įrašyti kopijas}}: įrašo kiekvieną pakeistą failą, tada uždaro.

Uždarymas taip pat išvalo anuliavimo istoriją.

## Dideli rinkiniai

- Kiekvieno puslapio tekstas nuskaitomas atidarant, kad būtų rasti lapų numeriai, todėl 100 lapų rinkinys užtrunka. Būsenos juosta skaičiuoja lapus, kai jie apdorojami.
- Lapų sąrašo paveikslėliai piešiami, kai slenkate iki jų.
- Kiekvienas atidarytas PDF laikomas naršyklės skirtuko atmintyje. Jei skirtukas sulėtėja, uždarykite kitus sunkius skirtukus arba peržiūrėkite po vieną disciplinos rinkinį.
- To paties failo atidarymas du kartus duoda dvi lapų kopijas. Jei taip nutiko, pasirinkite {{ui:Uždaryti}} ir atidarykite rinkinį iš naujo.
