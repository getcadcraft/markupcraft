---
title: Kaj je novega v različicah 0.8 in 0.8.1
summary: Označbe, ki postanejo naloge in se same zaprejo, navaden seznam sprememb med revizijami, glasovne opombe in odločitve na načrtu, datoteke rdečih popravkov za risarja ter skupne spremembe različice 0.8: vhodne naprave, vrstice orodne vrstice, Težave, več jezikov.
keywords: kaj je novega, opombe ob izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove funkcije, naloga, naloge, zadolžena oseba, rok, zamujeno, preveri zdaj, kaj se je spremenilo, revizije, primerjava, glasovna opomba, odločitev, rdeči popravki, datoteka z odgovori, risar, pomočnik, mcp, težave, jeziki, vhodne naprave, sledilna ploščica, vrstice orodne vrstice, mreža lastnosti, posodobitev
from: 40368796
---

To je, kaj se je spremenilo v MarkupCraft 0.8 in 0.8.1 v primerjavi z 0.7. Največja novost je, da je lahko označba naloga, ki jo opravi nekdo ali vaš lastni pomočnik, in se zaključi sama, ko se risba res spremeni.

## Novo

### Označbe, ki delujejo

- **Označbo spremenite v nalogo.** Izberite eno ali več označb, odprite zavihek {{ui:Naloge}} in izberite {{ui:Izbrano spremeni v nalogo}}. Naloga ima naslov, osebo ali vašega povezanega pomočnika, ki jo opravi, izbirni rok in stanje; ohrani svoj položaj na listu in svojo nit. Glejte [Označbo spremenite v nalogo](topic:markups-that-act).
- **Naloge, ki se zaprejo same.** Naloga lahko spremlja risbo znotraj svoje označbe. Odprite novejšo revizijo lista in izberite {{ui:Preveri zdaj}}: če so se črte na tem območju spremenile za več kot las, je naloga označena kot Opravljeno, njena označba postane Dokončana, v niti pa opomba pove, kaj se je spremenilo. Nov datumski žig ali črte, ki so se premaknile za manj kot 1.5 točke, se ne štejejo. Naloga lahko namesto tega spremlja element modela: vaš pomočnik poroča o elementu z `tasks_check`, poročilo, ki se razlikuje, ali izbrisan element pa zaprejo nalogo. En korak razveljavitve jo znova odpre.
- **Poiščite delo.** Filtrirajte seznam {{ui:Naloge}} po stanju in po tem, za koga je, vključno z {{ui:Zamujeno}}; izberite {{ui:Zadolženo}}, nato {{ui:Pomočnik}}, da vidite, kaj čaka na vašega pomočnika. Naloga, ki je po svojem roku, se prikaže kot opozorilo na podoknu Težave. {{ui:CSV}} izvozi seznam. Naloge so shranjene v PDF-ju skupaj z označbo in se prek Live potujejo kot druge lastnosti označb.

### Kaj se je spremenilo, kot navaden seznam

- **Navedi spremembe.** Odprite zavihek {{ui:Primerjava}}, nato {{ui:Primerjaj celoten komplet}}, izberite prejšnjo in novejšo datoteko ter izberite {{ui:Navedi spremembe}}. Seznam se začne s številom, nato pa pokrije vsak spremenjen list, največja sprememba najprej: kje na listu, kako velika (v dejanskih enotah in tudi v palcih na papirju na kalibriranem listu), ali so bile črte dodane ali odstranjene, koliko označb je tam in katere besede so se pojavile ali izginile. {{ui:Kopiraj seznam}} ga da na odložišče, {{ui:CSV}} pa zapiše eno vrstico na spremembo. Glejte [Seznam sprememb med revizijami z besedami](topic:what-changed-in-words).

### Glasovne opombe in odločitve

- **Glasovne opombe.** Na zavihku {{ui:Zapiski}} izberite {{ui:Posnemi glasovno opombo}}, nato {{ui:Ustavi snemanje}}; snemanja se sama ustavijo po dveh minutah. Opomba je pripeta v središče lista, povlečete jo tja, kamor sodi, napis vpišete v {{ui:Lastnosti}}, {{ui:Predvajaj}} na seznamu pa jo predvaja. Posnetek je shranjen znotraj PDF-ja.
- **Odločitve.** {{ui:Pripni odločitev}} na list zapiše stavek ali dva. Če nadomešča prejšnjo odločitev, izberite to v {{ui:Nadomešča}}: stara ostane, označena kot Nadomeščeno, in kaže na novo. En korak razveljavitve jo vrne. Glejte [Pripenjanje glasovnih opomb in odločitev na list](topic:voice-notes-and-decisions).

### Rdeči popravki za revizijo

- **Pošljite in odgovorite.** Na zavihku {{ui:Naloge}} odprite {{ui:Rdeči popravki za revizijo}}, vpišite revizijo, na katero se nanašajo označbe, in izberite {{ui:Izvozi datoteko rdečih popravkov}}. Dobite datoteko `.redline.json` z eno postavko za vsako odprto označbo: list, položaj (kot deleži lista, da se ponovni izris v drugi velikosti še vedno ujema), besede, avtor, nit in njena naloga. Kdo riše spremembe, odgovori z Sprejeto, Zavrnjeno ali Opravljeno v datoteki `.redline-answers.json`; {{ui:Naloži datoteko z odgovori …}} da vsaki označbi to stanje in opombo risarja kot en korak razveljavitve. Glejte [Pošiljanje označb risarju kot rdeči popravki](topic:redline-to-revision).

