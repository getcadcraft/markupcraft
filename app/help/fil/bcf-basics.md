---
title: Mga batayan ng BCF
summary: Ano ang laman ng BCF export mula sa MarkupCraft, paano ito gamitin kasama ng mga BIM coordination tool, at ang mga limitasyon nito.
keywords: bcf, bcfzip, bim collaboration format, issues, koordinasyon, clash, mga topic, viewpoint, snapshot, openbim, buildingsmart, i-export ang issues
from: 0de26175
---

Ang BCF (BIM Collaboration Format) ay isang open file format para sa pagpasa ng mga isyu sa pagitan ng mga BIM tool. Maraming model coordination at authoring program ang kayang mag-import ng `.bcfzip` file bilang listahan ng mga isyu. Sumusulat ang MarkupCraft ng **BCF 2.1**.

## Gumawa ng isa

1. Buksan ang tab na {{ui:Mga markup}}.
2. I-filter ang listahan sa gusto mong ipadala, halimbawa {{ui:Status}} "Open". Tanging ang mga nakalistang markup ang ie-export.
3. Piliin ang {{ui:BCF}}.
4. Maghintay habang gumagawa ng snapshot ng bawat markup ("Gumagawa ng mga snapshot para sa BCF (5 of 20)…").

Resulta: Nagda-download ang "<name> markups.bcfzip", at ipinapakita ng status bar kung ilang topic ang laman nito at ang laki ng file.

## Ano ang laman nito

Ang bawat markup ay nagiging isang **topic**:

| Field ng topic | Pinupunan ng |
|---|---|
| Title | Punch number, subject at sheet, halimbawa "#4 Cloud on A-101 — Floor plan" |
| Type | Ang uri ng markup (Cloud, Callout, Length…) |
| Status | Open, Accepted, Rejected o Completed |
| Labels | Ang uri ng markup at ang sheet |
| Author at mga petsa | Ang author ng markup, ang petsa ng paggawa at ang petsa ng pagbabago |
| Itinalaga kay, takdang petsa | Mula sa punch item nito, kung mayroon |
| Description | Ang teksto o wording ng stamp nito, sinukat na halaga, komento, at ang sheet at file |
| Comments | Isa bawat reply, kasama ang author at petsa |
| Snapshot | Larawan ng markup sa bahagi nito ng sheet |
| Viewpoint | Top-down na view ng posisyon ng markup sa sheet |

Ang pag-export muli ng parehong markup ay nagbibigay ng parehong topic ID, kaya makikilala ng tool na nag-i-import ng BCF na iisang isyu ito.

## Ano ang bumabalik kapag nag-import

{{ui:I-import ang BCF}} ay bumabasa ng BCF 2.0, 2.1 at 3.0 na mga file (sinuri sa 19 na opisyal na buildingSMART 3.0 test file: nabasa ang bawat topic, at ang mga komento ng tatlong may teksto). Para sa topic na sa iyo (parehong topic ID), idinadagdag nito ang mga bagong komento bilang reply at kinukuha ang bagong status. Ang anumang ibang topic ay nagiging note sa sheet na tinutukoy ng label o pangalan ng file nito, o kung wala, sa bukas na sheet, kasama ang title, description, assignee at due date bilang teksto ng note, at ang mga komento nito bilang reply.

| Sa BCF topic | Sa MarkupCraft |
|---|---|
| Title, description, assignee, due date | Teksto ng note |
| Mga komentong may teksto | Mga reply |
| Status Open, Accepted, Rejected, Completed (ang Closed, Resolved, Done ay binibilang bilang Completed) | Status ng markup |
| Author at petsa ng paggawa | Author at petsa ng note |
| Camera position | Isang lugar sa sheet, para lamang sa topic na nakatali sa sheet sa pamamagitan ng label o pangalan ng file |
| Model selection, nakatagong parte, clipping plane, snapshot | Hindi itinatago: walang model ang sheet na paglalagyan ng mga ito |

## Mga limitasyon na dapat malaman

- **Ang sheet ay hindi model.** Tumuturo ang viewpoint sa posisyon ng markup sa papel, sinusukat sa meters ng papel. Hindi nito dinadala ang BIM tool sa isang lugar sa model. Gamitin ang snapshot at ang pangalan ng sheet para mahanap ang lugar.
- **Ang mga status at uri ay sariling sa MarkupCraft** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Idineklara ng file ang mga ito, ayon sa pinapayagan ng BCF, pero maaaring i-map o balewalain ng tool na may sarili nitong nakapirming listahan ang mga ito.
- **Ang pag-import ay nagdadala ng komento, hindi model view.** Idinadagdag ng {{ui:I-import ang BCF}} ang mga reply at status sa mga markup na na-export mo, at gumagawa ng note para sa ibang isyu; hindi nito kayang ipakita ang model camera. Tingnan ang [Listahan ng markups at I-export](topic:markups-list-and-export#import-bcf).
- Ang pagpapadala ng markup pabalik bilang PDF ay kadalasang mas simple para sa pagre-review ng drawing. Ang BCF ay para ilipat ang mga komento sa drawing papunta sa daloy ng model coordination.
