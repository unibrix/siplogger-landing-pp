<!-- AUTO-GENERATED from standard-drink.html. Do not edit by hand; edit the HTML and run python scripts/html_to_md.py. -->

> **Markdown version** of [https://siplogger.app/standard-drink.html](https://siplogger.app/standard-drink.html) — a clean, agent-friendly mirror of the HTML page.

# What Is a Standard Drink?

Sizes, the ABV math, how definitions differ by country — and why "I had three drinks" is less precise than it sounds.

Last updated: September 28, 2026

**Short answer:** in the United States one standard drink is about **14 grams (0.6 fl oz) of pure alcohol**: a 12 oz (355 ml) beer at 5%, a 5 oz (148 ml) glass of wine at 12%, or a 1.5 oz (44 ml) shot of spirits at 40%. Other countries define it as anything from 8 to 20 grams. To count any drink, multiply its volume in ml by its ABV and by 0.789, then divide by your country's figure.

## The US definition

In the United States, one standard drink contains about **14 grams (0.6 fl oz) of pure alcohol**. That is roughly:

- **12 oz (355 ml) of beer** at 5% ABV
- **5 oz (148 ml) of wine** at 12% ABV
- **1.5 oz (44 ml) of spirits** at 40% ABV

The point of the convention: those three very different-looking servings deliver approximately the same alcohol. Your body doesn't care whether the 14 grams arrived as beer or bourbon.

## How big is a standard drink?

Big enough to surprise most people. The table applies the formula below to common servings; the last column is US standard drinks (14 g).

| Drink | Serving | ABV | Pure alcohol | US standard drinks |
| --- | --- | --- | --- | --- |
| Light beer | 355 ml (12 oz) | 4.2% | 11.8 g | 0.8 |
| Regular beer | 355 ml (12 oz) | 5% | 14.0 g | 1.0 |
| Craft IPA, pint | 473 ml (16 oz) | 7% | 26.1 g | 1.9 |
| Wine, standard pour | 148 ml (5 oz) | 12% | 14.0 g | 1.0 |
| Wine, large pour | 250 ml (8.5 oz) | 13.5% | 26.6 g | 1.9 |
| Bottle of wine | 750 ml (25 oz) | 12% | 71.0 g | 5.1 |
| Spirits, single shot | 44 ml (1.5 oz) | 40% | 13.9 g | 1.0 |
| Spirits, double | 89 ml (3 oz) | 40% | 28.1 g | 2.0 |

Cocktails are missing from the table on purpose: their alcohol depends on the recipe and the pour, which is why they get their own section below.

## The math for any drink

Pure alcohol doesn't come labeled in grams, but it is easy to compute from the label:

**grams of alcohol = volume (ml) × ABV (decimal) × 0.789**

(0.789 g/ml is the density of ethanol.) Two examples:

- A 473 ml (16 oz) pint of 8% craft IPA: 473 × 0.08 × 0.789 ≈ **30 g ≈ 2.1 US standard drinks** — one pint, two drinks
- A generous 200 ml restaurant pour of 14% red wine: 200 × 0.14 × 0.789 ≈ **22 g ≈ 1.6 standard drinks**

This is why casual counting drifts: modern craft beers, large wine pours, and cocktails all routinely exceed one standard drink per glass.

## Country differences

"Standard drink" is a public-health convention, and countries define it differently. Grams of pure alcohol per standard drink or unit, as published by national health agencies:

| Country | Grams per standard drink or unit | A 5 oz (148 ml) glass of 12% wine counts as |
| --- | --- | --- |
| United Kingdom (1 unit) | 8 g | 1.8 units |
| Australia, New Zealand, Ireland, France, Spain, Netherlands, Poland | 10 g | 1.4 drinks |
| Germany | 10 to 12 g | 1.2 to 1.4 drinks |
| Denmark, Finland, Italy | 12 g | 1.2 drinks |
| Canada | 13.45 g | 1.0 drink |
| United States | 14 g | 1.0 drink |
| Japan | 19.75 g | 0.7 drink |
| Austria | 20 g | 0.7 drink |

The same glass of wine is one drink in Washington, nearly two units in London, and less than one drink in Vienna. When you read drinking guidance from another country, check which definition it uses. National conventions are revised from time to time; the figures above are the ones in force when this page was last updated.

## Cocktails: the big undercount

Cocktails are where drink counting fails most often. A classic margarita or martini typically contains **1.5–2+ US standard drinks**; a Long Island Iced Tea can contain **2–4**. Recipes vary, bartenders pour differently, and the mixer volume hides the alcohol. Logging a cocktail as "one drink" can understate actual alcohol by half or more — which then flows directly into any [BAC estimate's error](https://siplogger.app/bac-calculator-accuracy.html.md).

## Why standard drinks matter for a BAC estimate

Every formula-based estimate of blood alcohol content, including the [Widmark formula](https://siplogger.app/widmark-formula.html.md), starts from one input: grams of pure alcohol consumed. A "drink" is not a unit the formula understands. If a pint of 7% IPA is logged as one drink when it is really 1.9, the estimate starts out about half too low before body weight, timing, or metabolism have had any say. The standard-drink conventions exist to make that conversion consistent, and the volume-times-ABV arithmetic above makes it exact for whatever is actually in the glass.

## How SipLogger uses this

[SipLogger](https://siplogger.app/index.html.md) ships with **300+ drink templates** — beers, wines, spirits, and cocktails — each pre-configured with realistic volume and ABV, so a logged drink carries its actual estimated alcohol content into the [Widmark-based calculation](https://siplogger.app/widmark-formula.html.md) rather than a vague "one drink" unit. For anything unusual, you can create custom drinks with any volume and ABV. Better inputs make the educational estimate more meaningful — though it always remains an estimate with roughly ±20% variance, never a measurement.

## Frequently Asked Questions

### How do I calculate standard drinks in any beverage?

Multiply volume (ml) × ABV (decimal) × 0.789 to get grams of pure alcohol, then divide by your country's standard (14 g in the US). A 473 ml pint of 8% IPA works out to about 30 g, just over 2 US standard drinks.

### How big is one standard drink?

In the US, about 14 g of pure alcohol: a 355 ml (12 oz) beer at 5%, a 148 ml (5 oz) glass of wine at 12%, or a 44 ml (1.5 oz) shot of spirits at 40%. In the UK a unit is 8 g, so the same servings are roughly 1.5 to 2 units each.

### How many standard drinks are in a bottle of wine?

A 750 ml bottle at 12% ABV holds about 71 g of pure alcohol: roughly 5 US standard drinks, 7 Australian standard drinks, or 9 UK units. At 14% ABV it is closer to 6 US standard drinks.

### Is a cocktail one standard drink?

Usually not. A margarita or martini is typically 1.5 to 2 or more US standard drinks; a Long Island Iced Tea can be 2 to 4. Recipes and pours vary widely, making cocktails the most commonly undercounted drink.

### Why do definitions differ by country?

They are public-health conventions, not physical constants. The UK unit is 8 g, Australia's standard drink is 10 g, the US uses 14 g, Austria 20 g. The same glass counts differently depending on whose standard you apply.

### What is a standard drink in the UK?

The UK counts alcohol in units of 8 g of pure alcohol rather than standard drinks. A pint of 4% beer is about 2.3 units, a 175 ml glass of 13% wine about 2.3 units, and a 25 ml single measure of 40% spirits is 1 unit.

### Does one standard drink equal a specific BAC?

No. The estimated BAC from one drink depends on body weight, composition, biological sex, food, and timing. Models like the Widmark formula can estimate it for a specific person, as an educational approximation with roughly ±20% variance, never a basis for driving decisions.

[![Download SipLogger - Educational BAC Calculator on the App Store](https://siplogger.app/images/download-on-the-app-store.svg)](https://apps.apple.com/us/app/siplogger/id6758573311)

## Sources

- US National Institute on Alcohol Abuse and Alcoholism: What is a standard drink?
- [UK NHS: Calculating alcohol units](https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/)
- Australian Department of Health: Standard drinks guide
- [World Health Organization: International guide for monitoring alcohol consumption and related harm (country definitions of a standard drink)](https://www.who.int/publications/i/item/international-guide-for-monitoring-alcohol-consumption-and-related-harm)

## Related reading

- [The Widmark formula explained: how BAC is estimated](https://siplogger.app/widmark-formula.html.md)
- [How accurate are BAC calculators?](https://siplogger.app/bac-calculator-accuracy.html.md)
- [SipLogger homepage](https://siplogger.app/index.html.md)

SipLogger is strictly an educational and informational tool. It does not measure actual blood alcohol content, and estimated values carry approximately ±20% variance. Never use any BAC estimate to decide whether it is safe to drive or operate machinery. Intended for adults of legal drinking age only. Rated 18+. This app does not encourage alcohol consumption.
