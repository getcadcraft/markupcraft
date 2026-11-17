---
title: Isticmaal MarkupCraft oo leh kaaliye AI
summary: Oggolow kaaliyahaaga AI ama qoraalka inuu liisto calaamadaha ururin, ku daro kuwa fudud, dejiyo xaaladda, jawaabo oo dhoofiyo liiska, iyo diiwaanka waxqabadka.
keywords: ai, kaaliye, wakiil, mcp, model context protocol, qoraal, otomaatig, calaamadaha, eegis, ogolaansho, jooji xidhiidhka, waxqabad
from: 095f2977
---

## Waxa aad baranayso

Sida loo oggolaado kaaliye AI (ama qoraal aad qortay) inuu la shaqeeyo MarkupCraft, iyo sida loo go'aamiyo waxa uu gali karo.

MarkupCraft **ma lahan AI gaar ah** mana diro wax meel kasta. Adigu kaaliyaha ayaad keentaa: barnaamij kasta oo ku hadla Model Context Protocol (MCP). MarkupCraft wuxuu siinayaa qalabyo keliya, adigu ayaad dooraysaa kuwa.

## Shid

1. Fur {{ui:Dejinta}} (gearka bar-ka app-ka, ama {{key:Mod+,}}) oo u gudub tab-ka {{ui:MarkupCraft}}.
2. Hoosta {{ui:Kaaliyayaasha}}, calaamee **Ogolow kaaliyayaasha AI iyo qoraallada inay isticmaalaan MarkupCraft**. Waa damaan ilaa aad taas samayso.
3. Dooro waxa ay samayn karto: **Akhri** waa la calaamadeeyay bilowga; calaamee **Wax ka beddel**, **Kaydi** ama **Dhoofi** kaliya markaad u baahan tahay.

Qalabyada ka baxsan ogolaanshaha aad calaamaysay kaaliyaha lama siinayo, haddii uu si kastaba u codsado mid, MarkupCraft wuu diidaa oo diiwaanka waxqabadka ayuu qorayaa. Furaha shidista oo damin wuxuu joojiyaa dhammaan xidhiidhka mar hal mar; {{ui:Dib u deji dejinta MarkupCraft}} wuxuu damiyaa sidoo kale.

## Ku xidh kaaliyahaaga

Kaaliyayaashu waxay ku xidhmaan **CadCraft Studio** kombiyuutarkaaga: Studio wuxuu socodsiiyaa server yar oo kaliya kombiyuutarkan gaari karo, oo lagu ilaaliyo token uu sameeyo mar kasta oo bilaabo. Studio gudahiisa, dooro {{ui:Ku xidh kaaliye}} oo koobiyee cinwaanka iyo tokenka ku dheji kaaliyahaaga (Studio wuxuu muujiyaa dejinta saxda ah ee la dhejinayo). Ha wadaagin tokenka abid.

:::note
Taab browser ma furi karto xidhiidh kaaliye: app-yada browserka, furaha ma saameeyo ilaa aad isticmaasho CadCraft Studio kombiyuutarkaaga.
:::

## Adigu waad maamushaa

- **Isbeddel kasta waa hal tallaabo oo dib loo celin karo**, oo lagu calaameeyey magaca kaaliyaha (tusaale ahaan "Assistant: add cloudrect"). {{key:Mod+Z}} wuxuu dib u celinayaa isbeddelkii ugu dambeeyay ee kaaliyaha oo dhan.
- **Waad ogaaneysaa marka uu xidhan yahay.** Badhan bar-ka app-ka ayaa magaca kaaliyaha muujinaya intuu xidhan yahay; guji si aad u aragto waxa uu gali karo, ama si aad uga **Jooji xidhiidhka**.
- **Waxqabadka.** {{ui:Dejinta}} › {{ui:MarkupCraft}} › {{ui:Kaaliyayaasha}} › {{ui:Waxqabadka}} wuxuu liistaa wac kasta: goorta, qalabka, dhammaaday ama la diiday. {{ui:Kaydi diiwaanka}} wuxuu hayaa nuqul.

## Waxa kaaliyuhu weydiisan karo

