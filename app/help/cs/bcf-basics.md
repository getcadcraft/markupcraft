---
title: Základy BCF
summary: Co obsahuje export BCF z MarkupCraftu, jak ho použít s nástroji pro koordinaci BIM a jaká má omezení.
keywords: bcf, bcfzip, formát pro spolupráci BIM, problémy, koordinace, kolize, témata, pohled, snímek, openbim, buildingsmart, export problémů
from: 446f38c1
---

BCF (BIM Collaboration Format) je otevřený souborový formát pro předávání problémů mezi nástroji BIM. Mnoho programů pro koordinaci a tvorbu modelů umí importovat soubor `.bcfzip` jako seznam problémů. MarkupCraft zapisuje **BCF 2.1**.

## Vytvoření souboru

1. Otevřete kartu {{ui:Poznámky}}.
2. Filtrujte seznam na to, co chcete odeslat, například {{ui:Stav}} "Otevřeno". Exportují se jen uvedené poznámky.
3. Zvolte {{ui:BCF}}.
4. Počkejte, dokud se pro každou poznámku nevytvoří snímek ("Vytváření snímků pro BCF (5 z 20)…").

Výsledek: soubor "<name> markups.bcfzip" se stáhne a stavový řádek uvede, kolik témat obsahuje a jakou má velikost.

## Co je v souboru

Každá poznámka se stane jedním **tématem**:

| Pole tématu | Vyplněno |
|---|---|
| Název | Číslo položky, předmět a list, například "#4 Oblak na A-101 — Půdorys" |
| Typ | Druh poznámky (Oblak, Vynášecí text, Délka…) |
| Stav | Otevřeno, Přijato, Zamítnuto nebo Dokončeno |
| Štítky | Druh poznámky a list |
| Autor a data | Autor poznámky, datum vytvoření a datum poslední změny |
| Přiřazeno, termín | Z její položky závady, pokud ji má |
| Popis | Její text nebo znění razítka, naměřená hodnota, komentář, list a soubor |
| Komentáře | Jeden za každou odpověď, s autorem a datem |
| Snímek | Obrázek poznámky na její části listu |
| Pohled | Pohled shora na místo poznámky na listu |

Opětovný export stejné poznámky dá stejné ID tématu, takže nástroj, který importuje BCF, ji pozná jako tentýž problém.

## Omezení, o kterých je dobré vědět

- **List není model.** Pohled ukazuje na místo poznámky na papíře, měřeno v metrech papíru. Nedostanete se jím na místo v modelu. K nalezení místa použijte snímek a název listu.
- **Stavy a typy jsou vlastní MarkupCraftu** (Otevřeno, Přijato, Zamítnuto, Dokončeno; Oblak, Vynášecí text…). Soubor je deklaruje, jak BCF umožňuje, ale nástroj s vlastními pevnými seznamy je může převést nebo ignorovat.
- **Import přinese komentáře, ne pohledy na model.** {{ui:Importovat BCF}} přidá odpovědi a stavy k poznámkám, které jste exportovali, a u ostatních problémů vytvoří poznámky. Pohled kamery modelu nezobrazí. Viz [Seznam poznámek a export](topic:markups-list-and-export#import-bcf).
- Odeslání poznámek zpět jako PDF bývá u revizí výkresů jednodušší. BCF slouží k tomu, aby se komentáře k výkresům dostaly do pracovního postupu koordinace modelu.
