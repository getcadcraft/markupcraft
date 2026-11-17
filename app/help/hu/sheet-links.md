---
title: Rajzlap-hivatkozások
summary: Tegyen egy jelölést egy másik rajzlapra mutatóvá, és a Kötegelt hivatkozások funkcióval kösse össze egy lépésben minden rajzlap-hivatkozást, például a 3/A-501 alakút, a rajzlapjával és nézetével.
keywords: hiperhivatkozás, hivatkozás, linkek, ugrás, rajzlap-hivatkozás, kiemelés (callout), részletkiemelés, metszetkiemelés, 3/A-501, ugrás rajzlapra, vissza, automatikus hivatkozás, kötegelt hivatkozás, kötegelt hivatkozások, rajzfej, rajzlapszám, rajzlapnév, nézet, részlet, átnevezés, újraszámozás, kiegészítés, pdf-hivatkozás
from: 86a17c37
---

A rajzlap-hivatkozás egy jelöléstől átvisz a készlet egy másik rajzlapjára: egy részletbuborékból a részletre, egy megjegyzésből a hivatkozott rajzlapra.

## Jelölés hivatkozása rajzlapra

1. Jelölje ki a jelölést.
2. A {{ui:Tulajdonságok}} panelben válassza ki a rajzlapot a {{ui:Hivatkozás rajzlapra}} alatt.

A jelölés jobb felső sarkában egy kis nyíl jelenik meg. Követéséhez tartsa lenyomva a {{key:Mod}} billentyűt, és kattintson a jelölésre, vagy jelölje ki, és a {{ui:Tulajdonságok}} panelben válassza a {{ui:Ugrás ide …}} lehetőséget. Az {{key:Alt+Left}} visszaviszi arra a rajzlapra, ahonnan érkezett.

A hivatkozás a rajzlapot a számával nevezi meg, így a készlet újbóli megnyitása vagy a revideált készlet lapcseréje után is működik: a legújabb, ugyanazzal a számmal rendelkező rajzlapot nyitja meg. Ha az a rajzlap nincs megnyitva, az állapotsor ezt jelzi.

## Minden rajzlap-hivatkozás egyszerre

Válassza az {{ui:Oldalak}} › {{ui:Kötegelt hivatkozások…}} lehetőséget, vagy a {{ui:Rajzlapok}} panel tetején a {{ui:Szöveg keresése}} alatt a {{ui:Rajzlap-hivatkozások összekötése…}} lehetőséget.

1. **Ellenőrizze a rajzlapszámokat.** A MarkupCraft felsorolja az összes megnyitott rajzlapot azzal a számmal és névvel, amelyet a rajzlap rajzfejéből (vagy oldalcímkéjéből) olvasott, és megmutatja, honnan származik. Javítsa a hibásakat, és írjon be számot ott, ahol nem talált (a rajzfej, amelynek számát vonalakként nyomtatták ki, nem tartalmaz olvasható szöveget). Ezután válassza a {{ui:Hivatkozások keresése}} gombot. A javítások egy visszavonási lépést jelentenek, és a mentett PDF oldalcímkéi lesznek.
2. **Nézze át a listát.** A MarkupCraft minden rajzlap szövegét beolvassa az olyan hivatkozásokhoz, mint a „3/A-501”, az „5 / A501”, a „DETAIL 2 ON A-501”, egy „3” számot tartalmazó buborék „A-501” felirattal, vagy egy egyszerű „A-501” egy megjegyzésben. Beolvassa a rajzlapok nézetcímeit is (a részletszám a rajzlapszámmal, vagy egy nagy szám mellette címmel). A lista három részből áll:
   - {{ui:Lesz hivatkozva}}: minden kiemelés, a hozzá tartozó rajzlap és az azon lévő nézet. Vegye ki a pipát mindazok elől, amelyeket nem kér. Ha a nézetet nem találta (például a 6 nézetet tartalmazó rajzlap 7-es nézetére mutató hivatkozás), válasszon nézetet a mellette lévő listából, vagy hagyja a {{ui:Teljes lap}} lehetőséget.
   - {{ui:Nincs hivatkozva}}: olyan rajzlapszámok, amelyekhez nincs megnyitott rajzlap, és hogy hány hivatkozás nevezi meg mindegyiket. Válassza ki mindegyikhez, melyik rajzlapot jelenti (például egy átszámozott rajzlapot), és az arra a számra mutató minden hivatkozás oda fog mutatni. Vagy hagyja kötetlenül.
   - Hány hivatkozás van már összekötve, és azok a helyes helyre mutatnak. Ezek változatlanok maradnak.
3. Válassza a {{ui:Hivatkozások létrehozása}} gombot.

Minden hivatkozáshoz egy vékony kék doboz kerül, amely rajzlap-hivatkozás. A {{key:Mod}} tartásával és kattintással a rajzlap a nézetre nagyítva nyílik meg. Egy {{key:Mod+Z}} mindet eltávolítja.

Csak a rajzlapszámnak tűnő kódok, például az R-19 vagy a W12X26 maradnak ki: a kiemelésnek a készlet saját rajzlapszámaihoz kell hasonlítania. A rajzlap saját száma a rajzfejében és a nézetcímekben soha nem kiemelés. A szkennelt rajzlapokon nincs olvasható szöveg: előbb használja a {{ui:Szöveg beolvasása (OCR)…}} funkciót, vagy kösse a kiemeléseket egyenként.

## Újrafuttatás, ha a készlet változik

A Kötegelt hivatkozások annyiszor futtathatók, ahányszor csak szeretné:

- **Rajzlap került hozzá**, például egy A-601-es kiegészítés: nyissa meg a fájlját, és futtassa újra a Kötegelt hivatkozásokat. Az A-601-re mutató, korábban nem hivatkozott kiemelések most már hivatkoznak.
- **Rajzlapot átszámoztak**: javítsa a számát az 1. lépésben. A Kötegelt hivatkozások által létrehozott, már nem megtalálható rajzlapra mutató hivatkozások a {{ui:Nincs hivatkozva}} alatt jelennek meg; válasszon rajzlapot egyszer, és mindegyik követni fogja. Az más nézetre áthelyezett hivatkozások frissülnek.
- A {{ui:Tulajdonságok}} panelben kézzel létrehozott hivatkozásokat a rendszer soha nem módosítja.

## A mentett PDF-ben

A készlet ugyanabban a PDF-ben lévő rajzlapra mutató hivatkozása PDF-hivatkozásként is íródik, így más megjelenítők kattintásra szintén odaugranak. A nézetes hivatkozás a nézetet nyitja meg a másik megjelenítőben (a PDF „fit rectangle” ugrása); a nézet nélküli hivatkozás a teljes rajzlapot nyitja meg. A készlet másik fájljában lévő rajzlapra mutató hivatkozások csak a MarkupCraftban működnek.
