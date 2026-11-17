---
title: Listahan ng markup, mga filter at export
summary: Tingnan ang bawat markup sa set, i-filter ayon sa sheet, author, status at uri, pumunta sa isa, at i-export ang listahan bilang CSV o BCF.
keywords: listahan ng markup, list, buod, xlsx, spreadsheet workbook, workbook, pdf report, import bcf, filter, sort, report, export, csv, spreadsheet, bcf, bcfzip, issues, listahan ng komento, jump
from: 6c70261e
---

## Buksan ang listahan

Piliin ang tab na {{ui:Markups}} sa kanan. Nakalista ang bawat markup ng bawat bukas na file, ayon sa pagkakasunod ng sheet at pagkatapos ayon sa pagkakagawa nila. Ipinapakita ng bawat row:

- isang icon sa kulay ng markup, ang punch number nito kung mayroon ("#4"), at ang subject nito,
- ang teksto, salita ng stamp o sinukat na value, at ang komento nito,
- ang sheet, ang author at ang petsa,
- ang status nito (o "Read-only" para sa komentong kasama ng file), at ang bilang ng reply kapag may reply.

Ang linya sa itaas ng listahan ang nagbibilang: "38 na markup", o "12 sa 38 na markup" kapag naka-filter.

## Pumunta sa markup

I-click ang isang row. Ipinapakita ng MarkupCraft ang sheet na iyon, pinipili ang markup, at nag-zu-zoom dito kapag wala ito sa screen o masyadong maliit para makita. Nasa {{ui:Properties}} ang detalye at thread nito kapag bumalik ka sa tab na iyon.

## Mag-filter

Apat na menu sa itaas ng listahan. Pinagsasama ang mga ito.

| Menu | Mga pagpipilian |
|---|---|
| {{ui:Sheet}} | Lahat ng sheet, Ang sheet na ito (sumusunod sa iyo habang nagpapalit ka ng sheet), o anumang sheet na may markup |
| {{ui:Author}} | Sino man, o bawat author sa set |
| {{ui:Status}} | Anumang status, Open, Accepted, Rejected, Completed |
| {{ui:Uri}} | Anumang uri, o bawat uri ng markup sa set |

Mga halimbawa:

- Ano pa ang bukas sa sheet na ito: {{ui:Sheet}} "Ang sheet na ito", {{ui:Status}} "Open".
- Mga komento ng isang consultant: {{ui:Author}} ang kanilang pangalan.
- Lahat ng sukat: {{ui:Uri}} "Haba" o "Lawak".

Hanggang 2000 row lang ang ipinapakita ng listahan; paliitin ito gamit ang filter sa napakalalaking set.

## I-export sa CSV

Piliin ang {{ui:CSV}} sa itaas ng tab. Makukuha mo ang "<name> markups.csv" na may **mga markup gaya ng kasalukuyang naka-filter**, isa bawat row, na may mga column na ito:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- Ang "Text" ay naglalaman ng mga salita ng text box at callout, ang salita ng stamp, o ang pangalan ng count group.
- Ang "Measurement" ay naglalaman ng haba, "area, perimeter" para sa area, at "group: n" para sa count.
- Buong timestamp sa UTC ang mga petsa.

Para i-export ang lahat, ibalik muna sa unang pagpipilian ang bawat filter.

## Legend sa sheet

{{ui:Legend}} sa tab na {{ui:Markups}} ay naglalagay ng legend sa kanang itaas ng nakikita mo: isang box na naglilista ng bawat uri ng markup sa sheet (ayon sa subject at kulay, gaya ng "Cloud", "Question" o "Outlets") at kung ilan ang bawat isa. Binibilang ng count group ang mga marka nito. Patuloy na nagbibilang ang legend habang gumuguhit, naglilipat o nagbubura ka ng markup, at naka-print at naka-save ito kasama ng mga bilang sa sandaling iyon.

Ilipat at i-resize ito tulad ng anumang markup. Sa sarili nitong {{ui:Properties}}, baguhin ang {{ui:Pamagat}}, o itakda ang {{ui:Bilang}} sa {{ui:Ang buong set}} para bilangin ang bawat sheet. Hindi binibilang ang mga space, iba pang legend at komentong galing sa ibang programa.

