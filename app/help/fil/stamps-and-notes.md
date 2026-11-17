---
title: Mga stamp at sticky note
summary: Mag-stamp ng sheet bilang Aprubado, Ibalik at ipasa muli, o sarili mong salita, at mag-iwan ng sticky note na bumubukas bilang pop-up na komento.
keywords: stamp, larawan, picture, image, i-paste ang larawan, screenshot, clipboard, logo, photo stamp, pirma, signature, aprubado, aprubado na may tala, ibalik at ipasa muli, tinanggihan, nasuri, walang bisa, custom stamp, sticky note, note, komento, pop-up
from: 76026792
---

## Mag-stamp ng sheet

1. Piliin ang {{ui:Stamp}} ({{key:S}}).
2. Sa {{ui:Properties}} sa kanan, piliin ang stamp sa ilalim ng {{ui:Stamp}}:
   - Aprubado
   - Aprubado na may tala
   - Ibalik at ipasa muli
   - Tinanggihan
   - Nasuri
   - Walang bisa
   - Custom na teksto… (i-type hanggang 60 karakter sa kahon na lalabas, pagkatapos pindutin ang {{key:Enter}} o mag-click sa ibang lugar)
3. I-click ang sheet kung saan ilalagay ang stamp. O mag-drag ng kahon para piliin ang laki nito.

Resulta: stamp na may frame at nakasulat sa malalaking titik, at pangalawang linya na "Ni <pangalan mo>, <petsa>". Ang stamp na na-click ay ina-adjust sa screen ayon sa zoom mo, at pinananatiling nasa pagitan ng kalahating pulgada at isang pulgada at isang kapat ang taas nito sa naka-print na sheet.

Ang stamp na pinili mo ay mananatiling napili para sa susunod, pati pagkatapos mong buksang muli ang MarkupCraft sa browser na ito.

**Ang kulay ay ayon sa kahulugan:** berde ang mga stamp na Aprubado, orange ang Ibalik at ipasa muli, pula ang Tinanggihan at Walang bisa, asul ang Nasuri, at lila ang custom na stamp. Kung pipili ka ng ibang kulay sa {{ui:Properties}}, mananatili ang kulay na iyon.

### Baguhin ang stamp sa ibang pagkakataon

Piliin ito at pumili ng ibang stamp sa {{ui:Properties}}. Kung awtomatiko pa rin ang kulay nito, magbabago ang kulay ayon sa kahulugan.

Ang pangalan at petsa sa stamp ay ang author ng stamp at ang araw kung kailan ito ginawa. Hindi ito nagbabago kapag ine-edit mo ang stamp, at hindi mapapalitan ang author nito. Para mag-stamp sa pangalan ng iba, siya mismo ang magtatakda ng pangalan niya at mag-stamp.

:::note
Ang petsa sa stamp ay nasa Coordinated Universal Time (UTC). Sa gabi sa Americas, o maaga ng umaga sa Asia at Australia, maaari itong magpakita ng susunod o nakaraang araw kumpara sa orasan mo. Ang oras ng paglikha sa {{ui:Properties}} ay nasa sarili mong time zone.
:::

### Mga stamp na madalas gamitin

Kasama sa tool chest ang stamp tool na "Aprubado na may tala", at maaari mong i-save ang anumang stamp (ang salita at kulay nito) bilang sarili nitong tool. Tingnan ang [Ang tool chest](topic:tool-chest).

Hindi pa nagagawa ang mga stamp na may mga fill-in na field (petsa ng pagtanggap, numero ng proyekto).

## Mag-stamp ng larawan o ng pirma mo

Ang listahan ng stamp sa {{ui:Properties}} ay may dalawa pang pagpipilian sa dulo:

- {{ui:Larawan…}} ay humihingi ng PNG, JPEG o SVG na file sa computer na ito, o pahina ng PDF, gaya ng company seal o logo. Ang malalaking larawan ay pinaliit sa 1600 pixel sa mas mahabang gilid; ang SVG o pahina ng PDF ay nagiging larawan ng ganoong laki.
- {{ui:Ang pirma ko…}} ay nagbubukas ng signature box: pumirma gamit ang mouse, panulat o daliri, at piliin ang {{ui:Gamitin ang pirmang ito}}. Magsisimula muli ang {{ui:Linisin}}. Ang {{ui:Gumamit ng larawan ng signature…}} ay kumukuha ng scan o larawan ng pirma mo sa halip: ginagawang transparent ng MarkupCraft ang puting papel at pinuputol ang larawan sa tinta (para sa PNG, magtatanong muna ito).

