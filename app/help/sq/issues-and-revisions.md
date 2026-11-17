---
title: Emetimet, revizionet dhe ndryshimet e vizatimit
summary: Mbaj një histori të vetme emetimesh me modelin e arkitektit: lexo emetimet, regjistro udhëzimet e punishtes, vizatimet e punës dhe modelet e lidhura kundrejt një emetimi, dhe lexo ndryshimet e vizatimit.
keywords: emetim, revizion, revizione, ndryshime, ndryshimet e vizatimit, regjistri i vizatimeve, udhëzim punishteje, vizatim pune, model i lidhur, ofertë, ndërtim, histori emetimesh, re revizioni, cloud, set shënimesh
from: e4688f64
---

## Çfarë do të bësh

Punon nga e njëjta histori emetimesh si pjesa tjetër e ekipit. Shih cilat fletë dolën në cilin revizion, dhe mbaj çfarë ndodh në punishte kundrejt emetimit që i përket.

## Hapat

1. Hap **Emetimet dhe revizionet**.
2. Zgjidh **Lexo një histori emetimesh** dhe zgjidh skedarin `.issues.json` të ruajtur nga BimCraft ose nga një aplikacion tjetër. Emetimet dhe regjistrimet e tij shtohen tek të tuat. Asgjë nuk zëvendësohet.
3. Zgjidh **Shto një regjistrim** për një udhëzim punishteje, një vizatim pune, një set shënimesh, një model të lidhur ose një shënim. Zgjidh emetimin ku ka të bëjë dhe gjendjen e tij. Një skedar që zgjedh regjistrohet me emrin, madhësinë dhe SHA-256 të tij; skedari mbetet aty ku është.
4. **Ndryshimet e vizatimit** shfaq një rresht për çdo fletë dhe një kolonë për çdo emetim. Një revizion në kllapa u dërgua përsëri pa ndryshime.
5. **Shkarko ndryshimet (CSV)** ruan emetimet, tabelën e fletëve dhe regjistrimet. **Ruaj historinë e emetimeve** shkruan një skedar që lexojnë aplikacionet e tjera.

## Mirë për t'u ditur

- **Regjistro shënimet e përzgjedhura** vendos shënimet që zgjodhe kundrejt emetimit më të fundit. Një re revizioni regjistrohet si re revizioni me revizionin e atij emetimi. Zgjidh **Shfaq** pranë regjistrimit për të shkuar te ai.
- **Regjistro një emetim** emeton fletët e tua me shënime. **Ndryshime që nga** tregon pastaj cilat fletë u shënuan pasi u emetua ai emetim.
- Historia ruhet brenda PDF-së me shënime. Nuk hyn në zhbërje.
- Leximi i të njëjtit skedar dy herë nuk shton asgjë dy herë. Kur dy kopje mbajnë të njëjtin regjistrim, mbahet ai më i ri.
