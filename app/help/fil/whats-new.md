---
title: Ano ang bago sa 0.8 at 0.8.1
summary: Mga markup na nagiging task at kusang nagsasara, plain na listahan ng mga pagbabago sa pagitan ng mga revision, voice note at desisyon sa plano, redline file para sa drafter, at ang mga shared na pagbabago sa 0.8: input device, toolbar rows, Problems, at mas maraming wika.
keywords: ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, task, mga task, assignee, due day, lampas sa takda, suriin ngayon, ano ang nagbago, revision, compare, voice note, desisyon, redline, answers file, drafter, assistant, mcp, problems, mga wika, input device, trackpad, toolbar rows, property grid, update
from: 40368796
---

Ito ang mga pagbabagong naganap sa MarkupCraft 0.8 at 0.8.1, kumpara sa 0.7. Ang pinakamalaking bagong feature ay ang markup na maaaring maging task na ginagawa ng isang tao, o ng sarili mong assistant, at kusang nagsasara kapag talagang nagbago ang drawing.

## Bago

### Markup na kumikilos

- **Gawing task ang markup.** Piliin ang isa o higit pang markup, buksan ang tab na {{ui:Tasks}} at piliin ang {{ui:Make selected a task}}. Ang task ay may pamagat, taong gagawa nito o ang nakakonektang assistant mo, opsyonal na due day at state, at pinananatili nito ang puwesto nito sa sheet at ang thread nito. Tingnan ang [Gawing task ang markup](topic:markups-that-act).
- **Mga task na kusang nagsasara.** Maaaring bantayan ng task ang drawing sa loob ng markup nito. Buksan ang mas bagong revision ng sheet at piliin ang {{ui:Check now}}: kung nagbago nang higit sa kaunti ang mga linya sa lugar na iyon, mamarkahang Tapos ang task, magiging Natapos ang markup nito, at may note sa thread na nagsasabi kung ano ang nagbago. Hindi binibilang ang bagong date stamp, o mga linyang gumalaw nang mas mababa sa 1.5 point. Maaari ring bantayan ng task ang isang model element: iniuulat ng assistant mo ang element gamit ang `tasks_check`, at kapag may ulat na iba sa dati, o binurang element, nagsasara ang task. Isang undo step lang ang magbabalik nito.
- **Hanapin ang trabaho.** I-filter ang listahan ng {{ui:Tasks}} ayon sa state at ayon sa para kanino ito, kasama ang {{ui:Overdue}}; piliin ang {{ui:Assigned to}}, saka ang {{ui:Assistant}} para makita kung ano ang naghihintay sa assistant mo. Ang task na lampas na sa due day nito ay lumalabas bilang babala sa Problems panel. Ini-export ng {{ui:CSV}} ang listahan. Naka-save ang mga task sa PDF kasama ng markup, at dinadala ang mga ito sa Live tulad ng iba pang property ng markup.

### Ano ang nagbago, bilang plain na listahan

- **Ilista ang mga pagbabago.** Buksan ang tab na {{ui:Compare}}, saka piliin ang {{ui:Compare a whole set}}, piliin ang mas naunang at mas bagong file, at piliin ang {{ui:List the changes}}. Nagsisimula ang listahan sa bilang, saka sinasaklaw ang bawat nabagong sheet, ang pinakamalaking pagbabago muna: kung nasaan ito sa sheet, gaano kalaki (sa totoong unit, at sa paper inches sa calibrated na sheet), kung may linyang idinagdag o inalis, ilan ang markup doon, at aling mga salita ang lumitaw o nawala. Inilalagay ng {{ui:Copy the list}} ang listahan sa clipboard, at nagsusulat ang {{ui:CSV}} ng isang row bawat pagbabago. Tingnan ang [Ilista kung ano ang nagbago sa pagitan ng mga revision](topic:what-changed-in-words).

### Voice note at desisyon

- **Voice note.** Sa tab na {{ui:Notes}}, piliin ang {{ui:Record a voice note}}, saka {{ui:Stop recording}}; kusang humihinto ang pag-record pagkatapos ng dalawang minuto. Nakapin ang note sa gitna ng sheet. I-drag mo ito sa tamang lugar at mag-type ng caption sa {{ui:Properties}}, at ang {{ui:Play}} sa listahan ang magpapatugtog nito. Naka-save ang recording sa loob ng PDF.
- **Mga desisyon.** Ang {{ui:Pin a decision}} ay nagsusulat ng isa o dalawang pangungusap sa sheet. Kung pamalit ito sa naunang desisyon, piliin ang iyon sa {{ui:It replaces}}: mananatili ang luma, mamarkahang Pinalitan, at tuturo sa bago. Isang undo step ang magbabalik nito. Tingnan ang [I-pin ang voice note at desisyon sa sheet](topic:voice-notes-and-decisions).

### Redline sa revision

- **Ipadala at sagutin.** Sa tab na {{ui:Tasks}}, buksan ang {{ui:Redline to revision}}, i-type ang revision na pinaghahambingan ng mga markup, at piliin ang {{ui:Export redline file}}. Makakakuha ka ng file na `.redline.json` na may isang item bawat bukas na markup: sheet, posisyon (bilang fraction ng sheet, para tumugma pa rin kahit i-plot muli sa ibang laki), mga salita, author, thread at task nito. Ang sinumang gumuguhit ng mga pagbabago ay sumasagot ng Tinanggap, Tinanggihan o Tapos sa file na `.redline-answers.json`. Ang {{ui:Load answers file…}} ay nagbibigay sa bawat markup ng status na iyon at ng note ng drafter, bilang isang undo step. Tingnan ang [Ipadala ang mga markup sa drafter bilang redline](topic:redline-to-revision).

