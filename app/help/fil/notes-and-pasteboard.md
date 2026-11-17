---
title: Notes, ang pasteboard at mga private note
summary: Itabi ang scratch notes at snapshot sa tabi ng sheet, itago ang mga ito gamit ang isang switch, at gumawa ng note na ikaw lang ang makababasa. Wala sa mga ito ang naka-print o nakakarating sa kliyente.
keywords: notes, itago ang notes, ipakita ang notes, scratch pad, pasteboard, paste board, labas ng pahina, snapshot, private note, encrypted note, passphrase, malinis na kopya, kopya para sa kliyente
from: 9dc155af
---

Hindi kailangang nasa drawing ang mga working note mo o makarating sa kliyente. May tatlong uri ng tulong dito, at maaari mo silang gamitin nang magkakasama.

## Ang pasteboard

Ang espasyo sa paligid ng sheet ay pasteboard. Anumang iguguhit o ipe-paste mo roon ay itinuturing na note, kaya hindi ito kailanman naka-print.

1. Buksan ang {{ui:Notes}} at piliin ang {{ui:Show the pasteboard}} para mag-zoom out na may espasyo sa paligid ng sheet.
2. Gumuhit, mag-type o mag-paste sa tabi ng sheet gamit ang alinmang tool.
3. Para manatiling nakikita ang isang bahagi ng drawing, piliin ang {{ui:Snapshot to the pasteboard}}, i-drag sa ibabaw ng lugar, at piliin ang {{ui:To the pasteboard}}. Lalabas ang isang larawan sa tabi ng sheet sa laki nito sa papel.

Ang mga snapshot ay mga larawan: hindi sila magbabago kapag nagbago ang sheet.

## Mga note na maipapakita at maitatago

Ang note ay isang markup na naipapakita at naitatago gamit ang isang switch.

- Para gawing note ang mga bagong markup, itakda ang {{ui:New markups are}} sa {{ui:Notes}}.
- Para baguhin ang isang markup, piliin ito at gamitin ang {{ui:This markup is}} sa {{ui:Properties}}.
- Para itago o ipakita ang lahat ng note, pindutin ang **Shift+H** o gamitin ang {{ui:Notes}} sa bar sa ilalim ng sheet.

Hindi nagpi-print ang mga note, hindi kasama sa flattened na kopya, listahan, summary at export, at hindi ito nakikita ng ibang PDF reader. Pinapanatili ng na-save mong PDF ang mga ito para sa susunod na pagbukas. Makikita ng sinumang magbubukas ng file na iyon sa MarkupCraft ang mga note nito, kaya gumamit ng private note para sa anumang dapat ikaw lang ang makabasa.

## Mga private note

Ang private note ay naka-encrypt gamit ang passphrase na ikaw lang ang nakakaalam. Walang ibang makababasa nito sa anumang view.

1. Sa {{ui:Notes}}, piliin ang {{ui:Set a passphrase}}.
2. Itakda ang {{ui:New markups are}} sa {{ui:A private note}}, o palitan ang isang markup sa {{ui:Properties}}.

Sa iba mo pang device, buksan ang file at i-unlock gamit ang parehong passphrase. Nakabubukas at nakapag-s-save ng file ang mga katrabaho nang hindi nawawala ang mga note mo, at walang magsasabi sa kanilang may private note doon.

**Walang paraan para mabawi ang nakalimutang passphrase.** Walang sinuman, kasama kami, ang makabubukas ng mga private note mo nang wala ito.

Hindi ipinapadala ang mga private note sa mga tao sa Live session o sa mga assistant, at hindi ito maaaring kopyahin sa clipboard. Sa shared na computer, huwag i-on ang {{ui:Stay unlocked on this device}}, at gamitin ang {{ui:Lock}} kapag aalis ka. Habang naka-unlock, makikita ng sinumang gumagamit ng computer mo ang mga ito.

Ang lumang kopya ng file na na-save mo bago gawing private ang isang markup ay mayroon pa ring markup na iyon. Ipadala ang bagong kopya, hindi ang luma.

## Pagpapadala ng file sa iba

Piliin ang {{ui:Save a clean copy}} sa {{ui:Notes}}, o File, saka Mga pahina. Pinapanatili ng kopya ang regular mong markup at walang note, walang private note, at walang anumang galing sa pasteboard. Wala rin ang mga ito sa mga na-print at flattened na kopya.
