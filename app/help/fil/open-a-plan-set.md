---
title: Magbukas ng set ng plano at lumipat sa pagitan ng mga sheet
summary: Magbukas ng isang PDF o marami, o magsimula sa blangkong pahina, humanap ng mga sheet sa pamamagitan ng numero o pangalan, mag-zoom at mag-pan, at palitan ang pangalan ng sheet kapag mali ito.
keywords: buksan, bago, blangkong pahina, blangkong sheet, sketch, grid, untitled, set ng plano, plan set, sheets, pahina, thumbnail, page label, sheet number, title block, palitan ang pangalan, mag-navigate, zoom, pan, fit, hanapin ang sheets
from: 1e7f4d50
---

## Buksan ang set

1. Piliin ang {{ui:Open}} sa toolbar, o pindutin ang {{key:Mod+O}}.
2. Sa file picker, piliin ang bawat PDF ng set ({{pick:mac=pindutin nang matagal ang ⌘ at i-click ang bawat file|windows linux=pindutin nang matagal ang Ctrl at i-click ang bawat file}}, o pumili ng saklaw gamit ang Shift), saka kumpirmahin.
   O i-drag ang mga file mula sa {{pick:mac=Finder|windows=File Explorer|linux=ang file manager mo}} papunta sa lugar ng sheet. Lalabas ang "I-drop ang mga PDF para buksan ang mga ito" habang nagdi-drag ka.
3. Maghintay habang sinasabi ng status bar na "Binubuksan ang <file>…". Para sa malalaking file, nagbibilang ito: "(10 sa 60 sheets)".

Resulta: Ipinapakita ng listahan ng {{ui:Sheets}} ang bawat pahina ng bawat file, ayon sa pagkakabukas mo. Sasabihin ng status bar ang tulad ng "Nabuksan ang 3 file (42 sheets sa set)." Kung may komento na ang mga file, idadagdag nito kung ilan ang nabasa.

Para magdagdag ng mas maraming file sa set sa susunod, buksan ang mga ito sa parehong paraan. Idudugtong ang mga ito sa dulo ng listahan.

## Magsimula sa blangkong pahina

Para mag-sketch o magtala nang walang drawing, gumawa ng blangkong pahina sa halip na magbukas ng PDF:

1. Piliin ang {{ui:New}} sa toolbar, o ang {{ui:Start with a blank page}} sa start screen, o pindutin ang {{key:Mod+N}} kung pinapayagan ito ng browser mo (laging ginagawa ito ng desktop app at Studio).
2. Piliin ang {{ui:Paper size}}: Letter, Tabloid o ANSI B, ARCH D, ARCH E, A4, A3 o A1, at {{ui:Portrait}} o {{ui:Landscape}}.
3. Pumili ng {{ui:Grid}}: {{ui:None}}, {{ui:Dots}} o {{ui:Squares}}. Kada 1/4 in ang grid, na may mas makapal na linya kada inch sa inch na papel, at kada 5 mm, na may mas makapal na linya kada 10 mm sa metric na papel. Naka-print ito sa pahina.
4. I-type kung ilang {{ui:Pages}} ang gusto mo, mula 1 hanggang 20, saka piliin ang {{ui:Create}}.

Resulta: Ang bagong PDF na pinangalanang "Untitled-1.pdf" (saka "Untitled-2.pdf", at iba pa) ay bumubukas gaya ng ibang file, at ginawa rito sa computer na ito. Gumagana ang bawat tool dito, at dina-download ng {{ui:Save}} ang "Untitled-1 (marked up).pdf". Naaalala ng MarkupCraft ang mga pinili mo para sa susunod.

Walang scale ang mga pahina: sinasabi ng status bar na "Hindi naka-calibrate". Hindi scale ang grid. Para mag-sukat, i-calibrate muna ang sheet o pumili ng scale; tingnan ang [Calibrate and measure](topic:calibrate-and-measure).

Para magdagdag ng pahina sa blangkong set, buksan ang isa sa mga sheet nito at piliin ang {{ui:Add a blank page}} sa ilalim ng listahan ng {{ui:Sheets}}. Kapareho ng papel at grid ang bagong pahina at nasa dulo ito ilalagay. Tulad ng bawat pagbabago sa pahina, hindi ito maa-undo; tingnan ang [Print, and change the pages](topic:pages-and-printing).

