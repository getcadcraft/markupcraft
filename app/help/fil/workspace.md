---
title: Pasyal sa screen
summary: Ang toolbar, ang listahan ng sheet, ang lugar ng sheet, ang limang panel sa kanan at ang status bar, ayon sa mga pangalang nakikita sa screen.
keywords: screen, layout, toolbar, panel, sidebar, thumbnail, properties, status bar, interface, full screen, tema, dark mode, madilim na mode
from: 18d82de6
---

Pinupuno ng MarkupCraft ang window ng browser. Mula sa itaas pababa at mula kaliwa pakanan:

## Ang bar sa pinakatuktok

Ang manipis na bar sa ibabaw ng lahat ay bahagi ng pamilya ng CadCraft, hindi mismo ng MarkupCraft. Mayroon itong:

- ang pangalan ng app at kung aling bersyon ang tumatakbo,
- {{ui:About MarkupCraft}}, na nagbubukas ng pahina ng app sa website,
- {{ui:Help}}, na nagbubukas ng help na ito sa side panel (o pindutin ang {{key:F1}}),
- {{ui:Save for offline}}, na nagtatago ng MarkupCraft, ng PDF reader at writer nito, at ng help na ito sa browser na ito para mabuksan kahit walang koneksyon; pagkatapos ay sinasabi nitong "Offline ready" (tingnan ang [Pagtatrabaho offline](common:offline)),
- ang button ng mode ng screen ({{ui:Full screen}}), at
- {{ui:Settings}} (o {{key:Mod+,}}), na may tab na {{ui:MarkupCraft}} para sa sarili ng app na ito at {{ui:General}} para sa mga settings na ibinabahagi ng bawat app ng CadCraft (tingnan ang [Mga setting ng MarkupCraft](topic:settings)), at
- {{ui:Paper}} at {{ui:Model}}, ang maliwanag at madilim na tema. Sa {{ui:Model}}, iginuguhit ang mga sheet na maliwanag sa madilim na background; pinapanatili ng mga markup mo ang sarili nilang kulay.

Dumadaan ang button ng mode ng screen, o ang {{key:Ctrl+Shift+F}}, sa tatlong mode: normal, full screen, at full screen na nakatago ang mga bar. Kapag nakatago ang mga bar, ilapit ang pointer sa itaas na gilid ng screen (o i-tap doon) at babalik sila. Ginagamit ng shortcut na ito ang Control key sa bawat computer, kasama ang Mac.

:::note
Sa full screen, pinalalabas din ng {{key:Esc}} ang browser sa full screen. Kung kakanselahin mo lang ang isang drawing, pindutin muli ang {{key:Ctrl+Shift+F}} para bumalik sa full screen.
:::

## Ang toolbar

Sa ilalim ng top bar, pinagpangkat at may label ang mga tool:

