---
title: Pumili, ilipat at baguhin ang markups
summary: Pumili ng markups sa pamamagitan ng pag-click o window, ilipat, i-resize, i-nudge, i-cut, kopyahin, i-paste, i-paste sa mismong lugar, i-duplicate, burahin at i-undo.
keywords: pumili, pagpili, piliin lahat, huwag piliin ang alinman, window, crossing, ilipat, move, resize, grips, handles, nudge, cut, copy, paste, paste in place, duplicate, clipboard, ibang tab, burahin, undo, redo, i-edit
from: 62c7def3
---

Piliin muna ang {{ui:Select}} ({{key:V}}). Maaari ka ring makarating doon sa pamamagitan ng {{key:Esc}}: ang unang pindot ay nagtatanggal ng pinili, at ang susunod ay bumabalik sa {{ui:Select}}.

## Pumili ng markups

:::mouse
- **Isang markup:** i-click ito. Lalabas ang dashed box at handles, at ipapakita ito ng {{ui:Properties}}.
- **Magdagdag o magtanggal ng isa:** pindutin nang hawak ang {{key:Shift}} at i-click.
- **Ganap na nasa loob ng window:** i-drag mula kaliwa pakanan sa bakanteng bahagi ng sheet. Tanging markups na ganap na nasa loob ng kahon ang mapipili (solid outline).
- **Nahahawakan ng window:** i-drag mula kanan pakaliwa. Anumang nahawakan ng kahon ay mapipili (berdeng dashed outline).
- **Lahat sa sheet na ito:** {{key:Mod+A}}, o {{ui:More}} saka {{ui:Select all}} sa grupong {{ui:Edit}} ng toolbar.
- **Wala:** i-click ang bakanteng lugar, pindutin ang {{key:Esc}}, o {{ui:More}} saka {{ui:Select none}}.
:::

:::touch
- **Isang markup:** i-tap ito.
- **Ilan:** i-drag ang isang daliri sa bakanteng bahagi ng sheet para gumuhit ng window. Kaliwa pakanan ang pumipili ng ganap na nasa loob; kanan pakaliwa ang pumipili ng nahahawakan nito.
- Ang pag-tap habang hawak ang {{key:Shift}} ay gumagana lamang kapag may nakakabit na keyboard. Kung wala, gumamit ng window.
- Hindi nagpa-pan ang isang daliri sa {{ui:Select}}; gumamit ng dalawang daliri, o ang {{ui:Pan}} tool.
:::

Ang mga read-only na comment na kasama ng file ay nagpapakita ng kulay-abong dashed box at walang handles. Maaari silang piliin at sagutin, pero hindi mabago.

## Ilipat at i-resize

- **Ilipat:** i-drag ang piniling markup. Pindutin nang hawak ang {{key:Shift}} para gumalaw lamang sa multiples ng 45°. Sabay-sabay gumagalaw ang ilang piniling markup.
- **I-resize:** kapag isang markup ang napili, i-drag ang handle. Ang square handles ay nagre-resize ng kahon (pindutin nang hawak ang {{key:Shift}} para mapanatili ang proporsyon nito); ang round handles ay gumagalaw ng isang corner point ng linya, polyline, polygon, cloud o measurement (pindutin nang hawak ang {{key:Shift}} para sa 45°); ang diamond handles ay gumagalaw sa tip at bend ng callout. Ang pen strokes ay nagsi-scale mula sa kahon nila.
- **Nudge:** pindutin ang arrow keys para ilipat ang pinili ng isang screen pixel; pindutin nang hawak ang {{key:Shift}} para sampu. Bawat pindot ay isang undo step.

## Baguhin ang sinasabi o itsura nito

- **Teksto, callouts at notes:** i-double-click ang markup, o pindutin ang {{key:Enter}}, o piliin ang {{ui:Edit on the sheet}} sa {{ui:Properties}}. Mag-type, tapos i-click sa labas o pindutin ang {{key:Mod+Enter}}. Kakanselahin ng {{key:Esc}} ang edit.
- **Stamps:** pumili ng ibang stamp sa {{ui:Properties}} (magbubukas ang double-click ng {{ui:Properties}} para sa iyo).
- **Style:** {{ui:Color}}, {{ui:Line width}}, {{ui:Fill}}, {{ui:Opacity}} at {{ui:Text size}} sa ilalim ng "Style" sa {{ui:Properties}}. Kapag ilan ang napili, ipinapakita ng {{ui:Properties}} ang mga uri na pinili mo at binabago ang lahat nang sabay-sabay.

## Kopyahin, i-paste at i-duplicate

Ang grupong {{ui:Edit}} ng toolbar ay may {{ui:Copy}} at {{ui:Paste}}; ang menu nitong {{ui:More}} ay mayroon ng lahat ng ito, bawat isa kasama ang key nito.

