---
title: Novinky vo verzii 0.9 (staršie)
summary: Poznámky a pracovná plocha, ktoré sa nikdy netlačia, šifrované súkromné poznámky a čistá kópia pre klienta, dávkové prepojenia pre celú sadu výkresov, nástroj Oblúk s desiatimi metódami, sledovanie iného revidujúceho v relácii Live a oprava zmazaných poznámok, ktoré zostávali v uloženom PDF.
keywords: novinky 0.9, staršie vydanie, novinky, čo je nové, 0.9, poznámky k vydaniu, zoznam zmien, poznámky, pracovná plocha, súkromné poznámky, heslo, šifrované, skryť poznámky, zobraziť poznámky, čistá kópia, snímka, dávkové prepojenia, odkazy na listy, prepojiť listy, popisové pole, číslo listu, dodatok, prečíslovanie, odkaz pdf, oblúk, metódy oblúka, oblúk tromi bodmi, polomer, sledovať, sledovať ma, live, zobrazenie tried, zoznam ľudí, zmazaná poznámka, popisky, názvy kariet, zoznam zmien, 0.8, 0.8.1, verzia, nové funkcie, úloha, úlohy, pridelenie, deň termínu, po termíne, skontrolovať teraz, čo sa zmenilo, revízie, porovnať, hlasová poznámka, rozhodnutie, červené opravy, súbor odpovedí, kreslič, asistent, mcp, problémy, jazyky, vstupné zariadenia, touchpad, riadky panela nástrojov, mriežka vlastností, aktualizácia
from: aa3dfeb8
---

Toto sa zmenilo vo verzii MarkupCraft 0.9 v porovnaní s verziou 0.8.1. Hlavná myšlienka je, že vaše pracovné poznámky zostávajú mimo strany, ktorú dostane klient, a že celú sadu výkresov možno prepojiť v jednom kroku.

## Novinky

### Poznámky, pracovná plocha a súkromné poznámky

- **Pracovná plocha.** Oblasť okolo každého listu je pracovný stôl: čokoľvek nakreslené, napísané alebo vložené vedľa listu je poznámka a nikdy sa netlačí. Vyberte {{ui:Zobraziť pracovnú plochu}}, ak chcete zoomovať von a získať viac miesta, alebo {{ui:Snímka na pracovnú plochu}}, potiahnite rámček a potom vyberte {{ui:Na pracovnú plochu}}, aby sa obrázok časti výkresu umiestnil vedľa listu. Snímka je obrázok a nemení sa, keď sa zmení list. Pozrite si [Poznámky, pracovná plocha a súkromné poznámky](topic:notes-and-pasteboard).
- **Zobrazenie a skrytie poznámok.** Ľubovoľná poznámka sa môže stať poznámkou: nastavte {{ui:Nové značky sú}} na karte {{ui:Poznámky}} alebo {{ui:Táto značka je}} v {{ui:Vlastnosti}}. {{key:Shift+H}} alebo prepínač {{ui:Poznámky}} pod listom skryje a zobrazí všetky poznámky naraz. Poznámky sa vynechávajú pri tlači, sploštených kópiách, zoznamoch a exportoch a iné čítačky PDF ich nezobrazujú. Vaše uložené PDF si ich zachová pre ďalšie otvorenie v MarkupCraft.
- **Súkromné poznámky.** Vyberte {{ui:Nastaviť heslo}}, potom nastavte poznámku na {{ui:Súkromná poznámka}}. Je zašifrovaná v súbore heslom s dĺžkou aspoň 10 znakov a neexistuje obnovenie: nikto vrátane nás ju nemôže otvoriť bez hesla. {{ui:Uzamknúť}} odloží súkromné poznámky bokom; {{ui:Zostať odomknuté na tomto zariadení}} je predvolene vypnuté.
- **Uložiť čistú kópiu.** {{ui:Uložiť čistú kópiu}} odstráni každú poznámku, súkromnú poznámku a všetko na pracovnej ploche. Použite ju pre súbor, ktorý ide klientovi.

### Prepojenie celej sady

