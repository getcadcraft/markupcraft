---
title: Teksto paieška brėžiniuose
summary: Ieškokite žodžių kiekviename lape, pereikite prie kiekvieno rezultato ir apvedkite visus vienu žingsniu.
keywords: rasti, paieška, tekstas, žodis, žodžiai, ctrl f, ieškoti, pastaba, nuoroda, iškvietimas, apvesti visus, paryškinti rezultatus, ocr, skenavimas, skenuotas, skaityti tekstą, pasirinkti tekstą, tesseract
from: 3435c9eb
---

{{ui:Ieškoti teksto}} viršutinėje {{ui:Lapai}} srityje ieško žodžių, nubrėžtų pačiuose lapuose. {{ui:Ieškoti lapų}} žemiau ieško tik lapų pavadinimų.

## Ieškoti

1. Paspauskite {{key:Mod+F}} arba atidarykite {{ui:Ieškoti teksto}}.
2. Įveskite žodžius, pavyzdžiui `hood` arba `verify in field`.
3. Pasirinkite {{ui:Visi lapai}} arba {{ui:Šis lapas}}, o jei reikia, pažymėkite {{ui:Atsižvelgti į raidžių dydį}} arba {{ui:Visi žodžiai}}.
4. Paspauskite {{key:Enter}} arba pasirinkite {{ui:Ieškoti}}.

Rezultatas: kiekvienas rezultatas išvardytas su savo lapo numeriu ir aplinkiniais žodžiais bei pažymėtas geltonai savo lape. Pasirinkite rezultatą, kad atidarytumėte jo lapą ir priartintumėte prie jo.

Frazė randama net tuomet, kai brėžinyje ji suskaidyta į dvi teksto dalis arba dvi eilutes.

## Apvesti visus rezultatus

Pasirinkite {{ui:Apvesti visus}}. Revizijos debesis apeina kiekvieną sąraše esantį rezultatą, visuose lapuose, su komentaru „Found: <your words>“. Vienas {{key:Mod+Z}} pašalina visus.

## Skaityti tekstą skenuotame lape (OCR)

Skenuotas lapas yra tik paveikslėlis: kol jo žodžiai neperskaityti, nėra ko ieškoti. Kai skaičiuoklėje nurodoma, kad lapai neturi teksto, pasirinkite {{ui:Skaityti tekstą (OCR)…}} po ja arba {{ui:Puslapiai}} › {{ui:Skaityti tekstą (OCR)…}}.

1. Pasirinkite puslapius: šį lapą, visus failo puslapius arba visus visų atvirų failų puslapius.
2. Pasirinkite teksto kalbą. {{ui:Taip pat anglų}} nuskaito ir angliškus žodžius.
3. Pasirinkite {{ui:Skaityti tekstą}}. Juosta rodo nuskaitomą puslapį; {{ui:Stabdyti}} baigia vykdymą ir palieka jau nuskaitytus puslapius.

Rezultatas: žodžius galima rasti, pasirinkti ir nukopijuoti kaip bet kurį kitą tekstą. Viskas vykdoma jūsų kompiuteryje: niekas niekur nesiunčiama. Veikia be ryšio programoje Studio ir naršyklėje, kai programa įrašyta neprisijungusiam darbui (anglų ir jūsų sąsajos kalba) arba kalba jau buvo naudota kartą. Puslapiai, kuriuose jau yra tekstas, paliekami kaip yra.

Įrašant žodžiai įrašomi į PDF kaip nematomas tekstas už paveikslėlio, atskirai nuo jūsų žymėjimų, kad ir kitos PDF programos galėtų juos ieškoti ir kopijuoti. Kol neįrašėte, failas rodomas kaip neįrašytas.

## Pasirinkti ir nukopijuoti tekstą

Pasirinkite {{ui:Daugiau}} › {{ui:Pasirinkti tekstą kopijavimui}}. Vilkite nuo vieno žodžio iki kito, kad pasirinktumėte žodžius tarp jų; vilkite nuo tuščio popieriaus, kad pasirinktumėte žodžius langelyje; arba du kartus spustelėkite vieną žodį. {{key:Mod+A}} pasirenka visus lape esančius žodžius. {{key:Mod+C}} kopijuoja juos išlaikant eilutes. Bet koks kitas įrankis tai nutraukia.

## Verta žinoti

- Brėžiniai, kurių raidės nupieštos linijomis, taip pat neturi teksto; skaitymas kaip paveikslėlis geriausiai pavyksta su spausdintu tekstu, pavyzdžiui skenuota knyga ar specifikacija.
- Skaitymo variklis yra Tesseract, įdiegtas programoje su anglų ir programos kalbų duomenimis. Pirmą kartą paleidus jis įkeliamas (apie 6 MB, daugiau antrai kalbai).
- Kaip gerai jis skaito, priklauso nuo skenavimo: švarūs 300 dpi puslapiai nuskaitomi beveik žodis į žodį; seni, blankūs ar žemos skyros skenavimai praleidžia daugiau žodžių.
- Sąraše rodomi pirmieji 500 rezultatų; {{ui:Apvesti visus}} apveda iki 2,000.
- Rezultatai išvalomi, kai uždarote rinkinį, o vienam failui – kai pakeičiate jo puslapius.
