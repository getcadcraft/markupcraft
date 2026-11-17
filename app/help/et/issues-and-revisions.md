---
title: Väljaanded, revisjonid ja joonise muudatuste logi
summary: Hoia üks väljaannete ajalugu koos arhitekti mudeliga: loe väljaanded sisse, salvesta objektijuhised, tööjoonised ja seotud mudelid väljaande järgi ning loe joonise muudatuste logi.
keywords: väljaanne, revisjon, revisjonid, muudatuste logi, joonise muudatuste logi, joonise register, objektijuhis, tööjoonis, seotud mudel, hange, ehitus, väljaannete ajalugu, revisjonipilv, pilv, märgistuste komplekt
from: e4688f64
---

## Mida sa teed

Tööta samast väljaannete ajaloost nagu ülejäänud meeskond. Vaata, millised lehed läksid välja millise revisjoniga, ja hoia objektil toimuv seotuna väljaandega, millele see kuulub.

## Sammud

1. Ava **Väljaanded ja revisjonid**.
2. Vali **Loe väljaannete ajalugu** ja vali BimCraftist või mõnest muust rakendusest salvestatud `.issues.json` fail. Selle väljaanded ja kirjed lisatakse sinu omadele. Midagi ei asendata.
3. Vali **Lisa kirje** objektijuhise, tööjoonise, märgistuste komplekti, seotud mudeli või märkme jaoks. Vali väljaanne, millele see kuulub, ja selle staatus. Valitud fail salvestatakse oma nime, suuruse ja SHA-256 järgi; fail jääb oma kohale.
4. **Joonise muudatuste logi** näitab ühte rida iga lehe kohta ja ühte veergu iga väljaande kohta. Sulgudes olev revisjon tähendab, et seda väljaannet anti uuesti välja muutmata kujul.
5. **Laadi muudatuste logi alla (CSV)** salvestab väljaanded, lehetabeli ja kirjed. **Salvesta väljaannete ajalugu** kirjutab faili, mida teised rakendused loevad.

## Hea teada

- **Salvesta valitud märgistused kirjeks** paneb valitud märgistused viimase väljaande alla. Pilv salvestatakse revisjonipilvena selle väljaande revisjoniga. Vali kirje kõrval **Näita**, et sinna hüpata.
- **Registreeri väljaanne** annab välja su märgitud lehed. **Muudatused alates** ütleb, millised lehed märgiti pärast seda väljaannet.
- Ajalugu salvestatakse märgitud PDF-i sisse. See ei kuulu tagasivõtmise hulka.
- Sama faili lugemine kaks korda ei lisa midagi topelt. Kui kahel koopial on sama kirje, jäetakse uuem alles.
