---
title: Datoteke, ki jih MarkupCraft odpira in shranjuje
summary: PDF-ji na vhodu, označena kopija PDF na izhodu ter datoteke CSV, BCF in zbirke orodij; kam kaj gre, na spletu in brez povezave.
keywords: pdf, odpri, shrani, izvozi, prenos, csv, bcf, bcfzip, json, zbirka orodij, vrste datotek, formati, nalaganje, geslo, šifrirano
from: b3045b4c
---

## Kaj MarkupCraft odpira

| Datoteka | Kako | Kaj se zgodi |
|---|---|---|
| PDF (`.pdf`) | {{ui:Odpri}}, {{key:Mod+O}} ali spustite na območje listov. Naenkrat jih lahko odprete več. | Vsaka stran postane list. Označbe, ki so že v datoteki, se preberejo nazaj (spodaj). |
| Zbirka orodij (`.json`) | zavihek {{ui:Orodja}}, nato {{ui:Uvozi}} | Orodja se dodajo v vašo zbirko. Glejte [Zbirka orodij](topic:tool-chest). |

Vse drugo je zavrnjeno s sporočilom „MarkupCraft odpre datoteke PDF.“ v vrstici stanja. Če spustite mešanico, se datoteke PDF odprejo, vrstica stanja pa pove, koliko datotek ni PDF.

### Označbe, ki so že v PDF-ju

- **Označbe, ki jih je shranil MarkupCraft,** se vrnejo točno tako: vrsta, slog, avtor, datumi, stanje, odgovori, številka pomanjkljivosti, merilo lista in imena listov, ki ste jih vpisali.
- **Komentarji iz drugih programov za PDF** se preberejo prav tako. Pravokotniki, elipse, črte in puščice, polilinije, mnogokotniki, poteze peresa (pisala), besedilna polja in lepljive opombe postanejo običajne, urejljive označbe MarkupCraft. Njihovi odgovori in stanja pregleda se ohranijo.
- **Vse drugo** (označevanje besedila z izbiro, žigi drugih programov in druge vrste) se prikaže takšno, kakršno je, in je označeno kot samo za branje. Izberete ga lahko, vidite ga na seznamu označb in nanj odgovorite, ne morete pa ga premakniti, spremeniti ali izbrisati.
- Povezave in polja obrazcev se ne spreminjajo in se ne prikažejo na seznamu.
- Merilo, ki ga je shranil drug program (merilno pogledno okno), se uporabi kot merilo lista, če MarkupCraft razume njegovo enoto.

### Datoteke, ki se ne odprejo

- PDF, ki zahteva geslo: „‚ime‘ za odpiranje potrebuje geslo. Odprite nezaščiteno kopijo.“
- Poškodovana datoteka ali datoteka, ki ni pravi PDF: „‚ime‘ ni mogoče prebrati kot PDF (…)“.
- PDF, ki se odpre, a je zaščiten pred spremembami, se odpre brez težav. Shranjevanje je zavrnjeno (glejte spodaj).

Ko odprete več datotek hkrati, se tiste, ki delujejo, odprejo, okno z naslovom „Nekatere datoteke niso bile odprte“ pa navede ostale.

## Kaj MarkupCraft shranjuje

Shranjevanje je vedno **prenos** nove datoteke. Spletna stran ne more prepisati datoteke v vašem računalniku, MarkupCraft pa nikoli ne spremeni vaše izvirne datoteke.

| Izberete | Dobite | Opombe |
|---|---|---|
| {{ui:Shrani}} ({{key:Mod+S}}) | „<name> (marked up).pdf“ | Kopija izvirnega PDF-ja z vsako označbo, zapisano kot pravi komentar PDF. Ponovno shranjevanje datoteke „(marked up)“ ohrani isto ime; nikoli ne postane „(marked up) (marked up)“. Glejte [Shranjevanje označenega PDF-ja](topic:save-the-marked-up-pdf). |
| zavihek {{ui:Označbe}}, nato {{ui:CSV}} | „<name> markups.csv“ | Označbe, kot so prikazane (veljajo filtri). |
| zavihek {{ui:Označbe}}, nato {{ui:BCF}} | „<name> markups.bcfzip“ | BCF 2.1 za orodja za usklajevanje BIM, po en posnetek na vsako označbo. Glejte [Osnove BCF](topic:bcf-basics). |
| zavihek {{ui:Pomanjkljivosti}}, nato {{ui:Izvozi CSV}} | „<name> punch list.csv“ | Postavke pomanjkljivosti po številkah. |
| zavihek {{ui:Orodja}}, nato {{ui:Izvozi}} | „MarkupCraft tool chest.json“ | Vaša zbirka orodij, za deljenje ali hrambo. |

