---
title: Märgistuse kihid
summary: Pane märgistused nimega kihtidele ning näita, peida või lukusta iga kiht; ka teised PDF-vaatajad saavad neid lülitada.
keywords: kihid, kiht, peida, näita, lukusta, märgistuste rühmitamine, eriala, mehaaniline, elektriline, valikuline sisu, ocg, nähtavus
from: 0fbb4c26
---

Kihid rühmitavad märgistusi, näiteks eriala või ülevaatajate järgi. Peida kiht, et näha selle all olevat joonist, või lukusta see, et selle märgistusi ei saaks kogemata liigutada.

## Tee kiht ja joonista sellele

1. Ava {{ui:Kihid}}, mis asub paneeli {{ui:Lehed}} ülaosas.
2. Vali {{ui:Uus kiht}}, kirjuta nimi, näiteks `Mehaaniline`, ja vali {{ui:Lisa kiht}}.
3. Uuest kihist saab praegune kiht: iga märgistus, mille nüüd joonistad, läheb sellele. Vali teise kihi nimi või {{ui:Ilma kihita}}, et muuta, kuhu uued märgistused lähevad.

Märgistuse teisaldamiseks teise kihti vali see ja vali kiht jaotises {{ui:Kiht}} paneelis {{ui:Omadused}}. {{ui:Uus kiht…}} selle loendi lõpus teeb ühe kohe. Teisaldamist saab tagasi võtta {{key:Mod+Z}}-ga.

## Näita, peida ja lukusta

Iga kihi real on kaks nuppu:

- **Silm** näitab või peidab kihi. Peidetud märgistusi ei joonistata ega saa valida; need loetakse siiski {{ui:Märgistused}} loendis.
- **Lukk** jätab kihi märgistused lehele, kuid takistab nende valimist, liigutamist ja kustutamist.

Pliiatsinupp nimetab kihi ümber ja viib selle märgistused kaasa. Filtreeri {{ui:Märgistused}} loendit {{ui:Kiht}} järgi, et näha ühe kihi märgistusi.

## Salvestatud PDF-is

Iga kiht muutub PDF-i kihiks (valikuline sisu). Teised PDF-vaatajad loetlevad kihid oma kihtide paneelis ja saavad neid lülitada; kiht, mille peitsid, on seal samuti peidetud. Joonisel juba olemasolevad kihid, näiteks CAD-kihid, jäävad samaks. Kui avad koopia MarkupCraftis uuesti, tulevad märgistused tagasi oma kihtidele, peidetud ja lukustatud sellisena, nagu jätsid.

## Hea teada

- Peitmine ja lukustamine pole muudatused: neid ei võeta tagasi {{key:Mod+Z}}-ga, kuid need salvestatakse PDF-iga.
- Kopeerimine ja kleepimine säilitavad märgistuse kihi.
- Tasandatud koopia joonistab iga märgistuse lehele, olenemata selle kihist. Vaata [Salvesta tasandatud koopia](topic:flatten).
