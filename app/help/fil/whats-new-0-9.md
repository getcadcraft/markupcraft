---
title: Ano ang bago sa 0.9 (mas maaga)
summary: Mga note at pasteboard na hindi kailanman nagpi-print, naka-encrypt na private note at malinis na kopya para sa client, batch links para sa buong set ng drawing, Arc tool na may sampung paraan, pagsunod sa ibang reviewer sa Live, at ayos para sa mga deleted markup na nananatili sa na-save na PDF.
keywords: ano ang bago 0.9, nakaraang release, whats new, what's new, 0.9, release notes, changelog, notes, pasteboard, private notes, passphrase, encrypted, itago ang notes, ipakita ang notes, clean copy, snapshot, batch links, sheet callouts, link sheets, title block, sheet number, addendum, renumber, pdf link, arc, arc methods, three point arc, radius, follow, follow me, live, class view, people list, deleted markup, tooltips, tab titles, 0.8, 0.8.1, version, bagong feature, task, tasks, assignee, due day, overdue, check now, ano ang nagbago, revisions, compare, voice note, decision, redline, answers file, drafter, assistant, mcp, problems, languages, input devices, trackpad, toolbar rows, property grid, update
from: aa3dfeb8
---

Ito ang mga nagbago sa MarkupCraft 0.9, kumpara sa 0.8.1. Ang pangunahing ideya ay nananatiling wala sa pahinang natatanggap ng client ang iyong mga working note, at maaaring i-link ang buong set ng drawing sa isang bagsakan.

## Bago

### Mga note, ang pasteboard, at mga private note

- **Ang pasteboard.** Ang lugar sa paligid ng bawat sheet ay parang mesa: anumang iguhit, i-type o i-paste sa tabi ng sheet ay isang note at hindi kailanman nagpi-print. Piliin ang {{ui:Ipakita ang pasteboard}} para mag-zoom out at magkaroon ng espasyo, o ang {{ui:Snapshot sa pasteboard}}, i-drag ang isang kahon, pagkatapos ay {{ui:Sa pasteboard}} para ilagay ang larawan ng bahagi ng drawing sa tabi ng sheet. Ang snapshot ay larawan at hindi nagbabago kapag nagbago ang sheet. Tingnan ang [Mga note, ang pasteboard, at mga private note](topic:notes-and-pasteboard).
- **Ipakita at itago ang mga note.** Anumang markup ay maaaring maging note: itakda ang {{ui:Ang mga bagong markup ay}} sa tab na {{ui:Notes}}, o ang {{ui:Ang markup na ito ay}} sa {{ui:Properties}}. Ang {{key:Shift+H}} o ang switch na {{ui:Notes}} sa ilalim ng sheet ay nagtatago at nagpapakita ng lahat ng note nang sabay-sabay. Hindi kasama ang mga note sa pag-print, flattened na kopya, listahan at export, at hindi ito ipinapakita ng ibang PDF reader. Pinapanatili ng na-save mong PDF ang mga ito para sa susunod na pagbukas mo nito sa MarkupCraft.
- **Mga private note.** Piliin ang {{ui:Magtakda ng passphrase}}, pagkatapos gawing {{ui:Isang pribadong note}} ang isang markup. Naka-encrypt ito sa file gamit ang passphrase na hindi bababa sa 10 character, at walang paraan para mabawi: walang makakabukas nito nang walang passphrase, kasama kami. Itinatago ng {{ui:I-lock}} ang mga private note; ang {{ui:Manatiling naka-unlock sa device na ito}} ay naka-off bilang default.
- **I-save ang malinis na kopya.** Inaalis ng {{ui:I-save ang malinis na kopya}} ang bawat note, private note, at lahat ng nasa pasteboard. Gamitin ito para sa file na ipapadala sa client.

### Mag-link ng buong set

- **Batch links.** Piliin ang {{ui:Mga pahina}} › {{ui:Batch links…}}, o ang {{ui:I-link ang sheet callouts…}} sa ilalim ng {{ui:Maghanap ng teksto}} sa panel na {{ui:Sheets}}. Sa Hakbang 1, nakalista ang numero at pangalan ng bawat sheet na binasa mula sa title block nito; itama ang mali. Sa Hakbang 2, nakalista ang mga callout na natagpuan, gaya ng `3/A-501` o `DETAIL 2 ON A-501`. Ipinapakita ng {{ui:Magli-link}} ang sheet at view para sa bawat isa, ipinapakita ng {{ui:Hindi naka-link}} ang mga numerong walang bukas na sheet, at ginagawa ng {{ui:Gawin ang mga link}} ang lahat ng ito sa isang undo step. Patakbuhin ulit pagkatapos ng addendum o renumbering; hindi kailanman nababago ang mga link na ginawa mo nang mano-mano. Ang link na may view ay sine-save bilang PDF link, kaya mabubuksan din ng ibang reader ang detalye. Tingnan ang [Mga sheet link](topic:sheet-links).

