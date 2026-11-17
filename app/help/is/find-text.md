---
title: Finndu texta í teikningunum
summary: Leitaðu að orðunum á hverju blaði, hoppaðu á hvern fund og settu ský utan um þá alla í einu skrefi.
keywords: finna, leita, texti, orð, ctrl f, leita að, athugasemd, lykilathugasemd, skýring, ský á allt, auðkenna fundi, ocr, skönnun, skannað, lesa texta, velja texta, afrita texta, tesseract
from: 3435c9eb
---

{{ui:Finna texta}}, efst á {{ui:Blöð}}-spjaldinu, leitar að orðunum sem teiknuð eru á blöðunum sjálfum. {{ui:Leita í blöðum}} fyrir neðan leitar aðeins í heitum blaða.

## Leita

1. Ýttu á {{key:Mod+F}}, eða opnaðu {{ui:Finna texta}}.
2. Skrifaðu orðin, til dæmis `hood` eða `verify in field`.
3. Veldu {{ui:Öll blöð}} eða {{ui:Þetta blað}}, og hakaðu við {{ui:Passa við stafstöðu}} eða {{ui:Heil orð}} ef þú þarft þess.
4. Ýttu á {{key:Enter}} eða veldu {{ui:Leita}}.

Niðurstaða: sérhver fundur er skráður með blaðsnúmeri sínu og orðunum í kring, og er merktur gulum lit á blaðinu sínu. Veldu fund til að opna blað hans og þysja að honum.

Setning finnst jafnvel þótt teikningin skipti henni yfir tvo textabúta eða tvær línur.

## Settu ský utan um alla fundi

Veldu {{ui:Setja ský á allt}}. Skýjamerki er sett utan um hvern fund á listanum, á öllum blöðum, með „Fundið: <orðin þín>“ sem athugasemd. Eitt {{key:Mod+Z}} fjarlægir þau öll.

## Lestu texta af skönnun (OCR)

Skannað blað er aðeins mynd: þangað til orðin þess eru lesin er ekkert hægt að finna. Þegar talningin segir að blöð hafi engan texta, veldu {{ui:Lesa texta (OCR)…}} undir henni, eða {{ui:Síður}} › {{ui:Lesa texta (OCR)…}}.

1. Veldu síðurnar: þetta blað, hverja síðu skráarinnar, eða hverja síðu allra opinna skráa.
2. Veldu tungumál textans. {{ui:Einnig enska}} les enskuorð líka.
3. Veldu {{ui:Lesa texta}}. Stika sýnir síðuna sem verið er að lesa; {{ui:Stöðva}} stöðvar keyrsluna og heldur þeim síðum sem þegar hafa verið lesnar.

Niðurstaða: orðin er hægt að finna, velja og afrita eins og hvern annan texta. Þetta keyrir allt á tölvunni þinni: ekkert er sent neitt. Það virkar án nettengingar í Studio, og í vafranum þegar forritið hefur verið vistað fyrir notkun án nettengingar (á ensku og tungumáli viðmótsins þíns) eða þegar tungumál hefur verið notað einu sinni. Síður sem hafa þegar texta eru látnar í friði.

Þegar þú vistar fara orðin í PDF-skjalið sem ósýnilegur texti bak við myndina, auk merkinga þinna, þannig að önnur PDF-forrit geti leitað í þeim og afritað þau líka. Þangað til þú vistar sýnir skráin sem óvistuð.

## Velja og afrita texta

Veldu {{ui:Meira}} › {{ui:Velja texta til að afrita}}. Dragðu frá einu orði til annars til að velja orðin þar á milli, dragðu af auðu blaði til að velja orðin í kassa, eða tvísmelltu á eitt orð. {{key:Mod+A}} velur hvert orð á blaðinu. {{key:Mod+C}} afritar þau og heldur línunum. Hvert annað verkfæri lýkur því.

## Gott að vita

- Teikningar þar sem stafir eru teiknaðir sem línur hafa heldur engan texta; að lesa þær sem mynd virkar best á prentuðum texta, eins og skannaðri bók eða lýsingu.
- Lesarinn er Tesseract, innbyggður í forritið með tungumálagögnum fyrir ensku og tungumál forritsins. Fyrsta keyrsla hleður honum inn (um 6 MB, meira fyrir annað tungumál).
- Hversu vel hann les fer eftir skönnuninni: hreinar síður í 300 dpi lesast nær orð fyrir orð; gamlar, daufar eða lágupplausnar skannanir missa fleiri orð.
- Listinn sýnir fyrstu 500 fundi; {{ui:Setja ský á allt}} setur ský á allt að 2.000.
- Fundirnir eru hreinsaðir þegar þú lokar setti, og fyrir eina skrá þegar þú breytir síðum hennar.
