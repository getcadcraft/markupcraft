---
title: Prihod iz drugega programa za označevanje
summary: Kako navade namiznega programa za označevanje PDF-jev ustrezajo MarkupCraftu in razlike, ki presenetijo.
keywords: preklop, prehod, selitev, poznano, namizno označevanje pdf, zbirka orodij, seznam označb, prekrivanje, seje, profil, bližnjice, razlike
from: c8f323e1
---

Če pregledujete risbe v Bluebeam Revu (ali komentirate PDF-je v kakem drugem namiznem programu za PDF), se bo večina MarkupCraft zdela poznana: oblaki, oblački, zbirka orodij, seznam označb, stanja z odgovori, kalibrirane meritve, prekrivanja listov. Največja razlika je v tem, kako so datoteke obravnavane, zato preberite naslednji razdelek, tudi če preskočite ostalo.

## Pet razlik, ki so pomembne

1. **Shranjevanje ustvari novo datoteko.** MarkupCraft teče v brskalniku in ne more prepisati PDF-ja na vašem disku. {{ui:Shrani}} prenese „<name> (marked up).pdf“, izvirnik pa ostane nespremenjen. Naslednjič odprite kopijo „(marked up)“ in stare kopije uredite sami.
2. **PDF se shrani, ko shranite.** Do takrat rezervna kopija v tem brskalniku ohrani vaše označbe ob zrušitvi ali zaprtem zavihku, MarkupCraft pa vam jo naslednjič ponudi nazaj. To je varnostna mreža: shranite PDF, da ohranite pregled.
3. **Vaš profil živi v brskalniku.** Vaše ime avtorja, nastavitve orodij in zbirka orodij se hranijo v tem brskalniku na tem računalniku. Drug brskalnik ali računalnik začne od začetka, brisanje podatkov spletnega mesta pa jih izbriše. Izvozite zbirko orodij kot varnostno kopijo. Glejte [Kaj ostane v tem brskalniku](topic:browser-storage).
4. **Še ni skupnih sej.** Ni žive, skupne seje pregleda in ni oblačnega projekta. Pregled potuje v PDF-ju: shranite, pošljete kopijo, naslednja oseba odgovori in shrani.
5. **Merilo je po listu in samo po listu.** Znotraj lista ni pogledih oken in ni možnosti „uporabi to merilo za vse strani“. Kalibrirajte vsak list, na katerem merite.

## Navada za navado

| Navajeni ste | V MarkupCraftu |
|---|---|
| Podokno sličic, oznake strani | {{ui:Listi}} na levi. Imena pridejo iz oznak strani ali se preberejo iz glave risbe; popravite jih z {{ui:Preimenuj list}}. |
| Odpiranje več PDF-jev kot nabor | Odprite jih vse hkrati; postanejo en seznam. Datoteka nabora se ne shrani: naslednjič odprite iste PDF-je. |
| Zbirka orodij z nabori orodij | Zavihek {{ui:Orodja}}: ena zbirka na brskalnik, shranjena orodja s slogom in predmetom. Delite z {{ui:Izvozi}} in {{ui:Uvozi}} kot datoteko JSON. Datotek naborov orodij iz drugih programov ni mogoče uvoziti. |
| Podokno lastnosti | Zavihek {{ui:Lastnosti}}: stanje, predmet, komentar, slog, odgovori in postavka pomanjkljivosti na enem mestu. |
| Seznam označb s stolpci | Zavihek {{ui:Označbe}} s filtri za list, avtorja, stanje in vrsto. Izvozite CSV ali BCF. Še ni stolpcev po meri in ne povzetka za PDF ali delovni zvezek. |
| Stanje in stanje pregleda | {{ui:Stanje}}: Odprto, Sprejeto, Zavrnjeno, Dokončano. Nastavitev stanj po meri ni. Shranjeno kot standardna stanja pregleda. |
| Odgovori na označbo | Nit „Odgovori“ v {{ui:Lastnosti}}; spremembe stanja se beležijo vanjo. Poslanega odgovora ni mogoče urejati. |
| Kalibriraj, nato dolžina, površina, štetje | {{ui:Kalibriraj}}, {{ui:Dolžina}} ({{key:M}}), {{ui:Površina}} ({{key:Q}}, da površino in obseg), {{ui:Štetje}} ({{key:U}}). Še ni: kota, polmera, prostornine, dolžine polilinije ali odprtin. |
| Prekrivanje strani | Zavihek {{ui:Primerjava}}: rdeče za staro, modro za novo, poravnava po dveh točkah. Brez samodejnega označevanja „primerjaj dokumente“ z oblaki. |
| Žigi | {{ui:Žig}} s šestimi vgrajenimi žigi in besedilom po meri, podpisani z vašim imenom in datumom. Še ni slikovnih ali podpisnih žigov. |
| Sledenje pomanjkljivostim ali zadevam | Zavihek {{ui:Pomanjkljivosti}}: oštevilčene postavke z zadolženo osebo, rokom in stanjem; izvoz CSV. |
| Seja žive sodelovanja | Še ni na voljo. Pošljite shranjeni PDF. |
| Izravnava | Še ni izdelano. Označbe ostanejo kot komentarji, ki jih lahko drugi bralniki prikažejo in natisnejo. |
| Plasti za označbe | Še ni izdelano. Za razvrščanje komentarjev uporabite predmete, avtorje in filtre seznama. |
| Hiperpovezave med listi | Še ni izdelano. |
| Preslednica za pomik, kolesce za povečavo | Enako: držite {{key:Space}} in povlecite; kolesce povečuje na kazalcu. Kolesce nikoli ne pomakne strani. |

