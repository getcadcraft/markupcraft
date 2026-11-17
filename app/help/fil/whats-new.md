---
title: Ano ang bago sa 0.9
summary: Mga note at pasteboard na hindi kailanman nagpi-print, naka-encrypt na pribadong note at malinis na kopya para sa kliyente, batch link para sa buong drawing set, Arc tool na may sampung paraan, pagsunod sa ibang reviewer sa Live, at pag-ayos sa mga binurang markup na nananatili sa na-save na PDF.
keywords: ano ang bago, 0.9, release notes, changelog, notes, pasteboard, pribadong note, passphrase, naka-encrypt, itago ang note, ipakita ang note, malinis na kopya, snapshot, batch link, sheet callout, i-link ang sheet, title block, sheet number, addendum, renumber, pdf link, arc, arc method, three point arc, radius, follow, sundan, sundan ako, live, class view, listahan ng tao, binurang markup, tooltip, pamagat ng tab, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, task, tasks, assignee, due day, overdue, suriin ngayon, ano ang nagbago, revision, compare, voice note, decision, redline, answers file, drafter, assistant, mcp, problema, wika, input device, trackpad, toolbar row, property grid, update
from: dbdd7ed4
---

Ito ang mga nagbago sa MarkupCraft 0.9, kumpara sa 0.8.1. Ang pangunahing ideya ay nananatiling wala sa pahinang natatanggap ng kliyente ang iyong mga working note, at maaaring i-link ang buong drawing set sa isang pasada.

## Bago

### Mga note, ang pasteboard at mga pribadong note

- **Ang pasteboard.** Ang lugar sa paligid ng bawat sheet ay parang mesa: anumang iginuhit, tinype o idinikit sa tabi ng sheet ay note at hindi kailanman nagpi-print. Piliin ang {{ui:Ipakita ang pasteboard}} para mag-zoom out at magkaroon ng espasyo, o {{ui:Snapshot sa pasteboard}}, i-drag ang kahon, pagkatapos {{ui:Sa pasteboard}} para ilagay ang larawan ng bahagi ng drawing sa tabi ng sheet. Ang snapshot ay larawan at hindi nagbabago kapag nagbago ang sheet. Tingnan ang [Mga note, ang pasteboard at mga pribadong note](topic:notes-and-pasteboard).
- **Ipakita at itago ang mga note.** Anumang markup ay maaaring maging note: itakda ang {{ui:Ang mga bagong markup ay}} sa tab na {{ui:Notes}}, o {{ui:Ang markup na ito ay}} sa {{ui:Properties}}. Ang {{key:Shift+H}} o ang switch na {{ui:Notes}} sa ilalim ng sheet ay nagtatago at nagpapakita ng lahat ng note nang sabay-sabay. Hindi kasama sa pag-print, mga flattened na kopya, listahan at export ang mga note, at hindi ito ipinapakita ng ibang PDF reader. Pinapanatili ng na-save mong PDF ang mga ito para sa susunod na pagbukas mo nito sa MarkupCraft.
- **Mga pribadong note.** Piliin ang {{ui:Magtakda ng passphrase}}, pagkatapos gawing {{ui:Isang pribadong note}} ang isang markup. Naka-encrypt ito sa file gamit ang passphrase na hindi bababa sa 10 karakter, at walang pagbawi: walang makakabukas nito nang walang passphrase, kasama kami. Itinatago ng {{ui:I-lock}} ang mga pribadong note; naka-off bilang default ang {{ui:Manatiling naka-unlock sa device na ito}}.
- **I-save ang malinis na kopya.** Tinatanggal ng {{ui:I-save ang malinis na kopya}} ang bawat note, pribadong note at lahat ng nasa pasteboard. Gamitin ito para sa file na ipinapadala sa kliyente.

### I-link ang buong set

- **Batch links.** Piliin ang {{ui:Mga pahina}} › {{ui:Batch links…}}, o ang {{ui:Link sheet callouts…}} sa ilalim ng {{ui:Find text}} sa panel na {{ui:Sheets}}. Hakbang 1: nakalista ang numero at pangalan ng bawat sheet gaya ng nabasa mula sa title block nito; ayusin ang anumang mali. Hakbang 2: nakalista ang mga callout na nahanap, gaya ng `3/A-501` o `DETAIL 2 ON A-501`. Ipinapakita ng {{ui:Ilalagay ang link}} ang sheet at view para sa bawat isa, ipinapakita ng {{ui:Hindi naka-link}} ang mga numerong walang bukas na sheet, at ginagawa ng {{ui:Gawin ang mga link}} ang lahat ng ito sa isang hakbang ng undo. Patakbuhin ulit ito pagkatapos ng addendum o pagre-renumber; hindi kailanman nababago ang mga link na ginawa mo nang manwal. Ang link na may view ay naka-save bilang PDF link, kaya mabubuksan din ng ibang reader ang detalye. Tingnan ang [Mga sheet link](topic:sheet-links).

