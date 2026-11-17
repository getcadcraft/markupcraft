---
title: Menús, tecles i ratolí
summary: Trieu la barra d'eines pròpia de MarkupCraft, una barra de menús de revisió de PDF o una cinta, doneu a qualsevol eina la vostra pròpia tecla, moveu eines entre menús, i definiu què fan la roda i els botons del ratolí.
keywords: estil de menú, menús, barra de menús, barra d'eines, cinta, pestanyes, revisió de PDF, dreceres de teclat, tecles, personalitza, reassigna, ratolí, roda, invertir, direcció del zoom, botó del mig, botó dret, desplaça, exporta, importa, canvi, familiar
from: 081438a6
---

Les eines de MarkupCraft són les mateixes per on hi arribeu. Un **estil de menú** només decideix on es col·loquen a la pantalla, com es diuen allà i quines tecles les activen. Trieu-ne un a {{ui:Configuració}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Menús, tecles i ratolí}}; el canvi és immediat, i aquest navegador el recorda.

## Els tres estils

| Estil | Què obteniu |
|---|---|
| {{ui:MarkupCraft}} | La barra d'eines pròpia de MarkupCraft (Fitxer, Selecció, Dibuixa, Revisa, Anota, Mesura, Edita) i les seves tecles d'una lletra: {{key:V}} selecció, {{key:H}} desplaça, {{key:P}} llapis, {{key:I}} ressaltador, {{key:L}} línia, {{key:A}} fletxa, {{key:R}} rectangle, {{key:E}} el·lipse, {{key:C}} núvol, {{key:K}} crida, {{key:T}} text, {{key:N}} nota, {{key:S}} segell, {{key:M}} longitud, {{key:Q}} àrea, {{key:U}} recompte. És l'inici. |
| {{ui:Revisió de PDF}} | Una barra de menús ({{ui:Fitxer}}, {{ui:Edita}}, {{ui:Visualització}}, {{ui:Document}}, {{ui:Marca}}, {{ui:Mesura}}, {{ui:Revisió}}, {{ui:Finestra}}) sobre una fila d'eines de revisió, amb tecles organitzades com ho fan els programes de revisió de PDF: {{key:V}} selecció, {{key:Shift+V}} desplaça, {{key:H}} ressaltador, {{key:Q}} crida, {{key:N}} polígon, {{key:Shift+N}} polilínia, {{key:Shift+T}} nota, {{key:Shift+A}} arc, i les mesures a {{key:Alt+Shift}}: {{key:Alt+Shift+K}} calibra, {{key:Alt+Shift+L}} longitud, {{key:Alt+Shift+G}} angle, {{key:Alt+Shift+A}} àrea, {{key:Alt+Shift+C}} recompte. {{key:Alt+L}} obre la llista de marques. El botó del mig desplaça; un clic dret no. |
| {{ui:Cinta}} | Pestanyes amb noms segons la feina: {{ui:Marca}} (selecció, dibuix, núvols, crides, text, notes, segells), {{ui:Mesura}}, {{ui:Edita}}, {{ui:Revisió}} (la llista de marques i les seves exportacions, les incidències BCF, la llista de deficiències, els registres de camp, la caixa d'eines, comparar), {{ui:Pàgines}} i {{ui:Visualització}}, amb {{ui:Fitxer}} i botons ràpids per obrir, desar, desfer i refer. Les eines mantenen les tecles d'una lletra de MarkupCraft. Un botó per a un panell que no està obert obre primer aquest panell. |

Tots els estils mantenen les tecles {{key:Mod}}: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} per ajustar la pàgina i {{key:Mod+9}} per ajustar l'amplada; {{key:PageUp}} i {{key:PageDown}} canvien de full.

:::tip
Una tecla que pertany al disseny de MarkupCraft però no a l'estil escollit no fa res, i la barra d'estat diu on ha anat la seva eina ("A Revisió de PDF, Crida és Q"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i les fletxes sempre mantenen el seu significat. Mentre escriviu en un quadre de text, crida o nota, cada tecla és del text, i els números escrits mentre dibuixeu continuen obrint el quadre de longitud.
:::

## Feu-lo vostre

1. Trieu l'estil més proper al que voleu i després feu clic a {{ui:Personalitza…}}.
2. A {{ui:Tecles i menús}}, cerqueu una eina (el quadre de cerca ajuda). Feu clic a {{ui:Afegeix una tecla}} i premeu la tecla, o dues tecles seguides per a una tecla de dues lletres. Feu clic en una tecla per treure-la.
3. Amb la barra de menús, {{ui:On es troba}} mou l'eina a un altre menú, o a {{ui:Només tecles}}.
4. A {{ui:Ratolí}}, definiu la roda i els botons que desplacen el full.
5. Doneu-li un nom i feu clic a {{ui:Desa}}.

Desar un estil integrat en crea una còpia pròpia ("La meva revisió de PDF"); l'integrat mai no canvia. Una tecla donada a dues eines es mostra en vermell i s'ha de corregir abans de poder desar.

## Ratolí

- **Roda del ratolí**: {{ui:Desplaçar amunt apropa}} (l'inici) o {{ui:Desplaçar amunt allunya}}, i quant de ràpid. Un pessic amb el trackpad sempre fa zoom en la direcció en què es mouen els dits.
- **Desplaça el full amb**: el botó del mig, el botó dret, o tots dos. {{key:Space}} i arrossegar, i l'eina {{ui:Desplaça}}, sempre desplacen; el botó esquerre dibuixa i selecciona de tota manera, així que marcar-lo aquí no canvia res.
- MarkupCraft no té vista 3D, així que els botons 3D no fan res aquí.

## Exportar i importar

{{ui:Exporta}} desa l'estil en ús com un fitxer petit `.ccinput.json`; {{ui:Importa…}} n'afegeix un, des d'un altre ordinador o d'un company. Un fitxer importat només pot apuntar a les eines pròpies de MarkupCraft: tot el que hi hagi a més queda fora i es compta a la barra d'estat. {{ui:Suprimeix aquest estil}} elimina un dels vostres.

:::note
Aquests ajustaments es queden en aquest navegador. {{ui:Usa aquest estil a totes les aplicacions}} sota les targetes d'estil fa que totes les aplicacions s'obrin amb el seu estil corresponent: {{ui:Revisió de PDF}} va amb els estils de barra de menús de les altres aplicacions, {{ui:Cinta}} amb les seves cintes, i la barra d'eines pròpia de MarkupCraft amb les seves. Una aplicació sense estil corresponent manté el seu.
:::

:::tip
Les disposicions d'espai de treball a {{ui:Configuració}} › {{ui:Global}} › {{ui:Disposició}} ({{ui:Cinta i navegador de projecte}}, {{ui:Caixa d'eines i quadre d'informació}}) construeixen la seva cinta a partir de les pestanyes de l'estil {{ui:Cinta}}, i la seva caixa d'eines a partir de la barra d'eines de MarkupCraft; així, cada eina funciona igual en elles.
:::

Relacionat: [Teclat i ratolí](topic:keyboard) · [Configuració de MarkupCraft](topic:settings) · [Des d'altres programes d'anotació](topic:coming-from)
