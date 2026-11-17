---
title: Kalibrirajte list in merite
summary: Nastavite merilo vsakega lista s prednastavitvijo ali znano mero, nato merite dolžine, površine z obsegi in števila.
keywords: kalibriraj, merilo, nastavi merilo, meri, dolžina, razdalja, mera, kota, površina, kvadratni čevlji, obseg, štetje, predizmere, količina, ravnilo, aritmetika, izračun, plus, ulomek
from: 49a25c6d
---

Dolžine in površine potrebujejo merilo lista. MarkupCraft hrani merilo **za vsak list** posebej: kalibrirajte vsak list, na katerem merite. Števila merila ne potrebujejo.

Vrstica stanja prikazuje merilo trenutnega lista ali „Ni kalibrirano“.

## Izberite merilo s seznama

Uporabite, ko je PDF v polni velikosti (list 24 × 36, ki se natisne v 24 × 36) in risba navaja svoje merilo.

1. Kliknite gumb merila v vrstici stanja („Ni kalibrirano“). Odpre se okno „Merilo lista“.
2. Pod {{ui:Merilo}} izberite merilo: arhitekturno (1/32" = 1'-0" do 3" = 1'-0"), inženirsko (1" = 10' do 1" = 100') ali metrično (1:1 do 1:1000).
3. Izberite {{ui:Nastavi merilo}}.

Rezultat: vrstica stanja prikaže merilo, na primer `1/4" = 1'-0"`. Arhitekturna merila prikazujejo dolžine v čevljih in palcih, inženirska v decimalnih čevljih, metrična do 1:50 v milimetrih in od 1:100 v metrih.

:::warning
Prednastavitev je pravilna le, če PDF ni bil zmanjšan. Polovični komplet ali list, ki je bil ob izdelavi „prilagojen strani“, z prednastavitvijo meri napačno. Raje kalibrirajte iz znane mere in vsaj eno mero v vsakem primeru preverite.
:::

## Kalibrirajte iz znane mere

Uporabite za polovične komplete, skenirane liste, detajle v nenavadnih merilih ali za preverjanje prednastavitve.

1. Poiščite dolgo mero, ki ji zaupate, ali merilno lestvico.
2. Izberite {{ui:Kalibriraj}} v skupini {{ui:Merjenje}} (ali izberite {{ui:Izberi dve točki}} v oknu „Merilo lista“).
3. Kliknite en konec mere, nato drugega. (Ali povlecite od enega konca do drugega.) Za natančnost najprej povečajte; {{key:Shift}} drži črto v korakih po 45°.
4. Okno pove, kako daleč sta točki na papirju, in vpraša „Kako daleč sta v resnici?“. Vnesite {{ui:Dejanska razdalja}}, na primer `24'-0"`, `12' 6 1/2"`, `7.2 m` ali `900 mm`.
5. Izberite, kako so prikazane dolžine pod {{ui:Prikaži dolžine v}}: {{ui:Čevlji in palci}}, {{ui:Decimalni čevlji}}, {{ui:Palci}}, {{ui:Metri}} ali {{ui:Milimetri}}.
6. Izberite {{ui:Nastavi merilo}}.

Rezultat: vrstica stanja prikaže „Kalibrirano: 24'-0" na 1.00 in“ (dejanska dolžina in dolžina na papirju), orodje, s katerim ste nameravali meriti, pa se vrne. Vsi načini vnosa dolžine so v [Enote in dolžine](topic:units-and-scales).

Dejanska razdalja je lahko tudi majhen izračun: `12'6"+3/4"`, `(24'-0")/3` ali `2*450mm`. Uporabite `+ - * /` in oklepaje; število brez enote šteje v enoti pod {{ui:Prikaži dolžine v}} (čevlji za {{ui:Čevlji in palci}}). {{ui:Nastavi merilo}} uporabi rezultat.

Če MarkupCraft ne more prebrati vnosa, to okno pove: „To ni dolžina, ki jo MarkupCraft razume. Poskusite 24'-0", 12' 6 1/2", 7.2 m ali 900 mm.“ Izračun, ki ga ne zna rešiti, pove, zakaj in kje, na primer „Oklepaj ni zaprt (znak 5).“

## Izmerite dolžino

1. Izberite {{ui:Dolžina}} ({{key:M}}).
2. Kliknite začetek, nato konec. Ali povlecite od začetka do konca. {{key:Shift}} drži v korakih po 45°.

Rezultat: kotna črta z oznakami in zapisano dolžino. Vrstica stanja jo ponovi („Dolžina: 12'-6 1/2" (1/4" = 1'-0")“), {{ui:Lastnosti}} pa jo prikaže pod {{ui:Dolžina}}. Čevlji in palci so zaokroženi na najbližjo 1/16".

Če list še nima merila, izbira {{ui:Dolžina}} preklopi na {{ui:Kalibriraj}}, vrstica stanja pa pojasni: „Najprej kalibrirajte ta list: izberite dve točki na znani razdalji ali izberite njegovo merilo. Nato merite.“ Ko nastavite merilo, se {{ui:Dolžina}} vrne.

## Skica v merilu

Na kalibriranem listu lahko med risanjem {{ui:Črta}}, {{ui:Puščica}}, {{ui:Dolžina}}, {{ui:Polilinija}}, {{ui:Mnogokotnik}}, {{ui:Prosti oblak}}, {{ui:Površina}} ali prostora vnašate dejanske dolžine:

1. Kliknite prvo točko.
2. Usmerite pot naslednjega segmenta in vtipkajte njegovo dolžino, na primer `16` (v enoti lista), `12'6"` ali `3.5 m`. Ob kazalcu se odpre okno, medtem ko tipkate.
3. Pritisnite {{key:Enter}}. Točka pristane toliko daleč v smeri kazalca.

Za natančno smer dodajte `<` in kot v stopinjah: `8 < 90` pomeni 8 čevljev naravnost navzgor, `4<0` desno, `10 < 225` navzdol in levo, kot je list videti (vključno z obrnjenimi stranmi). Za naslednje vogale še naprej vtipkujte dolžine in obliko zaključite kot običajno. {{key:Esc}} zapre okno brez postavitve točke.

## Izmerite kot

1. Izberite {{ui:Kot}} ({{key:X}}).
2. Kliknite konec enega kraka, nato vogal, nato konec drugega kraka.

Rezultat: oba kraka, majhen lok v vogalu in kot v stopinjah, na desetinko (od 0° do 180°). Kot ne potrebuje merila. {{ui:Lastnosti}} ga prikaže pod {{ui:Kot}}, seznam, CSV in BCF pa ga vsebujejo.

{{ui:Lok}} ({{key:O}}) na kalibriranem listu v {{ui:Lastnosti}} prikaže tudi svojo dolžino vzdolž krivulje.

## Izmerite površino in njen obseg

1. Izberite {{ui:Površina}} ({{key:Q}}).
2. Kliknite vsak vogal sobe ali območja.
3. Zaključite z dvojnim klikom, {{key:Enter}} ali desnim klikom (na dotikalnih zaslonih dvojni tap). {{key:Backspace}} odstrani zadnji vogal.

Rezultat: senčen obris s površino in „P“ z obsegom na sredini, na primer „128.00 sq ft“ in „P 48'-0"“. Merila v čevljih dajo kvadratne čevlje, palci kvadratne palce, metri kvadratne metre, milimetri kvadratne milimetre. Površina potrebuje vsaj tri vogale.

### Odprtine

Če želite izpustiti steber, jašek ali dvorišče, izberite površino in v {{ui:Lastnosti}} izberite {{ui:Dodaj odprtino}}. Kliknite vogale odprtine znotraj površine in zaključite kot pri površini. Odprtina ostane odprta (neosenčena), njena površina se odšteje, njeni robovi pa se dodajo k obsegu: soba 16' × 8' z odprtino 4' × 4' prikaže „112.00 sq ft“ in „P 64'-0"“. Dodajte jih, kolikor potrebujete; ne smejo se prekrivati in ne smejo sekati obrisa površine. {{ui:Odstrani odprtine}} jih odstrani vse, {{key:Mod+Z}} pa razveljavi eno.

## Štejte stvari

1. Izberite {{ui:Štetje}} ({{key:U}}).
2. V {{ui:Lastnosti}} vnesite {{ui:Ime skupine}}, na primer „Talni odtoki“. (Ostane za naslednjič.)
3. Kliknite vsak predmet na listu.

Rezultat: vsak klik doda oštevilčeno piko, prva pika pa nosi oznako, kot je „Talni odtoki: 7“, vrstica stanja pa sproti kaže skupno število.

- **Začnite drugo skupino:** enkrat pritisnite {{key:Esc}} (to počisti izbor), spremenite {{ui:Ime skupine}} in kliknite znova.
- **Dodajte v obstoječo skupino:** najprej izberite skupino, nato izberite {{ui:Štetje}} in kliknite.
- **Odstranite oznako:** pri izbrani skupini držite {{key:Shift}} in kliknite piko. Odstranitev zadnje pike odstrani skupino. Na dotikalnem zaslonu brez tipkovnice uporabite {{key:Mod+Z}} ali {{ui:Razveljavi}}.
- **Preimenujte skupino:** izberite jo in uredite {{ui:Ime skupine}} v {{ui:Lastnosti}}.

Skupina štetja pripada enemu listu. Štetja na več listih se v seznamu označb prikažejo kot ločene skupine.

## Spremenite ali odstranite merilo

Kliknite gumb merila v vrstici stanja. Okno prikaže trenutno merilo; izberite drugo, izberite {{ui:Izberi dve točki}} ali izberite {{ui:Odstrani merilo}}.

Dolžine in površine, ki so že narisane, so takoj **ponovno izmerjene** z novim merilom. {{ui:Razveljavi}} povrne staro merilo.

## Kam gredo številke

- {{ui:Lastnosti}} prikazujejo vrednosti izbrane meritve.
- Zavihek {{ui:Označbe}} našteje vsako vrednost, njegov CSV pa ima stolpec „Meritev“. Glejte [Seznam označb](topic:markups-list-and-export).
- Shranjeni PDF ohrani merilo na strani in zapiše dolžine in površine kot komentarje meritev, da jih lahko drugi programi za PDF, ki razumejo meritve, prikažejo. Glejte [Kaj je shranjeno v PDF](topic:what-the-pdf-keeps).

Za celoten popis količin s postavkami, sestavi in cenami uporabite TakeoffCraft: MarkupCraft meri za pregled, ne za ocenjevanje.
