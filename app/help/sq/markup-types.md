---
title: Çdo lloj shënimi
summary: Të shtatëmbëdhjetë llojet e shënimeve, tastet e tyre, si vizatohet secili, pamja e tij parazgjedhje dhe çfarë bëhet në PDF-in e ruajtur.
keywords: llojet e shënimeve, lista e veglave, llojet e anotimit, re, thirrje, tekst, shënim, vulë, stilolaps, theksues, vijë, shigjetë, drejtkëndësh, elips, polivijë, poligon, gjatësi, sipërfaqe, numërim
from: 29bf32e7
---

## Veglat

| Shiriti i veglave | Tasti | Si vizatohet | Pamja parazgjedhje | Në PDF-in e ruajtur |
|---|---|---|---|---|
| {{ui:Stilolaps}} | {{key:P}} | Tërhiq | E kuqe, 1.5 pt | Bojë |
| {{ui:Theksim}} | {{key:I}} | Tërhiq | E verdhë, 14 pt e gjerë, transparente, ngjyros atë që është nën të | Bojë (e shënuar si vijë theksuesi) |
| {{ui:Vijë}} | {{key:L}} | Tërhiq, ose kliko fillimin dhe fundin | E kuqe, 2 pt | Vijë |
| {{ui:Shigjetë}} | {{key:A}} | Tërhiq, ose kliko fillimin dhe fundin | E kuqe, 2 pt, kokë shigjete e mbyllur në fund | Vijë me kokë shigjete |
| {{ui:Hark}} | {{key:O}} | Kliko fillimin, një pikë në hark, pastaj fundin | E kuqe, 2 pt | Polivijë përgjatë harkut |
| {{ui:Drejtkëndësh}} | {{key:R}} | Tërhiq një kuti | E kuqe, 2 pt, pa mbushje | Katror |
| {{ui:Elips}} | {{key:E}} | Tërhiq një kuti | E kuqe, 2 pt, pa mbushje | Rreth |
| {{ui:Polivijë}} | {{key:Y}} | Kliko pikat, klik i dyfishtë për të mbaruar | E kuqe, 2 pt | Polivijë |
| {{ui:Poligon}} | {{key:G}} | Kliko pikat, klik i dyfishtë për të mbaruar | E kuqe, 2 pt, pa mbushje | Poligon |
| {{ui:Re}} | {{key:C}} | Tërhiq një kuti | E kuqe, harqe 1.5 pt | Katror me kufi retë |
| {{ui:Re e lirë}} | {{key:Shift+C}} | Kliko pikat, klik i dyfishtë për të mbaruar | E kuqe, harqe 1.5 pt | Poligon me kufi reje |
| {{ui:Thirrje}} | {{key:K}} | Shtyp mbi pikën, tërhiq te teksti, shkruaj | Tekst dhe udhëzues të kuq, 1 pt, tekst 12 pt | Kuti teksti me udhëzues thirrjeje |
| {{ui:Tekst}} | {{key:T}} | Kliko ose tërhiq një kuti, shkruaj | Tekst i kuq 12 pt, pa kornizë | Kuti teksti |
| {{ui:Shënim}} | {{key:N}} | Kliko, shkruaj | Ikonë shënimi e verdhë | Shënim ngjitës |
| {{ui:Vulë}} | {{key:S}} | Zgjidh një vulë, kliko ose tërhiq | Shkronja të kornizuara plus "Nga <emri>, <data>"; me ngjyrë sipas kuptimit | Vulë |
| {{ui:Gjatësi}} | {{key:M}} | Kliko fillimin dhe fundin (kërkon shkallë) | Vijë përmasash blu me shenja dhe gjatësinë | Vijë e shënuar si përmasë, me matje |
| {{ui:Kënd}} | {{key:X}} | Kliko fundin e një krahu, kulmin, pastaj fundin e krahut tjetër | Krahë blu, hark i vogël në kulm dhe këndi në shkallë | Polivijë me këndin si tekst |
| {{ui:Sipërfaqe}} | {{key:Q}} | Kliko qoshet, klik i dyfishtë për të mbaruar (kërkon shkallë) | Kontur blu, mbushje e lehtë blu, sipërfaqe dhe perimetër | Poligon i shënuar si sipërfaqe, me matje |
| {{ui:Numëro}} | {{key:U}} | Kliko çdo artikull | Pika portokalli të numëruara dhe etiketë "grup: n" | Një koment bojë për grup, një unazë për çdo artikull |

Në prekje, "klik i dyfishtë për të mbaruar" është një trokitje e dyfishtë, dhe "klik" është një prekje që vepron kur ngrihet gishti (për pikat, shënimet dhe numërimet).

## Ç'mban çdo shënim

| Fusha | Ku e shikon |
|---|---|
| Autori | {{ui:Vetitë}}, lista, rreshti i dytë i vulës, shikuesit e tjerë PDF |
| Krijuar dhe ndryshuar | {{ui:Vetitë}} (zona jote kohore), lista, CSV |
| Gjendja | Hapur, Pranuar, Refuzuar ose Përfunduar |
| Tema | Një etiketë e shkurtër; parazgjedhja është lloji ("Re", "Kuti teksti", "Matje gjatësie") |
| Koment | Shënime më të gjata. Për një shënim, teksti i tij është komenti i tij. |
| Teksti | Vetëm kutitë e tekstit dhe thirrjet |
| Përgjigjet | Biseda, me ndryshimet e gjendjes |
| Artikulli i defektit | Numri, personi i caktuar, data e afatit, gjendja e artikullit, kur shtohet te {{ui:Lista e defekteve}} |
| Stili | Ngjyra, gjerësia e vijës, mbushja dhe opaciteti i mbushjes (format e mbyllura, tekst dhe thirrje), opaciteti, madhësia e tekstit (tekst, thirrje dhe matje) |

## Koment vetëm për lexim

Komentet që vijnë me skedarin dhe që MarkupCraft nuk mund t'i redaktojë (theksimet e tekstit, vulat e programeve të tjera dhe lloje të tjera të veçanta) listohen me llojin "Tjetër" dhe çipin e gjendjes "Vetëm për lexim". Ata mbajnë saktësisht pamjen që u jep skedari. Mund t'i zgjedhësh, të shohësh autorin, temën dhe komentin e tyre, dhe t'u përgjigjesh.

## Ende nuk është ndërtuar

Bashkëngjitjet e skedarëve ende nuk janë ndërtuar. Çdo shënim mund të lidhet me një fletë; shih [Lidhjet e fletës](topic:sheet-links). Figurat dhe nënshkrimet vendosen me veglën {{ui:Vulë}}; shih [Vulat dhe shënimet](topic:stamps-and-notes). Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
