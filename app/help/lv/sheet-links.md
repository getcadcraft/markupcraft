---
title: Lapu saites
summary: Ļaujiet atzīmei pārlēkt uz citu lapu un saistīt katru lapas atsauci, piemēram, 3/A-501, ar tās lapu un skatu vienā piegājienā ar Masveida saitēm.
keywords: hipersaite, saite, saites, pāreja, lapas atsauce, detaļas atsauce, griezuma atsauce, 3/A-501, doties uz lapu, atpakaļ, automātiska saite, masveida saite, masveida saites, titula bloks, lapas numurs, lapas nosaukums, skats, detaļa, pārdēvēt, pārnumurēt, papildinājums, PDF saite
from: 86a17c37
---

Lapu saite ved jūs no atzīmes uz citu komplekta lapu: no detaļas burbuļa uz detaļu, no piezīmes uz lapu, uz kuru tā attiecas.

## Saistīt atzīmi ar lapu

1. Atlasiet atzīmi.
2. Sadaļā {{ui:Rekvizīti}} zem {{ui:Saite uz lapu}} izvēlieties lapu.

Atzīmes augšējā labajā stūrī parādās neliela bultiņa. Lai sekotu tai, turiet {{key:Mod}} un noklikšķiniet uz atzīmes, vai atlasiet to un izvēlieties {{ui:Doties uz …}} sadaļā {{ui:Rekvizīti}}. {{key:Alt+Left}} atgriež jūs lapā, no kuras nākat.

Saite nosauc lapu pēc tās numura, tāpēc tā joprojām darbojas pēc komplekta atkārtotas atvēršanas vai pēc jaunas redakcijas ievietošanas ar atdalītājiem: tā atver jaunāko lapu ar šo numuru. Ja šī lapa nav atvērta, statusa josla par to paziņo.

## Saistīt visas lapu atsauces vienlaikus

Izvēlieties {{ui:Lapas}} › {{ui:Masveida saites…}} vai {{ui:Saistīt lapu norādes…}} zem {{ui:Meklēt tekstu}} {{ui:Lapas}} paneļa augšā.

1. **Pārbaudiet lapu numurus.** MarkupCraft uzskaita katru atvērto lapu ar numuru un nosaukumu, ko nolasīja no lapas titula bloka (vai lapas etiķetes), un norāda, no kurienes tas nāca. Labojiet, kas nepareizi, un ierakstiet numuru tur, kur nekas netika atrasts (titula bloks, kura numurs ir uzzīmēts kā līnijas, nesatur tekstu, ko nolasīt). Tad izvēlieties {{ui:Atrast atsauces}}. Jūsu labojumi ir viens atsaukšanas solis, un tie kļūst par lapu etiķetēm saglabātajā PDF.
2. **Pārskatiet sarakstu.** MarkupCraft nolasa katras lapas tekstu, meklējot atsauces, piemēram, "3/A-501", "5 / A501", "DETAIL 2 ON A-501", burbuli ar "3" virs "A-501" vai vienkāršu "A-501" piezīmē, un nolasa katras lapas skatu nosaukumus (detaļas numuru ar lapas numuru zem tā vai lielu numuru ar nosaukumu blakus). Saraksts ir trijās daļās:
   - {{ui:Tiks saistīts}}: katra atsauce, lapa, uz kuru tā ved, un skats uz tās lapas. Noņemiet atzīmi no tām, ko nevēlaties. Ja skats nav atrasts (atsauce uz 7. skatu lapā ar skatiem no 1 līdz 6), izvēlieties skatu no saraksta blakus vai atstājiet {{ui:Visa lapa}}.
   - {{ui:Nav saistīts}}: lapu numuri, kādas neatver neviena atvērta lapa, ar to, cik atsauču tos min. Izvēlieties lapu, ko katrs nozīmē (piemēram, lapu, kas tika pārnumurēta), un katra atsauce uz šo numuru tiks saistīta ar to. Vai atstājiet nesaistītu.
   - Cik atsauču jau ir saistītas un joprojām ved uz pareizo vietu. Tās paliek, kā ir.
3. Izvēlieties {{ui:Izveidot saites}}.

Katrai atsaucei tiek pievienota plāna zila kaste, kas ir lapas saite. {{key:Mod}}+klikšķis uz tās atver lapu, tuvinātu uz skatu. Viens {{key:Mod+Z}} noņem tās visas.

Kodi, kas tikai izskatās pēc lapu numuriem, piemēram, R-19 vai W12X26, tiek izlaisti: atsaucei jābūt formātā, kāds ir paša komplekta lapu numuriem. Lapas paša numurs, tās titula blokā un skatu nosaukumos, nekad nav atsauce. Skenētām lapām nav teksta, ko nolasīt: vispirms izmantojiet {{ui:Nolasīt tekstu (OCR)…}} vai saistiet to atsauces pa vienai.

## Palaist atkārtoti, kad komplekts mainās

Masveida saites var palaist, cik bieži vien vēlaties:

- **Pievienota lapa**, piemēram, papildinājums ar A-601: atveriet tā failu un palaidiet Masveida saites vēlreiz. Atsauces uz A-601, kas agrāk nebija saistītas, tagad tiek saistītas.
- **Lapa pārnumurēta**: labojiet tās numuru 1. solī. Masveida saišu izveidotās saites, kas vairs neatrod savu lapu, tiek uzskaitītas sadaļā {{ui:Nav saistīts}}; izvēlieties lapu vienu reizi, un visas seko tai. Saites, kas pārvietojās uz citu skatu, tiek atjauninātas.
- Saites, ko pats izveidojāt sadaļā {{ui:Rekvizīti}}, nekad nemainās.

## Saglabātajā PDF

Saite uz lapu tajā pašā PDF tiek arī ierakstīta kā PDF saite, tāpēc citi skatītāji arī pārlec uz to ar klikšķi. Saite ar skatu atver šo skatu citā skatītājā (PDF "fit rectangle" pāreja); bez skata tā atver visu lapu. Saites uz lapu citā komplekta failā darbojas tikai MarkupCraft.
