---
title: Îmbinarea modificărilor a doi oameni dintr-un PDF
summary: Lăsați git, Fossil sau Mercurial să îmbine două copii adnotate ale aceluiași PDF, adnotare cu adnotare, inclusiv notele.
keywords: îmbinare, git, fossil, mercurial, control al versiunilor, conflict, trei căi, cadcraft merge, gitattributes, adnotări, note, echipă, două copii
from: a450a9ef
---

Două persoane adnotează același PDF în două copii. Dacă au atins adnotări diferite, copiile pot fi îmbinate de un program, în loc să fie îmbinate manual.

## Ce face să funcționeze

Fiecare adnotare salvată de MarkupCraft poartă propriul nume (id-ul ei) în interiorul PDF-ului, iar numele nu se schimbă niciodată. Îmbinarea caută adnotările după acest nume, nu după locul lor în fișier, pentru că fiecare program renumerotează locurile când salvează. Notele și notele private sigilate sunt potrivite în același fel.

Foile nu sunt atinse niciodată: ambele copii trebuie să aibă același număr de pagini. Dacă diferă, îmbinarea păstrează copia locală așa cum este și o spune, pentru că adăugarea sau scoaterea de pagini este treabă pentru o persoană.

## Configurare

Git are nevoie de două linii, o singură dată pentru fiecare depozit:

```
# .gitattributes
*.pdf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Fără git, rulați `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil și Mercurial primesc aceleași trei fișiere în propria lor setare pentru instrumentul de îmbinare. Fișierul de sarcini care însoțește un desen (`<name>.markups.json`, vezi [Adnotări care acționează](topic:markups-that-act)) se îmbină la fel, ca text simplu.

## Regulile

- O adnotare modificată doar pe o parte este preluată. Aceeași modificare pe ambele părți este preluată o singură dată.
- Aceeași adnotare modificată în două feluri este un **conflict**: partea locală rămâne, iar raportul listează ambele. Deschideți rezultatul și reparați manual adnotarea respectivă.
- O adnotare adăugată pe oricare parte este păstrată. Una scoasă pe o parte și neatinsă pe cealaltă este eliminată. Scoasă pe o parte și modificată pe cealaltă: eliminată și raportată.
- Straturile, coloanele, înregistrările și notele urmează aceleași reguli.
- Notele private sigilate nu sunt deschise niciodată: blocurile ambelor părți sunt păstrate așa cum sunt.

Fișierul îmbinat este o rescriere completă a copiei locale, ca Salvarea proprie a MarkupCraft. Nimic nu este încărcat; totul rulează pe calculator.
