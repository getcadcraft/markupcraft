---
title: Përdor MarkupCraft me një asistent AI
summary: Lejo asistentin tënd AI ose skriptin të listojë shënimet e një grupi, të shtojë shënime të thjeshta, të vendosë gjendjen, të përgjigjet dhe të eksportojë listën: lejet, lidhja përmes CadCraft Studio dhe regjistri i aktivitetit.
keywords: ai, asistent, agjent, mcp, model context protocol, skript, automatizim, shënime, shqyrtim, leje, shkëput, aktivitet
from: 095f2977
---

## Çfarë do të mësosh

Si ta lejosh një asistent AI (ose një skript që ke shkruar) të punojë me MarkupCraft, dhe si të vendosësh çfarë lejohet të prekë.

MarkupCraft **nuk ka AI të vetën** dhe nuk dërgon asgjë askund. Ti sjell asistentin: çdo program që flet Model Context Protocol (MCP). MarkupCraft i jep vetëm vegla, dhe ti zgjedh cilat.

## Ndize

1. Hap {{ui:Cilësimet}} (ingranazhi në shiritin e aplikacionit, ose {{key:Mod+,}}) dhe shko te skeda {{ui:MarkupCraft}}.
2. Te {{ui:Asistentët}}, shëno **Lejo asistentët AI dhe skriptet të përdorin MarkupCraft**. Është joaktive derisa ta bësh këtë.
3. Zgjidh çfarë mund të bëjë: **Lexo** është e shënuar në fillim; shëno **Redakto**, **Ruaj** ose **Eksporto** vetëm kur të duhen.

Veglat jashtë lejeve që shënove nuk i ofrohen asistentit, dhe nëse ai kërkon një të tillë gjithsesi, MarkupCraft e refuzon dhe e shkruan në regjistrin e aktivitetit. Fikja e çelësit ndërpret menjëherë çdo lidhje; {{ui:Rivendos cilësimet e MarkupCraft}} e fik gjithashtu.

## Lidh asistentin

Asistentët lidhen përmes **CadCraft Studio** në kompjuterin tënd: Studio nis një server të vogël që vetëm ky kompjuter mund ta arrijë, i mbrojtur nga një token që krijon në çdo nisje. Në Studio, zgjidh {{ui:Lidh një asistent}} dhe kopjo adresën dhe token-in në asistentin tënd (Studio shfaq cilësimet e sakta për t'u ngjitur). Mos e ndaj kurrë token-in.

:::note
Një skedë shfletuesi nuk mund të hapë një lidhje për një asistent: në aplikacionet në shfletues, çelësi nuk ka efekt derisa të përdorësh CadCraft Studio në kompjuterin tënd.
:::

## Ti mbetesh në krye

- **Çdo ndryshim është një hap zhbërjeje**, i etiketuar me emrin e asistentit për të (p.sh. "Asistent: shto cloudrect"). {{key:Mod+Z}} e tërheq të tërën ndryshimin e fundit të asistentit.
- **E di kur një asistent është i lidhur.** Një buton në shiritin e aplikacionit e emëron asistentin ndërsa është i lidhur; kliko për të parë çfarë mund të bëjë, ose për ta **Shkëputur**.
- **Aktiviteti.** {{ui:Cilësimet}} › {{ui:MarkupCraft}} › {{ui:Asistentët}} › {{ui:Aktiviteti}} liston çdo thirrje: kur, cila vegël, e kryer ose e refuzuar. {{ui:Ruaj regjistrin}} mban një kopje.

## Çfarë mund të kërkojë një asistent

| Vegla | Leja | Çfarë bën |
|---|---|---|
| `app_info`, `sheets_list` | Lexo | Grupet e hapura, fletët e tyre dhe sa shënime ka secili |
| `markups_list` | Lexo | Shënimet me llojin, fletën, tekstin, komentin, matjen, gjendjen, autorin dhe përgjigjet, të filtruara sipas fletës, gjendjes, llojit ose autorit |
| `markup_add` | Redakto | Shton një drejtkëndësh, re, elips, kuti teksti, shënim, vijë ose shigjetë në një fletë |
| `markup_status`, `markup_reply` | Redakto | Vendos gjendjen e një shënimi (regjistrohet në fillin e tij, nënshkruar nga asistenti); shton një koment në një fill |
| `markups_export` | Eksporto | CSV ose BCF i vetë listës {{ui:Shënimet}} me atë që tregon lista (filtrat siç i vendose); në Studio mund ta shkruajë skedarin në një dosje që e ke lejuar |
| `tasks_list` | Lexo | Shënimet që janë detyra: caktuari (person ose asistent), dita e afatit, gjendja, lidhja, si u mbyll. `assignee: "assistant"` liston punën që pret një asistent |
| `task_set`, `task_clear` | Redakto | Bën një shënim detyrë ose e ndryshon (titullin, caktuarin, afatin, gjendjen, lidhjen); heq detyrën |
| `tasks_check` | Redakto | Mbyll detyrat ku zona e lidhur e vizatimit ose elementi i modelit me të vërtetë ka ndryshuar; kalon gjendjet e elementeve që ke lexuar nga aplikacioni tjetër |
| `revisions_changes` | Lexo | Lista e thjeshtë e asaj që ndryshoi midis dy grupeve të hapura planimetrish, për ta shprehur me fjalët e tua |
| `pins_list`, `decision_add` | Lexo, Redakto | Shënime zanore (gjatësia, kush, kur, përshkrimi; kurrë zëri, pa transkriptim) dhe vendime; fikso një vendim dhe zëvendëso një të mëparshëm |
| `redline_export`, `redline_answer` | Eksporto, Redakto | Shkruan skedarin redline për hartuesin; zbaton përgjigjet e hartuesit |

Një shënim që shton një asistent e emëron si autor: emrin që i jep vetes programi i asistentit, pasuar nga "(asistent)", ose nga "(asistent për <emri yt>)" sapo të vendosësh emrin e shqyrtuesit. Ndryshimet e gjendjes dhe përgjigjet e tij nënshkruhen në të njëjtën mënyrë. Çdo veprim është një hap zhbërjeje. Ruajtja e PDF-së me shënime mbetet në dorën tënde: përdor {{ui:Ruaj}} si zakonisht.

Pa hapur MarkupCraft, serveri CadCraft MCP liston shënimet e një PDF-je në një dosje që ti e emëron (`markups_list`), dhe `cadcraft info Set.pdf` i printon në vijën e komandës.

## Nëse diçka nuk funksionon

- **Asistenti nuk sheh asnjë vegël të MarkupCraft:** kontrollo që çelësi të jetë i ndezur në këtë dritare, dhe që dritarja të jetë e hapur në Studio.
- **"kërkon lejen e redaktimit":** shëno **Redakto** nën {{ui:Asistentët}}, pastaj pyet përsëri.
- **Gabime "401" ose "token":** token-i ndryshoi (Studio u rinis, ose {{ui:Shenjë e re}}). Kopjo të renë në cilësimet e asistentit.

## Shih edhe

- [Shembuj për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me veglat që thërret.
