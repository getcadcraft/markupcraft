---
title: Liiska calaamadaha, shaandhaynta iyo dhoofinta
summary: Eeg calaamad kasta ee set-ka ku jirta, ku shaandhee xaashida, qoraha, xaaladda iyo nooca, u gudub mid, oo liiska u dhoof sida CSV ama BCF.
keywords: liiska calaamadaha, liiska, soo koobid, xlsx, buug shaqo spreadsheet, warbixinta pdf, soo geli bcf, shaandhee, kala soo, warbixin, dhoofi, csv, spreadsheet, bcf, bcfzip, arrimo, liiska faallooyinka, u gudub
from: 6c70261e
---

## Fur liiska

Dooro {{ui:Markups}} oo ku yaal midig. Dhammaan calaamadaha dhammaan faylasha furan ayaa lagu soo bandhigay, marka hore siday xaashidooda u kala horreeyaan, kadibna siday loo sameeyay. Safka kasta wuxuu muujiyaa:

- calaamadda midabkeeda, lambarka wax-ka-qabasho haddii uu leeyahay ("#4"), iyo mawduucdeeda,
- qoraalkeeda, qoraalka tamga ama qiimaha la cabbiray, iyo faalladeeda,
- xaashida, qoraha iyo taariikhda,
- xaaladda (ama "Read-only" faallooyinka ku yimid faylka), iyo tirinta jawaabaha haddii ay leedahay jawaabo.

Sadarka ka sare liiska ayaa tiriya: "38 markups", ama "12 of 38 markups" marka la shaandheeyay.

## U gudub calaamad

Riix safka. MarkupCraft wuxuu muujinayaa xaashidaas, wuxuuna doortaa calaamadda, wuxuuna weynaysaa haddii ay ka baxsan tahay aragga ama ay yar tahay si loo arko. {{ui:Properties}} waxay leedahay faahfaahinteeda iyo silsiladeeda markaad ku laabato tab-kaas.

## Shaandhee

Afar liis oo ka sarreeya liiska. Waa la isku darin karaa.

| Liiska | Doorashooyinka |
|---|---|
| {{ui:Sheet}} | Dhammaan xaashiyada, Xaashidan (waa kuu raacaa markaad xaashiyada beddelayso), ama xaashi kasta oo leh calaamado |
| {{ui:Author}} | Qof kasta, ama qoraa kasta ee set-ka ku jira |
| {{ui:Status}} | Xaalad kasta, Furan, La aqbalay, La diiday, La dhammeeyay |
| {{ui:Type}} | Nooc kasta, ama nooc kasta oo calaamad ah ee set-ka ku jira |

Tusaalooyin:

- Waxa weli furan xaashidan: {{ui:Sheet}} "This sheet", {{ui:Status}} "Open".
- Faallooyinka hal la-talin: {{ui:Author}} magaciisa.
- Dhammaan cabbiraha: {{ui:Type}} "Length" ama "Area".

Liiska wuxuu muujiyaa ilaa 2000 safood; haddii set-ku aad u weyn yahay, ku yaree shaandhe.

## Dhoofi CSV

Dooro {{ui:CSV}} sare tab-ka. Waxaad heleysaa "<name> markups.csv" oo leh **calaamadaha sida hadda loo shaandheeyay**, mid safka kasta, oo tiirarkan ku jira:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- "Text" waxay haysaa erayada qoraalka sanduuqyada iyo tilmaamayaasha, qoraalka tamga, ama magaca kooxda tirinta.
- "Measurement" waxay haysaa dherarka, "area, perimeter" aagagga, iyo "group: n" tirinta.
- Taariikhuhu waa waqti dhamaystiran oo UTC ah.

Si aad wax walba u dhoofiso, dib u celi dhammaan shaandheyaasha doorashadooda kowaad marka hore.

## Xagga sare ee xaashida

{{ui:Legend}} tab-ka {{ui:Markups}} wuxuu geliyaa sharraxaad geeska midig ee waxa aad aragto: sanduuq liiska nooc kasta oo calaamad ah oo xaashida ku jira (mawduuc iyo midab, sida "Cloud", "Question" ama "Outlets") iyo inta ay tahay. Kooxda tirinta waxay tiraysaa calaamadeheeda. Sharraxaaddu waxay sii tirinaysaa markaad rinjiyeyso, guurto ama tirtirto calaamadaha, waxayna ku daabacan tahay oo ku kaydsan tahay tirinta wakhtigaas.

Guji oo beddel cabirkeeda sida calaamad kasta. Dhex {{ui:Properties}} ka beddel {{ui:Title}}, ama deji {{ui:Counts}} inuu noqdo {{ui:The whole set}} si uu u tiriyo xaashi kasta. Meelaha bannaan, sharraxaadaha kale iyo faallooyinka barnaamijyo kale lama tiriyo.

## Tiirarkaaga, iyo kala soo

