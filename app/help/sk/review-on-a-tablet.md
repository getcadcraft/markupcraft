---
title: Kontrola na iPade alebo dotykovej obrazovke
summary: Štipnutie, posun a kreslenie prstami alebo perom, čo sa aktivuje pri zdvihnutí, čo potrebuje klávesnicu a ako bezpečne uchovať prácu na tablete.
keywords: ipad, tablet, dotyk, dotyková obrazovka, štipnutie, zväčšenie, dva prsty, Apple Pencil, stylus, prst, terén, stavba, povrch, gestá, mobil
from: 91eb6438
---

MarkupCraft funguje s dotykom: na iPade (Safari alebo Chrome), na notebooku s dotykovou obrazovkou alebo na tablete s Windows či Androidom s aktuálnym prehliadačom. Na šírku tablet zobrazuje celé rozloženie.

## Gestá

| Gesto | Čo robí |
|---|---|
| Jeden prst | Kreslí aktuálnym nástrojom, alebo vyberá pomocou {{ui:Výber}} |
| Dva prsty, roztiahnutie alebo stiahnutie | Zväčšuje okolo bodu medzi prstami |
| Dva prsty, pohyb spolu | Posúva; môžete zväčšiť a posunúť jedným pohybom |
| Druhý prst počas kreslenia | Zruší to, čo začal prvý prst, a namiesto toho začne zväčšovanie |
| Dvojité ťuknutie alebo dlhé podržanie | Dokončí lomenú čiaru, mnohouholník, voľný oblak alebo oblasť |
| Dlhé podržanie textu, popisku alebo poznámky s {{ui:Výber}} | Otvorí ich text na úpravu |
| Jeden prst s zapnutým {{ui:Posun}} | Posúva |

Na dotykovej obrazovke sú tlačidlá panela nástrojov, ponuky, karty a tlačidlá dialógov väčšie, aby sa do nich dalo ľahko trafiť prstom.

## Čo sa stane pri zdvihnutí

Aby prvý prst štipnutia nezanechal stopu, niektoré nástroje konajú, keď **zdvihnete** prst, nie keď sa ho dotknete:

- {{ui:Počet}}: bodka sa pridá pri zdvihnutí.
- {{ui:Poznámka}}: poznámka sa umiestni pri zdvihnutí.
- {{ui:Lomená čiara}}, {{ui:Mnohouholník}}, {{ui:Voľný oblak}} a {{ui:Plocha}}: každý bod sa pridá pri zdvihnutí.
- {{ui:Úsečka}}, {{ui:Šípka}}, {{ui:Dĺžka}} a {{ui:Kalibrovať}}: keď ťuknete na začiatok a potom na koniec, koniec sa umiestni pri zdvihnutí.

Ak prst pred zdvihnutím skĺzne viac než trochu, nepočíta sa ako ťuknutie a nič sa nepridá. Ťukajte čisto; na opravu použite {{ui:Späť}}.

Nástroje, ktoré ťaháte ({{ui:Pero}}, {{ui:Zvýrazňovač}}, {{ui:Oblak}}, {{ui:Obdĺžnik}}, {{ui:Elipsa}}, {{ui:Popisok}}, {{ui:Text}}, {{ui:Pečiatka}}), začnú hneď, ako sa ich dotknete; druhý prst ich zruší.

## Výber prstom

- Ťuknutím vyberiete značku; potiahnutím ju presuniete; potiahnutím úchytu zmeníte veľkosť. Po dotyku prstom na list majú značky a úchyty väčší cieľ a úchyty sa kreslia väčšie.
- Potiahnutím cez prázdny list nakreslíte rámik výberu (zľava doprava: celé vnútri; sprava doľava: dotýkajúce sa).
- V {{ui:Výber}} jeden prst **neposúva**. Použite dva prsty, alebo vyberte {{ui:Posun}}.

## Veci, ktoré vyžadujú klávesnicu

Bez klávesnice nie je {{key:Shift}}, {{key:Esc}} ani {{key:Enter}}. Tu je, čo robiť namiesto toho:

