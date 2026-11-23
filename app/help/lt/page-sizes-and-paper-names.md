---
title: Puslapių dydžiai ir popieriaus pavadinimai
summary: Sužinokite kiekvieno PDF puslapio dydį milimetrais ir coliais bei jo popieriaus pavadinimą (A, B ir C serijos, ANSI, ARCH), o mišrų rinkinį sugrupuokite pagal dydį, kad rastumėte keistus puslapius.
keywords: puslapio dydis, popieriaus dydis, popieriaus pavadinimas, a0, a1, a2, a3, a4, b serija, c serija, ansi, arch, architektūrinis, mm, coliai, pasirinktinis dydis, pagal dydį, keistas dydis, mišrus rinkinys, patikrinti pdf, klientas, problema, mediabox, cropbox, sukimas
from: 08e1354f
---

Prieš siunčiant rinkinį klientui, patikrinkite, ar kiekvienas lapas yra toks dydis, koks turi būti. {{ui:MarkupCraft}} nuskaito kiekvieno puslapio dydį pačiame PDF faile ir pavadina popierių.

## Ką atliksite

Peržiūrėsite vieno lapo dydį, tada sugrupuosite visą rinkinį pagal dydį.

## Žingsniai

1. Atidarykite PDF failus ({{ui:Atidaryti}}), tada spauskite {{key:Esc}}, kol nieko nepažymėta ir įjungtas {{ui:Pasirinkti}}.
2. Žiūrėkite {{ui:Ypatybės}}. {{ui:Popierius}} parodo pavadinimą ir kryptį, pavyzdžiui, „A4, portretinis“. {{ui:Dydis}} pateikia milimetrus ir colius.
3. Kiekvienoje {{ui:Lapai}} sąrašo eilutėje po lapo pavadinimu yra dydžio eilutė.
4. Pasirinkite {{ui:Pagal dydį}} {{ui:Lapai}} antraštėje. Sąrašas surenka lapus po vienu antraštės įrašu kiekvienam dydžiui, didžiausia grupė pirma. Dydis, turintis tik keletą lapų, pažymimas kaip išsiskiriantis.
5. Dar kartą pasirinkite {{ui:Pagal dydį}}, kad grįžtumėte prie rinkinio pačių lapų tvarkos.

Rezultatas: puslapį, kurio dydis skiriasi nuo kitų, lengva pastebėti prieš siunčiant rinkinį.

## Kaip parenkamas pavadinimas

- Dydis imamas iš puslapio ribų PDF faile su pritaikytu sukimu, todėl horizontalus A3 vis dar yra A3.
- Pavadinimai yra A ir B serijos (ISO 216), C serija (ISO 269), ANSI A–E ir ARCH A–E.
- Puslapis, esantis per 2 mm nuo pavadinto dydžio, gauna tą pavadinimą. Bet kuris kitas puslapis pažymimas {{ui:pasirinktinis}}, o {{ui:Artimiausias pavadintas dydis}} nurodo, koks dydis yra artimiausias ir kiek jis skiriasi.
- Coliai imami iš tikro puslapio dydžio, todėl A4 puslapis yra 8.26 × 11.69 in.

## Išsaugomuose failuose

Suvestinės darbaknygėje ({{ui:Žymėjimų sąrašas}}, tada skaičiuoklė) yra stulpelis {{ui:Popieriaus dydis}} lape {{ui:Pagal lapą}} ir darbalapis {{ui:Lapų dydžiai}}. PDF ataskaitoje yra eilutė „{{ui:Lapų dydžiai}}“ su kiekvieno dydžio skaičiumi.

:::note
ANSI ir ARCH coliai buvo įvesti iš paskelbtų lentelių ir nepalyginti su spausdintais standartais. Puslapį, pažymėtą „pasirinktinis“ ir artimą vienam iš jų, patikrinkite patys.
:::
