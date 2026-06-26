## Overview

Notion looks like a well-organized desk in good daylight. The dominant surface is not pure white but a warm, paper-soft off-white — `{colors.canvas-soft}` (#f6f5f4) — that takes the clinical edge off the screen and makes long pages feel like a document rather than an app. Type is set in `NotionInter` (a tuned Inter) in near-black `{colors.ink}` at large, tightly-tracked weights, so headlines read as confident statements with very little letter-spacing slack at display sizes (`{typography.display-1}` pulls −2.125px of tracking at 64px). The whole system whispers in greys and blacks, then says exactly one thing in colour: a single, dependable blue, `{colors.primary}` (#0075de), reserved almost entirely for the primary call-to-action and inline links.

Against that quiet chrome, Notion lets a **playful multi-colour sticker palette** carry all of the brand's personality — purple, pink, orange, teal, green and sky-blue appear as small illustrated blocks, app-icon stickers, and category dots scattered through the marketing pages. These colours never structure the layout or paint a CTA; they decorate. The discipline is deliberate: the interface stays monochrome-plus-blue so the content (and the cheerful illustrations) can breathe. The one exception to the bright daylight is the homepage hero, which inverts into a deep indigo "night" band (`{colors.secondary}`) with white type and glowing sticker constellations — a single dark island in an otherwise light document.

Surfaces are defined by hairlines and the faintest layered shadows rather than heavy elevation. Cards round at a friendly 12px (`{rounded.lg}`), the marketing CTAs are fully-pill-shaped (`{rounded.full}`), and utility buttons round at a tighter 8px (`{rounded.md}`). Nothing is loud; the brand's character comes from restraint plus one well-placed splash of joy.

**Key Characteristics:**
- Warm paper-soft canvas `{colors.canvas-soft}` over pure white, never clinical
- Near-black `{colors.ink}` `NotionInter` type with tight negative tracking at display sizes (`{typography.display-1}`)
- Exactly one structural accent — Notion blue `{colors.primary}` — reserved for CTAs and links
- A decorative-only multi-colour sticker palette that adds personality without ever painting structure
- Pill-shaped marketing CTAs (`{rounded.full}`) contrasted with 8px utility buttons (`{rounded.md}`)
- Elevation by hairline + barely-there layered shadow, not heavy drop-shadows
- A single dark indigo hero "night" band (`{colors.secondary}`) inverting the otherwise daylight page rhythm

## Colors

### Brand & Accent
- **Notion Blue** (`{colors.primary}` — #0075de): the single structural accent. Primary CTA fill, inline link colour, active-tab and focus signal.
- **Pressed Blue** (`{colors.primary-active}` — #005bab): the darker press state of the primary CTA.
- **Deep Indigo** (`{colors.secondary}` — #213183): the dark hero "night" band background.

Decorative sticker palette (illustration only, never CTAs or structural fills):
- Sticker Sky #62aef0 · Sticker Purple #d6b6f6 · Sticker Pink #ff64c8 · Sticker Orange #dd5b00 · Sticker Teal #2a9d99 · Sticker Green #1aae39

### Surface
- **White** (`{colors.surface}` — #ffffff): card and panel surfaces, nav bar, form fields.
- **Warm Paper** (`{colors.canvas-soft}` — #f6f5f4): the signature page canvas and footer band.
- **Hairline** (`{colors.hairline}` — #e6e6e6): 1px card borders and dividers.

### Text
- **Ink** (`{colors.ink}` — #000000 at ~95%): primary headings and body text.
- **Warm Charcoal** (`{colors.ink-secondary}` — #31302e): secondary body copy and footer text.
- **Stone** (`{colors.ink-muted}` — #615d59): supporting / muted copy.
- **Ash** (`{colors.ink-faint}` — #a39e98): captions, metadata, placeholder text.

## Typography

### Font Family
The entire system is set in **`NotionInter`** — Notion's tuned cut of Inter — fallback `Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial`. A single family carries everything; no serif, no monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-1}` | 64px | 700 | 1.0 | −2.125px | Hero headline |
| `{typography.display-2}` | 54px | 700 | 1.04 | −1.875px | Large section headlines |
| `{typography.heading-1}` | 40px | 700 | 1.1 | −1px | Section headlines |
| `{typography.heading-2}` | 26px | 700 | 1.23 | −0.625px | Sub-section headings |
| `{typography.heading-3}` | 22px | 700 | 1.27 | −0.25px | Card titles |
| `{typography.title}` | 20px | 600 | 1.4 | −0.125px | Feature titles, callouts |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body copy |
| `{typography.body-sm}` | 15px | 400 | 1.33 | 0 | Dense body, table rows, nav |
| `{typography.button}` | 16px | 500 | 1.5 | 0 | Button labels |
| `{typography.caption}` | 14px | 400 | 1.43 | 0 | Captions, footnotes |
| `{typography.eyebrow}` | 12px | 600 | 1.33 | +0.125px | Pill badges, small labels |

### Principles
Tight, heavy, quiet-confident: headlines lean on weight 700 and aggressive negative tracking; body stays 400 / 1.5 for readability. The contrast between heavy headline and calm body is the primary expressive lever.

## Layout

### Spacing System
Base unit 8px. Tokens: xxs 4 · xs 8 · sm 12 · md 16 · lg 24 · xl 28 · xxl 32. Card interior padding ~24px; whitespace is the primary grouping device.

### Grid & Container
Centred wide max-width column (~1080–1300px) with generous gutters; the dark hero spans full-bleed.

### Responsive Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Wide | 1440px+ | Full multi-column grids |
| Desktop | 1080–1300px | Centred container, 3-up grids |
| Tablet | 768–840px | Grids collapse to 2-up, nav condensing |
| Mobile | ≤600px | Single-column stacks, hamburger nav, full-width CTAs |

## Elevation & Depth
- **0 — Flat**: hairline border, no shadow. Default cards.
- **1 — Soft**: layered micro-shadow (`rgba(0,0,0,0.01) 0 0.175px 1.041px` … `0.04 0 4px 18px`). Raised cards, floating buttons.
- **2 — Elevated**: deeper 5-stop stack. Modals, popovers.

Barely-there elevation built from many near-transparent layers. Real depth comes from illustration, not shadow.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Form fields, small tags |
| `{rounded.sm}` | 5–6px | Menu items, list rows, status pills |
| `{rounded.md}` | 8px | Utility / nav buttons, smaller cards |
| `{rounded.lg}` | 12px | Feature cards, illustration frames |
| `{rounded.xl}` | 16px | Large containers, image wells |
| `{rounded.full}` | 9999px | Marketing pill CTAs, badges, circular icons |

## Components (summary)
- **nav-bar**: white surface, ink links at body-sm, sticky slim bar; hamburger below tablet.
- **button-primary**: Notion blue fill, white text, pill `{rounded.full}`; pressed → `{colors.primary-active}` + brief scale(0.9).
- **button-secondary**: white surface, ink text, pill, soft Level-1 shadow.
- **button-utility**: white surface, ink text, `{rounded.md}`, 1px hairline border.
- **feature-card**: white surface, rounded `{rounded.lg}`, padding 24px, hairline (flat) by default.
- **text-input**: white surface, ink text, 1px border, `{rounded.xs}` (4px); focus adds soft shadow + blue ring.
- **hero-band**: full-bleed deep indigo, white display headline; single inverted dark island.
- **badge-pill**: white surface, primary text, eyebrow type, pill.
- **footer**: warm canvas-soft band, secondary link text at caption.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` for the primary action, inline links, and the active/focus signal.
- Keep the page on warm `{colors.canvas-soft}`; use pure white `{colors.surface}` for cards/fields.
- Let the sticker palette live only in illustrations, icon tiles and category dots.
- Set headlines heavy (700) with negative tracking applied explicitly.
- Use pill `{rounded.full}` for marketing CTAs and `{rounded.md}` for nav/utility buttons.
- Define surfaces with hairline + barely-there Level-1 shadow.
- Reserve deep indigo `{colors.secondary}` for a single hero moment.

### Don't
- Don't paint a CTA or structural fill in any sticker-palette colour.
- Don't introduce a second structural accent alongside `{colors.primary}`.
- Don't put pill radii on form fields — inputs stay tight at `{rounded.xs}` (4px).
- Don't drop heavy shadows; elevation is many near-transparent layers.
- Don't set body copy in a heavy weight — keep 400 for readability.
- Don't place type on pure clinical white for full pages; the warm canvas is core to the brand calm.
