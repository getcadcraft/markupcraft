---
title: Gamitin ang MarkupCraft kasama ng AI assistant
summary: Hayaang ilista ng sarili mong AI assistant o script ang mga markup ng isang set, magdagdag ng simpleng markup, magtakda ng status, sumagot at i-export ang listahan. Saklaw nito ang mga pahintulot, pagkonekta sa pamamagitan ng CadCraft Studio, at ang activity log.
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, mga markup, review, mga pahintulot, i-disconnect, aktibidad
from: 095f2977
---

## Ang matututunan mo

Paano payagan ang AI assistant (o script na isinulat mo) na gumana sa MarkupCraft, at paano magpasya kung ano ang puwede nitong galawin.

Ang MarkupCraft ay **walang sariling AI** at walang ipinapadalang kahit ano kahit saan. Ikaw ang magdadala ng assistant: anumang program na nagsasalita ng Model Context Protocol (MCP). Binibigyan lang ito ng MarkupCraft ng mga tool, at ikaw ang pumipili kung alin.

## I-on ito

1. Buksan ang {{ui:Mga setting}} (ang gear sa app bar, o {{key:Mod+,}}) at pumunta sa tab na {{ui:MarkupCraft}}.
2. Sa ilalim ng {{ui:Mga Assistant}}, lagyan ng tsek ang **Payagan ang mga AI assistant at script na gamitin ang MarkupCraft**. Naka-off ito hanggang gawin mo iyon.
3. Piliin kung ano ang puwede nitong gawin: naka-tsek na ang **Read** sa simula; lagyan ng tsek ang **Edit**, **Save** o **Export** lang kapag kailangan mo ang mga ito.

Hindi iaalok sa assistant ang mga tool na lampas sa mga pahintulot na tinsek mo, at kung hihingin pa rin nito ang isa, tatanggihan ito ng MarkupCraft at itatala sa activity log. Ang pag-off ng switch ay nagtatapos sa lahat ng koneksyon nang sabay-sabay; pino-off din ito ng {{ui:I-reset ang mga setting ng MarkupCraft}}.

## Ikonekta ang assistant mo

Kumokonekta ang mga assistant sa pamamagitan ng **CadCraft Studio** sa computer mo: nagpapatakbo ang Studio ng maliit na server na tanging ang computer na ito ang makaaabot, na protektado ng token na ginagawa nito tuwing magsisimula. Sa Studio, piliin ang {{ui:Ikonekta ang assistant}} at kopyahin ang address at token sa assistant mo (ipinapakita ng Studio ang eksaktong settings na ipi-paste). Huwag kailanman ibahagi ang token.

:::note
Hindi makapagbukas ng koneksyon para sa assistant ang browser tab: sa mga browser app, walang epekto ang switch hanggang gamitin mo ang CadCraft Studio sa computer mo.
:::

## Ikaw pa rin ang may kontrol

- **Bawat pagbabago ay isang undo step**, may label na pangalan ng assistant (halimbawa "Assistant: add cloudrect"). Binabawi ng {{key:Mod+Z}} ang huling pagbabago ng assistant bilang kabuuan.
- **Alam mo kapag may nakakonektang assistant.** Ang isang button sa app bar ay nagpapakita ng pangalan ng assistant habang nakakonekta ito; i-click ito para makita kung ano ang puwede nitong gawin, o para **i-disconnect** ito.
- **Aktibidad.** {{ui:Mga setting}} › {{ui:MarkupCraft}} › {{ui:Mga Assistant}} › {{ui:Aktibidad}} ay naglilista ng bawat tawag: kailan, aling tool, at kung natapos o tinanggihan. Ang {{ui:I-save ang log}} ay nagtatago ng kopya.

## Ano ang maaaring hingin ng assistant

| Tool | Pahintulot | Ano ang ginagawa nito |
|---|---|---|
| `app_info`, `sheets_list` | Read | Ang mga set na nakabukas, ang kanilang mga sheet at kung ilang markup ang bawat isa |
| `markups_list` | Read | Ang mga markup na may uri, sheet, teksto, komento, sukat, status, author at mga sagot, na-filter ayon sa sheet, status, uri o author |
| `markup_add` | Edit | Nagdaragdag ng rectangle, cloud, ellipse, text box, note, linya o arrow sa isang sheet |
| `markup_status`, `markup_reply` | Edit | Nagtatakda ng status ng markup (naitatala sa thread nito, pinirmahan ng assistant); nagdaragdag ng komento sa isang thread |
| `markups_export` | Export | Ang sariling CSV o BCF ng listahan ng {{ui:Mga markup}} ng kung ano ang ipinapakita nito (ang mga filter nito gaya ng itinakda mo); sa Studio, maisusulat nito ang file sa folder na pinayagan mo |
| `tasks_list` | Read | Ang mga markup na task: assignee (tao o assistant), due day, state, link, at kung paano ito natapos. Ang `assignee: "assistant"` ay naglilista ng gawaing naghihintay sa assistant |
| `task_set`, `task_clear` | Edit | Gawing task ang markup o baguhin ito (pamagat, assignee, due, state, link); alisin ang task |
| `tasks_check` | Edit | Isara ang mga task na ang naka-link na bahagi ng drawing o elemento ng model ay talagang nagbago; ipasa ang mga estado ng elemento na binasa mo mula sa ibang app |
| `revisions_changes` | Read | Ang simpleng listahan ng mga pagbabago sa pagitan ng dalawang bukas na plan set, para maisalaysay sa sarili mong salita |
| `pins_list`, `decision_add` | Read, Edit | Mga voice note (haba, sino, kailan, caption; hindi ang tunog, walang transcript) at mga desisyon; mag-pin ng desisyon at palitan ang naunang desisyon |
| `redline_export`, `redline_answer` | Export, Edit | Isulat ang redline file para sa drafter; ilapat ang mga sagot ng drafter |

Ang markup na idinagdag ng assistant ay nagpapangalan dito bilang author: ang pangalang ibinibigay ng assistant program sa sarili nito, kasunod ang "(assistant)", o "(assistant para sa pangalan mo)" kapag naitakda mo na ang pangalan mo bilang reviewer. Pinipirmahan sa parehong paraan ang mga pagbabago sa status at mga sagot nito. Bawat isa ay isang undo step. Ang pag-save ng markup na PDF ay nananatili sa iyo: gamitin ang {{ui:Save}} gaya ng dati.

Nang hindi binubuksan ang MarkupCraft, inililista ng CadCraft MCP server ang mga markup ng isang PDF sa folder na pinangalanan mo (`markups_list`), at ipinapakita ng `cadcraft info Set.pdf` ang mga ito sa command line.

## Kung may hindi gumagana

- **Walang nakikitang tool ng MarkupCraft ang assistant:** tingnan kung naka-on ang switch sa window na ito, at bukas ang window sa Studio.
- **"kailangan ng pahintulot sa edit":** lagyan ng tsek ang **Edit** sa ilalim ng {{ui:Mga Assistant}}, pagkatapos itanong muli.
- **Mga error na "401" o "token":** nagbago ang token (nag-restart ang Studio, o {{ui:Bagong token}}). Kopyahin ang bago sa settings ng assistant.

## Tingnan din

- [Mga recipe para sa AI assistant](common:assistants-recipes): mga halimbawang may kasamang tool na tinatawag ng bawat isa.
