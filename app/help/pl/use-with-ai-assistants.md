---
title: Używanie MarkupCraft z asystentem AI
summary: Pozwól swojemu asystentowi AI albo skryptowi wyświetlać listę adnotacji zestawu, dodawać proste, ustawiać ich status, odpowiadać i eksportować listę: uprawnienia, łączenie przez CadCraft Studio oraz dziennik aktywności.
keywords: ai, asystent, agent, mcp, model context protocol, skrypt, automatyzacja, adnotacje, przegląd, uprawnienia, rozłączenie, aktywność
from: 095f2977
---

## Czego się nauczysz

Jak pozwolić asystentowi AI (albo napisanemu przez Ciebie skryptowi) pracować z MarkupCraft i jak zdecydować, czego może dotykać.

MarkupCraft **nie ma własnej AI** i niczego nigdzie nie wysyła. Asystenta przynosisz Ty: dowolny program obsługujący Model Context Protocol (MCP). MarkupCraft jedynie udostępnia mu narzędzia, a Ty wybierasz, które.

## Włącz to

1. Otwórz {{ui:Settings}} (koło zębate na pasku aplikacji albo {{key:Mod+,}}) i przejdź do karty {{ui:MarkupCraft}}.
2. W sekcji {{ui:Assistants}} zaznacz **Zezwalaj asystentom AI i skryptom na korzystanie z MarkupCraft**. Jest wyłączone, dopóki tego nie zrobisz.
3. Wybierz, co może robić: **Odczyt** jest zaznaczony na start; zaznacz **Edycja**, **Zapisz** albo **Eksportuj** tylko wtedy, gdy ich potrzebujesz.

Narzędzia spoza zaznaczonych uprawnień nie są oferowane asystentowi, a jeśli mimo to o jedno poprosi, MarkupCraft je odmawia i zapisuje to w dzienniku aktywności. Wyłączenie przełącznika kończy wszystkie połączenia naraz; {{ui:Reset MarkupCraft settings}} również go wyłącza.

## Połącz asystenta

Asystenci łączą się przez **CadCraft Studio** na Twoim komputerze: Studio uruchamia mały serwer, do którego dotrze tylko ten komputer, chroniony tokenem, który tworzy przy każdym uruchomieniu. W Studio wybierz {{ui:Connect an assistant}} i skopiuj adres oraz token do swojego asystenta (Studio pokazuje dokładne ustawienia do wklejenia). Nigdy nie udostępniaj tokenu.

:::note
Karta przeglądarki nie może otworzyć połączenia dla asystenta: w aplikacjach przeglądarkowych przełącznik nie działa, dopóki nie użyjesz CadCraft Studio na swoim komputerze.
:::

## Ty nadal masz kontrolę

- **Każda zmiana to jeden krok cofnięcia**, opisany nazwą asystenta (na przykład "Asystent: dodaj cloudrect"). {{key:Mod+Z}} cofa ostatnią zmianę asystenta w całości.
- **Wiesz, kiedy jest połączony.** Przycisk na pasku aplikacji podaje nazwę asystenta, gdy jest połączony; kliknij go, aby zobaczyć, co może robić, albo aby go **Rozłączyć**.
- **Aktywność.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} wypisuje każde wywołanie: kiedy, które narzędzie, wykonane czy odmówione. {{ui:Save the log}} zachowuje kopię.

## O co może poprosić asystent

| Narzędzie | Uprawnienie | Co robi |
|---|---|---|
| `app_info`, `sheets_list` | Odczyt | Otwarte zestawy, ich arkusze i liczba adnotacji w każdym |
| `markups_list` | Odczyt | Adnotacje z typem, arkuszem, tekstem, komentarzem, pomiarem, statusem, autorem i odpowiedziami, filtrowane według arkusza, statusu, typu lub autora |
| `markup_add` | Edycja | Dodaje do arkusza prostokąt, chmurę, elipsę, pole tekstowe, notatkę, linię lub strzałkę |
| `markup_status`, `markup_reply` | Edycja | Ustawia status adnotacji (zapisywany w jej wątku, podpisany przez asystenta); dodaje komentarz do wątku |
| `markups_export` | Eksportuj | CSV lub BCF listy {{ui:Markups}} z tym, co pokazuje lista (z jej filtrami, ustawionymi przez Ciebie); w Studio może zapisać plik do folderu, na który zezwoliłeś |
| `tasks_list` | Odczyt | Adnotacje będące zadaniami: osoba przypisana (osoba albo asystent), dzień terminu, stan, link, sposób zamknięcia. `assignee: "assistant"` wypisuje pracę czekającą na asystenta |
| `task_set`, `task_clear` | Edycja | Zamienia adnotację w zadanie albo je zmienia (tytuł, osoba przypisana, termin, stan, link); zdejmuje zadanie |
| `tasks_check` | Edycja | Zamyka zadania, których powiązany obszar rysunku albo element modelu rzeczywiście się zmienił; przekaż stany elementów odczytane z innej aplikacji |
| `revisions_changes` | Odczyt | Zwykła lista tego, co zmieniło się między dwoma otwartymi zestawami arkuszy, do przekazania własnymi słowami |
| `pins_list`, `decision_add` | Odczyt, Edycja | Notatki głosowe (długość, kto, kiedy, podpis; nigdy dźwięk ani transkrypcja) i decyzje; przypnij decyzję i zastąp wcześniejszą |
| `redline_export`, `redline_answer` | Eksportuj, Edycja | Zapisuje plik redline dla projektanta; stosuje odpowiedzi projektanta |

Adnotacja dodana przez asystenta podaje jako autora nazwę, którą program asystenta nadaje sam sobie, z dopiskiem "(asystent)", albo "(asystent dla <twoje imię>)", gdy ustawisz swoje imię recenzenta. Zmiany jego statusu i jego odpowiedzi są podpisywane w ten sam sposób. Każda z nich to jeden krok cofnięcia. Zapis zaznaczonego PDF pozostaje po Twojej stronie: użyj {{ui:Save}} jak zwykle.

Bez otwierania MarkupCraft serwer MCP CadCraft wypisuje adnotacje PDF z folderu, który wskażesz (`markups_list`), a `cadcraft info Set.pdf` wypisuje je w wierszu poleceń.

## Gdy coś nie działa

- **Asystent nie widzi narzędzi MarkupCraft:** sprawdź, czy przełącznik jest włączony w tym oknie i czy okno jest otwarte w Studio.
- **"wymaga uprawnienia do edycji":** zaznacz **Edycja** w sekcji {{ui:Assistants}}, a następnie zapytaj ponownie.
- **Błędy "401" albo "token":** token się zmienił (Studio uruchomiło się ponownie albo wybrano {{ui:New token}}). Skopiuj nowy token do ustawień asystenta.

## Zobacz także

- [Przepisy dla asystentów AI](common:assistants-recipes): działające przykłady, każdy z narzędziami, które wywołuje.
