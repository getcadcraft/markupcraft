---
title: Units, lengths and scales
summary: Every way to type a length, the units lengths and areas are shown in, rounding, and the list of preset scales.
section: reference
order: 30
keywords: units, feet, inches, feet and inches, metric, meters, millimeters, centimeters, scale, preset, architectural scale, engineering scale, ratio, square feet, rounding, fractions
---

## Typing a length

When you calibrate from two points, you type the real distance. MarkupCraft reads all of these:

| You type | It means |
|---|---|
| `24'-0"` | 24 feet |
| `12' 6 1/2"` or `12'-6 1/2"` | 12 feet 6½ inches |
| `12' 6` | 12 feet 6 inches (inch mark left off) |
| `6"` or `1/2"` | inches |
| `12.5'` or `12.5 ft` | 12½ feet |
| `3 ft 6 in` | 3 feet 6 inches (also feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | metric (also meter, metre, millimeter, centimetre…) |
| `24` | a bare number, in the unit chosen under {{ui:Show lengths in}} |

Curly quotes (’ ”) and two apostrophes ('') for inches work too. Zero and negative lengths are refused.

:::warning
A comma is read as a decimal point: `1,5 m` is 1.5 meters. Do not type thousands separators: `1,200 mm` is read as 1.2 millimeters. Type `1200 mm`.
:::

## How lengths and areas are shown

| {{ui:Show lengths in}} | A length shows as | An area shows as |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, rounded to 1/16" | square feet, two decimals |
| {{ui:Decimal feet}} | `12.54'`, two decimals | square feet, two decimals |
| {{ui:Inches}} | `150.5"`, up to two decimals | square inches, one decimal |
| {{ui:Meters}} | `3.820 m`, three decimals | square meters, three decimals |
| {{ui:Millimeters}} | `3820 mm`, whole millimeters | square millimeters, whole |

The perimeter of an area uses the length format.

## Preset scales

The presets assume the PDF is at its full printed size: 72 PDF points to the inch, as a CAD program plots it.

| Group | Scales | Lengths shown in |
|---|---|---|
| Architectural | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Feet and inches |
| Engineering | 1" = 10', 20', 30', 40', 50', 60', 100' | Decimal feet |
| Metric | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Millimeters |
| Metric | 1:100, 1:200, 1:250, 1:500, 1:1000 | Meters |

To use a preset scale but see lengths in another unit, calibrate from two points instead and pick the unit there.

## Scales other programs saved

When a PDF already carries a scale for a page from another program (a measurement scale stored on the page), MarkupCraft uses it if it is in feet, inches, meters, centimeters or millimeters. Its label is shown as the file states it.

## Paper positions

The status bar shows where the pointer is on the paper, in inches from the sheet's top-left corner, whatever the sheet's scale. Compare's nudge steps are in points (72 points to an inch).

## Accuracy

A measurement is as good as the calibration and your clicks. Calibrate over the longest known dimension you can find, zoom in to click its ends, then check one other dimension. A PDF that was scaled when it was made (a "fit to page" plot or a half-size set) is still accurate after calibrating from a dimension, but not with a preset.
