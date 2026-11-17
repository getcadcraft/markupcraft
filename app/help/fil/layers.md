---
title: Mga layer ng markup
summary: Ilagay ang markup sa mga pinangalanang layer, saka ipakita, itago o i-lock ang bawat layer; kaya ring baguhin ng ibang PDF viewer ang mga ito.
keywords: layers, layer, hide, show, lock, group markups, discipline, mechanical, electrical, optional content, ocg, visibility
from: 0fbb4c26
---

Pinagpapangkat ng mga layer ang markup, halimbawa ayon sa disiplina o reviewer. Itago ang layer para makita ang drawing sa ilalim nito, o i-lock ito para hindi aksidenteng magalaw ang mga markup nito.

## Gumawa ng layer at gumuhit dito

1. Buksan ang {{ui:Mga Layer}}, sa itaas ng panel na {{ui:Sheets}}.
2. Piliin ang {{ui:Bagong layer}}, i-type ang pangalan gaya ng `Mechanical`, at piliin ang {{ui:Idagdag ang layer}}.
3. Ang bagong layer ang magiging kasalukuyang layer: bawat markup na iguguhit mo mula ngayon ay mapupunta dito. Piliin ang pangalan ng ibang layer, o ang {{ui:Walang layer}}, para baguhin kung saan mapupunta ang mga bagong markup.

Para ilipat ang markup sa ibang layer, piliin ito at pumili ng layer sa ilalim ng {{ui:Layer}} sa {{ui:Properties}}. Ang {{ui:Bagong layer…}} sa dulo ng listahang iyon ay gagawa ng isa agad. Maaaring i-undo ang paglipat gamit ang {{key:Mod+Z}}.

## Ipakita, itago at i-lock

Dalawang button ang nasa row ng bawat layer:

- Ang **mata** ay nagpapakita o nagtatago ng layer. Ang nakatagong markup ay hindi iginuguhit at hindi mapipili; bilang pa rin sila sa listahan ng {{ui:Markups}}.
- Ang **lock** ay nagpapanatili ng markup ng layer sa sheet, pero pinipigilan itong mapili, mailipat o mabura.

Ang button na lapis ay nagpapalit ng pangalan ng layer at isinasama ang mga markup nito. I-filter ang listahan ng {{ui:Markups}} ayon sa {{ui:Layer}} para makita ang markup ng isang layer lang.

## Sa na-save na PDF

Ang bawat layer ay nagiging PDF layer (optional content). Nakalista ang mga layer sa layers panel ng ibang PDF viewer at mapapalitan ang mga ito doon; ang layer na itinago mo ay nakatago rin doon. Ang mga layer na mayroon na ang drawing, gaya ng CAD layer, ay nananatili. Kapag binuksan mong muli ang kopya sa MarkupCraft, babalik ang mga markup sa kanilang layer, nakatago at naka-lock gaya ng iniwan mo.

## Dapat tandaan

- Ang pagtatago at pag-lock ay hindi edit: hindi sila naa-undo gamit ang {{key:Mod+Z}}, pero sine-save ang mga ito kasama ng PDF.
- Pinapanatili ng copy at paste ang layer ng markup.
- Ang flattened na kopya ay iginuguhit ang bawat markup sa pahina, anuman ang layer nito. Tingnan ang [I-save ang flattened na kopya](topic:flatten).
