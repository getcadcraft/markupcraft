---
title: Ano ang bago sa 0.7 (mas maaga)
summary: RFI, submittal at daily log sa bagong Field tab, may due date, overdue sa pula, CSV at BCF, offline na trabaho at Merge; mga assistant na nagtatakda ng status, sumasagot at nag-e-export ng listahan; unit list na sumusunod sa Settings; mga panel na nagtatago at mga dialog na gumagalaw.
keywords: ano ang bago 0.7, naunang release, release notes, changelog, mga pagbabago, 0.7, bersyon, bagong feature, field, field record, rfi, request for information, submittal, daily log, site diary, overdue, due date, nakatalaga sa akin, pin, merge, offline, tablet, bcf, csv, assistant, mcp, markup status, reply, export, units, unit list, star, calibrate, compact, panel, dialog, portuges
from: ca5ba1f0
---

Ito ang mga nagbago sa MarkupCraft 0.7, kumpara sa 0.6. Ang pinakamalaking bagong feature ay ang field record: mga RFI, submittal at daily log na nakalagay sa loob ng PDF, katabi ng iyong mga markup.

## Bago

### RFI, submittal at daily log

- **Ang Field tab.** Buksan ang tab na {{ui:Field}} at piliin ang {{ui:RFI}}, {{ui:Submittal}} o {{ui:Daily log}}. I-tap o i-click ang sheet kung saan dapat nabibilang ang isang RFI o submittal, at may pin na magmamarka sa lugar; ang daily log ay napupunta sa bukas na sheet nang walang pin ({{ui:Place pin}} ang nagdaragdag nito sa ibang pagkakataon, {{ui:Move pin}} ang naglilipat ng alinmang pin). Bawat record ay may sariling numero (RFI-0001, SUB-0001, LOG-0001), title, teksto, status, assignee, due date, thread ng mga reply, at listahan ng pangalan ng attachment. Tingnan ang [Subaybayan ang RFI, submittal at daily log](topic:field-records).
- **Tingnan kung alin ang huli na.** I-filter ang listahan ayon sa uri, status, due date (lampas na sa takda, may takda sa loob ng 7 araw, may o walang due date), ang sheet na ito o lahat ng sheet, paghahanap ng teksto, o {{ui:Nakatalaga sa akin}}. Ang record na lampas na sa due date nito at naghihintay pa ay minamarkahan ng **{{ui:Lampas na sa takda}}**, sa pula, sa listahan at sa pin nito. Tingnan ang [Hanapin ang mahalaga](topic:field-records#find-what-matters).
- **CSV at BCF.** Isinusulat ng {{ui:CSV}} ang mga nakalistang record bilang spreadsheet; isinusulat ng {{ui:BCF}} ang mga ito bilang BCF topic, bawat isa may snapshot ng lugar nito sa sheet. Parehong sumusunod sa mga filter. Tingnan ang [I-export](topic:field-records#export).
- **Offline, at dalawang kopya ay nagiging isa.** Nakalagay sa loob ng PDF ang mga record at hindi nangangailangan ng network, kaya kayang magdagdag, sumagot at mag-save ng tablet sa site. Pagbalik sa opisina, pinagsasama ng {{ui:Merge}} ang mga record ng ibang kopya ng parehong PDF ayon sa kanilang id, bilang isang hakbang ng undo. Tingnan ang [I-save, offline at pagsasama ng mga kopya](topic:field-records#save-offline-and-merging-copies).

### AI assistant

- **Mas maraming magagawa ng assistant.** Ang sarili mong assistant, na konektado sa pamamagitan ng CadCraft Studio, ay maaari nang magtakda ng status ng markup (`markup_status`, naitala sa thread nito), sumagot sa thread (`markup_reply`), at mag-export ng listahan ng {{ui:Markups}} bilang CSV o BCF (`markups_export`, kung ano ang ipinapakita ng listahan kasama ang mga filter nito). Bawat pagbabago ay isang hakbang ng undo, nilagdaan ng pangalan ng assistant. Tingnan ang [Ano ang maaaring hilingin ng assistant](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Sa bawat app

- **Units.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ay may isang listahan bawat isa para sa haba, area, volume, anggulo at slope, na may eksaktong laki gaya ng ibinibigay ng kahulugan ng mga unit (ang US survey foot ay sariling unit). I-off ang mga unit na hindi mo ginagamit at aalis ang mga ito sa unit list; i-star ang isa at doon magsisimula ang bagong trabaho. Laging pinapanatili ng file ang sarili nitong unit. Sa MarkupCraft, ang mga unit ng pagsukat at posisyon sa {{ui:Settings}} › {{ui:MarkupCraft}} at ang unit sa calibrate dialog ay sumusunod sa mga switch; ang star ang nagtatakda ng unit ng pagsukat hanggang i-save mo ang sariling setting ng MarkupCraft; at ang totoong distansyang tinype mo kapag nagka-calibrate ay maaaring may markang kahit anong unit, gaya ng `3 yd` o `1.5 km`. Tingnan ang [Units, tinype na value at ang mga unit list](common:unit-lists).
- **Mas siksik na layout at mga panel na nagtatago.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ay nagkakasya ng mas maraming nasa screen (nananatiling malalaki ang button ng touch screen at phone). Ang bawat side panel ay may manipis na title bar: i-drag ito para i-dock o gawing float ang panel, i-drop sa bar ng ibang panel para magbahagi ng iisang frame bilang tab, i-pin para dumulas palabas sa gilid, o itago ito at ibalik mula sa gilid. Tingnan ang [Ayusin ang mga panel](common:arrange-panels#make-the-layout-denser).
- **Gumagalaw ang mga dialog.** I-drag ang dialog sa pamamagitan ng title bar nito palayo sa drawing; babalik ito kung saan mo ito iniwan. I-double-click ang title bar para ibalik ito sa gitna. Tingnan ang [Ilipat ang dialog](common:arrange-panels#move-a-dialog).
- **Mga recipe para sa AI assistant.** Sampung halimbawang kahilingan para sa sarili mong assistant (ayusin ang drawing, i-plot ang set, suriin ang mga drawing, magtanong tungkol sa model, i-total ang takeoff, subukan ang variant ng part…), bawat isa may mga tool na tinatawag nito at mga pahintulot na kailangan nito, at bawat isa ay inuulit ng aming mga test. Walang AI ang mga app. Tingnan ang [Mga recipe para sa AI assistant](common:assistants-recipes).
- **Mga wika.** Ang **Português (Portugal)** ay bago sa {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ito, ang **Português (Brasil)**, **Español (México)** at **Bahasa Indonesia** ay mayroon na ngayong bawat salita ng mga app, bilang mga draft na hindi pa nababasa ng native speaker. Nasa Ingles ang mga help topic.
- **CadCraft Studio** ay nagsasabi kung bakit nabigo ang pagsusuri ng update (wala pang file para sa system mo, walang network, maling signature) sa halip na "Tapos" lang, at hindi na ibinabalik ang card na Ano ang bago na isinara mo hangga't walang mas bagong release.

## Wala pa sa bersyong ito

- **Hindi naka-code-sign ang 0.7.** Ang pag-sign, at ang package ng Microsoft Store, ay inilipat sa 0.8 dahil hindi pa dumarating ang validation ng certificate. Suriin ang SHA-256 sa tabi ng bawat file sa getcadcraft.com/download. Sa Windows, kung hihinto ang installer ng SmartScreen, piliin ang {{ui:Higit pang impormasyon}}, pagkatapos {{ui:Patakbuhin pa rin}}. Sa Mac, sa unang pagkakataon, i-right-click ang CadCraft Studio at piliin ang {{ui:Buksan}}. Wala pa sa app store ang CadCraft Studio, at wala pang build para sa iPad o iPhone.
- Naka-save ang angle at slope list sa {{ui:Units}}, pero wala pang box na bumabasa sa mga ito.
- Hindi ibinabahagi ang field record sa live session ng CadCraft Studio (markup lamang ang dala ng live session); pagsamahin ang mga kopya gamit ang {{ui:Merge}}.
- Kumukuha ang Merge ng isang record nang buo mula sa kopyang huling binago: kung dalawang tao ang nagbago ng magkaibang field ng iisang record, mananaig ang mga field ng mas huling kopya. Pinagsasama ang mga thread at pangalan ng attachment.
- Pangalan lang ang mga attachment; nananatili sa kinalalagyan nila ang mga file. Walang team, notification o cloud project para sa record, at wala pang tool ang mga assistant para sa record.
- Nasubukan ang field record sa browser sa laki ng phone at tablet na putol ang network, pero hindi pa nasusubukan nang manwal sa totoong tablet.
- Nandoon pa rin mula sa 0.6: pag-ikot ng page object sa anumang anggulo, pagguhit ng bagong hugis diretso sa pahina, pagpalit ng font o laki ng linya, at tekstong dumadaloy sa ilang linya. Hindi pa nabubuksan sa Acrobat ang nai-save na kopyang may page edit.
- Nandoon pa rin mula sa 0.5: pag-undo ng pagbabago sa pahina (gaya ng pagdaragdag ng blankong pahina), pagbabasa ng teksto mula sa scanned na sheet, at live session na lampas sa sarili mong network.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet).
