<!-- AUTO-GENERATED from standard-drink.html. Do not edit by hand; edit the HTML and let .github/workflows/markdown-mirror.yml regenerate this. -->

> **Markdown version** of [https://siplogger.app/standard-drink.html](https://siplogger.app/standard-drink.html) — a clean, agent-friendly mirror of the HTML page.

# What Is a Standard Drink?

Sizes, the ABV math, how definitions differ by country — and why "I had three drinks" is less precise than it sounds.

Last updated: July 3, 2026

## The US definition

In the United States, one standard drink contains about **14 grams (0.6 fl oz) of pure alcohol**. That is roughly:

- **12 oz (355 ml) of beer** at 5% ABV
- **5 oz (148 ml) of wine** at 12% ABV
- **1.5 oz (44 ml) of spirits** at 40% ABV

The point of the convention: those three very different-looking servings deliver approximately the same alcohol. Your body doesn't care whether the 14 grams arrived as beer or bourbon.

## The math for any drink

Pure alcohol doesn't come labeled in grams, but it is easy to compute from the label:

**grams of alcohol = volume (ml) × ABV (decimal) × 0.789**

(0.789 g/ml is the density of ethanol.) Two examples:

- A 473 ml (16 oz) pint of 8% craft IPA: 473 × 0.08 × 0.789 ≈ **30 g ≈ 2.1 US standard drinks** — one pint, two drinks
- A generous 200 ml restaurant pour of 14% red wine: 200 × 0.14 × 0.789 ≈ **22 g ≈ 1.6 standard drinks**

This is why casual counting drifts: modern craft beers, large wine pours, and cocktails all routinely exceed one standard drink per glass.

## Country differences

"Standard drink" is a public-health convention, and countries define it differently:

| Country | Grams of pure alcohol per standard drink/unit |
| --- | --- |
| United Kingdom (1 unit) | 8 g |
| Australia | 10 g |
| Canada | ≈ 13.5 g |
| United States | 14 g |
| Japan (1 go-based unit) | ≈ 20 g |

The same 5 oz glass of wine is therefore "one drink" in the US but about 1.7 units in the UK. When reading guidance from another country, check which definition it uses.

## Cocktails: the big undercount

Cocktails are where drink counting fails most often. A classic margarita or martini typically contains **1.5–2+ US standard drinks**; a Long Island Iced Tea can contain **2–4**. Recipes vary, bartenders pour differently, and the mixer volume hides the alcohol. Logging a cocktail as "one drink" can understate actual alcohol by half or more — which then flows directly into any [BAC estimate's error](https://siplogger.app/bac-calculator-accuracy.html.md).

## How SipLogger uses this

[SipLogger](https://siplogger.app/index.html.md) ships with **40+ drink templates** — beers, wines, spirits, and cocktails — each pre-configured with realistic volume and ABV, so a logged drink carries its actual estimated alcohol content into the [Widmark-based calculation](https://siplogger.app/widmark-formula.html.md) rather than a vague "one drink" unit. For anything unusual, you can create custom drinks with any volume and ABV. Better inputs make the educational estimate more meaningful — though it always remains an estimate with roughly ±20% variance, never a measurement.

## Frequently Asked Questions

### How do I calculate standard drinks in any beverage?

Multiply volume (ml) × ABV (decimal) × 0.789 to get grams of pure alcohol, then divide by your country's standard (14 g in the US). A 473 ml pint of 8% IPA works out to about 30 g — just over 2 US standard drinks.

### Is a cocktail one standard drink?

Usually not. A margarita or martini is typically 1.5–2+ US standard drinks; a Long Island Iced Tea can be 2–4. Recipes and pours vary widely, making cocktails the most commonly undercounted drink.

### Why do definitions differ by country?

They are public-health conventions, not physical constants. The UK unit is 8 g, Australia's standard drink is 10 g, the US uses 14 g. The same glass counts differently depending on whose standard you apply.

### Does one standard drink equal a specific BAC?

No. The estimated BAC from one drink depends on body weight, composition, biological sex, food, and timing. Models like the Widmark formula can estimate it for a specific person — as an educational approximation with roughly ±20% variance, never a basis for driving decisions.

[![Download SipLogger - Educational BAC Calculator on the App Store](https://siplogger.app/images/download-on-the-app-store.svg)](https://apps.apple.com/us/app/siplogger/id6758573311)

## Related reading

- [The Widmark formula explained: how BAC is estimated](https://siplogger.app/widmark-formula.html.md)
- [How accurate are BAC calculators?](https://siplogger.app/bac-calculator-accuracy.html.md)
- [SipLogger homepage](https://siplogger.app/index.html.md)

SipLogger is strictly an educational and informational tool. It does not measure actual blood alcohol content, and estimated values carry approximately ±20% variance. Never use any BAC estimate to decide whether it is safe to drive or operate machinery. Intended for adults of legal drinking age only. Rated 18+. This app does not encourage alcohol consumption.
