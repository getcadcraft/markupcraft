---
title: Ihambing ang dalawang revision
summary: I-overlay ang luma at bagong issue ng isang sheet sa dalawang kulay, i-align sa dalawang punto, at i-cloud ang mga nagbago.
keywords: compare, overlay, overlay pages, revision, diff, pagkakaiba, changes, luma bago, align, backcheck, issue, bulletin
from: 62f5d1c5
---

Inilalagay ng Compare ang dalawang sheet sa ibabaw ng isa't isa. Ang mga linyang nasa lumang sheet lang ay lalabas sa pula, ang mga linyang nasa bagong sheet lang ay asul, at ang mga linyang nasa pareho ay kulay-abo na may mahinang tono. Nakapangalan ang mga kulay sa legend sa ilalim ng sheet: "Nasa lumang sheet lang", "Nasa bagong sheet lang", "Nasa pareho".

## Ihambing ang dalawang sheet

1. Buksan ang parehong issue. Maaaring pahina sila ng parehong PDF o ng magkaibang PDF; buksan silang magkasama bilang iisang set (tingnan ang [Work with several files at once](topic:several-files)).
2. Piliin ang {{ui:Ihambing}} tab sa kanan.
3. Piliin ang {{ui:Lumang sheet}} at ang {{ui:Bagong sheet}}. Magsisimula ang bagong sheet sa kinaroroonan mo. Kapag maraming file ang bukas, ipinapakita ang pangalan ng file ng bawat sheet pagkatapos ng pangalan nito.
4. Piliin ang {{ui:Ihambing}}.

Resulta: ipinapakita ng MarkupCraft ang bagong sheet na may halong lumang sheet, lilitaw ang legend, at sinasabi ng tab ang "Kinukumpara ang <old> (luma) sa <new> (bago). Nananatiling mae-edit ang mga markup sa bagong sheet."

## Mag-fade sa pagitan ng luma at bago

I-drag ang slider na {{ui:Luma at bago}}. Kapag buong kaliwa, lumang sheet lang ang makikita; kapag buong kanan, bagong sheet lang; sa gitna, pareho. Kadalasan, ang pabalik-balik na slide ang pinakamabilis na paraan para makita ang maliit na pagbabago.

## I-align ang mga sheet

Kung na-plot ang dalawang issue na may magkaibang margin, sukat o rotation, mukhang nagbago ang lahat. Ayusin ito:

**Sa dalawang punto (pinakamahusay):**

1. Piliin ang {{ui:I-align sa dalawang punto}}. Lumang sheet lang ang ipinapakita ng view.
2. I-click ang matalas na katangiang makikita sa parehong sheet, gaya ng intersection ng column grid. Binibilang ng tab ang mga hakbang ("1 of 4").
3. I-click ang pangalawang katangian, malayo sa una, gaya ng kabilang sulok ng grid.
4. Lumilipat ang view sa bagong sheet. I-click muli ang unang katangian.
5. I-click muli ang pangalawang katangian.

Resulta: "Na-line up: old sheet scaled 100.00%, turned 0.00°. Nudge to fine-tune." Inililipat, sinusukat at ini-turn ang lumang sheet para magkasya. Kinakansela ng {{key:Esc}} habang pumipili ka. Mag-zoom in sa bawat katangian bago mag-click para sa tumpak na pagkakasya.

**Sa pag-nudge:** gamitin ang apat na arrow button sa ilalim ng "I-line up" para ilipat ang lumang sheet. Piliin ang hakbang (0.25, 1, 5 o 20 pt; ang 72 pt ay isang inch sa papel). Sinasabi ng tab kung gaano na ito nailipat.

Inaalis ng {{ui:I-reset}} ang alignment at mga nudge.

## Mga linyang nagbago lang

Sa ilalim ng alignment button, piliin ang {{ui:Mga nabagong linya}} sa halip na {{ui:Overlay ng larawan}}. Ikukumpara ng MarkupCraft ang sariling linya ng dalawang sheet, hindi ang kanilang larawan: ipinapakita ng bagong sheet ang sarili nitong itsura, kasama ang mga linyang nasa lumang sheet lang sa pula at ang mga linyang nasa bagong sheet lang sa asul. Ang linyang lumiit lang ay nagpapakita lang ng nawawalang bahagi. I-line up muna ang mga sheet (tingnan sa itaas): ginagamit ng paghahambing ang alignment, kaya ang sheet na nailipat lang ay walang ipapakitang pagbabago. Sinasabi ng status line kung gaano karami ang nagbago.

Gumagana ito para sa PDF na na-plot mula sa CAD, kung saan gawa sa linya ang drawing. Walang linyang maikukumpara ang mga na-scan na sheet: gamitin ang picture overlay para sa mga ito. Ang text na nakatakda sa font (hindi iginuhit bilang stroke) ay hindi kinukumpara.

## Markahan ang mga pagbabago

Habang nagkukumpara, nasa bagong sheet ka at gumagana ang lahat ng tool. Mag-draw ng cloud sa paligid ng mga pagbabago habang nahahanap mo ang mga ito; kabilang sila sa bagong sheet at nananatili kapag tumigil ka sa pagkukumpara.

Ang {{ui:Ulapan ang mga pagbabago}} ang gumagawa nito para sa iyo: pinagsasama nito ang mga nagbagong linyang magkakalapit at gumuguhit ng revision cloud sa bawat grupo sa bagong sheet, na may "Changed since <old sheet>" bilang komento. Isang {{key:Mod+Z}} ang nag-aalis sa lahat; burahin ang mga hindi mo kailangan.

## Ikumpara ang buong set

Kapag dumating ang bagong issue bilang sariling PDF, buksan ang parehong PDF at buksan ang {{ui:Ihambing ang dalawang set}} sa {{ui:Ihambing}} tab. Piliin ang lumang file at ang bagong file, saka piliin ang {{ui:Ihambing ang mga set}}. Pinapares ang mga sheet ayon sa numero nila (gaya ng sa [slip-sheeting](topic:slip-sheet-a-revised-set)), ikinukumpara ayon sa linya nila, at inilalista ang pinakamaraming nagbago sa itaas. Pumili ng sheet sa listahan para ikumpara ang pares na iyon gamit ang {{ui:Mga nabagong linya}}.

Ang {{ui:Ulapan ang lahat ng pagbabago}} ay nagcloud sa bawat grupo ng nagbagong linya sa bawat nagbagong sheet, sa isang hakbang na maaaring i-undo. Hindi muna ina-align ng set comparison ang mga sheet, kaya ang sheet na nailipat sa pahina ay lalabas na nagbago: ikumpara ang pares na iyon nang mag-isa at gamitin ang {{ui:I-align sa dalawang punto}}.

## Itigil ang pagkukumpara

Piliin ang {{ui:Itigil ang pag-compare}}, o pumunta sa ibang sheet. Naaalala ang alignment para sa parehong pares ng sheet hanggang isara mo ang set.

## Mabuting malaman

- Gumagana ang Compare sa kung ano ang nakaguhit, pixel by pixel. Hindi nito alam na gumalaw ang linya; ipinapakita nito ang lumang posisyon sa isang kulay at ang bagong posisyon sa kabila.
- Lumalabas ding bilang pagbabago ang text na nag-reflow, binagong petsa sa title block, o ibang plot style.
- Magulo ang na-scan na sheet kapag ikinumpara sa na-plot: nagpapalabo at nagpapagalaw ng linya ang pag-scan.
- Hindi pa nagagawa ang pagkukumpara ng text na nakasulat sa font, at ang listahan ng mga nagbago.
