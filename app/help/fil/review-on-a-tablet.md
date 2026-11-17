---
title: Mag-review sa iPad o touch screen
summary: I-pinch, i-pan at gumuhit gamit ang mga daliri o stylus, ano ang kumikilos kapag inangat ang daliri, ano ang nangangailangan ng keyboard, at paano panatilihing ligtas ang trabaho mo sa tablet.
keywords: ipad, tablet, touch, touch screen, pinch, zoom, dalawang daliri, apple pencil, stylus, daliri, field, site, surface, galaw, mobile
from: 91eb6438
---

Gumagana ang MarkupCraft sa touch: sa iPad (Safari o Chrome), sa touch-screen na laptop, o sa Windows o Android tablet na may kamakailang browser. Sa landscape, ipinapakita ng tablet ang buong layout.

## Mga galaw

| Galaw | Ano ang ginagawa nito |
|---|---|
| Isang daliri | Gumuguhit gamit ang kasalukuyang tool, o pumipili gamit ang {{ui:Select}} |
| Dalawang daliri, ikinakalat o pinagdidikit | Nag-zo-zoom sa paligid ng puntong nasa pagitan ng mga daliri mo |
| Dalawang daliri, sabay na inililipat | Nag-pa-pan; maaari kang mag-zoom at mag-pan sa iisang galaw |
| Pangalawang daliri habang gumuguhit | Kinakansela ang sinimulan ng unang daliri at nagsisimula na lang mag-zoom |
| Double-tap, o touch at hold | Tinatapos ang polyline, polygon, free cloud o area |
| Touch at hold sa text, callout o note, gamit ang {{ui:Select}} | Binubuksan ang teksto nito para i-edit |
| Isang daliri na naka-on ang {{ui:Pan}} | Nag-pa-pan |

Sa touch screen, mas malaki ang mga button ng toolbar, menu, tab at dialog, kaya madaling pindutin gamit ang daliri.

## Ano ang mangyayari kapag inangat

Para hindi mag-iwan ng marka ang unang daliri ng pinch, may ilang tool na kumikilos kapag **inangat** mo ang daliri, hindi kapag hinawakan:

- {{ui:Count}}: idinadagdag ang tuldok kapag inangat.
- {{ui:Note}}: nilalagay ang note kapag inangat.
- {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} at {{ui:Area}}: idinadagdag ang bawat punto kapag inangat.
- {{ui:Line}}, {{ui:Arrow}}, {{ui:Length}} at {{ui:Calibrate}}: kapag tinap mo ang simula at pagkatapos ang dulo, nilalagay ang dulo kapag inangat.

Kung dumudulas nang higit-kaunti ang daliri mo bago iangat, hindi ito binibilang na tap at walang idinadagdag. Mag-tap nang malinis; para itama, gamitin ang {{ui:Undo}}.

Ang mga tool na hinihila ({{ui:Pen}}, {{ui:Highlight}}, {{ui:Cloud}}, {{ui:Rectangle}}, {{ui:Ellipse}}, {{ui:Callout}}, {{ui:Text}}, {{ui:Stamp}}) ay nagsisimula sa sandaling hawakan mo; kinakansela sila ng pangalawang daliri.

## Pagpili gamit ang daliri

- I-tap ang markup para piliin ito; i-drag para ilipat; i-drag ang handle para palakihin o paliitin. Kapag hinawakan ng daliri ang sheet, mas malaki ang target ng mga markup at handle, at mas malaki rin ang iginuguhit na handle.
- I-drag sa bakanteng sheet para gumuhit ng selection window (kaliwa papuntang kanan: nasa loob nang buo; kanan papuntang kaliwa: nakadikit).
- Sa {{ui:Select}}, hindi **nagpa-pan** ang isang daliri. Gumamit ng dalawang daliri, o piliin ang {{ui:Pan}}.

## Mga bagay na nangangailangan ng keyboard

Kung walang keyboard, walang {{key:Shift}}, {{key:Esc}} o {{key:Enter}}. Ito ang gawin sa halip:

