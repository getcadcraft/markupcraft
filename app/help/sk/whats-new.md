---
title: Novinky vo verziách 0.8 a 0.8.1
summary: Poznámky, ktoré sa menia na úlohy a uzatvárajú sa samy, jednoduchý zoznam zmien medzi revíziami, hlasové poznámky a rozhodnutia na liste, súbory červených opráv pre tvorcu výkresov a spoločné zmeny 0.8: vstupné zariadenia, riadky panela nástrojov, panel Problémy, viac jazykov.
keywords: novinky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.8, 0.8.1, verzia, nové funkcie, úloha, úlohy, pridelené, dátum termínu, po termíne, skontrolovať teraz, čo sa zmenilo, revízie, porovnať, hlasová poznámka, rozhodnutie, červené opravy, súbor odpovedí, tvorca výkresov, asistent, mcp, problémy, jazyky, vstupné zariadenia, touchpad, riadky panela nástrojov, mriežka vlastností, aktualizácia
from: 40368796
---

Toto sa zmenilo v MarkupCraft 0.8 a 0.8.1 v porovnaní s verziou 0.7. Najväčšou novinkou je, že poznámka môže byť úloha, ktorú vykoná niekto alebo váš vlastný asistent, a táto úloha sa uzavrie sama, keď sa výkres skutočne zmení.

## Novinky

### Poznámky, ktoré konajú

- **Premena poznámky na úlohu.** Vyberte jednu alebo viac poznámok, otvorte kartu {{ui:Úlohy}} a zvoľte {{ui:Urobiť z vybraného úlohu}}. Úloha má názov, osobu alebo vášho pripojeného asistenta, ktorý ju vykoná, voliteľný termín a stav, a zachováva si svoje miesto na liste aj svoje vlákno. Pozri [Premena poznámky na úlohu](topic:markups-that-act).
- **Úlohy, ktoré sa uzavrú samy.** Úloha môže sledovať výkres v rámci svojej poznámky. Otvorte novšiu revíziu listu a zvoľte {{ui:Skontrolovať teraz}}: ak sa čiary v tejto oblasti zmenili o viac než vlások, úloha sa označí ako Dokončená, jej poznámka sa stane Dokončenou a poznámka vo vlákne opíše, čo sa zmenilo. Nový dátum alebo čiary, ktoré sa posunuli menej než o 1,5 bodu, sa nepočítajú. Úloha môže namiesto toho sledovať prvok modelu: váš asistent nahlási prvok pomocou `tasks_check` a neskoršie hlásenie, ktoré sa líši, alebo odstránený prvok úlohu uzavrie. Jeden krok späť ju znova otvorí.
- **Nájdenie práce.** Filtrujte zoznam {{ui:Úlohy}} podľa stavu a podľa osoby, pre ktorú je určená, vrátane {{ui:Po termíne}}; zvoľte {{ui:Pridelené}}, potom {{ui:Asistent}}, aby ste videli, čo čaká na vášho asistenta. Úloha, ktorá je po termíne, sa zobrazí ako upozornenie v paneli Problémy. {{ui:CSV}} exportuje zoznam. Úlohy sa uložia do súboru PDF spolu s poznámkou a cez Naživo sa prenášajú ako ostatné vlastnosti poznámok.

### Čo sa zmenilo, ako jednoduchý zoznam

- **Zobraziť zoznam zmien.** Otvorte kartu {{ui:Porovnať}}, potom {{ui:Porovnať celý súbor listov}}, vyberte skorší a neskorší súbor a zvoľte {{ui:Zobraziť zoznam zmien}}. Zoznam začína počtom, potom pokrýva každý zmenený list, od najväčšej zmeny: kde na liste, aká veľká (v reálnych jednotkách aj v palcoch papiera na kalibrovanom liste), či čiary pribudli alebo zmizli, koľko poznámok tam je a ktoré slová sa objavili alebo zmizli. {{ui:Kopírovať zoznam}} ho uloží do schránky a {{ui:CSV}} zapíše jeden riadok na každú zmenu. Pozri [Zoznam toho, čo sa zmenilo medzi revíziami](topic:what-changed-in-words).

### Hlasové poznámky a rozhodnutia

- **Hlasové poznámky.** Na karte {{ui:Poznámky}} zvoľte {{ui:Nahrať hlasovú poznámku}} a potom {{ui:Zastaviť nahrávanie}}; nahrávky sa samé zastavia po dvoch minútach. Poznámka je pripnutá v strede listu; presuniete ju tam, kam patrí, a popis zadáte v {{ui:Vlastnosti}}. Tlačidlo {{ui:Prehrať}} v zozname ju prehrá. Nahrávka sa uloží do súboru PDF.
- **Rozhodnutia.** {{ui:Pripnúť rozhodnutie}} zapíše na list jednu alebo dve vety. Ak nahrádza skoršie rozhodnutie, vyberte ho v {{ui:Nahrádza}}: staré rozhodnutie zostane, označí sa ako Nahradené a odkazuje na nové. Jeden krok späť ho vráti. Pozri [Pripnutie hlasových poznámok a rozhodnutí na list](topic:voice-notes-and-decisions).

### Červené opravy do revízie

