---
title: Shranjevanje PDF-datoteke z označbami
summary: Prenesite kopijo z vsemi označbami, zapisanimi kot standardni komentarji PDF, preverite, kaj vidijo drugi bralniki PDF, in nadaljujte delo pozneje.
keywords: shrani, prenesi, izvoz pdf, z označbami, označbe, komentarji, deljenje, pošlji, zadeva, nadaljevanje dela, znova odpri, dvosmerna izmenjava, natisni
from: 4c198ebe
---

## Shranjevanje

1. Na orodni vrstici izberite {{ui:Shrani}} ali pritisnite {{key:Mod+S}}.
2. Če je odprtih več datotek, izberite {{ui:Ta datoteka}} (datoteka lista, na katerem ste) ali {{ui:Vse spremenjene datoteke}}. Vsaka kopija se prenese posebej.
3. Počakajte, da se konča „Shranjevanje <file>…“. Prvo shranjevanje v seji naloži tudi zapisovalnik PDF.

Rezultat: vaš brskalnik prenese „<name> (marked up).pdf“, vrstica stanja pa to sporoči: „Shranjeno: A-Plans (marked up).pdf (24 označb, 18.2 MB). Izvirna datoteka je nespremenjena.“ Pika za {{ui:Shrani}} izgine.

**Vaša izvirna datoteka PDF se nikoli ne spremeni.** MarkupCraft ustvari novo datoteko. Kje se shrani, je odvisno od nastavitev prenosov v vašem brskalniku (glejte [Datoteke, ki jih MarkupCraft odpre in shrani](topic:files#where-downloads-go)).

## Nadaljevanje dela pozneje

Naslednjič odprite kopijo „(marked up)“, ne izvirnika. Vse se vrne v urejanje: označbe, stanja, odgovori, točke pomanjkljivosti, merilo vsakega lista in imena listov, ki ste jih vpisali. Če shranite znova, se prenese datoteka z enakim imenom „(marked up)“; brskalnik lahko doda številko, na primer „(1)“, če je stara datoteka še v mapi. Stare kopije zamenjajte ali uredite sami.

MarkupCraft PDF ne shrani sam od sebe. Med delom v tem brskalniku hrani kopijo za obnovo, zato sesutje ali zaprt zavihek ne izgubita vaših označb: naslednjič, ko odprete MarkupCraft, vas vpraša „Obnovite svoje delo?“. Glejte [Obnovite svoje delo](common:recover). Vseeno shranite, preden zaprete; če poskusite zapustiti stran z neshranjenimi označbami, brskalnik najprej vpraša „Zapustiti spletno mesto?“ (iPad Safari tega ne stori).

## Kaj vidijo drugi bralniki PDF

Vsaka označba je zapisana kot standardni komentar PDF (opomba) s svojo risbo, zato jo vsak bralnik PDF prikaže, natisne in izpiše na seznamu komentarjev:

- **Videz je enak** kot v MarkupCraft: revizijski oblaki z loki, puščice, žigi, pike štetja, oznake številk točk pomanjkljivosti, oznake meritev.
- **Podrobnosti so standardne:** avtor, datum, zadeva, besedilo komentarja in barve.
- **Revizijski oblaki** so komentarji pravokotnika ali mnogokotnika z oblačnim robom; **besedilna polja** in **oblački** so komentarji besedilnih polj; **opombe** so lepljivi zapiski; poteze **peresa** in **označevalnika** so črnilo; **žigi** so komentarji žigov.
- **Dolžine in površine** so komentarji meritev, vsak kalibriran list pa nosi svoje merilo, zato lahko bralniki, ki razumejo meritve, prikažejo vrednosti.
- **Odgovori** so odgovori na komentar, **stanja** pa so stanja pregleda (Odprto se prikaže kot brez stanja).
- **Številke listov**, ki ste jih vpisali, postanejo oznake strani, ki jih prikazujejo drugi bralniki.

Nekatere stvari lahko prebere samo MarkupCraft: odgovorna oseba in rok točke pomanjkljivosti, stanje točke in nekateri slogovni podatki. Drugi programi jih ohranijo, razen če komentar prepišejo.

V drugem programu je komentarje mogoče premikati ali urejati kot vse druge. Če to kdo stori in pošlje datoteko nazaj, MarkupCraft ob odpiranju uporabi novi položaj komentarja.

Podrobnosti: [Kaj je shranjeno v PDF](topic:what-the-pdf-keeps).

## Znaki, ki se natisnejo kot „?“

Besedilo označb je zapisano s standardno pisavo Helvetica, ki jo ima vsak bralnik PDF. Pokriva angleške in zahodnoevropske črke (é, ñ, ü, ø in podobne), ne pa drugih pisav, simbolov zunaj tega nabora ali emojijev. Ti znaki se v MarkupCraft prikažejo pravilno, v shranjeni kopiji pa se natisnejo kot „?“. Shranjevalno sporočilo jih šteje: „3 znaki zunaj zahodnoevropskega nabora se v kopiji natisnejo kot "?".“ Zapišite take besede celo ali uporabite preprosto nadomestilo (na primer „dia.“ za znak za premer).

## Datotek ni mogoče shraniti

- **Zaščiteni PDF:** „Ta PDF je zaščiten (šifriran), zato kopije z označbami ni mogoče zapisati. Zahtevajte nezaščiteno kopijo.“ Še vedno ga lahko pregledujete na zaslonu ter izvozite CSV in BCF.
- Če shranjevanje ne uspe iz drugega razloga, se prikaže okno „Ni mogoče shraniti <file>“ z razlogom. Vaše označbe so še vedno v zavihku; nič ni izgubljeno, dokler ga ne zaprete.

## Izravnava in tiskanje

Izravnava (vpis označb v stran) in ukaz za tiskanje še nista na voljo. Za tiskanje odprite shranjeno kopijo v poljubnem bralniku PDF in tiskajte s prikazanimi komentarji.
