---
title: Listi yfir merkingar, síur og útflutningur
summary: Sjáðu allar merkingar í safninu, síaðu eftir blaði, höfundi, stöðu og gerð, farðu á eina þeirra og fluttu listann út sem CSV eða BCF.
keywords: listi merkinga, listi, samantekt, xlsx, töflureiknisbók, vinnubók, pdf skýrsla, flytja inn bcf, sía, raða, skýrsla, útflutningur, csv, töflureiknir, bcf, bcfzip, mál, athugasemdalisti, fara
from: 6c70261e
---

## Opna listann

Veldu {{ui:Merkingar}}-flipann hægra megin. Hver merking allra opinna skráa er talin upp, eftir blaðaröð og síðan í þeirri röð sem þær voru búnar til. Hver röð sýnir:

- tákn í lit merkingarinnar, gatanúmer hennar ef hún hefur eitt („#4“), og efni hennar,
- texta hennar, orðalag stimpils eða mælt gildi, og athugasemd hennar,
- blaðið, höfundinn og dagsetninguna,
- stöðu hennar (eða „Aðeins lesið“ fyrir athugasemdir sem fylgdu skránni), og fjölda svara þegar þau eru til.

Línan fyrir ofan listann telur þær: „38 merkingar“, eða „12 af 38 merkingum“ þegar síað er.

## Fara á merkingu

Smelltu á línu. MarkupCraft sýnir það blað, velur merkinguna og aðdrar að henni þegar hún er utan skjásins eða of lítil til að sjást. {{ui:Eiginleikar}} hefur upplýsingar hennar og þráðinn þegar þú skiptir yfir á þann flipa.

## Sía

Fjórar valmyndir eru fyrir ofan listann. Þær vinna saman.

| Valmynd | Valkostir |
|---|---|
| {{ui:Blað}} | Öll blöð, Þetta blað (fylgir þér þegar þú skiptir um blað), eða hvaða blað sem hefur merkingar |
| {{ui:Höfundur}} | Hver sem er, eða sérhver höfundur í safninu |
| {{ui:Staða}} | Hvaða staða sem er, Opin, Samþykkt, Hafnað, Lokið |
| {{ui:Gerð}} | Hvaða gerð sem er, eða sérhver gerð merkinga í safninu |

Dæmi:

- Hvað er enn opið á þessu blaði: {{ui:Blað}} „Þetta blað“, {{ui:Staða}} „Opin“.
- Athugasemdir eins ráðgjafa: {{ui:Höfundur}} nafn þeirra.
- Allar mælingar: {{ui:Gerð}} „Lengd“ eða „Flatarmál“.

Listinn sýnir allt að 2000 raðir; þrengdu hann með síu í mjög stórum söfnum.

## Flytja út í CSV

Veldu {{ui:CSV}} efst á flipanum. Þú færð „<name> markups.csv“ með **merkingunum eins og þær eru síaðar núna**, ein í hverri röð, með þessum dálkum:

Gatanúmer, Blað, Skrá, Síða, Gerð, Efni, Texti, Athugasemd, Mæling, Höfundur, Búið til, Breytt, Staða, Svör, Síðasta svar, Litur, Aðeins lesið.

- „Texti“ geymir orðin í textareitum og skýringum, orðalag stimpils eða heiti talningarhóps.
- „Mæling“ geymir lengdir, „flatarmál, ummál“ fyrir flatarmál, og „hópur: n“ fyrir talningar.
- Dagsetningar eru fullar tímasetningar í UTC.

Til að flytja út allt, settu allar síur aftur á fyrsta valkost.

## Skýring á blaðinu

{{ui:Skýring}} í {{ui:Merkingar}}-flipanum setur skýringu efst hægra megin á það sem þú sérð: reit sem telur upp hverja gerð merkinga á blaðinu (eftir efni og lit, eins og „Ský“, „Spurning“ eða „Innstungur“) ásamt fjölda þeirra. Talningarhópur telur merkin sín. Skýringin heldur áfram að telja þegar þú teiknar, færir eða eyðir merkingum, og hún prentast og vistast með tölunum eins og þær eru á þeirri stundu.

Færðu hana og breyttu stærð eins og hvaða merkingu sem er. Í {{ui:Eiginleikar}} hennar skaltu breyta {{ui:Heiti}} hennar, eða stilla {{ui:Talningar}} á {{ui:Allt settið}} til að telja öll blöð. Rými, aðrar skýringar og athugasemdir frá öðrum forritum eru ekki talin.

## Eigin dálkar og röðun

{{ui:Dálkar}} í {{ui:Merkingar}}-flipanum bætir við dálkum sem þú átt við hverja merkingu: **texta**, **val** (eins og Iðn: Vélrænt, Rafmagn, Pípulagnir), **tölu** (eins og Kostnaður) eða **dagsetningu**. Gefðu hverjum nafn, veldu gerð, skráðu valkostina fyrir valdálk og veldu {{ui:Vista dálka}}.

- Fylltu þá út í {{ui:Eiginleikar}}: hver dálkur hefur reit þar. Tölu-dálkur tekur aðeins tölur, dagsetningardálkur dagsetningu.
- Listinn sýnir gildin undir hverri merkingu, {{ui:Dálkur}}-síán velur eitt gildi (eða merkingarnar þar sem það er tómt), og {{ui:Raða}} raðar listanum eftir dálki, höfundi, stöðu, gerð eða dagsetningu, í stað blaðaraðar.
- CSV- og XLSX-útflutningar bera dálkana á eftir hinum venjulegu. Dálkarnir vistast með PDF-skránni og koma aftur þegar þú opnar hana.

## Flytja út samantekt: vinnubók eða PDF

- {{ui:XLSX}} sækir „<name> markup summary.xlsx“ með þremur blöðum: **Merkingar** (ein röð fyrir hverja merkingu á listanum, sömu dálkar og CSV), **Eftir blaði** (hversu margar merkingar hvert blað hefur, opnar og lokaðar, og hversu margar af hverri gerð, með samtölum) og **Gátlisti** (þegar gátlistaatriði eru til).
- {{ui:PDF}} sækir „<name> markup summary.pdf“: skýrslu til prentunar eða sendingar, með heiti safnsins, dagsetningu og töflu yfir merkingarnar á listanum (númer, blað, gerð, efni, texti eða athugasemd, mælt gildi, höfundur, staða og nýjasta svar). Langur texti vefst; haus töflunnar endurtekur sig á hverri síðu.

Báðir taka listann eins og hann er síaður, svo síaðu fyrst til að skila skýrslu um eitt blað, einn höfund eða aðeins opin atriði.

## Flytja út í BCF

Veldu {{ui:BCF}}. MarkupCraft býr til mynd af hverri merkingu á listanum á blaðinu hennar („Bý til myndir fyrir BCF (3 af 12)…“), og sækir síðan „<name> markups.bcfzip“. Hver merking verður eitt BCF-efni með stöðu sinni, höfundi, dagsetningum, svörum sem athugasemdum, ábyrgðarmanni og skiladegi úr gátlistaatriðinu, og myndinni.

Notaðu þetta til að færa yfirferðarathugasemdir inn í BIM-samhæfingarverkfæri sem lesa BCF. Hvað flyst með og hvað ekki er í [Grunnatriði BCF](topic:bcf-basics).

## Flytja inn BCF

{{ui:Flytja inn BCF}} les .bcfzip (eða .bcf) skrá úr BIM-verkfæri:

- Mál sem komu úr útflutningi MarkupCraft á BCF finna merkingar sínar aftur: ný svör bætast við þráðinn, og ný staða er sett (Closed telst Lokið). Svör sem þegar eru þar eru ekki bætt við tvisvar.
- Önnur mál verða að athugasemdum, með heiti, lýsingu, höfundi og athugasemdum. Athugasemd fer á það blað sem númer eða heiti merkimiða málsins vísar á, annars á opna blaðið. Myndavél úr BIM á ekki stað á pappír, svo slíkar athugasemdir eru staflaðar efst vinstra megin á blaðinu svo þú getir fært þær.

Allur innflutningurinn er eitt skref: {{key:Mod+Z}} tekur hann til baka. Sjá [Grunnatriði BCF](topic:bcf-basics).

## Það sem listinn gerir ekki enn

- Hópun á listanum (raða, og sía svo í staðinn).
- Breyting á gildum í listanum (breyttu í {{ui:Eiginleikar}}; gátlistareitir eru breytanlegir í {{ui:Gátlisti}}-flipanum).
