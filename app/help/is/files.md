---
title: Skrár sem MarkupCraft opnar og vistar
summary: PDF-skjöl inn, afrit af PDF-skjali með merkingum út, auk CSV-, BCF- og verkfærakistuskráa; hvar hver skrá endar, með nettengingu og án hennar.
keywords: pdf, opna, vista, flytja út, sækja, csv, bcf, bcfzip, json, verkfærakista, skráargerðir, snið, hlaða upp, lykilorð, dulkóðað
from: b3045b4c
---

## Hvað MarkupCraft opnar

| Skrá | Hvernig | Hvað gerist |
|---|---|---|
| PDF (`.pdf`) | {{ui:Opna}}, {{key:Mod+O}}, eða sleppa á blaðasvæðið. Nokkrar í einu er í lagi. | Hver síða verður að blaði. Merkingar sem eru þegar í skránni eru lesnar aftur (sjá hér að neðan). |
| Verkfærakista (`.json`) | Flipinn {{ui:Verkfæri}}, síðan {{ui:Flytja inn}} | Verkfærum er bætt í verkfærakistuna þína. Sjá [Verkfærakistuna](topic:tool-chest). |

Öðru er hafnað með „MarkupCraft opnar PDF-skjöl.“ í stöðustikunni. Ef þú sleppir blöndu af skrám opnast PDF-skjölin og stöðustikan segir hversu margar skrár voru ekki PDF.

### Merkingar sem þegar eru í PDF-skjali

- **Merkingar sem MarkupCraft vistaði** koma nákvæmlega aftur: gerð, stíll, höfundur, dagsetningar, staða, svör, gátnúmer, mælikvarði blaðsins og heiti blaða sem þú skrifaðir.
- **Athugasemdir úr öðrum PDF-forritum** eru einnig lesnar. Rétthyrningar, sporbaugar, línur og örvar, fjöllínur, marghyrningar, pennastrik, textareitir og límmiðar verða venjulegar, breytanlegar merkingar í MarkupCraft. Svör þeirra og yfirferðarstöður fylgja með.
- **Annað** (textaáherslur sem gerðar eru með því að velja texta, stimplar úr öðrum forritum og aðrar gerðir) birtist eins og það er, merkt sem lesið eingöngu. Þú getur valið það, séð það í merkingalistanum og svarað því, en ekki fært, breytt eða eytt því.
- Tenglar og reitir í eyðublöðum eru látnir óhreyfðir og eru ekki skráðir.
- Mælikvarði sem annað forrit vistaði (mælisvæði) er notaður sem mælikvarði blaðsins þegar MarkupCraft skilur mælieininguna.

### Skrár sem opnast ekki

- PDF-skjal sem krefst lykilorðs: „"nafn" þarfnast lykilorðs til að opnast. Opnaðu óvarið afrit.“
- Skemmt skjal, eða skjal sem er ekki raunverulega PDF: „"nafn" var ekki hægt að lesa sem PDF (…)“
- PDF-skjal sem opnast en er varið gegn breytingum opnast án vandræða. Vistun þess er hins vegar hafnað (sjá hér að neðan).

Þegar nokkrar skrár eru opnaðar í einu opnast þær sem virka og reiturinn „Sumar skrár opnuðust ekki“ listar hinar.

## Hvað MarkupCraft vistar

Vistun er alltaf **niðurhal** á nýrri skrá. Vefsíða getur ekki skrifað yfir skrá á tölvunni þinni, og MarkupCraft breytir aldrei upprunalegu skránni þinni.

