---
title: Kalibrišite list i merite
summary: Podesite razmeru svakog lista iz gotove liste ili poznate mere, zatim merite dužine, površine sa obimima i brojeve.
keywords: kalibracija, razmera, postavi razmeru, merenje, dužina, rastojanje, kota, površina, kvadratne stope, obim, brojanje, predmer, količina, lenjir, aritmetika, proračun, plus, razlomak
from: 49a25c6d
---

Dužine i površine moraju da znaju razmeru lista. MarkupCraft čuva razmeru **po listu**: kalibrišite svaki list koji merite. Brojanje ne traži razmeru.

Statusna traka prikazuje razmeru tekućeg lista, ili „Nije kalibrisano“.

## Izaberite razmeru sa liste

Koristite ovo kad je PDF u punoj veličini (list 24 × 36 koji se štampa u 24 × 36) i crtež navodi svoju razmeru.

1. Kliknite dugme razmere u statusnoj traci („Nije kalibrisano“). Otvara se okvir „Razmera lista“.
2. Pod {{ui:Scale}} izaberite razmeru: arhitektonsku (1/32" = 1'-0" do 3" = 1'-0"), inženjersku (1" = 10' do 1" = 100') ili metričku (1:1 do 1:1000).
3. Izaberite {{ui:Set scale}}.

Rezultat: statusna traka prikazuje razmeru, na primer `1/4" = 1'-0"`. Arhitektonske razmere prikazuju dužine u stopama i inčima, inženjerske u decimalnim stopama, metričke do 1:50 u milimetrima, a od 1:100 u metrima.

:::warning
Gotova razmera je ispravna samo ako PDF nije smanjen. Set u polovičnoj veličini, ili list koji je bio „prilagođen stranici“ kad je napravljen, pogrešno se meri sa gotovom razmerom. Umesto toga kalibrišite iz poznate mere i u svakom slučaju proverite jednu dimenziju.
:::

## Kalibrišite iz poznate mere

Koristite ovo za setove u polovičnoj veličini, skenirane listove, detalje u neobičnim razmerama ili za proveru gotove razmere.

1. Nađite dugu kotu kojoj verujete, ili skalu sa razmerom na crtežu.
2. Izaberite {{ui:Calibrate}} u grupi {{ui:Measure}} (ili izaberite {{ui:Pick two points}} u okviru „Razmera lista“).
3. Kliknite jedan kraj kote, zatim drugi. (Ili prevucite od jednog kraja do drugog.) Prvo uvećajte radi tačnosti; {{key:Shift}} drži liniju u koracima od 45°.
4. Okvir kaže koliko su tačke udaljene na papiru i pita „Koliko su zaista udaljene?“. Ukucajte {{ui:Real distance}}, na primer `24'-0"`, `12' 6 1/2"`, `7.2 m` ili `900 mm`.
5. Izaberite kako se dužine prikazuju pod {{ui:Show lengths in}}: {{ui:Feet and inches}}, {{ui:Decimal feet}}, {{ui:Inches}}, {{ui:Meters}} ili {{ui:Millimeters}}.
6. Izaberite {{ui:Set scale}}.

Rezultat: statusna traka prikazuje „Kalibrisano: 24'-0" preko 1.00 in“ (stvarna dužina i dužina na papiru), a alat kojim ste nameravali da merite se vraća. Svi načini unosa dužine nalaze se u [Jedinice i razmere](topic:units-and-scales).

Stvarna dužina može biti i mala računica: `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm`. Koristite `+ - * /` i zagrade; broj bez jedinice računa se u jedinici pod {{ui:Show lengths in}} (stope za {{ui:Feet and inches}}). {{ui:Set scale}} koristi rezultat.

Ako MarkupCraft ne može da pročita ono što ste ukucali, okvir to kaže: „To nije dužina koju MarkupCraft razume. Probajte 24'-0", 12' 6 1/2", 7.2 m ili 900 mm.“ Računica koju ne može da reši kaže zašto i gde, na primer „Zagrada nije zatvorena (karakter 5).“

## Izmerite dužinu

1. Izaberite {{ui:Length}} ({{key:M}}).
2. Kliknite početak, zatim kraj. Ili prevucite od početka do kraja. {{key:Shift}} drži u koracima od 45°.

Rezultat: linija kote sa oznakama i ispisanom dužinom. Statusna traka je ponavlja („Dužina: 12'-6 1/2" (1/4" = 1'-0")."), a {{ui:Properties}} je prikazuje pod {{ui:Length}}. Stope i inči zaokružuju se na najbliži 1/16".

Ako list još nema razmeru, izbor {{ui:Length}} prebacuje na {{ui:Calibrate}}, a statusna traka objašnjava: „Prvo kalibrišite ovaj list: izaberite dve tačke na poznatoj međusobnoj udaljenosti ili izaberite njegovu razmeru. Zatim merite.“ Kad postavite razmeru, {{ui:Length}} se vraća.

## Skica u razmeri

Na kalibrisanom listu možete ukucati stvarne dužine dok crtate {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}}, {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}}, {{ui:Area}} ili prostor:

