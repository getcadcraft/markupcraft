---
title: Ano ang nakatala sa PDF
summary: Eksaktong laman ng marked-up na kopya, ano ang nakikita ng ibang PDF program, at ano ang binabasa kapag nagbukas ka ng file.
keywords: pdf annotations, komento, nakatalang data, round trip, page labels, measurement, review state, replies, interoperability, compatibility, buksan muli, pribadong data
from: 6439ad28
---

Ang marked-up na kopya ay ang orihinal na PDF na may idinagdag na komento (PDF annotations). Ang mga pahina mismo, kasama ang kanilang mga drawing, teksto, bookmark at link, ay kinopya gaya ng dati.

## Bawat markup

| MarkupCraft | Naka-save bilang | Ipinapakita ng ibang PDF viewer |
|---|---|---|
| Rectangle, box cloud | Square annotation (cloud: maulap na border) | Komento na rectangle o cloud |
| Ellipse | Circle annotation | Komento na ellipse |
| Polygon, free cloud | Polygon annotation (cloud: maulap na border) | Komento na polygon o cloud |
| Polyline | PolyLine annotation | Komento na polyline |
| Line, arrow | Line annotation (arrow: saradong arrowhead) | Komento na linya o arrow |
| Length | Line annotation na minarkahang dimension, may measurement | Sukat ng haba, kung sinusuportahan ng viewer |
| Area | Polygon annotation na minarkahang area, may measurement | Sukat ng area, kung sinusuportahan; kung hindi, polygon |
| Count group | Isang ink annotation, isang singsing bawat item; ang teksto nito ay "group: n" | Komento na ink |
| Pen, highlighter | Ink annotation (highlighter na minarkahan bilang ganoon) | Komento na ink |
| Text | FreeText annotation | Komento na text box |
| Callout | FreeText annotation na may callout leader | Komento na callout |
| Note | Text annotation | Sticky note na bumubukas sa teksto nito |
| Stamp | Stamp annotation | Komento na stamp |

Bawat isa ay nai-save kasama ang:

- **sarili nitong itsura**, iginuhit nang eksakto gaya ng pagguhit ng MarkupCraft sa screen, kaya pareho ang itsura sa anumang viewer at pareho ang print, kasama ang punch number badge;
- **ang author**, **ang petsa ng paggawa at pagbabago**, **ang subject**, **ang teksto ng komento** (para sa text box at callout, ang teksto at ang komento), **ang color** at **ang opacity**;
- **ang mga detalye nito sa MarkupCraft** sa isang pribadong entry na hindi pinapansin ng ibang program: status, punch item, style at type, kaya eksaktong mabubuksan muli.

## Mga thread at status

- Bawat reply ay nai-save bilang reply comment na naka-link sa markup nito, kasama ang author, petsa at teksto nito. Walang sariling icon ang mga reply sa sheet.
- Bawat pagbabago ng status ay nai-save bilang reply na may dalang review state. Ipinapakita ito ng ibang review tool bilang Accepted, Rejected o Completed; ang Open ay nai-save nang walang state.
- Ang markup na may status maliban sa Open pero walang naitalang pagbabago ng status ay makakakuha ng isang review-state reply, para makita rin ng ibang program ang status.
- Ang mga reply sa read-only na komento mula sa orihinal na file ay nai-save sa parehong paraan, naka-link sa komentong iyon.

## Bawat sheet

- **Scale:** ang calibrated na sheet ay nakakakuha ng measurement viewport na sumasaklaw sa pahina (ang karaniwang paraan ng pag-iimbak ng page scale) at sariling kopya ng MarkupCraft ng calibration.
- **Sheet number:** ang numerong tinype gamit ang {{ui:Palitan ang pangalan ng sheet}} ay nagiging page label. Kapag may isa mang pahina sa file na may ganoon, ang bawat pahina ng file na iyon ay makakakuha ng label: ang tinype nitong numero, kung wala, ang dati nitong label, at kung wala rin, ang page number nito.
- **Sheet title:** ang tinype na title ay nai-save para sa MarkupCraft lamang; hindi ito ipinapakita ng ibang viewer.

## Teksto at mga karakter

Isinusulat ang teksto sa Helvetica, na mayroon ang bawat PDF viewer. Ang mga letra sa labas ng Western European set (Windows-1252) ay lumalabas na "?" sa kopya; binibilang ito ng mensahe ng save.

## Calc sheet at mga dahilan

Ang mga calc sheet at dahilan ay nakalagay sa isang pribadong entry ng PDF na pinangalanang `/MarkupCraftShell`. Hindi ito pinapansin ng ibang PDF program. Hindi rin ito pinapansin ng mas lumang MarkupCraft, at tinatanggal nito ang entry sa susunod na pag-save ng file na iyon.

## Ano ang mangyayari sa mga komento na naroon na

Kapag nagbukas ka ng PDF na may komento na:

- Ang sariling komento ng MarkupCraft ay binabasa nang eksakto. Kung inilipat o binago ng ibang program ang isa, mananaig ang bago nitong posisyon.
- Ang mga rectangle, ellipse, linya, polyline, polygon, ink, text box at sticky note mula sa ibang program ay nagiging markup na maaaring i-edit. **Kapag nag-save ka, tinatanggal ng MarkupCraft ang mga orihinal at isinusulat muli ang mga ito sa sarili nitong paraan**, kasama ang kanilang pop-up at mga reply. Maaaring bahagyang mag-iba ang itsura nila.
- Ang mga review state mula sa ibang program ang nagtatakda ng status; ang pinakabago ang mananaig.
- Ang lahat ng iba pa (text highlight, stamp ng ibang program at mga espesyal na uri) ay **hindi ginagalaw** sa kopya, read-only.
- Ang mga link at form field ay hindi ginagalaw at hindi nakalista.

Ang pag-save ulit ng parehong file ay hindi kailanman nagdodoble ng kahit ano: ang mga markup na binasa ng MarkupCraft ay pinapalitan, hindi idinadagdag muli.

## Ano ang hindi binabago

Hindi kailanman nababago ang orihinal mong file sa disk. Hindi ino-optimize ang laki ng kopya, kaya maaari itong medyo mas malaki kaysa sa orihinal. Hindi maaaring i-save ang mga protected (encrypted) na PDF.
