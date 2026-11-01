---
title: Kilicho kipya katika 0.7
summary: RFI, wasilisho na kumbukumbu za kila siku katika kichupo kipya cha Uwanja, zenye tarehe za mwisho, zilizochelewa kwa rangi nyekundu, CSV na BCF, kazi nje ya mtandao na Unganisha; visaidizi vinavyoweka hali, kujibu na kuhamisha orodha; orodha za vipimo zinazofuata Mipangilio; paneli zinazojipanga na madirisha yanayohamishika.
keywords: kilicho kipya, kinachobadilika, maelezo ya toleo, mabadiliko, 0.7, toleo, vipengele vipya, uwanja, rekodi za uwanja, rfi, ombi la taarifa, wasilisho, kumbukumbu ya kila siku, shajara ya tovuti, tarehe ya mwisho, imechelewa, imepewa mimi, pini, unganisha, nje ya mtandao, kompyuta kibao, bcf, csv, msaidizi, mcp, hali ya alama, jibu, hamisha, vipimo, orodha za vipimo, nyota, rekebisha, kubana, paneli, madirisha, kireno
from: 142e1a1e
---

Haya ndiyo yaliyobadilika katika MarkupCraft 0.7, ikilinganishwa na 0.6. Jambo kubwa jipya ni rekodi za Uwanja: RFI, wasilisho na kumbukumbu za kila siku zinazohifadhiwa ndani ya PDF pamoja na alama zako.

## Mpya

### RFI, wasilisho na kumbukumbu za kila siku

