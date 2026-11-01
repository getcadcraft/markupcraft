---
title: Mga file na binubuksan at sine-save ng MarkupCraft
summary: PDF na pumapasok, kopyang PDF na may markup na lumalabas, pati CSV, BCF at tool chest na file; kung saan napupunta ang bawat isa, online at offline.
keywords: pdf, buksan, i-save, i-export, i-download, csv, bcf, bcfzip, json, tool chest, uri ng file, format, i-upload, password, naka-encrypt
from: b3045b4c
---

## Ano ang binubuksan ng MarkupCraft

| File | Paano | Ano ang mangyayari |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open}}, {{key:Mod+O}}, o i-drop sa bahagi ng sheet. Puwede ang ilan nang sabay-sabay. | Nagiging sheet ang bawat pahina. Binabasa ulit ang mga markup na nasa file na (sa ibaba). |
| Tool chest (`.json`) | Tab na {{ui:Tools}}, saka {{ui:Import}} | Idinadagdag ang mga tool sa iyong chest. Tingnan ang [Ang tool chest](topic:tool-chest). |

Tinatanggihan ang anumang iba pa at lumalabas sa status bar ang "Binubuksan lang ng MarkupCraft ang mga PDF file." Kung maghalo-halo ang i-drop, bubukas ang mga PDF at sasabihin ng status bar kung ilang file ang hindi PDF.

### Mga markup na nasa PDF na

- **Mga markup na na-save ng MarkupCraft** ay bumabalik nang eksakto: uri, istilo, may-akda, petsa, status, mga sagot, punch number, scale ng sheet, at anumang pangalan ng sheet na tinype mo.
- **Mga komento mula sa ibang PDF program** ay binabasa rin. Ang mga rectangle, ellipse, linya at arrow, polyline, polygon, ink (pen) na guhit, text box at sticky note ay nagiging normal at maaaring i-edit na markup ng MarkupCraft. Kasama ring dumarating ang kanilang mga sagot at review status.
- **Lahat ng iba pa** (text highlight na ginawa sa pamamagitan ng pagpili ng text, stamp ng ibang program, at iba pang uri) ay ipinapakita nang ganoon mismo, at naka-markahang read-only. Puwede mo itong piliin, makita sa listahan ng markup, at sagutin, pero hindi mo ito maililipat, mababago o mabubura.
- Hindi ginagalaw ang mga link at form field at hindi ito inilalista.
- Ang scale na na-save ng ibang program (isang measurement viewport) ay ginagamit bilang scale ng sheet kapag naiintindihan ng MarkupCraft ang unit nito.

### Mga file na hindi nabubuksan

- Isang PDF na nangangailangan ng password: '"name" ay nangangailangan ng password para mabuksan. Buksan ang kopyang walang proteksyon.'
- Sirang file o hindi talaga PDF: '"name" ay hindi mabasa bilang PDF (…)'.
- Bubukas nang maayos ang PDF na protektado laban sa pagbabago. Tinatanggihan ang pag-save nito (tingnan sa ibaba).

Kapag maraming file ang sabay na binuksan, bumubukas ang mga gumagana at ang kahon na may pamagat na "Ilang file ang hindi nabuksan" ang naglilista ng iba.

## Ano ang sine-save ng MarkupCraft

Ang pag-save ay laging **download** ng bagong file. Hindi kayang i-overwrite ng web page ang file sa iyong computer, at hindi kailanman binabago ng MarkupCraft ang orihinal mong file.

