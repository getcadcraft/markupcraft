---
title: Začíname s MarkupCraft
summary: Otvorte sadu plánov, umiestnite na list svoj prvý oblak a popisok a uložte označenú kópiu.
keywords: začíname, prvé kroky, otvoriť pdf, kontrola, poznámka, červené opravy, červené pero, sada plánov, návod, rýchly štart
from: 0b1aae4e
---

MarkupCraft slúži na kontrolu výkresov: otvoríte sady plánov vo formáte PDF, označíte ich oblakmi, popiskami, textom, pečiatkami a meraniami, sledujete stav každého komentára a uložíte kópiu PDF, ktorú zobrazí akýkoľvek prehliadač PDF.

Beží vo Vašom webovom prehliadači. Vaše súbory PDF sa otvárajú vo Vašom vlastnom počítači a **nikdy sa nenahrávajú**. Uloženie stiahne novú kópiu; Váš pôvodný súbor sa nemení.

:::note
MarkupCraft je vo vývoji. Pomocník popisuje verziu, ktorú používate. Čo zatiaľ nerobí, je uvedené v [Čo ešte nie je hotové](topic:not-built-yet).
:::

## Čo potrebujete

- Aktuálny Chrome, Edge, Firefox alebo Safari na počítači Mac, Windows alebo Linux, alebo Safari či Chrome na iPade. Pozrite [Prehliadače a počítače](common:browsers).
- Jeden alebo viac súborov PDF. Celá sada plánov môže byť jedno PDF alebo viac.
- Myš s kolieskom je najpohodlnejšia. Funguje aj touchpad a dotyková obrazovka (pozrite [Kontrola na iPade alebo dotykovej obrazovke](topic:review-on-a-tablet)).

## Vaša prvá kontrola v desiatich krokoch

1. Otvorte MarkupCraft v prehliadači. Stred obrazovky hlási „Otvorte sadu plánov“.
2. Vyberte {{ui:Otvoriť PDF}} (alebo {{ui:Otvoriť}} na ľavom konci panela nástrojov, alebo stlačte {{key:Mod+O}}), vyberte jedno alebo viac PDF a potvrďte.
   Súbory PDF môžete aj pretiahnuť z {{pick:mac=Finderu|windows=Prieskumníka|linux=Vášho správcu súborov}} a pustiť na plochu listu.
   Prvýkrát stavový riadok dole hlási „Načítava sa čítačka PDF…“. Potom sa každá strana stane listom v zozname {{ui:Listy}} vľavo a prvý list vyplní stred.
3. Kliknutím na list v zozname ho zobrazíte. Otáčaním kolieska myši nad listom priblížite miesto pod ukazovateľom.
4. Vyberte {{ui:Oblak}} v skupine {{ui:Revízia}} na paneli nástrojov (alebo stlačte {{key:C}}).
   Pri prvom výbere kresliaceho nástroja sa MarkupCraft opýta na Vaše meno. Napíšte ho a vyberte {{ui:Uložiť}}. Zapíše sa do každej poznámky. (Viac v [Nastavenie mena autora](topic:set-your-name).)
5. Potiahnutím nakreslite rámik okolo oblasti, ktorú chcete označiť. Objaví sa červený revízny oblak a bude vybraný.
6. Vyberte {{ui:Popisok}} v skupine {{ui:Anotácie}} (alebo stlačte {{key:K}}). Stlačte na miesto, na ktoré ukazujete, potiahnite tam, kde má byť text, a pustite.
7. Do poľa, ktoré sa objaví, napíšte komentár. Dokončíte ho kliknutím kamkoľvek mimo poľa (alebo stlačením {{key:Mod+Enter}}).
8. Dvakrát stlačte {{key:Esc}}: raz na zrušenie výberu, raz na návrat k nástroju {{ui:Vybrať}}. Kliknite na oblak. Karta {{ui:Vlastnosti}} vpravo ukazuje, kto ho vytvoril, kedy a jeho {{ui:Stav}}.
9. Vyberte {{ui:Uložiť}} na paneli nástrojov (alebo stlačte {{key:Mod+S}}).
   Prehliadač stiahne kópiu s názvom ako „A-Plans (marked up).pdf“. Stavový riadok uvedie, koľko poznámok sa zapísalo.
10. Otvorte túto kópiu v ľubovoľnom prehliadači PDF a skontrolujte: oblak a popisok tam sú ako bežné komentáre PDF s Vaším menom.

Ak chcete pracovať neskôr, otvorte kópiu „(marked up)“ v MarkupCraft. Vaše poznámky sa vrátia upraviteľné, s ich stavmi, odpoveďami a číslami nedostatkov.

## Online a offline

:::online
Ste online. MarkupCraft načíta čítačku PDF pri prvom otvorení PDF a zapisovač PDF pri prvom uložení. Ak chcete neskôr pracovať bez pripojenia (pri návšteve stavby, v lietadle), vyberte teraz {{ui:Uložiť na offline použitie}} v paneli úplne hore a počkajte na „Pripravené offline“. Kópia obsahuje čítačku aj zapisovač PDF, takže otváranie a ukladanie súborov PDF potom funguje offline. Pozrite [Práca offline](common:offline).
:::

:::offline
Ste offline. Ak panel úplne hore hlási „Pripravené offline“, MarkupCraft bol uložený na offline použitie v tomto prehliadači a funguje všetko: otváranie, označovanie, meranie, ukladanie. Ak nebol, použite to, čo sa už v tejto karte načítalo, a stránku neobnovujte, kým nebudete znova online. Pozrite [Práca offline](common:offline).
:::

## Čo si aplikácia pamätá a čo nie

- **Vaše poznámky žijú v PDF, ktoré uložíte.** Na serveri sa nič neuchováva. Aplikácia PDF neukladá sama, ale uchováva záchrannú kópiu v tomto prehliadači, kým neuložíte. Uložte pred zatvorením karty; prehliadač sa najprv opýta, ak sa pokúsite odísť s neuloženými poznámkami (okrem iPadu, pozrite [Kontrola na iPade alebo dotykovej obrazovke](topic:review-on-a-tablet)).
- **Vaše meno, štýly nástrojov a súprava nástrojov** zostávajú v tomto prehliadači na tomto počítači. Iný prehliadač alebo počítač začína odznova a vymazanie údajov stránok v prehliadači ich odstráni. Pozrite [Čo zostáva v tomto prehliadači](topic:browser-storage).
- Ukladanie do cloudu a kontrolné relácie zdieľané medzi ľuďmi zatiaľ nie sú k dispozícii.

## Kam ďalej

- [Prehliadka obrazovky](topic:workspace)
- [Označenie listu](topic:mark-up-a-sheet)
- [Kalibrácia listu a meranie](topic:calibrate-and-measure)
- [Ak prichádzate z iného softvéru na poznámky](topic:coming-from), ak už výkresy kontrolujete v inom programe.
