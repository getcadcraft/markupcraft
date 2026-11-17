---
title: Pliiatsitõmbete puhastamine ning läbivaatuse kommentaaride ja objekti edenemise sisseviimine
summary: Muuda vabakäelised pliiatsitõmbed joonteks, ringideks, kaarteks ja ristkülikuteks; too loataotluse paketi läbivaatuse kommentaarid ja objekti mõõdistuse edenemine sisse märkmetena.
keywords: pliiats, vabakäeline, puhastamine, sirgendamine, ring, joon, ristkülik, kaar, luba, läbivaatuse kommentaarid, edenemine, droon, skaneerimine, mõõdistus, märkmed, csv
from: 547d8e42
---

## Puhasta pliiatsitõmbed

Joonista {{ui:Pliiats}} abil, siis ava redigeerimise rühmas {{ui:Veel}} menüü ja vali {{ui:Puhasta pliiatsijooned}}. Iga valitud pliiatsitõmme muutub selleks, mis ta oli mõeldud: sirge tõmme jooneks (täpselt horisontaalseks või vertikaalseks, kui see oli peaaegu selline), ümmargune ellipsiks, ringi osa kaareks, suletud nelinurkne ristkülikuks ja kõik muu murdjooneks või hulknurgaks. Kokku joonistatud tõmmete lahtised otsad tõmmatakse üksteise külge. Kui ühtegi pliiatsitõmmet pole valitud, puhastatakse kõik avatud lehe pliiatsitõmbed. See on üks tagasivõtmise samm: Ctrl+Z taastab vabakäelise joone. Kuju arvutatakse sinu arvutis kindlate reeglite järgi; midagi ei saadeta kuhugi.

## Too läbivaatuse kommentaarid

BimCraft'i loataotluse pakett sisaldab faili `01-review-comments.csv`: kommentaarid, mida plaanide ülevaataja tõenäoliselt teeb, igaüks reegli, paragrahvi, vajaliku, leitu ja tegevusega. Vahekaardil {{ui:Ülesanded}} ava {{ui:Loataotluse läbivaatuse kommentaarid}} ja vali {{ui:Too kommentaarid (CSV)}}. Iga kommentaar muutub staatusega Avatud märkmeks veerus avatud lehe vasakus servas; lohista iga märkmed kohta, millest see räägib. Need arvutatakse olemasolevatest kontrollidest, mitte plaanikontrollija järgi.

## Too HAZOP-sõlmede kastid

CadCraft'i P&ID-lisandmoodul joonistab HAZOP-uuringu sõlmed ja saab need salvestada kujul {{ui:HAZOP-sõlmede kastid}} (JSON-fail). Ava siin trükitud P&ID-leht, mine vahekaardile {{ui:Ülesanded}}, ava {{ui:HAZOP-sõlmede kastid}} ja vali {{ui:Too sõlmede kastid (JSON)}}. Iga sõlm muutub lehel avatud ristkülikuks, millel on tekstis number, nimi, seade ja torustik, ning meeskond kirjutab oma järeldused sellele vastustena. Lehte võetakse täissuuruses trükituna, alates joonise vasakust alanurgast; kui see trükiti muus mõõtkavas, sisesta enne väljale {{ui:Trükitud mõõtkavaga}} see arv (0.5 tähendab 1:2). Lehest välja jääv sõlm ei joonistu ja paneel ütleb, mitu neid on. Märgid on uuringu abivahend: nad näitavad, kus sõlmed on, ega hinda uuringut.

## Too objekti edenemine

CivilCraft hoiab iga objekti drooni lennu või skaneerimise kohta rida. Vahekaardil {{ui:Ülesanded}} ava {{ui:Objekti edenemine}} ja vali {{ui:Too edenemine (JSON)}}. Iga mõõdistus muutub lehel avatud märkmeks, mis ütleb, kui palju on tehtud, mida on veel vaja lõigata või täita, mis on üle kaevatud või üle täidetud ja mis ulatub plaanist välja. Mõõdistus, millel on midagi plaanist väljas, jääb staatusesse Avatud; puhas mõõdistus on Aktsepteeritud.
