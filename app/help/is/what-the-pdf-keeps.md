---
title: Hvað er vistað í PDF-skránni
summary: Nákvæmlega hvað afritið með merkingunum inniheldur, hvað önnur PDF-forrit sjá og hvað er lesið til baka þegar skrá er opnuð.
keywords: pdf-athugasemdir, athugasemdir, vistuð gögn, tvíátta vistun, síðumerki, mæling, yfirferðarstaða, svör, samhæfni, opna aftur, einkagögn
from: 6439ad28
---

Afritið með merkingunum er upprunalega PDF-skráin með athugasemdum (PDF-athugasemdum) bættum við. Síðurnar sjálfar, teikningar þeirra, texti, bókamerki og tenglar eru afrituð eins og þau voru.

## Hver merking

| MarkupCraft | Vistað sem | Önnur PDF-forrit sýna |
|---|---|---|
| Rétthyrningur, skýjakassi | Square-athugasemd (ský: skýjuð rönd) | Rétthyrnings- eða skýjaathugasemd |
| Sporöskja | Circle-athugasemd | Sporöskjuathugasemd |
| Marghyrningur, frjálst ský | Polygon-athugasemd (ský: skýjuð rönd) | Marghyrnings- eða skýjaathugasemd |
| Fjöllína | PolyLine-athugasemd | Fjöllínuathugasemd |
| Lína, ör | Line-athugasemd (ör: lokaður oddur) | Línu- eða örathugasemd |
| Lengd | Line-athugasemd merkt sem málsetning, með mælingu | Lengdarmæling, þar sem skoðunarforritið styður þær |
| Flatarmál | Polygon-athugasemd merkt sem flötur, með mælingu | Flatarmálsmæling þar sem hún er studd; annars marghyrningur |
| Talningarhópur | Ein ink-athugasemd, hringur fyrir hvern hlut; textinn er „group: n“ | Ink-athugasemd |
| Penni, yfirstrikunarpenni | Ink-athugasemd (yfirstrik merkt sem slíkt) | Ink-athugasemd |
| Texti | FreeText-athugasemd | Textareitsathugasemd |
| Vísiathugasemd | FreeText-athugasemd með vísilínu | Vísiathugasemd |
| Athugasemd | Text-athugasemd | Límmiði sem opnast með textanum |
| Stimpill | Stamp-athugasemd | Stimpilathugasemd |

Hver ein er vistuð með:

- **eigið útlit**, teiknað nákvæmlega eins og MarkupCraft teiknar það á skjánum, þannig að það lítur eins út í hvaða skoðunarforriti sem er og prentast eins, þar með talið númersmerkið fyrir verklið;
- **höfundinum**, **dagsetningum sköpunar og breytingar**, **efninu**, **athugasemdatextanum** (fyrir textareiti og vísiathugasemdir, textinn og athugasemdin), **litnum** og **ógagnsæinu**;
- **upplýsingum MarkupCraft** í einkafærslu sem önnur forrit hunsa: staða, verklið, stíll og gerð, svo hún opnist aftur nákvæmlega.

## Þræðir og stöður

- Hvert svar er vistað sem svarathugasemd tengd við merkinguna, með höfundi, dagsetningu og texta. Svör hafa ekkert eigið tákn á blaðinu.
- Hver stöðubreyting er vistuð sem svar með yfirferðarstöðu. Önnur yfirferðarverkfæri sýna hana sem Accepted, Rejected eða Completed; Open er vistað án stöðu.
- Merking með stöðu annarri en Open, en án skráðrar stöðubreytingar, fær eitt svar með yfirferðarstöðu, svo að önnur forrit sjái stöðuna líka.
- Svör við skrifvörðum athugasemdum úr upprunalegu skránni eru vistuð á sama hátt, tengd við þá athugasemd.

## Hvert blað

- **Mælikvarði:** kvarðað blað fær mæliglugga sem þekur síðuna (staðlaða leiðin til að geyma kvarða síðu) og eigið afrit MarkupCraft af kvörðuninni.
- **Blaðnúmer:** númer sem er slegið inn með {{ui:Endurnefna blað}} verður síðumerki. Þegar einhver síða í skrá hefur slíkt merki fær hver síða í skránni merki: slegna númerið, annars gamla merkið, annars síðunúmerið.
- **Heiti blaðs:** slegið heiti er vistað aðeins fyrir MarkupCraft; önnur skoðunarforrit sýna það ekki.

## Texti og stafir

Texti er skrifaður með Helvetica, sem hvert PDF-skoðunarforrit hefur. Stafir utan vesturevrópska stafasettsins (Windows-1252) prentast sem „?“ í afritinu; vistunarskilaboðin telja þá.

## Reiknablöð og rökstuðningur

Reiknablöð og rökstuðningur eru geymd í einkafærslu PDF-skrárinnar sem heitir `/MarkupCraftShell`. Önnur PDF-forrit hunsa hana. Eldri MarkupCraft hunsar hana líka og fjarlægir hana næst þegar það vistar skrána.

## Hvað gerist við athugasemdir sem voru þegar til staðar

Þegar þú opnar PDF-skrá sem er þegar með athugasemdum:

- Athugasemdir MarkupCraft eru lesnar til baka nákvæmlega. Ef annað forrit hefur fært eða breytt stærð á einni, þá gildir nýja staðsetningin.
- Rétthyrningar, sporöskjur, línur, fjöllínur, marghyrningar, ink, textareitir og límmiðar úr öðrum forritum verða merkingar sem hægt er að breyta. **Þegar þú vistar fjarlægir MarkupCraft upprunalegu athugasemdirnar og skrifar þær aftur á sinn hátt**, ásamt sprettigluggum og svörum. Útlit þeirra getur breyst lítillega.
- Yfirferðarstöður úr öðrum forritum ákvarða stöðuna; sú nýjasta gildir.
- Allt annað (textayfirstrik, stimplar annarra forrita og sérstakar gerðir) er **látið óhreyft** í afritinu, skrivarið.
- Tenglar og reitir í eyðublöðum eru látnir óhreyfðir og ekki taldir upp.

Ef sama skrá er vistuð aftur tvöfaldast ekkert: merkingarnar sem MarkupCraft las eru skipt út, ekki bættar við aftur.

## Hvað breytist ekki

Upprunalega skráin á disknum er aldrei breytt. Afritið er ekki fínstillt fyrir stærð, svo það getur verið nokkuð stærra en upprunalega. Varðar (dulkóðaðar) PDF-skrár er ekki hægt að vista.
