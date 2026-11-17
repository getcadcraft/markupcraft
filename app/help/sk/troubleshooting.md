---
title: Riešenie problémov
summary: Správy, ktoré MarkupCraft zobrazuje, a čo s nimi robiť, plus opravy pre veci, ktoré sa zdajú byť nefunkčné.
keywords: problém, chyba, nefunguje, pomocník, správa, neotvorí sa, nedá sa uložiť, heslo, chránený, odmietnuté meranie, kalibrácia, offline, prázdny, pomalý, stratené poznámky, otázniky
from: bb650b39
---

Väčšina problémov je vysvetlená v stavovom riadku v spodnej časti obrazovky. Prečítajte si ho ako prvý.

## Otváranie súborov

**"MarkupCraft otvára súbory PDF. "x" nie je PDF."**
Vybrali ste alebo pustili niečo iné. Otvárajú sa iba PDF. Najprv exportujte výkresy z CAD programu do PDF.

**'"názov" vyžaduje heslo na otvorenie. Otvorte nechránenú kópiu.'**
PDF je chránené heslom. Požiadajte odosielateľa o nechránenú kópiu alebo ho otvorte v programe na PDF, kde poznáte heslo, a uložte kópiu bez hesla.

**'"názov" nemohol byť načítaný ako PDF (…)'**
Súbor je poškodený alebo naozaj nie je PDF (neúplné stiahnutie, príloha z e-mailu odrezaná). Stiahnite ho znova. Ak ho môžu otvoriť iné programy na PDF, použite ich "uložiť ako" na vytvorenie čistej kópie a otvorte tú.

**"Niektoré súbory sa neotvorili"**
Keď otvárate naraz viacero súborov, toto okno vypíše súbory, ktoré zlyhali, a prečo. Ostatné sú otvorené.

**"Čítačka PDF sa nedala načítať: …"**
Motor PDF sa nepodarilo stiahnuť. Online: znova načítajte stránku a skúste to znova; skontrolujte, či firewall alebo blokovač obsahu neblokuje stránku. Offline: MarkupCraft nebol uložený na offline použitie v tomto prehliadači (lišta hore nehovorí "Offline ready"). Pripojte sa na internet, vyberte {{ui:Uložiť na offline použitie}} a počkajte na "Offline ready". Pozri [Práca offline](common:offline).

**"Niektoré anotácie sa môžu na obrazovke zobraziť dvakrát" alebo "Ďalšie podrobnosti anotácií sa nepodarilo prečítať"**
Existujúce komentáre v súbore sú nezvyčajné. Aj tak sa otvoria, koľko MarkupCraft dokáže; pred spoliehaním na ne ich skontrolujte. Ukladanie stále funguje.

