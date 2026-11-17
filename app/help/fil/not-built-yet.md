---
title: Ano ang hindi pa nagagawa
summary: Ang hindi pa kayang gawin ng build na ito ng MarkupCraft, at ang dapat gawin ngayon.
keywords: kulang, roadmap, pinaplano, limitasyon, hindi suportado, paparating, feature request, session, cloud, digital signature, web link
from: 0872fede
---

MarkupCraft ay nasa development pa. Ito ang mga hindi pa kayang gawin ng kasalukuyang build, para makapagplano ka. Inilalarawan nito ang kasalukuyang build, hindi mga pangako.

## Pakikipagtulungan sa ibang tao

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Cloud saving at sync sa pagitan ng mga computer | Itabi ang mga PDF kasama ng mga project file mo. Hindi pa available ang cloud saving. |
| Pagsasama ng kopya ng markup ng dalawang tao | Hatiin ang mga sheet sa mga reviewer, o kopyahin ang ilang markup gamit ang {{key:Mod+C}} at {{key:Mod+V}}. Nagsasama ang RFI, submittal at daily log: tingnan ang [Track RFIs, submittals and daily logs](topic:field-records). |
| Teams, notification at cloud project para sa RFI at submittal | Ipasa ang PDF at gamitin ang {{ui:Merge}} para pagsamahin ang mga kopya. |
| RFI, submittal at daily log sa live session | Bawat tao ay nagtatrabaho sa sarili niyang kopya; pagsamahin ang mga kopya gamit ang {{ui:Merge}}. |
| Pagsasama ng pagbabago ng dalawang tao sa magkaibang field ng iisang record | Ang kopyang huling nabago ang nananaig sa buong record (pinagsasama ang thread at pangalan ng attachment). Pag-usapan kung sino ang mag-e-edit ng aling record. |
| Assistant tool para sa RFI, submittal at daily log | Gamitin ang mga ito sa {{ui:Field}} tab. Maaaring gumana ang mga assistant sa markup: tingnan ang [Use MarkupCraft with an AI assistant](topic:use-with-ai-assistants). |
| Pag-edit o pagbura ng reply na naipadala na | {{ui:Undo}} agad, o magdagdag ng reply na nagtatama. |
| Pagpalit kung sino ang may-akda ng markup | Itakda ang pangalan mo bago magsimula. |

## Mga markup

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Stamp na may fill-in na field, certified digital signature | Gumamit ng custom text stamp, na may pangalan mo at petsa, o larawan ng pirma mo. |
| Pag-attach ng file na hindi larawan (dokumento, video) | Itabi ang mga ito kasama ng PDF at banggitin sa komento. |
| Link sa website o sa file na hindi bukas | Isulat ang address o pangalan ng file sa komento. |
| Custom na status set | Gamitin ang apat na status, at ang subject para sa mas detalyado. |
| Pag-edit ng komentong kasama ng file bilang read-only (text highlight, stamp ng ibang program) | Sumagot sa mga ito, o gumuhit ng MarkupCraft markup sa tabi nila. |
| Pressure-sensitive na pen stroke | Itakda ang line width. |

## Ang sariling content ng pahina

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Pagguhit ng bagong hugis direkta sa pahina | Iguhit ang mga ito bilang markup, saka {{ui:Put into the page}}. Tingnan ang [Change the page's own content](topic:page-content). |
| Pag-ikot ng mga object ng pahina sa anumang anggulo | Ilipat at palakihin o paliitin ang mga ito; paikutin ang buong pahina gamit ang {{ui:Pages}}. |
| Pagpalit ng font o laki ng isang linya ng teksto, o tekstong dumadaloy sa maraming linya | Palitan ang mga salita isang linya sa isang pagkakataon; para sa bagong salita sa ibang font, magdagdag ng text markup. |
| Pag-edit ng nasa loob ng scanned na larawan | Palitan ang larawan, o mag-markup dito. |
| Pag-edit ng encrypted o signed na PDF | Humingi ng unsigned na kopya; gumagana ang markup sa anumang PDF. |

## Pagsukat

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Sukat ng radius | Gumuhit ng {{ui:Arc}} sa kahabaan nito, o sukatin ang {{ui:Length}} sa kabila at hatiin sa dalawa. |
| Pag-edit ng mga sulok ng cut-out | Alisin ang mga cut-out at iguhit muli. |
| Paglalapat ng iisang scale sa maraming sheet nang sabay | I-calibrate ang bawat sheet; ang pagpili ng preset ay tumatagal ng ilang segundo bawat sheet. |
| Maraming scale sa isang sheet (viewports) | I-calibrate sa drawing na pinakamaraming sinusukat mo. Muling sinusukat ng pagbabago ng scale ng sheet ang lahat ng nasa loob nito, kaya isulat muna ang mga detail value bago mag-recalibrate para sa mga ito. |
| Pag-snap sa mga linya sa drawing | Mag-zoom in bago mag-click, o mag-type ng haba at anggulo (tingnan ang [Sketch to scale](topic:calibrate-and-measure#sketch-to-scale)). |
| Buong takeoff na may item, assembly at presyo | Gamitin ang TakeoffCraft, ang takeoff app ng CadCraft family. |

## Mga sheet at file

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Pag-undo ng pagbabago sa pahina (rotate, move, insert, delete) | Isara nang hindi nagse-save at buksan muli ang orihinal na PDF. Tingnan ang [Print, and change the pages](topic:pages-and-printing). |
| Pagsara ng isang file sa set | Isinasara ng {{ui:Close}} ang buong set; buksan muli ang mga file na kailangan mo. |
| Pag-save ng set bilang project na mabubuksan muli sa isang hakbang | Buksan muli ang parehong PDF. |
| Pag-print sa piniling scale, o maraming sheet sa isang papel | Gamitin ang printer dialog ng browser mo, o i-print ang na-save na kopya mula sa ibang PDF viewer. |

## Mga listahan at export

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Paglalagay ng na-import na BCF issue sa posisyon nito sa model | Ang na-import na issue na walang sheet ay nakasalansan sa kaliwang itaas: ilipat ang mga ito. |
| Pag-import ng tool set mula sa ibang markup program | Gawing muli ang mga tool na kailangan mo at i-save sa chest; i-export ito para sa opisina. |

## Compare

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Pagkumpara ng tekstong nakatakda sa font, o listahan ng mga nagbago | Gamitin ang overlay at slider, o {{ui:Changed lines}} para sa mga iginuhit na linya. |
| Pagkumpara ng scanned na sheet ayon sa mga linya nito | Gamitin ang picture overlay. |
| Awtomatikong pag-align ng bawat pares kapag nagkukumpara ng buong set | Ikumpara ang isang nailipat na pares nang mag-isa at gamitin ang {{ui:Align by two points}}. |

## Mga panel

| Hindi pa nagagawa | Gawin ito ngayon |
|---|---|
| Paglipat ng toolbar o status bar | Dalawang side panel lang ang nagagalaw. |

## Mga platform

- **Desktop:** Tumatakbo ang MarkupCraft sa browser sa Mac, Windows, Linux at iPad, at sa CadCraft Studio, ang desktop app na may lahat ng walong app sa iisang install.
- Nasa development pa ang MarkupCraft. Maaaring magbago ang mga label at behavior, at magbabago rin ang help na ito kasabay nito.
