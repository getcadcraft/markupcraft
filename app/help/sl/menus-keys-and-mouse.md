---
title: Meniji, tipke in miška
summary: Izberite lastno orodno vrstico MarkupCrafta, meni za pregled PDF ali trak, dajte kateremu koli orodju svojo tipko, premaknite orodja med meniji in nastavite, kaj počnejo kolesce in gumbi miške.
keywords: slog menija, meniji, menijska vrstica, orodna vrstica, trak, zavihki, pregled pdf, bližnjice, tipke, prilagodi, preslikaj, ponovno določi, miška, kolesce, obrni, smer povečave, srednji gumb, desni gumb, pomik, izvoz, uvoz, preklapljanje, znano
from: 081438a6
---

Orodja MarkupCrafta so enaka, kakor koli do njih pridete. **Slog menija** le določa, kje so na zaslonu, kako se imenujejo in s katerimi tipkami jih izberete. Izberite ga v {{ui:Nastavitve}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Meniji, tipke in miška}}; sprememba je takojšnja, ta brskalnik pa si jo zapomni.

## Trije slogi

| Slog | Kaj dobite |
|---|---|
| {{ui:MarkupCraft}} | Lastna orodna vrstica MarkupCrafta ({{ui:Datoteka}}, {{ui:Izbor}}, Riši, Revizija, Označi, {{ui:Merjenje}}, {{ui:Urejanje}}) in njegove enočrkovne tipke: {{key:V}} izbor, {{key:H}} pomik, {{key:P}} pisalo, {{key:I}} poudarek, {{key:L}} črta, {{key:A}} puščica, {{key:R}} pravokotnik, {{key:E}} elipsa, {{key:C}} oblak, {{key:K}} oblaček, {{key:T}} besedilo, {{key:N}} opomba, {{key:S}} žig, {{key:M}} dolžina, {{key:Q}} površina, {{key:U}} štetje. Začetni slog. |
| {{ui:Pregled PDF}} | Vrstica menijev ({{ui:Datoteka}}, {{ui:Urejanje}}, {{ui:Pogled}}, {{ui:Dokument}}, {{ui:Označba}}, {{ui:Merjenje}}, {{ui:Pregled}}, {{ui:Okno}}) nad vrsto orodij za pregled, s tipkami, razporejenimi tako, kakor jih nastavljajo programi za pregled PDF: {{key:V}} izbor, {{key:Shift+V}} pomik, {{key:H}} poudarek, {{key:Q}} oblaček, {{key:N}} mnogokotnik, {{key:Shift+N}} polilinija, {{key:Shift+T}} opomba, {{key:Shift+A}} lok, meritve pa na {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibriraj, {{key:Alt+Shift+L}} dolžina, {{key:Alt+Shift+G}} kot, {{key:Alt+Shift+A}} površina, {{key:Alt+Shift+C}} štetje. {{key:Alt+L}} odpre seznam označb. Srednji gumb pomika; desni klik ne. |
| {{ui:Trak}} | Zavihki, poimenovani po delu: {{ui:Označevanje}} (izbor, risanje, oblaki, oblački, besedilo, opombe, žigi), {{ui:Merjenje}}, {{ui:Urejanje}}, {{ui:Pregled}} (seznam označb in njegovi izvozi, zadeve BCF, seznam pomanjkljivosti, terenski zapisi, skrinja orodij, primerjava), {{ui:Strani}} in {{ui:Pogled}}, z {{ui:Datoteka}} in hitrimi gumbi za odpiranje, shranjevanje, razveljavitev in uveljavitev. Orodja ohranijo enočrkovne tipke MarkupCrafta. Gumb za podokno, ki ni odprto, najprej odpre to podokno. |

Vsi slogi ohranijo tipke {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} za prilagoditev strani in {{key:Mod+9}} za prilagoditev širini; {{key:PageUp}} in {{key:PageDown}} menjata list.

:::tip
Tipka, ki pripada lastni postavitvi MarkupCrafta, ne pa slogu, ki ste ga izbrali, ne naredi ničesar, vrstica stanja pa pove, kam je šlo njeno orodje („V pregledu PDF je Oblaček Q“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} in puščične tipke vedno ohranijo svoj pomen. Med vnašanjem v polje za besedilo, oblaček ali opombo pripada vsaka tipka besedilu, številke, vnesene med risanjem, pa še vedno odprejo polje za dolžino.
:::

## Prilagodite po svojih željah

1. Izberite slog, ki je najbližje želenemu, nato kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke in meniji}} poiščite orodje (pomaga iskalno polje). Kliknite {{ui:Dodaj tipko}} in pritisnite tipko ali dve tipki zaporedoma za dvočrkovno tipko. Kliknite tipko, da jo odstranite.
3. Z vrstico menijev {{ui:Kje je}} premaknete orodje v drug meni ali na {{ui:Samo tipke}}.
4. Na {{ui:Miška}} nastavite kolesce in gumbe, ki pomikajo list.
5. Dajte mu ime in kliknite {{ui:Shrani}}.

Shranjevanje vgrajenega sloga ustvari vašo kopijo („Moj pregled PDF“); vgrajeni slog se nikoli ne spremeni. Tipka, dodeljena dvema orodjema, je prikazana rdeče in jo je treba popraviti, preden lahko shranite.

## Miška

- **Kolesce miške**: {{ui:Drsenje navzgor poveča}} (začetna nastavitev) ali {{ui:Drsenje navzgor pomanjša}}, in kako hitro. Stisk s prsti na sledilni ploščici vedno povečuje v smeri, kot se gibljejo vaši prsti.
- **Pomik lista s**: srednjim gumbom, desnim gumbom ali obema. {{key:Space}} in vlečenje ter orodje {{ui:Pomik}} vedno pomikajo; levi gumb sicer riše in izbira, zato ga označitev tu ne spremeni.
- MarkupCraft nima 3D pogleda, zato gumbi 3D tu ne delujejo.

## Vzemite s seboj

{{ui:Izvozi}} shrani uporabljeni slog kot majhno datoteko `.ccinput.json`; {{ui:Uvozi…}} doda eno, z drugega računalnika ali od sodelavca. Uvožena datoteka lahko kaže samo na lastna orodja MarkupCrafta: vse drugo se izpusti in prešteje v vrstici stanja. {{ui:Izbriši ta slog}} odstrani enega od vaših.

:::note
Te nastavitve ostanejo v tem brskalniku. {{ui:Uporabi ta slog v vseh programih}} pod karticami slogov poskrbi, da se vsak program odpre v ustreznem slogu: {{ui:Pregled PDF}} gre z drugimi slogi vrstic menijev programov, {{ui:Trak}} z njihovimi trakovi, lastna orodna vrstica MarkupCrafta pa z njihovo. Program brez ustreznega sloga ohrani svojega.
:::

:::tip
Postavitve delovnega prostora v {{ui:Nastavitve}} › {{ui:Globalno}} › {{ui:Razporeditev}} ({{ui:Trak in brskalnik projekta}}, {{ui:Orodjarna in informacijsko polje}}) zgradijo svoj trak iz zavihkov sloga {{ui:Trak}}, svojo orodjarno pa iz orodne vrstice MarkupCrafta, zato vsako orodje v njih deluje enako.
:::

Povezano: [Tipkovnica in miška](topic:keyboard) · [Nastavitve MarkupCrafta](topic:settings) · [Prihod z drugih programov za označevanje](topic:coming-from)
