---
title: Kalibriraj list i izmjeri
summary: Podesi razmjeru svakog lista iz liste ili poznate dimenzije, zatim mjeri dužine, površine s obimima i brojanje.
keywords: kalibracija, razmjera, postavi razmjeru, mjerenje, dužina, udaljenost, dimenzija, površina, kvadratne stope, obim, brojanje, predmjer, količina, lenjir, aritmetika, računanje, plus, razlomak
from: 49a25c6d
---

Dužine i površine moraju znati razmjeru lista. MarkupCraft čuva razmjeru **po listu**: kalibriraj svaki list na kojem mjeriš. Brojanje ne treba razmjeru.

Statusna traka pokazuje razmjeru trenutnog lista ili "Nije kalibrirano".

## Izaberi razmjeru s liste

Koristi ovo kad je PDF u punoj veličini (list 24 × 36 koji se štampa 24 × 36) i crtež navodi razmjeru.

1. Klikni dugme razmjere u statusnoj traci ("Nije kalibrirano"). Otvara se okvir "Razmjera lista".
2. Pod {{ui:Razmjera}} izaberi razmjeru: arhitektonsku (1/32" = 1'-0" do 3" = 1'-0"), inženjersku (1" = 10' do 1" = 100') ili metričku (1:1 do 1:1000).
3. Izaberi {{ui:Postavi razmjeru}}.

Rezultat: statusna traka pokazuje razmjeru, na primjer `1/4" = 1'-0"`. Arhitektonske razmjere prikazuju dužine u stopama i inčima, inženjerske u decimalnim stopama, a metričke do 1:50 u milimetrima, od 1:100 u metrima.

:::warning
Predložak je tačan samo ako PDF nije smanjen. Polovična kopija, ili list koji je pri nastanku bio "prilagođen stranici", s predloškom se mjeri pogrešno. Umjesto toga kalibriraj po poznatoj dimenziji i u svakom slučaju provjeri jednu dimenziju.
:::

## Kalibriraj po poznatoj dimenziji

Koristi ovo za polovične kopije, skenirane listove, detalje u neobičnim razmjerama ili za provjeru predloška.

1. Pronađi dugu dimenziju kojoj vjeruješ, ili grafičku skalu.
2. Izaberi {{ui:Kalibriraj}} u grupi {{ui:Mjeri}} (ili izaberi {{ui:Odaberi dvije tačke}} u okviru "Razmjera lista").
3. Klikni jedan kraj dimenzije, pa drugi. (Ili prevuci od jednog kraja do drugog.) Prvo zumiraj radi tačnosti; {{key:Shift}} održava liniju u koracima od 45°.
4. Okvir kaže koliko su tačke udaljene na papiru i pita "Koliko su zaista udaljene?". Upiši {{ui:Stvarna udaljenost}}, na primjer `24'-0"`, `12' 6 1/2"`, `7.2 m` ili `900 mm`.
5. Izaberi kako se dužine prikazuju pod {{ui:Prikaži dužine u}}: {{ui:Stope i inči}}, {{ui:Decimalne stope}}, {{ui:Inči}}, {{ui:Metri}} ili {{ui:Milimetri}}.
6. Izaberi {{ui:Postavi razmjeru}}.

Rezultat: statusna traka pokazuje "Kalibrirano: 24'-0" prema 1.00 in" (stvarna dužina i dužina na papiru), a alat kojim si htio mjeriti se vraća. Svaki način unosa dužine je u [Jedinice i dužine](topic:units-and-scales).

Stvarna udaljenost može biti i jednostavna računica: `12'6"+3/4"`, `(24'-0")/3` ili `2*450mm`. Koristi `+ - * /` i zagrade; broj bez jedinice važi u jedinici pod {{ui:Prikaži dužine u}} (stope za {{ui:Stope i inči}}). {{ui:Postavi razmjeru}} koristi rezultat.

Ako MarkupCraft ne može pročitati ono što si upisao, okvir to kaže: 'To nije dužina koju MarkupCraft razumije. Probaj 24'-0", 12' 6 1/2", 7.2 m ili 900 mm.' Računica koju ne može izračunati kaže zašto i gdje, na primjer "Zagrada nije zatvorena (znak 5)."

## Izmjeri dužinu

1. Izaberi {{ui:Dužina}} ({{key:M}}).
2. Klikni početak, pa kraj. Ili prevuci od početka do kraja. {{key:Shift}} drži liniju u koracima od 45°.

Rezultat: linija dimenzije s oznakama i dužinom ispisanom na njoj. Statusna traka ponavlja: "Dužina: 12'-6 1/2" (1/4" = 1'-0")." a {{ui:Svojstva}} je prikazuju pod {{ui:Dužina}}. Stope i inči zaokruženi su na najbliži 1/16".

Ako list još nema razmjeru, izbor {{ui:Dužina}} prebacuje na {{ui:Kalibriraj}} i statusna traka objašnjava: "Prvo kalibriraj ovaj list: izaberi dvije tačke poznate udaljenosti ili izaberi njegovu razmjeru. Zatim mjeri." Nakon što postaviš razmjeru, {{ui:Dužina}} se vraća.

## Crtanje u razmjeri

Na kalibriranom listu možeš upisati stvarne dužine dok crtaš {{ui:Linija}}, {{ui:Strelica}}, {{ui:Dužina}}, {{ui:Polilinija}}, {{ui:Poligon}}, {{ui:Slobodni oblak}}, {{ui:Površina}} ili prostor:

1. Klikni prvu tačku.
2. Pokaži smjer sljedećeg segmenta i upiši njegovu dužinu, kao `16` (u jedinici lista), `12'6"` ili `3.5 m`. Okvir se pojavljuje uz pokazivač dok kucaš.
3. Pritisni {{key:Enter}}. Tačka se postavlja toliko daleko, u smjeru pokazivača.

Da tačno postaviš smjer, dodaj `<` i ugao u stepenima: `8 < 90` ide 8 stopa ravno gore, `4<0` udesno, `10 < 225` dolje i lijevo, kako se list vidi (uključujući okrenute stranice). Nastavi upisivati dužine za naredne uglove i završi oblik kao obično. {{key:Esc}} zatvara okvir bez postavljanja tačke.

## Izmjeri ugao

1. Izaberi {{ui:Ugao}} ({{key:X}}).
2. Klikni kraj jednog kraka, zatim ugao, pa kraj drugog kraka.

Rezultat: dva kraka, mali luk u uglu i ugao u stepenima, do desetine (0° do 180°). Ugao ne treba razmjeru. {{ui:Svojstva}} ga prikazuju pod {{ui:Ugao}}, a lista, CSV i BCF ga sadrže.

{{ui:Luk}} ({{key:O}}) na kalibriranom listu takođe prikazuje svoju dužinu duž krivine u {{ui:Svojstva}}.

## Izmjeri površinu i njen obim

1. Izaberi {{ui:Površina}} ({{key:Q}}).
2. Klikni svaki ugao sobe ili područja.
3. Završi dvostrukim klikom, {{key:Enter}} ili desnim klikom (na ekranu osjetljivom na dodir, dvostrukim dodirom). {{key:Backspace}} uklanja zadnji ugao.

Rezultat: osjenčen obris s površinom i "P" s obimom u sredini, na primjer "128.00 sq ft" i "P 48'-0"". Razmjere u stopama daju kvadratne stope, u inčima kvadratne inče, u metrima kvadratne metre, u milimetrima kvadratne milimetre. Površina treba najmanje tri ugla.

### Izrezi

Da izostaviš stub, šaht ili dvorište, izaberi površinu i izaberi {{ui:Dodaj izrez}} u {{ui:Svojstva}}. Klikni uglove izreza unutar površine i završi kao za površinu. Izrez ostaje otvoren (bez osjenčenja), njegova površina se oduzima, a njegove ivice se dodaju obimu: soba 16' × 8' s izrezom 4' × 4' pokazuje "112.00 sq ft" i "P 64'-0"". Dodaj koliko god treba; ne smiju se preklapati jedni s drugima niti prelaziti obris površine. {{ui:Ukloni izreze}} uklanja sve, a {{key:Mod+Z}} poništava jedan.

## Brojanje stvari

1. Izaberi {{ui:Brojanje}} ({{key:U}}).
2. U {{ui:Svojstva}} upiši {{ui:Naziv grupe}}, na primjer "Odvodi za pod". (Ostaje za sljedeći put.)
3. Klikni svaku stavku na listu.

Rezultat: svaki klik dodaje numerisanu tačku, prva tačka nosi oznaku poput "Odvodi za pod: 7", a statusna traka čuva tekući zbir.

- **Počni drugu grupu:** pritisni {{key:Esc}} jednom (briše odabir), promijeni {{ui:Naziv grupe}} i klikni ponovo.
- **Dodaj u postojeću grupu:** prvo izaberi grupu, zatim izaberi {{ui:Brojanje}} i klikni.
- **Ukloni oznaku:** s izabranom grupom drži {{key:Shift}} i klikni tačku. Uklanjanje zadnje tačke uklanja grupu. Na ekranu osjetljivom na dodir bez tastature koristi {{key:Mod+Z}} ili {{ui:Poništi}}.
- **Preimenuj grupu:** izaberi je i uredi {{ui:Naziv grupe}} u {{ui:Svojstva}}.

Grupa brojanja pripada jednom listu. Brojanja na više listova prikazuju se kao zasebne grupe u listi oznaka.

## Promijeni ili ukloni razmjeru

Klikni dugme razmjere u statusnoj traci. Okvir pokazuje trenutnu razmjeru; izaberi drugu, izaberi {{ui:Odaberi dvije tačke}} ili izaberi {{ui:Ukloni razmjeru}}.

Dužine i površine koje su već nacrtane **ponovo se mjere** novom razmjerom odmah. Poništi vraća staru razmjeru.

## Gdje idu brojevi

- {{ui:Svojstva}} pokazuju vrijednosti odabranog mjerenja.
- Kartica {{ui:Oznake}} navodi svaku vrijednost, a njen CSV ima kolonu "Measurement". Pogledaj [Lista oznaka](topic:markups-list-and-export).
- Sačuvani PDF čuva razmjeru na stranici i zapisuje dužine i površine kao komentare mjerenja, pa ih drugi programi za PDF koji razumiju mjerenja mogu prikazati. Pogledaj [Šta se čuva u PDF-u](topic:what-the-pdf-keeps).

Za potpun predmjer sa stavkama, sklopovima i cijenama koristi TakeoffCraft: MarkupCraft mjeri za pregled, a ne za predračun.