Pagkatapos, i-click ang sheet para ilagay ito (larawang 3 in ang lapad, pirmang 2 in ang lapad), o mag-drag ng kahon para magkasya ito sa loob; pinapanatili ang proporsyon. Baguhin ang laki nito gamit ang mga handle gaya ng ibang markup ({{key:Shift}} ang nagpapanatili ng proporsyon).

Ang huling larawan ay nananatili sa browser na ito, kaya handa na sa susunod; ang {{ui:Pumili ng ibang larawan…}} ang pumapalit dito. Bawat pirmang iginuhit o ini-load mo ay naka-save sa {{ui:Mga signature mo}} (hanggang walo, pinakabago muna): i-click ang isa para gamitin ito, o ang × para alisin. Tingnan ang [Ano ang nananatili sa browser na ito](topic:browser-storage).

Sa naka-save na PDF, ang larawan ay stamp na komento na nagpapakita ng imahe, kaya makikita at mai-print ito ng anumang PDF viewer. Ang pirmang iginuhit dito ay larawan ng pirma mo, hindi certified digital signature.

## I-paste ang larawan mula sa clipboard

Kopyahin ang larawan sa ibang program, o kumuha ng screenshot papunta sa clipboard, pagkatapos pindutin ang {{key:Mod+V}} sa ibabaw ng sheet. Lalapag ito kung nasaan ang pointer, hanggang 3 in ang lapad o taas, na pinapanatili ang proporsyon nito, bilang markup na larawan na maaari mong ilipat at baguhin ang laki. Sa naka-save na PDF, ito ay stamp na komento na nagpapakita ng imahe, gaya ng mga larawan sa itaas.

Ang {{ui:Iba pa}} › {{ui:I-paste ang larawan}} sa pangkat na {{ui:I-edit}} ay ginagawa rin ito mula sa menu; maaaring magtanong muna ang browser. Kapag walang larawan ang clipboard, ang {{key:Mod+V}} ay nagpe-paste pa rin ng mga kinopyang markup gaya ng dati.

## Maglagay ng larawan mula sa file

Piliin ang {{ui:Iba pa}} › {{ui:Maglagay ng larawan mula sa file…}} sa pangkat na {{ui:I-edit}} (o {{ui:Maglagay ng larawan dito…}} sa right-click menu), at pumili ng PNG, JPEG o SVG na file, o PDF (ang PDF na may ilang pahina ay magtatanong kung alin). Maaari mo ring i-drag ang PNG, JPEG o SVG na file papunta sa sheet: lalapag ito kung saan mo ito i-drop. Ang larawan ay markup, hanggang 3 in ang lapad o taas: ilipat at baguhin ang laki nito gaya ng ibang markup.

Para maging bahagi ng pahina ang larawan, lagyan ng tsek ang {{ui:I-flatten sa pahina kapag na-save}} sa {{ui:Properties}}. Tingnan ang [I-save ang flattened na kopya](topic:flatten).

## Gumawa ng stamp mula sa pinili

Piliin ang mga markup (o nilalaman ng pahina gamit ang tool na {{ui:Nilalaman}}) at piliin ang {{ui:I-save ang pinili bilang stamp…}} sa {{ui:Iba pa}}, sa right-click menu, o ang {{ui:I-save bilang stamp…}} sa {{ui:Properties}}. Bigyan ito ng pangalan. Mapupunta ito sa tool chest: i-click ito doon, pagkatapos i-click ang kahit anong sheet para ilagay ang lahat ng napili mo, magkakasama, nakasentro kung saan ka nag-click. Tingnan ang [Ang tool chest](topic:tool-chest).

## Mga sticky note

1. Piliin ang {{ui:Note}} ({{key:N}}).
2. I-click kung saan ilalagay ang note. Lalabas ang maliit na note icon na may kahon sa tabi nito.
3. I-type ang note. Mag-click sa labas o pindutin ang {{key:Mod+Enter}} para itago ito; itatapon ito ng {{key:Esc}}.

Hindi tulad ng text at callout, nananatili ang note kahit walang na-type, kaya maaari mong ilagay na ang icon at isulat mamaya.

- Ang mga salita ng note ay nasa field nitong {{ui:Note}} sa {{ui:Properties}}. I-double-click ang icon (o piliin ito at pindutin ang {{key:Enter}}) para i-edit ang mga ito sa sheet.
- Sa sheet, icon lang ang makikita mo. Ipinapakita ng ibang PDF viewer ang karaniwang sticky note na bumubukas sa teksto kapag na-click.
- Baguhin ang kulay ng icon gamit ang {{ui:Kulay}} sa {{ui:Properties}}.

Para sa palitan ng usapan, gamitin ang reply thread ng alinmang markup: tingnan ang [Mga status at sagot](topic:statuses-and-replies).
