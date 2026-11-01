---
title: Fitxers que MarkupCraft obre i desa
summary: PDF per obrir i una còpia en PDF amb les marques per desar, a més de fitxers CSV, BCF i de caixa d'eines; on va cada fitxer, en línia i sense connexió.
keywords: pdf, obre, desa, exporta, baixa, csv, bcf, bcfzip, json, caixa d'eines, tipus de fitxer, formats, puja, contrasenya, xifrat
from: b3045b4c
---

## Què obre MarkupCraft

| Fitxer | Com | Què passa |
|---|---|---|
| PDF (`.pdf`) | {{ui:Obre}}, {{key:Mod+O}}, o deixeu-lo a la zona de la fulla. Es poden obrir diversos alhora. | Cada pàgina es converteix en una fulla. Les marques que ja hi ha al fitxer es llegeixen (més avall). |
| Caixa d'eines (`.json`) | Pestanya {{ui:Eines}}, i després {{ui:Importa}} | Les eines s'afegeixen a la vostra caixa. Consulteu [La caixa d'eines](topic:tool-chest). |

Qualsevol altra cosa es rebutja amb el missatge "MarkupCraft obre fitxers PDF." a la barra d'estat. Si deixeu anar una barreja, els PDF s'obren i la barra d'estat indica quants fitxers no eren PDF.

### Marques ja incloses en un PDF

- **Les marques que MarkupCraft ha desat** tornen exactament iguals: tipus, estil, autor, dates, estat, respostes, número de la llista de deficiències, l'escala de la fulla i els noms de fulla que hi heu escrit.
- **Els comentaris d'altres programes de PDF** també es llegeixen. Els rectangles, les el·lipses, les línies i les fletxes, les polilínies, els polígons, els traços de tinta (llapis), les caixes de text i les notes adhesives esdevenen marques normals de MarkupCraft, editables. Les seves respostes i els seus estats de revisió també s'hi afegeixen.
- **La resta** (ressaltats de text fets seleccionant text, segells d'altres programes i altres tipus) es mostra tal com és, marcada només de lectura. Podeu seleccionar-la, veure-la a la llista de marques i respondre-hi, però no moure-la, canviar-la ni suprimir-la.
- Els enllaços i els camps de formulari no es toquen i no apareixen a la llista.
- Una escala desada per un altre programa (una finestra gràfica de mesura) s'usa com a escala de la fulla quan MarkupCraft entén la seva unitat.

### Fitxers que no s'obren

- Un PDF que demana contrasenya: '"nom" necessita una contrasenya per obrir-se. Obriu-ne una còpia sense protecció.'
- Un fitxer malmès o que no és realment un PDF: '"nom" no s'ha pogut llegir com a PDF (…)'.
- Un PDF que s'obre però està protegit contra canvis s'obre bé. Desar-lo es rebutja (vegeu més avall).

Quan s'obren diversos fitxers alhora, els que funcionen s'obren i un quadre anomenat "Alguns fitxers no s'han obert" llista la resta.

## Què desa MarkupCraft

Desar és sempre una **baixada** d'un fitxer nou. Una pàgina web no pot sobreescriure un fitxer del vostre ordinador, i MarkupCraft mai no canvia el vostre original.

| Trieu | Obteniu | Notes |
|---|---|---|
| {{ui:Desa}} ({{key:Mod+S}}) | "<nom> (marked up).pdf" | Una còpia del PDF original amb totes les marques escrites com a comentaris PDF reals. Si torneu a desar un fitxer "(marked up)", conserva el mateix nom; mai no esdevé "(marked up) (marked up)". Consulteu [Desar el PDF amb les marques](topic:save-the-marked-up-pdf). |
| Pestanya {{ui:Marques}}, i després {{ui:CSV}} | "<nom> markups.csv" | Les marques tal com apareixen a la llista (els filtres s'apliquen). |
| Pestanya {{ui:Marques}}, i després {{ui:BCF}} | "<nom> markups.bcfzip" | BCF 2.1 per a les eines de coordinació BIM, una instantània per marca. Consulteu [Conceptes bàsics de BCF](topic:bcf-basics). |
| Pestanya {{ui:Llista de deficiències}}, i després {{ui:Exporta CSV}} | "<nom> punch list.csv" | Els elements de la llista de deficiències en ordre numèric. |
| Pestanya {{ui:Eines}}, i després {{ui:Exporta}} | "MarkupCraft tool chest.json" | La vostra caixa d'eines, per compartir-la o conservar-la. |

"<nom>" és el nom del fitxer del primer PDF obert, sense ".pdf".

Els fitxers CSV s'obren en qualsevol full de càlcul. Són UTF-8 amb la marca que els fulls de càlcul busquen, de manera que els noms amb accents surten bé. Una cel·la que comença per =, +, - o @ rep una cometa inicial perquè un full de càlcul mai no l'executi com a fórmula.

## On van les baixades

El vostre navegador ho decideix: normalment la carpeta de Baixades, o pregunta cada vegada si ho heu configurat així. Consulteu [Navegadors i ordinadors](common:browsers#what-differs-between-browsers).

:::chromium
Quan deseu alhora tots els fitxers canviats d'un conjunt, Chrome i Edge poden preguntar si aquest lloc pot baixar diversos fitxers. Trieu {{ui:Permet}}, o només obtindreu la primera còpia.
:::

:::safari
En un iPad, Safari pregunta abans de cada baixada i posa el fitxer a l'app Files, sota Downloads. En un Mac va a la carpeta que hi ha a la configuració de Safari.
:::

## En línia i fora de línia

- **Els vostres PDF mai no surten d'aquest ordinador**, ni en línia ni fora de línia. No hi ha cap pujada enlloc.
- El lector de PDF es carrega la primera vegada que obriu un PDF ("Carregant el lector de PDF…"), i el generador de PDF la primera vegada que desats ("Carregant el generador de PDF…") o obriu un fitxer que ja té comentaris.
- Amb connexió, tots dos es carreguen des del lloc web.
- **Per treballar sense connexió,** trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de dalt mentre sou en línia. El botó compta "Desant N de M" i després diu "Preparat sense connexió". Aquesta còpia inclou el lector i el generador de PDF (uns 6 MB en total) i aquesta ajuda, de manera que després obrir, marcar i desar PDF funciona sense connexió en aquest navegador.
- Si el botó diu "No s'ha pogut desar", alguns fitxers no s'han baixat: comproveu la connexió i torneu a fer clic. Si diu "Fora de línia no disponible", aquesta finestra del navegador no pot guardar una còpia sense connexió (finestres privades i alguns ordinadors gestionats); useu una finestra normal.
- Per actualitzar o eliminar la còpia, feu clic a "Preparat sense connexió" i trieu "Desa-la de nou (obtén la versió més recent)" o "Elimina la còpia sense connexió". Més a [Treballar sense connexió](common:offline).

:::offline
Esteu fora de línia. Si la barra de dalt diu "Preparat sense connexió", tot funciona, també desar. Si no ho diu i encara no heu desat en aquesta pestanya, {{ui:Desa}} pot fallar amb "El generador de PDF no s'ha pogut carregar". Les vostres marques encara són a la pestanya: mantingueu-la oberta, torneu a tenir connexió i trieu {{ui:Desa}} de nou.
:::

## Coses a tenir en compte

- Els conjunts de plànols grans triguen una estona a obrir-se: MarkupCraft llegeix el text de cada pàgina per trobar els números de fulla. La barra d'estat va comptant les fulles a mesura que avança.
- Si obriu dues vegades el mateix PDF, les seves fulles s'afegeixen dues vegades. Si passa, tanqueu el joc i torneu-lo a obrir.
- {{ui:Tanca}} tanca tots els fitxers oberts alhora. Si alguns tenen marques sense desar, pregunta: {{ui:Cancel·la}}, {{ui:Tanca sense desar}} o {{ui:Desa còpies primer}}.
- La desada al núvol encara no està disponible, i encara no hi ha versions d'escriptori. Guardeu els vostres PDF amb els altres fitxers del projecte i feu-ne còpia de seguretat com de costum. Consulteu [On van els vostres fitxers](common:your-files).