| Aksyon sa keyboard | Kung walang keyboard |
|---|---|
| {{key:Esc}} para kanselahin o bumalik sa Select | I-tap ang {{ui:Select}} sa toolbar |
| {{key:Shift}} para sa 45° na linya, parisukat at bilog | Gumuhit nang maingat; ayusin gamit ang mga handle |
| {{key:Shift}}-click para magdagdag sa pagpili | Gumamit ng selection window |
| {{key:Shift}}-click para tanggalin ang count dot | {{ui:Undo}} kaagad pagkatapos ng maling tap |
| {{key:Mod+Enter}} para tapusin ang pag-type | I-tap sa labas ng text box |
| {{key:Enter}} para tapusin ang polyline, o i-edit ang teksto ng markup | Touch at hold, o {{ui:Edit on the sheet}} sa {{ui:Properties}} |
| {{key:Delete}} | {{ui:Delete}} sa toolbar o sa {{ui:Properties}} |
| Pagsisimula ng bagong count group gamit ang {{key:Esc}} | I-tap ang bakanteng sheet gamit ang {{ui:Select}}, saka i-tap muli ang {{ui:Count}} |

Ibinabalik ng keyboard case o Bluetooth keyboard ang bawat shortcut; sa iPad, gumagana ang ⌘ key para sa {{key:Mod+Z}} at iba pa.

Hindi ipinapakita ng mga button ang tooltip nila sa touch. Nakalista ang key ng bawat tool sa [Keyboard and mouse](topic:keyboard).

## Stylus at Apple Pencil

Gumagana ang stylus (Apple Pencil, Surface Pen at iba pa) gaya ng mouse: gumuguhit at pumipili ito, at kumikilos agad sa sandaling dumampi. Gamitin ang mga daliri para sa pinch at pan. Hindi binabago ng presyon ang kapal ng linya.

## Pagbubukas at pag-save sa iPad

- Ipinapakita ng {{ui:Open}} ang Files picker: iCloud Drive, On My iPad, at anumang storage app na naka-connect.
- Humihingi ng pahintulot na mag-download ang {{ui:Save}}; mapupunta ang kopya sa Files, sa ilalim ng Downloads (o sa folder na itinakda sa settings ng Safari).

## Panatilihing ligtas ang trabaho mo sa tablet

:::warning
Hindi ka binibigyan ng babala ng iPad Safari bago umalis sa pahinang may hindi pa nase-save na trabaho, at maaaring i-reload ng iPadOS ang tab sa background para makapagbakante ng memorya. Nagtatabi ang MarkupCraft ng recovery copy sa browser at iniaalok itong ibalik kapag binuksan mo muli (tingnan ang [Recover your work](common:recover)), pero **mag-save pagkatapos ng bawat sheet o bawat walk-round**: walang iniingatang kopya ang private tab.
:::

- Ang pangalan mo, mga setting ng tool at tool chest ay nananatili sa browser na iyon sa iPad na iyon, gaya ng sa computer. Tingnan ang [What stays in this browser](topic:browser-storage).
- **Bago bumisita sa site na walang signal:** habang online ka pa, buksan ang MarkupCraft sa Safari (o Chrome) sa iPad at piliin ang {{ui:Save for offline}} sa bar sa itaas. Maghintay hanggang sabihing "Offline ready" (nagbibilang ito ng "Saving N of M"; mga 6 MB ang PDF reader at writer). Sa site, buksan ang parehong address o bookmark nito: gumagana ang pagbubukas, pag-markup at pag-save ng mga PDF nang walang koneksyon. Kung sinasabing "Offline not available", nasa private tab ka; gumamit ng normal na tab. Tingnan ang [Working offline](common:offline).
- Tinatanggal ng Safari ang offline na kopyang hindi mo nagamit nang ilang linggo. Bago ang biyahe, i-click ang "Offline ready" at piliin ang "Save again (get the newest version)".
- Ang napakalalaking set ng plano ay gumagamit ng maraming memorya. Sa tablet, buksan lamang ang mga sheet na kailangan mo para sa pagbisita.

## Sa telepono

Gumagana ito, pero maliit ang screen: nagsasalansan ang mga bahagi (toolbar, sheet, status bar, panel, saka ang listahan ng sheet), at nag-scroll sideways ang toolbar. Gamitin ang telepono para tingnan at magdagdag ng mabilisang note, at ang tablet o computer para sa tunay na review.
