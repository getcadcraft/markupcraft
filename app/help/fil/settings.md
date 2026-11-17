---
title: Mga setting ng MarkupCraft
summary: Palitan ang pangalan mo, ang kulay at kapal ng linya ng mga bagong markup, kung saan ilalagay ng paste ang mga kopya, at ang units para sa haba at posisyon sa sheet.
keywords: mga setting, preferences, mga opsyon, pangalan, author, kulay, colour, default color, line weight, line width, makapal, manipis, paste, paste sa pointer, offset, units, metric, millimeters, inches, feet, reset
from: 63ad97fd
---

Buksan ang {{ui:Settings}} gamit ang gear sa bar sa itaas, o pindutin ang {{key:Mod+,}}. Ang unang tab, ang {{ui:MarkupCraft}}, ay naglalaman ng mga setting na para sa app na ito; ang {{ui:General}} naman ay para sa mga setting na pareho sa lahat ng CadCraft app (theme, toolbar, panels). Ang mga setting ng MarkupCraft ay nasa app lang: babaguhin mo ang mga ito rito, at naaalala ito ng browser na ito (tingnan ang [Ano ang nananatili sa browser na ito](topic:browser-storage)). Agad na nagkakabisa ang pagbabago; walang kailangang i-save.

## Pangalan mo

Ang {{ui:Name on markups}} ang pangalang dinadala ng bawat bagong markup at reply, at ipinapakita ng mga naka-save na PDF bilang author ng comment. Ito ang parehong pangalan ng button sa kanang dulo ng status bar; palitan ito sa alinman sa dalawang lugar. Ang markups na nakaguhit na ay nananatili sa pangalang ginamit noong ginawa ang mga ito. Tingnan ang [Itakda ang pangalan mo bilang author](topic:set-your-name).

## Mga bagong markup

- **{{ui:Markup color}}** ay ang kulay na sinisimulan ng mga bagong pen, linya, arrow, rectangle, ellipse, polyline, polygon, cloud, callout at teksto (pula sa simula). Ang highlighters, notes, stamps, lengths, areas at counts ay may sariling kulay, dahil ipinapahayag ng kulay nila kung ano sila.
- **{{ui:Thin lines}}, {{ui:Normal}}, {{ui:Heavy lines}}** ay ginagawang kalahati ang lapad ng mga linya ng mga markup na iyon, gaya ng dati, o kalahating mas malapad pa.

Ang kulay o kapal ng linyang pipiliin mo para sa isang tool sa {{ui:Properties}} (kapag naka-on ang tool na iyon at walang napili) ang mananaig sa mga ito. Ang mga tool mula sa [tool chest](topic:tool-chest) ay nananatili sa sarili nilang style. Hindi nagbabago ang markups na nakaguhit na: piliin ang mga ito at palitan sa {{ui:Properties}}.

## Paste

Saan inilalagay ng {{key:Mod+V}} ang kinopya mo:

- **{{ui:At the pointer}}** (ang simula): kapag nasa sheet ang pointer, nakasentro ang kopya kung saan ito nakaturo. Kapag nasa ibang lugar ang pointer, katabi ng orihinal ito mapupunta.
- **{{ui:Beside the copy}}**: laging bahagyang pababa at pakanan ng orihinal, at umuusad nang kaunti sa bawat paste.

Ang button na {{ui:Paste}} at ang {{key:Mod+Shift+V}} ({{ui:Paste in place}}) ay pareho ang gawi sa alinmang pagpipilian. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:select-and-edit#copy-paste-and-duplicate).

## Mga sukat

- **{{ui:Show lengths in}}** ang unit na unang iniaalok ng dialog ng sheet scale kapag nag-calibrate ka mula sa dalawang punto: feet at inches, decimal feet, inches, meters o millimeters. Ang mga sheet na na-calibrate mo na ay nananatili sa unit nila. Tingnan ang [I-calibrate ang sheet at sukatin](topic:calibrate-and-measure).
- **{{ui:Position on the sheet}}** ay pumipili ng inches o millimeters para sa posisyon ng pointer sa kaliwang ibaba ng screen. Posisyon ito sa papel, hindi totoong distansya sa mundo.

## I-reset

Ang {{ui:Reset MarkupCraft settings}} sa ibaba ng dialog ay ibinabalik ang mga setting na ito, at ang mga setting ng panel at toolbar sa {{ui:General}}, sa paunang kalagayan ng mga ito. Pinananatili nito ang pangalan mo, dahil sinasabi nito kung sino ka at hindi kung paano mo gustong magtrabaho, at pinananatili rin nito ang mga kulay na pinili mo sa sariling panel ng bawat tool.
