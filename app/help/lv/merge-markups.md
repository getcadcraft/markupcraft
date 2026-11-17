---
title: Divu cilvēku rediģējumu apvienošana vienā PDF
summary: Ļaujiet git, Fossil vai Mercurial apvienot divas atzīmētas tā paša PDF kopijas pa atzīmēm, arī piezīmes.
keywords: apvienot, git, fossil, mercurial, versiju kontrole, konflikts, trīspusējs, cadcraft merge, gitattributes, atzīmes, piezīmes, komanda, divas kopijas
from: a450a9ef
---

Divi cilvēki atzīmē vienu un to pašu PDF divās kopijās. Ja viņi ir skāruši dažādas atzīmes, kopijas var apvienot programma, nevis ar roku.

## Kas to padara iespējamu

Katra MarkupCraft saglabātā atzīme nes savu nosaukumu (tās id) PDF failā, un šis nosaukums nekad nemainās. Apvienošana atrod atzīmes pēc šī nosaukuma, nevis pēc to vietas failā, jo katra programma saglabājot pārnumurē vietas. Piezīmes un noslēgtas privātās piezīmes tiek saskaņotas tāpat.

Lapas nekad netiek aizskartas: abām kopijām jābūt vienādam lapu skaitam. Ja tās atšķiras, apvienošana saglabā jūsu kopiju tādu, kāda tā ir, un par to paziņo, jo lapu pievienošana vai noņemšana ir cilvēka darbs.

## Iestatīšana

Git vajag divas rindas vienreiz katrā repozitorijā:

```
# .gitattributes
*.pdf merge=cadcraft

# vienreiz katrā datorā
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez git palaidiet `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil un Mercurial izmanto tos pašus trīs failus savā apvienošanas rīka iestatījumā. Uzdevumu fails, kas seko rasējumam (`<name>.markups.json`, skatiet [Atzīmes, kas darbojas](topic:markups-that-act)), tiek apvienots tāpat kā vienkāršs teksts.

## Noteikumi

- Atzīme, kas mainīta tikai vienā pusē, tiek ņemta. Tā pati izmaiņa abās pusēs tiek ņemta vienreiz.
- Viena un tā pati atzīme, mainīta divos veidos, ir **konflikts**: jūsu puse paliek, un pārskatā ir uzskaitītas abas. Atveriet rezultātu un labojiet šo atzīmi ar roku.
- Atzīme, kas pievienota kādā pusē, tiek saglabāta. Atzīme, kas noņemta vienā pusē un nemainīta otrā, tiek noņemta. Noņemta vienā pusē un mainīta otrā: noņemta un par to ziņots.
- Slāņi, kolonnas, ieraksti un piezīmes seko tiem pašiem noteikumiem.
- Noslēgtas privātās piezīmes nekad netiek atvērtas: abu pušu bloki paliek tādi, kādi ir.

Apvienotais fails ir pilnīga jūsu kopijas pārrakstīšana, tāpat kā MarkupCraft pašas saglabāšana. Nekas netiek augšupielādēts; viss notiek jūsu datorā.
