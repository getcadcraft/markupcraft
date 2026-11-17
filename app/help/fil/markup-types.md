---
title: Bawat uri ng markup
summary: Ang labimpitong uri ng markup, ang mga key nila, paano iginuguhit ang bawat isa, ang default na itsura, at kung ano ito sa na-save na PDF.
keywords: mga uri ng markup, listahan ng tool, uri ng annotation, cloud, callout, teksto, note, stamp, pen, highlighter, linya, arrow, rectangle, ellipse, polyline, polygon, haba, lawak, bilang
from: 29bf32e7
---

## Ang mga tool

| Toolbar | Key | Paano iguhit | Default na itsura | Sa na-save na PDF |
|---|---|---|---|---|
| {{ui:Pen}} | {{key:P}} | I-drag | Pula, 1.5 pt | Ink |
| {{ui:Highlight}} | {{key:I}} | I-drag | Dilaw, 14 pt ang lapad, transparent, nagkukulay sa nasa ilalim nito | Ink (minarkahan bilang highlighter stroke) |
| {{ui:Linya}} | {{key:L}} | I-drag, o i-click ang simula at dulo | Pula, 2 pt | Line |
| {{ui:Arrow}} | {{key:A}} | I-drag, o i-click ang simula at dulo | Pula, 2 pt, saradong arrowhead sa dulo | Line na may arrowhead |
| {{ui:Arko}} | {{key:O}} | I-click ang simula, isang punto sa arko, saka ang dulo | Pula, 2 pt | Polyline sa kahabaan ng arko |
| {{ui:Rectangle}} | {{key:R}} | I-drag ang isang box | Pula, 2 pt, walang fill | Parisukat |
| {{ui:Ellipse}} | {{key:E}} | I-drag ang isang box | Pula, 2 pt, walang fill | Bilog |
| {{ui:Polyline}} | {{key:Y}} | I-click ang mga punto, double-click para tapusin | Pula, 2 pt | Polyline |
| {{ui:Polygon}} | {{key:G}} | I-click ang mga punto, double-click para tapusin | Pula, 2 pt, walang fill | Polygon |
| {{ui:Cloud}} | {{key:C}} | I-drag ang isang box | Pula, 1.5 pt na scallop | Parisukat na may maulap na border |
| {{ui:Free cloud}} | {{key:Shift+C}} | I-click ang mga punto, double-click para tapusin | Pula, 1.5 pt na scallop | Polygon na may maulap na border |
| {{ui:Callout}} | {{key:K}} | Pindutin ang punto, i-drag papunta sa teksto, mag-type | Pulang teksto at leader, 1 pt, 12 pt na teksto | Text box na may callout leader |
| {{ui:Teksto}} | {{key:T}} | I-click o i-drag ang isang box, mag-type | Pulang 12 pt na teksto, walang border | Text box |
| {{ui:Note}} | {{key:N}} | I-click, mag-type | Dilaw na note icon | Sticky note |
| {{ui:Stamp}} | {{key:S}} | Pumili ng stamp, i-click o i-drag | Naka-frame na capital letters at "By <name>, <date>"; kulay ayon sa kahulugan | Stamp |
| {{ui:Haba}} | {{key:M}} | I-click ang simula at dulo (kailangan ng scale) | Asul na dimension line na may tick at haba | Linya na minarkahang dimension, may sukat |
| {{ui:Anggulo}} | {{key:X}} | I-click ang dulo ng isang braso, ang sulok, saka ang dulo ng kabilang braso | Asul na mga braso, maliit na arko sa sulok at ang anggulo sa degrees | Polyline na may anggulo bilang teksto nito |
| {{ui:Lawak}} | {{key:Q}} | I-click ang mga sulok, double-click para tapusin (kailangan ng scale) | Asul na outline, maputlang asul na fill, lawak at perimeter | Polygon na minarkahang area, may sukat |
| {{ui:Bilang}} | {{key:U}} | I-click ang bawat item | Orange na may numerong tuldok at tag na "group: n" | Isang ink comment bawat group, isang singsing bawat item |

Sa touch, ang "double-click para tapusin" ay double-tap, at ang "click" ay tap na gumagana kapag inangat ang daliri (para sa mga punto, note at count).

## Ang bawat markup ay may

| Field | Saan mo ito nakikita |
|---|---|
| Author | {{ui:Properties}}, ang listahan, ang pangalawang linya ng stamp, ibang PDF viewer |
| Ginawa at binago | {{ui:Properties}} (sa iyong time zone), ang listahan, ang CSV |
| Status | Open, Accepted, Rejected o Completed |
| Subject | Maikling label; default ang uri ("Cloud", "Text box", "Sukat ng haba") |
| Comment | Mas mahabang note. Para sa note, ang teksto nito ang komento nito. |
| Text | Para lang sa text box at callout |
| Replies | Ang thread, kasama ang mga pagbabago ng status |
| Punch item | Numero, assignee, due date, status ng item, kapag idinagdag sa punch list |
| Style | Kulay, kapal ng linya, fill at opacity ng fill (saradong hugis, teksto at callout), opacity, laki ng teksto (teksto, callout at sukat) |

## Read-only na komento

Ang mga komentong kasama ng file at hindi kayang i-edit ng MarkupCraft (text highlight, stamp ng ibang programa, at iba pang espesyal na uri) ay nakalista na may uri na "Other" at status chip na "Read-only". Pinananatili nila ang eksaktong itsura na ibinigay ng file. Maaari mo silang piliin, makita ang kanilang author, subject at komento, at sagutin ang mga ito.

## Hindi pa nagagawa

Hindi pa nagagawa ang mga file attachment. Maaaring i-link ng anumang markup ang isang sheet; tingnan ang [Mga sheet link](topic:sheet-links). Ang mga larawan at pirma ay inilalagay gamit ang tool na {{ui:Stamp}}; tingnan ang [Stamp at note](topic:stamps-and-notes). Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).
