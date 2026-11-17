---
title: Pregled na iPadu ali zaslonu na dotik
summary: Stiskajte, premikajte in rišite s prsti ali pisalom, kaj se izvede ob dvigu, kaj potrebuje tipkovnico in kako varno hranite delo na tabličnem računalniku.
keywords: ipad, tablični računalnik, dotik, zaslon na dotik, stiskanje, povečava, dva prsta, Apple Pencil, pisalo, prst, teren, gradbišče, Surface, kretnje, mobilno
from: 91eb6438
---

MarkupCraft deluje z dotikom: na iPadu (Safari ali Chrome), na prenosnem računalniku z zaslonom na dotik ali na tabličnem računalniku Windows ali Android z novim brskalnikom. V ležečem položaju tablični računalnik prikaže celotno postavitev.

## Kretnje

| Kretnja | Kaj naredi |
|---|---|
| Enojni prst | Riše s trenutnim orodjem ali izbira z {{ui:Izbor}} |
| Dva prsta, razmaknjena ali stisnjena | Povečuje okoli točke med prstoma |
| Dva prsta, premaknjena skupaj | Premika; povečate in premaknete v enem gibu |
| Drugi prst med risanjem | Prekliče, kar je začel prvi prst, in namesto tega začne povečavo |
| Dvakratni dotik ali dotik in zadržanje | Konča polilinijo, mnogokotnik, prosti oblak ali površino |
| Dotik in zadržanje besedila, oblačka ali opombe z {{ui:Izbor}} | Odpre njihovo besedilo za urejanje |
| Enojni prst z vklopljenim {{ui:Pomik}} | Premika |

Na zaslonu na dotik so gumbi orodne vrstice, meniji, zavihki in gumbi pogovornih oken večji, zato jih lahko z prstom laže zadenete.

## Kaj se zgodi ob dvigu

Da prvi prst pri stiskanju nikoli ne pusti sledi, nekatera orodja delujejo, ko **dvignete** prst, ne ob dotiku:

- {{ui:Štetje}}: pika se doda ob dvigu.
- {{ui:Opomba}}: opomba se postavi ob dvigu.
- {{ui:Polilinija}}, {{ui:Mnogokotnik}}, {{ui:Prosti oblak}} in {{ui:Površina}}: vsaka točka se doda ob dvigu.
- {{ui:Črta}}, {{ui:Puščica}}, {{ui:Dolžina}} in {{ui:Kalibriraj}}: ko se dotaknete začetka in nato konca, se konec postavi ob dvigu.

Če se vaš prst premakne več kot malo, preden dvignete, to ni dotik in nič se ne doda. Dotikajte se čisto; za popravek uporabite {{ui:Razveljavi}}.

Orodja, ki jih vlečete ({{ui:Pisalo}}, {{ui:Poudarek}}, {{ui:Oblak}}, {{ui:Pravokotnik}}, {{ui:Elipsa}}, {{ui:Oblaček}}, {{ui:Besedilo}}, {{ui:Žig}}), se začnejo takoj, ko se dotaknete; drugi prst jih prekliče.

## Izbiranje s prstom

- Dotaknite se oznake, da jo izberete; povlecite jo, da jo premaknete; povlecite ročico, da spremenite velikost. Ko se prst dotakne lista, imajo oznake in ročice večjo tarčo, ročice pa se narišejo večje.
- Povlecite čez prazen list, da narišete okno za izbor (od leve proti desni: v celoti znotraj; od desne proti levi: kar se ga dotika).
- V {{ui:Izbor}} en prst lista **ne** premika. Uporabite dva prsta ali izberite {{ui:Pomik}}.

## Stvari, ki potrebujejo tipkovnico

Brez tipkovnice ni {{key:Shift}}, {{key:Esc}} ali {{key:Enter}}. Tukaj je, kaj storiti namesto tega:

