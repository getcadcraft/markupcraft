---
title: BCF pagrindai
summary: Ką talpina MarkupCraft BCF eksportas, kaip jį naudoti su BIM koordinavimo įrankiais ir kokios jo ribos.
keywords: bcf, bcfzip, BIM bendradarbiavimo formatas, problemos, koordinavimas, kolizija, temos, vaizdo kampas, momentinė nuotrauka, openbim, buildingsmart, eksportuoti problemas
from: 446f38c1
---

BCF (BIM Collaboration Format) yra atviras failo formatas problemoms perduoti tarp BIM įrankių. Daugelis modelių koordinavimo ir projektavimo programų gali importuoti `.bcfzip` failą kaip problemų sąrašą. MarkupCraft rašo **BCF 2.1**.

## Sukurti failą

1. Atidarykite {{ui:Žymėjimai}} skirtuką.
2. Atfiltruokite sąrašą pagal tai, ką norite siųsti, pavyzdžiui {{ui:Būsena}} "Atidaryta". Eksportuojami tik sąraše esantys žymėjimai.
3. Pasirinkite {{ui:BCF}}.
4. Palaukite, kol sukuriama kiekvieno žymėjimo momentinė nuotrauka ("Kuriamos BCF momentinės nuotraukos (5 iš 20)…").

Rezultatas: parsisiunčia "<name> markups.bcfzip", o būsenos juostoje nurodoma, kiek temų jame yra ir koks failo dydis.

## Kas jame yra

Kiekvienas žymėjimas tampa viena **tema**:

| Temos laukas | Užpildoma |
|---|---|
| Pavadinimas | Defekto numeris, dalykas ir lapas, pavyzdžiui "#4 Debesis ant A-101 — Aukšto planas" |
| Tipas | Žymėjimo rūšis (Debesis, Iškvietimas, Ilgis…) |
| Būsena | Atidaryta, Priimta, Atmesta arba Baigta |
| Žymos | Žymėjimo rūšis ir lapas |
| Autorius ir datos | Žymėjimo autorius, sukūrimo ir keitimo datos |
| Priskirta, terminas | Iš jo defekto punkto, kai jis yra |
| Aprašymas | Žymėjimo tekstas arba antspaudo tekstas, išmatuota vertė, komentaras, lapas ir failas |
| Komentarai | Vienas kiekvienam atsakymui, su autoriumi ir data |
| Momentinė nuotrauka | Žymėjimo paveikslėlis jo lapo dalyje |
| Vaizdo kampas | Žymėjimo vietos lape vaizdas iš viršaus |

Eksportavus tą patį žymėjimą dar kartą, gaunamas tas pats temos ID, todėl įrankis, galintis importuoti BCF, gali atpažinti jį kaip tą pačią problemą.

## Ribos, kurias verta žinoti

- **Lapas nėra modelis.** Vaizdo kampas nurodo žymėjimo vietą popieriuje, matuojamą popieriaus metrais. Jis neperkelia BIM įrankio į vietą modelyje. Vietai rasti naudokite momentinę nuotrauką ir lapo pavadinimą.
- **Būsenos ir tipai yra MarkupCraft.** Atidaryta, Priimta, Atmesta, Baigta; Debesis, Iškvietimas… Failas juos deklaruoja, kaip leidžia BCF, tačiau įrankis su savais fiksuotais sąrašais gali juos susieti arba ignoruoti.
- **Importuojant gaunami komentarai, o ne modelio vaizdai.** {{ui:Importuoti BCF}} prideda atsakymus ir būsenas eksportuotiems žymėjimams bei sukuria pastabas kitoms problemoms; modelio kameros parodyti ji negali. Žr. [Žymėjimų sąrašas ir eksportas](topic:markups-list-and-export#import-bcf).
- Žymėjimų grąžinimas PDF formatu brėžinių peržiūrai dažnai paprastesnis. BCF skirtas brėžinių komentarams perkelti į modelių koordinavimo darbo eigą.
