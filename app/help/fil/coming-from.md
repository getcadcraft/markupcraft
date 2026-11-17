---
title: Galing sa ibang markup software
summary: Paano nag-uugnayan ang mga gawi ng desktop PDF markup program sa MarkupCraft, at ang mga pagkakaibang nakakalito sa mga tao.
keywords: lumipat, paglipat, switch, migrate, pamilyar, desktop pdf markup, tool chest, markups list, overlay, sessions, profile, shortcuts, pagkakaiba
from: c8f323e1
---

Kung nagre-review ka ng drawing sa Bluebeam Revu (o nagko-komento sa PDF sa ibang desktop PDF program), karamihan ng MarkupCraft ay magiging pamilyar: clouds, callouts, tool chest, markups list, status na may reply, calibrated na sukat, sheet overlay. Ang paraan ng paghawak ng mga file ang malaking pagkakaiba, kaya basahin ang susunod na seksyon kahit laktawan mo ang iba.

## Ang limang pagkakaibang mahalaga

1. **Ang Save ay gumagawa ng bagong file.** Tumatakbo ang MarkupCraft sa browser at hindi nito maisusulat sa ibabaw ng PDF sa disk mo. Dina-download ng {{ui:I-save}} ang "<name> (marked up).pdf" at nananatiling gaya ng dati ang orihinal. Sa susunod, buksan ang kopyang "(marked up)", at ikaw ang maglinis ng mga lumang kopya.
2. **Nase-save ang PDF kapag nag-save ka.** Hanggang doon, pinapanatili ng recovery copy sa browser na ito ang mga markup mo kahit may crash o nakasarang tab, at iaalok ito ng MarkupCraft sa susunod. Pang-salbabida ito: i-save ang PDF para mapanatili ang review.
3. **Nakatira sa browser ang profile mo.** Ang pangalan mo bilang author, mga setting ng tool at tool chest ay nakalagay sa browser na ito sa computer na ito. Magsisimulang bago ang ibang browser o computer, at binubura ng pag-clear ng site data ang mga ito. I-export ang tool chest mo bilang backup. Tingnan ang [What stays in this browser](topic:browser-storage).
4. **Wala pang shared session.** Walang live, shared na review session at walang cloud project. Naglalakbay ang review sa PDF: i-save, ipadala ang kopya, sasagot ang susunod na tao at magse-save.
5. **Kada sheet lang ang scale.** Walang viewport sa loob ng sheet at walang "apply this scale to all pages". I-calibrate ang bawat sheet na sinusukat mo.

## Gawi kada gawi

| Nakasanayan mo | Sa MarkupCraft |
|---|---|
| Thumbnails panel, page labels | {{ui:Sheets}} sa kaliwa. Nagmumula ang mga pangalan sa page labels o binabasa mula sa title block; ayusin gamit ang {{ui:Palitan ang pangalan ng sheet}}. |
| Pagbukas ng ilang PDF bilang set | Buksan silang lahat nang sabay; nagiging iisang listahan sila. Walang set file na sine-save: buksan ang parehong PDF sa susunod. |
| Tool chest na may tool sets | {{ui:Mga tool}} tab: isang chest kada browser, mga naka-save na tool na may style at subject. Ibahagi sa pamamagitan ng {{ui:I-export}} at {{ui:I-import}} bilang JSON file. Hindi maiimport ang tool set file mula sa ibang program. |
| Properties panel | {{ui:Properties}} tab: status, subject, comment, style, replies at punch item sa iisang lugar. |
| Markups list na may columns | {{ui:Mga markup}} tab na may filter para sa sheet, author, status at type. I-export ang CSV o BCF. Walang custom na column at walang PDF o workbook summary pa. |
| Status at review state | {{ui:Status}}: Open, Accepted, Rejected, Completed. Walang custom na status set. Nase-save bilang karaniwang review state. |
| Replies sa markup | Ang "Replies" thread sa {{ui:Properties}}, kasama ang mga pagbabago ng status na naka-log dito. Hindi na mae-edit ang reply na naipadala na. |
| Calibrate, saka length, area, count | {{ui:I-calibrate}}, {{ui:Haba}} ({{key:M}}), {{ui:Lawak}} ({{key:Q}}, nagbibigay ng lawak at perimeter), {{ui:Bilang}} ({{key:U}}). Wala pang angle, radius, volume, polylength o cut-outs. |
| Overlay pages | {{ui:Ihambing}} tab: pula para sa luma, asul para sa bago, i-align sa dalawang punto. Walang awtomatikong "compare documents" clouding. |
| Stamps | {{ui:Stamp}} na may anim na built-in na stamp at sariling wording, may pirma ng pangalan mo at petsa. Wala pang image o signature stamp. |
| Punch o issue tracking | {{ui:Punch list}} tab: may-numerong item na may assignee, due date at status; CSV export. |
| Live collaboration session | Hindi pa available. Ipasa ang nai-save na PDF. |
| Flatten | Hindi pa nagagawa. Nananatiling comment ang mga markup na makikita at maipi-print ng ibang viewer. |
| Layers para sa markup | Hindi pa nagagawa. Gamitin ang subjects, authors at mga filter ng listahan para ayusin ang mga komento. |
| Hyperlinks sa pagitan ng sheet | Hindi pa nagagawa. |
| Spacebar para mag-pan, wheel para mag-zoom | Pareho: pindutin nang hawak ang {{key:Space}} at i-drag; nag-zo-zoom ang wheel sa pointer. Hindi kailanman nag-i-scroll ng pahina ang wheel. |