## Tipke, ki se razlikujejo

Veliko enočrkovnih tipk je takih, kot pričakujete, vendar preverite te, preden jih pritisnete namesto vas:

- {{key:K}} je {{ui:Oblaček}}, {{key:Q}} pa {{ui:Površina}}. Če ste navajeni Q za oblačke, tu začne površino.
- {{key:C}} je polje {{ui:Oblak}}; {{key:Shift+C}} je {{ui:Prosti oblak}}.
- {{key:M}} je {{ui:Dolžina}}, {{key:U}} je {{ui:Štetje}}, {{key:Y}} je {{ui:Polilinija}}, {{key:G}} je {{ui:Mnogokotnik}}, {{key:I}} je {{ui:Poudarek}}.
- {{key:Mod+D}} podvoji izbor (namesto zaznamka brskalnika).
- {{key:Mod+Plus}} in {{key:Mod+Minus}} povečata list, ne strani brskalnika.
- Katerokoli tipko lahko spremenite: glejte spodaj.

:::tip
Če so vaši prsti vajeni Bluebeam Revu, izberite slog menija {{ui:Pregled PDF}} v {{ui:Nastavitve}} › {{ui:MarkupCraft}} › {{ui:Meniji, tipke in miška}}: menijska vrstica (Datoteka, Uredi, Pogled, Dokument, Označba, Merjenje, Okno) nad vrsto orodij za pregled, {{key:Q}} za oblaček, {{key:H}} za označevalnik, {{key:N}} za mnogokotnik, meritve pa na {{key:Alt+Shift}} s črko. Tudi tu lahko katerokoli tipko spremenite. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).
:::

Celoten seznam je v [Tipkovnica in miška](topic:keyboard).

## Stvari, ki delujejo drugače, kot morda pričakujete

- **Orodja ostanejo vklopljena.** Po oblaku še vedno rišete oblake. {{key:Esc}} enkrat počisti izbor, dvakrat se vrne na {{ui:Izbor}}.
- **Besedilo in oblački potrebujejo besedilo.** Če končate brez vpisa, označba ni dodana. Opombe ostanejo prazne.
- **Meritve potrebujejo najprej merilo.** {{ui:Dolžina}} in {{ui:Površina}} na nekalibriranem listu preklopita na {{ui:Kalibriraj}} in se nato vrneta.
- **Komentarji iz drugih programov.** Pravokotniki, elipse, črte, polilinije, mnogokotniki, črnilo, besedilna polja in lepljivi zapiski, narejeni drugje, postanejo urejljive označbe MarkupCraft in se ob shranjevanju prepišejo na način MarkupCraft (videz se lahko nekoliko spremeni). Besedilni poudarki, žigi drugih programov in druge posebne vrste ostanejo samo za branje: lahko odgovorite nanje, ne morete jih spreminjati.
- **Znaki zunaj zahodnoevropskih črk** se v shranjenem PDF-ju izpišejo kot „?“. Glejte [Shrani PDF z označbami](topic:save-the-marked-up-pdf).
- **Datumi žigov** uporabljajo UTC, zato lahko žig, narejen pozno zvečer v Ameriki, pokaže jutrišnji datum.
- **Meritve se prenesejo** kot standardni komentarji meritev, vsak kalibrirani list pa ohrani svoje merilo, zato program, ki bere meritve PDF, običajno lahko pokaže. Natančno vedenje je odvisno od tega programa.

## Uporaba obeh

Lahko se vračate. Komentarji, narejeni drugje, se odprejo v MarkupCraft, PDF „(marked up)“ pa se odpre v drugih programih za PDF z vsemi označbami, odgovori in stanji vidnimi. Kar lahko nazaj prebere samo MarkupCraft (zadolžena oseba in rok pomanjkljivosti, stanje postavke), je v datoteki shranjeno za MarkupCraft.
