---
title: Una visita per la pantalla
summary: La barra d'eines, la llista de fulles, l'àrea de la fulla, els cinc panells de la dreta i la barra d'estat, pels seus noms a la pantalla.
keywords: pantalla, disposició, barra d'eines, panells, barra lateral, miniatures, propietats, barra d'estat, interfície, pantalla completa, tema, mode fosc
from: 18d82de6
---

MarkupCraft omple la finestra del navegador. De dalt a baix i d'esquerra a dreta:

## La barra de més amunt

La línia fina que hi ha sobre tot pertany a la família CadCraft, no pas a MarkupCraft en si. Té:

- el nom de l'aplicació i la versió que executeu,
- {{ui:Quant a MarkupCraft}}, que obre la pàgina de l'aplicació al lloc web,
- {{ui:Ajuda}}, que obre aquesta ajuda en un panell lateral (o premeu {{key:F1}}),
- {{ui:Desa per fer-lo servir sense connexió}}, que manté MarkupCraft, el seu lector i generador de PDF, i aquesta ajuda en aquest navegador perquè s'obri sense connexió; després diu "Preparat sense connexió" (vegeu [Treballar sense connexió](common:offline)),
- el botó de mode de pantalla ({{ui:Pantalla completa}}), i
- {{ui:Configuració}} (o {{key:Mod+,}}), amb una pestanya {{ui:MarkupCraft}} per a la configuració pròpia d'aquesta aplicació i {{ui:General}} per a la que comparteixen totes les aplicacions CadCraft (vegeu [Configuració de MarkupCraft](topic:settings)), i
- {{ui:Paper}} i {{ui:Model}}, els temes clar i fosc. A {{ui:Model}} les fulles es dibuixen clares sobre fons fosc; les vostres marques conserven els seus propis colors.

El botó de mode de pantalla, o {{key:Ctrl+Shift+F}}, passa per tres modes: normal, pantalla completa, i pantalla completa amb les barres amagades. Amb les barres amagades, moveu el punter a la vora superior de la pantalla (o toqueu-hi) i tornaran a aparèixer. Aquesta drecera usa la tecla Control a tots els ordinadors, també als Mac.

:::note
A pantalla completa, {{key:Esc}} també fa que el navegador surti de la pantalla completa. Si només volíeu cancel·lar un dibuix, premeu {{key:Ctrl+Shift+F}} de nou per tornar a la pantalla completa.
:::

## La barra d'eines

Sota la barra superior, les eines estan agrupades i etiquetades:

| Grup | Botons |
|---|---|
| Fitxer | {{ui:Obre}}, {{ui:Desa}}, {{ui:Tanca}} |
| Selecció | {{ui:Selecció}}, {{ui:Desplaça}} |
| Dibuixa | {{ui:Llapis}}, {{ui:Ressalta}}, {{ui:Línia}}, {{ui:Fletxa}}, {{ui:Rectangle}}, {{ui:El·lipse}}, {{ui:Polilínia}}, {{ui:Polígon}} |
| Revisa | {{ui:Núvol}}, {{ui:Núvol lliure}} |
| Anota | {{ui:Crida}}, {{ui:Text}}, {{ui:Nota}}, {{ui:Segell}} |
| Mesura | {{ui:Calibra}}, {{ui:Longitud}}, {{ui:Àrea}}, {{ui:Recompte}} |
| Edita | {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}}, i {{ui:Més}}: {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica}}, {{ui:Suprimeix}}, {{ui:Selecciona-ho tot}}, {{ui:Neteja la selecció}} |

L'eina que feu servir es veu premuda. Mantingueu el punter sobre un botó per veure'n la tecla (per exemple "Rectangle (R)"); el menú {{ui:Més}} indica la tecla de cada ordre al costat. Els botons que no poden actuar en aquell moment estan atenuats: {{ui:Copia}} fins que seleccioneu una marca, {{ui:Enganxa}} fins que hi hagi alguna cosa copiada. Un punt petit després de {{ui:Desa}} indica que hi ha marques sense desar. La llista completa de tecles és a [Teclat i ratolí](topic:keyboard).

