---
title: Ogled zaslona
summary: Orodna vrstica, seznam listov, območje lista, pet podoken na desni in vrstica stanja po njihovih imenih na zaslonu.
keywords: zaslon, postavitev, orodna vrstica, podokna, stranska vrstica, sličice, lastnosti, vrstica stanja, vmesnik, celozaslonski način, tema, temni način
from: 18d82de6
---

MarkupCraft zapolni okno brskalnika. Od zgoraj navzdol in z leve proti desni:

## Zgornja vrstica

Tanka vrstica nad vsem pripada družini CadCraft, ne samemu MarkupCraftu. Vsebuje:

- ime aplikacije in katera različica teče,
- {{ui:O programu MarkupCraft}}, ki odpre stran aplikacije na spletnem mestu,
- {{ui:Pomoč}}, ki odpre to pomoč v stranskem podoknu (ali pritisnite {{key:F1}}),
- {{ui:Shrani za delo brez povezave}}, ki v tem brskalniku ohrani MarkupCraft, njegov bralnik in zapisovalnik PDF ter to pomoč, da se odpre brez povezave; nato piše „Pripravljeno za delo brez povezave“ (glejte [Delo brez povezave](common:offline)),
- gumb za način zaslona ({{ui:Celozaslonski način}}), in
- {{ui:Nastavitve}} (ali {{key:Mod+,}}), z zavihkom {{ui:MarkupCraft}} za nastavitve te aplikacije in {{ui:Splošno}} za tiste, ki si jih delijo vse aplikacije CadCraft (glejte [Nastavitve MarkupCraft](topic:settings)), in
- {{ui:Papir}} in {{ui:Model}}, svetla in temna tema. V {{ui:Model}} so listi narisani svetlo na temnem; vaše označbe ohranijo svoje barve.

Gumb za način zaslona ali {{key:Ctrl+Shift+F}} preklaplja med tremi načini: normalnim, celozaslonskim in celozaslonskim z skritimi vrsticami. Ko so vrstice skrite, premaknite kazalec na zgornji rob zaslona (ali se tam tapnite), da se vrnejo. Ta bližnjica na vseh računalnikih uporablja tipko Control, tudi na Macu.

:::note
Na celem zaslonu {{key:Esc}} tudi povzroči, da brskalnik zapusti celozaslonski način. Če ste hoteli samo preklicati risbo, znova pritisnite {{key:Ctrl+Shift+F}}, da se vrnete v celozaslonski način.
:::

## Orodna vrstica

Pod zgornjo vrstico so orodja razvrščena v skupine in označena:

| Skupina | Gumbi |
|---|---|
| Datoteka | {{ui:Odpri}}, {{ui:Shrani}}, {{ui:Zapri}} |
| Izbor | {{ui:Izbor}}, {{ui:Pomik}} |
| Risanje | {{ui:Pisalo}}, {{ui:Poudarek}}, {{ui:Črta}}, {{ui:Puščica}}, {{ui:Pravokotnik}}, {{ui:Elipsa}}, {{ui:Polilinija}}, {{ui:Mnogokotnik}} |
| Popravki | {{ui:Oblak}}, {{ui:Prosti oblak}} |
| Opombe | {{ui:Oblaček}}, {{ui:Besedilo}}, {{ui:Opomba}}, {{ui:Žig}} |
| Merjenje | {{ui:Kalibriraj}}, {{ui:Dolžina}}, {{ui:Površina}}, {{ui:Štetje}} |
| Urejanje | {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}} in {{ui:Več}}: {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji}}, {{ui:Izbriši}}, {{ui:Izberi vse}}, {{ui:Prekliči izbor}} |

Orodje, ki ga uporabljate, izgleda pritisnjeno. Zadržite kazalec nad gumbom, da vidite njegovo tipko (na primer „Pravokotnik (R)“); meni {{ui:Več}} ob vsakem ukazu navaja njegovo tipko. Gumbi, ki trenutno ne morejo delovati, so zatemnjeni: {{ui:Kopiraj}}, dokler ne izberete označbe, in {{ui:Prilepi}}, dokler nič ni kopirano. Majhna pika za {{ui:Shrani}} pomeni, da nekatere označbe še niso shranjene. Celoten seznam tipk je v [Tipkovnica in miška](topic:keyboard).