- **Dávkové prepojenia.** Vyberte {{ui:Strany}} › {{ui:Dávkové prepojenia…}}, alebo {{ui:Prepojiť odkazy na listy…}} pod {{ui:Hľadať text}} na paneli {{ui:Listy}}. Krok 1 uvádza číslo a názov každého listu, ako sa prečítali z jeho popisového poľa; nesprávne opravte. Krok 2 uvádza nájdené odkazy, napríklad `3/A-501` alebo `DETAIL 2 ON A-501`. {{ui:Prepojí sa}} zobrazí list a pohľad pre každý z nich, {{ui:Nie je prepojené}} zobrazí čísla, ktoré žiaden otvorený list nemá, a {{ui:Vytvoriť odkazy}} ich vytvorí všetky v jednom kroku späť. Po dodatku alebo prečíslovaní to spustite znova; odkazy, ktoré ste vytvorili ručne, sa nikdy nemenia. Odkaz s pohľadom sa uloží ako odkaz PDF, takže iné čítačky otvoria aj detail. Pozrite si [Odkazy na listy](topic:sheet-links).

### Výkres

- **Oblúk, desať metód.** Nástroj {{ui:Oblúk}} ({{key:O}}) má teraz nad stranou okno {{ui:Spôsob oblúka}} s desiatimi spôsobmi, ako nakresliť oblúk, a uhol, dĺžku, polomer a smer možno kliknúť alebo zadať. Pozrite si [Nakreslite oblúk desiatimi spôsobmi](topic:draw-an-arc).

### Spoločná práca

- **Sledovanie revidujúceho.** V relácii Live vyberte {{ui:Sledovať}} vedľa mena osoby a váš pohľad sa posunie spolu s jej pohľadom; vlastné posúvanie alebo priblíženie to zastaví. Hostiteľ môže vybrať {{ui:Požiadať všetkých, aby ma sledovali}}. Zoznam ľudí zobrazuje farbu, meno každej osoby, list, na ktorom je, a čas jej poslednej úpravy. Pozrite si [Sledovanie iného revidujúceho v relácii Live](topic:follow-in-live).

## Vo všetkých aplikáciách

- Popisky sú popisky Bootstrap, úvodný tip sa dá zavrieť, pásy kariet sa posúvajú, keď pretečú, a názvy kariet prehliadača sú `<document> — MarkupCraft | CadCraft`.
- Panel s viacerými sekciami otvorí jednu a zatvorí ostatné (zámok vedľa šípky ponechá jednu otvorenú); prepínač v nastaveniach to vypne.
- Každá aplikácia sa spustí z predvolenej zbierky objektov knižnice.
- Jednotky hmotnosti a teploty sú dostupné v nastaveniach jednotiek.

## Opravené

- **Odstránené poznámky už nezostávajú čitateľné v uloženom PDF.** Ukladanie kedysi odstránilo zmazanú alebo prepísanú anotáciu zo strany, ale objekt s jej textom zostal v súbore. Uloženie teraz tieto objekty odstráni. Súbory uložené staršími zostavami ich obsahujú, kým ich znova neuložíte.

## Čestné obmedzenia

- Dávkové prepojenia boli vyskúšané na našich vlastných testovacích sadách. Skutočné sady kreslia bubliny mnohými spôsobmi, takže na klientskej sade môžu niektoré pohľady chýbať. Naskenované listy najprv vyžadujú {{ui:Prečítať text (OCR)…}}.
- Poznámky, súkromné poznámky a pracovná plocha boli testované v bezhlavom prehliadači a na našich vlastných súboroch, nie na veľkej reálnej vektorovej sade a nie v skutočnej relácii Live pre dvoch ľudí. Zmena hesla ešte nie je hotová. Zostavy staršie ako 0.9 poznámky nezobrazujú.
- Zobrazenie triedy je zoznam ľudí; nebolo vyskúšané so skutočným učiteľom a študentmi.
- Jazyky iné ako angličtina sú strojové koncepty, kým ich neprečíta rodený hovorca.
- Inštalátory pre Windows nie sú podpísané kódom (Ďalšie informácie, potom Spustiť aj tak); obraz disku pre macOS nie je notarizovaný (kliknite pravým tlačidlom, potom Otvoriť).

## Skôr: 0.8 a 0.8.1

Toto sa zmenilo vo verzii MarkupCraft 0.8 a 0.8.1 v porovnaní s verziou 0.7. Veľkou novinkou je, že poznámka môže byť úloha, ktorú vykoná niekto alebo váš vlastný asistent, a ktorá sa sama uzavrie, keď sa výkres skutočne zmení.

### Novinky

**Poznámky, ktoré konajú**

