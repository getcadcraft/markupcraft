---
title: Ano ang bago sa 0.7
summary: RFI, submittal at daily log sa bagong Field tab, may due date, overdue sa pula, CSV at BCF, offline na trabaho at Merge; mga assistant na nagtatakda ng status, sumasagot at nag-e-export ng listahan; mga unit list na sumusunod sa Settings; panel na natitiklop at dialog na nagagalaw.
keywords: ano ang bago, release notes, changelog, mga pagbabago, 0.7, bersyon, bagong feature, field, field record, rfi, request for information, submittal, daily log, site diary, overdue, due date, nakatalaga sa akin, pin, merge, offline, tablet, bcf, csv, assistant, mcp, markup status, reply, export, unit, unit list, star, calibrate, compact, panel, dialog, Portuges
from: 142e1a1e
---

Ito ang mga nagbago sa MarkupCraft 0.7, kumpara sa 0.6. Ang pinakamalaking bagong bagay ay ang field record: mga RFI, submittal at daily log na nakatago sa loob ng PDF, katabi ng mga markup mo.

## Bago

### Mga RFI, submittal at daily log

- **Ang Field tab.** Buksan ang tab na {{ui:Field}} at piliin ang {{ui:RFI}}, {{ui:Submittal}} o {{ui:Daily log}}. I-tap o i-click ang sheet kung saan nabibilang ang isang RFI o submittal at may pin na magmamarka ng lugar; ang daily log ay napupunta sa bukas na sheet nang walang pin ({{ui:Place pin}} ang magdaragdag nito sa ibang pagkakataon, {{ui:Move pin}} ang maglilipat ng alinmang pin). May sariling numero ang bawat record (RFI-0001, SUB-0001, LOG-0001), pamagat, teksto, status, nakatalaga, due date, thread ng mga sagot, at listahan ng pangalan ng attachment. Tingnan ang [Subaybayan ang mga RFI, submittal at daily log](topic:field-records).
- **Tingnan kung alin ang huli na.** I-filter ang listahan ayon sa uri, status, due date (overdue, due sa loob ng 7 araw, may o walang due date), sa sheet na ito o sa lahat ng sheet, text search, o {{ui:Assigned to me}}. Ang record na lampas na sa due date at naghihintay pa ay minamarkahan ng **Overdue**, sa pula, sa listahan at sa pin nito. Tingnan ang [Hanapin ang mahalaga](topic:field-records#find-what-matters).
- **CSV at BCF.** Isinusulat ng {{ui:CSV}} ang nakalistang record bilang spreadsheet; isinusulat ito ng {{ui:BCF}} bilang mga BCF topic, bawat isa may snapshot ng lugar nito sa sheet. Parehong sumusunod sa mga filter. Tingnan ang [I-export](topic:field-records#export).
- **Offline, at dalawang kopya ay ginawang isa.** Naka-save ang mga record sa loob ng PDF at hindi nangangailangan ng network, kaya kayang magdagdag, sumagot at mag-save ng tablet sa site. Pagbalik sa opisina, pinagsasama ng {{ui:Merge}} ang mga record ng ibang kopya ng parehong PDF ayon sa kanilang id, bilang isang hakbang ng undo. Tingnan ang [I-save, offline at pagsasama ng mga kopya](topic:field-records#save-offline-and-merging-copies).

### Mga AI assistant

- **Mas marami nang kayang gawin ang assistant.** Ang sarili mong assistant, na nakakonekta sa pamamagitan ng CadCraft Studio, ay maaari nang magtakda ng status ng markup (`markup_status`, nakatala sa thread nito), sumagot sa thread (`markup_reply`) at mag-export ng listahan ng {{ui:Markups}} bilang CSV o BCF (`markups_export`, ang ipinapakita ng listahan kasama ang mga filter nito). Bawat pagbabago ay isang hakbang ng undo, nilagdaan ng pangalan ng assistant. Tingnan ang [Ano ang maaaring hilingin ng assistant](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Sa bawat app

- **Mga unit.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ay may tig-isang listahan para sa haba, lawak, volume, anggulo at slope, na may eksaktong laki ayon sa kahulugan ng bawat unit (ang US survey foot ay sarili nitong unit). I-off ang mga unit na hindi mo ginagamit at aalis ang mga ito sa mga unit list; i-star ang isa at doon magsisimula ang bagong trabaho. Laging nananatili sa sarili nitong unit ang isang file. Sa MarkupCraft, ang mga unit ng pagsukat at posisyon sa {{ui:Settings}} › {{ui:MarkupCraft}} at ang unit sa calibrate dialog ay sumusunod sa mga switch; ang star ang nagtatakda ng unit ng pagsukat hanggang i-save mo ang sarili nitong settings ng MarkupCraft, at ang totoong distansyang tinype mo kapag nagca-calibrate ay maaaring may markang anumang unit, gaya ng `3 yd` o `1.5 km`. Tingnan ang [Mga unit, tinype na halaga at mga unit list](common:unit-lists).
- **Mas siksik na layout at mga panel na natitiklop.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ay nagkakasya ng mas marami sa screen (ang mga touch screen at telepono ay pinapanatili ang malalaking button). Bawat side panel ay may manipis na title bar: i-drag ito para ilagay o gawing lumulutang ang panel, i-drop sa title bar ng ibang panel para magbahagi ng iisang frame bilang mga tab, i-pin para dumulas papunta sa gilid, o itago at ibalik mula sa gilid. Tingnan ang [Ayusin ang mga panel](common:arrange-panels#make-the-layout-denser).
- **Nagagalaw ang mga dialog.** I-drag ang dialog sa pamamagitan ng title bar nito palayo sa drawing; babalik ito kung saan mo ito iniwan. I-double-click ang title bar para muling ilagay sa gitna. Tingnan ang [Ilipat ang dialog](common:arrange-panels#move-a-dialog).
- **Mga recipe para sa AI assistant.** Sampung halimbawang hiling para sa sarili mong assistant (ayusin ang drawing, i-plot ang set, suriin ang mga drawing, magtanong sa model, i-total ang takeoff, subukan ang variant ng part…), bawat isa may mga tool na tinatawag nito at mga pahintulot na kailangan nito, at bawat isa ay inuulit ng aming mga test. Walang AI ang mga app. Tingnan ang [Mga recipe para sa AI assistant](common:assistants-recipes).
- **Mga wika.** Ang **Português (Portugal)** ay bago sa {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ito, ang **Português (Brasil)**, **Español (México)** at **Bahasa Indonesia** ay mayroon na ngayong bawat salita ng mga app, bilang mga draft na hindi pa nirerepaso ng katutubong nagsasalita. Nasa Ingles ang mga help topic.
- **Sinasabi ng CadCraft Studio** kung bakit pumalya ang pagsusuri ng update (walang file para sa system mo pa, walang network, maling signature) sa halip na "Done" lang, at hindi na ibinabalik ang What's new card na isinara mo hanggang may mas bagong release.

## Wala pa sa bersyong ito

- **Hindi naka-code-sign ang 0.7.** Inilipat sa 0.8 ang signing at ang Microsoft Store package dahil hindi pa dumarating ang pagpapatunay ng certificate. Suriin ang SHA-256 sa tabi ng bawat file sa getcadcraft.com/download. Sa Windows, kung pinipigilan ng SmartScreen ang installer, piliin ang {{ui:More info}}, saka {{ui:Run anyway}}. Sa Mac, sa unang pagkakataon, i-right-click ang CadCraft Studio at piliin ang {{ui:Open}}. Wala pa sa app store ang CadCraft Studio, at wala pang build para sa iPad o iPhone.
- Naka-save ang mga angle at slope list sa {{ui:Units}}, pero wala pang kahon na bumabasa nito.
- Hindi ibinabahagi ang mga field record sa live session ng CadCraft Studio (markup lang ang dinadala ng live session); pagsamahin ang mga kopya gamit ang {{ui:Merge}}.
- Kinukuha ng Merge ang buong record mula sa kopyang huling binago: kung iba-ibang field ng iisang record ang binago ng dalawang tao, mananaig ang mga field ng mas huling kopya. Pinagdurugtong ang mga thread at pangalan ng attachment.
- Pangalan lang ang mga attachment; nananatili sa kinaroroonan nila ang mga file. Walang team, notification o cloud project para sa mga record, at wala pang tool ang mga assistant para sa mga record.
- Nasubukan na ang mga field record sa browser sa laki ng telepono at tablet habang putol ang network, pero hindi pa sinusubukan nang personal sa totoong tablet.
- Mula pa sa 0.6: ang pag-ikot ng mga object ng pahina sa anumang anggulo, pagguhit ng bagong hugis direkta sa pahina, pagpalit ng font o laki ng linya, at text na dumadaloy sa maraming linya. Hindi pa nabubuksan sa Acrobat ang kopyang na-save na may pagbabago sa pahina.
- Mula pa sa 0.5: pag-undo ng pagbabago sa pahina (gaya ng pagdaragdag ng blangkong pahina), pagbasa ng text mula sa mga na-scan na sheet, at mga live session na lampas sa sarili mong network.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet).