### Pagguhit

- **Arc, sampung paraan.** Ang {{ui:Arko}} tool ({{key:O}}) ay mayroon na ngayong kahon na {{ui:Paraan ng arko}} sa ibabaw ng pahina, na may sampung paraan para gumuhit ng arko, at ang anggulo, haba, radius at direksyon ay maaaring i-click o i-type. Tingnan ang [Gumuhit ng arko sa sampung paraan](topic:draw-an-arc).

### Sabay-sabay na pagtatrabaho

- **Sundan ang reviewer.** Sa Live session, piliin ang {{ui:Sundan}} sa tabi ng pangalan ng isang tao at gagalaw ang view mo kasabay ng kanila; kapag ikaw mismo ang nag-pan o nag-zoom, hihinto ito. Maaaring piliin ng host ang {{ui:Sabihan ang lahat na sundan ako}}. Ipinapakita ng listahan ng tao ang color ng bawat tao, ang pangalan, ang sheet na kinaroroonan nila, at kung kailan ang huling edit nila. Tingnan ang [Sundan ang ibang reviewer sa isang Live session](topic:follow-in-live).

## Sa bawat app

- Ang tooltip ay Bootstrap tooltip, maaaring isara ang start tip, nagsa-scroll ang tab strip kapag umapaw, at ang pamagat ng browser tab ay nagbabasa ng `<document> — MarkupCraft | CadCraft`.
- Ang panel na may ilang seksyon ay nagbubukas ng isa at nagsasara ng iba (ang lock sa tabi ng caret ay nagpapanatili ng isang bukas); ang switch sa Mga setting ang nag-o-off nito.
- Nagsisimula ang bawat app sa default na koleksyon ng mga Library object.
- Available na ang mga unit ng timbang at temperatura sa mga setting ng Units.

## Naayos

- **Hindi na nababasa sa loob ng na-save na PDF ang mga inalis na markup.** Dati, tinatanggal ng pag-save sa pahina ang binurang o muling isinulat na annotation pero iniiwan ang object, kasama ang teksto nito, sa file. Ngayon, binubura na ng pag-save ang mga object na iyon. Ang mga file na na-save ng mas naunang build ay mayroon pa rin ng mga ito hanggang i-save mo ulit.

## Mga totoong limitasyon

- Nasubukan ang batch link sa sarili naming test set. Iba-iba ang pagguhit ng bubble ng totoong set, kaya sa set ng kliyente, maaaring may ilang view na hindi makita. Kailangan munang {{ui:Basahin ang teksto (OCR)…}} ang mga scanned na sheet.
- Nasubukan ang mga note, pribadong note at pasteboard sa headless browser at sa sarili naming file, hindi sa malaking totoong vector set at hindi sa totoong Live session ng dalawang tao. Hindi pa nagagawa ang pagpapalit ng passphrase. Hindi ipinapakita ng mga build na mas luma sa 0.9 ang mga note.
- Ang class view ay ang listahan ng tao; hindi pa ito nasusubukan kasama ang totoong guro at mga estudyante.
- Ang mga wikang maliban sa Ingles ay machine draft hanggang mabasa ng native speaker.
- Hindi naka-code-sign ang mga Windows installer (Higit pang impormasyon, pagkatapos Patakbuhin pa rin); hindi na-notarize ang macOS disk image (i-right-click, pagkatapos Buksan).

## Mas maaga: 0.8 at 0.8.1

Ito ang mga nagbago sa MarkupCraft 0.8 at 0.8.1, kumpara sa 0.7. Ang pinakamalaking bagong feature ay ang markup na maaaring maging task na ginagawa ng isang tao o ng sarili mong assistant, at kusang nagsasara kapag talagang nagbago ang drawing.

### Bago

**Mga markup na may gawain**

