---
title: Izpolnjevanje obrazca PDF
summary: Vpisujte v polja obrazca PDF, označujte kvadratke in izbirajte s seznamov; vrednosti se shranijo v sam obrazec.
keywords: obrazec, obrazci, izpolnljivo, izpolni, izpolnjevanje, acroform, polje, polja, besedilno polje, potrditveno polje, kljukica, izbirni gumb, spustni seznam, seznam, dovoljenje, vloga, obrazec za pregled, obrazec za predložitev, potrditev
from: ab366541
---

Številni PDF-ji imajo obrazec: vloge za dovoljenja, kontrolne sezname pregledov, naslovne liste predložitev. MarkupCraft pokaže polja obrazca in njihove vrednosti ter jih omogoči izpolniti. Vrednosti gredo v lastna polja PDF-ja, zato jih Acrobat in vsak drug bralnik PDF prikažeta in ohranita.

## Izpolnjevanje obrazca

1. Odprite PDF. Če ima obrazec, statusna vrstica pove, koliko polj ima.
2. Izberite {{ui:Izpolni obrazec}} na orodni vrstici (ali pritisnite {{key:F}}). Vsako polje na strani dobi okvirček, v katerega lahko pišete.
3. Kliknite polje in pišite. Označite kvadratke, izberite izbirne gumbe, izbirajte s spustnih seznamov in seznamov. {{key:Tab}} gre na naslednje polje.
4. Če med izpolnjevanjem želite premakniti list, povlecite kamor koli zunaj polj.
5. Ko ste končali, pritisnite {{key:Esc}} ali izberite drugo orodje. Kar ste vpisali, ostane na listu.

Z orodjem {{ui:Izbor}} dvojni klik na polje vklopi {{ui:Izpolni obrazec}} in vas postavi v to polje.

## Shranjevanje izpolnjenega obrazca

Izberite {{ui:Shrani}}. Kopija, ki jo prenesete, ima vaše vrednosti v svojih poljih, vaše označbe pa ob njih. Statusna vrstica pove, koliko polj je izpolnjenih.

Če želite oddati obrazec, ki ga nihče ne more spreminjati, izberite {{ui:Strani}}, nato {{ui:Shrani izravnano kopijo …}}: vrednosti postanejo del strani. Tiskanje naredi enako.

## Dobro je vedeti

- Polje, ki ga PDF zaklene (samo za branje), ni mogoče spremeniti. Njegov okvirček je siv.
- Besedilo do lastne dolžinske omejitve polja se ohrani; dodatni znaki se ne vpišejo.
- Nekateri obrazci nimajo narisanih okvirčkov in gumbov; drugi programi jih prikažejo prazne. MarkupCraft jih nariše, ob shranjevanju pa doda sliko, da se prikažejo povsod.
- Razveljavitev v polju je razveljavitev samega polja: pritisnite {{key:Ctrl+Z}}, medtem ko vpisujete vanj. Razveljavitev označb ne razveljavi vrednosti obrazca.
- Če se vaš brskalnik zapre, se vrednosti, ki ste jih vpisali, vrnejo skupaj z ostalim nedokončanim delom.
- Vrednosti, vpisane v črkah, ki jih standardna pisava PDF ne zna zapisati (na primer kitajske), se shranijo, PDF pa vsakemu bralniku naroči, naj jih nariše sam.
- Polj za podpis in potisnih gumbov tukaj ne izpolnjujete. Za podpis uporabite {{ui:Žig}} in svoj podpis.
- Vrednosti, vpisane v obrazec, še niso deljene v seji v živo.
