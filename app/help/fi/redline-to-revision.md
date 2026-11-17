---
title: Lähetä merkinnät piirtäjälle punakynänä
summary: Kirjoita avoimet merkinnät punakynätiedostoksi muutosten piirtäjälle ja lataa sitten heidän vastauksensa, jotta jokainen merkintä näyttää hyväksytty tai hylätty.
keywords: punakynä, revisio, piirtäjä, hyväksy, hylkää, vastaukset, cc-redline, revisiopilvi, käytä merkintöjä
from: cb099d04
---

Tarkastaminen on puolet työstä; piirroksen pitää yhä muuttua. Punakynätiedosto kuljettaa jokaisen avoimen merkinnän piirtäjälle, ja piirtäjän vastaukset tuovat tuloksen takaisin.

## Lähetä

1. Avaa {{ui:Tehtävät}}-välilehti ja avaa {{ui:Punakynä revisioon}}.
2. Kirjoita revisio, johon merkinnät kohdistuvat (esimerkiksi B).
3. Valitse {{ui:Vie punakynätiedosto}}.

Saat tiedoston `.redline.json`, jossa on yksi kohde jokaista avointa merkintää kohti: sen arkki, sen sijainti (arkin murtolukuina, jotta toiseen kokoon piirretty kopio on yhä kohdallaan, ja pisteinä), sen sanat, tekijä ja ketju sekä sen tehtävä, jos sellainen on. Muiden ohjelmien vain luettavat kommentit, kuvat ja selitteet jätetään pois.

## Vastaukset

Piirtäjän puoli vastaa kullekin kohteelle Hyväksytty, Hylätty tai Valmis, muistiinpanon kera, tiedostossa `.redline-answers.json`. Valitse {{ui:Lataa vastaustiedosto…}} ja valitse se: jokainen merkintä saa kyseisen tilan ja piirtäjän muistiinpanon ketjuunsa, ja tehtävä, jonka merkintä on hyväksytty tai valmis, on suoritettu. Yksi kumoamisaskel palauttaa kaikki vastaukset.

Tiedostomuoto on kuvattu tiedostossa `docs/REDLINE-FORMAT.md`. CadCraft-puoli (paketin lukeminen, kunkin kohteen hyväksyminen tai hylkääminen, revisiopilvet ja loki) on toteutettu erikseen.
