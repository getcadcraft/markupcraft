---
title: Atzīmes padarīšana par uzdevumu
summary: Piešķiriet atzīmei izpildītāju (personu vai palīgu), termiņa dienu un saiti uz rasējuma vai modeļa elementu, par ko tā ir, un skatiet, kā tā aizveras, kad tas patiešām mainās.
keywords: uzdevums, uzdevumi, izpildītājs, palīgs, termiņš, nokavēts, saite, aizveras, mainīts, elements, rasējuma apgabals, atzīmes, kas darbojas, MCP
from: 9e970202
---

Uzdevums ir atzīme, kas kādam jāizpilda. Tā paliek savā vietā uz lapas un savā pavedienā, un pievieno nosaukumu, izpildītāju, termiņa dienu, stāvokli un, ja vēlaties, saiti uz lietu, par ko tā ir.

## Izveidot uzdevumu

1. Atlasiet vienu vai vairākas atzīmes.
2. Atveriet cilni {{ui:Tasks}} un izvēlieties {{ui:Make selected a task}}.
3. Aizpildiet nosaukumu (tas sākas no atzīmes teksta), to, kam tas paredzēts ({{ui:Person}} vai {{ui:Assistant}}, un vārdu), neobligātu termiņa dienu un to, ko uzraudzīt.

MI palīga uzdevums ir darbs palīgam, kuru pievienojāt MarkupCraft (skatiet [Izmantot MarkupCraft ar MI palīgu](topic:use-with-ai-assistants)). MarkupCraft pats nesatur palīgu: tas tikai uzskaita darbu un pieņem palīga atbildes. Izvēloties {{ui:Assigned to}}, pēc tam sarakstā {{ui:Assistant}}, redzams, kas gaida palīgu.

## Uzraudzīt izmaiņas

- **Rasējums atzīmes iekšienē.** MarkupCraft saglabā līnijas atzīmes rāmī tādas, kādas tās ir tagad. Kad atverat jaunāku šīs lapas versiju (otru failu ar tādu pašu lapas numuru vai to pašu lappuses pozīciju), izvēlieties {{ui:Check now}}: ja līnijas šajā apgabalā atšķiras vairāk nekā par mata līniju, uzdevums tiek aizvērts.
- **Modeļa elements.** Norādiet lietotni un elementa id. Jūsu palīgs nolasa elementu ar otras lietotnes pašas rīkiem un ziņo to ar `tasks_check`. Pirmais ziņojums tiek saglabāts kā sākuma stāvoklis; vēlāks ziņojums, kas atšķiras, aizver uzdevumu. Elements, kas ir dzēsts, arī aizver uzdevumu.
- **Nekas.** Vienkāršs uzdevums, ko pabeidzat ar roku.

Aizvērts uzdevums tiek atzīmēts kā Izpildīts, tā atzīme kļūst par Pabeigts, un pavedienā parādās piezīme, kas saka, kas mainījās. Viens atsaukšanas solis to atkal atver.

**Ierobežojums:** pārbaude pieņem, ka jaunākajā versijā tiek izmantots tas pats lapas sākumpunkts un lapas izmērs. Lapa, kas pārdrukāta citā izmērā, neatbildīs, tāpēc tās uzdevumi neaizvērsies. Lapas tiek savienotas pēc lapas numura, citādi pēc lappuses pozīcijas; MarkupCraft neskalē vienu versiju, lai tā atbilstu otrai.

Tā paša rasējuma pārdrukāšana ar jaunu datuma zīmogu vai līnijām, kas pārvietojušās mazāk nekā par 1.5 punktiem, nav uzskatāma par izmaiņu. Ja nav atvērta jaunāka versija, uzdevums paliek atvērts, un statusa josla par to informē.

## Saraksts

Sarakstu {{ui:Tasks}} var filtrēt pēc stāvokļa un pēc tā, kam tas paredzēts, arī pēc {{ui:Overdue}}. Uzdevums, kas pārsniedz termiņa dienu, parādās problēmu panelī kā brīdinājums. {{ui:CSV}} eksportē sarakstu.

Uzdevumi tiek saglabāti PDF failā kopā ar atzīmi, un tie sinhronizējas caur Live tāpat kā citas atzīmes īpašības.
