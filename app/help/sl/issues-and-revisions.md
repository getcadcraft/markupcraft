---
title: Izdaje, revizije in dnevnik sprememb risb
summary: Vzdržujte eno zgodovino izdaj z modelom arhitekta: preberite izdaje, zabeležite navodila za gradbišče, delavniške risbe in povezane modele glede na izdajo ter preberite dnevnik sprememb risb.
keywords: izdaja, revizija, revizije, dnevnik sprememb, dnevnik sprememb risb, register risb, navodilo za gradbišče, delavniška risba, povezani model, razpis, gradnja, zgodovina izdaj, revizijski oblak, oblak, nabor označb
from: e4688f64
---

## Kaj boste naredili

Delajte iz iste zgodovine izdaj kot preostala ekipa. Poglejte, kateri listi so izšli pri kateri reviziji, in zabeležite, kaj se zgodi na gradbišču, glede na izdajo, ki ji to pripada.

## Koraki

1. Odprite **Izdaje in revizije**.
2. Izberite **Preberi zgodovino izdaj** in izberite datoteko `.issues.json`, shranjeno iz BimCraft ali drugega programa. Njene izdaje in zapisi se dodajo vašim. Nič se ne nadomesti.
3. Izberite **Dodaj zapis** za navodilo za gradbišče, delavniško risbo, nabor označb, povezani model ali opombo. Izberite izdajo, na katero se nanaša, in njeno stanje. Izbrana datoteka se zabeleži po imenu, velikosti in SHA-256; datoteka ostane tam, kjer je.
4. **Dnevnik sprememb risb** prikaže eno vrstico za vsak list in en stolpec za vsako izdajo. Revizija v oklepaju je bila ponovno izdana nespremenjena.
5. **Prenesi dnevnik sprememb (CSV)** shrani izdaje, preglednico listov in zapise. **Shrani zgodovino izdaj** zapiše datoteko, ki jo berejo drugi programi.

## Dobro je vedeti

- **Zabeleži izbrane označbe** postavi izbrane označbe k zadnji izdaji. Oblak se zabeleži kot revizijski oblak pri reviziji te izdaje. Izberite **Pokaži** ob zapisu, da skočite nanj.
- **Zabeleži izdajo** izda vaše označene liste. **Spremembe od** nato pove, kateri listi so bili označeni po tej izdaji.
- Zgodovina je shranjena znotraj označenega PDF-ja. Ni del razveljavitve.
- Branje iste datoteke dvakrat ničesar ne doda dvakrat. Ko imata dve kopiji isti zapis, se obdrži novejši.
