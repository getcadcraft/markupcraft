---
title: Gerðu merkingu að verkefni
summary: Gefðu merkingu ábyrgðarmann (einstakling eða aðstoðarmann), skiladag og tengil á teikninguna eða líkanshlutann sem hún varðar, og sjáðu hana lokast þegar sá hluti breytist í raun.
keywords: verkefni, verkefnalisti, ábyrgðarmaður, aðstoðarmaður, skil, útrunnið, tengill, lokast, breyst, hluti, teikningasvæði, merkingar sem vinna, MCP
from: 9e970202
---

Verkefni er merking sem einhver þarf að ljúka. Hún heldur sínum stað á blaðinu og þræði sínum, og bætir við titli, ábyrgðarmanni, skiladegi, stöðu og, ef þú vilt, tengli á það sem hún varðar.

## Gera verkefni

1. Veldu eina eða fleiri merkingar.
2. Opnaðu {{ui:Verkefni}}-flipann og veldu {{ui:Gera valið að verkefni}}.
3. Fylltu út titilinn (hann byrjar á texta merkingarinnar), fyrir hvern það er ({{ui:Einstaklingur}} eða {{ui:Aðstoðarmaður}}, og nafn), valfrjálsan skiladag, og hvað ber að fylgjast með.

Aðstoðarmannsverkefni er vinna fyrir aðstoðarmanninn sem þú tengdir við MarkupCraft (sjá [Nota MarkupCraft með gervigreindaraðstoðarmanni](topic:use-with-ai-assistants)). MarkupCraft inniheldur engan aðstoðarmann sjálft: það skráir aðeins verkin og tekur við svörum aðstoðarmannsins. Ef þú velur {{ui:Úthlutað til}}, og síðan {{ui:Aðstoðarmaður}} í listanum, sést hvað bíður eftir honum.

## Fylgjast með breytingu

- **Teikningin inni í merkingunni.** MarkupCraft geymir línurnar innan reits merkingarinnar eins og þær eru núna. Þegar þú opnar nýrri útgáfu af því blaði (önnur skrá með sama blaðnúmeri, eða sömu síðustöðu), veldu {{ui:Athuga núna}}: ef línurnar á því svæði eru frábrugðnar um meira en hár, lokast verkefnið.
- **Líkanshlutur.** Gefðu upp forritið og auðkenni hlutarins. Aðstoðarmaðurinn þinn les hlutinn með eigin verkfærum hins forritsins og skilar honum með `tasks_check`. Fyrsta skýrslan er geymd sem upphafsstaða; síðari skýrsla sem er frábrugðin lokar verkefninu. Hlutur sem var eytt lokar því líka.
- **Ekkert.** Venjulegt verkefni sem þú klárar sjálfur.

Lokað verkefni er merkt Lokið, merkingin verður Lokið, og athugasemd í þræðinum segir hvað breyttist. Eitt skref í afturköllun opnar það aftur.

**Takmörkun:** athugunin gengur út frá því að nýrri útgáfan noti sama upphafspunkt síðu og sömu stærð síðu. Blað sem var endurprentað í annarri stærð passar ekki, svo verkefni þess lokast ekki. Blöð eru pöruð eftir blaðnúmeri, annars eftir síðustöðu; MarkupCraft skalar ekki eina útgáfu til að passa við hina.

Endurprentun sömu teikningar með nýjum dagsetningarstimpli, eða línur sem hafa færst minna en 1.5 pt, telst ekki breyting. Ef engin nýrri útgáfa er opin verður verkefnið opið og stöðustikan segir það.

## Listinn

Hægt er að sía {{ui:Verkefni}}-listann eftir stöðu og fyrir hvern hann er, þar á meðal {{ui:Útrunnið}}. Verkefni sem er komið fram yfir skiladag birtist í {{ui:Vandamál}}-spjaldinu sem viðvörun. {{ui:CSV}} flytur listann út.

Verkefni eru vistuð í PDF-skránni með merkingunni, og þau ferðast um Live eins og aðrir merkingareiginleikar.
