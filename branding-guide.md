# Barbie Branding Guide

A visual identity system for this project inspired by the iconic Barbie aesthetic — feminine, polished, slightly nostalgic but unmistakably modern.

---

## Color Palette

| Role | Name | Hex |
|---|---|---|
| Primary | Barbie Pink | `#E91E8C` |
| Primary Light | Bubblegum | `#F48FB1` |
| Soft Base | Petal Pink | `#FCE4EC` |
| Background | Powder White | `#FFF5F8` |
| Surface | Blush Cream | `#FFF0F3` |
| Accent | Soft Lavender | `#E1BEE7` |
| Accent Alt | Peach Glow | `#FFCCBC` |
| Text Primary | Deep Rose | `#880E4F` |
| Text Secondary | Dusty Mauve | `#AD6B7E` |
| White | Pure White | `#FFFFFF` |
| Shadow / Border | Rose Mist | `#F8BBD0` |

### Usage Notes
- Use **Barbie Pink** (`#E91E8C`) sparingly for primary actions and hero elements.
- **Powder White** and **Blush Cream** are the main page backgrounds — layer them to create depth.
- **Petal Pink** works well for cards, panels, and input backgrounds.
- **Soft Lavender** and **Peach Glow** are accent-only; use for decorative flourishes, borders, or highlights.

---

## Typography

### Font Families

| Role | Font | Style |
|---|---|---|
| Display / Hero | Playfair Display | Serif, italic optional |
| Headings | Cormorant Garamond | Elegant serif |
| Body | Lato | Clean, readable sans-serif |
| Accent / Labels | Dancing Script | Script / handwritten feel |

> Google Fonts import order: Playfair Display → Cormorant Garamond → Dancing Script → Lato

### Type Scale

| Level | Size | Weight | Font | Notes |
|---|---|---|---|---|
| Display | 3rem–4rem | 700 | Playfair Display | Hero headlines, page titles |
| H1 | 2rem | 700 | Playfair Display | Section headers |
| H2 | 1.5rem | 600 | Cormorant Garamond | Sub-section headers |
| H3 | 1.25rem | 600 | Cormorant Garamond | Card titles, callouts |
| Body | 1rem | 400 | Lato | General text |
| Small | 0.875rem | 400 | Lato | Captions, metadata |
| Label / Tag | 0.75rem–0.875rem | 600 | Dancing Script | Decorative labels, badges |

### Typographic Vibe
- Favor **italic** and **light tracking** (`letter-spacing: 0.05em`) on display text for elegance.
- Headings may use a soft `text-shadow: 1px 1px 4px rgba(233, 30, 140, 0.15)` for a dreamy glow.
- Avoid all-caps on serif fonts — use `font-variant: small-caps` as an alternative.

---

## UI Elements

### Buttons

```
Primary Button
- Background: #E91E8C (Barbie Pink)
- Text: #FFFFFF
- Border: none
- Border-radius: 50px (pill shape)
- Padding: 0.75rem 2rem
- Font: Lato 600, letter-spacing: 0.08em
- Box-shadow: 0 4px 15px rgba(233, 30, 140, 0.35)
- Hover: background #C2185B, shadow deepens

Secondary Button
- Background: transparent
- Text: #E91E8C
- Border: 2px solid #E91E8C
- Border-radius: 50px
- Hover: background #FCE4EC

Ghost / Soft Button
- Background: #FFF0F3
- Text: #AD6B7E
- Border: 1px solid #F8BBD0
- Border-radius: 50px
```

### Cards & Panels

- Background: `#FFFFFF` or `#FFF0F3`
- Border: `1px solid #F8BBD0`
- Border-radius: `16px`
- Box-shadow: `0 2px 20px rgba(233, 30, 140, 0.08)`
- Optional top accent stripe: `3px solid #E91E8C`

### Inputs & Forms

- Background: `#FFF5F8`
- Border: `1px solid #F8BBD0`
- Border-radius: `12px`
- Focus border: `2px solid #E91E8C`
- Focus box-shadow: `0 0 0 3px rgba(233, 30, 140, 0.15)`
- Placeholder text color: `#AD6B7E`

### Decorative / Textural Elements

| Element | Implementation |
|---|---|
| Lace border | CSS `border-image` or SVG lace pattern as a repeating background-image along edges |
| Ribbon accent | Horizontal `<div>` with `background: linear-gradient(135deg, #E91E8C, #F48FB1)`, `height: 4px`, optional scallop SVG ends |
| Confetti / sparkle | Small `★` or `✦` characters in `#F48FB1` or `#E1BEE7`, scattered via `::before`/`::after` pseudo-elements |
| Soft gradient bg | `background: linear-gradient(160deg, #FFF5F8 0%, #FCE4EC 60%, #E1BEE7 100%)` |
| Polka dots | CSS radial-gradient pattern: `radial-gradient(circle, #F8BBD0 1px, transparent 1px)` at `20px 20px` |
| Glassmorphism card | `background: rgba(255,255,255,0.7)`, `backdrop-filter: blur(12px)`, pink border |

### Icons & Imagery

- Prefer **outline-style icons** (e.g. Heroicons, Phosphor Icons) in `#E91E8C` or `#F48FB1`.
- Imagery should feel bright, warm, high-key lit — avoid dark or desaturated photos.
- Illustrations may use flat or pastel styles with strong pink and cream palettes.

---

## Overall Vibe

**Feminine · Polished · Slightly Nostalgic · Confidently Modern**

The aesthetic draws from the original Barbie world — glamour, optimism, and a touch of playful fantasy — filtered through a clean, contemporary design lens. Think boutique stationery brand meets 1960s dreamhouse, but built on a modern design system.

### Principles

1. **Everything is a little more beautiful here.** Rounded corners, soft shadows, gentle gradients — nothing should feel harsh or stark.
2. **Pink is not loud, it is luxurious.** Use the signature pink with intention; let white and cream do the heavy lifting so pink always feels special.
3. **Nostalgia as an accent, not a costume.** Script fonts, ribbon details, and lace textures are sprinkled in — they evoke the era without making the UI feel dated.
4. **Confidence over cuteness.** The layout should be structured and clear. Barbie is aspirational, not infantile — spacing and hierarchy should feel elevated.
5. **Delight in the details.** Hover states, transitions (`ease-in-out, 200ms`), and micro-animations should feel smooth and satisfying, like opening a gift box.

### Tone (for copy & labels)

- Warm, direct, and optimistic.
- Capitalize proper nouns playfully: "Your Collection", "Hello, Gorgeous", "Make It Yours".
- Avoid overly technical or cold language anywhere visible to the user.

---

*This guide is the source of truth for all visual decisions. When in doubt, ask: "Does this feel like stepping into Barbie's world?" If yes, ship it.*
