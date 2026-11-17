---
title: Pošljite oznake risarju kot rdeče popravke
summary: Odprte oznake zapišite kot datoteko rdečih popravkov za tistega, ki riše spremembe, nato naložite njegove odgovore, da vsaka oznaka pokaže Sprejeto ali Zavrnjeno.
keywords: rdeči popravki, revizija, risar, sprejmi, zavrni, odgovori, cc-redline, revizijski oblak, uporabi oznake
from: cb099d04
---

Pregled je le pol dela; risba se še vedno mora spremeniti. Datoteka rdečih popravkov prenese vsako odprto oznako risarju, odgovori risarja pa prinesejo rezultat nazaj.

## Pošiljanje

1. Odprite zavihek {{ui:Naloge}} in odprite {{ui:Rdeči popravki za revizijo}}.
2. Vpišite revizijo, na katero se oznake nanašajo (na primer B).
3. Izberite {{ui:Izvozi datoteko rdečih popravkov}}.

Dobite datoteko `.redline.json` z eno postavko za vsako odprto oznako: njen list, njen položaj (kot deleži lista, tako da se ponovni izris v drugi velikosti še vedno ujema, in v točkah), njene besede, avtorja in nit ter njeno nalogo, če jo ima. Komentarji samo za branje iz drugih programov, slike in legende so izpuščeni.

## Odgovori

Risarska stran odgovori na vsako postavko z Sprejeto, Zavrnjeno ali Končano, z opombo, v datoteki `.redline-answers.json`. Izberite {{ui:Naloži datoteko z odgovori …}} in jo izberite: vsaka oznaka dobi to stanje in risarjevo opombo v svoji niti, naloga, katere oznaka je bila sprejeta ali končana, pa je dokončana. En korak razveljavitve vzame vse odgovore nazaj.

Datoteka je opisana v `docs/REDLINE-FORMAT.md`. Sistem CadCraft (branje paketa, sprejemanje ali zavračanje vsake postavke, revizijski oblaki in dnevnik) se gradi ločeno.
