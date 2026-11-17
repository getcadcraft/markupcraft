---
title: Mga batayan ng BCF
summary: Ano ang laman ng BCF export mula sa MarkupCraft, paano ito gamitin sa mga BIM coordination tool, at ang mga limitasyon nito.
keywords: bcf, bcfzip, bim collaboration format, issues, coordination, clash, topics, viewpoint, snapshot, openbim, buildingsmart, i-export ang issues
from: 446f38c1
---

Ang BCF (BIM Collaboration Format) ay isang open file format para sa pagpasa ng issues sa pagitan ng mga BIM tool. Maraming model coordination at authoring program ang kayang mag-import ng `.bcfzip` file bilang listahan ng issues. Ang MarkupCraft ay nagsusulat ng **BCF 2.1**.

## Gumawa ng isa

1. Buksan ang {{ui:Mga markup}} tab.
2. I-filter ang listahan sa gusto mong ipadala, halimbawa {{ui:Status}} "Open". Ang mga nakalistang markup lang ang ie-export.
3. Piliin ang {{ui:BCF}}.
4. Maghintay habang gumagawa ng snapshot ng bawat markup ("Gumagawa ng mga snapshot para sa BCF (5 sa 20)…").

Resulta: dina-download ang "<name> markups.bcfzip", at sinasabi ng status bar kung ilang topic ang laman nito at ang laki ng file.

## Ano ang laman nito

Bawat markup ay nagiging isang **topic**:

| Field ng topic | Nilalaman |
|---|---|
| Title | Punch number, subject at sheet, halimbawa "#4 Cloud on A-101 — Floor plan" |
| Type | Ang uri ng markup (Cloud, Callout, Length…) |
| Status | Open, Accepted, Rejected o Completed |
| Labels | Ang uri ng markup at ang sheet |
| Author at mga petsa | Ang author ng markup, ang petsa ng pagkakagawa at pagbabago |
| Itinalaga sa, due date | Mula sa punch item nito, kapag mayroon |
| Paglalarawan | Ang teksto o stamp wording nito, sinukat na value, komento, at ang sheet at file |
| Mga komento | Isa bawat reply, may author at petsa |
| Snapshot | Larawan ng markup sa bahagi nito ng sheet |
| Viewpoint | Top-down na view ng posisyon ng markup sa sheet |

Ang pag-export ulit ng parehong markup ay nagbibigay ng parehong topic ID, kaya makikilala ng tool na nag-i-import ng BCF na iyon ang parehong issue.

## Mga limitasyong dapat malaman

- **Ang sheet ay hindi model.** Tumuturo ang viewpoint sa posisyon ng markup sa papel, sinusukat sa metro ng papel. Hindi nito dinadala ang BIM tool sa isang lugar sa model. Gamitin ang snapshot at ang pangalan ng sheet para mahanap ang lugar.
- **Ang mga status at type ay sariling sa MarkupCraft** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Dineklara ito ng file, gaya ng pinapayagan ng BCF, pero ang tool na may sariling nakapirming listahan ay maaaring mag-map o hindi pansinin ang mga ito.
- **Ang pag-import ay nagdadala ng komento, hindi model view.** Ang {{ui:I-import ang BCF}} ay nagdadagdag ng reply at status sa mga markup na in-export mo, at gumagawa ng note para sa ibang issue; hindi nito maipakita ang model camera. Tingnan ang [Markups list and export](topic:markups-list-and-export#import-bcf).
- Ang pagpapadala ng markup pabalik bilang PDF ay kadalasang mas simple para sa pagre-review ng drawing. Ang BCF ay para ilagay ang mga komento sa drawing sa loob ng model coordination workflow.
