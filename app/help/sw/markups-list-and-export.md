---
title: Orodha ya alama, vichujio na kuhamisha
summary: Ona kila alama kwenye seti, chuja kwa karatasi, mwandishi, hali na aina, nenda kwenye moja, na uhamishe orodha kama CSV au BCF.
keywords: orodha ya alama, orodha, muhtasari, xlsx, kitabu cha lahajedwali, ripoti ya pdf, ingiza bcf, chuja, panga, ripoti, hamisha, csv, lahajedwali, bcf, bcfzip, masuala, orodha ya maoni, ruka
from: 6c70261e
---

## Fungua orodha

Chagua kichupo cha {{ui:Alama}} upande wa kulia. Kila alama ya kila faili iliyofunguliwa imeorodheshwa, kwa mpangilio wa karatasi na kisha kwa mpangilio ilivyotengenezwa. Kila mstari unaonyesha:

- ikoni yenye rangi ya alama, namba yake ya kasoro ikiwa ina moja ("#4"), na mada yake,
- maandishi yake, maneno ya muhuri au thamani iliyopimwa, na maoni yake,
- karatasi, mwandishi na tarehe,
- hali yake (au "Soma tu" kwa maoni yaliyokuja na faili), na idadi ya majibu ikiwa ina majibu.

Mstari juu ya orodha unahesabu: "alama 38", au "alama 12 kati ya 38" ikichujwa.

## Nenda kwenye alama

Bofya mstari. MarkupCraft inaonyesha karatasi hiyo, inachagua alama, na kukuza hadi ilipo ikiwa iko nje ya skrini au ni ndogo mno kuonekana. {{ui:Sifa}} ina maelezo na mazungumzo yake unapobadilisha kurudi kwenye kichupo hicho.

## Chuja

Menyu nne juu ya orodha. Zinaunganika.

| Menyu | Chaguo |
|---|---|
| {{ui:Karatasi}} | Karatasi zote, Karatasi hii (inakufuata unapobadilisha karatasi), au karatasi yoyote yenye alama |
| {{ui:Mwandishi}} | Yeyote, au kila mwandishi kwenye seti |
| {{ui:Hali}} | Hali yoyote, Wazi, Imekubaliwa, Imekataliwa, Imekamilika |
| {{ui:Aina}} | Aina yoyote, au kila aina ya alama kwenye seti |

Mifano:

- Kilicho bado wazi kwenye karatasi hii: {{ui:Karatasi}} "Karatasi hii", {{ui:Hali}} "Wazi".
- Maoni ya mshauri mmoja: {{ui:Mwandishi}} jina lake.
- Vipimo vyote: {{ui:Aina}} "Urefu" au "Eneo".

Orodha inaonyesha hadi mistari 2000; kwenye seti kubwa sana, ipunguze kwa kichujio.

## Hamisha kwenda CSV

Chagua {{ui:CSV}} juu ya kichupo. Utapata "<name> markups.csv" yenye **alama kama zilivyochujwa sasa**, moja kwa kila mstari, zikiwa na safu hizi:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- "Text" inashikilia maneno ya visanduku vya maandishi na vielekezi, maneno ya muhuri, au jina la kikundi cha hesabu.
- "Measurement" inashikilia urefu, "area, perimeter" kwa maeneo, na "group: n" kwa hesabu.
- Tarehe ni muhuri kamili wa wakati katika UTC.

Ili kuhamisha kila kitu, rudisha kwanza kila kichujio kwenye chaguo lake la kwanza.

## Kifunguo kwenye karatasi

{{ui:Ufunguo}} katika kichupo cha {{ui:Alama}} huweka ufunguo kwenye kona ya juu kulia ya unachokiona: kisanduku kinachoorodhesha kila aina ya alama kwenye karatasi (kwa mada na rangi, kama "Wingu", "Swali" au "Soketi") pamoja na idadi yake. Kikundi cha hesabu huhesabu alama zake. Ufunguo unaendelea kuhesabu unapochora, kusogeza au kufuta alama, na unachapishwa na kuhifadhiwa pamoja na hesabu za wakati huo.

Isogeze na ubadilishe ukubwa wake kama alama nyingine yoyote. Kwenye {{ui:Sifa}} yake, badilisha {{ui:Kichwa}}, au weka {{ui:Hesabu}} kuwa {{ui:Seti nzima}} ili kuhesabu kila karatasi. Nafasi, ufunguo mwingine na maoni kutoka programu nyingine hayahesabiwi.

