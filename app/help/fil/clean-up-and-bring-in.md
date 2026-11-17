---
title: Linisin ang pen stroke, at mag-import ng review comments at site progress
summary: Gawing linya, bilog, arko at rectangle ang freehand na pen stroke; mag-import ng review comments ng permit package at survey progress ng site bilang note.
keywords: pen, freehand, linisin, ituwid, circle, line, rectangle, arc, permit, review comments, progress, drone, scan, survey, notes, csv
from: 547d8e42
---

## Linisin ang pen stroke

Gumuhit gamit ang {{ui:Pen}}, saka buksan ang {{ui:Iba pa}} menu sa Edit group at piliin ang {{ui:Linisin ang mga pen stroke}}. Bawat napiling pen stroke ay nagiging kung ano ang nilalayon nito: ang tuwid na stroke ay nagiging linya (ginagawang eksaktong pahalang o patayo kapag halos ganoon na), ang bilog ay nagiging ellipse, ang bahagi ng bilog ay nagiging arko, ang saradong may apat na sulok ay nagiging rectangle, at ang iba ay polyline o polygon. Ang mga dulong magkakalapit ng mga stroke na iginuhit nang sabay ay hinihila sa isa't isa. Kapag walang napiling pen stroke, lilinisin ang lahat ng pen stroke sa bukas na sheet. Isang undo step ito: ibabalik ng Ctrl+Z ang freehand. Kinakalkula ang hugis sa computer mo gamit ang mga nakapirming patakaran; walang ipinapadala kahit saan.

## Mag-import ng review comments

Ang permit package ng BimCraft ay may `01-review-comments.csv`: ang mga komentong malamang gawin ng plan reviewer, bawat isa may rule, clause, kailangan, nakita, at dapat gawin. Sa {{ui:Tasks}} tab, buksan ang {{ui:Mga komento sa permit review}} at piliin ang {{ui:I-import ang mga komento (CSV)}}. Bawat komento ay nagiging Open note sa isang column sa kaliwa ng bukas na sheet; i-drag ang bawat isa sa lugar na tinutukoy nito. Kinakalkula ang mga ito mula sa mga check na umiiral, hindi galing sa plan examiner.

## Mag-import ng HAZOP node boxes

Gumuguhit ang P&ID add-on ng CadCraft ng mga node ng HAZOP study at maaari itong i-save bilang {{ui:HAZOP node box}} (JSON file). Buksan dito ang naka-print na P&ID sheet, pumunta sa {{ui:Tasks}} tab, buksan ang {{ui:HAZOP node box}} at piliin ang {{ui:I-import ang node box (JSON)}}. Bawat node ay nagiging Open rectangle sa sheet na may numero, pangalan, kagamitan at linya nito sa teksto, at isinusulat ng team ang mga natuklasan nila bilang reply dito. Kinukuha ang sheet bilang naka-print sa buong sukat mula sa kaliwang ibabang sulok ng drawing; kung na-print ito sa ibang scale, i-type muna ang numerong iyon sa {{ui:Nai-print sa}} (0.5 para sa 1:2). Hindi iginuguhit ang node na nasa labas ng pahina, at sinasabi ng panel kung ilan ito. Pantulong lang sa pag-aaral ang mga marker: ipinapakita nila kung nasaan ang mga node, hindi nila hinuhusgahan ang pag-aaral.

## Mag-import ng site progress

Nagtatago ang CivilCraft ng isang hilera para sa bawat drone flight o scan ng site. Sa {{ui:Tasks}} tab, buksan ang {{ui:Progreso sa site}} at piliin ang {{ui:I-import ang progreso (JSON)}}. Bawat survey ay nagiging note sa bukas na sheet na nagsasabi kung gaano na ang tapos, ano pa ang kailangang hukayin o punuan, ano ang sobrang hinukay o sobrang napuno, at ano ang wala sa plano. Nananatiling Open ang survey na may bagay na wala sa plano; ang malinis ay Accepted.
