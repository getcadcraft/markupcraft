---
title: Kalibrirajte list i izmjerite
summary: Postavite mjerilo svakog lista iz predloška ili poznate mjere, zatim izmjerite duljine, površine s opsezima i brojeve.
keywords: kalibriraj, mjerilo, postavi mjerilo, mjeri, duljina, udaljenost, kota, površina, kvadratne stope, opseg, broj, količina, predmjer, ravnalo, izračun, zbrajanje, razlomak
from: 49a25c6d
---

Duljine i površine moraju znati mjerilo lista. MarkupCraft čuva mjerilo **za svaki list**: kalibrirajte svaki list na kojem mjerite. Brojevima mjerilo nije potrebno.

Statusna traka prikazuje mjerilo trenutnog lista ili "Nije kalibrirano".

## Odaberite mjerilo s popisa

Upotrijebite to kad je PDF u punoj veličini (list 24 × 36 koji se ispisuje na 24 × 36) i kad crtež navodi svoje mjerilo.

1. Kliknite gumb mjerila u statusnoj traci ("Nije kalibrirano"). Otvara se okvir "Mjerilo lista".
2. Pod {{ui:Mjerilo}} odaberite mjerilo: arhitektonsko (1/32" = 1'-0" do 3" = 1'-0"), inženjersko (1" = 10' do 1" = 100') ili metričko (1:1 do 1:1000).
3. Odaberite {{ui:Postavi mjerilo}}.

Rezultat: statusna traka prikazuje mjerilo, na primjer `1/4" = 1'-0"`. Arhitektonska mjerila prikazuju duljine u stopama i inčima, inženjerska u decimalnim stopama, a metrička do 1:50 u milimetrima, a od 1:100 u metrima.

:::warning
Predložak je ispravan samo ako PDF nije smanjen. Polovični set ili list koji je bio "prilagođen stranici" kad je nastao, s predloškom mjeri krivo. Umjesto toga kalibrirajte prema poznatoj mjeri i u svakom slučaju provjerite jednu mjeru.
:::

## Kalibrirajte prema poznatoj mjeri

Koristite to za polovične setove, skenirane listove, detalje u neobičnim mjerilima ili za provjeru predloška.

1. Pronađite dugu kotu kojoj vjerujete ili grafičku mjernu ljestvicu.
2. Odaberite {{ui:Kalibriraj}} u grupi {{ui:Mjerenje}} (ili odaberite {{ui:Odaberi dvije točke}} u okviru "Mjerilo lista").
3. Kliknite jedan kraj kote, zatim drugi. (Ili povucite od jednog kraja do drugog.) Prvo približite za točnost; {{key:Shift}} drži liniju u koracima od 45°.
4. Okvir kaže koliko su točke udaljene na papiru i pita "Koliko su zapravo udaljene?". Upišite {{ui:Stvarna udaljenost}}, na primjer `24'-0"`, `12' 6 1/2"`, `7.2 m` ili `900 mm`.
5. Odaberite kako se duljine prikazuju pod {{ui:Prikaži duljine u}}: {{ui:Stope i inči}}, {{ui:Decimalne stope}}, {{ui:Inči}}, {{ui:Metri}} ili {{ui:Milimetri}}.
6. Odaberite {{ui:Postavi mjerilo}}.

Rezultat: statusna traka prikazuje "Kalibrirano: 24'-0" preko 1.00 in" (stvarna duljina i duljina na papiru), a alat kojim ste namjeravali mjeriti ponovno se uključuje. Svi načini upisivanja duljine nalaze se u [Jedinice i duljine](topic:units-and-scales).

Stvarna udaljenost može biti i mali izračun: `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm`. Upotrijebite `+ - * /` i zagrade; broj bez jedinice računa se u jedinici pod {{ui:Prikaži duljine u}} (stope za {{ui:Stope i inči}}). {{ui:Postavi mjerilo}} koristi rezultat.

Ako MarkupCraft ne može pročitati ono što ste upisali, okvir to kaže: „To nije duljina koju MarkupCraft razumije. Pokušajte 24'-0", 12' 6 1/2", 7.2 m ili 900 mm.“ Izračun koji ne može riješiti kaže zašto i gdje, na primjer „Zagrada nije zatvorena (znak 5).“

## Izmjerite duljinu

1. Odaberite {{ui:Duljina}} ({{key:M}}).
2. Kliknite početak, zatim kraj. Ili povucite od početka do kraja. {{key:Shift}} drži u koracima od 45°.

Rezultat: linija kote s oznakama i upisanom duljinom. Statusna traka ponavlja je ("Duljina: 12'-6 1/2" (1/4" = 1'-0")."), a {{ui:Svojstva}} je prikazuju pod {{ui:Duljina}}. Stope i inči zaokružuju se na najbližih 1/16".

Ako list još nema mjerilo, odabir {{ui:Duljina}} prebacuje na {{ui:Kalibriraj}}, a statusna traka objašnjava: "Prvo kalibrirajte ovaj list: odaberite dvije točke poznate udaljenosti ili odaberite njegovo mjerilo. Zatim izmjerite." Nakon što postavite mjerilo, {{ui:Duljina}} se vraća.

## Crtanje u mjerilu

Na kalibriranom listu možete upisivati stvarne duljine dok crtate {{ui:Linija}}, {{ui:Strelica}}, {{ui:Duljina}}, {{ui:Polilinija}}, {{ui:Poligon}}, {{ui:Slobodni oblak}}, {{ui:Površina}} ili prostor:

1. Kliknite prvu točku.
2. Pokažite smjer sljedećeg segmenta i upišite njegovu duljinu, na primjer `16` (u jedinici lista), `12'6"` ili `3.5 m`. Okvir se otvara uz pokazivač dok tipkate.
3. Pritisnite {{key:Enter}}. Točka se postavlja toliko daleko, u smjeru pokazivača.

Da biste smjer postavili točno, dodajte `<` i kut u stupnjevima: `8 < 90` ide 8 stopa ravno gore, `4<0` udesno, `10 < 225` dolje i ulijevo, kako se list vidi (uključujući okrenute stranice). Nastavite upisivati duljine za sljedeće kutove i završite oblik kao obično. {{key:Esc}} zatvara okvir bez postavljanja točke.

## Izmjerite kut

1. Odaberite {{ui:Kut}} ({{key:X}}).
2. Kliknite kraj jednog kraka, zatim vrh, pa kraj drugog kraka.

Rezultat: dva kraka, mali luk u vrhu i kut u stupnjevima, na desetinu (0° do 180°). Kut ne treba mjerilo. {{ui:Svojstva}} ga prikazuju pod {{ui:Kut}}, a popis, CSV i BCF ga nose.

{{ui:Luk}} ({{key:O}}) na kalibriranom listu također prikazuje svoju duljinu duž krivulje u {{ui:Svojstva}}.

## Izmjerite površinu i njen opseg

1. Odaberite {{ui:Površina}} ({{key:Q}}).
2. Kliknite svaki kut sobe ili područja.
3. Završite dvostrukim klikom, {{key:Enter}} ili desnim klikom (dvostrukim dodirom na dodirnom zaslonu). {{key:Backspace}} uklanja zadnji kut.

Rezultat: osjenčani obris s površinom i "P" s opsegom u sredini, na primjer "128.00 sq ft" i "P 48'-0"". Mjerila u stopama daju kvadratne stope, inči kvadratne inče, metri kvadratne metre, a milimetri kvadratne milimetre. Površina treba najmanje tri kuta.

### Otvori

Da isključite stup, okno ili dvorište, odaberite površinu i odaberite {{ui:Dodaj otvor}} u {{ui:Svojstva}}. Kliknite kutove otvora unutar površine i završite kao za površinu. Otvor ostaje otvoren (bez osjenčavanja), njegova površina se oduzima, a njegovi rubovi dodaju se opsegu: soba 16' × 8' s otvorom 4' × 4' prikazuje "112.00 sq ft" i "P 64'-0"". Dodajte koliko god trebate; ne smiju se preklapati niti presijecati obris površine. {{ui:Ukloni otvore}} uklanja sve, a {{key:Mod+Z}} poništava jedan.

## Brojanje stvari

1. Odaberite {{ui:Broji}} ({{key:U}}).
2. U {{ui:Svojstva}} upišite {{ui:Naziv skupine}}, na primjer "Odvodi u podu". (Ostaje za sljedeći put.)
3. Kliknite svaku stavku na listu.

Rezultat: svaki klik dodaje numeriranu točku, prva točka nosi oznaku kao "Odvodi u podu: 7", a statusna traka čuva tekući zbroj.

- **Počnite drugu skupinu:** pritisnite {{key:Esc}} jednom (briše odabir), promijenite {{ui:Naziv skupine}} i ponovno kliknite.
- **Dodajte postojećoj skupini:** prvo odaberite skupinu, zatim odaberite {{ui:Broji}} i kliknite.
- **Uklonite oznaku:** uz odabranu skupinu držite {{key:Shift}} i kliknite točku. Uklanjanje zadnje točke uklanja skupinu. Na dodirnom zaslonu bez tipkovnice upotrijebite {{key:Mod+Z}} ili {{ui:Poništi}}.
- **Preimenujte skupinu:** odaberite je i uredite {{ui:Naziv skupine}} u {{ui:Svojstva}}.

Skupina brojanja pripada jednom listu. Brojanja na više listova prikazuju se kao zasebne skupine na popisu oznaka.

## Promijenite ili uklonite mjerilo

Kliknite gumb mjerila u statusnoj traci. Okvir prikazuje trenutno mjerilo; odaberite drugo, odaberite {{ui:Odaberi dvije točke}} ili odaberite {{ui:Ukloni mjerilo}}.

Duljine i površine koje su već nacrtane **ponovno se mjere** novim mjerilom odmah. {{ui:Poništi}} vraća staro mjerilo.

## Gdje idu brojevi

- {{ui:Svojstva}} prikazuju vrijednosti odabranog mjerenja.
- Kartica {{ui:Oznake}} navodi svaku vrijednost, a njen CSV ima stupac "Measurement". Vidi [Popis oznaka](topic:markups-list-and-export).
- Spremljeni PDF čuva mjerilo na stranici i zapisuje duljine i površine kao komentare o mjerenju, pa ih drugi PDF programi koji razumiju mjerenja mogu prikazati. Vidi [Što se sprema u PDF](topic:what-the-pdf-keeps).

Za potpuni predmjer sa stavkama, sklopovima i cijenama koristite TakeoffCraft: MarkupCraft mjeri za pregled, a ne za procjenu.
