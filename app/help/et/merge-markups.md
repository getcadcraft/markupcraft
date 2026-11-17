---
title: Kahe inimese muudatuste ühendamine ühel PDF-il
summary: Lase programmidel git, Fossil või Mercurial ühendada ühe PDF-i kaks märgistatud koopiat märgistuse kaupa, sealhulgas märkmed.
keywords: ühendamine, git, fossil, mercurial, versioonihaldus, konflikt, kolmepoolne, cadcraft merge, gitattributes, märgistused, märkused, meeskond, kaks koopiat
from: a450a9ef
---

Kaks inimest märgistavad sama PDF-i kahes koopias. Kui nad puudutasid erinevaid märgistusi, saab koopiad ühendada programmiga, mitte käsitsi.

## Mis seda võimaldab

Iga salvestatud MarkupCraft'i märgistus kannab oma nime (ID) PDF-i sees ja see nimi ei muutu kunagi. Ühendamine otsib märgistusi selle nime järgi, mitte nende asukoha järgi failis, sest iga programm nummerdab asukohad salvestamisel ümber. Märkmed ja suletud privaatsed märkmed sobitatakse samamoodi.

Lehti ei puututa: mõlemas koopias peab olema sama arv lehti. Kui need erinevad, jätab ühendamine sinu koopia nagu see on ja ütleb seda, sest lehtede lisamine või eemaldamine on inimese töö.

## Seadista

Git vajab repositooriumi kohta kord kahte rida:

```
# .gitattributes
*.pdf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ilma gitita käivita `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil ja Mercurial võtavad samad kolm faili oma ühendamistööriista seadistuses. Joonisega kaasasolev ülesannete fail (`<name>.markups.json`, vaata [Märgistuse muutmine ülesandeks](topic:markups-that-act)) ühendatakse samamoodi, lihtteksti.

## Reeglid

- Märgistus, mida muudeti ainult ühel poolel, võetakse. Sama muudatus mõlemal poolel võetakse ühe korra.
- Sama märgistus, mida muudeti kahel viisil, on **konflikt**: sinu pool jääb alles ja aruanne loetleb mõlemad. Ava tulemus ja paranda see märgistus käsitsi.
- Märgistus, mis lisati kummalegi poolele, jääb alles. Märgistus, mis ühel poolel eemaldati ja teisel poolel muutmata, eemaldatakse. Eemaldatud ühel poolel ja muudetud teisel: eemaldatakse ja teatatakse.
- Kihid, veerud, kirjed ja märkmed järgivad samu reegleid.
- Suletud privaatseid märkmeid ei avata kunagi: mõlema poole plokid jäävad nagu on.

Ühendatud fail on sinu koopia täielik ümberkirjutus, nagu on MarkupCraft'i enda {{ui:Salvesta}}. Midagi ei laadita üles; kõik töötab sinu arvutis.