| Akcia na klávesnici | Bez klávesnice |
|---|---|
| {{key:Esc}} na zrušenie alebo návrat na Výber | Ťuknite na {{ui:Výber}} na paneli nástrojov |
| {{key:Shift}} pre čiary pod 45°, štvorce a kružnice | Kreslite opatrne; upravte úchytmi |
| Kliknutie so {{key:Shift}} na pridanie do výberu | Použite rámik výberu |
| Kliknutie so {{key:Shift}} na odobratie bodky počtu | {{ui:Späť}} hneď po nesprávnom ťuknutí |
| {{key:Mod+Enter}} na dokončenie písania | Ťuknite mimo textového poľa |
| {{key:Enter}} na dokončenie lomenej čiary alebo na úpravu textu značky | Dlhé podržanie, alebo {{ui:Upraviť na liste}} v {{ui:Vlastnosti}} |
| {{key:Delete}} | {{ui:Zmazať}} na paneli nástrojov alebo v {{ui:Vlastnosti}} |
| Začatie novej skupiny počtu cez {{key:Esc}} | Ťuknite na prázdny list pomocou {{ui:Výber}}, potom znova ťuknite na {{ui:Počet}} |

Klávesnicové puzdro alebo Bluetooth klávesnica vráti každú skratku; na iPade klávesa ⌘ funguje pre {{key:Mod+Z}} a ostatné.

Tlačidlá na dotyk nezobrazujú svoje popisy. Klávesová skratka pre každý nástroj je uvedená v [Klávesnica a myš](topic:keyboard).

## Stylus a Apple Pencil

Stylus (Apple Pencil, Surface Pen a podobné) funguje ako myš: kreslí a vyberá a koná hneď pri dotyku. Na štipnutie a posun používajte prsty. Tlak nemení hrúbku čiary.

## Otváranie a ukladanie na iPade

- {{ui:Otvoriť}} zobrazí výber súborov Files: iCloud Drive, On My iPad a akúkoľvek aplikáciu úložiska, ktorú ste pripojili.
- {{ui:Uložiť}} sa opýta na stiahnutie; kópia sa uloží do Files, do priečinka Downloads (alebo do priečinka nastaveného v nastaveniach Safari).

## Ochrana práce na tablete

:::warning
iPad Safari neupozorní pred opustením stránky s neuloženou prácou a iPadOS môže na pozadí znova načítať kartu, aby uvoľnil pamäť. MarkupCraft si ponecháva záložnú kópiu v prehliadači a ponúkne ju späť, keď ju znova otvoríte (pozrite [Obnovenie práce](common:recover)), ale **ukladajte po každom liste alebo po každej obhliadke**: súkromná karta žiadnu kópiu neuchováva.
:::

- Vaše meno, nastavenia nástrojov a truhlica nástrojov sa uchovávajú v tomto prehliadači na tomto iPade, ako na počítači. Pozrite [Čo zostáva v tomto prehliadači](topic:browser-storage).
- **Pred návštevou stavby bez signálu:** kým ste ešte online, otvorte MarkupCraft v Safari (alebo Chrome) na iPade a vyberte {{ui:Uložiť na offline použitie}} v lište hore. Počkajte, kým sa zobrazí „Pripravené na offline použitie“ (počíta „Ukladá sa N z M“; čítačka a zapisovač PDF majú asi 6 MB). Na stavbe otvorte rovnakú adresu alebo záložku na ňu: otváranie, značkovanie a ukladanie PDF funguje bez pripojenia. Ak sa zobrazí „Offline režim nie je k dispozícii“, ste v súkromnej karte; použite bežnú. Pozrite [Práca offline](common:offline).
- Safari odstráni offline kópiu, ktorú ste niekoľko týždňov nepoužili. Pred cestou kliknite na „Pripravené na offline použitie“ a vyberte „Uložiť znova (získať najnovšiu verziu)“.
- Veľmi veľké súbory listov používajú veľa pamäte. Na tablete otvorte iba listy, ktoré na návštevu potrebujete.

## Na telefóne

Funguje, ale obrazovka je malá: časti sa skladajú nad seba (panel nástrojov, list, stavový riadok, panely, potom zoznam listov) a panel nástrojov sa posúva do strán. Telefón používajte na prezeranie a rýchle pridanie poznámky, a tablet alebo počítač na skutočnú kontrolu.
