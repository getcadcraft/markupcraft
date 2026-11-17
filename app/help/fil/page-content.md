---
title: Baguhin ang sariling linya, larawan at teksto ng pahina
summary: Ilipat, palakihin o paliitin, palitan ang kulay o burahin ang mismong iginuhit ng PDF, ilipat ang mga punto ng linya, palitan ang larawan, at baguhin ang mga salita ng isang linya ng teksto.
keywords: content ng pahina, base content, i-edit ang pdf, i-edit ang drawing, vector, path, hugis, linya, larawan, image, palitan ang larawan, teksto, salita, font, punto, nodes, ilipat, palakihin, palitan ang kulay, burahin, content tool
from: 471d457e
---

Nasa ibabaw ng sheet ang mga markup. Gumagana ang tool na {{ui:Content}} sa mismong sheet: ang mga linya, larawan at linya ng teksto na iginuhit ng PDF. Hindi kailanman nababago ang PDF mo sa computer na ito: ang mga pag-edit ay bahagi ng kopyang sine-save mo.

## Pumili ng babaguhin

1. Piliin ang {{ui:Content}} sa grupong {{ui:Select}}, o pindutin ang {{key:B}}.
2. Sa ilalim ng {{ui:Pick}} sa {{ui:Properties}}, i-on o i-off ang {{ui:Shapes}}, {{ui:Pictures}} at {{ui:Text}}. Tanging ang mga uring naka-on ang maaaring mapili, kaya maaari mong piliin ang teksto ng abalang drawing nang hindi nakukuha ang mga linya nito.
3. I-click ang isang bagay para piliin ito. Ang Shift+click ay nagdadagdag o nagtatanggal. Para pumili ng ilan, i-drag ang kahon sa ibabaw ng bakanteng papel: ang pag-drag pakanan ay kumukuha ng nasa loob ng kahon nang buo, ang pag-drag pakaliwa ay kumukuha ng anumang nadidikit dito.

Ang hugis sa loob ng clipped na lugar ay napipili lamang kung saan ito nakikita.

## Ilipat, palakihin, palitan ang kulay, burahin

- **Ilipat:** i-drag ang napiling bagay, o pindutin ang mga arrow key (pindutin nang matagal ang Shift para sa mas malalaking hakbang). Pindutin nang matagal ang Shift habang nag-di-drag para ilipat nang diretso pahalang o pataas.
- **Palakihin o paliitin:** i-drag ang isa sa walong parisukat sa paligid ng pinili. Lumalaki o lumiliit ito mula sa kabilang gilid. Pindutin nang matagal ang Shift para mapanatili ang proporsyon.
- **Palitan ang kulay:** para sa mga linya at hugis, itakda ang {{ui:Line color}}, {{ui:Fill color}} at {{ui:Line width (pt)}} sa {{ui:Properties}}.
- **Burahin:** pindutin ang {{key:Delete}}, o piliin ang {{ui:Delete from the page}}.
- **I-undo:** bawat pagbabago ay isang hakbang: binabawi ito ng {{key:Mod+Z}}, ibinabalik ito ng {{key:Mod+Y}}.

Binabawi ng {{ui:Put back as it was}} ang lahat ng pagbabago sa mga napiling bagay nang sabay-sabay; ginagawa ito ng {{ui:Put this page back as it was}} para sa buong pahina.

## Kopyahin, i-cut at i-paste ang content ng pahina

Pumili ng mga linya, larawan o teksto gamit ang tool na {{ui:Content}}, saka:

- {{key:Mod+C}} ay kumokopya, {{key:Mod+X}} ay nag-cut (kinokopya at inaalis sa pahina), {{key:Mod+D}} ay naglalagay ng kopya sa tabi nila.
- {{key:Mod+V}} ay nagpe-paste bilang content ng pahina, sa tabi ng orihinal o kung nasaan ang pointer (gaya ng sinasabi ng [Settings](topic:settings)); {{key:Mod+Shift+V}} ay nagpe-paste sa eksaktong parehong lugar. Mag-paste sa ibang pahina, sa ibang bukas na PDF, o sa ibang MarkupCraft tab ng browser na ito.
- Ang menu ng grupong {{ui:Edit}} at ang right-click menu ay may parehong command.