- **Gawing task ang markup.** Pumili ng isa o higit pang markup, buksan ang tab na {{ui:Tasks}} at piliin ang {{ui:Gawing task ang napili}}. May title ang task, isang tao o ang konektadong assistant mo na gagawa nito, opsyonal na due day at state, at pinapanatili nito ang lugar nito sa sheet at ang thread nito. Tingnan ang [Gawing task ang markup](topic:markups-that-act).
- **Mga task na kusang nagsasara.** Maaaring bantayan ng task ang drawing sa loob ng markup nito. Buksan ang mas bagong revision ng sheet at piliin ang {{ui:Suriin ngayon}}: kung nagbago ang mga linya sa lugar na iyon nang higit sa kaunti, mamarkahan ang task bilang Done, magiging Completed ang markup nito, at magsasabi ang note sa thread kung ano ang nagbago. Ang bagong date stamp, o mga linyang gumalaw nang mas mababa sa 1.5 point, ay hindi binibilang. Sa halip, maaaring bantayan ng task ang isang model element: iniuulat ng assistant mo ang element gamit ang `tasks_check`, at ang susunod na ulat na iba, o ang binurang element, ang magsasara ng task. Isang hakbang ng undo ang muling magbubukas nito.
- **Hanapin ang trabaho.** I-filter ang listahan ng {{ui:Tasks}} ayon sa state at kung para kanino ito, kasama ang {{ui:Overdue}}; piliin ang {{ui:Assigned to}}, pagkatapos {{ui:Assistant}} para makita ang naghihintay sa assistant mo. Ang task na lampas na sa due day nito ay lumalabas bilang babala sa panel ng Problema. Ini-export ng {{ui:CSV}} ang listahan. Naka-save ang mga task sa PDF kasama ang markup, at dumadaan sa Live gaya ng iba pang property ng markup.

**Ano ang nagbago, bilang simpleng listahan**

- **Ilista ang mga pagbabago.** Buksan ang tab na {{ui:Compare}}, pagkatapos {{ui:Ihambing ang buong set}}, piliin ang mas maagang at mas huling file, at piliin ang {{ui:Ilista ang mga pagbabago}}. Nagsisimula ang listahan sa bilang, pagkatapos sinasaklaw nito ang bawat nagbagong sheet, ang pinakamalaking pagbabago muna: kung nasaan ito sa sheet, gaano kalaki (sa totoong unit at sa inches sa papel sa calibrated na sheet), kung may nadagdag o natanggal na linya, ilang markup ang nakalagay doon, at aling mga salita ang lumitaw o nawala. Inilalagay ng {{ui:Kopyahin ang listahan}} ito sa clipboard, at nagsusulat ang {{ui:CSV}} ng isang row bawat pagbabago. Tingnan ang [Ilista ang mga pagbabago sa pagitan ng mga revision](topic:what-changed-in-words).

**Voice note at mga desisyon**

- **Voice note.** Sa tab na {{ui:Notes}}, piliin ang {{ui:I-record ang voice note}}, pagkatapos {{ui:Itigil ang pag-record}}; kusang humihinto ang mga recording pagkalipas ng dalawang minuto. Naka-pin ang note sa gitna ng sheet; i-drag mo ito sa tamang lugar at i-type ang caption sa {{ui:Properties}}, at ang {{ui:I-play}} sa listahan ang magpapatugtog nito. Naka-save ang recording sa loob ng PDF.
- **Mga desisyon.** Ang {{ui:I-pin ang desisyon}} ay nagsusulat ng isa o dalawang pangungusap sa sheet. Kung pinapalitan nito ang naunang desisyon, piliin iyon sa {{ui:Pinapalitan nito}}: mananatili ang luma, mamarkahang Replaced, at nakaturo sa bago. Isang hakbang ng undo ang magbabalik nito. Tingnan ang [I-pin ang voice note at mga desisyon sa sheet](topic:voice-notes-and-decisions).

**Redline sa revision**

- **Ipadala at sumagot.** Sa tab na {{ui:Tasks}}, buksan ang {{ui:Redline sa revision}}, i-type ang revision na kinukumpara ng mga markup, at piliin ang {{ui:I-export ang redline file}}. Makakakuha ka ng file na `.redline.json` na may isang item bawat bukas na markup: sheet, posisyon (bilang bahagi ng sheet, para tumugma pa rin kahit i-plot muli sa ibang laki), mga salita, author, thread at task nito. Ang sinumang gumuhit ng pagbabago ay sumasagot ng Accepted, Rejected o Done sa file na `.redline-answers.json`; ang {{ui:I-load ang answers file…}} ang magbibigay sa bawat markup ng status na iyon at ng note ng drafter, bilang isang hakbang ng undo. Tingnan ang [Ipadala ang mga markup sa drafter bilang redline](topic:redline-to-revision).

**AI assistant**