{{ui:Columns}} tab-ka {{ui:Markups}} wuxuu ku daraa tiirar aad leedahay calaamad kasta: **qoraal**, **dooro** (sida Trade: Mechanical, Electrical, Plumbing), **tiro** (sida Cost) ama **taariikh**. Mid kastaa magac sii, dooro nooca, qor doorashooyinka tiirka doorashada, kadibna dooro {{ui:Save columns}}.

- Buuxi {{ui:Properties}} hoostiisa: tiir kasta wuxuu leeyahay goob halkaas. Tiirka tirada wuxuu aqbalaa tiro oo keliya, tiirka taariikhda taariikh oo keliya.
- Liiska wuxuu muujiyaa qiimaha calaamad kasta hoosteeda, shaandhaha {{ui:Column}} wuxuu doortaa hal qiime (ama calaamadaha meeshooda madhan), {{ui:Sort}} wuxuu liiska u kala soocaa tiir, qoraa, xaalad, nooc ama taariikh, halkii uu xaashi u kala soocayay.
- Dhoofinta CSV iyo XLSX waxay qaadaan tiirarkaaga ka dib kuwa caadiga ah. Tiirarka waxaa lagu kaydiyaa PDF-ka waxayna soo laabtaan markii aad mar kale furto.

## Dhoofi koob-soo-koobid: buug shaqo ama PDF

- {{ui:XLSX}} wuxuu soo dejiyaa "<name> markup summary.xlsx" oo leh saddex xaashi: **Markups** (hal safka calaamad kasta oo liiska ku jirta, tiirarka isku mid ah ee CSV), **By sheet** (inta calaamad oo xaashi kasta leedahay, furan iyo xirran, iyo inta nooc kasta oo ay leedahay, oo wadarta lagu daray) iyo **Punch list** (markay jiraan shay wax-ka-qabasho).
- {{ui:PDF}} wuxuu soo dejiyaa "<name> markup summary.pdf": warbixin la daabacayo ama la diro, oo leh magaca set-ka, taariikhda, iyo miis calaamadaha liiska ku jira (lambarka, xaashida, nooca, mawduuca, qoraalka ama faallada, qiimaha la cabbiray, qoraha, xaaladda iyo jawaabta u dambeysay). Qoraalka dheer ayaa iska soo xidha; madasha miiska ayaa ku soo noqnoqonaysa bog kasta.

Labaduba waxay qaadaan liiska sida loo shaandheeyay, marka horta shaandhee si aad u warbixiso hal xaashi, hal qoraa ama shayada furan oo keliya.

## Dhoofi BCF

Dooro {{ui:BCF}}. MarkupCraft wuxuu sawir u sameeyaa calaamad kasta oo liiska ku jirta xaashideeda ("Making snapshots for BCF (3 of 12)…"), kadibna wuxuu soo dejiyaa "<name> markups.bcfzip". Calaamad kasta waxay noqonaysaa hal mawduuc BCF oo leh xaaladdeeda, qoraha, taariikhaha, jawaabaha oo faallo ah, qofka la xilsaaray iyo taariikhda dhammaadka ee shayga wax-ka-qabasho, iyo sawirka.

Isticmaal si aad faallooyinka dib-u-eegista sawirka ugu geliso qalabka isku-duubka BIM ee akhrin kara BCF. Waxa u gudba iyo waxa aan u gudbin waa ku qoran [Aasaasaha BCF](topic:bcf-basics).

## Soo geli BCF

{{ui:Import BCF}} wuxuu akhriyaa .bcfzip (ama .bcf) oo ka timid qalab BIM:

- Arrimaha ka yimid dhoofinta BCF ee MarkupCraft-ka ayaa dib u helaya calaamadahooda: jawaabaha cusub waxa lagu daraa silsiladda, xaalad cusub ayaa la dejiyaa (Closed waxay tirtaa Completed). Jawaabaha horey u jiray lama ku daro labo jeer.
- Arrimaha kale waxay noqdaan qoraallo, oo leh cinwaankooda, sharraxaaddooda, qoraahooda iyo faallooyinkooda. Qoraalka waxa lagu dhigaa xaashida lambarkeedu ama magaceedu ku jiro calaamadaha arrinta, haddii kale xaashida furan; kamarada BIM ma leh meel ku taal waraaqda, sidaas darteed qoraalladaasi waxaa lagu rari geeska bidix ee xaashida si aad u dhaqaajiso.

Soo gelinta oo dhan waa hal tallaabo: {{key:Mod+Z}} ayaa dib u qaadaa. Eeg [Aasaasaha BCF](topic:bcf-basics).

## Waxa liiska weli aan samayn

- Kooxeynta liiska (kala soo, ka dibna shaandhee, halkii).
- Beddelka qiyamka liiska (ka beddel {{ui:Properties}}; goobaha wax-ka-qabasho waa la beddeli karaa tab-ka {{ui:Punch list}}).