| Qalab | Ogolaansho | Waxa uu sameeyo |
|---|---|---|
| `app_info`, `sheets_list` | Akhri | Ururinta furan, xaashiyadooda iyo inta calaamadood ee mid kastaa leeyahay |
| `markups_list` | Akhri | Calaamadaha oo leh nooca, xaashida, qoraalka, faallada, cabbirka, xaaladda, qoraha iyo jawaabaha, oo shaandhaysan xaashida, xaaladda, nooca ama qoraha |
| `markup_add` | Wax ka beddel | Ku daraa xaashida rectangle, daruur, ellipse, sanduuq qoraal, qoraal, khad ama fallaadh |
| `markup_status`, `markup_reply` | Wax ka beddel | Dejinta xaaladda calaamadda (diiwaan ku jirta khaydkeeda, kaaliyaha ayaa saxeexa); ku dar faallo khayd |
| `markups_export` | Dhoofi | CSV ama BCF ee liiska {{ui:Calaamadaha}} ee waxa liiskuna muujinayo (shaandhayaasha sida aad dejisay); Studio gudahiisa wuxuu fayl ku qori karaa fool aad oggolaatay |
| `tasks_list` | Akhri | Calaamadaha ah hawl: qofka loo xilsaaray (qof ama kaaliye), maalinta dhammaadka, gobolka, xiriiriyaha, sida loo xidhay. `assignee: "assistant"` wuxuu liistaa shaqada sugaysa kaaliye |
| `task_set`, `task_clear` | Wax ka beddel | Calaamad ka dhig hawl ama beddel (cinwaan, xil-qaadaha, dhammaadka, gobolka, xiriiriyaha); ka saar hawsha |
| `tasks_check` | Wax ka beddel | Xir hawlaha u xiran aagga naqshadda ama unugga moodeelka oo dhab ahaan isbeddelay; u gudbi gobolada unugyada aad ka akhriday app kale |
| `revisions_changes` | Akhri | Liiska fudud ee waxa isbeddelay ka dhexeeya laba ururin oo furan, si aad erayadaada ku qorto |
| `pins_list`, `decision_add` | Akhri, Wax ka beddel | Qoraallada codka (dherer, qofka, goorta, sharaxaad; marna dhawaaqa, ma jiro qoraal) iyo go'aamada; ku dhig go'aan oo beddel mid hore |
| `redline_export`, `redline_answer` | Dhoofi, Wax ka beddel | Qor faylka redline ee naqshadeeyaha; dabaq jawaabaha naqshadeeyaha |

Calaamad uu kaaliyuhu ku daro wuxuu magaca ku qoraa qoraha: magaca barnaamijka kaaliyaha iyo ka dib "(assistant)", ama "(assistant for <your name>)" markaad dejiso magacaaga eegaha. Isbeddelada xaaladda iyo jawaabahooda si isku mid ah ayaa loo saxeexaa. Mid kastaa waa hal tallaabo oo dib loo celin karo. Kaydinta PDF-ka calaamadaysan waxay ku sii jirtaa adiga: isticmaal {{ui:Kaydi}} sida caadiga ah.

Iyada oo aan MarkupCraft la furin, server-ka CadCraft MCP wuxuu liistaa calaamadaha PDF ah fool aad magacowday (`markups_list`), iyo `cadcraft info Set.pdf` wuxuu daabacaa command line-ka.

## Haddii wax shaqayn waayo

- **Kaaliyuhu ma arko qalabyada MarkupCraft:** hubi in furaha uu ku shidan yahay daaqadan, iyo in daaqadu ku furan tahay Studio.
- **"waxay u baahan tahay ogolaanshaha wax ka beddelka":** calaamee **Wax ka beddel** hoosta {{ui:Kaaliyayaasha}}, kadibna mar kale weydii.
- **Khaladaadka "401" ama "token":** tokenku wuu beddelay (Studio ayaa dib loo bilaabay, ama {{ui:Token cusub}}). Koobiyee kan cusub dejinta kaaliyaha.

## Eeg sidoo kale

- [Cuntooyinka kaaliyayaasha AI](common:assistants-recipes): tusaalooyin la shaqeeyey, mid kastaa qalabyada uu wacayo.
