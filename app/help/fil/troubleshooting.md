---
title: Paglutas ng problema
summary: Mga mensaheng ipinapakita ng MarkupCraft at ang dapat gawin tungkol sa mga ito, pati ayos para sa mga bagay na parang hindi gumagana.
keywords: problema, error, hindi gumagana, tulong, mensahe, hindi mabuksan, hindi ma-save, password, protected, tinanggihang sukat, calibrate, offline, blangko, mabagal, nawalang markup, mga tandang pananong
from: bb650b39
---

Karamihan ng problema ay ipinaliliwanag sa status bar sa ibaba ng screen. Basahin muna ito.

## Pagbubukas ng file

**"Ang MarkupCraft ay nagbubukas ng PDF file. "x" ay hindi PDF."**
Ibang bagay ang napili o na-drop mo. PDF lang ang nabubuksan. I-export muna ang mga drawing mula sa iyong CAD program bilang PDF.

**'"pangalan" ay nangangailangan ng password para mabuksan. Buksan ang kopyang walang proteksyon.'**
Protektado ng password ang PDF. Humingi sa nagpadala ng kopyang walang proteksyon, o buksan ito sa PDF program na alam mo ang password at mag-save ng kopyang walang password.

**'"pangalan" ay hindi mabasa bilang PDF (…)'**
Sira ang file o hindi talaga PDF (hindi kumpletong download, putol na attachment sa email). I-download muli. Kung mabubuksan ito ng ibang PDF program, gamitin ang "save as" nila para gumawa ng malinis na kopya at buksan iyon.

**"May mga file na hindi nabuksan"**
Kapag nagbukas ka ng ilan nang sabay, ililista ng kahong ito ang mga file na pumalya at kung bakit. Nakabukas ang iba.

**"Hindi ma-load ng PDF reader: …"**
Hindi makuha ang PDF engine. Online: i-reload ang pahina at subukan muli; tiyaking hindi hinaharangan ng firewall o content blocker ang site. Offline: hindi na-save ang MarkupCraft para sa offline na paggamit sa browser na ito (ang bar sa itaas ay hindi nagsasabing "Offline ready"). Kumonekta sa internet, piliin ang {{ui:I-save para sa offline}}, at hintayin ang "Offline ready". Tingnan ang [Pagtatrabaho offline](common:offline).

**"Maaaring dalawang beses lumitaw ang ilang annotation sa screen" o "Hindi mabasa ang dagdag na detalye ng annotation"**
Hindi karaniwan ang mga umiiral na komento ng file. Binubuksan pa rin ang mga ito hangga't kaya ng MarkupCraft; suriin ang mga ito bago umasa sa kanila. Gumagana pa rin ang pag-save.

