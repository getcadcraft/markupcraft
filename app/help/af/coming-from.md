---
title: Kom van ander merkprogrammatuur af
summary: Hoe die gewoontes van 'n lessenaar-PDF-merkprogram op MarkupCraft pas, en die verskille wat mense vang.
keywords: oorskakel, migreer, bekend, lessenaar pdf-merk, gereedskapskis, opmerkingslys, oorlegsel, sessies, profiel, kortpaaie, verskille
from: c8f323e1
---

As jy tekeninge in Bluebeam Revu hersien (of kommentaar op PDF's in 'n ander lessenaar-PDF-program lewer), sal die meeste van MarkupCraft bekend voel: wolke, aanwysings, 'n gereedskapskis, 'n lys van opmerkings, statusse met antwoorde, gekalibreerde metings, blad-oorlegsels. Die manier waarop lêers hanteer word, is die groot verskil, so lees die volgende afdeling selfs as jy die res oorslaan.

## Die vyf verskille wat saak maak

1. **Stoor maak 'n nuwe lêer.** MarkupCraft loop in die blaaier en kan nie oor die PDF op jou skyf skryf nie. {{ui:Stoor}} laai "<name> (marked up).pdf" af en die oorspronklike bly soos dit was. Volgende keer, maak die "(marked up)"-kopie oop, en maak ou kopieë self skoon.
2. **Die PDF word gestoor wanneer jy stoor.** Tot dan hou 'n herstelkopie in hierdie blaaier jou opmerkings deur 'n ineenstorting of 'n toe oortjie, en MarkupCraft bied dit weer aan volgende keer. Dit is 'n veiligheidsnet: stoor die PDF om die nabesigtiging te behou.
3. **Jou profiel leef in die blaaier.** Jou outeurnaam, gereedskapinstellings en gereedskapskis word in hierdie blaaier op hierdie rekenaar gehou. 'n Ander blaaier of rekenaar begin vars, en die uitvee van webwerfdata wis hulle uit. Voer jou gereedskapskis uit as 'n rugsteun. Sien [Wat in hierdie blaaier bly](topic:browser-storage).
4. **Nog geen gedeelde sessies nie.** Daar is geen lewendige, gedeelde nabesigtigingsessie en geen wolkprojek nie. Die nabesigtiging reis in die PDF: stoor, stuur die kopie, die volgende persoon antwoord en stoor.
5. **Skaal is per blad, en net per blad.** Daar is geen viewports binne 'n blad nie en geen "pas hierdie skaal op alle bladsye toe" nie. Kalibreer elke blad waarop jy meet.

## Gewoonte vir gewoonte

| Jy is gewoond aan | In MarkupCraft |
|---|---|
| Duimnaelskets-paneel, bladsyetikette | {{ui:Blaaie}} aan die linkerkant. Name kom van bladsyetikette of word uit die titelblok gelees; regstel hulle met {{ui:Hernoem blad}}. |
| Verskeie PDF's oopmaak as 'n stel | Maak hulle almal terselfdertyd oop; hulle word een lys. Geen stel-lêer word gestoor nie: maak dieselfde PDF's die volgende keer oop. |
| Gereedskapskis met gereedskapstelle | {{ui:Gereedskap}}-oortjie: een kis per blaaier, gestoorde gereedskap met styl en onderwerp. Deel deur {{ui:Voer uit}} en {{ui:Voer in}} as 'n JSON-lêer. Gereedskapstel-lêers van ander programme kan nie ingevoer word nie. |
| Eienskappe-paneel | {{ui:Eienskappe}}-oortjie: status, onderwerp, kommentaar, styl, antwoorde en afwerkingsitem op een plek. |
| Opmerkingslys met kolomme | {{ui:Opmerkings}}-oortjie met filters vir blad, outeur, status en tipe. Voer CSV of BCF uit. Geen pasgemaakte kolomme en nog geen PDF- of werkboekopsomming nie. |
| Status en nabesigtigingstoestand | {{ui:Status}}: Oop, Aanvaar, Verwerp, Voltooi. Geen pasgemaakte statusstelle nie. Gestoor as standaard nabesigtigingstoestande. |
| Antwoorde op 'n opmerking | Die "Antwoorde"-draad in {{ui:Eienskappe}}, met statusveranderinge daarin aangeteken. 'n Gestuurde antwoord kan nie gewysig word nie. |
| Kalibreer, dan lengte, oppervlakte, tel | {{ui:Kalibreer}}, {{ui:Lengte}} ({{key:M}}), {{ui:Oppervlakte}} ({{key:Q}}, gee oppervlakte en omtrek), {{ui:Tel}} ({{key:U}}). Nog geen hoek, radius, volume, polilynlengte of uitsnitte nie. |
| Oorleg-bladsye | {{ui:Vergelyk}}-oortjie: rooi vir oud, blou vir nuut, belyn met twee punte. Geen outomatiese "compare documents"-omwolking nie. |
| Stempels | {{ui:Stempel}} met ses ingeboude stempels en pasgemaakte woording, onderteken met jou naam en die datum. Nog geen prent- of handtekeningstempels nie. |
| Afwerking- of kwessienopvolging | {{ui:Afwerkingslys}}-oortjie: genommerde items met toegewysde persoon, sluitingsdatum en status; CSV-uitvoer. |
| Lewendige samewerkingsessie | Nog nie beskikbaar nie. Stuur die gestoorde PDF rond. |
| Plat maak | Nog nie gebou nie. Opmerkings bly as kommentaar wat ander kykers kan wys en druk. |
| Lae vir opmerkings | Nog nie gebou nie. Gebruik onderwerpe, outeurs en die lysfilters om kommentaar te sorteer. |
| Skakels tussen blaaie | Nog nie gebou nie. |
| Spasiebalk om te pan, wiel om te zoem | Dieselfde: hou {{key:Space}} vas en sleep; die wiel zoem by die wyser. Die wiel rol nooit die bladsy nie. |

