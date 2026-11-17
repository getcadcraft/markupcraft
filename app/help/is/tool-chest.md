---
title: Verkfærakistan
summary: Vistaðu stílaða merkingu sem endurnýtanlegt verkfæri, teiknaðu með því og deildu kistunni með skrifstofunni sem skrá.
keywords: verkfærakista, verkfæri, verkfærasett, sérsniðin verkfæri, vistaðar merkingar, eftirlæti, skrifstofustaðall, innflutningur, útflutningur, deila, json
from: 7dfa36e0
---

Flipinn {{ui:Verkfæri}} geymir **verkfærakistuna** þína: merkingar vistaðar með útliti sínu, tilbúnar til að teikna aftur. Verkfæri geymir tegund merkingarinnar, lit, línubreidd, fyllingu, ógagnsæi, textastærð og viðfangsefni, auk orðalags stimpils, heitis hóps í talningu, eða upphafstexta textareits eða skýringar.

## Verkfærin sem þú byrjar með

Ný kista hefur sex: „Endurskoðunarský“ (rautt), „Spurningarský“ (blátt), „Gulur áherslupenni“, „RFI-skýring“ (blá, byrjar á „RFI: “), „Sannprófun á vettvangi“ (appelsínugul skýring sem segir „Sannprófun á vettvangi.“) og „Samþykkt með athugasemdum“ (stimpill).

## Teiknaðu með verkfæri

1. Opnaðu flipann {{ui:Verkfæri}}.
2. Smelltu á verkfæri. Það lítur út eins og það sé niðurþrýst, og samsvarandi verkfæri í tækjastikunni kveikist.
3. Teiknaðu eins og venjulega. {{ui:Eiginleikar}} segir „Teiknað með ‚<tool>‘ úr verkfærakistunni.“

Á meðan verkfæri úr kistunni er virkt gilda breytingar sem þú gerir í {{ui:Eiginleikar}} áður en þú teiknar í bili á það verkfæri, án þess að breyta vistaða verkfærinu eða venjulegum verkfærastillingum þínum. Að velja hnapp á tækjastikunni, eða ýta á lykil verkfæris, fer aftur í venjulega verkfærið.

## Vistaðu þitt eigið

1. Teiknaðu merkingu og stílaðu hana eins og þú vilt: lit, línu, fyllingu, viðfangsefni, orðalag stimpils.
2. Veldu hana.
3. Veldu {{ui:Vista valið sem verkfæri}} í flipanum {{ui:Verkfæri}}, eða {{ui:Vista sem verkfæri}} í {{ui:Eiginleikar}}.
4. Skrifaðu {{ui:Heiti verkfæris}} og veldu {{ui:Vista verkfæri}}.

Niðurstaða: verkfærinu er bætt við aftast í kistuna og flipinn {{ui:Verkfæri}} opnast til að sýna það.

## Stimplar gerðir úr vali

Veldu nokkrar merkingar (eða efni síðunnar með verkfærinu {{ui:Efni}}) og veldu {{ui:Vista val sem stimpil…}} í {{ui:Meira}} eða í hægrismellivalmyndinni. Kistan fær einn stimpil sem geymir þær allar („Stimpill: 3 merkingar saman“). Smelltu á hann, smelltu síðan á hvaða blað sem er: merkingarnar lenda saman, miðjaðar þar sem þú smellir, sem nýjar merkingar með nafninu þínu; efni síðunnar er teiknað inn á síðuna þar. Þessir stimplar eru vistaðir og deilt með kistunni eins og hvert annað verkfæri.

## Fjarlægðu verkfæri

Veldu × aftast í röð verkfærisins og síðan {{ui:Fjarlægja}}. Merkingar sem þegar hafa verið teiknaðar með því haldast óbreyttar.

## Hvar kistan er geymd

Kistan er geymd **í þessum vafra, á þessari tölvu**. Annar vafri eða tölva hefur sína eigin kistu (sem byrjar með sjálfgefnu verkfærunum sex), gluggi í einkavafri gleymir henni þegar hann lokast, og ef gögn þessarar síðu eru hreinsuð í stillingum vafrans er hún eydd.

Ef vafrinn vill ekki geyma hana (geymsla slökkt eða full) segir stöðustikan: „Ekki tókst að geyma verkfærakistuna í þessum vafra (geymsla er slökkt eða full). Fluttu hana út til að geyma hana.“

:::safari
Safari getur hreinsað gögn vefsvæðis sem það geymir þegar þú hefur ekki notað síðuna í nokkurn tíma. Fluttu kistuna út öðru hverju svo þú getir flutt hana inn aftur.
:::

**Fluttu kistuna út sem öryggisafrit**, sérstaklega eftir að þú hefur búið til verkfæri sem þú treystir á.

## Deildu kistu með skrifstofunni

1. Settu verkfærin upp einu sinni.
2. Veldu {{ui:Flytja út}}. Þú færð „MarkupCraft tool chest.json“.
3. Settu skrána þar sem skrifstofan geymir staðlana sína, eða sendu hana á milli.
4. Allir aðrir velja {{ui:Flytja inn}} í flipanum {{ui:Verkfæri}} og velja skrána.

Niðurstaða: „Flutt inn 12 verkfæri úr ‚MarkupCraft tool chest.json‘.“ Verkfæri sem komu úr sömu kistu koma í staðinn fyrir eldri afrit sín, svo innflutningur á uppfærðri skrifstofukistu endurnýjar þessi verkfæri í stað þess að tvöfalda þau; ný verkfæri bætast við. Kista rúmar allt að 500 verkfæri.

MarkupCraft athugar hvert gildi í innfluttri skrá og sleppir því sem það getur ekki notað („2 sleppt (ekki nothæft)“). Skrám sem eru ekki kista er hafnað: „Þessi skrá er ekki MarkupCraft-verkfærakista.“ eða „Þessi skrá er ekki verkfærakista (hún er ekki JSON).“

Verkfærakistuskrár úr öðrum merkingarforritum er ekki hægt að flytja inn.
