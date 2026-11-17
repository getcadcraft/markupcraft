---
title: I-markup ang isang sheet
summary: Gumuhit ng revision cloud, callout, text box, arrow, hugis, pen stroke at highlight, at itakda ang kulay at linya bago o pagkatapos.
keywords: markup, redline, cloud, revision cloud, callout, leader, text box, arrow, line, rectangle, ellipse, circle, polyline, polygon, pen, freehand, ink, highlighter, color, line width
from: 9d6de0ac
---

Pareho ang paraan ng bawat tool: piliin ito, gumuhit sa sheet, at mapipili ang bagong markup para makita mo ito sa {{ui:Properties}}. Mananatiling aktibo ang tool para sa susunod. Laging sinasabi ng status bar ang inaasahan ng tool na susunod.

:::touch
Sa touch screen, gamitin ang isang daliri para gumuhit. Ang pangalawang daliri ay kinakansela ang sinimulan ng una at nagpi-pinch o nagpa-pan na lang, kaya hindi ka aksidenteng makakagawa ng marka habang nag-zu-zoom. Higit pa sa [Review sa iPad o touch screen](topic:review-on-a-tablet).
:::

## Revision cloud

**Box cloud:** piliin ang {{ui:Cloud}} ({{key:C}}) at i-drag ang isang box. Hawakan ang {{key:Shift}} para maging parisukat ito.

**Free cloud** sa paligid ng kakaibang hugis:

1. Piliin ang {{ui:Free cloud}} ({{key:Shift+C}}).
2. I-click ang bawat sulok ng lugar.
3. Tapusin sa double-click, {{key:Enter}} o right-click. Sa touch, double-tap.

Habang nag-cl-click ka ng mga punto, inaalis ng {{key:Backspace}} ang huling punto at kinakansela ng {{key:Esc}} ang buong hugis. Hawakan ang {{key:Shift}} para manatili sa multiple ng 45° ang susunod na gilid. Kailangan ng free cloud ng hindi bababa sa tatlong punto.

Laging umuumbok palabas ang mga scallop, at ang laki nila ay sumusunod sa kapal ng linya: mas makapal na linya, mas malalaking arko.

## Callout

Ang callout ay text box na may leader na tumuturo sa isang bagay.

1. Piliin ang {{ui:Callout}} ({{key:K}}).
2. Pindutin ang puntong gusto mong tawagan ng pansin at i-drag papunta sa lugar ng teksto. Bitawan.
   Kung i-click mo lang nang walang drag, ilalagay ang box pataas at pakanan ng punto.
3. I-type ang teksto. Lumalaki pababa ang box habang bumabalot ang mga linya.
4. I-click kahit saan sa labas ng box, o pindutin ang {{key:Mod+Enter}}, para tapusin. Itinatapon ng {{key:Esc}} ang callout.

Kapag tinapos mo nang walang na-type, walang idinadagdag na callout ("Walang na-type, kaya walang callout na idinagdag.").

Pagkatapos iguhit, piliin ito para ilipat ang box, i-drag ang dulo ng leader o ang liko nito (ang dalawang diamond handle), o i-resize ang box.

## Text box

1. Piliin ang {{ui:Teksto}} ({{key:T}}).
2. I-click kung saan magsisimula ang teksto (makakakuha ka ng box na may makatwirang lapad), o i-drag ang box sa laki na gusto mo.
3. I-type, saka i-click sa labas o pindutin ang {{key:Mod+Enter}}.

Walang border ang teksto bilang default. Para magkaroon nito, itaas ang {{ui:Kapal ng linya}} sa {{ui:Properties}}. Para bigyan ito ng background, lagyan ng tsek ang {{ui:Fill}}.

Para baguhin ang mga salita mamaya: kapag nakabukas ang {{ui:Piliin}}, i-double-click ang teksto, o piliin ito at pindutin ang {{key:Enter}}, o piliin ang {{ui:I-edit sa sheet}} sa {{ui:Properties}}. Maaari mo rin itong i-edit sa kahon na {{ui:Teksto}} sa {{ui:Properties}}.

## Arrow at linya

1. Piliin ang {{ui:Arrow}} ({{key:A}}) o {{ui:Linya}} ({{key:L}}).
2. I-drag mula sa simula papuntang dulo. O i-click ang simula, bitawan, at i-click ang dulo.
3. Hawakan ang {{key:Shift}} para manatili sa multiple ng 45°.

Nasa dulo kung saan ka tumapos ang arrowhead.

## Rectangle, ellipse, polyline at polygon

- {{ui:Rectangle}} ({{key:R}}) at {{ui:Ellipse}} ({{key:E}}): i-drag ang isang box. Ginagawang parisukat o bilog ng {{key:Shift}}. Ang click na walang drag ay walang iginuguhit, at sinasabi ng status bar na mag-drag.
- {{ui:Polyline}} ({{key:Y}}) at {{ui:Polygon}} ({{key:G}}): i-click ang mga punto; tapusin sa double-click, {{key:Enter}} o right-click (double-tap sa touch). Inaalis ng {{key:Backspace}} ang huling punto. Awtomatikong nagsasara ang polygon at kailangan nito ng tatlong punto; kailangan ng polyline ng dalawa.

## Pen at highlighter

- {{ui:Pen}} ({{key:P}}): i-drag para gumuhit nang malaya. Bahagyang pinapakinis ang stroke pagkabitaw.
- {{ui:Highlight}} ({{key:I}}): pareho, pero may malapad at transparent na dilaw na stroke na nagkukulay sa drawing sa ilalim nito sa halip na tabunan ito.
- Hawakan ang {{key:Shift}} habang gumuguhit para makakuha ng iisang tuwid na stroke mula sa pinagsimulan mo.

Ang highlighter ay freehand na stroke. Hindi ito nakakabit sa teksto sa PDF.

## Kulay, linya at fill

Dalawang paraan:

- **Bago gumuhit:** piliin ang tool. Kapag walang napili, ipinapakita ng {{ui:Properties}} ang mga setting para sa "<tool> tool": {{ui:Kulay}}, {{ui:Kapal ng linya}} (sa points), {{ui:Fill}} at {{ui:Opacity ng fill}} para sa saradong hugis, {{ui:Opacity}}, at {{ui:Laki ng teksto}} para sa teksto. Ginagamit ng bawat bagong markup ng ganoong uri ang mga ito, at inaalala ng MarkupCraft ang mga ito sa browser na ito.
- **Pagkatapos gumuhit:** pumili ng isa o higit pang markup at baguhin ang parehong kontrol sa ilalim ng "Style". Kapag maraming napili, mapupunta ang pagbabago sa lahat sa isang hakbang.

Ang mga default: pulang markup, dilaw na highlighter, asul na sukat, orange na count, at mga stamp na kulay ayon sa kahulugan.

Ang mga itsurang madalas mong gamitin ay nararapat sa tool chest: tingnan ang [Ang tool chest](topic:tool-chest).

## Subject at comment

Bawat markup ay may {{ui:Subject}} (maikling label gaya ng "Cloud" o "RFI", na nakikita sa listahan ng markup at sa ibang PDF viewer) at {{ui:Comment}} (mas mahabang note). Punan ang mga ito sa {{ui:Properties}}. Para sa usapan tungkol sa markup, gumamit ng reply: tingnan ang [Status at reply](topic:statuses-and-replies).

## Susunod

- [Piliin, ilipat at baguhin ang markup](topic:select-and-edit)
- [Stamp at note](topic:stamps-and-notes)
- [Bawat uri ng markup](topic:markup-types)