| Utos | Key | Ano ang ginagawa |
|---|---|---|
| {{ui:Cut}} | {{key:Mod+X}} | Kinokopya ang piniling markups at binubura ang mga ito |
| {{ui:Copy}} | {{key:Mod+C}} | Kinokopya ang piniling markups |
| {{ui:Paste}} | {{key:Mod+V}} | Naglalagay ng kopya sa sheet na kinaroroonan mo (kung saan, tingnan sa ibaba) |
| {{ui:Paste in place}} | {{key:Mod+Shift+V}} | Inilalagay ang kopya sa eksaktong lugar kung saan ito kinopya: sa parehong sheet, nasa ibabaw ng orihinal; sa ibang sheet, nasa parehong lugar sa papel |
| {{ui:Duplicate}} | {{key:Mod+D}} | Gumagawa ng kopya ng pinili nang bahagyang pababa at pakanan, nang hindi ginagalaw ang mga dati mong kinopya |

**Saan inilalagay ng Paste ang kopya:**

- Ang {{key:Mod+V}} kapag nasa sheet ang pointer ay naglalagay ng kopyang nakasentro sa kinaroroonan ng pointer. Ilipat ang pointer, pindutin muli ang {{key:Mod+V}}, at may ilalagay kang isa pa.
- Ang button na {{ui:Paste}} (kapag nasa toolbar ang pointer), o ang {{key:Mod+V}} kapag wala sa sheet ang pointer, ay naglalagay nito nang bahagyang pababa at pakanan ng orihinal. Bawat paste ng parehong kopya ay umuusad nang kaunti, kaya hindi natatakpan ng mga kopya ang isa't isa. Sa ibang sheet, unang nilalagay ang paste kung saan naroon ang orihinal sa sheet nito. Kung wala sa view ang lugar na iyon, nasa gitna ng view ilalagay ang kopya.
- Para laging katabi ng orihinal ang {{key:Mod+V}}, piliin ang {{ui:Beside the copy}} sa ilalim ng {{ui:Paste}} sa [MarkupCraft settings](topic:settings).

Ang mga na-paste na markup ay napili, kaya maaari mo na agad itong i-drag. Bawat cut, paste o duplicate ay isang undo step: binabawi ng {{key:Mod+Z}} ang buong paste.

Ang mga na-paste na kopya ay bagong markups: nakukuha nila ang pangalan mo, petsa ngayon, status na Open, walang punch number, at walang laman na thread. Dala nila ang uri, hugis, style, teksto at comment nila. Hindi maaaring kopyahin o i-cut ang read-only na comments na kasama ng file.

**Sa pagitan ng tabs:** ang kinopya mo ay itinatago rin sa browser na ito, kaya maaari itong i-paste ng ibang MarkupCraft tab sa parehong browser. Ang pagkopya ng markups ay hindi gumagamit ng clipboard ng computer: hindi mo ito maipe-paste sa ibang programa, at ang tekstong kinopya mo sa ibang lugar ay hindi nagiging markup kapag na-paste.

**Right-click menu:** i-right-click ang markup (o bakanteng papel) para sa {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste here}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Save selection as a stamp…}}, {{ui:Flatten into the page when saved}}, {{ui:Insert a picture here…}} at {{ui:Select all}}. Kapag nag-right-click ka sa markup na hindi napili, mapipili muna ito. Ang pag-drag gamit ang kanang button ay nagpa-pan pa rin. Sa touch screen, ang matagal na pindot sa markup ay nagbubukas ng parehong menu (sa teksto, nagsisimula itong mag-edit ng teksto). Ang menu key o {{key:Shift+F10}} ay nagbubukas nito sa pinili.

Ang nilalamang pahina na napili gamit ang {{ui:Content}} tool ay kinokopya at na-paste din: tingnan ang [Baguhin ang sariling linya, larawan at teksto ng pahina](topic:page-content).

Para kopyahin ang bahagi ng pahina mismo bilang larawan (rectangle, ellipse o freeform shape), o bilang see-through overlay para sa ibang sheet o app, tingnan ang [Kopyahin ang bahagi ng pahina, o overlay](topic:copy-an-area).

## Burahin

Pindutin ang {{key:Delete}} o {{key:Backspace}}, piliin ang {{ui:More}} saka {{ui:Delete}} sa toolbar, o ang {{ui:Delete}} sa {{ui:Properties}}. Sinasabi ng status bar kung ilan ang nabura. Hindi kailanman nabubura ang read-only na comments mula sa file ("nanatili gaya sa file").

## I-undo at i-redo

- Ang {{key:Mod+Z}} ay nag-u-undo, ang {{key:Mod+Y}} o {{key:Mod+Shift+Z}} ay nag-re-redo. May {{ui:Undo}} at {{ui:Redo}} ang toolbar.
- Sinasabi ng status bar kung ano ang na-undo ("Na-undo ang paglipat ng markup.").
- Sakop ng undo ang bawat pagbabago sa markups, statuses, replies, punch items, sheet scales at sheet names, hanggang 500 hakbang.
- Nabubura ang history kapag isinara mo ang set.

## Kopyahin ang markups sa ibang sheet

Para ilagay ang parehong stamp, note o cloud sa ilang sheet, piliin ito (o ilang markups) at piliin ang {{ui:Copy to other sheets…}} sa {{ui:Properties}}. Lagyan ng tsek ang mga sheet, o ang {{ui:All sheets}}, at piliin ang {{ui:Copy}}. Bawat sheet ay makakakuha ng kopya sa parehong lugar sa pahina, na pirmado ng pangalan mo. Isang {{key:Mod+Z}} lang ang magtatanggal sa lahat ng ito.