### Mga AI assistant

- **Mas maraming tool.** Maaaring ilista ng assistant na ikinonekta mo sa pamamagitan ng CadCraft Studio ang mga task (`tasks_list`), gumawa o magbago ng isa (`task_set`), alisin ang task (`task_clear`), suriin ang isa laban sa mas bagong revision o elemento (`tasks_check`), at basahin ang plain na listahan ng mga pagbabago sa pagitan ng dalawang bukas na set ng plano (`revisions_changes`). Ang mga tool lang na tinikan mo sa ilalim ng switch na Assistants ang makukuha nito, at bawat pagbabago ay isang undo step. Tingnan ang [Gamitin ang MarkupCraft kasama ang AI assistant](topic:use-with-ai-assistants).

## Sa bawat app

- **Languages.** Ngayon ay may 54 na wika ang CadCraft Studio. Sampu ang bago: Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili at Uzbek. Lahat ng hindi-Ingles ay machine draft pa hanggang mabasa ito ng katutubong nagsasalita.
- **Input devices.** Ang {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} ang nagtatakda kung ano ang gagawin ng trackpad, side button ng mouse, pen, finger tap, 3D mouse, game controller o MIDI controller, para sa bawat app o para sa app na ito lang. Hanggang baguhin mo ang anumang setting, gumagana pa rin ang bawat device gaya ng dati. Tingnan ang [Gamitin ang trackpad, 3D mouse o controller](common:input-devices).
- **Toolbar rows.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ay may {{ui:Wrap}} (ang default), {{ui:2 rows}} at {{ui:1 row}}, para lumuwag ang espasyo ng drawing. Tingnan ang [Ayusin ang mga panel](common:arrange-panels).
- **Property grid.** Ginagamit ng mga Style field ng markup ang shared na grid, na may mga collapsible na kategorya at mga column para sa label at value.
- **Problems panel.** Ang mga babala mula sa app, gaya ng task na lampas na sa takda, ay natitipon sa isang Problems panel.
- **Live and add-ons.** Inilalarawan ang mga Live session sa [Makipagtulungan nang live](common:work-together-live). Ang listahan ng add-on na sumusunod sa account mo ay nasa [Mga add-on at listahan ng account](common:addons-basics).
- **Connect your AI.** Ang CadCraft Studio ang hub para sa sarili mong assistant: ikonekta ito nang isang beses para sa lahat ng walong app. Walang sariling AI ang mga app.

## Naayos sa 0.8.1

- **Studio can switch language while it runs.** Mapapalitan na ng Studio ang wika habang tumatakbo ito. Dati, nanatiling Ingles ang desktop app at ang mga packed edition. Hindi pa ito nasusubukan sa bawat platform: sabihin sa amin kung hindi nagbago ang wika.
- Ang mga install ng Studio 0.8 ay inaalok ng 0.8.1 sa pamamagitan ng {{ui:Settings}} › {{ui:Updates}}.

## Wala pa sa bersyong ito

- **Not code-signed.** Walang code signature pa ang mga Windows installer at ang macOS .dmg. Sa Windows, kung hinaharangan ng SmartScreen ang installer, piliin ang {{ui:More info}}, saka {{ui:Run anyway}}. Sa Mac, i-right-click ang CadCraft Studio at piliin ang {{ui:Open}}. Naka-hold ang mga store build.
- **Connect your AI is unfinished in places.** Hindi pa tapos ang pagkonekta ng AI sa ilang bahagi. Hindi ipinangangako para sa release na ito ang one-click connecting sa loob ng Studio, ang hosted connector para sa browser assistant, at ang sarili mong API key sa loob ng Studio. Nasubukan na ang task loop, pero hindi pa ito nasusubukan sa totoong assistant.
- **Task checks need the same page size.** Hindi magtutugma ang sheet na na-plot muli sa ibang laki, kaya hindi magsasara ang mga task nito. Itinutugma ang mga sheet ayon sa sheet number, o kung wala, ayon sa posisyon ng page.
- **Voice notes are recordings only.** Recording lang ang mga voice note. Walang transcript, at nakikita ng assistant ang haba, author at caption ng note, hindi ang tunog. Sinubukan ang recording gamit ang pekeng mikropono sa headless browser. Kailangan pa ring suriin ang totoong mikropono sa phone, tablet o laptop.
- **Calc sheets and reasons in a PDF** are kept in a private entry of the file. Naka-imbak ang Calc sheet at reasons sa isang pribadong entry ng file. Hindi ito pinapansin ng mas lumang MarkupCraft at itinatapon ito sa susunod nitong pag-save ng file, kaya buksan at i-save ang ganitong file gamit ang 0.8 o mas bago.
- **The drafter's side of redlines.** Hindi pa nagagawa ang panig ng drafter sa mga redline: ang pagbasa ng CadCraft sa redline file at ang pagsagot dito.
- **Other languages.** Lumalampas ng 528 px ang app bar ng Tamil.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Para sa release bago ito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