- **Urobte z poznámky úlohu.** Vyberte jednu alebo viac poznámok, otvorte kartu {{ui:Úlohy}} a vyberte {{ui:Urobiť z vybraného úlohu}}. Úloha má názov, osobu alebo pripojeného asistenta, ktorý ju má vykonať, voliteľný termín a stav; zachováva si miesto na liste a svoje vlákno. Pozrite si [Urobte z poznámky úlohu](topic:markups-that-act).
- **Úlohy, ktoré sa uzavrú samy.** Úloha môže sledovať výkres vnútri svojej poznámky. Otvorte novšiu revíziu listu a vyberte {{ui:Skontrolovať teraz}}: ak sa čiary v tej oblasti zmenili o viac než o chlp, úloha sa označí ako Hotovo, jej poznámka sa stane Dokončené a poznámka vo vlákne popíše, čo sa zmenilo. Nový dátumový pečiatok alebo čiary, ktoré sa posunuli menej než o 1.5 bodu, sa nepočítajú. Úloha môže namiesto toho sledovať prvok modelu: váš asistent nahlási prvok pomocou `tasks_check` a neskoršie nahlásenie, ktoré sa líši, alebo zmazaný prvok úlohu uzavrie. Jeden krok späť ju znova otvorí.
- **Nájdite prácu.** Filtrujte zoznam {{ui:Úlohy}} podľa stavu a podľa toho, pre koho je, vrátane {{ui:Po termíne}}; vyberte {{ui:Pridelené}}, potom {{ui:Asistent}}, aby ste videli, čo čaká na vášho asistenta. Úloha po termíne sa zobrazí ako upozornenie v paneli Problémy. {{ui:CSV}} exportuje zoznam. Úlohy sa uložia v PDF spolu s poznámkou a pri Live sa prenášajú ako iné vlastnosti poznámok.

**Čo sa zmenilo ako prostý zoznam**

- **Zoznam zmien.** Otvorte kartu {{ui:Porovnať}}, potom vyberte Porovnať celú sadu, zvoľte skorší a neskorší súbor a vyberte {{ui:Zobraziť zoznam zmien}}. Zoznam začína počtom a potom pokrýva každý zmenený list, od najväčšej zmeny: kde na liste, aká veľká (v skutočných jednotkách aj v palcoch papiera na kalibrovanom liste), či sa čiary pridali alebo odstránili, koľko poznámok tam je a ktoré slová sa objavili alebo zmizli. {{ui:Kopírovať zoznam}} ho uloží do schránky a {{ui:CSV}} zapíše jeden riadok na každú zmenu. Pozrite si [Zoznam zmien medzi revíziami slovami](topic:what-changed-in-words).

**Hlasové poznámky a rozhodnutia**

- **Hlasové poznámky.** Na karte {{ui:Poznámky}} vyberte {{ui:Nahrať hlasovú poznámku}}, potom {{ui:Zastaviť nahrávanie}}; nahrávky sa samy zastavia po dvoch minútach. Poznámka je pripnutá v strede listu; presuňte ju tam, kam patrí, a popis zadajte v {{ui:Vlastnosti}}. {{ui:Prehrať}} v zozname ju prehrá. Nahrávka sa uloží do PDF.
- **Rozhodnutia.** {{ui:Pripnúť rozhodnutie}} zapíše na list jednu alebo dve vety. Ak nahrádza skoršie rozhodnutie, vyberte ho v {{ui:Nahrádza}}: staré zostane, označené ako Nahradené, a odkazuje na nové. Jeden krok späť ho vráti. Pozrite si [Pripnutie hlasových poznámok a rozhodnutí na list](topic:voice-notes-and-decisions).

**Červené opravy do revízie**

- **Odoslanie a odpoveď.** Na karte {{ui:Úlohy}} otvorte {{ui:Červené opravy do revízie}}, zadajte revíziu, voči ktorej sú poznámky, a vyberte {{ui:Exportovať súbor červených opráv}}. Dostanete súbor `.redline.json` s jednou položkou na každú otvorenú poznámku: list, pozícia (ako zlomky listu, takže nové vykreslenie v inej veľkosti sa stále zarovná), slová, autor, vlákno a jeho úloha. Ten, kto robí zmeny, odpovie Prijaté, Zamietnuté alebo Hotovo v súbore `.redline-answers.json`; {{ui:Načítať súbor odpovedí…}} dá každej poznámke tento stav a poznámku kresliča ako jeden krok späť. Pozrite si [Odoslanie poznámok kresličovi ako červených opráv](topic:redline-to-revision).

**AI asistenti**

