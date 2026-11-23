---
title: Grunnatriði BCF
summary: Hvað BCF-útflutningur frá MarkupCraft inniheldur, hvernig nota má hann með BIM-samræmingarverkfærum og takmarkanir hans.
keywords: bcf, bcfzip, BIM-samvinnusnið, atriði, samræming, árekstur, efni, sjónarhorn, mynd, openbim, buildingsmart, flytja út atriði
from: 0de26175
---

BCF (BIM Collaboration Format) er opið skráarsnið til að senda atriði milli BIM-verkfæra. Mörg forrit fyrir líkanasamræmingu og líkanagerð geta flutt inn skrá af gerðinni `.bcfzip` sem lista yfir atriði. MarkupCraft skrifar **BCF 2.1**.

## Búa til skrá

1. Opnaðu flipann {{ui:Merkingar}}.
2. Síaðu listann eftir því sem þú vilt senda, til dæmis {{ui:Staða}} „Opið“. Aðeins merkingarnar á listanum eru fluttar út.
3. Veldu {{ui:BCF}}.
4. Bíddu á meðan mynd er tekin af hverri merkingu („Býr til myndir fyrir BCF (5 af 20)…“).

Niðurstaða: „<name> markups.bcfzip“ er sótt, og stöðustikan segir hversu mörg efni skráin inniheldur og stærð hennar.

## Hvað er í henni

Hver merking verður eitt **efni**:

| Reitur efnis | Fyllt með |
|---|---|
| Titill | Númer atriðis, viðfangsefni og blað, til dæmis „#4 Ský á A-101 — Grunnmynd“ |
| Gerð | Gerð merkingar (Ský, Tilvísun, Lengd…) |
| Staða | Opið, Samþykkt, Hafnað eða Lokið |
| Merkimiðar | Gerð merkingar og blaðið |
| Höfundur og dagsetningar | Höfundur merkingarinnar og dagsetningar sköpunar og breytingar |
| Úthlutað til, skiladagur | Úr atriði merkingarinnar, ef það er til staðar |
| Lýsing | Texti hennar eða stimpilorðalag, mæligildi, athugasemd, og blaðið og skráin |
| Athugasemdir | Ein fyrir hvert svar, með höfundi og dagsetningu |
| Mynd | Mynd af merkingunni á sínum hluta blaðsins |
| Sjónarhorn | Sýn ofan frá á stað merkingarinnar á blaðinu |

Ef sama merking er flutt aftur út fær hún sama auðkenni efnis, þannig að BCF-innflutningstól getur þekkt hana sem sama atriðið.

## Hvað kemur til baka við innflutning

{{ui:Flytja inn BCF}} les BCF 2.0-, 2.1- og 3.0-skrár (prófað á 19 opinberum prófunarskrám buildingSMART 3.0: hvert efni var lesið og athugasemdir þriggja þeirra sem hafa texta). Fyrir efni sem er þitt (sama auðkenni efnis) bætir það nýju athugasemdunum við sem svörum og tekur upp nýju stöðuna. Hvert annað efni verður athugasemd á blaðinu sem merkimiði þess eða skráarheiti nefnir, annars á opna blaðinu, með titli, lýsingu, úthlutun og skiladegi sem texta athugasemdarinnar og athugasemdum þess sem svörum.

| Í BCF-efninu | Í MarkupCraft |
|---|---|
| Titill, lýsing, úthlutun, skiladagur | Texti athugasemdarinnar |
| Athugasemdir með texta | Svör |
| Staða Open, Accepted, Rejected, Completed (Closed, Resolved og Done teljast sem Completed) | Staða merkingarinnar |
| Höfundur og sköpunardagsetning | Höfundur og dagsetning athugasemdarinnar |
| Staða myndavélar | Staður á blaðinu, aðeins fyrir efni sem er tengt blaði með merkimiða eða skráarheiti |
| Val í líkani, faldir hlutar, klippiflatir, myndir | Ekki geymt: blað hefur ekkert líkan til að sýna þau í |

## Takmarkanir sem vert er að þekkja

- **Blað er ekki líkan.** Sjónarhornið vísar á stöðu merkingarinnar á pappírnum, mæld í m af pappír. Það fer ekki með BIM-verkfæri á stað í líkaninu. Notaðu myndina og heiti blaðsins til að finna staðinn.
- **Stöður og gerðir eru MarkupCraft-eigin** (Opið, Samþykkt, Hafnað, Lokið; Ský, Tilvísun…). Skráin lýsir þeim, eins og BCF leyfir, en verkfæri með eigin föstum listum gætu varpað þeim eða hunsað þær.
- **Innflutningur færir athugasemdir, ekki sýn á líkan.** {{ui:Flytja inn BCF}} bætir svörum og stöðum við merkingarnar sem þú fluttir út og býr til athugasemdir fyrir önnur atriði; það getur ekki sýnt myndavél líkansins. Sjá [Listi yfir merkingar og útflutningur](topic:markups-list-and-export#import-bcf).
- Að senda merkingar til baka sem PDF er oft einfaldara fyrir yfirferð teikninga. BCF er fyrir það að koma athugasemdum við teikningar inn í samræmingarferli líkana.
