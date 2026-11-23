---
title: Misingi wa BCF
summary: Kilichomo katika usafirishaji wa BCF kutoka MarkupCraft, jinsi ya kuutumia na zana za uratibu wa BIM, na mipaka yake.
keywords: bcf, bcfzip, umbizo la ushirikiano wa BIM, matatizo, uratibu, mgongano, mada, mtazamo, picha, openbim, buildingsmart, hamisha matatizo
from: 0de26175
---

BCF (BIM Collaboration Format) ni umbizo huria la faili la kupitishia matatizo kati ya zana za BIM. Programu nyingi za uratibu wa modeli na uandishi zinaweza kuingiza faili la `.bcfzip` kama orodha ya matatizo. MarkupCraft huandika **BCF 2.1**.

## Tengeneza moja

1. Fungua kichupo cha {{ui:Markups}}.
2. Chuja orodha ili ilingane na unachotaka kutuma, kwa mfano {{ui:Status}} "Wazi". Alama zilizoorodheshwa pekee ndizo zinazohamishwa.
3. Chagua {{ui:BCF}}.
4. Subiri wakati inapotengeneza picha ya kila alama ("Inatengeneza picha za BCF (5 kati ya 20)…").

Matokeo: "<name> markups.bcfzip" hupakuliwa, na upau wa hali unaonyesha ni mada ngapi zimo ndani yake na ukubwa wa faili.

## Kilichomo ndani yake

Kila alama inakuwa **mada** moja.

| Sehemu ya mada | Inajazwa na |
|---|---|
| Jina | Nambari ya alama, mada na karatasi, kwa mfano "#4 Wingu kwenye A-101 — Mpango wa sakafu" |
| Aina | Aina ya alama (Wingu, Marejeo, Urefu…) |
| Hali | Wazi, Imekubaliwa, Imekataliwa au Imekamilika |
| Lebo | Aina ya alama na karatasi |
| Mwandishi na tarehe | Mwandishi wa alama, tarehe ya kuundwa na tarehe ya kubadilishwa |
| Amepewa, tarehe ya mwisho | Kutoka kwenye kipengee chake cha alama, ikiwa kipo |
| Maelezo | Maandishi yake au maneno ya muhuri, thamani iliyopimwa, maoni, karatasi na faili |
| Maoni | Moja kwa kila jibu, pamoja na mwandishi na tarehe |
| Picha | Picha ya alama kwenye sehemu yake ya karatasi |
| Mtazamo | Mtazamo wa juu wa mahali pa alama kwenye karatasi |

Kuhamisha alama ile ile tena kunatoa kitambulisho sawa cha mada, kwa hiyo zana inayoingiza BCF inaweza kutambua kuwa ni tatizo lilelile.

## Kinachorudi unapoingiza

{{ui:Import BCF}} inasoma faili za BCF 2.0, 2.1 na 3.0 (imekaguliwa kwenye faili 19 rasmi za majaribio za buildingSMART 3.0: kila mada ilisomwa, na maoni ya zile tatu zenye maandishi). Kwa mada ambayo ni yako (kitambulisho sawa cha mada), inaongeza maoni mapya kama majibu na kuchukua hali mpya. Mada nyingine yoyote inakuwa maelezo kwenye karatasi ambayo lebo yake au jina la faili linataja, au vinginevyo kwenye karatasi iliyo wazi. Kichwa chake, maelezo, aliyepewa na tarehe ya mwisho vinakuwa maandishi ya maelezo, na maoni yake yanakuwa majibu.

| Katika mada ya BCF | Katika MarkupCraft |
|---|---|
| Kichwa, maelezo, aliyepewa, tarehe ya mwisho | Maandishi ya maelezo |
| Maoni yenye maandishi | Majibu |
| Hali Open, Accepted, Rejected, Completed (Closed, Resolved, Done huhesabiwa kuwa Completed) | Hali ya alama |
| Mwandishi na tarehe ya kuundwa | Mwandishi na tarehe ya maelezo |
| Nafasi ya kamera | Mahali kwenye karatasi, kwa mada iliyounganishwa na karatasi kwa lebo au jina la faili pekee |
| Uteuzi wa modeli, sehemu zilizofichwa, ndege za kukatia, picha | Hazihifadhiwi: karatasi haina modeli ya kuonyeshea |

## Mipaka ya kujua

- **Karatasi si modeli.** Mtazamo unaelekeza kwenye nafasi ya alama kwenye karatasi, inayopimwa kwa mita za karatasi. Haipeleki zana ya BIM mahali kwenye modeli. Tumia picha na jina la karatasi kutafuta eneo husika.
- **Hali na aina ni zile za MarkupCraft yenyewe** (Wazi, Imekubaliwa, Imekataliwa, Imekamilika; Wingu, Marejeo…). Faili inazitangaza, kama BCF inavyoruhusu, lakini zana yenye orodha zake maalum inaweza kuzipanga upya au kuzipuuza.
- **Kuingiza kunaleta maoni, si mionekano ya modeli.** {{ui:Import BCF}} inaongeza majibu na hali kwenye alama ulizozihamisha, na kutengeneza maelezo ya matatizo mengine. Haiwezi kuonyesha kamera ya modeli. Tazama [Orodha ya alama na uhamishaji](topic:markups-list-and-export#import-bcf).
- Kutuma alama kurudi kama PDF mara nyingi ni rahisi zaidi kwa mapitio ya michoro. BCF ni kwa kupeleka maoni ya michoro kwenye mtiririko wa uratibu wa modeli.
