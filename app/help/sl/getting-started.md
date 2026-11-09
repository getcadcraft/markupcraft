---
title: Začetek dela: MarkupCraft
summary: Odprite niz načrtov, na list dodajte prvi oblak in opombo ter shranite označeno kopijo.
keywords: začetek, prvi koraki, odpri pdf, pregled, označevanje, rdeči popravki, rdeče pero, niz načrtov, vadnica, hitri začetek
from: 0b1aae4e
---

MarkupCraft je namenjen pregledovanju risb: odprete nize načrtov v PDF-ju, jih označite z oblaki, oblački, besedilom, žigi in meritvami, spremljate stanje vsakega komentarja in shranite kopijo PDF-ja, ki jo lahko prikaže kateri koli bralnik PDF.

Deluje v spletnem brskalniku. Vaši PDF-ji se odprejo v vašem računalniku in se **nikoli ne naložijo**. Shranjevanje prenese novo kopijo; vaša izvirna datoteka se ne spremeni.

:::note
MarkupCraft je v razvoju. Pomoč opisuje različico, ki jo uporabljate. Stvari, ki jih še ne zmore, so navedene v [Kaj še ni izdelano](topic:not-built-yet).
:::

## Kaj potrebujete

- Nedavni Chrome, Edge, Firefox ali Safari na računalniku z Macom, Windowsom ali Linuxom, ali Safari ali Chrome na iPadu. Glejte [Brskalniki in računalniki](common:browsers).
- Eno ali več datotek PDF. Celoten niz načrtov je lahko ena datoteka PDF ali več.
- Miška s kolescem je najbolj udobna. Sledilna ploščica deluje, prav tako zaslon na dotik (glejte [Pregled na iPadu ali zaslonu na dotik](topic:review-on-a-tablet)).

## Vaš prvi pregled v desetih korakih

1. Odprite MarkupCraft v brskalniku. Na sredini zaslona piše „Odprite niz načrtov“.
2. Izberite {{ui:Odpri PDF-je}} (ali {{ui:Odpri}} na levem koncu orodne vrstice ali pritisnite {{key:Mod+O}}), izberite eno ali več datotek PDF in potrdite.
   Datoteke PDF lahko tudi povlečete z računalnika ({{pick:mac=Finder|windows=File Explorer|linux=upravitelj datotek}}) in jih spustite na območje listov.
   Prvič v vrstici stanja na dnu piše „Nalaganje bralnika PDF…“. Nato vsaka stran postane list v seznamu {{ui:Listi}} na levi, prvi list pa zapolni sredino.
3. Kliknite list v seznamu, da ga prikažete. Premikajte kolesce miške nad list, da ga povečate na mestu kazalca.
4. Izberite {{ui:Oblak}} v skupini {{ui:Popravki}} na orodni vrstici (ali pritisnite {{key:C}}).
   Prvič, ko izberete risalno orodje, vas MarkupCraft vpraša za vaše ime. Vpišite ga in izberite {{ui:Shrani}}. Vsaka označba ga zabeleži. (Več v [Nastavite svoje ime avtorja](topic:set-your-name).)
5. Povlecite okvir okoli območja, ki ga želite označiti. Pojavi se rdeč revizijski oblak in je izbran.
6. Izberite {{ui:Oblaček}} v skupini {{ui:Opombe}} (ali pritisnite {{key:K}}). Pritisnite na stvar, na katero kažete, povlecite do mesta, kamor naj pride besedilo, in spustite.
7. Vpišite komentar v polje, ki se pojavi. Za dokončanje kliknite kjer koli zunaj polja (ali pritisnite {{key:Mod+Enter}}).
8. Dvakrat pritisnite {{key:Esc}}: enkrat za počistitev izbora, enkrat za vrnitev na orodje {{ui:Izbor}}. Kliknite oblak. Zavihek {{ui:Lastnosti}} na desni prikaže, kdo ga je naredil, kdaj in njegovo {{ui:Stanje}}.
9. Izberite {{ui:Shrani}} na orodni vrstici (ali pritisnite {{key:Mod+S}}).
   Brskalnik prenese kopijo z imenom, na primer „A-Plans (marked up).pdf“. Vrstica stanja pove, koliko označb je bilo zapisanih.
10. Odprite to kopijo v katerem koli bralniku PDF in preverite: oblak in opomba sta tam kot običajna komentarja PDF z vašim imenom.

Za nadaljnje delo odprite kopijo „(marked up)“ v MarkupCraft. Vaše označbe se vrnejo urejljive, z njihovimi stanji, odgovori in številkami pomanjkljivosti.

## Na spletu in brez povezave

:::online
Na spletu ste. MarkupCraft naloži svoj bralnik PDF, ko prvič odprete PDF, in zapisovalnik PDF, ko prvič shranite. Za delo brez povezave kasneje (na obisku na gradbišču, v letalu) izberite {{ui:Shrani za delo brez povezave}} v vrstici na vrhu zdaj in počakajte na „Pripravljeno za delo brez povezave“. Kopija vključuje bralnik in zapisovalnik, zato odpiranje in shranjevanje PDF-jev delujeta tudi brez povezave. Glejte [Delo brez povezave](common:offline).
:::

:::offline
Brez povezave ste. Če vrstica na vrhu piše „Pripravljeno za delo brez povezave“, je MarkupCraft shranjen za uporabo brez povezave v tem brskalniku in vse deluje: odpiranje, označevanje, merjenje, shranjevanje. Če ne, uporabite tisto, kar se je že naložilo v tem zavihku, in ne osvežujte strani, dokler ne boste znova na spletu. Glejte [Delo brez povezave](common:offline).
:::

## Kaj aplikacija pomni in česa ne

- **Vaše označbe so v PDF-ju, ki ga shranite.** Nič se ne hrani na strežniku. Aplikacija sama ne shrani PDF-ja, vendar do vaše shranitve hrani kopijo za obnovitev v tem brskalniku. Shranite pred zaprtjem zavihka; brskalnik vas vpraša, če poskusite oditi z neshranjenimi označbami (razen na iPadu, glejte [Pregled na iPadu ali zaslonu na dotik](topic:review-on-a-tablet)).
- **Vaše ime, slogi orodij in zbirka orodij** ostanejo v tem brskalniku na tem računalniku. Drug brskalnik ali računalnik začne znova, brisanje podatkov spletnega mesta v brskalniku pa jih odstrani. Glejte [Kaj ostane v tem brskalniku](topic:browser-storage).
- Shranjevanje v oblak in skupne seje pregleda med ljudmi še nista na voljo.

## Kam naprej

- [Ogled zaslona](topic:workspace)
- [Označevanje lista](topic:mark-up-a-sheet)
- [Kalibracija lista in merjenje](topic:calibrate-and-measure)
- [Prihod iz drugega programa za označevanje](topic:coming-from), če risbe že pregledujete v drugem programu.
