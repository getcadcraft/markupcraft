---
title: Slå ihop två personers redigeringar av en PDF
summary: Låt git, Fossil eller Mercurial slå ihop två markerade kopior av samma PDF, markering för markering, inklusive anteckningar.
keywords: sammanfoga, git, fossil, mercurial, versionshantering, konflikt, trevägs, cadcraft merge, gitattributes, markeringar, anteckningar, team, två kopior
from: a450a9ef
---

Två personer markerar samma PDF i två kopior. Om de rörde vid olika markeringar kan kopiorna slås ihop av ett program i stället för för hand.

## Vad som får det att fungera

Varje markering som MarkupCraft sparar bär sitt eget namn (sitt id) inuti PDF-filen, och namnet ändras aldrig. Sammanslagningen letar upp markeringar med det namnet, inte efter deras plats i filen, eftersom varje program numrerar om platserna när det sparar. Anteckningar och förseglade privata anteckningar matchas på samma sätt.

Bladen rörs aldrig: båda kopiorna måste ha lika många sidor. Om de skiljer sig behåller sammanslagningen din kopia som den är och säger det, eftersom att lägga till eller ta bort sidor är ett jobb för en person.

## Så här ställer du in det

Git behöver två rader en gång per arkiv:

```
# .gitattributes
*.pdf merge=cadcraft

# en gång, på varje dator
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Utan git, kör `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil och Mercurial tar samma tre filer i sin egen inställning för sammanslagningsverktyg. Uppgiftsfilen som följer med en ritning (`<name>.markups.json`, se [Markeringar som agerar](topic:markups-that-act)) slås ihop på samma sätt, som ren text.

## Reglerna

- En markering som ändrats på bara ena sidan tas med. Samma ändring på båda sidor tas med en gång.
- En markering som ändrats på två sätt är en **konflikt**: din sida står kvar och rapporten listar båda. Öppna resultatet och rätta den markeringen för hand.
- En markering som lagts till på endera sidan behålls. En som tagits bort på ena sidan och inte rörts på den andra tas bort. Borttagen på ena sidan och ändrad på den andra: borttagen, och rapporterad.
- Lager, kolumner, poster och anteckningar följer samma regler.
- Förseglade privata anteckningar öppnas aldrig: blocken från båda sidor behålls som de är.

Den sammanslagna filen är en fullständig omskrivning av din kopia, precis som MarkupCrafts egen Spara. Inget laddas upp; allt körs på din dator.