### Drawing

- **Arc, sampung paraan.** Ang tool na {{ui:Arko}} ({{key:O}}) ay mayroon na ngayong kahon na {{ui:Paraan ng arko}} sa ibabaw ng pahina, na may sampung paraan ng pag-guhit ng arko, at ang anggulo, haba, radius at direksyon ay maaaring i-click o i-type. Tingnan ang [Mag-drawing ng arko sa sampung paraan](topic:draw-an-arc).

### Sabay na pagtatrabaho

- **Sundan ang isang reviewer.** Sa Live session, piliin ang {{ui:Sundan}} sa tabi ng pangalan ng isang tao at gagalaw ang view mo kasabay ng kanila; kapag ikaw mismo ang nag-pan o nag-zoom, hihinto ito. Maaaring piliin ng host ang {{ui:Sabihan ang lahat na sundan ako}}. Ipinapakita ng listahan ng mga tao ang kulay, pangalan ng bawat isa, ang sheet na kinaroroonan nila, at kung kailan ang huli nilang edit. Tingnan ang [Sundan ang ibang reviewer sa Live session](topic:follow-in-live).

## Sa bawat app

- Ang mga tooltip ay Bootstrap tooltips, maaaring isara ang start tip, nagsa-scroll ang mga tab strip kapag umaapaw ang mga ito, at ang mga title ng tab ng browser ay nagbabasa ng `<document> — MarkupCraft | CadCraft`.
- Ang panel na may ilang seksyon ay nagbubukas ng isa at nagsasara ng iba (ang lock sa tabi ng caret ay nagpapanatiling bukas ng isa); pinapatay ito ng isang switch sa Mga setting.
- Ang bawat app ay nagsisimula sa default na koleksyon ng mga Library object.
- Available ang mga unit ng weight at temperature sa mga setting ng Units.

## Naayos

- **Ang mga inalis na markup ay hindi na nababasa sa loob ng na-save na PDF.** Dati, inaalis sa pahina ng pag-save ang binurang o muling isinulat na annotation, pero naiiwan ang object, kasama ang teksto nito, sa file. Ngayon, binubura na ng pag-save ang mga object na iyon. Ang mga file na na-save ng mas naunang build ay mayroon pa ring mga ito hanggang sa i-save mo ulit.

## Tapat na mga limitasyon

- Sinubukan ang batch links sa sarili naming test set. Iba-iba ang paraan ng pag-guhit ng bubble sa totoong set, kaya sa set ng client maaaring may ilang view na hindi makita. Kailangan munang gamitin ang {{ui:Basahin ang teksto (OCR)…}} sa mga naka-scan na sheet.
- Nasubukan ang mga note, private note at pasteboard sa headless browser at sa sarili naming mga file, hindi sa malaking totoong vector set at hindi sa totoong Live session ng dalawang tao. Hindi pa nagagawa ang pagpapalit ng passphrase. Hindi ipinapakita ang mga note ng build na mas luma sa 0.9.
- Ang class view ay ang listahan ng mga tao; hindi pa ito nasusubukan kasama ang totoong guro at mga estudyante.
- Ang mga wikang hindi Ingles ay machine draft hangga't hindi ito nababasa ng isang native speaker.
- Hindi naka-code-sign ang mga Windows installer (Higit pang impormasyon, pagkatapos Patakbuhin pa rin); hindi notarized ang macOS disk image (right-click, pagkatapos Buksan).

## Mas maaga: 0.8 at 0.8.1

Ito ang mga nagbago sa MarkupCraft 0.8 at 0.8.1, kumpara sa 0.7. Ang pinakamalaking bagong bagay ay maaaring maging task ang isang markup na gagawin ng isang tao o ng sarili mong assistant, at kusa itong nagsasara kapag talagang nagbago ang drawing.

### Bago

**Mga markup na may ginagawa**