**List má zlý názov alebo "strana 3"**
Pozri [Ako listy získavajú názvy](topic:open-a-plan-set#how-sheets-get-their-names). Naskenované listy nemajú text na čítanie; použite {{ui:Premenovať list}}.

**Rovnaké listy sa objavujú dvakrát**
Ten istý súbor bol otvorený dvakrát. Vyberte {{ui:Zavrieť}} (ak treba, najprv uložte) a otvorte súbor znova.

## Kreslenie a výber

**Keď kliknem na list, nič sa nestane**
Skontrolujte, ktorý nástroj je stlačený na paneli nástrojov, a prečítajte si stavový riadok. Pri {{ui:Obdĺžnik}}, {{ui:Elipsa}} a {{ui:Oblak}} kliknutie bez ťahania nič nenakreslí: ťahajte. Pri {{ui:Lomená čiara}}, {{ui:Mnohouholník}}, {{ui:Voľný oblak}} a {{ui:Plocha}} sa pridávajú body: dokončite dvojitým kliknutím alebo stlačením {{key:Enter}}.

**"Mnohouholník potrebuje aspoň 3 body." (alebo 2 pre lomenú čiaru)**
Pred dokončením kliknite na viac bodov.

**"Nič nebolo napísané, takže text nebol pridaný."**
Textové polia a vynášacie popisky sa uchovajú, iba keď majú text. Nakreslite ho znova a pred kliknutím mimo napíšte text.

**"Dva body sú rovnaké. Kliknite na dva rozdielne body."**
Pri čiarach, šípkach, dĺžkach a kalibrácii musia byť dva konce od seba vzdialené. Ťahajte alebo kliknite dvakrát na rôznych miestach.

**Nemôžem poznámku presunúť ani zmazať; má sivý prerušovaný rámček**
Je to komentár len na čítanie, ktorý prišiel so súborom (napríklad zvýraznenie textu). MarkupCraft ho ponecháva tak, ako je: môžete naň iba odpovedať. Stavový riadok hovorí "read-only markup(s) are kept as in the file".

**Moje klávesy píšu písmená do poľa namiesto výberu nástrojov**
Kurzor je v textovom poli (odpoveď, pole vo {{ui:Vlastnosti}}, vyhľadávanie na liste). Najprv kliknite na prázdnu časť oblasti listu alebo stlačte {{key:Esc}}, ak upravujete text poznámky.

**Medzerník neposúva a šípky nič nerobia**
Práve ste kliknuli na tlačidlo panela nástrojov, takže má ešte klávesnicu. Ťahajte namiesto toho stredným tlačidlom myši alebo raz kliknite na list s zapnutým {{ui:Výber}} a potom skúste znova. Pozri aj [Klávesnica a myš](topic:keyboard#when-a-key-does-nothing).

**Štipnutie na dotykovej obrazovke zanechalo stopu**
Nástroj na ťahanie (pero, oblak, obdĺžnik) sa spustil skôr, než prišiel druhý prst, a skončil skôr, než bol zrušený. Stlačte {{ui:Späť}}. Keď chcete priblížiť, položte obidva prsty naraz.

## Meranie

**"Najprv kalibrujte tento list: vyberte dva body vo známej vzdialenosti alebo zvoľte jeho mierku. Potom meriajte."**
Každý list potrebuje vlastnú mierku predtým, ako sa použije {{ui:Dĺžka}} alebo {{ui:Plocha}}. MarkupCraft prepol na {{ui:Kalibrovať}}: kliknite na dva konce známeho rozmeru a napíšte jeho dĺžku, alebo kliknite na tlačidlo mierky v stavovom riadku a vyberte mierku. Pozri [Kalibrácia listu a meranie](topic:calibrate-and-measure).

**"Toto nie je dĺžka, ktorú MarkupCraft rozumie."**
Napíšte ju ako `24'-0"`, `12' 6 1/2"`, `7.2 m` alebo `900 mm`. Pozri [Jednotky, dĺžky a mierky](topic:units-and-scales).

**Merania sú mierne alebo výrazne nepresné**
- Predvolená mierka na PDF, ktoré nie je v plnej veľkosti, meria nesprávne. Kalibrujte namiesto toho podľa dlhého známeho rozmeru.
- Oddeľovač tisícov bol čítaný ako desatinná bodka: `1,200 mm` znamená 1.2 mm. Napíšte `1200 mm`.
- Pri klikaní na konce priblížte.
- Výkres nemusí byť v mierke ("NTS").

**"Najprv vyberte skupinu počtu, potom Shift+klikom odstráňte značku."**
Vyberte {{ui:Výber}}, kliknite na skupinu počtu, potom znova vyberte {{ui:Počet}} a {{key:Shift}}-kliknite na bodku.

## Ukladanie

**"Tento PDF je chránený (zašifrovaný), takže kópiu s poznámkami nemožno zapísať."**
Súbor zakazuje zmeny. Požiadajte o nechránenú kópiu. Medzitým môžete zoznam poznámok stále exportovať ako CSV alebo BCF.

**"Zapisovač PDF sa nedal načítať: …"**
Zvyčajne ste offline a aplikácia nebola uložená na offline použitie (v lište hore nie je "Offline ready"). Vaše poznámky sú stále v karte: nechajte ju otvorenú, pripojte sa a znova vyberte {{ui:Uložiť}}. Potom vyberte {{ui:Uložiť na offline použitie}}, aby to fungovalo offline nabudúce; uložená kópia obsahuje zapisovač PDF.

**"Nepodarilo sa uložiť <file>"**
Okno ukáže dôvod. Vaše poznámky sú stále v karte. Skúste znova; ak sa to opakuje, exportujte CSV, aby sa komentáre nestratili, a nahláste správu.

**Vybral som Uložiť, ale prišiel iba jeden súbor**
Váš prehliadač zablokoval ďalšie sťahovania. Hľadajte oznámenie v adresnom riadku a povoľte tejto stránke sťahovanie viacerých súborov, potom uložte znova.

**Nemôžem nájsť uložený súbor**
Išiel do priečinka sťahovaní vášho prehliadača. Otvorte zoznam sťahovaní prehliadača ({{pick:mac=Option-Command-L|windows linux=Ctrl+J}} v Chrome a Edge; v Firefox a Safari tlačidlo sťahovania na paneli nástrojov), aby ste zistili, kam išiel. Pozri [Prehliadače a počítače](common:browsers).

**Niektoré texty ukazujú "?" v iných prehliadačoch PDF**
Znaky mimo západoeurópskej sady sa v kópii vypisujú ako "?". Správa o uložení ich spočíta. Pozri [Uloženie PDF s poznámkami](topic:save-the-marked-up-pdf).

**Pečiatka ukazuje zajtrajší (alebo včerajší) dátum**
Dátumy pečiatok sú v UTC. Pozri [Pečiatky a lepiace poznámky](topic:stamps-and-notes).

## Práca offline

**Tlačidlo offline hovorí "Could not save"**
Niektoré súbory aplikácie sa nestiahli. Skontrolujte pripojenie a kliknite na tlačidlo znova; počíta "Saving N of M", kým nebude "Offline ready".

**Tlačidlo offline hovorí "Offline not available"**
Toto okno prehliadača nemôže uchovať offline kópiu: súkromné okno alebo počítač, ktorého pravidlá to blokujú. Otvorte MarkupCraft v bežnom okne a skúste znova.

**Offline je aplikácia staršia verzia**
Offline kópia je verzia, ktorú ste uložili. Keď ste online, kliknite na "Offline ready" a vyberte "Save again (get the newest version)". Na uvoľnenie miesta vyberte "Remove the offline copy". Pozri [Práca offline](common:offline).

**Pomocník sa neotvorí**
Stlačte {{key:F1}} (na Macu s **fn**) alebo vyberte {{ui:Pomocník}} v lište hore. Funguje aj offline.

## Stratené veci

**Moje poznámky sú preč po zatvorení alebo znovunačítaní karty**
Znova otvorte MarkupCraft v tom istom prehliadači: ponúkne neuloženú prácu s "Recover your work?". Vyberte {{ui:Obnoviť}} a uložte PDF. Kópie sa uchovávajú až 30 dní; súkromné okno alebo vymazanie údajov stránky nenecháva žiadne. Pozri [Obnovenie práce](common:recover).

**Moje meno, nastavenia nástrojov alebo truhlica s nástrojmi sú preč**
Uchovávajú sa len v tomto prehliadači a boli vymazané (vymazané údaje stránky, súkromné okno, iný prehliadač alebo počítač, alebo čistenie Safari pre stránky nenavštívené dlhšie). Nastavte meno znova a importujte exportovanú truhlicu. Pozri [Čo zostáva v tomto prehliadači](topic:browser-storage).

**"Truhlicu s nástrojmi nebolo možné uchovať v tomto prehliadači (úložisko je vypnuté alebo plné). Exportujte ju, aby sa zachovala."**
Prehliadač odmieta ukladať údaje pre túto stránku (súkromný režim, úložisko zablokované nastavením alebo pravidlom, alebo plné). Po zmene exportujte truhlicu a importujte ju nabudúce.

## Zobrazenie a rýchlosť

**List chvíľu vyzerá rozmazane**
MarkupCraft zobrazuje rýchle, hrubé vykreslenie, kým približujete alebo posúvate, a krátko po zastavení ho prekreslí ostro.

**Všetko je pomalé pri veľkom súbore**
Zatvorte iné náročné karty, otvárajte naraz menej súborov a vyhnite sa priblíženiu na maximum pri obrovských listoch. Pozri [Práca s viacerými súbormi naraz](topic:several-files#big-sets).

**List je tmavý so svetlými čiarami**
Ste v motíve {{ui:Model}}. Vyberte {{ui:Papier}} v lište hore pre tmavé čiary na bielom. Vaše poznámky a uložené PDF tým nie sú ovplyvnené.
