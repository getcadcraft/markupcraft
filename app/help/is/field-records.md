---
title: Halda utan um RFI, samþykktarbeiðnir og dagbækur
summary: Settu RFI, samþykktarbeiðnir og dagbækur á blöðin, með númerum, ábyrgðaraðilum, skiladögum og þráðum; síaðu það sem er á eftir áætlun; fluttu út sem CSV eða BCF; vinndu án nettengingar og sameinaðu afrit.
keywords: rfi, beiðni um upplýsingar, samþykktarbeiðni, dagbók, vettvangsskýrsla, dagbók verkstaðar, bygging, á eftir áætlun, skiladagur, úthlutað mér, þráður, viðhengi, sameina, án nettengingar, spjaldtölva, bcf, csv, vettvangur
from: 95039c5a
---

Flipinn {{ui:Vettvangur}} geymir þrenns konar skrár við hliðina á merkingum þínum. Hver skrá er tengd við blað; RFI eða samþykktarbeiðni hefur líka nál á þeim stað á blaðinu sem hún varðar.

- **RFI**: spurning til hönnunarteymisins. Staða: Opið, Svarað, Lokað.
- **Samþykktarbeiðni**: eitthvað sem þarf að yfirfara áður en vinna heldur áfram. Staða: Opið, Í yfirferð, Samþykkt, Samþykkt með athugasemd, Endurskoða og senda aftur, Lokað.
- **Dagbók**: veður dagsins, fjöldi fólks á staðnum og unnin verk. Staða: Drög, Endanleg.

Sérhver skrá hefur eigið númer af sinni gerð (RFI-0001, SUB-0001, LOG-0001), titil, texta, ábyrgðaraðila, skiladag, þráð svara og lista yfir heiti viðhengja.

## Bæta við skrá

1. Opnaðu flipann {{ui:Vettvangur}} og veldu {{ui:RFI}} eða {{ui:Samþykktarbeiðni}}.
2. Pikkaðu eða smelltu á blaðið þar sem hún á heima. Nál birtist og skráin opnast á flipanum.
3. Skrifaðu inn titilinn, spurninguna eða lýsinguna, hver ber ábyrgð á henni og hvenær hún er á skiladegi.

Dagbók er bætt við opna blaðið án nálar. {{ui:Setja nál}} setur nál á hana síðar; {{ui:Færa nál}} færir hvaða nál sem er. Að pikka á nál á blaðinu opnar skrána hennar.

## Svara og fylgjast með

Breyttu {{ui:Staða}} og breytingin er skráð í þræðinum. Skrifaðu svar og veldu {{ui:Senda svar}} (Ctrl+Enter sendir einnig). Viðhengi eru aðeins heiti: skrifaðu eitt eða veldu skrár, og listinn sýnir liðinu hvað fylgir skránni. Skrárnar sjálfar eru áfram þar sem þær eru.

Skrá sem skiladagur er liðinn og bíður enn (RFI sem er ekki Svarað eða Lokað, samþykktarbeiðni sem ekki hefur verið afgreidd) er merkt **Á eftir áætlun**, með rauðu, á listanum og á nál hennar.

## Finndu það sem skiptir máli

Síurnar eru fyrir ofan listann: tegund, staða, skiladagur (á eftir áætlun, skiladagur innan 7 daga, með eða án skiladags), þetta blað eða öll blöð, textaleit, og {{ui:Úthlutað mér}}, sem ber saman ábyrgðaraðilann við nafnið sem MarkupCraft þekkir þig undir (sjá [Stilltu nafnið þitt](topic:set-your-name)). Línan undir síunum telur það sem er sýnt og það sem er á eftir áætlun.

## Flytja út

{{ui:CSV}} skrifar skrárnar á listanum sem töflureikni. {{ui:BCF}} skrifar þær sem BCF-umræður, hver með mynd af stað sínum á blaðinu, svo önnur BCF-verkfæri geti sýnt þær. Bæði fylgir síunum.

## Vista, án nettengingar og sameina afrit

Skrár eru vistaðar inni í PDF-skjalinu þegar þú vistar það og koma aftur þegar þú opnar það. Engin nettenging þarf: bættu við, breyttu, svaraðu og vistaðu á spjaldtölvu í kjallara, og taktu PDF-skjalið síðan með þér til baka. Eldri PDF-skjöl og PDF-skjöl úr öðrum forritum opnast eins og áður.

Til að sameina tvö afrit, opnaðu annað og veldu {{ui:Sameina}}, og veldu síðan hitt afritið af sama PDF-skjalinu. Skrár eru sameinaðar eftir auðkennum sínum:

- skrá sem aðeins eitt afrit hefur er bætt við;
- skrá sem er í báðum afritum tekur reitina sína (titil, texta, stöðu, ábyrgðaraðila, skiladag) úr afritinu sem var breytt síðast, í heild, þannig að ef tveir breyttu mismunandi reitum á sömu skrá vinnur útgáfa síðara afritsins; þræðir og heiti viðhengja úr báðum afritum eru sameinuð;
- ef bæði afrit gáfu nýrri skrá sama númer fær sú sem kemur næsta laust númer;
- skrá sem var fjarlægð í öðru afritinu helst fjarlægð nema hún hafi verið breytt eftir það.

Sameining telst eitt afturköllunarskref.

## Takmarkanir

- Skrár eru ekki deilt með Live TeamWork enn; notaðu {{ui:Sameina}}.
- Engin teymi, tilkynningar eða skýjaverkefni fyrir skrár í þessari útgáfu.
- Síður sem eru eyddar úr PDF-skjalinu fara með skrárnar sínar (staðfestingin fyrir síðurnar telur þær).