| Dejanje s tipkovnico | Brez tipkovnice |
|---|---|
| {{key:Esc}}, da prekličete ali se vrnete na {{ui:Izbor}} | Dotaknite se {{ui:Izbor}} v orodni vrstici |
| {{key:Shift}} za črte pod 45°, kvadrate in krogce | Rišite previdno; prilagodite z ročicami |
| Shift+klik, da dodate v izbor | Uporabite okno za izbor |
| Shift+klik, da odstranite pik štetja | {{ui:Razveljavi}} takoj po napačnem dotiku |
| {{key:Mod+Enter}}, da končate vpisovanje | Dotaknite se zunaj polja za besedilo |
| {{key:Enter}}, da končate polilinijo ali uredite besedilo oznake | Dotik in zadržanje ali {{ui:Uredi na listu}} v {{ui:Lastnosti}} |
| {{key:Delete}} | {{ui:Izbriši}} v orodni vrstici ali v {{ui:Lastnosti}} |
| Začetek nove skupine štetja s {{key:Esc}} | Dotaknite se praznega lista z {{ui:Izbor}}, nato znova izberite {{ui:Štetje}} |

Ohišje za tipkovnico ali tipkovnica Bluetooth vrne vse bližnjice; na iPadu tipka ⌘ deluje za {{key:Mod+Z}} in ostalo.

Opisi gumbov se na dotik ne prikažejo. Tipka za vsako orodje je navedena v [Tipkovnica in miška](topic:keyboard).

## Pisalo in Apple Pencil

Pisalo (Apple Pencil, Surface Pen in podobno) deluje kot miška: riše in izbira ter takoj deluje ob dotiku. Za stiskanje in pomik uporabljajte prste. Pritisk ne spremeni debeline črte.

## Odpiranje in shranjevanje na iPadu

- {{ui:Odpri}} prikaže izbirnik Datotek: iCloud Drive, Na mojem iPadu in vsako aplikacijo za shranjevanje, ki ste jo povezali.
- {{ui:Shrani}} vpraša za prenos; kopija pristane v Datotekah, v mapi Prenosi (ali v mapi, nastavljeni v nastavitvah Safarija).

## Varno hranite delo na tabličnem računalniku

:::warning
iPad Safari vas ne opozori, preden zapustite stran z neshranjenim delom, iPadOS pa lahko v ozadju znova naloži zavihek, da sprosti pomnilnik. MarkupCraft hrani kopijo za obnovo v brskalniku in jo ponudi, ko znova odprete (glejte [Obnovite svoje delo](common:recover)), vendar **shranite po vsakem listu ali po vsakem obhodu**: zasebni zavihek ne hrani kopije.
:::

- Vaše ime, nastavitve orodij in skrinja orodij se hranijo v tem brskalniku na tem iPadu, kot na računalniku. Glejte [Kaj ostane v tem brskalniku](topic:browser-storage).
- **Pred obiskom na terenu brez signala:** dokler ste še na spletu, odprite MarkupCraft v Safariju (ali Chromu) na iPadu in izberite {{ui:Shrani za delo brez povezave}} v vrstici na vrhu. Počakajte, dokler ne piše „Pripravljeno za delo brez povezave“ (šteje „Shranjevanje N od M“; bralnik in pisalnik PDF sta okoli 6 MB). Na terenu odprite isti naslov ali zaznamek nanj: odpiranje, označevanje in shranjevanje datotek PDF delujejo brez povezave. Če piše „Delo brez povezave ni na voljo“, ste v zasebnem zavihku; uporabite običajnega. Glejte [Delo brez povezave](common:offline).
- Safari odstrani kopijo za delo brez povezave, ki je nekaj tednov niste uporabili. Pred potovanjem kliknite „Pripravljeno za delo brez povezave“ in izberite „Shrani znova (pridobi najnovejšo različico)“.
- Zelo veliki kompleti listov porabijo veliko pomnilnika. Na tabličnem računalniku odprite samo liste, ki jih potrebujete za obisk.

## Na telefonu

Deluje, vendar je zaslon majhen: deli se zložijo (orodna vrstica, list, vrstica stanja, podokna, nato seznam listov), orodna vrstica pa se pomika vstran. Telefon uporabite za ogled in za hitro opombo, tablični računalnik ali računalnik pa za pravi pregled.