## Safu zako mwenyewe, na kupanga

{{ui:Safu}} kwenye kichupo cha {{ui:Alama}} huongeza safu zako mwenyewe kwa kila alama: **maandishi**, **chaguo** (kama Taaluma: Mekaniki, Umeme, Mabomba), **namba** (kama Gharama) au **tarehe**. Ipe kila moja jina, chagua aina yake, orodhesha chaguo kwa safu ya chaguo, kisha uchague {{ui:Hifadhi safu}}.

- Zijaze chini ya {{ui:Sifa}}: kila safu ina sehemu yake huko. Safu ya namba inakubali namba pekee, safu ya tarehe tarehe pekee.
- Orodha inaonyesha thamani chini ya kila alama. Kichujio cha {{ui:Safu}} kinachagua thamani moja (au alama ambazo haina kitu), na {{ui:Panga}} hupanga orodha kwa safu, kwa mwandishi, hali, aina au tarehe, badala ya kwa karatasi.
- Usafirishaji wa CSV na XLSX hubeba safu baada ya zile za kawaida. Safu huhifadhiwa pamoja na PDF na hurudi unapoifungua tena.

## Hamisha muhtasari: kitabu cha lahajedwali au PDF

- {{ui:XLSX}} inapakua "<name> markup summary.xlsx" yenye vichupo vitatu: **Markups** (mstari mmoja kwa kila alama iliyoorodheshwa, safu zile zile za CSV), **By sheet** (alama ngapi kila karatasi ina, zilizo wazi na zilizofungwa, na ngapi za kila aina, pamoja na jumla) na **Punch list** (inapokuwa na vipengee vya kasoro).
- {{ui:PDF}} inapakua "<name> markup summary.pdf": ripoti ya kuchapisha au kutuma, yenye jina la seti, tarehe, na jedwali la alama zilizoorodheshwa (namba, karatasi, aina, mada, maandishi au maoni, thamani iliyopimwa, mwandishi, hali na jibu la mwisho). Maandishi marefu hujifunga kwenye mstari unaofuata; kichwa cha jedwali hurudia kila ukurasa.

Zote mbili huchukua orodha kama ilivyochujwa, kwa hiyo chuja kwanza ili kuripoti karatasi moja, mwandishi mmoja au vipengee vilivyo wazi tu.

## Hamisha kwenda BCF

Chagua {{ui:BCF}}. MarkupCraft inatengeneza picha ya kila alama iliyoorodheshwa kwenye karatasi yake ("Inatengeneza picha za BCF (3 kati ya 12)…"), kisha inapakua "<name> markups.bcfzip". Kila alama inakuwa mada moja ya BCF yenye hali yake, mwandishi, tarehe, majibu kama maoni, aliyepewa na tarehe ya mwisho kutoka kwenye kipengee chake cha kasoro, na picha.

Tumia hii kuleta maoni ya ukaguzi wa michoro kwenye zana za uratibu wa BIM zinazosoma BCF. Kinachohamia, na kisichohamia, kipo kwenye [Misingi ya BCF](topic:bcf-basics).

## Ingiza BCF

{{ui:Ingiza BCF}} inasoma faili ya .bcfzip (au .bcf) kutoka zana ya BIM:

- Masuala yaliyotoka kwenye usafirishaji wa BCF wa MarkupCraft yanapata alama zake tena: majibu mapya yanaongezwa kwenye mazungumzo, na hali mpya inawekwa (Closed inahesabiwa kama Imekamilika). Majibu yaliyopo tayari hayaongezwi mara mbili.
- Masuala mengine yanakuwa madokezo, pamoja na kichwa chake, maelezo, mwandishi na maoni. Dokezo huwekwa kwenye karatasi ambayo namba au jina lake limo kwenye lebo za suala, la sivyo kwenye karatasi iliyofunguliwa. Kamera ya BIM haina nafasi kwenye karatasi, kwa hiyo madokezo kama hayo hurundikwa juu kushoto mwa karatasi ili uyasogeze.

Uingizaji mzima ni hatua moja: {{key:Mod+Z}} inauondoa. Tazama [Misingi ya BCF](topic:bcf-basics).

## Kisichofanya orodha bado

- Kuweka kwenye makundi (panga, kisha chuja badala yake).
- Kuhariri thamani kwenye orodha (hariri kwenye {{ui:Sifa}}; sehemu za kasoro zinaweza kuhaririwa kwenye kichupo cha {{ui:Orodha ya kasoro}}).
