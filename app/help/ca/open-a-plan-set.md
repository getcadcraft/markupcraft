---
title: Obrir un joc de fulls i moure's entre fulls
summary: Obriu un PDF o molts, o comenceu amb pàgines en blanc, trobeu fulls pel número o pel nom, feu zoom i desplaçament, i reanomeneu un full quan el fitxer li posa un nom incorrecte.
keywords: obrir, nou, pàgina en blanc, full en blanc, esbós, quadrícula, sense títol, joc de fulls, fulls, pàgines, miniatures, etiquetes de pàgina, número de full, caixetí, reanomenar, navegar, zoom, desplaçar, ajustar, cerca de fulls
from: 1e7f4d50
---

## Obrir el joc de fulls

1. Trieu {{ui:Obre}} a la barra d'eines, o premeu {{key:Mod+O}}.
2. Al selector de fitxers, seleccioneu tots els PDF del joc ({{pick:mac=manteniu ⌘ i feu clic a cada fitxer|windows linux=manteniu Ctrl i feu clic a cada fitxer}}, o seleccioneu un interval amb Shift), i després confirmeu.
   O arrossegueu els fitxers des de {{pick:mac=Finder|windows=Explorador de fitxers|linux=el gestor de fitxers}} a la zona del full. "Deixeu anar els PDF per obrir-los" apareix mentre arrossegueu.
3. Espereu mentre la barra d'estat diu "Obrint <file>…". Per als fitxers grans, compta: "(10 de 60 fulls)".

Resultat: la llista {{ui:Fulls}} mostra totes les pàgines de tots els fitxers, en l'ordre en què els heu obert, i la barra d'estat diu alguna cosa com "S'han obert 3 fitxers (42 fulls al joc)." Si els fitxers ja tenien comentaris, també indica quants se n'han llegit.

Per afegir més fitxers al joc més endavant, obriu-los de la mateixa manera. S'afegeixen al final de la llista.

## Començar amb pàgines en blanc

Per fer esbossos o notes sense un dibuix, creeu pàgines en blanc en lloc d'obrir un PDF:

1. Trieu {{ui:Nou}} a la barra d'eines, o {{ui:Comença amb una pàgina en blanc}} a la pantalla d'inici, o premeu {{key:Mod+N}} si el navegador ho permet (l'aplicació d'escriptori i Studio ho permeten sempre).
2. Trieu la {{ui:Mida del paper}}: Letter, Tabloid o ANSI B, ARCH D, ARCH E, A4, A3 o A1, i {{ui:Vertical}} o {{ui:Horitzontal}}.
3. Trieu una {{ui:Quadrícula}}: {{ui:Cap}}, {{ui:Punts}} o {{ui:Quadrats}}. La quadrícula és cada 1/4 de polzada, amb una línia més gruixuda cada polzada en paper en polzades, i cada 5 mm, amb una línia més gruixuda cada 10 mm, en paper mètric. S'imprimeix a la pàgina.
4. Escriviu quantes {{ui:Pàgines}} voleu, d'1 a 20, i després trieu {{ui:Crea}}.

Resultat: un PDF nou anomenat "Untitled-1.pdf" (després "Untitled-2.pdf", i així successivament) s'obre com qualsevol altre fitxer, creat aquí en aquest ordinador. Totes les eines funcionen amb ell, i {{ui:Desa}} baixa "Untitled-1 (marked up).pdf". MarkupCraft recorda les vostres opcions per a la propera vegada.

Les pàgines no tenen escala: la barra d'estat diu "Sense calibrar". La quadrícula no és una escala. Per mesurar, calibreu el full o trieu una escala abans; vegeu [Calibrar i mesurar](topic:calibrate-and-measure).

Per afegir una pàgina a un joc en blanc, obriu un dels seus fulls i trieu {{ui:Afegeix una pàgina en blanc}} sota la llista {{ui:Fulls}}. La pàgina nova té el mateix paper i la mateixa quadrícula, i va al final. Com qualsevol canvi de pàgina, no es pot desfer; vegeu [Imprimeix i canvia les pàgines](topic:pages-and-printing).

## Com reben els fulls el seu nom

MarkupCraft anomena cada full "<número de full> — <títol>", per exemple "A-101 — Planta de pis", a partir del primer d'aquests que trobi:

1. Un nom que heu escrit amb {{ui:Reanomena el full}} (a continuació).
2. Les etiquetes de pàgina del PDF, quan la persona que el va fer les hi ha definit (per exemple "A-101").
3. El caixetí: MarkupCraft llegeix el text de la pàgina i busca alguna cosa amb forma de número de full (A-101, A1.01, M-201A, KA1-1), prioritzant la cantonada inferior dreta, la franja de la dreta i la banda inferior, i pren com a títol el text més gran que hi ha a prop.
4. Si no, el nom del fitxer i la pàgina: "Plans — page 3".

Per veure quin s'ha usat, premeu {{key:Esc}} fins que no hi hagi res seleccionat i {{ui:Selecció}} estigui activat, i després mireu {{ui:Propietats}}: "Llegit de" diu "L'etiqueta de la pàgina", "El caixetí", "El nom del fitxer" o "Escrit a mà".

:::note
Els fulls escanejats, i els PDF amb el text convertit en línies, no tenen text per llegir. Se'ls posa nom segons el fitxer i la pàgina fins que els reanomeneu. MarkupCraft encara no pot llegir text de les imatges.
:::

## Moure's entre fulls

