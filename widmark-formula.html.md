<!-- AUTO-GENERATED from widmark-formula.html. Do not edit by hand; edit the HTML and run python scripts/html_to_md.py. -->

> **Markdown version** of [https://siplogger.app/widmark-formula.html](https://siplogger.app/widmark-formula.html) — a clean, agent-friendly mirror of the HTML page.

# The Widmark Formula Explained

The math behind BAC estimation — the classic equation, the Watson refinement, a worked example, and where the model's limits are.

Last updated: September 28, 2026

**Short answer:** the Widmark formula estimates blood alcohol concentration from the grams of alcohol consumed, body weight, a distribution factor *r*, and a constant elimination rate over time: **BAC% = A ÷ (r × W) × 100 − β × t**. Modern implementations, SipLogger among them, replace the fixed *r* with a body-water estimate from the Watson equations. The result is an educational estimate with roughly ±20% variance, not a measurement.

## Where the formula comes from

In the 1930s, Swedish physician **Erik M. P. Widmark** published the pharmacokinetic model that still underpins most blood alcohol estimation today. His insight was that BAC can be approximated from four things: how much pure alcohol was consumed, how much of the body it distributes into, and how much time has passed at what elimination rate.

## The equation, in plain terms

The classic Widmark formula is:

**BAC% = ( A / (r × W) ) × 100 − (β × t)**

- **A** — grams of pure alcohol consumed (a US standard drink is about 14 g; see our [standard drink guide](https://siplogger.app/standard-drink.html.md))
- **W** — body weight in grams
- **r** — the Widmark distribution factor: the fraction of the body alcohol effectively distributes into. Widmark's population averages were about **0.68 for men** and **0.55 for women**
- **β** — the elimination rate, commonly averaged at about **0.015% BAC per hour** (individual range roughly 0.010–0.020%)
- **t** — hours since drinking began

Intuitively: alcohol spreads through your body water (the first term), while your liver removes it at a roughly constant hourly rate (the second term).

## The variables at a glance

| Symbol | Meaning | Typical value | Where it comes from |
| --- | --- | --- | --- |
| A | Grams of pure alcohol consumed | 14 g per US standard drink | Volume × ABV × 0.789; see the [standard drink guide](https://siplogger.app/standard-drink.html.md) |
| W | Body weight | In grams (70 kg = 70,000 g) | Your profile |
| r | Distribution factor: the share of the body alcohol spreads into | About 0.68 (men), 0.55 (women) | Widmark's averages, or a personal body-water estimate (Watson) |
| β | Elimination rate | About 0.015% per hour (range roughly 0.010 to 0.020) | Population average; varies per person and per session |
| t | Hours since drinking began | Clock time | Timestamps of each drink |

## The Watson refinement: personalizing r

The weakest part of the classic formula is the fixed **r**: two people of the same weight can have very different body water. In 1981, Watson and colleagues published equations that estimate **Total Body Water (TBW)** from height, weight, age, and biological sex. Deriving the distribution factor from estimated TBW instead of a fixed average makes the estimate reflect *your* body rather than a 1930s population mean.

This is the approach [SipLogger](https://siplogger.app/index.html.md) uses: Watson TBW to personalize the distribution factor, then Widmark's model for accumulation and elimination — with each drink's absorption modeled individually over time rather than assuming everything is absorbed instantly.

## A worked example

Take a 70 kg (154 lb) man who has two US standard drinks (about 28 g of pure alcohol) and measure one hour after starting:

1. **Distribution:** 28 g ÷ (0.68 × 70,000 g) × 100 ≈ **0.059%** peak estimated BAC
2. **Elimination:** after 1 hour at 0.015%/hour, subtract 0.015 → **≈ 0.044%** estimated BAC

The same drinks for a 60 kg woman (r ≈ 0.55): 28 ÷ (0.55 × 60,000) × 100 ≈ **0.085%** peak — nearly half again higher, from identical drinks. Body parameters matter enormously, which is why generic "drinks per hour" rules mislead.

Remember what these numbers are: **modeled averages with roughly ±20% variance**, not measurements. Food in the stomach, medications, and individual metabolism can move real values well outside the example figures.

## Percent or per mille?

The United States writes blood alcohol in percent by volume: a common legal threshold is 0.08%. Most of Europe writes the same quantity in per mille (‰), grams per litre of blood, so 0.08% is written 0.8 ‰, and 0.05% is 0.5 ‰. SipLogger displays per mille, matching the convention in its European markets; to convert, multiply a percent figure by ten. The worked example above, 0.059% at the peak, would read about 0.59 ‰ in the app.

## What the model can't do

The Widmark model — even Watson-refined — assumes average absorption, a constant elimination rate, and accurate logging. In reality absorption varies with food and drink type, elimination varies by individual and session, and nobody logs a heavy pour perfectly. That is why any honest implementation, SipLogger included, presents results as **educational estimates only** — useful for understanding the shape of alcohol metabolism, never for deciding whether it is safe to drive. For the full picture, read [how accurate BAC calculators really are](https://siplogger.app/bac-calculator-accuracy.html.md).

## Frequently Asked Questions

### Is the Widmark formula still used today?

Yes. It remains the foundation of forensic BAC estimation and toxicology teaching, applied with documented uncertainty ranges. Modern refinements like Watson total body water improve the body-composition input, but the core model is unchanged after nearly a century.

### What is the Watson Total Body Water method?

Watson's 1981 equations estimate total body water from height, weight, age, and biological sex. Because alcohol distributes into body water, deriving the distribution factor from TBW personalizes the estimate instead of using Widmark's fixed 0.68 and 0.55 averages.

### Why does my estimated BAC differ from a breathalyzer?

An estimate is a mathematical model of averages; a breathalyzer measures actual breath alcohol at a moment. Food, medications, individual metabolism, and logging error all move real BAC away from the model, which is the source of the roughly ±20% variance. Neither should be used to decide whether to drive.

### What elimination rate does the model assume?

A common average is 0.015% BAC per hour, with real individual rates ranging roughly 0.010 to 0.020%. That spread alone creates meaningful uncertainty in any estimate over a multi-hour session.

### What is the difference between BAC in percent and per mille?

They are the same quantity in different units. Percent is grams of alcohol per 100 ml of blood; per mille (‰) is grams per litre. Multiply percent by ten to get per mille: 0.05% equals 0.5 ‰, and 0.08% equals 0.8 ‰. SipLogger shows per mille.

### Can the Widmark formula tell me when I can drive?

No. It produces an educational estimate with roughly ±20% variance, and individual absorption and elimination can fall outside even that range. No formula, app, or rule of thumb should be used to decide whether to drive or operate machinery.

[![Download SipLogger - Educational BAC Calculator on the App Store](https://siplogger.app/images/download-on-the-app-store.svg)](https://apps.apple.com/us/app/siplogger/id6758573311)

## Sources

- Widmark, E. M. P. (1932). *Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung.* Berlin: Urban & Schwarzenberg.
- [Watson, P. E., Watson, I. D., & Batt, R. D. (1981). Prediction of blood alcohol concentrations in human subjects: updating the Widmark equation. Journal of Studies on Alcohol, 42(7), 547–556.](https://pubmed.ncbi.nlm.nih.gov/7289599/)
- US National Institute on Alcohol Abuse and Alcoholism: What is a standard drink?

## Related reading

- [How accurate are BAC calculators?](https://siplogger.app/bac-calculator-accuracy.html.md)
- [What is a standard drink? Sizes, ABV math, and country differences](https://siplogger.app/standard-drink.html.md)
- [SipLogger homepage](https://siplogger.app/index.html.md)

SipLogger is strictly an educational and informational tool. It does not measure actual blood alcohol content, and estimated values carry approximately ±20% variance. Never use any BAC estimate to decide whether it is safe to drive or operate machinery. Intended for adults of legal drinking age only. Rated 18+. This app does not encourage alcohol consumption.
