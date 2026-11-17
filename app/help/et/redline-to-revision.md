---
title: Saada märgistused joonestajale punase parandusena
summary: Kirjuta avatud märgistused punase parandusena failiks neile, kes joonistavad muudatused, ja laadi siis nende vastused, et iga märgistus näitaks Aktsepteeritud või Tagasi lükatud.
keywords: punane parandus, redaktsioon, joonestaja, aktsepteeri, lükka tagasi, vastused, cc-redline, redaktsioonipilv, rakenda märgistused
from: cb099d04
---

Ülevaatamine on pool tööst; joonist tuleb ikka muuta. Punase parandusega fail viib iga avatud märgistuse joonestajani ja joonestaja vastused toovad tulemuse tagasi.

## Saada

1. Ava vahekaart {{ui:Ülesanded}} ja ava {{ui:Punane parandus redaktsiooniks}}.
2. Sisesta redaktsioon, millele märgistused viitavad (näiteks B).
3. Vali {{ui:Ekspordi punase parandusega fail}}.

Saad faili `.redline.json`, kus on üks kirje iga avatud märgistuse kohta: selle leht, asukoht (lehe murdosana, nii et teisel suurusel printimine ikka klapib, ja punktides), sõnad, autor ja lõim ning selle ülesanne, kui sellel on. Teistest programmidest pärit ainult lugemiseks kommentaarid, pildid ja legendid on välja jäetud.

## Vastused

Joonistuspoolne vastab igale kirjele aktsepteeritud, tagasi lükatud või tehtud märkega ning märkusega failis `.redline-answers.json`. Vali {{ui:Laadi vastusefail…}} ja vali see: iga märgistus saab selle staatuse ja joonestaja märkuse oma lõimes ning ülesanne, mille märgistus on aktsepteeritud või tehtud, on lõpetatud. Üks tagasivõtmise samm võtab kõik vastused tagasi.

Failivorming on dokumendis `docs/REDLINE-FORMAT.md`. CadCrafti pool (paketi lugemine, iga kirje aktsepteerimine või tagasilükkamine, redaktsioonipilved ja logi) on eraldi arendusel.