## Paano nakakakuha ng pangalan ang mga sheet

Pinapangalanan ng MarkupCraft ang bawat sheet na "<sheet number> — <title>", halimbawa "A-101 — Floor plan", mula sa unang nahanap nito sa mga ito:

1. Pangalang tinype mo gamit ang {{ui:Rename sheet}} (sa ibaba).
2. Ang sariling page label ng PDF, kapag ito ang itinakda ng gumawa ng PDF (halimbawa "A-101").
3. Ang title block: binabasa ng MarkupCraft ang teksto ng pahina at humahanap ng anyong sheet number (A-101, A1.01, M-201A, KA1-1), mas pinapaboran ang kanang-ibabang sulok, ang kanang strip at ang ilalim na banda, at kinukuha ang pinakamalaking teksto sa malapit bilang title.
4. Kung wala sa mga ito: ang pangalan ng file at pahina, halimbawa "Plans — page 3".

Para makita kung alin ang ginamit, pindutin ang {{key:Esc}} hanggang walang napili at naka-on ang {{ui:Select}}, saka tingnan ang {{ui:Properties}}: sinasabi ng "Read from" ang "The page label", "The title block", "The file name" o "Typed by hand".

:::note
Walang mababasang teksto ang mga scanned na sheet at ang mga PDF na ginawang linya ang lettering. Pinapangalanan ang mga ito ayon sa file at pahina hanggang palitan mo ang pangalan. Hindi pa kayang magbasa ng teksto mula sa mga larawan ang MarkupCraft.
:::

## Lumipat sa pagitan ng mga sheet

- I-click ang isang sheet sa {{ui:Sheets}}.
- Pindutin ang {{key:PageDown}} para sa susunod na sheet at {{key:PageUp}} para sa nauna, o gamitin ang mga arrow sa bar sa ilalim ng sheet.
- I-type sa {{ui:Search sheets}}: bahagi ng numero ("A-2"), salita sa title ("roof"), o pangalan ng file. Nagpapaliit ang listahan habang nagta-type ka ("4 sa 42"). Pindutin ang {{key:Enter}} para buksan ang unang tugma. I-clear ang kahon para makita ulit ang lahat ng sheet.

Pinapanatili ng bawat sheet ang sarili nitong zoom at posisyon hanggang isara mo ang set.

## Zoom at pan

:::mouse
- **Zoom:** i-scroll ang wheel sa ibabaw ng sheet. Nag-zoom ito sa paligid ng pointer. O pindutin ang {{key:Plus}} at {{key:Minus}} (pwede ring kasama ang {{key:Mod}}), o gamitin ang mga zoom button. I-type ang eksaktong porsyento sa zoom box.
- **Fit:** Ipinapakita ng {{ui:Fit page}} ({{key:Mod+0}}) ang buong sheet; pinupuno ng {{ui:Fit width}} ({{key:Mod+9}}) ang lapad.
- **Pan:** i-drag gamit ang middle button (ang wheel), o i-drag gamit ang right button, o pindutin nang matagal ang {{key:Space}} at i-drag, o piliin ang {{ui:Pan}} ({{key:H}}) at i-drag. Kapag walang napili, gumagalaw din ang sheet sa mga arrow key.
:::

:::mac mouse
Sa Mac trackpad, nagza-zoom ang two-finger scrolling (hindi nito ginagalaw ang sheet). Para mag-pan, pindutin nang matagal ang {{key:Space}} at i-drag gamit ang isang daliri, o lumipat sa {{ui:Pan}} gamit ang {{key:H}}. Nag-zoom in ang pinch sa Chrome, Edge at Firefox.
:::

:::touch
- **Zoom at pan:** maglagay ng dalawang daliri sa sheet. Ikalat o pagdikitin ang mga ito para mag-zoom sa gitna ng dalawa, at igalaw nang sabay para mag-pan. Parehong nangyayari nang sabay.
- **Pan gamit ang isang daliri:** piliin muna ang {{ui:Pan}}. Sa anumang ibang tool, ang isang daliri ay gumuguhit o pumipili.
- Nasa bar sa ilalim ng sheet ang {{ui:Fit page}} at {{ui:Fit width}}.
:::