1. Kliknite prvu tačku.
2. Pokažite pravac sledećeg segmenta i ukucajte njegovu dužinu, na primer `16` (u jedinici lista), `12'6"` ili `3.5 m`. Pored pokazivača se otvara okvir dok kucate.
3. Pritisnite {{key:Enter}}. Tačka se postavlja toliko daleko, u pravcu pokazivača.

Da biste pravac podesili tačno, dodajte `<` i ugao u stepenima: `8 < 90` ide 8 stopa tačno nagore, `4<0` udesno, `10 < 225` nadole i ulevo, kako se list vidi (uključujući okrenute stranice). Nastavite da kucate dužine za sledeće uglove i završite oblik uobičajeno. {{key:Esc}} zatvara okvir bez postavljanja tačke.

## Izmerite ugao

1. Izaberite {{ui:Angle}} ({{key:X}}).
2. Kliknite kraj jednog kraka, zatim teme, pa kraj drugog kraka.

Rezultat: dva kraka, mali luk u temenu i ugao u stepenima, do desetine (0° do 180°). Ugao ne traži razmeru. {{ui:Properties}} ga prikazuje pod {{ui:Angle}}, a spisak, CSV i BCF ga nose.

{{ui:Arc}} ({{key:O}}) na kalibrisanom listu takođe prikazuje svoju dužinu duž krivine u {{ui:Properties}}.

## Izmerite površinu i njen obim

1. Izaberite {{ui:Area}} ({{key:Q}}).
2. Kliknite svaki ugao sobe ili oblasti.
3. Završite dvostrukim klikom, {{key:Enter}} ili desnim klikom (dvostrukim dodirom na ekranu osetljivom na dodir). {{key:Backspace}} uklanja poslednji ugao.

Rezultat: osenčen obris sa površinom i „P“ sa obimom u sredini, na primer „128.00 sq ft“ i „P 48'-0"“. Razmere u stopama daju kvadratne stope, u inčima kvadratne inče, u metrima kvadratne metre, a u milimetrima kvadratne milimetre. Površina treba najmanje tri ugla.

### Otvori

Da izostavite stub, šaht ili dvorište, izaberite oblast i izaberite {{ui:Add a cut-out}} u {{ui:Properties}}. Kliknite uglove otvora unutar oblasti i završite kao za oblast. Otvor ostaje otvoren (bez senčenja), njegova površina se oduzima, a njegove ivice se dodaju obimu: soba od 16' × 8' sa otvorom od 4' × 4' pokazuje „112.00 sq ft“ i „P 64'-0"“. Dodajte koliko vam treba; ne smeju se preklapati jedan s drugim ili seći obris oblasti. {{ui:Remove cut-outs}} uklanja sve, a {{key:Mod+Z}} opoziva jedan.

## Brojanje

1. Izaberite {{ui:Count}} ({{key:U}}).
2. U {{ui:Properties}} ukucajte {{ui:Group name}}, na primer „Slivnici poda“. (Ostaje za sledeći put.)
3. Kliknite svaku stavku na listu.

Rezultat: svaki klik dodaje numerisanu tačku; prva tačka nosi oznaku poput „Slivnici poda: 7“, a statusna traka čuva tekući zbir.

- **Počnite drugu grupu:** pritisnite {{key:Esc}} jednom (briše izbor), promenite {{ui:Group name}} i ponovo kliknite.
- **Dodajte u postojeću grupu:** prvo izaberite grupu, zatim izaberite {{ui:Count}} i kliknite.
- **Uklonite oznaku:** sa izabranom grupom držite {{key:Shift}} i kliknite tačku. Uklanjanje poslednje tačke uklanja grupu. Na ekranu osetljivom na dodir bez tastature koristite {{key:Mod+Z}} ili {{ui:Undo}}.
- **Preimenujte grupu:** izaberite je i izmenite {{ui:Group name}} u {{ui:Properties}}.

Grupa brojanja pripada jednom listu. Brojanja na više listova prikazuju se kao zasebne grupe u listi označavanja.

## Promenite ili uklonite razmeru

Kliknite dugme razmere u statusnoj traci. Okvir prikazuje tekuću razmeru; izaberite drugu, izaberite {{ui:Pick two points}} ili izaberite {{ui:Remove scale}}.

Dužine i površine koje su već nacrtane **ponovo se mere** novom razmerom odmah. {{ui:Undo}} vraća staru razmeru.

## Gde idu brojevi

- {{ui:Properties}} prikazuje vrednosti izabranog merenja.
- Kartica {{ui:Markups}} navodi svaku vrednost, a njen CSV ima kolonu „Merenje“. Pogledajte [Lista označavanja](topic:markups-list-and-export).
- Sačuvani PDF čuva razmeru na stranici i piše dužine i površine kao komentare merenja, pa ih drugi PDF programi koji razumeju merenja mogu prikazati. Pogledajte [Šta se čuva u PDF-u](topic:what-the-pdf-keeps).

Za potpun predmer količina sa stavkama, sklopovima i cenama koristite TakeoffCraft: MarkupCraft meri za pregled, a ne za izradu predračuna.