- **Gawing task ang markup.** Piliin ang isa o higit pang markup, buksan ang tab na {{ui:Tasks}} at piliin ang {{ui:Gawing task ang napili}}. May title ang task, isang tao o ang nakakonektang assistant mo ang gagawa nito, opsyonal na due day at estado, at pinapanatili nito ang puwesto nito sa sheet at ang thread nito. Tingnan ang [Gawing task ang markup](topic:markups-that-act).
- **Mga task na kusang nagsasara.** Maaaring bantayan ng task ang drawing sa loob ng markup nito. Magbukas ng mas bagong revision ng sheet at piliin ang {{ui:Suriin ngayon}}: kung nagbago ang mga linya sa lugar na iyon nang higit sa kaunti, mamarkahang Done ang task, magiging Completed ang markup nito, at may note sa thread na nagsasabi kung ano ang nagbago. Hindi binibilang ang bagong date stamp, o mga linyang lumipat nang mas mababa sa 1.5 point. Maaari ring bantayan ng task ang isang model element: iniuulat ito ng assistant mo gamit ang `tasks_check`, at ang susunod na ulat na iba, o ang na-delete na element, ang magsasara sa task. Isang undo step ang magbabalik nito.
- **Hanapin ang trabaho.** I-filter ang listahan ng {{ui:Tasks}} ayon sa estado at kung para kanino, kasama ang {{ui:Overdue}}; piliin ang {{ui:Itinalaga kay}}, pagkatapos ang {{ui:Assistant}} para makita kung ano ang naghihintay sa assistant mo. Ang task na lampas na sa due day nito ay lumalabas bilang babala sa panel ng Problema. Ini-export ng {{ui:CSV}} ang listahan. Naka-save ang mga task sa PDF kasama ng markup at dumadaan sa Live tulad ng iba pang property ng markup.

**Ano ang nagbago, bilang simpleng listahan**

- **Ilista ang mga pagbabago.** Buksan ang tab na {{ui:Ihambing}}, pagkatapos ang Ihambing ang buong set, piliin ang mas maaga at mas bagong file, at piliin ang {{ui:Ilista ang mga pagbabago}}. Nagsisimula ang listahan sa bilang, pagkatapos sinasaklaw nito ang bawat sheet na nagbago, pinakamalaki muna: saan sa sheet, gaano kalaki (sa totoong units at gayundin sa paper inches sa calibrated na sheet), kung may linyang idinagdag o inalis, ilang markup ang nakalagay doon, at aling mga salita ang lumitaw o nawala. Ilalagay ng {{ui:Kopyahin ang listahan}} ito sa clipboard, at isinusulat ng {{ui:CSV}} ang isang row bawat pagbabago. Tingnan ang [Ilista kung ano ang nagbago sa pagitan ng mga revision](topic:what-changed-in-words).

**Mga voice note at desisyon**

- **Mga voice note.** Sa tab na {{ui:Notes}}, piliin ang {{ui:I-record ang voice note}}, pagkatapos {{ui:Itigil ang pag-record}}; kusang humihinto ang mga recording pagkalipas ng dalawang minuto. Nakakabit ang note sa gitna ng sheet, i-drag mo ito kung saan ito dapat, at mag-type ka ng caption sa {{ui:Properties}}, at ang {{ui:I-play}} sa listahan ay nagpapatugtog nito. Naka-save ang recording sa loob ng PDF.
- **Mga desisyon.** Ang {{ui:I-pin ang desisyon}} ay nagsusulat ng isa o dalawang pangungusap sa sheet. Kung pumapalit ito sa naunang desisyon, piliin iyon sa {{ui:Pinapalitan nito}}: mananatili ang luma, mamarkahang Replaced, at tuturo sa bago. Isang undo step ang magbabalik nito. Tingnan ang [I-pin ang mga voice note at desisyon sa sheet](topic:voice-notes-and-decisions).

**Redline sa revision**

- **Magpadala at sumagot.** Sa tab na {{ui:Tasks}}, buksan ang {{ui:Redline sa revision}}, i-type ang revision na pinaghahambingan ng mga markup at piliin ang {{ui:I-export ang redline file}}. Makakakuha ka ng `.redline.json` file na may isang item bawat bukas na markup: sheet, posisyon (bilang fraction ng sheet, kaya tugma pa rin kahit i-plot muli sa ibang laki), mga salita, author, thread at task nito. Ang sumulat ng mga pagbabago ay sumasagot ng Accepted, Rejected o Done sa isang `.redline-answers.json` file; ang {{ui:I-load ang answers file…}} ay nagbibigay sa bawat markup ng status na iyon at ng note ng drafter, bilang isang undo step. Tingnan ang [Ipadala ang mga markup sa drafter bilang redline](topic:redline-to-revision).

**Mga AI assistant**

- **Mas maraming tool.** Ang assistant na nakakonekta mo sa pamamagitan ng CadCraft Studio ay maaaring maglista ng mga task (`tasks_list`), gumawa o magbago ng isa (`task_set`), tanggalin ang task (`task_clear`), suriin ang isa laban sa mas bagong revision o element (`tasks_check`), at basahin ang simpleng listahan ng mga pagbabago sa pagitan ng dalawang bukas na plan set (`revisions_changes`). Tanging ang mga tool na itinick mo sa ilalim ng switch na Mga assistant ang makukuha nito, at bawat pagbabago ay isang undo step. Tingnan ang [Gamitin ang MarkupCraft kasama ng AI assistant](topic:use-with-ai-assistants).