| Pipiliin mo | Makukuha mo | Mga tala |
|---|---|---|
| {{ui:Save}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Kopya ng orihinal na PDF na may bawat markup na isinulat bilang totoong PDF comment. Kapag muling na-save ang file na "(marked up)", nananatili ang parehong pangalan; hindi ito nagiging "(marked up) (marked up)". Tingnan ang [I-save ang PDF na may markup](topic:save-the-marked-up-pdf). |
| Tab na {{ui:Markups}}, saka {{ui:CSV}} | "<name> markups.csv" | Ang mga markup ayon sa listahan (umiiral ang mga filter). |
| Tab na {{ui:Markups}}, saka {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 para sa mga BIM coordination tool, isang snapshot bawat markup. Tingnan ang [Mga batayan ng BCF](topic:bcf-basics). |
| Tab na {{ui:Punch list}}, saka {{ui:Export CSV}} | "<name> punch list.csv" | Ang mga punch item ayon sa numero. |
| Tab na {{ui:Tools}}, saka {{ui:Export}} | "MarkupCraft tool chest.json" | Ang iyong tool chest, para ibahagi o itago. |

Ang "<name>" ay pangalan ng unang bukas na PDF nang walang ".pdf".

Nabubuksan ang mga CSV file sa anumang spreadsheet. Naka-UTF-8 ang mga ito, kasama ang marker na hinahanap ng mga spreadsheet, kaya tama ang lumalabas na mga pangalang may tuldik. Ang cell na nagsisimula sa =, +, - o @ ay nilalagyan ng apostrophe sa unahan para hindi ito patakbuhin ng spreadsheet bilang formula.

## Saan napupunta ang mga download

Ang browser mo ang nagpapasya: kadalasan sa folder na Downloads, o magtatanong ito sa bawat pagkakataon kung itinakda mo iyon. Tingnan ang [Mga browser at computer](common:browsers#what-differs-between-browsers).

:::chromium
Kapag sabay-sabay mong sine-save ang bawat binagong file ng isang set, maaaring magtanong ang Chrome at Edge kung puwedeng mag-download ng maraming file ang site na ito. Piliin ang {{ui:Allow}}, kung hindi, ang unang kopya lang ang makukuha mo.
:::

:::safari
Sa iPad, nagtatanong ang Safari bago ang bawat download at inilalagay ang file sa app na Files, sa ilalim ng Downloads. Sa Mac, napupunta ito sa folder na itinakda sa mga setting ng Safari.
:::

## Online at offline

- **Hindi kailanman lumalabas sa computer na ito ang mga PDF mo**, online man o offline. Walang upload kahit saan.
- Dine-load ang PDF reader sa unang beses mong magbukas ng PDF ("Dine-load ang PDF reader…"), at ang PDF writer sa unang beses mong mag-save ("Dine-load ang PDF writer…") o magbukas ng file na may komento na.
- Kapag may koneksyon, parehong dine-load mula sa website.
- **Para magtrabaho nang walang koneksyon,** piliin ang {{ui:Save for offline}} sa bar sa itaas habang online ka. Binibilang ng button ang "Sine-save ang N sa M" at saka sasabihing "Offline ready". Kasama sa kopyang iyon ang PDF reader at PDF writer (mga 6 MB sa kabuuan) at ang help na ito, kaya pagkatapos, gumagana na sa browser na ito offline ang pagbubukas, pag-markup, at pag-save ng PDF.
- Kung sinasabi ng button na "Hindi na-save", may ilang file na hindi na-download: suriin ang koneksyon at i-click muli. Kung sinasabi nitong "Offline not available", hindi kayang magtago ng offline na kopya ng window ng browser na ito (mga private window at ilang managed na computer); gumamit ng normal na window.
- Para i-update o alisin ang kopya, i-click ang "Offline ready" at piliin ang "Save again (get the newest version)" o "Remove the offline copy". Higit pa sa [Pagtatrabaho offline](common:offline).

:::offline
Offline ka. Kung sinasabi ng bar sa itaas na "Offline ready", gumagana ang lahat, kasama ang pag-save. Kung hindi, at wala ka pang na-save sa tab na ito, maaaring pumalya ang {{ui:Save}} na may "The PDF writer could not load". Nasa tab pa rin ang mga markup mo: panatilihing bukas ito, bumalik sa online, at piliin muli ang {{ui:Save}}.
:::

## Mga dapat malaman

- Matagal bumukas ang malalaking set ng plano: binabasa ng MarkupCraft ang text ng bawat pahina para mahanap ang mga numero ng sheet. Binibilang ng status bar ang mga sheet habang umuusad.
- Ang pagbubukas ng parehong PDF nang dalawang beses ay nagdaragdag ng mga sheet nito nang dalawang beses. Isara ang set at buksan muli kung mangyari ito.
- Isinasara ng {{ui:Close}} ang lahat ng bukas na file nang sabay-sabay. Kung may hindi pa nase-save na markup ang alinman, magtatanong ito: {{ui:Cancel}}, {{ui:Close without saving}} o {{ui:Save copies first}}.
- Hindi pa available ang cloud saving, at wala pang desktop build. Itabi ang mga PDF mo kasama ng iba pang project file at i-back up ang mga ito gaya ng dati. Tingnan ang [Saan napupunta ang mga file mo](common:your-files).
