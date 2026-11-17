---
title: Luettele muutokset revisioiden välillä
summary: Vertaa kahta arkkisarjaa ja saat arkki kerrallaan selkeän luettelon siitä, missä piirustus ja sanat muuttuivat. Luettelon voi lukea, kopioida tai antaa avustajalle.
keywords: mitä muuttui, muutokset, revisioluettelo, vertailuluettelo, selkeä luettelo, kerro, avustaja, delta, revisioyhteenveto
from: bab93d2e
---

Vertailutyökalut näyttävät muutokset arkilla. Tämä työkalu kirjoittaa ne muistiin.

1. Avaa molemmat revisiot (ks. [Avaa arkkisarja](topic:open-a-plan-set)).
2. Avaa {{ui:Vertaa}}-välilehti ja valitse {{ui:Vertaa koko arkkisarjaa}}.
3. Valitse aiempi ja myöhempi tiedosto ja valitse {{ui:Luettele muutokset}}.

Luettelo alkaa laskurilla ("14 vastaavasta arkista 2 muuttui; 1 uusi; 1 poistettu") ja käy sitten läpi jokaisen muuttuneen arkin, suurin muutos ensin: missä arkilla muutos on (vasemmassa yläkulmassa, keskellä…), kuinka suuri se on, lisättiinkö viivoja, poistettiinko niitä vai kumpaakin, kuinka monta merkintää kohdalla on ja mitkä sanat ilmestyivät tai katosivat. Kalibroidulla arkilla koko näkyy todellisina yksikköinä sekä paperin tuumina.

Luettelo kertoo, mitä sivulla on, mutta ei sitä, mitä se tarkoittaa. Viivan siirtyminen voi olla seinä tai viitenuoli. Yhdistetty avustajasi voi lukea luettelon työkalulla `revisions_changes` ja selittää sen sanoin, ja loput näet arkilta. {{ui:Kopioi luettelo}} vie sen leikepöydälle ja {{ui:CSV}} kirjoittaa yhden rivin jokaisesta muutoksesta.

Arkit paritetaan arkkinumeron mukaan, kuten kohdassa [Slip-sheet a revised set](topic:slip-sheet-a-revised-set). Muutoksia, jotka ovat muutamaa pistettä pienempiä, ei huomioida, eikä kuvan (skannauksen) osana olevalla tekstillä ole sanoja, joita voisi verrata.
