---
title: Kipya katika 0.7 (cha awali)
summary: RFI, wasilisho na kumbukumbu za kila siku katika kichupo kipya cha Uwanja, zenye tarehe za kutekelezwa, zilizochelewa kwa rangi nyekundu, CSV na BCF, kazi nje ya mtandao na Unganisha; wasaidizi wanaoweka hali, kujibu na kuhamisha orodha; orodha za vitengo zinazofuata Mipangilio; paneli zinazojificha na madirisha yanayosogezwa.
keywords: mpya 0.7, toleo la awali, maelezo ya toleo, rekodi ya mabadiliko, mabadiliko, 0.7, toleo, vipengele vipya, uwanja, rekodi za uwanja, rfi, ombi la taarifa, wasilisho, kumbukumbu ya kila siku, shajara ya eneo, imechelewa, tarehe ya kutekelezwa, nimepewa mimi, pini, unganisha, nje ya mtandao, kompyuta kibao, bcf, csv, msaidizi, mcp, hali ya alama, jibu, hamisha, vitengo, orodha za vitengo, nyota, urekebishaji, kubana, paneli, madirisha ya mazungumzo, kireno
from: ca5ba1f0
---

Haya ndiyo yaliyobadilika katika MarkupCraft 0.7, ikilinganishwa na 0.6. Jambo kubwa jipya ni rekodi za uwanja: RFI, wasilisho na kumbukumbu za kila siku zilizohifadhiwa ndani ya PDF pamoja na alama zako.

## Mpya

### RFI, wasilisho na kumbukumbu za kila siku