## Sarili mong column, at pag-ayos

{{ui:Mga column}} sa tab na {{ui:Markups}} ay nagdaragdag ng sarili mong column sa bawat markup: isang **teksto**, isang **pagpipilian** (gaya ng Trade: Mechanical, Electrical, Plumbing), isang **numero** (gaya ng Gastos) o isang **petsa**. Bigyan ng pangalan ang bawat isa, piliin ang uri nito, ilista ang mga pagpipilian para sa column na pagpipilian, at piliin ang {{ui:I-save ang mga column}}.

- Punan ang mga ito sa ilalim ng {{ui:Properties}}: may field ang bawat column doon. Numero lang ang tinatanggap ng numero column, at petsa ang date column.
- Ipinapakita ng listahan ang mga value sa ilalim ng bawat markup. Pumipili ang {{ui:Column}} na filter ng isang value (o ng mga markup na walang laman doon), at inaayos ng {{ui:Sort}} ang listahan ayon sa column, author, status, uri o petsa, sa halip na ayon sa sheet.
- Ang CSV at XLSX export ay may kasamang mga column pagkatapos ng karaniwan. Naka-save ang mga column sa PDF at bumabalik kapag binuksan mo ito muli.

## I-export ang buod: workbook o PDF

- {{ui:XLSX}} ay magda-download ng "<name> markup summary.xlsx" na may tatlong sheet: **Markups** (isang row bawat nakalistang markup, parehong column ng CSV), **By sheet** (ilang markup ang bawat sheet, bukas at sarado, at ilan sa bawat uri, kasama ang kabuuan) at **Punch list** (kapag may punch item).
- {{ui:PDF}} ay magda-download ng "<name> markup summary.pdf": ulat na ipi-print o ipapadala, na may pangalan ng set, ang petsa, at talahanayan ng mga nakalistang markup (numero, sheet, uri, subject, teksto o komento, sinukat na value, author, status at ang pinakabagong reply). Nagbabalot ang mahahabang teksto; inuulit ang header ng talahanayan sa bawat pahina.

Parehong kinukuha ang listahan gaya ng naka-filter, kaya mag-filter muna para mag-ulat ng isang sheet, isang author, o mga bukas na item lang.

## I-export sa BCF

Piliin ang {{ui:BCF}}. Gumagawa ang MarkupCraft ng larawan ng bawat nakalistang markup sa sheet nito ("Gumagawa ng snapshot para sa BCF (3 sa 12)…"), saka nagda-download ng "<name> markups.bcfzip". Bawat markup ay nagiging isang BCF topic na may status, author, petsa, mga reply bilang komento, assignee at due date mula sa punch item nito, at ang snapshot.

Gamitin ito para dalhin ang mga komento sa drawing review papunta sa mga BIM coordination tool na nagbabasa ng BCF. Nasa [BCF basics](topic:bcf-basics) kung ano ang naisasama at ano ang hindi.

## I-import ang BCF

{{ui:Import BCF}} ay nagbabasa ng .bcfzip (o .bcf) na file mula sa BIM tool:

- Ang mga issue na galing sa sariling BCF export ng MarkupCraft ay muling hahanapin ang markup nila: idinadagdag ang mga bagong reply sa thread, at itinatakda ang bagong status (ang Closed ay Completed). Hindi na idinadagdag muli ang mga reply na nandoon na.
- Ang ibang issue ay nagiging note, kasama ang kanilang title, deskripsyon, author at mga komento. Napupunta ang note sa sheet na tinutukoy ng numero o pangalan sa mga label ng issue, kung wala, sa bukas na sheet. Dahil walang lugar ang BIM camera sa papel, pinagsasalansan ang mga note na ito sa kaliwang itaas ng sheet para mailipat mo.

Isang hakbang ang buong import: binabawi ito ng {{key:Mod+Z}}. Tingnan ang [BCF basics](topic:bcf-basics).

## Ang hindi pa kayang gawin ng listahan

- Pagpapangkat ng listahan (mag-sort, saka mag-filter, sa halip).
- Pag-edit ng value sa listahan (i-edit sa {{ui:Properties}}; ang punch field ay maaaring i-edit sa tab na {{ui:Punch list}}).
