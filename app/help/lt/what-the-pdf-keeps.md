---
title: Kas išsaugoma PDF
summary: Tiksliai, ką turi pažymėta kopija, ką matys kitos PDF programos ir kas nuskaitoma atidarius failą.
keywords: pdf anotacijos, komentarai, išsaugoti duomenys, kelionė pirmyn ir atgal, puslapių žymos, matavimas, peržiūros būsena, atsakymai, suderinamumas, atidaryti iš naujo, privatūs duomenys
from: 6439ad28
---

Pažymėta kopija yra originalus PDF su pridėtais komentarais (PDF anotacijomis). Patys puslapiai, jų brėžiniai, tekstas, žymės ir nuorodos nukopijuojami tokie, kokie buvo.

## Kiekvienas žymėjimas

| MarkupCraft | Išsaugoma kaip | Kitos PDF peržiūros programos rodo |
|---|---|---|
| Stačiakampis, debesėlio dėžutė | Kvadrato anotacija (debesėlis: debesiška kraštinė) | Stačiakampio ar debesėlio komentarą |
| Elipsė | Apskritimo anotacija | Elipsės komentarą |
| Daugiakampis, laisvas debesėlis | Daugiakampio anotacija (debesėlis: debesiška kraštinė) | Daugiakampio ar debesėlio komentarą |
| Polilinija | PolyLine anotacija | Polilinijos komentarą |
| Linija, rodyklė | Linijos anotacija (rodyklė: uždaras rodyklės galas) | Linijos ar rodyklės komentarą |
| Ilgis | Linijos anotacija, pažymėta kaip matmuo, su matavimu | Ilgio matavimą, jei peržiūros programa tokius palaiko |
| Plotas | Daugiakampio anotacija, pažymėta kaip plotas, su matavimu | Ploto matavimą, jei palaikoma; kitu atveju daugiakampį |
| Skaičiaus grupė | Viena rašalo anotacija, žiedas kiekvienam elementui; jos tekstas yra „grupė: n“ | Rašalo komentarą |
| Rašiklis, fluorescencinis žymeklis | Rašalo anotacija (žymeklis pažymėtas kaip toks) | Rašalo komentarą |
| Tekstas | FreeText anotacija | Teksto laukelio komentarą |
| Iškvietimas (callout) | FreeText anotacija su iškvietimo linija | Iškvietimo komentarą |
| Pastaba | Teksto anotacija | Lipnią pastabą, kuri atsidaro su tekstu |
| Antspaudas | Antspaudo anotacija | Antspaudo komentarą |

Kiekvienas išsaugomas su:

- **savo išvaizda**, nupiešta tiksliai taip, kaip MarkupCraft piešia ekrane, todėl atrodo vienodai bet kurioje peržiūros programoje ir spausdinama taip pat, įskaitant defekto numerio ženklelį;
- **autoriumi**, **sukūrimo ir keitimo datomis**, **tema**, **komentaro tekstu** (teksto laukeliams ir iškvietimams – tekstu ir komentaru), **spalva** ir **nepermatomumu**;
- **MarkupCraft duomenimis** privačiame įraše, kurio kitos programos nepaisa: būsena, defekto elementas, stilius ir tipas, todėl atidarius failą viskas atkuriama tiksliai.

## Atsakymų gijos ir būsenos

- Kiekvienas atsakymas išsaugomas kaip atsakymo komentaras, susietas su savo žymėjimu, su autoriumi, data ir tekstu. Atsakymai lape neturi savos piktogramos.
- Kiekvienas būsenos pakeitimas išsaugomas kaip atsakymas su peržiūros būsena. Kitos peržiūros priemonės jį rodo kaip Priimta, Atmesta arba Baigta; Atvira išsaugoma be būsenos.
- Žymėjimas, kurio būsena yra ne Atvira, bet neturi įrašyto būsenos pakeitimo, gauna vieną peržiūros būsenos atsakymą, kad kitos programos matytų ir jo būseną.
- Atsakymai į tik skaitomus komentarus iš originalaus failo išsaugomi tuo pačiu būdu, susieti su tuo komentaru.

## Kiekvienas lapas

- **Mastelis:** kalibruotas lapas gauna matavimo langą, apimantį visą puslapį (įprastas būdas saugoti puslapio mastelį), ir MarkupCraft savo kalibravimo kopiją.
- **Lapo numeris:** numeris, įvestas su {{ui:Pervardyti lapą}}, tampa puslapio žyma. Kai bet kuriam failo puslapiui žyma yra, kiekvienas to failo puslapis gauna žymą: įvestą numerį, kitaip senąją žymą, kitaip puslapio numerį.
- **Lapo pavadinimas:** įvestas pavadinimas išsaugomas tik MarkupCraft; kitos peržiūros programos jo nerodo.

## Tekstas ir simboliai

Tekstas rašomas Helvetica šriftu, kurį turi kiekviena PDF peržiūros programa. Simboliai, nepriklausantys Vakarų Europos rinkiniui (Windows-1252), kopijoje spausdinami kaip „?“; išsaugojimo pranešime jie suskaičiuojami.

## Skaičiavimo lapai ir priežastys

Skaičiavimo lapai ir priežastys saugomi privačiame PDF įraše `/MarkupCraftShell`. Kitos PDF programos jo nepaisa. Senesnis MarkupCraft taip pat jo nepaisa ir pašalina kitą kartą, kai išsaugo tą failą.

## Kas nutinka jau esantiems komentarams

Kai atidarote PDF, kuriame jau yra komentarų:

- MarkupCraft komentarai nuskaitomi tiksliai. Jei kita programa pakeitė jų padėtį ar dydį, galioja nauja padėtis.
- Stačiakampiai, elipsės, linijos, polilinijos, daugiakampiai, rašalas, teksto laukeliai ir lipnios pastabos iš kitų programų tampa redaguojamais žymėjimais. **Išsaugodamas MarkupCraft pašalina originalus ir įrašo juos iš naujo savu būdu**, su iškylančiais langeliais ir atsakymais. Jų išvaizda gali šiek tiek pasikeisti.
- Kitų programų peržiūros būsenos nustato būseną; galioja naujausia.
- Visa kita (teksto paryškinimai, kitų programų antspaudai ir specialios rūšys) kopijoje **paliekama nepakeista**, tik skaitymui.
- Nuorodos ir formų laukai paliekami nepakeisti ir sąraše nerodomi.

Pakartotinai išsaugojus tą patį failą, niekas nesidvigubina: MarkupCraft nuskaityti žymėjimai pakeičiami, o ne pridedami iš naujo.

## Kas nekeičiama

Originalus failas diske niekada nekeičiamas. Kopija nėra optimizuojama pagal dydį, todėl gali būti šiek tiek didesnė už originalą. Apsaugotų (šifruotų) PDF išsaugoti negalima.
