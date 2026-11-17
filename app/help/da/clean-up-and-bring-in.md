---
title: Ryd op i pennestreger, og hent gennemgangskommentarer og byggepladsens fremdrift
summary: Lav frihåndspennestreger om til linjer, cirkler, buer og rektangler; hent en byggesags gennemgangskommentarer og en byggeplads' opmålingsfremdrift ind som noter.
keywords: pen, frihånd, ryd op, ret ud, cirkel, linje, rektangel, bue, byggetilladelse, gennemgangskommentarer, fremdrift, drone, scanning, opmåling, noter, csv
from: 547d8e42
---

## Ryd op i pennestreger

Tegn med {{ui:Pen}}, åbn derefter menuen {{ui:Mere}} i gruppen Rediger, og vælg {{ui:Ryd op i pennestreger}}. Hver valgt pennestreg bliver til det, den skulle være: en lige streg bliver til en linje (gjort præcis vandret eller lodret, når den næsten var det), en rund til en ellipse, en del af en cirkel til en bue, en lukket firkantet til et rektangel, og alt andet til en polylinje eller polygon. Løse ender af streger, der er tegnet sammen, trækkes ind mod hinanden. Er ingen pennestreg valgt, ryddes alle pennestreger på det åbne ark. Det er ét fortrydelsestrin: Ctrl+Z sætter frihåndstegningen tilbage. Formen beregnes på din computer efter faste regler; intet sendes nogen steder hen.

## Hent gennemgangskommentarer

BimCrafts byggesagspakke indeholder `01-review-comments.csv`: de kommentarer, en planbehandler sandsynligvis vil give, hver med reglen, paragraffen, hvad der kræves, hvad der blev fundet, og hvad der skal gøres. Under fanen {{ui:Opgaver}} åbner du {{ui:Kommentarer fra byggesagsbehandling}} og vælger {{ui:Hent kommentarer (CSV)}}. Hver kommentar bliver til en åben note i en kolonne ned langs venstre side af det åbne ark; træk hver hen til det sted, den handler om. De er beregnet ud fra de kontroller, der findes, ikke af en planbehandler.

## Hent HAZOP-nodebokse

CadCrafts P&ID-add-on tegner noderne i en HAZOP-undersøgelse og kan gemme dem som {{ui:HAZOP-nodebokse}} (en JSON-fil). Åbn det udskrevne P&ID-ark her, gå til fanen {{ui:Opgaver}}, åbn {{ui:HAZOP-nodebokse}} og vælg {{ui:Hent nodebokse (JSON)}}. Hver node bliver til en åben rektangel på arket med sit nummer, navn, udstyr og linjer i teksten, og teamet skriver sine fund som svar på den. Arket tages som udskrevet i fuld størrelse fra tegningens nederste venstre hjørne; er det udskrevet i en anden målestok, skriver du først det tal i {{ui:Udskrevet i}} (0.5 for 1:2). En node, der ligger uden for siden, tegnes ikke, og panelet siger, hvor mange. Markørerne er et hjælpemiddel til undersøgelsen: de viser, hvor noderne er, men de vurderer ikke undersøgelsen.

## Hent byggepladsens fremdrift

CivilCraft holder en række for hver drone-flyvning eller scanning af byggepladsen. Under fanen {{ui:Opgaver}} åbner du {{ui:Byggepladsens fremdrift}} og vælger {{ui:Hent fremdrift (JSON)}}. Hver opmåling bliver til en note på det åbne ark, der siger, hvor meget der er lavet, hvad der mangler at blive afgravet eller opfyldt, hvad der er gravet for dybt eller fyldt for meget, og hvad der står ud over planen. En opmåling med noget uden for planen forbliver Åben; en ren en bliver Accepteret.
