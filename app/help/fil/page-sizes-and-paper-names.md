---
title: Mga laki ng pahina at pangalan ng papel
summary: Tingnan ang laki ng bawat pahina ng PDF sa millimetres at inches at ang pangalan ng papel nito (A, B at C series, ANSI, ARCH), at pagpangkatin ang halo-halong set ayon sa laki para mahanap ang mga kakaibang pahina.
keywords: page size, paper size, paper name, a0, a1, a2, a3, a4, b series, c series, ansi, arch, architectural, mm, inches, custom size, ayon sa laki, kakaibang laki, halo-halong set, suriin ang pdf, client, isyu, mediabox, cropbox, rotation
from: 08e1354f
---

Bago ipadala ang set sa client, tiyaking tama ang laki ng bawat sheet. Binabasa ng {{ui:MarkupCraft}} ang laki ng bawat pahina mula mismo sa PDF at pinangalanan ang papel.

## Ang gagawin mo

Tingnan ang laki ng isang sheet, pagkatapos pagpangkatin ang buong set ayon sa laki.

## Mga hakbang

1. Buksan ang mga PDF ({{ui:Buksan}}), pagkatapos pindutin ang {{key:Esc}} hanggang walang napili at naka-on ang {{ui:Piliin}}.
2. Tingnan ang {{ui:Properties}}. Ang {{ui:Papel}} ang nagsasabi ng pangalan at direksyon, halimbawa "A4, portrait". Ang {{ui:Laki}} ang nagbibigay ng millimetres at inches.
3. Bawat hilera ng listahan ng {{ui:Sheets}} ay may linya ng laki sa ilalim ng pangalan ng sheet.
4. Piliin ang {{ui:Ayon sa laki}} sa header ng {{ui:Sheets}}. Pinagsasama ng listahan ang mga sheet sa ilalim ng isang heading bawat laki, ang pinakamalaking grupo muna. Ang laki na may iilang sheet lamang ay minarkahang kakaiba.
5. Piliin ulit ang {{ui:Ayon sa laki}} para bumalik sa sariling ayos ng set.

Resulta: Madaling makita ang pahinang iba ang laki sa iba bago mo ipadala ang set.

## Paano pinipili ang pangalan

- Ang laki ay galing sa box ng pahina sa PDF, kasama ang rotation, kaya ang landscape na A3 ay A3 pa rin.
- Ang mga pangalan ay ang A at B series (ISO 216), ang C series (ISO 269), ANSI A hanggang E at ARCH A hanggang E.
- Ang pahinang nasa loob ng 2 mm ng isang pangalang laki ay kukuha ng pangalang iyon. Ang ibang pahina ay sasabihing {{ui:custom}} at sasabihin ng {{ui:Pinakamalapit na pangalan ng laki}} kung aling laki ang pinakamalapit at gaano ito kalayo.
- Ang inches ay galing sa totoong laki ng pahina, kaya ang A4 na pahina ay 8.26 by 11.69 in.

## Sa mga file na sine-save mo

Ang summary workbook ({{ui:Listahan ng markups}}, pagkatapos ang spreadsheet) ay may column na {{ui:Laki ng papel}} sa sheet na {{ui:Ayon sa sheet}} at isang worksheet na {{ui:Mga laki ng pahina}}. Ang PDF report ay may linyang "Mga laki ng pahina" na may bilang ng bawat laki.

:::note
Ang mga halaga ng ANSI at ARCH sa inches ay tinype mula sa mga nailathalang talahanayan at hindi pa naihahambing sa mga naka-print na pamantayan. Ituring na bagay na dapat mong suriin mismo ang isang "custom" na pahina na malapit sa isa sa mga ito.
:::
