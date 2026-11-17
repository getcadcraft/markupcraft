---
title: Menuer, taster og mus
summary: Vælg MarkupCraft's egen værktøjslinje, en PDF-gennemgangsmenulinje eller et bånd, giv ethvert værktøj din egen tast, flyt værktøjer mellem menuer, og indstil hvad hjulet og museknapperne gør.
keywords: menustil, menuer, menulinje, værktøjslinje, bånd, faner, pdf-gennemgang, tastaturgenveje, hurtigtaster, taster, tilpas, genbind, mus, hjul, vend, zoomretning, midterknap, højreknap, panorér, eksport, importér, skift, velkendt
from: 081438a6
---

MarkupCraft's værktøjer er de samme, uanset hvordan du når dem. En **menustil** bestemmer kun, hvor de sidder på skærmen, hvad de hedder dér, og hvilke taster der vælger dem. Vælg en i {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menuer, taster og mus}}; ændringen træder i kraft med det samme, og denne browser husker den.

## De tre stilarter

| Stil | Hvad du får |
|---|---|
| {{ui:MarkupCraft}} | MarkupCraft's egen værktøjslinje (Fil, Vælg, Tegn, Revidér, Annotér, Mål, Rediger) og dens enkeltbogstavstaster: {{key:V}} vælg, {{key:H}} panorér, {{key:P}} pen, {{key:I}} fremhæver, {{key:L}} linje, {{key:A}} pil, {{key:R}} rektangel, {{key:E}} ellipse, {{key:C}} sky, {{key:K}} henvisning, {{key:T}} tekst, {{key:N}} notat, {{key:S}} stempel, {{key:M}} længde, {{key:Q}} areal, {{key:U}} tæl. Udgangspunktet. |
| {{ui:PDF-gennemgang}} | En menulinje ({{ui:Fil}}, {{ui:Rediger}}, {{ui:Visning}}, {{ui:Dokument}}, {{ui:Markér}}, {{ui:Mål}}, {{ui:Gennemgang}}, {{ui:Vindue}}) over en række gennemgangsværktøjer, med taster sat op, som PDF-gennemgangsprogrammer sætter deres: {{key:V}} vælg, {{key:Shift+V}} panorér, {{key:H}} fremhæver, {{key:Q}} henvisning, {{key:N}} polygon, {{key:Shift+N}} polylinje, {{key:Shift+T}} notat, {{key:Shift+A}} bue, og målingerne på {{key:Alt+Shift}}: {{key:Alt+Shift+K}} kalibrér, {{key:Alt+Shift+L}} længde, {{key:Alt+Shift+G}} vinkel, {{key:Alt+Shift+A}} areal, {{key:Alt+Shift+C}} tæl. {{key:Alt+L}} åbner markeringslisten. Midterknappen panorerer; et højreklik gør ikke. |
| {{ui:Bånd}} | Faner opkaldt efter arbejdet: {{ui:Markér}} (vælg, tegn, skyer, henvisninger, tekst, notater, stempler), {{ui:Mål}}, {{ui:Rediger}}, {{ui:Gennemgang}} (markeringslisten og dens eksporter, BCF-emner, mangellisten, feltregistreringer, værktøjskassen, sammenlign), {{ui:Sider}} og {{ui:Visning}}, med {{ui:Fil}} og hurtigknapper til åbn, gem, fortryd og gentag. Værktøjerne beholder MarkupCraft's egne enkeltbogstavstaster. En knap til et panel, der ikke er åbent, åbner først det panel. |

Hver stil beholder {{key:Mod}}-tasterne: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} {{ui:Tilpas side}} og {{key:Mod+9}} {{ui:Tilpas bredde}}; {{key:PageUp}} og {{key:PageDown}} skifter ark.

:::tip
En tast, der hører til MarkupCraft's egen opsætning, men ikke til den stil du valgte, gør ingenting, og statuslinjen siger, hvor dens værktøj er blevet af (»I PDF-gennemgang er Henvisning Q«). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piletasterne beholder altid deres betydning. Mens du skriver i en tekstboks, henvisning eller et notat, hører alle taster til teksten, og tal skrevet mens du tegner, åbner stadig længdefeltet.
:::

## Gør den til din egen

1. Vælg stilen tættest på det du vil have, og klik på {{ui:Tilpas…}}.
2. På {{ui:Taster og menuer}} finder du et værktøj (søgefeltet hjælper). Vælg {{ui:Tilføj en tast}} og tryk på tasten, eller to taster lige efter hinanden for en tobogstavstast. Klik på en tast for at fjerne den.
3. Med menulinjen flytter {{ui:Hvor den sidder}} værktøjet til en anden menu, eller til {{ui:Kun taster}}.
4. På {{ui:Mus}} indstiller du hjulet og de knapper, der panorerer arket.
5. Giv den et navn og klik på {{ui:Gem}}.

Når du gemmer en indbygget stil, laves din egen kopi (»Min PDF-gennemgang«); den indbyggede ændres aldrig. En tast givet til to værktøjer vises med rød farve og skal rettes, før du kan gemme.

## Mus

- **Musehjul**: {{ui:Rul op zoomer ind}} (udgangspunktet) eller {{ui:Rul op zoomer ud}}, og hvor hurtigt. Et knib på en trackpad zoomer altid den vej, dine fingre bevæger sig.
- **Panorér arket med**: midterknappen, højreknappen eller begge. {{key:Space}} og træk, og værktøjet {{ui:Panorér}}, panorerer altid; venstreknappen tegner og vælger ellers, så at sætte flueben ved den ændrer intet her.
- MarkupCraft har ingen 3D-visning, så 3D-knapperne gør ikke noget her.

## Tag den med dig

{{ui:Eksportér}} gemmer den stil, der er i brug, som en lille `.ccinput.json`-fil; {{ui:Importér…}} tilføjer en, fra en anden computer eller en kollega. En importeret fil kan kun pege på MarkupCraft's egne værktøjer: alt andet i den udelades og tælles i statuslinjen. {{ui:Slet denne stil}} fjerner en af dine egne.

:::note
Disse indstillinger bliver i denne browser. {{ui:Brug denne stil i alle apps}} under stilkortene får hver app til at åbne i sin tilsvarende stil: {{ui:PDF-gennemgang}} går sammen med de andre apps menulinjestile, {{ui:Bånd}} med deres bånd, og MarkupCraft's egen værktøjslinje med deres. En app uden en tilsvarende stil beholder sin egen.
:::

:::tip
Arbejdsområdelayouts i {{ui:Indstillinger}} › {{ui:Globalt}} › {{ui:Layout}} ({{ui:Bånd og projektbrowser}}, {{ui:Værktøjskasse og infoboks}}) bygger deres bånd ud fra {{ui:Bånd}}-stilens faner og deres værktøjskasse ud fra MarkupCraft's værktøjslinje, så hvert værktøj virker ens i dem.
:::

Relateret: [Tastatur og mus](topic:keyboard) · [MarkupCraft-indstillinger](topic:settings) · [Kommer fra andet markeringssoftware](topic:coming-from)