- **Kichupo cha Uwanja.** Fungua kichupo cha {{ui:Uwanja}} kisha chagua {{ui:RFI}}, {{ui:Wasilisho}} au {{ui:Kumbukumbu ya kila siku}}. Gusa au bofya karatasi ambako RFI au wasilisho linapohusika, na pini itaweka alama mahali hapo; kumbukumbu ya kila siku huwekwa kwenye karatasi iliyo wazi bila pini ({{ui:Weka pini}} huongeza moja baadaye, {{ui:Hamisha pini}} husogeza pini yoyote). Kila rekodi ina nambari yake (RFI-0001, SUB-0001, LOG-0001), kichwa, maandishi, hali, mtu aliyepewa, tarehe ya kutekelezwa, mfululizo wa majibu na orodha ya majina ya viambatisho. Angalia [Fuatilia RFI, wasilisho na kumbukumbu za kila siku](topic:field-records).
- **Ona kinachochelewa.** Chuja orodha kwa aina, hali, tarehe ya kutekelezwa (imechelewa, inatakiwa ndani ya siku 7, ina au haina tarehe ya kutekelezwa), karatasi hii au karatasi zote, utafutaji wa maandishi, au {{ui:Nimepewa mimi}}. Rekodi iliyopita tarehe yake ya kutekelezwa na bado inasubiri imewekwa alama **Imechelewa**, kwa rangi nyekundu, kwenye orodha na kwenye pini yake. Angalia [Tafuta kilicho muhimu](topic:field-records#find-what-matters).
- **CSV na BCF.** {{ui:CSV}} huandika rekodi zilizoorodheshwa kama lahajedwali; {{ui:BCF}} huziandika kama mada za BCF, kila moja ikiwa na picha ya mahali pake kwenye karatasi. Zote mbili hufuata vichujio. Angalia [Hamisha](topic:field-records#export).
- **Nje ya mtandao, na nakala mbili kuwa moja.** Rekodi huhifadhiwa ndani ya PDF na hazihitaji mtandao, kwa hivyo kompyuta kibao kwenye eneo la kazi inaweza kuongeza, kujibu na kuhifadhi. Ofisini, {{ui:Unganisha}} huunganisha rekodi za nakala nyingine ya PDF hiyo hiyo kwa vitambulisho vyake, kama hatua moja ya kutendua. Angalia [Hifadhi, nje ya mtandao na kuunganisha nakala](topic:field-records#save-offline-and-merging-copies).

### Wasaidizi wa AI

- **Msaidizi anaweza kufanya zaidi.** Msaidizi wako mwenyewe, aliyeunganishwa kupitia CadCraft Studio, sasa anaweza kuweka hali ya alama (`markup_status`, imerekodiwa kwenye mfululizo wake), kujibu kwenye mfululizo (`markup_reply`) na kuhamisha orodha ya {{ui:Alama}} kama CSV au BCF (`markups_export`, kile orodha inachoonyesha kwa vichujio vyake). Kila badiliko ni hatua moja ya kutendua, lililosainiwa kwa jina la msaidizi. Angalia [Msaidizi anachoweza kuomba](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Katika kila programu

- **Vitengo.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Vitengo}} ina orodha moja kila moja kwa urefu, eneo, ujazo, pembe na mteremko, zikiwa na ukubwa halisi unaotolewa na ufafanuzi wa vitengo (futi ya upimaji ya Marekani ni kitengo chake). Zima vitengo usivyotumia na vitatoka kwenye orodha za vitengo; weka nyota kwenye kimoja na kazi mpya huanza nacho. Faili daima huhifadhi kitengo chake. Kwenye MarkupCraft, vitengo vya kupima na vya nafasi katika {{ui:Mipangilio}} › {{ui:MarkupCraft}} na kitengo kwenye kisanduku cha urekebishaji hufuata swichi; nyota huweka kitengo cha kupima hadi uhifadhi mipangilio yako ya MarkupCraft, na umbali halisi unaoandika wakati wa kurekebisha unaweza kubeba alama yoyote ya kitengo, kama `3 yd` au `1.5 km`. Angalia [Vitengo, thamani zilizoandikwa na orodha za vitengo](common:unit-lists).
- **Mpangilio mnene zaidi na paneli zinazojificha.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kubana}} hutosha vitu zaidi kwenye skrini (skrini za kugusa na simu huhifadhi vitufe vyake vikubwa). Kila paneli ya pembeni ina upau mwembamba wa kichwa: buruta ili kuiweka au kuielea, iachie kwenye upau wa paneli nyingine ili kushiriki fremu moja kama vichupo, ishike ili iteleze hadi ukingoni, au ifiche na uirudishe kutoka ukingoni. Angalia [Panga paneli](common:arrange-panels#make-the-layout-denser).
- **Madirisha ya mazungumzo yanasogezwa.** Buruta dirisha la mazungumzo kwa upau wake wa kichwa ukiliondoa kwenye njia ya mchoro; litarudi pale ulipoliacha. Bofya mara mbili upau wa kichwa ili kulirudisha katikati. Angalia [Sogeza dirisha la mazungumzo](common:arrange-panels#move-a-dialog).
- **Mapishi kwa wasaidizi wa AI.** Maombi kumi yaliyofanyiwa kazi kwa msaidizi wako mwenyewe (panga mchoro, chapisha seti, kagua michoro, uliza maswali kuhusu modeli, jumlisha ukadiriaji wa kiasi, jaribu tofauti ya sehemu…), kila moja ikiwa na zana inazoita na ruhusa inazohitaji, na kila moja ikirudiwa na majaribio yetu. Programu hazina AI ndani yake. Angalia [Mapishi kwa wasaidizi wa AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya katika {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Lugha}}. Hiyo, **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijasomwa na mzungumzaji mzawa. Mada za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inaeleza kwa nini ukaguzi wa sasisho ulishindwa (bado hakuna faili kwa mfumo wako, hakuna mtandao, sahihi mbaya) badala ya "Imekamilika" tu, na hairudishi tena kadi ya Kipya ulichoifunga hadi kutolewe toleo jipya zaidi.

## Bado hakipo katika toleo hili

- **0.7 haijasainiwa kwa msimbo.** Kusaini, na kifurushi cha Microsoft Store, vimehamishiwa 0.8 kwa sababu uthibitishaji wa cheti bado haujafika. Angalia SHA-256 iliyo karibu na kila faili kwenye getcadcraft.com/download. Kwenye Windows, SmartScreen ikisimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio kisha uchague {{ui:Fungua}}. CadCraft Studio bado haipo kwenye duka la programu, na bado hakuna toleo la iPad wala iPhone.
- Orodha za pembe na mteremko katika {{ui:Vitengo}} zimehifadhiwa, lakini hakuna kisanduku kinachozisoma bado.
- Rekodi za uwanja hazishirikiwi katika kipindi cha moja kwa moja cha CadCraft Studio (vipindi vya moja kwa moja hubeba alama pekee); leta nakala pamoja kwa {{ui:Unganisha}}.
- Unganisha huchukua rekodi nzima kutoka nakala iliyobadilishwa mwisho: watu wawili wakibadilisha sehemu tofauti za rekodi moja, sehemu za nakala ya baadaye ndizo zinashinda. Mifululizo na majina ya viambatisho huunganishwa.
- Viambatisho ni majina pekee; faili zinabaki zilipo. Hakuna timu, arifa wala miradi ya wingu kwa rekodi, na wasaidizi bado hawana zana za rekodi.
- Rekodi za uwanja zilijaribiwa kwenye kivinjari kwa ukubwa wa simu na kompyuta kibao huku mtandao ukiwa umekatwa, lakini bado hazijajaribiwa kwa mkono kwenye kompyuta kibao halisi.
- Bado kutoka 0.6: kugeuza vitu vya ukurasa kwa pembe yoyote, kuchora maumbo mapya moja kwa moja kwenye ukurasa, kubadilisha fonti au ukubwa wa mstari, na maandishi yanayotiririka kwenye mistari kadhaa. Nakala iliyohifadhiwa yenye mabadiliko ya ukurasa bado haijafunguliwa kwenye Acrobat.
- Bado kutoka 0.5: kutendua badiliko la ukurasa (kama kuongeza ukurasa tupu), kusoma maandishi kutoka karatasi zilizoskaniwa, na vipindi vya moja kwa moja nje ya mtandao wako mwenyewe.

Kila kingine kiko katika [Kisichojengwa bado](topic:not-built-yet).
