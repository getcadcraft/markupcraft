---
title: Gumawa ng punch list
summary: Gawing numbered punch item ang mga markup na may itinalagang tao, takdang petsa at status, at i-export ang listahan.
keywords: punch list, punch, snag list, deficiency, field issues, observation, italaga, assignee, takdang petsa, closeout, walkthrough, numero
from: b98b38e6
---

Ang punch item ay markup na may numero, itinalagang tao, takdang petsa at item status. Iginuguhit ang numero sa sheet sa tabi ng markup, kaya tugma ang naka-print na sheet at ang listahan.

## Magdagdag ng mga item

1. Markahan ang bawat isyu sa mga sheet: cloud, callout, note, kahit ano.
2. Pumili ng isa o higit pa (tingnan ang [Select, move and change markups](topic:select-and-edit)).
3. Buksan ang tab na {{ui:Punch list}} at piliin ang {{ui:Add selected to the punch list}}, o piliin ang {{ui:Add to the punch list}} sa {{ui:Properties}}.

Resulta: Bawat markup ay nakakakuha ng susunod na numero (1, 2, 3…), ayon sa pagkakasunod sa sheet at pagkatapos ayon sa pagkakaguhit. Lumalabas ang numbered badge sa sheet, at sinasabi ng status bar ang "Idinagdag ang 3 item sa punch list." Nilalaktawan ang mga markup na mayroon nang numero, at ang mga komentong read-only.

## Punan ang mga detalye

Sa tab na {{ui:Punch list}}, ipinapakita ng bawat item ang numero, subject, teksto, sheet at status nito, na may tatlong field sa ilalim. Nasa {{ui:Properties}} rin ang parehong field sa ilalim ng "Punch list" kapag napili ang markup:

- {{ui:Assignee}}: pangalan o trade, bilang libreng teksto.
- {{ui:Due}}: petsa, mula sa date picker.
- {{ui:Item status}}: Open, In progress, Ready for review o Closed.

I-click ang heading ng item para pumunta rito sa sheet nito.

Hiwalay ang item status sa review status ng markup (Open, Accepted, Rejected, Completed). Gamitin ang item status para sa trabaho, at ang review status para sa komento.

## Alisin ang item

Piliin ang markup at piliin ang {{ui:Take off the punch list}} sa {{ui:Properties}}. Nananatili ang markup; ang numero lang ang nawawala. Habang bukas ang set, hindi muling ginagamit ang mga numero: ang susunod na item ay nakakakuha pa rin ng susunod na bagong numero, kaya ang puwang ay nangangahulugang may item na inalis. Kapag muling binuksan ang file, magpapatuloy ang pagnunumero pagkatapos ng pinakamataas na numero rito.

## I-export ang listahan

Piliin ang {{ui:Export CSV}} sa tab na {{ui:Punch list}}. Makakakuha ka ng "<name> punch list.csv" na may mga column na No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author at Created, nakaayos ayon sa numero. Buksan ito sa anumang spreadsheet.

Nakasave rin sa loob ng marked-up na PDF ang mga punch number, assignee, takdang petsa at item status, kaya bumabalik ang mga ito kapag binuksan muli. Ipinapakita ng ibang PDF viewer ang numbered badge bilang bahagi ng markup. Kasama rin ng BCF export ng listahan ng markup ang assignee at takdang petsa (tingnan ang [BCF basics](topic:bcf-basics)).

## Sa site gamit ang tablet

Buksan ang set sa iPad, libutin ang trabaho, at maglagay ng {{ui:Note}} o gumuhit ng {{ui:Cloud}} sa bawat isyu. Idagdag ang mga ito sa punch list habang nagpapatuloy, at mag-save bago umalis. Tingnan ang [Review on an iPad or touch screen](topic:review-on-a-tablet).

Ang punch list bilang naka-format na PDF o spreadsheet report, at ang mga larawang nakakabit sa mga item, ay hindi pa nagagawa.
