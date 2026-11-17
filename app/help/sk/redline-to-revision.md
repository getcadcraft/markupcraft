---
title: Odoslanie značok kresličovi ako červenej opravy
summary: Zapíšte otvorené značky ako súbor červenej opravy pre toho, kto kreslí zmeny, potom načítajte jeho odpovede, aby každá značka zobrazila Prijaté alebo Zamietnuté.
keywords: červené opravy, revízia, kreslič, prijať, zamietnuť, odpovede, cc-redline, revízny oblak, použiť značky
from: cb099d04
---

Preskúmanie je len polovica práce; výkres sa musí ešte zmeniť. Súbor červených opráv prenesie každú otvorenú značku ku kresliarovi a jeho odpovede prinesú výsledok späť.

## Odoslanie

1. Otvorte kartu {{ui:Úlohy}} a otvorte {{ui:Červené opravy do revízie}}.
2. Napíšte revíziu, ku ktorej sa značky vzťahujú (napríklad B).
3. Vyberte {{ui:Exportovať súbor červených opráv}}.

Dostanete súbor `.redline.json` s jednou položkou pre každú otvorenú značku: jej list, kde sa nachádza (ako zlomky listu, takže nové vykreslenie v inej veľkosti sa stále zhoduje, a v bodoch), jej slová, autor a vlákno a jej úloha, ak nejakú má. Komentáre len na čítanie z iných programov, obrázky a legendy sa vynechajú.

## Odpovede

Strana kreslenia odpovie na každú položku Prijaté, Zamietnuté alebo Hotovo, s poznámkou, v súbore `.redline-answers.json`. Vyberte {{ui:Načítať súbor odpovedí…}} a vyberte ho: každá značka dostane tento stav a poznámku kresliča vo svojom vlákne a úloha, ktorej značka bola prijatá alebo hotová, sa dokončí. Jeden krok späť vráti všetky odpovede naraz.

Formát súboru je v `docs/REDLINE-FORMAT.md`. Strana CadCraft (čítanie balíka, prijatie alebo zamietnutie každej položky, revízne oblaky a záznam) sa vytvára samostatne.