- **Odoslanie a odpoveď.** Na karte {{ui:Úlohy}} otvorte {{ui:Červené opravy do revízie}}, zadajte revíziu, voči ktorej sú poznámky, a zvoľte {{ui:Exportovať súbor červených opráv}}. Dostanete súbor `.redline.json` s jednou položkou pre každú otvorenú poznámku: list, polohu (ako zlomky listu, takže nové vykreslenie v inom formáte stále sedí), texty, autora, vlákno a jeho úlohu. Kto zmeny kreslí, odpovedá stavom Prijaté, Zamietnuté alebo Dokončené v súbore `.redline-answers.json`; {{ui:Načítať súbor odpovedí…}} priradí každej poznámke tento stav a poznámku tvorcu výkresov ako jeden krok späť. Pozri [Odoslanie poznámok tvorcovi výkresov ako červených opráv](topic:redline-to-revision).

### Asistenti AI

- **Ďalšie nástroje.** Asistent, ktorého ste pripojili cez CadCraft Studio, môže vypísať úlohy (`tasks_list`), vytvoriť alebo zmeniť jednu (`task_set`), úlohu zrušiť (`task_clear`), skontrolovať ju voči novšej revízii alebo prvku (`tasks_check`) a prečítať jednoduchý zoznam zmien medzi dvoma otvorenými súbormi výkresov (`revisions_changes`). Dostane len tie nástroje, ktoré ste označili pod prepínačom Asistenti, a každá zmena je jeden krok späť. Pozri [Používanie MarkupCraft s asistentom AI](topic:use-with-ai-assistants).

## Vo všetkých aplikáciách

- **Jazyky.** CadCraft Studio má teraz 54 jazykov. Desať je nových: litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina a uzbečtina. Všetky jazyky okrem angličtiny sú zatiaľ strojové koncepty, kým ich neprečíta rodený hovorca.
- **Vstupné zariadenia.** {{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Vstupné zariadenia}} určuje, čo robí touchpad, bočné tlačidlá myši, pero, klepnutie prstom, 3D myš, herný ovládač alebo MIDI ovládač, a to pre každú aplikáciu alebo len pre túto. Kým niečo nezmeníte, každé zariadenie funguje ako predtým. Pozri [Používanie touchpadu, 3D myši alebo ovládača](common:input-devices).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka {{ui:Zalomiť}} (predvolené), {{ui:2 riadky}} a {{ui:1 riadok}}, aby výkres mal viac miesta. Pozri [Usporiadanie panelov](common:arrange-panels).
- **Mriežka vlastností.** Polia štýlu poznámky používajú spoločnú mriežku so zbaľovacími kategóriami a stĺpcami názvu a hodnoty.
- **Panel Problémy.** Upozornenia z aplikácie, napríklad úloha po termíne, sa zhromažďujú v jednom paneli Problémy.
- **Naživo a doplnky.** Relácie naživo sú opísané v [Spolupráca naživo](common:work-together-live); zoznam doplnkov, ktorý nasleduje váš účet, je v [Doplnky a zoznam vášho účtu](common:addons-basics).
- **Pripojenie AI.** CadCraft Studio je centrum pre vášho vlastného asistenta: pripojte ho raz pre všetkých osem aplikácií. Aplikácie samy žiadnu AI neobsahujú.

## Opravené vo verzii 0.8.1

- **Studio dokáže prepnúť jazyk za behu.** Predtým desktopová aplikácia a zabalené vydania zostali v angličtine. Ešte to nie je otestované na každej platforme: dajte nám vedieť, ak sa jazyk nezmení.
- Inštaláciám Studio 0.8 sa ponúka 0.8.1 cez {{ui:Nastavenia}} › {{ui:Aktualizácie}}.

## Ešte nie je v tejto verzii

- **Bez podpisu kódu.** Inštalátory pre Windows a súbor .dmg pre macOS zatiaľ nemajú podpis. Na Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Spustiť aj tak}}. Na Macu kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. Verzie pre obchody sú pozastavené.
- **Pripojenie AI je miestami nedokončené.** Pripojenie jedným kliknutím v Studiu, hostiteľský konektor pre asistentov v prehliadači a váš vlastný kľúč API v Studiu nie sú v tomto vydaní sľúbené. Slučka úloh bola otestovaná, ale zatiaľ nie so skutočným asistentom.
- **Kontroly úloh vyžadujú rovnaký formát strany.** List znova vykreslený v inom formáte sa nezhoduje, takže jeho úlohy sa neuzavrú. Listy sa párujú podľa čísla listu, inak podľa pozície strany.
- **Hlasové poznámky sú len nahrávky.** Neexistuje prepis a asistent vidí dĺžku, autora a popis poznámky, nie zvuk. Nahrávanie sa vyskúšalo s falošným mikrofónom v bezhlavom prehliadači; skutočný mikrofón na telefóne, tablete alebo notebooku ešte treba overiť.
- **Výpočtové listy a dôvody v PDF** sa uchovávajú v súkromnom zázname súboru. Staršia verzia MarkupCraft tento záznam ignoruje a pri ďalšom uložení súboru ho zahodí, preto takýto súbor otvárajte a ukladajte vo verzii 0.8 alebo novšej.
- **Strana tvorcu výkresov pri červených opravách.** Čítanie súboru červených opráv v CadCraft a odpovedanie na neho ešte nie je hotové.
- **Ďalšie jazyky.** Panel aplikácie pre tamilčinu presahuje o 528 px.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet). Pre predchádzajúce vydanie pozri [Novinky vo verzii 0.7](topic:whats-new-0-7).
