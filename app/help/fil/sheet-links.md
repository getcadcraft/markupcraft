---
title: Mga sheet link
summary: Gawing tumalon ang markup papunta sa ibang sheet, at i-link ang bawat sheet callout gaya ng 3/A-501 sa sheet at view nito sa isang pasada gamit ang Batch links.
keywords: hyperlink, link, links, tumalon, sheet callout, detail callout, section callout, 3/A-501, pumunta sa sheet, bumalik, auto link, batch link, batch links, title block, sheet number, sheet name, view, detail, palitan ang pangalan, renumber, addendum, pdf link
from: 86a17c37
---

Dinadala ka ng sheet link mula sa markup papunta sa ibang sheet ng set: mula sa detail bubble papunta sa detalye, mula sa note papunta sa sheet na tinutukoy nito.

## I-link ang markup sa isang sheet

1. Piliin ang markup.
2. Sa {{ui:Properties}}, pumili ng sheet sa ilalim ng {{ui:Link to sheet}}.

May maliit na palaso sa kanang itaas ng markup. Para sundan ito, pindutin nang hawak ang {{key:Mod}} at i-click ang markup, o piliin ito at piliin ang {{ui:Go to …}} sa {{ui:Properties}}. Ibinabalik ka ng {{key:Alt+Left}} sa sheet na pinanggalingan mo.

Tinutukoy ng link ang sheet sa pamamagitan ng numero nito, kaya gumagana pa rin ito pagkatapos mong buksang muli ang set o mag-slip-sheet ng bagong issue: bubuksan nito ang pinakabagong sheet na may numerong iyon. Kung hindi bukas ang sheet na iyon, sasabihin ito ng status bar.

## I-link nang sabay-sabay ang lahat ng sheet callout

Piliin ang {{ui:Pages}} › {{ui:Batch links…}}, o ang {{ui:Link sheet callouts…}} sa ilalim ng {{ui:Find text}} sa itaas ng panel ng {{ui:Sheets}}.

1. **Tingnan ang sheet numbers.** Inililista ng MarkupCraft ang bawat bukas na sheet kasama ang numero at pangalan na binasa nito mula sa title block ng sheet (o sa page label nito), at kung saan ito galing. Itama ang mali, at mag-type ng numero kung wala itong nakita (ang title block na ang numero ay naka-plot bilang mga linya ay walang tekstong mababasa). Pagkatapos, piliin ang {{ui:Find callouts}}. Isang undo step ang mga pagwawasto mo, at sila ang magiging page labels sa naka-save na PDF.
2. **Suriin ang listahan.** Binabasa ng MarkupCraft ang teksto ng bawat sheet para sa mga callout gaya ng "3/A-501", "5 / A501", "DETAIL 2 ON A-501", bubble na may "3" sa ibabaw ng "A-501", o simpleng "A-501" sa note, at binabasa ang view titles ng bawat sheet (detail number na may sheet number sa ilalim, o malaking numero na may titulo sa tabi). Tatlo ang bahagi ng listahan:
   - {{ui:Will link}}: bawat callout, ang sheet na pupuntahan nito at ang view sa sheet na iyon. Alisin ang tsek sa anumang ayaw mo. Kung hindi nakita ang view (callout sa view 7 sa sheet na may views 1 hanggang 6), pumili ng view mula sa listahan sa tabi nito, o iwan ang {{ui:Whole sheet}}.
   - {{ui:Not linked}}: mga sheet number na walang bukas na sheet, kasama ang bilang ng callout na tumutukoy sa bawat isa. Pumili ng sheet na ibig sabihin ng bawat isa (halimbawa, sheet na pinalitan ang numero), at ili-link dito ang bawat callout sa numerong iyon. O iwan itong hindi naka-link.
   - Ang bilang ng callouts na naka-link na at tama pa rin ang pupuntahan. Hindi ito gagalawin.
3. Piliin ang {{ui:Create the links}}.

Bawat callout ay magkakaroon ng manipis na asul na kahon na sheet link. Ang {{key:Mod}}+click dito ay magbubukas ng sheet na naka-zoom sa view. Isang {{key:Mod+Z}} lang ang magtatanggal sa lahat ng ito.

Ang mga code na mukhang sheet number lang, gaya ng R-19 o W12X26, ay hindi isinasama: dapat hugis ng sariling sheet number ng set ang isang callout. Ang sariling number ng sheet, sa title block nito at sa view titles nito, ay hindi kailanman callout. Ang mga na-scan na sheet ay walang tekstong mababasa: gamitin muna ang {{ui:Read text (OCR)…}}, o i-link ang callouts nila nang isa-isa.

## Patakbuhin muli kapag nagbago ang set

Maaaring patakbuhin ang Batch links nang kahit ilang beses mo gusto:

- **May sheet na idinagdag**, gaya ng addendum na may A-601: buksan ang file nito at patakbuhin muli ang Batch links. Ang mga callout sa A-601 na hindi naka-link dati ay maka-link na ngayon.
- **Pinalitan ang numero ng sheet**: itama ang numero nito sa hakbang 1. Ang mga link na ginawa ng Batch links na hindi na nakakahanap ng sheet nila ay nakalista sa ilalim ng {{ui:Not linked}}; pumili ng sheet nang isang beses at susundin na ito ng lahat. Ang mga link na lumipat sa ibang view ay na-update.
- Ang mga link na ginawa mo nang mano-mano sa {{ui:Properties}} ay hindi kailanman nababago.

## Sa naka-save na PDF

Ang link sa sheet sa parehong PDF ay isinusulat din bilang PDF link, kaya tumatalon din doon ang ibang viewer sa isang click. Ang link na may view ay nagbubukas ng view na iyon sa ibang viewer (ang PDF "fit rectangle" jump); ang walang view ay nagbubukas ng buong sheet. Ang mga link sa sheet sa ibang file ng set ay gumagana lamang sa MarkupCraft.