Orodje ostane vklopljeno tudi po risanju, zato lahko narišete več oblakov zapored. Pritisnite {{key:Esc}} (dvakrat, če je nova označba še izbrana) ali {{key:V}}, da se vrnete na {{ui:Izbor}}.

## Seznam listov (levo)

{{ui:Listi}} našteje vsako stran vsakega odprtega PDF-ja. Vsaka vrstica prikazuje majhno sliko lista, njegovo ime, številko lista ali datoteko in stran ter število označb. Število za naslovom je število listov.

- Kliknite vrstico, da prikažete ta list.
- Vpišite v {{ui:Išči po listih}}, da filtrirate po imenu lista, številki lista ali imenu datoteke. Pritisnite {{key:Enter}}, da odprete prvi zadetek.

Imena listov pridejo iz PDF-ja, če jih ima. Glejte [Odprite niz načrtov in se premikajte med listi](topic:open-a-plan-set).

## Območje lista (sredina)

List, ki ga obdelujete. Preden je odprto kaj, piše „Odprite niz načrtov“ z gumbom {{ui:Odpri PDF-je}}. Datoteke PDF spustite kamor koli sem, da jih odprete.

Pod listom je ozka vrstica, ki ima:

- puščici za prejšnji in naslednji list ter „3 od 12: A-101 — Tloris“ (zadržite kazalec nad njim, da vidite datoteko in stran),
- oddaljevanje, polje za povečavo (vpišite odstotek in pritisnite {{key:Enter}}; 100 % je dejanska velikost na običajnem zaslonu) in približevanje,
- {{ui:Prilagodi strani}} in {{ui:Prilagodi širini}}.

Vsak list si med odprtim nizom zapomni svojo povečavo.

Ko primerjate dva lista, se tu pojavi legenda: „Samo na starem listu“, „Samo na novem listu“ in „Na obeh“. Glejte [Primerjava dveh revizij](topic:compare-revisions).

## Podokna (desno)

Pet zavihkov:

| Zavihek | Kaj prikazuje |
|---|---|
| {{ui:Lastnosti}} | Izbrana označba: avtor, datumi, izmerjene vrednosti, stanje, zadeva, besedilo, komentar, slog, njeni odgovori in številka pomanjkljivosti. Z vklopljenim risalnim orodjem in brez izbora nastavitve, ki jih bodo uporabile nove označbe. Brez izbora in z vklopljenim {{ui:Izbor}} prikaže list: številko, naslov, od kod je bilo ime prebrano, velikost papirja, merilo in {{ui:Preimenuj list}}. |
| {{ui:Označbe}} | Vsaka označba v odprtem nizu, s filtri ter izvozoma {{ui:CSV}} in {{ui:BCF}}. Glejte [Seznam označb](topic:markups-list-and-export). |
| {{ui:Pomanjkljivosti}} | Oštevilčene postavke pomanjkljivosti z zadolženo osebo, rokom in stanjem. Glejte [Izdelava seznama pomanjkljivosti](topic:punch-list). |
| {{ui:Orodja}} | Zbirka orodij: shranjena, oblikovana orodja. Glejte [Zbirka orodij](topic:tool-chest). |
| {{ui:Primerjava}} | Prekrijte dva lista. Glejte [Primerjava dveh revizij](topic:compare-revisions). |

## Vrstica stanja (spodaj)

- Levo, kjer je kazalec na listu, v palcih (ali milimetrih, v [Nastavitvah](topic:settings)) na papirju.
- Na sredini sporočila: kaj orodje pričakuje naslednje, kaj je bilo pravkar shranjeno, zakaj je bilo nekaj zavrnjeno. **Preberite jo, ko se nekaj ne zgodi.**
- Gumb za merilo lista („Ni kalibrirano“ ali merilo). Kliknite ga, da nastavite merilo. Glejte [Kalibrirajte list in merite](topic:calibrate-and-measure).
- Vaše ime („Nastavite svoje ime“, dokler ga ne vpišete). Kliknite ga, da ga spremenite.

## Na majhnem zaslonu

Pod približno 1180 px v širino se podokna zožijo in slike listov se skrčijo. Na zaslonu velikosti telefona se deli zložijo: orodna vrstica (drsite jo vstran), list, vrstica stanja, podokna, nato seznam listov na dnu. Tablica v ležečem položaju ohrani celotno postavitev.