## Sleutels wat verskil

Baie een-letter-sleutels is wat jy mag verwag, maar kontroleer hierdie voordat jou vingers dit vir jou doen:

- {{key:K}} is {{ui:Aanwysing}}, en {{key:Q}} is {{ui:Oppervlakte}}. As jy gewoond is aan Q vir aanwysings, sal dit hier 'n oppervlakte begin.
- {{key:C}} is die kassie {{ui:Wolk}}; {{key:Shift+C}} is {{ui:Vrye wolk}}.
- {{key:M}} is {{ui:Lengte}}, {{key:U}} is {{ui:Tel}}, {{key:Y}} is {{ui:Polilyn}}, {{key:G}} is {{ui:Poligoon}}, {{key:I}} is {{ui:Uitlig}}.
- {{key:Mod+D}} dupliseer die keuse (in plaas van die blaaier se boekmerk).
- {{key:Mod+Plus}} en {{key:Mod+Minus}} zoem die blad, nie die blaaierbladsy nie.
- Enige sleutel kan verander word: sien hieronder.

:::tip
As jou vingers Bluebeam Revu ken, kies die {{ui:PDF review}}-kieslysstyl in {{ui:Instellings}} › {{ui:MarkupCraft}} › {{ui:Kieslyste, sleutels en muis}}: 'n kieslysbalk (Lêer, Wysig, Aansig, Dokument, Opmerking, Meet, Venster) oor 'n ry nabesigtigingsgereedskap, {{key:Q}} vir 'n aanwysing, {{key:H}} vir die uitligter, {{key:N}} vir 'n poligoon, en die metings op {{key:Alt+Shift}} met 'n letter. Enige sleutel kan ook daar verander word. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse).
:::

Die volledige lys is in [Sleutelbord en muis](topic:keyboard).

## Dinge wat anders werk as wat jy dalk verwag

- **Gereedskap bly aan.** Na 'n wolk teken jy steeds wolke. {{key:Esc}} een keer maak die keuse skoon, twee keer keer terug na {{ui:Kies}}.
- **Teks en aanwysings het teks nodig.** As jy klaarmaak sonder om iets te tik, word geen opmerking bygevoeg nie. Notas word leeg gehou.
- **Metings het eers 'n skaal nodig.** {{ui:Lengte}} en {{ui:Oppervlakte}} skakel oor na {{ui:Kalibreer}} op 'n ongekalibreerde blad en kom daarna terug.
- **Kommentaar van ander programme.** Reghoeke, elipse, lyne, polilyne, poligone, inkt, teksblokke en plakkerige notas wat elders gemaak is, word redigeerbare MarkupCraft-opmerkings, en word op MarkupCraft se manier herskryf wanneer jy stoor (hul voorkoms kan effens verander). Teksuitligtings, ander programme se stempels en ander spesiale soorte bly alleen-lees: jy kan daarop antwoord, nie dit verander nie.
- **Karakters buite Wes-Europese letters** word as "?" in die gestoorde PDF gedruk. Sien [Stoor die PDF met opmerkings](topic:save-the-marked-up-pdf).
- **Stempeldatums** gebruik UTC, so 'n stempel wat laat in die aand in die Amerikas gemaak word, kan môre se datum wys.
- **Metings word oorgedra** as standaard metingkommentaar, en elke gekalibreerde blad hou sy skaal, so 'n program wat PDF-metings lees, kan hulle gewoonlik wys. Presiese gedrag hang van daardie program af.

## Gebruik albei

Jy kan heen en weer gaan. Kommentaar wat elders gemaak is, maak in MarkupCraft oop, en die "(marked up)"-PDF maak in ander PDF-programme oop met elke opmerking, antwoord en status sigbaar. Wat net MarkupCraft teruglees (afwerkingstoegewysde en sluitingsdatum, itemstatus), word in die lêer vir MarkupCraft gehou.
