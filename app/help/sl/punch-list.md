---
title: Naredite seznam pomanjkljivosti
summary: Oznake spremenite v oštevilčene postavke pomanjkljivosti z odgovorno osebo, rokom in stanjem ter izvozite seznam.
keywords: seznam pomanjkljivosti, pomanjkljivost, seznam napak, napaka, terenske težave, opažanje, dodeli, odgovorna oseba, rok, zaključek, ogled, številka
from: b98b38e6
---

Postavka pomanjkljivosti je oznaka s številko, odgovorno osebo, rokom in stanjem postavke. Številka je narisana na listu ob oznaki, tako se natisnjeni list in seznam ujemata.

## Dodajanje postavk

1. Označite vsako težavo na listih: oblak, oblaček, opombo, karkoli.
2. Izberite eno ali več od njih (glejte [Izbiranje, premikanje in spreminjanje oznak](topic:select-and-edit)).
3. Odprite zavihek {{ui:Pomanjkljivosti}} in izberite {{ui:Dodaj izbrano na seznam pomanjkljivosti}}, ali izberite {{ui:Dodaj na seznam pomanjkljivosti}} v {{ui:Lastnosti}}.

Rezultat: vsaka oznaka dobi naslednjo številko (1, 2, 3 …), po vrstnem redu listov in nato po vrstnem redu risanja. Na listu se pojavi oštevilčena značka, vrstica stanja pa napiše „Na seznam pomanjkljivosti so dodane 3 postavke.“ Oznake, ki že imajo številko, in komentarji samo za branje, se preskočijo.

## Vnos podrobnosti

V zavihku {{ui:Pomanjkljivosti}} ima vsaka postavka svojo številko, temo, besedilo, list in stanje, pod njo pa tri polja. Ista polja so v {{ui:Lastnosti}} pod „Pomanjkljivosti“, ko je oznaka izbrana:

- {{ui:Zadolžena oseba}}: ime ali stroka, kot prosto besedilo.
- {{ui:Rok}}: datum, iz izbirnika datuma.
- {{ui:Stanje postavke}}: Odprto, V teku, Pripravljeno za pregled ali Zaprto.

Kliknite glavo postavke, da skočite nanjo na njen list.

Stanje postavke je ločeno od stanja pregleda oznake (Odprto, Sprejeto, Zavrnjeno, Dokončano). Stanje postavke uporabite za delo, stanje pregleda pa za komentar.

## Odstranitev postavke

Izberite oznako in izberite {{ui:Odstrani s seznama pomanjkljivosti}} v {{ui:Lastnosti}}. Oznaka ostane; odstrani se samo številka. Dokler je komplet odprt, se številke ne ponovno uporabljajo: naslednja postavka dobi naslednjo novo številko, zato luknja pomeni, da je bila postavka odstranjena. Ko datoteko znova odprete, se štetje nadaljuje za najvišjo številko v njej.

## Izvoz seznama

Izberite {{ui:Izvozi CSV}} v zavihku {{ui:Pomanjkljivosti}}. Dobite „<name> punch list.csv“ s stolpci No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author in Created, po vrstnem redu številk. Odprite ga v poljubni preglednici.

Številke pomanjkljivosti, odgovorne osebe, roki in stanja postavk so shranjeni tudi v označeni datoteki PDF, zato se vrnejo, ko jo znova odprete. Drugi bralniki PDF prikažejo značko s številko kot del oznake. Izvoz BCF v seznamu oznak prav tako prenese odgovorno osebo in rok (glejte [Osnove BCF](topic:bcf-basics)).

## Na terenu s tabličnim računalnikom

Odprite komplet na iPadu, pojdite po gradbišču in na vsaki težavi spustite {{ui:Opomba}} ali narišite {{ui:Oblak}}. Dodajajte jih na seznam pomanjkljivosti sproti in shranite, preden odidete. Glejte [Pregled na iPadu ali zaslonu na dotik](topic:review-on-a-tablet).

Seznam pomanjkljivosti kot oblikovano poročilo PDF ali preglednica ter fotografije, pripete postavkam, še nista izdelani.