- Feu clic en un full a {{ui:Fulls}}.
- Premeu {{key:PageDown}} per al següent full i {{key:PageUp}} per a l'anterior, o useu les fletxes de la barra sota el full.
- Escriviu a {{ui:Cerca fulls}}: part d'un número ("A-2"), una paraula del títol ("coberta") o un nom de fitxer. La llista es redueix mentre escriviu ("4 de 42"). Premeu {{key:Enter}} per obrir el primer resultat. Buideu el quadre per veure altra vegada tots els fulls.

Cada full manté el seu propi zoom i la seva posició fins que tanqueu el joc.

## Zoom i desplaçament

:::mouse
- **Zoom:** gireu la roda sobre el full. Fa zoom al voltant del punter. O premeu {{key:Plus}} i {{key:Minus}} (també amb {{key:Mod}}), o useu els botons de zoom. Escriviu un percentatge exacte al quadre de zoom.
- **Ajusta:** {{ui:Ajusta la pàgina}} ({{key:Mod+0}}) mostra tot el full; {{ui:Ajusta l'amplada}} ({{key:Mod+9}}) omple l'amplada.
- **Desplaçament:** arrossegueu amb el botó del mig (la roda), o amb el botó dret, o manteniu {{key:Space}} i arrossegueu, o trieu {{ui:Desplaça}} ({{key:H}}) i arrossegueu. Sense res seleccionat, les tecles de fletxa també mouen el full.
:::

:::mac mouse
Amb el pad tàctil d'un Mac, el desplaçament amb dos dits fa zoom (no desplaça el full). Per desplaçar, manteniu {{key:Space}} i arrossegueu amb un dit, o canvieu a {{ui:Desplaça}} amb {{key:H}}. Un pinçament fa zoom a Chrome, Edge i Firefox.
:::

:::touch
- **Zoom i desplaçament:** poseu dos dits sobre el full. Separeu-los o pinceu-los per fer zoom al voltant del punt entre tots dos, i moveu-los junts per desplaçar. Tots dos passen alhora.
- **Desplaçament amb un dit:** trieu primer {{ui:Desplaça}}. Amb qualsevol altra eina, un dit dibuixa o selecciona.
- {{ui:Ajusta la pàgina}} i {{ui:Ajusta l'amplada}} són a la barra sota el full.
:::

Podeu allunyar el zoom molt més enllà del full sencer, i apropar-lo fins al 6400%. El full es redibuixa nítid un moment després que pareu de moure'l.

## Marcadors

{{ui:Marcadors}}, a la part superior del panell {{ui:Fulls}}, mostra els marcadors (l'esquema) del PDF al qual pertany el full obert. Trieu-ne un per anar a la seva pàgina. La icona del llapis reanomena un marcador i la creu l'elimina. {{ui:Crea a partir dels fulls}} crea un marcador per full, amb el nom que mostra la llista de fulls (número de full i títol), i {{ui:Afegeix per a aquest full}} n'afegeix un per al full on sou. Els canvis formen part del treball no desat del fitxer: {{ui:Desa}} els escriu a la còpia, on tots els visors de PDF els mostren.

## Girar la vista

Els dos botons de gir a la dreta de la barra sota el full giren la vista un quart de volta en qualsevol sentit, per a un full dibuixat de costat. Només gira la vista: el PDF i les seves marques es queden com estan, i el següent full s'obre com el seu PDF (cada full recorda el seu propi gir mentre el joc és obert). El text que afegiu en una vista girada es llegeix dret tal com el veieu. Per girar la pàgina en si al PDF desat, useu {{ui:Pàgines}}, després {{ui:Gira la pàgina en sentit horari}}; vegeu [Imprimeix i canvia les pàgines](topic:pages-and-printing).

## Reanomenar un full

Quan el nom d'un full és incorrecte o no hi és:

1. Mostreu el full.
2. Premeu {{key:Esc}} fins que no hi hagi res seleccionat i l'eina {{ui:Selecció}} estigui activa. {{ui:Propietats}} ara mostra el full.
3. Trieu {{ui:Reanomena el full}}.
4. Escriviu el {{ui:Número de full}} i el {{ui:Títol}}, i després trieu {{ui:Desa}}.

Resultat: la llista de fulls, la barra sota el full i la llista de marques usen el nou nom, i "Llegit de" diu "Escrit a mà". Es pot desfer el canvi de nom amb {{key:Mod+Z}}.

Per tornar al que diu el fitxer, obriu de nou {{ui:Reanomena el full}}, buideu els dos quadres i trieu {{ui:Desa}}.

En desar, un número de full escrit es converteix en l'etiqueta de la pàgina al PDF, de manera que altres visors de PDF també mostren "A-101" a la seva caixa de pàgina. Si doneu un número a qualsevol pàgina d'un fitxer, cada pàgina d'aquell fitxer rep una etiqueta a la còpia (el seu número escrit, si no la seva etiqueta antiga, i si no el seu número de pàgina). Un títol escrit es manté per a MarkupCraft, però altres visors no el mostren.

## Enviar el PDF a TakeoffCraft o portar-lo aquí

Quan TakeoffCraft és obert al mateix lloc (el laboratori, Try o les aplicacions en línia), la barra sota el full té {{ui:Obre a TakeoffCraft}}. Obre el PDF del full a TakeoffCraft en una pestanya nova, tal com s'ha obert aquí, perquè pugueu mesurar quantitats. Les vostres marques es queden aquí; deseu-les com sempre.

El botó {{ui:MarkupCraft}} de TakeoffCraft fa el mateix en sentit contrari: el PDF s'obre aquí com si haguéssiu triat {{ui:Obre}}. Si el navegador bloqueja la pestanya nova, permeteu les finestres emergents per a aquest lloc i torneu a triar el botó.
