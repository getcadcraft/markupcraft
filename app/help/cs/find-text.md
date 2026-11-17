---
title: Hledání textu ve výkresech
summary: Hledejte slova na každém listu, přejděte na každý nález a všechny jej označte oblakem jedním krokem.
keywords: najít, hledat, text, slovo, slova, ctrl f, hledat, poznámka, klíčová poznámka, výnoska, oblakem vše, zvýraznit nálezy, ocr, sken, skenovaný, přečíst text, vybrat text, kopírovat text, tesseract
from: 3435c9eb
---

{{ui:Najít text}} nahoře v panelu {{ui:Listy}} hledá slova nakreslená přímo na listech. {{ui:Hledat listy}} pod ním hledá pouze názvy listů.

## Najít

1. Stiskněte {{key:Mod+F}}, nebo otevřete {{ui:Najít text}}.
2. Napište slova, například `digestoř` nebo `ověřit na místě`.
3. Vyberte {{ui:Všechny listy}} nebo {{ui:Tento list}} a zaškrtněte {{ui:Rozlišovat velká a malá písmena}} nebo {{ui:Celá slova}}, pokud je potřebujete.
4. Stiskněte {{key:Enter}} nebo zvolte {{ui:Najít}}.

Výsledek: každý nález je uveden se číslem svého listu a okolními slovy a je označen žlutě na svém listu. Zvolte nález a otevře se jeho list s přiblížením na něj.

Fráze se najde, i když ji výkres rozdělí na dva kusy textu nebo na dva řádky.

## Označit všechny nálezy oblakem

Zvolte {{ui:Oblakem vše}}. Revizní oblak obkreslí každý nález v seznamu na každém listu, s komentářem "Nalezeno: <vaše slova>". Jedním {{key:Mod+Z}} je všechny odstraníte.

## Přečíst text na skenu (OCR)

Skenovaný list je jen obrázek: dokud nejsou jeho slova přečtena, není co hledat. Když počet ukazuje, že listy nemají text, zvolte {{ui:Přečíst text (OCR)…}} pod ním, nebo {{ui:Strany}} › {{ui:Přečíst text (OCR)…}}.

1. Vyberte stránky: tento list, každou stránku souboru, nebo každou stránku všech otevřených souborů.
2. Vyberte jazyk textu. {{ui:Také angličtina}} přečte i anglická slova.
3. Zvolte {{ui:Přečíst text}}. Lišta ukazuje, která stránka se právě čte; {{ui:Zastavit}} ukončí běh a ponechá stránky, které už byly přečteny.

Výsledek: slova lze najít, vybrat a kopírovat jako jakýkoli jiný text. Vše běží na vašem počítači: nic se nikam neodesílá. Funguje to bez připojení v aplikaci Studio a v prohlížeči, když je aplikace uložena pro offline práci (angličtina a jazyk vašeho rozhraní) nebo když byl jazyk jednou použit. Stránky, které už text mají, zůstanou beze změny.

Až uložíte, slova se dostanou do PDF jako neviditelný text za obrázkem, kromě vašich poznámek, takže je mohou hledat a kopírovat i jiné programy pro PDF. Dokud soubor neuložíte, je označen jako neuložený.

## Výběr a kopírování textu

Zvolte {{ui:Více}} › {{ui:Vybrat text ke zkopírování}}. Táhněte od jednoho slova k druhému a vyberete slova mezi nimi, táhněte z prázdného papíru a vyberete slova v rámečku, nebo dvakrát klikněte na jedno slovo. {{key:Mod+A}} vybere všechna slova na listu. {{key:Mod+C}} je zkopíruje se zachováním řádků. Jakýkoli jiný nástroj to ukončí.

## Dobré vědět

- Výkresy, jejichž písmena jsou nakreslena jako čáry, také nemají text; čtení jako obrázek funguje nejlépe u tištěného textu, například u naskenované knihy nebo specifikace.
- Čtečka je Tesseract, zabudovaný v aplikaci s jazykovými daty pro angličtinu a jazyky aplikace. Při prvním spuštění se načte (asi 6 MB, pro druhý jazyk více).
- Jak dobře čte, záleží na skenu: čisté stránky o 300 dpi se přečtou téměř slovo od slova; staré, bledé nebo nízké rozlišení vynechá více slov.
- Seznam ukazuje prvních 500 nálezů; {{ui:Oblakem vše}} označí až 2 000.
- Nálezy se vymažou při zavření sady a u jednoho souboru při změně jeho stránek.
