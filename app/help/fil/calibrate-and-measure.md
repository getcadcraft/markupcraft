---
title: I-calibrate ang sheet at sukatin
summary: Itakda ang scale ng bawat sheet mula sa preset o kilalang dimension, pagkatapos sukatin ang haba, lawak na may perimeter, at bilang.
keywords: i-calibrate, scale, set scale, sukatin, haba, distansya, dimension, lawak, square feet, perimeter, bilang, takeoff, dami, ruler, aritmetika, kalkulasyon, plus, fraction
from: 49a25c6d
---

Kailangang malaman ng haba at lawak ang scale ng sheet. Pinananatili ng MarkupCraft ang scale **kada sheet**: i-calibrate ang bawat sheet na sinusukat mo. Hindi kailangan ng scale ang bilang.

Ipinapakita ng status bar ang scale ng kasalukuyang sheet, o "Hindi pa naka-calibrate".

## Pumili ng scale mula sa listahan

Gamitin ito kapag full size ang PDF (isang 24 × 36 na sheet na nagpi-print sa 24 × 36) at nakasaad sa drawing ang scale nito.

1. I-click ang scale button sa status bar ("Hindi pa naka-calibrate"). Bubukas ang kahon na "Scale ng sheet".
2. Sa ilalim ng {{ui:Scale}}, piliin ang scale: architectural (1/32" = 1'-0" hanggang 3" = 1'-0"), engineering (1" = 10' hanggang 1" = 100') o metric (1:1 hanggang 1:1000).
3. Piliin ang {{ui:Itakda ang scale}}.

Resulta: ipinapakita ng status bar ang scale, halimbawa `1/4" = 1'-0"`. Ang architectural scale ay nagpapakita ng haba sa feet at inches, ang engineering sa decimal feet, ang metric hanggang 1:50 sa millimeters at mula 1:100 sa meters.

:::warning
Tama lang ang preset kung hindi pa pinaliit ang PDF. Ang half-size na set, o sheet na "fit to page" nang gawin, ay magkakamali ang sukat gamit ang preset. I-calibrate mula sa kilalang dimension, at i-check ang isang dimension sa alinmang paraan.
:::

## I-calibrate mula sa kilalang dimension

Gamitin ito para sa half-size na set, na-scan na sheet, detalye sa kakaibang scale, o pang-check ng preset.

1. Maghanap ng mahabang dimension na pinagkakatiwalaan mo, o graphic scale bar.
2. Piliin ang {{ui:I-calibrate}} sa {{ui:Sukatin}} group (o piliin ang {{ui:Pumili ng dalawang punto}} sa kahong "Scale ng sheet").
3. I-click ang isang dulo ng dimension, saka ang kabila. (O i-drag mula sa isang dulo papunta sa kabila.) Mag-zoom in muna para sa katumpakan; pinapanatili ng {{key:Shift}} ang linya sa 45° na hakbang.
4. Sinasabi ng kahon kung gaano kalayo ang mga punto sa papel at nagtatanong ng "Gaano sila talaga kalayo?". I-type ang {{ui:Totoong distansya}}, halimbawa `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`.
5. Piliin kung paano ipapakita ang haba sa ilalim ng {{ui:Ipakita ang haba sa}}: {{ui:Talampakan at pulgada}}, {{ui:Decimal na feet}}, {{ui:Inches}}, {{ui:Meters}} o {{ui:Millimeters}}.
6. Piliin ang {{ui:Itakda ang scale}}.

Resulta: ipinapakita ng status bar ang "Naka-calibrate: 24'-0" over 1.00 in" (ang totoong haba at ang haba sa papel), at bumabalik ang tool na balak mong gamitin sa pagsukat. Nasa [Units and lengths](topic:units-and-scales) ang bawat paraan ng pag-type ng haba.

Ang totoong distansya ay maaari ring maliit na kalkulasyon: `12'6"+3/4"`, `(24'-0")/3` o `2*450mm`. Gamitin ang `+ - * /` at mga bracket; ang numerong walang unit ay bibilangin sa unit sa ilalim ng {{ui:Ipakita ang haba sa}} (feet para sa {{ui:Talampakan at pulgada}}). Ang resulta ang gagamitin ng {{ui:Itakda ang scale}}.

Kung hindi mabasa ng MarkupCraft ang tinype mo, sasabihin ito ng kahon: 'Hindi iyan haba na naiintindihan ng MarkupCraft. Subukan ang 24'-0", 12' 6 1/2", 7.2 m o 900 mm.' Ang kalkulasyong hindi nito maisagawa ay magsasabi kung bakit at saan, halimbawa "Hindi nakasara ang bracket (character 5)."

## Sukatin ang haba

1. Piliin ang {{ui:Haba}} ({{key:M}}).
2. I-click ang simula, saka ang dulo. O i-drag mula simula papuntang dulo. Pinapanatili ng {{key:Shift}} ito sa 45° na hakbang.

Resulta: linya ng dimension na may tick at nakasulat na haba. Inuulit ito ng status bar ("Haba: 12'-6 1/2" (1/4" = 1'-0")."), at ipinapakita ito ng {{ui:Properties}} sa ilalim ng {{ui:Haba}}. Ang feet at inches ay niro-round sa pinakamalapit na 1/16".

Kung wala pang scale ang sheet, ang pagpili ng {{ui:Haba}} ay lilipat sa {{ui:I-calibrate}} at ipapaliwanag ng status bar: "I-calibrate muna ang sheet na ito: pumili ng dalawang punto na may kilalang distansya, o piliin ang scale nito. Saka sukatin." Pagkatapos mong itakda ang scale, babalik ang {{ui:Haba}}.

## Gumuhit sa scale

Sa naka-calibrate na sheet, maaari kang mag-type ng totoong haba habang gumuguhit ng {{ui:Linya}}, {{ui:Arrow}}, {{ui:Haba}}, {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}}, {{ui:Lawak}} o isang space:

1. I-click ang unang punto.
2. Ituro ang direksyon ng susunod na segment at i-type ang haba nito, gaya ng `16` (sa unit ng sheet), `12'6"` o `3.5 m`. Bubukas ang kahon sa tabi ng pointer habang nagta-type ka.
3. Pindutin ang {{key:Enter}}. Mapupunta ang punto sa ganoong layo, sa direksyon ng pointer.

Para itakda nang eksakto ang direksyon, idagdag ang `<` at anggulo sa degrees: `8 < 90` ay 8 feet nang diretso pataas, `4<0` pakanan, `10 < 225` pababa at pakaliwa, ayon sa nakikita sa sheet (kasama ang mga pahinang naka-turn). Patuloy na mag-type ng haba para sa susunod na mga sulok, at tapusin ang hugis gaya ng dati. Isinasara ng {{key:Esc}} ang kahon nang hindi naglalagay ng punto.

## Sukatin ang anggulo

1. Piliin ang {{ui:Anggulo}} ({{key:X}}).
2. I-click ang dulo ng isang braso, saka ang sulok, saka ang dulo ng kabilang braso.

Resulta: ang dalawang braso, maliit na arko sa sulok, at ang anggulo sa degrees, hanggang isang decimal (0° hanggang 180°). Hindi kailangan ng scale ang anggulo. Ipinapakita ito ng {{ui:Properties}} sa ilalim ng {{ui:Anggulo}}, at dala ito ng listahan, CSV at BCF.

Ang {{ui:Arko}} ({{key:O}}) sa naka-calibrate na sheet ay nagpapakita rin ng haba nito sa kahabaan ng kurba sa {{ui:Properties}}.

## Sukatin ang lawak at perimeter nito

1. Piliin ang {{ui:Lawak}} ({{key:Q}}).
2. I-click ang bawat sulok ng kuwarto o rehiyon.
3. Tapusin sa double-click, {{key:Enter}} o right-click (double-tap sa touch). Inaalis ng {{key:Backspace}} ang huling sulok.

Resulta: naka-shade na outline na may lawak, at "P" na may perimeter sa gitna, halimbawa "128.00 sq ft" at "P 48'-0"". Ang feet scale ay nagbibigay ng square feet, ang inches ng square inches, ang meters ng square meters, ang millimeters ng square millimeters. Kailangan ng lawak ng hindi bababa sa tatlong sulok.

### Cut-outs

Para iwan ang column, shaft o courtyard, piliin ang area at piliin ang {{ui:Magdagdag ng cut-out}} sa {{ui:Properties}}. I-click ang mga sulok ng cut-out sa loob ng area at tapusin gaya ng sa area. Nananatiling bukas ang cut-out (walang shade), ibinabawas ang lawak nito, at idinadagdag ang mga gilid nito sa perimeter: ang kuwartong 16' × 8' na may cut-out na 4' × 4' ay nagbabasa ng "112.00 sq ft" at "P 64'-0"". Magdagdag ng kasing dami ng kailangan; hindi sila maaaring mag-overlap o tumawid sa outline ng area. Inaalis ng {{ui:Alisin ang cut-out}} silang lahat, at ina-undo ng {{key:Mod+Z}} ang isa.

## Magbilang ng mga bagay

1. Piliin ang {{ui:Bilang}} ({{key:U}}).
2. Sa {{ui:Properties}}, i-type ang {{ui:Pangalan ng grupo}}, halimbawa "Floor drains". (Nananatili ito para sa susunod.)
3. I-click ang bawat item sa sheet.

Resulta: bawat click ay nagdaragdag ng may-numerong tuldok, ang unang tuldok ay may tag na gaya ng "Floor drains: 7", at pinapanatili ng status bar ang kabuuang bilang.

- **Magsimula ng ibang group:** pindutin ang {{key:Esc}} nang isang beses (inaalis nito ang selection), palitan ang {{ui:Pangalan ng grupo}}, at mag-click ulit.
- **Magdagdag sa umiiral na group:** piliin muna ang group, saka piliin ang {{ui:Bilang}} at mag-click.
- **Mag-alis ng marka:** kapag napili ang group, pindutin nang hawak ang {{key:Shift}} at i-click ang tuldok. Ang pag-alis ng huling tuldok ay nag-aalis ng group. Sa touch screen na walang keyboard, gamitin ang {{key:Mod+Z}} o {{ui:I-undo}} sa halip.
- **Palitan ang pangalan ng group:** piliin ito at i-edit ang {{ui:Pangalan ng grupo}} sa {{ui:Properties}}.

Kabilang ang count group sa isang sheet. Ang mga bilang sa maraming sheet ay lalabas bilang magkakahiwalay na group sa listahan ng markup.

## Palitan o alisin ang scale

I-click ang scale button sa status bar. Ipinapakita ng kahon ang kasalukuyang scale; pumili ng iba, piliin ang {{ui:Pumili ng dalawang punto}}, o piliin ang {{ui:Alisin ang scale}}.

Ang mga haba at lawak na nakaguhit na ay **muling sinusukat** gamit ang bagong scale agad. Ibinabalik ng undo ang lumang scale.

## Saan napupunta ang mga numero

- Ipinapakita ng {{ui:Properties}} ang mga value ng napiling sukat.
- Inililista ng {{ui:Mga markup}} tab ang bawat value, at may column na "Measurement" ang CSV nito. Tingnan ang [The markups list](topic:markups-list-and-export).
- Pinapanatili ng nai-save na PDF ang scale sa pahina at isinusulat ang haba at lawak bilang measurement comment, para makita ng iba pang PDF program na nakakaintindi ng mga sukat. Tingnan ang [What is saved in the PDF](topic:what-the-pdf-keeps).

Para sa buong quantity takeoff na may item, assembly at presyo, gamitin ang TakeoffCraft: sumusukat ang MarkupCraft para sa pagre-review, hindi para sa estimating.
