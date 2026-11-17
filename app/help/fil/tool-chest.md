---
title: Ang tool chest
summary: I-save ang markup na may istilo bilang tool na magagamit muli, gumuhit gamit ito, at ibahagi ang chest mo sa opisina bilang file.
keywords: tool chest, tools, tool set, custom tools, naka-save na markup, paborito, pamantayan ng opisina, import, export, ibahagi, json
from: 7dfa36e0
---

Ang tab na {{ui:Mga tool}} ang naglalaman ng iyong **tool chest**: mga markup na naka-save kasama ang itsura nila, handang iguhit muli. Itinatago ng tool ang uri, kulay, lapad ng linya, fill, opacity, laki ng teksto at subject ng markup, pati ang salita ng stamp, pangalan ng grupo ng count, o panimulang teksto ng text box o callout.

## Ang mga tool na nasa simula

Ang bagong chest ay may anim: "Revision cloud" (pula), "Question cloud" (asul), "Yellow highlighter", "RFI callout" (asul, nagsisimula sa "RFI: "), "Field verify" (orange na callout na nagsasabing "I-verify sa field.") at "Aprubado na may tala" (stamp).

## Gumuhit gamit ang tool

1. Buksan ang tab na {{ui:Mga tool}}.
2. I-click ang isang tool. Mukha itong pinindot, at bumubukas ang katumbas na toolbar tool.
3. Gumuhit gaya ng dati. Sinasabi ng {{ui:Properties}} na 'Gumuguhit gamit ang "<tool>" mula sa tool chest.'

Habang aktibo ang tool ng chest, ang mga pagbabagong gagawin mo sa {{ui:Properties}} bago gumuhit ay ilalapat sa tool na iyon sa ngayon, nang hindi binabago ang naka-save na tool o ang normal mong setting ng tool. Ang pagpili ng toolbar button, o pagpindot sa key ng tool, ay bumabalik sa normal na tool.

## I-save ang sarili mo

1. Gumuhit ng markup at bigyan ito ng istilong gusto mo: kulay, linya, fill, subject, salita ng stamp.
2. Piliin ito.
3. Piliin ang {{ui:I-save ang napili bilang tool}} sa tab na {{ui:Mga tool}}, o ang {{ui:I-save bilang tool}} sa {{ui:Properties}}.
4. I-type ang {{ui:Pangalan ng tool}} at piliin ang {{ui:I-save ang tool}}.

Resulta: idinadagdag ang tool sa dulo ng chest, at bumubukas ang tab na {{ui:Mga tool}} para ipakita ito.

## Mga stamp mula sa pinili

Pumili ng ilang markup (o nilalaman ng pahina gamit ang tool na {{ui:Nilalaman}}) at piliin ang {{ui:I-save ang pinili bilang stamp…}} sa {{ui:Iba pa}} o sa right-click menu. Makakakuha ang chest ng isang stamp na naglalaman ng lahat ng ito ("Stamp: 3 markup magkakasama"). I-click ito, pagkatapos i-click ang kahit anong sheet: magkakasamang lalapag ang mga markup, nakasentro kung saan ka nag-click, bilang bagong markup na may pangalan mo; ang nilalaman ng pahina ay iguguhit sa pahina doon. Ang mga stamp na ito ay naka-save at ibinabahagi kasama ng chest gaya ng alinmang tool.

## Mag-alis ng tool

Piliin ang × sa dulo ng row ng tool, pagkatapos {{ui:Alisin}}. Ang mga markup na nagawa na gamit ito ay mananatili gaya ng dati.

## Saan itinatago ang chest

Ang chest ay naka-imbak **sa browser na ito, sa computer na ito**. Ang ibang browser o computer ay may sariling chest (nagsisimula sa anim na default), nakakalimutan ito ng private window kapag isinara, at buburahin ito ng pag-clear ng data ng site na ito sa mga setting ng browser.

Kung hindi ito maiimbak ng browser (naka-off o puno ang storage), sinasabi ng status bar: "Hindi maitago ang tool chest sa browser na ito (naka-off o puno ang storage). I-export ito para mapanatili."

:::safari
Maaaring burahin ng Safari ang naka-store na data ng website kapag matagal mo nang hindi nagagamit ang site. I-export paminsan-minsan ang chest mo para maiimport mo itong muli.
:::

**I-export ang chest mo bilang backup**, lalo na pagkatapos gumawa ng mga tool na umaasa ka.

## Ibahagi ang chest sa opisina mo

1. Itakda ang mga tool minsan.
2. Piliin ang {{ui:I-export}}. Makukuha mo ang "MarkupCraft tool chest.json".
3. Ilagay ang file na iyon kung saan itinatago ng opisina ang mga pamantayan nito, o ipadala ito.
4. Ang lahat ng iba ay pipili ng {{ui:I-import}} sa kanilang tab na {{ui:Mga tool}} at pipiliin ang file.

Resulta: "Na-import ang 12 tool mula sa "MarkupCraft tool chest.json"." Ang mga tool na galing sa parehong chest ay papalitan ang mas lumang kopya nila, kaya ang pag-import ng na-update na chest ng opisina ay magre-refresh sa mga tool na iyon sa halip na madoble; idinadagdag ang mga bagong tool. Hanggang 500 tool ang kayang hawakan ng isang chest.

Sinusuri ng MarkupCraft ang bawat value sa na-import na file at nilalaktawan ang hindi nito magamit ("2 nilaktawan (hindi magagamit)"). Tinatanggihan ang mga file na hindi chest: "Hindi ito MarkupCraft tool chest." o "Hindi ito tool chest (hindi ito JSON)."

Hindi ma-import ang mga tool chest file mula sa ibang markup program.