- **Viac nástrojov.** Asistent, ktorého ste pripojili cez CadCraft Studio, môže vypísať úlohy (`tasks_list`), vytvoriť alebo zmeniť jednu (`task_set`), odobrať úlohu (`task_clear`), skontrolovať ju voči novšej revízii alebo prvku (`tasks_check`) a prečítať prostý zoznam zmien medzi dvoma otvorenými sadami plánov (`revisions_changes`). Dostane iba nástroje, ktoré ste označili pod prepínačom Asistenti, a každá zmena je jeden krok späť. Pozrite si [Používanie MarkupCraft s AI asistentom](topic:use-with-ai-assistants).

### V každej aplikácii

- **Jazyky.** CadCraft Studio má teraz 54 jazykov. Desať je nových: litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina. Všetky neanglické sú strojové koncepty, kým ich neprečíta rodený hovorca.
- **Vstupné zariadenia.** {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Vstupné zariadenia}} nastavuje, čo robí touchpad, bočné tlačidlá myši, pero, klepnutia prstom, 3D myš, herný ovládač alebo MIDI ovládač, a to pre každú aplikáciu alebo len pre túto. Kým niečo nezmeníte, každé zariadenie funguje ako predtým. Pozrite si [Použitie touchpadu, 3D myši alebo ovládača](common:input-devices).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka {{ui:Zalomiť}} (predvolené), {{ui:2 riadky}} a {{ui:1 riadok}}, takže výkres má viac miesta. Pozrite si [Usporiadanie panelov](common:arrange-panels).
- **Mriežka vlastností.** Polia Štýl poznámky používajú spoločnú mriežku so zbaliteľnými kategóriami a stĺpcami názvu a hodnoty.
- **Panel problémov.** Upozornenia z aplikácie, napríklad úloha po termíne, sa zbierajú v jednom paneli Problémy.
- **Live a doplnky.** Relácie Live sú opísané v [Práca spolu naživo](common:work-together-live); zoznam doplnkov, ktorý nasleduje váš účet, je v [Doplnky a zoznam vášho účtu](common:addons-basics).
- **Pripojte svoju AI.** CadCraft Studio je centrum pre vášho vlastného asistenta: pripojte ho raz pre všetkých osem aplikácií. Aplikácie neobsahujú vlastnú AI.

### Opravené vo verzii 0.8.1

- **Studio môže prepnúť jazyk počas behu.** Predtým desktopová aplikácia a zabalené vydania zostávali v angličtine. Ešte nebolo otestované na každej platforme: ak sa jazyk nezmení, dajte nám vedieť.
- Inštalácie Studio 0.8 dostanú ponuku na 0.8.1 cez {{ui:Nastavenia}} › {{ui:Aktualizácie}}.

### Ešte nie je v tejto verzii

- **Nie je podpísané kódom.** Inštalátory pre Windows a .dmg pre macOS zatiaľ nemajú podpis. Vo Windows, ak SmartScreen zastaví inštalátor, vyberte {{ui:Ďalšie informácie}}, potom {{ui:Spustiť aj tak}}. Na Macu kliknite pravým tlačidlom na CadCraft Studio a vyberte {{ui:Otvoriť}}. Zostavy pre Store sú pozastavené.
- **Pripojenie AI je v niektorých miestach nedokončené.** Pripojenie jedným kliknutím v Studio, hostovaný konektor pre webových asistentov a váš vlastný API kľúč v Studio nie sú sľúbené pre toto vydanie. Slučka úloh bola otestovaná, ale zatiaľ nie so skutočným asistentom.
- **Kontroly úloh vyžadujú rovnakú veľkosť strany.** List znova vykreslený v inej veľkosti sa nezhoduje, takže jeho úlohy sa neuzavrú. Listy sa párujú podľa čísla listu, inak podľa pozície strany.
- **Hlasové poznámky sú len nahrávky.** Neexistuje žiadny prepis a asistent vidí dĺžku, autora a popis poznámky, nie zvuk. Nahrávanie bolo vyskúšané s falošným mikrofónom v bezhlavom prehliadači; skutočný mikrofón na telefóne, tablete alebo notebooku ešte treba overiť.
- **Výpočtové listy a dôvody v PDF** sa uchovávajú v súkromnom zázname súboru. Starší MarkupCraft tento záznam ignoruje a pri ďalšom uložení ho zahodí, preto takýto súbor otvárajte a ukladajte s verziou 0.8 alebo novšou.
- **Strana kresliča pri červených opravách.** Čítanie súboru redline v CadCraft a odpovedanie na neho ešte nie je hotové.
- **Ostatné jazyky.** Aplikačná lišta tamilčiny pretečie o 528 px.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Pre vydanie pred týmto pozrite [Novinky vo verzii 0.7](topic:whats-new-0-7).
