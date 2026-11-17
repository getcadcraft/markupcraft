---
title: Allar gerðir merkinga
summary: Sautján gerðir merkinga, flýtitakkar þeirra, hvernig hver er teiknuð, sjálfgefið útlit hennar og hvað hún verður í vistaðri PDF-skrá.
keywords: gerðir merkinga, verkfæralisti, gerðir athugasemda, ský, skýring, texti, athugasemd, stimpill, penni, áherslulitari, lína, ör, ferhyrningur, sporbaugur, fjöllína, marghyrningur, lengd, flatarmál, talning
from: 29bf32e7
---

## Verkfærin

| Tækjastika | Takki | Hvernig teiknað er | Sjálfgefið útlit | Í vistaðri PDF-skrá |
|---|---|---|---|---|
| {{ui:Penni}} | {{key:P}} | Draga | Rautt, 1.5 pt | Blek |
| {{ui:Áherslulitur}} | {{key:I}} | Draga | Gult, 14 pt breitt, gegnsætt, litar það sem er undir | Blek (merkt sem áherslustrik) |
| {{ui:Lína}} | {{key:L}} | Draga, eða smella á byrjun og endi | Rautt, 2 pt | Lína |
| {{ui:Ör}} | {{key:A}} | Draga, eða smella á byrjun og endi | Rautt, 2 pt, lokaður oddur í endanum | Lína með örvaroddi |
| {{ui:Bogi}} | {{key:O}} | Smella á byrjun, punkt á boganum, og endann | Rautt, 2 pt | Fjöllína eftir boganum |
| {{ui:Ferhyrningur}} | {{key:R}} | Draga reit | Rautt, 2 pt, engin fylling | Ferningur |
| {{ui:Sporbaugur}} | {{key:E}} | Draga reit | Rautt, 2 pt, engin fylling | Hringur |
| {{ui:Fjöllína}} | {{key:Y}} | Smella á punkta, tvísmella til að ljúka | Rautt, 2 pt | Fjöllína |
| {{ui:Marghyrningur}} | {{key:G}} | Smella á punkta, tvísmella til að ljúka | Rautt, 2 pt, engin fylling | Marghyrningur |
| {{ui:Ský}} | {{key:C}} | Draga reit | Rautt, 1.5 pt bogar | Ferningur með skýjaðri umgjörð |
| {{ui:Frjálst ský}} | {{key:Shift+C}} | Smella á punkta, tvísmella til að ljúka | Rautt, 1.5 pt bogar | Marghyrningur með skýjaðri umgjörð |
| {{ui:Skýring}} | {{key:K}} | Ýta á punktinn, draga að textanum, skrifa | Rauður texti og leiðari, 1 pt, 12 pt texti | Textareitur með leiðara skýringar |
| {{ui:Texti}} | {{key:T}} | Smella eða draga reit, skrifa | Rauður 12 pt texti, engin umgjörð | Textareitur |
| {{ui:Athugasemd}} | {{key:N}} | Smella, skrifa | Gult athugasemdartákn | Límmiði (sticky note) |
| {{ui:Stimpill}} | {{key:S}} | Velja stimpil, smella eða draga | Hástafir í ramma auk „Frá <nafn>, <dagsetning>“; litaður eftir merkingu | Stimpill |
| {{ui:Lengd}} | {{key:M}} | Smella á byrjun og endi (þarf kvarða) | Blá málslína með strikum og lengdinni | Lína merkt sem mál, með mælingu |
| {{ui:Horn}} | {{key:X}} | Smella á enda annars arms, hornið, og enda hins arms | Bláir armar, lítill bogi í horninu og hornið í gráðum | Fjöllína með horninu sem texta |
| {{ui:Flatarmál}} | {{key:Q}} | Smella á horn, tvísmella til að ljúka (þarf kvarða) | Blá útlína, ljósblá fylling, flatarmál og ummál | Marghyrningur merktur sem flatarmál, með mælingu |
| {{ui:Telja}} | {{key:U}} | Smella á hvern hlut | Appelsínugylltir tölusettir punktar og merki „hópur: n“ | Ein blekathugasemd á hvern hóp, hringur á hvern hlut |

Á snertiskjá er „tvísmelltu til að ljúka“ tvítappi, og „smella“ er snerting sem verkar þegar fingurinn lyftist (fyrir punkta, athugasemdir og talningar).

## Það sem hver merking hefur

| Reitur | Hvar þú sérð hann |
|---|---|
| Höfundur | {{ui:Eiginleikar}}, listinn, annar stimpillinn, önnur PDF-skoðunarforrit |
| Búið til og breytt | {{ui:Eiginleikar}} (tímabelti þitt), listinn, CSV |
| Staða | Opin, samþykkt, hafnað eða lokið |
| Efni | Stutt heiti; sjálfgefið er gerðin („Ský“, „Textareitur“, „Lengdarmæling“) |
| Athugasemd | Lengri athugasemdir. Fyrir athugasemd er textinn hennar athugasemdin. |
| Texti | Aðeins textareitir og skýringar |
| Svör | Þráðurinn, með breytingum á stöðu |
| Atriði á gátlista | Númer, ábyrgðarmaður, skiladagur, staða atriðis, þegar bætt er á {{ui:Gátlisti}} |
| Stíll | Litur, línubreidd, fylling og fyllingargegnsæi (lokuð form, texti og skýringar), gegnsæi, textastærð (texti, skýringar og mælingar) |

## Athugasemdir sem ekki er hægt að breyta

Athugasemdir sem fylgdu skránni og MarkupCraft getur ekki breytt (textaáherslur, stimplar annarra forrita og aðrar sérstakar gerðir) eru taldar upp með gerðinni „Annað“ og stöðumerkinu „Aðeins lesið“. Þær halda nákvæmlega því útliti sem skráin gefur þeim. Þú getur valið þær, séð höfund þeirra, efni og athugasemd, og svarað þeim.

## Ekki enn tilbúið

Skráarviðhengi eru ekki tilbúin enn. Hvaða merking sem er getur tengst blaði; sjá [Tenglar á blöð](topic:sheet-links). Myndir og undirskriftir eru settar með {{ui:Stimpill}}-verkfærinu; sjá [Stimplar og athugasemdir](topic:stamps-and-notes). Sjá [Hvað er ekki tilbúið enn](topic:not-built-yet).
