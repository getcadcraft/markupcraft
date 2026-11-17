---
title: Mga menu, key at mouse
summary: Piliin ang sariling toolbar ng MarkupCraft, PDF review menu bar o ribbon, bigyan ang anumang tool ng sarili mong key, ilipat ang mga tool sa ibang menu, at itakda kung ano ang gagawin ng wheel at ng mga mouse button.
keywords: menu style, menus, menu bar, toolbar, ribbon, tabs, pdf review, keyboard shortcuts, hotkeys, keys, customize, remap, rebind, mouse, wheel, invert, zoom direction, middle button, right button, pan, export, import, switching, familiar
from: 081438a6
---

Pareho ang mga tool ng MarkupCraft kahit paano mo maabot ang mga ito. Ang **menu style** ay nagpapasya lang kung saan sila nakalagay sa screen, kung ano ang tawag sa kanila doon, at kung aling key ang pumipili sa kanila. Pumili ng isa sa {{ui:Mga setting}} ({{key:Mod+,}}) › {{ui:MarkupCraft}} › {{ui:Mga menu, key at mouse}}; agad itong magbabago, at inaalala ito ng browser na ito.

## Ang tatlong style

| Style | Ano ang makukuha mo |
|---|---|
| {{ui:MarkupCraft}} | Sariling toolbar ng MarkupCraft (File, Piliin, Gumuhit, Baguhin, Annotate, Sukatin, I-edit) at ang mga one-letter key nito: {{key:V}} piliin, {{key:H}} pan, {{key:P}} pen, {{key:I}} highlighter, {{key:L}} linya, {{key:A}} arrow, {{key:R}} rectangle, {{key:E}} ellipse, {{key:C}} cloud, {{key:K}} callout, {{key:T}} teksto, {{key:N}} note, {{key:S}} stamp, {{key:M}} haba, {{key:Q}} lawak, {{key:U}} bilang. Ang panimulang style. |
| {{ui:PDF review}} | Isang menu bar ({{ui:File}}, {{ui:I-edit}}, {{ui:View}}, {{ui:Document}}, {{ui:Markup}}, {{ui:Sukatin}}, {{ui:Review}}, {{ui:Window}}) sa ibabaw ng isang row ng review tool, na may mga key na nakaayos ayon sa paraan ng mga PDF review program: {{key:V}} piliin, {{key:Shift+V}} pan, {{key:H}} highlighter, {{key:Q}} callout, {{key:N}} polygon, {{key:Shift+N}} polyline, {{key:Shift+T}} note, {{key:Shift+A}} arc, at ang mga sukat sa {{key:Alt+Shift}}: {{key:Alt+Shift+K}} {{ui:I-calibrate}}, {{key:Alt+Shift+L}} haba, {{key:Alt+Shift+G}} anggulo, {{key:Alt+Shift+A}} lawak, {{key:Alt+Shift+C}} bilang. Binubuksan ng {{key:Alt+L}} ang listahan ng markup. Ang gitnang button ang nagpa-pan; hindi ito ginagawa ng right click. |
| {{ui:Ribbon}} | Mga tab na ipinangalan sa gawain: {{ui:I-markup}} (piliin, gumuhit, cloud, callout, teksto, note, stamp), {{ui:Sukatin}}, {{ui:I-edit}}, {{ui:Review}} (ang listahan ng markup at mga export nito, mga BCF issue, ang punch list, mga field record, ang tool chest, paghahambing), {{ui:Mga pahina}} at {{ui:View}}, kasama ang {{ui:File}} at mga quick button para buksan, i-save, i-undo at i-redo. Pinananatili ng mga tool ang sarili nilang one-letter key ng MarkupCraft. Ang button para sa panel na hindi bukas ay unang bubuksan ang panel na iyon. |

Pinananatili ng bawat style ang mga {{key:Mod}} key: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, {{key:Mod+F}}, {{key:Mod+0}} para kasyaan ang pahina at {{key:Mod+9}} para kasyaan ang lapad; binabago ng {{key:PageUp}} at {{key:PageDown}} ang sheet.