| Þú velur | Þú færð | Athugasemdir |
|---|---|---|
| {{ui:Vista}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Afrit af upprunalega PDF-skjalinu með öllum merkingum skrifuðum inn sem venjulegar PDF-athugasemdir. Ef „(marked up)“-skrá er vistuð aftur helst sama heiti; hún verður aldrei „(marked up) (marked up)“. Sjá [Vista PDF-skjal með merkingum](topic:save-the-marked-up-pdf). |
| Flipinn {{ui:Merkingar}}, síðan {{ui:CSV}} | "<name> markups.csv" | Merkingarnar eins og þær eru á listanum (síur gilda). |
| Flipinn {{ui:Merkingar}}, síðan {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 fyrir BIM-samhæfingarforrit, ein stöðumynd fyrir hverja merkingu. Sjá [Grunnatriði BCF](topic:bcf-basics). |
| Flipinn {{ui:Gátlisti}}, síðan {{ui:Flytja út CSV}} | "<name> punch list.csv" | Gátriðin í númeraröð. |
| Flipinn {{ui:Verkfæri}}, síðan {{ui:Flytja út}} | "MarkupCraft tool chest.json" | Verkfærakistan þín, til að deila eða geyma. |

„<name>“ er heiti fyrsta opna PDF-skjalsins án „.pdf“.

CSV-skrárnar opnast í hvaða töflureikni sem er. Þær eru UTF-8 með merkinu sem töflureiknar leita að, þannig að heiti með áherslustöfum birtast rétt. Reitur sem byrjar á =, +, - eða @ fær apostrófu fremst, svo töflureiknir keyri hann aldrei sem formúlu.

## Hvar niðurhöl lenda

Vafrinn ræður því: venjulega í Niðurhalsmöppuna þína, eða hann spyr í hvert skipti ef þú hefur stillt hann þannig. Sjá [Vafrar og tölvur](common:browsers#what-differs-between-browsers).

:::chromium
Þegar þú vistar allar breyttar skrár í sett í einu gætu Chrome og Edge spurt hvort þessi síða megi sækja margar skrár. Veldu {{ui:Leyfa}}, annars færðu aðeins fyrsta afritið.
:::

:::safari
Á iPad spyr Safari áður en hvert niðurhal fer fram og setur skrána í Files-forritið, undir Downloads. Á Mac fer hún í möppuna sem er stillt í stillingum Safari.
:::

## Á netinu og án nettengingar

- **PDF-skjölin þín fara aldrei úr þessari tölvu**, hvort sem er á netinu eða án þess. Ekkert er sent upp neins staðar.
- PDF-lesarinn er hlaðinn í fyrsta skipti sem þú opnar PDF („Hleð PDF-lesaranum…“), og PDF-ritarinn í fyrsta skipti sem þú vistar („Hleð PDF-ritaranum…“) eða opnar skrá sem þegar hefur athugasemdir.
- Með nettengingu hlaðast báðir af vefsíðunni.
- **Til að vinna án nettengingar** skaltu velja {{ui:Vista til notkunar án nettengingar}} á stikunni efst á meðan þú ert á netinu. Hnappurinn telur „Vistar N af M“ og segir síðan „Tilbúið án nettengingar“. Afritið inniheldur PDF-lesarann og PDF-ritarann (um 6 MB samtals) og þessa hjálp, þannig að eftir það virkar að opna, merkja og vista PDF-skjöl án nettengingar í þessum vafra.
- Ef hnappurinn segir „Ekki tókst að vista“ hafa sumar skrár ekki sótt sig; athugaðu nettenginguna og smelltu aftur. Ef hann segir „Ekki tiltækt án nettengingar“ getur þessi vafragluggi ekki geymt afrit án nettengingar (einkagluggar og sumar stýrðar tölvur). Notaðu venjulegan glugga.
- Til að uppfæra eða fjarlægja afritið smellirðu á „Tilbúið án nettengingar“ og velur „Vista aftur (sækja nýjustu útgáfu)“ eða „Fjarlægja afritið án nettengingar“. Meira er í [Vinna án nettengingar](common:offline).

:::offline
Þú ert án nettengingar. Ef stikan efst segir „Tilbúið án nettengingar“ virkar allt, þar með talin vistun. Ef ekki, og þú hefur ekki vistað ennþá í þessum flipa, getur {{ui:Vista}} mistekist með „PDF-ritarinn var ekki hægt að hlaða“. Merkingarnar þínar eru enn í flipanum: hafðu hann opinn, komdu aftur á netið og veldu {{ui:Vista}} aftur.
:::

## Gott að vita

- Stór teikningasett taka tíma að opnast: MarkupCraft les texta hverrar síðu til að finna blaðanúmerin. Stöðustikan telur blöðin eftir því sem þau eru lesin.
- Ef sama PDF-skjalið er opnað tvisvar bætast blöðin við tvisvar. Lokaðu settinu og opnaðu það aftur ef það gerist.
- {{ui:Loka}} lokar öllum opnum skrám í einu. Ef einhverjar eru með óvistaðar merkingar spyr það: {{ui:Hætta við}}, {{ui:Loka án þess að vista}} eða {{ui:Vista afrit fyrst}}.
- Skýjavistun er ekki tiltæk ennþá og engar skjáborðsútgáfur eru komnar. Geymdu PDF-skjölin með öðrum verkefnaskrám og taktu afrit eins og venjulega. Sjá [Hvar skrárnar þínar fara](common:your-files).
