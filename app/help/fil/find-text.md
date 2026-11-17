---
title: Maghanap ng teksto sa mga drawing
summary: Hanapin ang mga salita sa bawat sheet, tumalon sa bawat hit, at i-cloud ang lahat ng ito sa isang hakbang.
keywords: hanapin, maghanap, teksto, salita, ctrl f, note, keynote, callout, cloud lahat, i-highlight ang mga hit, ocr, scan, na-scan, basahin ang teksto, piliin ang teksto, kopyahin ang teksto, tesseract
from: 3435c9eb
---

Ang {{ui:Maghanap ng teksto}}, sa itaas ng panel na {{ui:Sheets}}, ay naghahanap ng mga salitang iginuhit mismo sa mga sheet. Ang {{ui:Hanapin ang sheets}} sa ibaba nito ay naghahanap lang ng pangalan ng sheet.

## Maghanap

1. Pindutin ang {{key:Mod+F}}, o buksan ang {{ui:Maghanap ng teksto}}.
2. I-type ang mga salita, gaya ng `hood` o `verify in field`.
3. Piliin ang {{ui:Lahat ng sheet}} o {{ui:Ang sheet na ito}}, at lagyan ng tsek ang {{ui:Itugma ang case}} o {{ui:Buong salita}} kung kailangan.
4. Pindutin ang {{key:Enter}} o piliin ang {{ui:Find}}.

Resulta: nakalista ang bawat hit kasama ang numero ng sheet nito at ang mga salitang nakapaligid dito, at may markang dilaw sa sheet nito. Piliin ang isang hit para buksan ang sheet nito at mag-zoom dito.

Nahahanap pa rin ang isang parirala kahit hatiin ito ng drawing sa dalawang piraso ng teksto o sa dalawang linya.

## I-cloud ang bawat hit

Piliin ang {{ui:Cloud lahat}}. Lalagyan ng revision cloud ang bawat hit sa listahan, sa bawat sheet, na may "Nakita: <ang mga salita mo>" bilang komento nito. Isang {{key:Mod+Z}} lang ang mag-aalis sa lahat ng ito.

## Basahin ang teksto sa scan (OCR)

Larawan lang ang na-scan na sheet: hangga't hindi nababasa ang mga salita nito, walang mahahanap. Kapag sinasabi ng bilang na walang teksto ang mga sheet, piliin ang {{ui:Basahin ang teksto (OCR)…}} sa ilalim nito, o {{ui:Mga pahina}} › {{ui:Basahin ang teksto (OCR)…}}.

1. Pumili ng mga pahina: ang sheet na ito, bawat pahina ng file, o bawat pahina ng bawat bukas na file.
2. Pumili ng wika ng teksto. Binabasa rin ng {{ui:Ingles din}} ang mga salitang Ingles.
3. Piliin ang {{ui:Basahin ang teksto}}. Ipinapakita ng bar ang pahinang binabasa; tinatapos ng {{ui:Itigil}} ang takbo at pinapanatili ang mga pahinang nabasa na.

Resulta: maaari nang hanapin, piliin at kopyahin ang mga salita tulad ng iba pang teksto. Lahat ay tumatakbo sa computer mo: walang ipinapadalang kahit saan. Gumagana ito nang walang koneksyon sa Studio, at sa browser kapag na-save na ang app para offline (Ingles at wika ng interface mo) o nagamit na minsan ang isang wika. Nananatili ang mga pahinang may teksto na sa dati nilang anyo.

Kapag nag-save ka, napupunta ang mga salita sa PDF bilang hindi nakikitang teksto sa likod ng larawan, hiwalay sa mga markup mo, para mahanap at makopya rin ng ibang PDF program. Hanggang hindi ka nakakapag-save, lalabas na hindi pa naka-save ang file.

## Piliin at kopyahin ang teksto

Piliin ang {{ui:Iba pa}} › {{ui:Piliin ang teksto para kopyahin}}. I-drag mula sa isang salita papunta sa isa pa para piliin ang mga salitang nasa pagitan nila, i-drag mula sa walang lamang papel para piliin ang mga salita sa loob ng kahon, o i-double-click ang isang salita. Pipiliin ng {{key:Mod+A}} ang bawat salita sa sheet. Kokopyahin ng {{key:Mod+C}} ang mga ito habang pinananatili ang mga linya. Tinatapos ito ng alinmang ibang tool.

## Dapat malaman

- Walang teksto rin ang mga drawing na ang mga letra ay iginuhit bilang linya; pinakamahusay gumana ang pagbasa sa mga ito bilang larawan sa naimprentang teksto gaya ng na-scan na libro o specification.
- Ang reader ay Tesseract, nakabuild sa app kasama ang datos ng wika nito para sa Ingles at mga wika ng app. Ito ang ni-load sa unang takbo (mga 6 MB, mas malaki para sa pangalawang wika).
- Nakadepende sa scan kung gaano ito kahusay bumasa: malinis na pahina sa 300 dpi ay halos buong-buo ang nababasa; ang luma, malabo o mababang-resolusyong scan ay mas maraming salitang nami-miss.
- Ipinapakita ng listahan ang unang 500 hit; ang Cloud lahat ay nag-cloud ng hanggang 2,000.
- Nabubura ang mga hit kapag isinara mo ang set, at para sa isang file, kapag binago mo ang mga pahina nito.