Una eina es queda activa després de dibuixar amb ella, així podeu dibuixar diversos núvols seguits. Premeu {{key:Esc}} (dues vegades si la marca nova encara està seleccionada) o {{key:V}} per tornar a {{ui:Selecció}}.

## La llista de fulles (esquerra)

{{ui:Fulls}} llista totes les pàgines de tots els PDF oberts. Cada fila mostra una petita imatge de la fulla, el seu nom, el seu número de fulla o el fitxer i la pàgina, i quantes marques té. El nombre que hi ha després del títol és el de fulles.

- Feu clic a una fila per mostrar aquella fulla.
- Escriviu a {{ui:Cerca fulls}} per filtrar pel nom de la fulla, el número de fulla o el nom del fitxer. Premeu {{key:Enter}} per obrir la primera coincidència.

Els noms de fulla vénen del PDF quan en té. Consulteu [Obrir un joc de plànols i moure's entre fulles](topic:open-a-plan-set).

## L'àrea de la fulla (al mig)

La fulla amb què treballeu. Abans d'obrir res mostra "Obre un joc de plànols" amb un botó {{ui:Obre PDF}}. Deixeu-hi PDF en qualsevol lloc per obrir-los.

Sota la fulla, una barra estreta té:

- les fletxes de fulla anterior i següent, i "3 de 12: A-101 — Planta" (mantingueu el punter per veure el fitxer i la pàgina),
- reduir zoom, la caixa de zoom (escriviu un percentatge i premeu {{key:Enter}}; el 100% és la mida real en una pantalla normal), ampliar zoom,
- {{ui:Ajusta la pàgina}} i {{ui:Ajusta l'amplada}}.

Cada fulla recorda el seu propi zoom mentre el joc és obert.

Quan compareu dues fulles, aquí apareix una llegenda: "Només a la fulla antiga", "Només a la fulla nova" i "A totes dues". Consulteu [Comparar dues revisions](topic:compare-revisions).

## Els panells (dreta)

Cinc pestanyes:

| Pestanya | Què mostra |
|---|---|
| {{ui:Propietats}} | La marca seleccionada: autor, dates, valors mesurats, estat, assumpte, text, comentari, estil, les seves respostes i el seu element de la llista de deficiències. Amb una eina de dibuix activada i res seleccionat, els paràmetres que usaran les marques noves. Amb res seleccionat i {{ui:Selecció}} activada, la fulla: número, títol, d'on s'ha llegit el nom, mida del paper, escala, i {{ui:Reanomena el full}}. |
| {{ui:Marques}} | Totes les marques del joc obert, amb filtres, i les exportacions {{ui:CSV}} i {{ui:BCF}}. Consulteu [La llista de marques](topic:markups-list-and-export). |
| {{ui:Llista de deficiències}} | Elements numerats de la llista de deficiències amb persona assignada, data límit i estat. Consulteu [Fer una llista de deficiències](topic:punch-list). |
| {{ui:Eines}} | La caixa d'eines: eines desades, amb estil. Consulteu [La caixa d'eines](topic:tool-chest). |
| {{ui:Compara}} | Superposa dues fulles. Consulteu [Comparar dues revisions](topic:compare-revisions). |

## La barra d'estat (baix)

- A l'esquerra, on és el punter sobre la fulla, en polzades (o mil·límetres, a [Configuració](topic:settings)) sobre el paper.
- Al mig, els missatges: què espera una eina a continuació, què s'acaba de desar, per què s'ha rebutjat alguna cosa. **Llegiu-la quan alguna cosa no passi.**
- El botó d'escala de la fulla ("Sense calibrar", o l'escala). Feu-hi clic per definir l'escala. Consulteu [Calibrar una fulla i mesurar](topic:calibrate-and-measure).
- El vostre nom ("Defineix el nom" fins que n'hi doneu un). Feu-hi clic per canviar-lo.

## En una pantalla petita

Per sota d'uns 1180 píxels d'amplada els panells s'estrenyen i les imatges de les fulles es fan més petites. En una pantalla de mida de telèfon les parts s'apilen: la barra d'eines (desplaceu-la de costat), la fulla, la barra d'estat, els panells i, al final, la llista de fulles. Una tauleta en horitzontal manté la disposició completa.