### Pomočnik z umetno inteligenco

- **Več orodij.** Pomočnik, ki ste ga povezali prek CadCraft Studio, lahko našteje naloge (`tasks_list`), ustvari ali spremeni eno (`task_set`), odstrani nalogo (`task_clear`), preveri eno glede na novejšo revizijo ali element (`tasks_check`) in prebere navaden seznam sprememb med dvema odprtima nizoma načrtov (`revisions_changes`). Dobi samo orodja, ki ste jih označili pod stikalom {{ui:Pomočniki}}, vsaka sprememba pa je en korak razveljavitve. Glejte [Uporaba MarkupCraft s pomočnikom z umetno inteligenco](topic:use-with-ai-assistants).

## V vseh aplikacijah

- **Jeziki.** CadCraft Studio ima zdaj 54 jezikov. Deset je novih: litovščina, latvijščina, bosanščina, maratščina, telugu, albanščina, afrikanščina, filipinščina, svahili in uzbeščina. Vsi neangleški so strojni osnutki, dokler jih ne prebere izvorni govorec.
- **Vhodne naprave.** {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Vhodne naprave}} določa, kaj naredijo sledilna ploščica, stranska gumba miške, pisalo, dotiki s prsti, 3D miška, igralni krmilnik ali MIDI krmilnik, za vse aplikacije ali samo za to. Dokler nič ne spremenite, vsaka naprava deluje kot prej. Glejte [Uporaba sledilne ploščice, 3D miške ali krmilnika](common:input-devices).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} ima {{ui:Prelom}} (privzeto), {{ui:2 vrstici}} in {{ui:1 vrstica}}, tako da ima risba več prostora. Glejte [Razporeditev podoken](common:arrange-panels).
- **Mreža lastnosti.** Polja Slog označbe uporabljajo skupno mrežo, z zložljivimi kategorijami ter stolpci za oznako in vrednost.
- **Podokno Težave.** Opozorila iz aplikacije, na primer naloga po roku, se zbirajo v enem podoknu Težave.
- **Live in dodatki.** Seje Live so opisane v [Skupno delo v živo](common:work-together-live); seznam dodatkov, ki sledi vašemu računu, je v [Dodatki in seznam vašega računa](common:addons-basics).
- **Povežite svojo umetno inteligenco.** CadCraft Studio je zbirališče za vašega lastnega pomočnika: povežite ga enkrat za vseh osem aplikacij. Aplikacije same nimajo nobene umetne inteligence.

## Popravljeno v 0.8.1

- **Studio lahko med delovanjem zamenja jezik.** Prej sta namizna aplikacija in zapakirane izdaje ostali v angleščini. To še ni preizkušeno na vseh platformah: sporočite, če se jezik ne spremeni.
- Namestitve Studia 0.8 dobijo 0.8.1 prek {{ui:Nastavitve}} › {{ui:Posodobitve}}.

## Še ni v tej različici

- **Ni podpisano s kodo.** Namestitveni programi za Windows in datoteke .dmg za macOS še nimajo podpisa. Na Windowsu, če SmartScreen ustavi namestitev, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odpri}}. Izdaje za trgovine so zadržane.
- **Povezava z umetno inteligenco je mestoma nedokončana.** Povezovanje z enim klikom znotraj Studia, gostujoči konektor za spletne pomočnike in lasten API ključ znotraj Studia za to izdajo niso zagotovljeni. Zanka nalog je bila preizkušena, vendar še ne s pravim pomočnikom.
- **Preverjanja nalog potrebujejo enako velikost strani.** List, ponovno izrisan v drugi velikosti, se ne ujema, zato se njegove naloge ne zaprejo. Listi se povezujejo po številki lista, sicer po položaju strani.
- **Glasovne opombe so samo posnetki.** Prepisa ni, pomočnik pa vidi dolžino opombe, avtorja in napis, ne zvoka. Snemanje je bilo preizkušeno z lažnim mikrofonom v brezglavem brskalniku; pravi mikrofon na telefonu, tabličnem ali prenosnem računalniku je še treba preveriti.
- **Izračunski listi in razlogi v PDF-ju** so shranjeni v zasebnem vnosu datoteke. Starejši MarkupCraft ta vnos prezre in ga ob naslednjem shranjevanju zavrže, zato datoteko takšne vrste odprite in shranite z 0.8 ali novejšim.
- **Risarjeva stran rdečih popravkov.** CadCraft, ki bere datoteko rdečih popravkov in nanjo odgovarja, še ni izdelan.
- **Drugi jeziki.** Vrstica aplikacije v tamilščini je široka za 528 px.

Vse ostalo je v [Kaj še ni izdelano](topic:not-built-yet). Za prejšnjo izdajo glejte [Kaj je novega v različici 0.7](topic:whats-new-0-7).
