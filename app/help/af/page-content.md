---
title: Verander die bladsy se eie lyne, prente en teks
summary: Skuif, verander grootte, verander kleur of verwyder wat die PDF self teken, skuif 'n lyn se punte, vervang 'n prent, en verander die woorde van 'n reël teks.
keywords: bladsyinhoud, basisinhoud, wysig PDF, wysig tekening, vektor, pad, vorm, lyn, prent, beeld, vervang beeld, teks, woorde, lettertipe, punte, nodusse, skuif, verander grootte, verander kleur, verwyder, inhoudgereedskap
from: 471d457e
---

Opmerkings sit bo-op 'n blad. Die {{ui:Inhoud}}-gereedskap werk op die blad self: die lyne, prente en reëls teks wat die PDF teken. Jou PDF op hierdie rekenaar word nooit verander nie: die wysigings is deel van die kopie wat jy stoor.

## Kies wat om te verander

1. Kies {{ui:Inhoud}} in die {{ui:Kies}}-groep, of druk {{key:B}}.
2. Onder {{ui:Kies}} in {{ui:Eienskappe}}, skakel {{ui:Vorms}}, {{ui:Prente}} en {{ui:Teks}} aan of af. Net die soorte wat aan is, kan gekies word, so jy kan die teks van 'n druk tekening kies sonder om sy lyne te vang.
3. Klik op iets om dit te kies. Shift+klik voeg by of verwyder. Sleep 'n boks oor leë papier om verskeie te kies: sleep na regs neem wat heeltemal binne die boks is, sleep na links neem wat dit raak.

'n Vorm binne 'n afgesnyde gebied word net gekies waar dit wys.

## Skuif, verander grootte, verander kleur, verwyder

- **Skuif:** sleep 'n gekose voorwerp, of druk die pyltjiessleutels (hou Shift vir groter stappe). Hou Shift terwyl jy sleep om reguit oor of reguit op te skuif.
- **Verander grootte:** sleep een van die agt vierkante rondom die keuse. Dit groei of krimp van die teenoorstaande kant af. Hou Shift om die verhoudings te behou.
- **Verander kleur:** vir lyne en vorms, stel {{ui:Lynkleur}}, {{ui:Vulkleur}} en {{ui:Lynwydte (pt)}} in {{ui:Eienskappe}}.
- **Verwyder:** druk {{key:Delete}}, of kies {{ui:Skrap van die bladsy}}.
- **Ongedaan maak:** elke verandering is een stap: {{key:Mod+Z}} neem dit terug, {{key:Mod+Y}} sit dit terug.

{{ui:Herstel soos dit was}} ontdoen elke verandering aan die gekose voorwerpe op een slag; {{ui:Herstel hierdie bladsy soos dit was}} doen dit vir die hele bladsy.

## Kopieer, sny en plak bladsyinhoud

Kies lyne, prente of teks met die {{ui:Inhoud}}-gereedskap, en dan:

- {{key:Mod+C}} kopieer, {{key:Mod+X}} sny (kopieer en haal dit uit die bladsy), {{key:Mod+D}} sit 'n kopie langs hulle.
- {{key:Mod+V}} plak as bladsyinhoud, langs die oorspronklike of waar die aanwyser is (soos [Instellings](topic:settings) sê); {{key:Mod+Shift+V}} plak presies op dieselfde plek. Plak op 'n ander bladsy, in 'n ander oop PDF of in 'n ander MarkupCraft-oortjie van hierdie blaaier.
- Die {{ui:Wysig}}-groep se kieslys en die regsklik-kieslys het dieselfde opdragte.

Plak hou lyne as lyne, woorde as woorde in hul eie lettertipe, en prente as prente. Dit is een stuk: skuif dit, verander die grootte met sy vierkante, verwyder dit, of {{key:Mod+Z}} dit weg. Dit word deel van die bladsy in die kopie wat jy stoor. Wat jy laas gekopieer het, opmerkings of bladsyinhoud, is wat {{key:Mod+V}} plak.

Wat die kopie hou, word gesny tot die boks rondom die keuse: iets wat MarkupCraft nie uit die kopie kan neem nie (sien hieronder) en wat binne daardie boks lê, kom saam.

## Skuif 'n lyn se punte

Dubbelklik op 'n lyn of kurwe (of kies dit en kies {{ui:Wysig punte}}). Die punte wys as vierkante en die kurwe-handvatsels as sirkels. Sleep 'n punt of 'n handvatsel; 'n punt bring die handvatsels langs hom saam, sodat die kurwe sy vorm rondom dit behou. Druk {{key:Esc}}, of klik weg van die lyn, wanneer jy klaar is.

Reghoeke het geen punte om te sleep nie: verander hulle grootte met die vierkante rondom hulle.

## Vervang 'n prent

Kies 'n prent en kies {{ui:Vervang prent…}}, en kies dan 'n PNG-, JPEG- of SVG-lêer (of 'n PDF: sy eerste bladsy). Die nuwe prent vul die ou een se plek en behou sy eie verhoudings.

## Verander die woorde van 'n reël teks

Dubbelklik op 'n reël teks, tik die nuwe woorde in {{ui:Woorde}} en druk {{key:Enter}}. Die woorde word geskryf in die reël se eie lettertipe en grootte, en die reël behou sy lengte, sodat die teks daarna nie beweeg nie.

:::note
Die meeste PDF's dra net die letters wat hulle gebruik uit elke lettertipe. Wanneer jy 'n letter tik wat die lêer se kopie van die lettertipe nie het nie, druk MarkupCraft daardie letter in Helvetica en sê dit. {{ui:Eienskappe}} wys watter letters die lettertipe in die lêer het.
:::

Teks word een reël op 'n slag verander; dit vloei nie in die volgende reël nie.

## Wat MarkupCraft laat soos dit is

- **Ingeskandeerde bladsye** is een prent: jy kan die prent skuif, verander grootte, vervang of verwyder, maar wat daarin is, kan nie verander word nie.
- **Versleutelde en getekende PDF's:** om die bladsy te verander sou 'n handtekening breek, so die {{ui:Inhoud}}-gereedskap sê dit en verander niks nie. Opmerkings werk steeds.
- **Afgesnyde gebiede**, voorwerpe wat tussen twee dele van die bladsy se inhoud verdeel is, en kleurmengsels wat 'n hele gebied vul, bly soos hulle is; MarkupCraft sê waarom wanneer jy probeer.
- **Woorde in 'n standaardlettertipe wat die PDF nie beskryf nie** (soos 'n Times-lettertipe sonder letterwydtes in die lêer) kan nie verander word nie, omdat MarkupCraft die reël se spasiëring nie kon behou nie. Die reël kan steeds geskuif word.

## Plaas opmerkings in die bladsy

Lyne, reghoeke, elipse, polilyne, wolke en penstreke wat jy as opmerkings geteken het, kan deel van die bladsy self word: kies hulle en kies {{ui:Plaas in die bladsy}} in {{ui:Eienskappe}}. Teks, stempels, prente en deursigtige kleure bly opmerkings.