## Mga key na magkaiba

Karamihan sa one-letter key ay gaya ng inaasahan mo, pero suriin ang mga ito bago kumilos ang mga daliri mo:

- {{key:K}} ay {{ui:Callout}}, at {{key:Q}} ay {{ui:Lawak}}. Kung sanay kang gumamit ng Q para sa callout, magsisimula ito ng area dito.
- {{key:C}} ay ang box na {{ui:Cloud}}; {{key:Shift+C}} ay {{ui:Free cloud}}.
- {{key:M}} ay {{ui:Haba}}, {{key:U}} ay {{ui:Bilang}}, {{key:Y}} ay {{ui:Polyline}}, {{key:G}} ay {{ui:Polygon}}, {{key:I}} ay {{ui:Highlight}}.
- {{key:Mod+D}} ay dumoduplicate ng selection (sa halip na bookmark ng browser).
- {{key:Mod+Plus}} at {{key:Mod+Minus}} ay nag-zo-zoom ng sheet, hindi ng pahina ng browser.
- Maaaring palitan ang anumang key: tingnan sa ibaba.

:::tip
Kung sanay ang mga daliri mo sa Bluebeam Revu, piliin ang {{ui:PDF review}} na menu style sa {{ui:Mga setting}} › {{ui:MarkupCraft}} › {{ui:Mga menu, key at mouse}}: isang menu bar (File, Edit, View, Document, Markup, Measure, Window) sa ibabaw ng isang hilera ng review tool, {{key:Q}} para sa callout, {{key:H}} para sa highlighter, {{key:N}} para sa polygon, at ang mga sukat sa {{key:Alt+Shift}} na may letra. Maaari ring palitan doon ang anumang key. Tingnan ang [Menus, keys and mouse](topic:menus-keys-and-mouse).
:::

Kumpleto ang listahan sa [Keyboard and mouse](topic:keyboard).

## Mga bagay na gumagana nang iba sa inaasahan mo

- **Nananatiling aktibo ang tool.** Pagkatapos ng cloud, gumuguhit ka pa rin ng cloud. Isang {{key:Esc}} ang nag-aalis ng selection, dalawa ang bumabalik sa {{ui:Piliin}}.
- **Kailangan ng teksto ang text at callout.** Kung tatapusin nang walang tinype, walang markup na idadagdag. Nananatiling walang laman ang mga note.
- **Kailangan muna ng scale ang mga sukat.** Lumilipat ang {{ui:Haba}} at {{ui:Lawak}} sa {{ui:I-calibrate}} sa sheet na hindi pa naka-calibrate, at bumabalik pagkatapos.
- **Mga komento mula sa ibang program.** Ang rectangle, ellipse, linya, polyline, polygon, ink, text box at sticky note na ginawa sa ibang lugar ay nagiging editable na MarkupCraft markup, at isinusulat muli sa paraan ng MarkupCraft kapag nag-save ka (maaaring bahagyang magbago ang itsura nila). Ang text highlight, stamp ng ibang program at iba pang espesyal na uri ay nananatiling read-only: maaari kang mag-reply, pero hindi baguhin.
- **Ang mga karakter sa labas ng Western European na letra** ay lumalabas bilang "?" sa nai-save na PDF. Tingnan ang [Save the marked-up PDF](topic:save-the-marked-up-pdf).
- **Ang petsa ng stamp** ay gumagamit ng UTC, kaya ang stamp na ginawa nang gabi sa Americas ay maaaring magpakita ng petsa ng kinabukasan.
- **Dinadala ang mga sukat** bilang karaniwang measurement comment, at pinapanatili ng bawat naka-calibrate na sheet ang scale nito, kaya kadalasang maipapakita ng program na bumabasa ng sukat sa PDF ang mga ito. Nakadepende sa program ang eksaktong kilos.

## Paggamit ng pareho

Maaari kang pabalik-balik. Bumubukas sa MarkupCraft ang mga komentong ginawa sa ibang lugar, at bumubukas sa ibang PDF program ang kopyang "(marked up)" na may bawat markup, reply at status na nakikita. Ang tanging binabasa pabalik ng MarkupCraft (punch assignee at due date, status ng item) ay nananatili sa file para sa MarkupCraft.
