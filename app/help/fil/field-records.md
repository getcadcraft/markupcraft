---
title: Subaybayan ang mga RFI, submittal at daily log
summary: Ilagay ang mga RFI, submittal at daily log sa mga sheet, kasama ang mga numero, nakatalaga, due date at thread; i-filter ang mga lampas na sa takdang petsa; mag-export ng CSV o BCF; gumana offline at i-merge ang mga kopya.
keywords: rfi, kahilingan para sa impormasyon, submittal, daily log, field report, talaarawan sa site, konstruksyon, overdue, due date, nakatalaga sa akin, thread, attachment, merge, offline, tablet, bcf, csv, field
from: 95039c5a
---

Itinatago ng tab na {{ui:Field}} ang tatlong uri ng record sa tabi ng mga markup mo. Bawat isa ay nakakabit sa isang sheet; ang RFI o submittal ay mayroon ding pin sa lugar sa sheet na tinutukoy nito.

- **RFI**: isang tanong para sa design team. Mga status: Bukas, Nasagot, Sarado.
- **Submittal**: isang bagay na kailangang suriin bago magpatuloy ang trabaho. Mga status: Bukas, Sinusuri, Aprubado, Aprubado na may tala, I-revise at isumite muli, Sarado.
- **Daily log**: panahon ng araw, bilang ng tao sa site at ang trabahong nagawa. Mga status: Draft, Final.

May sariling numero ang bawat record sa uri nito (RFI-0001, SUB-0001, LOG-0001), pamagat, teksto, nakatalagang tao, due date, thread ng mga reply, at listahan ng mga pangalan ng attachment.

## Magdagdag ng isa

1. Buksan ang tab na {{ui:Field}} at piliin ang {{ui:RFI}} o {{ui:Submittal}}.
2. I-tap o i-click ang sheet kung saan ito nararapat. Lalabas ang isang pin at bubukas ang record sa tab.
3. Punan ang pamagat, ang tanong o paglalarawan, kung sino ang itinalaga rito at kung kailan ang due date.

Idinadagdag ang daily log sa bukas na sheet nang walang pin. Maglalagay ng pin dito sa susunod ang {{ui:Ilagay ang pin}}; ililipat ng {{ui:Ilipat ang pin}} ang alinmang pin. Kapag na-tap ang pin sa sheet, bubukas ang record nito.

## Sumagot at subaybayan

Palitan ang {{ui:Status}} at maitatala ang pagbabago sa thread. Sumulat ng reply at piliin ang {{ui:Ipadala ang reply}} (nagpapadala rin ang Ctrl+Enter). Pangalan lang ang mga attachment: mag-type ng isa o pumili ng mga file, at sasabihin ng listahan sa team kung ano ang kasama ng record. Nananatili sa dating lugar ang mga file mismo.

Ang record na lampas na ang due date at naghihintay pa (RFI na hindi Nasagot o Sarado, submittal na hindi pa napagpapasyahan) ay minarkahan ng **Overdue**, sa pula, sa listahan at sa pin nito.

## Hanapin ang mahalaga

Nasa itaas ng listahan ang mga filter: uri, status, due date (overdue, due sa loob ng 7 araw, may o walang due date), ang sheet na ito o lahat ng sheet, paghahanap ng teksto, at ang {{ui:Nakatalaga sa akin}}, na pinaghahambing ang nakatalaga sa pangalan na kilala sa iyo ng MarkupCraft (tingnan ang [Itakda ang pangalan mo](topic:set-your-name)). Binibilang ng linyang nasa ilalim ng mga filter kung ano ang ipinapakita at kung ilan ang overdue.

## I-export

Isinusulat ng {{ui:CSV}} ang mga nakalistang record bilang spreadsheet. Isinusulat ng {{ui:BCF}} ang mga ito bilang BCF topic, bawat isa may snapshot ng lugar nito sa sheet, para mailista ng ibang BCF tool. Sumusunod pareho sa mga filter ang dalawa.

## I-save, offline at pag-merge ng mga kopya

Naka-save ang mga record sa loob ng PDF kapag ini-save ito, at bumabalik ang mga ito kapag binuksan. Walang kailangang network: magdagdag, mag-edit, sumagot at mag-save sa tablet sa basement, saka ibalik ang PDF. Nabubuksan pa rin nang gaya ng dati ang mas lumang PDF, at ang mga PDF mula sa ibang program.

Para pagsamahin ang dalawang kopya, buksan ang isa at piliin ang {{ui:Merge}}, saka pumili ng isa pang kopya ng parehong PDF. Pinagsasama ang mga record ayon sa kanilang id:

- idinadagdag ang record na nasa isang kopya lang;
- ang record na nasa parehong kopya ay kukunin ang mga field nito (pamagat, teksto, status, nakatalaga, due date) mula sa kopyang huling nabago, nang buo, kaya kung magkaibang field ng iisang record ang binago ng dalawang tao, mananaig ang bersyon ng mas huling kopya; pinagsasama ang mga thread at pangalan ng attachment mula sa parehong kopya;
- kung pareho ang numerong ibinigay ng dalawang kopya sa bagong record, ang dumating ay makakakuha ng susunod na bakanteng numero;
- ang record na inalis sa isang kopya ay mananatiling inalis maliban kung na-edit ito pagkatapos.

Isang I-undo na hakbang lang ang isang merge.

## Mga limitasyon

- Hindi pa naibabahagi ng Live TeamWork ang mga record; gamitin ang Merge.
- Walang team, notification o cloud project para sa mga record sa bersyong ito.
- Kapag binura ang pahina sa PDF, kasama nitong mabubura ang mga record nito (binibilang sila ng kumpirmasyon ng pahina).
