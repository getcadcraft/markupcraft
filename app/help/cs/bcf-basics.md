---
title: Základy BCF
summary: Co obsahuje export BCF z aplikace MarkupCraft, jak ho používat s nástroji pro koordinaci BIM a jeho omezení.
keywords: bcf, bcfzip, bim collaboration format, problémy, koordinace, kolize, témata, pohled, snímek, openbim, buildingsmart, export problémů
from: 0de26175
---

BCF (BIM Collaboration Format) je otevřený formát souboru pro předávání problémů mezi nástroji BIM. Mnoho programů pro koordinaci modelů a tvorbu modelů umí importovat soubor `.bcfzip` jako seznam problémů. MarkupCraft zapisuje **BCF 2.1**.

## Vytvoření souboru

1. Otevřete kartu {{ui:Poznámky}}.
2. Filtrujte seznam podle toho, co chcete odeslat, například {{ui:Stav}} "Otevřeno". Exportují se pouze uvedené poznámky.
3. Zvolte {{ui:BCF}}.
4. Počkejte, dokud se pro každou poznámku nevytvoří snímek ("Vytváření snímků pro BCF (5 z 20)…").

Výsledek: soubor "<name> markups.bcfzip" se stáhne a stavový řádek uvede, kolik témat obsahuje a jak je velký.

## Co soubor obsahuje

Každá poznámka se stane jedním **tématem**:

| Pole tématu | Vyplněno |
|---|---|
| Title | Číslo položky závady, předmět a list, například "#4 Oblak na A-101 — Půdorys" |
| Type | Druh poznámky (Oblak, Výnoska, Délka…) |
| Status | Otevřeno, Přijato, Zamítnuto nebo Dokončeno |
| Labels | Druh poznámky a list |
| Author and dates | Autor poznámky, datum vytvoření a datum úpravy |
| Assigned to, due date | Z její položky závady, pokud ji má |
| Description | Její text nebo znění razítka, naměřená hodnota, komentář a list a soubor |
| Comments | Jeden na každou odpověď, s autorem a datem |
| Snapshot | Obrázek poznámky na její části listu |
| Viewpoint | Pohled shora na místo poznámky na listu |

Opětovný export téže poznámky dá stejné ID tématu, takže nástroj, který importuje BCF, ji pozná jako stejný problém.

## Co se naimportuje

{{ui:Importovat BCF}} čte soubory BCF 2.0, 2.1 a 3.0 (ověřeno na 19 oficiálních testovacích souborech buildingSMART 3.0: načetla se všechna témata a komentáře u tří z nich, které mají text). U tématu, které je vaše (stejné ID tématu), přidá nové komentáře jako odpovědi a převezme nový stav. Každé jiné téma se stane poznámkou na listu, který uvádí jeho štítek nebo název souboru, jinak na otevřeném listu. Jejím textem jsou název, popis, přiřazení a termín, komentáře se stanou odpověďmi.

| V tématu BCF | V aplikaci MarkupCraft |
|---|---|
| Title, description, assignee, due date | Text poznámky |
| Comments with text | Odpovědi |
| Status Open, Accepted, Rejected, Completed (Closed, Resolved, Done count as Completed) | Stav poznámky |
| Author and creation date | Autor a datum poznámky |
| Camera position | Místo na listu, jen u tématu svázaného s listem štítkem nebo názvem souboru |
| Model selection, hidden parts, clipping planes, snapshots | Neukládá se: list nemá model, ve kterém by se zobrazily |

## Omezení, která je dobré znát

- **List není model.** Pohled ukazuje na pozici poznámky na papíru, měřenou v metrech papíru. Nástroj BIM tak nepřenese do místa v modelu. K nalezení místa použijte snímek a název listu.
- **Stavy a typy jsou vlastní pro MarkupCraft** (Open, Accepted, Rejected, Completed; Cloud, Callout…). Soubor je deklaruje, jak to BCF umožňuje, ale nástroj s vlastními pevnými seznamy je může přiřadit jinak nebo ignorovat.
- **Import přináší komentáře, ne pohledy na model.** {{ui:Importovat BCF}} přidá odpovědi a stavy k exportovaným poznámkám a z ostatních problémů vytvoří poznámky; pohled kamery modelu zobrazit nedokáže. Viz [Seznam poznámek a export](topic:markups-list-and-export#import-bcf).
- Vracet poznámky jako PDF bývá u revizí výkresů často jednodušší. BCF slouží k tomu, aby se připomínky k výkresům dostaly do postupu koordinace modelu.