- **Mas maraming tool.** Ang assistant na ikinonekta mo sa pamamagitan ng CadCraft Studio ay maaaring maglista ng task (`tasks_list`), gumawa o magbago ng isa (`task_set`), alisin ang task (`task_clear`), suriin ang isa laban sa mas bagong revision o element (`tasks_check`), at basahin ang simpleng listahan ng mga pagbabago sa pagitan ng dalawang bukas na plan set (`revisions_changes`). Tanging ang mga tool na tsinek mo sa ilalim ng switch na Assistants ang makukuha nito, at bawat pagbabago ay isang hakbang ng undo. Tingnan ang [Gamitin ang MarkupCraft kasama ang AI assistant](topic:use-with-ai-assistants).

### Sa bawat app

- **Mga wika.** Mayroon nang 54 na wika ang CadCraft Studio. Sampu ang bago: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek. Lahat ng hindi Ingles ay machine draft hanggang mabasa ng native speaker.
- **Mga input device.** Itinatakda ng {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} kung ano ang gagawin ng trackpad, side button ng mouse, pen, tap ng daliri, 3D mouse, game controller o MIDI controller, para sa bawat app o para sa app na ito lamang. Hangga't wala kang binabago, gumagana ang bawat device gaya ng dati. Tingnan ang [Gamitin ang trackpad, 3D mouse o controller](common:input-devices).
- **Mga row ng toolbar.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ay may {{ui:Wrap}} (ang default), {{ui:2 rows}} at {{ui:1 row}}, para magkaroon ng mas maraming espasyo ang drawing. Tingnan ang [Ayusin ang mga panel](common:arrange-panels).
- **Property grid.** Ginagamit ng mga field ng Style ng markup ang shared grid, na may mga category na natitiklop at mga column ng label at value.
- **Problems panel.** Ang mga babala mula sa app, gaya ng task na lampas na sa takda, ay nagtitipon sa iisang panel ng Problema.
- **Live at mga add-on.** Inilalarawan ang mga live session sa [Magtrabaho nang sabay-sabay nang live](common:work-together-live); ang listahan ng add-on na sumusunod sa account mo ay nasa [Mga add-on at listahan ng iyong account](common:addons-basics).
- **Ikonekta ang AI mo.** Ang CadCraft Studio ang sentro para sa sarili mong assistant: ikonekta nang isang beses para sa lahat ng walong app. Walang sariling AI ang mga app.

### Naayos sa 0.8.1

- **Napapalitan ng Studio ang wika habang tumatakbo.** Dati, nanatili sa Ingles ang desktop app at ang mga packed edition. Hindi pa ito nasusubukan sa bawat platform: sabihan kami kung hindi nagbabago ang wika.
- Inaalok ang 0.8.1 sa mga install ng Studio 0.8 sa pamamagitan ng {{ui:Mga setting}} › {{ui:Mga update}}.

### Wala pa sa bersyong ito

- **Hindi naka-code-sign.** Walang signature pa ang mga Windows installer at ang macOS .dmg. Sa Windows, kung hihinto ang installer ng SmartScreen, piliin ang {{ui:Higit pang impormasyon}}, pagkatapos {{ui:Patakbuhin pa rin}}. Sa Mac, i-right-click ang CadCraft Studio at piliin ang {{ui:Buksan}}. Naka-hold ang mga store build.
- **Hindi pa tapos ang pagkonekta ng AI sa ilang bahagi.** Hindi ipinangako para sa release na ito ang one-click na pagkonekta sa loob ng Studio, ang hosted connector para sa browser assistant, at ang sarili mong API key sa loob ng Studio. Nasubukan na ang task loop, pero hindi pa kasama ang totoong assistant.
- **Kailangan ng mga pagsusuri ng task ang parehong laki ng pahina.** Hindi tutugma ang sheet na na-plot muli sa ibang laki, kaya hindi nagsasara ang mga task nito. Ipinapares ang mga sheet ayon sa sheet number, kung wala ay ayon sa posisyon ng pahina.
- **Recording lang ang voice note.** Walang transcript, at ang nakikita ng assistant ay ang haba ng note, author at caption, hindi ang tunog. Sinubukan ang recording gamit ang pekeng mikropono sa headless browser; kailangan pa ring suriin ang totoong mikropono sa phone, tablet o laptop.
- **Ang calc sheet at dahilan sa PDF** ay nakalagay sa pribadong entry ng file. Hindi ito pinapansin ng mas lumang MarkupCraft at tinatanggal sa susunod na pag-save ng file, kaya buksan at i-save ang ganoong file gamit ang 0.8 o mas bago.
- **Ang panig ng drafter sa redline.** Hindi pa nagagawa ang pagbabasa at pagsagot ng CadCraft sa redline file.
- **Iba pang wika.** Umaapaw ng 528 px ang app bar ng Tamil.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Para sa release bago ito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