Pinapanatili ng paste ang linya bilang linya, ang salita bilang salita sa sarili nitong font, at ang larawan bilang larawan. Iisang piraso ito: ilipat, palakihin gamit ang mga parisukat, burahin, o {{key:Mod+Z}} para bawiin. Nagiging bahagi ito ng pahina sa kopyang sine-save mo. Ang huling kinopya mo, markup man o content ng pahina, ang ipe-paste ng {{key:Mod+V}}.

Ang nilalaman ng kopya ay pinuputol sa kahon sa paligid ng pinili: anumang hindi kayang kunin ng MarkupCraft sa kopya (tingnan sa ibaba) at nasa loob ng kahong iyon ay kasama.

## Ilipat ang mga punto ng linya

I-double-click ang linya o curve (o piliin ito at piliin ang {{ui:Edit points}}). Ipinapakita ang mga punto nito bilang parisukat at ang curve handles nito bilang bilog. I-drag ang punto o handle; ang punto ay nagdadala ng mga handle sa tabi nito, kaya nananatili ang hugis ng curve sa paligid nito. Pindutin ang {{key:Esc}}, o i-click sa labas ng linya, kapag tapos ka na.

Walang punto na maida-drag ang mga rectangle: palakihin o paliitin ang mga ito gamit ang mga parisukat sa paligid nila.

## Palitan ang larawan

Piliin ang larawan at piliin ang {{ui:Replace picture…}}, saka pumili ng PNG, JPEG o SVG na file (o PDF: ang unang pahina nito). Pumapalit ang bagong larawan sa puwesto ng luma, pinapanatili ang sarili nitong proporsyon.

## Palitan ang mga salita ng linya ng teksto

I-double-click ang linya ng teksto, i-type ang mga bagong salita sa {{ui:Words}} at pindutin ang {{key:Enter}}. Isinusulat ang mga salita sa sariling font at laki ng linya, at nananatili ang haba ng linya, kaya hindi gumagalaw ang tekstong kasunod nito.

:::note
Karamihan sa mga PDF ay nagdadala lang ng mga letrang ginagamit nila mula sa bawat font. Kapag nag-type ka ng letrang walang kopya sa font ng file, ipi-print ito ng MarkupCraft sa Helvetica at sasabihin ito. Ipinapakita ng {{ui:Properties}} kung aling mga letra ang mayroon ang font sa file.
:::

Isang linya kada pagkakataon ang pagpapalit ng teksto; hindi ito dumadaloy sa susunod na linya.

## Ang iniiwan ng MarkupCraft na gaya ng dati

- **Scanned na pahina** ay iisang larawan: maaari mong ilipat, palakihin, palitan o burahin ang larawan, pero hindi mababago ang nasa loob nito.
- **Encrypted at signed na PDF:** masisira ang signature kapag binago ang pahina, kaya sinasabi ng tool na {{ui:Content}} ito at walang binabago. Gumagana pa rin ang mga markup.
- **Clipping area, mga bagay na hinati sa pagitan ng dalawang bahagi ng content ng pahina, at color blend na pumupuno sa buong lugar** ay nananatili gaya ng dati; sinasabi ng MarkupCraft kung bakit kapag sinubukan mo.
- **Mga salitang nasa standard font na hindi inilalarawan ng PDF** (gaya ng Times font na walang lapad ng letra sa file) ay hindi mababago, dahil hindi mapapanatili ng MarkupCraft ang spacing ng linya. Maaari pa ring ilipat ang linya.

## Ilagay ang mga markup sa pahina

Ang mga linya, rectangle, ellipse, polyline, cloud at pen stroke na iginuhit mo bilang markup ay maaaring maging bahagi ng mismong pahina: piliin ang mga ito at piliin ang {{ui:Put into the page}} sa {{ui:Properties}}. Nananatiling markup ang teksto, stamp, larawan at see-through na kulay.