„<name>“ je ime prve odprte datoteke PDF brez „.pdf“.

Datoteke CSV se odprejo v katerem koli preglednici. So v kodiranju UTF-8 z oznako, ki jo preglednice pričakujejo, zato so imena s posebnimi znaki pravilno prikazana. Celica, ki se začne z =, +, - ali @, dobi na začetku apostrof, da je preglednica nikoli ne izvede kot formulo.

## Kam gredo prenosi

Vaš brskalnik odloči: navadno mapa Prenosi ali vas vpraša vsakič, če ste tako nastavili. Glejte [Brskalniki in računalniki](common:browsers#what-differs-between-browsers).

:::chromium
Ko shranjujete vse spremenjene datoteke niza hkrati, vas Chrome in Edge lahko vprašata, ali sme to spletno mesto prenesti več datotek. Izberite {{ui:Dovoli}}, sicer dobite samo prvo kopijo.
:::

:::safari
Na iPadu Safari vpraša pred vsakim prenosom in datoteko shrani v aplikacijo Files, pod Prenosi. Na Macu gre v mapo, nastavljeno v nastavitvah Safarija.
:::

## Na spletu in brez povezave

- **Vaši PDF-ji nikoli ne zapustijo tega računalnika**, na spletu ali brez povezave. Nikjer ni nalaganja.
- Bralnik PDF se naloži, ko prvič odprete PDF („Nalaganje bralnika PDF…“), zapisovalnik PDF pa, ko prvič shranite („Nalaganje zapisovalnika PDF…“) ali odprete datoteko, ki že ima komentarje.
- Z vzpostavljeno povezavo se oba naložita s spletne strani.
- **Za delo brez povezave** izberite v vrstici na vrhu {{ui:Shrani za delo brez povezave}}, medtem ko ste na spletu. Gumb prikazuje „Shranjevanje: N od M“, nato pa „Pripravljeno za delo brez povezave“. Ta kopija vključuje bralnik PDF in zapisovalnik PDF (skupaj približno 6 MB) ter to pomoč, zato odpiranje, označevanje in shranjevanje PDF-jev v tem brskalniku delujejo tudi brez povezave.
- Če gumb prikazuje „Shranjevanje ni uspelo“, nekatere datoteke niso bile prenesene: preverite povezavo in kliknite znova. Če prikazuje „Delo brez povezave ni na voljo“, to okno brskalnika ne more shraniti kopije za delo brez povezave (zasebna okna in nekateri upravljani računalniki); uporabite navadno okno.
- Za posodobitev ali odstranitev kopije kliknite „Pripravljeno za delo brez povezave“ in izberite „Shrani znova (pridobi najnovejšo različico)“ ali „Odstrani kopijo za delo brez povezave“. Več v [Delo brez povezave](common:offline).

:::offline
Brez povezave ste. Če vrstica na vrhu prikazuje „Pripravljeno za delo brez povezave“, vse deluje, tudi shranjevanje. Če ne in še niste shranili v tem zavihku, lahko {{ui:Shrani}} ne uspe s sporočilom „Zapisovalnika PDF ni uspelo naložiti“. Vaše označbe so še vedno v zavihku: pustite ga odprtega, vzpostavite povezavo in znova izberite {{ui:Shrani}}.
:::

## Kaj je treba vedeti

- Veliki nizi načrtov se odprejo počasi: MarkupCraft prebere besedilo vsake strani, da najde številke listov. Vrstica stanja šteje liste med delom.
- Če isti PDF odprete dvakrat, se njegovi listi dodajo dvakrat. Če se to zgodi, zaprite niz in ga znova odprite.
- {{ui:Zapri}} zapre vse odprte datoteke hkrati. Če katera ima neshranjene označbe, vpraša: {{ui:Prekliči}}, {{ui:Zapri brez shranjevanja}} ali {{ui:Najprej shrani kopije}}.
- Shranjevanje v oblak še ni na voljo, namiznih različic pa še ni. Svoje PDF-je hranite skupaj z drugimi projektnimi datotekami in jih varnostno kopirajte kot običajno. Glejte [Kje so vaše datoteke](common:your-files).
