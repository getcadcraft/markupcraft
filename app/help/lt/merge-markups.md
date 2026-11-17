---
title: Dviejų žmonių pakeitimų sujungimas viename PDF
summary: Leiskite git, Fossil ar Mercurial sujungti dvi su žymėjimais pažymėtas tos pačios PDF kopijas žymėjimas po žymėjimo, įskaitant pastabas.
keywords: sujungimas, git, fossil, mercurial, versijų valdymas, konfliktas, trijų krypčių, cadcraft merge, gitattributes, žymėjimai, pastabos, komanda, dvi kopijos
from: a450a9ef
---

Du žmonės žymi tą patį PDF dviejose kopijose. Jei jie palietė skirtingus žymėjimus, kopijas gali sujungti programa, o ne rankiniu būdu.

## Kas tai įgalina

Kiekvienas MarkupCraft išsaugotas žymėjimas PDF viduje turi savo pavadinimą (jo id), ir šis pavadinimas niekada nesikeičia. Sujungimas ieško žymėjimų pagal tą pavadinimą, o ne pagal jų vietą faile, nes kiekviena programa išsaugodama perkrauna vietas. Pastabos ir uždarytos privačios pastabos atitinkamos taip pat.

Lapai niekada nekeičiami: abi kopijos turi turėti tą patį puslapių skaičių. Jei jie skiriasi, sujungimas palieka jūsų kopiją kaip yra ir apie tai praneša, nes puslapių pridėjimas ar šalinimas yra žmogaus darbas.

## Nustatymas

Git reikia dviejų eilučių kartą kiekvienoje saugykloje:

```
# .gitattributes
*.pdf merge=cadcraft

# kartą kiekviename kompiuteryje
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Be git paleiskite `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil ir Mercurial priima tuos pačius tris failus savo sujungimo įrankio nustatyme. Užduočių failas, kuris keliauja kartu su brėžiniu (`<name>.markups.json`, žr. [Veiksmingi žymėjimai](topic:markups-that-act)), sujungiamas taip pat, kaip grynasis tekstas.

## Taisyklės

- Žymėjimas, pakeistas tik vienoje pusėje, paimamas. Tas pats pakeitimas abiejose pusėse paimamas vieną kartą.
- Tas pats žymėjimas, pakeistas dviem būdais, yra **konfliktas**: jūsų pusė lieka, o ataskaitoje išvardijamos abi. Atidarykite rezultatą ir ištaisykite tą žymėjimą rankiniu būdu.
- Žymėjimas, pridėtas bet kurioje pusėje, išsaugomas. Pašalintas vienoje pusėje ir nepaliestas kitoje – pašalinamas. Pašalintas vienoje pusėje ir pakeistas kitoje – pašalinamas ir apie tai pranešama.
- Sluoksniai, stulpeliai, įrašai ir pastabos seka tas pačias taisykles.
- Uždarytų privačių pastabų niekada neatveriama: abiejų pusių blokai išlieka tokie, kokie yra.

Sujungtas failas yra visiškai perrašoma jūsų kopija, kaip ir MarkupCraft savo įrašymas. Nieko neįkeliama; viskas vyksta jūsų kompiuteryje.
