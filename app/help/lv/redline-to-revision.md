---
title: Nosūtīt atzīmes projektētājam kā redline
summary: Ierakstiet atvērtās atzīmes kā redline failu tam, kas zīmē izmaiņas, tad ielādējiet viņa atbildes, lai katra atzīme rādītu Pieņemts vai Noraidīts.
keywords: redline, pārskatīšana, projektētājs, pieņemt, noraidīt, atbildes, cc-redline, pārskatīšanas mākonis, lietot atzīmes
from: cb099d04
---

Pārskatīšana ir tikai puse darba; rasējums joprojām ir jāmaina. Redline fails nes katru atvērto atzīmi projektētājam, un projektētāja atbildes atgriež rezultātu.

## Nosūtīt

1. Atveriet cilni {{ui:Uzdevumi}} un atveriet {{ui:Pārskatīšanas atzīmes uz versiju}}.
2. Ierakstiet versiju, pret kuru atzīmes ir (piemēram, B).
3. Izvēlieties {{ui:Eksportēt redline failu}}.

Jūs saņemsiet `.redline.json` failu ar vienu vienumu katrai atzīmei ar statusu Atvērts: tās lapu, vietu (kā lapas daļas, lai pārzīmējums citā izmērā joprojām sakristu, un punktos), tās tekstu, autoru un pavedienu, kā arī tās uzdevumu, ja tāds ir. Tikai lasāmi komentāri no citām programmām, attēli un leģendas netiek iekļauti.

## Atbildes

Projektēšanas puse katram vienumam atbild Pieņemts, Noraidīts vai Pabeigts, ar piezīmi `.redline-answers.json` failā. Izvēlieties {{ui:Ielādēt atbilžu failu…}} un atlasiet to: katrai atzīmei tiek piešķirts šis statuss un projektētāja piezīme tās pavedienā, un uzdevums, kura atzīme pieņemta vai pabeigta, tiek pabeigts. Viens atsaukšanas solis atceļ visas atbildes.

Faila formāts ir aprakstīts `docs/REDLINE-FORMAT.md`. CadCraft puse (pakotnes nolasīšana, katra vienuma pieņemšana vai noraidīšana, pārskatīšanas mākoņi un žurnāls) tiek izstrādāta atsevišķi.
