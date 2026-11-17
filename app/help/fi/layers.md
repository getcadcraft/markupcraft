---
title: Merkintöjen tasot
summary: Aseta merkinnät nimettyihin tasoihin ja näytä, piilota tai lukitse kukin taso. Muut PDF-katseluohjelmat voivat vaihtaa tasoja myös.
keywords: tasot, taso, piilota, näytä, lukitse, ryhmitä merkinnät, ala, mekaniikka, sähkö, valinnainen sisältö, ocg, näkyvyys
from: 0fbb4c26
---

Tasot ryhmittelevät merkintöjä, esimerkiksi alan tai tarkastajan mukaan. Piilota taso nähdäksesi sen alla olevan piirustuksen, tai lukitse se, jotta sen merkintöjä ei siirretä vahingossa.

## Tee taso ja piirrä sille

1. Avaa {{ui:Layers}}, joka on {{ui:Sheets}}-paneelin yläosassa.
2. Valitse {{ui:New layer}}, kirjoita nimi, esimerkiksi `Mechanical`, ja valitse {{ui:Add layer}}.
3. Uudesta tasosta tulee nykyinen taso: jokainen sen jälkeen piirtämäsi merkintä kuuluu siihen. Valitse toisen tason nimi tai {{ui:No layer}}, jos haluat muuttaa, mihin uudet merkinnät menevät.

Siirtääksesi merkinnän toiselle tasolle valitse se ja valitse taso kohdasta {{ui:Layer}} paneelissa {{ui:Properties}}. Luettelon lopussa oleva {{ui:New layer…}} luo tason heti. Siirron voi kumota {{key:Mod+Z}}-näppäimellä.

## Näytä, piilota ja lukitse

Jokaisella tasorivillä on kaksi painiketta:

- **Silmä** näyttää tai piilottaa tason. Piilotettuja merkintöjä ei piirretä eikä niitä voi valita, mutta ne lasketaan silti luetteloon {{ui:Markups}}.
- **Lukko** pitää tason merkinnät arkilla, mutta estää niitä valitsemasta, siirtämästä tai poistamasta.

Kynäpainike nimeää tason uudelleen ja siirtää sen merkinnät mukanaan. Suodata luetteloa {{ui:Markups}} kentällä {{ui:Layer}}, jos haluat nähdä yhden tason merkinnät.

## Tallennetussa PDF-tiedostossa

Jokainen taso muuttuu PDF-tasoksi (valinnainen sisältö). Muut PDF-katseluohjelmat näyttävät tasot tasopaneelissaan ja voivat vaihtaa niitä; piilottamasi taso alkaa piilotettuna myös siellä. Piirustuksessa jo olleet tasot, kuten CAD-tasot, jäävät ennalleen. Kun avaat kopion uudelleen MarkupCraftissa, merkinnät palaavat tasoilleen, piilotettuina ja lukittuina niin kuin jätit ne.

## Hyvä tietää

- Piilottaminen ja lukitseminen eivät ole muokkauksia: niitä ei kumota {{key:Mod+Z}}-näppäimellä, mutta ne tallentuvat PDF-tiedostoon.
- Kopiointi ja liittäminen säilyttävät merkinnän tason.
- Litistetty kopio piirtää jokaisen merkinnän sivulle tasosta riippumatta. Katso [Tallenna litistetty kopio](topic:flatten).
