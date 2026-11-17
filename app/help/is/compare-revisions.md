---
title: Bera saman tvær endurskoðanir
summary: Leggðu gamla og nýja útgáfu blaðs yfir hvor aðra í tveimur litum, jafnaðu þær með tveimur punktum og skýðu það sem breyttist.
keywords: bera saman, yfirlag, yfirlögn, endurskoðun, mismunur, breytingar, gamalt nýtt, jafna, afturathugun, útgáfa, tilkynning
from: 62f5d1c5
---

Samanburður leggur tvö blöð yfir hvort annað. Línur aðeins á gamla blaðinu birtast rauðar, línur aðeins á nýja blaðinu bláar, og línur á báðum í daufgráum lit. Litirnir eru nefndir í skýringunni undir blaðinu: "Aðeins á gamla blaðinu", "Aðeins á nýja blaðinu" og "Á báðum".

## Berðu saman tvö blöð

1. Opnaðu báðar útgáfurnar. Þær geta verið blöð í sama PDF-skjali eða í mismunandi PDF-skjölum; opnaðu þær saman sem eitt sett (sjá [Vinna með nokkrar skrár í einu](topic:several-files)).
2. Veldu flipann {{ui:Bera saman}} hægra megin.
3. Veldu {{ui:Gamalt blað}} og {{ui:Nýtt blað}}. Nýja blaðið byrjar sem það sem þú ert á. Þegar nokkrar skrár eru opnar er heiti skráar hvers blaðs sýnt á eftir heiti þess.
4. Veldu {{ui:Bera saman}}.

Niðurstaða: MarkupCraft sýnir nýja blaðið með því gamla blandað inn, skýringin birtist, og flipinn segir "Ber saman <old> (gamalt) við <new> (nýtt). Merkingar á nýja blaðinu eru áfram breytanlegar."

## Dofna á milli gamals og nýs

Dragðu rennuna {{ui:Gamalt og nýtt}}. Alveg til vinstri sýnir aðeins gamla blaðið, alveg til hægri aðeins það nýja, og í miðjunni bæði. Að renna fram og til baka er oft fljótlegasta leiðin til að sjá litla breytingu.

## Jafnaðu blöðin

Ef útgáfurnar tvær voru prentaðar með mismunandi spássíu, stærð eða snúningi lítur allt út fyrir að hafa breyst. Lagaðu það:

**Með tveimur punktum (best):**

1. Veldu {{ui:Jafna með tveimur punktum}}. Sýnin sýnir aðeins gamla blaðið.
2. Smelltu á skarpt einkenni sem þú finnur á báðum blöðum, eins og skurðpunkt súlnanets. Flipinn telur skrefin ("1 af 4").
3. Smelltu á annað einkenni, langt frá því fyrsta, eins og hinn andstæða horn netsins.
4. Sýnin skiptir yfir á nýja blaðið. Smelltu aftur á fyrsta einkennið.
5. Smelltu aftur á annað einkennið.

Niðurstaða: "Jafnað: gamla blaðið skalað 100.00%, snúið 0.00°. Færðu til fínstillingar." Gamla blaðið er fært, skalað og snúið til að passa. {{key:Esc}} hættir við meðan þú velur. Aðdráttur að hverju einkenni áður en þú smellir gefur nákvæmari passun.

**Með smáfærslu:** notaðu fjórar örvahnappana undir "Jafna" til að færa gamla blaðið. Veldu skrefið (0.25, 1, 5 eða 20 pt; 72 pt er ein tomma á pappírnum). Flipinn segir hversu langt það hefur færst.

{{ui:Endurstilla}} fjarlægir jöfnunina og færslurnar.

## Aðeins breyttar línur

Undir jöfnunarhnöppunum skaltu velja {{ui:Breyttar línur}} í stað {{ui:Myndyfirlögn}}. MarkupCraft ber þá saman eigin línur blaðanna tveggja, ekki myndir þeirra: nýja blaðið sýnir eins og það er, með línunum sem eru aðeins á gamla blaðinu rauðar og línunum aðeins á því nýja bláar. Lína sem varð aðeins styttri sýnir bara vantandi hlutann. Jafnaðu blöðin fyrst (sjá hér að ofan): samanburðurinn notar jöfnunina, svo blað sem var aðeins fært sýnir engar breytingar. Stöðulínan segir hversu mikið breyttist.

Þetta virkar fyrir PDF-skjöl sem eru prentuð úr CAD, þar sem teikningin er gerð úr línum. Skönnuð blöð hafa engar línur til að bera saman: notaðu myndyfirlögn fyrir þau. Texti settur í letur (ekki teiknaður sem strok) er ekki borinn saman.

## Merktu breytingarnar

Meðan þú berð saman ert þú á nýja blaðinu og öll verkfæri virka. Teiknaðu ský utan um breytingarnar þegar þú finnur þær; þau tilheyra nýja blaðinu og haldast þegar þú hættir samanburði.

{{ui:Umkringja breytingarnar}} gerir þetta fyrir þig: það hópar breyttar línur sem liggja þétt saman og teiknar endurskoðunarský utan um hvern hóp á nýja blaðinu, með "Breytt frá <old sheet>" sem athugasemd. Eitt {{key:Mod+Z}} fjarlægir þau öll; eyddu þeim sem þú þarft ekki.

## Berðu saman heilt sett

Þegar nýja útgáfan kemur sem sitt eigið PDF-skjal, opnaðu bæði PDF-skjölin og veldu {{ui:Bera saman tvö sett}} í flipanum {{ui:Bera saman}}. Veldu gamla skrá og nýja skrá, veldu síðan {{ui:Bera settin saman}}. Blöð eru pöruð eftir númeri sínu (eins og í [slip-sheeting](topic:slip-sheet-a-revised-set)), borin saman eftir línum sínum og birt í lista með mest breytta fyrst. Veldu blað í listanum til að bera það par saman með {{ui:Breyttar línur}}.

{{ui:Umkringja allar breytingar}} umkringir hvern hóp breyttra lína á hverju breyttu blaði í einu skrefi sem hægt er að afturkalla. Settasamanburðurinn stillir ekki blöð af fyrst, þannig að blað sem var fært á síðunni birtist sem breytt: berðu það par saman eitt og sér og notaðu {{ui:Jafna með tveimur punktum}}.

## Hætta samanburði

Veldu {{ui:Hætta samanburði}}, eða farðu á annað blað. Jöfnunin er munuð fyrir sama par af blöðum þar til þú lokar settinu.

## Gott að vita

- Samanburður vinnur með því sem er teiknað, pixla fyrir pixla. Hann veit ekki að lína hafi færst; hann sýnir gömlu staðsetninguna í öðrum litnum og nýju staðsetninguna í hinum.
- Texti sem hefur flætt til, breytt dagsetning í titilreit eða annar prentstíll birtast líka sem breytingar.
- Skannað blað borið saman við prentað er hávaðasamt: skönnun gerir línur óskýrar og færir þær til.
- Samanburður á texta sem er settur í letur og listi yfir það sem breyttist eru ekki komin enn.
