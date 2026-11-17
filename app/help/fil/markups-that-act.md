---
title: Gumawa ng markup bilang task
summary: Bigyan ang markup ng assignee (tao o ang iyong assistant), due day at link sa drawing o model element na tinutukoy nito, at makita itong nagsasara kapag may tunay na nagbago.
keywords: task, tasks, assignee, assistant, due, overdue, link, closes, changed, element, drawing area, markups that act, MCP
from: 9e970202
---

Ang task ay markup na kailangang gawin ng isang tao. Pinananatili nito ang puwesto nito sa sheet at ang thread nito, at nagdaragdag ito ng title, assignee, due day, state at, kung gusto mo, link sa bagay na tinutukoy nito.

## Gumawa ng task

1. Pumili ng isa o higit pang markup.
2. Buksan ang tab na {{ui:Tasks}} at piliin ang {{ui:Gawing task ang napili}}.
3. Punan ang title (nagsisimula ito sa teksto ng markup), kung para kanino ito ({{ui:Person}} o {{ui:Assistant}}, at isang pangalan), isang opsyonal na due day, at ang dapat bantayan.

Ang task ng assistant ay gawain para sa assistant na ikinonekta mo sa MarkupCraft (tingnan ang [Gamitin ang MarkupCraft kasama ng AI assistant](topic:use-with-ai-assistants)). Walang sariling assistant ang MarkupCraft: inililista lang nito ang gawain at tinatanggap ang sagot ng assistant. Kapag pinili ang {{ui:Itinalaga kay}}, at saka ang {{ui:Assistant}} sa listahan, makikita ang naghihintay para dito.

## Bantayan ang pagbabago

- **Ang drawing sa loob ng markup.** Iniingatan ng MarkupCraft ang mga linya sa loob ng box ng markup gaya ng kasalukuyan. Kapag nagbukas ka ng mas bagong revision ng sheet na iyon (pangalawang file na may parehong sheet number, o parehong posisyon ng pahina), piliin ang {{ui:Suriin ngayon}}: kapag nagkaiba ang mga linya sa lugar na iyon nang higit sa kaunti, magsasara ang task.
- **Isang model element.** Ibigay ang app at ang id ng element. Binabasa ng assistant mo ang element gamit ang sarili nitong tool ng kabilang app at iniuulat ito gamit ang `tasks_check`. Ang unang ulat ay itinatago bilang panimulang estado; ang susunod na ulat na naiiba ay magsasara ng task. Magsasara rin ito kapag nabura ang element.
- **Wala.** Simpleng task na tinatapos mo nang manu-mano.

Ang nagsarang task ay mamarkahang Done, ang markup nito ay magiging Completed, at may tala sa thread kung ano ang nagbago. Isang undo na hakbang lang ang magbubukas muli nito.

**Limitasyon:** ipinapalagay ng pagsusuri na ang mas bagong revision ay gumagamit ng parehong page origin at page size. Ang sheet na muling na-plot sa ibang laki ay hindi tutugma, kaya hindi magsasara ang mga task nito. Ipinapares ang mga sheet ayon sa sheet number, at kung wala, ayon sa posisyon ng pahina; hindi ini-scale ng MarkupCraft ang isang revision para magkasya sa isa.

Ang muling pag-plot ng parehong drawing na may bagong date stamp, o mga linyang gumalaw nang wala pang 1.5 points, ay hindi binibilang na pagbabago. Kapag walang nakabukas na mas bagong revision, nananatiling bukas ang task at sinasabi ito ng status bar.

## Ang listahan

Maaaring i-filter ang listahan ng {{ui:Tasks}} ayon sa state at kung para kanino ito, kasama ang {{ui:Overdue}}. Ang task na lampas na sa due day ay lumalabas sa panel na Problema bilang babala. Ini-export ng {{ui:CSV}} ang listahan.

Naka-save ang mga task sa PDF kasama ng markup, at dumadaan ang mga ito sa Live tulad ng iba pang property ng markup.
