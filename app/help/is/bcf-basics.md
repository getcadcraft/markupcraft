---
title: Grunnatriði BCF
summary: Hvað BCF-útflutningur úr MarkupCraft inniheldur, hvernig nota má hann með BIM-samhæfingarverkfærum og takmörk hans.
keywords: bcf, bcfzip, bim collaboration format, mál, samhæfing, árekstur, efni, sýnarhorn, skyndimynd, openbim, buildingsmart, flytja út mál
from: 446f38c1
---

BCF (BIM Collaboration Format) er opið skráarsnið til að senda mál á milli BIM-verkfæra. Mörg forrit fyrir samhæfingu líkana og gerð þeirra geta flutt inn skrá af gerðinni `.bcfzip` sem lista yfir mál. MarkupCraft skrifar **BCF 2.1**.

## Búa til eina

1. Opnaðu flipann {{ui:Merkingar}}.
2. Sía listann eftir því sem þú vilt senda, til dæmis {{ui:Staða}} "Opið". Aðeins listaðar merkingar eru fluttar út.
3. Veldu {{ui:BCF}}.
4. Bíddu meðan skyndimynd er gerð af hverri merkingu ("Bý til skyndimyndir fyrir BCF (5 af 20)…").

Niðurstaða: "<name> markups.bcfzip" hleðst niður og stöðustikan segir hversu mörg efni skráin inniheldur og stærð hennar.

## Hvað er í henni

Hver merking verður eitt **efni**:

| Reitur efnis | Fyllt með |
|---|---|
| Title | Númer verkliðar, viðfangsefni og blað, til dæmis "#4 Ský á A-101 — Grunnmynd" |
| Type | Tegund merkingar (Ský, Skýring, Lengd…) |
| Status | Opið, Samþykkt, Hafnað eða Lokið |
| Labels | Tegund merkingar og blaðið |
| Author and dates | Höfundur merkingarinnar og dagsetningar stofnunar og breytinga |
| Assigned to, due date | Úr verkliðnum hennar, ef hún hefur hann |
| Description | Texti hennar eða orðalag stimpils, mælt gildi, athugasemd, og blaðið og skráin |
| Comments | Ein fyrir hvert svar, með höfundi og dagsetningu |
| Snapshot | Mynd af merkingunni á sínum hluta blaðsins |
| Viewpoint | Ofansýn af stöðu merkingarinnar á blaðinu |

Ef sama merking er flutt út aftur fæst sama auðkenni efnis, þannig að verkfæri sem flytur inn BCF getur þekkt hana sem sama mál.

## Takmörk sem þarf að vita

- **Blað er ekki líkan.** Sýnarhornið bendir á stöðu merkingarinnar á pappírnum, mælda í metrum af pappír. Það vísar BIM-verkfæri ekki á stað í líkaninu. Notaðu skyndimyndina og heiti blaðsins til að finna staðinn.
- **Stöður og tegundir eru frá MarkupCraft.** Opið, Samþykkt, Hafnað, Lokið; Ský, Skýring… Skráin lýsir þeim, eins og BCF leyfir, en verkfæri með eigin fasta lista getur kortlagt þær eða hunsað.
- **Innflutningur færir athugasemdir, ekki líkansýnir.** {{ui:Flytja inn BCF}} bætir svörum og stöðum við merkingarnar sem þú fluttir út og býr til minnispunkta um önnur mál; það getur ekki sýnt myndavél líkansins. Sjá [Listi yfir merkingar og útflutningur](topic:markups-list-and-export#import-bcf).
- Að senda merkingar til baka sem PDF er oft einfaldara fyrir yfirferð teikninga. BCF er til að koma athugasemdum við teikningar inn í samhæfingarvinnuferli líkana.
