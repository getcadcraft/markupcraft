---
title: Breyttu eigin línum, myndum og texta síðunnar
summary: Færðu, breyttu stærð, litaðu eða eyddu því sem PDF-skráin sjálf teiknar, færðu punkta línu, skiptu um mynd og breyttu orðunum í textalínu.
keywords: efni síðu, grunnefni, breyta pdf, breyta teikningu, vigur, slóð, form, lína, mynd, skipta um mynd, texti, orð, letur, punktar, hnútar, færa, breyta stærð, litur, eyða, efnisverkfæri
from: 471d457e
---

Merkingar liggja ofan á blaði. Verkfærið {{ui:Efni}} vinnur á blaðinu sjálfu: línurnar, myndirnar og textalínurnar sem PDF-skráin teiknar. PDF-skráin þín á þessari tölvu breytist aldrei: breytingarnar eru hluti af afritinu sem þú vistar.

## Veldu það sem á að breyta

1. Veldu {{ui:Efni}} í hópnum {{ui:Velja}}, eða ýttu á {{key:B}}.
2. Undir {{ui:Velja}} í {{ui:Eiginleikar}}, kveiktu eða slökktu á {{ui:Form}}, {{ui:Myndir}} og {{ui:Texti}}. Aðeins þær tegundir sem eru á má velja, svo þú getur valið texta í þéttri teikningu án þess að grípa línurnar.
3. Smelltu á eitthvað til að velja það. Shift+smellur bætir við eða fjarlægir. Dragðu reit yfir tóman pappír til að velja nokkra hluti: dragir þú til hægri tekur það sem er alveg innan reitsins, dragir þú til vinstri tekur það sem hann snertir.

Form innan klippts svæðis er aðeins valið þar sem það sést.

## Færa, breyta stærð, lita, eyða

- **Færa:** dragðu valinn hlut, eða ýttu á örvatakkana (haltu inni Shift fyrir stærri skref). Haltu Shift meðan þú dregur til að færa beint yfir eða beint upp.
- **Breyta stærð:** dragðu einn af átta ferköntunum í kringum valið. Það stækkar eða minnkar frá gagnstæðri hlið. Haltu Shift til að halda hlutföllum.
- **Litur:** fyrir línur og form, stilltu {{ui:Litur línu}}, {{ui:Fyllingarlitur}} og {{ui:Breidd línu (pt)}} í {{ui:Eiginleikar}}.
- **Eyða:** ýttu á {{key:Delete}}, eða veldu {{ui:Eyða af síðunni}}.
- **Afturkalla:** hver breyting er eitt skref: {{key:Mod+Z}} tekur hana til baka, {{key:Mod+Y}} setur hana aftur.

{{ui:Setja aftur eins og var}} afturkallar allar breytingar á völdum hlutum í einu; {{ui:Setja þessa síðu aftur eins og hún var}} gerir það fyrir alla síðuna.

## Afrita, klippa og líma efni síðunnar

Veldu línur, myndir eða texta með verkfærinu {{ui:Efni}}, og síðan:

- {{key:Mod+C}} afritar, {{key:Mod+X}} klippir (afritar og tekur þær af síðunni), {{key:Mod+D}} setur afrit við hliðina á þeim.
- {{key:Mod+V}} límir sem efni síðunnar, við hliðina á upprunalega eða þar sem bendillinn er (eins og [Stillingar](topic:settings) segja til um); {{key:Mod+Shift+V}} límir á nákvæmlega sama stað. Límdu á aðra síðu, í annarri opinni PDF-skrá eða í öðrum flipa MarkupCraft í þessum vafra.
- Valmynd hópsins {{ui:Breyta}} og hægrismellivalmyndin hafa sömu skipanir.

Límt efni heldur línum sem línum, orðum sem orðum í eigin letri, og myndum sem myndum. Það er ein heild: færðu það, breyttu stærð með ferköntunum, eyddu því, eða {{key:Mod+Z}} það burt. Það verður hluti af síðunni í afritinu sem þú vistar. Það sem þú afritaðir síðast, merkingar eða efni síðunnar, er það sem {{key:Mod+V}} límir.

Það sem afritið inniheldur er klippt að rammanum utan um valið: það sem MarkupCraft getur ekki tekið úr afritinu (sjá hér að neðan) og er innan þess ramma fylgir með.

## Færðu punkta línu

Tvísmelltu á línu eða feril (eða veldu hana og veldu {{ui:Breyta punktum}}). Punktar hennar birtast sem ferningar og stýripunktar ferilsins sem hringir. Dragðu punkt eða stýripunkt; punktur tekur með sér stýripunktana sem eru við hlið hans, svo ferillinn heldur lögun sinni í kringum hann. Ýttu á {{key:Esc}}, eða smelltu annars staðar en á línuna, þegar þú ert búinn.

Rétthyrningar hafa enga punkta til að draga: breyttu stærð þeirra með ferköntunum í kringum þá.

## Skiptu um mynd

Veldu mynd og veldu {{ui:Skipta um mynd…}}, og veldu síðan PNG-, JPEG- eða SVG-skrá (eða PDF: fyrstu síðu hennar). Nýja myndin fyllir stað þeirrar gömlu og heldur eigin hlutföllum.

## Breyttu orðunum í textalínu

Tvísmelltu á textalínu, skrifaðu nýju orðin í {{ui:Orð}} og ýttu á {{key:Enter}}. Orðin eru skrifuð í letri línunnar og stærð hennar, og línan heldur lengd sinni, svo textinn á eftir henni færist ekki.

:::note
Flest PDF-skjöl geyma aðeins þá stafi sem þau nota úr hverju letri. Þegar þú skrifar staf sem afrit skráarinnar af letrinu hefur ekki, prentar MarkupCraft þann staf með Helvetica og segir frá því. {{ui:Eiginleikar}} sýnir hvaða stafi letrið í skránni hefur.
:::

Texta er breytt einni línu í einu; hann flæðir ekki yfir í næstu línu.

## Það sem MarkupCraft lætur óbreytt

- **Skönnuð blöð** eru ein mynd: þú getur fært, breytt stærð, skipt um eða eytt myndinni, en það sem er í henni er ekki hægt að breyta.
- **Dulkóðuð og undirrituð PDF-skjöl:** breyting á síðunni myndi rjúfa undirritun, svo verkfærið {{ui:Efni}} segir frá því og breytir engu. Merkingar virka enn.
- **Klippisvæði**, hlutir sem skiptast á milli tveggja hluta efnis síðunnar, og litablöndur sem fylla heilt svæði haldast óbreytt; MarkupCraft segir hvers vegna þegar þú reynir.
- **Orð í staðlaðu letri sem PDF-skráin lýsir ekki** (eins og Times-letur án breiddargilda í skránni) er ekki hægt að breyta, því MarkupCraft gæti ekki haldið bili línunnar. Línuna er samt hægt að færa.

## Settu merkingar inn á síðuna

Línur, rétthyrningar, sporbaugar, fjöllínur, ský og pennastrokur sem þú teiknaðir sem merkingar geta orðið hluti af síðunni sjálfri: veldu þær og veldu {{ui:Setja inn á síðuna}} í {{ui:Eiginleikar}}. Texti, stimplar, myndir og gagnsæir litir eru áfram merkingar.
