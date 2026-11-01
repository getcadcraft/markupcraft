---
title: Ekraani tutvustus
summary: Tööriistariba, lehtede loend, lehe ala, paremal viis paneeli ja olekuriba nende ekraanil nähtavate nimede järgi.
keywords: ekraan, paigutus, tööriistariba, paneelid, külgriba, pisipildid, omadused, olekuriba, liides, täisekraan, teema, tume režiim
from: 18d82de6
---

MarkupCraft täidab brauseri akna. Ülevalt alla ja vasakult paremale:

## Kõige ülemine riba

Õhuke riba kõige kohal kuulub CadCraft'i perekonda, mitte MarkupCraft'ile endale. Sellel on:

- rakenduse nimi ja versioon, mida käitad,
- {{ui:Teave MarkupCraft'i kohta}}, mis avab rakenduse lehe veebilehel,
- {{ui:Abi}}, mis avab selle abi külgpaneelis (või vajuta {{key:F1}}),
- {{ui:Salvesta võrguks}}, mis hoiab MarkupCraft'i, selle PDF-lugejat ja -kirjutajat ning seda abi selles brauseris, et see avaneks ilma ühenduseta; siis ütleb see „Valmis võrguta kasutamiseks“ (vt [Töötamine võrguta](common:offline)),
- ekraanirežiimi nupp ({{ui:Täisekraan}}), ja
- {{ui:Sätted}} (või {{key:Mod+,}}), kus vahekaart {{ui:MarkupCraft}} sisaldab selle rakenduse enda seadeid ja {{ui:Üldine}} neid, mida jagavad kõik CadCraft'i rakendused (vt [MarkupCraft'i sätted](topic:settings)), ning
- {{ui:Paber}} ja {{ui:Mudel}}, heledad ja tumedad teemad. Režiimis {{ui:Mudel}} joonistatakse lehed heledana tumedal taustal; sinu märgistused säilitavad oma värvid.

Ekraanirežiimi nupp või {{key:Ctrl+Shift+F}} liigub läbi kolme režiimi: tavaline, täisekraan ja täisekraan peidetud ribadega. Kui ribad on peidetud, liiguta osuti ekraani ülaserva (või koputa seal) ja need libisevad tagasi. See kiirklahv kasutab igas arvutis Control-klahvi, ka Macis.

:::note
Täisekraanil paneb {{key:Esc}} ka brauseri täisekraanilt lahkuma. Kui tahtsid ainult joonistamise tühistada, vajuta uuesti {{key:Ctrl+Shift+F}}, et naasta täisekraanile.
:::

## Tööriistariba

Ülaosa riba all on tööriistad rühmitatud ja märgistatud:

| Rühm | Nupud |
|---|---|
| Fail | {{ui:Ava}}, {{ui:Salvesta}}, {{ui:Sulge}} |
| Vali | {{ui:Vali}}, {{ui:Nihuta}} |
| Joonista | {{ui:Pliiats}}, {{ui:Markeerija}}, {{ui:Joon}}, {{ui:Nool}}, {{ui:Ristkülik}}, {{ui:Ellips}}, {{ui:Murdjoon}}, {{ui:Hulknurk}} |
| Muuda | {{ui:Pilv}}, {{ui:Vabakäeline pilv}} |
| Märgista | {{ui:Selgitussilt}}, {{ui:Tekst}}, {{ui:Märkus}}, {{ui:Tempel}} |
| Mõõda | {{ui:Kalibreeri}}, {{ui:Pikkus}}, {{ui:Pindala}}, {{ui:Loenda}} |
| Redigeeri | {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, ja {{ui:Veel}}: {{ui:Lõika}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Kleebi samasse kohta}}, {{ui:Dubleeri}}, {{ui:Kustuta}}, {{ui:Vali kõik}}, {{ui:Tühista valik}} |

Kasutatav tööriist jääb vajutatuna välja. Hoia osutit nupu kohal, et näha selle klahvi (nt „Ristkülik (R)“); menüü {{ui:Veel}} loetleb iga käsu klahvi kõrval. Praegu toimimatud nupud on tuhmid: {{ui:Kopeeri}} kuni valid märgistuse, {{ui:Kleebi}} kuni midagi on kopeeritud. Väike täpp pärast {{ui:Salvesta}} tähendab, et mõned märgistused pole veel salvestatud. Täielik klahvide loend on jaotises [Klaviatuur ja hiir](topic:keyboard).