Maaari kang mag-zoom out nang higit pa sa buong sheet at mag-zoom in hanggang 6400%. Muling iginuguhit nang malinaw ang sheet ilang sandali pagkatapos mong huminto sa paggalaw.

## Mga bookmark

{{ui:Bookmarks}}, sa itaas ng panel ng {{ui:Sheets}}, ay nagpapakita ng mga bookmark (outline) ng PDF na kinabibilangan ng bukas na sheet. Piliin ang isa para pumunta sa pahina nito. Ang lapis ay nagpapalit ng pangalan ng bookmark at ang krus ay nagtatanggal nito. Gumagawa ang {{ui:Build from sheets}} ng isang bookmark bawat sheet, na pinangalanan ayon sa pagpapakita ng listahan ng sheet (sheet number at title), at dinadagdagan ng {{ui:Add for this sheet}} ang sheet na kinaroroonan mo. Bahagi ng hindi pa nase-save na gawa ng file ang mga pagbabago: isinusulat ito ng {{ui:Save}} sa kopya, kung saan ito makikita ng bawat PDF viewer.

## I-turn ang view

Ang dalawang turn button sa kanan ng bar sa ilalim ng sheet ay nagpapaikot ng view ng isang quarter turn sa alinmang direksyon, para sa sheet na nakaguhit nang pahiga. View lang ang umiikot: nananatiling pareho ang PDF at ang mga markup nito, at ang susunod na sheet ay bumubukas ayon sa pagkakaayos ng PDF nito (naaalala ng bawat sheet ang sarili nitong turn habang bukas ang set). Ang tekstong idinagdag mo sa naikot na view ay nababasa nang tuwid ayon sa nakikita mo. Para paikutin ang mismong pahina sa na-save na PDF, gamitin ang {{ui:Pages}}, saka {{ui:Rotate page clockwise}}; tingnan ang [Print, and change the pages](topic:pages-and-printing).

## Palitan ang pangalan ng sheet

Kapag mali o nawawala ang pangalan ng sheet:

1. Ipakita ang sheet.
2. Pindutin ang {{key:Esc}} hanggang walang napili at naka-on ang tool na {{ui:Select}}. Ipinapakita na ngayon ng {{ui:Properties}} ang sheet.
3. Piliin ang {{ui:Rename sheet}}.
4. I-type ang {{ui:Sheet number}} at ang {{ui:Title}}, saka piliin ang {{ui:Save}}.

Resulta: Gumagamit na ng bagong pangalan ang listahan ng sheet, ang bar sa ilalim ng sheet at ang listahan ng markup, at sinasabi ng "Read from" ang "Typed by hand". Maaaring i-undo ang pagpapalit ng pangalan gamit ang {{key:Mod+Z}}.

Para bumalik sa sinasabi ng file, buksan muli ang {{ui:Rename sheet}}, i-clear ang dalawang kahon, saka piliin ang {{ui:Save}}.

Kapag nag-save ka, nagiging page label sa PDF ang tinype mong sheet number, kaya ipinapakita ng ibang PDF viewer ang "A-101" sa kahon ng pahina nila. Kapag nagbigay ka ng numero sa anumang pahina ng isang file, makakakuha ng label ang bawat pahina ng file na iyon sa kopya (ang tinype mong numero, o ang dating label, o ang numero ng pahina). Nananatili para sa MarkupCraft ang tinype mong title, pero hindi ito ipinapakita ng ibang viewer.

## Dalhin ang PDF sa TakeoffCraft, o ibalik dito

Kapag bukas ang TakeoffCraft sa parehong lugar (ang lab, Try o ang online apps), may {{ui:Open in TakeoffCraft}} ang bar sa ilalim ng sheet. Binubuksan nito ang PDF ng sheet sa TakeoffCraft sa bagong tab, gaya ng pagkakabukas dito, para makasukat ka ng dami rito. Nananatili rito ang mga markup mo; i-save ang mga ito gaya ng dati.

Ang button na {{ui:MarkupCraft}} ng TakeoffCraft ay gumagawa ng kabaligtaran: bubukas dito ang PDF na parang pinili mo ang {{ui:Open}}. Kung hinarang ng browser ang bagong tab, payagan ang pop-ups para sa site na ito at piliin muli ang button.
