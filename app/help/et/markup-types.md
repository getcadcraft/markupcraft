---
title: Kõik märgistustüübid
summary: Seitseteist märgistustüüpi, nende klahvid, kuidas neid joonistatakse, nende vaikeväljanägemine ja mis neist saab salvestatud PDF-is.
keywords: märgistustüübid, tööriistade loend, annotatsioonitüübid, pilv, selgitussilt, tekst, märkus, tempel, pliiats, markeerija, joon, nool, ristkülik, ellips, murdjoon, hulknurk, pikkus, pindala, loendus
from: 29bf32e7
---

## Tööriistad

| Tööriistariba | Klahv | Kuidas joonistada | Vaikeväljanägemine | Salvestatud PDF-is |
|---|---|---|---|---|
| {{ui:Pliiats}} | {{key:P}} | Lohista | Punane, 1.5 pt | Tint |
| {{ui:Markeerija}} | {{key:I}} | Lohista | Kollane, 14 pt lai, läbipaistev, värvib selle all oleva | Tint (märgitud markeerija joonena) |
| {{ui:Joon}} | {{key:L}} | Lohista või klõpsa algus ja lõpp | Punane, 2 pt | Joon |
| {{ui:Nool}} | {{key:A}} | Lohista või klõpsa algus ja lõpp | Punane, 2 pt, suletud noolepea lõpus | Joon noolepeaga |
| {{ui:Kaar}} | {{key:O}} | Klõpsa algus, punkt kaarel, seejärel lõpp | Punane, 2 pt | Murdjoon mööda kaart |
| {{ui:Ristkülik}} | {{key:R}} | Lohista kast | Punane, 2 pt, täidet pole | Ruut |
| {{ui:Ellips}} | {{key:E}} | Lohista kast | Punane, 2 pt, täidet pole | Ring |
| {{ui:Murdjoon}} | {{key:Y}} | Klõpsa punkte, topeltklõps lõpetab | Punane, 2 pt | Murdjoon |
| {{ui:Hulknurk}} | {{key:G}} | Klõpsa punkte, topeltklõps lõpetab | Punane, 2 pt, täidet pole | Hulknurk |
| {{ui:Pilv}} | {{key:C}} | Lohista kast | Punane, 1.5 pt kaared | Ruut pilvise äärisega |
| {{ui:Vabakäeline pilv}} | {{key:Shift+C}} | Klõpsa punkte, topeltklõps lõpetab | Punane, 1.5 pt kaared | Hulknurk pilvise äärisega |
| {{ui:Selgitussilt}} | {{key:K}} | Vajuta punkti peale, lohista teksti juurde, kirjuta | Punane tekst ja juhtjoon, 1 pt, 12 pt tekst | Tekstikast selgitussildi juhtjoonega |
| {{ui:Tekst}} | {{key:T}} | Klõpsa või lohista kast, kirjuta | Punane 12 pt tekst, ilma raamita | Tekstikast |
| {{ui:Märkus}} | {{key:N}} | Klõpsa, kirjuta | Kollane märkuse ikoon | Kleeppaber |
| {{ui:Tempel}} | {{key:S}} | Vali tempel, klõpsa või lohista | Raamitud suurtähed ja „Autor <name>, <date>“; värvitud tähenduse järgi | Tempel |
| {{ui:Pikkus}} | {{key:M}} | Klõpsa algus ja lõpp (vajab mõõtkava) | Sinine mõõtejoon kriipsude ja pikkusega | Joon, märgitud mõõtmena, koos mõõdetulemusega |
| {{ui:Nurk}} | {{key:X}} | Klõpsa ühe haru ots, nurk, seejärel teise haru ots | Sinised harud, väike kaar nurga juures ja nurk kraadides | Murdjoon, mille tekst on nurk |
| {{ui:Pindala}} | {{key:Q}} | Klõpsa nurki, topeltklõps lõpetab (vajab mõõtkava) | Sinine äär, helesinine täide, pindala ja ümbermõõt | Hulknurk, märgitud alana, koos mõõdetulemusega |
| {{ui:Loenda}} | {{key:U}} | Klõpsa iga üksus | Oranžid nummerdatud täpid ja silt „grupp: n“ | Üks tindikommentaar grupi kohta, rõngas iga üksuse kohta |

Puuteekraanil tähendab „topeltklõps lõpetamiseks“ topeltpuudutust ja „klõps“ on puudutus, mis toimib sõrme tõstmisel (punktide, märkuste ja loenduste puhul).

## Mida igal märgistusel on

| Väli | Kus seda näed |
|---|---|
| Autor | {{ui:Omadused}}, loend, templi teine rida, teised PDF-vaatajad |
| Loodud ja muudetud | {{ui:Omadused}} (sinu ajavööndis), loend, CSV |
| Staatus | Avatud, Aktsepteeritud, Tagasi lükatud või Lõpetatud |
| Teema | Lühike silt; vaikimisi liik („Pilv“, „Tekstikast“, „Pikkuse mõõtmine“) |
| Kommentaar | Pikemad märkmed. Märkuse puhul on selle tekst tema kommentaar. |
| Tekst | Ainult tekstikastid ja selgitussildid |
| Vastused | Lõim koos staatuse muutustega |
| Punktikirje | Number, vastutaja, tähtaeg, kirje staatus, kui see on lisatud punktinimekirja |
| Stiil | Värv, joone laius, täide ja täite läbipaistmatus (suletud kujundid, tekst ja selgitussildid), läbipaistmatus, teksti suurus (tekst, selgitussildid ja mõõtmised) |

## Ainult lugemiseks kommentaarid

Failiga kaasa tulnud kommentaarid, mida MarkupCraft ei saa muuta (tekstimarkeeringud, teiste programmide tempel ja muud erilised liigid), on loendis tüübiga „Muu“ ja staatusmärgiga „Ainult lugemiseks“. Need säilitavad täpselt sellise väljanägemise, mille fail neile annab. Saad neid valida, näha autorit, teemat ja kommentaari ning neile vastata.

## Veel pole valmis

Failimanused pole veel valmis. Iga märgistus saab viidata lehele; vaata [Lehelingid](topic:sheet-links). Pilte ja allkirju pannakse paika tööriistaga {{ui:Tempel}}; vaata [Tempel ja märkused](topic:stamps-and-notes). Vaata [Mis pole veel valmis](topic:not-built-yet).
