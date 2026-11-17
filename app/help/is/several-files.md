---
title: Vinna með nokkrar skrár í einu
summary: Opnaðu margar PDF-skrár sem eitt safn, finndu blöð yfir skrár, afritaðu merkingar á milli þeirra og vistaðu afrit af hverri skrá.
keywords: nokkrar skrár, margar pdf-skrár, teikningasett, safn, hópvinnsla, margar skrár, sameina, fög, arkitektúr burðarvirki vélar, vista allt, loka
from: f59354ae
---

Teikningasett kemur oft sem ein PDF-skrá fyrir hvert fag, eða ein fyrir hvert blað. MarkupCraft meðhöndlar allt sem þú opnar sem **eitt safn**.

## Opnaðu þær saman

Veldu allar PDF-skrárnar í skráavalinu í einu, eða slepptu þeim öllum á svæði blaðanna. Til að bæta við fleiri síðar skaltu opna þær á sama hátt; þær bætast aftast á listann {{ui:Blöð}} í þeirri röð sem þú opnar þær.

Niðurstaða: „Opnaðar 6 skrár (84 blöð í safninu).“ Sérhver síða er blað. Blöð með blaðnúmer sýna „Blað A-101“ undir heitinu; önnur sýna skrána og síðuna.

Ekki er til vistuð „safn“-skrá: næst skaltu opna sömu PDF-skrárnar aftur (afritin „(marked up)“, ef þú vistaðir).

## Yfir allt safnið

- **Finna blað:** {{ui:Leita í blöðum}} leitar í blaðnúmerum, heitum blaða og skráarheitum allra skráa. {{key:PageUp}} og {{key:PageDown}} fara í gegnum öll blöð allra skráa í röð.
- **Listi yfir merkingar:** flipinn {{ui:Merkingar}} listar merkingar úr öllum skrám. Síaðu eftir {{ui:Blað}} til að þrengja hann. CSV-skráin hefur dálk fyrir skrá.
- **Úrbótalisti:** ein númerun fyrir allt safnið.
- **Samanburður:** gamla og nýja blaðið geta komið úr mismunandi skrám.
- **Afritun og líming:** {{key:Mod+C}} á einu blaði og {{key:Mod+V}} á öðru, í hvaða skrá sem er. Afritið lendir á sama stað á síðunni, lítillega færðu.

## Vista

Veldu {{ui:Vista}}. Með fleiri en eina skrá opna spyr MarkupCraft:

- {{ui:Þessa skrá}}: merkt afrit af skránni sem blaðið sem þú ert á tilheyrir.
- {{ui:Allar breyttar skrár}}: afrit af hverri skrá sem hefur óvistaðar breytingar. Hvert sækist sérstaklega sem „<file name> (marked up).pdf“.
- {{ui:Hætta við}}

:::chromium
Í fyrsta skipti sem þú vistar nokkrar skrár í einu gætu Chrome og Edge spurt hvort þessi síða megi sækja margar skrár. Veldu {{ui:Leyfa}}; annars kemur aðeins fyrsta afritið.
:::

:::safari
Safari gæti spurt einu sinni fyrir hverja skrá. Á iPad fer hvert afrit í Files-forritið.
:::

Skrá sem merkingar hennar hafa verið vistaðar hættir að teljast breytt; hinar gera það enn.

CSV-, BCF- og úrbótalistaútflutningur fær nafn eftir **fyrstu** skránni sem þú opnaðir.

## Loka

{{ui:Loka}} lokar öllu safninu; ekki er enn hægt að loka einni skrá út af fyrir sig. Ef eitthvað er óvistað spyr það:

- {{ui:Hætta við}}: ekkert gerist.
- {{ui:Loka án þess að vista}}: óvistaðar merkingar glatast.
- {{ui:Vista afrit fyrst}}: vistar hverja breytta skrá, lokar síðan.

Lokun hreinsar líka afturköllunarferilinn.

## Stór söfn

- Texti hverrar síðu er lesinn við opnun til að finna blaðnúmer, svo 100 blaða safn tekur smá tíma. Stöðustikan telur blöðin þegar þau eru lesin.
- Myndir blaðanna í listanum eru teiknaðar þegar þú flettir að þeim.
- Hver opin PDF-skrá er geymd í minni vafraflipans. Ef flipinn hægist skaltu loka öðrum þungum flipum, eða yfirfara eitt fag í einu.
- Ef þú opnar sömu skrá tvisvar færðu tvö eintök af blöðunum. Ef það gerist skaltu velja {{ui:Loka}} og opna safnið aftur.