Tööriist jääb pärast joonistamist sisse, nii et võid joonistada mitu pilve järjest. Vajuta {{key:Esc}} (kaks korda, kui uus märgistus on veel valitud) või {{key:V}}, et naasta tööriistale {{ui:Vali}}.

## Lehtede loend (vasakul)

{{ui:Lehed}} loetleb iga lehekülje iga avatud PDF-i kohta. Iga rida näitab lehe väikest pilti, nime, lehenumbrit või faili ja lehekülge ning märgistuste arvu. Pealkirja järel olev arv on lehtede arv.

- Klõpsa reale, et leht kuvada.
- Kirjuta {{ui:Otsi lehti}} väljale, et filtreerida lehe nime, lehenumbri või faili nime järgi. Vajuta {{key:Enter}}, et avada esimene vaste.

Lehe nimed tulevad PDF-ist, kui see neid sisaldab. Vt [Ava plaanikomplekt ja liigu lehtede vahel](topic:open-a-plan-set).

## Lehe ala (keskel)

Leht, millega töötad. Enne midagi avamist näitab see tekstiga „Ava plaanikomplekt“ ja nupuga {{ui:Ava PDF-id}}. Lohista PDF-id siia suvaliselt, et need avada.

Lehe all on kitsas riba, millel on:

- eelmise ja järgmise lehe nooled ning „3 / 12: A-101 — Põrandaplaan“ (hoia osutit selle kohal, et näha faili ja lehekülge),
- suumi vähendamine, suumikast (sisesta protsent ja vajuta {{key:Enter}}; 100% on tegelik suurus tavalisel ekraanil) ja suumi suurendamine,
- {{ui:Mahuta leht}} ja {{ui:Mahuta laiusele}}.

Iga leht mäletab oma suumi, kuni plaanikomplekt on avatud.

Kui võrdled kahte lehte, ilmub siia legend: „Ainult vanal lehel“, „Ainult uuel lehel“ ja „Mõlemal lehel“. Vt [Kahe redaktsiooni võrdlus](topic:compare-revisions).

## Paneelid (paremal)

Viis vahekaarti:

| Vahekaart | Mida näitab |
|---|---|
| {{ui:Omadused}} | Valitud märgistus: autor, kuupäevad, mõõdetud väärtused, staatus, teema, tekst, kommentaar, stiil, selle vastused ja punktikirje. Kui joonistamistööriist on sees ja midagi pole valitud, uute märgistuste seaded. Kui midagi pole valitud ja {{ui:Vali}} on sees, leht: number, pealkiri, kust nimi loeti, paberi suurus, mõõtkava ja {{ui:Nimeta leht ümber}}. |
| {{ui:Märgistused}} | Iga märgistus avatud plaanikomplektis, filtritega, ning {{ui:CSV}} ja {{ui:BCF}} eksport. Vt [Märgistuste loend](topic:markups-list-and-export). |
| {{ui:Punktinimekiri}} | Nummerdatud punktikirjed koos määratud isiku, tähtaja ja staatusega. Vt [Punktinimekirja koostamine](topic:punch-list). |
| {{ui:Tööriistad}} | Tööriistakast: salvestatud, stiilitud tööriistad. Vt [Tööriistakast](topic:tool-chest). |
| {{ui:Võrdle}} | Kahe lehe kattumine. Vt [Kahe redaktsiooni võrdlus](topic:compare-revisions). |

## Olekuriba (all)

- Vasakul, kus osuti lehel on, tollides (või millimeetrites, [Sätetes](topic:settings)) paberil.
- Keskel teated: mida tööriist järgmiseks ootab, mis just salvestati, miks midagi keelduti. **Loe seda, kui midagi ei juhtu.**
- Lehe mõõtkava nupp („Kalibreerimata“ või mõõtkava). Klõpsa, et seda seada. Vt [Lehe kalibreerimine ja mõõtmine](topic:calibrate-and-measure).
- Sinu nimi („Määra oma nimi“, kuni annad selle). Klõpsa, et seda muuta.

## Väike ekraan

Kui ekraan on umbes 1180 pikslist kitsam, muutuvad paneelid kitsamaks ja lehepildid väiksemaks. Telefoni suurusega ekraanil asetuvad osad üksteise alla: tööriistariba (kerige külgsuunas), leht, olekuriba, paneelid ja seejärel lehtede loend all. Tahvelarvuti maastikurežiimis säilib täielik paigutus.