- **Kichupo cha Uwanja.** Fungua kichupo cha {{ui:Field}} na uchague {{ui:RFI}}, {{ui:Submittal}} au {{ui:Daily log}}. Gusa au bofya karatasi ambapo RFI au wasilisho linastahili kuwa, na pini itaashiria mahali hapo; kumbukumbu ya kila siku huwekwa kwenye karatasi iliyofunguliwa bila pini ({{ui:Place pin}} huongeza moja baadaye, {{ui:Move pin}} husogeza pini yoyote). Kila rekodi ina nambari yake (RFI-0001, SUB-0001, LOG-0001), kichwa, maandishi, hali, mpokeaji kazi, tarehe ya mwisho, mfululizo wa majibu na orodha ya majina ya viambatisho. Tazama [Fuatilia RFI, wasilisho na kumbukumbu za kila siku](topic:field-records).
- **Ona kinachochelewa.** Chuja orodha kwa aina, hali, tarehe ya mwisho (iliyochelewa, inayokuja ndani ya siku 7, yenye au isiyo na tarehe ya mwisho), karatasi hii au karatasi zote, utafutaji wa maandishi, au {{ui:Assigned to me}}. Rekodi iliyopita tarehe yake ya mwisho na bado inasubiri inawekwa alama **Imechelewa**, kwa rangi nyekundu, kwenye orodha na kwenye pini yake. Tazama [Tafuta kinachojali](topic:field-records#find-what-matters).
- **CSV na BCF.** {{ui:CSV}} huandika rekodi zilizoorodheshwa kama jedwali; {{ui:BCF}} huziandika kama mada za BCF, kila moja ikiwa na picha ya mahali pake kwenye karatasi. Zote mbili hufuata vichujio. Tazama [Hamisha](topic:field-records#export).
- **Nje ya mtandao, na nakala mbili kuwa moja.** Rekodi huhifadhiwa ndani ya PDF na hazihitaji mtandao, kwa hiyo kompyuta kibao kwenye eneo la kazi inaweza kuongeza, kujibu na kuhifadhi. Ukiwa ofisini, {{ui:Merge}} huunganisha rekodi za nakala nyingine ya PDF hiyo hiyo kwa kutumia vitambulisho vyake, kama hatua moja ya kutendua. Tazama [Hifadhi, nje ya mtandao na kuunganisha nakala](topic:field-records#save-offline-and-merging-copies).

### Visaidizi vya AI

- **Kazi zaidi msaidizi anaweza kufanya.** Msaidizi wako mwenyewe, aliyeunganishwa kupitia CadCraft Studio, sasa anaweza kuweka hali ya alama (`markup_status`, iliyorekodiwa kwenye mfululizo wake), kujibu kwenye mfululizo (`markup_reply`) na kuhamisha orodha ya {{ui:Markups}} kama CSV au BCF (`markups_export`, kile orodha inachoonyesha pamoja na vichujio vyake). Kila mabadiliko ni hatua moja ya kutendua, yakiwa yametiwa saini kwa jina la msaidizi. Tazama [Kile msaidizi anaweza kuomba](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Katika kila programu

- **Vipimo.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} lina orodha moja kila moja kwa urefu, eneo, ujazo, pembe na mteremko, zenye ukubwa halisi unaotolewa na ufafanuzi wa vipimo hivyo (futi ya US survey ni kipimo chake chenyewe). Zima vipimo ambavyo hutumii kamwe, na vitaondoka kwenye orodha za vipimo; weka nyota kwenye kimoja, na kazi mpya itaanzia hapo. Faili daima huhifadhi kipimo chake. Katika MarkupCraft, vipimo vya kupima na nafasi katika {{ui:Settings}} › {{ui:MarkupCraft}} na kipimo kilicho kwenye kisanduku cha urekebishaji vinafuata swichi, nyota huweka kipimo cha kupima hadi uhifadhi mipangilio ya MarkupCraft yenyewe, na umbali halisi unaoandika unaporekebisha unaweza kubeba alama yoyote ya kipimo, kama `3 yd` au `1.5 km`. Tazama [Vipimo, thamani zilizoandikwa na orodha za vipimo](common:unit-lists).
- **Mpangilio mnene zaidi na paneli zinazojipanga.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} hutosha zaidi kwenye skrini (skrini za kugusa na simu huhifadhi vitufe vyake vikubwa). Kila paneli ya pembeni ina upau mwembamba wa kichwa: uburute ili kuiweka kizimbani au kuielea, uiachie juu ya upau wa paneli nyingine ili kushiriki fremu moja kama vichupo, ibandike ili iteleze hadi ukingoni, au ifiche na uirudishe kutoka ukingoni. Tazama [Pangilia paneli](common:arrange-panels#make-the-layout-denser).
- **Madirisha ya mazungumzo yanahamishika.** Buruta dirisha la mazungumzo kwa upau wake wa kichwa mbali na mchoro; litarudi pale ulipoliacha. Bofya mara mbili upau wa kichwa ili kulirudisha katikati. Tazama [Hamisha dirisha](common:arrange-panels#move-a-dialog).
- **Mapishi kwa visaidizi vya AI.** Maombi kumi yaliyofanyiwa kazi kwa msaidizi wako mwenyewe (panga mchoro, chapisha seti, kagua michoro, uliza modeli maswali, jumlisha ukadiriaji wa kiasi, jaribu toleo la sehemu…), kila moja ikiwa na zana inazoitisha na ruhusa inazohitaji, na kila moja ikichezwa tena na majaribio yetu. Programu hazina AI ndani yake. Tazama [Mapishi kwa visaidizi vya AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya katika {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Yenyewe, **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijakaguliwa na mzawa. Mada za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inaeleza kwa nini ukaguzi wa sasisho ulishindwa (hakuna faili la mfumo wako bado, hakuna mtandao, sahihi mbovu) badala ya kusema tu "Imekamilika", na inaacha kurudisha kadi ya Kilicho kipya uliyoifunga hadi kutolewa kwa toleo jipya zaidi.

## Havipo katika toleo hili bado

- **0.7 haijasainiwa kwa msimbo.** Usainishaji, pamoja na kifurushi cha Microsoft Store, umehamishiwa 0.8 kwa sababu uthibitishaji wa cheti bado haujakamilika. Angalia SHA-256 iliyo karibu na kila faili kwenye getcadcraft.com/download. Kwenye Windows, SmartScreen ikisimamisha kisakinishi, chagua {{ui:More info}} (Maelezo zaidi), kisha {{ui:Run anyway}} (Endesha hata hivyo). Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio na uchague {{ui:Open}}. CadCraft Studio bado haipo kwenye duka lolote la programu, na bado hakuna toleo la iPad au iPhone.
- Orodha za pembe na mteremko katika {{ui:Units}} zimehifadhiwa, lakini hakuna kisanduku kinachozisoma bado.
- Rekodi za Uwanja hazishirikiwi katika kikao cha moja kwa moja cha CadCraft Studio (vikao vya moja kwa moja vinabeba alama tu); leta nakala pamoja kwa kutumia {{ui:Merge}}.
- {{ui:Merge}} huchukua rekodi nzima kutoka nakala iliyobadilishwa mwisho: ikiwa watu wawili walibadilisha sehemu tofauti za rekodi moja, sehemu za nakala ya baadaye ndizo zinazoshinda. Mfululizo wa majibu na majina ya viambatisho yanaunganishwa.
- Viambatisho ni majina tu; faili zinabaki zilipo. Hakuna timu, arifa wala miradi ya wingu kwa rekodi, na visaidizi havina zana za rekodi bado.
- Rekodi za Uwanja zilijaribiwa kwenye kivinjari kwa ukubwa wa simu na kompyuta kibao huku mtandao ukiwa umekatwa, lakini bado hazijajaribiwa kwa mkono kwenye kompyuta kibao halisi.
- Bado kutoka 0.6: kugeuza vitu vya ukurasa kwa pembe yoyote, kuchora maumbo mapya moja kwa moja ndani ya ukurasa, kubadilisha fonti au ukubwa wa mstari, na maandishi yanayotiririka kwenye mistari kadhaa. Nakala iliyohifadhiwa yenye mabadiliko ya ukurasa haijafunguliwa kwenye Acrobat bado.
- Bado kutoka 0.5: kutendua mabadiliko ya ukurasa (kama kuongeza ukurasa mtupu), kusoma maandishi kutoka karatasi zilizochanganuliwa, na vikao vya moja kwa moja zaidi ya mtandao wako mwenyewe.

Kila kitu kingine kiko katika [Kisichojengwa bado](topic:not-built-yet).
