---
title: Iztīrīt pildspalvas līnijas un ievietot pārskatīšanas komentārus un būvlaukuma gaitu
summary: Pārvērtiet brīvroku pildspalvas līnijas līnijās, apļos, lokos un taisnstūros; ievietojiet atļaujas pakotnes pārskatīšanas komentārus un vietnes uzmērīšanas gaitu kā piezīmes.
keywords: pildspalva, brīvroka, iztīrīt, iztaisnot, aplis, līnija, taisnstūris, loks, atļauja, pārskatīšanas komentāri, gaita, drons, skenēšana, uzmērījums, piezīmes, csv
from: 547d8e42
---

## Iztīrīt pildspalvas līnijas

Zīmējiet ar {{ui:Pildspalva}}, tad atveriet izvēlni {{ui:Vēl}} grupā Rediģēt un izvēlieties {{ui:Iztīrīt pildspalvas līnijas}}. Katra atlasītā pildspalvas līnija kļūst par to, kas tai bija paredzēts: taisna līnija kļūst par līniju (precīzi horizontālu vai vertikālu, ja tā bija gandrīz tāda), apaļa — par elipsi, daļa no apļa — par loku, slēgta četrstūra forma — par taisnstūri, pārējās — par polilīniju vai daudzstūri. Kopā zīmētu līniju gali tiek savilkti kopā. Ja nav atlasīta neviena pildspalvas līnija, tiek iztīrītas visas pildspalvas līnijas atvērtajā lapā. Tas ir viens atsaukšanas solis: Ctrl+Z atjauno brīvroku. Forma tiek aprēķināta jūsu datorā pēc fiksētiem noteikumiem; nekas nekur netiek sūtīts.

## Ievietot pārskatīšanas komentārus

BimCraft atļaujas pakotne satur `01-review-comments.csv`: komentārus, ko plānu pārskatītājs, visticamāk, izteiks; katrs ar noteikumu, punktu, nepieciešamo, atrasto un to, kas jādara. Cilnē {{ui:Uzdevumi}} atveriet {{ui:Atļaujas pārskatīšanas komentāri}} un izvēlieties {{ui:Ievietot komentārus (CSV)}}. Katrs komentārs kļūst par atvērtu piezīmi kolonnā atvērtās lapas kreisajā malā; velciet katru uz vietu, uz kuru tas attiecas. Tie tiek aprēķināti no esošajām pārbaudēm, nevis no plānu eksperta.

## Ievietot HAZOP mezglu lodziņus

CadCraft P&ID papildinājums zīmē HAZOP pētījuma mezglus un var tos saglabāt kā {{ui:HAZOP mezglu lodziņi}} (JSON fails). Atveriet šeit izdrukāto P&ID lapu, dodieties uz cilni {{ui:Uzdevumi}}, atveriet {{ui:HAZOP mezglu lodziņi}} un izvēlieties {{ui:Ievietot mezglu lodziņus (JSON)}}. Katrs mezgls kļūst par atvērtu taisnstūri lapā ar tā numuru, nosaukumu, iekārtu un līnijām tekstā, un komanda savus secinājumus raksta kā atbildes tam. Lapa tiek ņemta kā drukāta pilnā izmērā no zīmējuma apakšējā kreisā stūra; ja tā drukāta citā mērogā, vispirms ierakstiet šo skaitli laukā {{ui:Drukāts mērogā}} (0.5 nozīmē 1:2). Mezgls, kas atrodas ārpus lapas, netiek zīmēts, un panelī norādīts, cik tādu ir. Marķieri ir pētījuma palīglīdzeklis: tie parāda, kur atrodas mezgli, bet pētījumu nevērtē.

## Ievietot būvlaukuma gaitu

CivilCraft glabā rindu katram drona lidojumam vai vietnes skenēšanai. Cilnē {{ui:Uzdevumi}} atveriet {{ui:Būvlaukuma gaita}} un izvēlieties {{ui:Ievietot gaitu (JSON)}}. Katrs uzmērījums kļūst par piezīmi atvērtajā lapā, kurā teikts, cik daļa ir paveikta, cik vēl jānogriež vai jāaizber, kas ir pārrakts vai pārbērts un kas atrodas ārpus plāna. Uzmērījums ar kaut ko ārpus plāna paliek Atvērts; tīrs uzmērījums tiek Pieņemts.
