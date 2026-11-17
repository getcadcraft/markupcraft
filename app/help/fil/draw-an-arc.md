---
title: Gumuhit ng arko sa sampung paraan
summary: Gumuhit ng arko gamit ang Arko tool sa pagpili ng isa sa sampung paraan sa kahong nasa ibabaw ng pahina, at i-click o i-type ang anggulo, haba, radius o direksyon.
keywords: arc, arko, curve, kurba, circular arc, three point arc, start center end, center start end, anggulo, chord length, radius, direksyon, tangent, mag-type ng numero, paraan ng arko, gumuhit ng arko
from: 0a5d904f
---

Gumuguhit ng pabilog na arko ang {{ui:Arko}} tool ({{key:O}}). Bukod sa karaniwang tatlong click, nag-aalok ito ng sampung paraan para tukuyin ang arko, para sa mga pagkakataong alam mo ang radius, anggulo o gitna sa halip na isang punto sa kurba.

## Ang gagawin mo

Piliin ang {{ui:Arko}} tool, pumili ng {{ui:Paraan ng arko}}, at gumuhit ng arko sa pamamagitan ng click o tinype na numero.

## Mga hakbang

1. Piliin ang {{ui:Arko}} sa mga tool ng {{ui:Gumuhit}}, o pindutin ang {{key:O}}.
2. Sa kahong nasa ibabaw ng pahina, piliin ang paraan sa ilalim ng {{ui:Paraan ng arko}}: {{ui:3-Point}}, {{ui:Start, Center, End}}, {{ui:Start, Center, Angle}}, {{ui:Start, Center, Length}}, {{ui:Start, End, Angle}}, {{ui:Start, End, Direction}}, {{ui:Start, End, Radius}}, {{ui:Center, Start, End}}, {{ui:Center, Start, Angle}} o {{ui:Center, Start, Length}}.
3. Sundin ang prompt sa status line, isang hakbang sa bawat pagkakataon. Bawat hakbang ay humihingi ng click sa simula, sa punto na dadaanan ng arko, sa sentro, o sa dulo.
4. Kapag humingi ang hakbang ng anggulo, haba ng chord, direksyon o radius, ilipat ang pointer at mag-click, o i-type ang numero at pindutin ang {{key:Enter}}.
5. Nabubuo ang arko kapag tapos na ang huling hakbang. Piliin ito at baguhin ang istilo nito sa {{ui:Properties}} gaya ng ibang markup.

## Mabuting malaman

- Kinakansela ng {{key:Esc}} ang arko; ina-undo ng {{key:Backspace}} ang huling hakbang.
- Ang minus sign ay nagpapaikot ng anggulo o haba pakanan (clockwise). Para sa radius, ang minus sign ay pumipili ng mahabang daan. Ang direksyon ay nasa degrees: pakanan ay 0, pataas ay 90.
- Kapag hindi makabuo ng arko ang mga punto (tatlong punto sa iisang linya, dalawang punto sa iisang lugar, radius na masyadong maliit para maabot ang kabilang dulo), sasabihin ng status line; pumili ng ibang punto.
- Tingnan ang [Markup types](topic:markup-types) para sa iba pang drawing tool.