:::tip
Ang key na bahagi ng sariling layout ng MarkupCraft pero hindi ng style na napili mo ay walang gagawin, at sinasabi ng status bar kung saan napunta ang tool nito ("Sa PDF review, ang Callout ay Q"). Laging nananatili ang kahulugan ng {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} at ng mga arrow. Habang nagta-type ka sa text box, callout o note, sa teksto ang bawat key, at ang mga numerong tina-type habang gumuguhit ay nagbubukas pa rin ng length box.
:::

## Gawin itong sarili mo

1. Piliin ang style na pinakamalapit sa gusto mo, saka i-click ang {{ui:I-customize…}}.
2. Sa {{ui:Mga key at menu}}, hanapin ang tool (nakakatulong ang search box). I-click ang {{ui:Magdagdag ng key}} at pindutin ang key, o dalawang key na sunod-sunod para sa two-letter key. I-click ang isang key para alisin ito.
3. Gamit ang menu bar, inililipat ng {{ui:Kung saan ito nakalagay}} ang tool sa ibang menu, o sa {{ui:Keys lamang}}.
4. Sa {{ui:Mouse}}, itakda ang wheel at ang mga button na nagpapa-pan sa sheet.
5. Bigyan ito ng pangalan at i-click ang {{ui:I-save}}.

Ang pag-save ng built-in na style ay gagawa ng sarili mong kopya ("My PDF review"); hindi nagbabago ang built-in. Ang key na ibinigay sa dalawang tool ay ipinapakita sa pula at kailangang ayusin bago i-save.

## Mouse

- **Mouse wheel**: {{ui:Ang pag-scroll pataas ay nag-zoom in}} (ang panimula) o {{ui:Ang pag-scroll pataas ay nag-zoom out}}, at kung gaano kabilis. Laging nag-zu-zoom ang trackpad pinch ayon sa galaw ng iyong mga daliri.
- **I-pan ang sheet gamit ang**: ang middle button, ang right button, o pareho. Ang {{key:Space}} at drag, at ang tool na {{ui:Pan}}, ay laging nagpa-pan; kung hindi, gumuguhit at pumipili ang kaliwang button, kaya walang epekto dito ang pagtsek nito.
- Walang 3D view ang MarkupCraft, kaya walang gagawin ang mga 3D button dito.

## Dalhin mo ito

{{ui:Export}} ay nagse-save ng style na ginagamit bilang maliit na file na `.ccinput.json`; {{ui:Mag-import…}} ay nagdaragdag nito, mula sa ibang computer o katrabaho. Ang na-import na file ay maaari lamang tumuro sa sariling tool ng MarkupCraft: anumang iba pa ay inaalis at binibilang sa status bar. {{ui:Burahin ang istilong ito}} ay nagtatanggal ng isa sa sarili mong style.

:::note
Nananatili sa browser na ito ang mga setting na ito. Ang {{ui:Gamitin ang istilong ito sa bawat app}} sa ilalim ng mga style card ay nagpapabukas ng bawat app sa katugmang style nito: ang {{ui:PDF review}} ay kasama ng menu-bar style ng ibang app, ang {{ui:Ribbon}} ay kasama ng kanilang ribbon, at ang sariling toolbar ng MarkupCraft ay kasama ng kanila. Ang app na walang katugmang style ay pinananatili ang sarili nitong style.
:::

:::tip
Ang mga layout ng workspace sa {{ui:Mga setting}} › {{ui:Global}} › {{ui:Layout}} ({{ui:Ribbon at project browser}}, {{ui:Toolbox at info box}}) ay bumubuo ng kanilang ribbon mula sa mga tab ng {{ui:Ribbon}} style, at ng kanilang toolbox mula sa toolbar ng MarkupCraft, kaya gumagana ang bawat tool nang pareho sa mga iyon.
:::

Kaugnay: [Keyboard at mouse](topic:keyboard) · [Mga setting ng MarkupCraft](topic:settings) · [Galing sa ibang markup software](topic:coming-from)