**Mali ang pangalan ng sheet, o "page 3"**
Tingnan ang [Paano nakukuha ng mga sheet ang pangalan nila](topic:open-a-plan-set#how-sheets-get-their-names). Walang tekstong mababasa sa mga na-scan na sheet; gamitin ang {{ui:Palitan ang pangalan ng sheet}}.

**Dalawang beses lumalabas ang parehong sheet**
Dalawang beses nabuksan ang parehong file. Piliin ang {{ui:Isara}} (i-save muna kung kailangan) at buksan muli ang set.

## Pagguhit at pagpili

**Walang nangyayari kapag nag-click ako sa sheet**
Tingnan kung aling tool ang pinindot sa toolbar, at basahin ang status bar. Gamit ang {{ui:Rectangle}}, {{ui:Ellipse}} at {{ui:Cloud}}, ang click na walang drag ay walang iginuguhit: mag-drag. Gamit ang {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} at {{ui:Lawak}}, dinadagdagan ang mga punto: tapusin sa double-click o {{key:Enter}}.

**"Kailangan ng polygon ng kahit 3 punto." (o 2 para sa polyline)**
Mag-click ng mas maraming punto bago tapusin.

**"Walang na-type, kaya walang tekstong idinagdag."**
Nananatili lang ang mga text box at callout kapag may teksto. Iguhit muli at mag-type bago mag-click sa labas.

**"Magkapareho ang dalawang punto. Mag-click sa dalawang magkaibang punto."**
Para sa mga linya, arrow, haba at calibration, dapat magkalayo ang dalawang dulo. Mag-drag, o mag-click nang dalawang beses sa magkaibang lugar.

**Hindi ko maililipat o mabubura ang markup; may gray na dashed box ito**
Ito ay read-only na komentong kasama ng file (halimbawa, text highlight). Pinananatili ito ng MarkupCraft gaya ng dati: maaari ka lang sumagot dito. Sinasabi ng status bar na "Ang mga read-only na markup ay pinananatili gaya ng nasa file".

**Nagta-type ng letra sa kahon ang mga key ko sa halip na pumili ng tool**
Nasa text box ang cursor (reply, field sa {{ui:Properties}}, paghahanap sa sheet). Mag-click muna sa walang lamang bahagi ng sheet area, o pindutin ang {{key:Esc}} kung nag-e-edit ka ng teksto ng markup.

**Hindi nagpa-pan ang Space, o walang nangyayari sa mga arrow key**
Kaka-click mo lang sa toolbar button, kaya hawak pa nito ang keyboard. Mag-drag gamit ang middle mouse button, o mag-click sa sheet nang isang beses habang naka-on ang {{ui:Piliin}}, pagkatapos subukan muli. Tingnan din ang [Keyboard at mouse](topic:keyboard#when-a-key-does-nothing).

**May iniwang marka ang pinch sa touch screen**
Nagsimula ang drag tool (pen, cloud, rectangle) bago dumating ang pangalawang daliri, at natapos bago ito kinansela. Pindutin ang {{ui:I-undo}}. Ilagay ang dalawang daliri nang sabay kapag gusto mong mag-zoom.

## Pagsukat

**"I-calibrate muna ang sheet na ito: pumili ng dalawang punto na may kilalang distansya sa pagitan ng mga ito, o piliin ang scale nito. Pagkatapos, sukatin."**
Kailangan ng bawat sheet ng sarili nitong scale bago ang {{ui:Haba}} o {{ui:Lawak}}. Lumipat na ang MarkupCraft sa {{ui:I-calibrate}}: mag-click sa dalawang dulo ng kilalang dimensyon at i-type ang haba nito, o mag-click sa scale button sa status bar at pumili ng scale. Tingnan ang [I-calibrate ang sheet at sukatin](topic:calibrate-and-measure).

**"Hindi ito haba na nauunawaan ng MarkupCraft."**
I-type ito gaya ng `24'-0"`, `12' 6 1/2"`, `7.2 m` o `900 mm`. Tingnan ang [Mga unit, haba at scale](topic:units-and-scales).

**Medyo mali ang mga sukat, o sobrang mali**
- Ang preset na scale sa PDF na hindi buong laki ay nagsusukat nang mali. I-calibrate na lang mula sa mahabang kilalang dimensyon.
- Nabasa ang thousands separator bilang decimal point: ang `1,200 mm` ay nangangahulugang 1.2 mm. I-type ang `1200 mm`.
- Mag-zoom in kapag nag-click ka sa mga dulo.
- Maaaring hindi naka-scale ang drawing ("NTS").

**"Pumili muna ng count group, pagkatapos Shift+click ang marka para alisin ito."**
Piliin ang {{ui:Piliin}}, i-click ang count group, pagkatapos piliin muli ang {{ui:Bilang}} at {{key:Shift}}-click ang tuldok.

## Pag-save

**"Protektado ang PDF na ito (encrypted), kaya hindi maisusulat ang kopyang may markup."**
Ipinagbabawal ng file ang mga pagbabago. Humingi ng kopyang walang proteksyon. Samantala, maaari mo pa ring i-export ang listahan ng markup bilang CSV o BCF.

**"Hindi ma-load ng PDF writer: …"**
Kadalasan offline ka at hindi na-save ang app para sa offline na paggamit (walang "Offline ready" sa bar sa itaas). Nananatili pa rin sa tab ang mga markup mo: panatilihing bukas ito, kumonekta sa internet, at piliin muli ang {{ui:I-save}}. Pagkatapos, piliin ang {{ui:I-save para sa offline}} para gumana ito offline sa susunod; kasama sa naka-save na kopya ang PDF writer.

**"Hindi ma-save ang <file>"**
Ipinapakita ng kahon kung bakit. Nananatili pa rin sa tab ang mga markup mo. Subukan muli; kung paulit-ulit, i-export ang CSV para hindi mawala ang mga komento, at iulat ang mensahe.

**Pinili ko ang Save pero isang file lang ang dumating**
Hinarang ng browser mo ang mga dagdag na download. Hanapin ang abiso sa address bar at payagan ang site na ito na mag-download ng maraming file, pagkatapos mag-save muli.

**Hindi ko makita ang naka-save na file**
Napunta ito sa downloads folder ng browser mo. Buksan ang listahan ng downloads ng browser (sa Chrome at Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; sa Firefox at Safari, ang downloads button sa toolbar) para makita kung saan. Tingnan ang [Mga browser at computer](common:browsers).

**May tekstong nagpapakita ng "?" sa ibang PDF viewer**
Lumalabas na "?" ang mga karakter sa labas ng Western European set sa kopya. Binibilang ito ng save message. Tingnan ang [I-save ang PDF na may markup](topic:save-the-marked-up-pdf).

**Ipinapakita ng stamp ang petsa ng bukas (o ng kahapon)**
Nasa UTC ang mga petsa ng stamp. Tingnan ang [Mga stamp at sticky note](topic:stamps-and-notes).

## Pagtatrabaho offline

**Ang offline button ay nagsasabing "Could not save"**
Ang ilang file ng app ay hindi na-download. Tingnan ang koneksyon at i-click muli ang button; nagbibilang ito ng "Sine-save ang N ng M" hanggang "Offline ready".

**Ang offline button ay nagsasabing "Offline not available"**
Hindi kayang magtago ng offline na kopya ang window na ito ng browser: private window, o computer na hinaharangan ng patakaran nito. Buksan ang MarkupCraft sa normal na window at subukan muli.

**Offline, mas lumang bersyon ang app**
Ang offline na kopya ay ang bersyong na-save mo. Kapag online ka, i-click ang "Offline ready" at piliin ang "I-save muli (kunin ang pinakabagong bersyon)". Para magbakante ng espasyo, piliin ang "Alisin ang offline na kopya". Tingnan ang [Pagtatrabaho offline](common:offline).

**Hindi bumubukas ang tulong**
Pindutin ang {{key:F1}} (sa Mac, kasama ang **fn**), o piliin ang {{ui:Tulong}} sa bar sa itaas. Gumagana rin ito offline.

## Mga nawalang bagay

**Nawala ang mga markup ko pagkatapos isara o i-reload ang tab**
Buksan muli ang MarkupCraft sa parehong browser: iaalok nito ang hindi pa na-save na gawa gamit ang "Bawiin ang iyong gawa?". Piliin ang {{ui:I-recover}} at i-save ang PDF. Itinatago ang mga kopya hanggang 30 araw; ang private window, o ang pag-clear ng data ng site, ay walang itinatago. Tingnan ang [I-recover ang iyong gawa](common:recover).

**Nawala ang pangalan ko, mga setting ng tool, o tool chest**
Sa browser na ito lang itinatago ang mga ito, at nabura na (na-clear ang site data, private window, ibang browser o computer, o ang paglilinis ng Safari sa mga site na matagal nang hindi binibisita). Itakda muli ang pangalan at i-import ang na-export mong chest. Tingnan ang [Ano ang nananatili sa browser na ito](topic:browser-storage).

**"Hindi maitago ang tool chest sa browser na ito (naka-off o puno ang storage). I-export ito para mapanatili."**
Tumatanggi ang browser na mag-imbak ng data para sa site na ito (private mode, storage na hinaharangan ng setting o patakaran, o puno). I-export ang chest pagkatapos baguhin ito, at i-import sa susunod.

## Display at bilis

**Malabo ang sheet sa sandaling iyon**
Nagpapakita ang MarkupCraft ng mabilis at magaspang na rendering habang nag-zo-zoom o nag-pa-pan, at iginuguhit itong muli nang malinaw ilang sandali pagkatapos mong huminto.

**Mabagal ang lahat sa malaking set**
Isara ang ibang mabibigat na tab, magbukas ng mas kaunting file nang sabay, at iwasang mag-zoom sa pinakamataas sa napakalaking sheet. Tingnan ang [Magtrabaho sa maraming file nang sabay](topic:several-files#big-sets).

**Madilim ang sheet na may maliwanag na linya**
Nasa tema ka ng {{ui:Model}}. Piliin ang {{ui:Papel}} sa bar sa itaas para sa madilim na linya sa puting background. Hindi naaapektuhan ang mga markup mo at ang naka-save na PDF.