| Grupo | Mga button |
|---|---|
| File | {{ui:Open}}, {{ui:Save}}, {{ui:Close}} |
| Piliin | {{ui:Select}}, {{ui:Pan}} |
| Guhit | {{ui:Pen}}, {{ui:Highlight}}, {{ui:Line}}, {{ui:Arrow}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Polyline}}, {{ui:Polygon}} |
| {{ui:Revise}} | {{ui:Cloud}}, {{ui:Free cloud}} |
| {{ui:Annotate}} | {{ui:Callout}}, {{ui:Text}}, {{ui:Note}}, {{ui:Stamp}} |
| Sukat | {{ui:Calibrate}}, {{ui:Length}}, {{ui:Area}}, {{ui:Count}} |
| I-edit | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, at {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |

Mukhang pinindot ang tool na ginagamit mo. Ilapit ang pointer sa isang button para makita ang key nito (halimbawa "Rectangle (R)"); inililista ng menu na {{ui:More}} ang key ng bawat command sa tabi nito. Naka-dim ang mga button na hindi pa kayang gumana ngayon: {{ui:Copy}} hanggang pumili ka ng markup, {{ui:Paste}} hanggang may nakopya. Ang maliit na tuldok pagkatapos ng {{ui:Save}} ay nangangahulugang may ilang markup na hindi pa na-save. Kumpleto ang listahan ng key sa [Keyboard at mouse](topic:keyboard).

Nananatiling aktibo ang tool pagkatapos mong gumuhit, kaya puwede kang gumuhit ng ilang cloud nang sunod-sunod. Pindutin ang {{key:Esc}} (dalawang beses kung napipili pa ang bagong markup) o {{key:V}} para bumalik sa {{ui:Select}}.

## Ang listahan ng sheet (kaliwa)

{{ui:Sheets}} ang naglilista ng bawat pahina ng bawat bukas na PDF. Ipinapakita ng bawat hilera ang maliit na larawan ng sheet, ang pangalan nito, ang numero ng sheet o file at pahina nito, at kung ilang markup ang mayroon ito. Ang bilang sa tabi ng heading ay ang bilang ng sheet.

- I-click ang isang hilera para ipakita ang sheet na iyon.
- I-type sa {{ui:Search sheets}} para mag-filter ayon sa pangalan ng sheet, numero ng sheet o pangalan ng file. Pindutin ang {{key:Enter}} para buksan ang unang tugma.

Nagmumula ang mga pangalan ng sheet sa PDF kapag mayroon ito. Tingnan ang [Buksan ang set ng plano at lumipat sa pagitan ng mga sheet](topic:open-a-plan-set).

## Ang lugar ng sheet (gitna)

Ang sheet na ginagawa mo. Bago may anumang bukas, nakasulat ang "Buksan ang set ng plano" kasama ang button na {{ui:Open PDFs}}. I-drop ang mga PDF kahit saan dito para buksan ang mga ito.

Sa ilalim ng sheet, may makitid na bar na may:

- ang mga arrow ng nakaraan at susunod na sheet, at "3 of 12: A-101 — Floor plan" (ituro ang pointer dito para makita ang file at pahina),
- zoom out, ang zoom box (mag-type ng porsyento at pindutin ang {{key:Enter}}; ang 100% ay totoong laki sa karaniwang screen), zoom in,
- {{ui:Fit page}} at {{ui:Fit width}}.

Naaalala ng bawat sheet ang sarili nitong zoom habang bukas ang set.

Kapag inihahambing mo ang dalawang sheet, lilitaw dito ang legend: "Sa lumang sheet lang", "Sa bagong sheet lang" at "Sa parehong sheet". Tingnan ang [Ihambing ang dalawang revision](topic:compare-revisions).

## Ang mga panel (kanan)

Limang tab:

| Tab | Ipinapakita |
|---|---|
| {{ui:Properties}} | Ang napiling markup: may-akda, mga petsa, sinukat na halaga, status, paksa, teksto, komento, istilo, mga sagot at punch item nito. Kapag bukas ang drawing tool at walang napili, ang mga setting na gagamitin ng mga bagong markup. Kapag walang napili at bukas ang {{ui:Select}}, ang sheet: numero, pamagat, saan binasa ang pangalan, laki ng papel, scale, at {{ui:Rename sheet}}. |
| {{ui:Markups}} | Bawat markup sa bukas na set, may mga filter, at mga export na {{ui:CSV}} at {{ui:BCF}}. Tingnan ang [Ang listahan ng markup](topic:markups-list-and-export). |
| {{ui:Punch list}} | Mga numerong punch item na may nakatalaga, due date at status. Tingnan ang [Gumawa ng punch list](topic:punch-list). |
| {{ui:Tools}} | Ang tool chest: mga na-save at may istilong tool. Tingnan ang [Ang tool chest](topic:tool-chest). |
| {{ui:Compare}} | I-overlay ang dalawang sheet. Tingnan ang [Ihambing ang dalawang revision](topic:compare-revisions). |

## Ang status bar (ibaba)

- Sa kaliwa, kung nasaan ang pointer sa sheet, sa pulgada (o milimetro, sa [Settings](topic:settings)) sa papel.
- Sa gitna, mga mensahe: ano ang inaasahan ng tool sunod, ano ang kakasave lang, bakit may tinanggihan. **Basahin ito kapag may hindi nangyayari.**
- Ang button ng scale ng sheet ("Hindi pa naka-calibrate", o ang scale). I-click ito para itakda ang scale. Tingnan ang [I-calibrate ang sheet at sukatin](topic:calibrate-and-measure).
- Ang pangalan mo ("Itakda ang pangalan mo" hanggang magbigay ka ng isa). I-click ito para baguhin.

## Sa maliit na screen

Sa ibaba ng humigit-kumulang 1180 pixel ang lapad, nagiging mas makitid ang mga panel at lumiliit ang larawan ng sheet. Sa screen na kasinlaki ng telepono, nagkakasunod-sunod ang mga bahagi: toolbar (i-scroll ito pahalang), ang sheet, ang status bar, ang mga panel, at saka ang listahan ng sheet sa ibaba. Pinapanatili ng tablet na naka-landscape ang buong layout.
