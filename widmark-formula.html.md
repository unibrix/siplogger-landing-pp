<!-- AUTO-GENERATED from widmark-formula.html. Do not edit by hand; edit the HTML and let .github/workflows/markdown-mirror.yml regenerate this. -->

> **Markdown version** of [https://siplogger.app/widmark-formula.html](https://siplogger.app/widmark-formula.html) — a clean, agent-friendly mirror of the HTML page.

# The Widmark Formula Explained

The math behind BAC estimation — the classic equation, the Watson refinement, a worked example, and where the model's limits are.

Last updated: July 3, 2026

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

## The Watson refinement: personalizing r

The weakest part of the classic formula is the fixed **r**: two people of the same weight can have very different body water. In 1980, Watson and colleagues published equations that estimate **Total Body Water (TBW)** from height, weight, age, and biological sex. Deriving the distribution factor from estimated TBW instead of a fixed average makes the estimate reflect *your* body rather than a 1930s population mean.

This is the approach [SipLogger](https://siplogger.app/index.html.md) uses: Watson TBW to personalize the distribution factor, then Widmark's model for accumulation and elimination — with each drink's absorption modeled individually over time rather than assuming everything is absorbed instantly.

## A worked example

Take a 70 kg (154 lb) man who has two US standard drinks (about 28 g of pure alcohol) and measure one hour after starting:

1. **Distribution:** 28 g ÷ (0.68 × 70,000 g) × 100 ≈ **0.059%** peak estimated BAC
2. **Elimination:** after 1 hour at 0.015%/hour, subtract 0.015 → **≈ 0.044%** estimated BAC

The same drinks for a 60 kg woman (r ≈ 0.55): 28 ÷ (0.55 × 60,000) × 100 ≈ **0.085%** peak — nearly half again higher, from identical drinks. Body parameters matter enormously, which is why generic "drinks per hour" rules mislead.

Remember what these numbers are: **modeled averages with roughly ±20% variance**, not measurements. Food in the stomach, medications, and individual metabolism can move real values well outside the example figures.

## What the model can't do

The Widmark model — even Watson-refined — assumes average absorption, a constant elimination rate, and accurate logging. In reality absorption varies with food and drink type, elimination varies by individual and session, and nobody logs a heavy pour perfectly. That is why any honest implementation, SipLogger included, presents results as **educational estimates only** — useful for understanding the shape of alcohol metabolism, never for deciding whether it is safe to drive. For the full picture, read [how accurate BAC calculators really are](https://siplogger.app/bac-calculator-accuracy.html.md).

## Frequently Asked Questions

### Is the Widmark formula still used today?

Yes. It remains the foundation of forensic BAC estimation and toxicology teaching, applied with documented uncertainty ranges. Modern refinements like Watson TBW improve the body-composition input, but the core model is unchanged after nearly a century.

### What is the Watson Total Body Water method?

Watson's 1980 equations estimate total body water from height, weight, age, and biological sex. Because alcohol distributes into body water, deriving the distribution factor from TBW personalizes the estimate instead of using Widmark's fixed 0.68/0.55 averages.

### Why does my estimated BAC differ from a breathalyzer?

An estimate is a mathematical model of averages; a breathalyzer measures actual breath alcohol at a moment. Food, medications, individual metabolism, and logging error all move real BAC away from the model — the source of the roughly ±20% variance. Neither should be used to decide whether driving is safe.

### What elimination rate does the model assume?

A common average is 0.015% BAC per hour, with real individual rates ranging roughly 0.010–0.020%. That spread alone creates meaningful uncertainty in any estimate over a multi-hour session.

[![Download SipLogger - Educational BAC Calculator on the App Store](https://siplogger.app/images/download-on-the-app-store.svg)](https://apps.apple.com/us/app/siplogger/id6758573311)

## Related reading

- [How accurate are BAC calculators?](https://siplogger.app/bac-calculator-accuracy.html.md)
- [What is a standard drink? Sizes, ABV math, and country differences](https://siplogger.app/standard-drink.html.md)
- [SipLogger homepage](https://siplogger.app/index.html.md)

SipLogger is strictly an educational and informational tool. It does not measure actual blood alcohol content, and estimated values carry approximately ±20% variance. Never use any BAC estimate to decide whether it is safe to drive or operate machinery. Intended for adults of legal drinking age only. Rated 18+. This app does not encourage alcohol consumption.
