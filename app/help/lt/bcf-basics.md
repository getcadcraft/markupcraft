---
title: BCF pagrindai
summary: Ką įtraukia MarkupCraft BCF eksportas, kaip jį naudoti su BIM koordinavimo įrankiais ir kokie jo apribojimai.
keywords: bcf, bcfzip, BIM bendradarbiavimo formatas, problemos, koordinavimas, susidūrimas, temos, vaizdo taškas, momentinė nuotrauka, openbim, buildingsmart, eksportuoti problemas
from: 0de26175
---

BCF (BIM Collaboration Format) yra atviras failo formatas, skirtas perduoti problemas tarp BIM įrankių. Daugelis modelio koordinavimo ir kūrimo programų gali importuoti `.bcfzip` failą kaip problemų sąrašą. MarkupCraft rašo **BCF 2.1**.

## Kaip sukurti

1. Atidarykite skirtuką {{ui:Žymėjimai}}.
2. Nufiltruokite sąrašą pagal tai, ką norite siųsti, pavyzdžiui, {{ui:Būsena}} „Atvira“. Eksportuojami tik sąraše esantys žymėjimai.
3. Pasirinkite {{ui:BCF}}.
4. Palaukite, kol bus daromos kiekvieno žymėjimo momentinės nuotraukos („Daromos BCF nuotraukos (5 iš 20)…“).

Rezultatas: atsisiunčiamas „<name> markups.bcfzip“, o būsenos juostoje nurodoma, kiek temų jame yra ir koks failo dydis.

## Kas jame yra

Kiekvienas žymėjimas tampa viena **tema**:

| Temos laukas | Užpildoma |
|---|---|
| Pavadinimas | Trūkumo numeris, tema ir lapas, pavyzdžiui, „#4 Debesėlis ant A-101 — Aukšto planas“ |
| Tipas | Žymėjimo rūšis (Debesėlis, Nuoroda, Ilgis…) |
| Būsena | Atvira, Priimta, Atmesta arba Baigta |
| Etiketės | Žymėjimo rūšis ir lapas |
| Autorius ir datos | Žymėjimo autorius, sukūrimo ir keitimo datos |
| Priskirta, terminas | Iš jo trūkumo elemento, jei jis yra |
| Aprašymas | Jo tekstas arba antspaudo formuluotė, išmatuota vertė, komentaras, lapas ir failas |
| Komentarai | Po vieną kiekvienam atsakymui, su autoriumi ir data |
| Momentinė nuotrauka | Žymėjimo vaizdas jo dalyje ant lapo |
| Vaizdo taškas | Žymėjimo vietos vaizdas iš viršaus ant lapo |

Pakartotinai eksportavus tą patį žymėjimą, gaunamas tas pats temos ID, todėl įrankis, galintis importuoti BCF, gali atpažinti jį kaip tą pačią problemą.

## Ką grąžina importuojant

{{ui:Importuoti BCF}} skaito BCF 2.0, 2.1 ir 3.0 failus (patikrinta su 19 oficialių buildingSMART 3.0 bandymo failų: perskaitytos visos temos ir trijų jų tekstiniai komentarai). Temai, kuri yra jūsų (tas pats temos ID), prideda naujus komentarus kaip atsakymus ir perima naują būseną. Bet kuri kita tema tampa pastaba ant lapo, kurį nurodo jos etiketė ar failo pavadinimas, o jei tokio nėra – ant atidaryto lapo. Jos pavadinimas, aprašymas, atsakingasis ir terminas tampa pastabos tekstu, o komentarai – atsakymais.

| BCF temoje | MarkupCraft |
|---|---|
| Pavadinimas, aprašymas, atsakingasis, terminas | Pastabos tekstas |
| Komentarai su tekstu | Atsakymai |
| Būsena Open, Accepted, Rejected, Completed (Closed, Resolved, Done laikomi Completed) | Žymėjimo būsena |
| Autorius ir sukūrimo data | Pastabos autorius ir data |
| Kameros padėtis | Vieta ant lapo, tik temai, susietai su lapu pagal etiketę ar failo pavadinimą |
| Modelio pasirinkimas, paslėpti elementai, pjūvio plokštumos, nuotraukos | Neišsaugoma: lape nėra modelio, kuriame tai būtų rodoma |

## Ribos, kurias reikia žinoti

- **Lapas nėra modelis.** Vaizdo taškas nurodo žymėjimo vietą ant popieriaus, matuojamą popieriaus metrais. Jis neperkelia BIM įrankio į vietą modelyje. Vietai rasti naudokite nuotrauką ir lapo pavadinimą.
- **Būsenos ir tipai yra MarkupCraft savi** (Atvira, Priimta, Atmesta, Baigta; Debesėlis, Nuoroda…). Failas juos deklaruoja, kaip leidžia BCF, tačiau įrankis su savo fiksuotais sąrašais gali juos susieti su kitais arba ignoruoti.
- **Importuojant gaunami komentarai, o ne modelio vaizdai.** {{ui:Importuoti BCF}} prideda atsakymus ir būsenas žymėjimams, kuriuos eksportavote, ir sukuria pastabas kitoms problemoms; modelio kameros vaizdo parodyti negali. Žr. [Žymėjimų sąrašas ir eksportas](topic:markups-list-and-export#import-bcf).
- Brėžinių peržiūroms dažnai paprasčiau grąžinti žymėjimus PDF formatu. BCF skirtas brėžinių komentarams perkelti į modelio koordinavimo darbo eigą.