### Sa bawat app

- **Mga wika.** Mayroon nang 54 na wika ang CadCraft Studio. Sampu ang bago: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek. Lahat ng hindi Ingles ay machine draft hangga't hindi ito nababasa ng isang native speaker.
- **Mga input device.** Itinatakda ng {{ui:Mga setting}} › {{ui:Global}} › {{ui:Mga input device}} kung ano ang gagawin ng trackpad, ng side button ng mouse mo, ng pen, ng finger tap, ng 3D mouse, ng game controller o ng MIDI controller, para sa bawat app o para sa app na ito lamang. Hangga't wala kang binabago, gumagana ang bawat device gaya ng dati. Tingnan ang [Gamitin ang trackpad, 3D mouse o controller](common:input-devices).
- **Mga row ng toolbar.** Ang {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga row ng toolbar}} ay may {{ui:Wrap}} (ang default), {{ui:2 row}} at {{ui:1 row}}, para magkaroon ng mas maraming espasyo ang drawing. Tingnan ang [Ayusin ang mga panel](common:arrange-panels).
- **Property grid.** Ang mga field ng Style ng markup ay gumagamit ng shared grid, na may mga kategoryang maaaring itiklop at mga column ng label at value.
- **Panel ng Problema.** Ang mga babala mula sa app, gaya ng task na lampas na sa takda, ay natitipon sa iisang panel ng Problema.
- **Live at add-on.** Inilalarawan ang mga Live session sa [Makipagtulungan nang live](common:work-together-live); ang listahan ng add-on na sumusunod sa account mo ay nasa [Mga add-on at listahan ng account mo](common:addons-basics).
- **Ikonekta ang AI mo.** Ang CadCraft Studio ang sentro para sa sarili mong assistant: ikonekta nang isang beses para sa lahat ng walong app. Walang sariling AI ang mga app.

### Naayos sa 0.8.1

- **Nakapagpapalit ng wika ang Studio habang tumatakbo.** Dati, nanatiling Ingles ang desktop app at ang mga packed na edition. Hindi pa ito nasusubukan sa bawat platform: sabihin sa amin kung hindi nagbabago ang wika.
- Ina-alok sa mga install ng Studio 0.8 ang 0.8.1 sa pamamagitan ng {{ui:Mga setting}} › {{ui:Mga update}}.

### Wala pa sa bersyong ito

- **Hindi naka-code-sign.** Walang signature pa ang mga Windows installer at ang macOS .dmg. Sa Windows, kung hihinto ng SmartScreen ang installer, piliin ang {{ui:Higit pang impormasyon}}, pagkatapos {{ui:Patakbuhin pa rin}}. Sa Mac, i-right-click ang CadCraft Studio at piliin ang {{ui:Buksan}}. Naka-hold ang mga store build.
- **Hindi pa tapos ang pagkonekta ng AI sa ilang bahagi.** Hindi ipinangako sa release na ito ang one-click na pagkonekta sa loob ng Studio, ang hosted connector para sa browser assistant, at ang sarili mong API key sa loob ng Studio. Nasubukan na ang task loop, pero hindi pa kasama ang totoong assistant.
- **Kailangan ng mga task check ang parehong laki ng pahina.** Hindi tutugma ang sheet na na-replot sa ibang laki, kaya hindi magsasara ang mga task nito. Ipinapares ang mga sheet ayon sa numero ng sheet, o kung wala, ayon sa posisyon ng pahina.
- **Recording lang ang mga voice note.** Walang transcript, at nakikita ng assistant ang haba, author at caption ng note, hindi ang tunog. Sinubukan ang recording gamit ang pekeng mikropono sa headless browser; hindi pa nasusuri ang totoong mikropono sa telepono, tablet o laptop.
- **Ang mga calc sheet at dahilan sa PDF** ay nakatago sa isang private entry ng file. Binabalewala ng mas lumang MarkupCraft ang entry na iyon at inaalis ito sa susunod na pag-save ng file, kaya buksan at i-save ang ganoong file gamit ang 0.8 o mas bago.
- **Ang panig ng drafter sa redline.** Hindi pa nagagawa ang CadCraft na magbasa at sumagot sa redline file.
- **Iba pang wika.** Umaapaw ng 528 px ang app bar ng Tamil.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Para sa release bago nito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
